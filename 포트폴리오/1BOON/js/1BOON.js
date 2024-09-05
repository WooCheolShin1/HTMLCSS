    let btn = document.querySelectorAll(".wrap .button li");
    let ilboonmenu = document.querySelectorAll(".wrap .wrapimage .swiper .swiper-wrapper");
    let sil = document.querySelector(".wrap .wrapimage");
    let arrowleft = document.querySelector(".arrowleft");
    let arrowright = document.querySelector(".arrowright");
    btn[0].querySelector("a").classList.add("on");
    ilboonmenu[0].classList.add("on");

    btn.forEach(function(v,k){
      v.onclick = function(e){
        e.preventDefault();
        buttondelete();
        btn[k].querySelector("a").classList.add("on");
        imagedelete();
        ilboonmenu[k].classList.add("on");
        console.log(ilboonmenu[k].childElementCount);

        if(ilboonmenu[k].childElementCount < 5){
          arrowleft.classList.add("off");
          arrowright.classList.add("off");
          //종류가 4개 미만일경우 화살표 사라짐.
        }
        else{
          arrowleft.classList.remove("off");
          arrowright.classList.remove("off");
        }
      }
    })

    function buttondelete(){
      btn.forEach(function(v,k){
        v.querySelector("a").classList.remove("on");
      })
    }

    function imagedelete(){
      ilboonmenu.forEach(function(v,k){
        v.classList.remove("on");
      })
    }

    var swiper = new Swiper('.wrapimage .swiper', {
      slidesPerView: 4,
      loop: true,
      speed: 600,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        nextEl: '.arrowright',
        prevEl: '.arrowleft',
      },
      autoplay: {
        delay : 3000,
        disableOnInteraction : false,  
      },
    });