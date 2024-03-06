/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  let resultArray = [];
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (resultArray.length === 0) {
      resultArray.push({ category, totalSpent: price });
    } else {
      // for eachif(resultArray[category])

      const existingCategory = resultArray.find((item) => item.category === category);
      // returns the index to the first item found i.e, the category, else undefined is returned =>find()

      if (existingCategory) {
        existingCategory.totalSpent += price;
      } else {
        resultArray.push({ category, totalSpent: price });
        //too much of brainpower wasted when i did this, totalSpent property had me going crazy because of spelling error
      }
    }
  });
  return resultArray;
}

// const transactions = [
//   {
//     itemName: "Item1",
//     category: "Groceries",
//     price: 20,
//     timestamp: "2023-01-01",
//   },
//   {
//     itemName: "Item2",
//     category: "Electronics",
//     price: 50,
//     timestamp: "2023-01-02",
//   },
//   {
//     itemName: "Item3",
//     category: "Groceries",
//     price: 30,
//     timestamp: "2023-01-03",
//   },
//   {
//     itemName: "Item4",
//     category: "Electronics",
//     price: 40,
//     timestamp: "2023-01-04",
//   },
// ];
// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ];
// let result = calculateTotalSpentByCategory(transactions);

console.log(result);
module.exports = calculateTotalSpentByCategory;

//   let result = []
//   for(let i=0; i<transactions.length; i++){
//     if (!(transactions[i]["category"] in result)){
//       const {category, price} = transactions;
//       result.push({category, price});
//     }
    
//   }
//   return result;
