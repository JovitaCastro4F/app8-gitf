// JavaScript Document
$(document).ready(function(e) { 
	document.addEventListener("deviceready",function() { //escuchador de evevtos
		$('#izquierda').on("swipeleft", function() {//deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la izquierda", function() {"Aplicación 7", "Ok"});//aparece mensaje alert
		});
		$('#derecha').on("swiperight", function() {//deslizar derecha
			navigator.notification.confirm("¿Qué quieres hacer?", function(op) {//mensaje de confirmacion
				switch(op)// variable para las opciones
			{
				case 1:
				navigator.notification.beep(1);//suena el dispositivo
			    break;
				
				case 2:
				navigator.notification.vibrate(3000);//vibra el dispositivo
				break;
			}
			},"Aplicación7","Beepear, Vibrar, Cancelar");
		});
	}, false);
});
