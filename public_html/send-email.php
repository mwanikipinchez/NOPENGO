
<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = "pmwaura@nope.or.ke";

// send email
mail($to, $subject, $message, "From: $name <$email>");

?>