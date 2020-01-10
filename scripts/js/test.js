var speaker_info = document.getElementById("speakers-info");
var executive_info = document.getElementById("executives-info");
var archive_info = document.getElementById("archives-info");

// SPEAKER VARIABLES
var speaker_cards = document.getElementById("speakers");
speaker_cards = speaker_cards.children[1].children[1];
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
exec_cards = exec_cards.children[1].children[1];
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
spons_cards = spons_cards.children[1].children[1];
var spons_cards_len = spons_cards.childElementCount;
var sponsors = [];
for(var i = 0; i < spons_cards.childElementCount; i++){
    var card = spons_cards.children[i];

    // console.log(card.id);
    sponsors.push(card.id);
}

// ARCHIVESS VARIABLES
var archive_cards = document.getElementById("archives");
archive_cards = archive_cards.children[1].children[1];
var archive_cards_len = archive_cards.childElementCount;
var archives = [];
for(var i = 0; i < archive_cards.childElementCount; i++){
    var card = archive_cards.children[i];

    // console.log(card.id);
    sponsors.push(card.id);
}

function Archive(name, talk, link){
    this.name = name
    this.talk = talk
    this.link = link
}

var archives_data = [];


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
    loadJSON("./json/archives_data.json", function(response){
        var data = JSON.parse(response);
        data = data["archive"];
        // speakers_data = JSON.parse(response);
        // console.log(data);
        for(var i in data){
            // console.log(data[1]);
            // console.log(data[i].name);
            archives_data.push(new Archive(data[i].name, data[i].talk, data[i].link));
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
    } else if(section_name == "archive"){
        if(j==0){
            for(var i=1;i<archive_cards_len;i++){
                card = archive_cards.children[i];
                card.classList.add('shiftCardRight90');
            }
        } else if(j==(archive_cards_len-1)){for(var i=0;i<(archive_cards_len - 1);i++){
                card = archive_cards.children[i];
                card.classList.add('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = archive_cards.children[i];
                card.classList.add('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<archive_cards.childElementCount;i++){
                var card = archive_cards.children[i];
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
    } else if(section_name == "archive"){
        if(j==0){
            for(var i=1;i<archive_cards_len;i++){
                card = archive_cards.children[i];
                card.classList.remove('shiftCardRight90');
            }
        } else if(j==(archive_cards_len-1)){for(var i=0;i<(archive_cards_len - 1);i++){
                card = archive_cards.children[i];
                card.classList.remove('shiftCardLeft90');
            }
        } else{
            for(var i=0;i<j;i++){
                var card = archive_cards.children[i];
                card.classList.remove('shiftCardLeft50');
            }
        
            for(var i=(j+1);i<archive_cards.childElementCount;i++){
                var card = archive_cards.children[i];
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

        speaker_info.classList.remove('pull-animation');
        speaker_info.classList.add('drop-animation');
        // speaker_info.style.display = "flex";
    } else if(type == "executives"){
        var executive = executives_data[j];
        var text = executive_info.children[0].children;
        var image = executive_info.children[1].children;

        text[0].innerHTML = executive["name"];
        console.log(executive["name"]);
        text[1].innerHTML = executive["lead"];
        console.log(executive["lead"]);
        text[2].innerText = executive["write_up"];
        console.log(executive["write_up"]);

        image[0].srcset = executive["picture"];

        executive_info.classList.remove('pull-animation');
        executive_info.classList.add('drop-animation');
        // executive_info.style.display = "flex";
    } else if(type == "archives"){
        var archive = archives_data[j];
        var video = archive_info.children[0].children[0];

        console.log(archive["link"]);
        video.src = archive["link"];

        archive_info.style.display = "block";
    }
}

$("#close-btn-speakers").click(e => {
    speaker_info.classList.add('pull-animation');
    speaker_info.classList.remove('drop-animation');
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


//speakers-scroll function work

const spcards= document.querySelector('#card-speakers');
const pcard = document.querySelector('.card');
const size= pcard.clientWidth;
const scroll_size= spcards.clientWidth;
let counter=1;
const prev = document.querySelector('#left-arrow-sp');
const next = document.querySelector('#right-arrow-sp');
prev.addEventListener('click',() =>{
    
    spcards.style.transition = "transform 0.4s ease-in-out";
    
    spcards.style.transform='translateX(0px)';
    counter=1;
   // next.firstElementChild.style.opacity='1';
})
next.addEventListener('click',() =>{
  //  prev.firstElementChild.style.opacity='1';
    const val = 3/(scroll_size/size);
    spcards.style.transition = "transform 0.4s ease-in-out";
    
    if(counter>val*1.5){
     //   next.firstElementChild.style.opacity='0';
    return;  }
    else{        
        counter++;
    spcards.style.transform='translateX('+(-(size+prev.scrollWidth)*(counter))+'px)';
    //spcards.style.width='90%';
    }
 
})


//executives-scroll function work

const spcards1= document.querySelector('#card-executives');
const scroll_size1= spcards1.clientWidth;
let counter1=0;
const prev1 = document.querySelector('#left-arrow-ex');
const next1 = document.querySelector('#right-arrow-ex');
prev1.addEventListener('click',() =>{
    
    spcards1.style.transition = "transform 0.4s ease-in-out";
    
    spcards1.style.transform='translateX(0px)';
    counter1=0;
    //next1.firstElementChild.style.opacity='1';
})
next1.addEventListener('click',() =>{

    const val1 = 11/(scroll_size1/size);
    spcards1.style.transition = "transform 0.4s ease-in-out";
    
    if(counter1>val1){
    return;  }
    else{        
        counter1++;
spcards1.style.transform='translateX('+(-(size*2.5+prev.scrollWidth)*(counter1))+'px)';
    
}
 
})


//sponsors-scroll function work

const spcards2= document.querySelector('#card-sponsors');
const scroll_size2= spcards2.clientWidth;
let counter2=1;
const prev2 = document.querySelector('#left-arrow-spo');
const next2 = document.querySelector('#right-arrow-spo');
prev2.addEventListener('click',() =>{
    
    spcards2.style.transition = "transform 0.4s ease-in-out";
    
    spcards2.style.transform='translateX(0px)';
    counter2=0;
})
next2.addEventListener('click',() =>{


    const val2 = 7/(scroll_size2/size);
    spcards2.style.transition = "transform 0.4s ease-in-out";
    
    if(counter2>val2*1.5)
    return;  
    else{
        
        counter2++;
    spcards2.style.transform='translateX('+(-(size+prev2.scrollWidth)*(counter2))+'px)';
    //spcards.style.width='90%';
    }
 
})


//archive-scroll function work

const spcards3= document.querySelector('#card-archive');
const scroll_size3= spcards3.clientWidth;
let counter3=1;
const prev3 = document.querySelector('#left-arrow-arc');
const next3 = document.querySelector('#right-arrow-arc');
prev3.addEventListener('click',() =>{
    
    spcards3.style.transition = "transform 0.4s ease-in-out";
    
    spcards3.style.transform='translateX(0px)';
    counter3=0;
    next3.firstElementChild.style.opacity='1';
})
next3.addEventListener('click',() =>{
    prev3.firstElementChild.style.opacity='1';
    const val3 = 7/(scroll_size3/size);
    spcards3.style.transition = "transform 0.4s ease-in-out";
    
    if(counter3>val3)
    return;  
    else{
        
        counter3++;
    spcards3.style.transform='translateX('+(-(size+prev3.clientWidth)*(counter3))+'px)';
    //spcards.style.width='90%';
    }
 
})
