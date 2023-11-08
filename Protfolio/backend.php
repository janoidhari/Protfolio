<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add code here to send an email or save the form data to a database.
    // For example, using the PHP `mail()` function for email.

    // Display a thank you message or redirect the user after form submission.
    echo "Thank you for contacting me!";
}
?>
