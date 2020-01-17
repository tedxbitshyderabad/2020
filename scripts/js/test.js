var speaker_info = document.getElementById("speakers-info");
var executive_info = document.getElementById("executives-info");
var archive_info = document.getElementById("archives-info");

// SPEAKER VARIABLES
var speaker_cards = document.getElementById("speakers");
speaker_cards = speaker_cards.children[1].children[1];
var speaker_cards_len = speaker_cards.childElementCount;
var speakers = [];
for (var i = 0; i < speaker_cards.childElementCount; i++) {
    var card = speaker_cards.children[i];

    // console.log(card.id);
    speakers.push(card.id);
}

function Speaker(name, occupation, talk, write_up, fb, insta, lin, tw, picture) {
    this.name = name
    this.occupation = occupation
    this.talk = talk
    this.write_up = write_up
    this.fb = fb
    this.insta = insta
    this.lin = lin
    this.tw = tw
    this.picture = picture
}

var speakers_data = [];


// EXECUTIVE VARIABLES
var exec_cards = document.getElementById("executives");
exec_cards = exec_cards.children[1].children[1];
var exec_cards_len = exec_cards.childElementCount;
var executives = [];
for (var i = 0; i < exec_cards.childElementCount; i++) {
    var card = exec_cards.children[i];

    // console.log(card.id);
    executives.push(card.id);
}

function Executive(name, post, write_up, fb, insta, lin, picture) {
    this.name = name
    this.post = post
    this.write_up = write_up
    this.fb = fb
    this.insta = insta
    this.lin = lin
    this.picture = picture
}

var executives_data = [];

// SPONSORS VARIABLES
var spons_cards = document.getElementById("sponsors");
spons_cards = spons_cards.children[1].children[1];
var spons_cards_len = spons_cards.childElementCount;
var sponsors = [];
for (var i = 0; i < spons_cards.childElementCount; i++) {
    var card = spons_cards.children[i];

    // console.log(card.id);
    sponsors.push(card.id);
}

// ARCHIVESS VARIABLES
var archive_cards = document.getElementById("archives");
archive_cards = archive_cards.children[1].children[1];
var archive_cards_len = archive_cards.childElementCount;
var archives = [];
for (var i = 0; i < archive_cards.childElementCount; i++) {
    var card = archive_cards.children[i];

    // console.log(card.id);
    sponsors.push(card.id);
}

function Archive(name, talk, link) {
    this.name = name
    this.talk = talk
    this.link = link
}

var archives_data = [];


// Loading all the data from the JSON file
function loadJSON(filename, callback) {
    var speakers_file = new XMLHttpRequest();
    speakers_file.overrideMimeType("application/json");
    speakers_file.open("GET", filename, true);
    console.log("Opening File");
    speakers_file.onreadystatechange = function () {
        console.log("File is ready");
        if (speakers_file.readyState == 4 && (speakers_file.status == 200 || speakers_file.status == 0)) {
            console.log("Sending Callback");
            callback(speakers_file.responseText);
        }
    }
    speakers_file.send(null);
    console.log("Done");
}

window.onload = function () {
    loadJSON("./json/speakers_data.json", function (response) {
        var data = JSON.parse(response);
        data = data["speaker"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            speakers_data.push(new Speaker(data[i].name, data[i].occupation, data[i].talk_name, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].twitter, data[i].picture_loc));
        }
    });
    loadJSON("./json/executives_data.json", function (response) {
        var data = JSON.parse(response);
        data = data["executive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            console.log(data[i].picture_loc);
            executives_data.push(new Executive(data[i].name, data[i].lead, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].picture_loc));
        }
    });
    loadJSON("./json/archives_data.json", function (response) {
        var data = JSON.parse(response);
        data = data["archive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for (var i in data) {
            // console.log(data[1]);
            // console.log(data[i].name);
            archives_data.push(new Archive(data[i].name, data[i].talk, data[i].link));
        }
    });
}

window.addEventListener("card-arrow", function (e) {
    console.log("Hello");
});

