//How often do you play video games? - options
//rarely
var rare = document.getElementById("rare");
//occasionally
var occas = document.getElementById("occas");
//regular
var regu = document.getElementById("regu");
//very frequently
var veryf = document.getElementById("veryf");
//for submit
var s1;
//Checks if radio button is checked or unchecked
rare.addEventListener("change", function() {
    if (rare.checked) {
        occas.checked = false;
        regu.checked = false;
        veryf.checked = false;
        s1 = "Rare"
    }
});

occas.addEventListener("change", function() {
    if (occas.checked) {
        rare.checked = false;
        regu.checked = false;
        veryf.checked = false;
    }
});

regu.addEventListener("change", function() {
    if (regu.checked) {
        occas.checked = false;
        rare.checked = false;
        veryf.checked = false;
    }
});

veryf.addEventListener("change", function() {
    if (veryf.checked) {
        occas.checked = false;
        regu.checked = false;
        rare.checked = false;
    }
});


//How would you rate the overall enjoyment of the game? - options
//excellent
var exce = document.getElementById("exce");
//good
var good = document.getElementById("good");
//neutral
var neut = document.getElementById("neut");
//fair
var fair = document.getElementById("fair");
//poor
var poor = document.getElementById("poor");

exce.addEventListener("change", function() {
    if (exce.checked) {
        good.checked = false;
        neut.checked = false;
        fair.checked = false;
        poor.checked = false;
    }
});

good.addEventListener("change", function() {
    if (good.checked) {
        exce.checked = false;
        neut.checked = false;
        fair.checked = false;
        poor.checked = false;
    }
});

neut.addEventListener("change", function() {
    if (neut.checked) {
        good.checked = false;
        exce.checked = false;
        fair.checked = false;
        poor.checked = false;
    }
});

fair.addEventListener("change", function() {
    if (fair.checked) {
        good.checked = false;
        neut.checked = false;
        exce.checked = false;
        poor.checked = false;
    }
});

poor.addEventListener("change", function() {
    if (poor.checked) {
        good.checked = false;
        neut.checked = false;
        fair.checked = false;
        exce.checked = false;
    }
});

//Did you encounter any technical issues while playing the game? (eg., bugs, glitches, crashes)? - options
//For technical feedback (yes/no) options
var yes = document.getElementById("yes");
var no = document.getElementById("no");

yes.addEventListener("change", function() {
    if (yes.checked) {
        no.checked = false; 
    }
});

no.addEventListener("change", function() {
    if (no.checked) {
        yes.checked = false; 
    }
});

//How challenging did you find the game?
//very easy
var veasy = document.getElementById("veasy");
//kita naman na
var easy = document.getElementById("easy");
//Moderate :)
var mode = document.getElementById("mode");
//Difficult >:(
var diff = document.getElementById("diff");
//Very Difficult <3
var vdiff = document.getElementById("vdiff");

veasy.addEventListener("change", function() {
    if (veasy.checked) {
        easy.checked = false;
        mode.checked = false;
        diff.checked = false;
        vdiff.checked = false;
    }
});

easy.addEventListener("change", function() {
    if (easy.checked) {
        veasy.checked = false;
        mode.checked = false;
        diff.checked = false;
        vdiff.checked = false;
    }
});

mode.addEventListener("change", function() {
    if (mode.checked) {
        easy.checked = false;
        veasy.checked = false;
        diff.checked = false;
        vdiff.checked = false;
    }
});

diff.addEventListener("change", function() {
    if (diff.checked) {
        easy.checked = false;
        mode.checked = false;
        veasy.checked = false;
        vdiff.checked = false;
    }
});

vdiff.addEventListener("change", function() {
    if (vdiff.checked) {
        easy.checked = false;
        mode.checked = false;
        diff.checked = false;
        veasy.checked = false;
    }
});

//Were the game instructions clear and easy to understand? - Options
//yes and no options again here so different variables JAHSJAHJASH
//yes
var y = document.getElementById("y");
//no
var n = document.getElementById("n");
//somewhat
var some = document.getElementById("some");

y.addEventListener("change", function() {
    if (y.checked) {
        n.checked = false; 
        some.checked = false; 
    }
});

n.addEventListener("change", function() {
    if (n.checked) {
        y.checked = false; 
        some.checked = false; 
    }
});

some.addEventListener("change", function() {
    if (some.checked) {
        n.checked = false; 
        y.checked = false; 
    }
});

//On a scale of 1 to 10, how likely are you going to play this game again?
//scales na, mahirap haha
//for slider to
var slide = document.getElementById("slider");
//para sa text na mag iidentify ng current value sa slider
var text = document.getElementById("slval");

//para malaman yung current value ng slider. Na if 4 value ng sa slider, 4 ipapalabas sa p element. Max is 10, min is 1
//event na input para ma update lagi yung paragraph element ng value sa slider
slide.addEventListener("input", function() {
    text.innerHTML = slide.value;
});

//Would you recommend this game to your friends or classmates?
//another yes and no so diff variables again
//yes
var yep = document.getElementById("ye");
//no
var nope = document.getElementById("nop");
//maybe
var maybe = document.getElementById("mayb");

yep.addEventListener("change", function() {
    if (yep.checked) {
        nope.checked = false; 
        maybe.checked = false; 
    }
});

nope.addEventListener("change", function() {
    if (nope.checked) {
        yep.checked = false; 
        maybe.checked = false; 
    }
});

maybe.addEventListener("change", function() {
    if (maybe.checked) {
        nope.checked = false; 
        yep.checked = false; 
    }
});

var nam = document.getElementById("namef");

var section1 = {
    Name: nam.value
}
//for form submission
var mail = document.getElementById("body");
mail.value = JSON.stringify(section1);