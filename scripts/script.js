const fs=require('fs');


    
     function projectRegistration(){
        console.log($("#projectname").val());
        alert("Thank you! Your project has been registered.");
        window.location.href = "index.html";

     }
     
/*
form.addEventListener('submit', event => {
    // submit event detected, prevent default action and do js stuff instead
    event.preventDefault();
    setUserPreferences();
    window.location.assign("draft.html");

        $("#projectregistration").submit(function(event){
        event.preventDefault();
        $('#img1').change(function(){
			var file = this.files[0];
            console.log(file.name)
		})

    alert("Thank you! Your project has been registered.");
    window.location.href = "index.html";
    return false;

     } );  
    
})
*/
