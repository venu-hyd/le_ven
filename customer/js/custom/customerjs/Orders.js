localStorage.setItem('locationbasednamevendor', 'Denamrk');
function getqueryByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var type_ofcountry="";	
var fortax_value="";			  
var cost_price="";

var tax_contains_value="";	
var tax_valueprice="";
var qtywise="";

		if(localStorage.getItem('locationbasednamevendor')!='India'){
            qtywise=":";	Rupee="";
            var id=getqueryByName('vendor_id');
           
 var getajaxcallscreenid = $.ajax(
    {
      url: 'http://loteasy.com:8080/OMS/oms1/vendortaxvalue?vendorid=' + id,
      dataType: 'jsonp',
      cache: false,
      timeout: 10000,
      jsonp: false,
    async: true,
      jsonpCallback: 'vendortaxvalue',
      beforeSend: function()
      {
        
      },
      complete: function()
      {
   
      },
      success: function(data)
      {
      
     var tax_v=JSON.stringify(data);
	 
	 for(var i=0;i<data.length;i++){
		 
		fortax_value= parseInt( data[i].tax_val);
		
	
	 }
	 
	
      },
      error: function(jqXHR, exception) 
    {


    }
    });	
        }
        else{
            qtywise="-";
            Rupee='&#x20B9;'
        }
		
	//end of praveen

var clickedTD;

