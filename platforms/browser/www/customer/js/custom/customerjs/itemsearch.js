var itemssearchpageloaded = false;

$(document).on('click', '#itemssearchpage .pickitemshomesearch ', function(event) {


  if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
            if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                               $('#itemssearchpage #timeoutalertsearchpage').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }


  
  var calledfrom = 'searchpage' ;
  try
  {



    $(".ui-page:not(:visible)").remove();

/*
      	$(":mobile-pagecontainer" ).pagecontainer( "change", "index_dup.html?UUID="+UUID+ '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row+ '&calledfrom=' + calledfrom
+ '&location_id=' + location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' +VID+ '&vendor_name=' + vendor_name+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId
+ '&sName=' + sName+ '&customer_id=' + customer_id  , { allowSamePageTransition:true,reload:true,transition: "none"});
    event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
*/


window.location.replace("index_dup.html?UUID="+UUID+ '&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel+ '&accessedfrom=' + accessedfrom+ '&tablenum=' + tablenum+ '&redirectedfrom=' + redirectedfrom+ '&seatnum=' + seatnum+ '&row=' + row+ '&calledfrom=' + calledfrom
+ '&location_id=' + location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' +VID+ '&vendor_name=' + vendor_name+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId
+ '&sName=' + sName+ '&customer_id=' + customer_id);

event.stopImmediatePropagation();
                 event.preventDefault();
                 
           return false;



  }
  catch (ex)
  {
    alert(ex);
  }


 event.stopImmediatePropagation();
  event.preventDefault();
  return false;

  });

  


