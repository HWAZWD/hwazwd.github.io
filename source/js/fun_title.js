var OriginTitle = document.title
var titleTime
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico")
        document.title = '╭(°A°`)╮快回来~'
        clearTimeout(titleTime)
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico")
        document.title = '(ฅ>ω<*ฅ)~'
        titleTime = setTimeout(function () {
            document.title = OriginTitle
        }, 2000)
    }
});