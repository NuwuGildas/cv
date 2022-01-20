let observer = new IntersectionObserver(
      (entries) => { 
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  console.log('appear');

                  console.log('width:'+entry.target.querySelector('.indicator').getAttribute('data')+'%;')
                  entry.target.querySelector('.indicator').style = 'width:'+entry.target.querySelector('.indicator').getAttribute('data')+'%;';
                  observer.unobserve(entry.target);
                }
            });
      }, 
      {
            threshold: [0.01]
      }
);
document.querySelectorAll('.skill_inf').forEach((elt) => {
      observer.observe(elt);
});
document.querySelectorAll('.languageInf').forEach((elt) => {
      observer.observe(elt);
});
window.addEventListener('scroll', e => {
      var el = document.getElementById('jsScroll');
      if(window.scrollY > 200) {
            el.classList.add('visible');
      } else {
            el.classList.remove('visible');
      }
});

function scrollToTop(el) {
      el.classList.add('animate_scroll_btn');

      window.scrollTo({
            top: 0,
            behavior: 'smooth'
      });
      setTimeout(()=>{
            el.classList.remove('animate_scroll_btn');
      },400)
}