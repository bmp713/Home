
// Zoom in and out of background
window.onload = function ( elementID ){
	var zoom = true;
	var backgroundSize = 100;
	var timer = setInterval( function(){
		if( backgroundSize < 150 && zoom ){
			document.querySelector("#content_5").setAttribute("style","background-size:"+ (backgroundSize+=0.05) +"%;");
           		document.querySelector("#content_left").setAttribute("style","background-size:"+ (backgroundSize+=0.05) +"%;");
            		document.querySelector("#content_6").setAttribute("style","background-size:"+ (backgroundSize+=0.05) +"%;");
        	}
		else{
			if( backgroundSize >= 150 ){
                		zoom = false;
            		}
	        	else if( backgroundSize < 100 ){
                		zoom = true;
            		}
            		document.querySelector("#content_5").setAttribute("style","background-size:"+ (backgroundSize-=0.05) +"%;");
            		document.querySelector("#content_left").setAttribute("style","background-size:"+ (backgroundSize-=0.05) +"%;");
           		document.querySelector("#content_6").setAttribute("style","background-size:"+ (backgroundSize-=0.05) +"%;");
        	}	
	}, 50);
}

var previous = 0;
window.addEventListener("scroll", parallax_1);
function parallax_1(){
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        previous = window.pageYOffset - 1;
        document.querySelector("#portfolio_p").style.left = -window.pageYOffset + 'px';
        document.querySelector("#portfolio_header").style.left = window.pageYOffset + 'px';
        document.querySelector("#portfolio_buttons").style.top = -window.pageYOffset* (3/2) + 'px';
    
        if( window.pageYOffset >= 100 && window.pageYOffset < 300)
            document.querySelector("#content_1").setAttribute("style","background-size:"+ window.pageYOffset * 0.8 +"%;");
    }
}

window.addEventListener("scroll", parallax_2);
function parallax_2(){
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        document.querySelector("#content_right").style.top = window.pageYOffset/2 + 'px';
    }
}

function smoothScroll( elementId ){
    console.log("smoothScroll(" + elementId + ")" );
    var speed = 1;
    var offset = 10;
    var current = window.pageYOffset;
    var destination = document.querySelector( '#' + elementId ).offsetTop;
    console.log("destination: " + destination );
   
    var timer = setInterval( function(){
        if( current <= destination ){
            current = current + offset;
            window.scrollTo( 0, current );
            if( current >= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
        if( current >= destination ){
            current = current - offset;
            window.scrollTo( 0, current );
            if( current <= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
    }, speed );
}

window.addEventListener("scroll", copyrightMenu);
var copyrightOpen = false;
function copyrightMenu(){
    //console.log("window.offsetTop: " + window.pageYOffset);
    var copyright = document.querySelector("#copyright");

    if( window.pageYOffset >= 200 ){
        if ( window.matchMedia("(min-width: 768px)" ).matches ){
            copyright.style.height = '125px';
            copyrightOpen = false;
        }
    }
    else{
        copyright.style.height = '40px';
        copyrightOpen = false;
    }
}
function closeCopyrightMenu(){
    var copyright = document.querySelector("#copyright");
    copyright.style.height = '40px';
    copyrightOpen = true;
}

var i = 0;
var images = [];
var slideshowOpen = false;
images = [
'assets/images/Portfolio/Screenshot (204).png',
'assets/images/Portfolio/Screenshot (203).png',
'assets/images/Portfolio/Screenshot (202).png',
'assets/images/Portfolio/Screenshot (201).png',
'assets/images/Portfolio/Screenshot (205).png',
'assets/images/Portfolio/Screenshot (206).png',
'assets/images/Portfolio/Screenshot (207).png',
'assets/images/Portfolio/Screenshot (208).png',
'assets/images/Portfolio/Screenshot (209).png',
'assets/images/Portfolio/Screenshot (211).png',
'assets/images/Portfolio/Screenshot (213).png',
'assets/images/Portfolio/Screenshot (307).png',
'assets/images/Portfolio/Screenshot (308).png',
'assets/images/Portfolio/Screenshot (309).png',
'assets/images/Portfolio/Screenshot (310).png',
'assets/images/Portfolio/Screenshot (311).png',
'assets/images/Portfolio/Screenshot (312).png',
'assets/images/Portfolio/Screenshot (380).png',
'assets/images/Portfolio/Screenshot (381).png',
'assets/images/Portfolio/Screenshot (382).png',
'assets/images/Portfolio/Screenshot (383).png',
'assets/images/Portfolio/Screenshot (384).png',
'assets/images/Portfolio/Screenshot (385).png',
'assets/images/Portfolio/Screenshot (386).png',
'assets/images/Portfolio/Screenshot (387).png',
'assets/images/Portfolio/Screenshot (388).png',
'assets/images/Portfolio/Screenshot (389).png',
'assets/images/Portfolio/Screenshot (390).png',
'assets/images/Portfolio/Screenshot (391).png',
'assets/images/Portfolio/Screenshot (393).png',
'assets/images/Portfolio/Screenshot (394).png',
'assets/images/Portfolio/Screenshot (395).png',
'assets/images/Portfolio/Screenshot (396).png',
'assets/images/Portfolio/Screenshot (397).png',
'assets/images/Portfolio/Screenshot (398).png',
'assets/images/Portfolio/Screenshot (399).png',
'assets/images/Portfolio/Screenshot (400).png',
'assets/images/Portfolio/Screenshot (401).png',
'assets/images/Portfolio/Screenshot (402).png',
'assets/images/Portfolio/Screenshot (504).png'
]

function slideImage( elementSrc ){
    var slide = document.querySelector("#image");

    if( elementSrc ){
        slide.src = elementSrc;
        elementSrc = null;
    }
    else{
        slide.src = images[i];

        if( i < images.length - 1)
            i++;
        else
            i = 0;
    }    
}

function openSlideshow( elementSrc ){
    if( slideshowOpen ){
        closeSlideshow();
    }
    else{
        closeCopyrightMenu();
        slideImage( elementSrc );
        slideshowOpen = true;
        document.querySelector("#slideshow").style.height = "100%";
        document.querySelector("#slideNav").innerHTML = "Close";
        document.querySelector("#slideNav").style.background = "rgba(10, 1, 1, 0.7)";

    }
}

function closeSlideshow(){
    i = 0;
    slideshowOpen = false;
    document.querySelector("#slideshow").style.height = "0";
    document.querySelector("#slideNav").innerHTML = "Slideshow";
    document.querySelector("#slideNav").style.background = "rgba(20,1,1,0.7)";
    console.log("closeSlideshow()");
}



