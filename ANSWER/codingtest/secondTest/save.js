
// function simpleLightbox(imageUrl, bgColor, maxWidth){
//     if(typeof bgColor === 'undefined'){
//         bgColor = '#000';
//     }
//     if(typeof maxWidth === 'undefined'){
//         maxWidth = '1100px';
//     }
//     window.open('', 'simpleLightbox').document.write('<html><head><meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" /></head><body style="margin:0;'+bgColor+';height:100%;" onclick="javascript:window.close(\'simpleLightbox\');"><table border="0" width="100%" height="100%"><tr><td valign="middle" align="center"><img style="position:relative;z-index:2;width:100%;max-width:'+maxWidth+';" src="'+imageUrl+'"/></td></tr></table></body></html>');
// }

// var imgs = document.getElementsByTagName('img');

// for( var i = 0; i < imgs.length; i++ ) {
//     imgs[i].addEventListener( 'click', function(e) {
//         console.dir(e.target);
//         simpleLightbox( e.target.src, "#00000" );
//     });
// }


// function loadJSON(file, callback) {   

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }
 

// function load() {
//     loadJSON( location.host+"/items.json", function(response) {
  
//         var actual_JSON = JSON.parse(response);
//         console.log(actual_JSON);
//     });
    
    
// }

// load();