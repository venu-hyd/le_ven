function showtoppsandcrusts(json, quantity, vendoritemsid, clickevent, tabnumber, top_name, crust_name)
{
    
    var contains = false;
    var m_class = "";
    if (!tabnumber)
    {
        tabnumber = 1;
    }
    if (!top_name)
    {
        top_name = 'Toppings'
    }
    if (!crust_name)
    {
        crust_name = 'Crust'
    }
    $("#addonsWrap" + vendoritemsid).html("");
    var toppings = [];
    var crustings = [];
    var addonsContent = $(' <div id="popupinner' + vendoritemsid + '" class="popup_inner addonsContent"></div>'); // main div
    var popupheader = $('<div class="popup_header"></div>');
    var addonsheader = '<h2>Addons</h2><div class="rightAction"><button  class="removeallchecked btn btn-a ui-btn">Uncheck All</button><a href="#" class="icon-ok-1 tick tickclose "></a></div>';
    popupheader.append(addonsheader);
    addonsContent.append(popupheader);
    var addonsQtyWrap = $('<div class="addonsQtyWrap"></div>');
    var ulhtml = '<ul>';
    for (var i = 1; i <= quantity; i++)
    {
        ulhtml += '<li  data-vendoritemid="' + vendoritemsid + '"   data-toppname="' + top_name + '" data-crutsname="' + crust_name + '"  data-tabid="' + i + '" class="tabclcik">Qty-' + i + '</li>';
    }
    ulhtml += '</ul>';
    addonsQtyWrap.append(ulhtml).trigger('create').trigger('pagecreate');
    addonsContent.append(addonsQtyWrap).trigger('create').trigger('pagecreate');
    var popup_content = $('<div class="popup_content"></div>');
    var popup_sub = $('<div id="popupcontent' + vendoritemsid + '" class="popup_content_addonsWrap"></div>');
    for (var i = 0; i < json.length; i++)
    {
        toppings = json[i].toppings;
        crustings = json[i].crustings;
        var toppdata = '<div class="addonsListWrap"><h3 class="tc_head">' + top_name + '</h3><ul>';
        for (var k = 0; k < toppings.length; k++)
        {
            var topping_name = toppings[k].topping_name;
            var topping_cost = toppings[k].topping_cost;
            var topping_id = toppings[k].topping_id;
            var dyn_qt_val = vendoritemsid + '_KK_' + k + '_KK_' + i + 'tab' + tabnumber;
            var isChecked = false;
            var value = window.sessionStorage.getItem(dyn_qt_val + "_checkbox");
            if ((value === "false") || (value === "true"))
            {
                isChecked = window.sessionStorage.getItem(dyn_qt_val + "_checkbox") === "true" ? true : false;
            }
            var dyn_key = $("#" + dyn_qt_val).hasClass("ui-checkbox-on");
            if (dyn_key)
            {
                m_class = "ui-checkbox-on";
            }
            else
            {
                m_class = "";
            }
            if (isChecked)
            { //checked
                toppdata += '<li><form><input type="checkbox"  name="checkbox-mini-0"  id="' + dyn_qt_val + '_checkbox" data-mini="true" checked/><label class="' + m_class + '"  data-vendoritemsid="' + vendoritemsid + '"  data-additionname="' + topping_name + '"  data-additionid="' + topping_id + '"  data-additioncost="' + topping_cost + '"  id="' + dyn_qt_val + '_label"    for="' + dyn_qt_val + '_checkbox">' + topping_name + ' &#x20B9 ' + topping_cost + '  </label></form></li>';
            }
            else
            { //not checked
                toppdata += '<li><form><input type="checkbox"  name="checkbox-mini-0"  id="' + dyn_qt_val + '_checkbox" data-mini="true"/><label class="' + m_class + '"  data-vendoritemsid="' + vendoritemsid + '"     data-additionname="' + topping_name + '"  data-additionid="' + topping_id + '"   id="' + dyn_qt_val + '_label" data-additioncost="' + topping_cost + '"   for="' + dyn_qt_val + '_checkbox">' + topping_name + ' &#x20B9 ' + topping_cost + ' </label></form></li>';
            }
        }
        toppdata += '</ul></div>';
        var crustdata = '<div class="addonsListWrap"><h3 class="tc_head">' + crust_name + '</h3><ul>';
        for (var j = 0; j < crustings.length; j++)
        {
            var crustings_name = crustings[j].crust_name;
            var crustings_cost = crustings[j].crust_cost;
            var crustings_id = crustings[j].crust_id;
            var dyn_qt_val = vendoritemsid + '_ZZ_' + j + '_ZZ_' + i + 'tab' + tabnumber;
            var isChecked = false;
            var value = window.sessionStorage.getItem(dyn_qt_val + "_checkbox");
            if ((value === "false") || (value === "true"))
            {
                isChecked = window.sessionStorage.getItem(dyn_qt_val + "_checkbox") === "true" ? true : false;
            }
            var dyn_key = $("#" + dyn_qt_val).hasClass("ui-checkbox-on");
            if (dyn_key)
            {
                m_class = "ui-checkbox-on";
            }
            else
            {
                m_class = "";
            }
            if (isChecked)
            { //checked
                crustdata += '<li><form><input type="checkbox"  name="checkbox-mini-0"  id="' + dyn_qt_val + '_checkbox" data-mini="true" checked/><label class="' + m_class + '" data-vendoritemsid="' + vendoritemsid + '" data-additionid="' + crustings_id + '"   id="' + dyn_qt_val + '_label"   data-additioncost="' + crustings_cost + '"  data-additionname="' + crustings_name + '"   for="' + dyn_qt_val + '_checkbox">' + crustings_name + ' &#x20B9 ' + crustings_cost + '  </label></form></li>';
            }
            else
            { //not checked
                crustdata += '<li><form><input type="checkbox"  name="checkbox-mini-0"  id="' + dyn_qt_val + '_checkbox" data-mini="true"/><label class="' + m_class + '" data-vendoritemsid="' + vendoritemsid + '"  data-additionid="' + crustings_id + '" id="' + dyn_qt_val + '_label"  data-additioncost="' + crustings_cost + '"   data-additionname="' + crustings_name + '"  for="' + dyn_qt_val + '_checkbox">' + crustings_name + ' &#x20B9 ' + crustings_cost + '  </label></form></li>';
            }
        }
        crustdata += '</ul></div>';
    }
    if (toppings.length > 0)
    {
        popup_sub.append(toppdata);
    }
    if (crustings.length > 0)
    {
        popup_sub.append(crustdata)
    }
    popup_content.append(popup_sub).fadeIn(650);
    addonsContent.append(popup_content).fadeIn(650);
    var vendoritemsdata = $("#lastwrap" + vendoritemsid).data('stuff');
    var pattern = /tab(\d+)/,
        activequantities = [];
    for (var i = 0; i < vendoritemsdata.length; i++)
    {
        var name = vendoritemsdata[i].name;
        activequantities.push(name.match(pattern)[1]);
    }
    activequantities = $.unique(activequantities);
    //$("#popupinner844 .tabclcik").removeClass('active');
    $("#addonsWrap" + vendoritemsid).find('.tabclcik').removeClass('active');
    $("#addonsWrap" + vendoritemsid).html(addonsContent).fadeIn(650).trigger('create').trigger('pagecreate');
    $("#addonsWrap" + vendoritemsid).trigger('create').trigger('pagecreate');
    for (var i = 0; i < activequantities.length; i++)
    {
        var current_quan = activequantities[i];
        $("#addonsWrap" + vendoritemsid).find('.tabclcik[data-tabid="' + current_quan + '"]').addClass('active');
    }
    $("#addonsWrap" + vendoritemsid).find('.tabclcik[data-tabid="' + tabnumber + '"]').addClass('selectedtab');
    //$("#addonsWrap" + vendoritemsid).popup('open').trigger("create");
    $("#addonsWrap" + vendoritemsid).enhanceWithin().popup().popup('open');
    $("#popupinner" + vendoritemsid).data('toppcrustsdata', json);
    $("#popupinner" + vendoritemsid).data('quantity', quantity);
    $("#popupinner" + vendoritemsid).data('vendoritemsid', vendoritemsid);
    return false;
}


