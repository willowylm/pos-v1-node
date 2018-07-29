// import (./main/database.js)
const { loadAllItems, loadPromotions } = require("./datbase");

module.exports = function printInventory(inputs) {
  //Task1: 显示商品信息
  //Task2: 显示赠品信息
  //Task3: 显示总钱

  var goodList = new Map();

  inputs.forEach(element => {
    let splitAllTtems = element.split("-");
    if (splitAllTtems.length == 1) {
      if (goodList.get(splitAllTtems[0]) == undefined) {
        goodList.set(splitAllTtems[0], 1);
      } else {
        goodList.set(splitAllTtems[0], goodList.get(splitAllTtems[0]) + 1);
      }
    } else if (splitAllTtems.length == 2) {
      if (goodList.get(splitAllTtems[0]) == undefined) {
        goodList.set(splitAllTtems[0], splitAllTtems[1]);
      } else {
        goodList.set(
          splitAllTtems[0],
          goodList.get(splitAllTtems[0]) + splitAllTtems[1]
        );
      }
    }
  });

  let goodImformation = loadAllItems();
  let goodImformationMap = new Map();
  goodImformation.forEach(element => {
  goodImformationMap.set(element["barcode"], element);
  });

  let result = "";
  let sum = 0;
  let discountPrice = 0;

  result += "***<没钱赚商店>购物清单***";
  Array.from(goodList.keys()).forEach(element => {
    result +=
      "\n名称：" +
      goodImformationMap.get(element)["name"] +
      "，数量：" +
      goodList.get(element) +
      goodImformationMap.get(element)["unit"] +
      "，单价：" +
      goodImformationMap.get(element)["price"].toFixed(2) +
      "(元)，小计：" +
      (
        (goodList.get(element) - parseInt(goodList.get(element) / 3)) *
        goodImformationMap.get(element)["price"]
      ).toFixed(2) +
      "(元)";

    sum += goodList.get(element) * goodImformationMap.get(element)["price"];
  });

  result += "\n----------------------\n挥泪赠送商品：";

  let discount = loadPromotions();
  Array.from(goodList.keys()).forEach(element => {
    if (parseInt(goodList.get(element) / 3) > 0) {
      result +=
        "\n名称：" +
        goodImformationMap.get(element)["name"] +
        "，数量：" +
        parseInt(goodList.get(element) / 3) +
        goodImformationMap.get(element)["unit"];
      discountPrice +=
        parseInt(goodList.get(element) / 3) *
        goodImformationMap.get(element)["price"];
    }
  });

  result += "\n----------------------";
  result += "\n总计：" + (sum - discountPrice).toFixed(2) + "(元)";
  result += "\n节省：" + discountPrice.toFixed(2) + "(元)\n**********************";

  console.log (result);
  return result;
};
