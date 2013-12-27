//= require "jquery/jquery.min"
//= require "subscribe"
//= require "jquery.easing/js/jquery.easing.min"

//= require "jquery.scrollTo/jquery.scrollTo.min"
//= require "jquery.videoBG/jquery.videoBG"
//= require "passURL"
//= require "eventEmitter/EventEmitter"
//= require "eventie/eventie"
//= require "doc-ready/doc-ready"
//= require "get-style-property/get-style-property"
//= require "get-size/get-size"
//= require "jquery-bridget/jquery.bridget"
//= require "matches-selector/matches-selector"
//= require "outlayer/item"
//= require "outlayer/outlayer"
//= require "masonry/masonry"
//= require "imagesloaded/imagesloaded"
/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */
$('#container').imagesLoaded( function() {
    var $container = $('#masonry');
    $container.masonry({
        columnWidth: ".grid-sizer",
        itemSelector: '.item',
        gutter: ".gutter-sizer"
    });

});

$(document).ready(function(){



    overlay("a.map");
    getQueryVars("/events/2013/thank-you-ixdt1113.html");
    getQueryVars("/workshops/2013/thank-you-workshop1213.html");
    getQueryVars("/projects/2013/thank-you-fabrica1213.html");
    ajaxform_subscribe("#signup-form-fb1213","#status-fb1213");
    ajaxform_subscribe("#signup-form-wp1213","#status-wp1213");
    ajaxform_subscribe("#signup-form-ixdt1113","#status-ixdt1113");
    $('#video').videoBG({
        mp4:'/js/videos/background_07052013.mp4',
        webm:'/js/videos/background_07052013.webm',
        ogv:'/js/videos/background_07052013.ogv',
        poster:'/js/videos/fabrica_video.jpg',

        width: "100%",
        position: "relative",
        scale:true,
        loop: true,
        zIndex:-1
    });
/*    $('#masonry').fadeloader({

        mode: "children",
        preloadImg: '/loading.gif',
        preloadWidth: 36,
        preloadHeight: 36,
        displayType: 'inline',
        onComplete: "scroll()"
    });*/



});
function check_hash(){
    if (window.location.hash) {
        var params = (window.location.hash.substr(1)).split("&");

        for (i = 0; i < params.length; i++)
        {
            var a = params[i].split("=");
            var elem = $( window.location.hash.replace('#_', '#'));
            $.scrollTo(elem,400);
        }
    }
}

function scroll(){
   check_hash();

}
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