function shiftScaleUp(j, section_name) {
    j = j - 1;
    
    if(screen.width >= 768 && screen.width <= 1024){
        console.log("hello");
    }
    else {
        if (section_name == "speakers") {
            if (j == 0) {
                for (var i = 1; i < speaker_cards_len; i++) {
                    card = speaker_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (speaker_cards_len - 1)) {
                for (var i = 0; i < (speaker_cards_len - 1); i++) {
                    card = speaker_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "executives") {
            if (j == 0) {
                for (var i = 1; i < exec_cards_len; i++) {
                    card = exec_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (exec_cards_len - 1)) {
                for (var i = 0; i < (exec_cards_len - 1); i++) {
                    card = exec_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = exec_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
                    var card = exec_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "sponsors") {
            if (j == 0) {
                for (var i = 1; i < spons_cards_len; i++) {
                    card = spons_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (spons_cards_len - 1)) {
                for (var i = 0; i < (spons_cards_len - 1); i++) {
                    card = spons_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = spons_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
                    var card = spons_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.add('shiftCardRight50');
                }
            }
        }
    }
}

function shiftScaleDown(j, section_name) {
    j = j - 1;

    if(screen.width >= 768 && screen.width<=1024 && screen.orientation.angle == 90){
        console.log("bye");
    } else {
        if (section_name == "speakers") {
            if (j == 0) {
                for (var i = 1; i < speaker_cards_len; i++) {
                    card = speaker_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (speaker_cards_len - 1)) {
                for (var i = 0; i < (speaker_cards_len - 1); i++) {
                    card = speaker_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < speaker_cards.childElementCount; i++) {
                    var card = speaker_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "executives") {
            if (j == 0) {
                for (var i = 1; i < exec_cards_len; i++) {
                    card = exec_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (exec_cards_len - 1)) {
                for (var i = 0; i < (exec_cards_len - 1); i++) {
                    card = exec_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = exec_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < exec_cards.childElementCount; i++) {
                    var card = exec_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "sponsors") {
            if (j == 0) {
                for (var i = 1; i < spons_cards_len; i++) {
                    card = spons_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (spons_cards_len - 1)) {
                for (var i = 0; i < (spons_cards_len - 1); i++) {
                    card = spons_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = spons_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < spons_cards.childElementCount; i++) {
                    var card = spons_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        } else if (section_name == "archive") {
            if (j == 0) {
                for (var i = 1; i < archive_cards_len; i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight90');
                }
            } else if (j == (archive_cards_len - 1)) {
                for (var i = 0; i < (archive_cards_len - 1); i++) {
                    card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft90');
                }
            } else {
                for (var i = 0; i < j; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardLeft50');
                }
    
                for (var i = (j + 1); i < archive_cards.childElementCount; i++) {
                    var card = archive_cards.children[i];
                    card.classList.remove('shiftCardRight50');
                }
            }
        }
    }
    
}


// Write function to change values of speaker-info class div based on button click.
function generate(j, type) {

    j = j - 1;

    if (type == "speakers") {
        var speaker = speakers_data[j];
        var text = speaker_info.children[0].children;
        var image = speaker_info.children[1].children;

        text[0].innerHTML = speaker["name"];
        console.log(speaker["name"]);
        text[1].innerHTML = speaker["occupation"];
        console.log(speaker["occupation"]);
        text[2].innerText = speaker["talk"];
        console.log(speaker["talk"]);
        text[3].innerText = speaker["write_up"];
        console.log(speaker["write_up"]);

        image[0].srcset = speaker["picture"];

        if(screen.width >= 768 && screen.width <= 1024){
            console.log("Display Stuff");
        } else {
            speaker_info.classList.remove('pull-animation');
            speaker_info.classList.add('drop-animation');
        }
        
        // speaker_info.style.display = "flex";
    } else if (type == "executives") {
        var executive = executives_data[j];
        executive_info.children[0].children[0]
        var text = executive_info.children[0].children[0].children;
        var image = executive_info.children[1].children;
        var social = executive_info.children[0].children[0].children[3];

        text[0].innerHTML = executive["name"];
        console.log(executive["name"]);
        text[1].innerHTML = executive["post"];
        console.log(executive["post"]);
        text[2].innerText = executive["write_up"];
        console.log(executive["write_up"]);

        social.children[0].children[0].href = executive["lin"];
        console.log(executive["lin"]);
        social.children[1].children[0].href = executive["insta"];
        console.log(executive["insta"]);
        social.children[2].children[0].href = executive["fb"];
        console.log(executive["fb"]);

        image[0].srcset = executive["picture"];
        console.log(executive["picture"]);

        // if(screen.width >= 768 && screen.width <= 1024){
        //     console.log("Display Stuff");
        // } else {
            executive_info.classList.remove('pull-animation');
            executive_info.classList.add('drop-animation');
        // }
        // executive_info.style.display = "flex";
    } else if (type == "archives") {
        var archive = archives_data[j];
        var video = archive_info.children[0].children[0];

        console.log(archive["link"]);
        video.src = archive["link"];

        if(screen.width >= 768 && screen.width <= 1024){
            console.log("Display Stuff");
        } else {
            archive_info.style.display = "block";
        }
    }
}

$("#close-btn-speakers").click(e => {

    if(screen.width >= 768 && screen.width <= 1024){
        console.log("Close Stuff");
    } else {
        speaker_info.classList.add('pull-animation');
        speaker_info.classList.remove('drop-animation');
    }
    // speaker_info.style.display = "none";
});
$("#close-btn-executives").click(e => {
    executive_info.classList.add('pull-animation');
    executive_info.classList.remove('drop-animation');
    // executive_info.style.display = "none";
});
$("#archives-info").click(e => {
    archive_info.children[0].children[0].src = "";
    archive_info.style.display = "none";
});


///// SCROLL FUNCTIONS /////
const margin = window.innerWidth * 5 / 100;
const cardWidth = 395;

// Speakers Variables
const noOfSpeakers = 8;
let counter_sp = 0;
let pushedBy_sp = 0;

// Executive Variables
const noOfExecutives = 10;
let counter_ex = 0;
let pushedBy_ex = 0;

// Sponsors Variables
const noOfSponsors = 8;
let counter_spon = 0;
let pushedBy_spon = 0;

// Archive Variables
const noOfArchives = 7;
let counter_ar = 0;
let pushedBy_ar = 0;

// document.getElementsByClassName("section")[i].children[1].children[1].clientWidth / 395
// document.getElementsByClassName("left-button")[i].parentElement.parentElement.parentElement.id
$(".left-button").on('click', function(){
    console.log($(this));
    console.log($(this).parent().parent().parent().attr('id'));
    var section = $(this).parent().parent().parent().attr('id');
    console.log($('#' + section));
    console.log($('#' + section).children(".real-content").children(".cards"));
    var cards = $('#' + section).children(".real-content").children(".cards");
    console.log(cards);
    var sectionWidth = cards.innerWidth();
    var noOfCards = Math.floor(sectionWidth / cardWidth);
    var noOfActualCards = 0;
    var counter = 0;
    var pushedBy = 0;
    switch(section){
        case("speakers"):{
            noOfActualCards = noOfSpeakers;
            counter = counter_sp;
            pushedBy = pushedBy_sp;
            break;
        }
        case("executives"):{
            noOfActualCards = noOfExecutives;
            counter = counter_ex;
            pushedBy = pushedBy_ex;
            break;
        }
        case("sponsors"):{
            noOfActualCards = noOfSponsors;
            counter = counter_spon;
            pushedBy = pushedBy_spon;
            break;
        }
        case("archives"):{
            noOfActualCards = noOfArchives;
            counter = counter_ar;
            pushedBy = pushedBy_ar;
            break;
        }
    }
    var num = noOfActualCards - noOfCards;
    if(counter > 1){
        console.log(counter);
        cards.css("transition", "transform 0.4s ease-in-out");
        pushedBy -= cardWidth;
        cards.css("transform", 'translateX(-'+pushedBy+'px)');
        counter--;
        switch(section){
            case("speakers"):{
                pushedBy_sp = pushedBy;
                counter_sp = counter;
                break;
            }
            case("executives"):{
                pushedBy_ex = pushedBy;
                counter_ex = counter;
                break;
            }
            case("sponsors"):{
                pushedBy_spon = pushedBy;
                counter_spon = counter;
                break;
            }
            case("archives"):{
                pushedBy_ar = pushedBy;
                counter_ar = counter;
                break;
            }
        }
    } else if(counter == 1 || counter == num){
        console.log(counter);
        cards.css("transition", "transform 0.4s ease-in-out");
        pushedBy -= (margin + cardWidth);
        cards.css("transform", 'translateX(-'+pushedBy+'px)');
        counter--;
        switch(section){
            case("speakers"):{
                pushedBy_sp = pushedBy;
                counter_sp = counter;
                break;
            }
            case("executives"):{
                pushedBy_ex = pushedBy;
                counter_ex = counter;
                break;
            }
            case("sponsors"):{
                pushedBy_spon = pushedBy;
                counter_spon = counter;
                break;
            }
            case("archives"):{
                pushedBy_ar = pushedBy;
                counter_ar = counter;
                break;
            }
        }
    } // else if(counter == 0){
    //     console.log(counter);
    //     cards.css("transition", "transform 0.4s ease-in-out");
    //     pushedBy -= (margin);
    //     cards.css("transform", 'translateX(-'+pushedBy+'px)');
    //     counter--;
    //     switch(section){
    //         case("speakers"):{
    //             pushedBy_sp = pushedBy;
    //             counter_sp = counter;
    //             break;
    //         }
    //         case("executives"):{
    //             pushedBy_ex = pushedBy;
    //             counter_ex = counter;
    //             break;
    //         }
    //         case("sponsors"):{
    //             pushedBy_spon = pushedBy;
    //             counter_spon = counter;
    //             break;
    //         }
    //         case("archives"):{
    //             pushedBy_ar = pushedBy;
    //             counter_ar = counter;
    //             break;
    //         }
    //     }
    // }
});
$(".right-button").on('click', function(){
    console.log($(this));
    console.log($(this).parent().parent().parent().attr('id'));
    var section = $(this).parent().parent().parent().attr('id');
    console.log($('#' + section));
    console.log($('#' + section).children(".real-content").children(".cards"));
    var cards = $('#' + section).children(".real-content").children(".cards");
    var sectionWidth = cards.innerWidth();
    var noOfCards = Math.floor(sectionWidth / cardWidth);
    console.log(noOfCards);
    var noOfActualCards = 0;
    var counter = 0;
    var pushedBy = 0;
    switch(section){
        case("speakers"):{
            noOfActualCards = noOfSpeakers;
            counter = counter_sp;
            pushedBy = pushedBy_sp;
            break;
        }
        case("executives"):{
            noOfActualCards = noOfExecutives;
            counter = counter_ex;
            pushedBy = pushedBy_ex;
            break;
        }
        case("sponsors"):{
            noOfActualCards = noOfSponsors;
            counter = counter_spon;
            pushedBy = pushedBy_spon;
            break;
        }
        case("archives"):{
            noOfActualCards = noOfArchives;
            counter = counter_ar;
            pushedBy = pushedBy_ar;
            break;
        }
    }
    var num = noOfActualCards - noOfCards;
    if(counter == 0){
        console.log(counter);
        cards.css("transition", "transform 0.4s ease-in-out");
        pushedBy += (margin + cardWidth);
        cards.css("transform", 'translateX(-'+pushedBy+'px)');
        counter++;
        switch(section){
            case("speakers"):{
                pushedBy_sp = pushedBy;
                counter_sp = counter;
                break;
            }
            case("executives"):{
                pushedBy_ex = pushedBy;
                counter_ex = counter;
                break;
            }
            case("sponsors"):{
                pushedBy_spon = pushedBy;
                counter_spon = counter;
                break;
            }
            case("archives"):{
                pushedBy_ar = pushedBy;
                counter_ar = counter;
                break;
            }
        }
    } else if(counter < num){
        console.log(counter);
        cards.css("transition", "transform 0.4s ease-in-out");
        pushedBy += cardWidth;
        cards.css("transform", 'translateX(-'+pushedBy+'px)');
        counter++;
        switch(section){
            case("speakers"):{
                pushedBy_sp = pushedBy;
                counter_sp = counter;
                break;
            }
            case("executives"):{
                pushedBy_ex = pushedBy;
                counter_ex = counter;
                break;
            }
            case("sponsors"):{
                pushedBy_spon = pushedBy;
                counter_spon = counter;
                break;
            }
            case("archives"):{
                pushedBy_ar = pushedBy;
                counter_ar = counter;
                break;
            }
        }
    } // else if(counter == num){
    //     console.log(counter);
    //     cards.css("transition", "transform 0.4s ease-in-out");
    //     pushedBy += margin;
    //     cards.css("transform", 'translateX(-'+pushedBy+'px)');
    //     counter++;
    //     switch(section){
    //         case("speakers"):{
    //             pushedBy_sp = pushedBy;
    //             counter_sp = counter;
    //             break;
    //         }
    //         case("executives"):{
    //             pushedBy_ex = pushedBy;
    //             counter_ex = counter;
    //             break;
    //         }
    //         case("sponsors"):{
    //             pushedBy_spon = pushedBy;
    //             counter_spon = counter;
    //             break;
    //         }
    //         case("archives"):{
    //             pushedBy_ar = pushedBy;
    //             counter_ar = counter;
    //             break;
    //         }
    //     }
    // }
});

// Speakers Scroll
// const spcards = document.querySelector('#card-speakers');
// const pcard = document.querySelector('.card');
// const size = pcard.clientWidth;
// const scroll_size = spcards.clientWidth;
// let counter_sp = 1;
// const prev = document.querySelector('#left-arrow-sp');
// const next = document.querySelector('#right-arrow-sp');
// prev.addEventListener('click', () => {

//     spcards.style.transition = "transform 0.4s ease-in-out";

//     spcards.style.transform = 'translateX(0px)';
//     counter_sp = 1;
//     // next.firstElementChild.style.opacity='1';
// })
// next.addEventListener('click', () => {
//     //  prev.firstElementChild.style.opacity='1';
//     const val = 3 / (scroll_size / size);
//     spcards.style.transition = "transform 0.4s ease-in-out";

//     if (counter_sp > val * 1.5) {
//         //   next.firstElementChild.style.opacity='0';
//         return;
//     }
//     else {
//         counter_sp++;
//         spcards.style.transform = 'translateX(' + (-(size + prev.scrollWidth) * (counter)) + 'px)';
//         //spcards.style.width='90%';
//     }

// })

// Executives Scroll
// const ex_cards = document.querySelector('#card-executives');
// const ex_scrollSize = ex_cards.clientWidth;
// const ex_cardSize = 420;
// const ex_prev = document.querySelector('#left-arrow-ex');
// const ex_next = document.querySelector('#right-arrow-ex');
// let counter_ex = 0;
// let pushedBy = 0;
// ex_prev.addEventListener('click', () => {

//     ex_cards.style.transition = "transform 0.4s ease-in-out";

//     if ((counter_ex >= 1)) {
//         if (counter_ex == 6) {
//             pushedBy -= margin;
//         }
//         counter_ex--;
//         pushedBy -= 420;
//         console.log(counter_ex);
//         ex_cards.style.transform = 'translateX(-' + (pushedBy) + 'px)';
//     }
// })
// ex_next.addEventListener('click', () => {

//     const val1 = 11 / (ex_scrollSize / ex_cardSize);
//     ex_cards.style.transition = "transform 0.4s ease-in-out";

//     if ((counter_ex < 6)) {
//         if (counter_ex == 5) {
//             pushedBy += margin;
//         }
//         counter_ex++;
//         pushedBy += 420;
//         console.log(counter_ex);
//         ex_cards.style.transform = 'translateX(-' + (pushedBy) + 'px)';
//     }
// })


// Sponsors Scroll
// const spcards2 = document.querySelector('#card-sponsors');
// const scroll_size2 = spcards2.clientWidth;
// let counter2 = 1;
// const prev2 = document.querySelector('#left-arrow-spo');
// const next2 = document.querySelector('#right-arrow-spo');
// prev2.addEventListener('click', () => {

//     spcards2.style.transition = "transform 0.4s ease-in-out";

//     spcards2.style.transform = 'translateX(0px)';
//     counter2 = 0;
// })
// next2.addEventListener('click', () => {


//     const val2 = 7 / (scroll_size2 / size);
//     spcards2.style.transition = "transform 0.4s ease-in-out";

//     if (counter2 > val2 * 1.5)
//         return;
//     else {

//         counter2++;
//         spcards2.style.transform = 'translateX(' + (-(size + prev2.scrollWidth) * (counter2)) + 'px)';
//         //spcards.style.width='90%';
//     }

// })


// //archive-scroll function work

// const spcards3 = document.querySelector('#card-archive');
// const scroll_size3 = spcards3.clientWidth;
// let counter3 = 1;
// const prev3 = document.querySelector('#left-arrow-arc');
// const next3 = document.querySelector('#right-arrow-arc');
// prev3.addEventListener('click', () => {

//     spcards3.style.transition = "transform 0.4s ease-in-out";

//     spcards3.style.transform = 'translateX(0px)';
//     counter3 = 0;
//     next3.firstElementChild.style.opacity = '1';
// })
// next3.addEventListener('click', () => {
//     prev3.firstElementChild.style.opacity = '1';
//     const val3 = 7 / (scroll_size3 / size);
//     spcards3.style.transition = "transform 0.4s ease-in-out";

//     if (counter3 > val3)
//         return;
//     else {

//         counter3++;
//         spcards3.style.transform = 'translateX(' + (-(size + prev3.clientWidth) * (counter3)) + 'px)';
//         //spcards.style.width='90%';
//     }

// })