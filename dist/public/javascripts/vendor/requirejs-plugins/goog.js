define(["async","propertyParser"],function(e,t){function n(e){var n=r.exec(e),i={moduleName:n[1],version:n[2]||"1"};return i.settings=t.parseProperties(n[3]),i}var r=/^([^,]+)(?:,([^,]+))?(?:,(.+))?/;return{load:function(e,t,r,i){if(i.isBuild)r(null);else{var o=n(e),s=o.settings;s.callback=r,t(["async!"+("https:"===document.location.protocol?"https":"http")+"://www.google.com/jsapi"],function(){google.load(o.moduleName,o.version,s)})}}}});