// RESPONSIVE MENU
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
       x.className += " responsive";
   } else {
       x.className = "topnav";
   }
}

// RESPONSIVE BOTTOM ENU
function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
       x.className += " responsive";
   } else {
       x.className = "topnav";
   }
}


// PROGRESSE BAR ON SCROLL

$(window).on('load',function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(),
    docheight = $('.container').height(),
    winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll" + totalScroll);
    $(".progressBar").css("width",totalScroll+"%");
  });

});

//SMOOTH SCROLLING ANCHOR

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

//HUITRES

//show bretagne_menu
$('#bretagne').click(function(){
    $('.oleron_menu,.normandie_menu,.mediterranee_menu,.irlande_menu').removeClass('visible').addClass('none');
    $('.bretagne_menu').removeClass('none').addClass('visible').addClass('.type_food_active');
    $('#bretagne,#normandie,#oleron,#mediterranee,#irlande').removeClass('type_food_active');
    $('#bretagne').addClass('type_food_active');
});

//show oleron_menu
$('#oleron').click(function(){
    $('.bretagne_menu,.normandie_menu,.mediterranee_menu,.irlande_menu').removeClass('visible').addClass('none');
    $('.oleron_menu').removeClass('none').addClass('visible');
    $('#bretagne,#normandie,#bretagne,#mediterranee,#irlande').removeClass('type_food_active');
    $('#oleron').addClass('type_food_active');
});

//show normandie_menu
$('#normandie').click(function(){
     $('.bretagne_menu,.oleron_menu,.mediterranee_menu,.irlande_menu').removeClass('visible').addClass('none');
     $('.normandie_menu').removeClass('none').addClass('visible');
     $('#bretagne,#oleron_menu,#oleron,#mediterranee,#irlande').removeClass('type_food_active');
     $('#normandie').addClass('type_food_active');
});

//show mediterranee_menu
$('#mediterranee').click(function(){
     $('.bretagne_menu,.oleron_menu,.normandie_menu,.irlande_menu').removeClass('visible').addClass('none');
     $('.mediterranee_menu').removeClass('none').addClass('visible');
     $('#bretagne,#oleron_menu,#oleron,#normandie,#irlande').removeClass('type_food_active');
     $('#mediterranee').addClass('type_food_active');
});

//show irlande_menu
$('#irlande').click(function(){
     $('.bretagne_menu,.oleron_menu,.normandie_menu,.mediterranee_menu').removeClass('visible').addClass('none');
     $('.irlande_menu').removeClass('none').addClass('visible');
     $('#bretagne,#oleron_menu,#oleron,#normandie,#mediterranee').removeClass('type_food_active');
     $('#irlande').addClass('type_food_active');
});

//HOMARDS ET CRUSTACÉS

//show crustace_menu
$('#crustace').click(function(){
    $('.homard_menu').removeClass('visible').addClass('none');
    $('.crustace_menu').removeClass('none').addClass('visible').addClass('.type_food_active');
    $('#homard').removeClass('type_food_active');
    $('#crustace').addClass('type_food_active');
});

//show homard_menu
$('#homard').click(function(){
    $('.crustace_menu').removeClass('visible').addClass('none');
    $('.homard_menu').removeClass('none').addClass('visible').addClass('.type_food_active');
    $('#crustace').removeClass('type_food_active');
    $('#homard').addClass('type_food_active');
});

//ENTREES

//show entrees_froides_menu
$('#entrees_froides').click(function(){
    $('.entrees_chaudes_menu').removeClass('visible').addClass('none');
    $('.entrees_froides_menu').removeClass('none').addClass('visible').addClass('.type_food_active');
    $('#entrees_chaudes').removeClass('type_food_active');
    $('#entrees_froides').addClass('type_food_active');
});

//show entrees_chaude_menu
$('#entrees_chaudes').click(function(){
    $('.entrees_froides_menu').removeClass('visible').addClass('none');
    $('.entrees_chaudes_menu').removeClass('none').addClass('visible').addClass('.type_food_active');
    $('#entrees_froides').removeClass('type_food_active');
    $('#entrees_chaudes').addClass('type_food_active');
});

//DESSERTS

//show dessert_maisons_menu
$('#desserts_maison').click(function(){
    $('.glaces_menu').removeClass('visible').addClass('none');
    $('.fromages_menu').removeClass('visible').addClass('none');
    $('.desserts_maison_menu').removeClass('none').addClass('visible');
    $('#glaces').removeClass('type_food_active');
    $('#fromages').removeClass('type_food_active');
    $('#desserts_maison').addClass('type_food_active');
});

//show glaces_menu
$('#glaces').click(function(){
    $('.desserts_maison_menu').removeClass('visible').addClass('none');
    $('.fromages_menu').removeClass('visible').addClass('none');
    $('.glaces_menu').removeClass('none').addClass('visible');
    $('#desserts_maison').removeClass('type_food_active');
    $('#fromages').removeClass('type_food_active');
    $('#glaces').addClass('type_food_active');
});

//show dessert_maisons_menu
$('#fromages').click(function(){
    $('.glaces_menu').removeClass('visible').addClass('none');
    $('.desserts_maison_menu').removeClass('visible').addClass('none');
    $('.fromages_menu').removeClass('none').addClass('visible');
    $('#glaces').removeClass('type_food_active');
    $('#desserts_maison').removeClass('type_food_active');
    $('#fromages').addClass('type_food_active');
});
