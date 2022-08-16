<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $info = $_POST["message"];

    $to = "hello@bitcoinladies.org";
    $headers = "New Contact Us Submission";
    $txt = "You have received a contact us submmission from ".$name.".\n
    Their email is ".$email." \n
    They are writing to say: \n"$info;
                            
    
    mail($to, "New Contact Us Submission", $txt);

    header("Location: index.html?mailsent");
?>