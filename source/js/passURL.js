/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 03/12/13
 * Time: 11:15
 * To change this template use File | Settings | File Templates.
 */

function getQueryVars(URL){
    currentPath = getPathFromUrl(window.location.href);
    if( currentPath == URL){
        name = decodeURIComponent($.urlParam('name'));

        if (name == "null" || name == "" || name === "undefined" || name == 0){
            $('#user_name').text("friend");
        }else{
            $('#user_name').text(name);
        }

    }
}

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
