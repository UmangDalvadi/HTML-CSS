let chcap=()=>{

let val= document.getElementById("con").value;
let answer;

switch (val) {
    case "ind":
        answer="Delhi";
        break;
    case "us":
        answer="Washington, D.C";
        break;
    case "japan":
        answer="Tokyo";
        break;
    case "uk":
        answer="London";
        break;
    case "uae":
        answer="Abu dhabi";
        break;

    default:
        answer="Select Country"
        break;
}

document.getElementById("ans").textContent=answer;
}