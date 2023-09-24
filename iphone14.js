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
        "width":"67px",
        "border-radius":"30px",
        "height":"20px",
        "right":"78px"
    }) 
    z.html(``);
}
function set3(z)
{
    $(z).css({
        "width" : `${amluong}px`
    })
}
amluong=9;
window.onload = function(){
    let a = document.querySelector("div.dynamic");
    let b =document.querySelectorAll("div.cum > div");
    for(c of b)
    {
        c.addEventListener("click", function(){
            if(Math.round(parseFloat($(a).css("height"))) !== 349)
            {
                $(a).html(
                `
                    <div class="meo">
                        <div class="info"><p>Iphone 14 Pro max của bé Như</p></div>
                        <div class="hinh"><img src="hinhmeo.jpg"/></div>
                    </div>  
                `)
                $(a).css({
                    "width":"213px",
                    "border-radius":"25px",  
                    "height":"349px",
                    "right":"5px",
                });
                setTimeout(set1,500,$(a).children("div.meo").children("div.info"))
            }
            else
            {
                $(a).children("div.meo").children("div.info").css({
                    "opacity":"0",
                });
                $(a).children("div.meo").children("div.hinh").css({
                    "opacity":"0",
                })
                setTimeout(set2,500,$(a));
            }
        });
    }
    let z = document.querySelector("div.tangamluong");
    $(z).click(function(){
        if($(a).html()=== "" || $(a).children("div").attr("class") ==="meo" )
        {
           $(a).css({
                "width":"199px",
                "border-radius":"25px",  
                "height":"40px",
                "right":"12px",
            }); 
            $(a).html(
                `
                    <div class="dynamicthem">
                        <div class="amluong2"><div class="amluong1"></div></div>
                    </div>  
                `
            )
            if(amluong!==99)
            {
                amluong=amluong+6;
                setTimeout(set3,500,$(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1"))
            }
        }
        else
        {
            if(amluong!==99)
            {
                amluong=amluong+6;
                $(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1").css({
                    "width" : `${amluong}px`
                })
            }
        }
   })
   let y = document.querySelector("div.giamamluong");
   $(y).click(function(){
    if($(a).html()=== "" || $(a).children("div").attr("class") ==="meo" )
    {
       $(a).css({
            "width":"199px",
            "border-radius":"25px",  
            "height":"40px",
            "right":"12px",
        }); 
        $(a).html(
            `
                <div class="dynamicthem">
                    <div class="amluong2"><div class="amluong1"></div></div>
                </div>  
            `
        )
        if(amluong!==9)
        {
            amluong=amluong-6;
            setTimeout(set3,500,$(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1"))
        }
    }
    else
    {
        if(amluong!==9)
        {
            amluong=amluong-6;
            $(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1").css({
                "width" : `${amluong}px`
            })
        }
    }
})
}