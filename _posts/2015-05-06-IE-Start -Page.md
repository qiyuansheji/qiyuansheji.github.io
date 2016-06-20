---
layout: post
title:  "IE主页篡改修复"
date:   2015-05-06 14:14:15
categories: Web
excerpt: IE主页篡改修复
---

* content
{:toc}

##IE图标修复

按住Shift右击任务栏的IE图标，看见目标最后面的网址了吗？，删除吧，只需这简单的一步，主页便可自由更改。

![IE图标修复](/css/pics/ie1.png "IE图标修复")

Google Chrome 如果主页被篡改，修改方式一样。

##文件清理

删除C:\Windows 下异常目录  如HEUKMSACTIVITOR。

##注册表清理

删除下面这两处的Start Page键值。

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main]

[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\Main]

---