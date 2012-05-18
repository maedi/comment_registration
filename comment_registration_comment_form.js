(function ($) {
Drupal.behaviors.comment_registration = {
  attach: function (context) {
    var register = $('#edit-comment-registration-register');
    var passwd = $('#edit-comment-registration-form');

    if ($(register).is(':checked') == false) $(passwd).hide();
    $(register).click(function(){
	    if($(register).is(':checked')) {
		    $(passwd).show();
	    } else {
	  	  $(passwd).hide();	
		  }
    });
  }
};
})(jQuery);
