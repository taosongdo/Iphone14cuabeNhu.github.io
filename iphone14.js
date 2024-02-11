var amluong = 5;
var checkMan = true;
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
    z.css({
        "width" : `${amluong}px`
    })
}
function dynamic()
{
    let a = document.querySelector("div.dynamic");
    let b =document.querySelectorAll("div.cum > div");
    for(c of b)
    {
        c.addEventListener("click", function(){
            if(Math.round(parseFloat($(a).css("height"))) !== 349 && checkMan)
            {
                $(a).html(
                `
                    <div class="meo">
                        <div class="info"><p>Iphone 14 Pro max của bé Như</p></div>
                        <div class="hinh"><img src="hinhmeo.img"/></div>
                    </div>  
                `)
                $(a).css({
                    "width":"213px",
                    "border-radius":"25px",  
                    "height":"349px",
                    "right":"5px",
                });
                setTimeout(set1,250,$(a).children("div.meo").children("div.info"))
            }
            else
            {
                $(a).children("div.meo").children("div.info").css({
                    "opacity":"0",
                });
                $(a).children("div.meo").children("div.hinh").css({
                    "opacity":"0",
                })
                setTimeout(set2,250,$(a));
            }
        });
    }
}
function tangamluong(){
    let a = document.querySelector("div.dynamic");
    let z = document.querySelector("div.tangamluong");
    z.addEventListener("click",function(){
        if(checkMan)
        {
            if(($(a).html()=== "" || $(a).children("div").attr("class") ==="meo"))
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
                if(amluong!==95)
                {
                    amluong=amluong+6
                }
                setTimeout(set3,500,$(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1"))
            }
            else
            {
                if(amluong!==95)
                {
                    amluong=amluong+6;
                    $(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1").css({"width" : `${amluong}px`})
                }
            }
        }
   })
}
function giamamluong(){
    let a = document.querySelector("div.dynamic");
    let y = document.querySelector("div.giamamluong");
    y.addEventListener("click",function()
    {
        if(checkMan)
        {
            if($(a).html()=== "" || $(a).children("div").attr("class") ==="meo")
            {
                $(a).css(
                {
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
                if(amluong!==5)
                {
                    amluong=amluong-6;
                }
                setTimeout(set3,500,$(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1"))
            }
            else
            {
                if(amluong!==5)
                {
                    amluong=amluong-6;
                    $(a).children("div.dynamicthem").children("div.amluong2").children("div.amluong1").css({"width" : `${amluong}px`})
                }
            }
        }
    })
}
function bamSMH(){
    let a = document.querySelector("div.dynamic");
    var khung = document.querySelector(".manhinh")
    khung.addEventListener("click",function(){
        if($(khung).css("opacity")==="0")
        {
            $(khung).css({"opacity":"1"})
            checkMan = true;
        }
    })
}
function nguon(){
    let a = document.querySelector("div.dynamic");
    var nguon = document.querySelector(".nguon")
    var khung = document.querySelector(".manhinh")
    nguon.addEventListener("click",function(){
        if($(khung).css("opacity") === "0")
        {
            $(khung).css({"opacity":"1"})
            checkMan = true;
        }
        else
        {
            checkMan = false;
            $(khung).css("opacity","0")
            setTimeout(set2,250,$(a))
        }
    })
}
window.onload = function(){
    dynamic();
    bamSMH();
    tangamluong();
    giamamluong();
    nguon();
}
