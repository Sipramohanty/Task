

var project_id ='721', client_id ='14';

$(".loader-spinner").hide();

$('#inquiryFormOtp').hide();



$('#filed-otp').keypress(function(event){

  if(event.keyCode == 13){

    $('.verify_otp_form2').click();

    return false;

  }

});



$('#bookmyshow_popup_otp').keypress(function(event){

  if(event.keyCode == 13){

    $('.verify_otp_bookmyshow_popup').click();

    return false;

  }

});

$('#price_popup_otp').keypress(function(event){

  if(event.keyCode == 13){

    $('.verify_otp_pricepopup').click();

    return false;

  }

});



$('#enter-otp-price').keypress(function(event){

  if(event.keyCode == 13){

    $('.verify_otp_pricepopup').click();

    return false;

  }

});



$('#user_schedule_otp').keypress(function(event){

  if(event.keyCode == 13){

    $('.schedule_otp_verify').click();

    return false;

  }

});









function send_otp(mob,client_name,form_id){
        $('.pixel_code').show();
        $.ajax({

            type: "POST",

            url: "https://crm.netbizlabs.com/campaign/send",

            data:{mob1:mob,client_name1:client_name},

            //cache: false,

            async: false,

            success: function (response) {

                console.log(response);

                $('.match_otp').val(response);



                if(form_id == 1){

                	$(".enqcontainer").css("display","none");

        			$(".display-otp").removeClass("display-otp");

                    $('#main_otp_form').show();

                    $('#contact-form').hide();

                }else if(form_id == 2){

                	$("#price_popup_form").css("display","none");

        			$("#price_popup_otp_form").removeClass("display-otp");

                    //$('#main_otp_form').show();

                }else if(form_id == 3){

                	$("#schdeule-visit-form").css("display","none");

        			$("#schedule-otp-form").removeClass("display-otp");

                }else if(form_id == 4){

                    $("#bookmyshow_popup_form").css("display","none");

                    $("#bookmyshow_popup_otp_form").removeClass("display-otp");

                }



                $('.pixel_code').load('pixel.html');



            },

            failure: function (response) {

                alert('Fail to send OTP');

            }

        });

    }



    function verify_otp(user_otp){

        // alert(user_otp);



        var lead_id = $('.current_lead_id').val();



        var current_otp = $('.match_otp').val();



        var user_mobile_number = $('.user_mobile_number').val();

        var phone_dialing_code = $('.phone_dialing_code').val();



        $.ajax({

            type: "POST",

            url: "https://crm.netbizlabs.com/campaign/match",

            data:{otp1:user_otp,otp_hidden1:current_otp},

            async: false,

            success: function (response) {

                if(response == 'match'){

                    $.ajax({

                        type: "POST",

                        url: "https://crm.netbizlabs.com/campaign/update_otp",

                        data:{id:lead_id},

                        async: false,

                        success: function (response) {

                            window.location.href = 'thankyou.html';      

                        },

                        failure: function (response) {

                            alert('Fail to send OTP');

                        }

                    });

                }else{

                    alert('OTP does not match');

                }

            },

            failure: function (response) {

                alert('Fail to send OTP');

            }

        });



    }



    function resend_otp(user_otp,current_otp,mob1){



        $.ajax({

            type: "POST",

            url: "https://crm.netbizlabs.com/campaign/resend",

            data:{client_name1:'Omkar',resend_otp_hidden1:current_otp,mob1:mob1},

            async: false,

            success: function (response){





                $('.resend_otp_form2').addClass('button_disable');

                $('.resend_otp_popupform').addClass('button_disable');

                setTimeout(function(){

                    $('.resend_otp_form2').removeClass('button_disable');

                    $('.resend_otp_popupform').addClass('button_disable');

                },10000);

            },

            failure: function (response) {

                alert('Fail to send OTP');

            }

        });

    }



