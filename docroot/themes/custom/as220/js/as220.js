;(function($, Drupal, w, doc){
  "use strict";

  // Toggle the menu
  $('.menu-toggle').on('tap click', function(e) {
    $('body').toggleClass('active-menu');
    e.preventDefault();
  });

  // Toggle menu accordion sections
  $('.menu .has-children').on('tap click', function (e) {
    $(this).toggleClass('active-menu-parent');
    e.stopPropagation();
  });

  // Allow section header links to pass through
  $('.menu .has-children a').on('tap click', function (e) {
    window.location = this.href;
    e.stopPropagation();
  });

})(jQuery, Drupal, this, this.document);

// Load Montserrat font
WebFontConfig = {
   google: { families: [ 'Montserrat:400,700:latin' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
