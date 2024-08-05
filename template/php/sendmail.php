<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'PHPMailer/language/');
  $mail->IsHTML(true);

  // От кого письмо
  $mail->setFrom('info@doctor-ismatov.ru', 'Заявка с сайта');
  // Кому отправить
  $mail->addAddress('karaulov.z@mail.ru');
  // Тема письма
  $mail->Subject = 'Заявка с сайта';

  // Тело письма
  $body = '';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя пользователя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
  }

  $mail->Body = $body;

  // Отправляем
  if(!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $responce = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($responce);
?>