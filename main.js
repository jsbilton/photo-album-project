//using a combination of Calvin's Bitter code, notes from Nathan and also this site http://addyosmani.com/blog/building-spas-jquerys-best-friends which is doing a very similar application as this assignment calls for

// I could never get my data to work and I couldn't get Calvins code to post in browser so this is a great deal of guesswork


$(document)ready.(function() {
// DOM ready

// We need some templates - lets give it a shot -- album template, photo template, navigation bar template, and a button template for starters //

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


// need to loop through each one of the albums

_.each('.album-one album', function(elem){
  photoHTML += photoTemplate(elem);
});

$('.album-one album').append(photoHTML)
  photoHTML = "";

_.each('.album-two album', function(elem){
  photoHTML += photoTemplate(elem);
});

$('.album-two album').append(photoHTML)
  photoHTML = "";

_.each('.album-three album', function(elem){
  photoHTML += photoTemplate(elem);
});

$('.album-three album').append(photoHTML)
  photoHTML = "";

_.each('.album-four album', function(elem){
  photoHTML += photoTemplate(elem);
});


$('.album-four album').append(photoHTML)
  photoHTML = "";

_.each('.album-five album', function(elem){
  photoHTML += photoTemplate(elem);
});

$('.album-five album').append(photoHTML)
  photoHTML = "";

_.each('.album-six album', function(elem){
  photoHTML += photoTemplate(elem);
  });

$('.album-six album').append(photoHTML)
  photoHTML = "";








});

// this is the delete event that will remove when clicked

// $('.delete').click(function (event) {
//
//   $(this).closest('article').remove();
//
// });
//

// navagation click event here along with a prevent default behavior

// $('nav a').on('click', function (event) {
//   event.preventDefault();
//
//     var clickedSection = "." + $(this).attr('rel');
//     console.log(clickedSection);
//     $(clickedSection).addClass('active-section');
//     $(clickedSection).siblings('section').removeClass('active-section');
//
// });
