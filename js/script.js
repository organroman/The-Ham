window.addEventListener('click', function (e) {
    e.preventDefault()
})

// Our Services section
let ourServicesMenu = document.querySelectorAll(".our-services-list-item"); // menu
let ourServicesDescription = document.querySelectorAll(".service-description");

function tabs(nav, content) {
    for (let i = 0; i < nav.length; i++) {

        nav[i].addEventListener("click", function (e) {
            e.preventDefault();

            let activeNavAttr = e.target.getAttribute("data-title");

            for (let j = 0; j < ourServicesDescription.length; j++) {
                let contentAttr = ourServicesDescription[j].getAttribute("data-description");

                if (activeNavAttr === contentAttr) {
                    nav[j].classList.add("active");
                    nav[j].classList.add("rectangle");
                    content[j].style.display = "flex";
                } else {
                    nav[j].classList.remove("active");
                    nav[j].classList.remove("rectangle");
                    content[j].style.display = 'none';
                }
            }
        });
    }
}

tabs(ourServicesMenu, ourServicesDescription)

// our amazing work section

const hoverBlocks = {
    graphic: `<div class="hover-block">
        <div class="hover-icon-wrapper">
            <div class="hover-icon-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                </svg>
            </div>
            <div class="hover-icon-item">
            <div class="icon-item-square"></div>
            </div>
        </div>
        <div class="text-wrapper">
        <p class="hover-title">amazing graphic</p>
        <p class = "hover-subtitle">graphic design</p>
        </div>
     </div>`,
    design: `<div class="hover-block">
   <div class="hover-icon-wrapper">
            <div class="hover-icon-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                </svg>
            </div>
            <div class="hover-icon-item">
                <div class="icon-item-square"></div>
            </div>
        </div>
        <div class="text-wrapper">
            <p class="hover-title">creative design</p>
            <p class = "hover-subtitle">web design</p>
        </div>
    </div>`,
    wordpress: `<div class="hover-block">
   <div class="hover-icon-wrapper">
            <div class="hover-icon-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                </svg>
            </div>
            <div class="hover-icon-item">
                <div class="icon-item-square"></div>
            </div>
        </div>
        <div class="text-wrapper">
        <p class="hover-title">useful sites</p>
        <p class = "hover-subtitle">wordpress</p>
        </div>
    </div>`,
    landing: `<div class="hover-block">
   <div class="hover-icon-wrapper">
            <div class="hover-icon-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                </svg>
            </div>
            <div class="hover-icon-item">
                <div class="icon-item-square"></div>
            </div>
        </div>
        <div class="text-wrapper">
        <p class="hover-title">simple and productive</p>
        <p class="hover-subtitle">landing pages</p>
        </div>
    </div>`,
}
const portfolio = document.getElementById('portfolio')

for (let i = 1; i <= 3; i++) {
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item" data-item ="graphic">
            ${hoverBlocks.graphic}
            <img src="./images/graphic-design/graphic-design${i}.jpg" alt="">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item" data-item ="web">
            ${hoverBlocks.design}
            <img src="./images/web-design/web-design${i}.jpg" alt="">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item" data-item ="wordpress">
            ${hoverBlocks.wordpress}
            <img src="./images/wordpress/wordpress${i}.jpg" alt="">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item" data-item ="landing">
            ${hoverBlocks.landing}
            <img src="./images/landing-page/landing-page${i}.jpg" alt="landing-pages-img">
        </div>`,
    )
}

// first click - we add 12 pictures
for (let i = 4; i <= 6; i++) {
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hidden" data-item ="graphic" >
            ${hoverBlocks.graphic}
            <img src="./images/graphic-design/graphic-design${i}.jpg" alt="graphic-design-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hidden" data-item ="web">
            ${hoverBlocks.design}
            <img src="./images/web-design/web-design${i}.jpg" alt="web-design-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hidden" data-item ="wordpress">
            ${hoverBlocks.wordpress}
            <img src="./images/wordpress/wordpress${i}.jpg" alt="wordpress-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hidden" data-item ="landing">
            ${hoverBlocks.wordpress}
            <img src="./images/landing-page/landing-page${i}.jpg" alt="">
        </div>`,
    )
}
const preloader = document.getElementById('preloader-our-work')

