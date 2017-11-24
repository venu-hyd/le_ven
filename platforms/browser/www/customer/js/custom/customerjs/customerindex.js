

var jsondata;
var seperator = '***';

function search(name) {
    results = [];
    cancel = false;
    recursiveSearch(name, jsondata);
    results = results.filter(function(item, index, inputArray) {
        return inputArray.indexOf(item) == index;
    });
    return results;
}



function recursiveSearch(name, json, startSaving, parentJson) {
    if (cancel) return;
    if (startSaving) {
        if (parentJson["leaf"]) {
            results.push("leaf");
            results.push(parentJson["leaf"]);
            cancel = true; //pushing leaf twice for somereason, work around with 'cancel'
            return;
        } else if (json["name"]) {
            results.push(json["name"]);
            return;
        } else if (json["leaf"]) {
            results.push(json["leaf"]);
            cancel = true; //pushing leaf twice for somereason, work around with 'cancel'
            return;
        }
    }
    if (isArray(json)) {
        for (var i = 0; i < json.length; i++) {
            recursiveSearch(name, json[i], startSaving, json);
        }
    } else {
        if (isObject(json)) {
            for (key in json) {
                if (key == "name") {
                    if (json[key] == name) {
                        startSaving = true;
                    }
                } else if (key == name) {
                    startSaving = true;
                }
                recursiveSearch(name, json[key], startSaving, json);
            }
        }
    }
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

function isObject(what) {
    return Object.prototype.toString.call(what) === '[object Object]';
}




var nav ;
 
 function createhorizontaltab(categories) {
   $("#customerpage #loaderforindex").show();
             nav = new Swiper('.swiper-nav', {
             
                    slidesPerView:'auto',
                    paginationClickable: true,
                    spaceBetween: 2,
                    freeMode: true,
                    centeredSlides: true,
                    grabCursor: true,

                    preventClicks:false,
                    preventClicksPropagation:false,
                    slideToClickedSlide:true,
              onSlideChangeEnd:function(swiper){
                 
           
                 
              } ,
                 onTouchEnd:function(swiper,event){
                 
         
                 
              },
    onInit:function(swiper){
        
       setTimeout(function(){
           get_items(0);
       },500);
    },
     onClick:function(swiper, event){
         event.preventDefault();
         //get_items(swiper.activeIndex);
         //console.log("onClick"+swiper.activeIndex);

    },
     onTap:function(swiper, event){
         event.preventDefault();
         get_items(swiper.activeIndex);
         //console.log("Tap"+swiper.activeIndex);

    }
                 
               });
    var categoryArr = categories;
    var favoriteresultag = '';

    if(categoryArr.length<=0)
    {
    //$('#customerpage #noitems').popup("open");

     $('#customerpage #noitems').popup({history: false}).popup('open');

    }
    else
    {

    for (var i = 0; i < categoryArr.length; i++) {
        favoriteresultag += '<div class="swiper-slide"><span>' + categoryArr[i] + '</span></div>';
    }
    $("#swipecontainer").append(favoriteresultag).trigger("create");
    $("#swipecontainer .swiper-slide:first").trigger("click");
  
   nav.update(true); 
    }

     $("#customerpage #loaderforindex").hide();
    
 }
     
     function get_items(slider_index)
     {
                  
        var cur_ele=$('.swiper-slide:eq('+slider_index+')');
            
      // 
        $('.swiper-slide').removeClass('swiper-slide-active');
        $('.swiper-slide').removeClass('swiper-slide-custom-active');
        cur_ele.addClass('swiper-slide-custom-active');
        activeslidenumber = cur_ele.index();

        $('#datacontainer').empty();
        var menuclickedelement = cur_ele.find('span').text();
        

        if (menuclickedelement)
        {
        var searchResponse = search(menuclickedelement);
        for (var i = 0; i < searchResponse.length; i++)
        {
        if (searchResponse[i] != undefined)
        {
        var h3tagdata = '';
        var beforesperatorvalue = searchResponse[i];
        var extractedvalue = extractEverythingAfter(searchResponse[i], seperator);
        h3tagdata += '<h3 class="h3tagdata" data-attr="' + beforesperatorvalue + '">' + 

extractedvalue + '</h3>';
        var treemenudiv = $('<div class="TreeMenu pickitem" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="a"></div>');
        treemenudiv.append(h3tagdata);
        $('#datacontainer').append(treemenudiv).trigger("create");
        }
        }
        }
        $("#mainmyordersdiv").hide();
        $("#datacontainer").show();
	//	 $.mobile.resetActivePageHeight();
        $(".swiper-pages").show(100);
         $('.headvendnametext').text('Pick Items');
     }


 function sessionlogic()
{
   $("#customerpage #loaderforindex").show();
  for (var i = 0; i < sessionStorage.length; i++)
  {
    var propertyName = sessionStorage.key(i);
    //console.log(i + " : " + propertyName + " = " + sessionStorage.getItem(propertyName));
  }
  var empty_array = [];
  var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
  var totalquantityinsession = 0;
  for (var i = 0; i < sessionStorage.length; i++)
  {
    var propertyName = sessionStorage.key(i);
    var checker_if_proper = propertyName.indexOf("lastwrap"); 
    if(checker_if_proper>-1)
    {
    var propertyvalue = sessionStorage.getItem(propertyName);
    totalquantityinsession = totalquantityinsession + parseFloat(JSON.parse(propertyvalue).itemquant);
    empty_array.push(propertyName);
  }
 
  }
  addquantitytoMyordersfooterforsession(totalquantityinsession);
  
  for (var j = 0; j < empty_array.length; j++)
  {
    var sess_val = empty_array[j];
    var propertyvalue_dup = sessionStorage.getItem(sess_val);
    sess_val = sess_val.replace("lastwrap", "");
    var qty = JSON.parse(propertyvalue_dup).itemquant;
    var res = findbyId(sess_val);
    var sell_price = res.selling_price;
    subtotalvalue = subtotalvalue + (sell_price * qty);
  }
  for (var j = 0; j < empty_array.length; j++)
  {
    var sess_val = empty_array[j];
     sess_val = sess_val.replace("lastwrap", "");
         var for_additionssession_data = JSON.parse(window.sessionStorage.getItem(sess_val + ''));

           if (!!for_additionssession_data)
    {
      for (var h = 0; h < for_additionssession_data.length; h++)
      {
        subtotalvalue = parseFloat(subtotalvalue) + for_additionssession_data[h].cost;
      }
      
    }
  }
  //subtotalvalue = parseFloat(subtotalvalue.toFixed(2));

   subtotalvalue = parseFloat(subtotalvalue).toFixed(2);


  $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
  $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
  createHTMLForSessionItems(empty_array);
  empty_array.length = 0;
  empty_array = [];
  displaylogicforfooter();
   $("#customerpage #loaderforindex").hide();
}

    function createHTMLForSessionItems(empty_array)
    {
        var sessionitemshtml = '';
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
        $("#myordersfinal").html("");
    
    var session_present_array = [];

  for (var i = 0; i < empty_array.length; i++)
  {
    var session_item_id = empty_array[i];
    session_item_id = session_item_id.replace("lastwrap", "");
    var result_object = findbyId(session_item_id);
    var vendoritemsid = result_object.vend_item_id;
    var vegornonVeg = result_object.is_non_vegetarian;
    var vegornonvegclass = '';
    var vegornondata = '';
    var selling_price = parseFloat(result_object.selling_price).toFixed(2);
    var selling_pricestatic = parseFloat(result_object.selling_price).toFixed(2);
    var discount_price = parseFloat(result_object.discount).toFixed(2);
    var discount_pricestatic = parseFloat(result_object.discount).toFixed(2);
    var priceInStrike = parseFloat(result_object.cost).toFixed(2);
    var priceInStrikestatic = parseFloat(result_object.cost).toFixed(2);
    var is_percent = result_object.is_percent;
    var item_name = result_object.name;
    
    var val_sess = JSON.parse(window.sessionStorage.getItem("lastwrap" + session_item_id));
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
			discount_price = discount_pricestatic;
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

    var has_topping = result_object.has_topping;
    var has_crust = result_object.has_crust;
   	var image_name = result_object.image;
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
    if (has_crust == '1' || has_topping == '1')
    {
      addonstyles = 'block';
    }
    else
    {
      addonstyles = 'none';
    }
    var topping_name = result_object.topping_b_name;
    var crust_name = result_object.crust_name;
    var tobeappend = '';
    var description = result_object.description;
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
      textdata = ' off';
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

   var totalcost = 0;
    var for_additionssession_data = JSON.parse(window.sessionStorage.getItem(vendoritemsid + ''));
    if (for_additionssession_data!=null && for_additionssession_data.length>0)
    {
      for (var h = 0; h < for_additionssession_data.length; h++)
      {
        totalcost = parseFloat(totalcost) + for_additionssession_data[h].cost;
      }
    session_present_array.push(vendoritemsid);
    }

    if(totalcost>0)
    {
      addnsstyle = 'block';
      
    }
    else
    {
      addnsstyle = 'none';
      
    }
  
  totalcost = totalcost.toFixed(2);

sessionitemshtml +='<div class="lastItm_Wrap" id="lastwrap' + vendoritemsid + '" data-stuff="[]" data-vegornonveg="' + vegornondata + '" data-lastwrapquan="0">\
      <div class="prd_title">\
         <h3 class="' + vegornonvegclass + '" data-sellprice="' + selling_price + '" data-sellpricestatic="' + selling_pricestatic + '" data-discprice="' + discount_price + '" data-discpricestatic="' + discount_pricestatic + '" data-strikeprice="' + priceInStrike + '" data-strikepricestatic="' + priceInStrikestatic + '" data-ispercent="' + is_percent + '">'+item_name+'<button style="display:' + dotsbtn_style + ';" class="btn-d icon-ellipsis prdDiscription ui-btn ui-shadow ui-corner-all"></button></h3>\
      </div>\
      <div class="Itm_left_aside">\
         <div class="Itm_img"><img id="imagesd" type="img" height="40" width="40" data-discpricestatic="' + discount_pricestatic + '"    src="' + image_name + '"></div>\
         <div class="Itm_dtsl">\
            <div class="Qty_Wrap">\
               <button class="btn-d icon-minus QtyBtn ui-btn ui-shadow ui-corner-all"></button>\
               <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"><input type="text" class="QtyInput" value="' + quan + '" readonly=""></div>\
               <button class="btn-d icon-plus QtyBtn ui-btn ui-shadow ui-corner-all"></button>\
            </div>\
            <button style="display:' + addonstyles + ';" class="btn-d addonsBtn ui-btn ui-shadow ui-corner-all" data-toppname="' + topping_name + '" data-crutsname="' + crust_name + '" data-atrr="' + vendoritemsid + '"><a data-rel="popup" data-position-to="fixed" class="ui-link">Addons</a></button>\
         </div>\
      </div>\
      <div class="Itm_right_aside" data-percentage="' + is_percent + '">\
         <a class="icon-trash-3 deletebtn trashBtn ui-link" style="display: none;"></a>\
         <p style="display:' + showstrikeandoff + ';">₹ <strike class="strikeprice">' + priceInStrike + '</strike> <span style="display:' + ruppesty + ';" class="tobeappend offRed">' + tobeappend + '</span> <span class="discprice offRed">' + discount_price + '</span> <span class="offRed" style="display:' + ruppesty + ';">' + textdata + '</span> <span class="offRed" style="display:' + discsty + ';">' + textdata + '</span> </p>\
         <p>₹ <b class="sellprice"> ' + selling_price + '</b></p>\
         <p class="additionsclassstyle" style="display:' + addnsstyle + ';"><span>Additions:₹</span>  <b class="additions">'+totalcost+'</b></p>\
      </div>\
      <div class="Itm_discrp" style="display:none;">\
         <h3>' + item_name + '</h3>\
          '+description+'\
      </div>\
   </div>\
   <div data-role="popup" class="addonpopup" data-shadow="false" data-history="false"  data-position-to="fixed"  data-overlay-theme="a" data-dismissible="true"   id="addonsWrap' + vendoritemsid + '"   data-theme="a">\
    </div>\
   </div>';

    }

    


     $("#myordersfinal").html(sessionitemshtml);


    for(var k=0;k<session_present_array.length;k++)
    {
       $("#lastwrap" + session_present_array[k]).find('.addonsBtn').addClass('active');

        var for_top_crus_data = JSON.parse(window.sessionStorage.getItem(session_present_array[k] + ''));
    if (!!for_top_crus_data)
    {
      $("#lastwrap" + session_present_array[k]).data('stuff', for_top_crus_data).attr('data-stuff', JSON.stringify(for_top_crus_data));
    }


    }

  }
    function menu() {
    }
/*$(document).on("click", ".swiper-slide", function()
{

   
  $('.headvendnametext').text('Pick Items');
      $('.swiper-slide').removeClass('swiper-slide-active');
  $('.swiper-slide').removeClass('swiper-slide-custom-active');
  $(this).addClass('swiper-slide-custom-active');
  activeslidenumber = $(this).index();
 console.log(" click "+activeslidenumber);
  $('#datacontainer').empty();
  var menuclickedelement = $(this).find('span').text();
    //alert(menuclickedelement);
	
  if (menuclickedelement)
  {
    var searchResponse = search(menuclickedelement);
    for (var i = 0; i < searchResponse.length; i++)
    {
      if (searchResponse[i] != undefined)
      {
        var h3tagdata = '';
        var beforesperatorvalue = searchResponse[i];
        var extractedvalue = extractEverythingAfter(searchResponse[i], seperator);
        h3tagdata += '<h3 class="h3tagdata" data-attr="' + beforesperatorvalue + '">' + extractedvalue + '</h3>';
        var treemenudiv = $('<div class="TreeMenu pickitem" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="a"></div>');
        treemenudiv.append(h3tagdata);
        $('#datacontainer').append(treemenudiv).trigger("create");
      }
    }
  }
  $("#mainmyordersdiv").hide();
  $("#datacontainer").show();
  $(".swiper-pages").show(500);
});*/

function extractEverythingAfter(value, seperator) {
   return value.substr(value.lastIndexOf(seperator) + seperator.length)
}


$(document).on('collapsibleexpand', '.TreeMenu', function(e)
{
  if ($(e.target).hasClass('TreeMenuChild'))
  {
    return;
  }
  else
  {
    var treemenudata = $(this).find('.h3tagdata').attr('data-attr');
    var searchResponse = search(treemenudata);
    var leaf_word = searchResponse[0];
    if (leaf_word === "leaf")
    {
        $(this).addClass('not2');
      leafResponse(searchResponse, treemenudata, 'plain');
    }
    else if (leaf_word != "leaf")
    {
      notLeafResponse(searchResponse, treemenudata);
    }
  }
});
 

    $(document).on('click', '#customerpage .prdDiscription,#itemssearchpage .prdDiscription ', function(event) {
      var description =  $(this).closest('.lastItm_Wrap').find('.Itm_discrp').html();
      var destination = $(this).closest('.lastItm_Wrap').find('.Itm_discrp');
       destination.html( description ).toggle();
       event.stopImmediatePropagation();
                 event.preventDefault();
                 return false;
    });  



function notLeafResponse(searchResponse, treemenudata)
{
  var itemshtml = '';
 
  for (var i = 0; i < searchResponse.length; i++)
  {
    var extractedvalue = extractEverythingAfter(searchResponse[i], seperator);
    var beforesperatorvalue = searchResponse[i];
    itemshtml += '<div class="TreeMenuChild t2" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-theme="a" data-content-theme="a">\
                      <h3 data-attr="' + beforesperatorvalue + '">' + extractedvalue + '</h3>\
                      </div>';
  }
  $('.TreeMenu[data-attr="' + treemenudata + '"] div.ui-collapsible-content').empty();
  $('.TreeMenu[data-attr="' + treemenudata + '"] div.ui-collapsible-content').html(itemshtml).trigger("create");
}

function extractEverythingAfter(value, seperator) {
   return value.substr(value.lastIndexOf(seperator) + seperator.length)
}


function notLeafResponseTreeMenuChild(searchResponse, treemenudata)
{
  var itemshtml = '';
  $(".TreeMenuChild[data-attr='" + treemenudata + "']").find('div.ui-collapsible-content').empty();
  for (var i = 0; i < searchResponse.length; i++)
  {
    var extractedvalue = extractEverythingAfter(searchResponse[i], seperator);
    var beforesperatorvalue = searchResponse[i];
    var splitnvalue = treemenudata.split('***');
    var splitlen = splitnvalue.length;
    if (splitlen == 3)
    {
      itemshtml += '<div class="TreeMenuChild Tree_t4" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-theme="a" data-content-theme="a">\
                      <h3 data-attr="' + beforesperatorvalue + '">' + extractedvalue + '</h3>\
                      </div>';
    }
    else if (splitlen == 4)
    {
      itemshtml += '<div class="TreeMenuChild Tree_t5" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-theme="a" data-content-theme="a">\
                      <h3 data-attr="' + beforesperatorvalue + '">' + extractedvalue + '</h3>\
                      </div>';
    }
    else
    {
      itemshtml += '<div class="TreeMenuChild" data-attr="' + beforesperatorvalue + '" data-role="collapsible" data-theme="a" data-content-theme="a">\
                      <h3 data-attr="' + beforesperatorvalue + '">' + extractedvalue + '</h3>\
                      </div>';
    }
  }
  $(".TreeMenuChild[data-attr='" + treemenudata + "']").find('div.ui-collapsible-content').append(itemshtml).trigger("create");
}



function leafResponse(searchResponse, treemenudata, isitplainornot)
{

  

  var totalfound = 0;
 

  
  if (isitplainornot == 'notplain')
  {
    $(".TreeMenuChild[data-attr='" + treemenudata + "']").find('div.ui-collapsible-content').empty();
  }
  var vendor_items_ids = [];
  var itemshtml = '';
  var resarray = searchResponse[1];
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
    var item_name = resarray[i].name;
    var priceInStrike = parseFloat(resarray[i].cost).toFixed(2);
    var priceInStrikestatic = parseFloat(resarray[i].cost).toFixed(2);

    var selling_price = parseFloat(resarray[i].selling_price).toFixed(2);
    var selling_pricestatic = parseFloat(resarray[i].selling_price).toFixed(2);



    var description = resarray[i].description;
    var discount_price = parseFloat(resarray[i].discount).toFixed(2);
    var discount_pricestatic = parseFloat(resarray[i].discount).toFixed(2);
    var has_topping = resarray[i].has_topping;
    var has_crust = resarray[i].has_crust;
    var vendoritemsid = resarray[i].id;
    var tobeappend = '';
    var vegornonVeg = resarray[i].is_non_vegetarian;
    var vegornonvegclass = '';
    var vegornondata = '';
    var topping_name = resarray[i].topping_b_name;
    var crust_name = resarray[i].crust_name;
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
    var existsundermyordersornot = $("#myordersfinal #lastwrap" + vendoritemsid).length;
    if (resarray[i].is_item_available == 1 && resarray[i].is_admin_approved == 1 && existsundermyordersornot == 0)
    {
      if (discount_price == 0)
      {
        priceInStrike = 0;
      }
      vendor_items_ids.push(vendoritemsid);
     
      var val_sess = JSON.parse(window.sessionStorage.getItem("lastwrap" + vendoritemsid));
      var quan = "";
      if (val_sess)
      {
        quan = val_sess.itemquant;
       
        selling_price = parseFloat(selling_price*quan).toFixed(2);
        priceInStrike = parseFloat(priceInStrike*quan).toFixed(2);

        if(is_percent==='1')
{
  discount_price = discount_pricestatic;
}
else
{
  discount_price = parseFloat(discount_price*quan).toFixed(2);
}


        if(!quan)
        {
          quan = "";
        }
      }
      itemshtml += '<div class="TreeMenu_Content" id="itemcontent' + vendoritemsid + '">\
                                                <div class="lastItm_Wrap" id="lastwrap' + vendoritemsid + '" data-stuff="[]" data-vegornonveg="' + vegornondata + '"  data-lastwrapquan="0">\
                                                    <div class="prd_title"><h3 class="' + vegornonvegclass + '" data-sellprice="' + selling_price + '"   data-sellpricestatic="' + selling_pricestatic + '"  data-discprice="' + discount_price + '"  data-discpricestatic="' + discount_pricestatic + '"  data-strikeprice="' + priceInStrike + '" data-strikepricestatic="' + priceInStrikestatic + '"   data-ispercent="' + is_percent + '" >' + item_name + '<button style="display:' + dotsbtn_style + ';" class="btn-d icon-ellipsis prdDiscription"></button></h3></div>\
                                                    <div class="Itm_left_aside">\
                                                        <div class="Itm_img">\
                                                        <img id="imagesd" type="img" height="40" width="40" data-discpricestatic="' + discount_pricestatic + '"    src="' + image_name + '"/>\
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
                                                    <a class="icon-trash-3 deletebtn trashBtn ui-link"></a>\
<p style="display:' + showstrikeandoff + ';">&#x20B9 <strike class="strikeprice">' + priceInStrike + '</strike> <span style="display:' + ruppesty + ';" class="tobeappend offRed">' + tobeappend + '</span> <span class="discprice offRed">' + discount_price + '</span> <span class="offRed" style="display:' + ruppesty + ';">' + textdata + '</span> <span class="offRed" style="display:' + discsty + ';">' + textdata + '</span> </p>\
                                                        <p>&#x20B9 <b class="sellprice"> ' + selling_price + '</b></p>\
                                                        <p class= "additionsclassstyle" style="display:' + addnsstyle + ';"><span >Additions:&#x20B9</span>  <b class="additions">0</b></p>\
                                                    </div>\
                                                    <div class="Itm_discrp" style="display:none;"><h3>' + item_name + '</h3>' + description + '</div>\
                                                </div>\
                                                <div data-role="popup" class="addonpopup" data-history="false"  data-shadow="false" data-position-to="fixed" data-overlay-theme="a" data-dismissible="true"   id="addonsWrap' + vendoritemsid + '"   data-theme="a">\
                                                </div>\
                                            </div>';
    }
    else if (existsundermyordersornot == 1)
    {
      vendor_items_ids.push(vendoritemsid);
      var htmldata = $("#myordersfinal #lastwrap" + vendoritemsid).prop('outerHTML');
      itemshtml += "<div class='TreeMenu_Content' > " + htmldata + "<div>";
    }
  }
  for (var i = 0; i < vendor_items_ids.length; i++)
  {
    var addtionsprice = $(".lastItm_Wrap#lastwrap" + vendor_items_ids[i]).find('.Itm_right_aside .additions').text();
    var converted_addtionsprice = parseFloat(addtionsprice);
    if (converted_addtionsprice > 0)
    {
      $(".lastItm_Wrap#lastwrap" + vendor_items_ids[i]).find('.Itm_right_aside .additionsclassstyle').show();
    }
    else
    {
      $(".lastItm_Wrap#lastwrap" + vendor_items_ids[i]).find('.Itm_right_aside .additionsclassstyle').hide();
    }
  }
  if (isitplainornot == 'plain')
  {
    $('.TreeMenu[data-attr="' + treemenudata + '"] div.ui-collapsible-content').empty();
    $('.TreeMenu[data-attr="' + treemenudata + '"] div.ui-collapsible-content').html(itemshtml).trigger("create");
    $(".TreeMenu").trigger("create");
  }
  else if (isitplainornot == 'notplain')
  {
    $(".TreeMenuChild[data-attr='" + treemenudata + "']").find('div.ui-collapsible-content').append(itemshtml).trigger("create");
  }
    
  
    
  $(".deletebtn").hide();


 
  
}
$(document).on('click', '#customerpage .addonsBtn', function(event)
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
        }

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
          $("#customerpage #loaderforindex").show();
      },
      complete: function()
      {
           $("#customerpage #loaderforindex").hide();
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
//          $('#customerpage #notoppcrusts').popup("open" );

		          $('#customerpage #notoppcrusts').popup({history: false}).popup('open');
        }
        else
        {
          showtoppsandcrusts(response, quantity, vendoritemsid, clickevent, tabnumber, topping_name, crusting_name);
        }
        //  
      },
      error: function(jqXHR, exception) {



			  if (jqXHR.status === 0 || exception === 'timeout') {
             $('#customerpage #timeoutalert').popup({history: false}).popup('open');
            }

            	else
            	{
            		 $('#customerpage #custpageerror').popup({history: false}).popup('open');
            	}

}

    });
  }
  else
  {
    
//    $('#one_quantity').popup('open');


	    $('#customerpage #one_quantity').popup({history: false}).popup('open');
  }
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});



	
  $(document).on('click', '#customerpage .one_quantityclose', function(event)
 {
  $('#customerpage #one_quantity').popup('close');
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
 });


  $(document).on('click', '#itemssearchpage .one_quantityclose', function(event)
 {
  $('#itemssearchpage #one_quantity').popup('close');
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
 });


  
  $(document).on('click', '#customerpage .TreeMenu_Content,.TreeMenu div.ui-collapsible-content', function(event)
 {
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
 });



   function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
           return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
     }

