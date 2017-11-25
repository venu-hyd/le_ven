$(document).on('click', '#customerpage .TreeMenu .icon-minus', function(event)
{
  var idval = $(this).parents('.lastItm_Wrap').first().attr('id');
  var currentval = $("#" + idval).find('.QtyInput').attr('value');
  var currentQuantity = parseInt(currentval - 1);
  var currentSellprice = parseFloat($("#" + idval).find('.prd_title h3').data('sellpricestatic'));
  if (currentQuantity > 0)
  {
    var currentDiscountPrice = parseFloat($("#" + idval).find('.prd_title h3').data('discpricestatic'));
    var currentStrikePrice = parseFloat($("#" + idval).find('.prd_title h3').data('strikepricestatic'));
    var currentPercent = parseFloat($("#" + idval).find('.prd_title h3').data('ispercent'));
    $("#" + idval).find('.Itm_right_aside .sellprice').text(parseFloat(currentSellprice * currentQuantity).toFixed(2));
    $("#" + idval).find('.Itm_right_aside .strikeprice').text(parseFloat(currentStrikePrice * currentQuantity).toFixed(2));
    if (currentPercent == 0)
    {
      $("#" + idval).find('.Itm_right_aside .discprice').text(parseFloat(currentDiscountPrice * currentQuantity).toFixed(2));
    }
    $("#" + idval).closest('div').find('.QtyInput').attr('value', currentQuantity);
    $("#" + idval).closest('div').find('.QtyInput').val(currentQuantity);
    calculatesubtotalvalue(currentSellprice)
    reducequantitytoMyordersfooter();
    addToMyOrdersDiv();
    var dummycu = currentQuantity+1;
    removeadditionsfrombothplaces(dummycu, idval);
    
    var datainsession = {
      itemquant: currentQuantity
    };
    window.sessionStorage.setItem(idval + '', JSON.stringify(datainsession));
  }
  else
  {
    $("#" + idval).closest('div').find('.QtyInput').attr('value', 0);
    $("#" + idval).closest('div').find('.QtyInput').val('');
    
    if (currentQuantity == 0)
    {
    
      calculatesubtotalvalue(currentSellprice);
      reducequantitytoMyordersfooter();
      addToMyOrdersDiv();
        var dummycurr = currentQuantity+1;
      removeadditionsfrombothplaces(dummycurr, idval);
      
      window.sessionStorage.removeItem(idval + '');
    }
  }

var additions =$("#" + idval).find('.Itm_right_aside .additions').text();



if(additions>=1)
{
$("#" + idval).find('.Itm_right_aside').find('.additionsclassstyle').show();
}
else
{
$("#" + idval).find('.Itm_right_aside').find('.additionsclassstyle').hide();
}
  
  displaylogicforfooter();
  
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

function calculatesubtotalvalue(currentSellprice)
{
  if(currentSellprice)
  {
    if(currentSellprice>0)
    {
    var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
    subtotalvalue = parseFloat(subtotalvalue - currentSellprice).toFixed(2);

    $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
    $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
    }
  }
}





function removeadditionsfrombothplaces(value, vendor_item_id)
{
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
   
    $("#" + vendor_item_id).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
    $('#myordersfinal').find("#" + vendor_item_id).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
    var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
    subtotalvalue = parseFloat(subtotalvalue - additionscostdeducted).toFixed(2);
    $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
    $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
    var additionscost_temp = $("#" + vendor_item_id).find('.Itm_right_aside .additions').text();
    additionscost_temp = additionscost_temp - additionscostdeducted;
    $("#" + vendor_item_id).find('.Itm_right_aside .additions').text(additionscost_temp.toFixed(2));
    $('#myordersfinal').find("#" + vendor_item_id).find('.Itm_right_aside .additions').text(additionscost_temp.toFixed(2));
    if (additionscost_temp <= 0)
    {
      $('#myordersfinal').find("#" + vendor_item_id).find('.Itm_right_aside .additionsclassstyle').hide();
      $("#" + vendor_item_id).find('.addonsBtn').removeClass('active');
      $('#myordersfinal').find("#" + vendor_item_id).find('.addonsBtn').removeClass('active');
    }

var removelastwrap = vendor_item_id.replace("lastwrap","");

if(vendoritemsdata.length==0)
{
window.sessionStorage.removeItem(removelastwrap + '');
}
else
{
 window.sessionStorage.setItem(removelastwrap + '', JSON.stringify(vendoritemsdata)); 
}

  }
 
}

$(document).on('click', '#customerpage .icon-plus', function(event)
{
  var plusIconClickedFrom = '';
  if ($(this).closest('.TreeMenu').length)
  {
    plusIconClickedFrom = 'TreeMenu';
  }
  else if ($(this).closest('.MyOrdersPage').length)
  {
    plusIconClickedFrom = 'MyOrdersPage';
  }
  var vendoritemsid = $(this).parents('.lastItm_Wrap').first().attr('id');
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
  addquantitytoMyordersfooter();
  var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
  subtotalvalue = parseFloat(subtotalvalue + currentSellprice).toFixed(2);
  $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
  $(".myOrderPanel_footer .subtotal span").text(subtotalvalue)
  if (plusIconClickedFrom === 'TreeMenu')
  {
    addToMyOrdersDiv();
  }
  else if (plusIconClickedFrom === 'MyOrdersPage')
  {
    updateMyOrdersDiv();
  }
  displaylogicforfooter();
  var datainsession = {
    itemquant: currentQuantity
  };
  window.sessionStorage.setItem(vendoritemsid + '', JSON.stringify(datainsession));
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

function updateMyOrdersDiv() {
  $("#myordersfinal .lastItm_Wrap").each(function(index) {
    $elem = $(this);
    var id = $(this).attr('id');
    id = id.replace("lastwrap", "");
    var qtyValue = $elem.find(".QtyInput").val();
    if (qtyValue) {
      qtyValue = parseInt(qtyValue);
    } else {
      qtyValue = 0;
    }
    if (qtyValue >= 1) {
      var html = $(this).prop('outerHTML');
      if ($("#myordersfinal #lastwrap" + id).length == 0) {
        $("#myordersfinal").html(html);
      } else {
        $("#myordersfinal > #lastwrap" + id).replaceWith(html);
      }
    } else if (qtyValue == 0) {
      $("#myordersfinal > #lastwrap" + id).remove();
    }
  });
  return false;
}

function addToMyOrdersDiv()
{
  
  $(".TreeMenu .lastItm_Wrap").each(function(index)
  {
    $elem = $(this);
    var id = $(this).attr('id');
    id = id.replace("lastwrap", "");

    var qtyValue = $elem.find(".QtyInput").attr('value');
    if (qtyValue)
    {
      qtyValue = parseInt(qtyValue);
    }
    else
    {
      qtyValue = 0;
    }
    
    if (qtyValue >= 1)
    {


      var html = $(this).prop('outerHTML');

        

      if ($("#myordersfinal #lastwrap" + id).length == 0)
      {
        $("#myordersfinal").append(html);
      }
      else
      {
        $("#myordersfinal > #lastwrap" + id).replaceWith(html);
      }
    }
    else if (qtyValue == 0)
    {
      $("#myordersfinal > #lastwrap" + id).remove();
    }
  });
  return false;
}


function addquantitytoMyordersfooter()
{
            var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders").data('myorders',myorders_quantityvalue+1);
            var myorders_value_afteradd = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders .myordersiclass").text(myorders_value_afteradd);
            return false;
}

function addquantitytoMyordersfooterforsession(passedvalue)
{
            var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders").data('myorders',myorders_quantityvalue+passedvalue);
            var myorders_value_afteradd = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders .myordersiclass").text(myorders_value_afteradd);
            return false;
}



function reducequantitytoMyordersfooter()
{
             var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders").data('myorders',myorders_quantityvalue-1);
            var myorders_value_afteradd = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));
            $(".myOrderPanel_footer .myorders .myordersiclass").text(myorders_value_afteradd);
            return false;
}




function displaylogicforfooter() {


  var myorders_quantityvalue = parseInt($(".myOrderPanel_footer .myorders").data('myorders'));



  var subtvalueis =  $(".myOrderPanel_footer .subtotal span").text();

  	 if (!subtvalueis  || parseFloat(subtvalueis) <= -1) 
  	 {

  	 		$("#customerpage .orderplaced_succclose").trigger("click");

  	 }


  
  if (myorders_quantityvalue >= 1) {
    $('.myOrderPanel_footer').show();

  } else {
    $('.myOrderPanel_footer').hide();

  }
   $("#customerpage #loaderforindex").hide();
  return false;
}



$(document).on('click', '#customerpage .pickitemshome', function(event)
{
	
  if ($(".ui-popup-active").length > 0) {

  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
       
    } 
  
if($('#customerpage #loaderforindex').is(':visible'))
{
return false;
}


  var headertext = $('.headvendnametext').text();

    if (headertext === 'Order Summary')
    {
      $(".editorder").trigger("click");
    }
	
	else if (headertext === 'My Order')
    {
		$(".MyOrdersdisplay").hide();

	  $(".MyOrdersPage").hide();
	  $('.headvendnametext').text('Pick Items');
      $(".swiper-container").show();

	 $(".icon-trash-3 ").hide();
    
      $("#datacontainer").show();
        
		displaylogicforfooter();

		$('.TreeMenu').collapsible( "collapse" );

      $("#swipecontainer .swiper-slide").eq(activeslidenumber).trigger("click");

	

    }

	else if (headertext === 'Pick Items')
	  {
//	$('#pickitemback').popup('open');

		$('#pickitemback').popup({history: false}).popup('open');

	  }

  else
  {
    return false;
  }
  
nav.update();
$(window).resize();
  //$.mobile.resetActivePageHeight();
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

////////////////// browser back button function pick item page////////////////////////
////////////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#customerpage .pickitemyes', function(event) 
{
	$('#pickitemback').popup( "close" );
$.mobile.pushStateEnabled = false;
   window.sessionStorage.setItem("isloggedIn", "yes");
   urlforvendor = decodeURIComponent(urlforvendor);
    var url_params = urlforvendor.split('?')
//    window.location = "../vc/index.html?" + url_params[1]; 

	    window.location.replace("../vc/index.html?" + url_params[1]); 
    
    
});
$(document).on('click', '#customerpage .pickitemno', function(event) 
{
  //   window.sessionStorage.setItem("isloggedIn", "yes");
    $('#pickitemback').popup( "close" );
});

////////////////////////////closed browser back functions//////////////////////
////////////////////////////////////////////////////////////////////////

$(document).on('click', '#customerpage #myordersfinal .icon-minus', function(event)
{

  var vendor_item_id = $(this).closest('.lastItm_Wrap').attr('id');
  var currentval = $(this).closest('div').find('.QtyInput').attr('value');
  if (currentval >= 2)
  {
   
    var currentQuantity = parseInt(currentval - 1);
    var currentSellprice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('sellpricestatic'));
    var currentDiscountPrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('discpricestatic'));
    var currentStrikePrice = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('strikepricestatic'));
    var currentPercent = parseFloat($(this).closest('.lastItm_Wrap').find('.prd_title h3').data('ispercent'));
    $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .sellprice').text(parseFloat(currentSellprice * currentQuantity).toFixed(2));
    $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .strikeprice').text(parseFloat(currentStrikePrice * currentQuantity).toFixed(2));
    if (currentPercent == 0)
    {
      $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .discprice').text(parseFloat(currentDiscountPrice * currentQuantity).toFixed(2));
    }
    $(this).closest('div').find('.QtyInput').attr('value', currentQuantity);
    $(this).closest('div').find('.QtyInput').val(currentQuantity);
    reducequantitytoMyordersfooter();
    var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
    subtotalvalue = parseFloat(subtotalvalue - currentSellprice).toFixed(2);
    $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
    $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
   
    
      updateMyOrdersDiv();
   
    removeadditionsfrombothplaces(currentval, vendor_item_id);

    var datainsession = {
      itemquant: currentQuantity
    };
    window.sessionStorage.setItem(vendor_item_id + '', JSON.stringify(datainsession));
  }
  displaylogicforfooter();
  var additions = $(this).closest('.lastItm_Wrap').find('.Itm_right_aside .additions').text();
  if (additions >= 1)
  {
    $(this).closest('.lastItm_Wrap').find('.Itm_right_aside').find('.additionsclassstyle').show();
  }
  else
  {
    $(this).closest('.lastItm_Wrap').find('.Itm_right_aside').find('.additionsclassstyle').hide();
  }

  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

  $(document).on('click', '.icon-search', function(event)
 {

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
                else
                {
$(".ui-page:not(:visible)").remove();

                 /* $(":mobile-pagecontainer" ).pagecontainer("change", "ItemsSearch.html?UUID="+UUID+'&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel + '&accessedfrom=' + accessedfrom + '&tablenum=' + tablenum + '&redirectedfrom=' + redirectedfrom + '&seatnum=' + seatnum + '&row=' + row+ '&location_id='+location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' + VID+ '&vendor_name=' + vendor_name+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId+ '&sName=' + sName+ '&customer_id=' + customer_id
  + '&location_id=' + location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' + VID+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId+ '&sName=' + sName + '&customer_id=' + customer_id  , { allowSamePageTransition:true,reload:true,transition: "none",changehash:false});
    event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
                 */

				window.location.replace("ItemsSearch.html?UUID="+UUID+'&screen_id=' + screen_id + '&cust_id=' + cust_id + '&minimum_order=' + minimum_order + '&addreslabel=' + addreslabel + '&accessedfrom=' + accessedfrom + '&tablenum=' + tablenum + '&redirectedfrom=' + redirectedfrom + '&seatnum=' + seatnum + '&row=' + row+ '&location_id='+location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' + VID+ '&vendor_name=' + vendor_name+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId+ '&sName=' + sName+ '&customer_id=' + customer_id
  + '&location_id=' + location_id+ '&vendortypeloggedin=' + vendortypeloggedin+ '&vendor_id=' + vendor_id+ '&VID=' + VID+ '&vendor_user_name=' + vendor_user_name+ '&vendorUserId=' + vendorUserId+ '&sName=' + sName + '&customer_id=' + customer_id);

document.addEventListener("backbutton", function () { })
          event.stopImmediatePropagation();
                 event.preventDefault();
    

           return false;
                }
        }
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
 });


