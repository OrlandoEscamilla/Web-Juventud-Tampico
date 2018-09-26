<?php	
	require('inc/PHPMailer-master/PHPMailerAutoload.php');

	// a quien se enviara:
	// atrapamos todos los datos que seran enviados en el formulario

	if (isset($_POST['nombre'])) {
		$nombre  = $_POST['nombre'];
	}

	if (isset($_POST['telefono'])) {
	  $telefono = $_POST['telefono'];
	}


	if(isset($_POST['curp'])){
		$curp = $_POST['curp'];
	}

	if(isset($_POST['categoria'])){
		$categoria = $_POST['categoria'];
	}

	if(isset($_POST['direccion'])){
		$direccion = $_POST['direccion'];
	}

	if (isset($_POST['correo'])) {
	  $correo = $_POST['correo'];
	}

	if (isset($_POST['comentario'])) {
	  $comentario = $_POST['comentario'];
	}

	/*

	$formulario = $_POST['form'];

	if($formulario == 'bolsa') {
		$enviara = 'info@geoteco.com';
	}else if($formulario == 'contacto'){	
		$enviara = 'info@geoteco.com';
	}
		*/

	$html = <<<HTML

	<body  style="box-sizing: border-box;">
<br>
<div style="text-align:left; width:570px; padding-left:10px; padding-right:20px; margin: 0 auto; background-color:#dddfe0; -webkit-box-shadow: -3px 5px 6px -2px rgba(69,14,98,1);
-moz-box-shadow: -3px 5px 6px -2px rgba(69,14,98,1);
box-shadow: -3px 5px 6px -2px rgba(69,14,98,1);">
     
     <img style="width:65px; float:right; margin-top:15px;" src="http://chocolatepublicidad.com/geoteco/img/img_user_correo.png" />
</div>
<div style="width:560px; margin: 0 auto; padding:20px; background-color:#097295; text-align:left; color:#fff">
<div><h3> Nombre: <span style="text-decoration: underline; color: #fff;"> $nombre </span></h3></div>
<div><h3> Telefono: <span style="text-decoration: underline; color: #fff;"> $telefono </span></h3></div>
<div><h3> Curp: <span style="text-decoration: underline; color: #fff;"> $curp </span></h3></div>
<div><h3> Categoria: <span style="text-decoration: underline; color: #fff;"> $categoria </span></h3></div>
<div><h3> Direccion: <span style="text-decoration: underline; color: #fff;"> $direccion </span></h3></div>
<div><h3> Correo: <span style="text-decoration: underline; color: #fff;"> $correo </span></h3></div>
<div><h3> Comentario: <span style="text-decoration: underline; color: #fff;"> $comentario </span></h3></div>

</div>
</body>
HTML;




	// Creamos una nueva instancia del objeto PHPMailer
	$mail = new PHPMailer;



	/* Borrar desde aqui hasta... cuando se sube a un servidor */

 	
	// Usar SMTP para localhost
	$mail->isSMTP();
	// Habilitar depuracion
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	//$mail->SMTPDebug = 2;
	// Depuracion en html
	// $mail->Debugoutput = 'html';
	//El host name del email
	$mail->Host = 'smtp.gmail.com';
	// usar
	// $mail->Host = gethostbyname('smtp.gmail.com');
	// Si tu red no soporta SMTP sobre ipv6
	// Establecer el numero de puerto - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
	$mail->Port = 587;
	// Establecer el tipo de encriptacion que usa el sistema - ssl (deprecated) or tls
	$mail->SMTPSecure = 'tls';
	//Si usamos SMTP autenticacion
	$mail->SMTPAuth = true;
	// Nombre de usuario para autenticacion - use full email address for gmail
	$mail->Username = "contactojuventudtampico@gmail.com";
	// Contraseña para autenticacion SMTP
	$mail->Password = "PMJcontacto2017@";


	
	/* Hasta aqui */

	// // Establece desde donde sera enviado el mensaje
	// $mail->setFrom($correo, $nombre);
	// Establece a quien se enviara el mensaje
	$enviara = "contacto@juventudtampico.com";
	$asunto = "Candidato individual";

	$mail->addAddress($enviara, $asunto);
	// Establece el asunto del mensaje
	$mail->Subject = 'CONTACTO - '.$asunto;

  //archivo adjunto
  //var_dump($_FILES);

  if (isset($_FILES['cv']) &&
    $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['cv']['tmp_name'],
                         $_FILES['cv']['name'],'base64','application/pdf');
}

	// Envia una plantilla en HTML con el mensaje 
	$mail->isHTML(true);  
	$mail->Body = $html;



	// Checa si el mensaje se envio sin errores
	if (!$mail->send()) {
		echo json_encode(array("error"=>"Su mensaje no pudo ser enviado","message"=>$mail->ErrorInfo));
	} else {
	    echo json_encode(array("success"=>"Su mensaje ha sido enviado","message"=>"Su mensaje ha sido enviado y sera verificado por uno de nuestros administradores"));
	}


?>