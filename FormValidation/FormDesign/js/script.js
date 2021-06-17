
// $(document).ready(function () {

        // $('#form').submit(function (e) {
            // // reset();
            // e.preventDefault();
            // var firstName = $('#firstName').val();
            // var lastName = $('#lastName').val();
			// var phoneNumber = $('#phoneNumber').val();
			// var address1 = $('#address1').val();
			// var address2 = $('#address2').val();
            // var email = $('#email').val();
            // var password = $('#password').val();
            // var dob = $('#dob').val();

            // $(".error").remove();

            // if (firstName.length < 3) {
                // $('#firstName').after('<span class="error">This field is required</span>');
            // }

            // if (lastName.length < 3) {
                // $('#lastName').after('<span class="error">This field is required</span>');
            // }
			
			// if (phoneNumber.length < 11) {
                // $('#phoneNumber').after('<span class="error">This field is required</span>');
            // }
			// if (address1.length < 15) {
                // $('#address1').after('<span class="error">This field is required</span>');
            // }
			// if (address2.length < 15) {
                // $('#address2').after('<span class="error">This field is required</span>');
            // }

            // if (email.length < 1) {
                // $('#email').after('<span class="error">This field is required</span>');
            // } else if (validateEmail() != 1) {
                // //var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
                // //var validEmail = regEx.test(email);
                // //if (!validEmail) {
                // $('#email').after('<span class="error">Enter a valid email</span>');
            // }

            // if (password.length < 8) {
                // $('#password').after('<span class="error">Password must be at least 8 characters</span>');
            // }

            // var gender = $('input[name=gender]:checked');
            // if (gender.length < 1) {
                // $("#errorGender").text('Select Gender');
                // //alert('Choose a gender');
            // }

            // var country = $('#country').val();
            // if (country.length < 1) {
                // $('#country').after('<span class="error">Select your country.</span>');
            // }

            // var language = $('input[class=language]:checked');
            // if (language.length < 1) {
                // $("#errorLanguage").text('Select Your Language');
                // //alert('Choose atleast one.');
            // }
            // if (dob.length < 1) {
                // $('#dob').after('<span class="error">This field is required</span>');
            // }
        // });
    // });

    // function reset() {
        // $(".error").remove();
        // $("#errorGender").text('');
        // $("#errorLanguage").text('');
    // }

    // function validateEmail() {
        // var email;
        // var t = 1;
        // email = document.getElementById('email').value;
        // if (email.value == '') {
            // //alert('Empty');
        // }
        // var res = email.split('@');
        // if (email.split('@').length != 2) {
            // //alert('zero @ OR morethan one @ ');
            // t = 0;
        // }
        // var part1 = res[0];
        // var part2 = res[1];

        // // part1
        // if (part1.length == 0) {
            // //alert('no content bfr @');
            // t = 0;
        // }
        // if (part1.split(' ').length > 2) {
            // //alert('Invalid:Space before @')
            // t = 0;
        // }

        // //chk afr @ content:  part2
        // var dotsplt = part2.split('.');  //alert(“After @ :”+part2);
        // if (part2.split('.').length < 2) {
            // //alert('dot missing');
            // t = 0;
        // }
        // if (dotsplt[0].length == 0) {
            // //alert("no content b/ w @ and dot");
            // t = 0;
        // }
        // if (dotsplt[1].length < 2 || dotsplt[1].length > 4) {
            // //alert('err aftr dot');
            // t = 0;
        // }

        // if (t == 1) {
            // //alert('it is a valid email');
        // }

        // return t;
    // }
	
	
$(document).ready(function() {
$('#form').submit(function(e) {
	reset();
	
    e.preventDefault();
    var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
    var password = $('#password').val();
	var email = $('#email').val();
	var phoneNumber = $('#phoneNumber').val();
	var dob = $('#dob').val();
	var address1 = $('#address1').val();
	var address2 = $('#address2').val();
 
    $(".error").remove();
	
    if (firstName.length < 1) {
      $('#firstName').after('<span class="error">This field is required</span>');
    }
	
	if (lastName.length < 1) {
      $('#lastName').after('<span class="error">This field is required</span>');
    }
	
	if (password.length <4 || password.length>8) {
         $('#password').after('<span class="error">Password must be between 4 to 8 characters</span>');
    }
	
	if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        $('#email').after('<span class="error">Enter a valid email</span>');
    }
	
	if (phoneNumber.length < 1) {
        $('#phoneNumber').after('<span class="error">This field is required</span>');
    }else if (phoneNumber.length != 11) {
        $('#phoneNumber').after('<span class="error">Enter a valid phone number with 11 digits</span>');
    } else if (/^\d+$/.test(phone) == false) {
      $('#phoneNumber').after('<span class="error">Enter a valid phone number</span>');
    }
	
	if (dob.length < 1) {
        $('#dob').after('<span class="error">This field is required</span>');
    }
	
	if (address1.length < 15) {
        $('#address1').after('<span class="error">This field is required</span>');
    }
	if (address2.length < 15) {
        $('#address2').after('<span class="error">This field is required</span>');
    }
	
	var gender = $('input[name=gender]:checked');
    if (gender.length < 1) {
        $("#errorGender").text('Select Gender');
    }
	
	var country = $('#country').val();
    if (country.length < 1) {
        $('#country').after('<span class="error">Select your country.</span>');
    }
			
	var language = $('input[class=language]:checked');
    if (language.length < 1) {
        $("#errorLanguage").text('Select Your Language');         
    }
	
	
	
	if($(".error").length === 0){
		alert("Submitted successully!")
	}
  
   });
 });
 
	function reset() {
        $(".error").remove();
        $("#errorGender").text('');
        $("#errorLanguage").text('');
    }
	





