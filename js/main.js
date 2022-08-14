let nav = document.querySelector("nav.navbar"),
    menu= document.querySelector(".navbar .navbar__container>ul");

document.addEventListener("scroll" , (e) => {
    let pageScroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;

    if(pageScroll > navPosition + 0.5){
        nav.classList.add("navbar--show");
    }
    else{
        nav.classList.remove("navbar--show");
    }
});


if(document.body.classList.contains("landing-page")){

    let navLink = document.querySelectorAll(".navbar .navbar__container>ul>li>a");
    for(let n=0; n < navLink.length; n++){
        navLink[n].addEventListener("click" , function(e){
                let target = "#" + navLink[n].getAttribute("href");
                e.preventDefault();
                window.scrollTo({
                    top:document.querySelector(target).offsetTop - 70,
                    behavior : "smooth"
                })
        })
    }

    let sections = document.querySelectorAll(".section-container");

    window.onscroll = () => {

        for(let s = 0 ; s < sections.length ; s++){
            let scrollPosition = document.documentElement.scrollTop + 75 || document.body.scrollTop +75;

            if(sections[s] && sections[s].offsetTop <= scrollPosition){
                let id = sections[s].getAttribute("id");
                document.querySelector(".active").classList.remove("active");
                document.querySelector("a[href*=" + id + "]").classList.add("active");
            }
        }
    }
}

if(document.body.classList.contains("landing-page")){
    let menuButton = document.querySelector(".phone-menu");

    menuButton.addEventListener("click",function(){
        nav.classList.toggle("navbar--show-phone");
        menu.classList.toggle("show-list")
    })

    let serviceSection = document.querySelector(".services"),
        downArrow = document.querySelector(".down-arrow");

        downArrow.addEventListener("click", function(e){
            e.preventDefault();
            window.scrollTo({
                top : serviceSection.offsetTop - 70,
                behavior: "smooth"
            })
        })
}

let projectImage = document.querySelectorAll(".project-image"),
    projectImageLength = projectImage.length;
let layer = document.querySelector(".layer"),
    layerClose = document.querySelector(".layer .layer-container i"),
    layerImg = document.querySelector(".layer .layer-container img");

if(document.body.classList.contains("project")){

    layerClose.addEventListener("click",function(){
        layer.classList.remove("layer-show");
    });

    for(let i=0 ; i < projectImageLength ; i++){
        projectImage[i].addEventListener("click",function(){
            let imageSrc = projectImage[i].getAttribute("src");
            layerImg.setAttribute("src",imageSrc);
            layer.classList.add("layer-show");
        })
    }
}

