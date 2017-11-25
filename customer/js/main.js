$(document).on('click', '#mainpage .forpopupcustomerdeactivation', function(event) {

  $('#forcustomerdeactivation').popup('close');

    event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});


$(document).bind('mobileinit',function(){
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
});

$(document).on("click", "#mainpage .getStarted", function(event) {

	 sessionStorage.clear();



     if(navigator.connection)
        {
            var ifDeviceConnected = checkConnection();
              if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#mainpage #nonetconnmain').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }






    $.ajax({
        type: 'GET',
        url: url + '/getUUIDSession?UUID=' + UUID,
        jsonpCallback: 'jsonCallback',
        cache: false,
        dataType: 'jsonp',
        jsonp: false,
        cache: false,
        timeout: 10000,
			 async: true,
        beforeSend: function() {
            $("#loader").show(); 
        },
        complete: function() {
$("#loader").hide();
        },
        success: function(response) {
            console.log(response.user_type);
            
                if(response)
                {
            if (!response.user_type) {
                $("#forcustomerdeactivation").css("display", "block");
                $('#forcustomerdeactivation').popup('open');
            } else {
                var user_type = response.user_type;
                var mobile = response.mobile_number;
                if (user_type == 'New') // New Case
                {
                    $(':mobile-pagecontainer').pagecontainer("change", "create_an_account.html?UUID=" + UUID+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel, {
			 allowSamePageTransition:true,reload:true,transition: "none"  
                    });
                    return false;

                     
                } 

                else if (user_type == 'customer') {
                 /*   var customer_id = response.customer_id;
                    var status = response.status;
					var mobile_num = response.mobile_number;
                    var devicestatus = response.devicestatus;


                    if (status === '1') {

                        if(devicestatus==='0')
                        {

                        $(':mobile-pagecontainer').pagecontainer("change", "customerverficationpin.html?UUID=" + UUID + '&cust_id=' + customer_id+ '&mobile_num=' + mobile_num, {
                         allowSamePageTransition:true,reload:true,transition: "none" 
                        });
                        return false;
    
                        }
                        else if(devicestatus==='1')
                        {


                        $(':mobile-pagecontainer').pagecontainer("change", "start.html?UUID=" + UUID + '&cust_id=' + customer_id, {
                         allowSamePageTransition:true,reload:true,transition: "none" 
                        });
                        return false;
    
                        }


                   
                    } 
                    else if (status === '0') {
                        $(':mobile-pagecontainer').pagecontainer("change", "customerverficationpin.html?UUID=" + UUID + '&cust_id=' + customer_id+ '&mobile_num=' + mobile_num, {
                         allowSamePageTransition:true,reload:true,transition: "none" 
                        });
                        return false;
                    }*/

                     //alert('InValid user');
                        $('#mainpage #invaliduser').popup({history: false}).popup('open');
                    
                } else if (user_type == 'vendor') {
                    var vendor_id = response.vendor_id;
                    var mobile = response.mobile_number;
                    $(':mobile-pagecontainer').pagecontainer("change", "vendor_id.html?UUID=" + UUID + '&vendor_id=' + vendor_id + '&mobile=' + mobile, {
                     allowSamePageTransition:true,reload:true,transition: "none" 
                    });
                    return false;

                      
                }
            }
        }
        else
        {
             $('#mainpage #errormain').popup({history: false}).popup('open');
        }
        },
        error: function(jqXHR, exception) 
		{
                if (jqXHR.status === 0 || exception === 'timeout') {
               
             $('#mainpage #nonetconnmain').popup({history: false}).popup('open');
            }
            else
            {
                 $('#mainpage #errormain').popup({history: false}).popup('open');
            }
        }
    });

  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});


$(document).on('click', '#mainpage .nonetconnmainclose', function(event) {
  $('#mainpage #nonetconnmain').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#mainpage .errormainclose', function(event) {
  $('#mainpage #errormain').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#mainpage .invaliduserclose', function(event) {
  $('#mainpage #invaliduser').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});
