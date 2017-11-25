// This page is shown for already registered vendor

var vendorloaded = false;
localStorage.clear();

function vendorform() {



     if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#vendoridpage #nonetcheckconnvendorid').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }

    var captharesult = ValidCaptcha();
    if (!captharesult) {
        //alert('Entered capthcha is wrong');
        $('#vendoridpage .cmismatch').show();
        DrawCaptcha();
        $('#vendoridpage #loginCaptchaCode').val('');
    } else {
        $('#vendoridpage .cmismatch').hide();
        if (captharesult) {
            var vendorpin = $.trim($("#vendorpin").val());
            $.ajax({
                type: 'GET',
				 url: url + '/registeredvendordevice?UUID=' + UUID + '&mobile_number=' + mobile + '&verification_code=' + vendorpin + '&vendor_id=' + vendor_id+ '&deviceName=' + deviceName+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel,
                jsonpCallback: 'jsonCallback',
                cache: false,
                dataType: 'jsonp',
                jsonp: false,
					  async: true,
                timeout: 10000,
					
                beforeSend: function() {
                    $("#vendoridpage #loader").show(); 
                },
                complete: function() {
					$("#vendoridpage #loader").hide();
                },
                success: function(response) {
                    var responsevalue = response.UUID;
                    if (responsevalue) {
                        checkCaptchaforvendorpage(responsevalue,mobile);
                    } else {
                        $('#vendoridpage #vendoridpopupp').popup('open');
                    }
                },
                          error: function(jqXHR, exception) 
        {
                if (jqXHR.status === 0 || exception === 'timeout') {
               
             $('#vendoridpage #nonetcheckconnvendorid').popup({history: false}).popup('open');
            }
            else
            {
                 $('#vendoridpage #errorcheckconnvendorid').popup({history: false}).popup('open');
            }
        }
            });
        }
    }
}
$(document).on('click', '#vendoridpage .vendoridclosepopupe', function(event) {
    $('#vendoridpage #vendoridpopupp').popup('close');
    DrawCaptcha();
    $('#vendoridpage #loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});



$(document).on('click', '#vendoridpage .vendordeactivated', function(event) {
    $('#vendoridpage #deactivated').popup('close');
    DrawCaptcha();
    $('#vendoridpage #loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});









$(document).on('click', '#vendoridpage #vendoridpopupp-screen', function(event) {
    $('#vendoridpage #vendoridpopupp').popup('close');
    DrawCaptcha();
    $('#vendoridpage #loginCaptchaCode').val('');
	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});

function removeSpaces(string) {
    return string.split(' ').join('');
}

function checkCaptchaforvendorpage(responsevalue,vmobilenum) {
	try {

        if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#vendoridpage #nonetcheckconnvendorid').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }


    vfcode = $("#vendoridpage #vendorpin").val().trim(); //this is verification code
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
            $("#vendoridpage #loader").show(); 
        },
        complete: function() {
			$("#vendoridpage #loader").hide();
        },
        success: function(response) {
			
            var data = eval(response);
            var sucess = data.sucOrfail;
			
			if(sucess=='true')
			{				
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
						window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID + '&mobile_number=' + mobile);
						   return false;
					}
					if (vendor_type_id == 2) 
					{
						localStorage.setItem('login', 'operator');
						window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID + '&mobile_number=' + mobile);
						   return false;

					}
					if (vendor_type_id == 3) 
					{
					   localStorage.setItem('login', 'cook');
					   window.location.replace("../vc/index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID + '&mobile_number=' + mobile);
						   return false;

					}
					if (vendor_type_id == 0) 
					{
						localStorage.setItem('login', 'vadmin');
						window.location.replace("../vc/vendor-admin-index.html?sName=" + theaterName + '&redirectedfrom=vendorscreen' + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID + '&mobile_number=' + mobile);
						   return false;
					}
					 else {
					}
			}

			else if(sucess=='false')
			{
							  $('#vendoridpage #deactivated').popup('open');
			}

        },
        error: function(xhr, ajaxOptions, thrownError) {
			
        },
    });
	}
catch(err) {
    alert(err.message);
}
		return false;
}





function vendoridpagefunctionality()
{


      $('#vendorform').validate({
        rules: {
            vendorpin: {
                required: true
            },
            loginCaptchaCode: {
                required: true
            }
        },
        messages: {
            vendorpin: {
                required: "VendorPin Cannot be empty",
            },
            loginCaptchaCode: {
                required: "Captcha Cannot be empty",
            }
        },
        submitHandler: function(event, validator) {
            if ($("#vendorform").valid()) {
                vendorform();
                return false;
            }
        }
    });
}


    $(document).on('click', '#vendoridpage .nonetconncheckconnclsoe', function(event) {

        DrawCaptcha();
    $('#vendoridpage #loginCaptchaCode').val('');
    $('#vendoridpage #vendorpin').val('');
    

  $('#vendoridpage #nonetcheckconnvendorid').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#vendoridpage .errornonetconncheckconnclsoe', function(event) {

      DrawCaptcha();
    $('#vendoridpage #loginCaptchaCode').val('');
    $('#vendoridpage #vendorpin').val('');
  $('#vendoridpage #errorcheckconnvendorid').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});