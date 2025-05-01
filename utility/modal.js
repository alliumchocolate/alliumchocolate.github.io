//initalize the close button
var close = document.getElementById('close-modal');

function modal(img) { //modal function which receives the img element as argument, via "onclick="modal(this)""
    console.log("Modal function opens");
    
    //open modal
    var modal = document.getElementById('modal');
    var box = document.getElementById('modal-box');
    var wrapper = document.getElementById('modal-wrapper');
    var image = document.getElementById('modal-image');
    var closeButton = document.getElementById('modal-close');
    
    modal.style.display = 'block'; //shows the modal
    
    image.src = img.src; //replaces source
    image.alt = img.alt;
    console.log("Trigged a modal");
    
    //CLOSING///////////////////////////////////////////////////////////////////////
    close.onclick = function() { //close button
        modal.style.display = 'none';
        console.log("Exit modal via button");
    };
    
    //QOL: close the modal when clicking outside the modal
    window.onclick = function(event) {
        if(event.target == document.getElementById('modal-screen-cover')) { //close if clicking on the bg
            modal.style.display = 'none';
            console.log("Exit modal via window");
        }
        if(event.target == box) { //close if clicking in the modal box
            modal.style.display = 'none';
            console.log("Exit modal via box");
        }
        if(event.target == wrapper) { //close if clicking in the modal wrapper
            modal.style.display = 'none';
            console.log("Exit modal via wrapper");
        }
    };
}
    
//add onclick="modal(this)" to <img> to use 
//like:
//<img onclick="modal(this)" src="source">
//as well as
//<script src="/utility/modal.js"></script>