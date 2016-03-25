/**
 * Created by KingSun on 2016/03/22.
 */

<!-- 多说公共JS代码 start (一个网页只需插入一次) -->

var duoshuoQuery = {short_name: "kingsun"};
(function () {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0]
    || document.getElementsByTagName('body')[0]).appendChild(ds);
})();

<!-- 多说公共JS代码 end -->

$(window).load(function () {
    $("#flexiselDemo1").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });

});

$(function () {
    $('#ab1').addClass('wow bounceInLeft');
    $('#ab2').addClass('wow bounceInLeft');
    $('#ab3').addClass('wow bounceInLeft');
    $('#ab4').addClass('wow bounceInLeft');
    setTimeout(function () {
        $('#ab1').removeClass('animated wow bounceInLeft');
        $('#ab2').removeClass('animated wow bounceInLeft');
        $('#ab3').removeClass('animated wow bounceInLeft');
        $('#ab4').removeClass('animated wow bounceInLeft');
        $(function () {
            $('#ab1').addClass('a');
            $('#ab2').addClass('a');
            $('#ab3').addClass('a');
            $('#ab4').addClass('a');
        });
    }, 2000);

});
$(function(){
   $()
});
