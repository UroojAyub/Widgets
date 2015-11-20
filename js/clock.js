$(document).ready(function() {


setInterval( function() {
	var seconds = new Date().getSeconds();
	$(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	var minutes = new Date().getMinutes();
	$(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	var hours = new Date().getHours();
	$(".hour").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);	
});

 function timerTick() {
        with (new Date()) {
          var h, m, s;
          
          h = 30 * ((getHours() % 12) + getMinutes() / 60);
          m = 6 * getMinutes();
          s = 6 * getSeconds();

   //document.getElementById('hour').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      //    document.getElementById('minute').setAttribute('transform','rotate(' + m + ', 50, 50)'); 
         // document.getElementById('second').style.webkitTransform = "rotateZ("+s+"deg)";
          
		  $('.hours').css({
					"webkitTransform":"rotateZ("+h+"deg)",
					"MozTransform":"rotateZ("+h+"deg)",
					"msTransform":"rotateZ("+h+"deg)",
					"OTransform":"rotateZ("+h+"deg)",
					"transform":"rotateZ("+h+"deg)"
				});
				
			$('.minutes').css({
					"webkitTransform":"rotateZ("+m+"deg)",
					"MozTransform":"rotateZ("+m+"deg)",
					"msTransform":"rotateZ("+m+"deg)",
					"OTransform":"rotateZ("+m+"deg)",
					"transform":"rotateZ("+m+"deg)"
				});	
		  
		  
		  
			$('.seconds').css({
					"webkitTransform":"rotateZ("+s+"deg)",
					"MozTransform":"rotateZ("+s+"deg)",
					"msTransform":"rotateZ("+s+"deg)",
					"OTransform":"rotateZ("+s+"deg)",
					"transform":"rotateZ("+s+"deg)"
				});
          setTimeout(timerTick, 1000);
        }
      }