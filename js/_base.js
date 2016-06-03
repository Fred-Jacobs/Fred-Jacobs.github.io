var $j = $j || {};
$j.finished = {
    global: false
};

$j.qs = function (name, val) {
    var qs = {};
    if ('undefined' != typeof window.location.search) {
        window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) { qs[$1] = $3; });
    }
    if (!name && !val)
        return qs;
    else if (name && !val)
        return qs[name];
    else {
        qs[name] = val;
        return qs;
    }
}