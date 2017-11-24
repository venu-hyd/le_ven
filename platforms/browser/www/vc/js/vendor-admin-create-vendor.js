
        var vendorType = -1;
        var screenname = "";
        var vendor_id = "";
        var vendor_users_id = "";
        var vendor_type_id = "";
        var location_id = "";
        var vendor_session_id = "";
        var vendor_name = "";
        var vendor_user_name = "";
        var querystr = "";
        var UUID = "";
		var mobile_number="";
		
		var keysToAllow=new Array();
keysToAllow.push(8);//back
keysToAllow.push(37);//left
keysToAllow.push(39);//right
keysToAllow.push(38);//top
keysToAllow.push(40);//down
keysToAllow.push(46);//delete
keysToAllow.push(35);//end
keysToAllow.push(36);//home



 var specialKeys = new Array();
        //specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
       // specialKeys.push(46); //Delete
        //specialKeys.push(36); //Home
        //specialKeys.push(35); //End
        //specialKeys.push(37); //Left
        //specialKeys.push(39); //Right
		 specialKeys.push(32); //Right
		  specialKeys.push(47); //Bakward slash
		    specialKeys.push(92); //Forward slash
			  specialKeys.push(45); //Hiphen
			  
			  
		 screenname = getParameterByName('sName');
            vendor_users_id = getParameterByName('vendor_users_id');
            vendor_type_id = getParameterByName('vendor_type_id');
            location_id = getParameterByName('location_id');
            vendor_session_id = getParameterByName('session_id');
            vendor_id = getParameterByName('vendor_id');
            vendor_name = getParameterByName('vendor_name');
            vendor_user_name = getParameterByName('vendor_user_name');
            UUID = getParameterByName('UUID');
			mobile_number=getParameterByName('mobile_number');

            var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ; //For Passing extra parameters
			var resss;
			var networkState; 
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
					   networkState = navigator.connection.type;
				  	  //always use device object after deviceready.**
						document.addEventListener('backbutton', backButtonCallback, false);
			}
        $(function () 
        {
      	   var loginuser = localStorage.getItem('login');
           if(loginuser=="vadmin")
		   {
		       $("#loader").hide();
            //User Validation Related//
           
            document.addEventListener("deviceready", onDeviceReady, false);
            $("#vendorname")[0].innerHTML = vendor_name;
            $("#locationname")[0].innerHTML = screenname;
            $("#vendorusername")[0].innerHTML = vendor_user_name;
			
										
		
            $("#homeicon").click(function () 
			{
                window.location.replace(  "vendor-admin-index.html" + querystr);
            });
			
			
			$("#Back").click(function () 
			{

                window.location.replace(  "vendor-admin-index.html" + querystr);
            });

            $("#logout").click(function () 
			{
                    window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
            });

            //User Validation Related//
            $("#verification_code").fadeOut();
            $(".alert-error").fadeOut(10);
            $(".alert-success").fadeOut(10);
            $(".alert_close").click(function () {
                $(".alert-error").fadeOut();
                $(".alert-success").fadeOut();
            });
            $("#operator")[0].checked = false;
            $("#serviceagent")[0].checked = false;

            $("#operator").click(function () {

                if ($("#operator")[0].checked == false) {
                    $("#operator")[0].checked = true;
                    $("#serviceagent")[0].checked = false;
                    $("#cook")[0].checked = false;
                }
                else {
                    vendorType = 2;
                }
            });

            $("#serviceagent").click(function () {
                if ($("#serviceagent")[0].checked == false) {
                    $("#serviceagent")[0].checked = true;
                    $("#operator")[0].checked = false;
                    $("#cook")[0].checked = false;
                }
                else {
                    vendorType = 1;
                }
            });

            $("#cook").click(function () {
                if ($("#cook")[0].checked == false) {
                    $("#operator")[0].checked = false;
                    $("#serviceagent")[0].checked = false;
                    $("#cook")[0].checked = true;
                }
                else {
                    vendorType = 3;
                }
            });
			
			 $(".btn-createVendorUser").click(function () 
			 {
			   							 var networkState = checkconnection();
						                if (networkState) 
										{
								            $("#loader").hide();
								            $("#errornet1").show();	
								            
								        } else
								        {
								             var name = $("#name")[0].value;
							                var mobile = $("#mobile_number")[0].value;
							                var email="NONE";//$("#email_address")[0].value; New change
											
											if(name=="" && mobile=="" && email=="")
											{
										 
														$("#errMsg").text("Please fill all the fields");
							                            $(".alert-error").fadeIn('slow');
							                            $(".alert-success").fadeOut('slow');
														
														return false;
														
											}
											else if(name=="" || mobile=="" || email=="")
											{
											  var msg="";
											
												if(name.trim()=="")
												{
											      msg="Name";
											    }
												
												if(mobile=="")
												{
												  if(msg.trim()!="")
												  {
												    msg=msg+",Mobile";
												  }
												  else
												  {
												    msg="Mobile";
												  }
												}
												
												if(email=="")
												{
												
												 if(msg.trim()!="")
												  {
												    msg=msg+",Email";
												  }
												  else
												  {
												    msg="Email";
												  }
												
												}
											
											
														$("#errMsg").text(msg+" Required !");
							                            $(".alert-error").fadeIn('slow');
							                            $(".alert-success").fadeOut('slow');
														
												return false;
											
											
											}
										 
										 
										 
										 
										  if(mobile.length<10)
										   {
														$("#errMsg").text("Invalid Mobile Number");
							                            $(".alert-error").fadeIn('slow');
							                            $(".alert-success").fadeOut('slow');
														return false;
										   }
										 
										   if(name.length<3 ||name.length> 25)
										   {
														$("#errMsg").text("Name should be of Min 3 charecters and MAX 25 charecters");
							                            $(".alert-error").fadeIn('slow');
							                            $(".alert-success").fadeOut('slow');
														return false;
										   }
										 
										 
							
							            if (vendorType == 1 || vendorType == 2 || vendorType == 3) {
							
							                //IsUserExists();
							                var verificationCode = (Math.random() + ' ').substring(2, 4) + (Math.random() + ' ').substring(2, 4);
							              
							
							                $.ajax({
							                    type: 'GET',
							                    url: url + '/oms1/vendor_user_service?mobile_number=' + mobile + '&UUID=' + UUID + '&session_id=' + vendor_session_id, 
							                    contentType: 'application/json; charset=utf-8',
							                    jsonpCallback: 'jsonCallback',
							                    dataType: 'jsonp',
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
												success: function (response)
												{
							
							                        var testdata = JSON.stringify(response);
							
							                        if (testdata == "[false]") {
							                            var result = CreateVendorUser()
							                            if (result != false) {
							                                $("#successMsg").text("Vendor User Created Successfully with mobile no :" + mobile + " ");
							                                $(".alert-error").fadeOut('slow');
							                                $(".alert-success").fadeIn('slow');
							                                $("#name")[0].value = "";
							                                $("#mobile_number")[0].value = "";
							                                $("#email_address")[0].value = "";
							                            }
							                        }
							                        else {
							                            $("#errMsg").text("User with mobile no : " + mobile + " already exist's");
							                            $(".alert-error").fadeIn('slow');
							                            $(".alert-success").fadeOut('slow');
							                            $("#name")[0].value = "";
							                            $("#mobile_number")[0].value = "";
							                            $("#email_address")[0].value = "";
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
							            else {
							                $("#errMsg").text("Please select vendor type (Operator/Service Agent)");
							                $(".alert-error").fadeIn('slow');
							                $(".alert-success").fadeOut('slow');
							            }
								          
								        
								        }
			
      		  });
		   }else
			{
			    window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
			    return false;
			
			
			} 
			
        });

		
		  function restrictPercentAnd(e) {
           var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(keyCode) != -1 && e.charCode == keyCode) ||(keysToAllow.indexOf(keyCode) != -1 && keyCode == e.keyCode) ) );
            //document.getElementById("error").style.display = ret ? "none" : "inline";
            
			if(ret==true)
			{
			
				if (controle.value.length < 3 || controle.value.length > parseInt(max)) {
					showErrorMessage(controle.placeholder + " length should be of Min 3 and Max " + max);
                     //return false;

				}
				else {
					closeErrorMessage();
					return ret;
				}
			
			}
			else
			{
			
			  return ret;
			
			
			}
        }
		
		 function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }


        function isValidEmailAddress(emailAddress, phone) {

            //remove this if required email validation
			return true;
			///////////////////////////////////////
			
			
			var resultm = false;
            var resultp = false;
            var ermsg = "Invalid";
            var emailpattern = new RegExp(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

            if (emailAddress == "") {
                resultm = false;
            }
            else {

                resultm = false;
            }

            resultm = emailpattern.test(emailAddress);

            if (!resultm) {
                ermsg += " email address ";
            }

            var mobilepattern = new RegExp(/^\d{10}$/i);
            resultp = mobilepattern.test(phone);

            if (!resultp) {
                if (ermsg == "Invalid") {
                    ermsg += " phone number ";
                }
                else {

                    ermsg += " and phone number ";
                }
            }


            if (ermsg != "Invalid") {
                $("#errMsg").text(ermsg);
                // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
                $(".alert-error").fadeIn('slow');
                return false;
            }
            return true;
        }


       

        //getting queary string by name
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        function CreateVendorUser() {
            var vendor_type = vendorType; ////selected vendor type option
            var vendor_admin_id = 0;
            var status = 0;
            var shared = 'none';

            var verification_code = (Math.random() + ' ').substring(2, 4) + (Math.random() + ' ').substring(2, 4);
            var name = $("#name")[0].value;
            var mobile = $("#mobile_number")[0].value;
            var email = "NONE";//$("#email_address")[0].value;

            var validemail = isValidEmailAddress(email, mobile);

            if (validemail) {
                $(".alert-error").fadeOut('slow');
                var operation = 'add';
                $.ajax({
                    type: 'GET',
                    //20140721 - mohan added operations to the url 
                    url: url + '/oms1/createvendorperson?operation=' + operation + '&mobile_number=' + mobile + '&vendor_type_id=' + vendor_type + '&vendor_id=' + vendor_id + '&name=' + name + '&email_id=' + email + '&verification_code=' + verification_code + '&status=' + status + '&shared=' + shared + "&UUID=" + UUID + '&session_id=' + vendor_session_id,
                    contentType: 'application/json; charset=utf-8',
                    jsonpCallback: 'jsonCallback',
                    cache: true,
                    dataType: 'jsonp',
                    jsonp: false,
                    success1: function (response) {

                        var testdata = JSON.stringify(response);

                        if (testdata == "[false]") {
                            //console.log(testdata);
                            $("#headertext").text("Verification Code");
                            $("#name").fadeOut();
                            $("#mobile_number").fadeOut();
                            $("#email_address").fadeOut();
                            $("#verification_code").fadeIn();
                            $("#name")[0].text("");
                            $("#mobile_number")[0].text("");
                            $("#email_address")[0].text("");
                            return true;

                        }
                        else {


                            $("#errMsg").text("User with mobile no : " + mobile + " already exist's");
                            // $(".alert-error")[0].innerText = "User with mobile no : " + mobile + " already exist's";
                            $(".alert-error").fadeIn('slow');
                            $("#name")[0].text("");
                            $("#mobile_number")[0].text("");
                            $("#email_address")[0].text("");

                        }

                        $(".alert_close").click(function () {

                            $(".alert-error").fadeOut();
                        });
                    },
                    error: function (ex) {

                        $(".alert-error")[0].innerText = ex.statusText;
                        $(".alert-error").fadeIn('slow');

                    }
                });
            }
            else 
			{
                return false;
            }
        }
		
		
		
		
		function RestrictVarchar(controle, e, max) {


var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = (((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(keyCode) != -1 && e.charCode == keyCode) ||(keysToAllow.indexOf(keyCode) != -1 && keyCode == e.keyCode) ) );
            //document.getElementById("error").style.display = ret ? "none" : "inline";
            
			if(ret==true)
			{
			
				if (controle.value.length < 3 || controle.value.length > parseInt(max)) {
					showErrorMessage(controle.placeholder + " length should be of Min 3 and Max " + max);
                     //return false;

				}
				else {
					closeErrorMessage();
					return ret;
				}
			
			}
			else
			{
			
			  return ret;
			
			
			}
			
			
			
			
			
			
			





   /* if (controle.value.length > max) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }

    }*/



    
}
		
		
		
		function RestrictPhoneNumber(controle, evt) {



   

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
	
	if(charCode ==37 || charCode ==38)
		{
		 return false;
		}
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
	
	if((controle.value.length >-1)&&(controle.value=="0"))
	{
	  controle.value="";
	 return addMessageSpan(controle, controle.placeholder + " should not contain 0 (Zero) as prefix");
	 return false;
	
	
	}
	else
	{
	
	 closeErrorMessage();
	
	
	}

    if (controle.value.length > 9) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode != 8 && charCode != 32)) {
            return false;
        }

    }



    if ((controle.value.length < 10 || controle.value.length > 10)) {
        return addMessageSpan(controle, controle.placeholder + " length should be of 10 digits");


    }
    else {
        closeErrorMessage();
        return true;
    }
	
	
 




}


function closeErrorMessage() {

    $("#errMsg").text("");

    $(".alert-error").fadeOut('slow');



}

function closeSuccessMessage() {

    $("#successMsg").text("");


    $(".alert-success").fadeOut('slow');




}



function showSuccessMessage(message) {
    $("#errMsg").text("");
    $("#successMsg").text(message);
    $(".alert-error").fadeOut('slow');
    $(".alert-success").fadeIn('slow');



}

function showErrorMessage(message) {
    $("#successMsg").text("");
    $("#errMsg").text(message);
    $(".alert-error").fadeIn('slow');
    $(".alert-success").fadeOut('slow');



}



        function success1()
		{
		
        }
        ///////////connection check///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
 function checkconnection()
{
		
		
	try 
    {
    	  
   		  document.addEventListener("deviceready", onDeviceReady, false);
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
     	
     	
}