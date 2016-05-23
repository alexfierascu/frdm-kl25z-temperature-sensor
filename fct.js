var fisier;

if (window.XMLHttpRequest)
{
  fisier=new XMLHttpRequest();
}
/*else {
  fisier=new ActiveXObject('Microsoft.XMLHTTP');
}
*/
function request() {
  if(fisier.readyState == 0 || fisier.readyState == 4)
  {
    fisier.open('GET','data.txt',true);
    fisier.onreadystatechange = handleResponse;
    fisier.send(null);
  }
}

function handleResponse(){
  if(fisier.readyState==4 || fisier.status==200)
  {
    var returnAjaxResponse= fisier.responseText;
    document.getElementById('status').innerHTML=returnAjaxResponse;
  }
  setTimeout(request,5000);
}

document.getElementById('showData').addEventListener('click', function(){
  request();
});
