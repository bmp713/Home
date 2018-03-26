
window.addEventListener("load", fixNavbar);
window.addEventListener("resize", fixNavbar);
window.addEventListener("scroll", fixNavbar);

function fixNavbar(){
    // Desktop view
    if ( window.matchMedia("(min-width: 768px)" ).matches ){
        console.log('GREATER than 768px');
        document.getElementById('name').style.display = "none";
        document.getElementById('title').style.font = "36px sans-serif";
        document.getElementById('resume_mobile').style.display = "none";

        if( window.pageYOffset >= 150 ){
            document.getElementById("header").style.display = 'none';
            document.getElementById("navbar").style.position = 'fixed';
            document.getElementById("navbar").style.top = '0';
            //document.getElementById("content").style.top = '150';
        }
        else{
            document.getElementById("header").style.display = 'block';
            document.getElementById("navbar").style.position = 'relative';
            document.getElementById("navbar").style.top = '150';
            //document.getElementById("content").style.top = '0';
        }
    }
    // Mobile View
    else{
        console.log('LESS than 768px');
        document.getElementById('name').style.display = "block";
        document.getElementById('title').style.font = "16px sans-serif";
        document.getElementById('resume_mobile').style.display = "block";

        document.getElementById("header").style.display = 'none';
        document.getElementById("navbar").style.position = 'fixed';
        document.getElementById("navbar").style.top = '0';
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



