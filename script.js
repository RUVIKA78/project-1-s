//mouse on rectangle shows red color when hovered in left side and blue when hovered in left side as we move intensity of the color should change

var rect = document.querySelector(".rectangle")

rect.addEventListener("mousemove", function (details) {
    var rectloc = rect.getBoundingClientRect();
    var insiderect = details.clientX - rectloc.left;

    if (insiderect < rectloc.width / 2) {
        var redcol = gsap.utils.mapRange(0, rectloc.width / 2, 255, 0, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcol},0,0)`,
            ease: Power4 
        });
    } else {
        var bluecol = gsap.utils.mapRange(rectloc.width / 2, rectloc.width, 0, 255, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecol})`,
            ease: Power4
        });
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white"
    })
        ;
})
