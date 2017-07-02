// Initialize your app
var myApp = new Framework7();
// Export selectors engine
var $$ = Dom7;

// Add views
var index = myApp.addView('#index');
var shop = myApp.addView('#shop');
var earnmore = myApp.addView('#earnmore');
var settings = myApp.addView('#settings');
var statistic = myApp.addView('#statistic');


function dd(sth) {
    console.log(sth);
}
function setCountItem(nameProduct) {
    if (nameProduct === "Mobile Games") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_mobile_game FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_mobile_game;
                count++;
                tx.executeSql('UPDATE user SET count_mobile_game=? WHERE id=?', [count,1]);
                $$('#countMobileGames').text(count);
            }, null);
        });
    } else if (nameProduct === "Webiste") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_website FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_website;
                count++;
                tx.executeSql('UPDATE user SET count_website=? WHERE id=?', [count,1]);
                $$('#countWebsite').text(count);
            }, null);
        });
    } else if (nameProduct === "Cars") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_cars FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_cars;
                count++;
                tx.executeSql('UPDATE user SET count_cars=? WHERE id=?', [count,1]);
                $$('#countCars').text(count);
            }, null);
        });
    } else if (nameProduct === "Garage") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_garage FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_garage;
                count++;
                tx.executeSql('UPDATE user SET count_garage=? WHERE id=?', [count,1]);
                $$('#countGarage').text(count);
            }, null);
        });
    } else if (nameProduct === "Bakers") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_bakers FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_bakers;
                count++;
                tx.executeSql('UPDATE user SET count_bakers=? WHERE id=?', [count,1]);
                $$('#countBakers').text(count);
            }, null);
        });
    } else if (nameProduct === "Restaurant") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_restaurant FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_restaurant;
                count++;
                tx.executeSql('UPDATE user SET count_restaurant=? WHERE id=?', [count,1]);
                $$('#countRestaurant').text(count);
            }, null);
        });
    } else if (nameProduct === "Flat") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_flat FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_flat;
                count++;
                tx.executeSql('UPDATE user SET count_flat=? WHERE id=?', [count,1]);
                $$('#countFlat').text(count);
            }, null);
        });
    } else if (nameProduct === "Villa") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_villa FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_villa;
                count++;
                tx.executeSql('UPDATE user SET count_villa=? WHERE id=?', [count,1]);
                $$('#countVilla').text(count);
            }, null);
        });
    } else if (nameProduct === "Factory") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_factory FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_factory;
                count++;
                tx.executeSql('UPDATE user SET count_factory=? WHERE id=?', [count,1]);
                $$('#countFactory').text(count);
            }, null);
        });
    } else if (nameProduct === "Bank") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_bank FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_bank;
                count++;
                tx.executeSql('UPDATE user SET count_bank=? WHERE id=?', [count,1]);
                $$('#countBank').text(count);
            }, null);
        });
    } else if (nameProduct === "Shop Center") {
        db.transaction(function (tx) {
            tx.executeSql('SELECT count_shopcenter FROM user WHERE id=1', [], function (tx ,result) {
                var count = result.rows[0].count_shopcenter;
                count++;
                tx.executeSql('UPDATE user SET count_shopcenter=? WHERE id=?', [count,1]);
                $$('#countMall').text(count);
            }, null);
        });
    }
}

function addProfit(count, profit) {
    if (count > 0) {
        return count * profit;
    } else{
        return 0;
    }
}

if (!document.cookie) {
    document.cookie = 'profit=0';
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function soundBg() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT sound_set FROM user WHERE id=1', [], function (tx, results) {
            var soundSet = results.rows[0].sound_set;
            var sndBg = document.getElementById("sndBg");
            if (soundSet === "true") {
                sndBg.src = "sound/bensound-littleidea.mp3";
                sndBg.loop = true;
                sndBg.volume = 0.2;
                sndBg.play();
            }
            if (soundSet === "false"){
                $$('#setSound').removeAttr("checked");
                sndBg.pause();
            }
        }, null);
    });
}