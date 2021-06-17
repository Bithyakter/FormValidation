
$(document).ready(function() {
$('#form').submit(function(e) {
	reset();
	
    e.preventDefault();
    var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var phone = $('#phone').val();

    $(".error").remove();
	
    if (firstName.length < 1) {
      $('#firstName').after('<span class="error">This field is required</span>');
    }
	
	if (lastName.length < 1) {
      $('#lastName').after('<span class="error">This field is required</span>');
    }
	
	
	if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        $('#email').after('<span class="error">Enter a valid email</span>');
    }
	
	if (phone.length < 1) {
        $('#phoneNumber').after('<span class="error">This field is required</span>');
    }else if (phone.length != 11) {
        $('#phoneNumber').after('<span class="error">Enter a valid phone number with 11 digits</span>');
    } else if (/^\d+$/.test(phone) == false) {
      $('#phone').after('<span class="error">Enter a valid phone number</span>');
    }
	
	var country = $('#country').val();
    if (country.length < 1) {
        $('#country').after('<span class="error">Select your country.</span>');
    }	
	
	if($(".error").length === 0){
		alert("Submitted successully!")
	}
  
   });
 });
 
	function reset() {
        $(".error").remove();
    }
	





