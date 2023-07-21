

const menuIcon = document.querySelector('.bxs-grid');
const Nav = document.querySelector(".nav")
menuIcon.addEventListener("click",()=>{
    Nav.classList.toggle("active");
    menuIcon.classList.toggle("bx-x")
})
const search = document.querySelector('.search');
const searchIcon =document.querySelector('.click-search');

searchIcon.addEventListener("click",()=>{
     search.classList.toggle("show");
})

let moonIcon = document.querySelector(".bxs-moon");
moonIcon.addEventListener("click",() =>{
     moonIcon.classList.toggle("bxs-sun");
     if(moonIcon.classList.contains("bxs-sun")){
          document.querySelector("#dark").innerHTML ="linght";
          document.querySelector(":root").style.backgroundColor = "black"
     }
     else{
          document.querySelector("#dark").innerHTML ="Dark";
          document.querySelector(":root").style.backgroundColor = "rgba(226, 226, 234, 0.68)"
     }


     

})

// swiper slide
//    var swiper = new Swiper(".mySwiper", {
//      slidesPerView: 3,
//      spaceBetween: 30,
//      freeMode: true,
//      pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//      },
//    });

