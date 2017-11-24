
   
   
   
   
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
										window.location.replace(  "vendor-admin-index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
									}
	
									else if(redirectedfrom=='vendorscreen')
									{
								  
									   urlforvendor=decodeURIComponent(urlforvendor);
									   var url_params=urlforvendor.split('?')
									  window.location.replace( "../vc/index.html?"+url_params[1]+'&redirectedfrom=vendoradmin');
	
									}
				
		}		
		function onDeviceReady()
		{
	               
								
					document.addEventListener('backbutton', backButtonCallback, false);
		}


        $(document).ready(function ()
		{
				

				
						$("#loader").show();
						$("#nodata").hide();
					
						document.addEventListener("deviceready", onDeviceReady, false);	
											
					
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
						
					 	
                         timerforajax=setInterval(function()
					     { 
					           	     available();
					           	     
					     }, 1000);  
                     //Select All    
					$("#slectaall").click(function()
					{
							$("#loader").show(); 		 
						    var status ="1";	
						    var vendor_items_id="0";
						    timerforajax=setInterval(function()
							{ 
										common(status,vendor_items_id);
										 
							}, 1000);   
						   
									   
									
					});
					
					//Un Select All
					
					$("#unslectaall").click(function()
					{
							$("#loader").show(); 		 
						    var status ="0";	
						    var vendor_items_id="0";
						    timerforajax=setInterval(function()
							 { 
										common(status,vendor_items_id);
										 
							 }, 1000); 
						   
						  
							
									   
									
					});   
           
});
function available()
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
					    var jsonchk="";
						var operation="get";
						var vendor_items_id="";
						var status="";
						//GET FUNCTIONALITY
						
						 $("#nodata").hide();
						
					
							$.ajax(
							{
								type: 'GET',
								url: url+'/oms1/ToggleVendorItem?vendorID='+vendor_id,
								 contentType: "application/json",
								jsonpCallback: 'jsonCallback',
								timeout:10000,
								jsonp: false,
								cache: false,
								async: true,
								dataType: 'jsonp',
						
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
							              $("#loader").hide();
										
											var jsonres2=JSON.stringify(data);
									
											
								            if(data==undefined)
											{
											
											     $("#nodata").show();
											     $("#unslectaall").hide();
											     $("#slectaall").hide();
											}
											if(data != undefined)
											{
											  
											      length=data[0].items.length;
										   
												   if(length=="0")
												   {
													
													 $("#nodata").show();
												     $("#unslectaall").hide();
											     	  $("#slectaall").hide();
												   }
												  else
												  {
														$("#update").show();
														$("#update1").show();
														//console.log("lengthssss=="+data.length);
														for(var i=0;i<length;i++);
														{
														   
															
																var res=JSON.stringify(data);
																//var catslength=data[i].items[i].category.length;
																	
																
																	
																	
																	for(var j=0;j<data[0].items.length;j++)
																	{
																		var catt1,catt2,catt3,catt4,catt5;
																		for(var k=0;k<data[0].items[j].category.length;k++)
																		{
																		   if(k==0) 
																		   { 
																							catt1="<li class='par1'>"+(j+1)+"&nbsp;&nbsp;"+data[0].items[j].category[k]+"</li>";
																							$(".itemAvailabiltyWrap").append(catt1);
																		   }
																		   if(k==1) 
																		   { 
																							catt2="<li class='par2 icon-down-dir'>"+data[0].items[j].category[k]+"</li>";
																								 $(".itemAvailabiltyWrap").append(catt2);
																		   }
																		   if(k==2) 
																		   { 
																							catt3="<li class='par3 icon-angle-circled-down'>"+data[0].items[j].category[k]+"</li>";
																							 $(".itemAvailabiltyWrap").append(catt3);
																		   }
																			if(k==3) 
																		   { 
																							catt4="<li class='par4 icon-angle-down'>"+data[0].items[j].category[k]+"</li>";
																							$(".itemAvailabiltyWrap").append(catt4);
																		   }
																			if(k==4) 
																		   { 
																							catt5="<li class='par5 icon-angle-double-down'>"+data[0].items[j].category[k]+"</li>";
																							$(".itemAvailabiltyWrap").append(catt5);
																		   }
																		   
																			
																		}
															
																	//itemsss=data[0].items[j].item.length;
																		//console.log("itesmss=="+itemsss);
																		
																			//var item=data1[i].items[i].item[i].item;
																		
																			
																
																		
																			
																
																			//var len=data[i].items.length;
																			
																			
																			//console.log("lengthss=="+itemsss);
																
																			//var category_name=data[i].category_name.length;
																			
																			
																			
																			//var idCounter=1;
																			
																		var k=0;
																		
																		while(k<data[0].items[j].item.length)
																		{
																				
																				  var statusone=data[0].items[j].item[k].item_name;
																				  //console.log("lengthsss####=="+statusone);
																				  var statusl=data[0].items[j].item[k].status;
																				  //console.log("statusone=="+statusl);
																				  var vid=data[0].items[j].item[k].vendor_item_id;
																				  //console.log("statusone=="+vid);
																			   
																					if(statusl=="0")
																					{
																						$(".itemAvailabiltyWrap").append("<li class='par5 items'><label class='pull-left tp_mrgin3'><input type='checkbox'  class='pull-left chk_" + k + " bigcheck' name='itemnames' value=" + vid + " onclick='avail(this," + vid +")' /><span class='bigcheck-target'></span></label><p class='pull-left' style='margin-top:5px'>"+statusone+"</p></li></br>");
																						
																						
																					}
																					else
																					{
																						$(".itemAvailabiltyWrap").append("<li class='par5 items'><label class='pull-left tp_mrgin3'><input type='checkbox'  class='pull-left chk_" + k + " bigcheck' name='itemnames' value=" + vid + " checked onclick='avail(this," + vid +")' /><span class='bigcheck-target'></span></label><p class='pull-left' style='margin-top:5px'>"+statusone+"</p></li></br>");

																					}
																					 
																			k++;	  
																		}
																
																	
																	}
																
																	

																			
																		

															
															
														}
											
											
											
											
											
											
											}
									
											}
											else
											{
                                              //console.log("fails");

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

///////////////////////functionality for available///////////////////////
	 //////////////////////////////////////////////////////////////////////
var status;	 
function avail(event,itemid)
{


									
						           		
					var networkState = checkconnection();
					if (networkState) 
					{
								            $("#loader").hide();
								            $("#errornet1").show();	
								            
					}
					else
					{
					
					
					   var onlinstatus=online();
			          if(onlinstatus)
			          {
						    var vendor_items_id=itemid;
							if (event.checked) 
							{
								status="1";
							
								
							}
							else 
							{
								status="0";
								
							}
						
							$.ajax(
							{
									type: 'GET',
									url: url+'/oms1/ToggleVendorItem?vendorID='+vendor_id+'&Vendor_items_id='+vendor_items_id+'&item_status='+status,
									contentType: 'application/json; charset=utf-8',
									jsonpCallback: 'jsonCallback',
									dataType: 'jsonp',
								
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
								      
									  alert("Successfully updated item status availability");
									  location.reload();
									  
									   
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

function network()
{
      var loginuser = localStorage.getItem('login');
		if(loginuser=="vadmin")
		{ 
     		$("#errornet2").hide();
     		window.location.replace(  "vendor-admin-index.html?"+querystr);
     	}else
     	{
     	   $("#errornet2").hide();
     	    urlforvendor = window.location.href;
	     
	 
	        urlforvendor=decodeURIComponent(urlforvendor);
			var url_params=urlforvendor.split('?')
		    window.location.replace(  "../vc/index.html?"+url_params[1]);
     	
     	}
}

///////////////////////functionality for slect and delesct all///////////////////////
	 //////////////////////////////////////////////////////////////////////
function common(status,vendor_items_id)
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
														url: url+'/oms1/ToggleVendorItem?vendorID='+vendor_id+'&Vendor_items_id='+vendor_items_id+'&item_status='+status,
														contentType: 'application/json; charset=utf-8',
														jsonpCallback: 'jsonCallback',
														dataType: 'jsonp',
														timeout:10000,
														jsonp: false,
														cache: false,
														async: true,
														dataType: 'jsonp',
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
														  $("#loader").hide(); 
														  alert("Updated item status successfully");
														  location.reload();
														  
														   
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


        

		
