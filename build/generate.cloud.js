var page = new WebPage();
var system = require("system");
var fs = require('fs');

var sourceUri = system.args[1];
var destinationHtml = system.args[2];
var destinationCss = system.args[3];

page.paperSize = {
  format: "A4",
  orientation: "portrait",
  margin: {left:"0cm", right:"0cm", top:"0cm", bottom:"0cm"},
};
page.zoomFactor = 1;

page.onConsoleMessage = function(msg) {
  console.log(msg);
}

console.log('Open ' + sourceUri);
page.open(sourceUri, function() {
  
    waitFor({
        debug: true,
        interval: 10,
        timeout: 10000,
        check: function () {
            return page.evaluate(function() {
                $.each(finished, function(idx, item) {
                    console.log(item);
                    if (!item)
                        return false;
                });
                return true;
            });
        },
        success: function () {
            
            var cssRules = page.evaluate(function() {
                console.log('Streamline Tag Cloud');
                var ruleLoop = ["font", "left", "top", "width", "height", "line-height", "-webkit-transform"];
                var rulePrefixLoop = ["-webkit-", "-ms-", ""];
                var containerId = "#proficiency-tag-cloud-html";
                var $container = $(containerId);
                
                var rules = [];
                rules.push([containerId, " span { position: absolute; display: block; white-space: nowrap; transform-origin: 50% 40%; -webkit-transform-origin: 50% 40%; -ms-transform-origin: 50% 40%; } ", ].join(''));
                
                // $("#cloud_stylesheet").remove();
                // $("head").append('<link id="cloud_stylesheet" rel="stylesheet" type="text/css" href="../../css/cloud.css"/>');
                
                $container.find("span").each(function(idx, item) {
                    var $tag = $(item);
                    $tag.attr("id", "tag" + idx);
                    var _rules = ["\n#", $tag.attr("id"), " {"];
                    
                    // console.log(item.style);
                    $.each(ruleLoop, function (_idx, ruleItem) {
                        if (ruleItem[0] == "-"){
                            _ruleStriped = ruleItem.replace('-webkit-', '');
                            $.each(rulePrefixLoop, function (i, prefix) {
                                _rules.push([prefix, _ruleStriped, ": ", item.style[ruleItem], "; "].join(''));    
                            });
                        }
                        else
                            _rules.push([ruleItem, ": ", item.style[ruleItem], "; "].join(''));
                    });
                    _rules.push("}");
                    
                    rules.push(_rules.join(''));
                    
                    $tag.removeAttr("style");
                });
                
                return rules.join('');
            });
            
            // console.log('Output : ' + cssRules);
            console.log('Save ' + destinationCss);
            fs.write(destinationCss, cssRules, 'w');
            
            console.log('Save ' + destinationHtml);
            fs.write(destinationHtml, page.content, 'w');
            
            phantom.exit();
        },
        error: function () {} 
    });
  
});

function waitFor ($config) {
    $config._start = $config._start || new Date();

    if ($config.timeout && new Date - $config._start > $config.timeout) {
        if ($config.error) $config.error();
        if ($config.debug) console.log('timedout ' + (new Date - $config._start) + 'ms');
        return;
    }

    if ($config.check()) {
        if ($config.debug) console.log('success ' + (new Date - $config._start) + 'ms');
        return $config.success();
    }

    setTimeout(waitFor, $config.interval || 0, $config);
}
