
// import (./main/database.js)
const { loadAllItems, loadPromotions } = require("./datbase");

module.exports = function printInventory(inputs) {


    //Task1: 显示商品信息
    //Task2: 显示赠品信息
    //Task3: 显示总钱




    var goodList = new Map();

    inputs.forEach(element => {
        let splitAllTtems = element.split('-');
        if(splitAllTtems.length == 1) {
            if(good_list.get(splitAllTtems[0]) == undefined) {
                good_list.set(splitAllTtems[0], 1);
            } else{
                good_list.set(splitAllTtems[0], good_list.get(splitAllTtems[0]) + 1);
            }
        } else if(splitAllTtems.length == 2) {
            if(good_list.get(splitAllTtems[0]) == undefined) {
              good_list.set(splitAllTtems[0], splitAllTtems[1]);
           } else{
              good_list.set(splitAllTtems[0], good_list.get(splitAllTtems[0]) + splitAllTtems[1]);
          }
        }
    });

    



    // return 'Hello World!';
};