
var finished = {
    global: false
};
var $j = $j || {};

$j.wordcloud = function(cloud) {
    var wordWeights = [50, // 0 : big 
                   35, // 1
                   30, // 2
                   25, // 3
                   20, // 4
                   15, // 5
                   12, // 6
                   10, // 7
                    8, // 8
                    6, // 9
                    5, // 10
                  ];
    
    WordCloud(cloud, { 
        list: [
            [".Net", wordWeights[0], -90], 
            ["<HTML>", wordWeights[3], -75], 
            ["css", wordWeights[2], 75], 
            ["Javascript", wordWeights[3], 90], 
            ['Visual Studio', wordWeights[6], 45],  
            ['VS Code', wordWeights[7]],  
            ['<XML>', wordWeights[6]], 
            ['dotPeek', wordWeights[8]], 
            ['T4', wordWeights[8]], 
            ['WPF', wordWeights[6]], 
            ['SQL', wordWeights[6]], 
            ['MVC', wordWeights[6]], 
            ['WCF', wordWeights[6]], 
            ["C#", wordWeights[1], 90], 
            ['Windows', wordWeights[8]], 
            ['Linux', wordWeights[8]], 
            ['WebAPI', wordWeights[6]], 
            ['jQuery', wordWeights[6]], 
            ['Bootstrap', wordWeights[6]],  
            ['W3C', wordWeights[6]], 
            ['TFS', wordWeights[6]], 
            ['Github', wordWeights[6]], 
            ['BAZINGA', 5], 
            ['Office', wordWeights[6]], 
            ['GIS', wordWeights[8]], 
            ['SSIS', wordWeights[7]], 
            ['SSRS', wordWeights[7]], 
            ["Ajax", wordWeights[8]], 
            ['Modernizr', wordWeights[9]],
            ['Humanizer', wordWeights[8]],
            ['Raphaël', wordWeights[9]],
            ['WinForm', wordWeights[9]],
            ['Open Source', wordWeights[9], 90], 
            ['SOAP', wordWeights[10]], 
        ] ,
        drawMask: false,
        shuffle: false,
        rotateRatio: 1,
        gridSize: 10,
        weightFactor: 2,
        fontFamily: 'Calibri, cursive, sans-serif',
        // fontFamily: 'Calibri, Finger Paint, cursive, sans-serif',
        // color: function(word, weight, fontSize, distance, theta){
        //     return 'blue';
        // },
        color: null,
        hover: window.drawBox,
        // click: function(item) {
        //     alert(item[0] + ': ' + item[1]);
        // },
        clearCanvas: true,
        backgroundColor: 'transparent' //'#EEE'
    });
    
    cloud.addEventListener("wordcloudstop", function(evt) {
        finished.cloud = true;
        console.log("Cloud generated");
    });
};

$j.appendTimeline = function(opts) {
    
    if (document.getElementById(opts.appendTo).childElementCount != 0)
        return;
    
    $.get('../json/' + opts.lang + '/' + opts.fileName, function(data){
            
        opts.appendTo = (typeof opts.appendTo == 'string'? $("#" + opts.appendTo) : opts.appendTo);
            
        var $tmpl = $("#timeline-template").clone();
        var $liTmpl = $tmpl.find("li").first().clone();
        $tmpl.html('');
        $tmpl.attr("id", opts.id);
        $.each(data.items, function(idx, item){
            var $li = $liTmpl.clone();
            
            $li.addClass(idx % 2 == 0 ? "timeline-normal" : "timeline-inverted");
            
            $li.find("h4")
            .html(item.title);
            $li.find(".timeline-body p")
            .html(item.body_html);
            $li.find(".organisation")
            .html(item.organisation ? (item.organisation + ', ' + item.location) : '')
            .addClass(idx % 2 == 0 ? "pull-left" : "pull-right");
            $li.find(".date")
            .html(item.date)
            .addClass(idx % 2 == 0 ? "text-right" : "text-left");
            
            $tmpl.append($li);
            
        });
        
        // $tmpl.append('<li class="clear-fix no-float"></li>');
        
        $tlt = $("<div class='timeline-title'><div>" + data.title + "</div></div>")
        
        opts.appendTo
            .prepend($tlt)
            .append($tmpl);
        
        // fix height
        opts.appendTo.append('<div class="clear-fix"></div>');
        $tlt.css("height", $tmpl.find("li").last().position().top + $tmpl.find("li .timeline-badge .glyphicon").last().position().top);
        
    });
    
};

(function(global, $) {
    
    finished.global = false;
    
    var qs = {};
    if ('undefined' != typeof window.location.search) {
        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) { qs[$1] = $3; });
    }
    
    /* Words Tag Cloud */
    var cloud = document.getElementById('proficiency-tag-cloud-html');
    finished.cloud = false;
    if (qs["cloud"]) {
        $j.wordcloud(cloud);
        return;
    } else {
        if (cloud.childElementCount == 0)  
            $j.wordcloud(cloud);
        else {
            finished.cloud = true;
            console.log("Cloud already generated");
        }
    }
    
    finished.text = false;
    finished.timeline = false;
    
    $j.addContacts = true;
    
    var lang = qs["lang"] || "fr";
    
    $("html").data("lang", lang);
    
    $.get("../json/" + lang + '/global.json', function(data) {
        
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
        
        finished.text = true;
        console.log("Text generated");
    });
    
    /* Experiences & education */
    if ($j.appendTimeline) { 
        
        $j.appendTimeline({
            id: "work-experience-timeline",
            appendTo: "experience-container",
            fileName: 'experience.json',
            lang: lang,
        });
        
        $j.appendTimeline({
            id: "education-timeline",
            appendTo: "education-container",
            fileName: 'education.json',
            lang: lang,
        });
        
        $j.appendTimeline({
            id: "other-timeline",
            appendTo: "other-container",
            fileName: 'other.json',
            lang: lang,
        });
        
        finished.timeline = true;
        console.log("Timelines generated");
    }
    
    // $('head').append(['<style>', '#work-experience-timeline', ':before{height:', $tmpl.height(), ' !important;}</style>'].join(''));
             
    // var entries = [[],[]];
    // $("#right-pane-container .timeline").each(function (rootIdx, root) {
    //     var $root = $(root);
    //     $root.find(".timeline-panel").each(function (idx, el) {
    //         var $el = $(el);
    //         var organisation_location = $el.find(".timeline-footer p").first().text().split(',');
    //         var entry = {
    //             "title": $el.find("h4").text(),
    //             "body_html": $el.find(".timeline-body p").html(),
    //             "organisation": organisation_location[0] && organisation_location[0].trim(),
    //             "location": organisation_location[1] && organisation_location[1].trim(),
    //             "date": $el.find(".timeline-footer p").last().text(),
    //         };
    //         entries[rootIdx].push(entry);
    //     });
    // });
    // var jobs = JSON.stringify(entries[0]);
    // var education = JSON.stringify(entries[1]);
    
    finished.global = true;
    console.log("End");
    // finished = true;
    
    /* Clean up generators */
    $(".removable-script").remove();
    // $("#templates").remove();
})(window, jQuery);