$('.verify_otp_form2').on("click",function(){

    

        var user_otp = $('#filed-otp').val();

        // alert(user_otp);



        if(user_otp!='' && !isNaN(user_otp)){

            verify_otp(user_otp);

        }else{

            $('#filed-otp').addClass('error_new');

        }

    });



$('.resend_otp_form2').on("click",function(){



        var user_otp = $('#enter-otp-enquiry').val();

        var current_otp = $('.match_otp').val();

        var mob1 = $('.user_mobile_number').val();



        resend_otp(user_otp,current_otp,mob1);



        

    });



$('.verify_otp_popupform').on("click",function(){

    

        var user_otp = $('#enter-otp-popup').val();

        // alert(user_otp);



        if(user_otp!='' && !isNaN(user_otp)){

            verify_otp(user_otp);

        }else{

            $('#enter-otp-popup').addClass('error_new');

        }

    });

$('.verify_otp_bookmyshow_popup').on("click",function(){

    

        var user_otp = $('#bookmyshow_popup_otp').val();

        // alert(user_otp);



        if(user_otp!='' && !isNaN(user_otp)){

            verify_otp(user_otp);

        }else{

            $('#bookmyshow_popup_otp').addClass('error_new');

        }

    });


$('.resend_otp_bookmyshow_popup').on("click",function(){



        var user_otp = $('#enter-otp-popup').val();

        var current_otp = $('.match_otp').val();

        var mob1 = $('.user_mobile_number').val();



        resend_otp(user_otp,current_otp,mob1);



        

    });



$('.resend_otp_popupform').on("click",function(){



        var user_otp = $('#enter-otp-popup').val();

        var current_otp = $('.match_otp').val();

        var mob1 = $('.user_mobile_number').val();



        resend_otp(user_otp,current_otp,mob1);



        

    });



$('.verify_otp_pricepopup').on("click",function(){

    

        var user_otp = $('#price_popup_otp').val();

        // alert(user_otp);



        if(user_otp!='' && !isNaN(user_otp)){

            verify_otp(user_otp);

        }else{

            $('#price_popup_otp').addClass('error_new');

        }

    });



$('.resend_otp_pricepopup').on("click",function(){



        var user_otp = $('#price_popup_otp').val();

        var current_otp = $('.match_otp').val();

        var mob1 = $('.user_mobile_number').val();



        resend_otp(user_otp,current_otp,mob1);

        

});







$('.schedule_otp_verify').on("click",function(){

    

        var user_otp = $('#user_schedule_otp').val();

        // alert(user_otp);



        if(user_otp!='' && !isNaN(user_otp)){

            verify_otp(user_otp);

        }else{

            $('#user_schedule_otp').addClass('error_new');

        }

});



$('.schedule_otp_resend').on("click",function(){



        var user_otp = $('#user_schedule_otp').val();

        var current_otp = $('.match_otp').val();

        var mob1 = $('.user_mobile_number').val();



        resend_otp(user_otp,current_otp,mob1);

});



// create a custom phone number rule called 'intlTelNumber'

$.validator.addMethod("intlTelNumber", function(value, element) {

    return this.optional(element) || $(element).intlTelInput("isValidNumber");

}, "Please enter a valid mobile number");



$.validator.addMethod("alphabets", function (value, element) {

	return this.optional(element) || /^[a-zA-Z ]*$/.test(value);

}, "Please enter Alphabets only");



$.validator.addMethod("email", function (value, element) {

	return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

}, "Please enter a valid email address.");

/*Adding validator function*/



var source = getParameterByName('utm_source');

var medium = getParameterByName('utm_medium');

var campaign = getParameterByName('utm_campaign');

var name = getParameterByName('name');

var email = getParameterByName('email_id');

var mobile = getParameterByName('mobile_no');



var is_emailer = getParameterByName('is_emailer');



var keyword = getParameterByName('keyword');

var device = getParameterByName('device');

var placement = getParameterByName('placement');

var gclid = getParameterByName('gclid');



var campaign_code = getParameterByName('campaign_code');



if(is_emailer == 1)

