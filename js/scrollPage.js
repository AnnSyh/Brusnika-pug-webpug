
window.addEventListener('scroll', function () {
  const cardNav = $('.card-nav');
  cardNav.hide(); // убрать меню при загрузке стр

  if ($(window).scrollTop() > 400) {
    cardNav.show();
    // console.log('scrollTop() > 400');
  }
  else {
    cardNav.hide();
    // console.log('scrollTop() <= 400');
  }

  const mainNav = $('.page-header');

  if ($(window).scrollTop() > 0) {
    mainNav.addClass('page-header-fixed');
  } else {
    mainNav.removeClass('page-header-fixed');
  }

});

$(".order-table-delete").on("click", function (e) {
  e.preventDefault();
  const parent = e.target.parentNode.parentNode
  parent.classList.toggle('d-none');
});


$(".search-form__clear").on("click", function (e) {
  e.preventDefault();
  const parent = e.target.parentNode
  console.log('search-form__clear ', parent);
  // parent.classList.toggle('d-none');
});

const dimensionsList = document.querySelectorAll('.check-dimensions-list a');

dimensionsList.forEach((item) => {
  console.log('dimensionsList');
  item.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    const item = e.target
    item.classList.toggle('active');
  });

});

// $("button.basket-open").on("click", function (e) {
//   e.preventDefault();
//   const item = e.target
//   item.classList.toggle('active');
// });

$('#catalog-basket').on("click", function (e) {
  e.preventDefault();
  const item = e.target
  item.classList.toggle('active');
});


const simplebarsList = document.querySelectorAll('.simplebar');
console.log('simplebarsList = ', simplebarsList);

simplebarsList.forEach((item) => {
  new SimpleBar(item, {
    autoHide: false,
  });
})

$('.sms-not-coming').on("click", function (e) {
  console.log('sms-not-coming');
  e.preventDefault();
  window.location = 'login.html';
  const tabs = document.querySelectorAll('.sign-with');

  tabs.forEach((item) => {
    console.log('111item.classList = ', item.classList);
    // (data-tab="#auth-form_phone") 
  });

});


// сделать при клике окрашивание границы в черный и появление подсписка

const radiosList = document.querySelectorAll('.basket-form .form-item--radio');
console.log('radiosList = ', radiosList);

radiosList.forEach((item) => {
  item.addEventListener('click', (e) => {
    const row = e.target.parentNode.parentNode.parentNode.parentNode;

    // очистить от класса .black-border   все эл-ты списка

    console.log('item3 = ', row.classList.add('black-border'));
    // console.log('item3 = ', row.classList.toggle('black-border'));
  });
})

//сделать переключение картинки при нажатии на цвета
// card.html  блок под наз/ценой товара

const tovarColorItem = document.querySelectorAll('.catalog-item .order-table__color');
const allColorLinks = document.querySelectorAll('a.order-table__color-link');
const productListLinks = document.querySelectorAll('.product-list a.product-list-link');

productListLinks.forEach((item) => {

  item.addEventListener('click', (evt) => {
    evt.preventDefault(); //for click
    const imgSrcNew = evt.target.getAttribute('data-imgsrcnew');
    const tovarMiniaturs = document.querySelectorAll('ul.product-list img');
    const cardNav = document.querySelector('.card-nav ul.product-list');
    const productHolder = document.querySelector('.product-title-holder ul.product-list');

    tovarMiniaturs.forEach((item) => {
      item.classList.remove('active');
    });
    // evt.target.classList.toggle('active');
    if( evt.target.classList.contains('product-list-img-1')){
      cardNav.querySelector('.product-list-img-1').classList.toggle('active')
      productHolder.querySelector('.product-list-img-1').classList.toggle('active')
    } else {
      cardNav.querySelector('.product-list-img-2').classList.toggle('active')
      productHolder.querySelector('.product-list-img-2').classList.toggle('active')
    }
// моб версия слайдера
    const changeImgMobile = document.querySelector('.my-gallery .slick-current.slick-active img.product-photos-gallery__img');
    if (imgSrcNew) { changeImgMobile.src = imgSrcNew }
// десктопная версия слайдера
    const changeImgDesktop = document.querySelector('.my-gallery .slick-current.slick-active img');
    if (imgSrcNew) { changeImgDesktop.src = imgSrcNew }

  });


});



