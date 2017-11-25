

////Date picker setup

$(document).ready(function () 
{

    		
			 $(".alert-error").fadeOut();
			$(".alert-success").fadeOut();
			
			$("#dtBox").DateTimePicker(
			{

			    dateFormat: "dd-MM-yyyy",
			    timeFormat: "hh:mm AA",
			    dateTimeFormat: "dd-MM-yyyy hh:mm:ss AA"

			});
			//SET DEFAULT TIME
			var deliveryFromdate="10:00 AM";
			var deliverytodate="10:00 PM";
			$("#nodeliveryFrom").val(deliveryFromdate);
			$("#nodeliveryTo").val(deliverytodate);
});
var pageType = "";
var vendorType = -1;
var currentdatetime = new Date();
var UUID = "";
var screenname = "";
var vendor_id = "";
var vendor_users_id = "";
var vendor_type_id = "";
var location_id = "";
var vendor_session_id = "";
var vendor_name = "";
var vendor_user_name = "";
var querystr = "";
var ismenu = false;
var nohomeDeliveryJSON = [{ session_id: "", UUID: "", vendor_id: "", Date: "", TimeFrom: "", TimeTo: "", BusinessStartTime: "", BusinessEndTime: ""}];
var HomeDeliveryJSON = [{ session_id: "", UUID: "", vendor_id: "", Address: "", PhoneNo: "", DeliveryTimeFrom: "", DeliveryTimeTo: "", NoDeliveryDates: [{ Date: "", TimeFrom: "", TimeTo: "", BusinessStartTime: "", BusinessEndTime: "" }, { Date: "", TimeFrom: "", TimeTo: "", BusinessStartTime: "", BusinessEndTime: ""}]}];
var dateloaded = false;
var deliveryryletype = 0;
var section = ""
var mobile_number="";
var timerforajax;
var keysToAllow=new Array();
keysToAllow.push(8);//back
keysToAllow.push(37);//left
keysToAllow.push(39);//right
keysToAllow.push(38);//top
keysToAllow.push(40);//down
keysToAllow.push(46);//delete
keysToAllow.push(35);//end
keysToAllow.push(36);//home


var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right

screenname = getParameterByName('sName');
vendor_id = getParameterByName('vendor_id');
vendor_users_id = getParameterByName('vendor_users_id');
vendor_type_id = getParameterByName('vendor_type_id');
location_id = getParameterByName('location_id');
vendor_session_id = getParameterByName('session_id');
vendor_name = getParameterByName('vendor_name');
vendor_user_name = getParameterByName('vendor_user_name');
UUID = getParameterByName('UUID');
section = getParameterByName('section');
mobile_number=getParameterByName('mobile_number');
querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ;  
var networkState;
var resss;
function backButtonCallback()
{
				                $("#loader").show();
				                resss=setInterval(function(){   madhuSS();}, 1000);
}
function madhuSS()
{
								
								clearInterval(resss);
				   				if (ismenu) 
						   		{
						            window.location.replace( "vendor-admin-index.html" + querystr);
						        }
						        else 
						        {
						            $("#loader").hide();
						            ismenu = true;
						            $("#Back").hide();
									$("#homeiconback").hide();
						            pageType = "homeicon";
						            $(".alert-success").fadeOut();
						            $(".alert-error").fadeOut();
						            $("#homedeliverymenu").show();
						            $("#homedeliverysetup").hide();
						            $("#approvecustomers").hide();
						            $("#addareastoservice").hide();
						            $("#deactivatecustomer").hide();
						            $("#homedeliveryrules").hide();
						        }
				
}	
function onDeviceReady() 
{
			
            document.addEventListener('backbutton', backButtonCallback, false);
}	

$(function () 
{
	var loginuser = localStorage.getItem('login');
   $("#loader").hide();
   //mobile support or not
    if(loginuser=="vadmin")
   {
			document.addEventListener("deviceready", onDeviceReady, false);
			
		   
		    //Remove
		    //UUID="3333";
		    //vendor_id="500001302090";
		    //$("#datetime")[0].innerHTML=currentdatetime;
		    $("#vendorname")[0].innerHTML = vendor_name;
		    $("#locationname")[0].innerHTML = screenname;
		    $("#vendorusername")[0].innerHTML = vendor_user_name;
		    InitializeMenu();
		    if (pageType != "") {
		        $("#" + pageType).trigger("click");
		    }
			
			//Myhome Delivery home page functionality added
			
			$("#availableitems").click(function ()
			{
		                window.location.replace(  "availableitems.html" + querystr);
		    });
		    $("#addNodeliverydate").click(function () 
		    {
		        addNohomeDelivery();
		    });
		
		    $("#prevcustrec").click(function () 
		    {
		        PrevRecord();
		    });
		
		    $("#nxtcustrec").click(function () 
		    {
		        NextRecord();
		    });
		
		
		    $("#saveHomedeliverySetup").click(function () 
		    {
		    								$("#loader").show();
											timerforajax=setInterval(function()
										     { 
										           	    SaveHomeDelivery();
										           	     
										     }, 1000);
		        
		    });
		
		    $("#savedeliveryrule").click(function () 
		    {
		        SaveHomeDeliveryRule();
		    });
		
		
		    if (section == "setup") 
		    {
		        $("#hmedelsetupmnu").trigger("click");
		    }
		
		
		
		
		    ////////////////////////////////////////////////////////////////////////////////////////////////
		    if (dateloaded == false) 
		    {
		        if ($(".nodeliverydate")[0].type != "date") 
		        {
		            var datecsslink = document.createElement("link");
		            datecsslink.setAttribute("href", "css/jquery-ui.css");
		            datecsslink.setAttribute("rel", "stylesheet");
		            datecsslink.setAttribute("type", "text/css");
		            document.head.appendChild(datecsslink);
		            var datescript1 = document.createElement("script");
		            datescript1.setAttribute("src", "js/jquery.min.js");
		            datescript1.setAttribute("type", "text/javascript");
		            document.head.appendChild(datescript1);
		            var datescript2 = document.createElement("script");
		            datescript2.setAttribute("src", "js/jquery-ui.min.js");
		            datescript2.setAttribute("type", "text/javascript");
		            document.head.appendChild(datescript2);
		            /*jQuery(function ($) { //on document.ready
		            //$(".nodeliverydate").datepicker();
		            //$('#fromtime').timepicker();
		            //$('input[type=time]').timepicker({ 'step': 5 });
		            })*/
		        }
		        dateloaded = true;
		    }

 }else
 {
    	window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	    return false;
 
 }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
});

