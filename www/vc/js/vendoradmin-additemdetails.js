var crustidx = 0;
var topingsidx = 0;
var isheaderadded = false;
var iscrustheaderadded = false;
//var clientsessionid = "";
//JSON object for saving data.
var ItemDetails = [{ sessionid: "", vendorid: "", vendoritemid: "", categoryid: "", cost: "", itemname: "", is_percent: "", Discount: "", VAT: "", tax: "", sellingprice: "", servicecharge: "", inclusive: "", hastoppings: false, hascrust: false, Crust: [], Toppings: [], description: ""}];
var ToppingCrustDeletionJson = [{ vendor_type_id: "", vendor_id: "", vendor_users_id: "", vendor_items_id: "", topping_id: "", crust_id: "", session_id: "", UUID: ""}]
var TaxDetails = [];
var Data = [];
var topp = 1;
var crusst = 1;
var is_percent = 0;
var inclusiveoftax = 0;
var itemid = '';
var vendor_item_id = '';
var itemname = '';
var itemvendorid = 0;
var vendorid = 0;
var cat_id = 0;
var screenname = "";
var vendor_id = "";
var vendor_users_id = "";
var vendor_type_id = "";
var location_id = "";
var vendor_session_id = "";
var vendor_name = "";
var vendor_user_name = "";
var UUID = "";
var querystr = "";
var edititem=false;
var mobile_number="";
var autotoppings=[];
var autocrusts=[];

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
        //specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
       // specialKeys.push(46); //Delete
        //specialKeys.push(36); //Home
        //specialKeys.push(35); //End
        //specialKeys.push(37); //Left
        //specialKeys.push(39); //Right
		 specialKeys.push(32); //Right
		  specialKeys.push(47); //Bakward slash
		    //specialKeys.push(92); //Forward slash
			  specialKeys.push(45); //Hiphen
screenname = getParameterByName('sName');
vendor_id = getParameterByName('vendor_id');
vendor_users_id = getParameterByName('vendor_users_id');
vendor_type_id = getParameterByName('vendor_type_id');
location_id = getParameterByName('location_id');
vendor_session_id = getParameterByName('session_id');
vendor_name = getParameterByName('vendor_name');
vendor_user_name = getParameterByName('vendor_user_name');
UUID = getParameterByName('UUID');
mobile_number=getParameterByName('mobile_number');
var networkState;
querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ; 
function onBackKeyDown() 
{
	
	var loginuser = localStorage.getItem('login');
	
    //alert(querystr);
   //navigator.notification.confirm('Redirect without saving changes?', onConfirm, 'Are You Sure !', ["OK", "Cancel"]);
   if(loginuser=="vadmin")
   {
		var r = confirm("Redirect without saving changes?");
		if (r == true) 
		{
		

			window.location.replace( "vendor-admin-add-edit-item.html" + querystr);

		
		}
		else 
		{
			 return false;
		}
	}else
	{
	    window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	    return false;
	
	
	}
    // navigator.notification.confirm('do you want to exit the app?',confirmCallback);
}
function confirmCallback(buttonIndex) 
{
    if (buttonIndex == 1) 
    {
    	
        navigator.app.exitApp();
        return true;
    }
    else 
    {
        return false;
    }
}
function onDeviceReady() 
{
	
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onConfirm(buttonIndex) 
{


    if(buttonIndex == 1) 
    {

        window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);

    }
    else 
    {

        return false;

    }
}