function addImgs() {
    const allHiddenImgs = document.querySelectorAll('.hidden')
    preloader.style.opacity = '0';
    allHiddenImgs.forEach(singleImg => {
        singleImg.classList.remove('hidden')
    })

}

// second click - we add more 12 pictures
for (let i = 7; i <= 9; i++) {
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hiddenSecond" data-item ="graphic">
            ${hoverBlocks.graphic}
            <img src="./images/graphic-design/graphic-design${i}.jpg" alt="graphic-design-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hiddenSecond" data-item ="web">
            ${hoverBlocks.design}
            <img src="./images/web-design/web-design${i}.jpg" alt="web-design-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hiddenSecond" data-item ="wordpress">
            ${hoverBlocks.wordpress}
            <img src="./images/wordpress/wordpress${i}.jpg" alt="wordpress-img">
        </div>`,
    )
    portfolio.insertAdjacentHTML(
        'afterbegin',
        `<div class="portfolio-item hiddenSecond" data-item ="landing">
            ${hoverBlocks.wordpress}
            <img src="./images/landing-page/landing-page${i}.jpg" alt="">
        </div>`,
    )
}

function addMoreImgs() {
    const allHiddenImgs = document.querySelectorAll('.hiddenSecond')

    preloader.style.opacity = '0';
    allHiddenImgs.forEach(singleImg => {
        singleImg.classList.remove('hiddenSecond')
    })
    btnLoadMore.style.opacity = '0';
}

const btnLoadMore = document.getElementById('show-more');
let countClick = 0;

btnLoadMore.addEventListener('click', (e) => {
    e.preventDefault()
    countClick++;

    if (countClick === 1) {
        preloader.style.opacity = '1';
        setTimeout(addImgs, 2000)
    }
    if (countClick === 2) {
        preloader.style.opacity = '1';
        setTimeout(addMoreImgs, 2000)
    }
})

// Our amazing work - tab filter

const ourWorkMenu = document.querySelectorAll('.our-work-filter-item');
const ourWorkItems = document.querySelectorAll('.portfolio-item');

function filterOurWork(nav, content) {
    nav.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            nav.forEach((nl) => {
                if (nl !== this) {
                    nl.classList.remove('chosen');
                }
            });
            this.classList.add('chosen');

            let activeMenuItem = e.target.getAttribute('data-menu');

            content.forEach(elem => {
                let filterItems = elem.getAttribute('data-item');
                elem.classList.remove('hide')
                if (activeMenuItem !== filterItems && activeMenuItem !== 'all') {
                    elem.classList.add('hide')
                }
            })
        })
    })
}

filterOurWork(ourWorkMenu, ourWorkItems)


// best images section
const grid = document.querySelector('.grid');

const msn = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 372,
    gutter: 20
});

imagesLoaded(grid).on('progress', function () {
    msn.layout();
});

// load more images to gallery

let galleryImages = document.querySelectorAll('.grid-item');
const preloaderGallery = document.getElementById('preloader-gallery')
const showMoreGallery = document.getElementById('show-more-gallery')

function addImg() {
    preloaderGallery.style.opacity = '0';
    let elems = [];
    const fragment = document.createDocumentFragment();

    for (let i = 4; i < 7; i++) {
        let elem = galleryImages[i].cloneNode(true);
        fragment.appendChild(elem);
        elems.push(elem);
    }
    grid.appendChild(fragment);
    msn.appended(elems);
    showMoreGallery.style.opacity = '0';
}

showMoreGallery.addEventListener('click', (e) => {
    e.preventDefault()

    preloaderGallery.style.opacity = '1';
    setTimeout(addImg, 2000)
})

