
(function ($) {
    $.fn.wmTab = function( tabArr ){
        var mainClass = $(this).attr('class').split(" ")[0];
        var tabList = tabArr || [];
        var tabItemHtml = '';

        writerTabItemHtml();
        function writerTabItemHtml(){  // dom 渲染
            tabItemHtml = '';
            tabList.forEach( function (item, index, arr) {
                tabItemHtml += '<div class="' + 'tab-item fl' + '"><span>' + item + '</span><div class="' + 'tab-close' + '" data="' + index + '"><div class="' + 'line line1' + '"></div><div class="' + 'line line2' + '"></div></div></div>';
            });
            $('.' + mainClass + ' .tab-view').html(tabItemHtml);
        };

        $('.' + mainClass + ' .tab-add').click(function(){  // 显示
            $('.' + mainClass + ' .tab-input').val('');
            $('.' + mainClass + ' .tab-alert').slideDown(300);
        });

        $('.' + mainClass + ' .tab-alert').click(function (){  // 隐藏
            $('.' + mainClass + ' .tab-alert').slideUp(300);
        });

        $('.' + mainClass + ' .tab-alert-view').click(function (event) {  // 弹框  禁止向上冒泡
            event.stopPropagation();
        });

        $('.' + mainClass + ' .tab-submit').click(function () {  // 提交
            var value = $(this).siblings('.tab-input').val();
            tabList.push( value );
            writerTabItemHtml();
        });

        $('.' + mainClass).on('click', '.tab-close', function () {  // 关闭
            var index = $(this).attr('data');
            tabList.splice(index, 1);
            writerTabItemHtml();
        });
    }
})(window.jQuery)
