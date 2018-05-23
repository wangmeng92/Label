
(function ($) {
    $.fn.wmLabel = function( tabArr ){
        var mainClass = $(this).attr('class').split(" ")[0];
        var tabList = tabArr || [];
        var tabItemHtml = '';

        writerLabelItemHtml();
        function writerLabelItemHtml(){  // dom 渲染
            tabItemHtml = '';
            tabList.forEach( function (item, index, arr) {
                tabItemHtml += '<div class="' + 'wm-label-item fl' + '"><span>' + item + '</span><div class="' + 'wm-label-close' + '" data="' + index + '"><div class="' + 'line line1' + '"></div><div class="' + 'line line2' + '"></div></div></div>';
            });
            $('.' + mainClass + ' .wm-label-view').html(tabItemHtml);
        };

        $('.' + mainClass + ' .wm-label-add').click(function(){  // 显示
            $('.' + mainClass + ' .wm-label-input').val('');
            $('.' + mainClass + ' .wm-label-alert').slideDown(300);
        });

        $('.' + mainClass + ' .wm-label-alert').click(function (){  // 隐藏
            $('.' + mainClass + ' .wm-label-alert').slideUp(300);
        });

        $('.' + mainClass + ' .wm-label-alert-view').click(function (event) {  // 弹框  禁止向上冒泡
            event.stopPropagation();
        });

        $('.' + mainClass + ' .wm-label-submit').click(function () {  // 提交
            var value = $(this).siblings('.wm-label-input').val();
            tabList.push( value );
            writerLabelItemHtml();
        });

        $('.' + mainClass).on('click', '.wm-label-close', function () {  // 关闭
            var index = $(this).attr('data');
            tabList.splice(index, 1);
            writerLabelItemHtml();
        });
    }
})(window.jQuery)
