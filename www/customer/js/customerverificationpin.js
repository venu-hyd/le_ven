var customerverificationloaded = false;

function customerform() {
    var captharesult = ValidCaptcha();
    if (!captharesult) {
        //alert('Entered capthcha is wrong');
        $('.cmismatch').show();
        DrawCaptcha();
        $('#loginCaptchaCode').val('');
    } else {
        if (captharesult) {
            $('.cmismatch').hide();
            var custpin = $.trim($("#vendorpin").val());
            $.ajax({
                type: 'GET',
                url: url + '/customerexists?customer_id=' + cust_id + '&pin=' + custpin+ '&UUID=' + UUID,
                jsonpCallback: 'jsonCallback',
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
                    var isexists = JSON.parse(response);
                    if (isexists) {
                        $(':mobile-pagecontainer').pagecontainer("change", "start.html?UUID=" + UUID + '&cust_id=' + cust_id, {
                         allowSamePageTransition:true,reload:true,transition: "none" 
                        });
						  // $(this).prop('disabled', true);
                        return false;
                    } else if (!isexists) {
                        $('#custinvalidpin').popup('open');
                    }
                },
                error: function(x, t, m) {
                    if (t === "timeout") {
                        alert("got timeout , please try again");
                    } else {}
                }
            });
        }
    }
}
$(document).on('click', '#customerverificationpinpage .custinvalidpinclose', function(event) {
    $('#custinvalidpin').popup('close');
    DrawCaptcha();
    $('#loginCaptchaCode').val('');

  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});
$(document).on('click', '#customerverificationpinpage #custinvalidpin-screen', function(event) {
    $('#custinvalidpin').popup('close');
    DrawCaptcha();
    $('#loginCaptchaCode').val('');

	  event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});

/*
$(document).on('click', '#customerverificationpinpage .iconPinReload', function(event) {
if (confirm("Regenerate the Verfication Pin?") == true) {
	var usertype = 'customer';
  
 $.ajax({
      type: 'GET',
      url: url + '/generateVcode?user_id=' + cust_id + '&usertype=' + usertype+'&mobile_num=' + mobile+'&UUID=' + UUID,
      jsonpCallback: 'jsonCallback',
      cache: false,
      dataType: 'jsonp',
      timeout: 6000,
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
  } // end of if

return false ;


});
*/


$(document).on('click', '#customerverificationpinpage .iconPinReload', function(event) {


   $('#regenpopup').popup('open');

    event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on('click', '#customerverificationpinpage .regenerateno', function(event) 
{
    $('#regenpopup').popup("close" );

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});


$(document).on('click', '#customerverificationpinpage .regpinalertclose', function(event) 
{
    $('#regpinalert').popup("close" );
     event.stopImmediatePropagation();
  event.preventDefault();
  return false;
});

$(document).on('click', '#customerverificationpinpage .regenerateyes', function(event) 
{
  $('#regenpopup').popup("close" );
      var usertype = 'customer';
  
 $.ajax({
      type: 'GET',
      url: url + '/generateVcode?user_id=' + cust_id + '&usertype=' + usertype+'&mobile_num=' + mobile+'&UUID=' + UUID,
      jsonpCallback: 'jsonCallback',
      cache: false,
      dataType: 'jsonp',
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
        
          if(res==='true')
          {
            $("#regpinmsg").text('New verificaton Pin sent to your Mobile');
          }
          else
          {
           $("#regpinmsg").text('Error in Re Generating Pin'); 
          }

      },
      error: function(x, t, m) {
        $("#regpinmsg").text('Error in Re Generating Pin'); 
      }
    }).done(function() {
         $('#regpinalert').popup("open" );

          });

     event.stopImmediatePropagation();
  event.preventDefault();
  return false;

});



function removeSpaces(string) {
    return string.split(' ').join('');
}


function customerverificationpinfunctionality()
{




  $("#customerverificationpinpage .customersbmtbtn").click(function(){
  
    
      $('#customerform').validate({
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
                       required: "Customer Verification Pin Cannot be empty",
                   },
                   loginCaptchaCode: {
                       required: "Captcha Cannot be empty",
                   }
               },
               submitHandler: function(event, validator) {
                   if ($("#customerform").valid()) {
                       customerform();
                       return false;
                   }
               }
           });
      
    });


$("#customerverificationpinpage .customerpchange").click(function(){
      changecalled();
     return false;
      
    });

}

function changecalled()
{
  var UUID_to_delete = $.trim($("#phonenumberfield").val());
  
  $.ajax(
  {
    type: 'GET',
    url: url + '/deletecustomerwphone?UUID=' + UUID,
    jsonpCallback: 'jsonCallback',
    dataType: 'jsonp',
    jsonp: false,
    cache: false,
    timeout: 10000,
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
      var result_val = response.result;
      
      if (result_val === 'success')
      {

          $(':mobile-pagecontainer').pagecontainer("change", "create_an_account.html?UUID=" + UUID ,
          {
            allowSamePageTransition: true,
            reload: true,
            transition: "none"
          });
          return false;
      }
      else if (result_val === 'failed')
      {
        alert("Sorry , Please Try Again");
          return false;
      }

    },
    error: function(x, t, m)
    {
      if (t === "timeout")
      {
        alert("got timeout , please try again");
      }
      else
      {}
    }
  });
  return false;
}