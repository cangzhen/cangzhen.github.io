---
layout: post
category : "前端开发"
tagline: ""
tags : [filter,firefox,html,css]
---
{% include JB/setup %}

css firefox 设置图片灰度方法

```html
<svg xmlns="http://www.w3.org/2000/svg" id="img3" viewBox="0 0 66 84">
<filter id="grayscale">
<feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0
                   0.2126 0.7152 0.0722 0 0
                   0.2126 0.7152 0.0722 0 0
                   0 0 0 1 0"></feColorMatrix>
</filter>
<image xlink:href="http://www.baidu.com/img/bd_logo.png" filter="url(#grayscale)" width="66px" height="84px"></image>
</svg>
```

```html
filter: grayscale(100%)
```

这个 `filter` 方法在firefox 里面没有效果  即使加上 `-moz` 也没有效果

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
