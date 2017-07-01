var db = openDatabase('Clicker', '1.0', 'Test DB', 2 * 1024 * 1024);

//INIT
db.transaction(function (tx) {
    //user
    tx.executeSql('CREATE TABLE IF NOT EXISTS user (id UNIQUE, name text, cash float, lvl int, per_click int, count_mobile_game int, count_website int, count_cars int, count_garage int, count_bakers int, count_restaurant int, count_flat int, count_villa int, count_factory int, count_bank int, count_shopcenter int, all_click int, sound_set text)');
    tx.executeSql('INSERT INTO user VALUES (1,"player", 0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,"true")');
    //shop
    tx.executeSql('CREATE TABLE IF NOT EXISTS shop (id UNIQUE, name_product text, price int, profit_min int)');
    tx.executeSql('INSERT INTO shop VALUES (1,"Mobile Games", 300, 5)');
    tx.executeSql('INSERT INTO shop VALUES (2,"Webiste", 600, 15)');
    tx.executeSql('INSERT INTO shop VALUES (3,"Cars", 2000, 40)');
    tx.executeSql('INSERT INTO shop VALUES (4,"Garage", 7000, 50)');
    tx.executeSql('INSERT INTO shop VALUES (5,"Bakers", 18000, 120)');
    tx.executeSql('INSERT INTO shop VALUES (6,"Restaurant", 30000, 200)');
    tx.executeSql('INSERT INTO shop VALUES (7,"Flat", 80000, 600)');
    tx.executeSql('INSERT INTO shop VALUES (8,"Villa", 200000, 1900)');
    tx.executeSql('INSERT INTO shop VALUES (9,"Factory", 800000, 5000)');
    tx.executeSql('INSERT INTO shop VALUES (10,"Bank", 2000000, 30000)');
    tx.executeSql('INSERT INTO shop VALUES (11,"Shop Center", 5000000, 90000)');
});

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM user WHERE id=1', [], function (tx, results) {
        var name = results.rows[0].name;
        Mycash = results.rows[0].cash;
        var lvl = results.rows[0].lvl;
        var perClick = results.rows[0].per_click;
        var countMobileGames = results.rows[0].count_mobile_game;
        var countWebsite = results.rows[0].count_website;
        var countCars = results.rows[0].count_cars;
        var countGarage = results.rows[0].count_garage;
        var countBakers = results.rows[0].count_bakers;
        var countRestaurant = results.rows[0].count_restaurant;
        var countFlat = results.rows[0].count_flat;
        var countVilla = results.rows[0].count_villa;
        var countFactory = results.rows[0].count_factory;
        var countBank = results.rows[0].count_bank;
        var countMall = results.rows[0].count_shopcenter;
        var allClickProfil = results.rows[0].all_click;
        var soundSet = results.rows[0].sound_set;

        $$('#nameProfil').text(name);
        $$('#cashProfil').text(Mycash);
        $$('#cash').text(Mycash);
        $$('#lvlProfil').text(lvl);
        $$('#perClick').text(perClick);
        $$('#perClickProfil').text(perClick);
        $$('#countMobileGames').text(countMobileGames);
        $$('#countWebsite').text(countWebsite);
        $$('#countCars').text(countCars);
        $$('#countGarage').text(countGarage);
        $$('#countBakers').text(countBakers);
        $$('#countRestaurant').text(countRestaurant);
        $$('#countFlat').text(countFlat);
        $$('#countVilla').text(countVilla);
        $$('#countFactory').text(countFactory);
        $$('#countBank').text(countBank);
        $$('#countMall').text(countMall);
        $$('#allClickProfil').text(allClickProfil);

        $$('#setName').attr("value",name);
        soundBg();
    }, null);
});

