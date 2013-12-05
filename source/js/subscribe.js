/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 22/11/13
 * Time: 09:49
 * To change this template use File | Settings | File Templates.
 */
function ajaxform_subscribe(formSubmit,status){
    $(formSubmit).submit(function(e){
        e.preventDefault();
        var $form = $(this),
            name = $form.find('input[name="name"]').val(),
            email = $form.find('input[name="email"]').val(),
            list = $form.find('input[name="list"]').val(),
            element = $form.find('input[name="element"]').val(),
            language = $form.find('input[name="language"]').val(),
            success = $form.find('input[name="success"]').val(),
            url = $form.attr('action');
        var $status = $(status);
        var success_path = success+"?"+check_name(name,language)+check_element(element);



        if (name == "null" || name == "" || name === "undefined" || name == 0)
        {
            $status.text("Please fill in your name.");
            $status.css("color", "red");
        }else{
            $.post(url, {name:name, email:email, list:list, boolean:true,language:language},
                function(data) {
                    if(data)
                    {
                        if(data=="Some fields are missing.")
                        {
                            $status.text("Please fill in your name and email.");
                            $status.css("color", "red");
                        }
                        else if(data=="Invalid email address.")
                        {
                            $status.text("Your email address is invalid.");
                            $status.css("color", "red");
                        }
                        else if(data=="Invalid list ID.")
                        {
                            $status.text("Your list ID is invalid.");
                            $status.css("color", "red");
                        }
                        else if(data=="Already subscribed.")
                        {
                            $status.text("You're already subscribed!");
                            $status.css("color", "red");
                        }
                        else
                        {
                            //todo fixare colori feedback
                            $status.text("You're subscribed!");
                            $status.css("color", "green");
                            window.location.href = success_path;
                        }
                    }
                    else
                    {
                        alert("Sorry, unable to subscribe. Please try again later!");
                    }
                }
            );
        }

        $form.keypress(function(e) {
            if(e.keyCode == 13) {
                e.preventDefault();
                $(this).submit();
            }
        });
        $(formSubmit).click(function(e){
            e.preventDefault();
            $form.submit();
        });

    });

}

function check_language(language){
    switch(language){
        case "en":
            return "name=friend"
            break;
        case "it":
            return "name=amico"
            break;
    }
}

function check_name(name,language){
    if(name == ""){
        return check_language(language);
    }else{
        query= encodeURI("name="+name);
        return query;
    }
}
function check_element(element){
    if(element != ""){
        return element;
    }else{
        return ""
    }
}