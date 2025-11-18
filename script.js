const homeMsg = "You selected the Home address";
const workMsg = "You selected the Work address";

document.getElementById("homeoption").addEventListener("click", function() {
    alert(homeMsg);
    document.getElementById("streetinput").value = "100 Main St.";
    document.getElementById("cityinput").value = "Sicilia";
    document.getElementById("stateinput").value = "MA";
    document.getElementById("zipinput").value = "02103";
});

document.getElementById("workoption").addEventListener("click", function() {
    alert(workMsg);
    document.getElementById("streetinput").value = "123 Robin Ln.";
    document.getElementById("cityinput").value = "Crab City";
    document.getElementById("stateinput").value = "MA";
    document.getElementById("zipinput").value = "02104";
});
