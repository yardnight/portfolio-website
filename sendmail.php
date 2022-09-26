<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    //SMTP Server settings
    // $mail->SMTPDebug = 2;                                       //Enable verbose debug output
    $mail->isSMTP();                                              //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                        //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'lead.offering@gmail.com';             //SMTP username
    $mail->Password   = 'kbq7vQ)#';                           //SMTP password
    $mail->SMTPSecure = 'tls';                               //Enable implicit TLS encryption //PHPMailer::ENCRYPTION_SMTPS
    $mail->Port       = 587;                                //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
    
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);
    // Recipients info
    $mail->setFrom($_POST['email'], 'Job offer');
    // Where
    $mail->addAddress('yardnight@gmail.com');
    //Topic of the mail
    $mail->Subject = 'Hi! I am '.$_POST['firstName'].'. Mailing you a new offer.';

    $body = '<h3> Meet a new offer</h3>';

    if (trim(!empty($_POST['firstName'])) || trim(!empty($_POST['lastName']))){
        if(trim(!empty($_POST['firstName']))){
            $body.= '<span><strong>From: </strong>'.$_POST['firstName'].'</span>';
        }else{
            '<span> <strong>From: </span>';
        }
        if(trim(!empty($_POST['lastName']))){
            $body.= '<span> '.$_POST['lastName'].'</span>';
        } else{ 
            '<span> Smith </span>';
        }
    } else{
        $body.= '<p> <strong>From:</strong> Unknown</p>';
    }
    
    if(trim(!empty($_POST['email']))){
        $body.= '<p> <strong>E-mail: </strong>'.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.= '<p> <strong>Phone: </strong>'.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.= '<br><p> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    //Sending the mail
    if (!$mail->send()){
        $message = 'Failure execution';
    } else {
        $message = 'Your message has been sent for sure!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>