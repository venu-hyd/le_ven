

        function bindDatalist(datalistid, data) {

            $(function () {
                $(datalistid).autocomplete({
                    minlength: 1,
                    source: function (request, response) {

                        response(data);
                        /*$.ajax({
                        url: "/home/names",
                        dataType: "json",
                        data: { maxRows: 5, term: request.term },
                        success: function (data) {
                        response(data);
                        }
                        });*/
                    },
                    select: function (event, ui) {
                        $("#countryId").val(ui.item.value);
                        $("#mycountryId").val(ui.item.id);
                    }
                });
            });


        }
 

        var vendorType = -1;
        var Tno = 1;
        //var vendor_admin_id = '1011000500073002002'; //'1011000500072001006';//for crust
        var leafItemsadded = false;
        var isfirstload = true;
        var T1 = []
        var T2 = []
        var leaf = []
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
       var timerforajax;
			
        var calbackno = 0;
			screenname = getParameterByName('sName');
            vendor_id = getParameterByName('vendor_id');
            vendor_users_id = getParameterByName('vendor_users_id');
            vendor_type_id = getParameterByName('vendor_type_id');
            location_id = getParameterByName('location_id');
            vendor_session_id = getParameterByName('session_id');
            vendor_name = getParameterByName('vendor_name');
            vendor_user_name = getParameterByName('vendor_user_name');
			mobile_number=getParameterByName('mobile_number');
			var networkState;
            //$("#newItemdiv").fadeOut();
            //$("#addnewItemBtn").fadeOut();

            //$("input#T-1.text-left")[0].value = "";


            UUID = getParameterByName('UUID');

          
            querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number; //For Passing extra parameters
			
			var resss;
			function backButtonCallback()
			{
			                var loginuser = localStorage.getItem('login');
						
							//alert(querystr);
						   //navigator.notification.confirm('Redirect without saving changes?', onConfirm, 'Are You Sure !', ["OK", "Cancel"]);
						    if(loginuser=="vadmin")
						    {
				                $("#loader").show();
				                resss=setInterval(function(){   madhuSS();}, 1000);
							}else
							{
							  window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
							
							}
			}
			function madhuSS()
			{
								
								 clearInterval(resss);
				   				 window.location.replace(  "vendor-admin-index.html" + querystr);   
				
			}			
			function onDeviceReady()
			{
	
					   
						
						  //always use device object after deviceready.**
							document.addEventListener('backbutton', backButtonCallback, false);
			}


        $(document).ready(function () 
		{
           
		   
		   
							var loginuser = localStorage.getItem('login');
						
							//alert(querystr);
						   //navigator.notification.confirm('Redirect without saving changes?', onConfirm, 'Are You Sure !', ["OK", "Cancel"]);
						    if(loginuser=="vadmin")
						    {
				               				// Test is mobile or not
								 $("#loader").hide();
								document.addEventListener("deviceready", onDeviceReady, false);	
								$("#vendorname")[0].innerHTML = vendor_name;
								$("#locationname")[0].innerHTML = screenname;
								$("#vendorusername")[0].innerHTML = vendor_user_name;
								/*$( "#T-1Find" ).one( "click", function() {
								$( "input#T-1" ).focus();
								});*/


								$("input#T-1").one("click", function () {
									$("input#T-1").trigger("click");
								});
								//$( "input#T1" ).trigger( "click" );
								$("input#T-1").focus();

								$("#homeicon").click(function () {

								   window.location.replace(  "vendor-admin-index.html" + querystr);
								});
								$("#logout").click(function () {
									
									  window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
									  return false;
								});



								$(".btn.btn-AddDetails.sa").click(function () 
								{
											$("#loader").show();
											timerforajax=setInterval(function()
											 { 
														 AddNewItemDetails();
														 
											 }, 1000);
								
								   
								});



								GetResult(T1, "#T-1", "#T-1");
							}else
							{
							  window.location.replace( "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
							
							}
				
        });



        function AddNewItemDetails() 
        {
		  $("#loader").hide();
          clearInterval(timerforajax);
 		  var networkState = checkconnection();
   		 
		   if(networkState)
		   {
		    
		      $("#errornet1").show();	
		    
		   
		   }else
		   {
		        var test=online();
		   		 if(test)
		   		 {
		   		     var itemname = ""; //$("#newitemname")[0].value;
		           	  var cat_id = $("#finalcat")[0].value;//$("#T-1-hidden")[0].value;
		              ShowEditPage(itemname,'', '', '', cat_id);
		   		 
		   		 }else
		   		 {
		   		    $("#errornet2").show();
		   		    $("#loader").hide();
		   		 }
		      
		   }
           


        }


         function GetResult(result, element, targetelement) 
        {
          var networkState = checkconnection();
     	 
		   		
   		  if(networkState)
		   {
		    
		      $("#errornet2").show();	
		      $("#loader").hide();
		   
		   }else
		   {
		   		 var test=online();
		   		 if(test)
		   		 {
		   		    GetCategories(element, targetelement);
		   		 
		   		 }else
		   		 {
		   		    $("#errornet2").show();
		   		    $("#loader").hide();
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



        function checkData(result, element) {

            var selectedtext = $(element);
            if (selectedtext[0].value != "SELECT") {
                var clickedelement = element.split('-');
                Tno = clickedelement[1];
				
				$("#finalcat").val(selectedtext[0].value);

                if (element == "#T-1" && $("#T-2")[0]) {

                    Tno = 2;
                    var Tnn = Tno - 1;

                    GetResult(T1, "#T-" + Tnn, "#T-" + Tno);

                }
                else {

                   /*if (element == "#T-1") {

                        Tno = 2;


                    }*/
					
					var Tnn = 0;
                    if (element == "#T-1") {
 
                        Tno = 2;
                       Tnn = parseInt(Tno) - 1;
 
                    }
                    else
                   {
                      Tnn = Tno;
                                                                               
                   }
   //console.log("TNNSSBEFORLOOP=="+Tnn);
                    //var Tnn = parseInt(Tno) - 1;
                    var Tnext = parseInt(Tno) + 1;
                    var Tfuture = Tnext + 1
                    $.each(result, function (index, value) {
                        $.each(value, function (index, value1) {
                            $.each(value1, function (index, value2) {
                                $.each(value2, function (index, value3) {
                                    $.each(value3, function (index, value4) {
                                        $.each(value4, function (index, value5) {
                                            /*if (Tnn == 1) {
                                                if ($("#T-" + Tnn)[0].value == value4.name) {
                                                    $("#T-" + Tnn + "-hidden")[0].value = value4.cat_id;
                                                }
                                            }*/
                                            //console.log("TNNSS=="+$("#T-" + Tnn+" option:selected").text());
											if (Tnn >0 ) {//Tnn==1
										   ////console.log("index==="+$("#T-" + Tnn)[0].selectedOptions);
											var selectss=$("#T-" + Tnn+" option:selected").text();
											
											//console.log("selectss=="+selectss);
											var values= value4.name;
											
                                                if (selectss == values) {//$("#T-" + Tnn)[0].value
                                                    $("#T-" + Tnn + "-hidden")[0].value = value4.cat_id;
                                                                                                                                                                                                                  
												   $("#T-1-hidden")[0].value = value4.cat_id;
                                                                                                                                                                                                               
                                                }
                                            }
                                        });
                                    });
                                });

                            });
                        });
                    });





                    if (result[0][0].item.T1.length > 0) {



                        if ((!result[0][0].item.T1[0].leaf)) {

                            //var fun = "GetResult(T1,'#T-" + Tnn + "','#T-" + Tno + "');"
                            var fun = "GetResult(T1,'#T-" + Tnext + "','#T-" + Tfuture + "');"
                            var fun1 = "GetResult(T1,'#T-" + Tno + "','#T-" + Tnext + "');"
                            var fun2 = ""
                            if (element == "#T-1") {
                                fun2 = "checkData(T1,'#T-" + Tno + "');"
                            }
                            else {
                                fun2 = "checkData(T1,'#T-" + Tnext + "');"

                            }
                            //$("div#fieldsdiv.addfieldsRow").append("<input type='text' onfocus=" + fun + "  onclick=" + fun + " onchange=" + fun2 + " id='T" + Tno + "Txt' placeholder='Text' > <!--list='T" + Tno + "List'  > --><a href='#' id='T" + Tno + "Find'   class='btnFind'></a> <input type='hidden' id='T" + Tno + "hidden' /><datalist class='select' id='T" + Tno + "List'><select id=T" + Tno + " class='select' ></select></datalist>");


                            if (element == "#T-1") {

                                if ($("#T-" + Tno)[0]!=undefined) {

                                    //$("div#fieldsdiv.addfieldsRow").append("<input type='hidden' id='T-" + Tno + "-hidden' /><select id=T-" + Tno + "  onchange=" + fun2 + " ></select>");

                                    GetResult(T1, "#T-" + Tnn, "#T-" + Tno);
                                }
                                else {

                                    $("div#fieldsdiv.addfieldsRow").append("<input type='hidden' id='T-" + Tno + "-hidden' /><select id=T-" + Tno + "  onchange=" + fun2 + " ></select>");

                                    GetResult(T1, "#T-" + Tnn, "#T-" + Tno);

                                }
                            }
                            else {

                                if ($("#T-" + Tnext)[0]!=undefined) {
                                    //$("div#fieldsdiv.addfieldsRow").append("<input type='hidden' id='T-" + Tnext + "-hidden' /><select id=T-" + Tnext + "  onchange=" + fun2 + " ></select>");
                                    GetResult(T1, "#T-" + Tno, "#T-" + Tnext);
                                }
                                else {
                                    $("div#fieldsdiv.addfieldsRow").append("<input type='hidden' id='T-" + Tnext + "-hidden' /><select id=T-" + Tnext + "  onchange=" + fun2 + " ></select>");
                                    GetResult(T1, "#T-" + Tno, "#T-" + Tnext);

                                }

                            }

                            /* $("select#T-" + Tno ).one("click", function () {
                            $("input#" + Tno + "Txt").trigger("click");
                            });*/
                            // $( "select#T-"+Tno ).trigger( "change" );
                            /*  $("input#" + Tno + "Txt").focus();*/


                        }
                    }
                }

            }
        }



        function ShowEditPage(itemname,item_id,vendor_items_id, itemvendorid, cat_id) {

            window.location.replace( "vendoradmin-additemdetails.html" + querystr + "&item_id=" + item_id+ "&vendor_items_id=" + vendor_items_id + "&itemname=" + itemname + "&itemvendorid=" + itemvendorid + "&cat_id=" + cat_id);
        }





        function GetCategories(element, targetelement) {

              $("#addnewItemBtn").fadeOut();
            var optionsadded = false;
            var reqstr = "";
            var optquery = "";
			var catgid=$("#T-1")[0].value
            //$("#newItemdiv").fadeOut();
            //$("#addnewItemBtn").fadeOut();
            $("section#items.fields.itemslevelbg").html("");

            if (targetelement != "#T-1") {

                //$(targetelement + "Txt")[0].value = "";
            }
            else {
                $(targetelement)[0].value = "";
				catgid="";

            }


            // if (element == "#T-1") {

            //reqstr = $(element)[0].value;
            reqstr = "";

            //if (targetelement == "#T-1" || targetelement == "#T-2") 
            {
                var ctrllength = ($("input:not([type='radio'])").length);

                //$(element)[0].innerHTML = "";
                // $(element)[0].value = "";
                $.each($("select:not([type='radio'])"), function (index, value) {
                    if (value.type == "select-one" || value.type == "select") {
                        if (value.parentElement.attributes[0].value == "fieldsdiv" || value.parentElement.attributes[0].value == "addfieldsRow") {

                            var curid = value.id.split('-');
                            var curelemid = element.split('-');
                            var id = parseInt(curelemid[1]) + 1; //parseInt("10")
                            if (curid[1] >= id) {




                                if (curid[1] > id) {//(value.id != "T-1" && value.id != "T-2") {

                                    $("#" + value.previousElementSibling.id).remove();
                                    //$("#" + value.list.firstChild.id + "Find").remove();
                                    // $("#" + value.list.id).remove();
                                    $("#" + value.id).remove();


                                    //$("#newItemdiv").fadeOut();
                                    $("#addnewItemBtn").fadeIn();
                                    $("section#items.fields.itemslevelbg").html("");
                                    //Tno--;
                                    Tno = 2;
                                }
                                else if (curid[1] == id) {

                                    $("#T-" + id).html("");


                                }

                            }


                        }
                    }

                });
            }

            //}
            // }
            //else {
            for (var i = 0; i < ($("select:not([type='radio'])").length); i++) {
                //if ($("input:not([type='radio'])")[i].attributes.type.value == "text") {
                //if ($("input:not([type='radio'])")[i].parentElement.attributes.id.value == "fieldsdiv") 
                if ($("select:not([type='radio'])")[i].parentElement.attributes[0].value == "fieldsdiv" || $("select:not([type='radio'])")[i].parentElement.attributes[0].value == "addfieldsRow") {
                    if ($("select:not([type='radio'])")[i].value) {
				                        /*if (reqstr == '') {
				                            reqstr = $("select:not([type='radio'])")[i].value;
				                        }
				                        else {
				                            reqstr += "@" + $("select:not([type='radio'])")[i].value;
				                        }*/
						
						if (reqstr == '')
						{
						
						    //console.log($("select:not([type='radio']) option:selected")[i].text);
                            reqstr = $("select:not([type='radio']) option:selected")[i].text;//$("select:not([type='radio'])")[i].value;
                        }
                        else
                         {
                            reqstr += "@" + $("select:not([type='radio']) option:selected")[i].text;//$("select:not([type='radio'])")[i].value;
                        }
                    }
                }
                //}
            }
            //}
            calbackno++;

			if ($("select" + targetelement)[0].length == 0 || isfirstload) 
			{	//|| targetelement != "#T-1") {
					isfirstload = false;
				
				/////////////////////////////////changing code//////////////////////
				///////////////////////////////////////////////////////////////
				var categoryjson = 
				{
					'vendor_id': vendor_id,
					'reqstr': reqstr,
					'is_oms_admin': 'true',
					 'catg_id': catgid
				};

				var json_dataforsplit = JSON.stringify(categoryjson);
				$.ajax({
				type: 'POST',
				dataType: 'json',
				data: json_dataforsplit,
				async: true,
				contentType: "application/json; charset=utf-8",
				cache: false,
				url: url + '/oms1/categoryservice',
				timeout: 7000,
				success: function (response) 
				{
                        var result = response;
                
                        if (targetelement != "#T-1") {
                            var j = 1;

                            if (result) {
                                if (result[0].length > 0) {
                                    if (result[0][0].item.T1[0]) {
                                        if (result[0][0].item.T1[0].leaf) {

                                            //$(targetelement)[0].remove();


                                          

											$(targetelement)[0].parentNode.removeChild($(targetelement)[0])
                                             $(targetelement + "-hidden")[0].parentNode.removeChild( $(targetelement + "-hidden")[0])
                                        


                                            $("section#items.fields.itemslevelbg").html("");
											
											//console.log("result=="+result);
                                            T2 = result;
                                        }
                                        else {
                                            T1 = result;
                                        }
                                    }
                                }


                            }
                        }
                        else {
							//console.log("resultelse=="+result);
                            T1 = result;
                        }

                        var topno = 1;
                         //console.log("HEY LEAF:::::1");
                        $.each(result, function (index, value) {
                            //console.log("HEY LEAF:::::2");
                            $.each(value, function (index, value1) {
                             //console.log("HEY LEAF:::::3");
                                $.each(value1, function (index, value2) {
                                 //console.log("HEY LEAF:::::4");
                                    $.each(value2, function (index, value3) {
                                     //console.log("HEY LEAF:::::5");
                                        $.each(value3, function (index, value4) {
                                        
                                        //console.log("HEY LEAF:::::1111");
                                            if (value4.leaf) 
											{
											
											   $("#addnewItemBtn").fadeIn();
												//console.log("HEY LEAF:::::");
										
                                               
                                                $.each(value4, function (index, value5) {
                                                  //console.log("HEY LEAF:::::1"+value5.length);
                                                    if (typeof (value5) == 'object' && value5.length > 0) {
                                                       //console.log("HEY LEAF:::::2");
                                                        leafItemsadded = true;
                                                        $("section#items.fields.itemslevelbg").append("<h5 class='h5Head text-uppercase text-center'>Items For This Category</h5>");
                                                        //console.log("HEY LEAF:::::3");
                                                        $.each(value5, function (index, value6) {
                                                        //console.log("HEY LEAF:::::4");
                                                            if (topno == 1) {
                                                                //$("#T"+Tno+"Txt").replaceWith( $("<div class='addfieldsRow'> <a href='#' class='btn btn-success sa'>Items</a> </div>") );
                                                                //$("#T" + topno + "hidden")[0].value = $("input#T" + topno + ".text-left")[0].value;
                                                            }
                                                            else {
                                                                //$("#T" + topno + "hidden")[0].value = $("#T" + topno + "Txt")[0].value;
                                                            }

                                                            var style = "style='background:#FFF !important;'"
															
                                                           //console.log("value6.vendor_id=="+value6.vendor_id);
														   //console.log("vendor_id=="+vendor_id);
														   
                                                            if (value6.vendor_id == vendor_id)
															{

                                                                style = "style='background: #5cb85c !important;  font-size: 14px !important;  font-weight: 500 !important;  width: 100%;  float: left;  padding: 8px 8px 8px 15px;  font-weight: normal;  font-size: 13px;  border: 1px solid #5cb85c !important; border-radius: 3px;'"

                                                            }
                                                            else 
															{
														
                                                                style = "style='background: #d9534f !important;  font-size: 14px !important;  font-weight: 500 !important;  width: 100%;  float: left;  padding: 8px 8px 8px 15px;  font-weight: normal;  font-size: 13px;  border: 1px solid #d9534f !important; border-radius: 3px;'"
                                                            }

                                                            // $("#newItemdiv").fadeIn();
                                                            
                                                                        
														 $("section#items.fields.itemslevelbg").append("<div id='div" + topno + "'   class='addfieldsRow'  >" +
																				"<input type='text' id='itemtxt" + topno + "'  " + style + "   placeholder='Items in is level'>" +
																				"<a href='#' id='itemlink" + topno + "'   class='btnEdit'></a></div>");
															$("#itemtxt" + topno).val(value6.item_name);
															
                                                            var cat_id = $("#finalcat")[0].value;//$("#T-1-hidden")[0].value;
                                                            //console.log("HEY LEAF:::::5");

                                                            //$("#itemlink" + topno).click(function () { ShowEditPage(value6.item_name,value6.item_id, value6.vendor_items_id, value6.vendor_id, cat_id); });
															 $("#div" + topno).click(function () {
															 $("#loader").show();
															  timerforajax=setInterval(function()
															     { 
															     	
															     	
															           	      						var netstatus=checkconnection();
																									 if(netstatus)
																									 {
																									 	 $("#loader").hide();
																										 $("#errornet1").show();	
																									 }else
																									 {
																									 clearInterval(timerforajax);
																									  ShowEditPage(value6.item_name,value6.item_id, value6.vendor_items_id, value6.vendor_id, cat_id); 
																									  }
															           	     
															     }, 1000);
															
															  });
                                                            topno++;
                                                        });


                                                    }
                                                });
                                            }
                                            else {
                                                if ($("select" + targetelement)[0].options.length <= result[0][0].item.T1.length) {

                                                    if (optionsadded == false) {
                                                        $("select" + targetelement).append("<option label='SELECT' value='SELECT'>SELECT</option>");

                                                    }
                                                    optionsadded = true;
													$("select" + targetelement).append("<option label=" + value4.name + " value=" + value4.cat_id + ">" + value4.name + "</option>");

                                                    if (optquery == "") {
                                                        //optquery+="{'value':'"+value4.name +"','id':'"+value4.name +"','label':'"+value4.name +"'}"
                                                        optquery += value4.name;
                                                    }
                                                    else {

                                                        //optquery+=",{'value':'"+value4.name +"','id':'"+value4.name +"','label':'"+value4.name +"'}"
                                                        optquery += "," + value4.name;
                                                    }


                                                }
                                            }
                                        });
                                    });

                                });
                            });
                        });

                        var autoqry = optquery.split(',');

                        //autoqry=["ChipsandChocolates","Icecreams", "KFC","Popcorn","SnacksandCorn","SoftDrinks","TeaandCoffee"];

                        // $("#presidentsClientInput").autocomplete( { source: presidents });


                        if (targetelement == "#T-1") {
                            $(targetelement).autocomplete({
                                source: autoqry
                            });

                        }
                        else {


                            $(targetelement + "Txt").autocomplete({
                                source: autoqry
                            });

                        }

                        /*if(targetelement=="#T1")
                        {
                        $(targetelement).autocomplete({
                        source: autoqry
                        });
							
                        }
                        else
							
                        {
                        $( targetelement+"Txt" ).autocomplete({
                        source: autoqry
                        });
							
                        } */


                        /*$(function () {
                        $("input#T1.text-left").autocomplete({
                        minlength: 1,
                        source: function (request, response) {
							
                        response(autoqry);
                        $.ajax({
                        //url: "/home/names",
                        //dataType: "json",
                        //data: { maxRows: 5, term: request.term },
                        success: function (data) {
                        response(autoqry);
                        }
                        });
                        },
                        select: function (event, ui) {
							
                        $(targetelement).val(ui.item.value);
                        $(targetelement).val(ui.item.id);
                        }
                        });
                        }); */

                        if (optionsadded) {

                            Tno++;
                            optionsadded = false;
                            // $("#T" + Tno + "Txt").trigger("change");
                        }
                        //$(this).search();
                        //$( "#T1List" ).show();
                        $("select" + targetelement + ".select").show();
                        $("select" + targetelement + ".select").fadeOut();


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



        }

function network()
{
      
     	 $("#errornet2").hide();
     	 $("#errornet1").hide();	
     	 window.location.replace( "vendor-admin-index.html"+querystr);
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
