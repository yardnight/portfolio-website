<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exeption;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    // From
    $mail->setFrom('yardnight@gmail.com', 'Offer to work');
    // Where
    $mail->addAddress('yardnight@gmail.com');
    //Topic of the mail
    $mail->Subject = 'Hi! That is a new offer';

    $body = '<h1> Meet a new offer</h1>';

    if(trim(!empty($_POST['firstName']))){
        $body = '<p> <strong>Name: '.$_POST['firstName'].'qq</p>';
    }
    if(trim(!empty($_POST['lastName']))){
        $body = '<p> <strong>Last name: '.$_POST['lastName'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body = '<p> <strong>E-mail: '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body = '<p> <strong>Phone number: '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body = '<p> <strong>Message: '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    //Sending the mail
    if (!$mail->send()){
        $message = 'Failure execution';
    } else {
        $message = 'Your message has been sent';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>