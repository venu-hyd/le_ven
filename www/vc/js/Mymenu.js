
   
   
   
   
           //vendor_id = getParameterByName('vendor_id');
		    var screenname = getParameterByName('sName');
            var vendor_id = getParameterByName('vendor_id');
            var vendor_users_id = getParameterByName('vendor_users_id');
            var vendor_type_id = getParameterByName('vendor_type_id');
            var location_id = getParameterByName('location_id');
            var vendor_session_id = getParameterByName('session_id');
            var vendor_name = getParameterByName('vendor_name');
            var vendor_user_name = getParameterByName('vendor_user_name');
			var UUID = getParameterByName('UUID');
			var mobile_number=getParameterByName('mobile_number');
			//var vendortypeloggedin=getParameterByName('vendor_type_id');
			var redirectedfrom=getParameterByName('redirectedfrom');
			
			var screen_ids= getParameterByName('screen_id');
			var session_id=getParameterByName('session_id');
			//var VID= getParameterByName('vendor_id');
			var nameArray= getParameterByName('nameArray');
		    //var vendorUserId= getParameterByName('vendor_users_id');
            var theaterName= getParameterByName('sName');
			var seat_num= getParameterByName('seatnum');
			var row= getParameterByName('row');
			var urlforvendor = window.location.href;
			var timerforajax;
		    //mobile support or not
		
		 var networkState;

           		 var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ; //For Passing extra parameters
	
	      
				
				//getting queary string by name
		        function getParameterByName(name)
				{
		            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
					results = regex.exec(location.search);
		            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		        }
			
		    	var resss;
				function backButtonCallback()
				{
				                $("#loader").show();
				                resss=setInterval(function(){   madhuSS();}, 1000);
				}
				function madhuSS()
				{
								
								  clearInterval(resss);
				   				urlforvendor = window.location.href;
					           if(redirectedfrom=='')
								{
								   urlforvendor=decodeURIComponent(urlforvendor);
								   var url_params=urlforvendor.split('?')
									window.location.replace( "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
								}

								else if(redirectedfrom=='vendorscreen')
								{
							  
								   urlforvendor=decodeURIComponent(urlforvendor);
								   var url_params=urlforvendor.split('?')
								   window.location.replace(  "../vc/index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');

								}
				
				}	
				function onDeviceReady()
				{
	               	
					document.addEventListener('backbutton', backButtonCallback, false);
				}


        $(document).ready(function ()
		{
				

				
						
						
				       document.addEventListener("deviceready", onDeviceReady, false);	
						$("#loader").show();
						$("#vendorname")[0].innerHTML = vendor_name;
						$("#locationname")[0].innerHTML = screenname;
						$("#vendorusername")[0].innerHTML = vendor_user_name;
						
						//logout
						
						$("#logout").click(function ()
						{

							 window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
							
						});
						
						//BACK TO HOME
						
						$("#homeicon").click(function()
						{
						 
								urlforvendor = window.location.href;
					           if(redirectedfrom=='')
								{
								   urlforvendor=decodeURIComponent(urlforvendor);
								   var url_params=urlforvendor.split('?')
									window.location.replace(  "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
								}

								else if(redirectedfrom=='vendorscreen')
								{
							  
								   urlforvendor=decodeURIComponent(urlforvendor);
								   var url_params=urlforvendor.split('?')
								   window.location.replace(  "../vc/index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');

								}
						   
						   
						
						});
						
						
						//GET FUNCTIONALITY
						
						$("#nodata").hide();
						 timerforajax=setInterval(function()
					     { 
					           	     mymenu();
					           	     
					     }, 1000);
					
						
					
          

           
        });


function mymenu()
{
                clearInterval(timerforajax);
				 var networkState = checkconnection();
				if(networkState) 
				{
										       $("#loader").hide();
								           	   $("#errornet2").show();	
								              
				 }else
				 {
					 var onlinstatus=online();
			          if(onlinstatus)
			          {
					    $.ajax(
							{
								type: 'GET',
								url: url+'/oms1/availableitems?vendor_id='+vendor_id,
								jsonpCallback: 'jsonCallback',
								dataType: 'jsonp',
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
								success: function (data)
								{
										    
										
											var res=JSON.stringify(data);
										
										   
										   if(data.length=="0")
										   {
										    
											 $("#nodata").show();
										   
										   }
										   else
										   {
												var array1=[];
												$.each(data, function(i, item)
												{
														var res=JSON.stringify(data);
														var cats=data[i].category_name.length;
														var catt1,catt2,catt3,catt4,catt5;
																		for(var k=0;k<data[i].category_name.length;k++)
																		{
																		   if(k==0) 
																		   { 
																							catt1="<li class='par1'>"+(i+1)+"&nbsp;&nbsp;"+data[i].category_name[k]+"</li>";
																							$(".cat").append(catt1);
																		   }
																		   if(k==1) 
																		   { 
																							catt2="<li class='par2 icon-down-dir'>"+data[i].category_name[k]+"</li>";
																								 $(".cat").append(catt2);
																		   }
																		   if(k==2) 
																		   { 
																							catt3="<li class='par3 icon-angle-circled-down'>"+data[i].category_name[k]+"</li>";
																							 $(".cat").append(catt3);
																		   }
																			if(k==3) 
																		   { 
																							catt4="<li class='par4 icon-angle-down'>"+data[i].category_name[k]+"</li>";
																							$(".cat").append(catt4);
																		   }
																			if(k==4) 
																		   { 
																							catt5="<li class='par5 icon-angle-double-down'>"+data[i].category_name[k]+"</li>";
																							$(".cat").append(catt5);
																		   }
																		   
																			
																		}
														
											
													
													
													var res=''+cats+'';
										
													var items=data[i].items;
													var len=data[i].items.length;
													var status=data[i].status;
													var category_name=data[i].category_name.length;
													for(var i=0;i<len;i++)
													{
													  
                                                           if(status[i]=="1")
														   {
														     $(".cat").append("<li class='status_wrap'><div class='label label-success'>"+items[i]+"</div></li></br>");
														   }
														   else
														   {
														     $(".cat").append("<li class='status_wrap'><div class='label label-danger'>"+items[i]+"</div></li></br>");
														
														   }
														
														
													}
													
												


													
													
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
 ///////////////////////Netwok connection////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
 function onDeviceReadycall()
{
	               networkState = navigator.connection.type;	
					
}       
     
function network()
{
		var loginuser = localStorage.getItem('login');
		if(loginuser=="vadmin")
		{
		     urlforvendor = window.location.href;
	     	$("#errornet1").hide();
	     	urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')
	     	window.location.replace(  "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
		
		}else
		{
		    urlforvendor = window.location.href;
	     	$("#errornet1").hide();
	 
	        urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')
		    window.location.replace(  "../vc/index.html?"+url_params[1]);
		
		}
      
}

function checkconnection()
{
		
		
	try 
     {
    	  
		   document.addEventListener("deviceready", onDeviceReadycall, false);
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


        

		
