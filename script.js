const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const projectObserver = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
  }
  else{
      entry.target.classList.remove('active');
  }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const project = document.querySelector('.active');
project.forEach((el) => projectObserver.observe(el));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("title").style.fontSize = "25px"; 
  } else {
    document.getElementById("title").style.fontSize = "40px"; 
  }
}