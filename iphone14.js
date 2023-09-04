function set1(z){
    z.css({
        "opacity":"1",
    });
    z.siblings("div.hinh").css({
        "opacity":"1",
    })
}
function set2(z){
    z.css({
        "width":"30%",
        "border-radius":"30px",
        "height":"20px"
    }) 
    z.html(``);
}
window.onload = function(){
    let a = document.querySelector("div.cum");
    a.addEventListener("click", function(){
        if(Math.round(parseFloat($(a).children(".dynamic").children("div").css("height"))) != 358)
        {
            $(a).children(".dynamic").children("div").html(
            `
                <div class="info"><p>Iphone 14 Pro max của bé Như</p></div>
                <div class="hinh"><img src="hinhmeo.jpg"/></div>  
            `)
            $(a).children(".dynamic").children("div").css({
                "width":"213.8px",
                "border-radius":"25px",
                "height":"358px"
            });
            setTimeout(set1,500,$(a).children(".dynamic").children("div").children("div.info"))
        }
        else
        {
            $(a).children(".dynamic").children("div").children("div.info").css({
                "opacity":"0",
            });
            $(a).children(".dynamic").children("div").children("div.hinh").css({
                "opacity":"0",
            })
            setTimeout(set2,500,$(a).children(".dynamic").children("div"));
        }
    });
}