$(document).on('click', '#customerpage .myOrderPanel_footer', function(event) {



    if(navigator.connection)
        {
             var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {

                           $('#customerpage #timeoutalert').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }



    var headertext = $('.headvendnametext').text();
    if (headertext !== '') {

        orderjson = '';
        totalitemselected.length = 0;
        totalitemselected = [];

        var subtotalvalue = parseFloat($("#customerpage .myOrderPanel_footer .subtotal").data('subtotal'));
        var minordervalue = parseFloat($('#customerpage .minOrder').text());
//praveen
        if (subtotalvalue >= minordervalue) {
            cost_price="";
            tax_valueprice="";

            $('#customerpage .headvendnametext').text('Order Summary');
            $('#customerpage #myordersfinal').find('.lastItm_Wrap').each(function() {
                var item_id = $(this).attr('id');
                item_id = item_id.replace("lastwrap", "");
                var item_name = $(this).find('.prd_title h3:first').text();
                var image = $(this).find('.Itm_left_aside .Itm_img img').attr('src');
                var quantity = $(this).closest('div').find('.QtyInput').val();
                var price = $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .sellprice').text();
                var screen_nam = $('.headloctext').text();
                var additions = $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .additions').text();
                var strikeprice_cutoff = $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .strikeprice').text();
                //var discount = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('discprice'));
                var discount = $(this).find('.Itm_left_aside .Itm_img img').attr('data-discpricestatic');
                var topping_name = $(this).closest('.lastItm_Wrap').find('.addonsBtn').data('toppname');
                var crusting_name = $(this).closest('.lastItm_Wrap').find('.addonsBtn').data('crutsname');


                var currentPercent = $(this).closest('.lastItm_Wrap').find('.prd_title h3').data('ispercent');


                if (currentPercent == '0') {

                    discount = discount * quantity;
                } else if (currentPercent == '1') {

                    discount = discount;
                }



                var if_discountorrupees = $(this).closest('.lastItm_Wrap').find('.Itm_right_aside').data('percentage');
                var discount_text = '';
                var vegornonveg = $(this).closest('.lastItm_Wrap').data('vegornonveg');
                if (if_discountorrupees == 0) {
                    discount_text = '  Rs off';
                } else if (if_discountorrupees == 1) {
                    discount_text = '   percent off ';
                }



                if (discount > 0) {
                    discount = discount + discount_text;
                } else {
                    discount = discount;
                }



                var item_description = '';


                var $h3 = $(this).closest('.lastItm_Wrap').find('.Itm_discrp h3');

                if ($h3.length) {
                    var el = $h3[0].nextSibling;
                    if (el) {
                        item_description = el.nodeValue.trim();

                    }
                }




                item_description = item_description.replace(/(\r\n|\n|\r)/gm, "");




                toppings = [];
                crusts = [];
                vendor_item_id_array = [];
                toppings_array = [];
                crusting_array = [];
                for (var i = 0; i <= quantity - 1; i++) {
                    vendor_item_id_array.push(item_id);
                }
                var toppcrustsdata = JSON.parse($(this).attr('data-stuff'));
                for (var i = 0; i < toppcrustsdata.length; i++) {
                    var name = toppcrustsdata[i].name;
                    var additionname = toppcrustsdata[i].additionname;
                    var additionid = toppcrustsdata[i].addtionid;
                    if (name.indexOf('_KK_') !== -1) {
                        toppings.push(additionname)
                        toppings_array.push(additionid);
                    } else if (name.indexOf('_ZZ_') !== -1) {
                        crusts.push(additionname);
                        crusting_array.push(additionid);
                    }
                }

                toppdata = [];
                crustdata = [];


                for (i = 0; i < toppcrustsdata.length; i++) {
                    var k_name = toppcrustsdata[i].name;

                    if (k_name.indexOf("_ZZ_") != -1) {
                        crustdata.push(toppcrustsdata[i]);
                    }

                    if (k_name.indexOf("_KK_") != -1) {
                        toppdata.push(toppcrustsdata[i]);
                    }
                }

                var g1 = _(toppdata)
                    .map(function(item) {
                        return {
                            name: 'Qty' + item.name.match(/tab(\d+)/)[1],
                            value: item.additionname,
                            //type_of:item.name,
                        }
                    })
                    .groupBy('name')
                    .mapValues(function(group, key) {
                        return {
                            name: key,
                            values: _.pluck(group, 'value'),
                            //type_of: _.pluck(group, 'type_of')
                        };
                    })
                    .value();

                var g2 = _(crustdata)
                    .map(function(item) {
                        return {
                            name: 'Qty' + item.name.match(/tab(\d+)/)[1],
                            value: item.additionname,
                            //type_of:item.name,
                        }
                    })
                    .groupBy('name')
                    .mapValues(function(group, key) {
                        return {
                            name: key,
                            values: _.pluck(group, 'value'),
                            //type_of: _.pluck(group, 'type_of')
                        };
                    })
                    .value();

                    if(localStorage.getItem('locationbasednamevendor')!='India'){
                        //praveen
                        if(additions!=undefined || additions!=null || additions!="")
                        var price_value= parseFloat(price)+parseFloat( additions);
                        else
                        var price_value= parseFloat(price);	
                        
                        var total_value= parseFloat( price_value)*100/(100+fortax_value);
                        tax_valueprice= parseFloat( tax_valueprice+price_value);
                        
                         cost_price=parseFloat( cost_price+ total_value);
                        //end
                        }


                totalitemselected.push({
                    'itemid': item_id,
                    'name': item_name,
                    'image': image,
                    'quantity': quantity,
                    'price': price,
                    'screen': screen_nam,
                    'additions': additions,
                    'strikeprice_cutoff': strikeprice_cutoff,
                    'discount_div': discount,
                    'item_description': item_description,
                    'toppings': toppings,
                    'crusts': crusts,
                    'toppings_array': toppings_array,
                    'crusts_array': crusting_array,
                    'vendor_itms_arr': vendor_item_id_array,
                    'tablenum': tablenum,
                    'vegornonveg': vegornonveg,
                    'toppings_quantitywise': g1,
                    'crustings_quantitywise': g2,
                    'seatnum': seatnum,
                    'row': row,
                    'topping_name': topping_name,
                    'crusting_name': crusting_name
                });
            });
            orderjson = JSON.stringify(totalitemselected);



            var convenience_charge = '0';
            if (orderjson != '') {

                if (redirectedfrom === 'vendorscreen') {

                    tablenum = 'TakeOrder';

                } else if (redirectedfrom === '') {

                    if ((tablenum) && (tablenum.trim() != '')) {
                        tablenum = tablenum;
                    } else {
                        tablenum = 'HomeDelivery';
                    }
                    if ((addreslabel) && (addreslabel.trim() != '')) {
                        addreslabel = addreslabel
                    } else {
                        addreslabel = 'NOTAppl';
                    }

                }



                var orderinfoforsplitjson = {
                    'orderjson': orderjson,
                    'screen_ids': screen_id,
                    'convenience_charge': convenience_charge,
                    'cust_id': cust_id,
                    'tablenum': tablenum,
                    'addreslabel': addreslabel
                };
                var json_dataforsplit = JSON.stringify(orderinfoforsplitjson);
                var ajaxrespforvsplit = '';
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: json_dataforsplit,
                    async: true,
                    contentType: "application/json; charset=utf-8",
                    cache: false,
                    url: url + '/vendorsplit',
                    timeout: 10000,
                    beforeSend: function() {
                        $("#customerpage #loaderforindex").show();
                    },
                    complete: function() {
                        $("#customerpage #loaderforindex").hide();
                    },
                  success: function(response) {

                    if(response)
                    {

                        ajaxrespforvsplit = response;
                        splitVendors(response);
                    }
                    else if(!response)
                    {
                        ajaxrespforvsplit = '';
                    $('#customerpage #timeoutalerttryagain').popup({history: false}).popup('open');         
                    }

            },
                   error: function(jqXHR, exception) {
     if (jqXHR.status === 0 || exception === 'timeout') {
             $('#customerpage #timeoutalerttryagain').popup({history: false}).popup('open');
            }
            else
            {
                 $('#customerpage #timeoutalerttryagain').popup({history: false}).popup('open');
            }
}
                });
            }

            $("#customerpage #datacontainer").hide();
            $("#customerpage .swiper-container").hide();
            $("#customerpage #mainmyordersdiv").show();

        } else if (subtotalvalue < minordervalue) {


            $("#customerpage .minordercla").text('Minimum order should be atleast ' + minordervalue);
            $("#customerpage #minorder_pop").popup('open');



        }

    }
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;

});

