		  var screenname = getParameterByName('sName');
          var vendor_id = getParameterByName('vendor_id');
          var vendor_users_id = getParameterByName('vendor_users_id');
          var vendor_type_id = getParameterByName('vendor_type_id');
          var location_id = getParameterByName('location_id');
          var vendor_session_id = getParameterByName('session_id');
          var vendor_name = getParameterByName('vendor_name');
          var vendor_user_name = getParameterByName('vendor_user_name');
		  var UUID = getParameterByName('UUID');
          var taxname;
	      var status,statuarray,globaldata;
		  var mobile_number="";
		  var updatebuttonclicked=0;
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
         var inclusive;
		//getting queary string by name
		// cost---->array[0]
		//sc-->array[2]
		//dis-->array[1]
		//st-->array[3]
		//vat-->array[4]
		//othertax1-->array[5]
		//othertax2--->array[6]
		
		/* billing order code setup fixed order
		1.cost
		2.discount
		3.service charge
		4.service tax
		5.vat
		6.othertax1
		7.othertax2 */
		
			//mobile support or not
	
	  		 var querystr = "?sName=" + screenname + '&vendor_id=' + vendor_id + '&vendor_users_id=' + vendor_users_id + '&vendor_type_id=' + vendor_type_id + '&session_id=' + vendor_session_id + '&location_id=' + location_id + '&vendor_name=' + vendor_name + '&vendor_user_name=' + vendor_user_name + '&UUID=' + UUID+'&mobile_number=' + mobile_number ;
											
        function getParameterByName(name)
		{
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
		var mytaxorderval;
	    //Get method
		var itemnames;
		
		var OtherTax1order,OtherTax2order,objname7,inclusive6,inclusive6inner,inclusive6inner1,inclusive6inner2,inclusive6inner3,inclusive6inner4,myjons;
		//mobile support or not
		
		
		var resss;
		function backButtonCallback()
		{
				                $("#loader").show();
				                resss=setInterval(function()
				                {
				                   madhuSS();
				                }, 2000);
		}
		function madhuSS()
		{
								
								clearInterval(resss);
				   				if(updatebuttonclicked=="1")
								{
								   alert("Please submit included for the calculation of taxes");
								 
								}
								else
								{
								   window.location.replace(  "vendor-admin-index.html" + querystr);
								 
								}
				
		}	
		var discountstatus1=0,scstatus2=0,ststatus3=0,vatstatus4=0,othertaxstatus1=0,othertaxstatus2=0,inclusive4inner3,itemstatus;			
		function onDeviceReady()
		{
	                	
					document.addEventListener('backbutton', backButtonCallback, false);
		}
        $(document).ready(function()
		{
		
											
							   
			
			                        $("#logout").click(function()
									{
									
									 window.location.replace(  "../customer/vendor_id_ForVendor.html?Logout=true&UUID="+UUID+'&vendor_id='+vendor_id+'&mobile='+mobile_number);
									
									});
									
									
									
									//////////////////////Reset taxes/////////////////////////////////////////////
									/////////////////////////////////////////////////////////////////////////////
									
									$("#reset").click(function() 
									{
										
												$.ajax(
												{
													url:url+'/admin/ResettaxorderandJSON?&vendor_id='+vendor_id,
													jsonpCallback: 'jsonCallback',
													cache: false,
													dataType: 'jsonp',
													jsonp: false,
													beforeSend: function()
													{ 
													   $("#loader").show(); 
													}, 
													complete: function(res) 
													{ 
														$("#loader").hide();
													 

													},
													success: function (res)
													{
												        
													     if(res.result="true")
														  {
															 alert("successfully reset taxes");
															 location.reload();
															 
														  }
														 
													},
													error: function (xhr, ajaxOptions, thrownError)
													{
													
													
													}
												});
                                              
									});
									
									//////////////////////Reset taxes/////////////////////////////////////////////
									/////////////////////////////////////////////////////////////////////////////
									
									// Test is mobile or not
									//$("#loader").hide();
									
								
											document.addEventListener("deviceready", onDeviceReady, false);
											
								
									$("#Update3").hide();
									$("#submit").hide();
									$("#vendorname")[0].innerHTML = vendor_name;
									$("#locationname")[0].innerHTML = screenname;
									$("#vendorusername")[0].innerHTML = vendor_user_name;
									$(".values3").html("");
									$("#Update2").hide();
									var status1,status2,status3,status4,status5,status6,status7;									
									var taxnamess,jsondetails,firstobj,secondobj,thirdobj,fourthobj,fivithobj,objname,objname2,objname3,objname4,objname5,inclusive,inclusive2,inclusive2inner,inclusive3,inclusive4,inclusive3inner,inclusive3inner1,inclusive4inner,inclusive4inner1,inclusive4inner2; 
									var results,taxorder,taxorder1,taxorder2,taxorder3,taxorder4,taxorder5,taxorder6,tax_id;
									var gettaxnamess,getjsondetails,getfirstobj,getsecondobj,getthirdobj,getfourthobj,getfivithobj,getobjname,getobjname2,getobjname3,getobjname4,getobjname5,getinclusive,getinclusive2,getinclusive2inner,getinclusive3,getinclusive4,getinclusive3inner,getinclusive3inner1,getinclusive4inner,getinclusive4inner1,getinclusive4inner2,jsonres,tax_id; 
								
									$("#Update").hide();
									$("#UpdateItem").hide();
									var operation="getVendorTaxeswithstatusandincludes";
				                    var len;
									var tax_order;
									$.ajax(
									{
										type: 'GET',
										url: url+'/admin/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id,
										//contentType: 'application/json; charset=utf-8',
										jsonpCallback: 'vendortaxvalues',
										cache: true,
										dataType: 'jsonp',
										jsonp: false,
										
										beforeSend: function()
										{ 
										   $("#loader").show(); 
										}, 
										complete: function(data) 
										{ 
											$("#loader").hide();
										 applyBigStyles();

										},
										success: function (data)
										{
										 
										
											jsonres=data;
											var jsonsss=JSON.stringify(data);
											console.log("jsonsss=="+jsonsss);
											len=data.details.length;
										   
											itemnames = new Array();
										    statuarray=new Array();
											for(var i=0;i<len;i++)
											{
												 taxname=data.details[i].tax_name;
								                
											     status=data.details[i].status;
										
											     tax_order=data.details[i].tax_order;
                                                
												 tax_id=data.details[i].tax_id;
												 
											
                                               												 
												itemnames.push(taxname);
										        statuarray.push(status);
																						
												if(status=="1")
												{
												
												
												   if(tax_id=="T1")
												   {
												 
												      var res="<tr><td class='swapbtns'></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><div class='taxname"+i+"  taxnamess' id='taxname"+i+"' >"+taxname+"</div></td><td><label><input type='checkbox' name='check' class='check"+i+"  statusss bigcheck pull-left'   checked disabled ></label></td></tr>";
													  $(".values").append(res);
												  
												    }
											        else if(tax_id=="T2")
												    {

													  var res="<tr><td class='swapbtns'><a class='btn btn-secondary icon-up-open' onclick='move(this.parentNode.parentNode.rowIndex,-1)' ></a><a class='btn btn-secondary icon-down-open' onclick='move(this.parentNode.parentNode.rowIndex,1)' ></a></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><div class='taxname"+i+" taxnamess' id='taxname"+i+"' >"+taxname+"</div></td><td><label><input type='checkbox' name='check' class='check"+i+" statusss bigcheck pull-left'  checked  disabled ></label></td></tr>";
													  $(".values").append(res);

												    }
													else
													{

													  var res="<tr><td class='swapbtns'><a class='btn btn-secondary icon-up-open' onclick='move(this.parentNode.parentNode.rowIndex,-1)' ></a><a class='btn btn-secondary icon-down-open' onclick='move(this.parentNode.parentNode.rowIndex,1)' ></a></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><div class='taxname"+i+" taxnamess' id='taxname"+i+"' >"+taxname+"</div></td><td><label><input type='checkbox' name='check' class='check"+i+" statusss bigcheck pull-left'  checked ></label></td></tr>";
													  $(".values").append(res);

													
													}
												  
												}
												else
												{
												     if(tax_id=="T1")
													 {

													   var res="<tr><td class='swapbtns'></td><td><div class='taxname"+i+"' id='taxname"+i+"' >"+taxname+"</div></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><label><input type='checkbox' name='check' class='check"+i+" statusss bigcheck pull-left' taxnamess'   disabled></label></td></tr>";
													    $(".values").append(res);

													 
													 }
													else if(tax_id=="T2")
												    {

													    var res="<tr><td class='swapbtns'><a class='btn btn-secondary icon-up-open' onclick='move(this.parentNode.parentNode.rowIndex,-1)'></a><a class='btn btn-secondary icon-down-open' onclick='move(this.parentNode.parentNode.rowIndex,1)'></a></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><div class='taxname"+i+" taxnamess' id='taxname"+i+"' >"+taxname+"</div></td><td><label><input type='checkbox' name='check' class='check"+i+" statusss bigcheck pull-left'   ></label></td></tr>";
													    $(".values").append(res);

													
													}
													else
													{

													    var res="<tr><td class='swapbtns'><a class='btn btn-secondary icon-up-open' onclick='move(this.parentNode.parentNode.rowIndex,-1)'></a><a class='btn btn-secondary icon-down-open' onclick='move(this.parentNode.parentNode.rowIndex,1)'></a></td><td><input type='hidden' value='"+tax_id+"' class='tavalues' /><div class='taxname"+i+" taxnamess' id='taxname"+i+"' >"+taxname+"</div></td><td><label><input type='checkbox' name='check' class='check"+i+" statusss bigcheck pull-left'   ></label></td></tr>";
													    $(".values").append(res);

													}
												
													  
													
												
												}
											
												
											
												
										    }
										    
											
											 len2=itemnames.length;
											for(var i=0;i< len2;i++)
											{
													
													
												  //$('<option value="'+itemnames[i]+'">'+itemnames[i]+'</option>').appendTo('.items');
												
											}
											
											$("#Update").show();
											$("#UpdateItem").hide();
										
											
											
	                                       
																				  
										},
										error: function (xhr, ajaxOptions, thrownError)
										{
											alert("fail");
											
										}
									});
										
														
									 $("#edit").hide();	

										//update item
										
									    var status;
										var tax;	
									
										
										$("#Update").click(function()
										{
										
													updatebuttonclicked=1;
													
													$("#Update3").hide();
												
													$(".values3").html("");
													
													var Arr = [];											
													
												
													$(".taxnamess").each(function() 
													{

															Arr.push($(this).text());

													});
															
												
                                                   var varr=[];  
												   var sList = "";
													$('input[type=checkbox]').each(function () 
													{
														var sThisVal = (this.checked ? "1" : "0");
														varr.push(sThisVal);
														sList += (sList=="" ? sThisVal : "," + sThisVal);
													});
													
											          //console.log("len=="+len);  
													var jsonArr = [];
													
													for(var i=0;i<len;i++)
													{
													   //var order= $('#taxorder'+i+'').val();
													  // var val=$('.taxname'+i+'').text();
													 //  var j=i+1;
													  // //console.log("val=="+val);
													var res=jsonres.details[i].inclusive;
									
													for(var j=0;j<res.length;j++)
													{
                                                  
													  jsonres.details[i].inclusive[j].tax_name=Arr[j];
													  jsonres.details[i].inclusive[j].tax_id=Arr[j];
													  
													}
													
												     var k=i+1;
														jsonArr.push(
														{
																	
																	"tax_name":Arr[i],"tax_order":k,"status":varr[i],"tax_id":Arr[i],"inclusive":jsonres.details[i].inclusive
																	
																	
														});	
														
													
														
														
														

													}
											
											
									             
											var jsonarra2={"details":jsonArr,"vendor_id":vendor_id};
											
										  
																					
											var item_json=JSON.stringify(jsonarra2);
											console.log("item_jsonupdateget=="+item_json);
										    var array=[];
											var array2=[];
											var array3=[];
											var array4=[];
											
										   
									
											var operation="returnVendorTaxes";
												
											
										
												$.ajax(
												{
													url: url+'/admin/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id+'&tax_val_json='+item_json,
													contentType: 'application/json; charset=utf-8',
													jsonpCallback: 'vendortaxvalues',
													cache: true,
													dataType: 'jsonp',
													jsonp: false,
													
													beforeSend: function()
													{ 
													   $("#loader").show(); 
													}, 
													complete: function(data) 
													{ 
														$("#loader").hide();
														applyBigStyles();
													 

													},
													success: function (data)
													{
													
													     
												         $(".values2").html("");
														 $("#Update2").show();
													     $("#Update").hide();
														 $("#edit").show();
														 //globaldata=data;
														 var result=JSON.stringify(data);
														 console.log("returnjson==///"+result);
														$("#submit").hide();
												        var lenss=data.details.length;
														
												       
														
														for(var i=0;i<lenss;i++)
														{
															var taxname=data.details[i].tax_name;
														
														    //var  taxn=taxname.trim();
															var status=data.details[i].status;
															
															taxorder=data.details[i].tax_order;
													        tax_id=data.details[i].tax_id;
															
															array.push(taxname);
														
															array2.push(status);
															
															
															array3.push(taxorder);
															array4.push(tax_id);
															console.log("array2main***8=====//"+array2);
															//generate default billing order 
															
															//Item (or) first position taxname
															
															
														
															
															if(i==0)
															{
															
															  
															  var statusss=array2[0];
															  var res2="<h4 class='h4Head text-left' style='margin-bottom:30px;'>Select Items to be included for the calculation of taxes</h4><li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase first'>"+taxname+"</h5></li>";
															  $(".values2").append(res2);
															  
															  objname=taxname;
															  status1=data.details[i].status;
															  
															
														
														
															  
															}
															
															//Discount (or) second position taxname
															
															if(i==1)
															{
															 
																  //this is billorder status
																	discountstatus1=array2[1];
																	 console.log("secondpostion=="+discountstatus1);  
																//if status is disable then we can hide the div
																 if(discountstatus1=="1")
																 {
																	
																	if(taxname=="Discount")
																	{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues'   /><h5 class='taxnamessfor h5Head text-uppercase second'>"+taxname+"</h5><div class='divWrap'><label style='display: block;'><input type='checkbox' name='check' value='1' class='taxsecond inclusivestatus firststatusfor bigcheck pull-left' checked disabled  ></label><i class=' firstinclusiveobj secondin'>"+array[0]+"</i></div></li>";
																		$(".values2").append(res2);
																		objname2=taxname;
																		inclusive=array[0];
																		taxorder1=array3[1];
																		status2=data.details[i].status;
																		
																	
																	}
																	else
																	{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues'  /><h5 class='taxnamessfor h5Head text-uppercase second'>"+taxname+"</h5><div class='divWrap'><label style='display: block;'><input type='checkbox' name='check' value='1' class='taxsecond  inclusivestatus firststatusfor bigcheck pull-left' ></label><i class=' firstinclusiveobj secondin'>"+array[0]+"</i></div></li>";
																		$(".values2").append(res2);
																		objname2=taxname;
																		inclusive=array[0];
																		console.log("inclusive=="+inclusive);
																		taxorder1=array3[1];
																		status2=data.details[i].status;
																	}
																	
																 }
																 else
																 {
																 
																   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase second'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='taxsecond  firststatusfor inclusivestatus bigcheck pull-left'  ></label><i class='firstinclusiveobj  secondin'>"+array[0]+"</i></div></li>";
																	//$(".values2").append(res2);
																	objname2=taxname;
																	inclusive=array[0];
																    taxorder1=array3[1];
																	status2=data.details[i].status;
																 }
																
																
																
																
															
															}
															//service charge (or) third position taxname
															
															if(i==2)
															{
																	//this is billorder status
																		scstatus2=array2[2];
																	    if(scstatus2=="1")
																	    {
																	  
																			if(discountstatus1=="0")
																			{
																			 
																			   if(tax_id=="T2")
																			   {
																			      
																			      //if staus of discount is disable remove the discount in all taxes of inclusive
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase third'>"+taxname+"</h5><div class='divWrap'><input type='hidden' value='"+tax_id+"' class='tavalues ' /><label><input type='checkbox' name='check' class='taxsecond3  secondinclusivestatus inclusivestatus bigcheck pull-left' checked disabled></label><i class=' secondin secondinclusivetaxnames'>"+array[0]+"</i></div></li>";
																				   $(".values2").append(res2);
																				   objname3=taxname;
																				   status3=data.details[i].status;
																				   inclusive2=array[0];
																				   
																				   inclusive2inner=array[1];
																				   taxorder2=array3[2]; 
																			   
																			   }else
																			   {
																			  
																			      //if staus of discount is disable remove the discount in all taxes of inclusive
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase third'>"+taxname+"</h5><div class='divWrap'><input type='hidden' value='"+tax_id+"' class='tavalues' /><label><input type='checkbox' name='check' class='taxsecond3 inclusivestatus secondinclusivestatus bigcheck pull-left'></label><i class=' secondin secondinclusivetaxnames'>"+array[0]+"</i></div></li>";
																				   $(".values2").append(res2);
																				
																				   objname3=taxname;
																				   status3=data.details[i].status;
																				   inclusive2=array[0];
																				   inclusive2inner=array[1];
																				   taxorder2=array3[2];
																			   }
																			   
																			}
																			else
																			{
																			
																				if(tax_id=="T2")
																			    {
																				
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase third'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond3 secondinclusivestatus inclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class=' secondin secondinclusivetaxnames'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond4 secondinclusivestatus inclusivestatus bigcheck pull-left' ></label><i class=' secondinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																					$(".values2").append(res2);
																				   objname3=taxname;
																				   status3=data.details[i].status;
																				   inclusive2=array[0];
																				   inclusive2inner=array[1];
																				   taxorder2=array3[2]; 
																			   }
																			   else
																			   {
																			  
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase third'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond3 secondinclusivestatus inclusivestatus bigcheck pull-left' value='1'  ></label><i  class='secondin secondinclusivetaxnames'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond4 secondinclusivestatus inclusivestatus bigcheck pull-left' ></label><i class=' thirdin secondinclusivetaxnames'>"+array[1]+"</i></div></li>";
																				   $(".values2").append(res2);
																				   objname3=taxname;
																				   status3=data.details[i].status;
																				   inclusive2=array[0];
																				   inclusive2inner=array[1];
																				   taxorder2=array3[2]; 
																			   
																			   }
																			  
																			}
																		
																		 
																	  
																	  
																	  
																	   }
																	  else
																	  {
																		 
																	    //billorder status is disable then hide the div
																	
																		   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase third'>"+taxname+"</h5><div class='divWrap'><lable><input type='checkbox' name='check' class='taxsecond3 inclusivestatus bigcheck  secondinclusivestatus pull-left' value='1'></label><i class=' secondin secondinclusivetaxnames'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond4 inclusivestatus secondinclusivestatus bigcheck pull-left'></label><i class=' thirdin secondinclusivetaxnames'>"+array[1]+"</i></div></li>";
																		  //$(".values2").append(res2);
																		  objname3=taxname;
																		  status3=data.details[i].status;
																		  inclusive2=array[0];
																		  inclusive2inner=array[1];
																		  taxorder2=array3[2]; 
																		  
																		  
																  
																     }
																 
															
															}
															
															//i is order
															
															if(i==3)
															{
															
																console.log("taxname=="+taxname);
																	//this is billorder status
																	
																	//service tax status (or) fourth position status
																	
																	 ststatus3=array2[3];
																	if(ststatus3=="1")
																	{ 
																	  
																	
																		if((discountstatus1=="1") && (scstatus2=="0" ))
																		{
																            if(tax_id=="T2")
																			{
																		     var res2="<li class='taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='thidincusivestatus taxsecond5 inclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 bigcheck inclusivestatus pull-left thidincusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																		  objname4=taxname;
																		  status4=data.details[i].status;
																		  inclusive3=array[0];
																		  inclusive3inner=array[1];
																		  inclusive3inner1=array[2];
																		  taxorder3=array3[3]; 
																			}
																		else
																		{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus thidincusivestatus bigcheck pull-left' value='1'  ></label><i class=' thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 inclusivestatus bigcheck thidincusivestatus pull-left' value='1'  ></label><i class=' thirdinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																		  objname4=taxname;
																		  status4=data.details[i].status;
																		  inclusive3=array[0];
																		  inclusive3inner=array[1];
																		  inclusive3inner1=array[2];
																		  taxorder3=array3[3]; 
																	
																		  }
																		  
																		}
																		else if((scstatus2=="1") && (discountstatus1=="0"))
																		{
															              if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus thidincusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 inclusivestatus thidincusivestatus bigcheck pull-left' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[2]+"</i></div></li>";
																				   $(".values2").append(res2);
																			
																				  objname4=taxname;
																				  status4=data.details[i].status;
																				  inclusive3=array[0];
																				  inclusive3inner=array[1];
																				  inclusive3inner1=array[2];
																				  taxorder3=array3[3];
																			
																			}else
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5  thidincusivestatus inclusivestatus bigcheck pull-left' value='1'  ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 bigcheck thidincusivestatus inclusivestatus pull-left' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[2]+"</i></div></li>";
																			    $(".values2").append(res2);
																		
																				  objname4=taxname;
																				  status4=data.details[i].status;
																				  inclusive3=array[0];
																				  inclusive3inner=array[1];
																				  inclusive3inner1=array[2];
																				  taxorder3=array3[3]; 
																			}
																		  
																	
																		
																		}
																		else if((scstatus2=="1") && (discountstatus1=="1"))
																		{
															
																		
																			if(tax_id=="T2")
																			{

																			  	var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus thidincusivestatus bigcheck pull-left' checked disabled ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='thidincusivestatus taxsecond6 bigcheck pull-left inclusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames secondin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='thidincusivestatus taxsecond7 inclusivestatus bigcheck pull-left' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[2]+"</i></div></li>";

																				 $(".values2").append(res2);
																		
																				objname4=taxname;
																				status4=data.details[i].status;
																				inclusive3=array[0];
																				inclusive3inner=array[1];
																				inclusive3inner1=array[2];
																				taxorder3=array3[2]; 
																			  
																			}
																			else
																			{
																			    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus bigcheck pull-left thidincusivestatus'  ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 bigcheck pull-left inclusivestatus thidincusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond7 inclusivestatus bigcheck pull-left thidincusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames fourthin'>"+array[2]+"</i></div></li>";
																				 $(".values2").append(res2);
																		
																				objname4=taxname;
																				status4=data.details[i].status;
																				inclusive3=array[0];
																				inclusive3inner=array[1];
																				inclusive3inner1=array[2];
																				taxorder3=array3[2]; 
																			  
																			}
																		 
																		  
																		}
																		else if((scstatus2=="0") && (discountstatus1=="0"))
																		{
																			if(tax_id=="T2")
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus bigcheck pull-left thidincusivestatus'  checked disabled></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div>";
																				 $(".values2").append(res2);
																				  objname4=taxname;
																				  status4=data.details[i].status;
																				  inclusive3=array[0];
																				  inclusive3inner=array[1];
																				  inclusive3inner1=array[2];
																				  taxorder3=array3[3];
																			}
																			else
																			{
																			  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 inclusivestatus bigcheck pull-left thidincusivestatus'  ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div>";
																			  $(".values2").append(res2);
																			  objname4=taxname;
																			  status4=data.details[i].status;
																			  inclusive3=array[0];
																			  inclusive3inner=array[1];
																			  inclusive3inner1=array[2];
																			  taxorder3=array3[3]; 
																			
																			}
																			
																		  
																		}
																		else
																		{
																			
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='thidincusivestatus taxsecond5 bigcheck pull-left inclusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='thidincusivestatus taxsecond6 inclusivestatus bigcheck pull-left' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																		  //$(".values2").append(res2);
																	
																		  objname4=taxname;
																		  status4=data.details[i].status;
																		  inclusive3=array[0];
																		  inclusive3inner=array[1];
																		  inclusive3inner1=array[2];
																	      taxorder3=array3[3]; 
																		
																		}
																	 
																		
																	 
																	 }
																	 else
																	 {
																	 
																		    //billorder status is disable then hide the div
																		  
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fourth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond5 bigcheck pull-left inclusivestatus thidincusivestatus'   ></label><i class='thirdinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond6 inclusivestatus bigcheck pull-left thidincusivestatus' value='1'  ></label><i class='thirdinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond7 bigcheck pull-left inclusivestatus thidincusivestatus' value='1'></label><i class='thirdinclusivetaxnames fourthin'>"+array[2]+"</i></div></li>";
																			  //$(".values2").append(res2);
																			  objname4=taxname;
																			  status4=data.details[i].status;
																			  inclusive3=array[0];
																			  inclusive3inner=array[1];
																			  inclusive3inner1=array[2];
																			 taxorder3=array3[3]; 
																		  

																	 }															  
															
																
																  
																
															
															}
															//fourth tax status
															
															if(i==4)
															{
															//this is billorder status
															
															//vat tax status (or) Fifth position tax order
															console.log("discountstatus1/////=="+discountstatus1);
															console.log("scstatus2///=="+scstatus2);
															console.log("ststatus3///=="+ststatus3);
															 vatstatus4=array2[4];
											
															  if(vatstatus4=="1")
															  {
															    
																 if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0"))
																{
														
																		if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus bigcheck inclusivestatus pull-left' value='1' checked disabled ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[2]+"</i></div></li>";
																		  $(".values2").append(res2);
																	
																		  objname5=taxname;
																		  status5=data.details[i].status;
																		  inclusive4=array[0];
																		  inclusive4inner=array[1];
																		  inclusive4inner1=array[2];
																		  inclusive4inner2=array[3];
																		  taxorder4=array3[4]; 
																		  
																		}
																		else
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 bigcheck inclusivestatus pull-left fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[2]+"</i></div></li>";
																		  $(".values2").append(res2);
																	
																		  objname5=taxname;
																		  status5=data.details[i].status;
																		  inclusive4=array[0];
																		  inclusive4inner=array[1];
																		  inclusive4inner1=array[2];
																		  inclusive4inner2=array[3];
																		  taxorder4=array3[4]; 
																		  
																		}
																  
																  
																}
																else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0"))
																{
																		 if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1' checked disabled ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div></li>";
																			   $(".values2").append(res2);
																			  objname5=taxname;
																			  status5=data.details[i].status;
																			  inclusive4=array[0];
																			  inclusive4inner=array[1];
																			  inclusive4inner1=array[2];
																			  inclusive4inner2=array[3];
																			  taxorder4=array3[4];
																			}
																			else
																			{
																			  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div></li>";
																			  $(".values2").append(res2);
																			  objname5=taxname;
																			  status5=data.details[i].status;
																			  inclusive4=array[0];
																			  inclusive4inner=array[1];
																			  inclusive4inner1=array[2];
																			  inclusive4inner2=array[3];
																			  taxorder4=array3[4];
																			
																			}
																   
																
																}
																else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1"))
																{
																			if(tax_id=="T2")
																			{
																						var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[3]+"</i></div></li>";
																						$(".values2").append(res2);
																						objname5=taxname;
																						status5=data.details[i].status;
																						inclusive4=array[0];
																						inclusive4inner=array[1];
																						inclusive4inner1=array[2];
																						inclusive4inner2=array[3];
																						taxorder4=array3[4];
																			}else
																			{
																			
																			
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[3]+"</i></div></li>";
																			    $(".values2").append(res2);
																				  objname5=taxname;
																				  status5=data.details[i].status;
																				  inclusive4=array[0];
																				  inclusive4inner=array[1];
																				  inclusive4inner1=array[2];
																				  inclusive4inner2=array[3];
																				  taxorder4=array3[4]; 
																			}
																
																}
																else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0"))
																{
																		  if(tax_id=="T2")
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8  inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[2]+"</i></div></li>";
																			    $(".values2").append(res2);
																			    objname5=taxname;
																			    status5=data.details[i].status;
																			    inclusive4=array[0];
																			    inclusive4inner=array[1];
																			    inclusive4inner1=array[2];
																			    inclusive4inner2=array[3];
																			    taxorder4=array3[4];
																			}else
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus  fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[2]+"</i></div></li>";
																			     $(".values2").append(res2);
																				  objname5=taxname;
																				  status5=data.details[i].status;
																				  inclusive4=array[0];
																				  inclusive4inner=array[1];
																				  inclusive4inner1=array[2];
																				  inclusive4inner2=array[3];
																				  taxorder4=array3[4]; 
																		    }
																}
																else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1"))
																{
																			if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus  fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[3]+"</i></div></li>";
																			   $(".values2").append(res2);
																		
																			   objname5=taxname;
																			   status5=data.details[i].status;
																			   inclusive4=array[0];
																			   inclusive4inner=array[1];
																			   inclusive4inner1=array[2];
																			   inclusive4inner2=array[3];
																			   taxorder4=array3[4];
																			}else
																			{
																			
																			
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus  bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[3]+"</i></div></li>";
																			   $(".values2").append(res2);
																		
																			   objname5=taxname;
																			   status5=data.details[i].status;
																			   inclusive4=array[0];
																			   inclusive4inner=array[1];
																			   inclusive4inner1=array[2];
																			   inclusive4inner2=array[3];
																			   taxorder4=array3[4];
																			}																   
																  
																}
																else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1"))
																{
																			
																    
																   if(tax_id=="T2")
																   {
																      var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9  inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond11 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname fifthin'>"+array[3]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4]; 
																   
																   }
																   else
																   {
																   
																      var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond11 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname fifthin'>"+array[3]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4]; 
																   
																   }
																  
																}
																else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1"))
																{
													  
																    if(tax_id=="T2")
																    {
																	   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 bigcheck inclusivestatus fourthinclusivestatus pull-left' value='1' checked disabled ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname fifthin'>"+array[3]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4]; 
																	
																	}
																	else
																	{
																	   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 bigcheck pull-left fourthinclusivestatus inclusivestatus' value='1'></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='fourthinclusivestatus inclusivestatus taxsecond9 bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond10 bigcheck pull-left fourthinclusivestatus inclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname fourthin'>"+array[3]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4]; 
																	
																	}
																  
																}
																else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0"))
																{
													 
																   if(tax_id=="T2")
																    {
																	   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus inclusivestatus bigcheck pull-left' value='1' checked disabled ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div> </li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4];
																	}
																	else
																	{
																	  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 fourthinclusivestatus bigcheck inclusivestatus pull-left' value='1'  ></label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 inclusivestatus fourthinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div> </li>";
																	   $(".values2").append(res2);
																
																	   objname5=taxname;
																	   status5=data.details[i].status;
																	   inclusive4=array[0];
																	   inclusive4inner=array[1];
																	   inclusive4inner1=array[2];
																	   inclusive4inner2=array[3];
																	   taxorder4=array3[4];
																	
																	}
																  
																}
																else
																{
																
																  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase fivfth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond8 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ><label><i class='fourthinclusivetaxname secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond9 bigcheck pull-left inclusivestatus fourthinclusivestatus' value='1'  ></label><i class='fourthinclusivetaxname thirdin'>"+array[1]+"</i></div></li>";
																  //$(".values2").append(res2);
															
															      objname5=taxname;
																  status5=data.details[i].status;
																  inclusive4=array[0];
																  inclusive4inner=array[1];
																  inclusive4inner1=array[2];
																  inclusive4inner2=array[3];
																  taxorder4=array3[4]; 
																
																}
																
															  
															  
															  }else
															  {
															  
															  
															      objname5=taxname;
																  status5=data.details[i].status;
																  inclusive4=array[0];
																  inclusive4inner=array[1];
																  inclusive4inner1=array[2];
																  inclusive4inner2=array[3];
																  taxorder4=array3[4]; 
															  	  
															  
															  
															  }
															  
																  
																   
															}
                                                           
														  
														   
														    //fifth tax status
														
													        if(i==5)
															{
															 
															othertaxstatus1=array2[5];
															  
															   
															   //fifthtax status
															   
															     if(othertaxstatus1=="1")
															    {
															    
																	if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0") && (vatstatus4=="0"))
																	{
																		if(tax_id=="T2")
																		{
																		console.log("taxname=="+taxname);
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div></li>";
																			  $(".values2").append(res2);
																			  objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																		}else
																		{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div></li>";
																				$(".values2").append(res2);
																			  objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																		
																		}
																	
																			
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="0"))
																	{
															
																			if(tax_id=="T2")
																			{
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div></li>";
																					
																					
																				    $(".values2").append(res2);
																			
																				   objname6=taxname;
																				   status6=data.details[i].status;
																				  inclusive5=array[0];
																				  inclusive5inner=array[1];
																				  inclusive5inner1=array[2];
																				  inclusive5inner2=array[3];
																				  inclusive5inner3=array[4];
																				  taxorder5=array3[5]; 
																			}
																			else
																			{
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div></li>";
																				
																				
																			  $(".values2").append(res2);
																		
																			   objname6=taxname;
																			   status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																			}
																		
																			
																	
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="1"))
																	{
																		if(tax_id=="T2")
																		{
																			  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck  fifthsinclusivestatus pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			  $(".values2").append(res2);
																			  objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5];
																		
																		}
																		else
																		{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck fifthsinclusivestatus pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			  $(".values2").append(res2);
																			  objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5];
																		
																		}
																																			
																			 
																	
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0"))
																	{
														
																			if(tax_id=="T2")
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div></li>";
																			
																	   $(".values2").append(res2);
																
																	     objname6=taxname;
																		 status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5];
																			}
																			else
																			{
																			
																			
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div></li>";
																			
																	   $(".values2").append(res2);
																
																	     objname6=taxname;
																		 status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5];
																		}																	  
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[4]+"</i></div></li>";
																			
																	   $(".values2").append(res2);
																
																	     objname6=taxname;
																		 status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5];
																			}else
																			{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[4]+"</i></div></li>";
																			
																	   $(".values2").append(res2);
																
																	     objname6=taxname;
																		 status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="1") )
																	{
														                 if(tax_id=="T2")
																		 {
																		   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' disabled checked></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			$(".values2").append(res2);
																
																			objname6=taxname;
																			status6=data.details[i].status;
																			inclusive5=array[0];
																			inclusive5inner=array[1];
																			inclusive5inner1=array[2];
																			inclusive5inner2=array[3];
																			inclusive5inner3=array[4];
																			taxorder5=array3[5]; 
																		 
																		 }
																		 else
																		 {
																		   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess sixthin'>"+array[4]+"</i></div></li>";
																			$(".values2").append(res2);
																
																			objname6=taxname;
																			status6=data.details[i].status;
																		    inclusive5=array[0];
																		    inclusive5inner=array[1];
																		    inclusive5inner1=array[2];
																		    inclusive5inner2=array[3];
																		    inclusive5inner3=array[4];
																		    taxorder5=array3[5]; 
																		 
																		 
																		 }
																		
																	  
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="0") )
																	{
														
																	  
																	    if(tax_id=="T2")
																		 {
																		   var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[3]+"</i></div></li>";
																	       $(".values2").append(res2);
																
																	      objname6=taxname;
																		  status6=data.details[i].status;
																	      inclusive5=array[0];
																	      inclusive5inner=array[1];
																	      inclusive5inner1=array[2];
																	      inclusive5inner2=array[3];
																	      inclusive5inner3=array[4];
																	      taxorder5=array3[5]; 
																		 }
																		 else
																		 {
																		     var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[3]+"</i></div></li>";
																			 $(".values2").append(res2);
																
																			  objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																		 
																		 }
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="1") )
																	{
														
																	if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			
																			
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5];
																			}
																			else
																			{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			
																			
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0") && (vatstatus4=="1") )
																	{
														
																		
																			
																			 if(tax_id=="T2")
																			 {
																					var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			
																			
																					$(".values2").append(res2);
																		
																				  objname6=taxname;
																				  status6=data.details[i].status;
																				  inclusive5=array[0];
																				  inclusive5inner=array[1];
																				  inclusive5inner1=array[2];
																				  inclusive5inner2=array[3];
																				  inclusive5inner3=array[4];
																				  taxorder5=array3[5]; 
																			 }
																			 else
																			 {
																			    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[4]+"</i></div></li>";
																			
																			
																				  $(".values2").append(res2);
																		
																				  objname6=taxname;
																				  status6=data.details[i].status;
																				  inclusive5=array[0];
																				  inclusive5inner=array[1];
																				  inclusive5inner1=array[2];
																				  inclusive5inner2=array[3];
																				  inclusive5inner3=array[4];
																				  taxorder5=array3[5];
																			 
																			 }
																	  
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1") && (vatstatus4=="1") )
																	{
												
																		 
																	  if(tax_id=="T2")
																	  {
																	
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																			
																		$(".values2").append(res2);
																	    objname6=taxname;
																		status6=data.details[i].status;
																		inclusive5=array[0];
																		inclusive5inner=array[1];
																		inclusive5inner1=array[2];
																		inclusive5inner2=array[3];
																		inclusive5inner3=array[4];
																		taxorder5=array3[5];
																	  
																	  }
																	  else
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																			
																			
																			$(".values2").append(res2);
																
																			objname6=taxname;
																			status6=data.details[i].status;
																		  inclusive5=array[0];
																		  inclusive5inner=array[1];
																		  inclusive5inner1=array[2];
																		  inclusive5inner2=array[3];
																		  inclusive5inner3=array[4];
																		  taxorder5=array3[5];
																	  
																	  }
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="0"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5];
																			}
																		else
																		{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="0"))
																	{
														
																			 
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div></li>";
																		
																	    $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	    inclusive5=array[0];
																	    inclusive5inner=array[1];
																	    inclusive5inner1=array[2];
																	    inclusive5inner2=array[3];
																	    inclusive5inner3=array[4];
																	     taxorder5=array3[5];
																	  
																	  }
																	  else
																	  {
																	     var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div></li>";
																		
																		  $(".values2").append(res2);
																
																	      objname6=taxname;
																		  status6=data.details[i].status;
																		  inclusive5=array[0];
																		  inclusive5inner=array[1];
																		  inclusive5inner1=array[2];
																		  inclusive5inner2=array[3];
																		  inclusive5inner3=array[4];
																		  taxorder5=array3[5];
																	  
																	  }
																	  
																	}else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0"))
																	{
														
																		
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  
																	  }
																	  
																	  
																	}else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="1"))
																	{
														                
																		
																	  if(tax_id=="T2")
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1' checked disabled ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra  fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[4]+"</i></div></li>";
																				
																				
																		   $(".values2").append(res2);
																	
																		   objname6=taxname;
																		   status6=data.details[i].status;
																		  inclusive5=array[0];
																		  inclusive5inner=array[1];
																		  inclusive5inner1=array[2];
																		  inclusive5inner2=array[3];
																		  inclusive5inner3=array[4];
																		  taxorder5=array3[5]; 
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[4]+"</i></div></li>";
																				
																				
																		   $(".values2").append(res2);
																	
																		   objname6=taxname;
																		   status6=data.details[i].status;
																		  inclusive5=array[0];
																		  inclusive5inner=array[1];
																		  inclusive5inner1=array[2];
																		  inclusive5inner2=array[3];
																		  inclusive5inner3=array[4];
																		  taxorder5=array3[5]; 
																	  
																	  }
																	  
																	}else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="0"))
																	{
																			if(tax_id=="T2")
																			{
																			
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck fifthsinclusivestatus pull-left' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																						
																						
																					   $(".values2").append(res2);
																				
																						objname6=taxname;
																						status6=data.details[i].status;
																					  inclusive5=array[0];
																					  inclusive5inner=array[1];
																					  inclusive5inner1=array[2];
																					  inclusive5inner2=array[3];
																					  inclusive5inner3=array[4];
																					  taxorder5=array3[5]; 
																			}
																			else
																			{
																		
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[3]+"</i></div></li>";
																				
																				
																			   $(".values2").append(res2);
																		
																				objname6=taxname;
																				status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																			}
																	}else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="1"))
																	{
														
																			if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 fifthsinclusivestatus bigcheck pull-left' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[4]+"</i></div></li>";
																					
																			   $(".values2").append(res2);
																		
																				objname6=taxname;
																				status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																			}else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14  fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[4]+"</i></div></li>";
																			
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	}
																	else if((discountstatus1=="0")&&(scstatus2=="0" )&&(ststatus3=="1")&&(vatstatus4=="1"))
																	{
																			if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck fifthsinclusivestatus pull-left' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[4]+"</i></div></li>";
																					
																				
																			   $(".values2").append(res2);
																			   objname6=taxname;
																			  status6=data.details[i].status;
																			  inclusive5=array[0];
																			  inclusive5inner=array[1];
																			  inclusive5inner1=array[2];
																			  inclusive5inner2=array[3];
																			  inclusive5inner3=array[4];
																			  taxorder5=array3[5]; 
																			}
																			else
																			{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='fifthsinclusivestatus taxsecond13 bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 bigcheck fifthsinclusivestatus pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[4]+"</i></div></li>";
																			
																		
																	   $(".values2").append(res2);
																
																	    objname6=taxname;
																		status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	  }
																	}else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0"))
																	{
																			if(tax_id=="T2")
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 fifthsinclusivestatus  bigcheck pull-left' value='1'  checked disabled></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div></li>";
																						
																				   $(".values2").append(res2);
																			
																					objname6=taxname;
																					status6=data.details[i].status;
																				  inclusive5=array[0];
																				  inclusive5inner=array[1];
																				  inclusive5inner1=array[2];
																				  inclusive5inner2=array[3];
																				  inclusive5inner3=array[4];
																				  taxorder5=array3[5]; 
																			}
																		else
																		{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[3]+"</i></div></li>";
																				
																		   $(".values2").append(res2);
																	
																			objname6=taxname;
																			status6=data.details[i].status;
																		  inclusive5=array[0];
																		  inclusive5inner=array[1];
																		  inclusive5inner1=array[2];
																		  inclusive5inner2=array[3];
																		  inclusive5inner3=array[4];
																		  taxorder5=array3[5]; 
																	    }
																	}
																	else
																	{
																	
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sixth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='tax12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecondextra fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond12 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond13 bigcheck pull-left fifthsinclusivestatus' value='1'  ></label><i class='fifthsinclusivetaxnamess fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond14 fifthsinclusivestatus bigcheck pull-left' value='1'  ></label><i class='fifthsinclusivetaxnamess sixthin'>"+array[4]+"</i></div></li>";
																	  //$(".values2").append(res2);
																
																	   objname6=taxname;
																	   status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
																	
																	}
																
															  
															  
															  }else
															  {
															  
															  
																	   objname6=taxname;
																	   status6=data.details[i].status;
																	  inclusive5=array[0];
																	  inclusive5inner=array[1];
																	  inclusive5inner1=array[2];
																	  inclusive5inner2=array[3];
																	  inclusive5inner3=array[4];
																	  taxorder5=array3[5]; 
															  	  
															  
															  
															  }
															 
															
															}
															
															//sixth tax status
														
													        if(i==6)
															{
															 
															    othertaxstatus2=array2[6];
															    if(othertaxstatus2=="1")
															    {
															    			//newchanges.....
																	//getting queary string by name
																	// cost---->array[0]
																	//sc-->array[2]
																	//dis-->array[1]
																	//st-->array[3]
																	//vat-->array[4]
																	//othertax1-->array[5]
																	//othertax2--->array[6]
																			//newchanges.....
																	//getting queary string by name
																	// cost---->array[0]
																	//sc-->array[2]
																	//dis-->array[1]
																	//st-->array[3]
																	//vat-->array[4]
																	//othertax1-->array[5]
																	//othertax2--->array[6]
																	
																	console.log("discountstatus1=="+discountstatus1);
																	console.log("scstatus2=="+scstatus2);
																	console.log("ststatus3=="+ststatus3);
																	console.log("vatstatus4=="+vatstatus4);
																	console.log("othertaxstatus1=="+othertaxstatus1);
																	if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
															       
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		     var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	
																	}else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="1"))
																	{
															       
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		     var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	
																	}else  if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
															       
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div></li>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck sixthinclusivetaxstatus pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div></li>";
																		
																		   $(".values2").append(res2);
																
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0") && (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																		
																		
																	  if(tax_id=="T2")
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 sixthinclusivetaxstatus bigcheck pull-left' value='1' checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6]; 
																	  
																	  }
																	  else
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck sixthinclusivetaxstatus pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6]; 
																	  
																	  }
																	  
																	}
																	
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																		if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div></li>";
																				
																			  $(".values2").append(res2);
																		
																				objname7=taxname;
																				status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6]; 
																			}
																			else
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div></li>";
																				
																			  $(".values2").append(res2);
																		
																				objname7=taxname;
																				status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																		   }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="1"))
																	{
															           if(tax_id=="T2")
																		{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																																				
																				 $(".values2").append(res2);
																																		
																				objname7=taxname;
																				status7=data.details[i].status;
																				inclusive6=array[0];
																				inclusive6inner=array[1];
																				inclusive6inner1=array[2];
																				inclusive6inner2=array[3];
																				inclusive6inner3=array[4];
																				inclusive6inner4=array[5];
																				taxorder6=array3[6];
																		}
																		else
																		{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[5]+"</i></div></li>";
																																				
																			 $(".values2").append(res2);
																																		
																			objname7=taxname;
																			status7=data.details[i].status;
																			inclusive6=array[0];
																			 inclusive6inner=array[1];
																			inclusive6inner1=array[2];
																			inclusive6inner2=array[3];
																			inclusive6inner3=array[4];
																			inclusive6inner4=array[5];
																			taxorder6=array3[6];

																		}																	   
																		
																	
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
															  
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div></li>";
																		
																		  $(".values2").append(res2);
																	
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div></li>";
																		
																		   $(".values2").append(res2);
																
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	
																	}
																	
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
																
																	   if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[4]+"</i></div></li>";
																		
																		   $(".values2").append(res2);
																	
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[4]+"</i></div></li>";
																		
																		   $(".values2").append(res2);
																	
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																		if(tax_id=="T2")
																			{
																				 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 sixthinclusivetaxstatus bigcheck pull-left' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div></li>";
																				
																				
																			   $(".values2").append(res2);
																		
																			  objname7=taxname;
																			  status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																			}
																			else
																			{
																			
																			
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck sixthinclusivetaxstatus pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div></li>";
																				
																				
																			   $(".values2").append(res2);
																		
																				  objname7=taxname;
																				  status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
																			if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[4]+"</i></div></li>";
																				
																				
																			   $(".values2").append(res2);
																		
																				 objname7=taxname;
																				 status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																			}
																			else
																			{

																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[4]+"</i></div></li>";
																				
																				
																			   $(".values2").append(res2);
																		
																				 objname7=taxname;
																				 status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																			}
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck sixthinclusivetaxstatus pull-left' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[5]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6]; 
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[5]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="1") &&(othertaxstatus1=="1"))
																	{
														
																		
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames seventhin'>"+array[5]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames seventhin'>"+array[5]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="1") &&(othertaxstatus1=="0"))
																	{
																		if(tax_id=="T2")
																			{
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 sixthinclusivetaxstatus bigcheck pull-left' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 sixthinclusivetaxstatus bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 sixthinclusivetaxstatus bigcheck pull-left'  value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div></li>";
																				
																			   $(".values2").append(res2);
																		
																				objname7=taxname;
																				status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																			}
																			else
																			{
																			
																			
																			
																				var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left'  value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div></li>";
																				
																			   $(".values2").append(res2);
																		
																				objname7=taxname;
																				status7=data.details[i].status;
																			  inclusive6=array[0];
																			  inclusive6inner=array[1];
																			  inclusive6inner1=array[2];
																			  inclusive6inner2=array[3];
																			  inclusive6inner3=array[4];
																			  inclusive6inner4=array[5];
																			  taxorder6=array3[6];
																			}
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1") && (vatstatus4=="0") &&(othertaxstatus1=="1"))
																	{
														
																		
																	    if(tax_id=="T2")
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 sixthinclusivetaxstatus bigcheck pull-left' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																		  $(".values2").append(res2);
																
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		}
																		else
																		{
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																			$(".values2").append(res2);
																
																	      objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																		
																		}
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0") && (vatstatus4=="0") &&(othertaxstatus1=="1"))
																	{
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	    $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																		inclusive6=array[0];
																		inclusive6inner=array[1];
																		inclusive6inner1=array[2];
																		inclusive6inner2=array[3];
																		inclusive6inner3=array[4];
																		inclusive6inner4=array[5];
																		taxorder6=array3[6];
																	  }
																	  else
																	  {
																		  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																			$(".values2").append(res2);
																
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="1") && (vatstatus4=="0") &&(othertaxstatus1=="1"))
																	{
														
																		
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	     $(".values2").append(res2);
																
																	      objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0") && (vatstatus4=="1") &&(othertaxstatus1=="1"))
																	{
														
																		
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  disabled checked></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																		inclusive6=array[0];
																		inclusive6inner=array[1];
																		inclusive6inner1=array[2];
																		inclusive6inner2=array[3];
																		inclusive6inner3=array[4];
																		inclusive6inner4=array[5];
																		taxorder6=array3[6];
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																		inclusive6=array[0];
																		inclusive6inner=array[1];
																		inclusive6inner1=array[2];
																		inclusive6inner2=array[3];
																		inclusive6inner3=array[4];
																		inclusive6inner4=array[5];
																		taxorder6=array3[6];
																	  }
																	  
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																		if(tax_id=="T2")
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																			}
																			else
																			{
																			
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div></li>";
																		$(".values2").append(res2);
																		  objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[2]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																		   objname7=taxname;
																		   status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  
																	}else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																	  if(tax_id=="T2")
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	     inclusive6=array[0];
																	     inclusive6inner=array[1];
																	     inclusive6inner1=array[2];
																	     inclusive6inner2=array[3];
																	     inclusive6inner3=array[4];
																	     inclusive6inner4=array[5];
																	     taxorder6=array3[6];
																	  }
																	  else
																	  {
																	    var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div></li>";
																		
																		
																	     $(".values2").append(res2);
																
																	      objname7=taxname;
																		  status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  
																	  }
																	  
																	}else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
														
																		
																	  
																	  if(tax_id=="T2")
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																		   $(".values2").append(res2);
																	
																			 objname7=taxname;
																			 status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  else
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																			$(".values2").append(res2);
																
																			 objname7=taxname;
																			 status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  
																	  }
																	  
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="1"))
																	{
														             
																		
																	  if(tax_id=="T2")
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																		
																		
																			$(".values2").append(res2);
																
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  else
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='taxnamessfor h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																		
																		
																		   $(".values2").append(res2);
																	
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  
																	}else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="0"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div></li>";
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																			}else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div></li>";
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6]; 
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="0")&& (vatstatus4=="0")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck sixthinclusivetaxstatus pull-left' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6]; 
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="0"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6]; 
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	     objname7=taxname;
																		 status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="0")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																		
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																		
																		
																		
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="0")&& (vatstatus4=="1")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																			}
																			else
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="1") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="1"))
																	{
																	  if(tax_id=="T2")
																	  {
																	     var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  checked disabled></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond16 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[5]+"</i></div></li>";
																		   $(".values2").append(res2);
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  else
																	  {
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[5]+"</i></div></li>";
																		   $(".values2").append(res2);
																			objname7=taxname;
																			status7=data.details[i].status;
																		  inclusive6=array[0];
																		  inclusive6inner=array[1];
																		  inclusive6inner1=array[2];
																		  inclusive6inner2=array[3];
																		  inclusive6inner3=array[4];
																		  inclusive6inner4=array[5];
																		  taxorder6=array3[6];
																	  }
																	  
																	}
																    else if((discountstatus1=="0") && (scstatus2=="0" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																			}
																		else
																		{
																		
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond18 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond19 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond20 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[5]+"</i></div></li>";
																	   $(".values2").append(res2);
																
																	    objname7=taxname;
																		status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else if((discountstatus1=="0") && (scstatus2=="1" ) &&(ststatus3=="1")&& (vatstatus4=="1")&&(othertaxstatus1=="1"))
																	{
																			if(tax_id=="T2")
																			{
																		 var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 sixthinclusivetaxstatus bigcheck pull-left' value='1' checked disabled ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond17 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[5]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	  objname7=taxname;
																	  status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6]; 
																			}
																			else
																			{
																			var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><input type='hidden' value='"+tax_id+"' class='tavalues' /><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond15 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond17 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[2]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond18 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames fourthin'>"+array[3]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond19 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames fifthin'>"+array[4]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='taxsecond20 bigcheck pull-left sixthinclusivetaxstatus' value='1'  ></label><i class='sixthinclusivetaxnames sixthin'>"+array[5]+"</i></div></li>";
																		
																	   $(".values2").append(res2);
																
																	  objname7=taxname;
																	  status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	  }
																	}
																	else
																	{
																	
																	  var res2="<li class='inclusivetaxnamefor taxnames"+i+"' id='taxnames"+i+"' ><label><input type='hidden' value='"+tax_id+"' class='tavalues' /></label><h5 class='h5Head text-uppercase sevnth taxnamessfor'>"+taxname+"</h5><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond15 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames secondin'>"+array[0]+"</i></div><div class='divWrap'><label><input type='checkbox' name='check' class='sixthinclusivetaxstatus taxsecond16 bigcheck pull-left' value='1'  ></label><i class='sixthinclusivetaxnames thirdin'>"+array[1]+"</i></div></li>";
																	  //$(".values2").append(res2);
																
																	   objname7=taxname;
																	   status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
																	
																	}
																
															  
															  
															  }else
															  {
															  
															  
																	   objname7=taxname;
																	   status7=data.details[i].status;
																	  inclusive6=array[0];
																	  inclusive6inner=array[1];
																	  inclusive6inner1=array[2];
																	  inclusive6inner2=array[3];
																	  inclusive6inner3=array[4];
																	  inclusive6inner4=array[5];
																	  taxorder6=array3[6];
															  	  
															  
															  
															  }
															 
															
															}
													 
														  
																		
															
																	
																
														
														}												
												
													    var val=$(".taxsecond").val();
											
														
													
														
														//$("#my_table *").attr("disabled", "");	
                                                        //$("#my_table input:checkbox").attr('disabled', true);
														

														 
													},
													error: function (xhr, ajaxOptions, thrownError)
													{
														alert("fail");
														//console.log("error status: " + xhr.status);
														//console.log("error status text: " + xhr.statusText);
														//console.log("error response text: " + xhr.responseText);
													}
											    });
											  
														
											
											
											
											
										  
										  
										  
										  
										  
										
										  
										
										});
										$("#edit").click(function()
										{
										 
										  $("#Update").show();
										  $("#edit").hide();
										   $("#my_table *").removeAttr("disabled");
								
										
										   
										});
										
										var taxorderServiceTax,vattaxorder,sixthobj,seventhobj;
									  
										$("#Update2").click(function()
										{
                                            
											
														var jsonarrayforbillorder=[];
														
														//taxnames object
												   
														var taxnamess = [];

														$(".taxnamess").each(function() 
														{

															taxnamess.push($(this).text());

														});
														
														
														var taxid = [];

														$(".tavalues").each(function() 
														{

															taxid.push($(this).val());

														});
														
														//console.log("taxiddd#=="+taxid);
														
														//status objects
														
													   var taxstatus = [];

														$(".statusss").each(function() 
														{

															 // var st=$(".statusss").attr("checked") ? 1 : 0;
															 var sThisVal = (this.checked ? "1" : "0");
															taxstatus.push(sThisVal);

														});
														
														//inclusive objects
														
														var inclusivetaxnames = [];

														$(".inclusivetaxnamefor").each(function() 
														{

															inclusivetaxnames.push($(this).text());

														}); 
														//console.log("inclusivetaxnames=="+inclusivetaxnames);
														
														
														//first inclusive object
												
														
														var firstinclusobj=[];
														$(".firstinclusiveobj").each(function() 
														{

															firstinclusobj.push($(this).text());

														}); 
														
														//first inclusive status object
														
														var ftaxstatusobj=[];
														$(".firststatusfor").each(function() 
														{
	
															var  fst = (this.checked ? "1" : "0");
															ftaxstatusobj.push(fst);

														}); 
														
														var inclfirstobject=[];
														for(var mn=0;mn<firstinclusobj.length;mn++)
														{
															  var ml=mn+1;
															  console.log("ml=="+ml);
															   inclfirstobject.push(
																{
																			
																			"tax_name":firstinclusobj[mn],"status":ftaxstatusobj[mn],
																			"tax_id":firstinclusobj[mn]
																			
																			
																});
														}
														
													    if(inclfirstobject=="")
														{
														
														  inclfirstobject.push(
															{
																		
																		"tax_name":taxnamess[0],"status":"0","tax_id":taxnamess[0]
																		
																		
															});
														
														
														}else
														{
														
														 
														
														
														}
													  
													
													 
													 
													
														
														//seconinclu object

													
														
														var secondinclusobj=[];
														$(".secondinclusivetaxnames").each(function() 
														{

															secondinclusobj.push($(this).text());

														}); 
														console.log("secondinclusobj=="+secondinclusobj);
														//seconinclu status
														
														var staxstatus=[];
														$(".secondinclusivestatus").each(function() 
														{

															var  sst = (this.checked ? "1" : "0");
															staxstatus.push(sst);

														});
														
														
														
														   var inclsecondobject=[];
														   for(var l=0;l<secondinclusobj.length;l++)
															{
																 var sh=l+1;
																   inclsecondobject.push(
																	{
																				
																				"tax_name":secondinclusobj[l],"status":staxstatus[l],
																			    "tax_id":secondinclusobj[l]
																				
																				
																	});
															}
														   if(inclsecondobject=="")
														   {
														       for(var d=0;d<2;d++)
															   {
															     var ch=d+1;
															     inclsecondobject.push(
																    {
																			
																			"tax_name":taxnamess[d],"status":"0", "tax_id":taxnamess[d]
																			
																			
																    });
															   
															   }
																
														  
														   }
														   else
														   {
														  
																
														  
														  
														    }
													
													 
													 

														//thirdinclusobj 
														
											
														
														var thirdinclusobj=[];
												
														$(".thirdinclusivetaxnames").each(function() 
														{

															thirdinclusobj.push($(this).text());

														}); 
														
														//thirdinclusobj  status
														
														var ttaxstatus=[];
														$(".thidincusivestatus").each(function() 
														{

															var  tst = (this.checked ? "1" : "0");
															ttaxstatus.push(tst);

														});
                                                   			
															
														var inclthirdobject=[];
														for(var q=0;q<thirdinclusobj.length;q++)
														{
																var g=q+1; 
																   inclthirdobject.push(
																	{
																				
																				"tax_name":thirdinclusobj[q],"status":ttaxstatus[q],
																			   "tax_id":thirdinclusobj[q]
																				
																				
																	});
														}
													
														if(inclthirdobject=="")
														{
														   for(var a=0;a<3;a++)
															{
															    var kg=a+1;
																inclthirdobject.push(
																{
																			
																			"tax_name":taxnamess[a],"status":"0",
																			"tax_id":taxnamess[a]
																			
																			
																});
														    }
														}
														else
														{
																
														  
														}
													



															
														//fourth inclusive

														//console.log("thirdinclusobj=="+thirdinclusobj);
														
														var fourthinclusobj=[];
														$(".fourthinclusivetaxname").each(function() 
														{

															fourthinclusobj.push($(this).text());

														}); 
														//console.log("fourthinclusobj=="+fourthinclusobj);
														
														//fourth inclusive status
														
														var ftaxstastus=[];
														$(".fourthinclusivestatus").each(function() 
														{

																var  fourthst = (this.checked ? "1" : "0");
															    ftaxstastus.push(fourthst);

														}); 
														
														
														var inclfourthobject=[];
														for(var r=0;r<fourthinclusobj.length;r++)
														{
																   var pg=r+1;
																   inclfourthobject.push(
																	{
																				
																				"tax_name":fourthinclusobj[r],"status":ftaxstastus[r],
																			    "tax_id":fourthinclusobj[r]
																				
																				
																	});
														}											
														if(inclfourthobject=="")
														{
															for(var b=0;b<4;b++)
															{
															 var tg=b+1;
																inclfourthobject.push(
																{
																			
																			"tax_name":taxnamess[b],"status":"0",
																			"tax_id":taxnamess[b]
																			
																});
														    }
														}
														else
														{
															 
														  
														}
														
														
														
															//fifvth inclusive 
															
														var fifvthinclusobj=[];
														
														$(".fifthsinclusivetaxnamess").each(function() 
														{

															fifvthinclusobj.push($(this).text());

														}); 
														//console.log("fifvthinclusobj=="+fifvthinclusobj);
														
														//fifvth status 
														
														var fftaxstatus=[];
														
														$(".fifthsinclusivestatus").each(function() 
														{

																var  fifthst = (this.checked ? "1" : "0");
															    fftaxstatus.push(fifthst);

														}); 
														
														
														var inclfifthobject=[];
														for(var s=0;s<fifvthinclusobj.length;s++)
														{
															 var kh=s+1;
															   inclfifthobject.push(
																{
																			
																			"tax_name":fifvthinclusobj[s],"status":fftaxstatus[s],
																			"tax_id":fifvthinclusobj[s]
																			
																			
																});
														}
																									
													   if(inclfifthobject=="")
													    {
														  for(var c=0;c<5;c++)
															{
															var lg=c+1;
																inclfifthobject.push(
																{
																			
																			"tax_name":taxnamess[c],"status":"0",
																			"tax_id":taxnamess[c]
																			
																			
																});
														    }
														}
														else
														{
														
														
														   
														
														
														}
													  
													  
														
														
														

															//sixsth inclusive 
														
														var sixththinclusobj=[];
														
														$(".sixthinclusivetaxnames").each(function() 
														{

															sixththinclusobj.push($(this).text());

														}); 
														//console.log("sixththinclusobj=="+sixththinclusobj);
														
														//sixsth inclusive  status
														
														var sixtaxstatus=[];
														
														$(".sixthinclusivetaxstatus").each(function() 
														{

																var  sixthst = (this.checked ? "1" : "0");
															    sixtaxstatus.push(sixthst);

														});
														
														var inclsixsthobject=[];
														for(var u=0;u<sixththinclusobj.length;u++)
														{
																   var pt=u+1;
																   inclsixsthobject.push(
																	{
																				
																				"tax_name":sixththinclusobj[u],
																				"status":sixtaxstatus[u],
																			    "tax_id":sixththinclusobj[u]
																				
																	});
														}     
														if(inclsixsthobject=="")
													    {
															  for(var e=0;e<6;e++)
																{
																	   var gh=e+1;
																	   inclsixsthobject.push(
																		{
																					
																					"tax_name":taxnamess[e],
																					"status":"0",
																					"tax_id":taxnamess[e]
																					
																		});
																
																}
																
														  
														}
														else
														{
														       
														
														
														}
														
																									
													  
												
													 
													// var jsondetailsupdate="[inclfirstobject,"inclsecondobject","inclthirdobject","inclfourthobject","inclfifthobject","inclsixsthobject1"]";
													 
													 var inclusivearrobject=[];
													 
													for(var t=0;t<taxnamess.length;t++)
													{
														if(t==0)
														{
														 inclusivearrobject.push([]);
														
														}
														if(t==1)
														{
														 inclusivearrobject.push(inclfirstobject);
														
														}
														if(t==2)
														{
														 inclusivearrobject.push(inclsecondobject);
														
														}
														if(t==3)
														{
														 inclusivearrobject.push(inclthirdobject);
														
														}
														if(t==4)
														{
														 inclusivearrobject.push(inclfourthobject);
														
														}
														if(t==5)
														{
														 inclusivearrobject.push(inclfifthobject);
														
														}
														if(t==6)
														{
														 inclusivearrobject.push(inclsixsthobject);
														
														}
														
													}
												
													for(var t=0;t<taxnamess.length;t++)
													{
														   var k=1;
														    var taxorder=k+t;
															//var taxid=t+1;
															var taxid=$(".tavalues").val();
															//console.log("taxidssssssssss=="+taxid);
														    jsonarrayforbillorder.push(
															{
																		
																		"tax_name":taxnamess[t],"tax_order":taxorder,"status":taxstatus[t],
																		"tax_id":taxnamess[t],"inclusive":inclusivearrobject[t]
																		
																		
															});
														
														
													}
														
													var jsonarra3={"details":jsonarrayforbillorder,"vendor_id":vendor_id};
													var item_jsonss=JSON.stringify(jsonarra3);
													
													
													
											
												
												console.log("jsonarrar**###ssss=="+item_jsonss);
												
											
												var operation="setVendorTaxeswithstatusandincludes";
												
									
										
										$.ajax(
												{
													url: url+'/admin/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id+'&tax_val_json='+item_jsonss,
													contentType: 'application/json; charset=utf-8',
													jsonpCallback: 'vendortaxvalues',
													cache: true,
													dataType: 'jsonp',
													jsonp: false,
													
													beforeSend: function()
													{ 
													   $("#loader").show(); 
													}, 
													complete: function(data) 
													{ 
														$("#loader").hide();
													 

													},
													success: function (data)
													{
														  if(data.result="true")
														  {
															 alert(" successfully updated");
															location.reload();
														  }
														  else
														  {
															
															 location.reload();
														  }
																				  
													},
													error: function (xhr, ajaxOptions, thrownError)
													{
														alert("fail");
														//console.log("error status: " + xhr.status);
														//console.log("error status text: " + xhr.statusText);
														//console.log("error response text: " + xhr.responseText);
													}
											    });
													
												
										
											
										 
										
										});
										var gettaxnamesc,taxordersc,inclusivesc;
										var arry=[];
																			 
									
										
									
             $("#homeicon").click(function() 
								     {
								      	if(updatebuttonclicked=="1")
										 {
										 alert("Please submit included for the calculation of taxes");
										 
										 }
										 else
										 {
										 window.location.replace(  "vendor-admin-index.html" + querystr);
										 
										 }
													
														
									 });                    
								
           
        });

