var pageWrap = document.getElementById("page");
var introWrap = document.getElementById("Intro");
var workWrap = document.getElementById("Work");
var aboutWrap = document.getElementById("About");
var closebtnWrap = null;
var pageSave = null;

const r = document.querySelector(':root');

window.addEventListener("mousemove", function(){
    pageWrap = document.getElementById("page");
    introWrap = document.getElementById("Intro");
    aboutWrap = document.getElementById("About");
    workWrap = document.getElementById("Work");
})

window.addEventListener("mousemove", () => {
    pageWrap = document.getElementById("page");
    introWrap = document.getElementById("Intro");
    aboutWrap = document.getElementById("About");
    workWrap = document.getElementById("Work");

    // Work button
    introWrap.onclick = () =>{
            pageWrap.classList.add("fadingEffect");
            pageWrap.style.setProperty("opacity", 0);
            pageWrap.style.setProperty("transform", "scale(0.8)")

            setTimeout(function () {
                pageWrap.style.setProperty("transform", "scale(1)")
                pageSave = pageWrap.cloneNode(true);
                r.style.setProperty('--border-margin', '85%');
                pageWrap.innerHTML= creatArticleHtml('Intro',   'personWalking.jpg', content1, content2);

                pageWrap.style.setProperty("opacity", 1);

                closebtnWrap = document.getElementById  ("ExitButton");

                closebtnWrap.onclick = () =>{
                    pageWrap.style.setProperty("opacity", 0);
                    setTimeout(function () {
                        pageWrap.innerHTML = pageSave.innerHTML;
                        pageWrap.style.setProperty("opacity", 1); 
                    }, 1000);                    
                }
            }, 1000);            
    }

    // About button
    aboutWrap.onclick = () =>{
        pageWrap.classList.add("fadingEffect");
        pageWrap.style.setProperty("opacity", 0);
        pageWrap.style.setProperty("transform", "scale(0.8)")

        setTimeout(function () {
            pageWrap.style.setProperty("transform", "scale(1)")
            pageSave = pageWrap.cloneNode(true);
            r.style.setProperty('--border-margin', '85%');
            pageWrap.innerHTML= creatArticleHtml('About', 'mountain.jpg', content1, content2);

            pageWrap.style.setProperty("opacity", 1);

            closebtnWrap = document.getElementById  ("ExitButton");

            closebtnWrap.onclick = () =>{
                pageWrap.style.setProperty("opacity", 0);
                setTimeout(function () {
                    pageWrap.innerHTML = pageSave.innerHTML;
                    pageWrap.style.setProperty("opacity", 1); 
                }, 1000);                    
            }
        }, 1000);            
    }

    //Work button
    workWrap.onclick = () =>{
        pageWrap.classList.add("fadingEffect");
        pageWrap.style.setProperty("opacity", 0);
        pageWrap.style.setProperty("transform", "scale(0.8)")

        setTimeout(function () {
            pageWrap.style.setProperty("transform", "scale(1)")
            pageSave = pageWrap.cloneNode(true);
            r.style.setProperty('--border-margin', '85%');
            pageWrap.innerHTML= creatArticleHtml('Work', 'Code.jpg', content1, content2);

            pageWrap.style.setProperty("opacity", 1);

            closebtnWrap = document.getElementById  ("ExitButton");

            closebtnWrap.onclick = () =>{
                pageWrap.style.setProperty("opacity", 0);
                setTimeout(function () {
                    pageWrap.innerHTML = pageSave.innerHTML;
                    pageWrap.style.setProperty("opacity", 1); 
                }, 1000);                    
            }
        }, 1000);            
    }
});

var content1 = 'Mussum Ipsum, cacilds vidis litro abertis. Cevadisim ampola pa arma uma pindureta.Todo mundo vê osporris que eu tomo, mas ninguém vê os tombis que eulevo!Detraxit consequat et quo num tendi nadaPraesent malesuada urna nisi, quis volutpat erathendrerit non. Nam vulputate dapibus.'
var content2 = "Mussum Ipsum, cacilds vidis litro abertis. Cevadisim ampola pa arma uma pindureta.Todo mundo vê osporris que eu tomo, mas ninguém vê os tombis que eulevo!Detraxit consequat et quo num tendi nadaPraesent malesuada urna nisi, quis volutpat erathendrerit non. Nam vulputate dapibus."

function creatArticleHtml(title, imagepath, content1, content2){
    var articleHtml = 
    "<div class='article-selected'>" +
        "<h2>"+ title +"</h2>"+
        "<img src='./images/" + imagepath +"'>"+
        "<p>"+
            content1 +
        "</p>"+
        "<p>" +
            content2+
        "</p>"+
        "<div id='ExitButton'>"+
            "<img src='./images/reject.png'>"+
        "</div>"+
    "</div>"
    return articleHtml;
}
