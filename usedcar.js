function f1()
{
	  var a=document.getElementById("brand").value;

var url = "https://logo.clearbit.com/"+a+".com";
var img = new Image();
img.src = url;
document.getElementById("logo").appendChild(img);
}
function load()
{
	
		var e=document.getElementById("brand").value;
  var xhttp = new XMLHttpRequest(); 
  xhttp.open("GET", "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/"+e+"?format=json", true);
// document.getElementById("available").show();
 document.getElementById("available").innerHTML="loading....";
  xhttp.send();
  var data;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	data=JSON.parse(this.responseText);
    	console.log(data);
    	document.getElementById("available").innerHTML="";
    for(var i=0;i<10;i++)
       {
        document.getElementById("available").innerHTML+=data.Results[i].Model_Name+("<br>");
       }
    f1();   // document.getElementById("available").hide();

   }}
}