var operation="getVendorTaxeswithstatusandincludes";
var taxorderServiceTax,vattaxorder,taxordersc;
var servichargestatus,vattaxstatus,servicetaxstatus,othertaxstatus,othertaxstatus2,arraysone,arraystwo,othertax1,othertax2,discountstatus,ststatus,results,taxnamess,statusss,Itemtaxstatus;

$( window ).load(function()
{
 
												

								$("#Update").hide();
								var vendor_id = getParameterByName('vendor_id');
								
								$.ajax(
									{
										type: 'GET',
										url: url+'/admin/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id,
										jsonpCallback: 'vendortaxvalues',
										cache: false,
										dataType: 'jsonp',
										beforeSend: function()
										{ 
										   $("#loader").show(); 
										}, 
										complete: function(data) 
										{ 
											$("#loader").hide();
											applyBigStyles();

										},
										success: function (getinclusiveres)
										{
										   	$("#Update3").show();
											var jsonsss=JSON.stringify(getinclusiveres);
											console.log("get==="+jsonsss);
										    var lengthof=getinclusiveres.details.length;
											var lengths=getinclusiveres.details.length;
											var item_json1=JSON.stringify(getinclusiveres);
											
									
													for(var m=0;m<lengths;m++)
													{
															var tax_id=getinclusiveres.details[m].tax_id;
															if(tax_id=="T1")
															 {
																  Itemtaxstatus=getinclusiveres.details[m].status;
																 
															 }
															 if(tax_id=="T2")
															 {
																  discountstatus=getinclusiveres.details[m].status; 
																
															 }
															 if(tax_id=="T3")
															 {
																  status=getinclusiveres.details[m].status; 
																 
																  vatstatusenabaled=status;
																
															 }
															 
															 if(tax_id=="T4")
															 {
																 othertaxstatus=getinclusiveres.details[m].status; 
															 
															 }
															 if(tax_id=="T5")
															 {
																 othertaxstatus2=getinclusiveres.details[m].status; 
															
															 }
															 if(tax_id=="T6")
															 {
																 servicetaxstatus=getinclusiveres.details[m].status; 
														
															 }
															 if(tax_id=="T7")
															 {
																 servichargestatus=getinclusiveres.details[m].status; 
														
															 
															 }
															 
													
													}
											for(var i=0;i<lengthof;i++)
											{
												 var taxnamess=getinclusiveres.details[i].tax_name;
												 var statusss=getinclusiveres.details[i].status;
												 var tax_id=getinclusiveres.details[i].tax_id;
											
												 
												if(i==0)
												{
												 
													var getres1="<h4 class='h4Head text-left' style='margin-bottom:30px;'>Select Items to be included for the calculation of taxes</h4><li class='taxnamesitem' id='gettaxnames' ><h5 class='inclusivetaxname text-uppercase'>"+taxnamess+"</h5></li>";
													//console.log("getres=="+getres1);
													$(".values3").append(getres1);
												
												}
												if(i==1)
												{ 
                                                        											
												
												    if(statusss==1)
												    {
															var inclusivelen=getinclusiveres.details[1].inclusive.length;
															var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
															$(".values3").append(h1);
														    for(var j=0;j<inclusivelen;j++)
														    {
														
																if(getinclusiveres.details[1].inclusive[j].status=="0")
																{
																	var res2="<li class='taxnames"+i+"' id='taxnames"+i+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstatusobj bigcheck pull-left'  ></label><i class='firstinclusobj'>"+getinclusiveres.details[1].inclusive[j].tax_name+"</i></div></li>";
																	$(".values3").append(res2);
																
																}
																else
																{
																	if(getinclusiveres.details[4].inclusive[j].tax_id=="T1" && tax_id=="T2")
																	{
																
																		var res2="<li class='taxnames"+i+"' id='taxnames"+i+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstatusobj bigcheck pull-left' checked disabled></label><i class='firstinclusobj'>"+getinclusiveres.details[1].inclusive[j].tax_name+"</i></div></li>";
																	    $(".values3").append(res2);

																	}
																	else
																	{
                                                                         var res2="<li class='taxnames"+i+"' id='taxnames"+i+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstatusobj bigcheck pull-left' checked ></label><i class='firstinclusobj'>"+getinclusiveres.details[1].inclusive[j].tax_name+"</i></div></li>";
																	     $(".values3").append(res2);


																	}
																	
																}
																
														   
														    }
												     
												    }
												  

												
																
												
												}
												if(i==2)
												{
												
													if(statusss==1)
												    {
												        var inclusivelen=getinclusiveres.details[2].inclusive.length;
												   		var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
														$(".values3").append(h1);
													
														for(var j=0;j<inclusivelen;j++)
														{
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T1" )&&(Itemtaxstatus==1))
															{
																															
														
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																	

                                                                                
																				 
																			if(getinclusiveres.details[2].inclusive[j].tax_id=="T1" && tax_id=="T2" )
																			{
                                                                                 var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked  disabled></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																				 $(".values3").append(res2);

																			}else
																			{
                                                                                var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																				 $(".values3").append(res2);

																			}																			
																
																}
															
																
															}
														
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T2" )&&(discountstatus==1))
															{
														
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													   
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T6" )&&(servicetaxstatus==1))
															{	
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																	    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																				 $(".values3").append(res2);
																 
																}
															
																
															}
														
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T4" )&&(othertaxstatus==1))
															{	
															
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T7" )&&(servichargestatus==1))
															{	
															
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													        if((getinclusiveres.details[2].inclusive[j].tax_id=="T5" )&&(othertaxstatus2==1))
															{	
															
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[2].inclusive[j].tax_id=="T3" )&&(vatstatusenabaled==1))
															{
														
															
																if(getinclusiveres.details[2].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left'  ></label><i class='secondinclusobj'> "+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='staxstatus bigcheck pull-left' checked ></label><i class='secondinclusobj'>"+getinclusiveres.details[2].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
														}
												
												    }
													
												
													
												 
												
												}
												if(i==3)
												{
												
												    if(statusss==1)
												    {
													  
													 	var inclusivelen=getinclusiveres.details[3].inclusive.length;
											
												   		var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
												
												
														$(".values3").append(h1);
													
													
														for(var j=0;j<inclusivelen;j++)
														{
																
													         console.log("inclusivelen33=="+getinclusiveres.details[3].inclusive[j].tax_id);
													
															if((getinclusiveres.details[3].inclusive[j].tax_id=="T1" )&&(Itemtaxstatus==1))
															{	
																															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
																   
																	
																		var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'    ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																		$(".values3").append(res2);
																
																}else
																{
																  
																	if(getinclusiveres.details[3].inclusive[j].tax_id=="T1" && tax_id=="T2" )
																	{
																		 var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked  disabled></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																		 $(".values3").append(res2);
																	}
																	else
																	{
																			 var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																			$(".values3").append(res2);

																	}
																 
																}
															}
															if((getinclusiveres.details[3].inclusive[j].tax_id=="T6")&&(servicetaxstatus==1))
															{															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}

															if((getinclusiveres.details[3].inclusive[j].tax_id=="T3" )&&(vatstatusenabaled==1))
															{	
														
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													        if((getinclusiveres.details[3].inclusive[j].tax_id=="T4" )&&(othertaxstatus==1))
															{															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[3].inclusive[j].tax_id=="T5" )&&(othertaxstatus2==1))
															{															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[3].inclusive[j].tax_id=="T2" )&&(discountstatus==1))
															{															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[3].inclusive[j].tax_id=="T7" )&&(servichargestatus==1))
															{															
																if(getinclusiveres.details[3].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left'  ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ttaxstatus bigcheck pull-left' checked ></label><i class='thirdinclusobj'>"+getinclusiveres.details[3].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}															
													   
														}
													
												
													}
												
												
												
												}
										        if(i==4)
												{
												
												    if(statusss==1)
												    {
													
													    var inclusivelen=getinclusiveres.details[4].inclusive.length;
														
														//console.log("inclusivelen=="+inclusivelen);
													
												   		var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
														$(".values3").append(h1);
														for(var j=0;j<inclusivelen;j++)
														{
																										
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T1" )&&(Itemtaxstatus==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
																	
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																	if(getinclusiveres.details[4].inclusive[j].tax_id=="T1" && tax_id=="T2" )
																	{
																	
                                                                            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked  disabled></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);

																	}else
																	{
                                                                           var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																       $(".values3").append(res2);
																	}
																
																}
															}
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T6" )&&(servicetaxstatus==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T3" )&&(vatstatusenabaled==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													        if((getinclusiveres.details[4].inclusive[j].tax_id=="T4" )&&(othertaxstatus==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T5" )&&(othertaxstatus2==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T2" )&&(discountstatus==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[4].inclusive[j].tax_id=="T7" )&&(servichargestatus==1))
															{															
																if(getinclusiveres.details[4].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left'  ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='ftaxstastus bigcheck pull-left' checked ></label><i class='fourthinclusobj'>"+getinclusiveres.details[4].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
													   
														}
													
												
													}
												    
											
												
												}
												if(i==5)
												{
												
												
												    if(statusss==1)
												    {
													    var inclusivelen=getinclusiveres.details[5].inclusive.length;
														
															
												   		var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
														$(".values3").append(h1);
													   for(var j=0;j<inclusivelen;j++)
													   {
													   
														
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T1" )&&(Itemtaxstatus==1))
															{															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{

																	if(getinclusiveres.details[5].inclusive[j].tax_id=="T1" && tax_id=="T2" )
																	{
                                                                           var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked disabled ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																         $(".values3").append(res2);
																	}
																	else
																	{
																		var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																	   $(".values3").append(res2);

																	}

																    
																}
															}
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T6")&&(servicetaxstatus==1))
															{															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T3" )&&(vatstatusenabaled==1))
															{
															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													        if((getinclusiveres.details[5].inclusive[j].tax_id=="T4" )&&(othertaxstatus==1))
															{															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T5" )&&(othertaxstatus2==1))
															{															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T2" )&&(discountstatus==1))
															{															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[5].inclusive[j].tax_id=="T7" )&&(servichargestatus==1))
															{	
															
																if(getinclusiveres.details[5].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left'  ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='fftaxstatus bigcheck pull-left' checked ></label><i class='fifvthinclusobj'>"+getinclusiveres.details[5].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
													   
													   }
												
													}
												   
												
												}
												if(i==6)
												{
												
												    if(statusss==1)
												    {
													    var inclusivelen=getinclusiveres.details[6].inclusive.length;
														
												
														
												   		var h1="<div id="+taxnamess+"><h5 class='h5Head inclusivetaxname text-uppercase thirdtaxnamee'>"+taxnamess+"</h5></div>";
														$(".values3").append(h1);
														//console.log("inclusivelen=="+inclusivelen);
													   for(var j=0;j<inclusivelen;j++)
													   {
													      	//console.log("inclusivelensss=="+inclusivelen);
														
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T1")&&(Itemtaxstatus==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																	if(getinclusiveres.details[6].inclusive[j].tax_id=="T1" && tax_id=="T2" )
																	{
																		  var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked  disabled></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																	  $(".values3").append(res2);
																	}
																	else
																	{
																		 var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																	 $(".values3").append(res2);

																	}
																 
																}
															}
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T6" )&&(servicetaxstatus==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T3" )&&(vatstatusenabaled==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													        if((getinclusiveres.details[6].inclusive[j].tax_id=="T4" )&&(othertaxstatus==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T5" )&&(othertaxstatus2==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															} 
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T2")&&(discountstatus==1))
															{															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
															if((getinclusiveres.details[6].inclusive[j].tax_id=="T7")&&(servichargestatus==1))
															{
																//console.log("servichargestatussss=="+servichargestatus);															
																if(getinclusiveres.details[6].inclusive[j].status=="0")
																{
														            var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left'  ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
																else
																{
																    var res2="<li class='taxnames"+j+"' id='taxnames"+j+"' ><div class='divWrap'><label><input type='checkbox' name='check' value='1' class='sixtaxstatus bigcheck pull-left' checked ></label><i class='sixththinclusobj'>"+getinclusiveres.details[6].inclusive[j].tax_name+"</i></div></li>";
																    $(".values3").append(res2);
																}
															}
													   
													   }
													
													}
												 }
											}	 
												
										 
										 },
										 error:function(getinclusiveres)
										 {
										 
										 
										 }
									});
									
									$(".statusss").change(function() 
									{
											$("#Update").show();
											$("#Update3").hide();
											$("#Update2").hide();
									});
									$("#Update3").click(function()
									{
									
													 var jsonarrayforbillorder=[];
														
									               //taxnames object
												   
														var taxnamess = [];

														$(".taxnamess").each(function() 
														{

															taxnamess.push($(this).text());

														});
														
														
														var taxid = [];

														$(".tavalues").each(function() 
														{

															taxid.push($(this).val());

														});
														
														//console.log("taxiddd#=="+taxid);
														
														//status objects
														
													
														
														var statussss = [];

														$(".statusss").each(function() 
														{
														
                                                            // var st=$(".statusss").attr("checked") ? 1 : 0;
															 var sThisVal = (this.checked ? "1" : "0");
															statussss.push(sThisVal);

														});
														
													
													
														
														//inclusive objects
														
														var inclusivetaxnames = [];

														$(".inclusivetaxname").each(function() 
														{

															inclusivetaxnames.push($.trim($(this).text()));

														}); 
														//console.log("inclusivetaxnames=="+inclusivetaxnames);
														
														
														//first inclusive object
												
														
														var firstinclusobj=[];
														$(".firstinclusobj").each(function() 
														{

															firstinclusobj.push($.trim($(this).text()));

														}); 
														
														//first inclusive status object
														
														var ftaxstatusobj=[];
														$(".ftaxstatusobj").each(function() 
														{
	
															var  fst = (this.checked ? "1" : "0");
															ftaxstatusobj.push(fst);

														}); 
														
														var inclfirstobject=[];
														for(var mn=0;mn<firstinclusobj.length;mn++)
														{
															  var ml=mn+1;
															  console.log("ml=="+ml);
															   inclfirstobject.push(
																{
																			
																			"tax_name":firstinclusobj[mn],"status":ftaxstatusobj[mn],
																			"tax_id":firstinclusobj[mn]
																			
																			
																});
														}
														
													    if(inclfirstobject=="")
														{
														
														  inclfirstobject.push(
															{
																		
																		"tax_name":taxnamess[0],"status":"0","tax_id":taxnamess[0]
																		
																		
															});
														
														
														}else
														{
														
														 
														
														
														}
													  
													
													 
													 
													
														
														//seconinclu object

													
														
														var secondinclusobj=[];
														$(".secondinclusobj").each(function() 
														{
														
															secondinclusobj.push($.trim($(this).text()));

														}); 
														
														//seconinclu status
														
														var staxstatus=[];
														$(".staxstatus").each(function() 
														{

															var  sst = (this.checked ? "1" : "0");
															staxstatus.push(sst);

														});
														
														
														
														   var inclsecondobject=[];
														   for(var l=0;l<secondinclusobj.length;l++)
															{
																 var sh=l+1;
																   inclsecondobject.push(
																	{
																				
																				"tax_name":secondinclusobj[l],"status":staxstatus[l],
																			    "tax_id":secondinclusobj[l]
																				
																				
																	});
															}
														   if(inclsecondobject=="")
														   {
														       for(var d=0;d<2;d++)
															   {
															     var ch=d+1;
															     inclsecondobject.push(
																    {
																			
																			"tax_name":taxnamess[d],"status":"0", "tax_id":taxnamess[d]
																			
																			
																    });
															   
															   }
																
														  
														   }
														   else
														   {
														  
																
														  
														  
														    }
													
												
													 		console.log("inclsecondobject==//"+JSON.stringify(inclsecondobject));

														//thirdinclusobj 
														
											
														
														var thirdinclusobj=[];
												
														$(".thirdinclusobj").each(function() 
														{

															thirdinclusobj.push($.trim($(this).text()));

														}); 
														
														//thirdinclusobj  status
														
														var ttaxstatus=[];
														$(".ttaxstatus").each(function() 
														{

															var  tst = (this.checked ? "1" : "0");
															ttaxstatus.push(tst);

														});
                                                   			
															
														var inclthirdobject=[];
														for(var q=0;q<thirdinclusobj.length;q++)
														{
																var g=q+1; 
																   inclthirdobject.push(
																	{
																				
																				"tax_name":thirdinclusobj[q],"status":ttaxstatus[q],
																			   "tax_id":thirdinclusobj[q]
																				
																				
																	});
														}
														console.log("inclthirdobject==//"+inclthirdobject);
													
														if(inclthirdobject=="")
														{
														   for(var a=0;a<3;a++)
															{
															    var kg=a+1;
																inclthirdobject.push(
																{
																			
																			"tax_name":taxnamess[a],"status":"0",
																			"tax_id":taxnamess[a]
																			
																			
																});
														    }
														}
														else
														{
																
														  
														}
													



															
														//fourth inclusive

														//console.log("thirdinclusobj=="+thirdinclusobj);
														
														var fourthinclusobj=[];
														$(".fourthinclusobj").each(function() 
														{

															fourthinclusobj.push($.trim($(this).text()));

														}); 
														//console.log("fourthinclusobj=="+fourthinclusobj);
														
														//fourth inclusive status
														
														var ftaxstastus=[];
														$(".ftaxstastus").each(function() 
														{

																var  fourthst = (this.checked ? "1" : "0");
															    ftaxstastus.push(fourthst);

														}); 
														
														
														var inclfourthobject=[];
														for(var r=0;r<fourthinclusobj.length;r++)
														{
																   var pg=r+1;
																   inclfourthobject.push(
																	{
																				
																				"tax_name":fourthinclusobj[r],"status":ftaxstastus[r],
																			    "tax_id":fourthinclusobj[r]
																				
																				
																	});
														}											
														if(inclfourthobject=="")
														{
															for(var b=0;b<4;b++)
															{
															 var tg=b+1;
																inclfourthobject.push(
																{
																			
																			"tax_name":taxnamess[b],"status":"0",
																			"tax_id":taxnamess[b]
																			
																});
														    }
														}
														else
														{
															 
														  
														}
														
														
														
															//fifvth inclusive 
															
														var fifvthinclusobj=[];
														
														$(".fifvthinclusobj").each(function() 
														{

															fifvthinclusobj.push($.trim($(this).text()));

														}); 
														//console.log("fifvthinclusobj=="+fifvthinclusobj);
														
														//fifvth status 
														
														var fftaxstatus=[];
														
														$(".fftaxstatus").each(function() 
														{

																var  fifthst = (this.checked ? "1" : "0");
															    fftaxstatus.push(fifthst);

														}); 
														
														
														var inclfifthobject=[];
														for(var s=0;s<fifvthinclusobj.length;s++)
														{
															 var kh=s+1;
															   inclfifthobject.push(
																{
																			
																			"tax_name":fifvthinclusobj[s],"status":fftaxstatus[s],
																			"tax_id":fifvthinclusobj[s]
																			
																			
																});
														}
																									
													   if(inclfifthobject=="")
													    {
														  for(var c=0;c<5;c++)
															{
															var lg=c+1;
																inclfifthobject.push(
																{
																			
																			"tax_name":taxnamess[c],"status":"0",
																			"tax_id":taxnamess[c]
																			
																			
																});
														    }
														}
														else
														{
														
														
														   
														
														
														}
													  
													  
														
														
														

															//sixsth inclusive 
														
														var sixththinclusobj=[];
														
														$(".sixththinclusobj").each(function() 
														{

															sixththinclusobj.push($.trim($(this).text()));

														}); 
														//console.log("sixththinclusobj=="+sixththinclusobj);
														
														//sixsth inclusive  status
														
														var sixtaxstatus=[];
														
														$(".sixtaxstatus").each(function() 
														{

																var  sixthst = (this.checked ? "1" : "0");
															    sixtaxstatus.push(sixthst);

														});
														
														var inclsixsthobject=[];
														for(var u=0;u<sixththinclusobj.length;u++)
														{
																   var pt=u+1;
																   inclsixsthobject.push(
																	{
																				
																				"tax_name":sixththinclusobj[u],
																				"status":sixtaxstatus[u],
																			    "tax_id":sixththinclusobj[u]
																				
																	});
														}     
														if(inclsixsthobject=="")
													    {
															  for(var e=0;e<6;e++)
																{
																	   var gh=e+1;
																	   inclsixsthobject.push(
																		{
																					
																					"tax_name":taxnamess[e],
																					"status":"0",
																					"tax_id":taxnamess[e]
																					
																		});
																
																}
																
														  
														}
														else
														{
														       
														
														
														}
														
																									
													  
												
													 
													// var jsondetailsupdate="[inclfirstobject,"inclsecondobject","inclthirdobject","inclfourthobject","inclfifthobject","inclsixsthobject1"]";
													 
													 var inclusivearrobject=[];
													 
													for(var t=0;t<taxnamess.length;t++)
													{
														if(t==0)
														{
														 inclusivearrobject.push([]);
														
														}
														if(t==1)
														{
														 inclusivearrobject.push(inclfirstobject);
														
														}
														if(t==2)
														{
														 inclusivearrobject.push(inclsecondobject);
														
														}
														if(t==3)
														{
														 inclusivearrobject.push(inclthirdobject);
														
														}
														if(t==4)
														{
														 inclusivearrobject.push(inclfourthobject);
														
														}
														if(t==5)
														{
														 inclusivearrobject.push(inclfifthobject);
														
														}
														if(t==6)
														{
														 inclusivearrobject.push(inclsixsthobject);
														
														}
														
													}
												
													for(var t=0;t<taxnamess.length;t++)
													{
														   var k=1;
														    var taxorder=k+t;
															//var taxid=t+1;
															var taxid=$(".tavalues").val();
															//console.log("taxidssssssssss=="+taxid);
														    jsonarrayforbillorder.push(
															{
																		
																		"tax_name":taxnamess[t],"tax_order":taxorder,"status":statussss[t],
																		"tax_id":taxnamess[t],"inclusive":inclusivearrobject[t]
																		
																		
															});
														
														
													}
														
													var jsonarra3={"details":jsonarrayforbillorder,"vendor_id":vendor_id};
													var item_jsonss=JSON.stringify(jsonarra3);
													console.log("item_jsonss=="+item_jsonss);
													
													var operation="setVendorTaxeswithstatusandincludes";
												
											
								
										$.ajax(
												{
													url: url+'/admin/vendortaxvalues?operation='+operation+'&vendor_id='+vendor_id+'&tax_val_json='+item_jsonss,
													contentType: 'application/json; charset=utf-8',
													jsonpCallback: 'vendortaxvalues',
													cache: true,
													dataType: 'jsonp',
													jsonp: false,
													beforeSend: function()
													{ 
													   $("#loader").show(); 
													}, 
													complete: function(res) 
													{ 
														$("#loader").hide();
													 

													},
													success: function (res)
													{
												
													     if(res.result="true")
														  {
															 alert("successfully updated");
															 location.reload();
														  }
														  else
														  {
															
															 location.reload();
														  }
													},
													error: function (xhr, ajaxOptions, thrownError)
													{
													
													
													}
												});
												
												
													   
									
									});
										 


															
});
	function move(rowindx,direction)
	{
			$("#Update").show();
			$("#Update3").hide();
			$("#Update2").hide();
			 var tbl = document.getElementById('my_table');
			 var aRowIndex = rowindx + direction;
			 //console.log("row=="+aRowIndex);
			 
			 //end of therow
			 
			 if(aRowIndex=="1")
			 {
			   alert("End Of The Swapping");
			 
			 }
			 else
			 {
			    var curr = tbl.rows[rowindx];
				 var othr = tbl.rows[aRowIndex];
				if (direction==-1)
				{
					othr.parentNode.insertBefore(curr,othr);
				}
				if (direction==1)
				{
											
					othr.parentNode.insertBefore(curr,othr.nextSibling);
				}
			 
			 }
			

	}


       



        

		
