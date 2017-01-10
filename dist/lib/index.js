"use strict";
;
function readFeaturing(title) {
    if (title == null)
        return { title: '', feat: [] };
    var featRegEx = /\(\s*feat\.?\s*([^\)]+)\s*\)/i;
    var feats = featRegEx.exec(title);
    if (!feats || feats[1] == null)
        return { title: title.trim(), feat: [] };
    title = title.replace(feats[0], '').trim();
    var correctedFeaturings = [];
    var splitted = feats[1].split(',');
    splitted.forEach(function (f, i) {
        var iLast = f.lastIndexOf('&');
        if (i == splitted.length - 1 && iLast > -1) {
            correctedFeaturings.push(f.substring(0, iLast).trim());
            correctedFeaturings.push(f.substring(iLast + 1).trim());
        }
        else {
            f = f.trim();
            correctedFeaturings.push(f);
        }
    });
    return { title: title, feat: correctedFeaturings };
}
exports.readFeaturing = readFeaturing;
