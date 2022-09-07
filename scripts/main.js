
function index(id_1, id_2){
    let x = document.getElementById(id_1);
    x = x.getElementsByTagName("input");
var demo = document.getElementById(id_2)

    for (let i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            demo.innerHTML += x[i].value + ", ";
            
        }
        
    }
}

function click_it(){
    document.getElementById("name_2").innerHTML = document.getElementById("name_1").value;
    document.getElementById("id_2").innerHTML = document.getElementById("id_1").value;
    index("license_1", "position_2") // to get position name
    index("location_1", "location_2")
    index("certification_1", "certification_2")
    index("association_1", "association_2")
    index("license_1", "license_2")
    index("bilingual_1", "bilingual_2")
    index("experience_1", "experience_2")
    index("ages_1", "ages_2")
}

  