<?php
    $name = $_POST['name'];
    $phone = $_POST['number'];
	
	$to = "mixon749@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n"; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Скоро с Вами свяжуться</p>
