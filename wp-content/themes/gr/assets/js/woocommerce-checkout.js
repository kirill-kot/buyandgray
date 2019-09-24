jQuery3_2_1(document).ready(function () {

    jQuery3_2_1('.toggleCollapse').on('click', function () {
        jQuery3_2_1('#checkoutForm').on('hidden.bs.collapse', function () {
            jQuery3_2_1('.collapse').prev('.card-header.active').removeClass('active').addClass('finished');
        });
        jQuery3_2_1('#checkoutForm').on('shown.bs.collapse', function () {
            jQuery3_2_1('.collapse').prev('.card-header').addClass('active');
        });
        jQuery3_2_1('#loginForm').on('hidden.bs.collapse', function () {
            jQuery3_2_1('.collapse').prev('.card-header.active').removeClass('active').addClass('finished');
        });
        jQuery3_2_1('#loginForm').on('shown.bs.collapse', function () {
            jQuery3_2_1('.collapse').prev('.card-header').addClass('active');
        });
    });
    jQuery3_2_1('.woocommerce-checkout .button-alt').on('click', function (e) {
        e.preventDefault();
        jQuery3_2_1('.woocommerce-checkout .button-alt').removeClass('active');
        jQuery3_2_1(this).addClass('active');
        jQuery3_2_1(jQuery3_2_1(this).attr('href')).removeClass('d-none').addClass('fadeInUp');
    });

    jQuery3_2_1('.woocommerce-checkout .new').on('click', function () {
        jQuery3_2_1('form#exist-user').addClass('d-none');
        jQuery3_2_1('form#new-user').removeClass('d-none');
    });
    jQuery3_2_1('.woocommerce-checkout .exist').on('click', function () {
        jQuery3_2_1('form#exist-user').removeClass('d-none');
        jQuery3_2_1('form#new-user').addClass('d-none');
    });

    jQuery3_2_1('#billing_address_1').val(jQuery3_2_1('#exist-user #shipping_method [type=radio]').data('default-address'));
    jQuery3_2_1('#billing_email').addClass('d-none');
    jQuery3_2_1('#new-user #place_order').on('click', function () {
        jQuery3_2_1('#exist-user').remove();
        jQuery3_2_1('#billing_email').val(jQuery3_2_1('#account_email').val());
    });
    jQuery3_2_1('.link').on('click', function () {
        if (jQuery3_2_1(this).parent().find('#shipping_method_0_flat_rate5:checked')) {

            jQuery3_2_1('#exist-user #shipping_method #billing_first_name').prop('disabled', 'disabled');
            jQuery3_2_1('#exist-user #shipping_method #billing_last_name').prop('disabled', 'disabled');
            jQuery3_2_1('#exist-user #shipping_method #billing_first_name_field').addClass('d-none');
            jQuery3_2_1('#exist-user #shipping_method #billing_last_name_field').addClass('d-none');

            jQuery3_2_1('#exist-user').on('shown.bs.collapse', function () {
                jQuery3_2_1('.collapse input').prop('readonly', 'readonly');
                jQuery3_2_1('.show input').prop('readonly', '');
                jQuery3_2_1('#billing_country option[value=BY]').attr('selected', 'selected');
                jQuery3_2_1('#billing_address_1').prop('readonly', '');
            });
            jQuery3_2_1('#exist-user').on('hidden.bs.collapse', function () {
                jQuery3_2_1('.collapse input').prop('readonly', 'readonly');
            });

        }
        if (jQuery3_2_1(this).parent().find('#shipping_method_0_flat_rate6:checked')) {

            jQuery3_2_1('#exist-user #shipping_method #billing_first_name').prop('disabled', 'disabled');
            jQuery3_2_1('#exist-user #shipping_method #billing_last_name').prop('disabled', 'disabled');
            jQuery3_2_1('#exist-user #shipping_method #billing_first_name_field').addClass('d-none');
            jQuery3_2_1('#exist-user #shipping_method #billing_last_name_field').addClass('d-none');

            jQuery3_2_1('#exist-user').on('shown.bs.collapse', function () {
                jQuery3_2_1('.collapse input').prop('readonly', 'readonly');
                jQuery3_2_1('.show input').prop('readonly', '');
                jQuery3_2_1('#billing_country option[value=""]').attr('selected', 'selected');
                jQuery3_2_1('#billing_address_1').prop('readonly', '');
            });
            jQuery3_2_1('#exist-user').on('hidden.bs.collapse', function () {
                jQuery3_2_1('.collapse input').prop('readonly', 'readonly');
            });

        }
    });
    jQuery3_2_1('.country_select').addClass('custom-select');
    jQuery3_2_1('#exist-user #shipping_method input').each(function () {
        jQuery3_2_1(this).prop('readonly', 'readonly');
    });

    jQuery3_2_1('#shipLogData .toggleCollapse').on('click', function () {
        var ship_addr = jQuery3_2_1('#shipping_method :checked').parent('li').find('#billing_address_1').val();
        var ship_city = jQuery3_2_1('#shipping_method :checked').parent('li').find('#billing_country option:selected').val();
        if (ship_addr && ship_city) {
            jQuery3_2_1('#shipping_method #billing_address_1').val(ship_addr);
            jQuery3_2_1('#shipping_method #billing_country').val(ship_city);
            // console.log(ship_city + ' ' + ship_addr);
        } else {
            jQuery3_2_1('#billing_address_1').val(jQuery3_2_1('#exist-user #shipping_method [type=radio]').data('default-address'));

            // console.log( jQuery3_2_1('#billing_address_1').val() );
            // jQuery3_2_1('#shipping_method #billing_country').val(ship_city);
        }
    });
});