{

	var city = 'NA';

	var country = 'NA';

	var dialing_code = 'NA';



	if(source=="")

		source="NA";

	if(medium == "")

		medium = "NA";

	if(campaign == "")

		campaign = "NA";



	if(keyword == "")

	    keyword = "NA";

	if(device == "")

	    device = "NA";

	if(placement == "")

	    placement = "NA";

	if(gclid == "")

	    gclid = "NA";



	if(campaign_code == "")

	    campaign_code = "NA";



	var form_type = 'emailer';



	var ind_project_id = 'NA';

	var city = 'NA';

    var sfdc_project_interested = 'NA';



	source = 'gsp_emailer';



	var name = name, email = email, mobile = mobile;

	/*var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code;

	var crm_url = "http://crm.netbizlabs.com/campaign/fetch_data/" + addstring;*/



	var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid;

	var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;





	$("#inquiryForm .btn").prop('disabled', true);

	//$(".loader_bg").show();



	if(name!='' && email!= '' && mobile!=''){



		$.ajax({

			url: crm_url,

			type: 'GET',

			//async: false,

			cache: false,

			success: function (response) {

				/*$('#global_form')[0].reset();

				window.location.href = base_url+'thankyou.html';*/

			},

			error: function (jqXHR, textStatus, errorThrown) {

				alert('Some error occurred');

			}

		});

	}

}

//

$("#phone").keyup(function () {

    var flag = $('#contact-form .selected-flag').attr('title');

	var res = flag.split(":");

	var dialing_code = res[1];

	var country = $.trim(res[0].replace(/\(.*?\)/, ''));

	$("#enquiry_hdn_country").val(country);

	$("#enquiry_hdn_dialcode").val(dialing_code);



});



$("#price_popup_mobile").keyup(function () {

    var flag = $('#price_popup_form .selected-flag').attr('title');

    var res = flag.split(":");

    var dialing_code = res[1];

    var country = $.trim(res[0].replace(/\(.*?\)/, ''));

    $("#PopupForm_hdn_country").val(country);

    $("#PopupForm_hdn_dialcode").val(dialing_code);



});





//

$('#contact-form').validate({  

	rules: {

		name: {

			required: true,

			alphabets: true,

			minlength: 3,

			maxlength: 100

		},

		phone: {

			required: true,

			intlTelNumber: true

		},

		email: {

			required: true,

			email: true

		}

		

	},

	onkeyup: false,

	errorPlacement: function(error, element) {},

	submitHandler: function(form) {

		var source = getParameterByName('utm_source');

		var medium = getParameterByName('utm_medium');

		var campaign = getParameterByName('utm_campaign');

		var city = 'NA';

		var country = $('#enquiry_hdn_country').val();

		var dialing_code = $('#enquiry_hdn_dialcode').val();



		var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');



        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'main_form';



		if(source=="")

			source="NA";

		if(medium == "")

			medium = "NA";

		if(campaign == "")

			campaign = "NA";



		if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";





        if(campaign_code == "")

            campaign_code = "NA";



		var ind_project_id = 'NA';

		var city = 'NA';

        var sfdc_project_interested = 'NA';

		

		var name = $('#name').val(), email = $('#email').val(), mobile = $('#phone').val();



		var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

		

		send_otp(mobile,'Omkar',1);

		

		$("#contact-form .btn").prop('disabled', true);

		

		$.ajax({

			url: crm_url,

			type: 'GET',

			//async: false,

			cache: false,

			success: function (response) {

				$('#contact-form')[0].reset();

				var response = response.split('#');

                    

                var lead_id = response[1];

                $('.current_lead_id').val(lead_id);

                $('.user_mobile_number').val(mobile);

                $('.phone_dialing_code').val(dialing_code);

				// window.location.href = 'thankyou.html';

			},

			error: function (jqXHR, textStatus, errorThrown) {

				alert('Some error occurred');

			}

		});

	}

});

//



//

