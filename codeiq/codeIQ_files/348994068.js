/* mycon-dev-gradle 13.12.11-1095-1095 (2013-12-11 18:14:18 GMT) */
rsinetsegs=['B10871_10632','B10871_10487','B10871_10585','B10871_10156','B10871_10071','B10871_10170','B10871_10265','B10871_10118','B10871_10478','B10871_10533','B10871_10591','B10871_10608','B10871_10609','B10871_10610','B10871_10611','B10871_10612','B10871_10613','B10871_0'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom='.codeiq.jp';
var rsiSegs="";
var rsiPat=/.*_5.*/;
var i=0;
for(x=0;x<rsinetsegs.length&&i<10;++x){if(!rsiPat.test(rsinetsegs[x])){rsiSegs+='|'+rsinetsegs[x];++i;}}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['B10871_10632','B10871_10487','B10871_10585','B10871_10156','B10871_10071','B10871_10170','B10871_10265','B10871_10118','B10871_10478','B10871_10533','B10871_10591','B10871_10608','B10871_10609','B10871_10610','B10871_10611','B10871_10612','B10871_10613','B10871_0'],'b10871');}