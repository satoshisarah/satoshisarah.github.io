<?php

    $email = $_POST["email-subscribe"];

    $to = "hello@bitcoinladies.org";
    $headers = "New Contact Form Submission";
    $txt = "This new subscription is for the email: ".$email".";
                     
    mail($to, "New Subscriber Submission", $txt);

    header("Location: index.html?mailsent");
?>