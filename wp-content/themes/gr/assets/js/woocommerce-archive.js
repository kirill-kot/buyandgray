jQuery3_2_1(document).ready(function () {
    // ajaxed loadmore
    var ppp = 16;
    var pageNumber = 1;
    var orderby;
    var order;
    var meta_key;
    var str;
    var category_id;

    // ajax charged load on scrolldown posts
    function more_products_load() {
        orderby = jQuery3_2_1(".dropdown-item.active").data('orderby') ? jQuery3_2_1(".dropdown-item.active").data('orderby') : 'none';
        order = jQuery3_2_1(".dropdown-item.active").data('order') ? jQuery3_2_1(".dropdown-item.active").data('order') : 'ASC';
        meta_key = jQuery3_2_1(".dropdown-item.active").data('orderkey') ? jQuery3_2_1(".dropdown-item.active").data('orderkey') : '';
        category_id = jQuery3_2_1('#product_archive_page').data('category');
        pageNumber++;
            str = '&page=' + pageNumber + '&ppp=' + ppp + '&action=more_products_ajax&category='+category_id+'&orderby='+ orderby + '&order=' + order + '&meta_key=' + meta_key;
        jQuery3_2_1.ajax({
            type: "POST",
            dataType: "html",
            url: ajax_more.ajaxurl,
            data: str,
            beforeSend: function () {
            },
            success: function (data) {
                var jQuery3_2_1data = jQuery3_2_1(data);
                if (jQuery3_2_1data.length) {
                    jQuery3_2_1('#product_archive_page').append(data);
                    jQuery3_2_1(data).css({'opacity': '0'});
                    jQuery3_2_1("#more_products").attr("disabled", false);
                    jQuery3_2_1(data).css({'opacity': '1'});
                } else {
                    jQuery3_2_1("#more_products").attr("disabled", true).removeClass('d-flex').addClass('d-none');
                }

                jQuery3_2_1('.product').each(function(){
                    jQuery3_2_1(this).removeClass('d-none').addClass('flipInY');
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
        return false;
    }

    jQuery3_2_1("#more_products").on("click",function(){ // When btn is pressed.
        jQuery3_2_1("#more_products").attr("disabled",true); // Disable the button, temp.
        more_products_load();
    });
    // ajax charged sort on scrolldown posts
    function sort_products(orderby, order, meta_key) {
            category_id = jQuery3_2_1('#product_archive_page').data('category');
            pageNumber = 1;
            str = '&page=' + pageNumber + '&ppp=' + ppp + '&action=sort_products_ajax&category='+category_id+'&orderby='+ orderby + '&order=' + order + '&meta_key=' + meta_key;
        jQuery3_2_1.ajax({
            type: "POST",
            dataType: "html",
            url: ajax_more.ajaxurl,
            data: str,
            beforeSend: function () {
            },
            success: function (data) {
                var jQuery3_2_1data = jQuery3_2_1(data);
                if (jQuery3_2_1data.length) {
                    jQuery3_2_1('#product_archive_page').empty().append(data);
                    jQuery3_2_1(data).css({'opacity': '0'});
                    jQuery3_2_1("#more_products").attr("disabled", true).removeClass('d-none').addClass('d-flex');
                    jQuery3_2_1(data).css({'opacity': '1'});
                } else {
                }

                jQuery3_2_1('.product').each(function(){
                    jQuery3_2_1(this).removeClass('d-none').addClass('flipInY');
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
        return false;
    }

    jQuery3_2_1("#customSorter .dropdown-item").on("click",function(){ // When btn is pressed.
        // jQuery3_2_1("#more_products").attr("disabled",true); // Disable the button, temp.
        jQuery3_2_1(".dropdown-item").each(function(){
            jQuery3_2_1(this).removeClass('active');
        });
        orderby = jQuery3_2_1(this).data('orderby');
        order = jQuery3_2_1(this).data('order');
        meta_key = jQuery3_2_1(this).data('orderkey');
        jQuery3_2_1(this).addClass('active');
        sort_products(orderby, order, meta_key);
    });

    // ajax charged diameter filter on scrolldown posts
    function filter_products(filterval, orderby, order, meta_key) {
            category_id = jQuery3_2_1('#product_archive_page').data('category');
            pageNumber = 1;
            str = '&page=' + pageNumber + '&ppp=' + ppp + '&action=fitler_by_diameter_ajax&category='+category_id+'&orderby='+ orderby + '&order=' + order + '&meta_key=' + meta_key + '&filterval=' + filterval;
        jQuery3_2_1.ajax({
            type: "POST",
            dataType: "html",
            url: ajax_more.ajaxurl,
            data: str,
            beforeSend: function () {
            },
            success: function (data) {
                var jQuery3_2_1data = jQuery3_2_1(data);
                if (jQuery3_2_1data.length) {
                    jQuery3_2_1('#product_archive_page').empty().append(data);
                    jQuery3_2_1(data).css({'opacity': '0'});
                    jQuery3_2_1("#more_products").attr("disabled", true).removeClass('d-none').addClass('d-flex');
                    jQuery3_2_1(data).css({'opacity': '1'});
                } else {
                }

                jQuery3_2_1('.product').each(function(){
                    jQuery3_2_1(this).removeClass('d-none').addClass('flipInY');
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
        return false;
    }

    jQuery3_2_1("#customSorterAttr .dropdown-item").on("click",function(){ // When btn is pressed.
        // jQuery3_2_1("#more_products").attr("disabled",true); // Disable the button, temp.
        jQuery3_2_1(".dropdown-item").each(function(){
            jQuery3_2_1(this).removeClass('active');
        });
        filterval = jQuery3_2_1(this).data('filterval');
        orderby = jQuery3_2_1(".dropdown-item.active").data('orderby') ? jQuery3_2_1(".dropdown-item.active").data('orderby') : 'none';
        order = jQuery3_2_1(".dropdown-item.active").data('order') ? jQuery3_2_1(".dropdown-item.active").data('order') : 'ASC';
        meta_key = jQuery3_2_1(".dropdown-item.active").data('orderkey') ? jQuery3_2_1(".dropdown-item.active").data('orderkey') : '';
        jQuery3_2_1(this).addClass('active');
        filter_products(filterval, orderby, order, meta_key);
    });

});
