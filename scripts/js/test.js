var speaker_info = document.getElementById("speakers-info");
var executive_info = document.getElementById("executives-info");

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

// Loading all the data from the JSON file
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
        data = data["speaker"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for(var i in data){
            // console.log(data[1]);
            // console.log(data[i].name);
            speakers_data.push(new Speaker(data[i].name, data[i].occupation, data[i].talk_name, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].twitter, data[i].picture_loc));
        }
    });
    loadJSON("./json/executives_data.json", function(response){
        var data = JSON.parse(response);
        data = data["executive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for(var i in data){
            // console.log(data[1]);
            // console.log(data[i].name);
            executives_data.push(new Executive(data[i].name, data[i].lead, data[i].write_up, data[i].facebook, data[i].insta, data[i].linkedin, data[i].twitter, data[i].picture_loc));
        }
    });
}

window.addEventListener("card-arrow", function(e){
    console.log("Hello");
});

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
        } else if(j==(exec_cards_len-1)){
            for(var i=0;i<(exec_cards_len - 1);i++){
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


// Write function to change values of speaker-info class div based on button click.
function generate(j, type){

    j = j-1;

    if(type == "speakers"){
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

        speaker_info.style.display = "flex";
    } else if(type == "executives"){
        var executive = executives_data[j];
        var text = executive_info.children[0].children;
        var image = executive_info.children[1].children;

        text[0].innerHTML = executive["name"];
        console.log(executive["name"]);
        text[1].innerHTML = executive["occupation"];
        console.log(executive["occupation"]);
        text[2].innerText = executive["write_up"];
        console.log(executive["write_up"]);

        image[0].srcset = executive["picture"];

        executive.style.display = "flex";
    }
}

$("#speakers-info").click(e => {
    speaker_info.style.display = "none";
});
$("#executives-info").click(e => {
    executive_info.style.display = "none";
});