

const contents = [//An array of objects representing the items to be displayed in cards/details-page
    {
        "projectname": "Birdie",
        "date": "2022-02-08",
        "description": "This plush toy with several tactile details is sure to become a favorite companion.",
        "category": "Plush toy",
        "warp": "Merinowool 100%",
        "weft": "Merino wool 100%",
        "details": "Long braided fringe,  embroidered details",
        "filenames": [
            "IMG_6830.JPG",
            "IMG_6832.JPG",
            "IMG_6835.JPG",
            "IMG_6834.JPG"
        ]
    },
    {
        "projectname": "Blue",
        "date": "2022-05-20",
        "description": "This true to it's heritage linen towel will keep for years to come. Rustic and made to use.",
        "category": "Hand towel",
        "warp": "Flax 100%",
        "weft": "Flax 100%",
        "details": "None",
        "filenames": [
            "IMG_9827.JPG",
            "IMG_9826.JPG",
            "IMG_9824.JPG",
            "IMG_9825.JPG"
        ]
    },
    {
        "projectname": "Classic",
        "date": "2021-10-14",
        "description": "This pure linen towel will keep for years to come. Just as good for drying dishes as being decorative in the kitchen.",
        "category": "Hand towel",
        "warp": "Flax 100%",
        "weft": "Flax 100%",
        "details": "Flax inlays",
        "filenames": [
            "IMG_9817.JPG",
            "IMG_9818.JPG",
            "IMG_9819.JPG",
            "IMG_9816.JPG"
        ]
    },
    {
        "projectname": "Dragon",
        "date": "2022-09-25",
        "description": "There's nothing basic about this back to basics bath towel. It's large size and thickness from the waffle weave makes it perfect both for drying oneself after the bath and using as a blanket while on the beach.",
        "category": "Bath towel",
        "warp": "Flax 100%",
        "weft": "Flax 100%",
        "details": "None",
        "filenames": [
            "IMG_9805.JPG",
            "IMG_9806.JPG",
            "IMG_9804.JPG",
            "IMG_9803.JPG"
        ]
    },
    {
        "projectname": "Fulfilt",
        "date": "2022-11-08",
        "description": "Soft with tactile details. Keeps your baby cool in summer and warm in winter.",
        "category": "Baby blanket",
        "warp": "Merinowool 100%",
        "weft": "Merino wool and handspun flax",
        "details": "Handspun flax inlays, ladders and fringes.",
        "filenames": [
            "IMG_6816.JPG",
            "IMG_6822.JPG",
            "IMG_6819.JPG",
            "IMG_6820.JPG"
        ]
    },
    {
        "projectname": "Office",
        "date": "2022-02-08",
        "description": "This 100% merino blanket is soft as a kitten and sure to keep you warm while working. It's small size is ideal for the office.",
        "category": "Lap blanket",
        "warp": "Merinowool 100%",
        "weft": "Merino wool 100%",
        "details": "Felted with fringes",
        "filenames": [
            "HOLY7576.JPG",
            "IMG_6829.JPG",
            "IMG_6826.JPG",
            "IMG_6815.JPG"
        ]
    },
    {
        "projectname": "Tote",
        "date": "2022-08-15",
        "description": "Warm and cosy bag in round weave wull keep your things secure while out and about",
        "category": "Bag",
        "warp": "Polyester 70%, Wool 30%",
        "weft": "Polyester 70%, Wool 30%",
        "details": "Clasped weft, twisted fringe",
        "filenames": [
            "IMG_9290.JPG",
            "IMG_9291.JPG",
            "IMG_9293.JPG",
            "IMG_9292.JPG"
        ]
    },
    {
        "projectname": "Waffle",
        "date": "2021-10-12",
        "description": "This thick handtowel will keep you dry again and again.",
        "category": "Hand towel",
        "warp": "Flax 100%",
        "weft": "Flax 100%",
        "details": "None",
        "filenames": [
            "IMG_9822.JPG",
            "IMG_9821.JPG",
            "IMG_9823.JPG",
            "IMG_9820.JPG"
        ]
    },
    {
        "projectname": "Warm",
        "date": "2022-08-10",
        "description": "Soft and warm with a natural fuzziness from the wool while still strong and durable due to the syntetic fibres.",
        "category": "Scarf",
        "warp": "Polyester 70%, Wool 30%",
        "weft": "Polyester 70%, Wool 30%",
        "details": "Fringes, color blocks",
        "filenames": [
            "IMG_9297.JPG",
            "IMG_9297.JPG",
            "IMG_9295.JPG",
            "IMG_9296.JPG"
        ]
    },
    {
        "projectname": "Wobbegong",
        "date": "2022-02-08",
        "description": "Strong, medum to thick in hand and  with a lot of bounce",
        "category": "Baby wrap",
        "warp": "Merinowool 100%",
        "weft": "Merino wool 70%, Flax 30%",
        "details": "Handspun flax inlays",
        "filenames": [
            "IMG_6797.JPG",
            "IMG_6809.JPG",
            "IMG_6814.JPG",
            "IMG_6811.JPG"
        ]
    }
]


