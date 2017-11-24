function backbuttoncallformainpage() {
    // do nothing
    return false;
  }
  // for main page
function backbuttoncallforcreateaccountpage() {
  // do nothing
  return false;
}

function backbuttoncallforcustomerverificationpinpage() {
  // do nothing
  return false;
}

function backbuttoncallforhomedeliverypage() {
  homedeliverypagebackfunctionality();
  return false;
}

function qrcodepagebackbutton() {
  qrcodepagepagebackfunctionality();
  return false;
}

function backbuttoncallforvendorpinpage() {
  // do nothing 
  return false;
}

function backbuttoncallforvendoridpage() 
{
  // do nothing 
if (confirm("Do you want to exit the app?") == true) 
{
      navigator.app.exitApp();
    } else {
        
    }
 
}


function backbuttoncallforcustomerpage() {
    customerpagebackfunctionality();
    return false;
  }
  // Home delivery page 
function homedeliverypagebackfunctionality() {
  
 $('[data-role="popup"]').popup("close");

  if (pageselectedonhomedel === 'My Location') {
    return false;
  }
  if (pageselectedonhomedel === 'My address labels') {
    $("#homedeliverypage .homelogocreateloc").trigger("click");
    return false;
  } else if (pageselectedonhomedel === 'Add New Label') {
    $("#homedeliverypage .newlabeltoparrow").trigger("click");
    return false;
  } else if (pageselectedonhomedel === 'Edit Location') {
    $("#homedeliverypage .newlabeltoparrow").trigger("click");
    return false;
  } else if (pageselectedonhomedel === 'Add Restaurants') {
    $("#homedeliverypage .homelogosearch").trigger("click");
    return false;
  } else {
    return false;
  }
}

function qrcodepagepagebackfunctionality() {
   $('[data-role="popup"]').popup("close");
  $(':mobile-pagecontainer').pagecontainer("change", "start.html?UUID=" + UUID + '&cust_id=' + cust_id, {
    allowSamePageTransition: true,
    reload: true,
    transition: "none"
  });
   // $(this).prop('disabled', true);
                        return false;
}



function backbuttoncallforsearchpage() {
   $('[data-role="popup"]').popup("close");
   //$( ".pickitemshomesearch" ).trigger( "click");
   $( "#itemssearchpage .pickitemshomesearch").trigger( "click");
   // $(this).prop('disabled', true);
                        return false;
}



function customerpagebackfunctionality() {



    if ($('.ui-popup-active').length) {
      $("#customerpage .tickclose").trigger("click");
      return false;
    }

    /* 
  if(!$('.ui-popup-active').length)
    {
     // $('[data-role="popup"]').popup("close");
      $('.ui-popup').popup('close');
    }
*/

     /*$(".writecomments").blur();
  $(".writecomments").focus();
  
    $(".writecomments").remove();
    */

/*
      if($("#customerpage #orderplaced_succ-popup").hasClass("ui-popup-active"))
{
 event.stopImmediatePropagation();
  event.preventDefault();
  return false;


}
  */

   $("#customerpage .pickitemshome").trigger("click");
 
  

}