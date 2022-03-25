//=======================Valuta click=================//

const usd = document.querySelector("#header #usd")
const dropLi = document.querySelector("#header .drop-li")

usd.onclick = function(){
  dropLi.classList.toggle("active-drop-li")
}

//========responsive-menu===========//
const navToggler = document.querySelectorAll("#nav-toggler")
const subMenu = document.querySelectorAll(".sub-menu")
const navIcon = document.getElementById("nav-menu-icon")
const aside = document.getElementById("aside")
const backIcon = document.getElementById("back-left-icon")

for(let i=0; i<navToggler.length; i++){
  navToggler[i].onclick = function(){
      subMenu[i].classList.toggle("active-sub-menu")
  }
}

navIcon.onclick = function(){
  aside.classList.add("active-aside")
  backIcon.onclick = function(){
      aside.classList.remove("active-aside")
  }
}

//==================tab-menu=======================/

const liTab = document.querySelectorAll(".li-tab")
const formTab = document.getElementsByTagName("form")


for(let p=0; p<liTab.length; p++){

  liTab[p].onclick = function(){

    for(let a=0; a<formTab.length; a++){

      formTab[a].classList.remove('active-form')
      liTab[a].classList.remove("active-li")
    }

    liTab[p].classList.add("active-li")
    formTab[p].classList.add("active-form")
  }
}



//========================================================//
$(()=>{

    $('.slayder-content').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})
