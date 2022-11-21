

let item = JSON.parse(localStorage.getItem("viewitem"));

function detailPageGenerator(item) {//Ej kontrollerad
    detailsHeaderGenerator(item);
    detailsMainGenerator(item);

}
function detailsMainGenerator(item) {
    let index = 1;
    item["filenames"].forEach(filename => {

        $(`#cardspace`).append(`<div class='photocard' id='card${index}'></div>`);//Create a new photocard

        $(`#card${index}`).append(`<div class='photocard-img-container'><img id='pic${index}' src="../../images/${filename}" alt="Picture ${index} of the ${item["category"]} named ${item["projectname"]}" ></img></div>`);
     
        index++;
    });

}


function detailsHeaderGenerator(item) {
    $(`#header-img-container`).remove();
    $(`header h1`).text(item["projectname"]);
    $(`header`).append(`<div class='basic-info-container''></div>`);
    $(`header`).append(`<div class='more-info-container'></div>`);
    $(`.more-info-container`).css("display", "none");
   // $(`.basic-information`).append(`<p><span class='key'>Category: </span><span class='value'>${item["category"]}</<span></p>`);
    aggregateInfo(item);
}

function aggregateInfo(item) {
    
    for (let key in item) {
        let displayKey = key[0].toUpperCase() + key.slice(1);//Capitalize the first letter of the key
        switch (key) {
            case "weft":
            case "warp":
            case "details":
                $(`.more-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
                break;
            case "description":
                //$(`.basic-information`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
            case "category":
                $(`.basic-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
                break;
            case "date":
                $(`.basic-info-container`).prepend(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
            case "filenames":
            case "projectname":
            default:
                break;
        }
    }
    $(`.basic-info-container`).append(`<button class='details'>Detailed info</button>`);
    $(`.details`).on("click", function (){$(`.more-info-container`).toggle();});
}

$(document).ready(function () {//TODO: Add all steps to create the gallery
    console.log("ready");
    detailPageGenerator(item);

});