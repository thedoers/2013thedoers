//= require "vendor/jquery"
//= require "vendor/jquery.unveil.min"

/**
 * Created with JetBrains RubyMine.
 * User: piermariacosina
 * Date: 21/11/13
 * Time: 19:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $( "#submit-btn" ).submit(function( event ) {

            // Stop form from submitting normally
            event.preventDefault();
            console.log("prevent");
            // Get some values from elements on the page:
            var $form = $( this ),
                email = $form.find( "input[name='email']" ).val(),
                list = $form.find( "input[name='list']" ).val(),
                listall = $form.find( "input[name='list all']" ).val(),
                language = $form.find( "input[name='language']" ).val(),
                url = $form.attr( "action" );

            // Send the data using post
            var posting = $.post( url, { email: email, list: list, listall:listall,language:language } );

            // Put the results in a div
            posting.done(function( data ) {
                console.log(data);

            });
    });
});