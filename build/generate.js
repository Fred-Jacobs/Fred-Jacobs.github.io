var page = new WebPage();
var system = require("system");
var fs = require('fs');

var sourceUri = system.args[1] || '../cv/template/cv.html';
var destinationPdf = system.args[2] || '../pdf/Fred-Jacobs.dotNet.pdf';
var destinationPublicPdf = system.args[3] || '../cv/fr/Fred-Jacobs.dotNet.pdf';
var destinationHtml = system.args[4] || '../cv/fr/index.html';

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
    console.log('Wait for ' + sourceUri);
  
    waitFor({
        debug: true,
        interval: 300,
        timeout: 10000,
        check: function () {
            return page.evaluate(function() {
                $.each($j.finished, function(idx, item) {
                    if (!item)
                        return false;
                });
                return true;
            });
        },
        success: function () {
            
            setTimeout(function() {
                console.log('Save ' + destinationPdf);
                page.render(destinationPdf);
                
                page.evaluate(function() {
                    $("#contacts .removable").remove();
                    $("#infos .removable").remove();
                    $("html").addClass("generated");
                });
                
                console.log('Save public ' + destinationHtml);
                fs.write(destinationHtml, page.content, 'w');
                
                page.evaluate(function() {
                    $(".timeline-title").addClass("generated");
                    $("#templates").remove();
                });
                
                console.log('Save public ' + destinationPublicPdf);
                page.render(destinationPublicPdf);
                
                phantom.exit();
            }, 100);
            
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
