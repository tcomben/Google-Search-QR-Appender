var phoneRegex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/g;

jQuery(document).ready(function(){
   var none = searchForPhoneNumbers();
   if(none){
      setTimeout("searchForPhoneNumbers()", 1000);
   }
});

function searchForPhoneNumbers(){
   var none = true;
   while((search = phoneRegex.exec(document.body.innerHTML)) != null){      
      $("nobr").filter(function(i, el) {
	 var s = search[0].replace("(", "\\(").replace(")", "\\)");
         return !!$(el).text().match(s);
      }).append("<br/><img src='http://qrcode.kaywa.com/img.php?s=5&d=TEL%3A" + search[0].replace(/[^0-9\.]+/g, '') + "'/><br/>");
      none = false;
   }
   return none;

}

//<br/><img src='http://qrcode.kaywa.com/img.php?s=5&d=TEL%3A7345225200/><br/>