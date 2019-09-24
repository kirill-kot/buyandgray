jQuery3_2_1(document).ready(function(){
    jQuery3_2_1('#menu-toggle').on('click', function(){
        jQuery3_2_1('#mobile-navigation').toggleClass('toggled');
    });

    jQuery3_2_1('.login_form_caller').on('click', function(){
        jQuery3_2_1('#login_form').toggleClass('shown fadeInDown');
    });

    if( jQuery3_2_1('.woocommerce-page').outerHeight() < jQuery3_2_1(window).outerHeight()) {
        jQuery3_2_1('main').css({ 'min-height': jQuery3_2_1(window).height() - ( jQuery3_2_1('header').height() + jQuery3_2_1('footer').height() ) * 2 });
    }

    // console.log(  jQuery3_2_1(window).outerHeight()  );
    // console.log(  jQuery3_2_1('.woocommerce-page').outerHeight()  );
	if( jQuery3_2_1('.product').length ) {
    var waypoint_products = new Waypoint({
        element: jQuery3_2_1('.product'),
        handler: function(direction) {
            if(direction === 'down'){
                jQuery3_2_1('.product').each(function(){
                    jQuery3_2_1(this).removeClass('d-none').addClass('flipInY');
                });
            }
        },
        offset: 'bottom-in-view'
    });
	}
    if( jQuery3_2_1('.pop').length ) {
        var waypoint_related_product = new Waypoint({
            element: jQuery3_2_1('.pop'),
            handler: function (direction) {
                if (direction === 'down') {
                    jQuery3_2_1('.related_product').each(function () {
                        jQuery3_2_1(this).removeClass('d-none').addClass('fadeInUp');
                    });
                }
            },
            offset: 'bottom-in-view'
        });
    }
    jQuery.fn.matchHeight._update();

    var sortable = jQuery3_2_1('#diameter_sort');
    sortable.children().detach().sort(function(a,b){
        return jQuery3_2_1(a).text().localeCompare(jQuery3_2_1(b).text());
    }).appendTo(sortable);

    var previousOption;
    jQuery3_2_1('#diameter_sort .dropdown-item').each(function() {
        if (this.text == previousOption) jQuery3_2_1(this).remove();
        previousOption= this.text;
    });

    var sortable = jQuery3_2_1('#diameter_sort');
    sortable.children().detach().sort(function(a,b){
        return jQuery3_2_1(a).text().localeCompare(jQuery3_2_1(b).text());
    }).appendTo(sortable);

});