function InitializeMenu() {



    $(".alert-error").fadeOut(10);
    $(".alert-success").fadeOut(10);
    $(".alert_close").click(function () {
        $(".alert-error").fadeOut();
        $(".alert-success").fadeOut();
    });


    $("#btnSearchCustomers").click(function () {

        //GetCustomerDetailsforActivate();
        							$("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    GetCustomerDetailsActiveDeactive();
								           	     
								     }, 1000);
		
    });

    $("#backToHomeDeliverySetup").click(function () {

        window.location.replace(  "vendor-admin-index.html" + querystr);
    });




    $("#homeicon").click(function () {
        if (ismenu) {
           window.location.replace(  "vendor-admin-index.html" + querystr);
        }
        else {
            ismenu = true;
            $("#Back").hide();
			$("#homeiconback").hide();
            pageType = "homeicon";
            $(".alert-success").fadeOut();
            $(".alert-error").fadeOut();
            $("#homedeliverymenu").show();
            $("#homedeliverysetup").hide();
            $("#approvecustomers").hide();
            $("#addareastoservice").hide();
            $("#deactivatecustomer").hide();
            $("#homedeliveryrules").hide();
        }
    });
	
	
	
	
	  $("#homeiconback").click(function () {
        if (ismenu) {
            window.location.replace(  "vendor-admin-index.html" + querystr);
        }
        else {
            ismenu = true;
            $("#Back").hide();
			$("#homeiconback").hide();
            pageType = "homeicon";
            $(".alert-success").fadeOut();
            $(".alert-error").fadeOut();
            $("#homedeliverymenu").show();
            $("#homedeliverysetup").hide();
            $("#approvecustomers").hide();
            $("#addareastoservice").hide();
            $("#deactivatecustomer").hide();
            $("#homedeliveryrules").hide();
        }
    });

    $("#Back").click(function () {
        if (ismenu) {
           window.location.replace( "vendor-admin-index.html" + querystr);
        }
        else {
            ismenu = true;
            $("#Back").hide();
			$("#homeiconback").hide();
            pageType = "homeicon";
            $(".alert-success").fadeOut();
            $(".alert-error").fadeOut();
            $("#homedeliverymenu").show();
            $("#homedeliverysetup").hide();
            $("#approvecustomers").hide();
            $("#addareastoservice").hide();
            $("#deactivatecustomer").hide();
            $("#homedeliveryrules").hide();
        }
    });

    $("#logout").click(function () {
                 window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
    });

    $("#hmedelsetupmnu").click(function () 
    {
    
        							$("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    setup()
								           	     
								     }, 1000);
       
        
    });
   function setup()
   {
             clearInterval(timerforajax);
		     var devicecon=checkconnection();
		     if(devicecon)
		     {
		      											 $("#loader").hide();
										           	    $("#errornet1").show();	
		     }else
		     {
		          var onlinstatus=online();
		          if(onlinstatus)
		          {
				     	ismenu = false;
				        $("#Back").show();
						$("#homeiconback").show();
				        pageType = "hmedelsetupmnu";
				        $("#homedeliverymenu").hide();
				        $("#homedeliverysetup").show();
				        $("#approvecustomers").hide();
				        $("#addareastoservice").hide();
				        $("#deactivatecustomer").hide();
				        $("#homedeliveryrules").hide();
				        GetSetupHomeDeliveryDetails();
				  }
				  else
		          {
		             $("#errornet2").show();	
					 $("#loader").hide();
		          
		          }
			 }
        
   
   }
    $("#aprvcustmnu").click(function () {
        ismenu = false;
        $("#Back").show();
		$("#homeiconback").show();
        GetCustomerDetails();
        pageType = "aprvcustmnu";
        $("#homedeliverymenu").hide();
        $("#homedeliverysetup").hide();
        $("#approvecustomers").show();
        $("#addareastoservice").hide();
        $("#deactivatecustomer").hide();
        $("#homedeliveryrules").hide();
    });
     ///////////////////////////add area service////////////////////////////////
     //////////////////////////////////////////////////////////////////////////
    $("#adareastosvcmnu").click(function () 
    {
    
     
     	  							 $("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    	addareservice();
								           	     
								     }, 1000);
      
    });

   function addareservice()
   {
   
             clearInterval(timerforajax);
		     var devicecon=checkconnection();
		     if(devicecon)
		     {
		      											 $("#loader").hide();
										           	    $("#errornet1").show();	
		     }else
		     {
		          var onlinstatus=online();
		          if(onlinstatus)
		          {
				       ismenu = false;
				        $("#Back").show();
						$("#homeiconback").show();
						$("#addCity").val("");
						$("#addArea").val("");
						$("#addLocation").val("");
				        GetExistingAreas();
				        pageType = "adareastosvcmnu";
				        $("#homedeliverymenu").hide();
				        $("#homedeliverysetup").hide();
				        $("#approvecustomers").hide();
				        $("#addareastoservice").show();
				        $("#deactivatecustomer").hide();
				        $("#homedeliveryrules").hide();
				  }
				  else
		          {
		             $("#errornet2").show();	
					 $("#loader").hide();
		          
		          }
			 }
       
   
   }
    ///////////////////////////add area service////////////////////////////////
     //////////////////////////////////////////////////////////////////////////
     
    $("#adrlsfrdlvrymnu").click(function () {
    });

    $("#deactivecustmnu").click(function () 
    {
    
   								    $("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    deactivecust();
								           	     
								     }, 1000);
       
    });
   function deactivecust()
   {
   
         	 clearInterval(timerforajax);
		     var devicecon=checkconnection();
		     if(devicecon)
		     {
		      											 $("#loader").hide();
										           	    $("#errornet1").show();	
		     }else
		     {
		          var onlinstatus=online();
		          if(onlinstatus)
		          {
		                $("#loader").hide();
				        ismenu = false;
				        $("#Back").show();
						$("#homeiconback").show();
						$("#custNameSearch").val("");
						$("#custPhoneSearch").val("");
				        //GetCustomerDetailsforActivate("","");
				        pageType = "deactivecustmnu";
				        $("#homedeliverymenu").hide();
				        $("#homedeliverysetup").hide();
				        $("#approvecustomers").hide();
				        $("#addareastoservice").hide();
				        $("#deactivatecustomer").show();
				        $("#homedeliveryrules").hide();
				  }
				  else
		          {
		             $("#errornet2").show();	
					 $("#loader").hide();
		          
		          }
			 }
   
   
   }
    $("#adrlsfrdlvrymnu").click(function () 
    {
    
       								 $("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    addrules();
								           	     
								     }, 1000);
       
    });
   function addrules()
   {
             clearInterval(timerforajax);
		     var devicecon=checkconnection();
		     if(devicecon)
		     {
		      											 $("#loader").hide();
										           	    $("#errornet1").show();	
		     }else
		     {
		          var onlinstatus=online();
		          if(onlinstatus)
		          {
				        ismenu = false;
				        $("#Back").show();
						$("#homeiconback").show();
				        StandardDeliveryRule();
				        pageType = "adddeliveryrule";
				        $("#homedeliverymenu").hide();
				        $("#homedeliverysetup").hide();
				        $("#approvecustomers").hide();
				        $("#addareastoservice").hide();
				        $("#deactivatecustomer").hide();
				        $("#homedeliveryrules").show();
				        getDeliveryRules();
				  }
				  else
		          {
		             $("#errornet2").show();	
					 $("#loader").hide();
		          
		          }
			 }
       
   
   
   }
    if (ismenu == false) {
        $("#Back").hide();
		$("#homeiconback").show();
		 $("#homeiconback").hide();
        $("#homedeliverymenu").fadeIn();
        $("#homedeliverysetup").hide();
        $("#approvecustomers").hide();
        $("#addareastoservice").hide();
        $("#deactivatecustomer").hide();
        $("#homedeliveryrules").hide();
    }


    $(document).on("keypress", ".dtpicker-compValue", function () {
        ////console.log("Handler for .keypress() called.");
        return false;
    });

    $(document).on("keydown", ".dtpicker-compValue", function () {
        ////console.log("Handler for .keypress() called.");
        return false;
    });

    $(document).on("keyup", ".dtpicker-compValue", function () {
        ////console.log("Handler for .keypress() called.");
        return false;
    });





}

var isNewRecord = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                   HOME DELEVARY SETUP FUNCTIONALITY                                                                                                        //////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetVendorDetails() {


    var UUID = "";
    var session_id = "";


    $.ajax({
        type: 'GET',
        url: url + '/admin/getvendordetails?UUID=' + UUID + '&session_id=' + session_id + '&vendor_id=' + vendor_id,
        //contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        dataType: 'jsonp',
        jsonp: false,
        timeout:10000,
		cache: false,
		async: true,
		 beforeSend: function() 
		{
            $("#loader").show();
        },
        complete: function() 
		{
            $("#loader").hide();
        },
        success: function (locationData) {



            //$("#divNoHomeDeliveryDates").fadeIn();
            //$("#homedelsetupid")[0].value = HomeDeliveryJSON.id;
            //$("#divNoHomeDeliveryDates").fadeIn();
            $("#homedelsetupaddress1")[0].value = locationData[0].address1;
            $("#homedelsetupaddress2")[0].value = locationData[0].address2;
            $("#homdellocality")[0].value = locationData[0].locality;
            $("#homedelsetuparea")[0].value = locationData[0].area;
            $("#homedelsetupcity")[0].value = locationData[0].city;
            $("#homedelsetupstate")[0].value = locationData[0].state;
            $("#homedelsetuplandmark")[0].value = locationData[0].landmark;
            $("#homedelsetupphone")[0].value = locationData[0].contact_phone_no;



            /*  $("#vendorId")[0].value = locationData[0].vendor_id;
            $("#location")[0].value = locationData[0].location_name;
            $("#locationid")[0].value = locationData[0].location_id;
            $("#vendorname")[0].value = locationData[0].vendor_name;

            $("#contact_name")[0].value = locationData[0].contact_person;
            $("#mbno_forSMS")[0].value = locationData[0].mobile_number;
            $("#phone_number")[0].value = locationData[0].contact_phone_no;
            $("#email")[0].value = locationData[0].email_id;
            $("#address1")[0].value = locationData[0].address1;
            $("#address2")[0].value = locationData[0].address2;
            $("#landmark")[0].value = locationData[0].landmark;
            $("#area")[0].value = locationData[0].area;
            $("#locality")[0].value = locationData[0].locality;
            $("#city")[0].value = locationData[0].city;
            $("#state")[0].value = locationData[0].state;
            $("#isHomeDelivery")[0].checked = parseInt(locationData[0].home_delivery);

            isIclusiveTax = locationData[0].inclusive_tax;
            isExclusiveTax = locationData[0].exclusive_tax;

            if (locationData[0].inclusive_tax == 1) {
            $('input[id=inclusiveTax]').attr('checked', 'checked');
            $('input[id=inclusiveTax]').attr('disabled', true);
            $('input[id=exclusiveTax]').attr('disabled', true);
            }
            else {
            $('input[id=inclusiveTax]').removeAttr('checked');
            }

            if (locationData[0].exclusive_tax == 1) {
            $('input[id=exclusiveTax]').attr('checked', 'checked');
            $('input[id=inclusiveTax]').attr('disabled', true);
            $('input[id=exclusiveTax]').attr('disabled', true);
            }
            else {
            $('input[id=exclusiveTax]').removeAttr('checked')
            }

            //$("#vendortype")[0].value=locationData[0].;

            $('Select#vendortype option').each(function () {
            if ($(this)[0].value == locationData[0].vendor_business_type_id)
            $(this).attr('selected', 'selected');
            });


            $('Select#vendor_brandtype option').each(function () {
            if ($(this)[0].value == locationData[0].vendor_brand_id)
            $(this).attr('selected', 'selected');
            });

            var vendor_brand_id = $("#vendor_brandtype")[0].value;
            var vendor_is_branded = 0;
            var surcharge = locationData[0].surcharge;
            if (vendor_brand_id != "" && vendor_brand_id != 'undefined') {
            vendor_is_branded = 1;
            }


            $("#location").focus(); */


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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	 }
    });

}