$('#price_popup_form').validate({  



	rules: {

		price_popup_name: {

			required: true,

			alphabets: true,

			minlength: 3,

			maxlength: 100

		},

		price_popup_mobile: {

			required: true,

			intlTelNumber: true

		},

		price_popup_email: {

			required: true,

			email: true

		}

		

	},

	onkeyup: false,

	errorPlacement: function(error, element) {},

	submitHandler: function(form) {

		var source = getParameterByName('utm_source');

		var medium = getParameterByName('utm_medium');

		var campaign = getParameterByName('utm_campaign');

		var city = 'NA';

		var country = $('#PopupForm_hdn_country').val();

		var dialing_code = $('#PopupForm_hdn_dialcode').val();



		var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');





        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'popup_form';

		

		if(source=="")

			source="NA";

		if(medium == "")

			medium = "NA";

		if(campaign == "")

			campaign = "NA";



		if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



		var ind_project_id = $('#intersted_project_id').val();

		var city = 'NA';

        var sfdc_project_interested = $('#intersted_project_id').val();

		

		var name = $('#price_popup_name').val(), email = $('#price_popup_email').val(), mobile = $('#price_popup_mobile').val();



		var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

		

		send_otp(mobile,'Omkar',2);

		

		$("#price_popup_form .btn").prop('disabled', true);

		//$(".loader_bg").show();

		$.ajax({

			url: crm_url,

			type: 'GET',

			//async: false,

			cache: false,

			success: function (response) {

				$('#price_popup_form')[0].reset();

				var response = response.split('#');

                    

                var lead_id = response[1];

                $('.current_lead_id').val(lead_id);

                $('.user_mobile_number').val(mobile);

                $('.phone_dialing_code').val(dialing_code);

				// window.location.href = 'thankyou.html';

			},

			error: function (jqXHR, textStatus, errorThrown) {

				alert('Some error occurred');

			}

		});

	}

});


$('#bookmyshow_popup_form').validate({  



    rules: {

        bookmyshow_popup_name: {

            required: true,

            alphabets: true,

            minlength: 3,

            maxlength: 100

        },

        bookmyshow_popup_mobile: {

            required: true,

            intlTelNumber: true

        },

        bookmyshow_popup_email: {

            required: true,

            email: true

        }

        

    },

    onkeyup: false,

    errorPlacement: function(error, element) {},

    submitHandler: function(form) {
        $(".loader-spinner").show();
        var source = getParameterByName('utm_source');

        var medium = getParameterByName('utm_medium');

        var campaign = getParameterByName('utm_campaign');

        var city = 'NA';

        var country = $('#bookmyshow_popup_hdn_country').val();

        var dialing_code = $('#bookmyshow_popup_hdn_dialcode').val();



        var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');





        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'bookmyshowpopup_form';

        

        if(source=="")

            source="NA";

        if(medium == "")

            medium = "NA";

        if(campaign == "")

            campaign = "NA";



        if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



        var ind_project_id = 'NA';

        var city = 'NA';

        var sfdc_project_interested = 'NA';

        

        var name = $('#bookmyshow_popup_name').val(), email = $('#bookmyshow_popup_email').val(), mobile = $('#bookmyshow_popup_mobile').val();



        var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

        

        send_otp(mobile,'Omkar',4);

        

        $("#bookmyshow_popup_form .btn").prop('disabled', true);

        //$(".loader_bg").show();

        $.ajax({

            url: crm_url,

            type: 'GET',

            //async: false,

            cache: false,

            success: function (response) {

                $('#bookmyshow_popup_form')[0].reset();

                var response = response.split('#');

                    

                var lead_id = response[1];

                $('.current_lead_id').val(lead_id);

                $('.user_mobile_number').val(mobile);

                $('.phone_dialing_code').val(dialing_code);

                // window.location.href = 'thankyou.html';

            },

            error: function (jqXHR, textStatus, errorThrown) {

                alert('Some error occurred');

            }

        });

    }

});

//