function findbyId(id){
var family = jsonQ(jsondata);
    //to find all the name which start with a
var id = family.find('id', function () {
    return this == id
  });

var vend_item_id = id.sibling("id");
var name = id.sibling("name");
var has_topping = id.sibling("has_topping");

var cost = id.sibling("cost");
var image = id.sibling("image");
var discount = id.sibling("discount");

var has_crust = id.sibling("has_crust");
var topping_b_name = id.sibling("topping_b_name");
var crust_name = id.sibling("crust_name");

var is_item_available = id.sibling("is_item_available");
var is_admin_approved = id.sibling("is_admin_approved");



var selling_price = id.sibling("selling_price");
var is_percent = id.sibling("is_percent");
var description = id.sibling("description");
var is_non_vegetarian = id.sibling("is_non_vegetarian");
    
    var resultObj = {vend_item_id : vend_item_id.firstElm(), name : name.firstElm(), has_topping : has_topping.firstElm(),
      cost : cost.firstElm(),image : image.firstElm(),discount : discount.firstElm(),has_crust : has_crust.firstElm(),topping_b_name : topping_b_name.firstElm(),crust_name : crust_name.firstElm(),
      is_item_available : is_item_available.firstElm(),is_admin_approved : is_admin_approved.firstElm(),selling_price : selling_price.firstElm(),is_percent : is_percent.firstElm(),description : description.firstElm(),is_non_vegetarian : is_non_vegetarian.firstElm()} ;


    
return resultObj;
}


$(document).on('click', '#aboutloteasy', function(event)
 {
/*
  $(":mobile-pagecontainer").pagecontainer("change", "Aboutpage.html",
  {
    allowSamePageTransition: true,
    reload: true,
    transition: "none"
  });
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
*/
 });



 $(document).on('click', '#aboutloteasyfaqs', function(event)
 {
/*
  $(":mobile-pagecontainer").pagecontainer("change", "Faqspage.html",
  {
    allowSamePageTransition: true,
    reload: true,
    transition: "none"
  });
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
  */
 });


 function checkConnection() {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'Nonetwork';
            return states[networkState];
        }