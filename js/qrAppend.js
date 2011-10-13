var phoneRegex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/g;

/*jquery(document).ready(function(){
	while((search = phoneRegex.exec(document.body.innerHTML)) != null){
	   alert(search);
	}
});*/

document.body.innerHTML = "<div id='qrcode'></div>";
jquery('#qrcode').qrcode("this plugin is great");