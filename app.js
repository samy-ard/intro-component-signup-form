(function($) {
	$(document).ready( function() {
		$('.site-form').on('submit', function(e) {
			e.preventDefault();
			let $form = $(this);
			let $first_name = $form.find('input[name="first_name"]');
			let $last_name = $form.find('input[name="last_name"]');
			let $email = $form.find('input[name="email"]');
			let $password = $form.find('input[name="password"]');
			$('.form-group').removeClass('has-error');
			$('.form-message').remove();
			if( !$first_name.val() ) {
				$first_name.parent().addClass('has-error');
				$first_name.parent().append('<div class="form-message">First Name cannot be empty</div>');
			}
			if( !$last_name.val() ) {
				$last_name.parent().addClass('has-error');
				$last_name.parent().append('<div class="form-message">Last Name cannot be empty</div>');
			}
			if( !$email.val() || $email.val().indexOf('@') == -1 ) {
				$email.parent().addClass('has-error');
				console.log($email.val().indexOf('@') == -1);
				$email.parent().append('<div class="form-message">Looks like this is not an email</div>');
			}
			if( !$password.val() ) {
				$password.parent().addClass('has-error');
				$password.parent().append('<div class="form-message">Password cannot be empty</div>');
			}
		});
	});
})(jQuery);
