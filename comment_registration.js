Drupal.behaviors.comment_registration = function(){
  if ($('#comment-registration-info-wrapper').length) {
    var target = $('#comment-registration-info-wrapper');
  } else {
    var target = $('#edit-comment-registration-password-wrapper');
  }

  if ($('#edit-comment-registration-register').attr('checked') || $('#edit-comment-registration-password-pass1').hasClass('error') || $('#edit-comment-registration-password-pass2').hasClass('error')) {
    target.show();
  } else {
    target.hide();
  };
  $('#edit-comment-registration-register').bind('click', function () {
    if ($(this).attr('checked') || $('#edit-comment-registration-password-pass1').hasClass('error') ||$('#edit-comment-registration-password-pass2').hasClass('error')) {
      target.show();
    } else {
      target.hide();
    }
  });
}; 