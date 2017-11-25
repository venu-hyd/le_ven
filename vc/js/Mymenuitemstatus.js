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
//var vendortypeloggedin=getParameterByName('vendor_type_id');
var redirectedfrom = getParameterByName('redirectedfrom');
var mobile_number=getParameterByName('mobile_number');
var screen_ids = getParameterByName('screen_id');
var session_id = getParameterByName('session_id');
//var VID= getParameterByName('vendor_id');
var nameArray = getParameterByName('nameArray');
//var vendorUserId= getParameterByName('vendor_users_id');
var theaterName = getParameterByName('sName');
var seat_num = getParameterByName('seatnum');
var row = getParameterByName('row');
var pendingtime;
var rejectedtime;
var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID;  //For Passing extra parameters
         
	     
		

		  
		 
var vid;
var networkState; 	
	

//getting queary string by name
function getParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  //device back button called in my item status

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
					            if (redirectedfrom.trim() == "vendorscreen") 
								{
						            redirectedfrom = 'vendoradmin';
						            window.location.replace(  "index.html? UUID=" + UUID + '&location_id=' + location_id + '&vendor_type_id=' + vendor_type_id + '&redirectedfrom=' + redirectedfrom + '&screen_id=' + screen_ids + '&session_id=' + session_id + '&VID=' + vendor_id + '&nameArray=' + nameArray + '&vendor_session_id=' + vendor_session_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&vendor_users_id=' + vendor_users_id + '&UUID=' + UUID + "&sName=" + theaterName + "&customer_id=" + "" + "&seatnum=" + seat_num + "&row=" + row+'&mobile_number=' + mobile_number);
						        }
						        else 
								{
								
						           
						             window.location.replace( "vendor-admin-index.html"+querystr);
						           
						        }
}						
function onDeviceReady()
{
	                  
				  
					document.addEventListener('backbutton', backButtonCallback, false);
				
}

$(document).ready(function() 
{

	document.addEventListener("deviceready", onDeviceReady, false);								
									
	$("#nodata").hide();
	$("#loader").show();

    $("#vendorname")[0].innerHTML = vendor_name;
    $("#locationname")[0].innerHTML = screenname;
    $("#vendorusername")[0].innerHTML = vendor_user_name;

    //logout

    $("#logout").click(function() 
	{

       window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);

    });

    //BACK TO HOME

    $("#homeicon").click(function() 
	{

        if (redirectedfrom.trim() == "vendorscreen") 
		{
            redirectedfrom = 'vendoradmin';
           window.location.replace(  "index.html? UUID=" + UUID + '&location_id=' + location_id + '&vendor_type_id=' + vendor_type_id + '&redirectedfrom=' + redirectedfrom + '&screen_id=' + screen_ids + '&session_id=' + session_id + '&VID=' + vendor_id + '&nameArray=' + nameArray + '&vendor_session_id=' + vendor_session_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&vendor_users_id=' + vendor_users_id + '&UUID=' + UUID + "&sName=" + theaterName + "&customer_id=" + "" + "&seatnum=" + seat_num + "&row=" + row+'&mobile_number=' + mobile_number);
        } else 
		{
            //var section = getParameterByName('section');
           
           window.location.replace( "vendor-admin-index.html"+querystr);
            //window.history.back();
        }



    });
	//Default functionality check
    var strUser = $("#itemstatus option:selected").val();

    if (strUser == "pending") 
	{
	
					pendingtime=setInterval(function()
					 {
						           		 
					           	  		pending();
					           	 
					           	 
					  }, 1000);	
						           		 
					           	  		
					           	 
					           	
       

    }

    $("#itemstatus").change(function() 
	{
        var strUser = $("#itemstatus option:selected").val();

 		 $("#loader").show();

        if (strUser == "pending") 
		{

		  		
						           		 
					 pendingtime=setInterval(function()
					 {
						           		 
					           	  		pending();
					           	 
					           	 
					  }, 1000);	
					           	  
					           	 
					           	  

        } 
		//reject option
		else 
		{
            
            
           			 rejectedtime=setInterval(function()
					 {
						           		 
					           	  		rejected();
					           	 
					           	 
					  }, 1000);
        }




    });





});

