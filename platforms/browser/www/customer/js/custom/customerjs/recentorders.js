$(document).on('click', '.rightpanelclass', function(event) {
    var valofpageid = $(this).attr('data-pagename').trim();
    var ajaxlength = 0;
    var jsonresponse;
    var showrecentorders = $.ajax({
        type: 'GET',
        url: url + '/getrecentorderss?cust_id=' + cust_id,
        jsonpCallback: 'jsonCallback',
        dataType: 'jsonp',
        jsonp: false,
        cache: false,
        timeout: 10000,
			 async: true,
        beforeSend: function() {
$("#loaderforindex").show(); 
        },
        complete: function() {
$("#loaderforindex").hide();
        },
        success: function(response) {
            ajaxlength = response.length;
            jsonresponse = response;
        },
        error: function(x, t, m) {
            if (t === "timeout") {
            //    alert("got timeout , please try again");
			//	$("#timeoutalert").popup("open" );


		$("#timeoutalert").popup({history: false}).popup('open');

            } else {}
        }
    });
    showrecentorders.done(function() {
        if (ajaxlength == 0) {
            $('#' + valofpageid + ' .recentOrderslistWrap').html('<span class="no_orders_span">There are no orders<br>Placed by you</span>');
        } else {
            var ordershtml = '';
            $('#' + valofpageid + ' .recentOrderslistWrap').html("");
            for (var i = 0; i < jsonresponse.length; i++) {
                ordershtml += '<a class="recentorderid" data-whichpage="'+valofpageid+'" href="#recentOrders"   data-rel="popup" data-position-to="window" data-status="' + jsonresponse[i].status + '"    data-orderid="' + jsonresponse[i].order_child_id + '"><b>' + jsonresponse[i].date_of_order + '</b>  ' + jsonresponse[i].vendor_name + '  Items ' + jsonresponse[i].quantity + '       </a>'
            }
            $('#' + valofpageid + ' .recentOrderslistWrap').html(ordershtml);
        }

		if(valofpageid==='rightpanelforindexpage')
		{
$( "#rightpanelforindexpage" ).panel( "open" );
		}


//  $('body').enhanceWithin();
 //$.mobile.resetActivePageHeight();
	
    });
  //  event.stopImmediatePropagation();
   // event.preventDefault();
   // return false;
});

