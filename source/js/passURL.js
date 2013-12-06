/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 03/12/13
 * Time: 11:15
 * To change this template use File | Settings | File Templates.
 */

function getQueryVars(URL){
    currentPath = location.pathname;
    var moduleLanguage = $("article").attr("lang");

    if( currentPath == URL){
        name = decodeURIComponent($.urlParam('name'));

        if (name == "null" || name == "" || name === "undefined" || name == 0){
            name = checkModuleLanguage(moduleLanguage);

            $('#user_name').text(name);
        }else{
            $('#user_name').text(name);
        }

    }
}

function checkModuleLanguage(moduleLanguage){
    switch(moduleLanguage){
        case "en":
            return "friend"
            break;
        case "it":
            return "amico"
            break;
    }
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
