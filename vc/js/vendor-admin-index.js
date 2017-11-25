

			var vendorType = -1;
			var currentdatetime=new Date();
			var UUID="";
			var screenname = "";
            var vendor_id = "";
            var vendor_users_id = "";
            var vendor_type_id = "";
            var location_id = "";
            var vendor_session_id = "";
            var vendor_name = "";
            var vendor_user_name = "";
			var mobile_number="";
			var mytimer;
			var screenname = getParameterByName('sName');
            var vendor_id = getParameterByName('vendor_id');
            var vendor_users_id = getParameterByName('vendor_users_id');
            var vendor_type_id = getParameterByName('vendor_type_id');
            var location_id = getParameterByName('location_id');
            var vendor_session_id = getParameterByName('session_id');
            var vendor_name = getParameterByName('vendor_name');
            var vendor_user_name = getParameterByName('vendor_user_name');
			mobile_number=getParameterByName('mobile_number');
			UUID = getParameterByName('UUID');
         
		    var querystr ="?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name+'&UUID='+UUID+'&mobile_number=' + mobile_number ; //For Passing extra parameters
            //var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendorUserId + '&vendor_type_id=' + vendor_type_id + '&vendor_session_id=' + vendor_session_id+'&location_id='+location_id+'&vendor_name='+vendor_name+'&vendor_user_name='+vendor_user_name+'&UUID='+UUID; //For Passing extra parameters
			
			var querystr1=querystr;//"?sName=" + screenname + '&vendor_id=' + vendor_id;
			var networkState;
			//mobile support or not
			
             function onDeviceReady() 
		     {
		        
		        document.addEventListener('backbutton', backButtonCallback, false);
		     }
		     function backButtonCallback()
		     {
		        	
		        		var r = confirm("Do you want to logout app?");
						if (r == true)
						{
						     window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
						} else
						{
						   
						}
		     
		     }
	   $(document).ready(function () 
		{
            // Test is mobile or not
			$("#loader").hide();
			document.addEventListener("deviceready", onDeviceReady, false);
			
        
		
			// To get and display current date and time// Removed as per changes mentioned by mohan.
			//getCurredtDateTime();
			//var d = new Date()
			//var n = (d.getTimezoneOffset()/60)+11;
				//$('#digital-clock').clock({offset: n, type: 'digital'});
			//$("#datetime")[0].innerHTML=currentdatetime;
           




           $("#vendorname")[0].innerHTML = vendor_name;
            $("#locationname")[0].innerHTML = screenname;
            $("#vendorusername")[0].innerHTML = vendor_user_name;
			
			$("#logout").click(function () {
                window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
            });
            
			
			
            $("#mymenu").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				 { 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				      window.location.replace(  "MyMenu.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
                
            });
			
			$("#availableitems").click(function ()
			{
			   $("#loader").show();
				mytimer=setTimeout(function()
				 { 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				      window.location.replace(  "availableitems.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });
			
            $("#create").click(function ()
			{
			  	$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				      window.location.replace( "vendor-admin-create-vendor.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
                
            });

            $("#activatedeactivate").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				      window.location.replace(  "vendoradmin-activatedeactivate-agentsoperators.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });
			
            $("#addedit").click(function ()
			{
			    $("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				       window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });
						
			$("#homedelivery").click(function ()
			{
				 $("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				       window.location.replace(  "vendor-homedelivery.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });

            $("#requestnewcatogery").click(function ()
			{
			    $("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				        window.location.replace( "vendor-admin-new-cat-request.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });

            $("#sharenaccept").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				        window.location.replace(  "vendoradmin-shareserviceagent.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });

			$("#vendortaxes").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				         window.location.replace(  "vendortaxes.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
              
            });

			$("#billorder").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				         window.location.replace( "billingorder.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
              
            });

			$("#mymenuitemstatus").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				         window.location.replace(  "MyItemstatus.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
                
            });
			$("#itemavailabile").click(function ()
			{
				$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				        window.location.replace(  "item_availability.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
                
            });
		    $("#registerdevice").click(function ()
			{
				
			  	$("#loader").show();
				mytimer=setTimeout(function()
				{ 
				    
				    var conn=checkconnection();
				    if(conn)
				    {
				         window.location.replace(  "registered_devices.html" + querystr);
				     	
				    }
				    else
				    {
				       $("#errornet1").show();
				       $("#loader").hide();
				    }
				    
				 }, 1000);
               
            });

            
	 });

		 
		function getCurredtDateTime()
		{
			var d = new Date();

					var month = d.getMonth()+1;
					var day = d.getDate();
					var hour = d.getHours();
					var minute = d.getMinutes();
					var second = d.getSeconds();

					 currentdatetime = d.getFullYear() + '-' +
						((''+month).length<2 ? '0' : '') + month + '-' +
						((''+day).length<2 ? '0' : '') + day ;//+ ' ' +
						//((''+hour).length<2 ? '0' :'') + hour + ':' +
						//((''+minute).length<2 ? '0' :'') + minute + ':' +
						//((''+second).length<2 ? '0' :'') + second;




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
function checkconnection()
{
   
    try 
    {
          document.addEventListener("deviceready", cordovaready, false);
		  clearTimeout(mytimer);
		
		  $("#loader").hide();
    	 
  
		   if(networkState=="none"||networkState=="unknown")
		   {
		    
		      $("#errornet1").show();	
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
function online()
{

     try 
     {
	    if (!navigator.onLine)
	    {
	        return false;
	    } 
	    else 
	    {
	        return true;
	    }
    }
    catch(e) 
    {
        console.log('An error has occurred: '+e.message);
    }
}
///////////////////Network connection check////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function network()
{
     	 $("#errornet1").hide();
   		
      

}