$(document).on('click', '#customerpage .tabclcik,#itemssearchpage .tabclcik', function(event)
{

    $('.tabclcik').removeClass('active');
    $(this).addClass('active');
    var vendoritemsid = $(this).data('vendoritemid');
    var tbnumber = $(this).data('tabid');
    var json = $("#popupinner" + vendoritemsid).data('toppcrustsdata');
    var quantity = $("#popupinner" + vendoritemsid).data('quantity');
    var vendoritemsid = $("#popupinner" + vendoritemsid).data('vendoritemsid');
    var clickevent = 'tabclcik';
    var data = $("#popupinner" + vendoritemsid).find('.popup_content_addonsWrap').html();
    var topping_name = $(this).attr('data-toppname');
    var crusting_name = $(this).attr('data-crutsname');
    showtoppsandcrusts(json, quantity, vendoritemsid, clickevent, tbnumber, topping_name, crusting_name);
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});


$("#customerpage .addonpopup, #itemssearchpage .addonpopup ").on("popupafterclose", function ()
{
				$(".tickclose").trigger("click");
});



$(document).on('click', '#customerpage .tickclose,#itemssearchpage .tickclose', function(event)
{
    $elem = $(this);
    var id = $(this).closest('.popup_inner').attr('id');
    if (id)
    {
        id = id.replace("popupinner", "");
        $("#addonsWrap" + id).popup('close');
    }
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});


    $(document).on('click touchend', '#customerpage .removeallchecked,#itemssearchpage .removeallchecked', function(event, data)
    {
        $elem = $(this);
        var id = $(this).closest('.popup_inner').attr('id');
        id = id.replace("popupinner", "");
        $("#addonsWrap" + id).find('.tabclcik').removeClass('active');
        var totalcosttobededucted = '0';
        var toppingscrustsdata = $("#lastwrap" + id).data('stuff');
        
        for (var i = 0; i < toppingscrustsdata.length; i++)
        {
            totalcosttobededucted = parseFloat(totalcosttobededucted) + parseFloat(toppingscrustsdata[i].cost);
            window.sessionStorage.setItem(toppingscrustsdata[i].name, false);
        }
        toppingscrustsdata = [];
        $("#lastwrap" + id).data('stuff', toppingscrustsdata).attr('data-stuff', JSON.stringify(toppingscrustsdata));
        $('#myordersfinal').find("#lastwrap" + id).data('stuff', toppingscrustsdata).attr('data-stuff', JSON.stringify(toppingscrustsdata));
        var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
        subtotalvalue = parseFloat(subtotalvalue - totalcosttobededucted).toFixed(2);
        $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
        $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
        $("#popupcontent" + id).find('.addonsListWrap').find("[type='checkbox']").prop("checked", false).checkboxradio("refresh");
        var totaladditionsp = 0;
        $("#lastwrap" + id).find('.Itm_right_aside .additions').text(totaladditionsp.toFixed(2));
         $('#myordersfinal').find("#lastwrap" + id).find('.Itm_right_aside .additions').text(totaladditionsp.toFixed(2));

        $("#lastwrap" + id).find('.addonsBtn').removeClass('active');
        $('#myordersfinal').find("#lastwrap" + id).find('.addonsBtn').removeClass('active');

        $("#lastwrap" + id).find('.Itm_right_aside').find('.additionsclassstyle').hide();
        $('#myordersfinal').find("#lastwrap" + id).find('.Itm_right_aside').find('.additionsclassstyle').hide();

        window.sessionStorage.removeItem(id + '');

        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
    });


