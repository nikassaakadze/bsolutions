function dropDownNav(){
    document.querySelector(".responsive-navigation").style.height = "100%";
    const navlist = document.querySelector(".nav-lists")
    const respnsiveNav = document.querySelector(".responsive-nav-inner")
    respnsiveNav.appendChild(navlist)
    navlist.style.display="block"
}
function closeNav(){
    document.querySelector(".responsive-navigation").style.height = "0%";
    const navlist = document.querySelector(".nav-lists")
    const toParent = document.querySelector(".nav-lists-content")
    toParent.appendChild(navlist)
}

