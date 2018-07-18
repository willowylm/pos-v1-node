
// import (./main/database.js)

module.exports = function printInventory(inputs) {


    //Task1: 显示商品信息
    //Task2: 显示赠品信息
    //Task3: 显示总钱

    var GoodsImformation = 
        [{
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }];

        var GoodList=new Map();

   for(var i=0;i<inputs.length;i++)
   {
       for(var j=0;j<GoodsImformation.length;j++)
       {
           if(inputs[i]==GoodsImformation[j].barcode)
           {
               {
                   for(var key in GoodList)
                   {
                       if(key!=undefined)
                       {
                           GoodList.get(GoodsImformation[j].name)++;
                       }
                       else
                       {
                        GoodList.set(GoodsImformation[j].name,1);

                       }
                   }
               }
           
            console.log('名称：'+GoodsImformation[j].name+'数量：'+GoodList.get(GoodsImformation[j].name)); 
           }
              
       }
   }
    



    return 'Hello World!';
};