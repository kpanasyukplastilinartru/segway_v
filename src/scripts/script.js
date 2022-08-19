const swiperProd = new Swiper('.prod-slider', {
    loop: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.prod-slider__next',
        prevEl: '.prod-slider__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

/* табы */

const tabs = document.querySelectorAll('.c__tab');
const tabBlocks = document.querySelectorAll('.c__picture');

tabs?.forEach(tab =>{
  tab.addEventListener('click', ()=>{

    tabs.forEach(tb =>{
      tb.classList.remove('c__tab--blue')
    });

    tab.classList.add('c__tab--blue');
    let tabId = tab.id;

    console.log(tabId);

    tabBlocks.forEach(block =>{
      let blockId =  block.dataset.tab;
      
      if(tabId == blockId){
        block.classList.add('active')
      } else{
        block.classList.remove('active')
      }
    })
  })
})

/* / табы */


/* var init = false;

function swiperCard() {
  if (window.innerWidth <= 1375) {
    if (!init) {
      init = true;
      swiper = new Swiper('.traid-slider', {
        loop: true,
        slidesPerView: 4,
        navigation: {
            nextEl: '.traid-slider__next',
          },
    });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard); */


window.addEventListener('resize', () => {
  if (window.innerWidth <= 1375) {
    const newSwiper = new Swiper('.traid-slider', {
                
      loop: true,
      slidesPerView: 4,
      navigation: {
          nextEl: '.traid-slider__next',
      },

    });
    
  } else {
    newSwiper.destroy();
  }
});

window.addEventListener('resize', () => {
  if ( window.innerWidth <= 1375) {
    const newSwiper2 = new Swiper('.accessories__slider', {
                
      loop: true,
      slidesPerView: 2.3,
      spaceBetween: 15,
      navigation: {
          nextEl: '.traid-slider__next',
      },

    });

  } else {
    newSwiper2.destroy();
  }
});

