var tablink = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tab-contents){
        tabcontent.classList.remove("active-tab");

    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}