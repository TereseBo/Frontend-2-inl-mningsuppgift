
//"contact-form-submit-button"
$(document).ready(function () {//Runs when the page is loaded
    console.log("ready");
    $("#contact-form-submit-button").on("click", function () {
      event.preventDefault();
        console.log("clicked");
        $("#contact-form-container").empty();
        $("#contact-form-container").append(`<p id="thankyou-message">Thank you for your message! <br><br><small>We will get back to you as soon as possible.<small></p>`);
        
    });

    


});
/*$("contact-form-submit-button").on("click", function () {
    $("#contact-form").remove();
   // $("#contact-form-container").append(`<p>Thank you for your message!</p>`);

});*/