$(document).on('click', '#itemssearchpage .searchBackbtnClass ', function(event) {

	$( "#itemssearchpage .pickitemshomesearch" ).trigger( "click" );
    event.stopImmediatePropagation();
  event.preventDefault();
  return false;

  });



 function leafResponseforsearchpage(resarray)
{
  $('#searchTreeMenu_Content').html("");
  var vendor_items_ids = [];
  var itemshtml = '';
  var dotsbtn_style = 'none';
  var addnsstyle = 'none';
  var showstrikeandoff = 'none';
  var desc_style = 'none';
  var rupeeappend = '&#x20B9';
  var discountappend = '% off';
  var addonstyles = 'none';
  var textdata = '';
  var ruppesty = '';
  var discsty = '';
  for (var i = 0; i < resarray.length; i++)
  {

    var item_name = resarray[i].item_name;
    var priceInStrike = parseFloat(resarray[i].cost).toFixed(2);
    var priceInStrikestatic = parseFloat(resarray[i].cost).toFixed(2);
    var selling_price = parseFloat(resarray[i].selling_price).toFixed(2);
    var selling_price_static = parseFloat(resarray[i].selling_price).toFixed(2);
    var description = resarray[i].description;
    var discount_price = parseFloat(resarray[i].Discount).toFixed(2);
    var discount_price_static = parseFloat(resarray[i].Discount).toFixed(2);
    var has_topping = resarray[i].has_topping;
    var has_crust = resarray[i].has_crust;
    var vendoritemsid = resarray[i].vendor_items_id;
    var tobeappend = '';
    var vegornonVeg = resarray[i].is_non_vegetarian;
    var vegornonvegclass = '';
    var vegornondata = '';
    var topping_name = resarray[i].topping_b_name;
    var crust_name = resarray[i].crust_b_name;
    var image_name = resarray[i].image;
    if (image_name === '')
    {
      image_name = 'images/icon_logo.png';
    }
    else
    {
      image_name = image_name;
    }
    if (discount_price == 0)
    {
      showstrikeandoff = 'none';
    }
    else
    {
      showstrikeandoff = 'block';
    }
    var is_percent = resarray[i].is_percent;
    if (is_percent === '1')
    {
      tobeappend = discountappend;
      ruppesty = 'none';
      textdata = '% off';
      discsty = 'inline-block';
    }
    else if (is_percent === '0')
    {
      tobeappend = rupeeappend;
      ruppesty = 'inline-block';
      textdata = 'off';
      discsty = 'none';
    }
    if (description !== '')
    {
      dotsbtn_style = 'block';
      description = description.replace(/(\r\n|\n|\r)/gm, "");
    }
    else
    {
      dotsbtn_style = 'none';
    }
    if (has_crust == '1' || has_topping == '1')
    {
      addonstyles = 'block';
    }
    else
    {
      addonstyles = 'none';
    }
    if (vegornonVeg == '0')
    {
      vegornonvegclass = 'vegLabel';
      vegornondata = 'vegterian';
    }
    else if (vegornonVeg == '1')
    {
      vegornonvegclass = 'nonvegLabel';
      vegornondata = 'nonvegterian';
    }
    var val_sess = JSON.parse(window.sessionStorage.getItem("lastwrap" + vendoritemsid));
    var quan = "";
    if (val_sess)
    {
      quan = val_sess.itemquant;
      if (quan)
      {
        selling_price = parseFloat(selling_price * quan).toFixed(2);
        priceInStrike = parseFloat(priceInStrike * quan).toFixed(2);
        if (is_percent === '1')
        {
          discount_price = discount_price_static
        }
        else
        {
          discount_price = parseFloat(discount_price * quan).toFixed(2);
        }
      }
      else
      {
        quan = "";
      }
    }
    var totalcost = 0;

    var for_additionssession_data = JSON.parse(window.sessionStorage.getItem(vendoritemsid + ''));

    

    if (for_additionssession_data!=null && for_additionssession_data.length>0)
    {
      for (var h = 0; h < for_additionssession_data.length; h++)
      {
        totalcost = parseFloat(totalcost) + for_additionssession_data[h].cost;
      }
      vendor_items_ids.push(vendoritemsid);
      
    }
    if (totalcost > 0)
    {
      addnsstyle = 'block';
    }
    else
    {
      addnsstyle = 'none';
    }
    totalcost = totalcost.toFixed(2);
    itemshtml += '<div class="lastItm_Wrap" id="lastwrap' + vendoritemsid + '" data-stuff="[]" data-vegornonveg="' + vegornondata + '"  data-lastwrapquan="0">\
                                                    <div class="prd_title"><h3 class="' + vegornonvegclass + '" data-sellprice="' + selling_price + '" data-sellpricestatic="' + selling_price_static + '"   data-discprice="' + discount_price + '" data-discpricestatic="' + discount_price_static + '"  data-strikeprice="' + priceInStrike + '" data-strikepricestatic="' + priceInStrikestatic + '"  data-ispercent="' + is_percent + '" >' + item_name + '<button style="display:' + dotsbtn_style + ';" class="btn-d icon-ellipsis prdDiscription"></button></h3></div>\
                                                    <div class="Itm_left_aside">\
                                                        <div class="Itm_img">\
                                                        <img id="imagesd" type="img" height="40" width="40"     src="' + image_name + '"/>\
                                                        </div>\
                                                        <div class="Itm_dtsl">\
                                                            <div class="Qty_Wrap">\
                                                                <button class="btn-d icon-minus QtyBtn"></button>\
                                                                <input type="text" class="QtyInput" value="' + quan + '" readonly/>\
                                                                <button class="btn-d icon-plus QtyBtn"></button>\
                                                            </div>\
                                                            <button style="display:' + addonstyles + ';" class="btn-d addonsBtn" data-toppname="' + topping_name + '" data-crutsname="' + crust_name + '"  data-atrr="' + vendoritemsid + '"><a  data-rel="popup" data-position-to="fixed"  >Addons</a></button>\
                                                        </div>\
                                                    </div>\
                                                <div class="Itm_right_aside" data-percentage="' + is_percent + '">\
<p style="display:' + showstrikeandoff + ';">&#x20B9 <strike class="strikeprice">' + priceInStrike + '</strike> <span style="display:' + ruppesty + ';" class="tobeappend offRed">' + tobeappend + '</span> <span class="discprice offRed">' + discount_price + '</span> <span class="offRed" style="display:' + ruppesty + ';">' + textdata + '</span> <span class="offRed" style="display:' + discsty + ';">' + textdata + '</span> </p>\
                                                        <p>&#x20B9 <b class="sellprice"> ' + selling_price + '</b></p>\
                                                        <p class= "additionsclassstyle" style="display:' + addnsstyle + ';"><span >Additions:&#x20B9</span>  <b class="additions">' + totalcost + '</b></p>\
                                                    </div>\
                                                    <div class="Itm_discrp" style="display:none;"><h3>' + item_name + '</h3>' + description + '</div>\
                                                </div>\
                                                <div data-role="popup" class="addonpopup" data-history="false" data-shadow="false" data-overlay-theme="a" data-dismissible="true"   id="addonsWrap' + vendoritemsid + '"   data-theme="a">\
                                                </div>';
  }
    if(resarray.length==0)
  {
    itemshtml +='<div class="NoRestaurantsWrap" style="">\
              <div class="emptyIcon"><i class="icon-emo-unhappy"></i></div>\
              <span class="emptyText">No Items Found</span>\
              </div>';
  }
  $('#searchTreeMenu_Content').html(itemshtml).trigger('create').trigger('pagecreate');
  
  
  for (var h = 0; h < vendor_items_ids.length; h++)
  {
    $("#lastwrap" + vendor_items_ids[h]).find('.addonsBtn').addClass('active');
    var for_top_crus_data = JSON.parse(window.sessionStorage.getItem(vendor_items_ids[h] + ''));
    if (!!for_top_crus_data)
    {
      $("#lastwrap" + vendor_items_ids[h]).data('stuff', for_top_crus_data).attr('data-stuff', JSON.stringify(for_top_crus_data));
    }

  }
  
}



