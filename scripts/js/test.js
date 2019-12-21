// const fs = require('fs');

// SPEAKER VARIABLES
var speaker_cards = document.getElementById("speakers");
speaker_cards = speaker_cards.children[1];
var speaker_cards_len = speaker_cards.childElementCount;
var speakers = [];
for(var i = 0; i < speaker_cards.childElementCount; i++){
    var card = speaker_cards.children[i];

    // console.log(card.id);
    speakers.push(card.id);
}

function Speaker(name, occupation, talk, write_up, fb, insta, lin, tw, picture){
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
exec_cards = exec_cards.children[1];
var exec_cards_len = exec_cards.childElementCount;
var executives = [];
for(var i = 0; i < exec_cards.childElementCount; i++){
    var card = exec_cards.children[i];

    // console.log(card.id);
    executives.push(card.id);
}

function Executive(name, post, write_up, fb, insta, lin, picture){
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
spons_cards = spons_cards.children[1];
var spons_cards_len = spons_cards.childElementCount;
var sponsors = [];
for(var i = 0; i < spons_cards.childElementCount; i++){
    var card = spons_cards.children[i];

    // console.log(card.id);
    sponsors.push(card.id);
}


// $.getJSON('speakers_data.json', function(data){
//     $.each(data.speaker, function(i, speaker){
//         speakers_data.push(Speaker(speaker.name, speaker.occupation, speaker.talk, speaker.write_up, speaker.facebook, speaker.insta, speaker.linkedin, speaker.twitter, speaker.picture_loc));
//     });
// });

// fetch("speakers_data.json")
// .then(res => res.json())
// .then(data => function(){
//     for(let i in data){
//         speakers_data.push(Speaker(data.name, data.occupation, data.talk, data.write_up, data.facebook, data.insta, data.linkedin, data.twitter, data.picture_loc));
//     }
// })

function loadJSON(filename, callback){
    var speakers_file = new XMLHttpRequest();
    speakers_file.overrideMimeType("application/json");
    speakers_file.open("GET", filename, true);
    console.log("Opening File");
    speakers_file.onreadystatechange = function() {
        console.log("File is ready");
        if(speakers_file.readyState == 4 && (speakers_file.status == 200 || speakers_file.status == 0)){
            console.log("Sending Callback");
            callback(speakers_file.responseText);
        }
    }
    speakers_file.send(null);
    console.log("Done");
}

window.onload = function() {
    loadJSON("./json/speakers_data.json", function(response){
        var data = JSON.parse(response);
        console.log(data);
        for(let speaker in data){
            // console.log(data[1]);
            this.speakers_data.push(Speaker(speaker.name, speaker.occupation, speaker.talk, speaker.write_up, speaker.facebook, speaker.insta, speaker.linkedin, speaker.twitter, speaker.picture_loc));
        }
    });
}

function shiftScaleUp(j, section_name){
    j = j-1;

    if(section_name == "speakers"){
        if(j==0){
            for(var i=1;i<speaker_cards_len;i++){
                card = speaker_cards.children[i];
                card.classList.add('shiftCardRight90');
            }
        } else if(j==(speaker_cards_len-1)){
            for(var i=0;i<(speaker_cards_len - 1);i++){
                card = speaker_cards.children[i];
                card.classList.add('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = speaker_cards.children[i];
                card.classList.add('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<speaker_cards.childElementCount;i++){
                var card = speaker_cards.children[i];
                card.classList.add('shiftCardRight50');
            }
        }
    } else if(section_name == "executives"){
        if(j==0){
            for(var i=1;i<exec_cards_len;i++){
                card = exec_cards.children[i];
                card.classList.add('shiftCardRight90');
            }
        } else if(j==(exec_cards_len-1)){for(var i=0;i<(exec_cards_len - 1);i++){
                card = exec_cards.children[i];
                card.classList.add('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = exec_cards.children[i];
                card.classList.add('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<exec_cards.childElementCount;i++){
                var card = exec_cards.children[i];
                card.classList.add('shiftCardRight50');
            }
        }
    } else if(section_name == "sponsors"){
        if(j==0){
            for(var i=1;i<spons_cards_len;i++){
                card = spons_cards.children[i];
                card.classList.add('shiftCardRight90');
            }
        } else if(j==(spons_cards_len-1)){for(var i=0;i<(spons_cards_len - 1);i++){
                card = spons_cards.children[i];
                card.classList.add('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = spons_cards.children[i];
                card.classList.add('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<spons_cards.childElementCount;i++){
                var card = spons_cards.children[i];
                card.classList.add('shiftCardRight50');
            }
        }
    }
}

function shiftScaleDown(j, section_name){
    j = j-1;

    if(section_name == "speakers"){
        if(j==0){
            for(var i=1;i<speaker_cards_len;i++){
                card = speaker_cards.children[i];
                card.classList.remove('shiftCardRight90');
            }
        } else if(j==(speaker_cards_len-1)){for(var i=0;i<(speaker_cards_len - 1);i++){
                card = speaker_cards.children[i];
                card.classList.remove('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = speaker_cards.children[i];
                card.classList.remove('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<speaker_cards.childElementCount;i++){
                var card = speaker_cards.children[i];
                card.classList.remove('shiftCardRight50');
            }
        }
    } else if(section_name == "executives"){
        if(j==0){
            for(var i=1;i<exec_cards_len;i++){
                card = exec_cards.children[i];
                card.classList.remove('shiftCardRight90');
            }
        } else if(j==(exec_cards_len-1)){for(var i=0;i<(exec_cards_len - 1);i++){
                card = exec_cards.children[i];
                card.classList.remove('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = exec_cards.children[i];
                card.classList.remove('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<exec_cards.childElementCount;i++){
                var card = exec_cards.children[i];
                card.classList.remove('shiftCardRight50');
            }
        }
    } else if(section_name == "sponsors"){
        if(j==0){
            for(var i=1;i<spons_cards_len;i++){
                card = spons_cards.children[i];
                card.classList.remove('shiftCardRight90');
            }
        } else if(j==(spons_cards_len-1)){for(var i=0;i<(spons_cards_len - 1);i++){
                card = spons_cards.children[i];
                card.classList.remove('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = spons_cards.children[i];
                card.classList.remove('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<spons_cards.childElementCount;i++){
                var card = spons_cards.children[i];
                card.classList.remove('shiftCardRight50');
            }
        }
    }
}
var arrow = document.querySelectorAll('.card-arrow');
var infor = document.getElementById('speakers-info');
var info = document.querySelectorAll('.info');
arrow.forEach(items => {
    items.addEventListener('click',generate);
});
function generate(e){
     
    infor.style.display="block";
    removeShow();
   var grabItem = document.querySelector(`#${this.id}-content`);
    grabItem.classList.add('show');

}

function removeShow() {

    info.forEach(items =>{
     items.classList.remove('show');
 });
}
