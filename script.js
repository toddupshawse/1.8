<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Alerts Exercise</title>
</head>
<body>

    <!-- Header displaying your name and title -->
    <h1>Your Name - Variables and Alerts Exercise</h1>

    <!-- Form with radio buttons for address selection -->
    <form>
        <label for="home">Home Address</label>
        <input type="radio" id="home" name="address" value="home">
        <br>
        <label for="work">Work Address</label>
        <input type="radio" id="work" name="address" value="work">
        <br><br>

        <!-- JavaScript to handle radio button selection -->
        <script>
            // Define the messages to be displayed for each address
            var homeMsg = "You selected the Home address";
            var workMsg = "You selected the Work address";

            // Function to check which radio button is selected and show an alert
            function displayAlert() {
                var homeButton = document.getElementById("home");
                var workButton = document.getElementById("work");

                if (homeButton.checked) {
                    alert(homeMsg);  // Show alert for Home address
                } else if (workButton.checked) {
                    alert(workMsg);  // Show alert for Work address
                }
            }

            // Add event listeners to the radio buttons
            document.getElementById("home").addEventListener("click", displayAlert);
            document.getElementById("work").addEventListener("click", displayAlert);
        </script>
    </form>

</body>
</html>
