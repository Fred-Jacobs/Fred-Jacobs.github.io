var $j = $j || {};

(function(global) {
       
    /* Contact Infos */
    if (document.getElementById('contacts').childElementCount == 0 && $j.addContacts)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '../json/contact_info.json', true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                
                var ln = document.querySelector("html").getAttribute("data-lang");

                if (typeof data == 'string')
                    data = JSON.parse(data);
                
                var dt = function(name) {
                    if (!data[ln] || !data[ln][name])
                        return data.default[name];
                    
                    return data[ln][name];
                };
                
                var mail = function() {
                    return ['<a href="mailto:', dt('mail'), '">', dt('mail'), '</a>'].join('');
                };
                
                var icon = function(name, suffix) {
                    return ['<span class="glyphicon glyphicon-', name, '" aria-hidden="true"></span>', suffix || ''].join('');
                };
                
                var _contacts = ["<ul>"]; 
                _contacts.push(["<li>", dt('name'),"</li>"].join(''));
                _contacts.push(["<li>", icon('envelope'), ' : ', mail(),"</li>"].join(''));
                _contacts.push(["<li class='removable'>", icon('earphone'), ' : ', dt('phone'),"</li>"].join(''));
                _contacts.push(["<li class='removable'>", icon('globe'), ' : ', dt('address'),"</li>"].join(''));
                _contacts.push("</ul>");
                
                document.getElementById("contacts").innerHTML = _contacts.join('');
                
                var _infos = ["<ul class='removable'>"]; 
                _infos.push(["<li>", dt('birth_date'),"</li>"].join(''));
                _infos.push(["<li>", dt('nationality'),"</li>"].join(''));
                _infos.push(["<li>", dt('status'),"</li>"].join(''));
                _infos.push(["<li>", dt('driving_licence'),"</li>"].join(''));
                _infos.push("</ul>");
                
                document.getElementById("infos").innerHTML = _infos.join('');
            } else {
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function() {
        // There was a connection error of some sort
        };

        request.send();
    }
    /*
    $.get('../json/contact_info.json', function(data){
        var ln = $("html").data("lang");

        if (typeof data == 'string')
            data = JSON.parse(data);
        
        var dt = function(name) {
            if (!data[ln] || !data[ln][name])
                return data.default[name];
            
            return data[ln][name];
        };
        
        var mail = function() {
            return ['<a href="mailto:', dt('mail'), '">', dt('mail'), '</a>'].join('');
        };
        
        var icon = function(name, suffix) {
            return ['<span class="glyphicon glyphicon-', name, '" aria-hidden="true"></span>', suffix || ''].join('');
        };
        
        var _contacts = ["<ul>"]; 
        _contacts.push(["<li>", dt('name'),"</li>"].join(''));
        _contacts.push(["<li>", icon('envelope'), ' : ', mail(),"</li>"].join(''));
        _contacts.push(["<li>", icon('earphone'), ' : ', dt('phone'),"</li>"].join(''));
        _contacts.push(["<li>", icon('globe'), ' : ', dt('address'),"</li>"].join(''));
        _contacts.push("</ul>");
        
        document.getElementById("contacts").innerHTML = _contacts.join('');
        
        var _infos = ["<ul>"]; 
        _infos.push(["<li>", dt('birth_date'),"</li>"].join(''));
        _infos.push(["<li>", dt('nationality'),"</li>"].join(''));
        _infos.push(["<li>", dt('status'),"</li>"].join(''));
        _infos.push(["<li>", dt('driving_licence'),"</li>"].join(''));
        _infos.push("</ul>");
        
        document.getElementById("infos").innerHTML = _infos.join('');
    });/**/

})(window);
