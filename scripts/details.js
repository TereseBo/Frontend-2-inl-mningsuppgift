



function detailPageGenerator(item) {//Generates the details page
    detailsHeaderGenerator(item);
    detailsMainGenerator(item);

}
function detailsMainGenerator(item) {//Creates the main content of the details page
    let index = 1;
    item["filenames"].forEach(filename => {

        $(`#cardspace`).append(`<div class='photocard' id='card${index}'></div>`);//Create a new photocard

        $(`#card${index}`).append(`<div class='photocard-img-container'><img id='pic${index}' src="./images/${filename}" alt="Picture ${index} of the ${item["category"]} named ${item["projectname"]}" ></img></div>`);

        index++;
    });
}

function detailsHeaderGenerator(item) {//Creates the header of the details page
    $(`header h1`).text(item["projectname"]);
    $(`header`).append(`<div class='basic-info-container''></div>`);
    $(`header`).append(`<div class='more-info-container'></div>`);
    $(`.more-info-container`).css("display", "none");
    $(`header`).css("justify-content", "flex-start");
    $(`header`).css("gap", "0.5rem");
    aggregateInfo(item);
}

function aggregateInfo(item) {//Adds info to the header from the item
    for (let key in item) {
        let displayKey = key[0].toUpperCase() + key.slice(1);//Capitalize the first letter of the key
        switch (key) {
            case "weft":
            case "warp":
            case "description":
                $(`.basic-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
                break;

            case "details":
                $(`.more-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
                break;
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
    $(`.basic-info-container`).append(`<button class='details'>Details</button>`);
    $(`.details`).on("click", function () { $(`.basic-info-container`).css('padding-bottom', 0); $(`.more-info-container`).toggle(); });
}

let item = JSON.parse(localStorage.getItem("viewitem"));//Get the item from local storage
$(document).ready(function () {//Runs when the page is loaded

    detailPageGenerator(item);

});