---
layout: post
title: "한번 따라해봐...."
description: "Custom written post descriptions are the way to go... if you're not lazy."
tags: [gunc, video]
comments: true
share: true
---

<iframe width="560" height="315" src="//https://www.youtube.com/watch?v=DLJs0wc1tpY" frameborder="0"> </iframe>

Video embeds are responsive and scale with the width of the main content block with the help of [FitVids](http://fitvidsjs.com/).

Not sure if this only effects Kramdown or if it's an issue with Markdown in general. But adding YouTube video embeds causes errors when building your Jekyll site. To fix add a space between the `<iframe>` tags and remove `allowfullscreen`. Example below:
<p> 헬스장에 왜 이렇게 사람이 많은거야 .... 덥고 짜증나고  </p>
<p> 오늘은 어깨 운동 하는 날인데 ... 유투브에 나를 무기력하게 만드는 동영상들만 올라오고 ㅋㅋ  </p>
<p> 아자 아자 화이팅 !!  </p>
<p> 세상에는 엄청난 사람들이 많구나 .... </p>

{% highlight html %}
<iframe width="560" height="315" src="//www.youtube.com/embed/SU3kYxJmWuQ" frameborder="0"> </iframe>
{% endhighlight %}

