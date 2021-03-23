// quiz 1
// 答錯
function wrong(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rone=document.getElementById("r-1");
    rone.style.backgroundColor="#7fff00";
    rone.style.fontSize="2em";
    rone.style.color="#270";
    rone.style.fontWeight="bold"; 
    let colOne=document.getElementById("col-1");
    let colTwo=document.getElementById("col-2");
    if(colOne.style.display="block"){
        function next(){
            setTimeout(nextOne,1000);
            function nextOne(){
                colOne.style.display="none";
                colTwo.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightOne(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let colOne=document.getElementById("col-1");
    let colTwo=document.getElementById("col-2");
    if(colOne.style.display="block"){
        function next(){
            setTimeout(nextOne,1000);
            function nextOne(){
                colOne.style.display="none";
                colTwo.style.display="block";
            }
        }
        next();
    }
}
// quiz 2
// 答錯
function wrongtw(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rtwo=document.getElementById("r-2");
    rtwo.style.backgroundColor="#7fff00";
    rtwo.style.fontSize="2em";
    rtwo.style.color="#270";
    rtwo.style.fontWeight="bold"; 
    let colTwo=document.getElementById("col-2");
    let colThree=document.getElementById("col-3");
    if(colTwo.style.display="block"){
        function next(){
            setTimeout(nextTwo,1000);
            function nextTwo(){
                colTwo.style.display="none";
                colThree.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightTwo(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let colTwo=document.getElementById("col-2");
    let colThree=document.getElementById("col-3");
    if(colTwo.style.display="block"){
        function next(){
            setTimeout(nextTwo,1000);
            function nextTwo(){
                colTwo.style.display="none";
                colThree.style.display="block";
            }
        }
        next();
    }
}
// quiz 3
// 答錯
function wrongth(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rth=document.getElementById("r-3");
    rth.style.backgroundColor="#7fff00";
    rth.style.fontSize="2em";
    rth.style.color="#270";
    rth.style.fontWeight="bold"; 
    let colThree=document.getElementById("col-3");
    let colFour=document.getElementById("col-4");
    if(colThree.style.display="block"){
        function next(){
            setTimeout(nextThree,1000);
            function nextThree(){
                colThree.style.display="none";
                colFour.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightThree(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let colThree=document.getElementById("col-3");
    let colFour=document.getElementById("col-4");
    if(colThree.style.display="block"){
        function next(){
            setTimeout(nextThree,1000);
            function nextThree(){
                colThree.style.display="none";
                colFour.style.display="block";
            }
        }
        next();
    }
}
// quiz 4
// 答錯
function wrongfo(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfo=document.getElementById("r-4");
    rfo.style.backgroundColor="#7fff00";
    rfo.style.fontSize="2em";
    rfo.style.color="#270";
    rfo.style.fontWeight="bold"; 
    let focol=document.getElementById("col-4");
    let ficol=document.getElementById("col-5");
    if(focol.style.display="block"){
        function next(){
            setTimeout(nextFour,1000);
            function nextFour(){
                focol.style.display="none";
                ficol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightFour(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let focol=document.getElementById("col-4");
    let ficol=document.getElementById("col-5");
    if(focol.style.display="block"){
        function next(){
            setTimeout(nextFour,1000);
            function nextFour(){
                focol.style.display="none";
                ficol.style.display="block";
            }
        }
        next();
    }
}
// quiz 5
// 答錯
function wrongfi(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-5");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let ficol=document.getElementById("col-5");
    let sixcol=document.getElementById("col-6");
    if(ficol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                ficol.style.display="none";
                sixcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightFive(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let ficol=document.getElementById("col-5");
    let sixcol=document.getElementById("col-6");
    if(ficol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                ficol.style.display="none";
                sixcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 6
// 答錯
function wrongsi(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-6");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let sixcol=document.getElementById("col-6");
    let secol=document.getElementById("col-7");
    if(sixcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sixcol.style.display="none";
                secol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightSix(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let sixcol=document.getElementById("col-6");
    let secol=document.getElementById("col-7");
    if(sixcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sixcol.style.display="none";
                secol.style.display="block";
            }
        }
        next();
    }
}
// quiz 7
// 答錯
function wrongse(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-7");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let secol=document.getElementById("col-7");
    let eicol=document.getElementById("col-8");
    if(secol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                secol.style.display="none";
                eicol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightSeven(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let secol=document.getElementById("col-7");
    let eicol=document.getElementById("col-8");
    if(secol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                secol.style.display="none";
                eicol.style.display="block";
            }
        }
        next();
    }
}
// quiz 8
// 答錯
function wrongei(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-8");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let eicol=document.getElementById("col-8");
    let nicol=document.getElementById("col-9");
    if(eicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                eicol.style.display="none";
                nicol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightEight(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let eicol=document.getElementById("col-8");
    let nicol=document.getElementById("col-9");
    if(eicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                eicol.style.display="none";
                nicol.style.display="block";
            }
        }
        next();
    }
}
// quiz 9
// 答錯
function wrongni(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-9");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let nicol=document.getElementById("col-9");
    let tencol=document.getElementById("col-10");
    if(nicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                nicol.style.display="none";
                tencol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightNine(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let nicol=document.getElementById("col-9");
    let tencol=document.getElementById("col-10");
    if(nicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                nicol.style.display="none";
                tencol.style.display="block";
            }
        }
        next();
    }
}
// quiz 10
// 答錯
function wrongten(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-10");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let tencol=document.getElementById("col-10");
    let elecol=document.getElementById("col-11");
    if(tencol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                tencol.style.display="none";
                elecol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightTen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let tencol=document.getElementById("col-10");
    let elecol=document.getElementById("col-11");
    if(tencol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                tencol.style.display="none";
                elecol.style.display="block";
            }
        }
        next();
    }
}
// quiz 11
// 答錯
function wrongele(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-11");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let elecol=document.getElementById("col-11");
    let twecol=document.getElementById("col-12");
    if(elecol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                elecol.style.display="none";
                twecol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightEleven(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let elecol=document.getElementById("col-11");
    let twecol=document.getElementById("col-12");
    if(elecol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                elecol.style.display="none";
                twecol.style.display="block";
            }
        }
        next();
    }
}
// quiz 12
// 答錯
function wrongtwe(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-12");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let twecol=document.getElementById("col-12");
    let thicol=document.getElementById("col-13");
    if(twecol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                twecol.style.display="none";
                thicol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightTwelve(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let twecol=document.getElementById("col-12");
    let thicol=document.getElementById("col-13");
    if(twecol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                twecol.style.display="none";
                thicol.style.display="block";
            }
        }
        next();
    }
}
// quiz 13
// 答錯
function wrongthi(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-13");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let thicol=document.getElementById("col-13");
    let foucol=document.getElementById("col-14");
    if(thicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                thicol.style.display="none";
                foucol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightThirteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let thicol=document.getElementById("col-13");
    let foucol=document.getElementById("col-14");
    if(thicol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                thicol.style.display="none";
                foucol.style.display="block";
            }
        }
        next();
    }
}
// quiz 14
// 答錯
function wrongfou(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-14");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let foucol=document.getElementById("col-14");
    let fifcol=document.getElementById("col-15");
    if(foucol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                foucol.style.display="none";
                fifcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightFourteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let foucol=document.getElementById("col-14");
    let fifcol=document.getElementById("col-15");
    if(foucol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                foucol.style.display="none";
                fifcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 15
// 答錯
function wrongfif(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-15");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let fifcol=document.getElementById("col-15");
    let sixtcol=document.getElementById("col-16");
    if(fifcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                fifcol.style.display="none";
                sixtcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightFifteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let fifcol=document.getElementById("col-15");
    let sixtcol=document.getElementById("col-16");
    if(fifcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                fifcol.style.display="none";
                sixtcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 16
// 答錯
function wrongsix(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-16");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let sixtcol=document.getElementById("col-16");
    let sevcol=document.getElementById("col-17");
    if(sixtcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sixtcol.style.display="none";
                sevcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightSixteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let sixtcol=document.getElementById("col-16");
    let sevcol=document.getElementById("col-17");
    if(sixtcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sixtcol.style.display="none";
                sevcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 17
// 答錯
function wrongsev(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-17");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let sevcol=document.getElementById("col-17");
    let eigcol=document.getElementById("col-18");
    if(sevcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sevcol.style.display="none";
                eigcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightSeventeen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let sevcol=document.getElementById("col-17");
    let eigcol=document.getElementById("col-18");
    if(sevcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                sevcol.style.display="none";
                eigcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 18
// 答錯
function wrongeig(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-18");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let eigcol=document.getElementById("col-18");
    let nincol=document.getElementById("col-19");
    if(eigcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                eigcol.style.display="none";
                nincol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightEighteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let eigcol=document.getElementById("col-18");
    let nincol=document.getElementById("col-19");
    if(eigcol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                eigcol.style.display="none";
                nincol.style.display="block";
            }
        }
        next();
    }
}
// quiz 19
// 答錯
function wrongnin(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-19");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let nincol=document.getElementById("col-19");
    let twencol=document.getElementById("col-20");
    if(nincol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                nincol.style.display="none";
                twencol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightNinteen(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let nincol=document.getElementById("col-19");
    let twencol=document.getElementById("col-20");
    if(nincol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                nincol.style.display="none";
                twencol.style.display="block";
            }
        }
        next();
    }
}
// quiz 20
// 答錯
function wrongtwen(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("r-20");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let twencol=document.getElementById("col-20");
    let text=document.getElementById("text");
    let last=document.getElementById("last");
    if(twencol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                twencol.style.display="none";
                text.style.display="none";
                last.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightTwenty(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let twencol=document.getElementById("col-20");
    let text=document.getElementById("text");
    let last=document.getElementById("last");
    if(twencol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                twencol.style.display="none";
                text.style.display="none";
                last.style.display="block";
            }
        }
        next();
    }
}