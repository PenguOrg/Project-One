// Javascript functions
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

const success = document.getElementById('success');

form.onsubmit = submit;

function submit(event) {
  success.removeAttribute('hidden');

  event.preventDefault(); //This stops it from actually submitting data.
}
