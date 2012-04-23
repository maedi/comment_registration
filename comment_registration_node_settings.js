(function ($) {
Drupal.behaviors.comment_registration = {
  attach: function (context) {
    var anon = $("#edit-comment-anonymous");
    var comment_reg = $("div.form-item-comment-registration-enabled");

    if ($(anon).val() == 0) $(comment_reg).hide();
    $(anon).change(function(){
	    if($(anon).val() != '0') {
		    $(comment_reg).show();
	    } else {
	  	  $(comment_reg).hide();	
		  }
    });
  }
};
})(jQuery);
