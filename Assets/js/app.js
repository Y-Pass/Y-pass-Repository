$(function() {

    /* Smooth Scroll */ /* Плавный Скрол */

    let links = document.querySelectorAll('.nav_link');
    let header = document.querySelector('.header');
    let intro = document.querySelector('.intro')
    let height0 = $(intro).offset().top;

    links.forEach(function(item) {
        let currentButton = item;

        $(currentButton).on('click', function(event) {
            event.preventDefault();

            let BlockId = $(item).data('scroll');
            let BlockOffset = $(BlockId).offset().top;

            $('html, body').animate({
                scrollTop: BlockOffset
            }, 500);

            for ( let link of links) {
                link.classList.remove('active');
            }
            currentButton.classList.add('active');

        });


    });

        document.querySelector('.nav_link').click();

    /* FIXED MENU */ /* Фиксированное Меню */

    window.addEventListener('scroll', function() {
        fixing()
    });

    window.addEventListener('DOMContentLoaded', function() {
        fixing()
    });

    function fixing() {

            let scrollPos = window.pageYOffset;
    let bookingH = document.querySelector('.booking').clientHeight;
    let introH = document.querySelector('.intro').clientHeight;
    let fixed = document.querySelector('.fixed');
    let summ = bookingH + introH;

        if(scrollPos >= summ) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

    };

    document.querySelector('.nav_link').click();

    /* MAP */  /* КАРТА */

    let mapMain = document.querySelector('.map');
    let map = document.querySelector('.location_icon');
    let map_bg = document.querySelector('.location');
    let closeMap = document.querySelector('.close_map');


    $(map).on('click', function() {


       map_bg.style.display = 'none';
       closeMap.classList.add('active');

    });

    $(closeMap).on('click', function() {

       closeMap.classList.remove('active');
       map_bg.style.display = 'block';

    });

    /* arrow down scrolling */ /* кнопка вниз скроллинг */

    let scrollBtn = document.querySelector('.down_button');

    $(scrollBtn).on('click', function(event) {
            event.preventDefault();

            let ArrowId = $(scrollBtn).data('scroll');
            let ArrowOffset = $(ArrowId).offset().top;

            console.log(ArrowOffset)

            $('html, body').animate({
                scrollTop: ArrowOffset
            }, 500);
        });


    /* FILTERING GALLERY */ /* ФИЛЬТРАЦИЯ В ГАЛЛЕРЕЕ */

    let gallBtns = document.querySelectorAll('.gallery_button');
    let gallPictures = document.querySelectorAll('.gallery_picture');

    let filter = $("[data-filter]");

    filter.on('click', function(event) {
       event.preventDefault();

        let buttonCat = $(this).data('filter');

        if(buttonCat == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {

            $('[data-cat]').each(function() {
            let pictureCat = $(this).data('cat');

            if(buttonCat != pictureCat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }

         })
       }
    });


    /* CARD SLIDER */ /* СЛАЙДЕР НОМЕРА */

    let cards = document.querySelector('.cards');

    $(cards).slick({});


    /* MODAL WINDOWS */ /* МОДАЛЬНЫЕ ОКНА */

    let modalCall = $('[data-call]');
    let modalsBg = document.querySelectorAll('.modal_bg');
    let cancel = document.querySelector('.checkIn_close');
    let hidden = $('html, body');
    let close = $('[data-close]');
    let mainModals = document.querySelectorAll('.main_checkIn');

    modalCall.on('click', function (event) {

    let $this = $(this);
    let modalId = $this.data('call');
    $(modalId).addClass('active');
    for (let modalBg of modalsBg) {
        if (modalBg.classList.contains('active')) {
            hidden.addClass('hidden')
        }
    }
    })

    close.on('click', function () {
        let $this = $(this);
        let modalParrent = $this.parents('.modal_bg');
        modalParrent.removeClass('active');
        for (let modalBg of modalsBg) {
            if (!modalBg.classList.contains('active')) {
                hidden.removeClass('hidden');
            }
        }
    });

    for (let modalBg of modalsBg) {
        modalBg.addEventListener('click', function () {
            this.classList.remove('active');
            for (let modalBg of modalsBg) {
                if (!modalBg.classList.contains('active')) {
                    hidden.removeClass('hidden');
                }
            }
        });
    }

    for (let mainModal of mainModals) {
      mainModal.addEventListener('click', function (event) {
          event.stopPropagation();
      });
    }

    /* MEDIA INQUiRYIES */ /* МЕДИА ЗАПРОСЫ */

    let screen959 = window.matchMedia('(max-width:959px)');
    let screen439 = window.matchMedia('(max-width:439px)');


    if(screen959.matches) {

    window.addEventListener('scroll', function() {
        headerClosing()
    });

    window.addEventListener('DOMContentLoaded', function() {
        headerClosing()
    });

         function headerClosing() {

         let scrollPos = window.pageYOffset;
         let headerLeft = document.querySelector('.header_left');
         let headerOffset = $(headerLeft).offset().top;
         let bookingH = document.querySelector('.booking').clientHeight;
         let introH = document.querySelector('.intro').clientHeight;
         let summ = bookingH + introH;

             if(scrollPos > summ) {
                 headerLeft.classList.add('disactive')
             } else {
                 headerLeft.classList.remove('disactive')
             }
         };
    };

/* POPUP GALLERY */ /* ПОПАП ГАЛЛЕРЕЯ */

    let mainImgs = document.querySelectorAll('.popUp_img-main');
    let popUp = document.querySelector('.popUp_gall');
    let popImg = document.getElementById('popUp_img');
    let closePopUp = document.querySelector('.popUp_close');


        mainImgs.forEach(function(mainImg) {

            mainImg.addEventListener('click', function() {

                popUp.classList.add('show');
                popImg.src = this.src;

            if(popUp.classList.contains('show')) {
                header.classList.add('none');
                hidden.addClass('hidden');
            };

            })

       closePopUp.addEventListener('click', function() {
            PopUpClosing()
        });
    })

       popUp.addEventListener('click', function() {
            PopUpClosing()
       })

       popImg.addEventListener('click', function(event) {
            event.stopPropagation();
       })

    function PopUpClosing() {
        popUp.classList.remove('show');

        if(!popUp.classList.contains('show')) {
            header.classList.remove('none');
            hidden.removeClass('hidden');
        };
    }

    /* BURGER MENU */ /* БУРГЕР МЕНЮ */

    let burgerBtn = document.querySelector('.burger_menu');
    let burgerNav = document.querySelector('.burger_nav');
    let burgerLinks = document.querySelectorAll('.nav_link--burger');
    let scrollIntro = document.querySelector('.logo_header');

    burgerBtn.addEventListener('click', function() {

        $(burgerNav).toggleClass('show');

        for( let burgerLink of burgerLinks) {
             burgerLink.addEventListener('click', function() {
                  $(burgerNav).removeClass('show');
             });
         };
    });


   let hotel = document.getElementById('hotel'),
       rooms = document.getElementById('rooms'),
       offers = document.getElementById('offers'),
       gallery = document.getElementById('gallery'),
       contact = document.getElementById('contact');

    console.log()

    intro.addEventListener('click', function() {
        burgerHidden()
    })
    hotel.addEventListener('click', function() {
        burgerHidden()
    })
    rooms.addEventListener('click', function() {
        burgerHidden()
    })
    offers.addEventListener('click', function() {
        burgerHidden()
    })
    mapMain.addEventListener('click', function() {
        burgerHidden()
    })
    contact.addEventListener('click', function() {
        burgerHidden()
    })

    function burgerHidden() {
        $(burgerNav).removeClass('show');
    }

    scrollIntro.addEventListener('click', function() {

         burgerLinks.forEach(function(item) {
             $(item).removeClass('active');
             document.querySelector('.nav_link--burger').click();
         })

    })

    /* POPUP_439 */ /* ПОПАПЫ_439 */

    if (screen439.matches) {
      mainImgs.forEach(function (mainImg) {
         mainImg.addEventListener('click', function () {
            if (popUp.classList.contains('show')) {
                popUp.classList.remove('show');
                if (!popUp.classList.contains('show')) {
                    header.classList.remove('none');
                    hidden.removeClass('hidden');
                };
            }
        })
    })
}


    /* FOOTER MODAL */ /* МОДАЛЬНОЕ ОКНО ПОДВАЛА */
    let footerModal = document.getElementById('footer_modal');
    let footerItem = document.querySelector('.footer_item')
    let points = document.querySelectorAll('.pointJS');
    for (let point of points) {
        point.addEventListener('click', function () {
            let $this = $(this)
            let pointId = $this.data('footer');
            console.log(pointId)
            $(pointId).addClass('active');
            if (footerModal.classList.contains('active')) {
                hidden.addClass('hidden');
                header.classList.add('none');
            }
        })

        footerModal.addEventListener('click', function() {
            footerModal.classList.remove('active');

            if (!footerModal.classList.contains('active')) {
                hidden.removeClass('hidden');
                header.classList.remove('none');

            }

        })

        footerItem.addEventListener('click', function(event) {
            event.stopPropagation();
        })

    }

























});
