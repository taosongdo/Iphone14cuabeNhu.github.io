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
function set3(z)
{
    z.css({
        "left":`${k}px`
    })
}
function set4(z)
{
    z.css({
        "opacity":"1"
    })
}
let k=39;
window.onload = function(){
    let a = document.querySelector("div.cum");
    a.addEventListener("click", function(){
        if(Math.round(parseFloat($(a).children(".dynamic").children("div").css("height"))) === 70)
        {
            $(a).children(".dynamic").children("div").children("div.amluong").css({
                "opacity":"0",
            })
            setTimeout(set2,500,$(a).children(".dynamic").children("div"));
        }
        else if(Math.round(parseFloat($(a).children(".dynamic").children("div").css("height"))) !== 357)
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
    let b = document.querySelector("div.tangamluong");
    b.addEventListener("click",function(){
        if($(a).children(".dynamic").children("div").html() === "")
        {
            $(a).children(".dynamic").children("div").html(
            `
                <div class="amluong">
                    <div class="thanh"></div>
                    <div class="tron"></div>
                </div>   
            `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        else if($(a).children(".dynamic").children("div").children("div").attr("class") !== "amluong")
        {
            $(a).children(".dynamic").children("div").html(
                `
                    <div class="amluong">
                        <div class="thanh"></div>
                        <div class="tron"></div>
                    </div>   
                `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        $(a).children(".dynamic").children("div").css({
            "width":"213.8px",
            "border-radius":"25px",  
            "height":"70px",
        });
        k=k+20;
        if(k >=180)
        {
            k=k-20;
        }
        else
        {
            set3($(a).children(".dynamic").children("div").children("div.amluong").children("div.tron"))
        }
    })
    let c = document.querySelector("div.giamamluong");
    c.addEventListener("click",function(){
        if($(a).children(".dynamic").children("div").html() == "")
        {
            $(a).children(".dynamic").children("div").html(
            `
                <div class="amluong">
                    <div class="thanh"></div>
                    <div class="tron"></div>
                </div>   
            `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        else if($(a).children(".dynamic").children("div").children("div").attr("class") !== "amluong")
        {
            $(a).children(".dynamic").children("div").html(
                `
                    <div class="amluong">
                        <div class="thanh"></div>
                        <div class="tron"></div>
                    </div>   
                `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        $(a).children(".dynamic").children("div").css({
            "width":"213.8px",
            "border-radius":"25px",  
            "height":"70px",
        });
        k=k-20;
        if(k < 39)
        {
            k=k+20;
        }
        else
        {
            set3($(a).children(".dynamic").children("div").children("div.amluong").children("div.tron"))
        }
    })
    let t = document.querySelector("div.thongbao")
    t.addEventListener("click",function(){
        if($(a).children(".dynamic").children("div").html() == "")
        {
            $(a).children(".dynamic").children("div").html(
            `
                <div class="amluong">
                    <div class="thanh"></div>
                    <div class="tron"></div>
                </div>   
            `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        else if($(a).children(".dynamic").children("div").children("div").attr("class") !== "amluong")
        {
            $(a).children(".dynamic").children("div").html(
                `
                    <div class="amluong">
                        <div class="thanh"></div>
                        <div class="tron"></div>
                    </div>   
                `)
            setTimeout(set4,500,$(a).children(".dynamic").children("div").children("div.amluong"))
        }
        $(a).children(".dynamic").children("div").css({
            "width":"213.8px",
            "border-radius":"25px",  
            "height":"70px",
        });
        k=39;
        set3($(a).children(".dynamic").children("div").children("div.amluong").children("div.tron"))
    })
}
