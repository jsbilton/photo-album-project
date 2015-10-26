//using a combination of Calvin's Bitter code, notes from Nathan and also this site http://addyosmani.com/blog/building-spas-jquerys-best-friends which is doing a very similar application as this assignment calls for



$(document)ready.(function() {
// DOM ready

////////////// We need some templates - lets give it a shot -- album template, photo template, navigation bar template, and a button template at least I think /////////

var photoTemplate = _.template($('#photoTmpl').html());
  // console.log("myPhotos: ", photoTemplate);
  window.photoHTML = "";
  _.each(photoAlbum,function(elem, idx, array){
  photoHTML += photoTemplate(elem);
  console.log("photoHTML: ", photoHTML);
});




var albumTemplate = _.template($('#albumTmpl').html());
  // console.log('', albumTemplate);
  window.albumHTML= "";
  _.each(photoAlbum,function(element, idx, array){
  albumHTML += albumTemplate(elem);
  console.log("albumHTML: ", albumHTML);
});


var navbarTemplate = _.template($('#navbarTmpl').html());
  // console.log('', navbarTemplate);
  window.navbarHTML="";
  _.each(photoAlbum,function(element, idx, array){
  navbarHTML += navbarTemplate(elem);
  console.log('navbarHTML: ', navbarHTML);

});


var buttonTemplate = _.template($('#buttonTmpl').html());
  // console.log('', buttonTemplate);
  window.buttonTemplate= "";
  _.each(photoAlbum,function(element, idx, array){
  buttonHTML += buttonTemplate(elem);
  console.log('buttonHTML: ', buttonHTML);

});





// we have to merge local data (data.js) with markup to add HTML

_.each(photoAlbum, function (elem, idx, arr) {
    photoHTML += photoTemplate(elem);
  });

$('.main-container')on.('click', function(){
  console.log(this);
});














});


// $('.delete').click(function (event) {
//
//   $(this).closest('article').remove();
//
// });
//
//
// $('nav a').on('click', function (event) {
//   event.preventDefault();
//
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
//
// });
