
// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}




		   	 var  sName = '';
             var  redirectedfrom = '';
             var  vendor_id = '';
             var  vendor_users_id = '';
             var  vendor_type_id = '';
             var  session_id = '';
             var  location_id = '';
             var  vendor_name = '';
             var  vendor_user_name = '';
             var  UUID = '';
             var  mobile_number = '';
             var  passedorder_id = '';


			
//mobile support or not
$(document).ready(function()
{
	$("#loader").hide();
	var isMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent))
	{
		isMobile = true;
	}
	if (isMobile)
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
	sName = getParameterByName('sName');
	redirectedfrom = getParameterByName('redirectedfrom');
	vendor_id = getParameterByName('vendor_id');
	vendor_users_id = getParameterByName('vendor_users_id');
	vendor_type_id = getParameterByName('vendor_type_id');
	session_id = getParameterByName('session_id');
	location_id = getParameterByName('location_id');
	vendor_name = getParameterByName('vendor_name');
	vendor_user_name = getParameterByName('vendor_user_name');
	UUID = getParameterByName('UUID');
	mobile_number = getParameterByName('mobile_number');
	passedorder_id = getParameterByName('passedorder_id');
	$.ajax(
	{
		type: 'GET',
		url: url + '/oms1/printSumaryOrderDetails?passedorder_id=' + passedorder_id,
		dataType: 'jsonp',
		jsonpCallback: 'jsonCallback',
		cache: false,
		jsonp: false,
		beforeSend: function()
		{
			$("#loader").show();
		},
		complete: function()
		{
			$("#loader").hide();
		},
		success: function(response)
		{
			
			if (response.orderprintsummmary.length > 0)
			{
				var jsonresponse = response.orderprintsummmary[0];
				var vendorname = jsonresponse.vendorname;
				var orderedfrom = jsonresponse.orderedfrom;
				var total = jsonresponse.total;
				var orderid = passedorder_id;
				var date_of_order = response.date_of_order;
				$('.rest_name').text(vendorname);
				$('#orderid').text(orderid);
				$('#dateoforder').text(date_of_order);
				// For Vendor Address 
				var address1 = response.address1;
				var address2 = response.address2;
				var landmark = response.landmark;
				var area = response.area;
				var city = response.city;
				var locality = response.locality;
				var state = response.state;
				var contact_phone_no = response.contact_phone_no;
				var vendoraddresshtml = address1 + ' , ' + address2 + ' , ' + landmark + ' , ' + area + ' , ' + locality + ' , ' + city + ',' + state + '.' + '<br> Phone: ' + contact_phone_no;
				$(".rest_adres").html(vendoraddresshtml);
				if (orderedfrom === 'Home') // Home Delivery
				{
					var cust_phone = jsonresponse.cust_address.phone_number;
					var cust_area = jsonresponse.cust_address.area;
					var cust_building_no = jsonresponse.cust_address.landmark;
					var cust_street_name = jsonresponse.cust_address.address1;
					var cust_name = jsonresponse.cust_address.name;
					var cust_state = jsonresponse.cust_address.state;
					var cust_locality = jsonresponse.cust_address.locality;
					var cust_city = jsonresponse.cust_address.city;
					cust_name = capitalizeFirstLetter(cust_name);
					if (cust_street_name == '')
					{
						cust_street_name = 'N/A';
					}
					if (cust_building_no == '')
					{
						cust_building_no = 'N/A';
					}
					var custaddresshtml = '<p>' + cust_name + ', +91-' + cust_phone + '</p>\
                            <p>' + cust_building_no + ',' + cust_street_name + '<br>\
                            ' + cust_locality + ',<br>\
                            ' + cust_area + ', ' + cust_city + '.<br>\
                            ' + cust_state + '.</p>';
					$(".custmerAdres").html(custaddresshtml);
				}
				else if (orderedfrom === 'QRScan') // QRScan 
				{
					var table_numb = jsonresponse.tablenum;
					var qrscanorderhtml = '<span class="rd">' + table_numb + '</span>';
					$(".custmerAdres").html(qrscanorderhtml);
				}
				else if (orderedfrom === 'TakeOrder') // TakeOrder
				{
					var businessorderhtml = '<span class="rd">(Business Order)</span>';
					$(".custmerAdres").html(businessorderhtml);
				}

					// Creating Order Details Table 
					var orderdetailshtml = '';
					var total_quantity = 0;
					for(var i=0;i<response.orderprintsummmary.length;i++)
					{	
						var actual_price = response.orderprintsummmary[i].strikeprice_cutoff;
						var discount_div = response.orderprintsummmary[i].discount_div;
						var percentappend = '';
						var rupeeappend = '';

						  if(discount_div.indexOf("percent") > -1) {
                            percentappend = "%"
	                        }

	                        else if(discount_div.indexOf("Rs") > -1) {
                             rupeeappend = '<span class="WebRupee">&#x20B9;</span>';
	                        }


						var discount_val =  parseFloat(discount_div).toFixed(2);
						var item_price = parseFloat(actual_price).toFixed(2);

							if(discount_val<=0)
						{
							discount_val = ' ';
						}

						if(item_price>0)
						{
							item_price = item_price;
						}
						else
						{
							item_price = response.orderprintsummmary[i].price;
						}

							var count = i+1;
							 var quan = response.orderprintsummmary[i].quantity;
    						total_quantity += parseInt(quan);
							 orderdetailshtml +=  '<tr>\
                                                <td>'+count+'</td>\
                                                <td>'+response.orderprintsummmary[i].name+'</td>\
                                                <td>'+item_price+'</td>\
                                                <td>'+response.orderprintsummmary[i].quantity+'</td>\
                                                <td>' +rupeeappend+' '+discount_val+ ' ' +percentappend+'</td>\
                                                <td align="right">'+response.orderprintsummmary[i].price+'</td>\
                                              </tr>';
					}	

					$("#orderstable tbody").html(orderdetailshtml);

					// For displaying Taxes table

					var orderOfdisplay = jsonresponse.taxorderinformation;

					var orderdisplayhtml = '';
					for (var h = 0; h < orderOfdisplay.length; h++) {
					    var tax_name = orderOfdisplay[h];
					    var tax_value = jsonresponse.taxdetails[tax_name];
					    if (tax_value && tax_value != 0) {

					    	 tax_value = parseFloat(tax_value).toFixed(2);

							tax_name = capitalizeFirstLetter(tax_name);

					    	 if(tax_name==='Service Charge')
					    	 {
					    	 	orderdisplayhtml += '<li>'+tax_name+' (%) '+'<span class="rt">'+tax_value+'</span></li>';
					    	 }
					    	 else
					    	 {
					    		orderdisplayhtml += '<li>'+tax_name+'<span class="rt">'+tax_value+'</span></li>'; 	
					    	 }
					       
					        
					    }
					}

					var totalceilvalue = Math.ceil(total);

					var forwords = totalceilvalue;

					var totaldifference = totalceilvalue-total

					totaldifference = totaldifference.toFixed(2);

					total = parseFloat(total).toFixed(2);

					totalceilvalue = parseFloat(totalceilvalue).toFixed(2);

					orderdisplayhtml += '<hr>\
						<li>Total <span class="rt">'+total+'</span></li>\
                        <li>Round off <span class="rt">'+totaldifference+'</span></li>\
                        <hr>\
                        <li><b>Total Qty: '+total_quantity+', 	Round off Total</b> <span class="rt">'+totalceilvalue+'</span></li>';

					$(".dtls_order_total").html(orderdisplayhtml);

					

					var roundofvalueinwords = toWords(forwords);


				$("#amountInWords").html(roundofvalueinwords+ 'Only');
				
				
				// For Tin
				if(response.tin_number==='0')
				{
					$("#tinnum").hide();
				}
				else
				{
					$("#tinnum").text(response.tin_number);	
			
					$("#tinnum").show();
				}

				

				if(response.st_number==='0')
				{
					$("#stnum").hide();
				}
				else
				{
					$("#stnum").text(response.st_number);	
			
					$("#stnum").show();
				}

				if(response.vat_number==='0')
				{
					$("#vatnum").hide();
				}
				else
				{

					$("#vatnum").text(response.vat_number);	
			
					$("#vatnum").show();
				}				

				
			



			}
		},
		error: function(xhr, ajaxOptions, thrownError) {},
	});
});




   	 function getParameterByName(name)
	 {
	 	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	 	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	 		results = regex.exec(location.search);
	 	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	 }

	 function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

