function slider () {
    const slides = document.querySelectorAll('.swiper-slide');
    const btn = document.querySelectorAll('.slider-btn');
    const tabs = document.querySelectorAll('.client-photo-small');

    let curSlide = 0;

    slides[curSlide].classList.add('active-slide');
    tabs[curSlide].classList.add('active-tab-item');

    btn.forEach(elem => {
        elem.addEventListener('click', e =>{
            e.preventDefault();
            slides[curSlide].classList.remove('active-slide');
            tabs[curSlide].classList.remove('active-tab-item');

            if (e.target.classList.contains('prev-btn')) {
                if (curSlide === 0) {
                    curSlide = slides.length - 1;
                } else {
                    curSlide--;
                }
            } else {
                if ( curSlide === slides.length - 1) {
                    curSlide = 0;
                } else {
                    curSlide++;
                }
            }
            slides[curSlide].classList.add('active-slide');
            tabs[curSlide].classList.add('active-tab-item');
        })
    });
  tabs.forEach((elem, i)=> {
      elem.addEventListener('click', e=> {
          e.preventDefault()
          slides[curSlide].classList.remove('active-slide');
          tabs[curSlide].classList.remove('active-tab-item');

          curSlide = i;
          slides[curSlide].classList.add('active-slide');
          tabs[curSlide].classList.add('active-tab-item');
      })
  })
}

slider();