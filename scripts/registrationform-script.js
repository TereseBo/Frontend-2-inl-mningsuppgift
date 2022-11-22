
function projectRegistration() {//Collects form data and file names, alerts user and redirects to home page

    let currentData=collectFormData("#projectregistration");//Creates object from form data
    currentData["filenames"]=collectFileNames();//Adds filenames to object
    let currentObjString = JSON.stringify(currentData);//Converts object to JSON-string
    localStorage.setItem(currentData.projectname, currentObjString);//Saves JSON-string to local storage
     //TODO: Learn how to export to server.
    alert("Thank you! Your project has been registered.");
    window.location.href = "index.html";
}
function collectFormData(form) {//Collects form data abd returns an object with label-id as key and label-value as value
    const formData= $(form).serializeArray();
    let newObject = {};
    formData.forEach((item)=>{
        newObject[item.name] = item.value;
    })
    return newObject;
}
function collectFileNames(){//Extracts file-name from string by splitting at \ and then saving last item to array
    let fileNames = [];
    $("input").filter("[type=file]").each(function(){
        let temp=[]
        temp = $(this).val().split("\\");
        fileNames.push(temp[temp.length-1]);
    })
    return fileNames;
}
$(document).ready(function () {
    $("main").css("grid-row", "1/4");//Readjusts main to cover the header area
    $("#projectregistration").submit(function (event) {//Adds event listener to form
        event.preventDefault();
        projectRegistration();
    });
});