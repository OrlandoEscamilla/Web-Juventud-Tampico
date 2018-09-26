		
	$(document).ready(function(){

		$("#opcion1").mouseover(function(){
        	$("#img1").attr("src", "img/individual_blanco.png");
        	});
			$("#opcion1").mouseout(function(){
        	$("#img1").attr("src", "img/individual_rosa.png");
        	});
	



		$("#opcion1").click(function(){
        	$(".contenedor_formulario1").fadeIn("slow");  
        	$("#opcion1").fadeOut(); 
        	$("#opcion2").fadeOut();     
    	});			
		




		$("#opcion2").mouseover(function(){
        	$("#img2").attr("src", "img/grupal_rosa.png");
        	});
			$("#opcion2").mouseout(function(){
        	$("#img2").attr("src", "img/grupal_blanco.png");
        	});


			$("#opcion2").click(function(){
        	$(".contenedor_formulario2").fadeIn("slow");
        	$("#opcion1").fadeOut(); 
        	$("#opcion2").fadeOut();  
        
    	});	

		



	 $(".boton_menu img").click(function(){
        $(".menu_responsive").slideToggle("fast");
    });

    


	});

	function show(campo){
		if(campo == "mi"){
			document.getElementById('uno').className = "seleccionado";
			document.getElementById('dos').className = "";
			document.getElementById('tres').className = "";
			$(".contenedor_scrol").fadeIn();
			$(".contenedor_scrol2").fadeOut(5);
			$(".contenedor_scrol3").fadeOut(5);
		}else if(campo == "vi"){
			document.getElementById('dos').className = "seleccionado";
			document.getElementById('uno').className = "";
			document.getElementById('tres').className = "";
			$(".contenedor_scrol2").fadeIn();
			$(".contenedor_scrol").fadeOut(5);
			$(".contenedor_scrol3").fadeOut(5);
		}else if(campo == "va"){
			document.getElementById('tres').className = "seleccionado";
			document.getElementById('uno').className = "";
			document.getElementById('dos').className = "";
			$(".contenedor_scrol3").fadeIn();
			$(".contenedor_scrol").fadeOut(5);
			$(".contenedor_scrol2").fadeOut(5);
		}
		
	}




	function showw(campo){
		if(campo == "el"){
			document.getElementById('cuatro').className = "seleccionado2";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias1").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);

		}else if(campo == "respeto"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "seleccionado2";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias2").fadeIn();
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}else if(campo == "al"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "seleccionado2";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias3").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}
		else if(campo == "derecho"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "seleccionado2";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias4").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}

		else if(campo == "ajeno"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "seleccionado2";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias5").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}

		else if(campo == "es"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "seleccionado2";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "";

			$(".contenedor_categorias6").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}
		else if(campo == "la"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "seleccionado2";
			document.getElementById('once').className = "";

			$(".contenedor_categorias7").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			$(".contenedor_categorias8").fadeOut(5);
			
		}

		else if(campo == "paz"){
			document.getElementById('cuatro').className = "";
			document.getElementById('cinco').className = "";
			document.getElementById('seis').className = "";
			document.getElementById('siete').className = "";
			document.getElementById('ocho').className = "";
			document.getElementById('nueve').className = "";
			document.getElementById('diez').className = "";
			document.getElementById('once').className = "seleccionado2";

			$(".contenedor_categorias8").fadeIn();
			$(".contenedor_categorias2").fadeOut(5);
			$(".contenedor_categorias3").fadeOut(5);
			$(".contenedor_categorias4").fadeOut(5);
			$(".contenedor_categorias5").fadeOut(5);
			$(".contenedor_categorias6").fadeOut(5);
			$(".contenedor_categorias7").fadeOut(5);
			$(".contenedor_categorias1").fadeOut(5);
			
		}
		
	}