(function (){
    if(window._fontsize_initaled){
        return;
    }
    window._fontsize_initaled = true;
    var handlerOrientationChange = function(){
        var docEl = document.documentElement;
        var width = Math.min(750,Math.max(320,docEl.clientWidth));
        docEl.style.fontSize = 100 * (width / 750) + 'px';
    };
    window.addEventListener('resize', handlerOrientationChange, false);
    handlerOrientationChange();//todo 低版本android 可能有bug(dom尚未加载完成)
    //document.addEventListener('DOMContentLoaded', handlerOrientationChange, false);
})();