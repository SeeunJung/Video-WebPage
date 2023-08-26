const items = document.querySelectorAll("article");     //Saves all article in variable items
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(let el of items){
    el.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });

    el.addEventListener("click", e=>{
        //Storing title, text, and video's source value into variable
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        //Applying variables in aside inner element
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        //Play video in aside & add "on" to activate panel
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    //Deactivate when "close" has been clicked
    close.addEventListener("click", ()=>{
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
}