$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
});


		function adBlockDetected() {
			
            var user=getCookie("username");
                    
            if (user === "John Doe") {
                
                document.getElementById('adblockdetected').style.display = 'none';
                setTimeout(function() {
  			        document.getElementById('hello').innerHTML = 'You have purchased premium plan.';
                }, 1000);
                
                document.getElementById('AdS1').style.display = 'none';
            }
                  
            else {
                  document.getElementById('adblockdetected').style.display = 'block';
            }
                    
                
                
            function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
			
		}
		
		
		
		function adBlockNotDetected() {
			document.getElementById('adblockdetected').style.display = 'none';
			
			setTimeout(function() {
  			document.getElementById('hello').innerHTML = 'Ad Blocker Not Found !';
            }, 1000);

		}
		
		if(typeof fuckAdBlock === 'undefined') {
			adBlockDetected();
		} else {
			fuckAdBlock.setOption({ debug: true });
			fuckAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
		}
		


function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}


function myFunction() {
   // alert("Hi");

// Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
    
    x = Base64.decode(x);

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Not a Valid Donation PIN";
    } else {
        text = "Valid Donation PIN: Now you won't see Ads on this Browser";
        
        createCookie("username","John Doe",60);
        //document.cookie = "username=John Doe; expires="+expires;
        location.reload();
    }
    document.getElementById("demo").innerHTML = text;
    
}
