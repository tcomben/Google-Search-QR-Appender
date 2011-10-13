var phoneRegex = /\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b/g;

jQuery(document).ready(function(){
   var none = searchForPhoneNumbers();
   if(none){
      setTimeout("searchForPhoneNumbers()", 2000);
   }
});

function searchForPhoneNumbers(){
   var none = true;
   var usedNums = new Array();
   while((search = phoneRegex.exec(document.body.innerHTML)) != null){      
      if(usedNums.indexOf(search[0]) == -1){
         $("nobr").filter(function(i, el) {
            return !!$(el).text().match(search[0].replace("(", "\\(").replace(")", "\\)"));
         }).append("<br/><img src='http://qrcode.kaywa.com/img.php?s=5&d=TEL%3A" + search[0].replace(/[^0-9\.]+/g, '') + "'/><br/>");
         none = false;
	 usedNums.push(search[0]);
      }
   }
   return none;
}