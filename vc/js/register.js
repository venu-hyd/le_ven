
   
   
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
		    var globaldata;
			var urlforvendor = window.location.href;
			var redirectedfrom=getParameterByName('redirectedfrom');
			var deviceVersion;
			var timerforajax;
			var deviceModel;
			var networkState;
       	//mobile support or not
	
	    
		//getting queary string by name
       
		querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ;  
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
									window.location.replace(  "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
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
		                           	//BACK TO HOME
						
									$("#homeicon").click(function()
									{
									
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
											   window.location.replace( "../vc/index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');

											}
									   
									   
									
									});
						
					
		        
									//logout
									$("#logout").click(function ()
									{

										window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel);
									});
									
									$("#update").hide();
									$("#update1").hide();
									
									$("#vendorname")[0].innerHTML = vendor_name;
									$("#locationname")[0].innerHTML = screenname;
									$("#vendorusername")[0].innerHTML = vendor_user_name;
									
									
						
					          
					         	  	 $("#nodata").hide();	
					           		
						           		 
					           	 
					           	 
					           	 
					           	 timerforajax=setInterval(function()
					           	   { 
					           	     ajaxccall();
					           	     
					           	    }, 1000);
					          
					         
					
								
									
									

           
        });
   function ajaxccall()
   {
  						
  						                clearInterval(timerforajax);
  									    var networkState = checkconnection();
						           		
								        if (networkState) 
										{
								            $("#loader").hide();
								            $("#errornet2").show();	
								           
								        } 
								        else 
								        {
								          
								              var onlinstatus=online();
									          if(onlinstatus)
									          {
											    
  			
					  									var jsonchk="";
														var operation="get";
					
														var length;
																 
					  									 $.ajax(
														{
															type: 'GET',
															url: url+"/oms1/VendorDevices?vendorId="+vendor_id+"&UUID="+jsonchk+"&Operation="+operation+"&MYUUID=''",
															jsonpCallback: 'jsonCallback',
															dataType: 'jsonp',
															jsonp: false,
															cache: false,
															timeout:10000,
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
															  	
																var jsonres2=JSON.stringify(data);
													           
																
																
																
													            if(data==undefined)
																{
																    $(".rgstpgWrap").hide();
																   $("#nodata").show();
																}
																if(data != undefined)
																{
																  
																        length=data.length;
															  
																	   if(length=="0")
																	   {
																		
																		 $("#nodata").show();
																		 $(".rgstpgWrap").hide();
																	  
																	   }
																	  else
																	  {
																	    for(var i=0;i<length;i++)
																		{
																		   var uuid=data[i].UUID;
																		
																		   var res="<li class='rgstpg_row'><div class='col-xs-12 col-sm-4 col-md-4'><p class='uuid_p'>"+uuid+"</p></div><div class='col-xs-12 col-sm-4 col-md-4'><p class='device_p'><input type='hidden' value=" + data[i].deviceModel +" id='deviceModel"+i+"'  />"+data[i].deviceModel+"</p></div><div class='col-xs-12 col-sm-3 col-md-3'><p class='version_p'><input type='hidden' value=" + data[i].deviceVersion +" id='deviceVersion"+i+"'  />"+data[i].deviceVersion+"</p></div><div class='col-xs-2 col-sm-1 col-md-1 pull-right'><input type='hidden' value=" + uuid +" id='hidden"+i+"' onclick='deleted(" + uuid +")' /><a class='icon-trash' onclick='deleted("+i+")'></a></div></li>";
																	      $(".register").append(res);
																		
																		}
																	    
																	    
																	  }
																
														
																}
																else
																{
					                                             alert ("fails");
					
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
														})
											  }
											  else
									          {
									             $("#errornet2").show();	
												 $("#loader").hide();
									          
									          }
								            
								             
								              
								        }
  						
  									
   
   
   }
	function deleted(i)
	{
								 
	    						         clearInterval(timerforajax);
						           		 var networkState = checkconnection();
						           		
								        if (networkState) 
										{
										       $("#loader").hide();
								           	   $("#errornet1").show();	
								              
								        } else 
								        {
								           	  var onlinstatus=online();
									          if(onlinstatus)
									          {
											    var uuid=$("#hidden"+i).val();
												var deviceVersion=$("#deviceVersion"+i).val();
												var deviceModel=$("#deviceModel"+i).val();
												var r = confirm("Are you sure want to delete item?");
												if (r == true) 
												{
												       
																										var operation="delete";
																								
																											
																										$.ajax(
																												{
																													type: 'GET',
																													url: url+'/oms1/VendorDevices?vendorId='+vendor_id+'&UUID='+uuid+'&Operation='+operation+'&MYUUID='+UUID,
																													contentType: 'application/json; charset=utf-8',
																													jsonpCallback: 'jsonCallback',
																													cache: true,
																													dataType: 'jsonp',
																													jsonp: false,
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
																														 var jsonres2=JSON.stringify(data);
																											
																														 if(data.result=="success")
																														 {
																														   alert("Deleted device uuid successfully");
																														   location.reload();
																														 }
																														 else if(data.result=="logout")
																														 {
																														   window.location.replace("../customer/create_account-forvendor.html?UUID="+UUID+ '&deviceVersion=' + deviceVersion+ '&deviceModel=' + deviceModel);
																														 
																														 }
																														 else
																														 {
																														 
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
																																				$("#loader").hide();
																																				$("#errornet2").show();	
																																				
																														} else if (jqXHR.status == 500) 
																														{
																																				//alert('Internal Server Error [500].');
																																			$("#loader").hide();
																																			$("#errornet2").show();	
																																				
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
																																				$("#loader").hide();
																																				$("#errornet2").show();	
																														}
																													}
																												});
														 
														 
													
																									
																											
												}
								            
											  }
											  else
									          {
									             $("#errornet2").show();	
												 $("#loader").hide();
									          
									          }
								               
								            	
								            
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
function network()
{
        urlforvendor = window.location.href;
     	$("#errornet1").hide();
     	urlforvendor=decodeURIComponent(urlforvendor);
		var url_params=urlforvendor.split('?')
     	window.location.replace(  "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
}


       
 function getParameterByName(name)
{
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


 function online()
{

     try 
     {
	    if (!navigator.onLine)
		{
	        return false;
	    } else {
	        return true;
	    }
    }
    catch(e) 
	{
        console.log('An error has occurred: '+e.message);
    }
}
        

		
