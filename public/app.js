document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.querySelector('[name="name"]').value.trim();
    const email = document.querySelector('[name="email"]').value.trim();
    const address = document.querySelector('[name="address"]').value.trim();
    const phone = document.querySelector('[name="phone"]').value.trim();
    const message = document.querySelector('[name="message"]').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    let errorMessage = '';

    if (!name || !email || !message) {
      errorMessage = 'Please fill in all required fields.';
    } else if (!emailPattern.test(email)) {
      errorMessage = 'Invalid email format.';
    } else if (phone && !phonePattern.test(phone)) {
      errorMessage = 'Phone number must be 10 digits.';
    }

    if (errorMessage) {
      alert(errorMessage);
      e.preventDefault(); // Stop form from submitting
    }
  });

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
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
});
  

///toggle i con/////////////


let menuicon = document.querySelector(".menu-icon i"); // sirf <i> target karo
let navlist = document.querySelector(".navlist");

menuicon.onclick = () => {
  // icon swap
  if (menuicon.classList.contains("bx-menu")) {
    menuicon.classList.replace("bx-menu", "bx-x");
  } else {
    menuicon.classList.replace("bx-x", "bx-menu");
  }

  // nav toggle
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  navlist.classList.remove("open");              // menu band ho
  menuicon.classList.remove("bx-x");             // cross hat jaye
  if (!menuicon.classList.contains("bx-menu")) { // agar menu class missing hai
    menuicon.classList.add("bx-menu");           // wapas menu lagao
  }
};


/*window.onscroll = ()=>{
  menuicon.classList.remove("bx-menu");
  navlist.classList.remove("open");
} */