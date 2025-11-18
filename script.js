let homeMsg = "You selected the Home address";
let workMsg = "You selected the Work address";

document.getElementById("homeRadio").addEventListener("click", function () {
    alert(homeMsg);

    document.getElementById("street").value = "100 Main St.";
    document.getElementById("city").value = "Virginia Beach";
    document.getElementById("state").value = "VA";
    document.getElementById("zip").value = "23450";
});

document.getElementById("workRadio").addEventListener("click", function () {
    alert(workMsg);

    document.getElementById("street").value = "500 Business Plaza";
    document.getElementById("city").value = "Norfolk";
    document.getElementById("state").value = "VA";
    document.getElementById("zip").value = "23510";
});
