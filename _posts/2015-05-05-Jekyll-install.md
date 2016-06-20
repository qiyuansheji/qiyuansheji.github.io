---
layout: post
title:  "Windows 8 Jekyll安装"
date:   2015-05-05 14:14:15
categories: Jekyll
excerpt: Windows 8 Jekyll安装
---

* content
{:toc}

[**Jekyll**](http://jekyll.bootcss.com/)是一个静态Blog网站生成工具。它允许用户使用HTML、Markdown或Textile来建立静态页面，然后通过模板引擎Liquid（Liquid Templating Engine）来运行。

## 安装 Python
1.前往[Python Download](http://www.python.org/download/)
2.下载合适的 Python windows 安装包，如 Python 2.7.10 Windows Installer，最好Python 2。
3.安装，添加安装路径 (如： C:\Python27) 至 PATH（安装的时候有选择添加安装路径等选项，可全选。）。
4.检验 Python 安装是否成功

    python –V

输出示例：

    Python 2.7.10

## 安装 Ruby ##
1.前往 [Ruby download]( http://rubyinstaller.org/downloads/)
2.在 “RubyInstallers” 部分，选择最新的与系统配套的版本下载。
3.通过安装包安装
勾选 “**Add Ruby executables to your PATH**”，这样执行程序会被自动添加至 PATH 而避免不必要的头疼。(三个选项可全选)
 
4.打开一个命令提示行并输入以下命令来检测 Ruby 是否成功安装。

    ruby -v

输出示例：

    ruby 2.2.2p95 (2015-04-13) [x64-mingw32]

## 安装 DevKit ##
DevKit 是一个在 Windows 上帮助简化安装及使用 Ruby C/C++ 扩展如 RDiscount 和 RedCloth 的工具箱。 

1.再次前往 [Ruby DevKi Download](http://rubyinstaller.org/downloads/)
2.下载同系统及 Ruby 版本相对应的 DevKit 安装包。 例如，DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe 适用于64位 Windows 系统上的 Ruby 2.2.2 x64。
3.运行安装包并解压缩至某文件夹，如 H:\DevKit
4.通过初始化来创建 config.yml 文件。在命令行窗口内，输入下列命令：

    cd “H:\DevKit”
    ruby dk.rb init
    notepad config.yml

5.在打开的记事本窗口中，于末尾添加新的一行 “**- H:\ Ruby22-x64**”，保存文件并退出。（可能已添加）
6.回到命令行窗口内，审查（非必须）并安装。

    ruby dk.rb review
    ruby dk.rb install

## 安装 Jekyll ##
1.确保 gem 已经正确安装

    gem -v

输出示例：

     2.4.15

2.安装 Jekyll

    gem install jekyll

## 安装 Pygments ##
Jekyll 里默认的语法高亮插件是 Pygments。 它需要安装 Python 并在网站的配置文件_config.yml 里将 highlighter 的值设置为pygments。(我安装的时候无法安装)
不久之前，Jekyll 还添加另一个高亮引擎名为 Rouge， 尽管暂时不如 Pygments 支持那么多的语言，但它是原生 Ruby 程序，而不需要使用 Python。（可能无法安装）。
### 安装 ‘Easy Install’ 

1.	浏览 [python](https://pypi.python.org/pypi/setuptools#installation-instructions) 来查看详细的安装指南。

2.对于 Windows 8 的机器，下载 ez_setup.py 并保存，例如，至H:\ devkit\。 然后从命令行使用 Python 运行此文件：

    python “H:\ devkit\ez_setup.py”

### 安装 Pygments
1.确保 easy_install 已经正确安装   
    
    easy_install --version

输出示例：

    setuptools 3.1 

2.使用 “easy_install” 来安装 Pygments

    easy_install Pygments

## 启动 Jekyll ##
按照官方的 Jekyll 快速开始手册 的步骤， 一个新的 Jekyll 博客可以被建立并在localhost:4000浏览。
    
    jekyll new myblog   
    cd myblog
    jekyll serve