$(document).on('click', '#itemssearchpage .icon-plus', function(event)
{
  var idval = $(this).parents('.lastItm_Wrap').first().attr('id');
  var quan = 1;
  var val_sess = JSON.parse(window.sessionStorage.getItem(idval));
  if (val_sess)
  {
    quan = val_sess.itemquant;

    if(!quan)
    {
      quan = 1;
    }
  }
  var currentval = $(this).closest('div').find('.QtyInput').attr('value');
  if (currentval === '')
  {
    currentval = 0;
  }
  else
  {
    currentval = parseInt(currentval);
  }
  var currentQuantity = parseInt(currentval + 1);
  var currentSellprice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('sellpricestatic'));
  var currentDiscountPrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('discpricestatic'));
  var currentStrikePrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('strikepricestatic'));
  var currentPercent = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('ispercent'));
  if (currentQuantity == 0)
  {
    currentQuantity = 1;
  }
  $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .sellprice').text(parseFloat(currentSellprice * currentQuantity).toFixed(2));
  $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .strikeprice').text(parseFloat(currentStrikePrice * currentQuantity).toFixed(2));
  if (currentPercent == 0)
  {
    $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .discprice').text(parseFloat(currentDiscountPrice * currentQuantity).toFixed(2));
  }
  $(this).closest('div').find('.QtyInput').attr('value', currentQuantity);
  $(this).closest('div').find('.QtyInput').val(currentQuantity);
  var datainsession = {
    itemquant: currentQuantity
  };
  window.sessionStorage.setItem(idval + '', JSON.stringify(datainsession));
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

