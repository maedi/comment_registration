(function ($) {
Drupal.behaviors.comment_registration = {
  attach: function (context) {
    var anon = $("#edit-comment-anonymous");
    var comment_reg = $("div.form-item-comment-registration-enabled");
    var comment_man = $("div.form-item-comment-registration-mandatory");

    if ($(anon).val() == 0) $(comment_reg).hide();
    if ($(anon).val() == 0) $(comment_man).hide();

    $(anon).change(function() {
      if($(anon).val() != '0') {
        $(comment_reg).show();
        $(comment_man).show();
      } else {
        $(comment_reg).hide();  
        $(comment_man).hide();
      }
    });
  }
};
})(jQuery);