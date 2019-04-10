$(document).ready(function() {
  const jumpLinkButton = document.getElementById('jumpLink');
  const TARGETX_INPUT_ID = $('#tfa_11');

  jumpLinkButton.addEventListener('click', function() {
    var position =  TARGETX_INPUT_ID.offset().top-60;
    selectForm(TARGETX_INPUT_ID);
    // unfortunately, jquery is too convenient to animate stuff:
    $('html, body').animate({
      scrollTop: position}, 1000);
  });

  //var locationPath = filterPath(location.pathname);

  //$('a[href*="#"]').each(function () {
    //var thisPath = filterPath(this.pathname) || locationPath;
    //var hash = this.hash;
    //if ($("#" + hash.replace(/#/, '')).length) {
      //if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
        //var $target = $(hash), target = this.hash;
        //if (target) {
          //$(this).click(function (event) {
            //event.preventDefault();
            //$('html, body').animate({scrollTop: $target.offset().top-60}, 1000, function () {
              //location.hash = target;
              //selectForm();
            //});
          //});
        //}
      //}
    //}
  //});
});
function selectForm(TARGETX_INPUT_ID) {
  TARGETX_INPUT_ID.focus();
  TARGETX_INPUT_ID.select();
}
