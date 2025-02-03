/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
    let list = "";
    while(true) {
        goods = String(prompt("Please enter a comodity needed for a list:"));
        if(goods === "done") {
            break;
        }
        list += (list ? "," : "") + goods;
    }
    console.log(`${list}.`);
};
buildGroceryList();