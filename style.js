
window.addEventListener("load", fixNavbar);
window.addEventListener("scroll", fixNavbar);

function fixNavbar(){
    // Desktop view
    /*
    console.log(window.pageYOffset, document.body.clientHeight, document.body.scrollHeight);

    if(document.body.scrollHeight >= document.body.clientHeight){
        console.log("window.pageYOffset >= document.height");
        document.getElementById('copyright').style.height = '150px';
    }
    else{
        console.log("ELSE");
        document.getElementById('copyright').style.height = '50px';
    }
    */
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        console.log('DESKTOP');
        if( window.pageYOffset >= 150 ){
            //document.getElementById("content_1").style.top = '50';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
        }
        else{
            //document.getElementById("content_1").style.top = '0';
            document.getElementById("navbar").style.position = 'relative';
            document.getElementById("navbar").style.top = '150';
        }
    }
    // Mobile View
    else{
        console.log('MOBILE');
        document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.top = '0';
        //document.getElementById('copyright_2').appendChild( document.createElement('br') );
    }
}
function smoothScroll( elementId ){
    var offset = 35; // Might need to make responsive
    var current = window.pageYOffset;
    var destination = document.getElementById( elementId ).offsetTop;

    var timer = setInterval( function(){
        if( current <= destination ){
            current = current + offset;
            window.scrollTo( 0, current );
            if( current >= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
            }
        }
        if( current >= destination ){
            current = current - offset;
            window.scrollTo( 0, current );
            if( current <= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
            }
        }
    }, 1 );
}



