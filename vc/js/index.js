//praveen
var type_ofcountry="";
var Rupee="";

if(localStorage.getItem('locationbasednamevendor')!='India'){
    Rupee="";
    $('.WebRupee').text(Rupee);
  
}
else
    {
        Rupee="&#x20B9;"
        $('.WebRupee').prepend("<span class='WebRupee'></span>");
       
    }

//end

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}

var key="onoroff";
var vendortypeloggedin = '';
var name;
var labelname;
var values = [];
var toppings = [];
var products = [];
var price, quantity, image;
var undefined = "something";
var retdata;
var orderjson = '';
var v_item_id;
var item_id_itr_some;
var elementsarray = [];
var random_number = 500; //jsondata.items.item
var clcik = 0;
var obj = new Object();
var dis_top_val = "none";
var dis_crust_val = "none";
var whetherchecked = false;
var imgsrc = url + '/OMS';
var jsondata;
var clickedcondirmorder = false;
var images = '{"images": [{"image": "JSON_images/popcorn.jpg","name":"Popcorn"},{"name":"Ice creams","image": "JSON_images/icecream_cup.jpg"},{"name": "Snacks & Corn","image": "JSON_images/puff_egg.jpg"},{"image": "JSON_images/thumsup_can.jpg","name": "Soft Drinks"}]}';
var jsonsample = '{"sucOrfail":"true",{"location_name":"CINEPOLIS","vendor_id":"1011000500073002002","vendor_users_id":"5","vendor_type_id":"0","location_id":"101500073002","session_id":"a0528eac-11b9-11e4-ad89-00505683690b"}';
var screen;
var seat;
var scrnnumber;
var vfcode;
var screen_ids = 1;
var deviceUUID = "9001111";
var takordertim;
var servicecharge = 50;
var surcharge = 40;
var VAT = 70;
var splitvendorjson;
var ordersplitjson;
var theaterName;
var VID;
var subtotalfixed;
var vendorUserId;
var vendor_type_id = "";
var location_id = "";
var vendor_session_id = ""; //var clientsessionid="";
var vendor_name = "";
var vendor_user_name = "";
var fromcustomerscreen = '';
var urlforvendor = "";
var updatedStatus="";
var timerfororder;
var screenname = "";
var vendor_id = "";
var vendor_users_id = "";
//var vendor_type_id = "";
//var location_id = "";
//var vendor_session_id = "";
//var vendor_name = "";
//var vendor_user_name = "";
var UUID = "";
var querystr = "";
//var edititem=false;
var mobile_number = "";
var urlforvendor = "";
var homecontext = "";
var statuscalled=false;
var timer;
var timer2;
var itemtimer;
var displayordertime;
var taxDetailsData="";
var calldisplay;
//mobile support or not
var displaytimer;
var backtimer;
var ajaxcalltimer;
var networkState;
function printDiv(div) 
{
								var html = document.getElementById('printssss').innerHTML;
				  				var result=html.replace(/"/g, '\'');
				  				var mainresult=result+"<style>.converter{font-size:13px !important ; font-family: arial;}.contentWrap_inner {width: 600px; max-width: 100%;min-width: 300px;margin: 0 auto;height: auto;}#printimage{display:none}@page{size:auto; margin-bottom:5mm;margin-top:5mm}@media print {a {display:none!important;}}.dtls_order .dtls_order_table .table { margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }.dtls_order .dtls_order_table .table thead { background: #eee; }.printpage_body{ background: #fff; color: #000 !important; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9; overflow-y: scroll;} .printpage_body .contentWrap{ padding:20px 10px; } .printpage{ width:100%; height:auto; float:left; font-family: 'Roboto', Arial, sans-serif!important;} .printHeader{  width: 100%; padding:15px 0px; border-bottom: 1px solid #eee; } .printHeader .rt_acts{ position: absolute;  top: 10px; font-size: 20px; border: 1px solid #d03e43; border-radius: 100%; width: 28px; height: 28px;display:none } .printHeader .rt_acts .ic_cls{  color: #d03e43; padding: 3px 0px; margin-right: -1px;display:none } .printHeader .rest_head{  width:100%; text-align:center; padding:0px; } .printHeader .rest_head .rest_name{ text-align:center;font-size: 16px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; } .printHeader .rest_head .rest_adres{ text-align:center;font-size: 12px; color: #666; margin: 0px; padding: 0px; font-family: 'Roboto', Arial, sans-serif; line-height:18px; } .dtlsoftin{ width:100%; float:left; height:auto;margin-top:20px; } .dtlsoftin .dtls_row{ width:100%; float:left; margin-bottom: 10px; } .dtlsoftin .dtls_row li{ width:auto; float:left; padding:0 20px 0 0; margin:0px; list-style:none; font-weight:bold; font-size:13px !important ; font-family: arial; } .dtlsoftin .dtls_row li span{ margin-left:5px; font-weight:normal; } .dtlsoftin .dtls_3{ width:100%; float:left; } .dtlsoftin .custmerAdres{ width:100%; float:left; margin-bottom: 10px; font-size:13px; font-family: Arial, sans-serif;} .custmerAdres p{ margin:0px;} .dtlsoftin .custmerAdres .rd{ color: #d03e43; } .dtls_order{ width:100%; float:left; height:auto; } .dtls_order .dtls_order_h1{ font-size: 14px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; text-align:center; } .dtls_order .dtls_order_table{ width:100%; float:left; height:auto; margin-top: 10px; } .dtls_order .dtls_order_table .table{ margin:0 0 20px 0; padding:0px; border-bottom: 1px solid #eeeeee; color:#000000; } .dtls_order .dtls_order_table .table thead{ background:#eee; } .dtls_order .dtls_order_table .table tbody{ font-size:13px; } .dtls_order .dtls_order_total_wrap{ width:100%; float:right; height:auto; } .dtls_order .dtls_order_total_wrap table{ color:#000000; } .dtls_order .dtls_order_total_wrap .td_1{ width:35%; } .dtls_order .dtls_order_total_wrap .td_2{ width:65%; } .dtls_order .dtls_order_total{ width:100%; float:right; height:auto; font-size:13px; } .dtls_order .dtls_order_total li{ width:100%; float:left; padding:0 0 5px 0; margin:0px; list-style:none; font-weight:normal; } .dtls_order .dtls_order_total li span{ margin-left:5px; font-weight:bold; float:right; } .dtls_order .dtls_order_total hr{ float: left; width: 100%; margin-top: 10px; margin-bottom: 10px; border: 0; border-top: 1px solid #eeeeee; } .dtls_order .dtls_order_ftr{ width:100%; float:left; margin-top: 10px; }#orderstable{ margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }#trhead{background: #eee;}.thheads{width:10%;vertical-align: bottom;border-bottom: 1px solid #dddddd;padding: 7px 0px;}#count{width:10%}#descript{width:25%}#itemprice{width:20%}#qaty{width:10%}#percetage{width:15%}#pricess{width:20%;}</style>";
								window.frames["print_frame"].document.body.innerHTML=mainresult;
								window.frames["print_frame"].window.focus();
								window.frames["print_frame"].window.print();
}
function cordovaready()
{

 networkState = navigator.connection.type;   	

}
//get captcha//////////////////////////
///////////////////////////////////////
function getCaptcha() {
    //$('.timedateWrap').hide();
    $("#txtcode").val("");
    var chars = "0Aa1Bb2Cc3Dd4Ee5Ff6Gg7Hh8Ii9Jj0Kk1Ll2Mm3Nn4Oo5Pp6Qq7Rr8Ss9Tt0Uu1Vv2Ww3Xx4Yy5Zz";
    var string_length = 5;
    var captchastring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        captchastring += chars.substring(rnum, rnum + 1);
    }
    document.getElementById("randomfield").innerHTML = captchastring;
    // document.getElementById("randomfield").value =captchastring
}


	////////////////Logout//////////////////////
    ///////////////////////////////////////////	

$(document).on("click", ".icon-logout", function() {

    /*urlforvendor=window.location.href; 
	        urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')
		   window.location.replace(  "../vc/index.html?"+url_params[1]);*/

    window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID=" + UUID + '&vendor_id=' + vendor_id + '&mobile=' + mobile_number);

    //window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
    //location.reload();
});

       /////////////Cancel//////////////////////
	   ////////////////////////////////////////
	   
$(document).on("click", ".icon-cancel", function() 
{
 	$(".dtls_order_h1").remove();
 	$(".printpage_body").hide();
 	$(".homeContent").show();

  

});
		/////////////chkCaptcha//////////////////////
	   ////////////////////////////////////////

$(document).on("click", "#chkCaptcha", function() 
{
    vfcode = $("#vcode").val();;
    var str1 = $("#randomfield").html();
    var str2 = $("#txtcode").val();
    //deviceUUID = "1562f5319f892c6f";//"1562f5319f892c6f";//"b5b2c422d8a49f4f";//"4444";"1562f5319f892c6f";//"b5b2c422d8a49f4f";//
    //deviceUUID = "5a8322251f3d3fb3";
    //deviceUUID = "1562f5319f892c6f";
    // deviceUUID="5267ed2f9e4b2e33";
    vendor_session_id = "";



    //var cpatchajson = '{"catchaString":"' + str1 + '",' + '"value":"' + str2 + '",' + '"code":"' + vfcode + '"}';
    var cpatchajson = '{"catchaString":"' + str1 + '",' + '"value":"' + str2 + '",' + '"UUID":"' + deviceUUID + '","session_id":"' + vendor_session_id + '",' + '"code":"' + encodeURIComponent(vfcode) + '",' + '"mobile_number":"' + mobile_number + '"}';
    var loginSuccess = $.ajax({
        type: 'GET',
        url: url + '/oms1/chkCaptcha?json=' + cpatchajson,
        dataType: 'jsonp',
        jsonpCallback: 'jsonCallback',
        cache: false,
        jsonp: false,
        beforeSend: function() {
            $("#loader").show();
        },
        complete: function() {
            $("#loader").hide();
        },
        success: function(response) 
		{
					$("#loader").hide();
					var data = eval(response);
					var sucess = data.sucOrfail;
					theaterName = data.location_name;
					window.tName = data.location_name;
					vendor_type_id = data.vendor_type_id;
					var dt = data.DateTime;
					VID = data.vendor_id;
					var nameArray = [];
					nameArray = data.location_name;
					location_id = data.location_id;
					vendor_session_id = data.session_id;
					vendor_name = data.vendor_name;
					vendor_user_name = data.vendoruser_name;
					var UUID = deviceUUID;
					vendorUserId = data.vendor_users_id;

					$(".vendorname").html(vendor_name);
					$(".locationname").html(theaterName);
					$(".vendorusername").html(vendor_user_name);
					$("#logout").show();
					$("#homeicon").show();
					$(".tpBN-rt").show();

					//$(".vendorname")[0].textContent=vendor_name;
					//$(".locationname")[0].textContent=theaterName;
					//$(".vendorusername")[0].textContent=vendor_user_name;

					//$('.vendorname>label').text(vendor_name);
					//$(".locationname>label").text(theaterName);
					//$(".vendorusername>label").text(vendor_user_name);

					//$(".vendorname").html(vendor_name);
					//$(".locationname").html(theaterName);
					// $(".vendorusername").html( vendor_user_name);

					if (sucess == 'true') {
						$('#timedatewrap').show();
						$("#logindiv").hide();
						$(".theatreName").html(theaterName);
						$(".dateTime").html(dt); //for date time display on header
						/*              
					  for (var k = 0; k < nameArray.length; k++) {
							$('#SCname').append($('<option></option>').val(nameArray[k]).html(nameArray[k]));
						}
						*/


						//////////////////////////Prasahnth
						// $('#orderdetail').show();
						//$('#homeMenu').show();

						//$('#orders').show();

						///////////////////////////
						vendortypeloggedin = vendor_type_id;

						if (vendor_type_id == 1) {
							$("#VendorOrder").show();
							$("#logout").show();
							$("#homeicon").show();
							$("#TakeOrder").show();
							$("#mymenu").show();

							 $("#New").show();
							$("#NewandViewed").hide();
							$("#Accepted").hide();
							$("#Ready").show();
							$("#PickedUp").show();
							$("#Delivered").show();
							$("#Closed").hide();
							$("#Cancelled").hide();
							$("#Rejected").hide();



						}
						if (vendor_type_id == 2) {
							$("#VendorOrder").show();
							$("#logout").show();
							$("#homeicon").show();
							$("#TakeOrder").show();
							$("#mymenu").show();
							//$("#VendorOrder").show();
							$("#New").show();
							$("#NewandViewed").show();
							$("#Accepted").show();
							$("#Ready").show();
							$("#PickedUp").show();
							$("#Delivered").show();
							$("#Closed").show();
							$("#Cancelled").show();
							$("#Rejected").show();

						}

						if (vendor_type_id == 3) {
							$("#VendorOrder").show();
							$("#logout").show();
							$("#homeicon").show();
							$("#TakeOrder").hide();
							$("#mymenu").hide();
							$("#New").show();
							$("#NewandViewed").show();
							$("#Accepted").show();
							$("#Ready").show();
							$("#PickedUp").show();
							$("#Delivered").show();
							$("#Closed").hide();
							$("#Cancelled").hide();
							$("#Rejected").hide();

						}

						if (vendor_type_id == 0) {
							//window.location.replace(  "vendor-admin-index.html?sName=" + theaterName + '&vendor_id=' + vendorUserId);

							window.location.replace(  "vendor-admin-index.html?sName=" + theaterName + '&vendor_id=' + VID + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID); //For Passing extra parameters
						}

					} else {
						alert("Please enter Correct value");
						getCaptcha();
					}

        },
		error: function(jqXHR, exception) 
		{
										if (jqXHR.status === 0) 
										{
															
															$("#errornet2").show();	
															$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
															   $("#errornet2").show();
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
															$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																$("#errornet2").show();
																$("#loader").hide();
										}
		}
    });
    loginSuccess.done(function() 
	{

        $("#New")[0].textContent = "NEW (0)"
        $("#NewandViewed")[0].textContent = "NEW AND VIEWED (0)"
        $("#Accepted")[0].textContent = "ACCEPTED (0)"
        $("#Ready")[0].textContent = "READY (0)"
        $("#PickedUp")[0].textContent = "PICKED UP (0)"
        $("#Delivered")[0].textContent = "DELIVERED (0)"
        $("#Cancelled")[0].textContent = "CANCELLED (0)"
        $("#Closed")[0].textContent = "CLOSED (0)"
        $("#Rejected")[0].textContent = "REJECTED (0)"
        getStatusCount();
    });
});

	///////////////Status count values retriving////////////////////
	/////////////////////////////////////////////////////////////// 

function getStatusCount() 
{



    screenname = getParameterByName('sName');
    vendor_id = getParameterByName('vendor_id');

    if (vendor_id == "") 
    {

        vendor_id = getParameterByName('VID');

    }

    VID = vendor_id;




    
    vendor_users_id = getParameterByName('vendor_users_id');

    if (vendor_users_id == "") {
        vendor_users_id = getParameterByName('vendorUserId');

    }

    vendorUserId = vendor_users_id;
    vendor_type_id = getParameterByName('vendor_type_id');
    location_id = getParameterByName('location_id');
    vendor_session_id = getParameterByName('session_id');
    vendor_name = getParameterByName('vendor_name');
    vendor_user_name = getParameterByName('vendor_user_name');
    UUID = getParameterByName('UUID');
    mobile_number = getParameterByName('mobile_number');

  


    $("#New")[0].textContent = "NEW (0)"
    $("#NewandViewed")[0].textContent = "NEW AND VIEWED (0)"
    $("#Accepted")[0].textContent = "ACCEPTED (0)"
    $("#Ready")[0].textContent = "READY (0)"
    $("#PickedUp")[0].textContent = "PICKED UP (0)"
    $("#Delivered")[0].textContent = "DELIVERED (0)"
    $("#Cancelled")[0].textContent = "CANCELLED (0)"
    $("#Closed")[0].textContent = "CLOSED (0)"
    $("#Rejected")[0].textContent = "REJECTED (0)"
        //getStatusCount();

		$.ajax({
        type: 'GET',
        url: url + '/oms1/getstatuscount?vendor_id=' + VID + '&vendor_type_id=' + vendortypeloggedin + '&vendor_users_id=' + vendorUserId,
        jsonpCallback: 'jsonCallback',
        timeout:10000,
        dataType: 'jsonp',
        jsonp: false,
        async: true,
		beforeSend: function() 
		{
                    $("#loader").show();
                   
        },
        complete: function() 
	    {
                    $("#loader").hide();

                    
        },
        success: function(response) 
        {
            var jsondata = JSON.stringify(response);

            var res = [{
                "count": "1",
                "status": "Accept"
            }, {
                "count": "1",
                "status": "Cancel"
            }, {
                "count": "2",
                "status": "Closed"
            }, {
                "count": "2",
                "status": "Delivered"
            }, {
                "count": "1",
                "status": "NEW"
            }, {
                "count": "1",
                "status": "Picked Up"
            }, {
                "count": "1",
                "status": "Ready"
            }, {
                "count": "1",
                "status": "Reject"
            }, {
                "count": "1",
                "status": "Viewed"
            }];

            res = response;
            var newCount = 0;

            for (var i = 0; i < res.length; i++) 
            {



			     if(res[i].status)
				 {
					switch (res[i].status.toLowerCase()) 
					{

						case "new":
							$("#New")[0].textContent = "NEW (" + res[i].count + ")"
							newCount = res[i].count;
							break;
						case "viewed":
							$("#NewandViewed")[0].textContent = "NEW AND VIEWED (" + res[i].count + ")"
							newCount = parseInt(newCount) + parseInt(res[i].count);
							$("#New")[0].textContent = "NEW (" + newCount + ")"
							break;
						case "accept":
							$("#Accepted")[0].textContent = "ACCEPTED (" + res[i].count + ")"
							break;
						case "ready":
							$("#Ready")[0].textContent = "READY (" + res[i].count + ")"
							break;
						case "picked up":
							$("#PickedUp")[0].textContent = "PICKED UP (" + res[i].count + ")"
							break;
						case "delivered":
							$("#Delivered")[0].textContent = "DELIVERED (" + res[i].count + ")"
							break;
						case "cancel":
							$("#Cancelled")[0].textContent = "CANCELLED (" + res[i].count + ")"
							break;
						case "closed":
							$("#Closed")[0].textContent = "CLOSED (" + res[i].count + ")"
							break;
						case "reject":
							$("#Rejected")[0].textContent = "REJECTED (" + res[i].count + ")"
							break;



					}
				
				}
				else
				{
				
				
					getStatusCount() ;
				
				}


            }




        },
        error: function(jqXHR, exception) 
		{
										if (jqXHR.status === 0) 
										{
														$("#errornet2").show();
														$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
															$("#errornet2").show();
															$("#loader").hide();	
																
										} else if (jqXHR.status == 500) 
										{
															$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										} 
										else if (exception === 'timeout') 
										{
															$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
															$("#errornet2").show();
																$("#loader").hide();
																
																
																
										} 
										else 
										{
																$("#errornet2").show();
																$("#loader").hide();
										}
		}
    });




}


