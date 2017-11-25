/*
 *jsonQ.js v 1.0.3
 *Author: Sudhanshu Yadav
 *s-yadav.github.com
 *Copyright (c) 2013 -2015 Sudhanshu Yadav.
 *Dual licensed under the MIT and GPL licenses
 */

!function(undefined){function matchPath(n,r){var t=new RegExp("^"+n.join("~~"),"i");return t.test(r.join("~~"))}function newFormat(n){var r=n.keyAdded||[],t=n.json,e=n.path,o=n.newJson;return jsonQ.each(t,function(n,a){var i=e?JSON.parse(JSON.stringify(e)):[];i.push(n),"object"==objType(t)&&(-1==r.indexOf(n)&&(r.push(n),o[n]=[]),o[n].push({path:i}));var s=objType(a);("object"==s||"array"==s)&&newFormat({json:a,newJson:o,path:i,keyAdded:r})}),o}var jsonQ=function(n){return new jsonQ.fn.init(n)},error=function(n){throw n},stringify=JSON.stringify,parse=JSON.parse;jsonQ.settings={sort:{order:"ASC",logic:function(n){return n},caseIgnore:!0,allLevel:!0}};var tFunc={topLevel:function(n){for(var r=this.jsonQ_current,t=this.cloneObj(jsonQ()),e=t.jsonQ_current=[],o="",a=n.key,i=n.method,s=0,u=r.length;u>s;s++){var l,c=r[s].path,f=!1,h=c.concat([]);if("parent"==i)0===h.length?f=!0:h.pop();else{var j=h.lastIndexOf(a);-1==j?f=!0:h=h.slice(0,j+1)}l=JSON.stringify(h),o==l||f||e.push({path:h}),o=l}return t.length=e.length,t.selector.push({method:i,key:a}),t},qualTrv:function(n){for(var r=this.jsonQ_current,t=this.cloneObj(jsonQ()),e=t.jsonQ_current=[],o=n.key,a=jsonQ.clone(this[o])||[],i=n.qualifier,s=objType(i),u=n.method,l="find"==u?!0:!1,c=0,f=r.length;f>c;c++){var h=r[c].path,j=!1;if(!l){if(0===h.length)continue;var p=h.concat([]);p.pop()}for(var y=0;y<a.length;y++){var v,g=a[y].path;if(l)v=matchPath(h,g);else{var b=g.concat([]);b.pop(),v=p.join()==b.join()}if(v){var Q=tFunc.qTest.call(this,s,i,g,e);Q&&(a.splice(y,1),y--),j=!0}else if(j)break}}return"string"==s&&(t=this.filter.call(t,i)),t.length=t.jsonQ_current.length,t.selector.push({method:u,key:o,qualifier:i}),t},qTest:function(n,r,t,e){var o="function"==n?r.call(this.pathValue(t)):"object"==n?jsonQ.checkKeyValue(this.pathValue(t),r):!0;return o&&e.push({path:t}),o}},sortFunc={baseConv:function(n,r,t){if("string"==n){if(t.caseIgnore)return r.toLowerCase()}else{if("array"==n)return r.join();if("object"==n)return stringify(jsonQ.order(r))}return r},sortAry:function(n,r,t){return n.sort(function(n,t){var e=r(n),o=r(t);return o>e?-1:e>o?1:0}),"desc"==t.order.toLowerCase()&&n.reverse(),n}};jsonQ.fn=jsonQ.prototype={init:function(n){var r;if(!n)return this;if(r=objType(n),"string"==r)try{n=JSON.parse(n)}catch(t){error("Not a valid json string.")}else if("object"!=r&&"array"!=r)return error("Not a valid json object."),n;return this.jsonQ_root=n,this.jsonQ_current=[{path:[]}],newFormat({json:n,newJson:this,refresh:!0}),this.length=this.jsonQ_current.length,this.selector=[],this},pathValue:function(n){return jsonQ.pathValue(this.jsonQ_root,n)},setPathValue:function(n,r){return jsonQ.setPathValue(this.jsonQ_root,n,r),this},clone:function(){return parse(stringify(this.jsonQ_current))},cloneObj:function(n){var r=this;return n=n||{},jsonQ.each(r,function(r,t){n[r]=t}),n.selector=jsonQ.merge([],n.selector),n},value:function(n,r){var t=this.jsonQ_current;if(r=r===!1?!1:!0,n){for(var e=objType(n),o=0,a=t.length;a>o;o++){var i,s=t[o].path;if("function"==e){var u=this.pathValue(s);i=r?jsonQ.clone(n(u)):n(u)}else i=r?jsonQ.clone(n):n;this.setPathValue(s,i)}return this}var l=[];return this.each(function(n,r,t){l.push(t)}),l},append:function(n,r){return this.appendAt("last",n,r)},prepend:function(n,r){return this.appendAt("first",n,r)},appendAt:function(n,r,t){var e=this.jsonQ_current;if(isNaN(n)&&"first"!=n&&"last"!=n)return error(n+"is not a valid index."),this;for(var o=0,a=e.length;a>o;o++){var i=e[o].path.concat([]),s=i.pop(),u=this.pathValue(i),l=objType(u[s]),c=u[s].length,f=0>n||"first"==n?0:n>c||"last"==n?c:n;if("array"==l)r=t?jsonQ.clone(r):r,u[s].splice(f,0,r);else if("string"==l){var h=u[s];u[s]=h.substring(0,f)+r+h.substring(f,c)}}return this},filter:function(n){var r=this.jsonQ_current,t=this.cloneObj(jsonQ()),e=t.jsonQ_current=[],o=objType(n);if(n){for(var a=0,i=r.length;i>a;a++){var s=r[a].path;tFunc.qTest.call(this,o,n,s,e)}if("string"==o){var u=/(nth|eq)\((.+)\)/,l=u.exec(n);e=l?jsonQ.nthElm(r,l[2],!0):jsonQ.nthElm(r,n,!0),t.jsonQ_current=e}return t.length=e.length,t.selector.push({method:"filter",qualifier:n}),t}},find:function(n,r){return tFunc.qualTrv.call(this,{method:"find",key:n,qualifier:r})},sibling:function(n,r){return tFunc.qualTrv.call(this,{method:"sibling",key:n,qualifier:r})},parent:function(){return tFunc.topLevel.call(this,{method:"parent"})},closest:function(n){return tFunc.topLevel.call(this,{method:"closest",key:n})},path:function(){return this.jsonQ_current[0].path},firstElm:function(){return this.pathValue(this.jsonQ_current[0].path)},lastElm:function(){return this.pathValue(this.jsonQ_current[this.length-1].path)},nthElm:function(n,r){return jsonQ.nthElm(this.value(),n,r)},index:function(n,r){return jsonQ.index(this.value(),n,r)},createXML:function(){return jsonQ.createXML(this.value())},sort:function(n,r){r=jsonQ.merge({},jsonQ.settings.sort,r);var t,e,o=this.find(n),a=o.clone(),i=[],s=[],u=objType(o.pathValue(a[0].path)),l=function(n){for(;0!==n.length;){var r=n.pop();if(!isNaN(r)){var t=o.pathValue(n);if("array"==objType(t))return t}}return null};for(t=0,e=a.length;e>t;t++)i.push({pathHolder:a[t].path.concat([]),current:a[t].path.concat([])});for(var c=0,f=function(n){return i.splice(n,1),--n};0!==i.length;)for(c++,t=0;t<i.length;t++){var h=i[t].current,j=i[t].pathHolder,p=l(h),y=h.join();if(0===h.length||-1!=s.indexOf(y))t=f(t);else{var v=j.slice(h.length+1,j.length),g=function(n){var t=jsonQ.pathValue(n,v);return t=sortFunc.baseConv(u,t,r),r.logic(t)};sortFunc.sortAry(p,g,r),r.allLevel?(j[h.length]=0,s.push(y)):t=f(t)}}return jsonQ(o.jsonQ_root).find(n)},each:function(n){for(var r=this.jsonQ_current,t=0,e=r.length;e>t;t++)n(t,r[t].path,this.pathValue(r[t].path));return this},unique:function(){return jsonQ.unique(this.value())},refresh:function(){for(var n=this.selector,r=jsonQ(this.jsonQ_root),t=0,e=n.length;e>t;t++){var o=n[t],a=[];o.key&&a.push(o.key),o.qualifier&&a.push(o.qualifier),r=r[o.method].apply(r,a)}return this.cloneObj.call(r,this),this},prettify:function(n){return jsonQ.prettify(this.value(),n)}},jsonQ.each=function(n,r){for(var t in n)n.hasOwnProperty(t)&&r(t,n[t])};var objType=jsonQ.objType=function(){var n={"[object Array]":"array","[object Object]":"object","[object String]":"string","[object Number]":"number","[object Boolean]":"boolean","[object Null]":"null","[object Function]":"function"};return function(r){var t=Object.prototype.toString.call(r);return n[t]}}();jsonQ.merge=function(){var n=arguments,r=objType(n[0]),t=1,e=n.length,o=!1,a=n[0];if(0!==e&&("boolean"!=r||1!=e)){"boolean"==r&&(a=n[1],t=2,o=n[0]);for(var i=function(n,r){var t=objType(r),e=objType(a[n]);!o||"array"!=t&&"object"!=t?a[n]=r:(a[n]=t!=e||"array"!=e&&"object"!=e?"array"==t?[]:{}:a[n],jsonQ.merge(o,a[n],r))};e>t;t++)jsonQ.each(n[t],i);return a}},jsonQ.merge(jsonQ,{sort:function(n,r){if(r=jsonQ.merge({},jsonQ.settings.sort,r),"array"!=objType(n))return void error("Only array is allowed to sort");var t=function(n){var t=objType(n);return n=sortFunc.baseConv(t,n,r),r.logic(n)};return sortFunc.sortAry(n,t,r)},order:function(n){if("object"!=typeof n)return n;var r=function(n){return isNaN(n)||(n=parseInt(n)),n},t=function(n){var e=objType(n),o=Object.keys(n);"object"==e&&o.sort(function(n,t){var e=r(n),o=r(t);return o>e?-1:e>o?1:0});for(var a=0,i=o.length;i>a;a++){var s=o[a],u=n[s],l=objType(u);("object"==l||"array"==l)&&t(u),"object"==e&&(delete n[s],n[s]=u)}};return t(n),n},clone:function(n){var r=objType(n);return"object"==r||"array"==r?parse(stringify(n)):n},index:function(n,r,t){var e=objType(r),o=n.length,a="object"==e||"array"==e||"function"==e?!0:!1;if("function"==e&&(t=!0),a&&!t)var i=stringify(jsonQ.order(r));for(var s=0;o>s;s++){var u=n[s];if(a){var l=objType(u);if(l!=e&&!t)continue;if(t){var c;if("function"==e)c=r.call(u);else if("object"==e&&"object"==l)c=jsonQ.checkKeyValue(u,r);else if("array"==l)if("array"==e)for(var f=0,h=r.length;h>f&&(c=-1!=jsonQ.index(u,r[f]),c);f++);else c=-1!=jsonQ.index(u,r);if(c)return s}else if(stringify(jsonQ.order(u))==i)return s}else if(r==u)return s}return-1},contains:function(n,r,t){return-1!=jsonQ.index(n,r,t)},checkKeyValue:function(n,r){for(var t in r)if(r.hasOwnProperty(t)&&!jsonQ.identical(r[t],n[t]))return!1;return!0},nthElm:function(array,arg,aryRetrn){var result;if(array[arg])result=array[arg];else if("last"==arg)result=array[array.length-1];else if("first"==arg)result=array[0];else if("random"==arg){var rand=Math.floor(Math.random()*array.length);result=array[rand]}else if("even"==arg)result=jsonQ.nthElm(array,"2n");else if("odd"==arg)result=jsonQ.nthElm(array,"2n+1");else try{var newArray=[],ln=array.length;if(!arg.match(/^[0-9n*+-\/]+$/))throw"";arg=arg.replace(/([0-9])n/g,function(n,r){return r?r+"*n":n});for(var n=0;ln>n;n++){var index=eval(arg);if(index>ln-1)break;newArray.push(array[index])}result=newArray}catch(error){result=array}return result=result||array,"array"!=objType(result)&&aryRetrn?[result]:result},prettify:function(n,r){if("object"!=typeof n)throw"Only valid json object is allowed.";return r?JSON.stringify(n,null,"	").replace(/\n/g,"</br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"):JSON.stringify(n,null,3)},identical:function(n,r){function t(n){return"object"!=typeof n||null===n?n:Object.keys(n).sort().map(function(r){return{key:r,value:t(n[r])}})}return JSON.stringify(t(n))===JSON.stringify(t(r))},union:function(){for(var n=arguments,r=[],t=n.length,e=0;t>e;e++)for(var o=n[e].length,a=0;o>a;a++){var i=n[e][a];-1==jsonQ.index(r,i)&&r.push(i)}return r},intersection:function(){var n,r=arguments,t=[],e=r.length;if(1==e)t=r[0];else for(var o=0,a=r[0].length;a>o;o++){var i=r[0][o];n=1;for(var s=1;e>s;s++)if(-1==jsonQ.index(r[s],i)){n=0;break}1==n&&t.push(i)}return t},suffle:function(n){for(var r=1,t=n.length;t>r;r++){var e=Math.floor(Math.random()*(r+1)),o=n[r];n[r]=n[e],n[e]=o}return n},unique:function(n){for(var r=n.length,t=[],e=0;r>e;e++)-1==jsonQ.index(t,n[e])&&t.push(n[e]);return t},pathValue:function(n,r){var t=0,e=r.length;if(null===n)return null;for(;e>t;){if(null===n[r[t]])return void(n=null);n=n[r[t]],t+=1}return n},setPathValue:function(n,r,t){var e=0,o=n,a=r.length;if(null===n)return null;for(;a>e;)"object"!=typeof o[r[e]]&&(o[r[e]]="number"==objType(r[e+1])?[]:{}),e==r.length-1&&(o[r[e]]=t),o=o[r[e]],e+=1;return n},createXML:function(n){var r=function(n,t){t=t||[];var e=0===t.length?!0:!1,o=objType(n);return e&&t.push('<?xml version="1.0" encoding="ISO-8859-1"?><jsonXML>'),jsonQ.each(n,function(n,e){var a="array"==o?"arrayItem":n,i=objType(e);t.push("<"+a+' type="'+i+'">'),"object"==i||"array"==i?r(e,t):t.push("<![CDATA["+e+"]]>"),t.push("</"+a+">")}),e?(t.push("</jsonXML>"),t.join("")):t};return r(n)},append:function(n,r,t){return jsonQ.appendAt(n,"last",r,t)},prepend:function(n,r,t){return jsonQ.appendAt(n,"first",r,t)},appendAt:function(n,r,t,e){if(isNaN(r)&&"first"!=r&&"last"!=r)return void error(r+"is not a valid index.");var o=objType(n),a=n.length,i=0>r||"first"==r?0:r>a||"last"==r?a:r;return"array"==o?(t=e?jsonQ.clone(t):t,n.splice(i,0,t)):"string"==o&&(n=n.substring(0,i)+t+n.substring(i,a)),n}}),jsonQ.fn.init.prototype=jsonQ.fn,window.jsonQ=jsonQ}();