function splitVendors(response) {
	ordersplitjson = response;
	$(".MyOrdersdisplay").html("");
	$(".MyOrdersdisplay").empty();

	$('.customerNameDtl').html("");
	$('.customerNameDtl').empty();
	

	$('#leafcontenttree').html("");
	$('#leafcontenttree').empty();

	$(".MyOrdersPage").hide();

	var jsonstringifyrespone = JSON.stringify(response);

	if(jsonstringifyrespone!=='{}')
	{
//praveen
if(localStorage.getItem('locationbasednamevendor')!='India'){
	response.vendors.T1[0].data.tax_details["Cost"]=cost_price;
 tax_contains_value=parseFloat(tax_valueprice)-parseFloat(cost_price);







	response.vendors.T1[0].data.tax_details[response.vendors.T1[0].data.tax_order[4]]=tax_contains_value;
	response.vendors.T1[0].data.tax_details.total=parseFloat( response.vendors.T1[0].data.tax_details["Cost"]+tax_contains_value).toFixed(2);
	
	
	//alert(response.vendors.T1[0].data.tax_details.total+"total")
	//end
}

	var customer_name = response.vendors.T1[0].data.orderinfo[0].customer_name;
	var vendor_name = response.vendors.T1[0].name;
	var vendor_cell = response.vendors.T1[0].data.orderinfo[0].mobile_number;
	var customer_mobil = response.vendors.T1[0].data.orderinfo[0].customer_mobil;
	var Table_number = '';
	var numberofitems = response.vendors.T1[0].data.orderinfo.length;
	var items_data = response.vendors.T1[0].data.orderinfo;
	var grandtotal = response.vendors.T1[0].data.tax_details.total;

	grandtotal = parseFloat(grandtotal).toFixed(2);

	var orderOfdisplay = response.vendors.T1[0].data.tax_order;

	var showtaxesornot = response.vendors.T1[0].showMessageinfo;

	var orderedfrom = response.vendors.T1[0].orderfrom;
	var customerNameDtlmain = $('<div class="customerNameDtl"></div>');
	var customerNameDtl_left = $('<div class="customerNameDtl_left"></div>');
	if (orderedfrom === 'Home') {
		var cust_phone = response.vendors.T1[0].cust_address.phone_number;
		var cust_area = response.vendors.T1[0].cust_address.area;
		var cust_building_no = response.vendors.T1[0].cust_address.building_no;
		var cust_street_name = response.vendors.T1[0].cust_address.street_name;
		var cust_name = response.vendors.T1[0].cust_address.name;
		var cust_state = response.vendors.T1[0].cust_address.state;
		var cust_locality = response.vendors.T1[0].cust_address.locality;
		var cust_city = response.vendors.T1[0].cust_address.city;
		var customerNameDtl_left_html = '' + cust_name + ',  ';

		
	if(!cust_locality || cust_locality==='undefined' || cust_locality==='' || cust_locality==='Undefined')
	{
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

			if (cust_area && cust_area != 'undefined') {
			customerNameDtl_left_html += '' + cust_area + ', ';
		}

		if (cust_city && cust_city != 'undefined') {
			customerNameDtl_left_html += '' + cust_city + ', ';
		}
		
		if (cust_state && cust_state != 'undefined') {
			customerNameDtl_left_html += '' + cust_state + '<br>';
		}
		customerNameDtl_left.append(customerNameDtl_left_html);
		customerNameDtlmain.append(customerNameDtl_left);
	} else if (orderedfrom == 'QRScan') {
		var tablenumber = response.vendors.T1[0].data.orderinfo[0].tablenum;
		var customerNameDtl_left_html = '' + customer_name + ',  ';
		customerNameDtl_left_html += ' <i class="icon-phone"></i>' + customer_mobil + '<br>';
		customerNameDtl_left_html += '' + vendor_name + '<br>';
		customerNameDtl_left_html += '' + tablenumber + '<br>';
		customerNameDtl_left.append(customerNameDtl_left_html);
		customerNameDtlmain.append(customerNameDtl_left);
	}

		else if (orderedfrom == 'TakeOrder') {

		 var  table = getParameterByName('seatnum');
	   	 var rownum = getParameterByName('row');
		var customerNameDtl_left_html = '';
		customerNameDtl_left_html += '' + rownum + '<br>';
		customerNameDtl_left_html += '' + table + '<br>';
		customerNameDtl_left.append(customerNameDtl_left_html);
		customerNameDtlmain.append(customerNameDtl_left);
	}
	
	var customerNameDtl_right = $('<div class="customerNameDtl_right"></div>');
	var html = '<p class="totalsection">Grand Total <span>'+Rupee + grandtotal + '</span></p><button class="btn btn-a confirmorderpopdummy">Confirm Order</button>'
	customerNameDtl_right.append(html);
	customerNameDtlmain.append(customerNameDtl_right);
	var vendorNameDtsl = $('<div class="vendorNameDtsl"></div>');
	var vendorhtml = '<h6>' + vendor_name+ ' <i class="icon-phone phoneno">' + vendor_cell +'</i></h6><span>' + numberofitems + ' Items</span>';
	vendorNameDtsl.append(vendorhtml);
	var rowdiv = $('<div class="row"></div>');
	var TreeMenu_Contentdiv = $('<div class="TreeMenu_Content" id="leafcontenttree"></div>');
	var itemshtml = '';
	for (var i = 0; i < items_data.length; i++) {
		var item_name = items_data[i].name;
		var quantity = items_data[i].quantity;
		var toppings = items_data[i].toppings;
		var crusts = items_data[i].crusts;
		var toppings_data = toppings.join();
		var crustings_data = crusts.join();
		var strikeprice_cutoff = items_data[i].strikeprice_cutoff;
		var discount_div = items_data[i].discount_div;

		var strikestyle = 'none';
		var additionstyle = 'none';
		var vegornonveg = items_data[i].vegornonveg;
		var vegornonvegclass = '';
		var toppstyle = 'none';
		var cruststyle = 'none';
		var stylewhat = 'none';
		var topping_name = items_data[i].topping_name;
		var crusting_name = items_data[i].crusting_name;
		var ifcontainspercentagesymbol = discount_div.indexOf("percent");


	if (ifcontainspercentagesymbol == -1) {
			discount_div = discount_div.replace("  Rs off", "");
			discount_div = discount_div;
			stylewhat = 'inline-block';


		if (discount_div <= 0) {
		} else {
				discount_div = discount_div + " off" ;
		}

		} else if (ifcontainspercentagesymbol != -1) {
			discount_div = discount_div.replace("percent", "%");
			stylewhat = 'none';
		}

	
		if (discount_div <= 0) {
			strikestyle = 'none';
		} else {
			strikestyle = 'block'
		}

		var price = items_data[i].price;
		var additions = items_data[i].additions;
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

			var toppings_quantitywise = items_data[i].toppings_quantitywise;
		var crustings_quantitywise = items_data[i].crustings_quantitywise;



		var jsontoppings = JSON.parse(toppings_quantitywise);

		var jsoncruts = JSON.parse(crustings_quantitywise);

		
var headerstyle = '';
var divhtmltoppcrust = '';
for (var l = 0; l < quantity; l++) {
	var toppingsul = '';
	var crustsul = '';
        for (var qty in jsontoppings) {
    var number = qty.match(/\d+/g);
            var s = l+1;
            if(number==s)
            {
    if (number.length) {
        number = number[0];
        
      
        toppingsul += jsontoppings[qty].values.join();
      
        
    }
            }
}
        
	
		for (var qty in jsoncruts) {
			var number = qty.match(/\d+/g);
             var s = l+1;
                        if(number==s)
                        {   
			if (number.length) {
				number = number[0];
				//crustsul += "<li>" + jsoncruts[qty].values.join(",") + "</li>";
				crustsul += jsoncruts[qty].values.join();
				
			}
        }
		}
	var item = l + 1;
    
     toppingstyle = (toppingsul!='') ? "block":"none";
            cruststyle = (crustsul!='') ? "block":"none";
    
    
         if(toppingsul==''&&crustsul=='')
    {
        headerstyle = 'none';
    }
    else
    {
        headerstyle = 'block';
    }
    
   
   
   divhtmltoppcrust+='<div class="addonsList_inner" style="display:'+headerstyle+'"><span class="itemheading">Item '+item+'</span><span class="topcrust_itemlsit" style="display:'+toppingstyle+'"><b>'+topping_name+': </b>'+toppingsul+'</span><span class="topcrust_itemlsit" style="display:'+cruststyle+'"><b>'+crusting_name+': </b>'+crustsul+'</span></div>';
   
   
	
}


		itemshtml += '<div class="lastItm_Wrap orders_margin_padding_none">\
								<div class="prd_title"><h3 class="' + vegornonvegclass + '">' + item_name + '</h3></div>\n\
                            <div class="Itm_left_aside">\n\
                                <div class="Itm_dtsl">\n\
                                    <div class="Qty_Wrap">\n\
                                        <p><b>Qty '+qtywise + quantity + '</b></p>\n\
                                    </div>\n\
                                  <div class="addonsList">' + divhtmltoppcrust + ' </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="Itm_right_aside">\n\
                           <p style="display:' + strikestyle + ';"><strike> ' +Rupee+ strikeprice_cutoff + '</strike><span class="offRed" style="display:'+stylewhat+';">'+Rupee+'</span> <b class="offRed">'+discount_div+'  </b></p>\n\
                                <p><b>'+Rupee+ price + '</b></p>\n\
                                <p style="display:' + additionstyle + ';"><span>Additions:</span>  <b>'+Rupee + additions + '</b></p>\n\
                            </div>\n\
                        </div>';
	}
	TreeMenu_Contentdiv.html(itemshtml);
	rowdiv.append(TreeMenu_Contentdiv);
	var orderSummary_priceDtsl = $('<div class="orderSummary_priceDtsl"></div>');
	var orderdisplayhtml = '';
	for (var h = 0; h < orderOfdisplay.length; h++) {
		var tax_name = orderOfdisplay[h];
		var tax_value = response.vendors.T1[0].data.tax_details[orderOfdisplay[h]];
		if (tax_value && tax_value != 0) {

			if(tax_name)
			{
			if(tax_name=='convenience_charges')
			{
				tax_name = 'Convenience Charges'
			}

			if(tax_name=='delivery_charges')
			{
				tax_name = 'Delivery Charges'
			}
			}
				 tax_value = parseFloat(tax_value).toFixed(2);
            
				 if(localStorage.getItem('locationbasednamevendor')!='India' && tax_name=='Discount' )
                    {
                        
                    }
                    else
                    {
               orderdisplayhtml += '<li>' + tax_name + '<span>'+Rupee+'' + tax_value + '</span></li>';
                    }
           
           
           
                 //   orderdisplayhtml += '<li>' + tax_name + '<span>'+Rupee + tax_value + '</span></li>';
		}
	}
	orderdisplayhtml += '<li class="totalsection">Grand Total <span> '+Rupee + grandtotal + '</span></li>';
	orderSummary_priceDtsl.append(orderdisplayhtml);
	var commentWrap = ' <div class="commentWrap">\
                        	<i class="iLabel taxeslabel">Note: Total Amount is inclusive of taxes and charges, as applicable for each individual item</i>\n\
                        	<textarea class="writecomments" data-role="none"   maxlength="150" placeholder="Write Comments"></textarea>\n\
							<i class="iTerms" id="ventermsandc">By Clicking Confirm Order I agree to the   <a href="http://loteasy.com:8080/customer/vendorDenmark.html">Terms &amp; Conditions</a></i>\n\
                        </div>';


                      
	rowdiv.append(orderSummary_priceDtsl).trigger('create');
	rowdiv.append(commentWrap).trigger('create');
	var twobtnsdiv = '<div class="twobtns">\
                        <a class="btn btn-b editorder">Edit Order</a>\n\
                    	<a   href="#confirmOrder_pop" class="btn btn-a" data-rel="popup" data-position-to="window" >Confirm Order</a>\n\
                    </br></br></div>\n\
					<div class="cancelOrder_div"><a href="#cancelOrder_pop" data-rel="popup" data-position-to="window"  class="cancelOrder">Cancel Order</a></div>';
	rowdiv.append(twobtnsdiv);

	 


	$(".MyOrdersdisplay").append('<div class="customerNameDtl"></div><div class="customerNameDtl_left">' + customerNameDtl_left_html + '</div><div class="customerNameDtl_right">' + html + '</div><div class="vendorNameDtsl">' + vendorhtml + '</div><div class="row"><div class="TreeMenu_Content" style="display:block">' + itemshtml + '</div><div class="orderSummary_priceDtsl">' + orderdisplayhtml + '</div>' + commentWrap + twobtnsdiv + '</div>');

	$(".MyOrdersdisplay").show();
//	$(".myOrderPanel_footer").hide();

	$('#mainmyordersdiv').hide();
	$('#myordersfinal').hide();

	 if(showtaxesornot=='1')
                        {
                        
                        		$(".taxeslabel").show();
                        		
                        }
                        else
                        {
                        $(".taxeslabel").hide();
                        }

						 var headertext = $('.headvendnametext').text();


if (headertext === 'Order Summary') {
        
            $(".myOrderPanel_footer").hide();
        
        }
		else
		{
			  $(".myOrderPanel_footer").show();
		}


                    }

                    var comments_val = window.sessionStorage.getItem("comments");

if(!comments_val)
{

	comments_val = '';
}

$("#customerpage .writecomments").val(comments_val);



                        return false;
}

$(document).on('click', '#customerpage .confirmorderpopdummy', function(event) {
	$("#confirmOrder_pop").popup('open');
	event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;

});
$(document).on("popupbeforeposition", "#customerpage #confirmOrder_pop",function( event, ui ) {
        
            $('#customerpage #custpageerrorlabel').hide();
        
    }); 

function blockMove() {
    //  event.preventDefault() ;
}

$(document).on('click', '#customerpage .editorder', function(event) {
	totalitemselected = [];
	var orderjson = '';
	$('.swiper-slide').removeClass('swiper-slide-active');
	$(".MyOrdersdisplay").hide();
	$(".MyOrdersPage").show();
	$("#myordersfinal").show();
	displaylogicforfooter();

	$('.headvendnametext').text('My Order');
	$(".swiper-container").show();
	ordersplitjson = '';
	totalitemselected.length = 0;
		$(".swiper-pages").hide();
	$(".deletebtn").show();

	nav.update();

	 //$.mobile.resetActivePageHeight();
//	  $('.myOrderPanel_footer').enhanceWithin();

//	event.stopImmediatePropagation();
      //           event.preventDefault();
       //          return false;
});

$(document).on('click', '#customerpage .goback', function(event) {
	$("#confirmOrder_pop").popup('close');
	event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
});	



$(document).on('click', '#customerpage .minorderpopcancelss', function(event) {
	$("#minorder_pop").popup('close');
	event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
});	



$(document).on('click', '#customerpage .confirmorder', function(event) {

       

     if(navigator.connection)
        {
        
           var ifDeviceConnected = checkConnection();

            if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                                     //   $('#customerpage #custpageerrortimepoutlabel').hide();
                                    //    $('#customerpage #custpageerrortimepoutlabel').delay(0).fadeIn(100);

                                $('#customerpage #custpageerrorlabel').hide();
                            $('#customerpage #custpageerrorlabel').delay(0).fadeIn(100);
                                        $('#customerpage #timeoutalertorderplace').popup({history: false}).popup('open');
                                    
                            
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }




    if(ordersplitjson && !ordersplitjson!=='')
    {
    var resultoforderplaced = 'error';
    $("#customerpage #loaderforindex").show(); 
    $("#confirmOrder_pop").popup('close');

    var comments_text = $('.writecomments').val().trim();
    if (comments_text === '') {
        comments_text = 'NA';
    } else {
        comments_text = comments_text;
    }


    ordersplitjson.vendors.T1[0].data.orderinfo[0].comments = comments_text;
    if(localStorage.getItem('locationbasednamevendor')!='India'){
        //praveen
            ordersplitjson.vendors.T1[0].data.orderinfo[0].taxdetails["Cost"]=cost_price;
            ordersplitjson.vendors.T1[0].data.tax_details["Cost"]=cost_price;
        ordersplitjson.vendors.T1[0].data.tax_details.total=parseFloat( ordersplitjson.vendors.T1[0].data.tax_details["Cost"]+tax_contains_value);
        
        ordersplitjson.vendors.T1[0].data.orderinfo[0].taxdetails["total"]=parseFloat( ordersplitjson.vendors.T1[0].data.tax_details["Cost"]+tax_contains_value);
        ordersplitjson.vendors.T1[0].data.orderinfo[0].taxdetails[ordersplitjson.vendors.T1[0].data.tax_order[4]]=tax_contains_value;
    
        
    
        for(var i=0;i<ordersplitjson.vendors.T1[0].data.orderinfo.length;i++){
            ordersplitjson.vendors.T1[0].data.orderinfo[i].total=parseFloat( ordersplitjson.vendors.T1[0].data.tax_details["Cost"]+tax_contains_value);
            ordersplitjson.vendors.T1[0].data.orderinfo[i].Cost=cost_price;
            
            ordersplitjson.vendors.T1[0].data.orderinfo[i].GST=tax_contains_value;
        }
        }
   
    //ordersplitjson = JSON.stringify(ordersplitjson);

    var homedelivery = '';
    var seatnum = '';
    var rownum = '';

    if (tablenum === 'HomeDelivery') {
        homedelivery = 'Yes';
    }

    if (tablenum === 'TakeOrder') {
        homedelivery = 'No';


        seatnum = getParameterByName('seatnum');
        rownum = getParameterByName('row');

    } else {
        homedelivery = 'No';
        seatnum = tablenum;
        rownum = seatnum;
    }


    if (accessedfrom === 'homedelivery') {
        homedelivery = 'Yes';
    } else if (accessedfrom === 'scanqrpage') {
        homedelivery = 'No';
    }



    var location_nam = $.trim($(".headscreentext").text());




    var orderinfo = {
      'ordersplitjson': JSON.stringify(ordersplitjson),
        'customer_id': cust_id,
        'homedelivery': homedelivery,
        'seatnum': seatnum,
        'locationname': location_nam,
        'rownum': rownum
    };
    var json_data = JSON.stringify(orderinfo);




    var ajaxcallquery = $.ajax({
        type: 'POST',
        dataType: 'json',
        data: json_data,
        cache: false,
        async: true,
        contentType: "application/json; charset=utf-8",
        url: url + '/orderinsertservice',
        timeout: 10000,
        beforeSend: function() {
            $("#customerpage #loaderforindex").show();
        },
        complete: function() {
            $("#customerpage #loaderforindex").hide();
        },
        success: function(response) {
            
                if(response)
                {
            var result = response.result;
            resultoforderplaced = 'success';
            }
            else if(!response)
            {
                    resultoforderplaced = 'error';
                  $('#customerpage #custpageerror').popup({history: false}).popup('open');
            }
        },
       error: function(jqXHR, exception) {

           if (jqXHR.status === 0 || exception === 'timeout') {
                $('#customerpage #timeoutalertorderplace').popup({history: false}).popup('open');
            }
            else
            {
                 $('#customerpage #custpageerror').popup({history: false}).popup('open');
            }
        }
    });
   ajaxcallquery.done(function() {
                
        if (resultoforderplaced == 'success') {
                    $("#customerpage #orderplaced_succ").popup("open" );
                    $("#customerpage #loaderforindex").hide();
        } 
        else if (resultoforderplaced == 'error') 
        {
                $("#customerpage #orderplaced_error").popup("open" );
                $("#customerpage #loaderforindex").hide();
        }
    
        
    });
}

event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;

});

 	$(document).on('click', '.cancelyes', function(event) {

            

    if (navigator.connection) {
        var ifDeviceConnected = checkConnection();
        if (ifDeviceConnected === 'Nonetwork' || ifDeviceConnected === 'none') {
            $('#customerpage #cancelOrder_pop').popup("close");
            $('#customerpage #timeoutalertcancel').popup({history: false}).popup('open');
        } else {
        	localStorage.setItem('showpickitemspage', 'no');
            sessionStorage.clear();
		 $("#customerpage .orderplaced_succclose").trigger("click");
			return false;
            
        }

    }

    event.stopImmediatePropagation();
    event.preventDefault();
    return false;

});	
var timer;
$(document).on('click', '#customerpage .orderplaced_errorclose', function(event) {
    $('#orderplaced_error').popup('close');
});


			  $(document).on('click', '#customerpage .orderplaced_succclose', function(event) {
			  deviceInfo() 
			    $("#customerpage #loaderforindex").show();
			      orderjson = '';
			      ordersplitjson = '';
				   sessionStorage.clear();
			          window.sessionStorage.setItem("isloggedIn", "yes");
			          localStorage.setItem('showpickitemspage', 'no');
			          	urlforvendor = decodeURIComponent(urlforvendor);
  var url_params = urlforvendor.split('?');
  window.location.replace('../vc/index.html?' + url_params[1]);
                           $('#customerpage #orderplaced_succ').popup('close');
                        return false;
        			  });


function refreshPage() {
  $.mobile.changePage(
    window.location.href,
    {
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
}



	$(document).on('click', '#customerpage .cancelno', function(event) {
	$("#cancelOrder_pop").popup('close');
	event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
	});


	$(document).on('click', '#customerpage .deletebtn', function(event) {

    $('#itemdelpopup').popup({
        history: false
    }).popup('open');

    clickedTD = $(this).closest('.lastItm_Wrap');

    event.stopImmediatePropagation();
    event.preventDefault();
    return false;

});

function Redirect()
{

 localStorage.setItem('showpickitemspage', 'no');

  clearTimeout(timer);
  urlforvendor = decodeURIComponent(urlforvendor);
  var url_params = urlforvendor.split('?');
  window.location.replace('../vc/index.html?' + url_params[1]);
 
}

function deviceInfo() 
{
 
            document.addEventListener("backbutton", onBackKeyDown, true);
} 

function onBackKeyDown(e) 
{
     document.removeEventListener("backbutton", onBackKeyDown, false);
         $("#customerpage #loaderforindex").show();
	 e.preventDefault();
	 
	
    
}
$(document).on('click', '#customerpage #yesclick', function(event)
	{

        var numItems = $('#myordersfinal .lastItm_Wrap').length;

            if(numItems==1)
            {

                    if(navigator.connection)
                {
             var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                            $("#customerpage #itemdelpopup").popup("close");
                           $('#customerpage #timeoutalert').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }
                
            }

		 
var id = clickedTD.attr('id');
if(id)
{
id = id.trim();

	var price = clickedTD.find('.Itm_right_aside .sellprice').text();
		var additions = clickedTD.find('.Itm_right_aside .additions').text();
		var totalremovedvalue = parseFloat(price) + parseFloat(additions);
		var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
		subtotalvalue = parseFloat(subtotalvalue - totalremovedvalue).toFixed(2);
		$(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
		$(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
		var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
		var quantity = parseInt(clickedTD.find('.Itm_left_aside').find('.Itm_dtsl').closest('div').find('.QtyInput').attr('value'));
		$(".myOrderPanel_footer .myorders").data('myorders', (myorders_quantityvalue - quantity));
		checkfororderslength();
		var myorders_value_afteradd = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
		$(".myOrderPanel_footer .myorders .myordersiclass").text(myorders_value_afteradd);
		var vendoritemsdata = $('#myordersfinal').find("#" + id).data('stuff');

		
		for (var i = 0; i < vendoritemsdata.length; i++)
		{
			var name = vendoritemsdata[i].name;
			window.sessionStorage.setItem(name, false);
		}
		
		$("#myordersfinal").find("#" + id).remove();
		displaylogicforfooter();
		var vendoritemsdatass = [];
		vendoritemsdatass.length = 0;
		$('.lastItm_Wrap').find("#" + id).data('stuff', vendoritemsdatass).attr('data-stuff', JSON.stringify(vendoritemsdatass));

		 window.sessionStorage.removeItem(id + ''); 
		 	var dummyid = id.replace("lastwrap","");
		 window.sessionStorage.removeItem(dummyid + '');


var mainmyordersdivheight = 	 $('#customerpage').height();
mainmyordersdivheight  = parseInt(mainmyordersdivheight);
if(mainmyordersdivheight<=550)
	{


	
	$(window).resize();
		}


		   $("#itemdelpopup").popup("close");
		 // $.mobile.resetActivePageHeight();
		event.stopImmediatePropagation();
		event.preventDefault();
		return false;
}

});


$(document).on('click', '#customerpage #noclick', function(event)
	{

  $("#itemdelpopup").popup("close");

});
 function checkfororderslength()
 {

 	if(pagebelongsto=='customer')
 	{
 	  var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
 		if(myorders_quantityvalue<=0)
 		{
		$(":mobile-pagecontainer" ).pagecontainer( "change", "index_dup.html?UUID=" + UUID + '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row  , { allowSamePageTransition:true,reload:true,transition: "none"});
return false;
 		}   
 		if(myorders_quantityvalue==='')
 		{
		$(":mobile-pagecontainer" ).pagecontainer( "change", "index_dup.html?UUID=" + UUID + '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row  , { allowSamePageTransition:true,reload:true,transition: "none"});
return false;
 		}
 		if(!myorders_quantityvalue)
 		{
		$(":mobile-pagecontainer" ).pagecontainer( "change", "index_dup.html?UUID=" + UUID + '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row  , { allowSamePageTransition:true,reload:true,transition: "none"});
return false;
}
return false;
}

 	else if(pagebelongsto=='vendortakeorder')
 	{


  var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
 		if(myorders_quantityvalue<=0)
 		{
 			window.location.reload();
 		}   
 		if(myorders_quantityvalue==='')
 		{
 			window.location.reload();
 		}
 		if(!myorders_quantityvalue)
 		{
 			window.location.reload();
		}
return false;


 	}


 }



$(document).on('click', '#customerpage .timeoutalertclose', function(event) 
{
    $('#timeoutalert').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on('click', '#customerpage .noitemsclose', function(event) 
{
    $('#customerpage #noitems').popup("close");

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on('blur', '#customerpage .writecomments', function(event) {
 			var comments_text_dup = $('#customerpage .writecomments').val().trim();	
 			window.sessionStorage.setItem('comments', comments_text_dup);		
		  
	});


$(document).on('click', '#customerpage .timeoutalerttryagainclose', function(event) 
{
$('#customerpage #timeoutalerttryagain').popup("close" );
 	  window.sessionStorage.setItem("isloggedIn", "yes");
			urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')

	//	$(":mobile-pagecontainer" ).pagecontainer( "change", "index_dup.html?UUID=" + UUID + '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row  , { allowSamePageTransition:true,reload:true,transition: "none"});

		//   window.location = "index_dup.html?"+url_params[1]; 

		   window.location.replace("index_dup.html?"+url_params[1]); 

		  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



$(document).on('click', '#customerpage .timeoutalertcancelclose', function(event) 
{
$('#customerpage #timeoutalertcancel').popup("close" );
 	  window.sessionStorage.setItem("isloggedIn", "yes");
			urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')
		   window.location.replace("../vc/index.html?"+url_params[1]); //  order from vendor take order

});

$(document).on('click', '#customerpage .custpageerrorclose', function(event) 
{
    $('#customerpage #custpageerror').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on('click', '#customerpage .notoppcrustsclose', function(event) 
{
$('#customerpage #notoppcrusts').popup("close" );
     
 event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

$(document).on('click', '#customerpage .timeoutalertorderplaceclose', function(event) 
{               $('#customerpage #custpageerrorlabel').hide();
                   //     $('#customerpage #custpageerrortimepoutlabel').hide();
                            $('#customerpage #timeoutalertorderplace').popup("close");
                      $(".confirmorder").trigger("click");




     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on("popupbeforeposition", "#customerpage #timeoutalertorderplace",function( event, ui ) {

$('#customerpage #custpageerrorlabel').hide();
//$('#customerpage #custpageerrortimepoutlabel').hide();

    });  

$(document).on("popupafterclose", "#customerpage #timeoutalertorderplace",function( event, ui ) {
$('#customerpage #custpageerrorlabel').hide();
//$('#customerpage #custpageerrortimepoutlabel').hide();

    });  


// $(document).on('click', '#customerpage #ventermsandc', function(event) {

//  window.open('http://loteasy.com:8080/customer/vendortermsandconditions.html', '_blank', 'location=no');
//   event.stopImmediatePropagation();
//                             event.preventDefault();
//                             return false;
// }); 