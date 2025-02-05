        // let paragraph = document.createElement('p');
        // paragraph.textContent = "0"
        // let change = document.getElementsByTagName("div");
        // let changeEvent = change[0]
        // changeEvent.appendChild(paragraph)
        // console.log(changeEvent)
        // paragraph.style.backgroundColor = "red";
        // paragraph.style.color = "white";
        // paragraph.style.textAlign = "center";
        // paragraph.style.width = "300px";
        // paragraph.style.height = "300px";
        // paragraph.style.alignContent = "center";
        // paragraph.style.fontSize = "5rem";
        // paragraph.style.border = "3px solid black";
        // paragraph.style.borderRadius = "150px";
        // paragraph.style.cursor= "pointer";


        // const increaseBtn = document.getElementById("increaseBtn");
        // const resetBtn = document.getElementById("resetBtn");
        // const decreaseBtn = document.getElementById("decreaseBtn");
        // const Counting = document.getElementsByTagName("div");
        // let count = 0;
    
        
        // resetBtn.addEventListener("click", () => {
        //     count = 0;
        //     Counting[0].textContent = count;
        // });
        //  increaseBtn.addEventListener("click", () => {
        //      count++;
        //      Counting[0].textContent = count;
        //  });
        // decreaseBtn.addEventListener("click", () => {
        //     count--;
        //     Counting[0].textContent = count;
        // });

        let count = 0;
        let meDiv = document.getElementById("me");
        
        meDiv.addEventListener("click", function() {
      
            meDiv.style.borderRadius = "20px";
            meDiv.style.backgroundColor ="blue";
            meDiv.style.border ="none";
            meDiv.style.color ="white";
            count += 5;
    
            // Update the text inside the div to show the current count
            meDiv.textContent = count;
        });

       
        let leftSide = document.getElementById("we");
        let dark = false
    
        leftSide.addEventListener("dblclick", function() {
            
            if(dark){leftSide.style.backgroundImage = "url('the 300.jpg')";
            leftSide.style.alignItems = "center";
            leftSide.style.width = "300px";
            leftSide.style.height = "300px";
            leftSide.style.borderRadius = "10px";
            leftSide.style.cursor = "pointer";
            leftSide.style.overflow = "hidden";
            leftSide.style.backgroundSize = "cover";}

            else{leftSide.style.backgroundImage = "url('fantastic-four-2005.jpg')";
            leftSide.style.alignItems = "center";
            leftSide.style.width = "300px";
            leftSide.style.height = "300px";
            leftSide.style.borderRadius = "10px";
            leftSide.style.cursor = "pointer";
            leftSide.style.overflow = "hidden";
            leftSide.style.backgroundSize = "cover";
            }
            dark =!dark;
               
         });