//Clicker
$$('#clickerBtn').click(function () {
    db.transaction(function (tx) {
        tx.executeSql('SELECT cash, per_click, all_click FROM user WHERE id=1', [], function (tx, results) {
            var cash = results.rows[0].cash;
            var perClick = results.rows[0].per_click;
            var allClick = results.rows[0].all_click;
            cash += perClick;
            Mycash += perClick;
            $$('#cash').text(cash);
            $$('#perClick').text(perClick);
            $$('#perClickProfil').text(perClick);
            allClick++;
            $$('#allClickProfil').text(allClick);
            db.transaction(function (tx) {
                tx.executeSql('UPDATE user SET cash=? WHERE id=?', [cash,1]);
                tx.executeSql('UPDATE user SET all_click=? WHERE id=?', [allClick,1]);
            });
            $$('#cash').text(cash);
        }, null);
    });
});
//Show Profit
db.transaction(function (tx) {
    tx.executeSql('SELECT profit_min FROM shop', [], function (tx, results) {
        var profitMobileGames = results.rows[0].profit_min / 60;
        var profitWebsite = results.rows[1].profit_min / 60;
        var profitCars = results.rows[2].profit_min / 60;
        var profitGarage = results.rows[3].profit_min / 60;
        var profitBakers = results.rows[4].profit_min / 60;
        var profitRestaurant = results.rows[5].profit_min / 60;
        var profitFlat = results.rows[6].profit_min / 60;
        var profitVilla = results.rows[7].profit_min / 60;
        var profitFactory = results.rows[8].profit_min / 60;
        var profitBank = results.rows[9].profit_min / 60;
        var profitMall = results.rows[10].profit_min / 60;


        function showAllProfit() {
            actualProfit = parseFloat(getCookie("profit"));
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM user', [], function (tx, results) {
                    var countMobileGames = results.rows[0].count_mobile_game;
                    var countWebsite = results.rows[0].count_website;
                    var countCars = results.rows[0].count_cars;
                    var countGarage = results.rows[0].count_garage;
                    var countBakers = results.rows[0].count_bakers;
                    var countRestaurant = results.rows[0].count_restaurant;
                    var countFlat = results.rows[0].count_flat;
                    var countVilla = results.rows[0].count_villa;
                    var countFactory = results.rows[0].count_factory;
                    var countBank = results.rows[0].count_bank;
                    var countMall = results.rows[0].count_shopcenter;

                    actualProfit += addProfit(countMobileGames, profitMobileGames);
                    actualProfit += addProfit(countWebsite, profitWebsite);
                    actualProfit += addProfit(countCars, profitCars);
                    actualProfit += addProfit(countGarage, profitGarage);
                    actualProfit += addProfit(countBakers, profitBakers);
                    actualProfit += addProfit(countRestaurant, profitRestaurant);
                    actualProfit += addProfit(countFlat, profitFlat);
                    actualProfit += addProfit(countVilla, profitVilla);
                    actualProfit += addProfit(countFactory, profitFactory);
                    actualProfit += addProfit(countBank, profitBank);
                    actualProfit += addProfit(countMall, profitMall);
                    var profitSec = (Math.round(actualProfit * 100)) / 100;
                    document.cookie = "profit=" + profitSec;
                    $$('#myProfit').text(profitSec);
                }, null);
            });
        }
        if (parseFloat(getCookie("profit")) !== 0) {
            showAllProfit();
            setInterval(showAllProfit, 1000)
        } else {
            showAllProfit();
        }
    });
});

// Add Profit
$$('#receiveProfit').click(function () {
    var profit = (Math.round(parseFloat(getCookie("profit"))*100)/100);
    db.transaction(function (tx) {
        tx.executeSql('SELECT cash FROM user WHERE id=1', [], function (tx, results) {
            var cash = results.rows[0].cash;
            cash += profit;
            var cashRound = (Math.round(cash * 100)) / 100;
            db.transaction(function (tx) {
                tx.executeSql('UPDATE user SET cash=? WHERE id=1', [cashRound]);
            });

            $$('#cash').text(cashRound);
            $$('#cashProfil').text(cashRound);
            document.cookie = "profit=0";
        }, null);
    });
});

