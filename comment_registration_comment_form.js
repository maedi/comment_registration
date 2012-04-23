(function ($) {
Drupal.behaviors.comment_registration = {
  attach: function (context) {
    var register = $('#edit-comment-registration-register');
    var passwd = $('div.form-item-comment-registration-password');

    if ($(register).is(':checked') == false) $(passwd).hide();
    $(register).change(function(){
	    if($(register).is(':checked')) {
		    $(passwd).show();
	    } else {
	  	  $(passwd).hide();	
		  }
    });
  }
};
})(jQuery);