function RestrictVarchar(controle, e) {



var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)||e.keyCode == 32);
            //document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
/*
  evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
		if(charCode ==37 || charCode ==38)
		{
		 return false;
		}
    if (controle.value.length > 24) {
      
		
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }

    }



    if (controle.value.length < 3 || controle.value.length > 25) {
        return addMessageSpan(controle, controle.placeholder + " length should be of Min 3 and Max 25");


    }
    else {
        closeErrorMessage();
        return true;
    }*/
}

///////////////////////////////////////////////////Validation code////////////////////////////////////////////////
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function RestrictPhoneNumber(controle, evt) {


		
        
   

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	
	if(charCode ==37 || charCode ==38)
		{
		 return false;
		}
		else
		{
		
		closeErrorMessage();
		
		
		}
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
	else
	{
	closeErrorMessage();
	
	
	}
	
	
	if(controle.value.length==0)
	{
		if((controle.value.length ==0)&&(charCode==48))
		{
		  controle.value="";
		 return addMessageSpan(controle, controle.placeholder + " should not contain 0 (Zero) as prefix");
		 return false;
		
		
		}
		else
		{
		
		 closeErrorMessage();
		return true;
		
		}
	
	}

    if (controle.value.length > 9) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }
		else
		{
		closeErrorMessage();
		}

    }



    if ((controle.value.length < 11|| controle.value.length > 11)) {
         addMessageSpan(controle, controle.placeholder + " length should be of 10 digits");
         

    }
    else {
        closeErrorMessage();
        return true;
    }
	
	
 




}


function closeErrorMessage() {

    $("#errMsg").text("");

    $(".alert-error").fadeOut('slow');



}

function closeSuccessMessage() {

    $("#successMsg").text("");


    $(".alert-success").fadeOut('slow');




}



function showSuccessMessage(message) {
    $("#errMsg").text("");
    $("#successMsg").text(message);
    $(".alert-error").fadeOut('slow');
    $(".alert-success").fadeIn('slow');



}

function showErrorMessage(message) {
    $("#successMsg").text("");
    $("#errMsg").text(message);
    $(".alert-error").fadeIn('slow');
    $(".alert-success").fadeOut('slow');



}


  function restrictPercentAnd(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode ==37 || charCode ==38) {
                return false;
            }
            return true;
        }
////////////////////////////////////////////////////////END Of Validation Code //////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
///////////// Convert timings to 24 hours format for validation /////
/////////////////////////////////////////////////////////////////////
function ConvertTimeTo24Format(time)
{
 
		    var str = ""+time+"";
		    var term = "PM";
		    var index = str.indexOf(term);
		   if(index != -1)
		    {
		       var timearr=time.replace("PM","").replace(" ","").split(":");
			   if(parseInt(timearr[0])<parseInt(12))
			   {
			   
			    timearr[0]=parseInt(timearr[0]) +parseInt(12);
				
			   }
				time=parseFloat(timearr[0]+"."+timearr[1]);
				return time;
		    }
		    else
		    {
		       var timearr=time.replace("PM","").replace(" ","").split(":");
				time=parseFloat(timearr[0]+"."+timearr[1]);
				return time;
		    
		    }
    
	
}

