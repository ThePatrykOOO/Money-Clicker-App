cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/com.purplebrain.adbuddiz.sdk/www/adbuddizbridge.js",
        "id": "com.purplebrain.adbuddiz.sdk.AdBuddizBridge",
        "pluginId": "com.purplebrain.adbuddiz.sdk"
    },
    {
        "file": "plugins/com.purplebrain.adbuddiz.sdk/www/adbuddiz.js",
        "id": "com.purplebrain.adbuddiz.sdk.AdBuddiz",
        "pluginId": "com.purplebrain.adbuddiz.sdk",
        "clobbers": [
            "adbuddiz"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ad-admob/www/admob.js",
        "id": "cordova-plugin-ad-admob.admob",
        "pluginId": "cordova-plugin-ad-admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/admob/www/admob.js",
        "id": "admob.admob",
        "pluginId": "admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/com.admob.plugin/www/admob.js",
        "id": "com.admob.plugin.admob",
        "pluginId": "com.admob.plugin",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-admob/www/admob.js",
        "id": "cordova-admob.AdMobAds",
        "pluginId": "cordova-admob",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    },
    {
        "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
        "id": "cordova-connectivity-monitor.connectivity",
        "pluginId": "cordova-connectivity-monitor",
        "clobbers": [
            "window.connectivity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-device": "1.1.6",
    "com.purplebrain.adbuddiz.sdk": "3.1.11",
    "cordova-plugin-ad-admob": "1.0.118",
    "admob": "5.5.0",
    "com.admob.plugin": "5.5.0",
    "cordova-admob": "4.1.16",
    "cordova-connectivity-monitor": "1.2.2"
}
// BOTTOM OF METADATA
});