function lastCardNumber() {//Returns the number of .card present in the #cardspace
    let cards = $("#cardspace").children(".card").length;
    return cards;
}
function createCardFromArrOgObj(arrObj) {//Creates cards for every object in an array of objects
    let n = lastCardNumber();
    arrObj.forEach(item => {
        $(`#cardspace`).append(`<div class='card' id='card${n}'></div>`);//Create a new card
        let showPic = item["filenames"][0]
        let altText = `Picture of the ${item["category"]} named ${item["projectname"]}`
        $(`#card${n}`).append(`<a class='details-link' id='${item["projectname"]}-details-link' href='javascript:;'><div class='card-img-container'><img id='card${n}-img' src="../../images/${showPic}" alt="${altText}" ></img></div><a>`);//Create an image for the card and add it to the card
        $(`#card${n}`).append(`<div class='basic-info-container card${n}-basic-info-container' id='card${n}-basic-info-container'></div>`);//Create info-container and add to the card
        $(`#card${n}`).append(`<div class='more-info-container' id='card${n}-more-info-container'></div>`);//Create info-container and add to the card

        for (let key in item) {
            let displayKey = key[0].toUpperCase() + key.slice(1);//Capitalize the first letter of the key
            switch (key) {
                case "projectname":
                    $(`#card${n}-basic-info-container`).prepend(`<h2>${item[key]}</h2>`);//Create a title for the card and add it to the card
                    break;
                case "weft":
                case "warp":
                case "details":
                    $(`#card${n}-more-info-container`).append(`<p><span class='key'>${displayKey}:</span><span class='value'> ${item[key]}</<span></p>`);//Add details to the more-info-container
                    break;
                case "description":
                case "category":
                    $(`#card${n}-basic-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);//Add details to the basic-info-container
                case "description":
                    break;
                case "date":
                    $(`#card${n}-basic-info-container`).append(`<p><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);
                    break;
                default:
                    break;
            }
            continue;
        }
        $(`#card${n}-basic-info-container`).append(`<button class='details' id='card${n}-details'>Detailed info</button>`);
        $(`#card${n}-details`).click(function () {
            let name=$(this).attr('id').slice(0,-8);
            console.log(name);
            $(`#${name}-more-info-container`).toggle();
        });
        $(`#card${n}-img`).click(function () {goToDetailPage(item)});
        n++;
    });


}
function goToDetailPage(item) {//Save the clicked item to localstorage and go to the detail page
    localStorage.setItem("viewitem", JSON.stringify(item));
    window.location.href = "/details.html";


}



function limitCardNr(nr) {//Limits the number of cards shown to nr
    let cards = $("#cardspace").children(".card").length;
    if (cards > nr) {
        $("#cardspace").children(".card").slice(nr).remove();
    }
}

function readjustCardSpace() {//Readjusts the cardspace to cover the header area
    $("main").css("grid-row", "1/4");
    $("#cardspace").css("margin-top", "8rem");
}

function pageContentLimiter() {//Switches the number of cards displayed and readjusts cardspace if necessary, depending on the window-location
    let page = window.location.pathname;
    switch (page) {
        case "/":
        case "/index.html":
            console.log("index" + page);
            limitCardNr(6);
            break;
        case "/list.html":
            console.log("list" + page);
            limitCardNr(10);
            readjustCardSpace();
            break;
        case "/about.html":
        case "/details.html":
        default:
            break;
    }
}

$(document).ready(function () {//This is the code that runs when the page is loaded
    console.log(lastCardNumber());
    createCardFromArrOgObj(contents)
    pageContentLimiter();
});
