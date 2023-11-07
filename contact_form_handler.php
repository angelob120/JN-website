<?php
// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and store in variables
    $firstname = strip_tags(trim($_POST["firstname"]));
    $lastname = strip_tags(trim($_POST["lastname"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));

    // Specify the email to which you want to send the message
    $to = "angelobrown1000@gmail.com";
    
    // Create the email subject line
    $email_subject = "New contact from $firstname $lastname";

    // Build the email content
    $email_content = "Name: $firstname $lastname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $email_headers = "From: $firstname $lastname <$email>";

    // Send the email
    if (mail($to, $email_subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }
    
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/vendor/autoload.php'; // Update the path to where your vendor directory is

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 0; // Enable verbose debug output
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = 'your@gmail.com'; // SMTP username
    $mail->Password = 'yourpassword'; // SMTP password
    $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587; // TCP port to connect to

    // Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('to@example.com', 'Joe User'); // Add a recipient

    // Form data
    // You would collect form data here and


    ?>