function LoadPreexistingToppingsAndCrust() 
{

    var statesCall = "";


     var res=$.ajax({
        type: 'GET',
        url: url + '/oms1/gettoppingcrust?input=&vendor_id=' + vendor_id + '&operation=toppings',
        jsonpCallback: 'jsonCallback',
        cache: false,
		async: false,
        dataType: 'jsonp',
        jsonp: false,
        success: function (toplist) {
            var autooptions = "";
			
			var exttoppings=$.map(toplist, function(el) { return el; });
				
			
				//$("#toptxt-0").autocomplete(exttoppings);
				//$("#toptxt-1").autocomplete(exttoppings);
				$("input.topping:text").each( function(){
					 $("#"+this.id).autocomplete(exttoppings);
					});
				 autotoppings=exttoppings;


				
				
				/*$( "#toptxt-0" ).autocomplete({
				  source: exttoppings
				});
			
            $.each(toplist, function (index, value) {
                autooptions += "<option>" + value + "</option>";
            });

            $('#toppingslist').append(autooptions);*/

        },
		complete:function(){
	
	
		 $.ajax({
					type: 'GET',
					url: url + '/oms1/gettoppingcrust?input=&vendor_id=' + vendor_id + '&operation=crusts',
					jsonpCallback: 'jsonCallback',
					cache: false,
					 async: false,
					dataType: 'jsonp',
					jsonp: false,
					success: function (toplist1) {

					
					var extcrusts=$.map(toplist1, function(el) { return el; });
					
					
					$("input.crust:text").each( function(){
					 $("#"+this.id).autocomplete(extcrusts);
					});
					
					
					//$("#topcrust-0").autocomplete(extcrusts);
					//$("#topcrust-1").autocomplete(extcrusts);
				     autocrusts=extcrusts;
					/*$( "#topcrust-0" ).autocomplete({
					  source: extcrusts
					});
					
					
					var autooptions1 = "";
						$.each(toplist1, function (index, value) {
							autooptions1 += "<option>" + value + "</option>";
						});

						$('#crustlist').append(autooptions1);*/
					},
					complete:function(){
					LoadTaxDetails();
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

//////////////////////////////NavigateBack/////////////////////////////////
///////////////////////////////////////////////////////////////////////////
function NavigateBack()
{
	
	var r = confirm("Redirect without saving changes?");
    if (r == true) 
	{
    

        window.location.replace( "vendor-admin-add-edit-item.html" + querystr);

    
    }
	else 
	{
         return false;
    }
	
  

}
//////////////////////////////NavigateBack/////////////////////////////////
///////////////////////////////////////////////////////////////////////////

document.addEventListener("deviceready", onDeviceReady, true);


$(function () 
{
	var loginuser = localStorage.getItem('login');
   if(loginuser=="vadmin")
   {
		
	}else
	{
	    window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	    return false;
	
	
	}

  $(".captureImage_Wrapper").hide();
  $("#loader").hide();
   $("#delete").hide();
    $("#inclusiveexclusivetax").hide();
	$(".alert-error").fadeOut();
			$(".alert-success").fadeOut();

    screenname = getParameterByName('sName');
    vendor_id = getParameterByName('vendor_id');
    vendor_users_id = getParameterByName('vendor_users_id');
    vendor_type_id = getParameterByName('vendor_type_id');
    location_id = getParameterByName('location_id');
    vendor_session_id = getParameterByName('session_id');
    vendor_name = getParameterByName('vendor_name');
    vendor_user_name = getParameterByName('vendor_user_name');
    UUID = getParameterByName('UUID');
	mobile_number=getParameterByName('mobile_number');

    $("#imageform").attr("action", image_jsp_path);

    closeSuccessMessage();
    closeErrorMessage();
    querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number; //For Passing extra parameters
    $("#vendorname")[0].innerHTML = vendor_name;
    $("#locationname")[0].innerHTML = screenname;
    $("#vendorusername")[0].innerHTML = vendor_user_name;
    $("#vendorid")[0].value = vendor_id;

    document.addEventListener("deviceready", onDeviceReady, true);

    $("#homeicon").click(function () 
    {
        window.location.replace(  "vendor-admin-index.html" + querystr);
    });
    $("#logout").click(function () 
    {

             window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
    });

	

    $("#Back").click(function () {



       NavigateBack();

        
    });
     $("#homeiconback").click(function () 
     {



        $("#Back").trigger('click');

        
    });

    $('#percentage').attr("checked", false);
    $("#amount").attr("checked", true);

    BindEvents();
    //LoadTaxDetails();


    // LoadTaxDetails();







    ///////////////////////////
    /* var uploader = new plupload.Uploader({
    runtimes: 'html5,flash,silverlight,html4',
    browse_button: 'pickfiles', // you can pass in id...
    container: document.getElementById('container'), // ... or DOM Element itself
    url: 'upload.php',
    flash_swf_url: '../js/Moxie.swf',
    silverlight_xap_url: '../js/Moxie.xap',
    unique_names: false,
    multiple_queues: false,
    multi_selection: false,
    rename: false,
    drop_element: 'uploader',

    filters: {
    max_file_size: '10mb',
    mime_types: [
    { title: "Image files", extensions: "jpg,gif,png" },
    { title: "Zip files", extensions: "zip" }
    ]
    },

    init: {
    PostInit: function () {
    document.getElementById('filelist').innerHTML = '';

    document.getElementById('uploadfiles').onclick = function () {

    $("#//console")[0].innerHTML += "<br>uploading..."
    uploader.files[0].name = vendor_item_id + ".jpg";

    uploader.start();
    $("#//console")[0].innerHTML += "done."
    return false;
    };
    },

    FilesAdded: function (up, files) {
    document.getElementById('filelist').innerHTML = '';
    if (up.files.length > 1) { uploader.splice(0, files.length); }
    plupload.each(files, function (file) {
    ////*file.id=itemid;
    ///file.name=itemid;
    ///up.files[0].id=itemid;
    ///up.files[0].name=itemid;
    /// uploader.files[0].id=itemid;
    ///uploader.files[0].name=itemid; 
    $("#//console")[0].innerHTML = "File is waiting to upload.."
    document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
    });
    up.refresh();
    },

    UploadProgress: function (up, file) {
    up.refresh();
    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
    },

    Error: function (up, err) {
    document.getElementById('//console').innerHTML += "\nError #" + err.code + ": " + err.message;
    }
    }
    });



    uploader.init(); */

    ///////////////////////////


});





function CalculateSalesPrice() {
    var salesprice = "";
    var discount = $("#discount")[0].value;
    var actualcost = $("#totcost")[0].value;

    if ($("#percentage")[0].checked == true) {
        var discountvalue = discount * actualcost;
        var discountprice = discountvalue / 100;

        salesprice = actualcost - discountprice;
    }
    else {
        salesprice = actualcost - discount;
    }


    $("#sellingprice")[0].value = salesprice;








}


function isFloatNumber(evt) {
    evt = (evt) ? evt : window.event;

    var charCode = (evt.which) ? evt.which : evt.keyCode;

    var decim = (evt.currentTarget.value.split('.'));

    if (decim.length > 1) {

        if (decim[1].length > 1) {
           if(charCode!=8 && charCode!=46)
		   {
            return false;
			}

        }

    }

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode != 46 && charCode != 35 && charCode != 32) {
            return false;
        }
        else {




            if (charCode == 46) {

                if ((evt.currentTarget.value.split('.')).length > 1) {

                   // return false;
                }

            }

        }
    }
    return true;
}


function isNumber(evt) 
{
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


function BindEvents() {

    $("#addrow-1").click(function () { addTopping(); });
    $("#addcrust-1").click(function () { addCrust(); });
    $("#percentage").click(function () { is_percent = 1; CalculateSalesPrice(); });
    $("#amount").click(function () { is_percent = 0; CalculateSalesPrice(); });
    //$("#savedetails").click(function () { SaveDetails(); });
    $("#inclusive").click(function () { inclusiveoftax = 0; });
    $("#exclusive").click(function () { inclusiveoftax = 1; });
    $('#percentage').attr("checked", false);
    $("#amount").attr("checked", true);


    /* $(document).on("click", "#addrow-1", function () { addTopping(); });
    $(document).on("click", "#addcrust-1", function () { addCrust(); });
    $(document).on("click", "#percentage", function () { is_percent = 1; });
    $(document).on("click", "#amount", function () { is_percent = 0; });
    $(document).on("click", "#savedetails", function () { SaveDetails(); });
    $(document).on("click", "#inclusive", function () { inclusiveoftax = 0; });
    $(document).on("click", "#exclusive", function () { inclusiveoftax = 1; });*/
}



function RestrictVarchar(controle, e, max) {


			  var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
  //          var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		//praveen
        var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40 ||keyCode==58  ||keyCode==41 || keyCode==198  || keyCode==216 || keyCode==197 || keyCode==229 || keyCode==230 || keyCode==248 || keyCode==38||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
        //end
            //document.getElementById("error").style.display = ret ? "none" : "inline";
            
			
			
			
			
			
			if(ret==true)
			{
			
				if (controle.value.length < 3 || controle.value.length > parseInt(max)) {
					showErrorMessage(controle.placeholder + " length should be of Min 3 and Max " + max);
                    

				}
				else {
					closeErrorMessage();
					return ret;
				}
			
			}
			else
			{
			
			
				if (controle.value.length < 3 || controle.value.length > parseInt(max)) {
					showErrorMessage(controle.placeholder + " length should be of Min 3 and Max " + max);
                     //return false;

				}
				else {
					closeErrorMessage();
					return ret;
				}
			   
			
			  return ret;
			
			
			}
			
			
			
			
			
			
			





   /* if (controle.value.length > max) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }

    }*/



    
}


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
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }

    if (controle.value.length > 10) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }
    }

    if ((controle.value.length < 10 || controle.value.length > 10)) {
        showErrorMessage(controle.placeholder + " length should be of 10 digits");
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

function addMessageSpan(controle, message) {

    if (message.trim() == "false") {
       //controle.next("span").remove();
    }
    else {
        showErrorMessage(message);
		//controle.next("span").remove();
        controle.focus();
        //controle.after("<span>" + message + "</span>");
        return false;
    }
}
// Building JSON object to save
function SaveDetails() 
{

	var connection=checkconnection();
    if(connection)
	{
	  
    //if($("#itemName")[0].value==""){addMessageSpan($("#itemName"),"Please Specify Item Name");$("#itemName").focus();$("#itemName").after("<span>Please Specify Item Name</span>"); return false;}else{$("#itemName").next("span").remove();}
    if ($("#itemName")[0].value == "") 
	{
        return addMessageSpan($("#itemName"), "Please Specify Item Name");
    }
    else 
	{
        addMessageSpan($("#itemName"), "false");
    }

    if ($("#itemName")[0].value.length < 3 || $("#itemName")[0].value.length > 30) 
	{
        return addMessageSpan($("#itemName"), "Item name should be of MIN 3 charecters and MAX 30 charecters");
    }
    else 
	{
        addMessageSpan($("#itemName"), "false");
    }
	var itmnam=$("#itemName")[0].value;
	///////////////////////////////itemname validation/////////////////
	///////////////////////////////////////////////////////////////////
		
    //	var regx =/^[ A-Za-z0-9.',/()&+-]*$/;
    //praveen
		var regx =/^[ A-Za-z0-9.',æøÆ:ååÆØÅ/()&+-]*$/;
		//end
		var str1=itmnam.replace(/\s/g, "") ; 
		
		if (regx.test(str1)) 
		{
			
			//return addMessageSpan($("#itemName"), "Please enter valid text");
		}
		else 
		{
			return addMessageSpan($("#itemName"), "Please enter valid item name");
			return false;
		}
	///////////////////////////////itemname validation closed/////////////////
	/////////////////////////////////////////////////////////////////////////
    if (parseFloat($("#totcost")[0].value) < 0) 
	{
        return addMessageSpan($("#totcost"), "Please enter value for total cost");
    }
    else 
	{
        addMessageSpan($("#totcost"), "false");
    }


    var totcost = $("#totcost")[0].value;

    if ($("#discount")[0].value.trim() != "") {
        if (parseFloat($("#discount")[0].value) < 0 || parseFloat($("#sellingprice")[0].value) < parseFloat(0)) { return addMessageSpan($("#discount"), "Invalid discount value"); }
        else {
            addMessageSpan($("#discount"), "false");
        }
    }

    if (parseFloat(totcost) <= 0) {
        return addMessageSpan($("#totcost"), "Make sure total cost is a positive value");
    }
    else {
        addMessageSpan($("#totcost"), "false");
    }

    if ($("#totcost")[0].value.trim() == "") { return addMessageSpan($("#totcost"), "Please enter value for total cost"); }
    if ($("#vat")[0].value.trim() == "") { return addMessageSpan($("#vat"), "please enter values for Tax Details"); }
    if ($("#vat")[0].value.trim().length < 0 || $("#vat")[0].value.length > 5) { return addMessageSpan($("#vat"), "Tax Details should be of MIN 3 digits and MAX 5 digits"); }
    if ($("#servicetax")[0].value.trim() == "") { return addMessageSpan($("#servicetax"), "please enter values for Tax Details"); }
    if ($("#servicetax")[0].value.trim().length < 0 || $("#servicetax")[0].value.length > 5) { return addMessageSpan($("#servicetax"), "Tax Details should be of MIN 3 digits and MAX 5 digits"); }
    if ($("#servicecharge")[0].value.trim() == "") { return addMessageSpan("please enter values for Tax Details"); $("#servicecharge").focus(); return false; }
    if ($("#servicecharge")[0].value.trim().length < 0 || $("#servicecharge")[0].value.length > 5) { return addMessageSpan($("#servicecharge"), "Tax Details should be of MIN 3 digits and MAX 5 digits"); }
    if($("#othertax1")[0].value==""){showErrorMessage("please enter value for Tax Details");return false;}
    if ($("#othertax1")[0].value.trim().length < 0 || $("#othertax1")[0].value.length > 5) { return addMessageSpan($("#othertax1"), "Tax Details should be of MIN 3 digits and MAX 5 digits"); }
    if($("#othertax2")[0].value==""){showErrorMessage("plase enter value for Tax Details");return false;}
    if ($("#othertax2")[0].value.trim().length < 0 || $("#othertax2")[0].value.length > 5) { return addMessageSpan($("#othertax2"), "Tax Details should be of MIN 3 digits and MAX 5 digits"); }
    //if($("#itmdesc")[0].value==""){showErrorMessage("please enter value for description");return false;}var SAVE_JSON = "";
    ItemDetails = [{ UUID: "", sessionid: "", vendorid: "", vendoritemid: "", item_id: "", image: "", categoryid: "", cost: "", itemname: "", is_item_available: "", is_non_vegetarian: "", is_percent: "", Discount: "", VAT: "", servicetax: "", othertax1: "", othertax2: "", sellingprice: "", servicecharge: "", inclusive: "", hastoppings: false, hascrust: false, Crust: [], Toppings: [], TaxDetails: [], description: ""}];
    // Need to dynaqmically add taxes from available tax details on page.
    //var TaxDetails ={"vendor_id":"67892330","taxes":[{"tax_name":"ServiceTax","tax_val":"14","tax_id":"T2"},{"tax_name":"VAT","tax_val":"15","tax_id":"T3"},{"tax_name":"OtherTax1","tax_val":"15","tax_id":"T4"},{"tax_name":"OtherTax2","tax_val":"10","tax_id":"T5"},{"tax_name":"ServiceCharge","tax_val":"10","tax_id":"T7"}]};

    ItemDetails[0].UUID = UUID;
    ItemDetails[0].sessionid = vendor_session_id;
    ItemDetails[0].is_percent = $("#percentage")[0].checked == true ? 1 : 0;
    ItemDetails[0].inclusive = $("#inclusive")[0].checked == true ? 0 : 1;
    ItemDetails[0].is_item_available = $("#chkAvailoabilaty")[0].checked == true ? 1 : 0;
    ItemDetails[0].is_non_vegetarian = $("#chkNonVegetarian")[0].checked == true ? 1 : 0;
    if(TaxDetails.details)
	{
	ItemDetails[0].TaxDetails = TaxDetails.details;
	}
	else
	{
	
	ItemDetails[0].TaxDetails = TaxDetails.TaxDetails;
	
	}
    ItemDetails[0].item_id = itemid;

    ItemDetails[0].image = $("#imgsrss").attr('src');


    ItemDetails[0].description = jQuery("#itmdesc").val();
	var val=jQuery("#itmdesc").val();
	///////////////////////////////itemname description/////////////////
	///////////////////////////////////////////////////////////////////
		var val=jQuery("#itmdesc").val();
        //var regx =/^[ A-Za-z0-9.',/()&+-]*$/;
        //	var regx =/^[ A-Za-z0-9.',/()&+-]*$/;
		var regx =/^[ A-Za-z0-9.',æøÆ:ååÆØÅ/()&+-]*$/;
		//end
		var str1=val.replace(/\s/g, "") ; 
		console.log(regx.test(str1));
		if (regx.test(str1)) 
		{
			
			//return addMessageSpan($("#itemName"), "Please enter valid text");
		}
		else 
		{
			return addMessageSpan($("#itmdesc"), "Please enter valid description");
			return false;
		}
	///////////////////////////////itemname description//////////////////
	/////////////////////////////////////////////////////////////////////////

    // Adding Item Details like name,vendor id, vendor item id
    $("div#itemdetails.addfieldsRow").find("input").each(function (topidx, field) {
        if (field.id == "vendoritemid") {

            if (field.value != "") {
                ItemDetails[0].vendoritemid = field.value;
            }
            else {
                ItemDetails[0].vendoritemid = 0;
            }
        }
        if (field.id == "vendorid")
            ItemDetails[0].vendorid = field.value;
        if (field.id == "itemName")
            ItemDetails[0].itemname = field.value;
        if (field.id == "cat_id")
            ItemDetails[0].categoryid = field.value;

    });

    // Adding Item Cost Details
    $("div#itemcostdetails.addfieldsRow").find("input").each(function (topidx, field) 
	{
        if (field.id == "discount")
            ItemDetails[0].Discount = (field.value == "") ? "0.00" : field.value;

        if (field.id == "sellingprice")
            ItemDetails[0].sellingprice = (field.value == "") ? "0.00" : field.value;

        if (field.id == "totcost")
            ItemDetails[0].cost = (field.value == "") ? "0.00" : field.value;

    });


    // Adding Item Cost Details
    $("div#itemtaxdetails.addfieldsRow").find("input").each(function (topidx, field) {


        ItemDetails[0].TaxDetails[topidx].tax_val = field.value;

       


    });


   


    if ($("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value == "") {

        $("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value = "Topping"
    }

    if ($("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value == "") {

        $("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value = "Crust"
    }

    var done = false;

    //Adding Topping
    if ($("div#top1.addfieldsRow.margin-t20").find("#toppingbutton").length > 0) {

        $("div#top1.addfieldsRow.margin-t20").find(".toppingRow").each(function (topidx, toppingRow) {
            var toppingsArray = [];
            done = false;
            //if (topidx > 0 && $("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value) 
            {
                toppingsArray.push("type:" + ($("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value));
            }


            if (toppingRow.id == "") {

                done = true;

            }

             var topadded=true;
			 
            $("tr#" + toppingRow.id + "." + toppingRow.className).find('input').each(function (topdetidx, input) {
                if (input.value || input.type == 'hidden') {


                    switch (topdetidx) {

                        case 0:
                            //                            if (topidx == 0) {
                            //                                toppingsArray.push("type:" + input.value);
                            //                            }
                            //                            else 
                            // {
                             
                           // if(input.value.trim()==""){showErrorMessage("Toppping Name is required"); event.stopimmediatepropagation();}
                            //if(input.value.length<3||input.value.length>30){showErrorMessage("Topping Name should be of MIN 3 charecters and MAX 30 charecters"); event.stopimmediatepropagation();}
                            toppingsArray.push("name:" + input.value);
							//topadded=true;
                            //}
                            break;
                        case 1:
                            //                            if (topidx == 0) {
                            //                                toppingsArray.push("name:" + input.value);
                            //                            }
                            //                            else
                            //{

                            if (input.value != "") {
                                toppingsArray.push("id:" + input.value);
                            }
                            else {
                                toppingsArray.push("id:0");

                            }
                            // }
                            break;
                        case 2:
                            //                            if (topidx == 0) {
                            //                                if (input.value != "") {
                            //                                    toppingsArray.push("id:" + input.value);
                            //                                }
                            //                                else {
                            //                                    toppingsArray.push("id:0");

                            //                                }
                            //                            }
                            //                            else {
                            var costValue = (input.value == "") ? "0.00" : input.value;
                            //if(costValue.trim()==""){showErrorMessage("Topping Cost is required"); event.stopimmediatepropagation();}
                           // if(parseFloat(costValue)<=parseFloat("0.00")){showErrorMessage("Topping Cost is required"); event.stopimmediatepropagation();}
                            toppingsArray.push("cost:" + costValue);
							

                            //}
                            break;
                        case 3:

                            //toppingsArray.push("cost:" + input.value);

                            break;
                    }


                    //toppingsArray.push(input.value);
                }
                else {
                    topadded=false;
                    toppingsArray = [];
                }
            });
            if ((toppingsArray.length > 1) && (done == false)) {
                if(toppingsArray.length==4)
				{
				
				if(toppingsArray[1].length>30)
				{
				showErrorMessage("Topping Name should be of MIN 3 charecters and MAX 30 charecters"); event.stopimmediatepropagation();
				
				}
				else
				{
				 closeErrorMessage();
				ItemDetails[0].hastoppings = true;
                ItemDetails[0].Toppings.push(toppingsArray);
                done = true;
				}
				}
				else
				{
				
				  showErrorMessage("Please provide valid topping detials"); 
				  event.stopimmediatepropagation();
				}
            }
        });
    }


    done = false;

    //Adding Crust
    if ($("div#cru1.addfieldsRow").find("#topcrustbutton").length > 0) {

        $("div#cru1.addfieldsRow").find(".crustrow").each(function (crustidx, toppingRow) {
            var crustArray = [];
            done = false;
            //if (crustidx > 0 && $("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value != '') 
            {
                crustArray.push("type:" + ($("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value));
            }


            if (toppingRow.id == "") {

                done = true;

            }
              var crustadded=true;

            $("tr#" + toppingRow.id + "." + toppingRow.className).find('input').each(function (crustdetidx, input) {

                if (input.value || input.type == 'hidden') {
                    switch (crustdetidx) {
                        case 0:
						
						
						    //if(input.value.trim()==""){showErrorMessage("Crust Name is required"); event.stopimmediatepropagation();}
                            //if(input.value.length<3||input.value.length>30){showErrorMessage("Crust Name should be of MIN 3 charecters and MAX 30 charecters"); event.stopimmediatepropagation();}
                            crustArray.push("name:" + input.value);
							//crustadded=true;
                            break;
                        case 1:
                            if (input.value != "") {
                                crustArray.push("id:" + input.value);
                            }
                            else {
                                crustArray.push("id:0");
                            }
                            break;
                        case 2:
                            var costValue = (input.value == "") ? "0.00" : input.value;
							//if(costValue.trim()==""){showErrorMessage("Crust Cost is required"); event.stopimmediatepropagation();}
                           // if(parseFloat(costValue)<=parseFloat("0.00")){showErrorMessage("Crust Cost is required"); event.stopimmediatepropagation();}
                            crustArray.push("cost:" + costValue);
                            break;
                        case 3:
                            break;
                    }

                }
                else {
                    crustadded=false;
                    crustArray = [];
                }
            });
            if ((crustArray.length > 1) && (done == false)) {
                
				if(crustArray.length==4)
				{
				 if(crustArray[1].length>30)
				 {
				 showErrorMessage("Crust Name should be of MIN 3 charecters and MAX 30 charecters"); event.stopimmediatepropagation();
				 }
				 else
				 {
				closeErrorMessage();
				ItemDetails[0].hascrust = true;
                ItemDetails[0].Crust.push(crustArray);
                done = true;
				}
				}
				else
				{
				
				showErrorMessage("Please provide valid crust details"); event.stopimmediatepropagation();
				
				
				}
            }
        });
    }

    SAVE_JSON = JSON.stringify(ItemDetails);
    SaveItemDetailsData(SAVE_JSON);
	}else
	{
	   $("#errornet1").show();	
	
	}



}

/*
//Calling Save Service and Passing Json object
function SaveItemDetailsData(SAVE_JSON) {


    $.ajax({
        type: 'GET',
        url: url + '/oms1/saveitems?itemsjson=' + SAVE_JSON,
        //change service name to call actual service in order to save data or update data
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
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
			
			testdata=eval(testdata);
			
			if(testdata=="exists")
			{
			
			alert("Item already exists");
			window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);
			
			}
			if ((testdata != undefined) && (testdata != 'false') && (testdata!="exists")) {

                //var confirm=window.confirm("Item added Successfully, Do you want to navigate to previous page?(Yes/No)");
                alert("Item saved successfully");
                //if(confirm)
              
                    window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);
               
            }
            else {

                showErrorMessage("there is an error in saving details,Please check topping and crust details properly");

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
}*/

//////////////////////////itemjson convert into post method////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function SaveItemDetailsData(itemsjson) 
{
		
	
	var testdata;
	var categoryjson = {
        'itemsjson': itemsjson,
    };
    var itemsjson = JSON.stringify(categoryjson);
	$.ajax({
            type: 'POST',
            dataType: 'json',
            data: itemsjson,
            async: true,
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/oms1/saveitems',
            timeout: 7000,
            beforeSend: function()
            {
                        $("#loaderforsearch").show();
            },
            complete: function()
            {
                        $("#loaderforsearch").hide();
            },
            success: function(response) 
			{

				var testdata = JSON.stringify(response);
			
				testdata=eval(testdata);
				
				if(testdata=="exists")
				{
				
				alert("Item already exists");
				window.location.replace( "vendor-admin-add-edit-item.html" + querystr);
				
				}
				if ((testdata != undefined) && (testdata != 'false') && (testdata!="exists")) 
				{

					//var confirm=window.confirm("Item added Successfully, Do you want to navigate to previous page?(Yes/No)");
					alert("Item saved successfully");
					//if(confirm)
				  
						window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);
				   
				}
				else 
				{

					showErrorMessage("there is an error in saving details,Please check topping and crust details properly");

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

//////////////////////////itemjson convert into post method////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//getting queary string by name
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*uploader.bind('FilesAdded', function(up, files) {
if (files.length > 1) uploader.splice(1, files.length - 1);

$('#filelist').html("");
$.each(uploader.files, function(i, file) {
$('#filelist').append(
'<div id="' + file.id + '">' +
file.name + ' (' + plupload.formatSize(file.size) + ') <b></b>' +
'</div>');
});
 
up.refresh(); // Reposition Flash/Silverlight
});*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Onload of page get query string params
$(window).bind("load", function () {
	var loginuser = localStorage.getItem('login');
    if(loginuser=="vadmin")
    {
			  //User Validation Related//
		screenname = getParameterByName('sName');
		vendor_users_id = getParameterByName('vendor_users_id');
		vendor_type_id = getParameterByName('vendor_type_id');
		location_id = getParameterByName('location_id');
		vendor_session_id = getParameterByName('session_id');
		vendor_id = getParameterByName('vendor_id');
		vendor_name = getParameterByName('vendor_name');
		vendor_user_name = getParameterByName('vendor_user_name');
		UUID = getParameterByName('UUID');
		//User Validation Related//
		$(".alert_close").click(function(){
		
		$(".alert-error").hide();
		
		});

		$('#percentage').attr("checked", false);
		$("#amount").attr("checked", true);
		itemid = (getParameterByName('item_id') == "") ? 0 : getParameterByName('item_id'); //getParameterByName('itemid')

		if (itemid != 0) {

			$("#itemName").attr("disabled", true);


		}


		vendor_item_id = getParameterByName('vendor_items_id');
		itemname = getParameterByName('itemname');
		itemvendorid = getParameterByName('itemvendorid');
		cat_id = getParameterByName("cat_id");
		

		$("#cat_id")[0].value = cat_id;
		$("#itemName")[0].value = itemname;
		$("#vendorid")[0].value = vendor_id;

		$("#item_id")[0].value = (itemid == "") ? 0 : itemid;
			

		if ((vendor_item_id != '' && itemvendorid != '') && (itemvendorid == vendor_id)) {
			$("#vendoritemid")[0].value = vendor_item_id;

			GetItemDetails(itemvendorid, vendor_item_id);
		}
		else
		{
		
		LoadPreexistingToppingsAndCrust();
		
		}
	   
		
	}else
	{
	    window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	    return false;
	
	
	}
 

    


});

// Remove crust on click of - sign for crust
function removecrust(element) {

    var cid = ((element.id).split('-'))[1];
    var crustid = $("#topcrustid-" + cid)[0].value;

    var DELETE_JSON = "";

    ToppingCrustDeletionJson = [{ vendor_type_id: "", vendor_id: "", vendor_users_id: "", vendor_items_id: "", topping_id: "", crust_id: "", session_id: "", UUID: ""}]

    ToppingCrustDeletionJson[0].vendor_type_id = vendor_type_id;
    ToppingCrustDeletionJson[0].vendor_id = vendor_id;
    ToppingCrustDeletionJson[0].vendor_users_id = vendor_users_id;
    ToppingCrustDeletionJson[0].vendor_items_id = vendor_item_id;
    ToppingCrustDeletionJson[0].topping_id = 0;
    ToppingCrustDeletionJson[0].crust_id = crustid;
    ToppingCrustDeletionJson[0].session_id = vendor_session_id;
    ToppingCrustDeletionJson[0].UUID = UUID;
    DELETE_JSON = JSON.stringify(ToppingCrustDeletionJson);
    var isdeleted = DeleteToppingOrCrust(DELETE_JSON);



    $("#crustrow-" + cid).remove();

    /* $("#removecrustrow-" + cid).remove();
    $("#topcrust-" + cid).remove();
    $("#topcrustcost-" + cid).remove();

    $("#topcrustid-" + cid).remove();
    $("#toppingr-" + cid).remove();*/
    //vendorid,categoryid,itemid
}

//Remove toppings on click of - sign for toppings
function removetopping(element) {

    var cid = ((element.id).split('-'))[1];

    var topid = $("#topid-" + cid)[0].value;
    var DELETE_JSON = "";
    ToppingCrustDeletionJson = [{ vendor_type_id: "", vendor_id: "", vendor_users_id: "", vendor_items_id: "", topping_id: "", crust_id: "", session_id: "", UUID: ""}]

    ToppingCrustDeletionJson[0].vendor_type_id = vendor_type_id;
    ToppingCrustDeletionJson[0].vendor_id = vendor_id;
    ToppingCrustDeletionJson[0].vendor_users_id = vendor_users_id;
    ToppingCrustDeletionJson[0].vendor_items_id = vendor_item_id;
    ToppingCrustDeletionJson[0].topping_id = topid;
    ToppingCrustDeletionJson[0].crust_id = 0;
    ToppingCrustDeletionJson[0].session_id = vendor_session_id;
    ToppingCrustDeletionJson[0].UUID = UUID;
    DELETE_JSON = JSON.stringify(ToppingCrustDeletionJson);
    var isdeleted = DeleteToppingOrCrust(DELETE_JSON);

    $("#toppingrow-" + cid).remove();
    /* $("#removerow-" + cid).remove();
    $("#toptxt-" + cid).remove();
    $("#topcost-" + cid).remove();
    $("#topid-" + cid).remove();
    $("#crust-" + cid).remove();*/
}

function DeleteToppingOrCrust(DELETE_JSON) {

    $.ajax({
        type: 'GET',
        url: url + '/oms1/deletetoppingcrust?itemsjson=' + DELETE_JSON,
        //change service name to call actual service in order to save data or update data
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
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
            if (testdata == "true") {
                //window.location = "vendor-admin-add-edit-item.html" + querystr;
            }
            else {

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

//Adding new crust row when clicked + sign for crust
function addCrust() {

    var current = crusst;
    crusst++
    if ($("a#addcrust-" + current + ".add-plus").length == 1) {
        $("#addcrust-" + current).remove();
        $("#crustaction-" + current).append("<a id='removecrustrow-" + current + "' onclick='removecrust(this);' class='add-min'></a>");
    }

    $('<tr id="crustrow-' + crusst + '" class="crustrow">').append(
								$("<td align='left' valign='middle'>").html("<input type='text' id='topcrust-" + crusst + "'  onkeypress='return RestrictVarchar(this,event,15);' class='crust'  placeholder='Add Crust' ><input type='hidden' id='topcrustid-" + crusst + "' >"),
                                $("<td align='left' valign='middle'>").html("<input type='number'   id='topcrustcost-" + crusst + "' onkeypress='return isNumber(event);' placeholder='0' >"),
                                $("<td align='left'  id='crustaction-" + crusst + "' valign='middle'>").html("<a id='addcrust-" + crusst + "' class='add-plus'></a>")

							).appendTo('#tblcrust');
							
							$("#topcrust-" + crusst).autocomplete(autocrusts);

    $("a#addcrust-" + crusst + ".add-plus").click(function () { addCrust(); });
}


// Rest all tax fields to 0 when clicked on Inclusive.
function resetFields() {

    $.each($("#taxdetailstable")[0].rows, function (index, value) {
        $.each(value.cells, function (index, value) {
            $.each(value.children, function (index, value) {
                if (value.type == "text") {
                    value.value = 0;
                }
            });
        });

    });
}


function getCategoryHirarchy()
{



 cat_id = getParameterByName("cat_id");
	
	$.ajax({
        type: 'GET',
        url: url + '/oms1/getcategoryheirarchy?category_id=' + cat_id,
        //change service name to call actual service in order to save data or update data
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
			//LoadPreexistingToppingsAndCrust();
        },
        success: function (response) {
			var find = '>';
			var re = new RegExp(find, 'g');
           
           $("#hirarchytext")[0].innerHTML=response.result.replace(re,"<span class='breadcrumbarrow'> > </span>");

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


//Auto populate taxes ///////////////
function LoadTaxDetails() {

    
	if(!edititem)
	{
	var htmloptions = "";
    var taxdetailsno = 2;
    $.ajax({
        type: 'GET',
        url: url + '/admin/vendortaxvalues?operation=getVendorTaxes&vendor_id=' + vendor_id + '&VAT=""&service_tax=""&service_charge=""&other_tax1=""&other_tax2=""',
        //contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'vendortaxvalues',
        dataType: 'jsonp',
        jsonp: false,
		beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
			getCategoryHirarchy();
        },
        success: function (data) {

            //data=[{"vendor_id": "5000214568","taxes": [{"tax_name": "Item","tax_val": "2"},{"tax_name": "ServiceTax","tax_val": "3"},{"tax_name": "VAT","tax_val": "4"},{"tax_name": "OtherTax1","tax_val": "5"},{"tax_name": "OtherTax2","tax_val": "6"}]}];
            // ItemDetails[0].servicetax =(field.value=="")?"0.00":field.value;
            //console.log((data.taxes == undefined) ? "8888888888888" : "1111111111111111");



            var details = data.details.sort(function (a, b) { return parseInt(a.tax_order) - parseFloat(b.tax_order) });



            for (var i = 1; i < (data.details.length + 1); i++) {

                if (i < 6) {
                    $('input[name=tax' + i + ']')[0].value = data.details[i - 1].tax_val;
                    $("#taxlabel" + i)[0].textContent = data.details[i - 1].tax_name +" (%)";
                }

                //incase there are  more than 5 tax details
                /*else
                {
				  
                var taxdettext='<td align="left" valign="middle" width="33%">';
                taxdettext=taxdettext+'<label id="taxlabel'+i+'" class="fieldHead">'+data.details[i-1].tax_name+'</label>';
                taxdettext=taxdettext+'<input type="text" id="'+data.details[i-1].tax_name+'" name="tax'+i+'"  onkeypress="return isFloatNumber(event);" placeholder="0.00">';
                taxdettext=taxdettext+'</td>';
				  
                $("#taxdetails-"+taxdetailsno).append(taxdettext);
				 
				 
                }
				 
                if(i>0)
                {
                var is3rd= (i-1)%3;
					 
                if(is3rd==0)
                {
					 
                taxdetailsno++;
                $("#taxdetailstable").append('<tr id="taxdetails-'+taxdetailsno+'" ></tr>');
					 
					 
                }
                } */



            }

            data.details = details;

            TaxDetails = data;

            /*	$("#vat")[0].value = (data[0].VAT == undefined) ? "0.00" : data[0].VAT;
            $("#servicetax")[0].value = (data[0].service_tax == undefined) ? "0.00" : data[0].service_tax;
            $("#servicecharge")[0].value = (data[0].service_charge == undefined) ? "0.00" : data[0].service_charge;
            $("#othertax1")[0].value = (data[0].other_tax1 == undefined) ? "0.00" : data[0].other_tax1;
            $("#othertax2")[0].value = (data[0].other_tax2 == undefined) ? "0.00" : data[0].other_tax2;*/

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
	else
	{
	
	getCategoryHirarchy();
	
	}





}




//End of Auto populate taxes ///////////////

//Adding new Topping row when clicked + sign for Topping
function addTopping() {

    var current = topp;
    topp++
    if ($("a#addrow-" + current + ".add-plus").length == 1) {
        $("#addrow-" + current).remove();
        $("#topaction-" + current).append("<a  id='removerow-" + current + "' onclick='removetopping(this);' class='add-min'></a>");
    }

    $('<tr id="toppingrow-' + topp + '" class="toppingRow">').append(
								$("<td align='left' valign='middle'>").html("<input type='text' id='toptxt-" + topp + "'  onkeypress='return RestrictVarchar(this,event,15);' class='topping' placeholder='Add Topping' ><input type='hidden' id='topid-" + topp + "' >"),
                                $("<td align='left' valign='middle'>").html("<input type='tel'  id='topcost-" + topp + "'  placeholder='0' >"),
                                $("<td align='left'  id='topaction-" + topp + "' valign='middle'>").html("<a  id='addrow-" + topp + "' class='add-plus'></a>")

							).appendTo('#tbltoppings');
							
							$("#toptxt-" + topp).autocomplete(autotoppings);

    $("a#addrow-" + topp + ".add-plus").click(function () { addTopping(); });


}

function GetItemDetails(itemvendorid, vendor_item_id) {

    $.ajax({
        type: 'GET',
        url: url + '/oms1/editItem?vid=' + itemvendorid + '&vendor_items_id=' + vendor_item_id,
        contentType: 'application/json; charset=utf-8',
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        beforeSend: function () {
            $("#loader").show();
        },
        complete: function () {
            $("#loader").hide();
			//getCategoryHirarchy();
			LoadPreexistingToppingsAndCrust();
        },
        success: function (response) {
      
            var result = response;
            this.Data = result;
			edititem=true;

            //console.log("res==" + result);

            var varres1 = JSON.stringify(result);
            //console.log("res1==" + varres1);


            $("#chkAvailoabilaty")[0].checked = this.Data[0].is_item_available == 1 ? true : false;
            $("#discount")[0].value = (typeof (this.Data[0].Discount) != undefined) ? this.Data[0].Discount : "NoData";

            $("#totcost")[0].value = (typeof (this.Data[0].cost) != undefined) ? this.Data[0].cost : "NoData";
            if (typeof (this.Data[0].is_percent) != undefined) {
                $("#percentage")[0].checked = this.Data[0].is_percent == 1 ? true : false;
                $("#amount")[0].checked = this.Data[0].is_percent == 0 ? true : false;
            }

            $("#itemName")[0].value = this.Data[0].itemname;  
            $("#itmdesc")[0].value = this.Data[0].description;
            ////Data related to tax information
            $("#vendoritemid")[0].value = vendor_item_id; //(typeof (this.Data[0].item_id) != undefined) ? this.Data[0].item_id : 0;
            $("#cat_id")[0].value = (typeof (this.Data[0].category_id) != undefined) ? this.Data[0].category_id : 0;
            $("#sellingprice")[0].value = (typeof (this.Data[0].selling_price) != undefined) ? this.Data[0].selling_price : 0;
            $("#vat")[0].value = (typeof (this.Data[0].VAT) != undefined) ? this.Data[0].VAT : "NoData";
            $("#servicetax")[0].value = (typeof (this.Data[0].service_tax) != undefined) ? this.Data[0].service_tax : "NoData";
            $("#servicecharge")[0].value = (typeof (this.Data[0].service_charge) != undefined) ? this.Data[0].service_charge : "NoData";
            $("#othertax1")[0].value = (typeof (this.Data[0].other_tax1) != undefined) ? this.Data[0].other_tax1 : "NoData";
            $("#othertax2")[0].value = (typeof (this.Data[0].other_tax2) != undefined) ? this.Data[0].other_tax2 : "NoData";
            
			//edit image functionality..........................//  
			
            var imgsrc=this.Data[0].image;
		
            //var dummyimagsrc="images/dummy.jpg";
            if(imgsrc!="")
            {
			   $(".captureImage_Wrapper").show();
               $('#imgsrss').attr("src", this.Data[0].image);
			}
			else
			{
			  $(".captureImage_Wrapper").hide();
			
			}
          
			
			 //Delete button added in when am editing item image
			  
			 var imagesrc=this.Data[0].image;
			    
			 if(imagesrc=="" ||imagesrc== null ||imagesrc== undefined)
            {
       
              $("#delete").hide();
            
            }
            else
            {
              
                $("#delete").show();
            
            }
           
			$("#exclusive")[0].checked = this.Data[0].inclusive == 0 ? false : true;
			$("#chkNonVegetarian")[0].checked =this.Data[0].is_non_vegetarian == 0 ? false : true;
			
			
			var EditTaxDetails=this.Data[0].TaxDetails;
			
			
			
			var details = this.Data[0].TaxDetails.sort(function (a, b) { return parseInt(a.tax_order) - parseFloat(b.tax_order) });

            for (var i = 1; i < (this.Data[0].TaxDetails.length + 1); i++) {

                if (i < 6) {
                    $('input[name=tax' + i + ']')[0].value = this.Data[0].TaxDetails[i - 1].tax_val;
                    $("#taxlabel" + i)[0].textContent = this.Data[0].TaxDetails[i - 1].tax_name+" (%)";
					
                }

                //incase there are  more than 5 tax details
                /*else
                {
				  
                var taxdettext='<td align="left" valign="middle" width="33%">';
                taxdettext=taxdettext+'<label id="taxlabel'+i+'" class="fieldHead">'+data.details[i-1].tax_name+'</label>';
                taxdettext=taxdettext+'<input type="text" id="'+data.details[i-1].tax_name+'" name="tax'+i+'"  onkeypress="return isFloatNumber(event);" placeholder="0.00">';
                taxdettext=taxdettext+'</td>';
				  
                $("#taxdetails-"+taxdetailsno).append(taxdettext);
				 
				 
                }
				 
                if(i>0)
                {
                var is3rd= (i-1)%3;
					 
                if(is3rd==0)
                {
					 
                taxdetailsno++;
                $("#taxdetailstable").append('<tr id="taxdetails-'+taxdetailsno+'" ></tr>');
					 
					 
                }
                } */



            }

            this.Data[0].TaxDetails = details;

            TaxDetails = this.Data[0];



            if (typeof (this.Data[0].inclusive) != undefined) {
                $("#inclusive")[0].checked = this.Data[0].inclusive == 0 ? true : false;
                $("#exclusive")[0].checked = this.Data[0].inclusive == 0 ? false : true;
            }

            ////////////////////////////////

            if (this.Data[0].Topping.length > 0) {

                $.each(this.Data, function (index, value) {

                    $.each(value, function (index, value1) {

                        if (index == "Topping") {
                            $.each(value1, function (index, value2) {

                                if (topingsidx > 1) {

                                    addTopping();
                                }
                                if (value1[topingsidx].length > 2) {
                                    if (isheaderadded == false) {
                                        $("#toppingbutton")[0].value = value1[topingsidx][0];
                                        isheaderadded = true;
                                    }
                                    $("#toptxt-" + topingsidx)[0].value = value1[topingsidx][1];
                                    $("#topcost-" + topingsidx)[0].value = value1[topingsidx][2];
                                    $("#topid-" + topingsidx)[0].value = value1[topingsidx][3];
                                    topingsidx++
                                }
                                else {
                                    $("#toptxt-" + topingsidx)[0].value = value1[topingsidx][0];
                                    $("#topcost-" + topingsidx)[0].value = value1[topingsidx][1];
                                    $("#topid-" + topingsidx)[0].value = value1[topingsidx][2];
                                    topingsidx++
                                }
                            });
                        }
                    });
                });
            }

            if (this.Data[0].Crust.length > 0) {

                $.each(this.Data, function (index, value) {

                    $.each(value, function (index, value1) {

                        if (index == "Crust") {
                            $.each(value1, function (index, value2) {

                                if (crustidx > 1) {
                                    addCrust();
                                }

                                if (value1[crustidx].length > 2) {
                                    if (iscrustheaderadded == false) {
                                        $("#topcrustbutton")[0].value = value1[crustidx][0];
                                        iscrustheaderadded = true;
                                    }
                                    $("#topcrust-" + crustidx)[0].value = value1[crustidx][1];
                                    $("#topcrustcost-" + crustidx)[0].value = value1[crustidx][2];
                                    $("#topcrustid-" + crustidx)[0].value = value1[crustidx][3];
                                    crustidx++
                                }
                                else {
                                    $("#topcrust-" + crustidx)[0].value = value1[crustidx][0];
                                    $("#topcrustcost-" + crustidx)[0].value = value1[crustidx][1];
                                    $("#topcrustid-" + crustidx)[0].value = value1[crustidx][2];
                                    crustidx++
                                }
                            });
                        }
                    });
                });
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


////////////////////////////////////////////////////////////////////////////
// IMAGE UPLOAD FUNCTIONALITY //
////////////////////////////////////////////////////////////////////////////
// A button will call this function
// To capture photo


 var pictureSource;   // picture source
 var destinationType; // sets the format of returned value
        
function capturePhotoEdit() 
{
              // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
              navigator.camera.getPicture(takephoto, 
              onFail, 
              { 
	              quality: 50,
	              correctOrientation: true,
	    		  targetWidth: 300,
	              targetHeight: 300,
	              allowEdit: false, 
	              saveToPhotoAlbum: false,
	              destinationType: destinationType.FILE_URI
              });
}


function getPhoto(source, crop) 
{
           
              // Retrieve image file location from specified source
              navigator.camera.getPicture(uploadPhoto, onFail, 
              { 
                destinationType: destinationType.FILE_URI, 
                allowEdit: crop,
                correctOrientation: true,
                quality: 50,
   			    targetWidth: 300,
                targetHeight: 300,
                sourceType: source 
               });
}
 
function uploadPhoto(imageURI) 
{

   var imaguri1=imageURI.split('?')[0];
  

   document.getElementById("imgsrss").style.display  = "block";
     var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imaguri1.substr(imaguri1.lastIndexOf('/') + 1) ;
    options.chunkedMode = false;
    options.headers =
    {
    	Connection: "close"
	}
    options.mimeType = "text/plain";

    var params = new Object();

    options.params = params;

    var ft = new FileTransfer();
   
    ft.upload(imaguri1, encodeURI(url+"/admin/file/uploadimage"), win, fail1, options);
}

 function onFail(message) 
 {
              alert('Failed because: ' + message);
 }
		

		
		
function takephoto(imageURI) 
{
    
    var a = imageURI.substr(imageURI.lastIndexOf('/') + 1);

    document.getElementById("imgsrss").style.display  = "block";

    var options = new FileUploadOptions();
    options.chunkedMode = false;
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    
    options.mimeType = "text/plain";

    var params = new Object();
    options.headers = 
    {
    	Connection: "close"
	}

    options.params = params;

    var ft = new FileTransfer();
     
    ft.upload(imageURI, encodeURI(url+"/admin/file/uploadimage"), win1, fail, options);
    
}
function win(r) 
{
      $(".captureImage_Wrapper").show();
    document.getElementById("imgsrss").src = "";
 
     document.getElementById("imgsrss").style.display  = "block";
     document.getElementById("delete").style.display  = "block";

    var srcc = r.response;
    //console.log("Code = " + r.responseCode);
    //console.log("Response = " + r.response);
    //console.log("Sent = " + r.bytesSent);
    var file = srcc.substr(srcc.lastIndexOf('/'));

    var imgsrcapp = r.response;
     document.getElementById("omsimage").value = imgsrcapp;
   	 document.getElementById("imgsrss").src = imgsrcapp;
        
       
        
    
  
    
}
function win1(r) 
{
      $(".captureImage_Wrapper").show();
    document.getElementById("imgsrss").src = "";
    document.getElementById("imgsrss").style.display  = "block";
    document.getElementById("delete").style.display  = "block";
	var srcc = r.response;
    //console.log("Code = " + r.responseCode);
    //console.log("Response = " + r.response);
    //console.log("Sent = " + r.bytesSent);
    var file = srcc.substr(srcc.lastIndexOf('/'));
    var imgsrcapp1 = r.response;
    document.getElementById("omsimage").value = imgsrcapp1;
    document.getElementById("imgsrss").src = imgsrcapp1;
}
function fail(error) 
{
    alert("Please try again");
    //console.log("upload error source " + error.source);
    //console.log("upload error target " + error.target);
}
function fail1(error) 
{
    alert("Please try again");
    //console.log("upload error source " + error.source);
    //console.log("upload error target " + error.target);
}
function deleteimage()
{
    var r = confirm("Are you sure want to delete image?");
	if (r == true) 
	{
	    document.getElementById("omsimage").value="";
        document.getElementById("imgsrss").src="";

        document.getElementById("imgsrss").style.display  = "none";
        document.getElementById("delete").style.display  = "none";
	} 
	


}


///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
 function cordovaready()
{

 networkState = navigator.connection.type;   	

}  
function checkconnection()
{
	try 
    {
	       document.addEventListener("deviceready", cordovaready, false); 
		   $("#loader").hide();
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
function network()
{
	 $("#errornet2").hide();	
	 $("#errornet1").hide();

}
		
		