function SaveHomeDelivery() 
{
 	clearInterval(timerforajax);
     var devicecon=checkconnection();
     if(devicecon)
     {
      											 $("#loader").hide();
								           	    $("#errornet1").show();	
     }else
     {
          var onlinstatus=online();
          if(onlinstatus)
          {
				       HomeDeliveryJSON = [{ id: "", session_id: "", UUID: "", vendor_id: "", Address1: "", Address2: "", Landmark: "", PhoneNo: "", DeliveryTimeFrom1: "", DeliveryTimeTo1: "", DeliveryTimeFrom2: "", DeliveryTimeTo2: ""}]
					    var id = $("#homedelsetupid")[0].value;
					
					    var homdellocality = $("#homdellocality")[0].value;
					    if (homdellocality.trim() == "") { return addMessageSpan($("#homdellocality"), "Please Provide Locality"); }
					    var homedelsetuparea = $("#homedelsetuparea")[0].value;
					    if (homedelsetuparea.trim() == "") { return addMessageSpan($("#homedelsetuparea"), "Please Provide Area"); }
					    var homedelsetupcity = $("#homedelsetupcity")[0].value;
					    if (homedelsetupcity.trim() == "") { return addMessageSpan($("#homedelsetupcity"), "Please Provide City"); }
					    var homedelsetupstate = $("#homedelsetupstate")[0].value;
					    if (homedelsetupstate.trim() == "") { return addMessageSpan($("#homedelsetupstate"), "Please Provide State"); }
					
					    var address1 = $("#homedelsetupaddress1")[0].value;
					    if (address1.trim() == "") { return addMessageSpan($("#homedelsetupaddress1"), "Please Provide Address1"); }
					    var address2 = $("#homedelsetupaddress2")[0].value;
					    if (address2.trim() == "") { return addMessageSpan($("#homedelsetupaddress2"), "Please Provide Address2"); }
					
					    var landmark = $("#homedelsetuplandmark")[0].value;
					    if (landmark.trim() == "") { return addMessageSpan($("#homedelsetuplandmark"), "Please Provide Landmark"); }
					    var phoneNo = $("#homedelsetupphone")[0].value;
					   if (phoneNo.trim() == ""||phoneNo.length<10) { return addMessageSpan($("#homedelsetupphone"), "Please Provide Phone No"); }
					    var deliveryTimeFrom1 = $("#homedelsetupdeliveryfromtime1")[0].value;
					    var deliveryTimeTo1 = $("#homedelsetupdeliverytotime1")[0].value;
					    var deliveryTimeFrom2 = $("#homedelsetupdeliveryfromtime2")[0].value;
					    var deliveryTimeTo2 = $("#homedelsetupdeliverytotime2")[0].value;
					
					
					
					    if (deliveryTimeFrom1.trim() == "" ) {
					        return addMessageSpan($("#bustimehead"), "Please provide home delivery 'Time From' for 1st half");
					        return false;
					    }
					
					    if (deliveryTimeTo1.trim() == "" ) {
					        return addMessageSpan($("#bustimehead"), "Please provide delivery 'Time To' for 1st half");
					        return false;
					    }
					
						 if (deliveryTimeFrom2.trim() == "" ) {
					        return addMessageSpan($("#bustimehead"), "Please provide all home delivery 'Time From' for 2nd half");
					        return false;
					    }
					
					    if (deliveryTimeTo2.trim() == "" ) {
					        return addMessageSpan($("#bustimehead"), "Please provide delivery 'Time To' for 2nd half");
					        return false;
					    }
						
						
						///////////////////////////////////////////////////////////////////////////////////
						// Validating Business timings ////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////////////////////////
						
						if(ConvertTimeTo24Format(deliveryTimeFrom1)>ConvertTimeTo24Format(deliveryTimeTo1))
						{
								alert("Please provide valid business timings");
								return false;
						}
						
						
						if(ConvertTimeTo24Format(deliveryTimeTo1)>ConvertTimeTo24Format(deliveryTimeFrom2))
						{
								alert("Please provide valid business timings");
								return false;
						}
						
						
						
						if(ConvertTimeTo24Format(deliveryTimeFrom2)>ConvertTimeTo24Format(deliveryTimeTo2))
						{
								alert("Please provide valid business timings");
								return false;
						}
						
						//////////////////////////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////////////////////////
					   
					
					
					
					    if (id == 'undefined' || id == "" || id == null) {
					        id = 0;
					    }
					    HomeDeliveryJSON[0].id = id;
					    HomeDeliveryJSON[0].session_id = vendor_session_id;
					    HomeDeliveryJSON[0].UUID = UUID;
					    HomeDeliveryJSON[0].vendor_id = vendor_id;
					    HomeDeliveryJSON[0].Address1 = address1;
					    HomeDeliveryJSON[0].Address2 = address2;
					    HomeDeliveryJSON[0].Locality = homdellocality;
					    HomeDeliveryJSON[0].Area = homedelsetuparea;
					    HomeDeliveryJSON[0].City = homedelsetupcity;
					    HomeDeliveryJSON[0].State = homedelsetupstate;
					    HomeDeliveryJSON[0].Landmark = landmark;
					    HomeDeliveryJSON[0].PhoneNo = phoneNo;
					    HomeDeliveryJSON[0].DeliveryTimeFrom1 = deliveryTimeFrom1;
					    HomeDeliveryJSON[0].DeliveryTimeTo1 = deliveryTimeTo1;
					    HomeDeliveryJSON[0].DeliveryTimeFrom2 = deliveryTimeFrom2;
					    HomeDeliveryJSON[0].DeliveryTimeTo2 = deliveryTimeTo2;
					    HomeDeliveryJSON = JSON.stringify(HomeDeliveryJSON);
		
				    $.ajax({
				        type: 'GET',
				        url: url + '/oms1/savehomedelivery?itemsjson=' + HomeDeliveryJSON,
				        //change service name to call actual service in order to save data or update data
				        contentType: 'application/json; charset=utf-8',
				        jsonpCallback: 'jsonCallback',
				        cache: false,
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
				        success: function (response) 
				        {
				            var testdata = JSON.stringify(response);
				            if (testdata != "false") {
				                $("#homedelsetupid")[0].value = testdata;
				                showSuccessMessage("Home Delivery Setup Data Saved Successfully");
				                $("#divNoHomeDeliveryDates").fadeIn();
				                //window.location = "vendor-admin-add-edit-item.html" + querystr;
				            }
				            else {
				                showErrorMessage("Unable to save, please try again later");
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
																							   //alert('Requested page not found. [404]');
																							    $("#errornet2").show();
																								$("#loader").hide();
																								
																		} else if (jqXHR.status == 500) 
																		{
																								//alert('Internal Server Error [500].');
																								 $("#errornet2").show();
																							$("#loader").hide();
																								
																		} 
																		else if (exception === 'parsererror') 
																		{
																								//alert('Requested JSON parse failed.');
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
																								//alert('Ajax request aborted.');
																								 $("#errornet2").show();
																								$("#loader").hide();
																								
																								
																		} 
																		else 
																		{
																								//alert('Uncaught Error.\n' + jqXHR.responseText);
																								 $("#errornet2").show();
																								$("#loader").hide();
																		}
						}
				    });
				  }
				  else
		          {
		             $("#errornet2").show();	
					 $("#loader").hide();
		          
		          }
				
		 
	 }
			    
   
}
//savehomedelivery

