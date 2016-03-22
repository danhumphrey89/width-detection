var all = document.body.getElementsByTagName("*");
for (var i = 0; i < all.length; i++) {
    if (jQuery('body').outerWidth() < jQuery(all[i]).outerWidth()) {
        console.log(all[i]);
    }
}