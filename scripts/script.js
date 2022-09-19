const API_URL = "https://jonathan-robles.github.io/api/us_states.json";

let selectElem =  document.createElement("select");
//let select_2 =  document.createElement("select");
    selectElem.id = "stateslist";
    //select_2.id = "avail";


async function loadStates() {
    let txt1 , txt2 ;
    const res = await fetch(API_URL);
    const data = await res.json();
    //        console.log(data);   
    const states = Object.keys(data);
    //        console.log(states);   

    states.forEach( state => { // Dropdown all States
        txt1 = `<option value="${state}"> ${state}, ${data[state]} </option>` ;
            selectElem.innerHTML += txt1 });

    // states.forEach( state => { // Dropdown the 4 States
    //     if (state == "TX" || state=="AZ"||state=="NM"||state=="CA") {
    //         txt2 = `<option value="${state}"> ${state}, ${data[state]} </option>`;
    //             select_2.innerHTML += txt2; 
    //     }});
}    

loadStates();

//var drop4 = document.getElementById("drop4");
//drop4.appendChild(select_2);

var dropAll = document.getElementById("dropAll");
dropAll.appendChild(selectElem);



class contact{
    constructor(fname, id, contact, alternate, email){
        this.fname = fname;
        this.id = id;
        this.contact = contact;
        this.alternate = alternate;
        this.email = email;
    }
    personalInfo(){
        return `Fullname: ${this.fname} <br>
                Id: ${this.id} <br>
                Contact #: ${this.contact} <br>
                Alternate #: ${this.alternate} <br>
                Email: ${this.email} <br> `;
        
    }
  }


function getContactInfo(){
    let infoBox = document.getElementById("info_box");
    let x = document.getElementById("contactCard");
    x = x.getElementsByTagName("input");

    const profile = new contact(x[0].value, x[1].value, 
        x[2].value, x[3].value, x[4].value);
        
    infoBox.innerHTML = profile.personalInfo();
}

///////////////////////////////////////////////


function index(id_1, id_2){
    let x = document.getElementById(id_1);
        x = x.getElementsByTagName("input");

    var demo = document.getElementById(id_2);
        demo.innerHTML ="";

    for (let i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            demo.innerHTML += x[i].value + ", ";
        }
    }
}


function click_it(){   
    let info_box_2 = document.getElementById("info_box_2");

    //index("license_1", "position_2") // to get position name
    index("location_1", "location_2")
    index("shift_1", "shift_2")
    index("certification_1", "certification_2")
    index("association_1", "association_2")
    index("license_1", "license_2")
    index("bilingual_1", "bilingual_2")
    index("experience_1", "experience_2")
    index("ages_1", "ages_2")
    info_box_2.innerHTML = "State licences : " + document.getElementById("stateslist").value;
    
}