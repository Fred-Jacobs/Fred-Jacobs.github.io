(function($j){
    
    $j.body_text = function(opts) {
        $j.finished.text = false;
        
        $("html").data("lang", opts.lang);
    
        $.get("../json/" + opts.lang + '/global.json', function(data) {
            
            if (typeof data == 'string')
                data = JSON.parse(data);
                
            if (data["page_title"])
                $("title").html(data["page_title"]);
                
            if (data["h1"])
                $("h1").html(data["h1"]);
            if (data["h1_emphasis"])
                $("#title .emphasis").html(data["h1_emphasis"]);
                
            if (data["citation"])
                $("#citation").html(data["citation"]);
            
            $j.finished.text = true;
            console.log("Text generated");
        });
    };
    
})($j = $j || {finished:{}})