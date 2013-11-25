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
    $('#container').fadeloader({mode: "children",preloadImg: 'loading.gif',
        preloadWidth: 36,
        preloadHeight: 36});
});

/*$('#header').click(function(){
    $('#header').toggleClass('flip');
});*/
