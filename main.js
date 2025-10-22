
// main.js - EduHub interactivity
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });
  // demo submit
  document.querySelectorAll('form').forEach(f=>{
    f.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Form submitted (demo). For real submissions integrate backend.');
      this.reset();
    });
  });
});
