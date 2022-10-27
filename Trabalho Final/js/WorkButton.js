var pageWrap = document.getElementById("page");
var pageSave = null;

var workWrap = document.getElementById("Work");
var btnWrap = null;

workWrap.onclick = () =>{
    pageSave = pageWrap.cloneNode(true);
    
    pageWrap.firstElementChild.remove();
    pageWrap.innerHTML= introHtml;
}

var introHtml = 
"<div class='article-selected'>" +
    "<h2>Work</h2>"+
    "<hr>"+
    "<img src='./images/Code.jpg'>"+
    "<p>"+
        "Mussum Ipsum, cacilds vidis litro abertis. Sapienin "+"monti palavris qui num significa nadis i parecilatim."+"Detraxit consequat et quo num tendi nada.Tádeprimidis, "+"eu conheço uma cachacis que podealegrar sua vidis.Quem "+"num gosta di mé, boa gentisnum é."+
    "</p>"+
    "<p>" +
        "Mussum Ipsum, cacilds vidis litro abertis. Cevadisim ampola pa arma uma pindureta.Todo mundo vê osporris que eu tomo, mas ninguém vê os tombis que eulevo!Detraxit consequat et quo num tendi nadaPraesent malesuada urna nisi, quis volutpat erathendrerit non. Nam vulputate dapibus."+
    "</p>"+
    "<div id='ExitButton'>"+
        "<img src='./images/reject.png'>"+
    "</div>"+
"</div>"