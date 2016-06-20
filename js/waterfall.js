/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 内容JSON
     */
    var demoContent = [{
        demo_link: 'http://www.chilee.xyz/',
        img_link: '/css/pics/chilee.jpg',
        code_link: 'http://www.chilee.xyz/',
        title: '致乐网络工作室',
        core_tech: 'JavaScript CSS',
        description: '致乐网络工作室专业从事网络建站，域名空间服务，并提供产品设计，宣传视频制作，网页视频主播…<a href="http://www.chilee.xyz/">致乐网络</a>  A Better Website.如有意向您可以联系我们，或者先了解我们的项目经验。'
    },

    ];

    contentInit(demoContent) //内容初始化
    waitImgsLoad() //等待图片加载，并执行布局初始化
}());



/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    var htmlArr = [];
    for (var i = 0; i < content.length; i++) {
        htmlArr.push('<div class="grid-item">')
        htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
        htmlArr.push('<img src="'+content[i].img_link+'">')
        htmlArr.push('</a>')
        htmlArr.push('<h3 class="demo-title">')
        htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
        htmlArr.push('</h3>')
        htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
        htmlArr.push('<p>'+content[i].description)
        htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
        htmlArr.push('</p>')
        htmlArr.push('</div>')
    }
    var htmlStr = htmlArr.join('')
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
    //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}
