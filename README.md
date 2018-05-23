# Label
自定义标签插件、可删除、可添加

<!--<div class="initClass tab-box clearfix">
    <div class="tab-view fl clearfix"> </div>
    <div class="tab-add fl">
        <div class="line line1"></div>
        <div class="line line2"></div>
    </div>
    <div class="tab-alert">
        <div class="tab-alert-view clearfix">
            <input class="tab-input fl" type="text" value="" placeholder="请输入标签名">
            <input class="tab-submit fl" type="submit" value="确定">
        </div>
    </div>
</div>-->

PS：
initClass 自定义类名

<script>
    var arr = ['标签一', '标签二'];
    $('.initClass').wmTab( arr );
</script>

PS：
插件调用时参数可传可不传
eg：
$('.initClass').wmTab(  );
