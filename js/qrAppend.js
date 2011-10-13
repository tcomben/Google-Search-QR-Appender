var phoneRegex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/g;

jQuery(document).ready(function(){
   var none = searchForPhoneNumbers();
   if(none){
      setTimeout("searchForPhoneNumbers()", 1000);
   }
});

function searchForPhoneNumbers(){
   var none = true;
   var html = document.body.innerHTML;
   while((search = phoneRegex.exec(document.body.innerHTML)) != null){
      html = html.replace(search[0], search[0] + "<br/><img src='http://api.qrserver.com/v1/create-qr-code/?data=TEL%3A1" + search[0].replace(/[^0-9\.]+/g, '') + "&size=60x60' style='height: 60px; width: 60px;'><br/>");
      none = false;
   }
   document.body.innerHTML = html;
   return none;
}