# 谷歌翻译一键增强-智能去除换行、论文翻译优化
本插件用于增强谷歌翻译学术论文的使用体验，助力科研。新特性持续实现中，如果功能需求欢迎提交[Issue](https://github.com/yinwaii/academic-google-translate/issues)或[反馈](https://greasyfork.org/zh-CN/scripts/494878-%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E8%87%AA%E5%8A%A8%E5%8E%BB%E9%99%A4%E6%8D%A2%E8%A1%8C/feedback)。

使用方式：安装即生效

主要功能：
1. 智能检测pdf复制文本时产生的换行符，同时保留段落形状(避免变成一段)。
2. 在翻译arxiv网页版论文(ar5iv)时，避免排版混乱，避免翻译作者、图表、引用、参考文献等。
## 智能去除换行
在复制pdf文本时，经常会出现换行符，导致翻译质量下降、可读性降低，本插件智能检测pdf复制文本时产生的换行符，同时保留段落形状(避免变成一段)，最终可达到近似原文档的效果。

### 优化效果
优化前：<img src="https://github.com/yinwaii/academic-google-translate/blob/main/imgs/translate-raw.png?raw=true" alt="无优化" width="40%" />
优化后：<img src="https://github.com/yinwaii/academic-google-translate/blob/main/imgs/translate-new.png?raw=true" alt="优化后" width="40%" />

## 论文一键翻译优化
在翻译arxiv网页版论文(ar5iv)时，本插件可以避免排版混乱，避免翻译作者、图表、引用、参考文献等。

### 如何使用arxiv浏览网页版论文

#### 方法一
1. 使用arxiv访问所需论文，直接点击标题后链接即可

 <img src="https://github.com/yinwaii/academic-google-translate/blob/main/imgs/arxiv-button.png?raw=true" alt="arxiv标题后出现链接" width="30%" />

#### 方法二
1. 使用arxiv查找所需论文，如 https://arxiv.org/abs/2106.00001
2. 将地址栏的`arxiv`改为`ar5iv`，如 https://ar5iv.org/abs/2106.00001 ，访问该网页
3. 使用谷歌翻译插件翻译该网页

### 优化效果
优化前：<img src="https://github.com/yinwaii/academic-google-translate/blob/main/imgs/arxiv-raw.png?raw=true" alt="无优化" width="40%" />
优化后：<img src="https://github.com/yinwaii/academic-google-translate/blob/main/imgs/arxiv-new.png?raw=true" alt="优化后" width="40%" />

## 更新日志
- 2024-05-31: 发布v1.0版本，实现arxiv论文翻译优化，编写说明文档，提升易用性
- 2024-05-18: 发布v0.2版本，实现智能去除换行

## 致谢

1. 去除换行功能参考了[谷歌翻译辅助](https://greasyfork.org/zh-CN/scripts/374814-%E8%B0%B7%E6%AD%8C%E7%BF%BB%E8%AF%91%E8%BE%85%E5%8A%A9)的实现，感谢hustcc的开源。
2. 谷歌翻译忽略部分模块参考了[	
谷歌翻译忽略代码块和指定元素](https://greasyfork.org/zh-CN/scripts/429599)的思路，感谢汪荣顶的代码。