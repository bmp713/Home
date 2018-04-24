
//window.addEventListener("scroll", parallax);
function parallax(){
    if( window.pageYOffset >= 1000 ){
        document.getElementById("parallax_2").style.width = '70%';
    }
    else{
        document.getElementById("parallax_2").style.width = '100%';        
    }
}

window.addEventListener("scroll", copyrightMenu);
function copyrightMenu(){
    var copyright = document.getElementById("copyright");
    if( window.pageYOffset >= 1000 ){
        copyright.style.height = '125px';
    }
    else{
        copyright.style.height = '40px';        
    }
}

window.addEventListener("load", fixNavbar);
window.addEventListener("scroll", fixNavbar);
function fixNavbar(){
    //console.log('Current = ' + window.pageYOffset );

    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        //console.log('DESKTOP');
        if( window.pageYOffset >= 150 ){
            document.getElementById("header").style.display = 'none';
            document.getElementById('content').style.marginTop = '0px';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
        }
        else{
            document.getElementById("header").style.display = 'block';
            document.getElementById('content').style.marginTop = '0px';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
        }
    }
    // Mobile View
    else{
        //console.log('MOBILE');
        document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.top = '0';
        //document.getElementById('copyright_2').appendChild( document.createElement('br') );
    }
}
// Elastic mmooth scrolling between content sections
function smoothScroll( elementId ){
    var speed = 1;
    var offset = 25; 
    var current = window.pageYOffset;
    var destination = document.getElementById( elementId ).offsetTop;

    var timer = setInterval( function(){
        console.log('Destination = ' + destination );
        //console.log('Current = ' + current );
        console.log('Offset = ' + offset );
        //if( offset < 500 ){
            //offset = offset * 2;
        //}
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

var copyrightOpen = false;
function openPortfolio(){
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        console.log("openPortfolio()");
        document.getElementById("copyright").style.height = '140px';
        copyrightOpen = true;
    }
}
function closePortfolio(){
    console.log("openPortfolio()");
    document.getElementById("copyright").style.height = '40px';
    copyrightOpen = false;
}