//pending item functionality start from here

function pending() 
{
	clearInterval(pendingtime);
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
		     var operation = "Inactive";
	   		 //GET FUNCTIONALITY
	
	   		 $("#nodata").hide();
	   		 $(".cat").html("");
	
	   		$.ajax({
	        type: 'GET',
	        url: url + '/oms1/pendingitems?operation=' + operation + '&vendor_id=' + vendor_id,
	        jsonpCallback: 'jsonCallback',
			dataType: "jsonp",
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
	        success: function(data) 
			{
	            
	            $("#loader").hide();
	            var res = JSON.stringify(data);
	          
	       
	            if (data.length == "0" || data == "false") 
				{
	
	                $("#nodata").show();
	
	            } else 
				{
	                var array1 = [];
	                $.each(data, function(i, item) 
					{
	                    var res = JSON.stringify(data);
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
	
	
	                  
	
	
	                    var items = data[i].items;
	                    var len = data[i].items.length;
	                    var image = data[i].image;
	                    var status = data[i].status;
	                    vid = data[i].vendor_Items_id;
	                    var category_name = data[i].category_name.length;
	
	                    for (var i = 0; i < len; i++) 
	                    {
	
	
	
	                        if (image[i] == "" || image[i] == undefined) 
	                        {
	                            $(".cat").append("<li class='itemPic_wrap'><div class='itemPic_inner'><img src='images/dummy.jpg' style='width:40px;height:40px'>&nbsp;&nbsp;" + items[i] + "<input type='hidden' value=" + vid[i] + " id='hidden' onclick='itemdeleted(" + vid[i] + ")' /><a class='icon-trash delebutton' id=" + vid[i] + " onclick='itemdeleted(" + vid[i] + ")' ></a></div></li></br>");
	
	                        } else {
	
	                            $(".cat").append("<li class='itemPic_wrap' ><div class='itemPic_inner'><img src=" + image[i] + " style='width:40px;height:40px'>&nbsp;&nbsp;" + items[i] + "<input type='hidden' value=" + vid[i] + " id='hidden' onclick='itemdeleted(" + vid[i] + ")' /><a class='icon-trash delebutton' id=" + vid[i] + " onclick='itemdeleted(" + vid[i] + ")' ></a></div></li></br>");
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
																				$("#loader").hide();
																				$("#errornet2").show();
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

//pending item delete functionality

function itemdeleted(itemid) 
{
     var networkState = checkconnection();
						           		
	if (networkState) 
	{
				
											$("#loader").hide();
								            $("#errornet2").show();	
								            clearInterval(rejectedtime);
								            
								           
								           
	 }else
	 {
           var onlinstatus=online();
          if(onlinstatus)
          {
		      		 var r = confirm("Are you sure want to delete item?");
			        if (r == true) 
					{
				            var vendor_items_id = itemid;
				            var operation = "delete";
				            //console.log("thisid" + vendor_items_id);
				            $.ajax({
				                type: 'GET',
				                url: url + '/oms1/pendingitems?operation=' + operation + '&vendor_items_id=' + vendor_items_id,
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
				                success: function(data) 
								{
				
				                    alert("Item delete successfully");
				                    pending();
				
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

//reject item delete functionality
	
function rejected() 
{
    var networkState = checkconnection();
						           		
	if (networkState) 
	{
				
											$("#loader").hide();
								            $("#errornet2").show();	
								            clearInterval(rejectedtime);
								            
								           
								           
	 }else
	 {
	 
	    	var onlinstatus=online();
          if(onlinstatus)
          {
		     	clearInterval(rejectedtime);
				 $(".cat").html("");
			    var operation = "Rejected";
			    //GET FUNCTIONALITY
			
			    $("#nodata").hide();
			
			
			    $.ajax({
			        type: 'GET',
			        url: url + '/oms1/pendingitems?operation=' + operation + '&vendor_id=' + vendor_id,
			        //contentType: 'application/json; charset=utf-8',
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
			        success: function(data) 
					{
			
			
			            var res = JSON.stringify(data);
			
			     
			            if (data.length == "0" || data == "false") 
						{
			
			                $("#nodata").show();
			
			            } 
						else 
						{
			                var array1 = [];
			                $.each(data, function(i, item) 
							{
			                    var res = JSON.stringify(data);
			
			
			
			                    var cats = data[i].category_name;
			                    array1.push(cats);
			
			
			
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
			
						
			                    var items = data[i].items;
			                    var len = data[i].items.length;
			                    var image = data[i].image;
			                    var status = data[i].status;
			                    vid = data[i].vendor_Items_id;
			                    var category_name = data[i].category_name.length;
			                    var descriptive = data[i].error_text;
								var reason = "";
			  
			                    for (var j = 0; j < len; j++)
			                    {
			
			                        if (image[j] == "" || image[j] == undefined)
			                        {
			
			
			
			
			                          
			                                 if (descriptive[j] == ""||descriptive[j] ==undefined)
			                                {
			                                    reason = "No Reason";
			                                }
			                                else
			                                {
			                                    reason = descriptive[j];
			                                }
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			                                $(".cat").append("<li class='itemPic_wrap'><div class='itemPic_inner'><img src='images/dummy.jpg' style='width:40px;height:40px'>&nbsp;&nbsp;" + items[j] + "</div> <input type='hidden' value=" + vid[j] + " id='hidden' onclick='itemdeletedreject(" + vid[j] + ")' /><a class='icon-trash delebutton' id=" + vid[j] + " onclick='itemdeletedreject(" + vid[j] + ")' ></a></br><b style='color: #FC6;'>Reason : </b>" + reason + "</li></br>");
			                           
			
			                        }
			                        else
			                        {
			
			                            
			                         
			                                if (descriptive[j] == ""||descriptive[j] ==undefined)
			                                {
			                                    reason = "No Reason";
			                                }
			                                else
			                                {
			                                    reason = descriptive[j];
			                                }
			                                $(".cat").append("<li class='itemPic_wrap'><div class='itemPic_inner'><img src=" + image[j] + " style='width:40px;height:40px'>&nbsp;&nbsp;" + items[j] + "</div> <input type='hidden' value=" + vid[j] + " id='hidden' onclick='itemdeletedreject(" + vid[j] + ")' /><a class='icon-trash delebutton' id=" + vid[j] + " onclick='itemdeletedreject(" + vid[j] + ")' ></a></br><b style='color: #FC6;'>Reason : </b>" + reason + "</li></br>");
			                           
			
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
																					   $("#errornet2").show();
																						$("#loader").hide();
																						
																} else if (jqXHR.status == 500) 
																{
																					  $("#errornet2").show();
																					  $("#loader").hide();
																						
																} 
																else if (exception === 'parsererror') 
																{
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
																						$("#errornet2").show();
																						
																						$("#loader").hide();
																						
																						
																} 
																else 
																{
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
//Reject item delete
function itemdeletedreject(itemid) 
{
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
		     var r = confirm("Are you sure want to delete item?");
    if (r == true) 
	{
	       		 var vendor_items_id = itemid;
	       		 var operation = "delete";
        		//console.log("thisid" + vendor_items_id);
		        $.ajax({
		            type: 'GET',
		            url: url + '/oms1/pendingitems?operation=' + operation + '&vendor_items_id=' + vendor_items_id,
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
		            success: function(data) 
					{
		
		                alert("Item delete successfully");
		                rejected();
		
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
      
     	$("#errornet2").hide();
     	
     	 window.location.replace( "vendor-admin-index.html"+querystr);
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
    catch(e) 
    {
         console.log('An error has occurred: '+e.message);
    }
}