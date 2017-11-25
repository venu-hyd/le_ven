       var status;
        // var vendorId='1011000500073002002';
        var ThName;
        var UUID = "";

        var screenname = "";
        var vendor_id = "";
        var vendor_users_id = "";
        var vendor_type_id = "";
        var location_id = "";
        var vendor_session_id = ""; // var clientsessionid="";
        var vendor_name = "";
        var vendor_user_name = "";
		var mobile_number="";
			
		function NavigateBack()
		{

		  navigator.notification.confirm('Redirect without saving changes?', onConfirm, 'Are You Sure !', ["OK", "Cancel"]);
		  window.location.replace("vendoradmin-shareserviceagent.html" + querystr);


		}


		
		
        $(function () 
		{
            //$(document).ready(function() {
            
			//mobile support or not
	
	        var isMobile = false;
			$("#loader").hide();
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) 
			{
			  isMobile = true;

			}
		    if(isMobile) 
			{
				function includeJs(jsFilePath)
				{
				
				    var js = document.createElement("script");
				    js.type = "text/javascript";
				    js.src = jsFilePath;
				    document.body.appendChild(js);
				}

				includeJs("js/cordova.js");
				
				
			}
            screenname = getParameterByName('sName');
            vendor_id = getParameterByName('vendor_id');
            vendor_users_id = getParameterByName('vendor_users_id');
            vendor_type_id = getParameterByName('vendor_type_id');
            location_id = getParameterByName('location_id');
            vendor_session_id = getParameterByName('session_id');
            vendor_name = getParameterByName('vendor_name');
            vendor_user_name = getParameterByName('vendor_user_name');
            UUID = getParameterByName('UUID');
			mobile_number=getParameterByName('mobile_number');

            var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number; //For Passing extra parameters

            $("#vendorname")[0].innerHTML = vendor_name;
            $("#locationname")[0].innerHTML = screenname;
            $("#vendorusername")[0].innerHTML = vendor_user_name;

            $("#Back").click(function () {

                window.location.replace(  "vendoradmin-shareserviceagent.html" + querystr);
            });

            $("#homeicon").click(function () {

                window.location.replace(  "vendor-admin-index.html" + querystr);
            });
			
			
			
			$("#Back").click(function () {

               window.location.replace(  "vendoradmin-shareserviceagent.html" + querystr);
            });

            $("#logout").click(function () {

                  window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
            });


          LoadSharedAgents();



            //$(document).ready(function(){

        });
		
		
		
		function LoadSharedAgents()
		{
		
		
		  var tr;
            var shtr;
            var Vname = [];
            var vids = [];
            var ary = [];
            var sharedagent = [];
            var sharedAname = [];
            var sharedAId = [];
            status = "getSA";
            var str='{"Service":[{"SA0":"praveen", "status": "1","SID0":"123","vname0":["abc","xyz"],"vID0":["1","2"]},{"SA1":"Kumar", "status": "1","SID1":"123","vname1":["kkk","fff"],"vID1":["4","9"]}],"sharedAgents":{"Agentname":["kkk","fff"],"AgenId":["5","6"] ,"VenName": ["madhu","guru"],"VenId": ["5000474049","5000474048"]}}';
						$('#vendorname > tbody').html('');
						$('#keywords > tbody').html('');
            $.ajax({
                type: 'GET',
                url: url + '/oms1/getSharedAgents?parent_vendor_id=' + vendor_id + '&session_id=' + vendor_session_id + '&UUID=' + UUID,

                jsonpCallback: 'jsonCallback',
                cache: false,
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
                success: function (response) {
                    var res = JSON.stringify(response);
                    //alert(res);
                    //var res=$.parseJSON( jsonString );


                    var obj = response;//res;//$.parseJSON(res);
					
					//obj=$.parseJSON(str);  //FOR TEST IN LOCAL
					
					if(obj.Service!="[]")
					{
						
						ary = obj.Service;

						
                          
						if( obj.hasOwnProperty("sharedAgents"))
						{
							sharedagent = obj.sharedAgents;
							sharedAname = sharedagent.Agentname;
							sharedAId = sharedagent.AgenId;
							sharedAgentVenName = sharedagent.VenName;
							sharedAgentVenId = sharedagent.VenId;

							for (var i = 0; i < ary.length; i++) {

								var key = "SA" + i;
								var aKey = "SID" + i;
								//var kVal=Object.keys(ary[i]);
								var name = "vname" + i;

								$('#vendorname > tbody').html('');
								$('#keywords > tbody').html('');
								var ids = "vID" + i;
								Vname = ary[i][name];
								vids = ary[i][ids];
								tr += '<tr class="ordId"><td width="80%" id=' + ary[i][aKey] + '>' + ary[i][key] + '</td><td id=' + ary[i][aKey] + ' align="center" width="20%"><a href="#" class="add-delete" ></a></td></tr>';  //name='+ary[i][aKey]+'
							}

							for (var j = 0; j < sharedAname.length; j++) {
								shtr += '<tr class="ordId"><td width="80%" id=' + sharedAId[j] + '>' + sharedAname[j] + '(' + sharedAgentVenName[j] + ')</td><td align="center" width="20%"><a href="#" class="add-delete" name=' + sharedAgentVenId[j] + ' ></a></td></tr>';
							}
							
							
							if(obj.Agentname!=undefined)
							{
							
							  for (var j = 0; j < obj.Agentname.length; j++) {
								  shtr += '<tr class="ordId"><td width="80%" id=' + obj.AgenId[j] + '>' + obj.Agentname[j] + '(' + obj.VenName[j] + ')</td><td align="center" width="20%"><a href="#" class="add-delete" name=' + obj.VenId[j] + ' ></a></td></tr>';
							  }
							}
							
							$('#vendorname > tbody').append(tr);
							$('#keywords > tbody').html(shtr);
							BindEvents();
						
					  }
					  else
					  {
					       

							for (var i = 0; i < ary.length; i++) {

								var key = "SA" + i;
								var aKey = "SID" + i;
								//var kVal=Object.keys(ary[i]);
								var name = "vname" + i;

								$('#vendorname > tbody').html('');
								$('#keywords > tbody').html('');
								var ids = "vID" + i;
								Vname = ary[i][name];
								vids = ary[i][ids];
								tr += '<tr class="ordId"><td width="80%" id=' + ary[i][aKey] + '>' + ary[i][key] + '</td><td id=' + ary[i][aKey] + ' align="center" width="20%"><a href="#" class="add-delete" ></a></td></tr>';  //name='+ary[i][aKey]+'
							}

							
							
							
							if(obj.Agentname!=undefined)
							{
							
							  for (var j = 0; j < obj.Agentname.length; j++) {
								  shtr += '<tr class="ordId"><td width="80%" id=' + obj.AgenId[j] + '>' + obj.Agentname[j] + '(' + obj.VenName[j] + ')</td><td align="center" width="20%"><a href="#" class="add-delete" name=' + obj.VenId[j] + ' ></a></td></tr>';
							  }
							}
							
							$('#vendorname > tbody').append(tr);
							$('#keywords > tbody').html(shtr);
							BindEvents();
					  
					  
					  
					  
					  
					  
					  }
					
					}

                },
                error: function (e) {

                }
            });
		
		
		}

        function BindEvents() {

            $(".add-delete").click(function () {
                var agentId = $(this).parent()[0].previousSibling.id; ;
                var vrId = vendor_id;
                var status = "delete";
                var sharedAvenId = $(this).attr('name');
                if (sharedAvenId != "" && sharedAvenId != undefined) {

                    status = "deleteshare";
                }
                else {
                    status = "deleteagent";
                }

               var isDone = $.ajax({
                    type: 'GET',
                    url: url + '/oms1/getAgentAndOperators?parent_vendor_id=' + vrId + '&vendor_users_id=' + agentId + '&status=' + status + '&shared_vendor_id=' + sharedAvenId + '&shared_vendor_name=' + "" + '&session_id=' + vendor_session_id + '&UUID=' + UUID,
                    jsonpCallback: 'jsonCallback',
                    cache: false,
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
                    success: function (response) {
					
					
					 $('#' + vrId).remove();
                        //location.reload();
     					LoadSharedAgents();
                      
                    },
                    error: function (e) {
                    }
                });
			
	
				
            });
			
			
			
			 
			
			
			
		
           




        }

        //getting queary string by name
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
		  