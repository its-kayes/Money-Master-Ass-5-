function monthlyIncome(){
    let income = document.getElementById('income');
    let incomeTaka = parseInt(income.value);
    return incomeTaka;
}

// function items(item){
//     let items = document.getElementById(item);
//     let itemsPriceText = items.value;
//     let itemsPrice = parseInt(itemsPriceText);
// }


document.getElementById('calculate').addEventListener('click', function(){
    // Food Cost 
    // items('food');
    let food = document.getElementById('food');
    let foodPriceText = food.value;
    let foodPrice = parseInt(foodPriceText);

    // Rent Cost 
    let rent = document.getElementById('rent');
    let rentPriceText = rent.value;
    let rentPrice = parseInt(rentPriceText);

    // Clothes Cost
    let clothes = document.getElementById('clothes');
    let clothesPriceText = clothes.value;
    let clothesPrice = parseInt(clothesPriceText);

    // Intotal Cost 
    let totalCost = foodPrice + rentPrice + clothesPrice;
    document.getElementById('total-exp').innerText = totalCost;
    // let totalCostText = document.getElementById('total-exp');
    // totalCostText.innerText = totalCost;

    // Balance Part 
    // let income = document.getElementById('income');
    // let incomeTaka = parseInt(income.value);
    let balance = monthlyIncome() - parseInt(totalCost);
    document.getElementById('balance').innerText = balance;

    console.log(totalCost);
})
// console.log('Hocche Maybe')

document.getElementById('save-btn').addEventListener('click', function(){
    // let income = document.getElementById('income');
    // let incomeTaka = parseInt(income.value);

    // Saving Part 
    let save = document.getElementById('save');
    let saveTaka = parseInt(save.value);
    let savingTaka = parseInt(monthlyIncome() * (saveTaka / 100 )); 
    document.getElementById('SavedTaka').innerText = savingTaka;

    // Remaning Balance 
    let newBalanceText = document.getElementById('balance').innerText;
    let newBalance = parseInt(newBalanceText);
    let remaningBalance = newBalance - savingTaka;
    console.log(remaningBalance);
    document.getElementById('remaining-balance').innerText = remaningBalance;
})