function GetSetupHomeDeliveryDetails() {

    var no_deleveryrecords = "";
    $("#noDeliveryDateTimesList").html('');
    if (pageType == "hmedelsetupmnu") {

        $.ajax({
            type: 'GET',
            url: url + '/oms1/setuphomedelivery?vendor_id=' + vendor_id + "&UUID=" + UUID + "&session_id=" + vendor_session_id,
            contentType: 'application/json; charset=utf-8',
            jsonpCallback: 'jsonCallback',
            cache: false,
            dataType: 'jsonp',
            async: true,
            timeout:10000,
            jsonp: false,
            beforeSend: function () {
                $("#loader").show();
            },
            complete: function () {
                $("#loader").hide();
            },
            success: function (HomeDeliveryJSON) {
                // var HomeDeliveryJSON = JSON.stringify(response);

                if (HomeDeliveryJSON.id == null || HomeDeliveryJSON.id == 'undefined') {

                    isNewRecord = true;
                    $("#divNoHomeDeliveryDates").fadeOut();
                    GetVendorDetails();

                }
                else {
                    $("#divNoHomeDeliveryDates").fadeIn();
                    $("#homedelsetupid")[0].value = HomeDeliveryJSON.id;
                    $("#divNoHomeDeliveryDates").fadeIn();
                    $("#homedelsetupaddress1")[0].value = HomeDeliveryJSON.Address1;
                    $("#homedelsetupaddress2")[0].value = HomeDeliveryJSON.Address2;
                    $("#homdellocality")[0].value = HomeDeliveryJSON.Locality;
                    $("#homedelsetuparea")[0].value = HomeDeliveryJSON.Area; ;
                    $("#homedelsetupcity")[0].value = HomeDeliveryJSON.City; ;
                    $("#homedelsetupstate")[0].value = HomeDeliveryJSON.State;
                    $("#homedelsetuplandmark")[0].value = HomeDeliveryJSON.Landmark;
                    $("#homedelsetupphone")[0].value = HomeDeliveryJSON.PhoneNo;
                    $("#homedelsetupdeliveryfromtime1").val(HomeDeliveryJSON.DeliveryTimeFrom1);
                    $("#homedelsetupdeliverytotime1").val(HomeDeliveryJSON.DeliveryTimeTo1);
                    $("#homedelsetupdeliveryfromtime2")[0].value = HomeDeliveryJSON.DeliveryTimeFrom2;
                    $("#homedelsetupdeliverytotime2")[0].value = HomeDeliveryJSON.DeliveryTimeTo2;
                    if (HomeDeliveryJSON.NoDeliveryDates.length > 0) {
                        if (HomeDeliveryJSON.NoDeliveryDates[0] != null) {

                            $.each(HomeDeliveryJSON, function (index, value) {
                                if (index == "NoDeliveryDates") {
                                    $.each(value, function (index, value2) {

                                        no_deleveryrecords += "<div class='FullWidth pull-left'>";
                                        no_deleveryrecords += "<li class='dt'><input class='nodeliverydate' onkeypress='return false;' disabled='true' onkeydown='return false;' onkeyup='return false;'    type='text' value='" + value2.date + "' placeholder='Date'></li>";
                                        no_deleveryrecords += "<li class='frti'><input type='text' class='picker' onkeypress='return false;' disabled='true'  onkeydown='return false;' onkeyup='return false;'    value='" + value2.TimeFrom + "' placeholder='From'></li>";
                                        no_deleveryrecords += "<li class='toti'><input type='text' class='picker' onkeypress='return false;' disabled='true'  onkeydown='return false;'  onkeyup='return false;'   value='" + value2.TimeTo + "' placeholder='To'></li>";
                                        //no_deleveryrecords += "<li><input type='text' class='picker' onkeypress='return false;'   value='" + value2.BusinessStartTime + "' placeholder='Business Start Time'></li>";
                                        //no_deleveryrecords += "<li><input type='text' class='picker' onkeypress='return false;'   value='" + value2.BusinessEndTime + "' placeholder='Business End Time'></li>";
                                        no_deleveryrecords += "<li class='addti'><a  id=del-" + value2.Id + " onclick='DeleteNoHomeDeliveryDate(" + value2.Id + ");' class='orgIconCircle24 icon-trash pull-right'></a></li>";
                                        no_deleveryrecords += "</div>";
                                    });
                                }
                            });
                            $("#noDeliveryDateTimesList").html(no_deleveryrecords);
                        }
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
			  }
        });
    }
}


function addNohomeDelivery() {

    nohomeDeliveryJSON = [{ id: "", session_id: "", UUID: "", vendor_id: "", Date: "", TimeFrom: "", TimeTo: "", BusinessStartTime: "", BusinessEndTime: ""}];
    var nodeliverydate = $("#nodeliverydate")[0].value;
    var nodeliveryFromTime = $("#nodeliveryFrom")[0].value;
    var nodeliveryToTime = $("#nodeliveryTo")[0].value;


    if (nodeliverydate == "" || nodeliveryFromTime == "" || nodeliveryToTime == "") {


        showErrorMessage("Please provide all the details for no home delivery");
        return false;


    }




    var nodeliveryBusinessStartTime = ""; // $("#nodeliveryBusinessStartTime")[0].value;
    var nodeliveryBusinessEndTime = ""; //$("#nodeliveryBusinessEndTime")[0].value;
    nohomeDeliveryJSON[0].id = $("#homedelsetupid")[0].value;
    nohomeDeliveryJSON[0].session_id = vendor_session_id;
    nohomeDeliveryJSON[0].UUID = UUID;
    nohomeDeliveryJSON[0].vendor_id = vendor_id;
    nohomeDeliveryJSON[0].Date = nodeliverydate;
    nohomeDeliveryJSON[0].TimeFrom = nodeliveryFromTime;
    nohomeDeliveryJSON[0].TimeTo = nodeliveryToTime;
    nohomeDeliveryJSON[0].BusinessStartTime = nodeliveryBusinessStartTime;
    nohomeDeliveryJSON[0].BusinessEndTime = nodeliveryBusinessEndTime;
    nohomeDeliveryJSON = JSON.stringify(nohomeDeliveryJSON);

    $.ajax({
        type: 'GET',
        url: url + '/oms1/nohomedelivery?itemsjson=' + nohomeDeliveryJSON,
        //change service name to call actual service in order to save data or update data
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        timeout:10000,
		cache: false,
		async: true,
		 beforeSend: function() 
		{
            $("#loader").show();
        },
        complete: function() 
		{
            $("#loader").hide();
        },
        success: function (response) {
            var testdata = JSON.stringify(response);
            if (testdata != "false") {
                $("#nodeliverydate")[0].value = "";
                $("#nodeliveryFrom")[0].value = "";
                $("#nodeliveryTo")[0].value = "";
                //$("#nodeliveryBusinessStartTime")[0].value = "";
                //$("#nodeliveryBusinessEndTime")[0].value = "";
                $("#successMsg").text("Home Delivery Setup Data Saved Successfully");
                $(".alert-error").fadeOut('slow');
                $(".alert-success").fadeIn('slow');
                //GetSetupHomeDeliveryDetails();
                window.location.replace(  "vendor-homedelivery.html" + querystr + '&section=setup');
            }
            else {


            

                $("#errMsg").text("Unable to save, please try again later");
                // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
                $(".alert-error").fadeIn('slow');
                $(".alert-success").fadeOut('slow');
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	}
    });
}


function DeleteNoHomeDeliveryDate(id) {
    //delvendornodelivery
    $.ajax({
        type: 'GET',
        url: url + '/oms1/delvendornodelivery?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id + '&no_del_id=' + id,
        //change service name to call actual service in order to save data or update data
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) {
            var testdata = JSON.stringify(response);
            if (response[0] == true) {
                GetSetupHomeDeliveryDetails();
                $("#successMsg").text("No Delivery Date Successfully Deleted");
                $(".alert-error").fadeOut('slow');
                $(".alert-success").fadeIn('slow');
            }
            else {
                $("#errMsg").text("Error Deleteing No Delivery Date");
                // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
                $(".alert-error").fadeIn('slow');
                $(".alert-success").fadeOut('slow');

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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	  }
    });


}
////////////////////////////////////////////////////////////////
//	APPROVE CUSTOMER FUNCTIONALITY	                       /////
////////////////////////////////////////////////////////////////


var CustomerDetailsArray = "";
var app_customerDetailRecord = "";
var custindx = 0;

function GetCustomerDetails() {

    //delvendornodelivery
    $.ajax({
        type: 'GET',
        url: url + "/oms1/getcustdetails?UUID=" + UUID + "&session_id=" + vendor_session_id + "&vendor_id=" + vendor_id + "&operation=0&is_vendor_accepted=&customer_id=''&address_label=''",
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) {
            CustomerDetailsArray = response.CustomerDetails;
            app_customerDetailRecord = "";
            app_customerDetailRecord += "<p>";
            app_customerDetailRecord += "<strong>" + CustomerDetailsArray[0].customer_Name + "</strong><br>";
            app_customerDetailRecord += CustomerDetailsArray[0].customer_address.replace(',', '<br>') + "<br>";
            app_customerDetailRecord += "</p>";
            app_customerDetailRecord += "<input id='appCustId_" + CustomerDetailsArray[0].cust_ven_id + "' value='" + CustomerDetailsArray[0].cust_ven_id + "' type='hidden' >";
            $("#app_customerrecord").html(app_customerDetailRecord);
            $("#appCustId").value = CustomerDetailsArray[0].cust_ven_id;
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	}
    });
}

function NextRecord() {

    if (custindx < (CustomerDetailsArray.length - 1)) {
        custindx++;
        app_customerDetailRecord = "";
        app_customerDetailRecord += "<p>";
        app_customerDetailRecord += "<strong>" + CustomerDetailsArray[custindx].customer_Name + "</strong><br>";
        app_customerDetailRecord += CustomerDetailsArray[custindx].customer_address.replace(',', '<br>') + "<br>";
        app_customerDetailRecord += "</p>";
        app_customerDetailRecord += "<input id='appCustId_" + CustomerDetailsArray[custindx].cust_ven_id + "' value='" + CustomerDetailsArray[custindx].cust_ven_id + "' type='hidden' >";
        $("#app_customerrecord").html(app_customerDetailRecord);
        $("#appCustId").value = CustomerDetailsArray[custindx].cust_ven_id;
    }
}

function PrevRecord() {
    if (custindx > 0) {
        custindx--;
        app_customerDetailRecord = "";
        app_customerDetailRecord += "<p>";
        app_customerDetailRecord += "<strong>" + CustomerDetailsArray[custindx].customer_Name + "</strong><br>";
        app_customerDetailRecord += CustomerDetailsArray[custindx].customer_address.replace(',', '<br>') + "<br>";
        app_customerDetailRecord += "</p>";
        app_customerDetailRecord += "<input id='appCustId_" + CustomerDetailsArray[custindx].cust_ven_id + "' value='" + CustomerDetailsArray[custindx].cust_ven_id + "' type='hidden' >";
        $("#app_customerrecord").html(app_customerDetailRecord);
        $("#appCustId").value = CustomerDetailsArray[custindx].cust_ven_id;
    }
}


function ApproveOrRejectCustomer(isAccept) {

    var is_vendor_accepted = 0;
    if (isAccept) {
        is_vendor_accepted = 1;
    }
    else {
        is_vendor_accepted = 3;
    }


    $.ajax({
        type: 'GET',
        url: url + "/oms1/getcustdetails?UUID=" + UUID + "&session_id=" + vendor_session_id + "&vendor_id=" + vendor_id + "&operation=1&is_vendor_accepted=" + is_vendor_accepted + "&cust_ven_id=" + CustomerDetailsArray[custindx].cust_ven_id + "&address_label=''",
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) 
        {

            var res = response;
            GetCustomerDetails();

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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
    });



}


//////////////////////////////////////////////////////////////////
//	ACTIVATE DEACTIVARE CUSTOMER  FUNCTIONALITY	            /////
//////////////////////////////////////////////////////////////////

function GetCustomerDetailsActiveDeactive()
{
         clearInterval(timerforajax);
	     var devicecon=checkconnection();
	     if(devicecon)
	     {
	      											 $("#loader").hide();
									           	    $("#errornet1").show();	
	     }else
	     {
	          var onlinstatus=online();
	          if(onlinstatus)
	          {
			        var customername = $("#custNameSearch")[0].value;
				    var custphoneno = $("#custPhoneSearch")[0].value;
				
				    if (customername.trim() == "" && custphoneno.trim() == "") {
				        showErrorMessage("Please provide Customer Name or Customer Phone Number to search with ");
				
				    }
				    else 
				    {
				        closeErrorMessage();
				
				    }
	
	
					GetCustomerDetailsforActivate(customername,custphoneno);
			  }
			  else
	          {
	             $("#errornet2").show();	
				 $("#loader").hide();
	          
	          }
		 }

	


}

function GetCustomerDetailsforActivate(customername,custphoneno) {

    

    var operation = ""
    if (customername != "" || custphoneno != "") {

        operation = "customer";

    }
    else {

        operation = "ALL";

    }
    $("#activateCustList").html('');

    //delvendornodelivery
    $.ajax({
        type: 'GET',
        //url: url + "/oms1/getcustdetails?UUID=" + UUID + "&session_id=" + vendor_session_id + "&vendor_id=" + vendor_id + "&operation=0&is_vendor_accepted=&customer_id=''&address_label=''",
        url: url + '/oms1/getcustdetails?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id + '&operation=' + operation + '&is_vendor_accepted=&customer_id=&address_label=&customer_name=' + customername + '&phone_no=' + custphoneno + '&status=',
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        timeout:10000,
		cache: false,
		async: true,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
			applyBigStyles();
        },
        success: function (response) {
            CustomerDetailsArray = response;
            app_customerDetailRecord = "";

            if (CustomerDetailsArray[0] != null) {
                if (response.length > 0) {
                    $.each(CustomerDetailsArray, function (index, value) {
                        switch (value.status) 
						{
                            case "1":
                                app_customerDetailRecord += "<li><label><input type='checkbox' checked onchange=ActivateOrDeactivate(" + value.cust_ven_id + "," + value.customer_phone_no + ");  id=act_" + value.cust_ven_id + " class='inp bigcheck'></label><p><strong>" + value.customer_Name +" - "+value.customer_phone_no +" - "+value.address_label+ "</strong><br>" + value.customer_address + ",Phone:" + value.customer_phone_no + "</p></li>";
                                break;
                            case "2":
                                app_customerDetailRecord += "<li><label><input type='checkbox' onchange=ActivateOrDeactivate(" + value.cust_ven_id + "," + value.customer_phone_no + ");     id=act_" + value.cust_ven_id + " class='inp bigcheck'></label><p><strong>" + value.customer_Name +" - "+value.customer_phone_no +" - "+value.address_label+ "</strong><br>" + value.customer_address + ",Phone:" + value.customer_phone_no + "</p></li>";
                                break;
                        }

                    });
                }
            }
            else {

                showErrorMessage("No Customers Found with provided search criteria");

            }

            $("#activateCustList").html(app_customerDetailRecord);

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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
    });


}


function ActivateOrDeactivate(id,phone) 
{

    var is_vendor_accepted = 1;
    var confirmation=false;
	
	var currentstatus=$("#act_" + id)[0].checked;
    if ($("#act_" + id)[0].checked) {
        is_vendor_accepted = 1;
		 confirmation=window.confirm("Are you sure you want to activate this customer? (OK/CANCEL)");

    }
    else {
        is_vendor_accepted = 2;
		 confirmation=window.confirm("Are you sure you want to de-activate this customer? (OK/CANCEL)");
    }

	
	if(confirmation)
	{
	
		var operation = "update";

   
		$.ajax({
			type: 'GET',
			//url: url + "/oms1/getcustdetails?UUID=" + UUID + "&session_id=" + vendor_session_id + "&vendor_id=" + vendor_id + "&operation=1&is_vendor_accepted=" + is_vendor_accepted + "&cust_ven_id=" + id + "&address_label=''",
			url: url + '/oms1/getcustdetails?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id + '&operation=' + operation + '&is_vendor_accepted=' + is_vendor_accepted + "&cust_ven_id=" + id + '&phone_no=' + phone + '&vendor_name=' + vendor_name + '&customer_id=&address_label=&customer_name=&status=',
            jsonpCallback: 'jsonCallback',
            timeout:10000,
			cache: false,
			dataType: 'jsonp',
			jsonp: false,
			async: true,
			beforeSend: function () {
				$("#loader").show();
			},
			complete: function () {
				$("#loader").hide();
			},
			success: function (response) 
			{
				var res = response;
				//GetCustomerDetailsforActivate();
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
		});
	
	}
	else
	{
	
	$("#act_" + id)[0].checked=!currentstatus;
	
	
	}

}


//////////////////////////////////////////////////////////////////
//	ADD AREAS TO SERVICE   FUNCTIONALITY	            /////
//////////////////////////////////////////////////////////////////
var PreviousCity = "";
var PreviousArea = "";

var AreaJSON = ""//[{ "area": "Attapur", "status": "0", "locality": "Eeshwar theatre", "Id": "1", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "7", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "8", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "9", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "10", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "11", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "12", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "13", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Kukatpally", "status": "1", "locality": "JNTU", "Id": "18", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Kukatpally", "status": "1", "locality": "JNTU", "Id": "19", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Kukatpally", "status": "1", "locality": "JNTU", "Id": "20", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "26", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "27", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "30", "vendor_id": "1", "city": "Hyderabad" }, { "area": "Begumpet", "status": "1", "locality": "Pantaloons", "Id": "31", "vendor_id": "1", "city": "Hyderabad"}]

//////////////////////add area service add location button functtionality/////////////////////////////////
////////////////////////////////////////////////////////////////////////

function AddAreasToService() 
{

									$("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	    addareservice();
								           	     
								     }, 1000);
    

}
function addareservice()
{
     clearInterval(timerforajax);
     var devicecon=checkconnection();
     if(devicecon)
     {
      											 $("#loader").hide();
								           	    $("#errornet1").show();	
     }else
     {
          var onlinstatus=online();
          if(onlinstatus)
          {
		       var state = ""; //$("#addState")[0].value;
			    var locality = (($("#addLocation")[0].value != "") && ($("#addLocation")[0].value != "undefined")) ? $("#addLocation")[0].value : false;
			    var area = (($("#addArea")[0].value != "") && ($("#addArea")[0].value != "undefined")) ? $("#addArea")[0].value : false;
			    var city = (($("#addCity")[0].value != "") && ($("#addCity")[0].value != "undefined")) ? $("#addCity")[0].value : false;
			
			    if (locality && area && city) {
			
			        $(".alert-error").fadeOut('slow');
			        $(".alert-success").fadeOut('slow');
			
			        $.ajax({
			            type: 'GET',
			            url: url + '/oms1/saveVendordetails?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id + '&locality=' + locality + '&area=' + area + '&city=' + city + '&state=' + state,
			            contentType: 'application/json; charset=utf-8',
			            jsonpCallback: 'jsonCallback',
			            cache: false,
			            dataType: 'jsonp',
			            jsonp: false,
			            timeout:10000,
						async: true,
			            beforeSend: function () 
			            {
			                $("#loader").show();
			            },
			            complete: function () 
			            {
			                $("#loader").hide();
							 GetExistingAreas();
			            },
			            success: function (response) 
			            {
			
			                AreaJSON = response;
							
							if(AreaJSON[0]=="-1")
							{
							
							 $("#errMsg").text("Area already exists");
			                    // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
			                    $(".alert-error").fadeIn('slow');
			                    $(".alert-success").fadeOut('slow');
								return false;
							}
							
			                if (AreaJSON != null) {
			                    //$("#addState")[0].value = "";
			                    $("#addLocation")[0].value = "";
			                    $("#addArea")[0].value = "";
			                    $("#addCity")[0].value = "";
			                    $("#addCity")[0].value = "";
			                    $("#successMsg").text("Added area successfully");
			                    $(".alert-error").fadeOut('slow');
			                    $(".alert-success").fadeIn('slow');
			                }
			                else {
			                    $("#errMsg").text("Unable to add area, please try again later");
			                    // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
			                    $(".alert-error").fadeIn('slow');
			                    $(".alert-success").fadeOut('slow');
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
																						   //alert('Requested page not found. [404]');
																						    $("#errornet2").show();
																							$("#loader").hide();
																							
																	} else if (jqXHR.status == 500) 
																	{
																							//alert('Internal Server Error [500].');
																							 $("#errornet2").show();
																						$("#loader").hide();
																							
																	} 
																	else if (exception === 'parsererror') 
																	{
																							//alert('Requested JSON parse failed.');
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
																							//alert('Ajax request aborted.');
																							 $("#errornet2").show();
																							$("#loader").hide();
																							
																							
																	} 
																	else 
																	{
																							//alert('Uncaught Error.\n' + jqXHR.responseText);
																							 $("#errornet2").show();
																							$("#loader").hide();
																	}
					}
			        });
			
			    }
			    else 
				{
					$("#loader").hide();
			        $("#errMsg").text("Please provide all the values to proceed with adding.");
			        // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
			        $(".alert-error").fadeIn('slow');
			        $(".alert-success").fadeOut('slow');
			
			    }
		     
		  }
		  else
          {
             $("#errornet2").show();	
			 $("#loader").hide();
          
          }
	 }
  

}
//////////////////////add area service add location button functtionality/////////////////////////////////
////////////////////////////////////////////////////////////////////////


function GetExistingAreas() {

    $("#selectedLocations").html('');
    $.ajax({
        type: 'GET',
        url: url + '/oms1/getexistingareas?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id,
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        timeout:10000,
		async: true,
        beforeSend: function () 
        {
            $("#loader").show();
        },
        complete: function () 
        {
            $("#loader").hide();
			applyBigStyles();
        },
        success: function (response) 
        {
            AreaJSON = response;
            BindExistingAreas(response);
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
    });
}

function BindExistingAreas(response) {
    var selLocationsList = "";
    var existLocations = "";

    var ind = 1;
    $.each(response, function (index, value) {


        if (ind == 1) {
            existLocations += "<tr>";

        }

        if (value.status == "1") {
            selLocationsList += "<li><label><input type='checkbox' checked id=area_" + value.Id + " onclick='ActivateDeactivateArea(" + value.Id + ");' class='inp bigcheck'></label><p><b>" + value.locality + "</b> - " + value.area + "-" + value.city + "</p></li>";
            existLocations += "<td class='li'><label><input type='checkbox' checked id=area_" + value.Id + " onclick='ActivateDeactivateArea(" + value.Id + ");' class='inp bigcheck'></label><p><b>" + value.locality + "</b> <br>" + value.area + "-" + value.city + "</p></td>";
        }
        else {
            selLocationsList += "<li><label><input type='checkbox'  id=area_" + value.Id + " onclick='ActivateDeactivateArea(" + value.Id + ");' class='inp bigcheck'></label><p><b>" + value.locality + "</b> -" + value.area + "-" + value.city + "</p></li>";
            existLocations += "<td class='li'><label><input type='checkbox'  id=area_" + value.Id + " onclick='ActivateDeactivateArea(" + value.Id + ");' class='inp bigcheck'></label><p><b>" + value.locality + "</b> <br>" + value.area + "-" + value.city + "</p></td>";
        }


        if (ind == 3) {
            existLocations += "</tr>";
            ind = 0;
        }


        ind++;



    });
	
	
    //$("#existingLocations").html(existLocations); //need to use after changes
    $("#selectedLocations").html(selLocationsList);
    //GetStates();
	addCity();
}


function ActivateDeactivateArea(id) {
    var status = 0;
    if ($("#area_" + id)[0].checked) {
        status = 1;
    }
    else {
        status = 0;
    }

    $.ajax({
        type: 'GET',
        url: url + '/oms1/apprrejvendhomedel?UUID=' + UUID + '&session_id=' + vendor_session_id + '&vendor_id=' + vendor_id + '&status=' + status + '&HOME_del_id=' + id,
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
			// GetExistingAreas();
        },
        success: function (response) 
        {
            AreaJSON = response;
           
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	}
    });
}


var city = "";
var state = "";
var area = "";
//$( "#addLocation" ).keydown(
function addArea() {

    //if (PreviousCity != $("#addCity")[0].value) {
        PreviousCity = $("#addCity")[0].value;
        var availableAreas = [];
        var state = ""; //$("#addState")[0].value;
        var city = $("#addCity")[0].value;
        $.ajax({
            type: 'GET',
            url: url + '/oms1/autosuggestarea?city=' + city + '&state=' + state,
            contentType: 'application/json; charset=utf-8',
            jsonpCallback: 'autosuggestarea',
            timeout:10000,
			cache: false,
			async: true,
            dataType: 'jsonp',
            jsonp: false,
            beforeSend: function () {
                $("#loader").show();
            },
            complete: function () {
                $("#loader").hide();
            },
            success: function (response) {

                AreaJSON = response;
                availableAreas = AreaJSON;
				var arrAreas=$.map(availableAreas, function(el) { return el; });
				
				var autooptions1 = "";
				
					// $("#addArea").focus().autocomplete(arrAreas);
			  $( "#addArea" ).autocomplete({
				  source: arrAreas
				});
				
			/*	$.each(availableAreas, function (index, value) {
							autooptions1 += "<option>" + value + "</option>";
						});

						$('#lstArea').append(autooptions1);*/
				
				
                /*$("#addArea").autocomplete({
                    source: availableAreas
                });*/
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
			}
        });

    //}
}


//$( "#addLocation" ).keydown(

function addLocation() {

    //if (PreviousArea != $("#addArea")[0].value) {
        PreviousArea = $("#addArea")[0].value;
        var availableLocations = [];
        var state = ""; //$("#addState")[0].value;
        var area = $("#addArea")[0].value;
        var city = $("#addCity")[0].value;

        $.ajax({
            type: 'GET',
            url: url + '/oms1/autosuggestlocality?city=' + city + '&state=' + state + '&area=' + area,
            contentType: 'application/json; charset=utf-8',
            jsonpCallback: 'jsonCallback',
            timeout:10000,
			cache: false,
			async: true,
            dataType: 'jsonp',
            jsonp: false,
            beforeSend: function () {
                $("#loader").show();
            },
            complete: function () {
                $("#loader").hide();
            },
            success: function (response) {
                AreaJSON = response;
                availableLocations = AreaJSON;
					var autooptions1 = "";
				var arrLocations=$.map(availableLocations, function(el) { return el; });
				
				 //$("#addLocation").focus().autocomplete(arrLocations);

				 $( "#addLocation" ).autocomplete({
				  source: arrLocations
				});
				
				
				/*$.each(availableLocations, function (index, value) {
							autooptions1 += "<option>" + value + "</option>";
						});

						$('#lstLocation').append(autooptions1);*/

				
				
               /* $("#addLocation").autocomplete({
                    source: availableLocations
                });*/
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
        });
    //}
}


//$( "#addCity" ).keydown(

function addCity() {

$('#lstCity').html("");
$('#lstLocation').html("");
$('#lstArea').html("");

    var availableCity = [];
    var state = ""; //$("#addState")[0].value;
    $.ajax({
        type: 'GET',
        url: url + '/oms1/autosuggestcity?state=' + state,
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) {
            AreaJSON = response;
            availableCity = AreaJSON;
			
			var autooptions1 = "";
					var arrCity=$.map(availableCity, function(el) { return el; });
					
				//$("#addCity").focus().autocomplete(arrCity);
					
					  $( "#addCity" ).autocomplete({
				  source: arrCity
				});
				/*$.each(availableCity, function (index, value) {
							autooptions1 += "<option>" + value + "</option>";
						});

						$('#lstCity').append(autooptions1);*/

			
            /*$("#addCity").autocomplete({
                source: availableCity
            });*/
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	}
    });
}




function GetStates() {

    var availableStates = [];

    $.ajax({
        type: 'GET',
        url: url + '/oms1/autosuggestcity',
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        timeout:10000,
		cache: false,
		async: true,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) {
            AreaJSON = response;
            availableStates = AreaJSON;
			
			var autooptions1 = "";
			 var arrState=$.map(availableStates, function(el) { return el; });
				
				
				//$("#addCity").focus().autocomplete(arrState);
				
				/*$( "#addCity" ).autocomplete({
				  source: arrState
				});*/
				
				
				/*$.each(availableStates, function (index, value) {
							autooptions1 += "<option>" + value + "</option>";
						});

						$('#lstCity').append(autooptions1);*/
			/* $("#addCity").autocomplete({
                source: availableStates
            });*/
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
	}
    });
}



//////////////////////////////////////////////////////////////////
//	ADD Delivery Rules                          	            /////
//////////////////////////////////////////////////////////////////

function CustomDeliveryRule() {

    deliveryryletype = 0;
    $("#tblcustomrule").show();
    $("#tblstdrule").hide();
    $("#rdCustoDelivery").attr('checked', 'checked');
    $("#rdStdDelivery").removeAttr('checked');

    //$("#deliveryBillAmount")[0].value = "";
   // $("#deliveryCharge")[0].value = "";
   // $("#deliveryTax")[0].value = "";

   // $("#deliverChargeStd")[0].value = "";
   // $("#deliveryTaxStd")[0].value = "";

}



function StandardDeliveryRule() {

    deliveryryletype = 1;
    $("#tblcustomrule").hide();
    $("#tblstdrule").show();
    $("#rdStdDelivery").attr('checked', 'checked');
    $("#rdCustoDelivery").removeAttr('checked');
	
	
	
    //$("#deliveryBillAmount")[0].value = "";
    //$("#deliveryCharge")[0].value = "";
    //$("#deliveryTax")[0].value = "";

    //$("#deliverChargeStd")[0].value = "";
   // $("#deliveryTaxStd")[0].value = "";
}



function isFloatNumber(evt) {
    evt = (evt) ? evt : window.event;

    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode != 46 && charCode != 35 && charCode != 32) {
            return false;
        }
        else {

            if (charCode == 46) {

                if ((evt.currentTarget.value.split('.')).length > 1) {

                    return false;
                }

            }

        }
    }
    return true;
}


