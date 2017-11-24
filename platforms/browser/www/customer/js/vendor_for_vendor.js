
localStorage.clear();
function vendorformforvendor() {



     if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#vendoridpageforvendor #nonetconnvendorid').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }
    
    var captharesult = ValidCaptcha();
    if (!captharesult) {
        
        $('#vendoridpageforvendor .cmismatch').show();
        DrawCaptcha();
        $('#vendoridpageforvendor #loginCaptchaCode').val('');
    } else {
        $('#vendoridpageforvendor .cmismatch').hide();
        if (captharesult) {
            var vendorpin = $.trim($("#vendorpin").val());
            $.ajax({
                type: 'GET',
        		 url: url + '/registeredvendordevice?UUID=' + UUID + '&mobile_number=' + mobile + '&verification_code=' + vendorpin + '&vendor_id=' + vendor_id+ '&deviceName=' + deviceName+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel,
                jsonpCallback: 'jsonCallback',
                cache: false,
                dataType: 'jsonp',
                jsonp: false,
                timeout: 10000,
					 async: true,
                beforeSend: function() {
                    $("#vendoridpageforvendor #loader").show();
                },
                complete: function() {
					$("#vendoridpageforvendor #loader").hide();
                },
                success: function(response) {
                    var responsevalue = response.UUID;
                    if (responsevalue) {
                        checkCaptchaforvendorpageforvendor(responsevalue,mobile);
                    } else {
                        $('#vendoridpageforvendor #vendoridpopupp').popup('open');
                    }
                },
                   error: function(jqXHR, exception) 
        {
                if (jqXHR.status === 0 || exception === 'timeout') {
               
             $('#vendoridpageforvendor #nonetconnvendorid').popup({history: false}).popup('open');
            }
            else
            {
                 $('#vendoridpageforvendor #errorvendorid').popup({history: false}).popup('open');
            }
        }
            });
        }
    }
}
$(document).on('click', '#vendoridpageforvendor .vendoridclosepopupe', function(event) {
    $('#vendoridpageforvendor #vendoridpopupp').popup('close');
    DrawCaptcha();
    $('#vendoridpageforvendor #loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});


$(document).on('click', '#vendoridpageforvendor .vendordeactivatedvendor', function(event) {
    $('#vendoridpageforvendor #deactivatedvendor').popup('close');
    DrawCaptcha();
    $('#vendoridpageforvendor #loginCaptchaCode').val('');

      event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});


$(document).on('click', '#vendoridpageforvendor #vendoridpopupp-screen', function(event) {
    $('#vendoridpageforvendor #vendoridpopupp').popup('close');
    DrawCaptcha();
    $('#vendoridpageforvendor #loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});

function removeSpaces(string) {
    return string.split(' ').join('');
}

function checkCaptchaforvendorpageforvendor(responsevalue,vmobilenum) {



   if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#vendoridpageforvendor #nonetconnvendorid').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }
  
    vfcode = $("#vendoridpageforvendor #vendorpin").val().trim(); //this is verification code
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
            $("#vendoridpageforvendor #loader").show(); 
        },
        complete: function() {
			$("#vendoridpageforvendor #loader").hide();
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
                          $('#vendoridpageforvendor #deactivatedvendor').popup('open');
        }

        },
                  error: function(jqXHR, exception) 
        {
                if (jqXHR.status === 0 || exception === 'timeout') {
               
             $('#vendoridpageforvendor #nonetconnvendorid').popup({history: false}).popup('open');
            }
            else
            {
                 $('#vendoridpageforvendor #errorvendorid').popup({history: false}).popup('open');
            }
        }
    });
		return false;
}





function DrawCaptcha() {
    var a = Math.floor(Math.random() * 10) + '';
    var b = Math.floor(Math.random() * 10) + '';
    var c = Math.floor(Math.random() * 10) + '';
    var d = Math.floor(Math.random() * 10) + '';
    var e = Math.floor(Math.random() * 10) + '';
    var f = Math.floor(Math.random() * 10) + '';
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $(".captha-img")[0].innerHTML = code;
}

  $(document).on('click', '#vendoridpageforvendor .nonetconnvendoridclsoe', function(event) {

     DrawCaptcha();
    $('#vendoridpageforvendor #loginCaptchaCode').val('');
$('#vendoridpageforvendor #vendorpin').val('');
  $('#vendoridpageforvendor #nonetconnvendorid').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#vendoridpageforvendor .errorvendoridclose', function(event) {

 DrawCaptcha();
$('#vendoridpageforvendor #vendorpin').val('');
 
    $('#vendoridpageforvendor #loginCaptchaCode').val('');

  $('#vendoridpageforvendor #errorvendorid').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});
