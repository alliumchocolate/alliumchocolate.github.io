<?php
    $name = "Name: " . $_POST['name']; //joins two strings
    $email = "E-mail: " . $_POST['mail'];
    $message = "Message: " . $_POST['msg'];

    $payload = $name . "\r\n" . $email . "\r\n" . $message; //combines all of the lines separated with \n
    $payload = wordwrap($payload, 70, "\r\n"); //performs a word-wrap in case any line is 70 chars, mail protocol requirement
    
    $payload = str_replace("\n.", "\n..", $payload); //removes dots on new lines and turns them into double dots (some bs stuff)

    mail('alliumchocolate@pm.me', 'Form results', $payload);

    echo 'sent! hopefully';
?>