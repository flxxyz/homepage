var $ = require("jquery")

import "./scss/main.scss"

var h = $('.nav').height();
$('#site-info').css({height: h}).append($('#site-info>span').first().clone());
var tid = info_resize(h);

var col = $('.row:nth-child(1)>div').length;
var row = $('.row').length;

resize(col, row);
$(window).resize(function () {
    h = $('.nav').height();
    resize(col, row);
    clearInterval(tid);
    tid = info_resize(h);
})


function screen() {
    return {
        width: $('body').width(),
        height: $('body').height(),
    }
}

function like_resize() {
    var s = $('.like-count')
    var r = s.width() / 2
    s.css({marginLeft: -r})
}

function info_resize(height, time) {
    time = (!time) ? 2000 : (time * 1000)

    var t = 0;
    var f = 0
    var span = $('#site-info>span')
    span.each(function (i, e) {
        f += $(e).height()
    })

    return setInterval(function () {
        span.each(function (i, e) {
            if (t >= (f)) {
                t = 0
                span.each(function (i, e) {
                    $(e).css({top: t})
                })
                t += height
            }
            $(e).animate({top: -t})
        })
        t += height
    }, time)
}

function bg_resize() {
    var options = {
        width: '100%',
        height: '100%',
        left: '0'
    }
    var s = screen()
    console.log((s.width / s.height).toFixed(5));

    // 差不多手机竖屏的样子
    if ((s.width / s.height).toFixed(5) < 1.77777) {
        options.width = 'unset'
        // options.left = '-50%'
        $('#bg').css(options)
    }
    // pc与手机横屏
    if ((s.width / s.height).toFixed(5) > 1.77777) {
        options.height = 'unset'
        $('#bg').css(options)
    }
    // 最佳屏幕比
    if ((s.width / s.height).toFixed(5) == 1.77777) {
        $('#bg').css(options)
    }
}

function row_item_resize() {
    var items = $('.row>div>div')
    items.each(function (i, e) {
        var r = $(e).width() / 2
        var options = {
            left: '-50%',
            // width: '100%',
        }

        $(e).css(options)
    })
}

function resize(col, row) {
    var s = screen()

    $('.row > div').each(function (i, e) {
        var body = $('body').width()

        if (body <= 1024) {
            col = 2
            row = 4
        }

        var row_width = ((s.width - (col * 2)) / col) + 'px'
        var row_height = (((s.height) - (row * 2)) / row) + 'px'
        var options = {
            width: row_width,
            height: row_height,
            lineHeight: row_height,
            textAlign: 'center',
            color: '#fff',
        }

        if (body > 1024) {
            //$(e).attr('style', '-webkit-writing-mode:unset')
            options.fontSize = '1.65em'
            options.color = '#d7000f'
        } else if (body > 768) {
            options.fontSize = '2em'
        } else if (body > 375) {
            options.fontSize = '.8em'
        } else {
            options.fontSize = '.75em'
        }

        if (body > 1024) {
            $('#i').hide()
            $('#v').show()
        } else {
            $('#i').show()
            $('#v').hide()
        }

        $(e).css(options)
    })

    row_item_resize() // 调整item
    bg_resize() // 调整背景
    like_resize()

    // do you like me?
}

function urlEncode(param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr
}

var query = urlEncode(data).substring(1)
console.log(query)
$.getJSON('https://like.toyou.ren/get?' + query, setLike)

$('.like-vote').click(function () {
    $.post('https://like.toyou.ren/add', data, function (data) {
        setLike(data)
        var e = $('.like-title')
        if (e.text() === 'Do you like me?')
            e.text('爱你哟(･ω<)☆')
        else if (e.text() === '爱你哟(･ω<)☆')
            e.text('我不搞基的( ꒪⌓꒪)')
    })
})

function setLike(data) {
    $('#count').text(data.count)
}

