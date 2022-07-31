
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
});

$(".order-table-delete").on("click", function (e) {
  e.preventDefault();
  const parent = e.target.parentNode.parentNode
  parent.classList.toggle('d-none');
});


$(".search-form__clear").on("click", function (e) {
  e.preventDefault();
  const parent = e.target.parentNode
  console.log('search-form__clear ',parent);
  // parent.classList.toggle('d-none');
});

const dimensionsList =document.querySelectorAll('.check-dimensions-list a');

dimensionsList.forEach((item)=> {
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