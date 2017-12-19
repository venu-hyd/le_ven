
			var status;
			//var vendorId = '1011000500072001001';
			var vname = [];
            var vId = [];
            var aName = [];
            var aId = [];
			var vendorType = -1;
            var screenname = "";
            var vendor_id = "";
            var vendor_users_id = "";
            var vendor_type_id = "";
            var location_id = "";
            var vendor_session_id = "";// var clientsessionid="";
            var vendor_name = "";
            var vendor_user_name = "";
			var UUID="";
			var querystr="";
			var mobile_number="";
			//mobile support or not
	
	       
		  $(function() 
		  {
				//$(document).ready(function () {
				$("#loader").hide();
				
			
			
		
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
			
			  querystr ="?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name+'&UUID='+UUID+'&mobile_number=' + mobile_number ; //For Passing extra parameters

            $("#vendorname")[0].innerHTML = vendor_name;
            $("#locationname")[0].innerHTML = screenname;
            $("#vendorusername")[0].innerHTML = vendor_user_name;
			
           
        
			
			
			
			//var res='{"Agents":[["Raj Cool Drinks","Prashanth Bakers","Praveen Coffe Bar","Ravi Popcorn","Salman chocolates","KFC Banjara","KFC Banjara","Bhasker Corn"],["10101500072001001","10101500072001003","10101500072001006","10101500073002002","10101500073002005","10101500076005007","10101500076005008","10201500075004004"]],"Operators":[["agent_Raj","agent_Raj2","agent_Ravi2","agent_Prashanth","agent_Salman","agent_Praveen","agent_Bhaskar","agent_KFC"],["2","4","6","9","11","13","15","17"]]}';
          
            $("#view").click(function () {

                window.location.replace(  "vendoradmin-viewshared-serviceagents.html"+querystr);
            });

			   //$(".theatreName").html(ThName.sName);
              $("#homeicon").click(function () {

                  window.location.replace(  "vendor-admin-index.html"+querystr);
              });
			  
			  
			$("#Back").click(function () {

                window.location.replace(  "vendor-admin-index.html" + querystr);
            });
              $("#logout").click(function () {

                  window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
              });


          
          


            $.ajax({
                type: 'GET',
                url: url+'/oms1/getVendorAgents?vid=' + vendor_id+ '&session_id=' + vendor_session_id + '&UUID=' + UUID,

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
                success: function (response) {
                    var res = JSON.stringify(response);

                    var obj = $.parseJSON(res);

                    vname = obj.Vendor[0];
                    // alert(obj.Vendor[0]) ;
                    vId = obj.Vendor[1];
                    aName = obj.Agent[0];
                    aId = obj.Agent[1];
                    for (var k = 0; k < aName.length; k++) {
                        $('#aName').append($('<option></option>').val(aId[k]).html(aName[k]));
                    }

                    for (var i = 0; i < vname.length; i++) {
                        $('#vName').append($('<option></option>').val(vId[i]).html(vname[i]));
                    }


                },
                error: function (e) {

                }
            });



        //});

      

       // $(document).ready(function () {



           


            $("#save").click(function () {

                var agentId = $('#aName').val();
                var sharedVendorId = $('#vName').val();
				
				if(($('#aName')[0].selectedIndex==0))
				{
						
				    alert("Please select agent");
					return false;
				
				}
				
				
				if($('#vName')[0].selectedIndex==0)
				{
				
				      alert("Please select Vendor");
					  return false;
				
				
				}
                //alert(vendorId) ;
                var sharedVName = $('#vName option:selected').text();

                status = "share";
                $.ajax({
                    type: 'GET',
                    url: url+'/oms1/getAgentAndOperators?parent_vendor_id=' + vendor_id + '&vendor_users_id=' + agentId + '&status=' + status + '&shared_vendor_id=' + sharedVendorId + '&shared_vendor_name=' + sharedVName+ '&session_id=' + vendor_session_id + '&UUID=' + UUID ,

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
                    success: function (response) {
					
					   if(response=="exists")
					   {
					   
					     alert("Selected Service agent is already shared with selected Vendor");
					   
					   }
					   else
					   {
					   
                        window.location.replace(  "vendor-admin-index.html"+querystr);
						
					   }
                    },
                    error: function (e) {

                    }
                });
            });
        //});
      });
		
		
		  //getting queary string by name
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        /*function getParameterByName() {

            var query_string = {};
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                // If first entry with this name
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = pair[1];
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [query_string[pair[0]], pair[1]];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(pair[1]);
                }
            }
            return query_string;

        } */