//your JS code here. If required.
const width = document.querySelector("h1>span:nth-child(1)");
        const height = document.querySelector("h1>span:nth-child(2)");

        window.addEventListener("resize", ()=>{
            width.innerText = window.innerWidth;
            height.innerText = window.innerHeight;
        })