$(document).on('click', '#itemssearchpage .icon-minus', function(event)
{
  var idval = $(this).parents('.lastItm_Wrap').first().attr('id');
  var val_sess = JSON.parse(window.sessionStorage.getItem(idval));
  var currentval = $(this).closest('div').find('.QtyInput').attr('value');
  if (val_sess)
  {
    currentval = val_sess.itemquant;
    if(currentval)
    {
      currentval = currentval-1;
    }
  }
  else
  {
    currentval = "";
  }
    if(currentval==0)
    {
      currentval = "";
    }
  if(currentval!="" && currentval>0)
  {
  var currentSellprice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('sellpricestatic'));
  var currentDiscountPrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('discpricestatic'));
  var currentStrikePrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('strikepricestatic'));
  var currentPercent = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('ispercent'));
  $("#" + idval).find('.Itm_right_aside .sellprice').text(parseFloat(currentSellprice * currentval).toFixed(2));
  $("#" + idval).find('.Itm_right_aside .strikeprice').text(parseFloat(currentStrikePrice * currentval).toFixed(2));
  if (currentPercent == 0)
  {
    $("#" + idval).find('.Itm_right_aside .discprice').text(parseFloat(currentDiscountPrice * currentval).toFixed(2));
  }
  $("#" + idval).closest('div').find('.QtyInput').attr('value', currentval);
  $("#" + idval).closest('div').find('.QtyInput').val(currentval);

  removeadditionsfrombothplacessearch(currentval,idval)
}
  
 var datainsession = {
    itemquant: currentval
  };

  if(currentval!="" && currentval>0)
  {
  window.sessionStorage.setItem(idval + '', JSON.stringify(datainsession));
  }
else
{

  $("#" + idval).closest('div').find('.QtyInput').attr('value', currentval);
  $("#" + idval).closest('div').find('.QtyInput').val(currentval);
  removeadditionsfrombothplacessearch(currentval,idval);
  //console.log(idval);

  window.sessionStorage.removeItem(idval + '');

  var dummy_idval = idval.replace("lastwrap" , "");

  window.sessionStorage.removeItem(dummy_idval + '');

}

  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



function removeadditionsfrombothplacessearch(value, vendor_item_id)
{
  value = value+1;
  var temp_arry = [];
  var vendoritemsdata = $("#" + vendor_item_id).data('stuff');
  var additionscostdeducted = 0;
  if (vendoritemsdata.length > 0)
  {
    for (var i = 0; i < vendoritemsdata.length; i++)
    {
      var itemname = vendoritemsdata[i].name.indexOf("tab" + value);
      var cost = vendoritemsdata[i].cost;
      if (itemname !== -1)
      {
        var namesss = vendoritemsdata[i].name;
        additionscostdeducted = additionscostdeducted + parseFloat(cost);
        temp_arry.push(namesss);
      }
    }
    for (var i = 0; i < vendoritemsdata.length; i++)
    {
      for (var j = 0; j < temp_arry.length; j++)
      {
        if (temp_arry[j] === vendoritemsdata[i].name)
        {
          window.sessionStorage.setItem(vendoritemsdata[i].name, false);
          vendoritemsdata.splice(i, 1);
        }
      }
    }

     //window.sessionStorage.setItem(removelastwrap + '', JSON.stringify(vendoritemsdata)); 
     //alert(vendor_item_id);
     //console.log(vendor_item_id);

     var dummy_idval = vendor_item_id.replace("lastwrap","");
      window.sessionStorage.setItem(dummy_idval + '', JSON.stringify(vendoritemsdata)); 

    $("#" + vendor_item_id).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
   
    var additionscost_temp = $("#" + vendor_item_id).find('.Itm_right_aside .additions').text();
    additionscost_temp = additionscost_temp - additionscostdeducted;
    $("#" + vendor_item_id).find('.Itm_right_aside .additions').text(additionscost_temp.toFixed(2));
    $('#myordersfinal').find("#" + vendor_item_id).find('.Itm_right_aside .additions').text(additionscost_temp.toFixed(2));
    if (additionscost_temp <= 0)
    {
      $("#" + vendor_item_id).find('.addonsBtn').removeClass('active');
   $("#" + vendor_item_id).find('.Itm_right_aside').find('.additionsclassstyle').hide();
    }
    else
    {
     $("#" + vendor_item_id).find('.Itm_right_aside').find('.additionsclassstyle').show(); 
    }
  }
 
}