$("#schedule_phone").keyup(function () {

    var flag = $('#schdeule-visit-form .selected-flag').attr('title');

	var res = flag.split(":");

	var dialing_code = res[1];

	var country = $.trim(res[0].replace(/\(.*?\)/, ''));

	$("#schedule_hdn_country").val(country);

	$("#schedule_hdn_dialcode").val(dialing_code);



});

//

$('#schdeule-visit-form').validate({  



	rules: {

		schedule_name: {

			required: true,

			alphabets: true,

			minlength: 3,

			maxlength: 100

		},

		schedule_phone: {

			required: true,

			intlTelNumber: true

		},

		schedule_email: {

			required: true,

			email: true

		}

		

	},

	onkeyup: false,

	errorPlacement: function(error, element) {},

	submitHandler: function(form) {

		var source = getParameterByName('utm_source');

		var medium = getParameterByName('utm_medium');

		var campaign = getParameterByName('utm_campaign');

		var city = 'NA';

		var country = $('#schedule_hdn_country').val();

		var dialing_code = $('#schedule_hdn_dialcode').val();



		var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');



        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'schedule_form';

		

		if(source=="")

			source="NA";

		if(medium == "")

			medium = "NA";

		if(campaign == "")

			campaign = "NA";



		if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



		var ind_project_id = 'NA';

		var city = 'NA';

        var sfdc_project_interested = 'NA';

		

		var name = $('#schedule_name').val(), email = $('#schedule_email').val(), mobile = $('#schedule_phone').val();

		/*var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code;

		var crm_url = "http://crm.netbizlabs.com/campaign/fetch_data/" + addstring;*/



		var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

		

		send_otp(mobile,'Omkar',3);

		

		$("#schdeule-visit-form .btn").prop('disabled', true);

		//$(".loader_bg").show();

		$.ajax({

			url: crm_url,

			type: 'GET',

			//async: false,

			cache: false,

			success: function (response) {

				$('#schdeule-visit-form')[0].reset();

				var response = response.split('#');

                    

                var lead_id = response[1];

                $('.current_lead_id').val(lead_id);

                $('.user_mobile_number').val(mobile);

                $('.phone_dialing_code').val(dialing_code);

				// window.location.href = 'thankyou.html';

			},

			error: function (jqXHR, textStatus, errorThrown) {

				alert('Some error occurred');

			}

		});

	}

});

//

$("#pricepopup_phone1").keyup(function () {

    var flag = $('#pricepopup1 .selected-flag').attr('title');

	var res = flag.split(":");

	var dialing_code = res[1];

	var country = $.trim(res[0].replace(/\(.*?\)/, ''));

	$("#pricepopup_hdn_country1").val(country);

	$("#pricepopup_hdn_dialcode1").val(dialing_code);



});

//

$('#pricepopup1').validate({

	rules: {

		pricepopup_name1: {

			required: true,

			alphabets: true,

			minlength: 3,

			maxlength: 100

		},

		pricepopup_phone1: {

			required: true,

			intlTelNumber: true

		},

		pricepopup_email1: {

			required: true,

			email: true

		}

		

	},

	onkeyup: false,

	errorPlacement: function(error, element) {},

	submitHandler: function(form) {

		var source = getParameterByName('utm_source');

		var medium = getParameterByName('utm_medium');

		var campaign = getParameterByName('utm_campaign');

		var city = 'NA';

		var country = $('#pricepopup_hdn_country1').val();

		var dialing_code = $('#pricepopup_hdn_dialcode1').val();



		var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');



        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'price_popup_form';

		

		if(source=="")

			source="NA";

		if(medium == "")

			medium = "NA";

		if(campaign == "")

			campaign = "NA";



		if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



		var ind_project_id = 'NA';

		var city = 'NA';

        var sfdc_project_interested = 'NA';

		

		var name = $('#pricepopup_name1').val(), email = $('#pricepopup_email1').val(), mobile = $('#pricepopup_phone1').val();



		var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

		

		// send_otp(mobile,'Kanakia',3);

		

		$("#pricepopup1 .btn").prop('disabled', true);

		//$(".loader_bg").show();

		$.ajax({

			url: crm_url,

			type: 'GET',

			//async: false,

			cache: false,

			success: function (response) {

				$('#pricepopup1')[0].reset();

				var response = response.split('#');



                var config_price = $('#config_price_1').val();



                $("#pricepop1").html("price :  <b>"+config_price+" + Taxes</b>");



                setTimeout(function() { window.location.href = 'thankyou.html'; },5000)

                    

                var lead_id = response[1];

                // $('.current_lead_id').val(lead_id);

                // $('.user_mobile_number').val(mobile);

                // $('.phone_dialing_code').val(dialing_code);



				// window.location.href = base_url+'thankyou.html';

			},

			error: function (jqXHR, textStatus, errorThrown) {

				alert('Some error occurred');

			}

		});

	}

});

