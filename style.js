
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
        
        // Scrolling down and up
        if( previous <= window.pageYOffset ){
        }
        if ( previous > window.pageYOffset ){
        }

    }
}

window.addEventListener("scroll", parallax_2);
function parallax_2(){
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        document.getElementById("content_right").style.top = window.pageYOffset/2 + 'px';
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
        copyright.style.height = '125px';
        copyrightOpen = false;
    }
    else{
        copyright.style.height = '40px';
        copyrightOpen = false;
    }
}


var i = 0;
var images = [];
var slideshowOpen = false;

images[0] = 'assets/images/Portfolio/Screenshot (201).png';
images[1] = 'assets/images/Portfolio/Screenshot (202).png';
images[2] = 'assets/images/Portfolio/Screenshot (203).png';
images[3] = 'assets/images/Portfolio/Screenshot (204).png';
images[4] = 'assets/images/Portfolio/Screenshot (205).png';
images[5] = 'assets/images/Portfolio/Screenshot (206).png';
images[6] = 'assets/images/Portfolio/Screenshot (207).png';
images[7] = 'assets/images/Portfolio/Screenshot (208).png';
images[8] = 'assets/images/Portfolio/Screenshot (209).png';
images[9] = 'assets/images/Portfolio/Screenshot (211).png';
images[10] = 'assets/images/Portfolio/Screenshot (213).png';
images[11] = 'assets/images/Portfolio/Screenshot (307).png';
images[12] = 'assets/images/Portfolio/Screenshot (308).png';
images[13] = 'assets/images/Portfolio/Screenshot (309).png';
images[14] = 'assets/images/Portfolio/Screenshot (310).png';
images[15] = 'assets/images/Portfolio/Screenshot (311).png';
images[16] = 'assets/images/Portfolio/Screenshot (312).png';
images[17] = 'assets/images/Portfolio/Screenshot (380).png';
images[18] = 'assets/images/Portfolio/Screenshot (381).png';
images[19] = 'assets/images/Portfolio/Screenshot (382).png';
images[20] = 'assets/images/Portfolio/Screenshot (383).png';
images[21] = 'assets/images/Portfolio/Screenshot (384).png';
images[22] = 'assets/images/Portfolio/Screenshot (385).png';
images[23] = 'assets/images/Portfolio/Screenshot (386).png';
images[24] = 'assets/images/Portfolio/Screenshot (387).png';
images[25] = 'assets/images/Portfolio/Screenshot (388).png';
images[26] = 'assets/images/Portfolio/Screenshot (389).png';
images[27] = 'assets/images/Portfolio/Screenshot (390).png';
images[28] = 'assets/images/Portfolio/Screenshot (391).png';
images[29] = 'assets/images/Portfolio/Screenshot (393).png';
images[30] = 'assets/images/Portfolio/Screenshot (394).png';
images[31] = 'assets/images/Portfolio/Screenshot (395).png';
images[32] = 'assets/images/Portfolio/Screenshot (396).png';
images[33] = 'assets/images/Portfolio/Screenshot (397).png';
images[34] = 'assets/images/Portfolio/Screenshot (398).png';
images[35] = 'assets/images/Portfolio/Screenshot (399).png';
images[36] = 'assets/images/Portfolio/Screenshot (400).png';
images[37] = 'assets/images/Portfolio/Screenshot (401).png';
images[38] = 'assets/images/Portfolio/Screenshot (402).png';
images[39] = 'assets/images/Portfolio/Screenshot (504).png';

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
        slideImage( elementSrc );
        slideshowOpen = true;
        document.querySelector("#slideshow").style.height = "100%";
        document.querySelector("#slideNav").innerHTML = "Close";
        document.querySelector("#slideNav").style.background = "rgba(50,50,100,0.8)";

    }
}
function closeSlideshow(){
    i = 0;
    slideshowOpen = false;
    document.querySelector("#slideshow").style.height = "0";
    document.querySelector("#slideNav").innerHTML = "Slideshow";
    document.querySelector("#slideNav").style.background = "rgba(10,10,20,0.8)";
    console.log("closeSlideshow()");
}