$(document).on('click', '.recentorderid', function(event) {
    var order_id = $(this).data('orderid');
    var fromwhichpage = $(this).data('whichpage').trim();

	$("#recentOrdersforstart").html("");
    
			$("recentOrdersforqrpage").html("");

	$("recentOrdersforindexpage").html("");


    if (order_id) {
        var status_order = $(this).data('status');
        var showorderpage = $.ajax({
            type: 'GET',
            url: url + '/getorderjson?orderid=' + order_id,
            jsonpCallback: 'jsonCallback',
            dataType: 'jsonp',
            jsonp: false,
            cache: false,
            timeout: 10000,
				 async: true,
            beforeSend: function() {
$("#loaderforindex").show(); 
            },
            complete: function() {
$("#loaderforindex").hide();
            },
            success: function(response) {
                var responselength = JSON.parse(response[0].orderjson).length;
                var jsonresponse = JSON.parse(response[0].orderjson);
                var orderedfrom = jsonresponse[0].orderedfrom;
                var vendor_name = jsonresponse[0].vendorname;
                var vendor_cell = jsonresponse[0].mobile_number;
                if (!vendor_cell) {
                    vendor_cell = '';
                }
                var customerNameDtlmain = $('<div class="customerNameDtl"></div>');
                var customerNameDtl_left = $('<div class="customerNameDtl_left"></div>');
                var grandtotal = jsonresponse[0].taxdetails.total;
                    grandtotal = parseFloat(grandtotal).toFixed(2);
                var numberofitems = responselength;
                var orderOfdisplay = jsonresponse[0].taxorderinformation;
                if (orderedfrom === 'Home') {
                    var cust_phone = jsonresponse[0].cust_address.phone_number;
                    var cust_area = jsonresponse[0].cust_address.area;
                    var cust_building_no = jsonresponse[0].cust_address.building_no;
                    var cust_street_name = jsonresponse[0].cust_address.street_name;
                    var cust_name = jsonresponse[0].cust_address.name;
                    var cust_state = jsonresponse[0].cust_address.state;
                    var cust_locality = jsonresponse[0].cust_address.locality;
                    var cust_city = jsonresponse[0].cust_address.city;
                    var customerNameDtl_left_html = '' + cust_name + ',  ';
                    if (!cust_locality || cust_locality === 'undefined' || cust_locality === '' || cust_locality === 'Undefined') {
                        cust_locality = '';
                    }
                    if (cust_phone && cust_phone != 'undefined') {
                        customerNameDtl_left_html += ' <i class="icon-phone"></i>' + cust_phone + '<br>';
                    }
                    if (cust_locality && cust_locality != 'undefined') {
                        customerNameDtl_left_html += '' + cust_locality + ', ';
                    }
                    if (cust_building_no && cust_building_no != 'undefined') {
                        customerNameDtl_left_html += '' + cust_building_no + ', ';
                    }
                    if (cust_street_name && cust_street_name != 'undefined') {
                        customerNameDtl_left_html += '' + cust_street_name + '<br>';
                    }
                    if (cust_city && cust_city != 'undefined') {
                        customerNameDtl_left_html += '' + cust_city + ', ';
                    }
                    if (cust_area && cust_area != 'undefined') {
                        customerNameDtl_left_html += '' + cust_area + ', ';
                    }
                    if (cust_state && cust_state != 'undefined') {
                        customerNameDtl_left_html += '' + cust_state + '<br>';
                    }
                    customerNameDtl_left.append(customerNameDtl_left_html);
                    customerNameDtlmain.append(customerNameDtl_left);
                } else if (orderedfrom == 'QRScan') {
                    var customer_name = jsonresponse[0].customer_name;
                    var customer_mobil = jsonresponse[0].customer_mobil;
                    var tablenumber = jsonresponse[0].tablenum;
                    var vendor_name = jsonresponse[0].vendorname;
                    var customerNameDtl_left_html = '' + customer_name + ',  ';
                    customerNameDtl_left_html += ' <i class="icon-phone"></i>' + customer_mobil + '<br>';
                    customerNameDtl_left_html += '' + vendor_name + '<br>';
                    customerNameDtl_left_html += '' + tablenumber + '<br>';
                    customerNameDtl_left.append(customerNameDtl_left_html);
                    customerNameDtlmain.append(customerNameDtl_left);
                }
                var customerNameDtl_right = $('<div class="customerNameDtl_right"></div>');
                var orderclass = 'noclass';
                if (!status_order) {
                    status_order = '';
                }
                if (status_order == 'Viewed' || status_order == 'NEW' || status_order == 'Accept' || status_order == ' Ready' || status_order == 'Picked_Up' || status_order == 'Delivered') {
                    orderclass = 'success';
                } else {
                    orderclass = 'reject';
                }
                var html = '<p class="totalsection">Grand Total <span>&#x20B9; ' + grandtotal + '</span></p><div class="orderStatus"><span class="status_txt">Status </span><span class="orderStatus_spn order-' + orderclass + '">' + status_order + '</span></div>'
                customerNameDtl_right.append(html);
                customerNameDtlmain.append(customerNameDtl_right);
                var vendorNameDtsl = $('<div class="vendorNameDtsl"></div>');
                //var vendorhtml = '<h6>Vendor Name - ' + vendor_name + '</h6><span>' + numberofitems + 'Items</span>';
                var vendorhtml = '<h6>' + vendor_name + ' <i class="icon-phone phoneno">' + vendor_cell + '</i></h6><span>' + numberofitems + ' Items</span>';
                vendorNameDtsl.append(vendorhtml);
                var rowdiv = $('<div class="row"></div>');
                var TreeMenu_Contentdiv = $('<div class="TreeMenu_Content"></div>');
                var itemshtml = '';
                for (var i = 0; i < jsonresponse.length; i++) {
                    var item_name = jsonresponse[i].name;
                    var quantity = jsonresponse[i].quantity;
                    var toppings = jsonresponse[i].toppings;
                    var crusts = jsonresponse[i].crusts;
                    var toppings_data = toppings.join();
                    var crustings_data = crusts.join();
                    var strikeprice_cutoff = jsonresponse[i].strikeprice_cutoff;
                    var discount_div = jsonresponse[i].discount_div;
                    var strikestyle = 'none';
                    var additionstyle = 'none';
                    var vegornonveg = jsonresponse[i].vegornonveg;
                    var vegornonvegclass = '';
                    var toppstyle = 'none';
                    var cruststyle = 'none';
                    var stylewhat = 'none';
                    var ifcontainspercentagesymbol = discount_div.indexOf("percent");
                    if (ifcontainspercentagesymbol == -1) {
                        discount_div = discount_div.replace("  Rs off", "");
                        discount_div = discount_div;
                        stylewhat = 'inline-block';
                    } else if (ifcontainspercentagesymbol != -1) {
                        discount_div = discount_div.replace("percent", "%");
                        stylewhat = 'none';
                    }
                    if (discount_div <= 0) {
                        strikestyle = 'none';
                    } else {
                        strikestyle = 'block'
                    }
                    var price = jsonresponse[i].price;
                    var additions = jsonresponse[i].additions;
                    if (additions <= 0) {
                        additionstyle = 'none';
                    } else {
                        additionstyle = 'block'
                    }
                    if (toppings.length == 0) {
                        toppstyle = 'none';
                    } else {
                        toppstyle = 'block';
                    }
                    if (crusts.length == 0) {
                        cruststyle = 'none';
                    } else {
                        cruststyle = 'block';
                    }
                    if (vegornonveg == 'vegterian') {
                        vegornonvegclass = 'vegLabel';
                    } else if (vegornonveg == 'nonvegterian') {
                        vegornonvegclass = 'nonvegLabel';
                    }
                    var toppings_quantitywise = jsonresponse[i].toppings_quantitywise;
                    var crustings_quantitywise = jsonresponse[i].crustings_quantitywise;
                    var topping_name = jsonresponse[i].topping_name;
                    var crusting_name = jsonresponse[i].crusting_name;
                    var jsontoppings = JSON.parse(toppings_quantitywise);
                    var jsoncruts = JSON.parse(crustings_quantitywise);
                    var headerstyle = '';
                    var divhtmltoppcrust = '';
                    for (var l = 0; l < quantity; l++) {
                        var toppingsul = '';
                        var crustsul = '';
                        for (var qty in jsontoppings) {
                            var number = qty.match(/\d+/g);
                            var s = l + 1;
                            if (number == s) {
                                if (number.length) {
                                    number = number[0];
                                    toppingsul += jsontoppings[qty].values.join();
                                }
                            }
                        }
                        for (var qty in jsoncruts) {
                            var number = qty.match(/\d+/g);
                            var s = l + 1;
                            if (number == s) {
                                if (number.length) {
                                    number = number[0];
                                    //crustsul += "<li>" + jsoncruts[qty].values.join(",") + "</li>";
                                    crustsul += jsoncruts[qty].values.join();
                                }
                            }
                        }
                        var item = l + 1;
                        toppingstyle = (toppingsul != '') ? "block" : "none";
                        cruststyle = (crustsul != '') ? "block" : "none";
                        if (toppingsul == '' && crustsul == '') {
                            headerstyle = 'none';
                        } else {
                            headerstyle = 'block';
                        }
                        divhtmltoppcrust += '<div class="addonsList_inner" style="display:' + headerstyle + '"><span class="itemheading">Item ' + item + '</span><span class="topcrust_itemlsit" style="display:' + toppingstyle + '"><b>' + topping_name + ': </b>' + toppingsul + '</span><span class="topcrust_itemlsit" style="display:' + cruststyle + '"><b>' + crusting_name + ': </b>' + crustsul + '</span></div>';
                    }
                    itemshtml += '<div class="lastItm_Wrap orders_margin_padding_none">\
                <div class="prd_title"><h3 class="' + vegornonvegclass + '">' + item_name + '</h3></div>\n\
                            <div class="Itm_left_aside">\n\
                                <div class="Itm_dtsl">\n\
                                    <div class="Qty_Wrap">\n\
                                        <p><b>Qty -' + quantity + '</b></p>\n\
                                    </div>\n\
                                  <div class="addonsList">' + divhtmltoppcrust + ' </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="Itm_right_aside">\n\
                           <p style="display:' + strikestyle + ';"><strike>&#x20B9; ' + strikeprice_cutoff + '</strike> <span class="offRed" style="display:' + stylewhat + ';">&#x20B9</span>  <b class="offRed">' + discount_div + '  <span style="display:' + stylewhat + ';">off</span> </b></p>\n\
                                <p><b>&#x20B9; ' + price + '</b></p>\n\
                                <p style="display:' + additionstyle + ';"><span>Additions:</span>  <b>&#x20B9; ' + additions + '</b></p>\n\
                            </div>\n\
                        </div>';
                }
                TreeMenu_Contentdiv.html(itemshtml);
                rowdiv.append(TreeMenu_Contentdiv);
                var orderSummary_priceDtsl = $('<div class="orderSummary_priceDtsl"></div>');
                var orderdisplayhtml = '';
                for (var h = 0; h < orderOfdisplay.length; h++) {
                    var tax_name = orderOfdisplay[h];
                    var tax_value = jsonresponse[0].taxdetails[tax_name];
                    if (tax_value && tax_value != 0) {
                        if (tax_name) {
                            if (tax_name == 'convenience_charges') {
                                tax_name = 'Convenience Charges'
                            }
                            if (tax_name == 'delivery_charges') {
                                tax_name = 'Delivery Charges'
                            }
                        }
                        tax_value = parseFloat(tax_value).toFixed(2);
                        orderdisplayhtml += '<li>' + tax_name + '<span>&#x20B9; ' + tax_value + '</span></li>';
                    }
                }
                orderdisplayhtml += '<li class="totalsection">Grand Total <span>&#x20B9; ' + grandtotal + '</span></li>';
                orderSummary_priceDtsl.append(orderdisplayhtml).trigger('create').trigger('pagecreate');;
                var commentWrap = ' <div class="commentWrap">\
                        </div>';
                rowdiv.append(orderSummary_priceDtsl).trigger('create').trigger('pagecreate');;
                rowdiv.append(commentWrap).trigger('create').trigger('pagecreate');;

                    if(fromwhichpage=='rightpanelforstartpage') // HD page
                    {
    $("#recentOrdersforstart").html('<div class="popup_close"><a class="closeIcon icon-cancel-circled-1 startp"></a></div><div class="customerNameDtl"></div><div class="customerNameDtl_left">' + customerNameDtl_left_html + '</div><div class="customerNameDtl_right">' + html + '</div><div class="vendorNameDtsl">' + vendorhtml + '</div><div class="row"><div class="TreeMenu_Content">' + itemshtml + '</div><div class="orderSummary_priceDtsl">' + orderdisplayhtml + '</div></div>');
    $("#recentOrdersforstart").popup('open');
                    }


    else if(fromwhichpage=='rightpanelforqrpage')     // QrCode Page
                    {
    $("#recentOrdersforqrpage").html('<div class="popup_close"><a class="closeIcon icon-cancel-circled-1 qrpagep"></a></div><div class="customerNameDtl"></div><div class="customerNameDtl_left">' + customerNameDtl_left_html + '</div><div class="customerNameDtl_right">' + html + '</div><div class="vendorNameDtsl">' + vendorhtml + '</div><div class="row"><div class="TreeMenu_Content">' + itemshtml + '</div><div class="orderSummary_priceDtsl">' + orderdisplayhtml + '</div></div>');
    $("#recentOrdersforqrpage").popup('open');
                    }


else if(fromwhichpage=='rightpanelforindexpage') // Customer Index Page
                    {
    $("#recentOrdersforindexpage").html('<div class="popup_close"><a class="closeIcon icon-cancel-circled-1 indexp"></a></div><div class="customerNameDtl"></div><div class="customerNameDtl_left">' + customerNameDtl_left_html + '</div><div class="customerNameDtl_right">' + html + '</div><div class="vendorNameDtsl">' + vendorhtml + '</div><div class="row"><div class="TreeMenu_Content">' + itemshtml + '</div><div class="orderSummary_priceDtsl">' + orderdisplayhtml + '</div></div>');
    $("#recentOrdersforindexpage").popup('open');
                    }




            },
            error: function(x, t, m) {
                if (t === "timeout") {
                //    alert("got timeout , please try again");
					$("#timeoutalert").popup("open" );
                } else {}
            }
        });
    }
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});

$(document).on('click', '.closeIcon', function(event) {


 if($(this).hasClass('startp')) {

    $('#recentOrdersforstart').popup('close');
        
    }

else if($(this).hasClass('qrpagep')) {

    $('#recentOrdersforqrpage').popup('close');
        
    }

    else if($(this).hasClass('indexp')) {

        $('#recentOrdersforindexpage').popup('close');
        
    }


    
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});