---
layout: post
category : "经验"
tagline: ""
tags : [Jekyll,Pygments]
---
{% include JB/setup %}

### 在 Jekyll 的配置文件 *_config.yml* 中设置打开 *Pygments*

```ruby
pygments: true
mardown: redcarpet
```

* 注意：新版本 Jekyll中，`pygments: true` 替换为 `highlighter: pygments`。


### 语法高亮的代码片段要放在标签对

{% raw %}`{% highlight language %}`{% endraw %} 和 {% raw %}`{% endhighlight %}`{% endraw %} 之间，
其中的 [language](http://pygments.org/docs/lexers/) 为多种语言高亮页面中的 Short names。

也可以采用这样的写法

{% highlight text %}
{% raw %}
```c
/* hello world demo */
#include <stdio.h>
int main(int argc, char **argv){
    printf("Hello, World!\n");
    return 0;
}
```
{% endraw %}
{% endhighlight %}

生成的 html 高亮结果

```c
/* hello world demo */
#include <stdio.h>
int main(int argc, char **argv)
{
    printf("Hello, World!\n");
    return 0;
}
```



### 对于这种写法 `{% raw %}```c{% endraw %}` 需要配置文件

```ruby
markdown: redcarpet
```


### 参考：
* [安装及其其它](http://havee.me/internet/2013-08/support-pygments-in-jekyll.html)
