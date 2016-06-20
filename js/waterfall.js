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
        demo_link: 'https://qiyuansheji.github.io/2015/10/11/nanjiangyinxiang/',
        img_link: '/css/pics/nanjiangyinxiang/2.jpg',
        code_link: 'https://qiyuansheji.github.io/2015/10/11/nanjiangyinxiang/',
        title: '南江印象时尚餐厅',
        core_tech: 'VI LOGO 招牌 菜谱',
        description: '南江印象时尚餐厅是一家以川菜、湘菜为主的餐厅，2015年开业，LOGO借用了苏州印象的设计，时尚鲜明；招牌采用PVC发光字，跑马灯亮化。'
    },{
        demo_link: 'https://qiyuansheji.github.io/2015/08/15/fulong/',
        img_link: '/css/pics/fulong06.jpg',
        code_link: 'https://qiyuansheji.github.io/2015/08/15/fulong/',
        title: '福隆酒店菜谱设计',
        core_tech: '杂志式菜谱 PS Coreldraw',
        description: '福隆酒店菜谱考虑成本原因，采用杂志册页式设计，内页40P，250g铜版纸覆膜胶装，封面300g铜版纸亮膜。福隆酒店菜谱已制作设计两批。'
    }

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
