var s=["js/jquery-1.9.1.js","js/jquery.min.js","js/bootstrap.min.js","js/jquery-ui.min.js","js/jquery.tablesorter.min.js","js/jquery.jsort.js","js/index.js"];

for(i=0;i<s.length;i++)
{
  var script=document.createElement("script");
  script.type="text/javascript";
  script.src=s[i];

  document.getElementsByTagName("head")[0].appendChild(script);
};