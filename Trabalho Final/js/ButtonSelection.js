var pageWrap = document.getElementById("page")
var pageSave = null;

var introWrap = document.getElementById("Intro")
var workWrap = document.getElementById("Intro")
var aboutintroWrap = document.getElementById("Intro")
var contactWrap = document.getElementById("Intro")

introWrap.onclick = () =>{
    pageSave = pageWrap.cloneNode(true);

    pageWrap.firstElementChild.remove();
    pageWrap.classList.toggle("flex-centralized")
    pageWrap.classList.toggle("article-selected")
    pageWrap.innerHTML= introHtml;
}

var introHtml = "<div class='container article-selected'>"+
"<h2>Intro</h2>"+
"<hr>"+
"<img src='./images/personWalking.jpg'>"+
"<p>"+
"Mussum Ipsum, cacilds vidis litro abertis. Sapien in "+"montipalavris qui num significa nadis i pareci latim."+"Detraxitconsequat et quo num tendi nada.Tá deprimidis, eu "+"conheçouma cachacis que pode alegrar sua vidis.Quem num gosta "+"dimé, boa gentis num é."+
"</p>"+
"<p>"+
"Mussum Ipsum, cacilds vidis litro abertis. Cevadis imampola pa "+"arma uma pindureta.Todo mundo vê os porris que eutomo, mas "+"ninguém vê os tombis que eu levo!Detraxitconsequat et quo num "+"tendi nada.Praesent malesuada urnanisi, quis volutpat erat "+"hendrerit non. Nam vulputatedapibus."+
"</p>"+
"<div id='ExitButton'>"+
"<img src= './images/reject.png'>"+
"</div>"+
"</div>"