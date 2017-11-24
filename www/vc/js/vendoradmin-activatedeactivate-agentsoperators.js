
        var status;
        //var vendorId = '1011000500072001001';
        var id;
        var screenname = "";
        var vendor_id = "";
        var vendor_users_id = "";
        var vendor_type_id = "";
        var location_id = "";
        var vendor_session_id = "";  /////  var clientsessionid="";
        var vendor_name = "";
        var vendor_user_name = "";
        var querystr = "";
        var UUID = "";
		var mobile_number="";
		screenname = getParameterByName('sName');
        vendor_id = getParameterByName('vendor_id');
        vendor_users_id = getParameterByName('vendor_users_id');
        vendor_type_id = getParameterByName('vendor_type_id');
        location_id = getParameterByName('location_id');
        vendor_session_id = getParameterByName('session_id');
        vendor_name = getParameterByName('vendor_name');
        vendor_user_name = getParameterByName('vendor_user_name');
		mobile_number=getParameterByName('mobile_number');
        UUID = getParameterByName('UUID');
        var timerforajax;
        var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number; //For Passing extra parameters
        var networkState;
		var resss;
		function backButtonCallback()
		{
				                $("#loader").show();
				                resss=setInterval(function(){   madhuSS();}, 1000);
		}
		function madhuSS()
		{
							
								clearInterval(resss);
				   				window.location.replace("vendor-admin-index.html" + querystr);
				
		}			
		function onDeviceReady()
		{
                networkState = navigator.connection.type;
				document.addEventListener('backbutton', backButtonCallback, false);
		}
		//mobile support or not
	
        $(function () 
		{
							
			$("#loader").show();
								
			document.addEventListener("deviceready", onDeviceReady, false);	
											
			var loginuser = localStorage.getItem('login');
           if(loginuser=="vadmin")
		   {
		   
		        $("#vendorname")[0].innerHTML = vendor_name;
	            $("#locationname")[0].innerHTML = screenname;
	            $("#vendorusername")[0].innerHTML = vendor_user_name;
	
	
	            //var ThName=getParameterByName();
	
	
	            //$(".theatreName").html(ThName.sName);
	            $("#homeicon").click(function () {
	
	               window.location.replace( "vendor-admin-index.html" + querystr);
	            });
				
				
				$("#Back").click(function () {
	
	                window.location.replace(  "vendor-admin-index.html" + querystr);
	            });
				
				
				
	            $("#logout").click(function () {
	
	                 window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
	            });
	
	
	            //});
	
	            //var res='{"Agents":[["Raj Cool Drinks","Prashanth Bakers","Praveen Coffe Bar","Ravi Popcorn","Salman chocolates","KFC Banjara","KFC Banjara","Bhasker Corn"],["10101500072001001","10101500072001003","10101500072001006","10101500073002002","10101500073002005","10101500076005007","10101500076005008","10201500075004004"]],"Operators":[["agent_Raj","agent_Raj2","agent_Ravi2","agent_Prashanth","agent_Salman","agent_Praveen","agent_Bhaskar","agent_KFC"],["2","4","6","9","11","13","15","17"]]}';
	            //var res1='{"AgentName":["praven","kumar"],"AgentId":["1","2"],"OPeratorName":["kkk","ggg"],"OPeratorId":["4","5"]}'
	
	         
	            status = 'getSA';
	            id = '';
	           
				
			
				timerforajax=setInterval(function()
				{ 
						           	    getData();
						           	     
				 }, 1000);
         
		      
		   
		   
		   }else
		   {
		   
		       window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
			    return false;
		   }					
           

           






           
          

            


        });
		
		
		
		function getData()
		{
		         $("#loader").show();
		    	 clearInterval(timerforajax);
				 var networkState = checkconnection();
			
				if(networkState) 
				{
										       $("#loader").hide();
								           	   $("#errornet4").show();	
								              
				 }else
				 {
		  	var cName = [];
            var cId = [];
            var cStatus = [];
			var cPhone=[];
			var aCreatedDate=[];
			var aModifiedDate=[];
			var opCreatedDate=[];
			var opModifiedDate=[];
			var cCreatedDate=[];
			var cModifiedDate=[];

            var aName = [];
            var aId = [];
			  var aStatus = [];
			  var aPhone=[];
			  
            var opName = [];
            var opId = [];
          
            var oStatus = [];
			var opPhone=[];
            var agent;
            var operator;
            var cook;
            status = 'getSA';
            id = '';
            var check;
            var jsonResponse;
		
		
		$.ajax({
                type: 'GET',
                url: url + '/oms1/getAgentAndOperators?parent_vendor_id=' + vendor_id + '&vendor_users_id=' + "" + '&status=' + status + '&shared_vendor_id=' + "" + '&shared_vendor_name=' + "" + '&session_id=' + vendor_session_id + '&UUID=' + UUID,

                jsonpCallback: 'jsonCallback',
                cache: true,
                dataType: 'jsonp',
                jsonp: false,
				timeout:10000,
				async: true,
                success: function (response) {
				$("#loader").hide();
                    var res = JSON.stringify(response);
                    var obj = $.parseJSON(res);

                    aName = obj.AgentName;
                    aId = obj.AgentId;
					aStatus = obj.AgentStatus;
					aPhone=obj.AgentMobileNo;
					aCreatedDate=obj.AgentCreatedDate;
					aModifiedDate=obj.AgentModifiedDate;
					
                    opName = obj.OperatorName;
                    opId = obj.OperatiorID;
                    oStatus = obj.OperatorStatus;
					opPhone=obj.OperatorMobileNo;
					opCreatedDate=obj.OperatorCreatedDate;
					opModifiedDate=obj.OpertorModifiedDate;
					

                    cName = obj.CookName;
                    cId = obj.CookID;
                    cStatus = obj.CookStatus;
					cPhone=obj.CookMobileNo;
					cCreatedDate=obj.CookCreatedDate;
					cModifiedDate=obj.CookModifiedDate;					

                    if (aName) {
                        for (var k = 0; k < aName.length; k++) {
						
						var createddate=(aCreatedDate[k]!=undefined)?aCreatedDate[k]:"No Date";
					      var modifieddate=(aModifiedDate[k]!=undefined)?aModifiedDate[k]:"No Date";
						
						
                            if (aStatus[k] == '1') { //Removed <td>' + createddate+ '</td>
                                agent += '<tr class="ordId"id=' + aId[k] + '><td>' + aName[k] + '</td><td>' + aPhone[k] + '</td><td>' + modifieddate + '</td><td align="center" ><label class="tp_mrgin_mins15"><input type="checkbox" checked class="checkbox1 bigcheck" value=' + aId[k] + ' name="SA"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete" onclick="deleted(' + aId[k] +')"  /></td></tr>';
                            } else {
							     //Removed <td>' + createddate + '</td>
                                agent += '<tr class="ordId"id=' + aId[k] + '><td>' + aName[k] + '</td><td>' + aPhone[k] + '</td><td>' + modifieddate  + '</td><td align="center" ><label class="tp_mrgin_mins15"><input type="checkbox"  class="checkbox1 bigcheck" value=' + aId[k] + ' name="SA"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete" onclick="deleted(' + aId[k] +')"  /></td></tr>';
                            }

                        }
                    }

                    if (opName) {
                        for (var i = 0; i < opName.length; i++) {
						
							var createddate=(opCreatedDate[i]!=undefined)?opCreatedDate[i]:"No Date" ;
					      var modifieddate=(opModifiedDate[i]!=undefined)?opModifiedDate[i]:"No Date"
                            if (oStatus[i] == '1') {
                                operator += '<tr class="ordId" id=' + opId[i] + '><td>' + opName[i] + '</td><td>' + opPhone[i] + '</td><td>' + modifieddate+ '</td><td align="center"><label class="tp_mrgin_mins15"><input type="checkbox" checked class="checkbox1 bigcheck" value=' + opId[i] + ' name="OP"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete"  onclick="deleted(' + opId[i] +')"  /></td></tr>';
                            } else {
                                operator += '<tr class="ordId" id=' + opId[i] + '><td>' + opName[i] + '</td><td>' + opPhone[i] + '</td><td>' + modifieddate+ '</td><td align="center"><label class="tp_mrgin_mins15"><input type="checkbox" class="checkbox1 bigcheck" value=' + opId[i] + ' name="OP"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete"  onclick="deleted(' + opId[i] +')"  /></td></tr>';
                            }
                        }


                    }


                    if (cName) {
                        for (var i = 0; i < cName.length; i++) {
						
						var createddate=(cCreatedDate[i]!=undefined)?cCreatedDate[i]:"No Date";
					      var modifieddate=(cModifiedDate[i]!=undefined)?cModifiedDate[i]:"No Date";
						
                            if (cStatus[i] == '1') {
                                cook += '<tr class="ordId" id=' + cId[i] + '><td>' + cName[i] + '</td><td>' + cPhone[i] + '</td><td>' + modifieddate + '</td><td align="center"><label class="tp_mrgin_mins15"><input type="checkbox" checked class="checkbox1 bigcheck" value=' + cId[i] + ' name="CO"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete" onclick="deleted(' + cId[i] +')"  /></td></tr>';
                            } else {
                                cook += '<tr class="ordId" id=' + cId[i] + '><td>' + cName[i] + '</td><td>' + cPhone[i] + '</td><td>' + modifieddate + '</td><td align="center"><label class="tp_mrgin_mins15"><input type="checkbox" class="checkbox1 bigcheck" value=' + cId[i] + ' name="CO"></label></td><td valign="middle" align="center"><input class="btn btn-primary btn-xs" type="button" value="delete" onclick="deleted(' + cId[i] +')"  /></td></tr>';
                            }
                        }


                    }


                    $('#keywords > tbody').html(agent);
                    $('#key > tbody').html(operator);
                    $('#keyKeyword > tbody').html(cook);

					BindEvents(); 
					
					// this function for check box 
					$('.bigcheck, .bigradio').each(function(){
						$(this).parent().append('<span class="bigcheck-target"></span>');
					});


                    // $("#agent").html(agent);
                    // $("#operator").html(operator);
                    // $("#cook").html(cook);

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


        function BindEvents() 
		{
            
           			 $(".checkbox1").click(function () 
           			 {
                           	 var networkState = checkconnection();
							if(networkState) 
							{
														   $("#loader").hide();
														   $("#errornet4").show();	
														  
							 }else
							 {
              		  if ($(this).is(':checked')) {
                    var agentId = $(this).val();
					var userType=$(this)[0].name;
                    // alert(agentId);
                    var status = "1";
                    $.ajax({
                        type: 'GET',
                        url: url + '/oms1/getAgentAndOperators?parent_vendor_id=' + vendor_id + '&vendor_users_id=' + agentId + '&status=' + status + '&shared_vendor_id=' + "" + '&shared_vendor_name=' + "" + '&session_id=' + vendor_session_id + '&UUID=' + UUID,
                        jsonpCallback: 'jsonCallback',
                        cache: true,
                        dataType: 'jsonp',
                        timeout:10000,
						async: true,
						
                        success: function (response) 
						{
							$("#loader").hide();
							location.reload();
							 var alertMsg=" Activated successfully";
							 switch(userType)
							 {
								 case "SA":
								 alertMsg="Service Agent "+alertMsg;
								  break;
								 case "OP":
								 alertMsg="Operator "+alertMsg;
								  break;
								 case "CO":
								 alertMsg="Cook "+alertMsg;
								  break;
							 }
							 
							 alert(alertMsg);

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
                if (!$(this).is(':checked')) {
                    //alert("HEllo");
                    var agentId = $(this).val();
					var userType=$(this)[0].name;
                    var status = "0";
                    $.ajax({
                        type: 'GET',
                        url: url + '/oms1/getAgentAndOperators?parent_vendor_id=' + vendor_id + '&vendor_users_id=' + agentId + '&status=' + status + '&shared_vendor_id=' + " " + '&shared_vendor_name=' + " " + '&session_id=' + vendor_session_id + '&UUID=' + UUID,
                        timeout:10000,
						async: true,
                        jsonpCallback: 'jsonCallback',
                        cache: true,
                        dataType: 'jsonp',
                        jsonp: false,
						
                        success: function (response) {
						$("#loader").hide();
                            //getData();
							location.reload();
							 var alertMsg=" De-Activated successfully";
							 switch(userType)
							 {
								 case "SA":
								 alertMsg="Service Agent "+alertMsg;
								 break;
								 case "OP":
								 alertMsg="Operator "+alertMsg;
								  break;
								 case "CO":
								 alertMsg="Cook "+alertMsg;
								  break;
							 }
							 
							 alert(alertMsg);
							
							
                        },
                        error:function(jqXHR, exception)  
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
            });
			
			
			
        


        }
		function deleted(agentId)
		{
	
	
              var networkState = checkconnection();
				if(networkState) 
				{
										       $("#loader").hide();
								           	   $("#errornet4").show();	
								              
				 }else
				 {  
                var status = "deleteagent";
				
				
				 var confirmation=window.confirm("Are you sure you want to delete this user? (OK/CANCEL)");
				
				
				
				if(confirmation)
				{
                $.ajax({
                    type: 'GET',
                    url: url + '/oms1/getAgentAndOperators?parent_vendor_id=' + vendor_id + '&vendor_users_id=' + agentId + '&status=' + status + '&shared_vendor_id=' + " " + '&shared_vendor_name=' + " " + '&session_id=' + vendor_session_id + '&UUID=' + UUID,

                    jsonpCallback: 'jsonCallback',
                    cache: true,
                    dataType: 'jsonp',
                    jsonp: false,
					
                    success: function (response) 
					{

                        $('#' + agentId).remove();
						$("#loader").hide();
						 //getData();
						 location.reload();

                    },
                    error: function (xhr, ajaxOptions, thrownError) 
					{
                        //console.log("error status: " + xhr.status);
                        //console.log("error status text: " + xhr.statusText);
                        //console.log("error response text: " + xhr.responseText);
                    },
                    error:function(jqXHR, exception)  
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
	 
	 }

        //getting queary string by name
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        
 ///////Check connection/////////////////////////////////////
 ///////////////////////////////////////////////////////////  
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
        
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	$("#errornet3").hide();
     	window.location.replace("vendor-admin-index.html" + querystr);
}
function network2()
{
        
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	$("#errornet3").hide();
     	window.location.replace("vendor-admin-index.html" + querystr);
}
function network3()
{
        
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	$("#errornet3").hide();
     	$("#errornet4").hide();
     
}
