var page = new WebPage();
var system = require("system");
var fs = require('fs');

var sourceUri = system.args[1] || '../cv/template/cv.html';
var destinationPdf = system.args[2] || '../cv/fr/Fred-Jacobs.dotNet.pdf';
var destinationHtml = system.args[3] || '../cv/fr/index.html';

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
        interval: 10,
        timeout: 10000,
        check: function () {
            return page.evaluate(function() {
                return finished || false;
            });
        },
        success: function () {
            console.log('Save ' + destinationPdf);
            page.render(destinationPdf);
            
            page.evaluate(function() {
                $("#contacts .removable").remove();
                $("#infos .removable").remove();
            });
            
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