function getDeliveryRules() {

    var operation = "get";
    var deliveryRuleJson = "";

    $.ajax({
        type: 'GET',
        url: url + '/oms1/vendorrules?operation=' + operation + '&vendor_id=' + vendor_id,
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        timeout:10000,
		async: true,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
        },
        success: function (response) {
            deliveryRuleJson = response;
            if (response.rule_type == 2) {
                CustomDeliveryRule();
				 $('input#deliverChargeStd').val("");
                 $('input#deliveryTaxStd').val("");
                $('input#hdnDeliveryRule').val(response.rule_id);
                $('input#deliveryBillAmount').val(response.bill_amount)
                $('input#deliveryCharge').val(response.delivery_charge)
                $('input#deliveryTax').val(response.delivery_tax)
            }
            else {

                StandardDeliveryRule();
				$('input#hdnDeliveryRule').val("");
				$('input#deliveryBillAmount').val("");
				$('input#deliveryCharge').val("");
				$('input#deliveryTax').val("");

                $('input#hdnDeliveryRule').val(response.rule_id);
                delivery_charge = $('input#deliverChargeStd').val(response.delivery_charge);
                delivery_tax = $('input#deliveryTaxStd').val(response.delivery_tax);
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
																			   //alert('Requested page not found. [404]');
																			    $("#errornet2").show();
																				$("#loader").hide();
																				
														} else if (jqXHR.status == 500) 
														{
																				//alert('Internal Server Error [500].');
																				 $("#errornet2").show();
																			$("#loader").hide();
																				
														} 
														else if (exception === 'parsererror') 
														{
																				//alert('Requested JSON parse failed.');
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
																				//alert('Ajax request aborted.');
																				 $("#errornet2").show();
																				$("#loader").hide();
																				
																				
														} 
														else 
														{
																				//alert('Uncaught Error.\n' + jqXHR.responseText);
																				 $("#errornet2").show();
																				$("#loader").hide();
														}
		}
    });



}




