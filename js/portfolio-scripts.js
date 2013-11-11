/**
 * Created with JetBrains WebStorm.
 * User: John
 * Date: 10/24/13
 * Time: 6:58 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $("#my-name").popover({
        placement: 'bottom',
        title: 'Contact Information',
        html: 'true',
        animation: 'false',
        content: "<div id='contact-info'><a href='mailto:johno@mit.edu'>johno@mit.edu</a> -- 786.376.2956<br><p class='text-center' style='padding-top:16px'><a href='https://facebook.com/icanhazfun/'><img src='img/facebook_icon.png' class='contact-icon'></a><a href='www.linkedin.com/pub/john-o-sullivan/63/2ba/32a'><img src='img/linked_in_icon.png' class='contact-icon'></a><a href='https://github.com/john-osullivan'><img src='img/github_icon.png' class='contact-icon'></a></p></div>"
    });
    $.fn.fullpage({
        verticalCentered: true,
        resize : true,
        slidesColor : ['#C9C9C9', "#E8E8E8", "#595959"],
        menu : true,
        scrollingSpeed: 800,
        easing: true,
        navigation : true,
        anchors:['memory-box', 'scrolldown-standup', 'reddit-viz'],
        loopBottom: true,

    })
});
