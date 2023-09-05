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
        "height":"20px",
        "right":"78px"
    }) 
    z.html(``);
}
window.onload = function(){
    let a = document.querySelector("div.cum");
    let b =document.querySelectorAll("div.cum > div");
    for(c of b)
    {
        c.addEventListener("click", function(){
            if(Math.round(parseFloat($(a).children(".dynamic").css("height"))) !== 357)
            {
                $(a).children(".dynamic").html(
                `
                    <div class="dynamicthem">
                        <div class="info"><p>Iphone 14 Pro max của bé Như</p></div>
                        <div class="hinh"><img src="hinhmeo.jpg"/></div>
                    </div>  
                `)
                $(a).children(".dynamic").css({
                    "width":"213.8px",
                    "border-radius":"25px",  
                    "height":"357px",
                    "right":"4.5px",
                });
                setTimeout(set1,500,$(a).children(".dynamic").children("div.dynamicthem").children("div.info"))
            }
            else
            {
                $(a).children(".dynamic").children("div.dynamicthem").children("div.info").css({
                    "opacity":"0",
                });
                $(a).children(".dynamic").children("div.dynamicthem").children("div.hinh").css({
                    "opacity":"0",
                })
                setTimeout(set2,500,$(a).children(".dynamic"));
            }
        });
    }
}