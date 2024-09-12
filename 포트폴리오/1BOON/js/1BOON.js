    //===============================헤더 부분===================================//
    let wheellist = document.getElementById("scrollList");

    $(window).scroll(function() {
      let wheelscroll = $(document).scrollTop();
      console.log(wheelscroll);
      if(wheelscroll == 0){
        wheellist.style.backgroundColor = "transparent";
      }
      else if(wheelscroll > 0){
        wheellist.style.backgroundColor = "#fff";
      }
    });
    //=========================================================================//

    //===============================로그인 부분================================//
    $("input[id='autologin']").change(function(){
      var text = $("input[id='autologin']:checked").val();
      if(confirm("자동로그인을 사용하시면 다음부터 회원아이디와 비밀번호를 입력하실 필요가 없습니다.\n\n공공장소에서는 개인정보가 유출될수 있으니 사용을 자제하여 주십시오.\n\n자동로그인을 사용하시겠습니까?") == true){
        $("#autologin").prop("checked", true);
      }
      else{
        $("#autologin").prop("checked", false);
      }
    })
    //========================================================================//

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
        // console.log(ilboonmenu[k].childElementCount);

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
      speed: 500,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      freemode: true,
      navigation: {
        nextEl: '.arrowright',
        prevEl: '.arrowleft',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction : false,
      },
    });

  //  let options = 'width=400, height=400'
  //  window.open('popup.html', '_blank', options)