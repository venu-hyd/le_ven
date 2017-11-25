var createaccountjsloaded = false;

$(document).on("click", ".fullnamepopup", function(event) {
    $("#fullnameHelp").popup('close');

  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});
$(document).on("click", ".mobilenumberpopup", function(event) {
    $("#mobilenumberHelp").popup('close');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});


$(document).on("click", ".createaccountsbtbtn", function(event) {
  
    $("#createaccount").validate();
      
});

function submitDataforcreateaccount()
{



  if(navigator.connection)
        {
        
         var ifDeviceConnected = checkConnection();

            if(ifDeviceConnected==='Nonetwork' || ifDeviceConnected==='none')
                {
                           $('#createaaccountpage #nonetconncreateacc').popup({history: false}).popup('open');
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return false;
                }
        }




  var name = $.trim($("#name").val());
  var mobile = $.trim($("#mobile").val());
  var fromwhatapk = 'vendorapk';
  $.ajax(
  {
    type: 'GET',
    url: url + '/newUser?UUID=' + UUID + '&name=' + name + '&mobile=' + mobile + '&deviceName=' + deviceName + '&deviceVersion=' + deviceVersion + '&deviceModel=' + deviceModel+ '&fromwhatapk=' + fromwhatapk,
    jsonpCallback: 'jsonCallback',
    dataType: 'jsonp',
    jsonp: false,
    cache: false,
    timeout: 10000,
    async: true,
    beforeSend: function()
    {
      $("#createaaccountpage #loader").show();
    },
    complete: function()
    {
      $("#createaaccountpage #loader").hide();
    },
    success: function(response)
    {
      var userType = response.user_type;
      
      if (userType === 'customer')
      {
        
        $('#createaaccountpage #numbercustomer').popup({history: false}).popup('open');
         
      }

  


      else if (userType == 'vendor')
      {
        var vendor_id = response.users_id;
        if (!vendor_id)
        {
          vendor_id = response.vendor_id
        }
        $(':mobile-pagecontainer').pagecontainer("change", "vendoridpin.html?vendor_id=" + vendor_id + '&UUID=' + UUID + '&mobile=' + mobile,
        {
          allowSamePageTransition: true,
          reload: true,
          transition: "none"
        });
        return false;
      }
    },
   
error: function(jqXHR, exception) {

   if (jqXHR.status === 0 || exception === 'timeout') {
             $('#createaaccountpage #nonetconncreateacc').popup({history: false}).popup('open');
            }
            else
            {
                $('#createaaccountpage #errorcreateacc').popup({history: false}).popup('open');
            }
}


  });
  return false;
}



function createaccountvalidate()
{
    jQuery.validator.addMethod("lettersonly", function(value, element)
  {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
  }, "Letters and spaces only please");
  jQuery.validator.addMethod("phonestarting0", function(phone_number, element)
  {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || !phone_number.match(/^0\d{8,}$/);
  }, "Phone number should't  start with 0");
  $('#createaccount').validate(
  {
    rules:
    {
      name:
      {
        required: true,
        minlength: 3,
        maxlength: 25,
        lettersonly: true
      },
      mobile:
      {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true,
        phonestarting0: true
      }
    },
    messages:
    {
      name:
      {
        required: "Please enter your name",
        minlength: "Name should be more than 2 characters",
        maxlength: "Name should be less than 25 characters",
        lettersonly: "Name should contain only letters"
      },
      mobile:
      {
        required: "Please enter your mobile number",
        minlength: "Mobile number should be of 10 digits",
        maxlength: "Mobile number should be of 10 digits only",
        digits: "Mobile number should contain only digits"
      }
    },
    submitHandler: function(event, validator)
    {
      submitDataforcreateaccount();
      return false;
    }
  });
  
}

$(document).on('click', '#createaaccountpage .numbercustomerclose', function(event) {
  $('#createaaccountpage #numbercustomer').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#createaaccountpage .nonetconncreateaccclose', function(event) {
  $('#createaaccountpage #nonetconncreateacc').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
});


$(document).on('click', '#createaaccountpage .errorcreateaccclose', function(event) {
  $('#createaaccountpage #errorcreateacc').popup('close');
    event.stopImmediatePropagation();
      event.preventDefault();
      return false;
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