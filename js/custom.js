$(function() {
    $("#contactform").submit(function(e){
        e.preventDefault();
        

        $.ajax({
            url: "validar_mensaje.php", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            dataType: "json",
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,        // To send DOMDocument or non processed data file it is set to false
            success: function(data)   // A function to be called if request succeeds
            {
                //alert(data);
                if(data.success){                   
                        window.location="felicidades.html";
                    }else{

                        alert(data.message);
                        
                    }
            }
        });

        return false;
    });

        $("#contactform2").submit(function(e){
        e.preventDefault();
        

        $.ajax({
            url: "validar_mensaje2.php", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            dataType: "json",
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,        // To send DOMDocument or non processed data file it is set to false
            success: function(data)   // A function to be called if request succeeds
            {
                //alert(data);
                if(data.success){                   
                        window.location="felicidades2.html";
                    }else{

                        alert(data.message);
                        
                    }
            }
        });

        return false;
    });
});

