function AnimateIt() {
    var theDiv = $("#movinglink"),
        theContainer = $("#container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        imgRight = "http://f00.inventorspot.com/images/goldfish.jpg",
        imgLeft = "http://2.bp.blogspot.com/-F8s9XEIBSsc/T41x37x9w1I/AAAAAAAAB9A/cDfFJLCERII/s1600/Goldfish-1600x1200.jpg";
    
    if (theDiv.position().left < leftPos) {
        theDiv.attr("src", imgRight);
    } else {
        theDiv.attr("src", imgLeft);
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 2000, AnimateIt);
}
AnimateIt();