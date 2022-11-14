
const birdie ={
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
}

function createGalleryItem(item) {//TODO: Add all steps to create a gallery item
}

$(document).ready(function(){//TODO: Add all steps to create the gallery
    console.log("ready");
    
    createCards(10);
    
    //createCards(3)


   
});

function createCards(nr){//Creates card with class "card" and id "cardn"
    for(let n=0; n<nr; n++){
    $(`main`).append(`<div class='card' id='card${n}'></div>`);
    $(`#card${n}`).text("Hello"+n);
    $(`#card${n}`).append(`<h2></h2>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<p></p>`);
    $(`#card${n}`).append(`<a></a>`);
    }

}

function tester(current,n) {
    let thisCard=$(`#card${n}`)
    function placeCardContents(card,el,content){
        card.find(el).text(content)
    }
    placeCardContents(thisCard,"h2",current.projectname)
    placeCardContents(thisCard,"p",current.date)
    placeCardContents(thisCard,"p",current.description)
}

