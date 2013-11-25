/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 22/11/13
 * Time: 09:49
 * To change this template use File | Settings | File Templates.
 */
function ajaxform_subscribe(){
    $("#signup-form").submit(function(e){
        e.preventDefault();

        var $form = $(this),
            name = $form.find('input[name="name"]').val(),
            email = $form.find('input[name="email"]').val(),
            list = $form.find('input[name="list"]').val(),
            success = $form.find('input[name="success"]').val(),
            url = $form.attr('action');

        $.post(url, {name:name, email:email, list:list, boolean:true},
            function(data) {
                if(data)
                {
                    if(data=="Some fields are missing.")
                    {
                        $("#status").text("Please fill in your name and email.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid email address.")
                    {
                        $("#status").text("Your email address is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Invalid list ID.")
                    {
                        $("#status").text("Your list ID is invalid.");
                        $("#status").css("color", "red");
                    }
                    else if(data=="Already subscribed.")
                    {
                        $("#status").text("You're already subscribed!");
                        $("#status").css("color", "red");
                    }
                    else
                    {
                        //todo fixare colori feedback
                        $("#status").text("You're subscribed!");
                        $("#status").css("color", "green");
                        window.location.href = success;
                    }
                }
                else
                {
                    alert("Sorry, unable to subscribe. Please try again later!");
                }
            }
        );
    });
    $("#signup-form").keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            $(this).submit();
        }
    });
    $("#submit-btn").click(function(e){
        e.preventDefault();
        $("#signup-form").submit();
    });
}