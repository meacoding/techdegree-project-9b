<?php
 
if($_POST) {
    $admin_email = "amanda@amandaharness.com";
    $visitor_name = "";
    $visitor_email = "";
    $visitor_message = "";
     
    if(isset($_POST["visitor_name"])) {
        $visitor_name = filter_var($_POST["visitor_name"], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST["visitor_email"])) {
        $visitor_email = filter_var($_POST["visitor_email"], FILTER_SANITIZE_EMAIL);
    }
     
    if(isset($_POST["visitor_message"])) {
        $visitor_message = htmlspecialchars($_POST["visitor_message"]);
    }
    
    $subject = "Contact Form";
    $formcontent = "From: " .$visitor_name. "\r\n";
    $formcontent .= "Email: " .$visitor_email. "\r\n";
    $formcontent .= "Message: " .$visitor_message. "\r\n";
    
    $headers = "From: " .$visitor_email. "\r\n";
    $headers .= "Reply-To: webmaster@example.com\r\n";
    $headers .= "X-Mailer: PHP/".phpversion()."";
    
    if(mail($admin_email, $subject, $formcontent, $headers)) {
        echo '<p style=\'color: white; text-align: center; font-size: 16px; font-family: arial, sans-serif;\'>Thank you!</p>';
    } else {
        echo '<p style=\'color: white; text-align: center; font-size: 16px; font-family: arial, sans-serif;\'>Your message slipped into the nether, oh no! Try again.</p>';
    }
     
} else {
    echo '<p style=\'color: white; text-align: center; font-size: 16px; font-family: arial, sans-serif;\'>Something went wrong. Your message was not sent.</p>';
}
 
?>