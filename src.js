// ==UserScript==
// @name         谷歌翻译一键增强-智能去除换行、论文翻译优化
// @version      0.3
// @license      MIT
// @description  ① 智能检测pdf复制文本时产生的换行符，同时保留段落形状(避免变成一段)。② 在翻译arxiv网页版论文(ar5iv)时，避免排版混乱，避免翻译作者、图表、引用、参考文献等。
// @author       yinwaii
// @homeurl      https://github.com/yinwaii/academic-google-translate/
// @homeurl      https://greasyfork.org/zh-CN/scripts/494878
// @match        *://translate.google.com/*
// @match        *://translate.google.cn/*
// @match        *://ar5iv.labs.arxiv.org/*
// @match        *://*.ar5iv.*/*
// @match        *://arxiv.org/*
// @match        *://*.translate.goog/*
// @connect      translate.google.com
// @grant        unsafeWindow
// @namespace    http://tampermonkey.net/
// @downloadURL  https://update.greasyfork.org/scripts/494878/%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E8%87%AA%E5%8A%A8%E5%8E%BB%E9%99%A4%E6%8D%A2%E8%A1%8C.user.js
// @updateURL    https://update.greasyfork.org/scripts/494878/%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E8%87%AA%E5%8A%A8%E5%8E%BB%E9%99%A4%E6%8D%A2%E8%A1%8C.meta.js
// ==/UserScript==

(function () {
	'use strict';
	function preprocess_translate() {
		function loop() {
			const ele = document.querySelector("textarea");
			if (ele) {
				let t = ele.value;
				if (t) {
					let r = t.replace(/([^\.])\n/g, "$1 ").replace(/\x02/g, "");
					if (r !== t) {
						console.log(r);
						ele.value = r;
						let inputEvent = new Event('input', { bubbles: true });
						ele.dispatchEvent(inputEvent);
					}
				}
			}
		}
		setInterval(() => { loop(); }, 1000);
	}
	function preprocess_ar5iv() {
		const ar5ivSelector = [
			'pre',
			'.ltx_Math, .ltx_equationgroup, .ltx_equation',
			'.ltx_cite',
			'.ltx_ref',
			'.ltx_title',
			'.ltx_bibliography',
			'.ltx_math_unparsed',
			'.ltx_note_mark',
			'.ltx_authors',
			'.ltx_tabular',
			'.ltx_figure :not(figcaption)',
			'.ltx_picture :not(figcaption)',
			'.ltx_table :not(figcaption)',
			'.ltx_flex_cell :not(figcaption)',
			'semantics',
			'.ltx_algorithm',
			'.ltx_text.ltx_font_bold',
			//'.ltx_text.ltx_font_italic',
			//'.ltx_flex_figure, .ltx_graphics, .ltx_img_square',
		];
		function addNoTranslateAttr(array) {
			array.forEach((name) => {
				[...document.querySelectorAll(name)].forEach((node) => {
					if (node.className.indexOf("notranslate") === -1) {
						node.classList.add("notranslate");
					}
				});
			});
			console.log(document.querySelectorAll('.notranslate'));
		}
		addNoTranslateAttr(ar5ivSelector);
	}
	function detect_flush() {
		window.addEventListener('message', e => {
			if (e.data === 'flush') {
				setTimeout(function () {
					document.getElementById('sl').click();
					setTimeout(function () {
						document.getElementById('tl').click();
					}, 500);
				}, 500);
			}
		});
	}
	if (window.location.hostname.indexOf("translate.google") !== -1) {
		preprocess_translate();
		if (window.location.search.indexOf("parent") !== -1)
			detect_flush();
	}

	if (window.location.hostname.indexOf("ar5iv") !== -1) {
		window.onload = () => {
			setTimeout(function () {
				preprocess_ar5iv();
				if (window.location.hostname.indexOf("translate.goog") !== -1)
					window.frames[0].postMessage('flush', '*');
			}, 100);
		};
	}

	if (window.location.hostname.indexOf("arxiv") !== -1) {
		window.onload = () => {
			let el = document.querySelector('.title');
			console.log(el);
			el.innerHTML += ` &nbsp;<a href="https://translate.google.com/translate?sl=auto&tl=zh-CN&u=https://ar5iv.org${window.location.pathname}">查看翻译</a>`;
			console.log(el);
		}
	}

})();