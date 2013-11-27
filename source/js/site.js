//= require "vendor/jquery"
//= require "vendor/jquery.unveil.min"
//= require "vendor/jquery.isotope.min"
//= require "subscribe"
//= require "vendor/jquery.easing.min"
//= require "vendor/jquery.fadeloader"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    ajaxform_subscribe();
    overlay("a.map");
    $('#container').fadeloader({mode: "children",preloadImg: '/loading.gif',
        preloadWidth: 36,
        preloadHeight: 36,
        displayType: "inline"});
//    $('.speakerdeck-iframe').css({'width':'100%', 'height': '80px'});
});


function overlay(element){
    $(element).hover(function(){
        $(this).find(".overlay").fadeIn(400);
    }, function() {
        $(this).find(".overlay").fadeOut(400);
    });

}

/*$('#header').click(function(){
    $('#header').toggleClass('flip');
});*/
