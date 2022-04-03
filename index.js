window.onscroll = () => {
    if(window.pageYOffset >= 200){
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("header").style.padding = "4px 0px";
        document.getElementById("header").style.boxShadow = "0px 0px 15px gray";
        document.getElementById("logo").style.color = "black";
        document.getElementById("menu").style.color = "black";
        document.getElementById("menu").style.fontWeight = "500";
        document.getElementById("mobile_menu").style.color = "black";
        document.getElementById("mobile_menu").style.color = "black";

    }else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.padding = "10px 0px";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("logo").style.color = "white";
        document.getElementById("menu").style.color = "white";
        document.getElementById("menu").style.fontWeight = "400";
        document.getElementById("mobile_menu").style.color = "white";
        }
}


const arrowRightLong = () => {
    document.getElementById("arrow").classList.add("fa-arrow-right-long");
    document.getElementById("arrow").classList.remove("fa-arrow-right");
}

const arrowRight = () => {
    document.getElementById("arrow").classList.add("fa-arrow-right");
    document.getElementById("arrow").classList.remove("fa-arrow-right-long");

}

let content = ["Designer", "Developer", "Web Worm", "UI Enthusiast"];

let part = 0;
let part_index = 0;
let interval_val;
let element = document.getElementById("desc_title");

let cursor = document.getElementById("cursor");

function type() {
    let text = content[part].substring(0, part_index + 1);
    element.innerHTML = text;
    part_index++;

    if(text === content[part]){
        cursor.style.display = "none";

        clearInterval(interval_val);
        setTimeout(function(){
            interval_val = setInterval(Delete, 50);
        }, 1000);
    }
}

function Delete() {
    let text = content[part].substring(0, part_index - 1);
    element.innerHTML = text;
    part_index--;

    if(text === ""){
        clearInterval(interval_val);

        if(part == (content.length - 1)){
            part = 0;
        } else {
            part++;
        }

        part_index = 0;

        setTimeout(function() {
            cursor.style.display = "inline-block";
            interval_val = setInterval(type, 100);
        }, 200);
    }
}

interval_val = setInterval(type, 100);


// scrolling behaviors on click 
document.getElementById("home").addEventListener(
    'click', ()=>{
        document.getElementById("banner_section")
        .scrollIntoView({
            behavior: "smooth"
        });
        console.log("Home clicked")
    }
);

document.getElementById("about").addEventListener(
    'click', function(){
        document.getElementById("about_section").scrollIntoView(
            {
                behavior: "smooth"
            }
        );
    }
);


document.getElementById("skills").addEventListener(
    'click', ()=> {
        document.getElementById("skills_section").
        scrollIntoView({
            behavior: "smooth"
        });
    }
);

document.getElementById("projects").addEventListener(
    'click', ()=> {
        document.getElementById("projects_section").
        scrollIntoView({
            behavior: "smooth"
        });
    }
);

document.getElementById("contact").addEventListener(
    'click', ()=> {
        document.getElementById("contact_section").
        scrollIntoView({
            behavior: "smooth"
        });
    }
);

document.getElementById("hire_btn").addEventListener(
    'click', ()=>{
        document.getElementById("contact_section").
        scrollIntoView({
            behavior: "smooth"
        });
    }
);

document.getElementById("back_to_top").addEventListener(
    'click', () => {
        document.getElementById("banner_section").
        scrollIntoView({
            behavior: "smooth"
        });
    }
);

let status = false;
function toggleNav(){
    if(status){
        document.getElementById("menu").style.display = "none";
        document.getElementById("mobile_menu").classList.add("fa-bars");
        document.getElementById("mobile_menu").classList.remove("fa-xmark");
        status = false;
    } else {
        document.getElementById("menu").style.display = "flex";
        document.getElementById("mobile_menu").classList.add("fa-xmark");
        document.getElementById("mobile_menu").classList.remove("fa-bars");
        status = true;
    }
}