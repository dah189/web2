function showdiv()  {
 document.getElementById("show").style.display = "block";
 
  document.getElementById('strHref').innerHTML="Hidden";
  document.getElementById('strHref').href="javascript:hidediv();";
}
function hidediv() {
   document.getElementById('show').style.display='none';
  document.getElementById('strHref').innerHTML="Show More";
  document.getElementById('strHref').href="javascript:showdiv();";
}