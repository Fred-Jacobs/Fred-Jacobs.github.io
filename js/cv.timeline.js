(function($j){
    $j.timelines = function(opts) {
        $j.finished.timeline = false;
        $j.finished.timelines = {};
        $j.finished.timelineCount = 0;
        $j.finished.timelineCountTotal = 3;
        
        $j.appendTimeline({
            id: "work-experience-timeline",
            appendTo: "experience-container",
            fileName: 'experience.json',
            lang: opts.lang,
            // side: function(idx) { return true; },
        });
        
        $j.appendTimeline({
            id: "education-timeline",
            appendTo: "education-container",
            fileName: 'education.json',
            lang: opts.lang,
            // side: function(idx) { return false; },
        });
        
        $j.appendTimeline({
            id: "other-timeline",
            appendTo: "other-container",
            fileName: 'other.json',
            lang: opts.lang,
            // side: function(idx) { return idx % 2 == 0; },
        });
        
    };
    
    
    $j.appendTimeline = function(opts) {
        
        $j.finished.timelines[opts.id] = false;
        $j.finished.timelineCount += 1;
        
        $.get('../json/' + opts.lang + '/' + opts.fileName, function(data){
                
            opts.appendTo = (typeof opts.appendTo == 'string'? $("#" + opts.appendTo) : opts.appendTo);
                
            if (!opts.side)
            {
                opts.side = function(idx) {
                    return idx % 2 == 0;
                }
            }    
                
            var $tmpl = $("#timeline-template").clone();
            var $liTmpl = $tmpl.find("li").first().clone();
            $tmpl.html('');
            $tmpl.attr("id", opts.id);
            $.each(data.items, function(idx, item){
                var $li = $liTmpl.clone();
                
                $li.addClass(opts.side(idx) ? "timeline-normal" : "timeline-inverted");
                
                $li.find("h4")
                .html(item.title);
                $li.find(".timeline-body p")
                .html(item.body_html);
                $li.find(".organisation")
                .html(item.organisation ? (item.organisation + ', ' + item.location) : '')
                .addClass(opts.side(idx) ? "pull-left" : "pull-right");
                $li.find(".date")
                .html(item.date)
                .addClass(opts.side(idx) ? "text-right" : "text-left");
                
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
            
            $j.finished.timelines[opts.id] = true;
            
            if ($j.finished.timelineCount == $j.finished.timelineCountTotal) {
            $.each($j.finished.timelines, function(idx, item) {
                if (!item)
                    return false;
            });
            
            $j.finished.timeline = true;
            return true;
            }
            
            return false;
        });
        
    };
})($j = $j || {finished:{}})