$(document).on('change', '[type="checkbox"]', function(event, data)
{
    if ($(this).is(":checked"))
    {
        if (!data)
        {
            var addtionsprice = $(this).prev().data('additioncost');
            var vendoritemid = $(this).prev().data('vendoritemsid');

            var addtionname = $(this).prev().data('additionname');
            var addtionid = $(this).prev().data('additionid');
            var currentadditionsprice = parseFloat($("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text());
            var total = currentadditionsprice + addtionsprice;
            if (total > 0)
            {
                $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').show();
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').show();
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
                $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
            }
            else
            {
                $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').hide();
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').hide();
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
                $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
            }
            //var myid = $(this).next().attr("id");
            var checkboxid = $(this).attr("id");
            window.sessionStorage.setItem(checkboxid, true);

            var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
            subtotalvalue = parseFloat(subtotalvalue + addtionsprice).toFixed(2);
            $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
            $(".myOrderPanel_footer .subtotal span").text(subtotalvalue);
            var vendoritemsdata = $("#lastwrap" + vendoritemid).data('stuff');
            var toppcrusts = {
                'name': checkboxid,
                'cost': addtionsprice,
                'additionname': addtionname,
                'addtionid': addtionid,
            };
            vendoritemsdata.push(toppcrusts);
           
            $("#lastwrap" + vendoritemid).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
            $('#myordersfinal').find("#lastwrap" + vendoritemid).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
            if (vendoritemsdata.length >= 1)
            {
                $("#lastwrap" + vendoritemid).find('.addonsBtn').addClass('active');
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.addonsBtn').addClass('active');
            }
            else
            {
                $("#lastwrap" + vendoritemid).find('.addonsBtn').removeClass('active');
                $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.addonsBtn').removeClass('active');
            }
        }
    }
    else
    {
        var addtionsprice = $(this).prev().data('additioncost');
        var vendoritemid = $(this).prev().data('vendoritemsid');
        var addtionname = $(this).prev().data('additionname');
        var addtionid = $(this).prev().data('additionid');
        var currentadditionsprice = parseFloat($("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text());
        var total = currentadditionsprice - addtionsprice;
        $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
        if (total > 0)
        {
            $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').show();
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').show();
            $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
        }
        else
        {
            $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').hide();
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additionsclassstyle').hide();
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
            $("#lastwrap" + vendoritemid).find('.Itm_right_aside .additions').text(total.toFixed(2));
        }
        var checkboxid = $(this).attr("id");
        window.sessionStorage.setItem(checkboxid, false);
        var subtotalvalue = parseFloat($(".myOrderPanel_footer .subtotal").data('subtotal'));
        subtotalvalue = parseFloat(subtotalvalue - addtionsprice).toFixed(2);
        $(".myOrderPanel_footer .subtotal").data('subtotal', subtotalvalue);
        $(".myOrderPanel_footer .subtotal span").text(subtotalvalue)
        var vendoritemsdata = $("#lastwrap" + vendoritemid).data('stuff');
        var name = checkboxid;
        $.each(vendoritemsdata, function(i, item)
        {
            if (item.name == name)
            {
                vendoritemsdata.splice(i, 1);
                return false;
            }
        });
        $("#lastwrap" + vendoritemid).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
        $('#myordersfinal').find("#lastwrap" + vendoritemid).data('stuff', vendoritemsdata).attr('data-stuff', JSON.stringify(vendoritemsdata));
        if (vendoritemsdata.length >= 1)
        {
            $("#lastwrap" + vendoritemid).find('.addonsBtn').addClass('active');
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.addonsBtn').addClass('active');
        }
        else
        {
            $("#lastwrap" + vendoritemid).find('.addonsBtn').removeClass('active');
            $('#myordersfinal').find("#lastwrap" + vendoritemid).find('.addonsBtn').removeClass('active');
        }
    }


   //window.sessionStorage.setItem("additionssess"+vendoritemid + '', vendoritemsdata);

   window.sessionStorage.setItem(vendoritemid + '', JSON.stringify(vendoritemsdata));
    
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});





