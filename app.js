// Sticky navbar on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Advice Form
const adviceForm = document.getElementById("advice-form");
if (adviceForm) {
  adviceForm.addEventListener("submit", function () {
    console.log("✅ Advice form submitted");
    // No preventDefault → it will POST to /advice (server.js handles DB insert)
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function () {
    console.log("✅ Contact form submitted");
    // No preventDefault → it will POST to /contact (server.js handles DB insert)
  });
}

//================== NAVBAR TOGGLE ==================
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};




/*Toggle icon navbar for mobile
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};*/

// Smooth Scroll to Section
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });

});

const ScrollScale=document.querySelectorAll(".scroll-scale");
ScrollScale.forEach((el)=>observer.observe(el));

const ScrollBottom=document.querySelectorAll(".scroll-bottom");
ScrollScale.forEach((el)=>observer.observe(el));

const ScrollTop=document.querySelectorAll(".scroll-top");
ScrollScale.forEach((el)=>observer.observe(el));



//active muny//
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
  
}

activeMenu();
window.addEventListener("scroll",activeMenu);   

//STICKY NAVBAER//
//const header = document.querySelector("header");
/*window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
});*/
