var currentDate = moment();
// console.log(currentDate);
// console.log(moment());
var currentTime = moment().format("hA");
console.log(currentTime);
// $('textarea').css('background', 'red') 


$('#currentDay').text(currentDate);

const available = document.querySelectorAll('time-block')
// let innerDom = $('.hour').text();
// console.log(innerDom);

// let innerDomIdk = () => {
//   let innerDom = $('.hour').text().split("  ");
//   console.log(innerDom);
// }

// innerDomIdk();

$('.log').each(function() {
  let innerDom = $('.hour').text().split("  ");
  innerDom.each()

  if (innerDom == currentTime) {
    $(this).addClass("present");
    $(this).removeClass("past");
        
    } else if (innerDom > currentTime) {
    $(this).removeClass("present");
    $(this).addClass("future");

    } else if (innerDom < currentTime) {
    $(this).removeClass("future");
    $(this).addClass("past");
    }
})



// $('p').each(function() {
//   $(this).addClass('present')
// });


