<?php
 
if($_POST) {
    $admin_email = "amanda@amandaharness.com";
    $visitor_name = "";
    $visitor_email = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['visitor_email'])) {
        $visitor_email = filter_var($_POST['visitor_email'], FILTER_SANITIZE_EMAIL);
    }
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
    
    $mailheader = "From: " .$visitor_email. "\r\n";
    $subject = 'Contact Form';
    $formcontent='From: ' .$visitor_name. '\n Message:' .$visitor_message.;
     
    if(mail($admin_email, $subject, $formcontent, $mailheader)) {
        echo '<p>Thank you!';
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>

<?php
  echo $_POST['visitor_name'] ."<br />";
  echo $_POST['visitor_email'] ."<br />";
  echo $_POST['visitor_message'] ."<br />";\
  echo "==============================<br />";
  echo "Thank you!";
?>