//

$("#pricepopup_phone2").keyup(function () {

    var flag = $('#pricepopup2 .selected-flag').attr('title');

    var res = flag.split(":");

    var dialing_code = res[1];

    var country = $.trim(res[0].replace(/\(.*?\)/, ''));

    $("#pricepopup_hdn_country2").val(country);

    $("#pricepopup_hdn_dialcode2").val(dialing_code);



});

//

$('#pricepopup2').validate({

    rules: {

        pricepopup_name2: {

            required: true,

            alphabets: true,

            minlength: 3,

            maxlength: 100

        },

        pricepopup_phone2: {

            required: true,

            intlTelNumber: true

        },

        pricepopup_email2: {

            required: true,

            email: true

        }

        

    },

    onkeyup: false,

    errorPlacement: function(error, element) {},

    submitHandler: function(form) {

        var source = getParameterByName('utm_source');

        var medium = getParameterByName('utm_medium');

        var campaign = getParameterByName('utm_campaign');

        var city = 'NA';

        var country = $('#pricepopup_hdn_country2').val();

        var dialing_code = $('#pricepopup_hdn_dialcode2').val();



        var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');



        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'price_popup_form';

        

        if(source=="")

            source="NA";

        if(medium == "")

            medium = "NA";

        if(campaign == "")

            campaign = "NA";



        if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



        var ind_project_id = 'NA';

        var city = 'NA';

        var sfdc_project_interested = 'NA';

        

        var name = $('#pricepopup_name2').val(), email = $('#pricepopup_email2').val(), mobile = $('#pricepopup_phone2').val();



        var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

        

        // send_otp(mobile,'Kanakia',3);

        

        $("#pricepopup2 .btn").prop('disabled', true);

        //$(".loader_bg").show();

        $.ajax({

            url: crm_url,

            type: 'GET',

            //async: false,

            cache: false,

            success: function (response) {

                $('#pricepopup2')[0].reset();

                var response = response.split('#');



                var config_price = $('#config_price_2').val();



                $("#pricepop2").html("price :  <b>"+config_price+" + Taxes</b>");

                setTimeout(function() { window.location.href = 'thankyou.html'; },5000)

                    

                var lead_id = response[1];

                // $('.current_lead_id').val(lead_id);

                // $('.user_mobile_number').val(mobile);

                // $('.phone_dialing_code').val(dialing_code);



                // window.location.href = base_url+'thankyou.html';

            },

            error: function (jqXHR, textStatus, errorThrown) {

                alert('Some error occurred');

            }

        });

    }

});

//

$("#pricepopup_phone3").keyup(function () {

    var flag = $('#pricepopup3 .selected-flag').attr('title');

    var res = flag.split(":");

    var dialing_code = res[1];

    var country = $.trim(res[0].replace(/\(.*?\)/, ''));

    $("#pricepopup_hdn_country3").val(country);

    $("#pricepopup_hdn_dialcode3").val(dialing_code);



});

//