//Upgrade Click
db.transaction(function (tx) {
    tx.executeSql('SELECT per_click FROM user WHERE id=1', [], function (tx, results) {
        var perClick = results.rows[0].per_click;
        var costUpgradeClick = 11 * perClick;

        var upgradeClick = "Upgrade Click (Cost = "+ costUpgradeClick +"$)";
        $$('#upgradeClick').html(upgradeClick);

    }, null);
});
$$('#upgradeClick').click(function () {
    db.transaction(function (tx) {
        tx.executeSql('SELECT cash,per_click FROM user WHERE id=1', [], function (tx, results) {
            var perClick = results.rows[0].per_click;
            var cash = results.rows[0].cash;
            var costUpgradeClick = 11 * perClick;

            if (cash >= costUpgradeClick) {
                cash -= costUpgradeClick;
                perClick++;
                db.transaction(function (tx) {
                    tx.executeSql('UPDATE user SET cash=?, per_click=? WHERE id=?', [cash,perClick,1]);
                });
                var costNewUpgradeClick = 11 * perClick;
                var upgradeClick = "Upgrade Click (Cost = "+ costNewUpgradeClick +"$)";
                $$('#upgradeClick').text(upgradeClick);
                $$('#cash').text(cash);
                $$('#perClick').text(perClick);
                $$('#perClickProfil').text(perClick);
                alert("You upgrade click. You will receive "+ perClick +"$ per click");
            } else {
                alert("You have not enough money :(");
            }

        }, null);
    });

});
//SHOP
db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM shop', [], function (tx, results) {
        var listContent = "";

        for (var i=0; i < results.rows.length; i++) {
            var name = results.rows[i].name_product;
            var price = results.rows[i].price;
            var profitMin = results.rows[i].profit_min;
            var id = results.rows[i].id;

            listContent += "<li class='item-content'>"+
                "<div class='item-inner'>"+
                "<div class='item-title'>"+ name +
                "<span class='item-text span-shop'>Price:"+ price +"$ Profit/min: "+ profitMin +"$</span></div>"+
                "<button class='button button-fill color-orange btnBuy' value='"+id+"'>Buy</button>"+
                "</div>"+
               "</li>";
        }
        $$('#shopItem').html(listContent);
    }, null);
});
//BUY

$$('body').on('click','.btnBuy', function () {
    var price = parseInt($$(this).val());
    db.transaction(function (tx) {
        tx.executeSql('SELECT price, name_product, profit_min FROM shop WHERE id=?', [price], function (tx ,result) {
            var price = result.rows[0].price;
            var nameProduct = result.rows[0].name_product;
            var profit = result.rows[0].profit_min;
            if (Mycash >= price) {
                var actualMoney = Mycash - price;
                $$('#cash').text(actualMoney);
                $$('#cashProfil').text(actualMoney);
                tx.executeSql('UPDATE user SET cash=? WHERE id=?', [actualMoney,1]);
                setCountItem(nameProduct);
                alert("You buy "+name+". You are earning "+ profit +"$ per minute")
            } else {
                alert("You have not enough money to buy this item");
            }
        }, null);
    });
});






//Settings
$$('#save').click(function () {
    db.transaction(function (tx) {
        var sound = "";
        if($$('#setSound').prop('checked') == true){
            sound = "true";
        } else {
            sound = "false";
        }
        var name = $$('#setName').val();
        if (name.length === 0 || name === '' || typeof name === 'undefined') {
            alert("Your name doesn't change");
            name = $$('#nameProfil').val();
        }
        $$('#setName').attr("value",name);
        $$('#nameProfil').text(name);
        tx.executeSql('UPDATE user SET sound_set=?, name=? WHERE id=?', [sound,name,1]);
        soundBg();
    });
});
