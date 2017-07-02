cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-admob-simple.AdMob",
        "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
        "pluginId": "cordova-plugin-admob-simple",
        "clobbers": [
            "window.plugins.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-admob-sdklibs": "2.1.4",
    "cordova-plugin-admob-simple": "3.3.4",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-admobpro": "2.29.21"
};
// BOTTOM OF METADATA
});