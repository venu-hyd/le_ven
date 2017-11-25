var qrloaded = false;

$(document).on('click', '#qrcodepage .vendornotexistsclose', function(event)
{
  $("#vendornotexistspop").popup('close');

    event.stopImmediatePropagation();
      event.preventDefault();
      return false;

});

var vendor_id;
/////madhu changed////////////////////////
//////////////////////////////////////////////////
$(document).on('click', '#qrcodepage #okay', function(event)
{
  $("#qrerror").popup('close');
});


$(document).on('click', '#qrcodepage .scanqrcode', function(event)
{
 
    


  window.plugins.barcodeScanner.scan(function(result)
  {
    
    var thetext = result.text;
   
    var name = thetext.split("json=");
      
    var json = name[1];
   
    if(json==undefined)
    {
       $("#qrerror").popup('open'); 
       
    }
    else
    {       
            var resutdata = JSON.parse(json);
		    var screen_id = resutdata.screen;
		    var locationname = resutdata.location_name;
		    vendor_id = resutdata.vendor_id;
		    seat = resutdata.seat;
		    row = resutdata.identification;
		    screen_idee = screen_id.trim();
		    var vids = parseInt(vendor_id);
		    screen_idee = parseInt(screen_idee);
		    document.getElementById("iamat").value = locationname;
		    document.getElementById("tablenum").value = row;
		    if(locationname!="" &&row!=""&&vendor_id!="")
		    {
		      
		      qrcode(vendor_id,locationname,row);
		      
		    }
		    else
		    {
		       
		       $("#qrerror").popup('open'); 
		       
		    }
    
    }
 
   
  }, function(error)
  {
    $("#qrerror").popup('open');
   
  });
   

});



function qrcode(vendor_id,locationname,row)
{

 


   if (vendor_id)
  {
 
    var screen_id_res;
    var getajaxcallscreenid = $.ajax(
    {
      url: url + '/getscreenidforvendor?vendor_id=' + vendor_id,
      dataType: 'jsonp',
      cache: false,
      timeout: 10000,
      jsonp: false,
	  async: true,
      jsonpCallback: 'jsonCallback',
      beforeSend: function()
      {
        $("#qrcodepage #loaderforqr").show(); 
      },
      complete: function()
      {
		 $("#qrcodepage #loaderforqr").hide(); 
      },
      success: function(data)
      {
        screen_id_res = data;
      },
      error: function(jqXHR, exception) 
	  {
			if (jqXHR.status === 0) 
			{
				alert('Not able to connect to network');
				 
			} else if (exception === 'timeout') 
			{
				
				alert('Time out error.');
			}else
			{
			 
			  
			
			}
	  }
    });
    getajaxcallscreenid.done(function()
    {
    	
		var isscreen_idnumber = isNumbercheck(screen_id_res);
  
      if (isscreen_idnumber)
      {
        var accessedfrom = 'scanqrpage';
        $(':mobile-pagecontainer').pagecontainer("change", "index.html?UUID=" + UUID + '&screen_id=' + screen_id_res + '&cust_id=' + cust_id + '&tablenum=' + row + '&accessedfrom=' + accessedfrom,
        {
         allowSamePageTransition:true,reload:true,transition: "none" 
        });
		  // $(this).prop('disabled', true);
        return false;
      }
      else
      {
      	$("#qrerror").popup('open');
      }
    });
  }
  else
  {
    //alert('Sorry Vendor Doesnt exists');
    $("#vendornotexistspop").popup('open');
  }
  
  
 
  



   


}



$(document).on('click', '#qrcodepage .qrpageleftarrow', function(event)
{
  $(':mobile-pagecontainer').pagecontainer("change", "start.html?UUID=" + UUID + '&cust_id=' + cust_id,
  {
   allowSamePageTransition:true,reload:true,transition: "none" 
  });

    // $(this).prop('disabled', true);

  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});
$(document).on('click', '#qrcodepage .qrpagehomearrow', function(event)
{
  $(':mobile-pagecontainer').pagecontainer("change", "start.html?UUID=" + UUID + '&cust_id=' + cust_id,
  {
   allowSamePageTransition:true,reload:true,transition: "none" 
  });
 // $(this).prop('disabled', true);
  event.stopImmediatePropagation();
      event.preventDefault();
      return false;


});


function isNumbercheck( input ) {
    return !isNaN( input );
}

function qrcodefunctionaity()
{
	
    
}


