var s=["js/jquery-1.11.0.min.js","js/jquery.min.js","js/bootstrap.min.js","js/url.js","js/vendoradmin-viewshared-serviceagents.js"];
		for(i=0;i<s.length;i++)
		{
		  var script=document.createElement("script");
		  script.type="text/javascript";
		  script.src=s[i];

		  document.getElementsByTagName("head")[0].appendChild(script);
		};