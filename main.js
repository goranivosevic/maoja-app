document.getElementById("demo").innerHTML ='Today is:' + ' ' + Date();
function print_page()
{
window.print();
}
var d = new Date();
var month = d.getMonth();
var date = d.getDay();
var year = d.getFullYear();
document.getElementById("demo").innerHTML = date + '/ ' + month + '/ ' + year;