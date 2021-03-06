document.addEventListener("DOMContentLoaded", function() {
    load_navpane();
});

function load_navpane() {
    var width = window.innerWidth;
    if (width <= 1200) {
        return;
    }

    var nav = document.getElementsByClassName("md-nav");
    for(var i = 0; i < nav.length; i++) {
        if (typeof nav.item(i).style === "undefined") {
            continue;
        }

        if (nav.item(i).getAttribute("data-md-level") && nav.item(i).getAttribute("data-md-component")) {
            nav.item(i).style.display = 'block';
            nav.item(i).style.overflow = 'visible';
        }
    }

    var nav = document.getElementsByClassName("md-nav__toggle");
    for(var i = 0; i < nav.length; i++) {
       nav.item(i).checked = true;
    }
}
window.addEventListener('click', function (event) {
    setTimeout(() => {
        if (event.target.className === 'md-nav__link') {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        }
    }, 200);
    //fallback if page do not rendered in 200ms
    setTimeout(() => {
        if (event.target.className === 'md-nav__link') {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        }
    }, 200);
});

hljs.initHighlightingOnLoad();
