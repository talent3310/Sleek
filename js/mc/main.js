// Mailchimp Newsletter
$(document).ready(function() {
	$('#invite').ketchup().submit(function() {
	if ($(this).ketchup('isValid')) {
	var action = $(this).attr('action');
	$.ajax({
	url: action,
	type: 'POST',
	data: {
		email: $('#address').val(),
		fname: $('#fname').val(),
		lname: $('#lname').val()
	},
	success: function(data){
	$('#result').html(data).css('color', 'white');
	},
	error: function() {
	$('#result').html('Sorry, an error occurred.').css('color', 'white');
	}
	});
	}
	return false;
	});
});
