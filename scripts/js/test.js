// SPEAKER VARIABLES
var speaker_cards = document.getElementById("speakers");
speaker_cards = speaker_cards.children[1];
var speaker_cards_len = speaker_cards.childElementCount;
var speakers = [];
for(var i = 0; i < speaker_cards.childElementCount; i++){
    var card = speaker_cards.children[i];

    console.log(card.id);
    speakers.push(card.id);
}

// EXECUTIVE VARIABLES
var exec_cards = document.getElementById("executives");
exec_cards = exec_cards.children[1];
var exec_cards_len = exec_cards.childElementCount;
var executives = [];
for(var i = 0; i < exec_cards.childElementCount; i++){
    var card = exec_cards.children[i];

    console.log(card.id);
    executives.push(card.id);
}

// SPONSORS VARIABLES
var spons_cards = document.getElementById("sponsors");
spons_cards = spons_cards.children[1];
var spons_cards_len = spons_cards.childElementCount;
var sponsors = [];
for(var i = 0; i < spons_cards.childElementCount; i++){
    var card = spons_cards.children[i];

    console.log(card.id);
    sponsors.push(card.id);
}


function shiftScaleUp(j, section_name){
    j = j-1;

    if(section_name == "speakers"){
        if(j==0){
            for(var i=1;i<speaker_cards_len;i++){
                card = speaker_cards.children[i];
                card.classList.add('shiftCardRight90');
            }
        } else if(j==(speaker_cards_len-1)){for(var i=0;i<(speaker_cards_len - 1);i++){
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

// function generate(){
//     var divi = document.getElementById("speakers-info");

//     var space = document.createElement("div");
//     space.classList.add("space");
//     space.innerText = "I got generated!!";
//     divi.appendChild(space);
// }

// function generate(){
//     var divi = document.getElementById("speakers-info");

//     divi.children[0].innerText = "I got appended!!";
// }