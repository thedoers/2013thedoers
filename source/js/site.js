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
    currentPath = getPathFromUrl(window.location.href);

    if( currentPath == "http://0.0.0.0:4567/events/2013/thank-you-ixdt1113.html"){
        name = decodeURIComponent($.urlParam('name'));

        if (name == "null" || name == "" || name === "undefined" || name == 0){
            $('#user_name').text("friend");
        }else{
            $('#user_name').text(name);
        }

    }
    $('#container').fadeloader({mode: "children",preloadImg: '/loading.gif',
        preloadWidth: 36,
        preloadHeight: 36,
        displayType: "inline"});
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
function getPathFromUrl(url) {
    return url.split("?")[0];
}
$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}