$(document).on('keyup', '#itemssearchpage #sr_input', function(event) {

    $('#itemssearchpage .search_btn_a').toggle( !! this.value && !! this.value.length)

}).trigger('keyup');


$(document).on('click', '#itemssearchpage .search_btn_a', function(event) {

  $("#itemssearchpage #sr_input").val('');

  $('#itemssearchpage .search_btn_a').hide();

    event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});




function nospecialCharactersforsearch(evt) {


      evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            
            if (charCode ==37  || charCode==33 || charCode==64 || charCode==36 || charCode==94 || charCode==42 ||charCode==63||charCode==124||charCode==126||charCode==96 || charCode==35 || charCode==95 || charCode==123 || charCode==125 || charCode==91 || charCode==93 || charCode==58 || charCode==59 || charCode==34 || charCode==92 || charCode==60 || charCode==62) {
                return false;
            }
            return true;
    
}





$(document).on('click', '#itemssearchpage .timeoutalertsearchpageclose', function(event) 
{
    $('#itemssearchpage #timeoutalertsearchpage').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

$(document).on('click', '#itemssearchpage .itemsearcherrormsgclose', function(event) 
{
    $('#itemssearchpage #itemsearcherror').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



	
$(document).on('click', '#itemssearchpage .one_quantityitemsearchclose', function(event) 
{
    $('#itemssearchpage #one_quantityitemsearch').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

	$(document).on('click', '#itemssearchpage .notoppcrustsitemsearchclose', function(event) 
{
    $('#itemssearchpage #notoppcrustsitemsearch').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



$(document).on('click', '#itemssearchpage .addonsBtn', function(event)
{

			
			if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
            if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                               $('#itemssearchpage #timeoutalertsearchpage').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }
			
			
  
	 $("#itemssearchpage #sr_input").blur();

  var vendoritemsid = $(this).attr('data-atrr');
  var quantity = $(this).closest(".Itm_dtsl").find(".QtyInput").val();
  var topping_name = $(this).attr('data-toppname');
  var crusting_name = $(this).attr('data-crutsname');
  if (quantity)
  {
    $.ajax(
    {
      type: 'GET',
      url: url + '/fetchtoppscrusts?vendoritemid=' + vendoritemsid,
      jsonpCallback: 'jsonCallbacktopcruts',
      cache: false,
      dataType: 'jsonp',
      jsonp: false,
      timeout: 10000,
	  async: true,
      beforeSend: function()
      {
          $("#itemssearchpage #loaderforsearch").show();
      },
      complete: function()
      {
           $("#itemssearchpage #loaderforsearch").hide();
      },
      success: function(response)
      {
        var clickevent = 'itemclick';
        var tabnumber = 1;
        var toppings = [];
        var crustings = [];
        for (var i = 0; i < response.length; i++)
        {
          toppings = response[i].toppings;
          crustings = response[i].crustings;
        }
        if (toppings.length == 0 && crustings.length == 0)
        {
            $('#itemssearchpage #notoppcrustsitemsearch').popup({history: false}).popup('open');
        }
        else
        {
          showtoppsandcrusts(response, quantity, vendoritemsid, clickevent, tabnumber, topping_name, crusting_name);
        }
        //  
      },
  error: function(jqXHR, exception) {



			  if (jqXHR.status === 0 || exception === 'timeout') {
             $('#itemssearchpage #timeoutalertsearchpage').popup({history: false}).popup('open');
            }

            	else
            	{
            		 $('#itemssearchpage #itemsearcherror').popup({history: false}).popup('open');
            	}

}

    });
  }
  else
  {
    
    $('#itemssearchpage #one_quantityitemsearch').popup({history: false}).popup('open');
  }
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



 