//getting queary string by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//////////cordova.js file added with javascript////////
//////////////////////////////////////////////////////
var loginuser = localStorage.getItem('login');
function backButtonCallback() 
{


	    var  text=$(".dtls_order_h1").text();
 
		if(text=="Order Details")
		{
		   $(".dtls_order_h1").remove();
	       $(".icon-cancel").trigger("click");
		}
		else
		{
		    $("#loader").show();
		   $(".backbutton").trigger("click");
		
		}
	
	
      

}

///////////////DOM Ready function/////////////////////////
/////////////////////////////////////////////////////////

$(document).ready(function() 
{

localStorage.setItem('showpickitemspage', 'no');
               var notification = $.jStorage.get(key);
			  
				if(notification=="ON" ||notification==null)
				{
						  
						
						  $("#toggle").attr('checked', true).addClass('toggle-on').button({'label': 'On'});  
				}else
				{
						
						 
						  $("#toggle").attr('checked', false).addClass('toggle-off').button({'label': 'Off'});     
				}				


						$(".dtls_order_h1").remove();
						$(".printpage_body").hide();
						$("#loader").hide();
				
					function onDeviceReady() 
					{
				
							var  VIDid = getParameterByName('vendor_id');
							
							vendortypeloggedin = getParameterByName('vendortypeloggedin');

							if (!vendortypeloggedin) 
							{
								vendortypeloggedin = getParameterByName('vendor_type_id');
							}
						   
							if (vendortypeloggedin.trim() == "") 
							{
						
								vendortypeloggedin = getParameterByName('vendor_type_id');
							}
						   deviceUUID = device.uuid;

						   document.addEventListener('backbutton', backButtonCallback, false);
						
							$('#printer').click(function() 
							{      
											
								
									 
											var html = document.getElementById('printssss').innerHTML;
											var result=html.replace(/"/g, '\'');
											var mainresult=result+"<style>.dtls_order .dtls_order_table .table { margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }.dtls_order .dtls_order_table .table thead { background: #eee; }.printpage_body{ background: #fff; color: #000 !important; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9; overflow-y: scroll; } .printpage_body .contentWrap{ padding:20px 10px; } .printpage{ width:100%; height:auto; float:left; } .printHeader{  width: 100%; padding:15px 0px; border-bottom: 1px solid #eee; } .printHeader .rt_acts{ position: absolute;  top: 10px; font-size: 20px; border: 1px solid #d03e43; border-radius: 100%; width: 28px; height: 28px; } .printHeader .rt_acts .ic_cls{  color: #d03e43; padding: 3px 0px; margin-right: -1px; } .printHeader .rest_head{  width:100%; text-align:center; padding:0px; } .printHeader .rest_head .rest_name{ text-align:center;font-size: 16px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; } .printHeader .rest_head .rest_adres{ text-align:center;font-size: 12px; color: #666; margin: 0px; padding: 0px; font-family: 'Roboto', Arial, sans-serif; line-height:18px; } .dtlsoftin{ width:100%; float:left; height:auto; } .dtlsoftin .dtls_row{ width:100%; float:left; margin-bottom: 10px; } .dtlsoftin .dtls_row li{ width:auto; float:left; padding:0 20px 0 0; margin:0px; list-style:none; font-weight:bold; } .dtlsoftin .dtls_row li span{ margin-left:5px; font-weight:normal; } .dtlsoftin .dtls_3{ width:100%; float:left; } .dtlsoftin .custmerAdres{ width:100%; float:left; margin-bottom: 10px; } .dtlsoftin .custmerAdres .rd{ color: #d03e43; } .dtls_order{ width:100%; float:left; height:auto; } .dtls_order .dtls_order_h1{ font-size: 14px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; text-align:center; } .dtls_order .dtls_order_table{ width:100%; float:left; height:auto; margin-top: 10px; } .dtls_order .dtls_order_table .table{ margin:0 0 20px 0; padding:0px; border-bottom: 1px solid #eeeeee; color:#000000; } .dtls_order .dtls_order_table .table thead{ background:#eee; } .dtls_order .dtls_order_table .table tbody{ font-size:13px; } .dtls_order .dtls_order_total_wrap{ width:100%; float:right; height:auto; } .dtls_order .dtls_order_total_wrap table{ color:#000000; } .dtls_order .dtls_order_total_wrap .td_1{ width:35%; } .dtls_order .dtls_order_total_wrap .td_2{ width:65%; } .dtls_order .dtls_order_total{ width:100%; float:right; height:auto; font-size:13px; } .dtls_order .dtls_order_total li{ width:100%; float:left; padding:0 0 5px 0; margin:0px; list-style:none; font-weight:normal; } .dtls_order .dtls_order_total li span{ margin-left:5px; font-weight:bold; float:right; } .dtls_order .dtls_order_total hr{ float: left; width: 100%; margin-top: 10px; margin-bottom: 10px; border: 0; border-top: 1px solid #eeeeee; } .dtls_order .dtls_order_ftr{ width:100%; float:left; margin-top: 10px; }#orderstable{ margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }#trhead{background: #eee;}.thheads{width:10%;vertical-align: bottom;border-bottom: 1px solid #dddddd;padding: 7px 0px;}#count{width:10%}#descript{width:25%}#itemprice{width:20%}#qaty{width:10%}#percetage{width:15%}#pricess{width:20%;}</style>";
								//			var mainresult=result+"<style>.dtls_order .dtls_order_table .table { margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }.dtls_order .dtls_order_table .table thead { background: #eee; }.printpage_body{ background: #fff; color: #000 !important; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 9; overflow-y: scroll; } .printpage_body .contentWrap{ padding:20px 10px; } .printpage{ width:100%; height:auto; float:left; } .printHeader{  width: 100%; padding: 15px; border-bottom: 1px solid #eee; } .printHeader .rt_acts{ position: absolute;  top: 10px; font-size: 20px; border: 1px solid #d03e43; border-radius: 100%; width: 28px; height: 28px; } .printHeader .rt_acts .ic_cls{  color: #d03e43; padding: 3px 0px; margin-right: -1px; } .printHeader .rest_head{  width:100%; text-align:center; padding: 0 15%; } .printHeader .rest_head .rest_name{ text-align:center;font-size: 16px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; } .printHeader .rest_head .rest_adres{ text-align:center;font-size: 12px; color: #666; margin: 0px; padding: 0px; font-family: 'Roboto', Arial, sans-serif; line-height:18px; } .dtlsoftin{ width:100%; float:left; height:auto; } .dtlsoftin .dtls_row{ width:100%; float:left; margin-bottom: 10px; } .dtlsoftin .dtls_row li{ width:auto; float:left; padding:0 20px 0 0; margin:0px; list-style:none; font-weight:bold; } .dtlsoftin .dtls_row li span{ margin-left:5px; font-weight:normal; } .dtlsoftin .dtls_3{ width:100%; float:left; } .dtlsoftin .custmerAdres{ width:100%; float:left; margin-bottom: 10px; } .dtlsoftin .custmerAdres .rd{ color: #d03e43; } .dtls_order{ width:100%; float:left; height:auto; } .dtls_order .dtls_order_h1{ font-size: 14px; color: #d03e43; margin: 0 0 5px 0; padding: 0px; text-align:center; } .dtls_order .dtls_order_table{ width:100%; float:left; height:auto; margin-top: 10px; } .dtls_order .dtls_order_table .table{ margin:0 0 20px 0; padding:0px; border-bottom: 1px solid #eeeeee; color:#000000; } .dtls_order .dtls_order_table .table thead{ background:#eee; } .dtls_order .dtls_order_table .table tbody{ font-size:13px; } .dtls_order .dtls_order_total_wrap{ width:100%; float:right; height:auto; } .dtls_order .dtls_order_total_wrap table{ color:#000000; } .dtls_order .dtls_order_total_wrap .td_1{ width:35%; } .dtls_order .dtls_order_total_wrap .td_2{ width:65%; } .dtls_order .dtls_order_total{ width:100%; float:right; height:auto; font-size:13px; } .dtls_order .dtls_order_total li{ width:100%; float:left; padding:0 0 5px 0; margin:0px; list-style:none; font-weight:normal; } .dtls_order .dtls_order_total li span{ margin-left:5px; font-weight:bold; float:right; } .dtls_order .dtls_order_total hr{ float: left; width: 100%; margin-top: 10px; margin-bottom: 10px; border: 0; border-top: 1px solid #eeeeee; } .dtls_order .dtls_order_ftr{ width:100%; float:left; margin-top: 10px; }#orderstable{ margin: 0 0 20px 0; padding: 0px; border-bottom: 1px solid #eeeeee; color: #000000;width: 100%;margin: 0 0 20px 0;padding: 0px;font-size:13px; cellpadding:0; cellspacing:0; }#trhead{background: #eee;}.thheads{width:10%;vertical-align: bottom;border-bottom: 1px solid #dddddd;padding: 7px 0px;}#count{width:10%}#descript{width:25%}#itemprice{width:20%}#qaty{width:10%}#percetage{width:15%}#pricess{width:20%;}</style>";
											console.log("mainresult=="+mainresult);
											var type = "text/html";
											var title = "print.html";
											
											window.plugins.PrintPlugin.isPrintingAvailable(result, function() 
											{
												
												window.plugins.PrintPlugin.print(mainresult, function() 
												{
												
												}, function() {
													console.log('fail')
												}, "", type, title);
											
											
												
											}, function() 
											{
												console.log('Cloud printer is not available');
												
											}, "", type, title);
										
							
							});
							
						   if(notification=="ON" ||notification==null)
							{
									  
									  notification="ON";
									  madhucalled(VIDid,vendortypeloggedin,notification);
									 
							}else
							{
									
									 
									  madhucalled(VIDid,vendortypeloggedin,notification);
									
							}				
						
							
							
							
					}
					document.addEventListener("deviceready", onDeviceReady, false);


});


$(function() 
{
    $("#myordersdiv").click(function() 
	{
        $("#daccordion").hide();
        //     $("#tab-dock").hide();
        //myordersdiv
    });
});

function returnValues(value) 
{
    var data;
    $.each(jsondata.items.item, function(i, v) {
        if (i == value) {
            data = v;
        }
    });
    return data;
}




function createhorizontaltab(categories) 
{
    var categoryArr = categories;
    for (var i = 0; i < categoryArr[0].length; i++) {
        if (categoryArr[i] != undefined) {
            $("#swiper-wrapper").append('<li id= "' + categoryArr[i] + '" class="swiper-slide">' + categoryArr[i] + '</li>');
        }
    }
}
/////////////////////Take order redirect page/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function row()
{
    var regex = new RegExp("^[a-zA-Z0-9\b()&'/+-.']+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if(event.charCode==43)
	{
		event.preventDefault();
		return false;
	 
	}else if(event.charCode==32)
	{
	
	}
	else
	{
	 
	    if (!regex.test(key)) 
	    {
		 event.preventDefault();
		 return false;
		}
	
	}
   
}
function seat()
{
    var regex = new RegExp("^[a-zA-Z0-9\b()&'/+-.']+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	
	if(event.charCode==43)
	{
		event.preventDefault();
		return false;
	 
	}else if(event.charCode==32)
	{
	
	}
	else
	{
	 
	    if (!regex.test(key)) 
	    {
		  event.preventDefault();
		  return false;
		}
	
	}
}
var seat2,row2,UUID,UUID,location_id,vendortypeloggedin,redirectedfrom,screen_ids,session_id,VID,nameArray,vendor_session_id,vendor_name,vendor_user_name,vendorUserId,UUID,theaterName,customer_id,seat_num,row,accessedfrom,timer;
$(document).on("click", "#loginVendor", function() 
{
     UUID = deviceUUID;
     session_id = session_id;
     redirectedfrom = 'vendorscreen';
     screen_ids = $("#SCname").val();
	 selectedtext = $("#SCname option:selected").html();
     row = $("#row").val();
	 row2=escape(row);
     seat_num = $("#seat").val();
	 seat2= escape(seat_num);
	 accessedfrom = '';
     if (row != "" && seat_num != "" && screen_ids.trim() != "SELECT") 
	 {
         customer_id = 1;
		if (selectedtext.indexOf("(HD)") >= 0) 
		{
				accessedfrom = 'homedelivery';
		} else  
		{
			accessedfrom = 'scanqrpage';
		}
		$("#loader").show();
		
		timer=setTimeout('Redirect(UUID,location_id,vendortypeloggedin,redirectedfrom,screen_ids,session_id,VID,nameArray,vendor_session_id,vendor_name,vendor_user_name,vendorUserId,UUID,theaterName,customer_id,seat2,row2,accessedfrom)', 1000);
		
		
     } 
	 else 
	 {
        alert("Please provide all the details before placing order");
        return false;

     }
});
/////////////////////////////Redirect page to customer/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Redirect(UUID,location_id,vendortypeloggedin,redirectedfrom,screen_ids,session_id,VID,nameArray,vendor_session_id,vendor_name,vendor_user_name,vendorUserId,UUID,theaterName,customer_id,seat_num,row,accessedfrom)
{
						localStorage.setItem('showpickitemspage', 'yes');
					
					window.location.replace("../customer/index_dup.html? UUID=" + UUID + '&location_id=' + location_id + '&vendortypeloggedin=' + vendortypeloggedin + '&redirectedfrom=' + redirectedfrom + '&screen_id=' + screen_ids + '&session_id=' + session_id + '&vendor_id=' + VID + '&VID=' + VID + '&nameArray=' + nameArray + '&vendor_session_id=' + vendor_session_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&vendorUserId=' + vendorUserId + '&UUID=' + UUID + "&sName=" + theaterName + "&customer_id=" + customer_id + "&seatnum=" + seat_num + "&row=" + row+ "&accessedfrom=" + accessedfrom);
				
					clearTimeout(timer);
}
//////////////////////////////////////////////Redirect page////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////Home Button////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hometimer;
$(document).on("click", ".logo-inner", function() 
{
			$("#loader").show();
 			hometimer=setTimeout(function()
			 { 
			  
			    var conn=checkconnection();
			    if(conn)
			    {
			        clearTimeout(hometimer);
			       	homecontext ="";
					 statuscalled=false;
					 $('#back').hide();
					  $('#homeiconback').hide();
					  $('#homeiconback1').hide();
					    $('#homeiconback2').hide();
					  
					  $('.backbutton').hide();
					 
		            $('.headerWrap').hide();
		            $(".headerWrap").show();
		            $('.timedateWrap').hide();
		            $('#VendorOrder').show();
		            $('#inhouse').hide();
		            $('#orderdetail').hide();
		            $('#orders').hide();
		            $('.list').html('');
		            $('.homeContent').hide();
		            $(".TwoBtns-wrap").hide();
		            $("#orderActionDiv").hide();
		            $('#homeMenu').show();
			     	
			    }
			    else
			    {
			       $("#errornet1").show();
			       $("#loader").hide();
			    }
			 }, 1000);
		
});

///////////////////////////////////Take Order page///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


var timers;
$(document).on("click", "#TakeOrder", function() 
{ 
	
	$("#loader").show();
    $("#takeorderss").hide();
    

	$("#homeMenu").show();
  
   if(homecontext=="")
   {
		  
		    
		    timers=setTimeout(function()
			 { 
			  
			    var conn=takeorderconnection();
			    if(conn)
			    {
			  	  	$("#row").val('');
				    $("#seat").val('');
				    $(".homeContent").show();
				    $("#inhouse").show();
				    $("#orderActionDiv").show();
				    //$("#showscreen").show();
				    $("#myordersdiv").hide();
				    $("#orderdetail").hide();
				    $("#VendorOrder").hide();
				     $("#takeorderss").show();
			        LoadScreens();
			     	
			    }
			    else
			    {
			       $("#errornet1").show();
			       $("#loader").hide();
			    }
			 }, 1000);
    		

	}
 
});

function LoadScreens() 
{
				

		$("#loader").show();
		$("#errornet1").hide();
		$("#errornet2").hide();
		$("#errornet3").hide();
		$("#takeordererror").hide();
		$("#takeordererror1").hide();
		
		
		
		//$("#showscreen").show();
				
		screenname = getParameterByName('sName');
		vendor_id = getParameterByName('vendor_id');
		VID = vendor_id;
		vendor_users_id = getParameterByName('vendor_users_id');
		vendor_type_id = getParameterByName('vendor_type_id');
		location_id = getParameterByName('location_id');
		vendor_session_id = getParameterByName('session_id');
		vendor_name = getParameterByName('vendor_name');
		vendor_user_name = getParameterByName('vendor_user_name');
		UUID = getParameterByName('UUID');
		mobile_number = getParameterByName('mobile_number');
		var htmloptions = '';
		$('#SCname').empty();
		var gotScreens = $.ajax({
        type: 'GET',
        url: url + '/oms1/getscreens?location_id=' + location_id + '&vendor_id=' + VID,
        jsonpCallback: 'jsonCallback',
        dataType: 'jsonp',
        timeout:10000,
        async: true,
        jsonp: false,
        beforeSend: function() 
        {
            $("#loader").show();
         
        },
        complete: function() {
            $("#loader").hide();
        },
        success: function(response) 
        {
       		 clearTimeout(timerfororder);
            var jsondata = JSON.stringify(response);
            //console.log(jsondata);
            jsondata = JSON.parse(jsondata);


            for (var i = 0; i < jsondata.screen.length; i++) 
			{
                var screenName = jsondata.screen[i].screen_name.trim();
                var screenId = jsondata.screen[i].screen_id.trim();
				 var is_home_delivery = jsondata.screen[i].is_home_delivery;
				if(is_home_delivery=="0")
				{
				    
				    htmloptions += '<option value="' + screenId + '" selected>' + screenName + '</option>';
				 
				}
				else if(is_home_delivery=="1")
				{
					htmloptions += '<option value="' + screenId + '">' + screenName + '</option>';
				}
				else
				{
				     htmloptions += '<option value="SELECT">   SELECT   </option>';
				
				}
            }



        },
        error: function(jqXHR, exception) 
		{
										if (jqXHR.status === 0) 
										{
														$("#takeordererror1").show();		
															$("#loader").hide();	
										} 
										else if (jqXHR.status == 404) 
										{
															  $("#takeordererror1").show();	
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
															$("#takeordererror1").show();	
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																$("#takeordererror1").show();	
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#takeordererror1").show();	
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																$("#takeordererror1").show();	
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																$("#takeordererror1").show();	
																$("#loader").hide();
										}
		}
    });
	gotScreens.done(function() 
	{

        $('#SCname').append(htmloptions);

    });


}
//////////////////////////////////////////Update order//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function updateViewed()
{

 				 $("#loader").show();
					if(updatedStatus=="New")
					{
					
					    ////////////////////////////////////////
					    var statustd;
						getStatusCount();

						if (updatedStatus=="New"&& window.orderstatus == "New" && order_id_val != "undefined" && order_id_val != null) 
						{
						         /////////////changed code///////////////////
								if(vendor_type_id=="1"||vendortypeloggedin=="1")
								{
												statuscalled=false;
												status("New");
								}
								else
								{


										statustd = "Viewed";
										////////////////////////////////////////////

										var rejClicked = $.ajax(
										{
											type: 'GET',
											url: url + '/oms1/updateorder?statusupdate=' + statustd + '&orderId=' + order_id_val + '&session_id=' + vendor_session_id + '&UUID=' + deviceUUID,
											jsonpCallback: 'updateorder',
											cache: false,
											dataType: 'jsonp',
											jsonp: false,
											timeout:10000,
											async: true,
											beforeSend: function() 
											{
												$("#loader").show();
											},

											complete: function() 
											{
												$("#loader").hide();
												
											
											},
											success: function(response) 
											{
											
												statuscalled=false;
												status("New");
												
											},
											error: function(jqXHR, exception) 
											{
																		if (jqXHR.status === 0) 
																		{
																							
																							$("#errornet2").show();
																							$("#loader").hide();		
																		} 
																		else if (jqXHR.status == 404) 
																		{
																							  $("#errornet2").show();	
																								$("#loader").hide();
																								
																		} else if (jqXHR.status == 500) 
																		{
																							$("#errornet2").show();	
																							$("#loader").hide();
																								
																		} 
																		else if (exception === 'parsererror') 
																		{
																								$("#errornet2").show();	
																								
																								$("#loader").hide();
																		} 
																		else if (exception === 'timeout') 
																		{
																								$("#errornet2").show();
																								$("#loader").hide();
																								
																		}
																		else if (exception === 'abort') 
																		{
																								$("#errornet2").show();	
																								
																								$("#loader").hide();
																								
																								
																		} 
																		else 
																		{
																								$$("#errornet2").show();
																								$("#loader").hide();
																		}
											}
										});
										rejClicked.done(function() 
										{
											// status("New");
											getStatusCount();

								

										});

								}



								

							

						} 
						else 
						{



							order_id_val = null;
							window.orderId = null;
							window.order_id_val = null;
							window.orderstatus = "NONE";
							


						}
						//////////////////////////////////////////
					
					
					}
					
					else
					
					{
					
					status("New");

					
					
					}













}

 //////////////////////////////Status values passing///////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////

function status(thiscontext)
{
	
  	
     //$(this).context.id=thiscontext;
		$('#back').show();
		$('#homeiconback').show();
		$('#homeiconback1').show();
		$('#homeiconback2').show();
		$('.backbutton').show();
        $(".homeIcon-header").removeClass("hide").addClass("show");
        $('#orders').show();
        $('#homeMenu').hide();
          $('.homeContent').hide();
        //$('#').click(function(){

        //)};
        var order_id_val;
        var ids = this.id;//tablesorter-blue
        var t_str = '';
        t_str = '<table id="keywords" class="tablesorter-blue" cellspacing="0"  cellpadding="0" width="100%">';
		 //t_str = '<table id="keywords" class="tablesorter" cellspacing="0"  cellpadding="0" width="100%">';
        t_str += '<thead >';
        t_str += '<tr class="TableHead" style="background:rgba(181, 47, 0, 0.4) none repeat scroll 0% 0%;">';
        //t_str += '<th width="6%" class="sort"><span><a>SLNO</a></span></th>';
        //t_str += '<th width="19%" class="sort"><span>Order ID</span></th>';
		t_str += '<th height="30px" width="13%" class="screen" ><span>Order No</span></th>'; //<!--th-->
        t_str += '<th  width="19%" class="screen" ><span>Screen</span></th>'; //<!--th-->
        t_str += '<th width="13%"  class="seat" ><span>Seat</span></th>';
        //t_str += '<th width="19%" class="sort"><span>RowNum</span></th>';
        t_str += '<th width="12%" class="qty" ><span>Qty</span></th>';
        t_str += '<th  id="recdate" width="19%" class="sorter-shortDate dateFormat-ddmmyyyy"><span>Date</span></th>'; //<th>
        t_str += '<th  id="rectime" width="19%" class="sorter-shortDate times" ><span>Time</span></th>'; //<th>
        t_str += '</tr>';
        t_str += '</thead>';
        t_str += '<tbody class="list">';
        var isHomeDelivery = "";
        var status = "";
        if ((homecontext == "")&&(homecontext!="NONE")) {

            status = thiscontext;//$(this).context.id;
        } else {
            status = homecontext;

        }

        // status = $(this).context.id; //document.getElementById("new").id;

        if (status == "NewandViewed" || status == "Viewed") {
            status = "Viewed"
        }
        if (status == "Accepted") {
            status = "Accept";
        }
        if (status == "Picked Up") {
            status = "Picked Up";
        }

        if (status == "Rejected") {
            status = "Reject";
        }

        if (status == "Cancelled") {
            status = "Cancel";
        }
		
		 if (status.toLowerCase() == "PickedUp".toLowerCase()) 
		 {
		 
		  status = "Picked Up";
		 }

				updatedStatus = status;
				window.orderstatus = status;
				var ordersdone = $.ajax({
                url: url + "/oms1/selectservice?statusparam=" + status + "&vendor_user_id=" + vendorUserId + '&session_id=' + vendor_session_id + '&UUID=' +deviceUUID,
                type: "GET",
                jsonpCallback: "selectservice",
                dataType: "jsonp",
                jsonp: false,
                timeout:10000,
				async: true,
                beforeSend: function() 
				{
                    $("#loader").show();
                },
                success: function(result) 
                {
                    
                  
					$('.list').html('');
					statuscalled=true;
					//console.log(JSON.stringify(result));
                    var json = JSON.stringify(result);
                    var keys = [];
                    var t_c = 0;
                    var seatOrTableNo = "N/A";
                    var rec_seatNo = "";
                    var rec_rowNo = "";
                    for (var key in result[0]) {
                        keys.push(key);
                    }
                    t_c += 1;

                    //if(keys[0]=="Picked Up")
                    // {
                    //    keys[0]="Picked Up"
                    // }
                    var sln = 0;
                    switch (keys[0]) 
					{
                        case "New":
 						
                            $("#orderheader")[0].textContent = "New";
						
                            for (j = 0; j < result[0].New.length; j++) 
							{


                                var json_value = JSON.parse(result[0].New[j].json_value);
					            var res=JSON.stringify(json_value);
						
                                //var lengthquantity = result[0].new[j].item_id.split(",").join("").length;
                                //alert();
                                sln = j + 1;
                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
					
                                if (json_value[0].orderedfrom == "TakeOrder") 
								{
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						
                                    rec_rowNo = decodeURIComponent(json_value[0].row.trim());
									   
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                               var ordernofornew= json_value[0].CounterId;
                        
                                screenName = json_value[0].screen;
								
								///////trim screen name////////////
								//////////////////////////////////
							
							var screennametrim=smartTrim(screenName, 9,' ','...');
								
								var str1 = result[0].New[j].date_of_order;
								
								 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].New[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
										
                                        rec_rowNo = smartTrim(result[0].New[j].rownum, 7, ' ', '...');
                                        seatOrTableNo = rec_rowNo;

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }

                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) {

                                    if (result[0].New[j].status == "Viewed") {
                                        isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    } else {
                                        isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);font-weight: bold;color:#47A5C4'";

                                    }



                                    if (result[0].New[j].status == "Viewed") 
									{
										
                                        t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].New[j].order_id + "' id_count='" + result[0].New[j].count + "'> <td tkey='" + ordernofornew + "'>" + ordernofornew + "</td>" + "<td tkey='" + result[0].New[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].New[j].quantity + "</td>" + "<td tkey='" + result[0].New[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].New[j].time_of_order + "'>" + result[0].New[j].time_of_order + "</td></tr>";
                                    } else 
									{
										
                                        t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].New[j].order_id + "' id_count='" + result[0].New[j].count + "'><td tkey='" + ordernofornew + "'>" + ordernofornew + "</td>" + " <td tkey='" + result[0].New[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].New[j].quantity + "</td>" + "<td tkey='" + result[0].New[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].New[j].time_of_order + "'>" + result[0].New[j].time_of_order + "</td></tr>";

                                    }
                                } else {
                                    if (result[0].New[j].status == "Viewed") {
                                        isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    } else {

                                        isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);font-weight: bold;color:#47A5C4'";
                                    }

                                    if (result[0].New[j].status == "Viewed") 
									{
										
                                        t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].New[j].order_id + "' id_count='" + result[0].New[j].count + "'> <td tkey='" + ordernofornew + "'>" + ordernofornew + "</td>" + "<td tkey='" + result[0].New[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + " </td>" + "<td>" + result[0].New[j].quantity + "</td>" + "<td tkey='" + result[0].New[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].New[j].time_of_order + "'>" + result[0].New[j].time_of_order + "</td></tr>";
                                    } else 
									{
										
                                        t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].New[j].order_id + "' id_count='" + result[0].New[j].count + "'> <td tkey='" + ordernofornew + "'>" + ordernofornew + "</td>" + "<td tkey='" + result[0].New[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + " </td>" + "<td>" + result[0].New[j].quantity + "</td>" + "<td tkey='" + result[0].New[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].New[j].time_of_order + "'>" + result[0].New[j].time_of_order + "</td></tr>";
                                    }

                                }



                                //t_str += "<tr class='ordId' style="+isHomeDelivery+"   id_order_v='" + result[0].New[j].order_id + "' id_count='" + result[0].New[j].count + "'> <td tkey='" + result[0].New[j].screen + "'>" + result[0].New[j].screen + "</td>" + "<td>" +result[0].New[j].rownum+" "+ result[0].New[j].seat_number + "</td>"  + "<td>" + result[0].New[j].quantity + "</td>" + "<td tkey='" + result[0].New[j].date_of_order + "'>" + result[0].New[j].date_of_order + "</td>"+ "<td tkey='" + result[0].New[j].time_of_order + "'>" + result[0].New[j].time_of_order + "</td></tr>";

                            }
                             
                            break;
                        case "Viewed":
                            $("#orderheader")[0].textContent = "Viewed";
                            for (j = 0; j < result[0].Viewed.length; j++) 
							{

                                var json_value = JSON.parse(result[0].Viewed[j].json_value);
                                var ordernoforViewed= json_value[0].CounterId;
                              
                                sln = j + 1;


                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") 
								{
                                     rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						
                                    rec_rowNo = decodeURIComponent(json_value[0].row.trim());
									
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Viewed[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }

                                screenName = json_value[0].screen;
									///////trim screen name////////////
								//////////////////////////////////
								
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								
								var str1 = result[0].Viewed[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								var str2 = result[0].Viewed[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) 
								{
									
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Viewed[j].order_id + "'> <td tkey='" + ordernoforViewed + "'>" + ordernoforViewed + "</td>" + "<td tkey='" + result[0].Viewed[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Viewed[j].quantity + "</td>" + "<td tkey='" + result[0].Viewed[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Viewed[j].time_of_order + "'>" + result[0].Viewed[j].time_of_order + "</td></tr>";
                                } else 
								{
								
                                   
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Viewed[j].order_id + "'> <td tkey='" + ordernoforViewed + "'>" + ordernoforViewed + "</td>" + "<td tkey='" + result[0].Viewed[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Viewed[j].quantity + "</td>" + "<td tkey='" + result[0].Viewed[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Viewed[j].time_of_order + "'>" + result[0].Viewed[j].time_of_order + "</td></tr>";

                                }



                            }

                            break;
                        case "Accept":
                            $("#orderheader")[0].textContent = "Accepted";
                            for (j = 0; j < result[0].Accept.length; j++) {

                                var json_value = JSON.parse(result[0].Accept[j].json_value);
								var ordernoforAccept= json_value[0].CounterId;
                           
                                sln = j + 1;

                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") 
								{
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						            rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Accept[j].rownum;
                                        seatOrTableNo = smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        // rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }

                                screenName = json_value[0].screen;
								
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								
                                var str1 = result[0].Accept[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								var str2 = result[0].Accept[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////

                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) 
								{
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "    id_order_v='" + result[0].Accept[j].order_id + "'><td tkey='" + ordernoforAccept + "'>" + ordernoforAccept + "</td>" + "<td tkey='" + result[0].Accept[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Accept[j].quantity + "</td>" + "<td tkey='" + result[0].Accept[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Accept[j].time_of_order + "'>" + result[0].Accept[j].time_of_order + "</td></tr>";
                                }else 
								{
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "    id_order_v='" + result[0].Accept[j].order_id + "'><td tkey='" + ordernoforAccept+ "'>" + ordernoforAccept + "</td>" + "<td tkey='" + result[0].Accept[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Accept[j].quantity + "</td>" + "<td tkey='" + result[0].Accept[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Accept[j].time_of_order + "'>" + result[0].Accept[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        case "Ready":
                            $("#orderheader")[0].textContent = "Ready";
                            for (j = 0; j < result[0].Ready.length; j++) {

                                var json_value = JSON.parse(result[0].Ready[j].json_value);
								var ordernoforReady= json_value[0].CounterId;
                                sln = j + 1;



                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") 
								{
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						             rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Ready[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }
                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
                                var str1 = result[0].Ready[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].Ready[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////

                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) 
								{
                                   
									
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Ready[j].order_id + "'><td tkey='" + ordernoforReady + "'>" + ordernoforReady + "</td>" + "<td tkey='" + result[0].Ready[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Ready[j].quantity + "</td>" + "<td tkey='" + result[0].Ready[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Ready[j].time_of_order + "'>" + result[0].Ready[j].time_of_order + "</td></tr>";
                                } else 
								{
									isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Ready[j].order_id + "'><td tkey='" + ordernoforReady + "'>" + ordernoforReady + "</td>" + "<td tkey='" + result[0].Ready[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Ready[j].quantity + "</td>" + "<td tkey='" + result[0].Ready[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Ready[j].time_of_order + "'>" + result[0].Ready[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        case "Picked Up":
                            $("#orderheader")[0].textContent = "Picked Up";
                           
                           //  for (j = 0; j < result[0]["Picked Up"].length; j++) {

                              //  var json_value = JSON.parse(result[0]["Picked Up"][j].json_value);
							  
							  var i;
								for(i = 0; i < result.length; i++){
									result[i].PickedUp = result[i]['Picked Up'];
									//delete result[i].key1;
								}

						   for (j = 0; j < result[0].PickedUp.length; j++) {

                                var json_value = JSON.parse(result[0].PickedUp[j].json_value);
                                sln = j + 1;
								var ordernoforPickedUp= json_value[0].CounterId;
                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") {
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						            rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                       rec_seatNo = "";
                                       rec_rowNo = result[0].PickedUp[j].rownum;
                                       seatOrTableNo = smartTrim(rec_rowNo, 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }
                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								var str1 = result[0].PickedUp[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].PickedUp[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) 
								{
								
								    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "    id_order_v='" + result[0].PickedUp[j].order_id + "'> " + "<td tkey='" + ordernoforPickedUp + "'>" + ordernoforPickedUp + "</td>" + "<td tkey='" + result[0].PickedUp[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].PickedUp[j].quantity + "</td>" + "<td tkey='" + result[0].PickedUp[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].PickedUp[j].time_of_order + "'>" + result[0].PickedUp[j].time_of_order + "</td></tr>";
                                } else 
								{
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "    id_order_v='" + result[0].PickedUp[j].order_id + "'> " + "<td tkey='" + ordernoforPickedUp + "'>" + ordernoforPickedUp + "</td>" + "<td tkey='" + result[0].PickedUp[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].PickedUp[j].quantity + "</td>" + "<td tkey='" + result[0].PickedUp[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].PickedUp[j].time_of_order + "'>" + result[0].PickedUp[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        case "Delivered":
                            $("#orderheader")[0].textContent = "Delivered";
                            for (j = 0; j < result[0].Delivered.length; j++) {

                                var json_value = JSON.parse(result[0].Delivered[j].json_value);
									var ordernoforDelivered= json_value[0].CounterId;
                                sln = j + 1;

                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") {
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						
                                    rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Delivered[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }
                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								var str1 = result[0].Delivered[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].Delivered[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) 
								{
                                    
									
                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Delivered[j].order_id + "'> " + "<td tkey='" + ordernoforDelivered + "'>" + ordernoforDelivered + "</td>" + "<td tkey='" + result[0].Delivered[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Delivered[j].quantity + "</td>" + "<td tkey='" + result[0].Delivered[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Delivered[j].time_of_order + "'>" + result[0].Delivered[j].time_of_order + "</td></tr>";
                                } else 
								{
								    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Delivered[j].order_id + "'> " + "<td tkey='" + ordernoforDelivered + "'>" + ordernoforDelivered + "</td>" + "<td tkey='" + result[0].Delivered[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Delivered[j].quantity + "</td>" + "<td tkey='" + result[0].Delivered[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Delivered[j].time_of_order + "'>" + result[0].Delivered[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;

                        case "Closed":
                            $("#orderheader")[0].textContent = "Closed";
                            for (j = 0; j < result[0].Closed.length; j++) {

                                var json_value = JSON.parse(result[0].Closed[j].json_value);
								var ordernoforClosed= json_value[0].CounterId;
								
                                sln = j + 1;

                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") {
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						             rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }
                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Closed[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }

                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								var str1 = result[0].Closed[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].Closed[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "       id_order_v='" + result[0].Closed[j].order_id + "'> <td tkey='" + ordernoforClosed + "'>" + ordernoforClosed + "</td>" + "<td tkey='" + result[0].Closed[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Closed[j].quantity + "</td>" + "<td tkey='" + result[0].Closed[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Closed[j].time_of_order + "'>" + result[0].Closed[j].time_of_order + "</td></tr>";
                                } else {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "       id_order_v='" + result[0].Closed[j].order_id + "'> <td tkey='" + ordernoforClosed + "'>" + ordernoforClosed + "</td>" + "<td tkey='" + result[0].Closed[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Closed[j].quantity + "</td>" + "<td tkey='" + result[0].Closed[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Closed[j].time_of_order + "'>" + result[0].Closed[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        case "Reject":
                            $("#orderheader")[0].textContent = "Rejected";
                            for (j = 0; j < result[0].Reject.length; j++) {

                                var json_value = JSON.parse(result[0].Reject[j].json_value);
								var ordernoforReject= json_value[0].CounterId;
                                sln = j + 1;
                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") {
                                     rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						             rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                     seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Reject[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo , 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }
                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								var str1 = result[0].Reject[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].Reject[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "  id_order_v='" + result[0].Reject[j].order_id + "'><td tkey='" + ordernoforReject + "'>" + ordernoforReject + "</td>" + "<td tkey='" + result[0].Reject[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Reject[j].quantity + "</td>" + "<td tkey='" + result[0].Reject[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Reject[j].time_of_order + "'>" + result[0].Reject[j].time_of_order + "</td></tr>";
                                } else {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "  id_order_v='" + result[0].Reject[j].order_id + "'><td tkey='" + ordernoforReject + "'>" + ordernoforReject + "</td>" + "<td tkey='" + result[0].Reject[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Reject[j].quantity + "</td>" + "<td tkey='" + result[0].Reject[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Reject[j].time_of_order + "'>" + result[0].Reject[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        case "Cancel":
                            $("#orderheader")[0].textContent = "Cancelled";
                            for (j = 0; j < result[0].Cancel.length; j++) {

                                var json_value = JSON.parse(result[0].Cancel[j].json_value);
								var ordernoforCancel= json_value[0].CounterId;
                                sln = j + 1;

                                rec_seatNo = "";
                                rec_rowNo = "N/A";
                                seatOrTableNo = "N/A";
                                var screenName = "";
                                if (json_value[0].orderedfrom == "TakeOrder") {
                                    rec_seatNo = decodeURIComponent(json_value[0].seatnum.trim());
						            rec_rowNo = decodeURIComponent(json_value[0].row.trim());
                                    seatOrTableNo =  smartTrim(rec_rowNo + ":" + rec_seatNo, 7, ' ', '...');

                                }

                                if ((json_value[0].is_home_delivery == 0) || (json_value[0].is_home_delivery == 2)) {

                                    if (json_value[0].orderedfrom == "QRScan") {

                                        rec_seatNo = "";
                                        rec_rowNo = result[0].Cancel[j].rownum;
                                        seatOrTableNo =  smartTrim(rec_rowNo, 7, ' ', '...');

                                    } else {

                                        //rec_seatNo = result[0].New[j].seat_number;
                                        //rec_rowNo =  result[0].New[j].rownum ;

                                        //seatOrTableNo=rec_rowNo+":"+rec_seatNo;

                                    }

                                }
                                screenName = json_value[0].screen;
								var screennametrim=smartTrim(screenName, 9, ' ', '...');
								var str1 = result[0].Cancel[j].date_of_order;
									 /////////////////////////////////
								/////spliting date///////////////
							   /////////////////////////////////
							   
								var datesplit = str1.split("-");
								
								
								var str2 = result[0].Cancel[j].time_of_order;
								
								//////////spliting date////////////////////////
								
								var res = datesplit[0]+'-'+datesplit[1]+'<i class="madhu">-'+datesplit[2]+'</i>'+'<i class="madhu">-'+str2+'</i>';
								
								///////////////////////////////////////////
								
                                if (((json_value[0].is_home_delivery == 0)) || ((json_value[0].is_home_delivery == 2) && (!(json_value[0].screen.toLowerCase().indexOf("hd") >= 0)))) {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(29, 38, 41);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Cancel[j].order_id + "'> <td tkey='" + ordernoforCancel + "'>" + ordernoforCancel + "</td>" + "<td tkey='" + result[0].Cancel[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Cancel[j].quantity + "</td>" + "<td tkey='" + result[0].Cancel[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Cancel[j].time_of_order + "'>" + result[0].Cancel[j].time_of_order + "</td></tr>";
                                } else {

                                    isHomeDelivery = "'background: none repeat scroll 0% 0% rgb(68, 57, 40);'";
                                    t_str += "<tr class='ordId' style=" + isHomeDelivery + "   id_order_v='" + result[0].Cancel[j].order_id + "'> <td tkey='" + ordernoforCancel + "'>" + ordernoforCancel + "</td>" + "<td tkey='" + result[0].Cancel[j].screen + "'>" + screennametrim + "</td>" + "<td><input type='hidden' value='" + rec_rowNo + ":" + rec_seatNo + "' />" + seatOrTableNo + "</td>" + "<td>" + result[0].Cancel[j].quantity + "</td>" + "<td tkey='" + result[0].Cancel[j].date_of_order + "'>" + res + "</td>" + "<td tkey='" + result[0].Cancel[j].time_of_order + "'>" + result[0].Cancel[j].time_of_order + "</td></tr>";

                                }


                            }

                            break;
                        default:
                            break;
                            // default code block
                    }

                    t_str += '</tbody>';
                    t_str += '</table>';
               
                    $(".list").html(t_str).trigger('click');
					$(".madhu").hide();

                    ////////////////////////////////////////////////////////////

                    //$('#keywords').tablesorter();
					$("#keywords").tablesorter(
					{
							theme : 'blue',

							dateFormat : "mmddyyyy", // set the default date format

							// or to change the format for specific columns, add the dateFormat to the headers option:
							headers: 
							{
							  3: { sorter: "shortDate" }, //, dateFormat will parsed as the default above
							 //4: { sorter: "time"}, // set day first format; set using class names
							  // 2: { sorter: "shortDate", dateFormat: "yyyymmdd" }  // set year first format; set using data attributes (jQuery data)
							  '.keywords, .TableHead,.screen,.seat,.qty,.times' :
							  {
								// disable it by setting the property sorter to false
								sorter: false
							  }
							}

					});
					//homecontext="";
                    //return false;


                    /////////////////////////////////////////////////////////////

                },
            error: function(jqXHR, exception) 
			{
										if (jqXHR.status === 0) 
										{
															
															$("#errornet2").show();
															$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
															 $("#errornet2").show();
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
															$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																$("#errornet2").show();
																$("#loader").hide();
										}
			}
			});

            ordersdone.done(function()
			{
	            //return false;
                //event.stopPropagation();
				$("#loader").hide();
				$("#rectime").trigger("click");
                $("#recdate").trigger("click");
            });


}

//  });

/*$("#vloginbtn").live( "click", function() {
 
 $("#vendorlogin").hide();
 $("#myordersdiv").hide();
 $("#inhouse").show();

 });   */
 
 ///////////////DOM LOADING////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////
 
$(document).ready(function() 
{



    $('#back').hide();
	$('#homeiconback').hide();
	$('#homeiconback1').hide();
	 $('#homeiconback2').hide();
	$('.backbutton').hide();
    screenname = getParameterByName('sName');
    vendor_id = getParameterByName('vendor_id');
    VID = vendor_id;
    vendor_users_id = getParameterByName('vendor_users_id');
    vendor_type_id = getParameterByName('vendor_type_id');
    location_id = getParameterByName('location_id');
    vendor_session_id = getParameterByName('session_id');
    vendor_name = getParameterByName('vendor_name');
    vendor_user_name = getParameterByName('vendor_user_name');
    UUID = getParameterByName('UUID');
    mobile_number = getParameterByName('mobile_number');



    $("#New")[0].textContent = "NEW (0)"
    $("#NewandViewed")[0].textContent = "NEW AND VIEWED (0)"
    $("#Accepted")[0].textContent = "ACCEPTED (0)"
    $("#Ready")[0].textContent = "READY (0)"
    $("#PickedUp")[0].textContent = "PICKED UP (0)"
    $("#Delivered")[0].textContent = "DELIVERED (0)"
    $("#Cancelled")[0].textContent = "CANCELLED (0)"
    $("#Closed")[0].textContent = "CLOSED (0)"
    $("#Rejected")[0].textContent = "REJECTED (0)"


    
	 
    $('#orders').hide();
    $('#homeicon').hide();
    $(".tpBN-rt").hide();
    $('#orderdetail').hide();
	/////////////////////////////CLICK ON MAIN MENU PAGE STATUS CHECK NETWORK CONNECTION//////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////
	
    var statustimer;
    $(".status").click(function() 
	{

	
			  var textstatus=$(this).context.id;
			console.log("textstatus=="+textstatus);
			  if(textstatus=="New")
			  {
						statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="NewandViewed")
			  {
						statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
						 
			  }
			  
			  else if(textstatus=="Accepted")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="Ready")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="PickedUp")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="PickedUp")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="Delivered")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else if(textstatus=="Closed")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			   else if(textstatus=="Cancelled")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			   else if(textstatus=="Rejected")
			  {
						 statustimer=setTimeout(function()
						 { 
						  
							var conn=takeorderconnection();
							if(conn)
							{
							  status(textstatus);
								
							}
							else
							{
							   $("#errornet1").show();
							   $("#loader").hide();
							}
						 }, 1000);
			  
			  }
			  else
			  {
				 status($(this).context.id);
			  
			  }

    });

    $(".sort").click(function() 
	{
					//$('#keywords').tablesorter();
					$("#keywords").tablesorter(
					{
							theme : 'blue',

							dateFormat : "mmddyyyy", // set the default date format

							// or to change the format for specific columns, add the dateFormat to the headers option:
							headers: 
							{
							  3: { sorter: "shortDate" }, //, dateFormat will parsed as the default above
							   //4: { sorter: "time"}, // set day first format; set using class names
							  // 2: { sorter: "shortDate", dateFormat: "yyyymmdd" }  // set year first format; set using data attributes (jQuery data)
							  '.keywords, .TableHead,.screen,.seat,.qty,.times' : {
								// disable it by setting the property sorter to false
								sorter: false
							  }
							}

					});
    });
	
	/////////////////bACK BUTTON /////////////////////////////
	
	$("#back").click(function() 
	{ 
		$(".backbutton").trigger("click");
	
	});
	
	/////BACK 
    //$(".logo-inner").click(function() {backbutton 
    
	$(".backbutton").click(function() 
	{ 
	
    		 $("#loader").show();
			 backtimer=setTimeout(function()
			 { 
			    
			    var conn=backbuttonconnection();
			    if(conn)
			    {
			     
			       if (($('#orderdetail')[0].style.display == "block")||($('#orderdetail')[0].style.display == "")) 
				 	{
			              
						//$("#praveen")[0].style.display ="none";
						$(".printpage_body").hide();
			
						$(".homeContent").show();
						 $('.headerWrap').hide();
			            $(".headerWrap").show();
			            $('.timedateWrap').hide();
			            $('#VendorOrder').show();
			            $('#inhouse').hide();
			            $('#orderdetail').hide();
			            $('#orders').hide();
			            $('.list').html('');
			            $('.homeContent').hide();
			            $(".TwoBtns-wrap").hide();
			            $("#orderActionDiv").hide();
			            $('#homeMenu').show();
			
			            homecontext = $("#praveen .left-order")[0].children[0].children[0].textContent;
						statuscalled=false;
						
						 $('#homeiconback').hide();
						
						switch(homecontext)
						{
						
						  case "New":
						  $("#loader").show();
						     if(homecontext=="New")
								{
									updateViewed();
							       
								}
							
						   break;
						    case "Viewed":
						    
						  status("Viewed");
						   break;
						   case "Accepted":
						  status("Accepted");
						   break;
						   case "Ready":
						     status("Ready");
						   break;
						 case "Picked Up":
							 status("Picked Up");
							break;
							 case "PickedUp":
							 status("Picked Up");
							break;
						 case "Delivered":
						status("Delivered");
						 break;
						  case "Closed":
							status("Closed");
						 break;
						case "Cancelled":
						 status("Cancelled");
						 break;
						 case "Rejected":
						 status("Rejected");
						 break;
						 
						
						
						
						}
						
						
			            //$(".status").trigger("click");
						statuscalled=true;
			        } else {
			
					     getStatusCount();
						 homecontext ="";
						 statuscalled=false;
						  
						 
						$('#back').hide();
						$('#homeiconback1').hide();
						$('#homeiconback').hide();
						 $('#homeiconback2').hide();
						$('.backbutton').hide();
			            $('.headerWrap').hide();
			            $(".headerWrap").show();
			            $('.timedateWrap').hide();
			            $('#VendorOrder').show();
			            $('#inhouse').hide();
			            $('#orderdetail').hide();
			            $('#orders').hide();
			            $('.list').html('');
			            $('.homeContent').hide();
			            $(".TwoBtns-wrap").hide();
			            $("#orderActionDiv").hide();
			            $('#homeMenu').show();
			
			        }
			        //$('#homeMenu').show();
			        // $('#orderdetail').hide();
			        // $('#orders').hide();
			        // $('.list').html('');
			        // $('.homeContent').hide();
			        //$('#homeMenu').show();
			     	
			    }
			    else
			    {
			       $("#errornet1").show();
			       $("#loader").hide();
			    }
			 }, 1000);
		
		
       
    });

    $("#cancel").click(function() {
        //$("#homeicon").click(function(){
		$('#back').hide();
		
		$('#homeiconback1').hide();
			$('#homeiconback').hide();
			 $('#homeiconback2').hide();
			$('.backbutton').hide();
        $('.headerWrap').hide();
        $(".headerWrap").show();
        $('.timedateWrap').hide();
        $('#VendorOrder').show();
        $('#inhouse').hide();
        $('#orderdetail').hide();
        $('#orders').hide();
        $('.list').html('');
        $('.homeContent').hide();
        $(".TwoBtns-wrap").hide();
        $("#orderActionDiv").hide();
        $('#homeMenu').show();
        //$('#homeMenu').show();
        // $('#orderdetail').hide();
        // $('#orders').hide();
        // $('.list').html('');
        // $('.homeContent').hide();
        //$('#homeMenu').show();
    });




    var clicked = "Reject";

    $(document).on("click", ".btn.btn-red", function() 
	{

        var status = $(".btn.btn-red")[0].text;

        if (status == "Deliver") {

            status = "Delivered";

        }

        var order_id_val = window.orderId;
         updatedStatus=status;

        var rejClicked = $.ajax({
            type: 'GET',
            url: url + '/oms1/updateorder?statusupdate=' + status + '&orderId=' + order_id_val + '&session_id=' + vendor_session_id + '&UUID=' + deviceUUID,
			timeout:10000,
			async: true,
            jsonpCallback: 'updateorder',
            cache: false,
            dataType: 'jsonp',
            jsonp: false,
            beforeSend: function() {
                $("#loader").show();
            },
            complete: function() {
                $("#loader").hide();
				  order_id_val = null;
                window.orderId = null;
                window.order_id_val = null;

				$(".backbutton").trigger("click");
            },
            success: function(response) {

               /* $('#orderdetail').hide();
                $(".TwoBtns-wrap").hide();
                $("#orderActionDiv").hide();
                $('.homeContent').hide();
                $('#homeMenu').show();*/
              
            },
                error: function(jqXHR, exception) 
			{
										if (jqXHR.status === 0) 
										{
															
															$("#errornet2").show();
															$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
															  $("#errornet2").show();
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
															$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
															$("#errornet2").show();
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																$("#errornet2").show();
																$("#loader").hide();
										}
			}
        });
        clicked = "Accepted";

        rejClicked.done(function() {
           $(".backbutton").trigger("click");
            getStatusCount();

        });
    });
     ////////////////////////////////////////Reject button called////////////////////////////////////////////
	 ////////////////////////////////////////////////////////////////////////////////////////////////////////
	
    $(document).on("click", "a#rej.btn", function() 
	{

        var status = $("a#rej.btn")[0].text;
        var btval = $("#rej").text();
		
		if(btval=="Cancel Order")
		{
		
			btval="Cancel";
			status="Cancel";
		}

		
        var order_id_val = window.orderId;

        if (btval == "Reject" || btval == "Cancel") 
		{
			updatedStatus=status;
            var rejClicked = $.ajax({
                type: 'GET',
                url: url + '/oms1/updateorder?statusupdate=' + status + '&orderId=' + order_id_val + '&session_id=' + vendor_session_id + '&UUID=' + deviceUUID,
                timeout:10000,
				async: true,
                jsonpCallback: 'updateorder',
                cache: false,
                dataType: 'jsonp',
                jsonp: false,
                beforeSend: function() 
				{
                    $("#loader").show();
                },
                complete: function() 
				{
							$("#loader").hide();
							order_id_val = null;
							window.orderId = null;
							window.order_id_val = null;
							window.orderstatus = "NONE";
							$(".backbutton").trigger("click");
					
                },
                success: function(response) 
				{
                   /* $('#homeMenu').show();
                    $('#orderdetail').hide();
                    $(".TwoBtns-wrap").hide();
                    $("#orderActionDiv").hide();
                    $('#orders').hide();
                    $('.list').html('');
                    $('.homeContent').hide();
                    $('#homeMenu').show();*/
                   

                    //console.log(JSON.stringify(response));
                },
                error: function(jqXHR, exception) 
				{
										if (jqXHR.status === 0) 
										{
															
															$("#errornet2").show();	
															$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
															 $("#errornet2").show();
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
															$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																$("#errornet2").show();
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																$("#errornet2").show();
																$("#loader").hide();
										}
				}
            });


            rejClicked.done(function() 
			{
			
			
							order_id_val = null;
							window.orderId = null;
							window.order_id_val = null;
							window.orderstatus = "NONE";
							$(".backbutton").trigger("click");
							getStatusCount();

            });



        } else 
		{

            $('#homeMenu').show();
            $('#orderdetail').hide();
            $(".TwoBtns-wrap").hide();
            $("#orderActionDiv").hide();
            $('#orders').hide();
            $('.list').html('');
            $('.homeContent').hide();
            $('#homeMenu').show();

            clicked = "Reject";
        }
    });

    $(document).on("click", ".logo-inner", function() 
	{

        var status;
        getStatusCount();

        if (window.orderstatus == "New" && order_id_val != "undefined" && order_id_val != null) 
		{
               
							  updatedStatus=status;
           
							  if(vendor_type_id=="1"||vendortypeloggedin=="1")
								{
									getStatusCount();			
								}
								else
								{
											status = "Viewed";
											 var rejClicked = $.ajax({
											type: 'GET',
											url: url + '/oms1/updateorder?statusupdate=' + status + '&orderId=' + order_id_val + '&session_id=' + vendor_session_id + '&UUID=' + deviceUUID,
											jsonpCallback: 'updateorder',
											cache: false,
											dataType: 'jsonp',
											jsonp: false,
											timeout:10000,
											async: true,
											beforeSend: function() 
											{
												$("#loader").show();
											},

											complete: function() 
											{
												$("#loader").hide();
											},

											success: function(response) 
											{
												//console.log(JSON.stringify(response));
											},

											error: function(jqXHR, exception) 
											{
													if (jqXHR.status === 0) 
													{
																		
																		 $("#errornet2").show();	
																		$("#loader").hide();		
													} 
													else if (jqXHR.status == 404) 
													{
																		 $("#errornet2").show();
																			$("#loader").hide();
																			
													} else if (jqXHR.status == 500) 
													{
																		$("#errornet2").show();
																		$("#loader").hide();
																			
													} 
													else if (exception === 'parsererror') 
													{
																		$("#errornet2").show();
																			
																			$("#loader").hide();
													} 
													else if (exception === 'timeout') 
													{
																			$("#errornet2").show();
																			$("#loader").hide();
																			
													}
													else if (exception === 'abort') 
													{
																			$("#errornet2").show();
																			
																			$("#loader").hide();
																			
																			
													} 
													else 
													{
																			$("#errornet2").show();
																			$("#loader").hide();
													}
											}
											});




											rejClicked.done(function() 
											{

												getStatusCount();

											});
								}
          

        } 
		else 
		{

         

            order_id_val = null;
            window.orderId = null;
            window.order_id_val = null;
            window.orderstatus = "NONE";



        }


    });




    /////////////////////////////////////
    function splitVendors(response) 
	{
            var totalitemprice = 0;
            ordersplitjson = response;
            var totalnumberofVendors = ordersplitjson.length;
            var vendorservicechareflg = true;
            var divhtml = $('<div class="orders-row" id="ordersummdiv">');
            divhtml.append('<h4>Order Summary <a href="#" id="cancelorder" class="btn btn-success btn-sm pull-right">Cancel Order</a></h4>');
            var vendorspecficsubtotal = 0;
            for (var i = 0; i < totalnumberofVendors; i++) {
                var vendorname = ordersplitjson[i].name;
                var highpricevendor = ordersplitjson[i].high_price_vendor;
                var vend_contact_address = ordersplitjson[i].data.tax_details.contact_address;
                var contact_phone_no_ = ordersplitjson[i].data.tax_details.contact_phone_no;

                var vendoritems = ordersplitjson[i].data.orderinfo;
                var vendoritemlen = ordersplitjson[i].data.orderinfo.length;

                var service_charge = 0;
                var service_tax = 0;
                var Item = 0;
                var VAT = 0;
                var Discount = 0;
                var convenience_charge = 0;
                var delivery_charge = 0;

                service_charge = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.ServiceCharge);
                service_tax = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.ServiceTax);
                Item = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.Item);
                VAT = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.VAT);
                Discount = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.Discount);
                convenience_charge = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.ConvenienceCharges);
                delivery_charge = parseFloat(ordersplitjson.vendors.T1[i].data.tax_details.Deliverycharges);
                if (vendorname !== highpricevendor) {
                    convenience_charge = 0;
                }
                var total_sub_bef = parseFloat(service_charge) + parseFloat(service_tax) + parseFloat(Item) + parseFloat(VAT) - parseFloat(Discount) + parseFloat(convenience_charge) + parseFloat(delivery_charge);
                var total_sub = Math.round(total_sub_bef * 100) / 100;
                var orderOfdisplay = ordersplitjson.vendors.T1[i].data.tax_details.bill_order;


                if (vendorname != '' && vendorname != 'undefined') {
                    var test = 'present';

                    divhtml.append('<div class="orders-row"> \
		<aside class="left-order"> \
		<i><b class="vendor"  style="display:inline-block;width:190px;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;font-size:12px" >' + vendorname + '</b> <span>' + vendoritemlen + ' items</span> \
		</i> \
		<p class="vend-adrs">' + vend_contact_address + '<br>Phone: ' + contact_phone_no_ + '</p> \
		</aside> \
		</div>');



                    for (var j = 0; j < vendoritems.length; j++) {
                        var itemname = vendoritems[j].name;
                        var image = vendoritems[j].image;
                        var price = vendoritems[j].price;
                        var additions = vendoritems[j].additions;
                        var quan = vendoritems[j].quantity;
                        var toppins = vendoritems[j].toppings;
                        var crusts = vendoritems[j].crusts;
                        var itemidk = vendoritems[j].itemid;
                        var discount_div = vendoritems[j].discount_div;
                        var strikeprice_cutoff = vendoritems[j].strikeprice_cutoff;
                        var item_description = vendoritems[j].item_description;
                        var divhtmltoppcrust = '';
                        var maxtoppins = toppins.length;
                        var maxcrusts = crusts.length;
                        var max = 0;
                        var price_without_additions = parseFloat(price) - parseFloat(additions);
                        if (maxtoppins > maxcrusts) {
                            max = maxtoppins;
                        } else if (maxcrusts > maxtoppins) {
                            max = maxcrusts;
                        } else if (maxcrusts == maxtoppins) {
                            max = maxcrusts;
                        }
                        for (var l = 0; l < max; l++) {
                            var toppingsul = '<ul>';
                            var crustsul = '<ul>';
                            if (toppins.length > 0) {
                                $.each(toppins[l].value, function(i, text) {

                                    if (text) {
                                        if (text != 'None') {
                                            toppingsul += "<li>" + text + "</li>";
                                        }
                                    }


                                });
                            }

                            if (crusts.length > 0) {
                                $.each(crusts[l].value, function(h, texter) {

                                    if (texter) {
                                        if (texter != 'None') {
                                            crustsul += "<li>" + texter + "</li>";
                                        }
                                    }

                                });
                            }
                            var item = l + 1;

                            toppingstyle = (toppingsul != '<ul>') ? "block" : "none";
                            cruststyle = (crustsul != '<ul>') ? "block" : "none";



                            if (toppingsul == '<ul>' && crustsul == '<ul>') {
                                headerstyle = 'none';
                            } else {
                                headerstyle = 'block';
                            }


                            // 

                            divhtmltoppcrust += '<h5 style="display:' + headerstyle + '" >Item ' + item + '</h5><h6 style="display:' + toppingstyle + '">Toppings</h6> ' + toppingsul + ' <h6 style="display:' + cruststyle + '">Crusts</h6>' + crustsul + '';

                        }

                        itemidk = itemidk + j;

                        var adntsclassstyle = "block";

                        if (additions == 0) {
                            adntsclassstyle = "none";
                        }

                        if (discount_div.indexOf("percent") > -1) {
                            discount_div = discount_div.replace("percent", "%");
                        }

                        if (discount_div == '0') {
                            discount_style_ordersumm = 'none';
                        } else {
                            discount_style_ordersumm = 'block';
                        }

                        strikeprice_cutoff = strikeprice_cutoff > 0 ? strikeprice_cutoff : "";
                        var display = strikeprice_cutoff == "" ? "none" : "block";

                        itemcart = '<div class="order-listdetails-wrap" id=' + itemidk + '> \
                    <div class="orderTitle">' + itemname + '\
                        </div></div><i class="icon-os-description" style="right:0px;"  id="itemdesc' + itemidk + '" data-description=' + item_description + ' alt="Description" title="Description"></i>\
                    </div> \
                    <div class="os-description" id="desc' + itemidk + '" style="display: none;">' + item_description + '</div>\
                    <div class="orderCont"> \
                        <div class="img"><img src="' + image + '"/></div> \
                        <div class="os-new-qty">\
                            <p>Qty: <span>' + quan + '</span></p> \
                        </div>\
                        <div class="priDis_new_Wrap">\
                            <div class="priDisRow">\
	   <div style="display:' + discount_style_ordersumm + '" class="discount-div">' + discount_div + '</div>\
                            </div>\
                            <div class="priDisRow">\
                                <p style="margin:10px 0 0 0;"class="pull-right total-rs total_204 ">' + price_without_additions + '</p>\
                                 <p style="display:' + discount_style_ordersumm + ';margin:10px 10px 0 0;"  class="pull-right total-rs text-strikethrough">' + strikeprice_cutoff + '</p>\
                            </div>\
							<div> <p style="display:' + adntsclassstyle + '; margin:10px 10px 0 0;" class="pull-right">Additions ' + additions + '</p>\ </div>\
                        </div>\
                        <div class="crust-topping-detailsWrap" style="margin-left: 80px;">' + divhtmltoppcrust + '</div> \
                    </div> \
                </div>';
                        divhtml.append(itemcart);
                        totalitemprice = parseFloat(price) + parseFloat(totalitemprice);
                    } // item for loop ends here 

                    var htmldata = '<section class="cartTable"> \
    <table width="50%" border="0" cellspacing="0" cellpadding="0" class="totalWrap" align="right"> \
    <tbody>'

                    for (var h = 0; h < orderOfdisplay.length; h++) {
                        if (ordersplitjson.vendors.T1[i].data.tax_details[orderOfdisplay[h]] != 0) {
                            
                            htmldata += '<tr><td align="right" valign="middle" width="50%">' + orderOfdisplay[h] + '</td> \
    <td align="right" valign="middle" width="50%">Rs. ' + ordersplitjson.vendors.T1[i].data.tax_details[orderOfdisplay[h]] + '</td> \
    </tr>';
                        }
                    }

                    if (vendorname == highpricevendor) {
                        if (convenience_charge != 0) {
                            htmldata += '<tr><td align="right" valign="middle" width="50%">Convenience Charge</td> \
    <td align="right" valign="middle" width="50%">Rs. ' + convenience_charge + '</td> \
    </tr>';
                        }
                    }
                    if (delivery_charge != 0) {
                        htmldata += '<tr><td align="right" valign="middle" width="50%">Delivery Charge</td> \
    <td align="right" valign="middle" width="50%">Rs. ' + delivery_charge + '</td> \
    </tr>';
                    }

                    htmldata += '<tr style="border:none;"><td align="right" valign="middle">Sub Total</td>\
    <td align="right" valign="middle"><strong>Rs. ' + total_sub + '</strong></td> \
    </tr>';
                    htmldata += '</tbody>\
    </table> \
    <br><br><br> \
    </section>';



                    divhtml.append(htmldata);
                    vendorservicechareflg = false;

                    test = 'notpresent';
                } // if condition item not null
                vendorspecficsubtotal = parseFloat(total_sub) + parseFloat(vendorspecficsubtotal);

            } // vendor loop ends here 

            divhtml.append('<section class="cartTable cartpirceborder"> \
            <table width="50%" border="0" cellspacing="0" cellpadding="0" class="totalWrap" align="right"> \
                      <tbody> \
                          <tr style="border:none;"> \
                            <td align="right" valign="middle" class="total">Total</td> \
                            <td align="right" valign="middle" class="total">Rs. ' + vendorspecficsubtotal + '</td> \
                          </tr> \
                      </tbody> \
                    </table> \
                    <br><br><br> \
                </section> \
                <div class="btns-wrap"> \
          <a id="1stconfirm" href="#" class="btn btn-success">Confirm Order</a> \
            <a href="#" id="editorder" class="btn btn-mrn">Edit Order</a> \
                </div>');

            $('.orders-details-wrap').append(divhtml);
            $('.orders-details-wrap').show();
            $("#myordersdiv").hide();

            $("#swiper-wrapper").hide();

        }
        /////////////////////////////////////////


    /////////////////////////////////////////////////////////
    /////////   Display Order Details
    //////////////////////////////////////////////////////////
   var res;
    $(document).on("click", ".ordId", function() 
    {
        	
       	clearTimeout(displayordertime);
       	
       	$("#loader").show();
	
			 
			      
			      $(".contentWrap").hide();
	        $('#orderdetail').show();
	        $('#homeMenu').hide();
	        $('#orders').hide();
	        $('.list').html('');
	        var Snumber = "";
	        var Rnumber = "";
	        //var order_id_val ;
       		 try 
       		 {
            order_id_val = $(this).attr("id_order_v");
           
            var seatRow = $(this)[0].cells[2].textContent.split(':');
			/*
			code changed if (seatRow.length > 1) 
			{
                Snumber = seatRow[0];
				Rnumber = seatRow[1];
			
                //Snumber= $(this)[0].cells[1].textContent;
                //Rnumber= $(this)[0].cells[4].textContent;
            } 
			else 
			{
                Snumber = "N/A";
                Rnumber = "N/A";
            }
            */
            window.orderId = order_id_val;
        } 
		catch (ex) 
		{
            //alert(ex);
        }

        //var toppingres = ["top1", "top2", "top3"];
        //var toppings = '<div class="order-listdetails-wrap">';
        //toppings+='<div class="orderTitle">"+name+"</div>';
        console.log("order_id_val=="+order_id_val);

        if (order_id_val != "undefined" && order_id_val != null) 
		{
               
				var jsonstr;
				var cName;
				var cPhNo;
				var qutys = [];
				var ordersummary = $.ajax({
                //	url:"http://192.168.2.39:8080/SmarTreat/getOrderDetails?orderId="+order_id_val+"",
                url: url + '/oms1/orderjson?orderidjson=' + order_id_val + '&session_id=' + vendor_session_id + '&UUID=' + deviceUUID,
                type: "GET",
                jsonpCallback: "jsonCallback",
                dataType: "jsonp",
                jsonp: false,
                cache: false,
				timeout:10000,
				async: true,
                beforeSend: function() 
				{
                    $("#loader").show();
                    $("#praveen").hide();
                },
                complete: function() 
				{
                    $("#loader").hide();
					console.log("ajaxcompleted");
                    $(".contentWrap").show();
                },
                success: function(result) 
				{

                  		clearTimeout(calldisplay);
                        //splitVendors(result);


                        //returnfalse;  
                        var comments = "";
                       console.log('resultset' + JSON.stringify(result));
                        jsonstr = result;
                        var serviceChrg = 0;
                        var surChrg = 0;
                        var vat = 0;
                        var subtotal = 0;
                        var delcharge = 0;
                        var servicetax = 0;
                        var total = 0;
                        var conveniencecharge = 0;
                        var discount = 0;
                        var discount_div_style = "display:none";
                        var discount_div = "";
                        var cost = 0;
                        var othertax1 = 0;
                        var othertax2 = 0;
                        var orderOfdisplay = null;
					   taxDetailsData=null;
                        var is_home_delivery = 0;
                        //Address Fields
                        var building_no = "";
                        var street_name = "";
                        var locality = "";
                        var area = "";
                        var city = "";
                        var state = "";
                        var tablenum = "";


                        for (var i = 0; i < jsonstr.length; i++) {
                            cName = jsonstr[i].customer_name;
                            is_home_delivery = jsonstr[0].is_home_delivery;
                            if (is_home_delivery == 1) 
							{
                               
								cPhNo = jsonstr[0].cust_address.phone_number;
                            } else 
							{
                                 cPhNo = jsonstr[i].customer_mobil;
                            }
                            var pricetot = parseFloat(jsonstr[i].price);
							var CounterId=jsonstr[i].CounterId;
							Rnumber = decodeURIComponent(jsonstr[i].seatnum.trim());
							////////////////////////////
								if (Rnumber.length !="") 
								{
									Snumber = decodeURIComponent(jsonstr[i].row.trim());
						
								} 
								else 
								{
									//Snumber = "N/A";
									//Rnumber = "N/A";
								}
							///////////////////////////////
							total = parseFloat(total) + pricetot;
                            serviceChrg = jsonstr[i].ServiceCharge;
                            delcharge = jsonstr[i].Deliverycharges;
                            servicetax = jsonstr[i].ServiceTax;
                            conveniencecharge = jsonstr[i].convenience_charges;
                            discount = jsonstr[i].Discount;
                            discount_div = jsonstr[i].discount_div;
                            othertax1 = jsonstr[i].OtherTax1;
                            othertax2 = jsonstr[i].OtherTax2;
                            cost = jsonstr[i].Cost;
                            orderOfdisplay = jsonstr[i].order;
						
							if(jsonstr[i].taxdetails!=undefined && jsonstr[i].taxdetails!='undefined')
							{
							taxDetailsData=jsonstr[i].taxdetails;
							}
                            subtotal=Math.round(jsonstr[i].total * 100) / 100;
							subtotalfixed=subtotal.toFixed(2);
								if (jsonstr[i].tablenum != "") 
								{
									tablenum = jsonstr[i].tablenum;
								} 
								else 
								{

									tablenum = "No Table Number Assigned";

								}
							
                            if (discount > 0) {

                                discount_div_style = "display:block";



                            } else {

                                discount_div_style = "display:none";


                            }

							 var name; 
							 var address1;
							 var landmark1;


                            if (jsonstr[i].cust_address) {
                                if (jsonstr[i].cust_address.building_no.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.building_no != undefined) {
                                    building_no = jsonstr[i].cust_address.building_no;
                                } else {
                                    building_no = "";
                                }

                                if (jsonstr[i].cust_address.street_name.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.street_name != undefined) {
                                    street_name = jsonstr[i].cust_address.street_name;
                                } else {
                                    street_name = "";
                                }

                                if (jsonstr[i].cust_address.locality.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.locality != undefined) {
                                    locality = jsonstr[i].cust_address.locality;
                                } else {
                                    locality = "";
                                }

                                if (jsonstr[i].cust_address.area.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.area != undefined) {
                                    area = jsonstr[i].cust_address.area;
                                } else {
                                    area = "";
                                }

                                if (jsonstr[i].cust_address.city.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.city != undefined) {
                                    city = jsonstr[i].cust_address.city;
                                } else {
                                    city = "";
                                }

                                if (jsonstr[i].cust_address.state.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.state != undefined) {
                                    state = jsonstr[i].cust_address.state;
                                } else {
                                    state = "";
                                }
                                if (jsonstr[i].cust_address.phone_number.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.phone_number != undefined) {
                                    cPhNo = jsonstr[i].cust_address.phone_number;
                                }
								if (jsonstr[i].cust_address.name.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.name != undefined) {
                                    name = jsonstr[i].cust_address.name;
                                }
								if (jsonstr[i].cust_address.address1.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.address1 != undefined) {
                                    address1 = jsonstr[i].cust_address.address1;
                                }
								if (jsonstr[i].cust_address.landmark.toLowerCase() != "Undefined".toLowerCase() && jsonstr[i].cust_address.landmark != undefined) {
                                    landmark1 = jsonstr[i].cust_address.landmark;
                                }
                            }

                            // surChrg = jsonstr[i].SurCharges;
                            vat = jsonstr[i].VAT;
                        }
                        ///////"ConvenienceCharges": 100,
                        ///////"discount_div": "0",
                        ///////"Deliverycharges": 0,
                        /////////"Item": "500.0",
                        ////////////"VAT": 0,
                        ////////////"ServiceTax": 0,
                        ////////////"ServiceCharge": 0
                        //subtotal = (parseFloat(serviceChrg) +parseFloat(vat) + parseFloat(delcharge) +  parseFloat(servicetax) +   parseFloat(conveniencecharge) + total);//-discount;
                        var ordrstatus;
                        if (window.orderstatus == "Viewed") 
						{

                            var ordrstatus = "Viewed";
                        } else if (window.orderstatus == "Picked Up") 
						{

                            ordrstatus = "Picked Up";
                        } else 
						{
                            ordrstatus = window.orderstatus;
                        }

                        if (ordrstatus == "Reject") 
						{
                            ordrstatus = "Rejected";
                        }

                        if (ordrstatus == "Accept") 
						{
                            ordrstatus = "Accepted";
                        }

                        if (ordrstatus == "Cancel") 
						{
                            ordrstatus = "Cancelled";
                        }

                        var toppingshtml = '<section class="homeContent" >';
                        toppingshtml += '<div class="orders-details-wrap" >';
                        ///////////////////changed code///////////////
						
                        if (cName == "") 
						{
							
                            toppingshtml += "<h4><span id=0>Business Order</span></h4></br><span id=1>Order No :</span>" + CounterId + "</br>";
							toppingshtml += '<div class="orders-row">';
							toppingshtml += '<aside class="left-order">';
							toppingshtml += "<i>Order Status <span id=" + ordrstatus + ">" + ordrstatus + "</span></i>";
						   if(Snumber!=""||Rnumber!="")
							{
							  toppingshtml += "</br><span id=2></span>" + Snumber + "</br><span id=3></span>" + Rnumber + "</br></aside>";
							}else
							{
							   toppingshtml += "</br></aside>";
							}
					
                        } else 
						{
                            toppingshtml += "<h4>Customer: <span id=0>" + cName + ":" + cPhNo + "</span></h4></br><span id=1>Order No :</span>" + CounterId + "</br>";
							toppingshtml += '<div class="orders-row">';
							toppingshtml += '<aside class="left-order">';
							toppingshtml += "<i>Order Status <span id=" + ordrstatus + ">" + ordrstatus + "</span></i></aside>"; 
						}
                        
                        //toppingshtml += '<aside class="left-order">';
                        //toppingshtml += "<i>Seat No <span id=" + Snumber+Rnumber + ">" + Snumber+Rnumber + "</span></i>";
                        //toppingshtml += '</aside>';
                        /////////////////
                        toppingshtml += '<aside onclick="PrintElem('+"'"+order_id_val+"'"+')" class="right-order">';
                        toppingshtml += "<i><span id='print'><img src='images\\print.png'></span></i>";
                        toppingshtml += '</aside>';
                        ///////////////
                        toppingshtml += '<aside class="right-order">'
                        toppingshtml += "<i> <span id=" + subtotal + "><span style='border:none' class='WebRupee'>"+Rupee+"</span> " + subtotalfixed + "</span></i>";
                        toppingshtml += '</aside></div>';

                        if (is_home_delivery == "1") {
                            // Address goes here
                            toppingshtml += '<div class="orders-row">';
                            toppingshtml += '<aside class="left-order">'+capitalizeFirstLetter(name)+",+91-"+cPhNo+"</br>";
							if(landmark1!=""&&address1!="")
							{
							  
							   toppingshtml += '<aside class="left-order">'+address1+",</br>"+landmark1+",</br>";
							}
							else
							{
							  
							  if(landmark1=="")
							  {
							  
							    toppingshtml += '<aside class="left-order">'+address1+"</br>";
							  }else
							  { 
							     console.log("addressempty");
							     toppingshtml += '<aside class="left-order">'+landmark1+"</br>";
							  }
								
							}
                            if (building_no != "") {
                                toppingshtml += "Building No : " + building_no + "<br>";
                            }
                            if (street_name != "") {
                                toppingshtml += street_name + "<br>";
                            }
                            if (locality != "" || area != "") {
                                if (locality != "" && area != "") {
                                    toppingshtml += locality + "," + area + "<br>";
                                }
                                if (locality == "") {
                                    toppingshtml += area + "<br>";

                                }

                                if (area == "") {
                                    toppingshtml += locality + "<br>";

                                }


                            }


                            if (city != "" || state != "") {
                                if (city != "" && state != "") {
                                    toppingshtml += city + "," + state + "<br>";
                                }
                                if (city == "") {
                                    toppingshtml += state + "<br>";

                                }

                                if (state == "") {
                                    toppingshtml += city + "<br>";

                                }


                            }
                            //toppingshtml +=area+"<br>";
                            //toppingshtml +=city+","+state+"<br>";
                            //toppingshtml +=state+"<br>";
                            toppingshtml += '</aside></div>';
                            //end of address
                        } else {

                            //tablenum
                            var styl = "";
                            if (tablenum == "TakeOrder" || tablenum == "No Table Number Assigned") {

                                styl = "display:none"

                            } else {

                                styl = "display:block"

                            }

                            toppingshtml += '<div style="' + styl + '" class="orders-row">';
                            toppingshtml += '<aside class="left-order">';
                            toppingshtml += "" + tablenum + "<br>";
                            //toppingshtml +=state+"<br>";
                            toppingshtml += '</aside></div>';


                        }

                        toppingshtml += '</div>';
                        toppingshtml += '<div  class="order-listdetails-wrap">';

                        for (j = 0; j < jsonstr.length; j++) {

                            var image = jsonstr[j].image;
                            var name = jsonstr[j].name;
                            var price = jsonstr[j].price;
                            var quantity = jsonstr[j].quantity;
                            var toppings = jsonstr[j].toppings;
                            var crusts = jsonstr[j].crusts;
                            var crustings_quantitywise = JSON.parse(jsonstr[j].crustings_quantitywise);
                            var toppings_quantitywise = JSON.parse(jsonstr[j].toppings_quantitywise);
                            var crust_name = jsonstr[j].crusting_name;
                            var topping_name = jsonstr[j].topping_name;
                            var additions = jsonstr[j].additions;
                            var strikeprice_cutoff = jsonstr[j].strikeprice_cutoff;
                            var viewedcount = jsonstr[j].count;
                            var price_without_additions = parseFloat(price); //- parseFloat(additions);
                            var vegornonVeg = jsonstr[j].vegornonveg;
                            var discount = jsonstr[j].Discount;
                            var discount_div = jsonstr[j].discount_div;
                            var discount_div_style = "display:none";
							//taxDetailsData=jsonstr[j].taxdetails;


							var discount=parseFloat(discount_div);
							console.log(discount);
                            if (discount > "0") 
							{
                              
                                discount_div_style = "display:block;";

                            } 
							else 
							{
                                   
                                discount_div_style = "display:none;";


                            }



								  discount_div = discount_div.replace("percent", "%");
							
									if(discount_div.indexOf("Rs") > -1)
									{
									
									
									 discount_div="Rs "+discount_div.replace("Rs","");
									
									
									}
									else
									{
									
									 discount_div = discount_div.replace("percent", "%");
									
									
									}
							


                            if (comments.trim() == "") {
                                comments += jsonstr[j].comments;
                            }

                            var vegornonvegclass = 'vegLabel';
                            if (vegornonVeg == 'vegterian') {
                                vegornonvegclass = 'vegLabel';
                                //vegornondata = 'vegterian' ;
                            } else if (vegornonVeg == 'nonvegterian') {
                                vegornonvegclass = 'nonvegLabel';
                                //vegornondata = 'nonvegterian'
                            }

                            var adntsclassstyle = "block";

                            if (additions == 0) {
                                adntsclassstyle = "none";
                            }
                            var priceDetails = "";
                            window.viewedcount = viewedcount;
                            if (name != 'undefined' && name != '') {
                                if (toppings.length >= 1 || crusts.length >= 1) {


                                    var istops = false;
                                    //for (q = 0; q < toppings.length; q++) {
                                    //var topname = toppings[q];




                                    var uitaghtml = "<table width='100%'  class='crust_topping_table'><tbody><tr><td valign='top' width='48%'>";

                                    uitaghtml += '<table id="toppingstable' + j + '" width="100%"><tbody><!--<thead  style="box-shadow: 0 1px 10px #000000;" >-->';
                                    uitaghtml += '<!--<tr ><th  style="text-align:center"  width="10%" height="30px"  colspan="2" >Toppings</th></tr></thead>-->';
                                    //uitaghtml+='<tr><th width="10%" >Crusts</th></tr>';

                                    if (toppings.length >= crusts.length) {
                                        var tophtml = "<!--<tbody>-->";
                                        $.each(toppings_quantitywise, function(i, text) {
                                            var itmsrno = i.replace("Qty", "Item ");
                                            qutys.push(itmsrno);
                                            istops = true;
                                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='width:100%;float:left;border-bottom:1px solid rgba(255,255,255,0.1)'  ourAttribute='" + itmsrno.replace('Item', '').trim() + "' myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' ><table id='" + itmsrno.replace('Item', '').trim() + "'><tbody>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='box-shadow: 0 1px 3px #B2B2B2;' height='30px' myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' style='font-weight: bold;   text-transform: uppercase;'>" + itmsrno + "</td></tr>";
                                            tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td></td><td ><table><thead style='box-shadow: 0 1px 2px #000000;'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap;color:#febc3c' colspan='2'  height='30px' width='10%' >" + topping_name + "</th></tr></thead>";
                                            $.each(text.values, function(i, text) {
                                                tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'> " + text + "</td></tr>";
                                            });
                                            tophtml += "</table></td></tr><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td></td>";
                                            $.each(crustings_quantitywise, function(i, text) {
                                                if (i.replace("Qty", "Item ") == itmsrno) {
                                                    tophtml += "<td><table><thead style='box-shadow: 0 1px 2px #000000;text-align:center'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap; color:#febc3c' colspan='2'  height='30px' width='10%' >" + crust_name + "</th></tr></thead><tbody>";
                                                    $.each(text.values, function(i, text) {
                                                        tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'>" + text + "</td></tr>";
                                                    });
                                                    tophtml += "</tbody></table></td></tr>";
                                                }

                                            });
                                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "</tbody></table></td></tr>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



                                        });

                                    } else {

                                        var tophtml = "<!--<tbody>-->";
                                        $.each(crustings_quantitywise, function(i, text) {
                                            var itmsrno = i.replace("Qty", "  Item ");
                                            qutys.push(itmsrno);
                                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr  style='width:100%;float:left;border-bottom:1px solid rgba(255,255,255,0.1)' ourAttribute='" + itmsrno.replace('Item', '').trim() + "' myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' ><table id='" + itmsrno.replace('Item', '').trim() + "'><tbody>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='box-shadow: 0 1px 3px #B2B2B2;' height='30px' myAttribute='" + itmsrno.replace('Item', '').trim() + "'  id='" + itmsrno.replace('Item', '').trim() + "'><td colspan='3'  style='font-weight: bold;   text-transform: uppercase;'>" + itmsrno + "</td></tr>";
                                            tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td></td><td ><table><thead style='box-shadow: 0 1px 2px #000000;'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap; color:#febc3c' colspan='2'  height='30px' width='10%' >" + crust_name + "</th></tr></thead><tbody>";
                                            $.each(text.values, function(i, text) {
                                                tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'> " + text + "</td></tr>";
                                            });
                                            tophtml += "</tbody></table></td></tr><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td></td>";
                                            $.each(toppings_quantitywise, function(i, text) {
                                                if (i.replace("Qty", "  Item ") == itmsrno) {
                                                    tophtml += "<td><table><thead style='box-shadow: 0 1px 2px #000000;text-align:center'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap; color:#febc3c' colspan='2'  height='30px' width='10%' >" + topping_name + "</th></tr></thead><tbody>";
                                                    $.each(text.values, function(i, text) {
                                                        tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'>" + text + "</td></tr>";
                                                    });


                                                    tophtml += "</tbody></table></td></tr>";
                                                }
                                            });
                                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "</tbody></table></td></tr>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                        });
                                    }



                                    qutys = qutys.map(Function.prototype.call, String.prototype.trim)

                                    $.each(toppings_quantitywise, function(i, text) {
                                        var itmsrno = i.replace("Qty", "Item ");

                                        if (qutys.indexOf(itmsrno.trim()) < 0) {
                                            istops = true;
                                            qutys.push(itmsrno);
                                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='width:100%;float:left;border-bottom:1px solid rgba(255,255,255,0.1)' ourAttribute='" + itmsrno.replace('Item', '').trim() + "' myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' ><table id='" + itmsrno.replace('Item', '').trim() + "'><tbody>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='box-shadow: 0 1px 3px #B2B2B2;' height='30px' myAttribute='" + itmsrno.replace('Item', '').trim() + "'  id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' style='font-weight: bold;   text-transform: uppercase;'>" + itmsrno + "</td></tr>";
                                            tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td></td><td ><table><thead style='box-shadow: 0 1px 2px #000000;'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap;color:#febc3c' colspan='2'  height='30px' width='10%' >" + topping_name + "</th></tr></thead>";
                                            $.each(text.values, function(i, text) {
                                                tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'> " + text + "</td></tr>";
                                            });
                                            tophtml += "</table></td></tr><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td></td>";
                                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "</tbody></table></td></tr>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        }
                                    });

                                    $.each(crustings_quantitywise, function(i, text) {
                                        var itmsrno = i.replace("Qty", "  Item ");
                                        if (qutys.indexOf(itmsrno.trim()) < 0) {
                                            qutys.push(itmsrno);
                                            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr  style='width:100%;float:left;border-bottom:1px solid rgba(255,255,255,0.1)' ourAttribute='" + itmsrno.replace('Item', '').trim() + "' myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td colspan='3' ><table id='" + itmsrno.replace('Item', '').trim() + "'><tbody>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "<tr style='box-shadow: 0 1px 3px #B2B2B2;' height='30px'  myAttribute='" + itmsrno.replace('Item', '').trim() + "'  id='" + itmsrno.replace('Item', '').trim() + "'><td colspan='3' style='font-weight: bold;   text-transform: uppercase;'>" + itmsrno + "</td></tr>";
                                            tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "' ><td></td><td ><table><thead style='box-shadow: 0 1px 2px #000000;'><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><th style='text-align:left;white-space:nowrap;color:#febc3c' colspan='2'  height='30px' width='10%' >" + crust_name + "</th></tr></thead><tbody>";
                                            $.each(text.values, function(i, text) {
                                                tophtml += "<tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td style='text-align:left;white-space:nowrap'> " + text + "</td></tr>";
                                            });
                                            tophtml += "</tbody></table></td></tr><tr myAttribute='" + itmsrno.replace('Item', '').trim() + "' id='" + itmsrno.replace('Item', '').trim() + "'><td></td>";
                                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            tophtml += "</tbody></table></td></tr>";
                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                        }


                                    });
                                    tophtml += "</tbody></table></td></tr></tbody></table>";
                                    uitaghtml += tophtml;

                                    qutys = qutys.map(Function.prototype.call, String.prototype.trim)

                                   
                                   

                                    /*  var crusthtml = "<td valign='top' width='48%'>";

                                      crusthtml += '<table ><thead style="box-shadow: 0 1px 10px #000000;text-align:center" >';
                                      crusthtml += '<tr ><th   style="text-align:center"  width="10%" height="30px" bgcolor="#A39A87" colspan="2" align="left" >Crusts</th></tr></thead>';
                                      //uitaghtml+='<tr><th width="10%" >Crusts</th></tr>';
                                      var cruhtml = "<tbody>";
                                      $.each(crustings_quantitywise, function(i, text) {
                                          cruhtml += "<tr ><td>" + i.replace("Qty", "  Item "); + "</td><td></td></tr>";
                                          cruhtml += "<tr><td></td><td><table>";
                                          $.each(text.values, function(i, text) {
                                              cruhtml += "<tr><td>" + text + "</td></tr>";
                                          });


                                          cruhtml += "</table></td>";

                                      });
                                      cruhtml += "</tbody></table></td></tr></table>";
                                      crusthtml += cruhtml;*/




                                    /*if(toppings.length >= 1 )
									{
                                    $.each(toppings, function(i, text) {
                                        uitaghtml += "<li>" + text + "</li>";
                                    });
									}*/
                                    //uitaghtml += "</ul>";

                                    //uitaghtml+="</div>";

                                    /* var crusthtml  = "<div class='col-lg-5'>";
								  crusthtml += "<h6 style='display:block'>Crusts</h6>";
								  $.each(crustings_quantitywise, function(i, text) {
									    crusthtml += "<b>"+i+"</b><ul>";
										
										  $.each(text.values, function(i, text) {
											crusthtml += "<li>" + text + "</li>";
											});
										
                                     });*/

                                    /*if(crusts.length>=1)
									{
									 crusthtml += "<h6 style='display:block'>Crusts</h6><ul>";
									  $.each(crusts, function(i, text) {
                                        crusthtml += "<li>" + text + "</li>";
                                       });
									
									}*/
                                    /* crusthtml+= "</ul>";
									
									
									
									crusthtml+="</div>";*/
									///////////////discount style added to priDisRow//////////////////////////////////////////////////
									 ///////////////////////////////////////////////////////////
									

                                    strikeprice_cutoff = strikeprice_cutoff > 0 ? strikeprice_cutoff : "";
                                    var display = strikeprice_cutoff == "" ? "none" : "block";
                                    priceDetails = "" +
                                        "<div class='priDis_new_Wrap'>" +
                                        "<div class='priDisRow' style='" + discount_div_style + "'>" +
                                        "<p style='" + discount_div_style + "margin:10px 10px 0 0;' class='discount-div'>" + discount_div.replace("Rs", "<span class='WebRupee'>"+Rupee+"</span>") + "</p>" +
                                        "<p style='display:" + display + "; margin:10px 10px 0 0;' class='pull-right total-rs text-strikethrough'><span class='WebRupee'>"+Rupee+"</span>" + strikeprice_cutoff + "</p>" +



                                        "</div>" +
                                        "<div class='priDisRow' style='float:left; width:100%'>" +


                                        "<p style='margin:10px 10px 0 0;' class='pull-right total-rs total_204 '><span class='WebRupee'>"+Rupee+"</span>" + price_without_additions + "</p>" +
                                        //"<p style='display:"+display+"; margin:10px 10px 0 0;' class='pull-right total-rs text-strikethrough'><span class='WebRupee'>"+Rupee+"</span>" + strikeprice_cutoff  + "</p>" +
                                        "</div><div><p style='display:" + adntsclassstyle + "; margin:10px 10px 0 0;' class='pull-right'>Additions <span class='WebRupee'>"+Rupee+"</span>" + additions + "</p></div></div>";
									
									
                                    
                                    toppingshtml += '<div id="' + j + '" theriAttribute="' + j + '" class="order-listdetails-wrap">'
                                    toppingshtml += '<div class="orderTitle"><div class="' + vegornonvegclass + '"><span style="padding-left:20px;white-space: nowrap;">' + name + '</span></div> </div>';
                                    toppingshtml += '<div class="orderCont">';
                                    //toppingshtml += '<div class="img"><img src="' + image + '"/></div> ';
                                    toppingshtml += '<div class="os-new-qty"><p>Qty: <span>' + quantity + '</span></p></div>';
                                    toppingshtml += '<div class="orderPrice">';
                                    toppingshtml += '' + priceDetails + uitaghtml + /*crusthtml +*/ '</ul>';
                                    toppingshtml += '</div></div> </div>';
                                    // }
                                } else {
								
								   
                                     ////////////////////////////////////////discount style added to priDisRow////////////////////////////////////////////////
									 ////////////////////////////////////////////////////////

                                    strikeprice_cutoff = strikeprice_cutoff > 0 ? strikeprice_cutoff : "";
                                    var display = strikeprice_cutoff == "" ? "none" : "block";
                                    priceDetails = "" +
                                        "<div class='priDis_new_Wrap'>" +
                                        "<div class='priDisRow' style='" + discount_div_style + "'>" +
                                        "<p style='" + discount_div_style + "margin:10px 10px 0 0;' class='discount-div'>" + discount_div.replace("Rs", "<span class='WebRupee'>"+Rupee+"</span>") + "</p>" +
                                        "<p style='display:" + display + "; margin:10px 10px 0 0;' class='pull-right total-rs text-strikethrough'><span class='WebRupee'>"+Rupee+"</span>" + strikeprice_cutoff + "</p>" +



                                        "</div>" +
                                        "<div class='priDisRow' style='float:left; width:100%'>" +

                                        "<p style='margin:10px 10px 0 0;' class='pull-right total-rs total_204 '><span class='WebRupee'>"+Rupee+"</span>" + price_without_additions + "</p>" +
                                        // "<p style='display:"+display+"; margin:10px 10px 0 0;' class='pull-right total-rs text-strikethrough'><span class='WebRupee'>"+Rupee+"</span>" + strikeprice_cutoff + "</p>" +
                                        "</div><div><p style='display:" + adntsclassstyle + "; margin:10px 10px 0 0;' class='pull-right'>Additions <span class='WebRupee'>"+Rupee+"</span>" + additions + "</p></div></div>";
                                    toppingshtml += '<div id="' + j + '" theriAttribute="' + j + '" class="order-listdetails-wrap">'
                                    toppingshtml += '<div class="orderTitle"><div class="' + vegornonvegclass + '"><span style="padding-left:20px;white-space: nowrap;">' + name + '</span></div></div>';
                                    toppingshtml += '<div class="orderCont">';
                                    //toppingshtml += '<div class="img"><img src="' + image + '"/></div> ';
                                    toppingshtml += '<div class="os-new-qty"><p>Qty: <span>' + quantity + '</span></p></div>';
                                    toppingshtml += '<div class="orderPrice">';
                                    toppingshtml += '' + priceDetails + '</ul>';
                                    toppingshtml += '</div></div> </div>';
                                } // don't ha toppings or crusts




                            }
                            //toppingshtml+='</div></div>';




                        }




                        toppingshtml += '</div>';
                        if (comments.trim() != "NA") {
                            toppingshtml += '<table class="totalWrap newOrderDetailsTable" align="left" border="0" cellpadding="0" cellspacing="0" width="50%"><tbody><tr><td width="100%" colspan="2" valign="middle" align="left"><b>Comment : </b> ' + comments + '</td></tr></tbody></table>';
                        }
                        toppingshtml += '<table class="totalWrap newOrderDetailsTable" width="50%" border="0" align="right" cellspacing="0" cellpadding="0">';
                        toppingshtml += '<tr>';

                        for (var h = 0; h < orderOfdisplay.length; h++) {
								if(taxDetailsData[orderOfdisplay[h]])
								{
                                    //praveen
                                    if(orderOfdisplay[h]=='Discount' && localStorage.getItem('locationbasednamevendor')!='India')
                                   {
                                      
                                   }
                                   else
                                    {
                                    if ((taxDetailsData[orderOfdisplay[h]] != '0.0') && (taxDetailsData[orderOfdisplay[h]] != '0')) {
                                        toppingshtml += '<tr>';
                                        toppingshtml += '<td width="50%" valign="middle" align="right">'+orderOfdisplay[h]+'</td>';
                                        toppingshtml += '<td width="50%" valign="middle" align="right"><span class="WebRupee">'+Rupee+'</span>  ' + parseFloat(taxDetailsData[orderOfdisplay[h]]).toFixed(2) + '</td></tr>';
                                    }
                                }
									delete taxDetailsData[orderOfdisplay[h]];
								}
						   }

						   toppingshtml += '<td valign="middle" align="right">Sub Total</td>';
                        toppingshtml += '<td valign="middle" align="right"> <span class="WebRupee">'+Rupee+'</span>  ' + parseFloat(subtotal).toFixed(2) + '</td></tr>';
                        toppingshtml += '</table>';
                        $(".order-listdetails-wrap").html(toppingshtml);


                        var vorderlist = $(".order-listdetails-wrap");

                        var vorders = vorderlist.find('div[theriAttribute]').get();
                        $.each(vorders, function(ordindx, orders) {


                            $('div#' + orders.id + ' table').each(function() {


                                if (this.id != "") {
                                    if ((this.id).indexOf("toppingstable") >= 0) {




                                        var table = $('#' + this.id);

                                        var rows = table.find('tr').get();
                                        rows.sort(function(a, b) {
                                            var keyA = parseInt($(a).attr('myAttribute'));
                                            var keyB = parseInt($(b).attr('myAttribute'));
                                            if (keyA > keyB) return 1;
                                            if (keyA < keyB) return -1;
                                            return 0;
                                        });

                                        $.each(rows, function(index, row) {
                                            //if($("#"+row.id)[0].attributes[2]!="ourAttribute")
                                            {
                                                //$("table#"+row.id).children('tbody').append(row);
                                            }
                                        });

                                        var table = $('#' + this.id);
                                        var rows = table.find('tr[ourAttribute]').get();
                                        rows.sort(function(a, b) {
                                            var keyA = parseInt($(a).attr('ourAttribute'));
                                            var keyB = parseInt($(b).attr('ourAttribute'));
                                            if (keyA > keyB) return 1;
                                            if (keyA < keyB) return -1;
                                            return 0;
                                        });
                                        $.each(rows, function(index, row) {
                                            table.children('tbody').append(row);
                                        });



                                    }
                                }
                            });


                        });

                        //PRASHANTH
                        if (ordrstatus == "Viewed") {
                            $("#acept").show();
                            $("#rej").show();
                            $("#acept").text("Accept");
                            $("#rej").text("Reject");
                        }
                        if (ordrstatus == "New") {
                            $("#acept").text("Accept");
                            $("#rej").text("Reject");
                            $("#acept").show();
                            $("#rej").show();
                        }
                        if (ordrstatus == "Accepted") {
                            $("#acept").show();
                            $("#rej").show();
                            $("#acept").text("Ready");
                            $("#rej").text("Cancel Order");

                            if (vendortypeloggedin == 3) {
                                $("#acept").show();
                                $("#rej").hide();

                            }


                        }
						if (vendortypeloggedin == 1) 
						{
                                $("#acept").hide();
                                $("#rej").hide();

                        }
                        if (ordrstatus == "Ready") {
                            $("#acept").show();
                            $("#rej").show();
                            $("#acept").text("Picked Up");
                            $("#rej").text("Cancel Order");



                            if (vendortypeloggedin == 1) {
                                $("#acept").show();
                                $("#rej").hide();

                            }

                            if (vendortypeloggedin == 3) {
                                //$("#acept").hide();
                                $("#rej").hide();

                            }

                        }
                        if (ordrstatus == "Picked Up") {
                            $("#acept").show();
                            $("#rej").show();
                            $("#acept").text("Deliver");
                            $("#rej").text("Cancel Order");

                            if (vendortypeloggedin == 3) {
                                $("#acept").show();
                                $("#rej").hide();

                            }

                            if (vendortypeloggedin == 1) {
                                $("#acept").show();
                                $("#rej").hide();

                            }


                        }
                        if (ordrstatus == "Delivered") {
                            $("#acept").show();
                            $("#rej").show();
                            $("#acept").text("Closed");
                            $("#rej").text("Cancel Order");

                            if (vendortypeloggedin == 1) {
                                $("#acept").hide();
                                $("#rej").hide();

                            }


                            if (vendortypeloggedin == 3) {
                                $("#acept").hide();
                                $("#rej").hide();

                            }

                        }
                        if (ordrstatus == "Closed") {

                            $("#acept").hide();
                            $("#rej").hide();
                        }
                        if (ordrstatus == "Cancelled") {

                            $("#acept").hide();
                            $("#rej").hide();
                        }
                        if (ordrstatus == "Rejected") {

                            $("#acept").hide();
                            $("#rej").hide();
                        }

                        /*if(vendortypeloggedin == 1)
					{
						$("#acept").hide();
                        $("#rej").hide();
					}*/


                    },
                     error: function(jqXHR, exception) 
					{
												if (jqXHR.status === 0) 
												{
																	
																	$("#errornet2").show();	
																	$("#loader").hide();
																	 	
																			
												} 
												else if (jqXHR.status == 404) 
												{
																	 $("#errornet2").show();
																		$("#loader").hide();
																		
																		
												} else if (jqXHR.status == 500) 
												{
																	$("#errornet2").show();
																	$("#loader").hide();
																	
																		
												} 
												else if (exception === 'parsererror') 
												{
																		$("#errornet2").show();
																		
																		$("#loader").hide();
																		
												} 
												else if (exception === 'timeout') 
												{
																		$("#errornet2").show();
																		$("#loader").hide();
																		
																		
												}
												else if (exception === 'abort') 
												{
																		$("#errornet2").show();
																		
																		$("#loader").hide();
																		
																		
																		
												} 
												else 
												{
																		$("#errornet2").show();
																		$("#loader").hide();
																		
												}
					} // success
            });


             ordersummary.done(function()
             {
               
             		
            });

            $(".order-listdetails-wrap").show();
            $(".homeContent").show();
            $(".TwoBtns-wrap").show();
            $("#orderActionDiv").show();
            $("#homeMenu").hide();




        }
			  
		
			    
		
		
       
    
		


    });
});
////////////////////////////////////////////Print summary page/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function PrintElem(passedorder_id) 
{
	$("#loader").show();
	ajaxcalltimer=setInterval(function(){  
	var conns=checkconnection1();
	
	
	if(conns)
  {
  
       $("#madhu").html("<h1 class='dtls_order_h1'>Order Details</h1>");

 //  var redirectedfrom = 'vendorscreen';


   //	window.location.replace(  "print_summery.html?sName=" + theaterName + '&redirectedfrom=' + redirectedfrom + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name+ '&UUID=' + UUID + '&mobile_number=' + mobile_number + '&passedorder_id=' + passedorder_id)


   $.ajax(
    {
        type: 'GET',
        url: url + '/oms1/printSumaryOrderDetails?passedorder_id=' + passedorder_id,
        dataType: 'jsonp',
        jsonpCallback: 'jsonCallback',
        cache: false,
        jsonp: false,
		timeout:10000,
		async: true,
        beforeSend: function()
        {
            $("#loader").show();
        },
        complete: function()
        {
            $("#loader").hide();
        },
        success: function(response)
        {

            if (response.orderprintsummmary.length > 0)
            {
                var jsonresponse = response.orderprintsummmary[0];
                var vendorname = jsonresponse.vendorname;
                var orderedfrom = jsonresponse.orderedfrom;
                var total = jsonresponse.total;
				var counterid=jsonresponse.CounterId;
                var orderid = passedorder_id;
                var date_of_order = response.date_of_order;
                $('.rest_name').text(vendorname);
                $('#orderid').text(counterid);
                $('#dateoforder').text(date_of_order);
                // For Vendor Address 
                var address1 = response.address1;
                var address2 = response.address2;
                var landmark = response.landmark;
                var area = response.area;
                var city = response.city;
                var locality = response.locality;
                var state = response.state;
                var contact_phone_no = response.contact_phone_no;
                var vendoraddresshtml = address1 + ' , ' + address2 + ' , ' + landmark + ' , ' + area + ' , ' + locality + ' , ' + city + ',' + state + '.' + '<br> Phone: ' + contact_phone_no;
                $(".rest_adres").html(vendoraddresshtml);
                if (orderedfrom === 'Home') // Home Delivery
                {
                    var cust_phone = jsonresponse.cust_address.phone_number;
                    var cust_area = jsonresponse.cust_address.area;
                    var cust_building_no = jsonresponse.cust_address.landmark;
                    var cust_street_name = jsonresponse.cust_address.address1;
                    var cust_name = jsonresponse.cust_address.name;
                    var cust_state = jsonresponse.cust_address.state;
                    var cust_locality = jsonresponse.cust_address.locality;
                    var cust_city = jsonresponse.cust_address.city;
                    cust_name = capitalizeFirstLetter(cust_name);
                    if (cust_street_name == '')
                    {
                        cust_street_name = 'N/A';
                    }
                    if (cust_building_no == '')
                    {
                        cust_building_no = 'N/A';
                    }
                    var custaddresshtml = '<p class="pclass">' + cust_name + ', +91-' + cust_phone + '</p>\
                             <p class="pclass">'+ cust_street_name+'<br></p>\
                              <p class="pclass">'+cust_building_no+'<br>\
                            '+cust_locality+','+cust_area+'<br>\
                            ' + cust_city+','+cust_state + '<br>\
                            </p>';
                    $(".custmerAdres").html(custaddresshtml);
                }
                else if (orderedfrom === 'QRScan') // QRScan 
                {
                    var table_numb = jsonresponse.tablenum;
                    var qrscanorderhtml = '<span class="rd">' + table_numb + '</span>';
                    $(".custmerAdres").html(qrscanorderhtml);
                }
                else if (orderedfrom === 'TakeOrder') // TakeOrder
                {
                    var rownum = response.rownum;
                    var seat_number = response.seat_number;
                    var businessorderhtml = '<span class="rd">(Business Order)</span>';
                    businessorderhtml+='</br>'+rownum+'</br>'+seat_number;
                    //businessorderhtml+=' <p>Seat Number : '+seat_number+'<br>';
                    $(".custmerAdres").html(businessorderhtml);
                }

                    // Creating Order Details Table 
                    var orderdetailshtml = '';
                    var total_quantity = 0;
                    for(var i=0;i<response.orderprintsummmary.length;i++)
                    {   
                        var actual_price = response.orderprintsummmary[i].strikeprice_cutoff;
                        var discount_div = response.orderprintsummmary[i].discount_div;

                           var topping_name = response.orderprintsummmary[i].topping_name;
                           
                          var crusting_name = response.orderprintsummmary[i].crusting_name;
                          var dynamic_topp_crust = '';
                           var additionstyle = 'none';
                           var additions = response.orderprintsummmary[i].additions;


                                        if (additions <= 0) {
                       additionstyle = 'none';
                    } else {
                        additionstyle = 'block'


                          if(topping_name!=='')
                          {
                       dynamic_topp_crust = topping_name + ' ';
                          }

                            if(crusting_name!=='')
                          {
                          dynamic_topp_crust+=  '&' + crusting_name ;
                        //  dynamic_topp_crust.concat(crusting_name)
                          }
                    }



                        var percentappend = '';
                        var rupeeappend = '';

                          if(discount_div.indexOf("percent") > -1) {
                            percentappend = "%"
                            }

                            else if(discount_div.indexOf("Rs") > -1) {
                             rupeeappend = '<span class="WebRupee">'+Rupee+'</span>';
                            }


                        var discount_val =  parseFloat(discount_div).toFixed(2);
                        var item_price = parseFloat(actual_price).toFixed(2);

                            if(discount_val<=0)
                        {
                            discount_val = ' ';
                        }

                        if(item_price>0)
                        {
                            item_price = item_price;
                        }
                        else
                        {
                            item_price = response.orderprintsummmary[i].price;
                        }

                           var empty = '';

                            var count = i+1;
                             var quan = response.orderprintsummmary[i].quantity;
                            total_quantity += parseInt(quan);
                             orderdetailshtml +=  '<tr>\
                                                <td id="count" style="text-align: left;" >'+count+'</td>\
                                                <td id="descript" style="text-align: left;" >'+response.orderprintsummmary[i].name+'</td>\
                                                <td id="itemprice" style="text-align: left;">'+item_price+'</td>\
                                                <td id="qaty" style="text-align: left;" >'+response.orderprintsummmary[i].quantity+'</td>\
                                                <td id="percetage" style="text-align: left;">' +rupeeappend+' '+discount_val+ ' ' +percentappend+'</td>\
                                                <td align="right"   style="text-align: right;" id="pricess">'+response.orderprintsummmary[i].price+'</td>\
                                              </tr>';

                                               
								 if(additionstyle=='block')
                                            {
                                              orderdetailshtml +=  '<tr>\
                                                <td id="count" style="text-align: left;">'+empty+'</td>\
                                                <td id="descript" style="text-align: left;">'+dynamic_topp_crust+'</td>\
                                                <td id="itemprice" style="text-align: left;">'+empty+'</td>\
                                                <td id="qaty" style="text-align: left;">'+empty+'</td>\
                                                <td id="percetage" style="text-align: left;">'+empty+'</td>\
                                                <td align="right" style="text-align: right;"  id="pricess">'+additions+'</td>\
                                              </tr>';
	                                              } 


                    }   

                    $("#orderstable tbody").html(orderdetailshtml);

                    // For displaying Taxes table

                    var orderOfdisplay = jsonresponse.taxorderinformation;

                    var orderdisplayhtml = '';
                    for (var h = 0; h < orderOfdisplay.length; h++) {
                        var tax_name = orderOfdisplay[h];
                        var tax_value = jsonresponse.taxdetails[tax_name];
                      
                       
                        if (tax_value && tax_value != 0) {

                             tax_value = parseFloat(tax_value).toFixed(2);

                            tax_name = capitalizeFirstLetter(tax_name);

                             if(tax_name==='Service Charge')
                             {
                                orderdisplayhtml += '<li>'+tax_name+' (%) '+'<span class="rt">'+tax_value+'</span></li>';
                             }
                             else
                             {
                                if(localStorage.getItem('locationbasednamevendor')!='India' && tax_name=='Discount'){
                                    
                                }
                                else
                                {
                               orderdisplayhtml += '<li>'+tax_name+'<span class="rt">'+tax_value+'</span></li>';   
                            }
                             
                               // alert(tax_name+"Discount")
                              // orderdisplayhtml += '<li>'+tax_name+'<span class="rt">'+tax_value+'</span></li>';   
                            
                               // orderdisplayhtml += '<li>'+tax_name+'<span class="rt">'+tax_value+'</span></li>';   
                             }
                           
                            
                        }
                    }

                    var totalceilvalue = Math.ceil(total);

                    var forwords = totalceilvalue;

                    var totaldifference = totalceilvalue-total

                    totaldifference = totaldifference.toFixed(2);

                    total = parseFloat(total).toFixed(2);

                    totalceilvalue = parseFloat(totalceilvalue).toFixed(2);

                    orderdisplayhtml += '<hr>\
                        <li>Total <span class="rt">'+total+'</span></li>\
                        <li>Round off <span class="rt">'+totaldifference+'</span></li>\
                        <hr>\
                        <li><b>Total Qty: '+total_quantity+',   Round off Total</b> <span class="rt">'+totalceilvalue+'</span></li>';

                    $(".dtls_order_total").html(orderdisplayhtml);

                    

                    var roundofvalueinwords = toWords(forwords);


                $("#amountInWords").html(roundofvalueinwords+ 'Only');
                
                
                // For Tin
                if(response.tin_number==='' || response.tin_number==='0')
                {
                    $("#tinumli").hide();
                }
                else
                {
                    $("#tinnum").text(response.tin_number); 
            
                    $("#tinumli").show();
                }

                

                if(response.st_number==='' || response.st_number==='0')
                {
                    $("#stnumli").hide();
                }
                else
                {
                    $("#stnum").text(response.st_number);   
            
                    $("#stnumli").show();
                }
               
               
                if(response.vat_number==='' || response.vat_number==='0' )
                {
               
                    $("#vatnumli").hide();
                }
                else
                {

                    $("#vatnum").text(response.vat_number); 
            
                    $("#vatnumli").show();
                }               

                
            



            }
        },
        error: function(jqXHR, exception) 
		{
										if (jqXHR.status === 0) 
										{
															
															$("#errornet2").show();		
															$("#loader").hide();		
										} 
										else if (jqXHR.status == 404) 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
																$("#errornet2").show();
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																	$("#errornet2").show();
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																$("#errornet2").show();
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																	$("#errornet2").show();
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																	$("#errornet2").show();
																$("#loader").hide();
										}
		}
    }).done(function() 
	{
                    
                    
		$(".printpage_body").show();                 
		$(".homeContent").hide();

        
                    
    });
  
  }else
  {
    $("#errornet1").show();
 	 $("#loader").hide();
  }
	
	
	
	
	
	
	
	
	
	
	
	
	 }, 1000);


  



   
   
}



function Popup(data) 
{
	alert('POPUP WINDOW CALLED');
    var mywindow = window.open('', 'Oredr My Snack', 'height=400,width=600');
    mywindow.document.write('<html><head><title>my div</title>');
    /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    mywindow.document.write('<link href="css/bootstrap.css" rel="stylesheet" media="screen">');
    mywindow.document.write('<link href="css/styles.css" rel="stylesheet" media="screen">')
    mywindow.document.write('<link href="css/theme.css" rel="stylesheet" media="screen">')
    mywindow.document.write('<link href="css/fontello.css" rel="stylesheet" media="screen">');
    mywindow.document.write('<link href="css/bootstrap.css" rel="stylesheet" media="print">');
    mywindow.document.write('<link href="css/styles.css" rel="stylesheet" media="print">')
    mywindow.document.write('<link href="css/theme.css" rel="stylesheet" media="print">')
    mywindow.document.write('<link href="css/fontello.css" rel="stylesheet" media="print">');
    mywindow.document.write('<link rel="stylesheet" href="css/swiper.css">');
    mywindow.document.write('<link rel="stylesheet" type="text/css" href="css/jquery-ui.css"></head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10

    mywindow.print();
    mywindow.close();

    return true;
}

$(document).on("click", "#mymenu", function() 
{ 
   
    $(".contentWrap").hide();
	$("#VendorOrder").show();
	$("#homeMenu").show();
	
	
  
   if(homecontext=="")
   {
		  
		    
		   
    		
			 timer=setTimeout(function()
			 { 
			  
			    var conn=checkconnection();
			    if(conn)
			    {
			      mymenu();
			     	
			    }
			    else
			    {
			       $("#errornet1").show();
			       $("#loader").hide();
			    }
			 }, 1000);

			
		
			 
   
	
	}
	

    //"sName=" + theaterName + '&vendor_id=' + VID + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID; 
    //window.location.replace(  "MyMenu.html? UUID=" + UUID + '&location_id=' + location_id + '&vendor_type_id=' + vendortypeloggedin + '&redirectedfrom=' + redirectedfrom + '&screen_id=' + screen_ids + '&session_id=' + session_id + '&vendor_id=' + VID + '&nameArray=' + nameArray + '&vendor_session_id=' + vendor_session_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&vendor_users_id=' + vendorUserId + '&UUID=' + UUID + "&sName=" + theaterName + "&customer_id=" + "" + "&seatnum=" + seat_num + "&row=" + row);

});

//////////////////////////////////Mymenu page////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function mymenu()
{
   			clearTimeout(timer);
  			$("#loader").show();
     		var UUID = deviceUUID;
		    var session_id = session_id;
		    var redirectedfrom = 'vendorscreen';
		    screen_ids = $("#SCname").val();
		    var row = $("#row").val();
		    var seat_num = $("#seat").val();
		    urlforvendor = window.location.href;
		
		    urlforvendor = decodeURIComponent(urlforvendor);
		    var url_params = urlforvendor.split('?');
		    try 
			{
						  document.addEventListener("deviceready", cordovaready, false);
						   if(networkState=="none"||networkState=="unknown")
						   {
							
							  
							  location.reload();
						   
						   }else
						   {
							   
							   window.location.replace(  "MyMenu.html?" + url_params[1]); 
						   }
				   
			}
			catch(e) 
			{
					console.log('An error has occurred: '+e.message);
			}
			
		 

}
/////////////////////////////////Item available page///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

$(document).on("click", "#itemavailabile", function() 
{ 

	$(".contentWrap").hide();
	$("#VendorOrder").show();
	$("#homeMenu").show();
  
   if(homecontext=="")
   {
		  
		    
		   
    		
			 itemtimer=setTimeout(function()
			 { 
			    
			    var conn=checkconnection();
			    if(conn)
			    {
			      itemavailable();
			     	
			    }
			    else
			    {
			       $("#errornet1").show();
			       $("#loader").hide();
			    }
			    
			 }, 1000);

			
		
			 
   
	
	}
	
 
	



    

});

function itemavailable()
{

			clearTimeout(itemtimer);
		  	$("#loader").show();
			var UUID = deviceUUID;
		    var session_id = session_id;
		    var redirectedfrom = 'vendorscreen';
		    screen_ids = $("#SCname").val();
		    var row = $("#row").val();
		    var seat_num = $("#seat").val();
		    urlforvendor = window.location.href;
		
		    urlforvendor = decodeURIComponent(urlforvendor);
		    var url_params = urlforvendor.split('?')
     	    try 
			{
						  document.addEventListener("deviceready", cordovaready, false);
						   if(networkState=="none"||networkState=="unknown")
						   {
							
							  
							  location.reload();
						   
						   }else
						   {
							   
							   window.location.replace(  "item_availability.html?" + url_params[1]); 
						   }
				   
			}
			catch(e) 
			{
					console.log('An error has occurred: '+e.message);
			}
	  
	  
		   
}

///////////////////////////////////////dom loading//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() 
{

 
    var isLogut = getParameterByName('Logout');
    $("#homeicon").show();
    $("#logout").show();
    if (isLogut) 
	{
        if (isLogut.trim() == "true") 
		{
            $("#homeicon").hide();
            $("#logout").hide();
        }
    }

    var redirectedfrom = getParameterByName('redirectedfrom');
    fromcustomerscreen = getParameterByName('fromcustomerscreen');
    vendortypeloggedin = getParameterByName('vendortypeloggedin');

    if (!vendortypeloggedin) 
	{
        vendortypeloggedin = getParameterByName('vendor_type_id');
    }
    // vendor_id=  getParameterByName('vendor_id');
    //VID=getParameterByName('vendor_id');
    if (vendortypeloggedin.trim() == "") 
	{

        vendortypeloggedin = getParameterByName('vendor_type_id');
    }
    location_id = getParameterByName('location_id');



    VID = getParameterByName('VID');
    if (!VID) 
	{

        VID = getParameterByName('vendor_id');
    }
    nameArray = getParameterByName('nameArray');
    vendor_session_id = getParameterByName('vendor_session_id');
    vendor_name = getParameterByName('vendor_name');
    vendor_user_name = getParameterByName('vendor_user_name');
    UUID = getParameterByName('UUID');
    deviceUUID = getParameterByName('UUID');
    theaterName = getParameterByName('sName');
    deviceID = getParameterByName('UUID');
    if (deviceUUID === 'undefined' || deviceUUID == '') 
	{
        deviceUUID = deviceID;
    }

    $(".vendorname").html(vendor_name);
    $(".locationname").html(theaterName);
    $(".vendorusername").html(vendor_user_name);
    //$('#homeicon').show();
    //$(".tpBN-rt").show();

    vendorUserId = getParameterByName('vendorUserId');

    if (!vendorUserId) 
	{

        vendorUserId = getParameterByName('vendor_users_id');

    }


    if (fromcustomerscreen == 'fromcustomerscreen' || redirectedfrom == "vendoradmin" || redirectedfrom == "vendorscreen") 
	{
        var redirectedfrom = 'vendorscreen';

        $('#timedatewrap').show();
        $("#logindiv").hide();


        if (vendortypeloggedin == 1 && loginuser== 'serviceagent') 
		{
            $("#VendorOrder").show();
            $("#logout").show();
            $(".tpBN-rt").show();
            $("#homeicon").show();

            $("#TakeOrder").show();
            $("#mymenu").hide();
            $("#New").show();
            $("#NewandViewed").hide();
            $("#Accepted").hide();
            $("#Ready").show();
            $("#PickedUp").show();
            $("#Delivered").show();
            $("#Closed").hide();
            $("#Cancelled").hide();
            $("#Rejected").hide();
			$("#itemavailabile").hide();


        }
        else if (vendortypeloggedin == 2 && loginuser== 'operator') 
		{
            $("#VendorOrder").show();
            $("#logout").show();
            $(".tpBN-rt").show();
            $("#homeicon").show();
			$("#itemavailabile").show();

            $("#TakeOrder").show();
            $("#mymenu").show();
            //$("#VendorOrder").show();
            $("#New").show();
            $("#NewandViewed").show();
            $("#Accepted").show();
            $("#Ready").show();
            $("#PickedUp").show();
            $("#Delivered").show();
            $("#Closed").show();
            $("#Cancelled").show();
            $("#Rejected").show();

        }

        else if (vendortypeloggedin == 3 && loginuser== 'cook') 
		{

            $("#VendorOrder").show();
            $("#logout").show();
            $(".tpBN-rt").show();
            $("#homeicon").show();

            $("#TakeOrder").show();
            $("#mymenu").hide();
            $("#New").show();
            $("#NewandViewed").show();
            $("#Accepted").show();
            $("#Ready").show();
            $("#PickedUp").show();
            $("#Delivered").show();
            $("#Closed").hide();
            $("#Cancelled").hide();
            $("#Rejected").hide();
			$("#itemavailabile").hide();
        }
        else
        {
            window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	 		 return false;
        
        }





    }



    $("#cancel").click(function() 
	{

        $('.headerWrap').hide();
        $(".headerWrap").show();
        $('.timedateWrap').hide();
        $('#VendorOrder').show();
        $('#inhouse').hide();
        $('#orderdetail').hide();
        $('#orders').hide();
        $('.list').html('');
        $('.homeContent').hide();


    });

    
  
	 
	 ///////////////////////////on/off notification //////////////////////////
	 /////////////////////////////////////////////////////////////////////////
	   
	 $('#toggle').change(function() 
	 {
	   if($(this).prop('checked'))
	   {
	  
	      notification="ON";
          $.jStorage.set(key,notification);
		  madhucalled(vendor_id,vendortypeloggedin);
	   }
	   else
	   {
	   
		 notification="OFF";
         $.jStorage.set(key,notification);
		 madhucalled(vendor_id,vendortypeloggedin);
	   }
        
    }); 
		
    getStatusCount();
});

function capitalizeFirstLetter(string) 
{
    return string[0].toUpperCase() + string.slice(1);
}

		///////////////////////////////////Push notifications//////////////////
		//////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////
var notitime;
function madhucalled(vendor_id,vendortypeloggedin)
{
	                
	      		   
	                var notification = $.jStorage.get(key);
					clearTimeout(notitime);
			 		var notificationalert = "";		
					if(notification=="ON")
					{
					    
					   				$.ajax({
									type: 'GET',
								    url: url + '/oms1/notifications?Vendor_ID=' + vendor_id + '&Vendor_user_type_ID=' + vendortypeloggedin,
									jsonpCallback: 'jsonCallback',
									dataType: 'jsonp',
									jsonp: false,
									cache: false,
									timeout:10000,
									async: true,
									beforeSend: function() 
									{
							           
							        },
							        complete: function() 
							        {
							           
							            
							        },
									success: function(response) 
									{
								       
								       var res=JSON.stringify(response);
								  
								       
									  if(response.message=="No"||response.message==undefined)
									  {
									    
									     cordova.plugins.notification.local.cancel(1, function () 
									     {
											  
										 });
										
										 notitime = setTimeout(function () 
						                 {
										            							
																	                madhucalled(vendor_id,vendortypeloggedin);
										 }, 60000);
									  
									  }else
									  {
									     
									     for(var i=0;i<response.notificationstatus.length;i++)
						                  {
						                     
						                         
						                        if(i>0)
						                        {
	     												notificationalert += ','; 
	   											 }
	    										notificationalert +=response.notificationstatus[i].status+"="+response.notificationstatus[i].count;
						                          
						                   
						                 }	
						                  
											var sound = device.platform == 'Android' ? 'file://appbeep.wav' : 'file://appbeep.wav';
						                 	cordova.plugins.notification.local.schedule(
											 {
																	                      
																	                    id: 1,
																	                    title:'Lot Easy',
																	                    text: notificationalert,
																                        icon: 'file://icon.png',
																                        smallIcon: 'file://logo1.png',
																                        sound: sound
																                        
											},sucess,failed);
						                 
						                    notitime = setTimeout(function () 
						                    {
										            							
																	                madhucalled(vendor_id,vendortypeloggedin);
										    }, 60000);
									       
							              
							                 
							                 function sucess()
							                 {
							                   
							                 
							                 }
							                 function failed()
							                 {
							                 
							                 
							                 }
									  
									  }
					                 
		
				    	               
									
									
									
									},
									error: function(jqXHR, exception) 
									{
										if (jqXHR.status === 0) 
										{
															
															$("#loader").hide();	
										} 
										else if (jqXHR.status == 404) 
										{
															   //alert('Requested page not found. [404]');
																$("#loader").hide();
																
										} else if (jqXHR.status == 500) 
										{
																//alert('Internal Server Error [500].');
															$("#loader").hide();
																
										} 
										else if (exception === 'parsererror') 
										{
																//alert('Requested JSON parse failed.');
																
																$("#loader").hide();
										} 
										else if (exception === 'timeout') 
										{
																
																$("#loader").hide();
																
										}
										else if (exception === 'abort') 
										{
																//alert('Ajax request aborted.');
																
																$("#loader").hide();
																
																
										} 
										else 
										{
																//alert('Uncaught Error.\n' + jqXHR.responseText);
																$("#loader").hide();
										}
									}
									}).done(function() 
									{
                    
                    
										
       										 getStatusCount();
        
                    
									}); 
					
					}
					else
					{
					
						cordova.plugins.notification.local.cancel(1, function () 
						{
												  
						});
					   
					}			
						       
								
								  
	}						
////////////////////////////////pushnotificationcall/////////////////////////




/////////////////////////////Trim text///////////////////////////////
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function smartTrim(str, length, delim, appendix) 
{
	var reg = new RegExp(" ","g");
    var str2= str.replace(reg,"");
    if (str2.length <= length) return str2;

    var trimmedStr = str2.substr(0, length+delim.length);

    var lastDelimIndex = trimmedStr.lastIndexOf(delim);
    if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
}


///////////////////Network connection check////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function network()
{
     	 $("#errornet1").hide();
 		 $("#errornet2").hide();
 		 $("#errornet3").hide();
 		 $("#takeordererror").hide();
 		 $("#takeordererror1").hide();
   		 location.reload(); 
    

}
function network1()
{
     	 $("#errornet1").hide();
 		 $("#errornet2").hide();
 		 $("#errornet3").hide();
 		 $("#takeordererror").hide();
 		 $("#takeordererror1").hide();
   		
    

}

///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkconnection()
{

     try 
     {
		  clearTimeout(timer2);
		  clearTimeout(timer);
		  $("#loader").hide();
    	
   		 document.addEventListener("deviceready", cordovaready, false);
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		      
		      return false;
		   
		   }else
		   {
		       
		       location.reload(); 
		       return true;
		   }
		   
	  }
	  catch(e) 
	  {
	        console.log('An error has occurred: '+e.message);
	  }

}


///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkconnection1()
{

    try 
    {
		 clearInterval(ajaxcalltimer);
		  $("#loader").hide();
    	   document.addEventListener("deviceready", cordovaready, false);
   		 
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		      
		      return false;
		   
		   }else
		   {
		       
		      
		       return true;
		   }
	}
	catch(e) 
	{
	        console.log('An error has occurred: '+e.message);
	}

}
//////////////////////////while click on take order in main menu page checking device network connection is on/off//////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function takeorderconnection()
{
	try 
    {
		 clearTimeout(timers);
		 $("#loader").hide();
    	 
   		   document.addEventListener("deviceready", cordovaready, false);
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		      return false;	
		      
		   
		   }else
		   {
		       
		     
		      return true;
		   }
	}
	catch(e) 
	{
	        console.log('An error has occurred: '+e.message);
	}
}
//////////////////////////click on refresh button in take order network error page //////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

function takeorder()
{
       
		$("#loader").show();
 		
 		 $("#errornet1").hide();
 		 $("#errornet2").hide();
 		 $("#errornet3").hide();
 		 $("#takeordererror").hide();
 		 $("#takeordererror1").hide();
		
		 location.reload();
		

}
////////////////////////////////////Back button network connection check//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

function backbuttonconnection()
{
   try 
    {
		clearTimeout(backtimer);
		 
		$("#loader").show();
    	document.addEventListener("deviceready", cordovaready, false);
   		 
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		     return false;	
		    
		   
		   }else
		   {
		       
		     
		      return true;
		   }
	}
	catch(e) 
	{
	        console.log('An error has occurred: '+e.message);
	}

}

///////////////////////////////////////Display order details network connection /////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displaydetailconnection()
{
    try 
    {
		  clearTimeout(displaytimer);
		
    	 document.addEventListener("deviceready", cordovaready, false);
   		 
		    if(networkState=="none"||networkState=="unknown")
		   {
		    
		     
		      return false;
		   
		   }else
		   {
		       
		     
		      return true;
		   }
	}
	catch(e) 
	{
	        console.log('An error has occurred: '+e.message);
	}
}




