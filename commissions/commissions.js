var allowRun = false; //flag variable

function openAccordion(accordionButton) {
    var accordion = accordionButton.parentNode; //function is attached to a child button, so get the parent of it

    if(allowRun == true) { //check to prevent the function running twice on closeButton click
        allowRun = false; //reset allowRun
        return;
    }
        
    console.log("Commission function opens");
    var image = accordion.children[0];
    var gradient = accordion.children[1];
    var downtick = accordion.children[2];
    var text = accordion.children[4];    
        
    //hidden
    var hidden = accordion.children[5]; 
    var closeButton = hidden.children[0];
        
    //////////////////////////////////////////////////////////////////////////////
    accordionButton.style.display = "none"; //DISABLE THE BUTTON.
    
    text.children[0].style.display = "none"; //remove title, don't remove price
    
    hidden.classList.toggle("hidden-show"); //shows the hidden box
    hidden.style.maxHeight = hidden.scrollHeight + "px"; //im not quite sure but it animates it lol
    
    downtick.classList.toggle("downtick-open");
    
    closeButton.style.display = "block"; //show close button    
    console.log("show hidden-box");
    
    // Expand image & gradient to full size
    image.style.height = "100%";    
    gradient.style.height = "100%";
    gradient.style.background = "linear-gradient(0deg,rgba(15, 18, 19, 1) 0%, rgba(15, 18, 19, 0.9) 70%, rgba(0, 0, 0, 0) 100%)"; //adjusts gradient
    
    text.style.top = "calc(50px + 6vh)"; //move price up
    
    bannerToggle = false;
    
    // Close hidden-box
    closeButton.onclick = function() { //close button
        //reset commission banner to default

        hidden.classList.toggle("hidden-show"); //hides the hidden box
        hidden.style.maxHeight = 0; //resets the unknowable variable
        
        downtick.classList.toggle("downtick-open");
        
        gradient.style.display = "block";
        text.children[0].style.display = "block";
        
        image.style = ""; //weird hack to reset all styles applied to image & gradient
        gradient.style = "";
        text.style = "";
        
        accordionButton.style.display = "block"; //reset button
        
        allowRun = true;
        console.log("Exit commission via button"); 
    };
}
