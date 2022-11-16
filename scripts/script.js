

const contents = [
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
            "IMG_6835.JPG",
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
            "IMG_9817.JPG",
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
            "IMG_9820.JPG",
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
$(document).ready(function () {//TODO: Add all steps to create the gallery
    console.log("ready");
    console.log(lastCardNumber());
   
    createCardFromArrOgObj(contents)
    pageContentSwitch();
});

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
        $(`#card${n}`).append(`<div class='card-img-container'><img id='card${n}-img' src="../../images/${showPic}" alt="${altText}" ></img></div>`);//Create an image for the card and add it to the card
        $(`#card${n}`).append(`<a class='details-link' id='${item["projectname"]}-details-link' href='javascript:;'>Link<a>`);//Create a title for the card and add it to the card

       
        for (let key in item) {
            let displayKey = key[0].toUpperCase() + key.slice(1);//Capitalize the first letter of the key
            if (key == "projectname") {
                $(`#card${n}`).append(`<h2>${item[key]}</h2>`);
            } else {
                $(`#card${n}`).append(`<p class='${key}'><span class='key'>${displayKey}: </span><span class='value'>${item[key]}</<span></p>`);//Create a new card
            }
        }
        $(`#card${n}`).append(`<button class='details'>Detailed info</button>`);
        $(`#card${n}`).on("click", function (){detailPageGenerator(item)});

        n++;

    });

}
function addLinkToDetailPage(){


}
function detailPageGenerator(item){//Ej kontrollerad
    //TODO: Add a back button
    //TODO: Replace heading
    //TODO: Add remaining info
    $("#cardspace").children(".card").remove();
    

    
    let index=1;
    item["filenames"].forEach(filename => {

        $(`#cardspace`).append(`<div class='photocard' id='card${index}'></div>`);//Create a new card

        $(`#card${index}`).append(`<div class='photocard-img-container'><img id='pic${index}' src="../../images/${filename}" alt="alt text ${index}" ></img></div>`);
        //TODO:Fix alt-text
        index++;
    });
}
function createCardfromObj(object) {//Creates nr cards with class "card" and id "cardn"
    let n = lastCardNumber();
    $(`#cardspace`).append(`<div class='card' id='card${n}'></div>`);
    $(`#card${n}`).text("Hello" + n);
    $(`#card${n}`).append(`<h2></h2>`).text(object.projectname);
    $(`#card${n}`).append(`<p></p>`).text(object.date);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<a></a>`);


}

function limitCardNr(nr) {//Limits the number of cards to nr
    let cards = $("#cardspace").children(".card").length;
    if (cards > nr) {
        $("#cardspace").children(".card").slice(nr).remove();
    }
}

function readjustCardSpace(){
    $("main").css("grid-row", "1/4");
}

function pageContentSwitch(){//Switches the number of cards displayed depending on the page shown
    let page = window.location.pathname;

    switch (page) {
        case "/index.html":
            console.log("index"+page);
            limitCardNr(6);
            break;
        case "/list.html":
            console.log("list"+page);
            limitCardNr(10);
            readjustCardSpace();
            break;
        case "/about.html":
            console.log("about"+page);
            break;
        case "/details.html":
            console.log("contact"+page);
            break;
        default:
            console.log("default "+page);

}
}