$('#pricepopup3').validate({

    rules: {

        pricepopup_name3: {

            required: true,

            alphabets: true,

            minlength: 3,

            maxlength: 100

        },

        pricepopup_phone3: {

            required: true,

            intlTelNumber: true

        },

        pricepopup_email3: {

            required: true,

            email: true

        }

        

    },

    onkeyup: false,

    errorPlacement: function(error, element) {},

    submitHandler: function(form) {

        var source = getParameterByName('utm_source');

        var medium = getParameterByName('utm_medium');

        var campaign = getParameterByName('utm_campaign');

        var city = 'NA';

        var country = $('#pricepopup_hdn_country3').val();

        var dialing_code = $('#pricepopup_hdn_dialcode3').val();



        var keyword = getParameterByName('keyword');

        var device = getParameterByName('device');

        var placement = getParameterByName('placement');

        var gclid = getParameterByName('gclid');



        var adgroup = getParameterByName('adgroup');

        var creative = getParameterByName('creative');

        var target = getParameterByName('target');

        var matchtype = getParameterByName('matchtype');

        var network = getParameterByName('network');

        var devicemodel = getParameterByName('devicemodel');

        var adposition = getParameterByName('adposition');



        var campaign_code = getParameterByName('campaign_code');



        var form_type = 'price_popup_form';

        

        if(source=="")

            source="NA";

        if(medium == "")

            medium = "NA";

        if(campaign == "")

            campaign = "NA";



        if(keyword == "")

            keyword = "NA";

        if(device == "")

            device = "NA";

        if(placement == "")

            placement = "NA";

        if(gclid == "")

            gclid = "NA";



        if(adgroup == "")

            adgroup = "NA";

        if(creative == "")

            creative = "NA";

        if(target == "")

            target = "NA";

        if(matchtype == "")

            matchtype = "NA";

        if(network == "")

            network = "NA";

        if(devicemodel == "")

            devicemodel = "NA";

        if(adposition == "")

            adposition = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



        if(campaign_code == "")

            campaign_code = "NA";



        var ind_project_id = 'NA';

        var city = 'NA';

        var sfdc_project_interested = 'NA';

        

        var name = $('#pricepopup_name3').val(), email = $('#pricepopup_email3').val(), mobile = $('#pricepopup_phone3').val();



        var addstring = name + "/" + email + "/" + mobile + "/" + project_id + "/" + source + "/" + medium + "/" + campaign + "/" + client_id + "/" + country + "/" + city + "/" + dialing_code+ "/NA/NA/"+ind_project_id+"/"+campaign_code+"/NA/"+sfdc_project_interested+"/"+form_type+"/"+keyword+"/"+device+"/"+placement+"/"+gclid+"/"+adgroup+"/"+creative+"/"+target+"/"+matchtype+"/"+network+"/"+devicemodel+"/"+adposition;



        var crm_url = "https://crm.netbizlabs.com/campaign/fetch_data_new/" + addstring;

        

        // send_otp(mobile,'Kanakia',3);

        

        $("#pricepopup3 .btn").prop('disabled', true);

        //$(".loader_bg").show();

        $.ajax({

            url: crm_url,

            type: 'GET',

            //async: false,

            cache: false,

            success: function (response) {

                $('#pricepopup3')[0].reset();

                var response = response.split('#');



                var config_price = $('#config_price_3').val();



                $("#pricepop3").html("price :  <b>"+config_price+" + Taxes</b>");

                setTimeout(function() { window.location.href = base_url+'thankyou.html'; },5000)

                    

                var lead_id = response[1];

                // $('.current_lead_id').val(lead_id);

                // $('.user_mobile_number').val(mobile);

                // $('.phone_dialing_code').val(dialing_code);



                window.location.href = 'thankyou.html';

            },

            error: function (jqXHR, textStatus, errorThrown) {

                alert('Some error occurred');

            }

        });

    }

});

//

function getParameterByName(name) {

	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

	var regexS = "[\\?&]" + name + "=([^&#]*)";

	var regex = new RegExp(regexS);

	var results = regex.exec(window.location.search);

	if (results == null)

		return "";

	else

		return decodeURIComponent(results[1].replace(/\+/g, " "));

}