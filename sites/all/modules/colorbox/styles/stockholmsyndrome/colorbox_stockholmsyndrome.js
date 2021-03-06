// $Id: colorbox_stockholmsyndrome.js,v 1.1.2.2 2010/12/02 09:15:14 frjo Exp $
(function ($) {

Drupal.behaviors.initColorboxStockholmsyndromeStyle = function (context) {
  $(document).bind('cbox_open', function () {
    // Hide close button initially.
    $('#cboxClose', context).css('opacity', 0);
  });
  $(document).bind('cbox_load', function () {
    // Hide close button. (It doesn't handle the load animation well.)
    $('#cboxClose', context).css('opacity', 0);
  });
  $(document).bind('cbox_complete', function () {
    // Show close button with a delay.
    $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
  });
};

})(jQuery);
