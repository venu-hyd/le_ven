
			var crustidx = 0;
			var topingsidx = 0;
			var isheaderadded = false;
			var iscrustheaderadded = false;
			//var clientsessionid = "";
			//JSON object for saving data.
			var ItemDetails = [{ vendorid: "", vendoritemid: "", cost: "", itemname: "", is_percent: "", Discount: "", VAT: "", Crust: [], Toppings: []}];
			var Data = [];
			var topp = 1;
			var crusst = 1;
			var is_percent = 0;
			var inclusiveoftax = 0;
			var itemid = '';
			var itemname = '';
			var itemvendorid = 0;
			var vendorid = 0;
			var cat_id = 0;
			
			var screenname = "";
			var vendor_id = "";
			var vendor_users_id = "";
			var vendor_type_id = "";
			var location_id = "";
			var vendor_session_id = "";
			var vendor_name = "";
			var vendor_user_name = "";
			var UUID = "";
				//mobile support or not
	
	       
			$(document).ready(function ()
			{
			   // Test is mobile or not
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
			
			
			    var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID; //For Passing extra parameters
			
			    $("#vendorname")[0].innerHTML = vendor_name;
			    $("#locationname")[0].innerHTML = screenname;
			    $("#vendorusername")[0].innerHTML = vendor_user_name;
			    $("#vendorid")[0].innerHTML = vendor_id;
			
			    $("#homeicon").click(function () {
			
			        window.location.replace(  "vendor-admin-index.html" + querystr);
			    });
			    $("#logout").click(function () {
			
			        window.location.replace(  "index.html");
			    });
			
			
			
			
			});
			
			
			// Building JSON object to save
			function SaveDetails()
			{
			
			    var SAVE_JSON = "";
			    ItemDetails = [{ sessionid: "", vendorid: "", vendoritemid: "", categoryid: "", cost: "", itemname: "", is_percent: "", Discount: "", VAT: "", tax: "", surcharge: "", servicecharge: "", inclusive: "", hastoppings: false, hascrust: false, Crust: [], Toppings: [], description: ""}];
			
			    ItemDetails[0].sessionid = vendor_session_id;
			    ItemDetails[0].is_percent = $("#percentage")[0].checked == true ? 0 : 1;
			    ItemDetails[0].inclusive = $("#inclusive")[0].checked == true ? 0 : 1;
			
			    /*if (jQuery("#itmdesc").val() == "Write Description ") {
			    ItemDetails[0].desctiption = "";
			    }
			    else {*/
			
			    ItemDetails[0].description = jQuery("#itmdesc").val();
			
			    //}
			
			    // Adding Item Details like name,vendor id, vendor item id
			    $("div#itemdetails.addfieldsRow").find("input").each(function (topidx, field) {
			        if (field.id == "vendoritemid") {
			
			            if (field.value != "") {
			                ItemDetails[0].vendoritemid = field.value;
			            }
			            else {
			
			                ItemDetails[0].vendoritemid = 0;
			
			            }
			
			        }
			        if (field.id == "vendorid")
			            ItemDetails[0].vendorid = field.value;
			        if (field.id == "itemName")
			            ItemDetails[0].itemname = field.value;
			        if (field.id == "cat_id")
			            ItemDetails[0].categoryid = field.value;
			    });
			
			    // Adding Item Cost Details
			    $("div#itemcostdetails.addfieldsRow").find("input").each(function (topidx, field)
				{
			        if (field.id == "discount")
			            ItemDetails[0].Discount = field.value;
			        if (field.id == "vat")
			            ItemDetails[0].VAT = field.value;
			        if (field.id == "totcost")
			            ItemDetails[0].cost = field.value;
			
			    });
			
			
			    // Adding Item Cost Details
			    $("div#itemtaxdetails.addfieldsRow").find("input").each(function (topidx, field)
				{
			        if (field.id == "tax")
			            ItemDetails[0].tax = field.value;
			        if (field.id == "surcharge")
			            ItemDetails[0].surcharge = field.value;
			        if (field.id == "servicecharge")
			            ItemDetails[0].servicecharge = field.value;
			    });
			
			    //Adding Topping
			    if ($("div#top1.addfieldsRow.margin-t20").find("#toppingbutton").length > 0)
				{
			
			        $("div#top1.addfieldsRow.margin-t20").find(".toppingRow").each(function (topidx, toppingRow) {
			            var toppingsArray = [];
			            if (topidx > 0 && $("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value) {
			                toppingsArray.push("type:" + ($("div#top1.addfieldsRow.margin-t20").find("#toppingbutton")[0].value));
			            }
			            $("div#" + toppingRow.id + "." + toppingRow.className).find('input').each(function (topdetidx, input) {
			                if (input.value || input.type == 'hidden') {
			
			
			                    switch (topdetidx) {
			
			                        case 0:
			                            if (topidx == 0) {
			                                toppingsArray.push("type:" + input.value);
			                            }
			                            else {
			                                toppingsArray.push("name:" + input.value);
			                            }
			                            break;
			                        case 1:
			                            if (topidx == 0) {
			                                toppingsArray.push("name:" + input.value);
			                            }
			                            else {
			
			                                if (input.value != "") {
			                                    toppingsArray.push("id:" + input.value);
			                                }
			                                else {
			                                    toppingsArray.push("id:0");
			
			                                }
			                            }
			                            break;
			                        case 2:
			                            if (topidx == 0) {
			                                if (input.value != "") {
			                                    toppingsArray.push("id:" + input.value);
			                                }
			                                else {
			                                    toppingsArray.push("id:0");
			
			                                }
			                            }
			                            else {
			                                toppingsArray.push("cost:" + input.value);
			
			                            }
			                            break;
			                        case 3:
			
			                            toppingsArray.push("cost:" + input.value);
			
			                            break;
			                    }
			
			
			                    //toppingsArray.push(input.value);
			                }
			                else {
			                    toppingsArray = [];
			                }
			            });
			            if (toppingsArray.length > 0) {
			                ItemDetails[0].hastoppings = true;
			                ItemDetails[0].Toppings.push(toppingsArray);
			
			            }
			        });
			
			
			    }
			
			    //Adding Crust
			    if ($("div#cru1.addfieldsRow").find("#topcrustbutton").length > 0)
				{
			
			        $("div#cru1.addfieldsRow").find(".toppingRow").each(function (crustidx, toppingRow) {
			            var crustArray = [];
			            if (crustidx > 0 && $("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value != '') {
			                crustArray.push("type:" + ($("div#cru1.addfieldsRow").find("#topcrustbutton")[0].value));
			            }
			
			
			            $("div#" + toppingRow.id + "." + toppingRow.className).find('input').each(function (crustdetidx, input) {
			
			
			                if (input.value || input.type == 'hidden') {
			
			                    switch (crustdetidx) {
			
			                        case 0:
			                            if (crustidx == 0) {
			                                crustArray.push("type:" + input.value);
			                            }
			                            else {
			                                crustArray.push("name:" + input.value);
			                            }
			                            break;
			                        case 1:
			                            if (crustidx == 0) {
			                                crustArray.push("name:" + input.value);
			                            }
			                            else {
			                                if (input.value != "") {
			                                    crustArray.push("id:" + input.value);
			                                }
			                                else {
			                                    crustArray.push("id:0");
			
			                                }
			                            }
			                            break;
			                        case 2:
			                            if (crustidx == 0) {
			                                if (input.value != "") {
			                                    crustArray.push("id:" + input.value);
			                                }
			                                else {
			                                    crustArray.push("id:0");
			
			                                }
			                            }
			                            else {
			                                crustArray.push("cost:" + input.value);
			
			                            }
			                            break;
			                        case 3:
			
			                            crustArray.push("cost:" + input.value);
			
			                            break;
			                    }
			
			
			
			
			                    // crustArray.push(input.value);
			
			                }
			                else {
			
			                    crustArray = [];
			                }
			            });
			            if (crustArray.length > 0) {
			                ItemDetails[0].hascrust = true;
			                ItemDetails[0].Crust.push(crustArray);
			            }
			        });
			    }
			
			
			    SAVE_JSON = JSON.stringify(ItemDetails);
			    SaveItemDetailsData(SAVE_JSON);
			
			}
			
			//Calling Save Service and Passing Json object
			function SaveItemDetailsData(SAVE_JSON)
			{
			
			
			    $.ajax({
			        type: 'GET',
			        url: url + '/oms1/saveitems?itemsjson=' + SAVE_JSON, 
					//change service name to call actual service in order to save data or update data
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
			        success: function (response) {
			
			            var testdata = JSON.stringify(response);
			            if (testdata == "[true]") {
			               window.location.replace(  "vendor-admin-add-edit-item.html" + querystr);
			            }
			            else {
			
			
			            }
			
			
			
			        },
			        error: function (xhr, ajaxOptions, thrownError) {
			            //console.log("error status: " + xhr.status);
			            //console.log("error status text: " + xhr.statusText);
			            //console.log("error response text: " + xhr.responseText);
			        }
			    });
			
			
			
			
			
			
			}
			
			//getting queary string by name
			function getParameterByName(name)
			{
			    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			    results = regex.exec(location.search);
			    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			}
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			
			
			/*uploader.bind('FilesAdded', function(up, files) {
			if (files.length > 1) uploader.splice(1, files.length - 1);
			
			$('#filelist').html("");
			$.each(uploader.files, function(i, file) {
			$('#filelist').append(
			'<div id="' + file.id + '">' +
			file.name + ' (' + plupload.formatSize(file.size) + ') <b></b>' +
			'</div>');
			});
			
			up.refresh(); // Reposition Flash/Silverlight
			});*/
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			//Onload of page get query string params
			$(window).bind("load", function ()
			{
			
			    //User Validation Related//
			    screenname = getParameterByName('sName');
			    vendor_users_id = getParameterByName('vendor_users_id');
			    vendor_type_id = getParameterByName('vendor_type_id');
			    location_id = getParameterByName('location_id');
			    vendor_session_id = getParameterByName('session_id');
			    vendor_id = getParameterByName('vendor_id');
			    vendor_name = getParameterByName('vendor_name');
			    vendor_user_name = getParameterByName('vendor_user_name');
			
			    //User Validation Related//
			
			
			
			
			});
			
			
			
			
			function GetItemDetails(itemvendorid, itemid)
			{
			
			    $.ajax({
			        type: 'GET',
			        url: url + '/oms1/editItem?vid=' + itemvendorid + '&vendor_items_id=' + itemid,
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
			        success: function (response) {
			
			            var result = response;
			            this.Data = result
			            $("#discount")[0].value = (typeof (this.Data[0].Discount) != 'undefined') ? this.Data[0].Discount : "NoData";
			            $("#vat")[0].value = (typeof (this.Data[0].VAT) != 'undefined') ? this.Data[0].VAT : "NoData";
			            $("#totcost")[0].value = (typeof (this.Data[0].cost) != 'undefined') ? this.Data[0].cost : "NoData";
			            if (typeof (this.Data[0].is_percent) != 'undefined') {
			                $("#percentage")[0].checked = this.Data[0].is_percent == 0 ? true : false;
			                $("#amount")[0].checked = this.Data[0].is_percent == 0 ? false : true;
			            }
			
			
			            ////Data related to tax information
			
			            $("#tax")[0].value = (typeof (this.Data[0].tax) != 'undefined') ? this.Data[0].tax : "NoData";
			            $("#surcharge")[0].value = (typeof (this.Data[0].surcharge) != 'undefined') ? this.Data[0].surcharge : "NoData";
			            $("#servicecharge")[0].value = (typeof (this.Data[0].servicecharge) != 'undefined') ? this.Data[0].servicecharge : "NoData";
			            if (typeof (this.Data[0].inclusive) != 'undefined') {
			                $("#inclusive")[0].checked = this.Data[0].inclusive == 0 ? true : false;
			                $("#exclusive")[0].checked = this.Data[0].inclusive == 0 ? false : true;
			            }
			
			
			
			            ////////////////////////////////
			
			            if (this.Data[0].Topping.length > 0)
						{
			
			                $.each(this.Data, function (index, value)
							{
			
			                    $.each(value, function (index, value1)
								{
			
			                        if (index == "Topping") {
			                            $.each(value1, function (index, value2) {
			
			                                if (topingsidx > 1) {
			
			                                    addTopping();
			                                }
			                                if (value1[topingsidx].length > 2) {
			                                    if (isheaderadded == false) {
			                                        $("#toppingbutton")[0].value = value1[topingsidx][0];
			                                        isheaderadded = true;
			                                    }
			                                    $("#toptxt-" + topingsidx)[0].value = value1[topingsidx][1];
			                                    $("#topcost-" + topingsidx)[0].value = value1[topingsidx][2];
			                                    $("#topid-" + topingsidx)[0].value = value1[topingsidx][3];
			                                    topingsidx++
			                                }
			                                else {
			                                    $("#toptxt-" + topingsidx)[0].value = value1[topingsidx][0];
			                                    $("#topcost-" + topingsidx)[0].value = value1[topingsidx][1];
			                                    $("#topid-" + topingsidx)[0].value = value1[topingsidx][2];
			                                    topingsidx++
			                                }
			                            });
			                        }
			                    });
			                });
			            }
			
			
			
			            if (this.Data[0].Crust.length > 0)
						{
			
			                $.each(this.Data, function (index, value)
							{
			
			                    $.each(value, function (index, value1)
								{
			
			                        if (index == "Crust") {
			                            $.each(value1, function (index, value2)
										{
			
			                                if (crustidx > 1) {
			                                    addCrust();
			                                }
			
			                                if (value1[crustidx].length > 2)
											{
			                                    if (iscrustheaderadded == false) {
			                                        $("#topcrustbutton")[0].value = value1[crustidx][0];
			                                        iscrustheaderadded = true;
			                                    }
			                                    $("#topcrust-" + crustidx)[0].value = value1[crustidx][1];
			                                    $("#topcrustcost-" + crustidx)[0].value = value1[crustidx][2];
			                                    $("#topcrustid-" + crustidx)[0].value = value1[crustidx][3];
			                                    crustidx++
			                                }
			                                else {
			                                    $("#topcrust-" + crustidx)[0].value = value1[crustidx][0];
			                                    $("#topcrustcost-" + crustidx)[0].value = value1[crustidx][1];
			                                    $("#topcrustid-" + crustidx)[0].value = value1[crustidx][2];
			                                    crustidx++
			                                }
			                            });
			                        }
			                    });
			                });
			            }
			        },
			        error: function (ex)
					{
			
			            //$(".alert-error")[0].innerText = ex.statusText;
			            //$(".alert-error").fadeIn('slow');
			
			        }
			    });
			}
			
			
			
			
			
	