function SaveHomeDeliveryRule() 
{
    var devicecon=checkconnection();
     if(devicecon)
     {
      											 $("#loader").hide();
								           	    $("#errornet1").show();	
     }else
     {
          var onlinstatus=online();
          if(onlinstatus)
          {
		        var rule_type = 1;
			    var bill_amount;
			    var delivery_charge;
			    var deliveryTax;
			    var deliveryRuleJson = "";
			    var operation = "create";
			    var rule_id = "";
			
			    if ($('input#hdnDeliveryRule').val() == "") {
			        operation = "create";
			    }
			    else {
			        operation = "update";
			        rule_id = $('input#hdnDeliveryRule').val();
			    }
			
			    if ($("#rdStdDelivery")[0].checked == false) {
			        rule_type = 2;
			        bill_amount = $('input#deliveryBillAmount').val();
			        delivery_charge = $('input#deliveryCharge').val();
			        delivery_tax = $('input#deliveryTax').val();
			
			        if (bill_amount.trim() == "") {
			            showErrorMessage("Please Provide Bill Amount"); $('input#deliveryBillAmount').focus(); return false;
			
			        }
			        if (delivery_charge.trim() == "") {
			
			            showErrorMessage("Please Provide Delivery Charge"); $('input#deliveryCharge').focus(); return false;
			
			
			        }
			
			        if (delivery_tax.trim() == "") {
			
			            showErrorMessage("Please Provide Delivery Tax"); $('input#deliveryTax').focus(); return false;
			
			        }
			    }
			    else {
			        bill_amount = "0";
			        delivery_charge = $('input#deliverChargeStd').val()
			        delivery_tax = $('input#deliveryTaxStd').val()
			
			        if (delivery_charge.trim() == "") {
			            showErrorMessage("Please Provide Delivery Charge"); $('input#deliverChargeStd').focus(); return false;
			        }
			
			        if (delivery_tax.trim() == "") {
			            showErrorMessage("Please Provide Delivery Tax"); $('input#deliveryTaxStd').focus(); return false;
			        }
			
			
			    }
			
			
			
			
			    $.ajax({
			        type: 'GET',
			        url: url + '/oms1/vendorrules?operation=' + operation + '&vendor_id=' + vendor_id + '&rule_type=' + rule_type + '&bill_amount=' + bill_amount + '&delivery_charge=' + delivery_charge + '&delivery_tax=' + delivery_tax + '&rule_id=' + rule_id,
			        contentType: 'application/json; charset=utf-8',
			        jsonpCallback: 'jsonCallback',
			        timeout:10000,
					cache: false,
					async: true,
			        dataType: 'jsonp',
			        jsonp: false,
			        beforeSend: function () 
			        {
			            $("#loader").show();
			        },
			        complete: function () 
			        {
			            $("#loader").hide();
			        },
			        success: function (response)
			        {
			            deliveryRuleJson = response;
			            if (response != true) {
			                $('input#hdnDeliveryRule').val(response);
			            }
			            if (operation == "create") {
			                showSuccessMessage("Created Rule Successfully");
			            }
			            else {
			
			                showSuccessMessage("Updated Rule Successfully");
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
																						   //alert('Requested page not found. [404]');
																						    $("#errornet2").show();
																							$("#loader").hide();
																							
																	} else if (jqXHR.status == 500) 
																	{
																							//alert('Internal Server Error [500].');
																							 $("#errornet2").show();
																						$("#loader").hide();
																							
																	} 
																	else if (exception === 'parsererror') 
																	{
																							//alert('Requested JSON parse failed.');
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
																							//alert('Ajax request aborted.');
																							 $("#errornet2").show();
																							$("#loader").hide();
																							
																							
																	} 
																	else 
																	{
																							//alert('Uncaught Error.\n' + jqXHR.responseText);
																							 $("#errornet2").show();
																							$("#loader").hide();
																			}
						}
					    });
		  }
		  else
          {
             $("#errornet2").show();	
			 $("#loader").hide();
          
          }
	 }
   
}


