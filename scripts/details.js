

let item= JSON.parse(localStorage.getItem("viewitem"));

function detailPageGenerator(item){//Ej kontrollerad
    //TODO: Add a back button
    //TODO: Replace heading
    //TODO: Add remaining info
    //$("#cardspace").children(".card").remove();
    

    
    let index=1;
    item["filenames"].forEach(filename => {

        $(`#cardspace`).append(`<div class='photocard' id='card${index}'></div>`);//Create a new photocard

        $(`#card${index}`).append(`<div class='photocard-img-container'><img id='pic${index}' src="../../images/${filename}" alt="Picture ${index} of the ${item["category"]} named ${item["projectname"]}" ></img></div>`);
        //TODO:Fix alt-text
        index++;
    });
}


function headerGenerator(item){
    $(`#header-img-container`).remove();
    $(`header h1`).text(item["projectname"]);
    for (let key in item) {
        let displayKey = key[0].toUpperCase() + key.slice(1);//Capitalize the first letter of the key
        if (key == "projectname") {
            $(`header h1`).text(item["projectname"]);
        } else {
            $(`header`).append(`<p class='${key}'><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);//Create header with all info
        }
    }
    $(`header`).append(`<button class='details'>Back to Home</button>`);
    $(`header`).on("click", function (){console.log(`Go Home`);});
}

$(document).ready(function () {//TODO: Add all steps to create the gallery
    console.log("ready");
    headerGenerator(item);
    detailPageGenerator(item);

});