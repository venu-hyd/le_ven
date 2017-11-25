//var regx =/^[ A-Za-z0-9.',/()&+-=>]*$/;
//prveen
//var regx =/^[ A-Za-z0-9.',/()&+-=>]*$/;


var regx =/^[ A-Za-z0-9.',æøÆ:ååÆØÅ/()&+-=>]*$/;
//end
var screenname = "";
var vendor_id = "";
var vendor_users_id = "";
var vendor_type_id = "";
var location_id = "";
var vendor_session_id = "";
var vendor_name = "";
var vendor_user_name = "";
var UUID = "";
var querystr = "";
var networkState;
var mobile_number="";


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


querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ; 

/* device back button functionality */

$( document ).ready(function() 
{
    		
				var resss;
				function backButtonCallback()
				{
				                $("#loader").show();
				                resss=setInterval(function(){   madhuSS();}, 1000);
				}
				function madhuSS()
				{
								
								clearInterval(resss);
				   				window.location.replace(  "vendor-admin-index.html?"+querystr); 
				
				}		
				function onDeviceReady()
				{
	                networkState = navigator.connection.type;	
					document.addEventListener('backbutton', backButtonCallback, false);
				}
	
										
			
				document.addEventListener("deviceready", onDeviceReady, false);	
											
				
});
$(document).on('change', 'select#BrandNames', function(event) 
{
	$("#T1").html("");
	$("#T2").html("");
	$("#T3").html("");
	$("#T4").html("");
	$("#T5").html("");
	$('#t1cat').val('');
	$('#t2cat').val('');
	$('#t3cat').val('');
	$("#t4cat").val('');
	$("#t5cat").val('');

      var vendor_brand_id = $('#BrandNames').val();
        showT1(vendor_brand_id, '');
            $('.t1t2Wrapper').html("");
});

function showT1(vendor_brand_id, t1categorytext) 
{
    /*
    $.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + t1categorytext + '&vendor_id=' + vendor_id,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) 
		{
            displayT1(response, t1categorytext)
        },
        error: function(e) 
		{
            alert('Error inside Fill form request');
        }
    });
*/


var value = "";
var categoryjson = {
        'reqstr': t1categorytext,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
            timeout:10000,
			cache: false,
				
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) 
                {
               displayT1(response, t1categorytext)
               
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

function displayT1(response, t1categorytext) 
{


    var res = response;
    if (res.data.length > 0) 
	{
        var html = '<div class="row-fluid">\
    <div>\
    <select class="m-wrap" id="T1Select" tabindex="1" style="width:100%;">\
    <option class="placeholder" selected disabled>Select T1</option>';
        for (var i = 0; i < res.data.length; i++) {

            var val = res.data[i];
            if (val) {
                val = val.trim();
                html += '<option value="' + res.data[i] + '">' + res.data[i] + '</option>';
            }

        }
        html +=
            '</select>\
    </div>';
        $("#T1").append(html);
    }


 //   fetchVendorCategories(vendor_id);



}


// For Change in T1
$(document).on('change', '#T1Select', function(event) 
{
	var vendor_brand_id = $('#BrandNames').val().trim();

    var reqstr = $('#T1Select').val();

        if(reqstr)
        {
            reqstr = reqstr.trim();
        }

        $("#t1cat").val(reqstr);
            $("#t2cat").val('');
                $("#t3cat").val('');
                    $("#t4cat").val('');
                        $("#t5cat").val('');

    
/*
    $.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr + '&vendor_id=' + vendor_id,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) {
         displayT2(response, '');
        },
        error: function(e) {
            alert('Error inside Fill form request');
        }
    });
*/

var value = "";
var categoryjson = {
        'reqstr': reqstr,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
       beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) {
            displayT2(response, '');
               
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


     displayGrid(reqstr);
});


function displayT2(response, t1categorytext) 
{
    $("#T2").html("");
    $("#T3").html("");
    $("#T4").html("");
    $("#T5").html("");
    $("#T6").html("");
    var res = response;
     if(res.data.length>0)
    {
    var html = '<div class="row-fluid">\
    <div>\
    <select class="m-wrap" id="T2Select" tabindex="1" style="width:100%;">\
    <option class="placeholder" selected disabled>Select T2</option>';
    for (var i = 0; i < res.data.length; i++) {
        var val = res.data[i];
        if (val) {
            val = val.trim();
            html += '<option value="' + res.data[i] + '">' + res.data[i] + '</option>';
            }
            }
    html +=
        '</select>\
    </div>';
    $("#T2").append(html);
}
}


$(document).on('change', '#T2Select', function(event) 
{
    var vendor_brand_id = $('#BrandNames').val();
    var T1 = $('#T1Select').val();
    var T2 = $('#T2Select').val();

    if(vendor_brand_id)
    {

        vendor_brand_id = vendor_brand_id.trim();
    }

    if(T1)
    {
       T1 = T1.trim(); 
    }
    if(T2)
    {
        T2 = T2.trim();
    }
    var reqstr = T1 + '@' + T2;


    $('#t2cat').val(T2);
                    $("#t3cat").val('');
                    $("#t4cat").val('');
                        $("#t5cat").val('');

/*
    $.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) {
            displayT3(response, '');

        },
        error: function(e) {
            alert('Error inside Fill form request');
        }
    });
*/


var value = "";
var categoryjson = {
        'reqstr': reqstr,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) {
                displayT3(response, '');
               
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


    displayGrid(reqstr);
});


function displayT3(response, t1categorytext) 
{
    $("#T3").html("");
    $("#T4").html("");
    $("#T5").html("");
    $("#T6").html("");
    var res = response;
    if(res.data.length>0)
    {
    var html = '<div class="row-fluid">\
    <div>\
    <select class="m-wrap" id="T3Select" tabindex="1" style="width:100%;">\
    <option class="placeholder" selected disabled>Select T3</option>';
    for (var i = 0; i < res.data.length; i++) {
        var val = res.data[i];
        if (val) {
            val = val.trim();
            html += '<option value="' + res.data[i] + '">' + res.data[i] + '</option>';
        }
    }
    html +=
        '</select>\
    </div>';
    $("#T3").append(html);
    }

}



// For Change in T3


$(document).on('change', '#T3Select', function(event) {
    var vendor_brand_id = $('#BrandNames').val();
    var T1 = $('#T1Select').val();
    var T2 = $('#T2Select').val();
    var T3 = $('#T3Select').val();
    if(vendor_brand_id)
    {
        vendor_brand_id = vendor_brand_id.trim();
    }
    if(T1)
    {
        T1 = T1.trim();
    }
    if(T2)
    {
        T2 = T2.trim();
    }
    if(T3)
    {
        T3 = T3.trim();
    }
    
    var reqstr = T1 + '@' + T2 + '@' + T3;

    $('#t3cat').val(T3);
                    $("#t4cat").val('');
                        $("#t5cat").val('');
/*
    $.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) {
            displayT4(response, '');
        },
        error: function(e) {
            alert('Error inside Fill form request');
        }
    });
*/


var value = "";
var categoryjson = {
        'reqstr': reqstr,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) {
                 displayT4(response, '');
               
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




    displayGrid(reqstr);
});


function displayT4(response, t1categorytext) {
    $("#T4").html("");
    $("#T5").html("");
    $("#T6").html("");
    var res = response;
    if(res.data.length>0)
    {
    var html = '<div class="row-fluid">\
    <div>\
    <select class="m-wrap" id="T4Select" tabindex="1" style="width:100%;">\
    <option class="placeholder" selected disabled>Select T4</option>';
    for (var i = 0; i < res.data.length; i++) {
        var val = res.data[i];
        if (val) {
            val = val.trim();
            html += '<option value="' + res.data[i] + '">' + res.data[i] + '</option>';
        }
    }
    html +=
        '</select>\
    </div>';
    $("#T4").append(html);
    }
}




$(document).on('change', '#T4Select', function(event) {
    var vendor_brand_id = $('#BrandNames').val();
    var T1 = $('#T1Select').val();
    var T2 = $('#T2Select').val();
    var T3 = $('#T3Select').val();
    var T4 = $('#T4Select').val();

    if(vendor_brand_id)
    {
        vendor_brand_id = vendor_brand_id.trim();
    }
    if(T1)
    {
        T1 = T1.trim();
    }
    if(T2)
    {
        T2 = T2.trim();
    }
    if(T3)
    {
        T3 = T3.trim();
    }

    if(T4)
    {
        T4 = T4.trim();
    }
    
    var reqstr = T1 + '@' + T2 + '@' + T3 + '@' + T4;

    $('#t4cat').val(T4);
                        $("#t5cat").val('');
/*
    $.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) {
            displayT5(response, '');
        },
        error: function(e) {
            alert('Error inside Fill form request');
        }
    });
*/



var value = "";
var categoryjson = {
        'reqstr': reqstr,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) {
                 displayT5(response, '');
               
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



    displayGrid(reqstr);
    });



function displayT5(response, t1categorytext) {
    $("#T5").html("");
    $("#T6").html("");
    var res = response;
    if(res.data.length>0)
    {
    var html = '<div class="row-fluid">\
    <div>\
    <select class="m-wrap" id="T5Select" tabindex="1" style="width:100%;">\
    <option class="placeholder" selected disabled>Select T5</option>';
    for (var i = 0; i < res.data.length; i++) {
        var val = res.data[i];
        if (val) {
            val = val.trim();
            html += '<option value="' + res.data[i] + '">' + res.data[i] + '</option>';
        }
    }
    html +=
        '</select>\
    </div>';
    $("#T5").append(html);
}

}


$(document).on('change', '#T5Select', function(event) {

    var vendor_brand_id = $('#BrandNames').val();
    var T1 = $('#T1Select').val();
    var T2 = $('#T2Select').val();
    var T3 = $('#T3Select').val();
    var T4 = $('#T4Select').val();
    var T5 = $('#T5Select').val();

    if(vendor_brand_id)
    {
        vendor_brand_id = vendor_brand_id.trim();
    }

    if(T1)
    {
        T1 = T1.trim();
    }

     if(T2)
    {
        T2 = T2.trim();
    }

   if(T3)
    {
        T3 = T3.trim();
    }

if(T4)
    {
        T4 = T4.trim();
    }

if(T5)
    {
        T5 = T5.trim();
    }


    $('#t5cat').val(T5);

    var reqstr = T1 + '@' + T2 + '@' + T3 + '@' + T4 + '@' + T5;
    
    /*$.ajax({
        type: 'GET',
        url: url + '/admin/categorylevelservice?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr,
        jsonpCallback: 'jsonCallback',
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
        success: function(response) {
           // displayT6(response, '');
            displayGrid(reqstr);
        },
        error: function(e) {
            alert('Error inside Fill form request');
        }
    });
*/


var value = "";
var categoryjson = {
        'reqstr': reqstr,
        'vendor_brand_id': vendor_brand_id,
        'value': value
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/categorylevelservice',
             timeout: 7000,
                success: function(response) {
                 displayGrid(reqstr);
               
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

displayGrid(reqstr);
});


function displayGrid(reqstr) {
    var request = reqstr.split('@');
    $('.t1t2Wrapper').html("");
    var htmlforTree = '<ul class="br_crumb">';
    for (var k = 0; k < request.length; k++) {
        if (k == request.length - 1) {
            htmlforTree += '<li>' + request[k] + '</li>';
        } else {
            htmlforTree += '<li>' + request[k] + '<i class="icon-angle-right"></i></li>';
        }
    }
    htmlforTree += '</ul>';
    $('.t1t2Wrapper').append(htmlforTree);
}

$(function() {

$('#t1cat').keypress(function(e) 
{

	
      var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
              var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==124||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		
  
    if (ret) 
    {
        return ret;
    }
    else
    {
   	  return ret;
    }
});


$('#t2cat').keypress(function(evt) {

       var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
              var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==124||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		
  
    if (ret) 
    {
        return ret;
    }
    else
    {
   	  return ret;
    }

});

$('#t3cat').keypress(function(evt) {

      var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
              var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==124||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		
  
    if (ret) 
    {
        return ret;
    }
    else
    {
   	  return ret;
    }

});


$('#t4cat').keypress(function(evt) 
{

       var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
              var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==124||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		
  
    if (ret) 
    {
        return ret;
    }
    else
    {
   	  return ret;
    }
});

$('#t5cat').keypress(function(evt) {

       var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
              var ret = (((keyCode >= 43 && keyCode <= 57)||(keyCode >= 97 && keyCode <= 122)||keyCode==32||keyCode==40||keyCode==41||keyCode==38||keyCode==124||keyCode==39||(keyCode >= 65 && keyCode <= 90)));
		
  
    if (ret) 
    {
        return ret;
    }
    else
    {
   	  return ret;
    }
});

});



function savereqform()
{
 
 var str1 = '';
   var text = '';
    var T1 = $('#t1cat').val();
    var T2 = $('#t2cat').val();
    var T3 = $('#t3cat').val();
    var T4 = $('#t4cat').val();
    var T5 = $('#t5cat').val();
    var reqstr = '';
    var vendor_brand_id = $('#BrandNames').val();

  if(vendor_brand_id)
    {
        vendor_brand_id = vendor_brand_id.trim();
    }

    if(T1)
    {
        T1 = T1.trim();
    }

     if(T2)
    {
        T2 = T2.trim();
    }

   if(T3)
    {
        T3 = T3.trim();
    }

if(T4)
    {
        T4 = T4.trim();
    }

if(T5)
    {
        T5 = T5.trim();
    }



    if (T1 == null || T1 === undefined) {
        T1 = '';
    }
    if (T2 == null || T2 === undefined) {
        T2 = '';
    }
    if (T3 == null || T3 === undefined) {
        T3 = '';
    }
    if (T4 == null || T4 === undefined) {
        T4 = '';
    }
    if (T5 == null || T5 === undefined) {
        T5 = '';
    }
    if (T1 != '' || T2 != '' || T3 != '' || T4 != '' || T5 != '') {
        reqstr = T1 + '@' + T2 + '@' + T3 + '@' + T4 + '@' + T5;
        reqstr = reqstr.replace(/@@/g, '@').replace(/(^@+)|(@+$)/g, '')
    }
    var flag = true;
    if (!vendor_brand_id) {
        alert('Brand Cannot Be Empty');
        e.stopPropagation();
        e.stopImmediatePropagation();
        flag = false;
    }

    if (reqstr == '') {
        alert('Atleast One Input Required');
        e.stopPropagation();
        e.stopImmediatePropagation();
        flag = false;
    } else {
        if (flag) {
            var vendor_brand_id = vendor_brand_id;
            var str_array = reqstr.split('@');
             text = '';
            var requested_value = '';
            for (var i = 0; i < str_array.length; i++) {
                if (i == str_array.length - 1) {
                    text += str_array[i];
                } else {
                    text += str_array[i] + '===>';
                }

            }
            var x;
            
            
            
           //  str1=text.replace(/\s/g, "") ; 
		
		
           str1=text;
		
		
		
		if (regx.test(str1)) 
		{
			
			
		}
		else 
		{
			alert("Please enter valid category name");
			return false;
		}
		
		
            
            if (confirm("You have requested For  " + text) == true) {


		
              
/*
                $.ajax({
                    type: 'GET',
                    url: url + '/admin/CatgoryRequestService?vendor_brand_id=' + vendor_brand_id + '&reqstr=' + reqstr + '&vendor_id=' + vendor_id,
                    jsonpCallback: 'jsonCallback',
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
                    success: function(response) {
                        var res = response;
                        if (res == true) {
                            alert('Request Sent For Approval to Admin ');
                            $('#t1cat').val('');
                            $('#t2cat').val('');
                            $('#t3cat').val('');
                            $('#t4cat').val('');
                            $("#t5cat").val('');
                            $("#t6cat").val('');
                            //$('#BrandNames').change();
                        } else if (res == false) {
                            alert('Error Fulfilling Request , Please Try Again');
                        }
                    },
                    error: function(e) {
                        alert('Error inside Fill form request');
                    }
                }).done(function() {



        
        
            $('.t1t2Wrapper').html("");

            fetchVendorCategories(vendor_id);




});;

                */




                var value = "";
var categoryjson = {
        'vendor_brand_id': vendor_brand_id,
        'reqstr': reqstr,
        'vendor_id': vendor_id
    };

          var json_dataforsplit = JSON.stringify(categoryjson);

    $.ajax({
            type: 'POST',
            dataType: 'json',
            data: json_dataforsplit,
            async: true,
           beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
            contentType: "application/json; charset=utf-8",
            cache: false,
            url: url + '/admin/CatgoryRequestService',
             timeout: 7000,
                success: function(response) {
              
  var res = response;
                        if (res == true) {
                            alert('Request Sent For Approval to Admin ');
                            $('#t1cat').val('');
                            $('#t2cat').val('');
                            $('#t3cat').val('');
                            $('#t4cat').val('');
                            $("#t5cat").val('');
                            $("#t6cat").val('');
                            //$('#BrandNames').change();
                        } else if (res == false) {
                            alert('Error Fulfilling Request , Please Try Again');
                        }

            },
            error: function(x, t, m) {
           
            }
        }).done(function() {



        
        
            $('.t1t2Wrapper').html("");

            fetchVendorCategories(vendor_id);




});;


            } else {
                alert('You have cancelled the Request');
            }
        }
    }
}

    
$(document).on("click", "#requestcatbtn", function(e) {

    
    var devicecon=checkconnection();
     if(devicecon)
     {
      											 
								           	    $("#errornet1").show();	
     }else
     {
          var onlinstatus=online();
          if(onlinstatus)
          {
		     $("#requestcatform").valid();
		  }
		  else
          {
             $("#errornet2").show();	
			
          
          }
	 }
});



function fetchVendorCategories(vendor_id)
{

       var all_status = [];

      $("#tablecontent").empty();
     return    $.ajax({
        type: 'GET',
         url: url + '/admin/getvendorequestedcategories?vendor_id=' + vendor_id,
        jsonpCallback: 'jsonCallback',
        dataType: 'jsonp',
        jsonp: false,
        async: true,
		 beforeSend: function() 
		{
            $("#loader").show();
        },
        complete: function() 
		{
            $("#loader").hide();
			applyBigStyles();
        },
        success: function(response) {
                                if(response.details.length<=0)
                                {
                                    $("#deletebtn").hide();
                                     
                                }
                              

                                var html ='';
                                var classstyle = "";

            for(var i=0;i<response.details.length;i++)
            {

                if(response.details[i].status=='declined')
                {
                    classstyle = "label-danger";
                }
                else if(response.details[i].status=='approved')
                {
                    classstyle = "label-success";
                }
                else  if(response.details[i].status=='pending')
                {
                    classstyle = "label-warning";
                }
				 else  if(response.details[i].status=='corrected')
                {
                  classstyle = "label-success";
                }


                var messa_obtained = response.details[i].message ;

                var classmessage = '';

                if(messa_obtained.length>8)
                {
                		classmessage = 'icon-mail';
                		messa_obtained = messa_obtained.substring(0, 7);
                }
                else
                {
                		classmessage = 'icon-mail';
                		messa_obtained = messa_obtained ;
                }

                var prsent_status = response.details[i].status.trim();

                var foundinallstatus = $.inArray(prsent_status, all_status) > -1;

                 		if (!foundinallstatus) 
                 		{
						all_status.push(prsent_status);
        				} 

                   
             
                html+=              '<div class="Table_fluid AddreqTableCols">\
                                    <div class="col_chk"><label class="pull-left tp_mrgin_mins3"><input type="checkbox" class="checkbox1 bigcheck pull-left" id='+response.details[i].document_id+'></label></div>\
                                    <div class="col_cate"><p>'+response.details[i].request_message+'</p></div>\
                                    <div class="col_stat"><p class="label_p"><span class="label '  +classstyle+' label-status">'+response.details[i].status+'</span></p></div>\
                                    <div class="col_msg"><p><i class="'+classmessage+'" message="' + response.details[i].message + '" data-toggle="modal" data-target="#msg_popup"></i></p></div>\
                                    <div class="col_dat"><p>'+response.details[i].created+'</p></div>\
                                     </div>';
                                      $("#deletebtn").show();
            }

               $("#tablecontent").html(html);
                 all_status = $.unique(all_status);

                 

                     var htmlfilter = '<option selected="" disabled="">Status</option>';
            for(var i=0;i<all_status.length;i++)
            {
                 htmlfilter += '<option value="'+all_status[i]+'">'+all_status[i]+'</option>'
            }

               $("#filterstatus").html(htmlfilter);



			    //

			    if(all_status.length>0)
			    	{	
         var found = $.inArray('pending', all_status) > -1;
        if (found) {
          $('#filterstatus').val('pending').trigger('change');
        } else {
            var status_val = all_status[0];
            $('#filterstatus').val(status_val).trigger('change');
        }
    	}
    

       $("#T2").html("");
    $("#T3").html("");
    $("#T4").html("");
    $("#T5").html("");
    $("#T6").html("");

         $('#T1Select').prop('selectedIndex',0);
        
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

    
       $(document).on('click', '.icon-mail', function(event ) {
    
            var dataval =  $(this).attr('message');

            

            $('.modal-body').html(dataval);
   
        });



   // For Selecting All Checkboxes

    $(document).on('click', '#selectall', function(event ) {
       if(this.checked) { // check select status
            $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"               
            });
        }else{
            $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         
        }
   
});
// For deleting records 

   $(document).on('click', '#deletebtn', function(event ) {
  var $checked = $('#tablecontent').find(":checkbox:checked");

      if (!$checked.length) {
        alert('Need to select atlease one checkbox button');
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    
 
 else 
{

    if (confirm("Are you Sure to Delete") == true) {




 var ids = [];
     $.each($checked, function(i,e){
var status = $(e).closest('.AddreqTableCols').find('.label-status').text();
        
         var filterstatus = $('#filterstatus').val();

         if(!filterstatus)
         {
    ids.push($(e).attr("id"));
         }
         else
         {
           if ($(e).attr("id") != 'selectall' && status == $('#filterstatus').val()) {
            ids.push($(e).attr("id"))
        }
            
         }

        
      
 });


     


$.ajax({
        type: 'GET',
        url: url+'/admin/deletevendorcategories?document_ids=' + ids,
        jsonpCallback: 'jsonCallback',
        dataType: 'jsonp',
        jsonp: false,
        async: true,
         beforeSend: function() 
        {
            $("#loader").show();
        },
        complete: function() 
        {
            $("#loader").hide();
        },
        success: function(response) {

          var res = response;

          if(res==true)
          {

            fetchVendorCategories(vendor_id);
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
       

        $('.checkbox1').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });         

    }


    


 }

 $('#selectall').attr('checked', false); // Unchecks it

});

   //getting queary string by name
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }



//              $("#homeicon").click(function () {
	$(document).on('click', '#homeicon', function(event ) {
	
	             querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ; 

                  window.location.replace(  "vendor-admin-index.html"+querystr);
              });


//              $("#logout").click(function () {
	$(document).on('click', '#logout', function(event ) {
				
                     window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
              });


    $(document).on('change', 'select#filterstatus', function(event) {
    $(".divTableContent .AddreqTableCols").hide();
    $(".label_p:contains('" + $(this).val() + "')").closest(".AddreqTableCols").show();
});



function myFunction()
    {

var T1 = $('#t1cat').val();
var T2 = $('#t2cat').val();
var T3 = $('#t3cat').val();
var T4 = $('#t4cat').val();
var T5 = $('#t5cat').val();


    if(T1)
    {
        T1 = T1.trim();
    }

     if(T2)
    {
        T2 = T2.trim();
    }

   if(T3)
    {
        T3 = T3.trim();
    }

if(T4)
    {
        T4 = T4.trim();
    }

if(T5)
    {
        T5 = T5.trim();
    }


    var reqstr = '';


   
 if (T1 == null || T1 === undefined) {
        T1 = '';
    }
    if (T2 == null || T2 === undefined) {
        T2 = '';
    }

    if (T3 == null || T3 === undefined) {
        T3 = '';
    }


    if (T4 == null || T4 === undefined) {
        T4 = '';
    }

    if (T5 == null || T5 === undefined) {
        T5 = '';
    }

   

    if (T1 != '' || T2 != '' || T3 != '' || T4 != '' || T5 != '') {
        reqstr = T1 + '@' + T2 + '@' + T3 + '@' + T4 + '@' + T5 ;
        reqstr = reqstr.replace(/@@/g, '@').replace(/(^@+)|(@+$)/g, '')
    }

     displayGrid(reqstr);

    }



$(document).on('change keyup paste', 'input', function(event ) {
  return false;
})
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


function network()
{
       
     	$("#errornet1").hide();
     	$("#errornet2").hide();
     	 window.location.replace(  "vendor-admin-index.html" + querystr);
}