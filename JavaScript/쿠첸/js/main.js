let head_bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub > ul");
function myfnc(){
  gnb.forEach(function(v,k){
    v.querySelector("a").classList.remove("on");
  })
  sub.forEach(function(v,k){
    v.classList.remove("on");
    v.style.height = 0 + "px";
  })
  head_bg.style.height = 0+"px";
  head_bg.style.background = "none";
}

gnb.forEach(function(v,k){
  v.onmouseenter = function(){
    head_bg.style.backgroundColor = "#fff";
    document.querySelector(".logo img").src = "images/logo-d.svg";
    try{
      subUl.forEach(function(){
        let ht = subUl[k].offsetHeight;
        console.log(ht);
        gnb[k].querySelector(".sub").style.height = ht + "px";
        gnb[k].querySelector(".sub").classList.add("on");
        head_bg.style.height = ht+"px";
      })
    }
    catch(error){
      head_bg.style.height = 80+"px";
      head_bg.style.background = "#fff";
    }
  }
  v.onmouseleave = function(){
    myfnc();  
  }
})

head_bg.onmouseenter = function(){
  gnb.forEach(function(v,k){
    v.querySelector("a").classList.add("on");
  })
  head_bg.style.height = 80+"px";
  head_bg.style.background = "#fff";
}

head_bg.onmouseleave = function(){
  myfnc();
  gnb.forEach(function(v,k){
    v.querySelector("a").classList.remove("on");
  })
}