/* Pick items start */

$(document).on('collapsibleexpand', '.pickitem', function(event) {

    
    $(this).children('h3').addClass('expanded_heading');
    $(this).children('h3').addClass('zindex_more');
    
    event.stopImmediatePropagation();
    event.preventDefault();


    return false;
});

  $(document).on('collapsiblecollapse', '.pickitem', function(event) {
      
      
      $(this).children('h3').removeClass('expanded_heading');
      $(this).children('h3').removeClass('zindex_more');
      $(this).children('h3').removeClass('fixed_heading');
      $(this).children('h3').css('top', '');
      
      $(this).children('h3').addClass('zindex_more');
      event.stopImmediatePropagation();
      event.preventDefault();

	  
	  var device_height = $(window).height();
	  $('#customerpage ').css('min-height',device_height);

      return false;
  });

$(document).on('collapsibleexpand', '.TreeMenuChild', function(event)
{
    
    $(this).children('h3').addClass('expanded_heading');
    $(this).children('h3').addClass('zindex_more');
    
  var tvalue = $(this).attr('data-attr');
  var treemenudata = $(this).find('h3').attr('data-attr');
  var searchResponse = search(treemenudata);
  var leaf_word = searchResponse[0];
  if (leaf_word === "leaf")
  {
        
      //add nochild class if t2
      if( $(this).hasClass('t2') && !$(this).hasClass('nocats') )
      {
          $(this).addClass('nocats')
      }
      
    leafResponse(searchResponse, treemenudata, 'notplain');

      
      
  }
  else
  {
    notLeafResponseTreeMenuChild(searchResponse, treemenudata);
  }
  event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

  $(document).on('collapsiblecollapse', '.TreeMenuChild', function(event) {
 

      $(this).children('h3').removeClass('expanded_heading');
      $(this).children('h3').removeClass('zindex_more');
      $(this).children('h3').removeClass('fixed_heading');
      $(this).children('h3').css('top', '');
      
      //collapse child menu t4
      $(this).children('.ui-collapsible-content').children('.Tree_t4').children('h3').trigger('click');
      
      $(this).children('h3').addClass('zindex_more');
      event.stopImmediatePropagation();
      event.preventDefault();
	       
	  var device_height = $(window).height();
	  $('#customerpage ').css('min-height',device_height);

      return false;
  });


  var h3_width = 0;
  
 $(document).scroll(function() {  
         
     
     
			if( !$('#customerpage').is(':visible'))
				return false;
			
			var window_scrolltop = $(window).scrollTop();
            
            var header_height =  $('.oms-header').height()-3 ;
            var swiper_nav_height = $('.top_swiper_wrap').height();
            
           
     
            if($('.TreeMenu .expanded_heading').length >0 )
			{
			
                
                
                $('.TreeMenu > .h3tagdata.zindex_more.expanded_heading').each(function(){
                
                    var h3_pos = $(this).position();
					var h3_height = $(this).height();
                    
                    $(this).parents('.swiper-wrapper').addClass('notransform');
                    $(this).parents('.swiper-slide').addClass('notransform');
                    
                        
					if(h3_width==0)
					 h3_width = $('.myactivelabelsWrap').width();
					
                    //console.log(h3_pos.top+" <= "+window_scrolltop)
                    
                    if(h3_pos.top <=(window_scrolltop+header_height-(56+15)) && $(this).hasClass('expanded_heading'))
                    {
                        
                        //console.log('fixed_heading');
                        $(this).attr('data-oldpos',h3_pos.top);
						$(this).addClass('fixed_heading');
                        
                        var curr_from_top=header_height+swiper_nav_height;
                        //h3_pos.top - window_scrolltop;
                        $(this).css('top', (curr_from_top+1)+'px');
                        $(this).css('width', h3_width+'px');
                        
                        $(this).next('.ui-collapsible-content').children('.TreeMenuChild:first').css('margin-top', h3_height+'px');
                        
                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', h3_height+'px');
                        
                       
                        $(this).removeClass('zindex_more');
                    }

                    
                });
                
                
                    //add fixed_heading to t2,t3..
                $('.TreeMenuChild.t2 > .zindex_more.expanded_heading').each(function(){
                
                    if( !$(this).parent().parent('.ui-collapsible-content').prev('h3').hasClass('fixed_heading') )
                        return false;
                    
                    var h3_pos = $(this).position();
					var h3_height = $(this).height();
                    
                 	if(h3_width==0)
					 h3_width = $('.myactivelabelsWrap').width();
                    
                    var parent_h3_height = $(this).parent().parent('.ui-collapsible-content').prev('.fixed_heading').height();
                    
                    var parent_margin = $(this).parent().css('margin-top').replace(/[^-\d\.]/g, '');
                    
                    //console.log(h3_pos.top+" <= "+parseInt(window_scrolltop+parent_h3_height))

                    if(h3_pos.top <= parseInt(window_scrolltop+parent_h3_height)  && $(this).parent().parent('.ui-collapsible-content').prev('.h3tagdata').hasClass('fixed_heading'))
                    {
                        
                        //console.log('added child fixed');
                        $(this).attr('data-oldpos',h3_pos.top);
						$(this).addClass('fixed_heading');
                        
                        var curr_from_top=$(this).parent().parent('.ui-collapsible-content').prev('.fixed_heading').position();
                        //h3_pos.top - window_scrolltop;
                        $(this).css('top', (curr_from_top.top+parent_h3_height+1)+'px');
                        $(this).css('width', h3_width+'px');
                        
                        var prev_item_margin = 0;
                       if($(this).parent().index()>0)                        
                            prev_item_margin = parseInt( $(this).parent().parent('.ui-collapsible-content').children('.TreeMenuChild:first').css('margin-top').replace(/[^-\d\.]/g, '') );
                        
                        
                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', (parent_h3_height+h3_height-prev_item_margin)+'px');
                       
                        $(this).removeClass('zindex_more');
                        
                        //march 14 2016
                        var t1_h=$('.TreeMenu > .fixed_heading').height();
                        var t2_h=$(this).height();
                        //console.log((t1_h+t2_h))
                        
                        if($(this).parent().index()==0 || ($(this).parent().index()>0 && $(this).parent().prev().children('h3').hasClass('fixed_heading') ) )
                        {
                            $(this).parent('.TreeMenuChild.t2').css('margin-top', (parent_h3_height+h3_height-prev_item_margin)+'px');
                        }
                        
                        if($(this).parent().index()>0 )
                        {
                              $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', (t2_h)+'px'); 
                              $(this).next().children('.TreeMenuChild.Tree_t4').css('margin-top', (t2_h)+'px');  
                        }
                        
                        
                        
                    }

                    
                });
                
                
                //add fixed_heading to t4..
                $('.TreeMenuChild.Tree_t4 > .zindex_more.expanded_heading').each(function(){
                
                     // console.log('checking before t4 '+$(this).parent().parent('.ui-collapsible-content').prev('h3').text());
                    
                    if( !$(this).parent().parent('.ui-collapsible-content').prev('h3').hasClass('fixed_heading') )
                        return false;
                    
                   // console.log('checking after if t4 ');
                    
                    var h3_pos = $(this).position();
					var h3_height = $(this).height();
                    
                 	if(h3_width==0)
					 h3_width = $('.myactivelabelsWrap').width();
                    
                    var parent_h3_height =  $(this).parent().parent('.ui-collapsible-content').prev('.fixed_heading').height();
                    
                    var parent_parent_h3_height = $(this).parents('.TreeMenuChild.t2').parent().prev('.fixed_heading').height();
                    
                    var parent_margin = $(this).parent().css('margin-top').replace(/[^-\d\.]/g, '');
                    
                    //console.log($(this).parents('.TreeMenuChild.t2').parent().prev('.fixed_heading').text())
                    
                      
                    if(h3_pos.top <= parseInt(window_scrolltop+parent_h3_height+parent_parent_h3_height)  )
                    {
                        
                      // console.log('t4 fixed');
                        
                        $(this).attr('data-oldpos',h3_pos.top);
                        
						$(this).addClass('fixed_heading');
                        
                        var curr_from_top=$(this).parent().parent('.ui-collapsible-content').prev('.fixed_heading').position();
                        //h3_pos.top - window_scrolltop;
                        $(this).css('top', (curr_from_top.top+parent_h3_height+1)+'px');
                        $(this).css('width', h3_width+'px');
                        
                        var prev_item_margin = 0;
                       if($(this).parent().index()>0)                        
                            prev_item_margin = parseInt( $(this).parent().parent('.ui-collapsible-content').children('.TreeMenuChild:first').css('margin-top').replace(/[^-\d\.]/g, '') );
                        
                        
                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first .lastItm_Wrap').css('margin-top', (parent_h3_height+h3_height-prev_item_margin)+'px');
                       
                        $(this).removeClass('zindex_more');
//                        
//                        //march 14 2016
                        var t1_h=$('.TreeMenu.Tree_t4 > .fixed_heading').height();
                        var t2_h=$(this).height();
                        //console.log((t1_h+t2_h))
                        
//                        if($(this).parent().index()==0 || ($(this).parent().index()>0 && $(this).parent().prev().children('h3').hasClass('fixed_heading') ) )
//                        {
//                            $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first .lastItm_Wrap').css('margin-top', (t2_h)+'px'); 
//                        }
//                        
//                        if($(this).parent().index()>0 )
//                        {
//                              console.log('dasd')
//                              $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first .lastItm_Wrap').css('margin-top', (t2_h)+'px'); 
//                              $(this).next().children('.TreeMenu_Content').css('margin-top', (t2_h)+'px');  
//                        }
                        
                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').children('.lastItm_Wrap').css('margin-top', (t2_h)+'px'); 
                        
                    }

                    
                });
                
                
                
            }
     
     
     
            //remove class 
            if($('.TreeMenu .fixed_heading').length >0 )
			{
                var header_height = 0; //$('.oms-header').height()-2;
                
                $('.TreeMenu > .h3tagdata.fixed_heading').each(function(){
                
                    var h3_pos = $(this).position()
                    var h3_height = $(this).height();
                    
                     if($(this).hasClass('fixed_heading') && $(this).attr('data-oldpos') >=(window_scrolltop+header_height) )
                    {
                        //console.log('removed t1 fixed_heading'+$(this).text()); 
                        $(this).css('top', '');
                        $(this).css('width','');

                        $(this).next('.ui-collapsible-content').children('.TreeMenuChild').css('margin-top','0px');

                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', '0px');
                        
                        $(this).addClass('zindex_more');
                        $(this).removeAttr('data-oldpos');
                        $(this).removeClass('fixed_heading');
                    }
                    
                });
                
                
                $('.TreeMenuChild.t2 > .fixed_heading').each(function(){
                
                    var h3_pos = $(this).position()
                    var h3_height = $(this).height();
                    
                    
                    var parent_h3_height = $(this).parent().parent('.ui-collapsible-content').prev('.expanded_heading').height();
                    
                    var parent_margin = $(this).parent().css('margin-top').replace(/[^-\d\.]/g, '');
                    
                     if(!$(this).parent().parent('.ui-collapsible-content').prev('.h3tagdata').hasClass('fixed_heading') || $(this).attr('data-oldpos')  >= (window_scrolltop+parent_h3_height) )
                    {
                        //console.log('removed t2 fixed_heading'+$(this).text()); 
                        //console.log('removed child fixed');
                        $(this).css('top', '');
                        $(this).css('width','');

                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content').css('margin-top','0px');

                        $(this).addClass('zindex_more');
                        $(this).removeAttr('data-oldpos');
                        $(this).removeClass('fixed_heading');
                        
                        $(this).parent('.TreeMenuChild.t2').css('margin-top','0px');
                        
                        //march 14 2016
                        if($(this).parent().index()>0 )
                        {
                              //$(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', (t2_h)+'px'); 
                              $(this).next().children('.TreeMenuChild.Tree_t4').css('margin-top', '0px');  
                        }
                       
                    }
                    
                    
                });
                
                
                
                $('.TreeMenuChild.Tree_t4 > .fixed_heading').each(function(){
                
                    var h3_pos = $(this).position()
                    var h3_height = $(this).height();
                    
                    
                    var parent_h3_height = $(this).parent().parent('.ui-collapsible-content').prev('.expanded_heading').height();
                    var parent_parent_h3_height = $(this).parents('.TreeMenuChild.t2').parent().prev('.fixed_heading').height();
                    
                    var parent_margin = $(this).parent().css('margin-top').replace(/[^-\d\.]/g, '');
                    
                     if($(this).attr('data-oldpos')  >= (window_scrolltop+parent_h3_height+parent_parent_h3_height) )
                    {
                        //console.log('removed Tree_t4 fixed_heading'+$(this).text()); 
                        //console.log('removed child fixed');
                        $(this).css('top', '');
                        $(this).css('width','');

                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content').css('margin-top','0px');

                        $(this).addClass('zindex_more');
                        $(this).removeAttr('data-oldpos');
                        $(this).removeClass('fixed_heading');
                        
                        //march 14 2016
//                        if($(this).parent().index()>0 )
//                        {
//                              //$(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').css('margin-top', (t2_h)+'px'); 
//                              $(this).next().children('.TreeMenuChild.Tree_t4').css('margin-top', '0px');  
//                        }
                       
                        $(this).next('.ui-collapsible-content').children('.TreeMenu_Content:first').children('.lastItm_Wrap').css('margin-top', '0px'); 
                        
                    }
                    
                    
                });
                
            }
            

            
 });

/* Pick items end */




$(document).on( "pagecontainershow", function ( e, data ) {
   //var activePage = data.toPage;

   setTimeout(function () {
          var device_height = $(window).height();
    $('#customerpage ').css('min-height',device_height);
   }, 500); /* set delay here */
});

$(window).on( "throttledresize", function ( e ) {
   //var activePage = $.mobile.pageContainer.pagecontainer( "getActivePage" );
 
   setTimeout(function () {
          var device_height = $(window).height();
    $('#customerpage ').css('min-height',device_height);
   }, 500);
});


$(document).on( "pageinit", function( event, data ){

     $( "#customerpage .ui-panel" ).on( "panelbeforeclose", function( event, ui ) {

      setTimeout(function () {
          var device_height = $(window).height();
      $('#customerpage ').css('min-height',device_height);
      }, 500); /* set delay here */

     
     });

     $("#customerpage .ui-panel" ).on( "panelbeforeopen", function( event, ui ) {
  

     
     });
   });
