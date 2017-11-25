
	
            var screenname = getParameterByName('sName');
            var vendor_id = getParameterByName('vendor_id');
            var vendor_users_id = getParameterByName('vendor_users_id');
            var vendor_type_id = getParameterByName('vendor_type_id');
            var location_id = getParameterByName('location_id');
            var vendor_session_id = getParameterByName('session_id');
            var vendor_name = getParameterByName('vendor_name');
            var vendor_user_name = getParameterByName('vendor_user_name');
			var UUID = getParameterByName('UUID');
			var	mobile_number=getParameterByName('mobile_number');
		
			var vat,sc,st,ot1,ot2;
			var timerforajax;		
		 var networkState;
  		 var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ;  
		//getting queary string by name
        function getParameterByName(name)
		{
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
		
		//before loading window page
		
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
		function onDeviceReady()
		{
	         	     	
					document.addEventListener('backbutton', backButtonCallback, false);
		}
	
	 	

		
        $(document).ready(function ()
		{
		
		               $("#homeicon").click(function() 
					   {
										
											window.location.replace(  "vendor-admin-index.html" + querystr);
						});
		
		              //mobile support or not
					    $("#Update").hide();
	                	$("#UpdateItem").hide();
					  
	                
					
							 document.addEventListener("deviceready", onDeviceReady, false);	
							
							
					
					   $("#logout").click(function(event)
					   {
				
				                   window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
				       });
				
		      		  	 $("#vendorname")[0].innerHTML = vendor_name;
		      		   	 $("#locationname")[0].innerHTML = screenname;
		        		 $("#vendorusername")[0].innerHTML = vendor_user_name;
						 $("#error1").hide();		 
		
	
							// Document is ready
				
								
							
						timerforajax=setInterval(function()
					     { 
					           	     get();
					           	     
					     }, 1000);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
						$("#get").hide();
					    //inserting new items into db
					
				
					
						//updating new item
						
						$("#Update").click(function()
						{
								$("#loader").show();
						        	timerforajax=setInterval(function()
								     { 
								           	     update();
								           	     
								     }, 1000);
						          
						
						
						});
						
						//updating item
						
						$("#UpdateItem").click(function()
						{
						          $("#loader").show();
									timerforajax=setInterval(function()
								     { 
								           	     updateallitem();
								           	     
								     }, 1000);
													
						
						});
					
          

           
        });
function update()
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
   								  var taxarray=[];
								   var taxvalarr=[];
								   var taxidarr=[];
						
							
									var jsontaxarray = [];
									$('.taxnames').each(function() 
									{
									  var taxname=$(this).text();
									
									  taxarray.push(taxname);
									});	
									
									$('.taxnameval').each(function()
									{
										   var taxval =  $(this).val();
										   taxvalarr.push(taxval);
									});
                                    $('.taxid').each(function()
									{
										   var taxid =  $(this).val();
										   taxidarr.push(taxid);
									});
								
									
									//console.log("length=="+taxarray.length)
									for(var i=0;i<taxarray.length;i++)
									{
									
									
										jsontaxarray.push(
														{
																	
																	"tax_name":taxarray[i],"tax_val":taxvalarr[i],"tax_id":taxidarr[i]
																	
																	
														});
									}
									var jsonarra2={"details":jsontaxarray,"vendor_id":vendor_id};
									
									var item_json=JSON.stringify(jsonarra2);
									
									//console.log("item_json==="+item_json);
									
									var operation="setVendorTaxes";
													
									$.ajax(
									{
										type: 'GET',
										
										url: url+'/oms1/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id+'&tax_val_json='+item_json,
										
								
										jsonpCallback: 'vendortaxvalues',
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
												alert("Taxes Updated Successfully");
											    location.reload();
												
											}
											else
											{
												alert("Invalid Taxes Entered");
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
function updateallitem()
{
        clearInterval(timerforajax);
		$("#loader").show();
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
   									   var taxarray1=[];
								   var taxvalarr1=[];
								   var taxidarr1=[];
						
							
									var jsontaxarray1 = [];
									$('.taxnames').each(function() 
									{
									  var taxname=$(this).text();
									
									  taxarray1.push(taxname);
									});	
									
									$('.taxnameval').each(function()
									{
										   var taxval =  $(this).val();
										   taxvalarr1.push(taxval);
									});
                                    $('.taxid').each(function()
									{
										   var taxid =  $(this).val();
										   taxidarr1.push(taxid);
									});
								
									
									//console.log("length=="+taxarray1.length)
									for(var i=0;i<taxarray1.length;i++)
									{
									
									
										jsontaxarray1.push(
														{
																	
																	"tax_name":taxarray1[i],"tax_val":taxvalarr1[i],"tax_id":taxidarr1[i]
																	
																	
														});
									}
									var jsonarra3={"details":jsontaxarray1,"vendor_id":vendor_id};
									
									var item_json2=JSON.stringify(jsonarra3);
									
									   var r = confirm("Are sure want to update all items?");
									   if (r == true) 
									   {
									   
											var operation1="updateAllVendorItems";
													
											$.ajax(
											{
												type: 'GET',
												url: url+'/oms1/vendortaxvalues?operation='+operation1+'&vendor_id='+vendor_id+'&tax_val_json='+item_json2,
												jsonpCallback: 'vendortaxvalues',
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
														alert("taxes Updated Successfully");
													location.reload();
														
													}
													else
													{
													   $("#loader").hide();
														alert("failed");
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
										} else 
										{
												
												 $("#loader").hide();
										}
			}			
 			else
          {
             $("#errornet2").show();	
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
								           	    $("#errornet2").show();	
     }else
     {
          var onlinstatus=online();
          if(onlinstatus)
          {
              					
									var operation="getVendorTaxes";
									$.ajax(
									{
										type: 'get',
										dataType: 'jsonp',
										async: true,
							            contentType: "application/json",
							            cache: false,
										url: url+'/oms1/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id,
										jsonpCallback: 'vendortaxvalues',
										timeout: 14000,
										beforeSend: function()
										{ 
										   $("#loader").show(); 
										}, 
										complete: function(data) 
										{ 
											$("#loader").hide();
											//var testdata=data.Data;

										},
										success: function (data)
										{
									         
								    
											var jsonsss=JSON.stringify(data);
											
											console.log(data.details);

											if(data.details=="")
											{
												console.log("show");
												$("#error1").show();		
												$("#Update").hide();
												$("#UpdateItem").hide();
											}
							
							   
											if(data!="false")
											{
												
												$("#Update").show();
												$("#UpdateItem").show();
											
											    $("#save").hide();
											 	
											
										
										
													for(var j=0;j<data.details.length;j++)
													{
													
													    var taxname=data.details[j].tax_name;
														var tax_val=data.details[j].tax_val;
														var tax_id =data.details[j].tax_id;
													    //console.log("taxname=="+taxname);
														
													    var result="<div class='taxnames'>"+taxname+"</div></span><input type='number' step='0.01'  class='taxnameval' width='80%' value="+tax_val+" /><input type='hidden' class='taxid' width='80%' value="+tax_id+" />";
													
													    $(".resultvalues").append(result); 
													
													
													}
													
												
													
													
											
											
											}
											else
											{
										          
												
													$("#vat").val("");
													$("#servicecharge").val("");
													$("#servicetax").val("");
												    $("#othertax1").val("");
													$("#othertax2").val("");
													$("#save").show();
													$("#Update").hide();
													$("#UpdateItem").hide();
					  
											
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
function cordovaready()
{

 networkState = navigator.connection.type;   	

}
function network()
{
       
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	 window.location.replace(  "vendor-admin-index.html" + querystr);
}
function network1()
{
       
     	$("#errornet1").hide();
  
     	 
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

       



        

		
