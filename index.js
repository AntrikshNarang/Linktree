for(var i=0;i<document.querySelectorAll(".link").length;i++){
    document.querySelectorAll(".link")[i].addEventListener("mouseover",function(){
        this.classList.add("link-hoverjs");
    })
}
for(var i=0;i<document.querySelectorAll(".link").length;i++){
    document.querySelectorAll(".link")[i].addEventListener("mouseout",function(){
        this.classList.remove("link-hoverjs");
    })
}