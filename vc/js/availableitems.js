
   
   
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
			var networkState;
       	//mobile support or not
	
	    
		//getting queary string by name
        function getParameterByName(name)
		{
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
		querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ;  
	
					
		function onDeviceReady()
		{
	              
					document.addEventListener('backbutton', backButtonCallback, false);
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
				   				  window.location.replace(  "vendor-admin-index.html" + querystr);
				
		}	
        $(document).ready(function ()
		{
		
		
									
							
								  document.addEventListener("deviceready", onDeviceReady, false);	
											
																
									 $("#nodata").hide();
		 
		                            $("#homeiconback").click(function() 
									{
										
											window.location.replace(  "vendor-admin-index.html" + querystr);
									});
									 $("#homeicon").click(function() 
									{
										
											window.location.replace(  "vendor-admin-index.html" + querystr);
									});
		        
									//logout
									$("#logout").click(function ()
									{

										window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
									});
									
									$("#update").hide();
									$("#update1").hide();
									
									$("#vendorname")[0].innerHTML = vendor_name;
									$("#locationname")[0].innerHTML = screenname;
									$("#vendorusername")[0].innerHTML = vendor_user_name;
									timerforajax=setInterval(function()
								     { 
								           	     get();
								           	     
								     }, 1000);
									
									
					
									$("#update").click(function()
									{
									            var devicecon=checkconnection();
											     if(devicecon)
											     {
											      											 $("#loader").hide();
																			           	    $("#errornet3").show();	
											     }else
											     {
											          var onlinstatus=online();
											          if(onlinstatus)
											          {
													     var array=[];	
														$("input[name='itemnames']:checked").each( function ()
														{
															//alert($(this).val());
															array.push($(this).val());
														});
														var array1=[array];
														
														var json='[{"itemstatus":{"items": ['+array+']}}]';
														
														var item_json=JSON.stringify(json);
														var xss = item_json.replace(/\\/g, '');
														
														//console.log("item_jsonxss"+xss);
														
														var operation="set";
												
														$.ajax(
																{
																	type: 'GET',
																	url: url+'/oms1/availableHomeDeleveryitems?vendor_id='+vendor_id+'&jsonchk='+json+'&operation='+operation,
																	contentType: 'application/json; charset=utf-8',
																	jsonpCallback: 'jsonCallback',
																	timeout:10000,
																	cache: false,
																	async: true,
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
																		 
																		  alert("Item Status saved  successfully")
																	        location.reload();
																	
																	  
																	},
																	error: function(jqXHR, exception) 
																	{
																								if (jqXHR.status === 0) 
																								{
																								                 
																													 $("#errornet3").show();	
																													$("#loader").hide();	
																								} 
																								else if (jqXHR.status == 404) 
																								{
																													   //alert('Requested page not found. [404]');
																													    $("#errornet3").show();
																														$("#loader").hide();
																														
																								} else if (jqXHR.status == 500) 
																								{
																														//alert('Internal Server Error [500].');
																														 $("#errornet3").show();
																													$("#loader").hide();
																														
																								} 
																								else if (exception === 'parsererror') 
																								{
																														//alert('Requested JSON parse failed.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																								} 
																								else if (exception === 'timeout') 
																								{
																													 $("#errornet3").show();		
																														$("#loader").hide();
																														
																								}
																								else if (exception === 'abort') 
																								{
																														//alert('Ajax request aborted.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																														
																														
																								} 
																								else 
																								{
																														//alert('Uncaught Error.\n' + jqXHR.responseText);
																														 $("#errornet3").show();
																														$("#loader").hide();
																								}
																	}
																});
											
													  }
													  else
											          {
											             $("#errornet3").show();	
														 $("#loader").hide();
											          
											          }
												 }
												
											
											
									});
								  $("#update1").click(function()
									{
									          var devicecon=checkconnection();
										     if(devicecon)
										     {
										      											 $("#loader").hide();
																		           	    $("#errornet3").show();	
										     }else
										     {
										          var onlinstatus=online();
										          if(onlinstatus)
										          {
												    	 var array=[];	
														$("input[name='itemnames']:checked").each( function ()
														{
															//alert($(this).val());
															array.push($(this).val());
														});
														var array1=[array];
														
														var json='[{"itemstatus":{"items": ['+array+']}}]';
														
														var item_json=JSON.stringify(json);
														var xss = item_json.replace(/\\/g, '');
														
														//console.log("item_jsonxss"+xss);
														
														var operation="set";
												
														$.ajax(
																{
																	type: 'GET',
																	url: url+'/oms1/availableHomeDeleveryitems?vendor_id='+vendor_id+'&jsonchk='+json+'&operation='+operation,
																	contentType: 'application/json; charset=utf-8',
																	jsonpCallback: 'jsonCallback',
																	timeout:10000,
																	cache: false,
																	async: true,
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
																		 
																		  alert("Item Status saved  successfully")
																	     location.reload();
																	
																	  
																	},
																	error: function(jqXHR, exception) 
																	{
																								if (jqXHR.status === 0) 
																								{
																								                 
																													 $("#errornet3").show();	
																													$("#loader").hide();	
																								} 
																								else if (jqXHR.status == 404) 
																								{
																													   //alert('Requested page not found. [404]');
																													    $("#errornet3").show();
																														$("#loader").hide();
																														
																								} else if (jqXHR.status == 500) 
																								{
																														//alert('Internal Server Error [500].');
																														 $("#errornet3").show();
																													$("#loader").hide();
																														
																								} 
																								else if (exception === 'parsererror') 
																								{
																														//alert('Requested JSON parse failed.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																								} 
																								else if (exception === 'timeout') 
																								{
																													 $("#errornet3").show();		
																														$("#loader").hide();
																														
																								}
																								else if (exception === 'abort') 
																								{
																														//alert('Ajax request aborted.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																														
																														
																								} 
																								else 
																								{
																														//alert('Uncaught Error.\n' + jqXHR.responseText);
																														 $("#errornet3").show();
																														$("#loader").hide();
																								}
																	}
																});
												  }
												  else
										          {
										             $("#errornet3").show();	
													 $("#loader").hide();
										          
										          }
											 }
												
											
											
											
									});
									
									

           
        });

	function deleted(itemid)
	{
			 var devicecon=checkconnection();
		     if(devicecon)
		     {
		      											 $("#loader").hide();
										           	    $("#errornet3").show();	
		     }else
		     {
		          var onlinstatus=online();
		          if(onlinstatus)
		          {
				     var r = confirm("Are you sure want to delete item?");
					if (r == true) 
					{
																		var vendor_items_id=itemid;
																		var operation="delete";
																		var json='';
																		//console.log("thisid"+vendor_items_id);
																		$.ajax(
																			{
																				type: 'GET',
																				url: url+'/oms1/availableHomeDeleveryitems?vendor_id='+vendor_id+'&jsonchk='+json+'&vendor_items_id='+vendor_items_id+'&operation='+operation,
																				contentType: 'application/json; charset=utf-8',
																				jsonpCallback: 'jsonCallback',
																				timeout:10000,
																				cache: false,
																				async: true,
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
																					 
																					 if(data==true)
																					 {
																					   alert("Item deleted successfully");
																					   location.reload();
																					 }
																					 else
																					 {
																					 
																					 }
																					
																				
																				
																				  
																				},
																				error: function(jqXHR, exception) 
																			 	{
																								if (jqXHR.status === 0) 
																								{
																								                 
																													 $("#errornet3").show();	
																													$("#loader").hide();	
																								} 
																								else if (jqXHR.status == 404) 
																								{
																													   //alert('Requested page not found. [404]');
																													    $("#errornet3").show();
																														$("#loader").hide();
																														
																								} else if (jqXHR.status == 500) 
																								{
																														//alert('Internal Server Error [500].');
																														 $("#errornet3").show();
																													$("#loader").hide();
																														
																								} 
																								else if (exception === 'parsererror') 
																								{
																														//alert('Requested JSON parse failed.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																								} 
																								else if (exception === 'timeout') 
																								{
																													 $("#errornet3").show();		
																														$("#loader").hide();
																														
																								}
																								else if (exception === 'abort') 
																								{
																														//alert('Ajax request aborted.');
																														 $("#errornet3").show();
																														$("#loader").hide();
																														
																														
																								} 
																								else 
																								{
																														//alert('Uncaught Error.\n' + jqXHR.responseText);
																														 $("#errornet3").show();
																														$("#loader").hide();
																								}
																			}
																			});
					}
				  }
				  else
		          {
		             $("#errornet3").show();	
					 $("#loader").hide();
		          
		          }
			 }							
			
	
	}

function get()
{

							     clearInterval(timerforajax);
							     var devicecon=checkconnection();
							     if(devicecon)
							     {
							      											 $("#loader").hide();
															           	    $("#errornet1").show();	
							     }else
							     {
							          var onlinstatus=online();
							          if(onlinstatus)
							          {
									     	var jsonchk="";
											var operation="get";
											var catarry=[];
											var itemarry=[];
											var statusarry=[];
											var jsonres;
											var itemslen;
											var itemsss;
											var length;
											$("#nodata").hide();
								
							
											$.ajax(
											{
												type: 'GET',
												url: url+'/oms1/availableHomeDeleveryitems?vendor_id='+vendor_id+'&jsonchk='+jsonchk+'&operation='+operation,
												//contentType: 'application/json; charset=utf-8',
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
													applyBigStyles();
												},
												success: function (data)
												{
												
													var jsonres2=JSON.stringify(data);
													console.log("jsonres2=="+jsonres2);
										            if(data==undefined)
													{
													
													   $("#nodata").show();
													}
													if(data != undefined)
													{
													  
													      length=data[0].items.length;
												   
														   if(length=="0")
														   {
															
															 $("#nodata").show();
														   
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
																									$(".cat").append(catt1);
																				   }
																				   if(k==1) 
																				   { 
																									catt2="<li class='par2 icon-down-dir'>"+data[0].items[j].category[k]+"</li>";
																										 $(".cat").append(catt2);
																				   }
																				   if(k==2) 
																				   { 
																									catt3="<li class='par3 icon-angle-circled-down'>"+data[0].items[j].category[k]+"</li>";
																									 $(".cat").append(catt3);
																				   }
																					if(k==3) 
																				   { 
																									catt4="<li class='par4 icon-angle-down'>"+data[0].items[j].category[k]+"</li>";
																									$(".cat").append(catt4);
																				   }
																					if(k==4) 
																				   { 
																									catt5="<li class='par5 icon-angle-double-down'>"+data[0].items[j].category[k]+"</li>";
																									$(".cat").append(catt5);
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
																						  
																						  console.log("itemname=="+statusone);
																						  //console.log("lengthsss####=="+statusone);
																						  var statusl=data[0].items[j].item[k].status;
																						  //console.log("statusone=="+statusl);
																						  var vid=data[0].items[j].item[k].vendor_item_id;
																						  //console.log("statusone=="+vid);
																					   
																							if(statusl=="0")
																							{
																								$(".cat").append("<li class='par5 items'><input type='hidden' value=" + vid +" id='hidden' onclick='deleted(" + vid +")' /><a class='icon-trash cls_btn' id=" + vid + " onclick='deleted(" + vid +")' ></a>&nbsp;&nbsp;&nbsp;<label class='pull-left tp_mrgin3'><input type='checkbox'  class='pull-left chk_" + k + " bigcheck' name='itemnames' value=" + vid + " /></label><p class='pull-left' style='margin-top:5px'>"+statusone+"</p></li></br>");
																							}
																							else
																							{
																								$(".cat").append("<li class='par5 items'><input type='hidden' value=" + vid +" id='hidden' onclick='deleted(" + vid +")' /><a class='icon-trash cls_btn' id=" + vid + " onclick='deleted(" + vid +")' ></a>&nbsp;&nbsp;&nbsp;<label class='pull-left tp_mrgin3'><input type='checkbox' class='pull-left chk_" + k + " bigcheck' name='itemnames' value=" + vid + " checked  /></label><p class='pull-left' style='margin-top:5px'>"+statusone+"</p></li></br>");
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
     
///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function onDeviceReadycall()
{
	               networkState = navigator.connection.type;	
					
}   
function network()
{
       
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	$("#errornet3").hide();
     	window.location.replace(  "vendor-homedelivery.html" + querystr);
}
function network1()
{
       
     	$("#errornet1").hide();
     	$("#errornet3").hide();
        window.location.replace(  "vendor-homedelivery.html" + querystr);
     	 
}
function network2()
{
       
     	$("#errornet3").hide();
       
     	 
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


       



        

		
