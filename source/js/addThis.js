/**
 * Created by piermariacosina on 06/12/13.
 */

function shareHandler(evt) {
    switch(evt.data.service){
        case "facebook":
            dataLayer.push({
                'event': 'socialInt',
                'socialNetwork': 'Facebook',
                'socialAction': 'Share',
                'socialTarget': evt.data.url
            });
            break;
        case "twitter":
            dataLayer.push({
                'event': 'socialInt',
                'socialNetwork': 'Facebook',
                'socialAction': 'Share',
                'socialTarget': evt.data.url
            });
            break;
        case "google_plusone_share":
            dataLayer.push({
                'event': 'socialInt',
                'socialNetwork': 'Google',
                'socialAction': '+1 share',
                'socialTarget': evt.data.url
            });
            break;
        case "linkein":
            dataLayer.push({
                'event': 'socialInt',
                'socialNetwork': 'Linkedin',
                'socialAction': 'Share',
                'socialTarget': evt.data.url
            });
            break;
    }
}
// Listen to various events
addthis.addEventListener('addthis.menu.share', shareHandler);
