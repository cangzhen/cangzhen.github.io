---
layout: post
category : "前端开发"
tagline: ""
tags : ["前端开发",html]
---
{% include JB/setup %}
```html
<fieldset>
    <legend>信箱帳號</legend>
    <p><label>姓名：<input type="text" name="fullname" placeholder="John Ratzenberger"></label></p>
    <p><label>信箱：<input type="email" name="address" placeholder="john@example.net"></label></p>
    <p><label>密碼：<input type="password" name="password" placeholder="john@example.net"></label></p>
    <p><label>描述：<input type="text" name="desc" placeholder="我的信箱帳號"></label></p>
</fieldset>
```

### 下面例子展示

------
<fieldset>
    <legend>信箱帳號</legend>
    <p><label>姓名：<input type="text" name="fullname" placeholder="John Ratzenberger"></label></p>
    <p><label>信箱：<input type="email" name="address" placeholder="john@example.net"></label></p>
    <p><label>密碼：<input type="password" name="password" placeholder="john@example.net"></label></p>
    <p><label>描述：<input type="text" name="desc" placeholder="我的信箱帳號"></label></p>
</fieldset>
------


<style>
fieldset {
    padding: 0;
    margin: 0;
    border: 1px solid #333;
    -webkit-padding-before: 0.35em;
    -webkit-padding-start: 0.75em;
    -webkit-padding-end: 0.75em;
    -webkit-padding-after: 0.625em;
}
legend {
    width:auto;
    border-bottom:0;
    margin-bottom: 0;
}
</style>