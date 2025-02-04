let paragraph = document.createElement('p');
        paragraph.textContent = "0"
        let change = document.getElementsByTagName("div");
        let changeEvent = change[0]
        changeEvent.appendChild(paragraph)
        console.log(changeEvent)
        paragraph.style.backgroundColor = "red";
        paragraph.style.color = "white";
        paragraph.style.textAlign = "center";
        paragraph.style.width = "300px";
        paragraph.style.height = "300px";
        paragraph.style.alignContent = "center";
        paragraph.style.fontSize = "5rem";
        paragraph.style.border = "3px solid black";
        paragraph.style.borderRadius = "150px";
        paragraph.style.cursor= "pointer";


        const increaseBtn = document.getElementById("increaseBtn");
        const resetBtn = document.getElementById("resetBtn");
        const decreaseBtn = document.getElementById("decreaseBtn");
        const Counting = document.getElementsByTagName("div");
        let count = 0;
    
        
        resetBtn.addEventListener("click", () => {
            count = 0;
            Counting[0].textContent = count;
        });
         increaseBtn.addEventListener("click", () => {
             count++;
             Counting[0].textContent = count;
         });
        decreaseBtn.addEventListener("click", () => {
            count--;
            Counting[0].textContent = count;
        });