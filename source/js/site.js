//= require "vendor/jquery"
//= require "subscribe"
//= require "vendor/jquery.easing.min"
//= require "vendor/jquery.fadeloader"
//= require "vendor/jquery.isotope.min"
//=require "passURL"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    overlay("a.map");
    getQueryVars("http://0.0.0.0:4567/events/2013/thank-you-ixdt1113.html");
    getQueryVars("http://0.0.0.0:4567/workshops/2013/thank-you-workshop1213.html");
    ajaxform_subscribe("#signup-form-wp1213","#status-wp1213");
    ajaxform_subscribe("#signup-form-ixdt1113","#status-ixdt1113");

    $('#container').fadeloader({mode: "children",preloadImg: '/loading.gif',
        preloadWidth: 36,
        preloadHeight: 36,
        displayType: "inline"});
});



function overlay(element){
    $(element).hover(function(){
        $(this).find(".overlay").fadeOut(400);
    }, function() {
        $(this).find(".overlay").fadeIn(400);
    });

}

/*$('#header').click(function(){
    $('#header').toggleClass('flip');
});*/