function addMessageSpan(controle, message) {

    if (message.trim() == "false") {
        //controle.next("span").remove();
		return true;
    }
    else {
        showErrorMessage(message);
		//controle.next("span").remove();
        //controle.focus();
        //controle.after("<span>" + message + "</span>");
        return false;
    }
}



//getting queary string by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cordovaready()
{

 networkState = navigator.connection.type;   	

}
function network()
{
       
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	ismenu = true;
        $("#Back").hide();
		$("#homeiconback").hide();
        pageType = "homeicon";
        $(".alert-success").fadeOut();
        $(".alert-error").fadeOut();
        $("#homedeliverymenu").show();
        $("#homedeliverysetup").hide();
        $("#approvecustomers").hide();
        $("#addareastoservice").hide();
        $("#deactivatecustomer").hide();
        $("#homedeliveryrules").hide();
     	
}
function network1()
{
       
     	$("#errornet1").hide();
  			
     	 
}
function checkconnection()
{
		
	 try 
     {
    	  
		   document.addEventListener("deviceready", cordovaready, false);
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		      return true;	
		    
		   
		   }else
		   {
		       
		       
		      return false;
		   }
   }
    catch(e) 
    {
        console.log('An error has occurred: '+e.message);
    }
}

function online()
{

     try 
     {
	    if (!navigator.onLine){
	        return false;
	    } else {
	        return true;
	    }
    }
    catch(e) {
        console.log('An error has occurred: '+e.message);
    }
}

       