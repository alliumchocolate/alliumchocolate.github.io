var allowRun = false; //flag variable

function openBanner(div) {
    
    if(allowRun == true) { //check to prevent the function running twice on closeButton click
        allowRun = false; //reset allowRun
        return;
    }
    
    console.log("Commission function opens");
    var image = div.children[0];
    var gradient = div.children[1];
    var downtick = div.children[2];
    var text = div.children[3];    
        
    //hidden
    var hidden = div.children[4]; 
    var closeButton = hidden.children[0];
        
    //////////////////////////////////////////////////////////////////////////////
    text.children[0].style.display = "none"; //remove title, don't remove price
    downtick.style.display = "none"; //remove the downtick
    
    //hidden.style.display = "block"; //show hidden-box
    hidden.classList.toggle("hidden-show");
    hidden.style.maxHeight = hidden.scrollHeight + "px";  
    
    closeButton.style.display = "block"; //show close button    
    console.log("show hidden-box");
    
    // Expand image & gradient to full size
    image.style.height = "100%";
    gradient.style.height = "100%";
    gradient.style.background = "linear-gradient(0deg,rgba(15, 18, 19, 1) 0%, rgba(15, 18, 19, 0.9) 50%, rgba(0, 0, 0, 0) 100%)"; //adjusts gradient
    
    text.style.top = "calc(40px + 6vh)"; //move price up

    // Close hidden-box
    closeButton.onclick = function() { //close button
        //reset commission banner to default
        //hidden.style.display = "none";
        hidden.classList.toggle("hidden-show");
        hidden.style.maxHeight = 0;
        hidden.style.padding = 0;
        
        gradient.style.display = "block";
        text.children[0].style.display = "block";
        downtick.style.display = "block";
        
        image.style = ""; //weird hack to reset all styles applied to image & gradient
        gradient.style = "";
        text.style = "";
        
        allowRun = true;
        console.log("Exit commission via button"); 
    };
}
