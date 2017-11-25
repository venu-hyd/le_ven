var vendoridpinloaded = false;
localStorage.clear();
function vendornewformsubmit() {
   
    var validatecpathca = ValidCaptcha();
    if (validatecpathca) {
        callVendorVCPageforvendorpin(UUID, vendor_id, mobile)
        $('.cmismatch').hide();
    } else {
        //  alert('Entered Captcha is wrong');
        $('.cmismatch').show();
        DrawCaptcha();
        $('#loginCaptchaCode').val('');
    }
}

function callVendorVCPageforvendorpin(UUID, vendor_id, mobile) {
    var vendorpin = $.trim($("#verficationpin").val());
    var vendor_id_data = $.trim($("#vendorid").val());
    $.ajax({
        type: 'GET',
        url: url + '/registeredvendordevice?UUID=' + UUID + '&mobile_number=' + mobile + '&verification_code=' + vendorpin + '&vendor_id=' + vendor_id_data+ '&deviceName=' + deviceName+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel,
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        timeout: 10000,
			 async: true,
        beforeSend: function() {
            $("#loader").show(); 
        },
        complete: function() {
			$("#loader").hide();
        },
        success: function(response) {
            var responsevalue = response.UUID;
            if (responsevalue) {
                
                checkCaptchaforvendorpin(responsevalue,mobile);
            } else {
                //alert('Invalid Data Entered');
                //location.reload();
                $('#vendoridpin').popup('open')
            }
        },
        error: function(x, t, m) {
            if (t === "timeout") {
                alert("got timeout , please try again");
            } else {}
        }
    });
	return false;
}
$(document).on('click', '#vendorpinpage .vendoridpinclose', function(event) {
    $('#vendoridpin').popup('close');
    DrawCaptcha();
    $('#loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});
$(document).on('click', '#vendorpinpage #vendoridpin-screen', function(event) {
    $('#vendoridpin').popup('close');
    DrawCaptcha();
    $('#loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});



$(document).on('click', '#vendorpinpage .iconPinReload', function(event) {
if (confirm("Regenerate the Verfication Pin?") == true) {
	var usertype = 'vendor';


 $.ajax({
      type: 'GET',
      url: url + '/generateVcode?user_id=' + vendor_id + '&usertype=' + usertype+ '&mobile_num=' + mobile,
      jsonpCallback: 'jsonCallback',
      cache: false,
      dataType: 'jsonp',
      cache: false,
      timeout: 10000,
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
      success: function(response) {
        var res = response.result;
        if (res = 'true') {
        
		alert('Operation successfully completed');

        }
		else
						{

			alert('Operation Failed , Please try again');

						}
      },
      error: function(x, t, m) {
        if (t === "timeout") {
          alert("got timeout , please try again");
        } else {}
      }
    });
  }

return false ;




});



function checkCaptchaforvendorpin(responsevalue,vmobilenum) {
    vfcode = $("#verficationpin").val(); //this is verification code
    var str1 = removeSpaces(document.getElementById('randomfield').textContent); // $("#randomfield").html(); //this is captcha image
    var str2 = removeSpaces(document.getElementById('loginCaptchaCode').value); // $("#randomfield").html(); //this is captcha image //$("#txtcode").val(); // This is where user enters captcha
    //deviceUUID = "5a8322251f3d3fb3";
    var vendor_session_id = "";
    //var cpatchajson = '{"catchaString":"' + str1 + '",' + '"value":"' + str2 + '",' + '"code":"' + vfcode + '"}';
    var cpatchajson = '{"catchaString":"' + str1 + '",' + '"value":"' + str2 + '",' + '"UUID":"' + responsevalue + '","session_id":"' + vendor_session_id + '",' + '"code":"' + encodeURIComponent(vfcode) + '",' + '"mobile_number":"' + vmobilenum + '"}';
    var loginSuccess = $.ajax({
        type: 'GET',
		 url: url + '/chkCaptcha?json=' + cpatchajson,
        dataType: 'jsonp',
        jsonpCallback: 'jsonCallback',
        cache: false,
        jsonp: false,
        timeout: 10000,
			 async: true,
        beforeSend: function() {
            $("#loader").show(); 
        },
        complete: function() {
$("#loader").hide();
        },
        success: function(response) 
		{
            var data = eval(response);
            var sucess = data.sucOrfail;
            var theaterName = data.location_name;
            var vendor_type_id = data.vendor_type_id;
            var dt = data.DateTime;
            var vendor_id = data.vendor_id;
            var nameArray = [];
            var nameArray = data.location_name;
            var location_id = data.location_id;
            var vendor_session_id = data.session_id;
            var vendor_name = data.vendor_name;
            var vendor_user_name = data.vendoruser_name;
            var UUID = responsevalue;
            var vendorUserId = data.vendor_users_id;
            vendortypeloggedin = vendor_type_id;
            if (vendor_type_id == 1) 
			{
				localStorage.setItem('login', 'serviceagent');
                 //$(location).attr('href',"../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID);

					window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+ '&mobile_number=' + vmobilenum);

                   return false;
            }
            if (vendor_type_id == 2) 
			{
				localStorage.setItem('login', 'operator');
//                $(location).attr('href',"../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID);

			window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+ '&mobile_number=' + vmobilenum);


                 return false;
            }
            if (vendor_type_id == 3) 
			{
				localStorage.setItem('login', 'cook');

//                      $(location).attr('href',"../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID);

			window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+ '&mobile_number=' + vmobilenum);

                 return false;

            }
            if (vendor_type_id == 0) 
			{
			  localStorage.setItem('login', 'vadmin');
             //    $(location).attr('href',"../vc/vendor-admin-index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID);
	
					window.location.replace("../vc/vendor-admin-index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+ '&mobile_number=' + vmobilenum);
                 return false;
             }
            else {
                alert("Please Retry the Operation");

        //$.mobile.pageContainer.pagecontainer("change", "#vendorpinpage", { reload:true});
       // return false;

            DrawCaptcha();

            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("Please Enter Valid Verification Code");
        },
    });
}


function removeSpaces(string) {
    return string.split(' ').join('');
}



function vendoridpinfunctionality() {
    $('#vendornewform').validate({
        rules: {
            vendorid: {
                required: true
            },
            verficationpin: {
                required: true
            },
            loginCaptchaCode: {
                required: true
            }
        },
        messages: {
            vendorid: {
                required: "VendorPin Cannot be empty",
            },
            verficationpin: {
                required: "Verfication Pin Cannot be empty",
            },
            loginCaptchaCode: {
                required: "Captcha Cannot be empty",
            }
        },
        submitHandler: function(event, validator) {
            if ($("#vendornewform").valid()) {
                vendornewformsubmit();
                return false;
            }
        }
    });

}


function ValidCaptcha() {
    var str1 = removeSpaces(document.getElementById('randomfield').textContent);
    var str2 = removeSpaces(document.getElementById('loginCaptchaCode').value);
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}