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
    $(a).children("div.dynamic").addEventListener("click", function(){
        if(Math.round(parseFloat($(a).children(".dynamic").children("div").css("height"))) !== 357)
        {
            $(a).children(".dynamic").children("div").html(
            `
                <div class="dynamicthem">
                    <div class="info"><p>Iphone 14 Pro max của bé Như</p></div>
                    <div class="hinh"><img src="hinhmeo.jpg"/></div>
                </div>  
            `)
            $(a).children(".dynamic").children("div").css({
                "width":"213.8px",
                "border-radius":"25px",  
                "height":"357px"
            });
            setTimeout(set1,500,$(a).children(".dynamic").children("div").children("div.dynamicthem").children("div.info"))
        }
        else
        {
            $(a).children(".dynamic").children("div").children("div.dynamicthem").children("div.info").css({
                "opacity":"0",
            });
            $(a).children(".dynamic").children("div").children("div.dynamicthem").children("div.hinh").css({
                "opacity":"0",
            })
            setTimeout(set2,500,$(a).children(".dynamic").children("div"));
        }
    });
}