(function(global, $, $j) {
    
    $j.finished.global = false;
    
    $j.lang = $j.qs("lang") || "fr";
    
    /* Words Tag Cloud */
    var cloud = document.getElementById('proficiency-tag-cloud-html');
    if ($j.qs("cloud")) {
        $j.wordcloud(cloud);
        return;
    } else {
        if (cloud.childElementCount == 0)  
            $j.wordcloud(cloud);
        else {
            console.log("Cloud already generated");
        }
    }

    $j.body_text({ "lang": $j.lang });
    
    $j.timelines({ "lang": $j.lang });
    
    $j.finished.global = true;
    console.log("End");
    
    /* Clean up generators */
    $(".removable-script").remove();
    $("#ga").remove();
})(window, jQuery, $j || {});
