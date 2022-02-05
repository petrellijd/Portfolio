function checkCashRegister(price, cash, cid) {
    const values = [
      ["PENNY",0.01],
      ["NICKEL",0.05],
      ["DIME",0.1],
      ["QUARTER",0.25],
      ["ONE",1],
      ["FIVE",5],
      ["TEN",10],
      ["TWENTY",20],
      ["ONE HUNDRED",100]
    ]
let changeDue = cash-price;
let totalChangeDue = [];
let amount;
let undefinedTest;

if(values[8][1] <= changeDue && cid[8][1] > 0){
for(let i = 1; i <= (cid[8][1]/values[8][1]) && 1 <= (changeDue/values[8][1]); i++){
    amount = values[8][1] * i;
    changeDue -= values[8][1];       
    } 
    values[8][1] = amount;
    totalChangeDue.push(values[8]);
}

if(values[7][1] <= changeDue && cid[7][1] > 0){
for(let i = 1; i <= (cid[7][1]/values[7][1]) && 1 <= (changeDue/values[7][1]); i++){
    amount = values[7][1] * i;
    changeDue -= values[7][1];       
    } 
    values[7][1] = amount;
    totalChangeDue.push(values[7]);
}

if(values[6][1] <= changeDue && cid[6][1] > 0){
for(let i = 1; i <= (cid[6][1]/values[6][1]) && 1 <= (changeDue/values[6][1]); i++){
    amount = values[6][1] * i;
    changeDue -= values[6][1];       
    } 
    values[6][1] = amount;
    totalChangeDue.push(values[6]);
}

if(values[5][1] <= changeDue && cid[5][1] > 0){
    for(let i = 1; i <= (cid[5][1]/values[5][1]) && 1 <= (changeDue/values[5][1]); i++){
        amount = values[5][1] * i;
        changeDue -= values[5][1];    
        } 
        values[5][1] = amount;
        totalChangeDue.push(values[5]);
    }

if(values[4][1] <= changeDue && cid[4][1] > 0){
    for(let i = 1; i <= (cid[4][1]/values[4][1]) && 1 <= (changeDue/values[4][1]); i++){
        amount = values[4][1] * i;
        changeDue -= values[4][1];    
        } 
        values[4][1] = amount;
        totalChangeDue.push(values[4]);
    }

if(values[3][1] <= changeDue && cid[3][1] > 0){
    for(let i = 1; i <= (cid[3][1]/values[3][1]) && 1 <= (changeDue/values[3][1]); i++){
        amount = values[3][1] * i;
        changeDue -= values[3][1];    
        } 
        values[3][1] = amount;
        totalChangeDue.push(values[3]);
    }

if(values[2][1] <= changeDue && cid[2][1] > 0){
    for(let i = 1; i <= (cid[2][1]/values[2][1]) && 1 <= (changeDue/values[2][1]); i++){
        amount = values[2][1] * i;
        changeDue -= values[2][1];    
        } 
        values[2][1] = amount;
        totalChangeDue.push(values[2]); 
    }

if(values[1][1] <= changeDue && cid[1][1] > 0){
    for(let i = 1; i <= (cid[1][1]/values[1][1]) && 1 <= (changeDue/values[1][1]); i++){
        amount = values[1][1] * i;
        changeDue -= values[1][1];    
        } 
        values[1][1] = amount;
        totalChangeDue.push(values[1]);
    }

if(values[0][1] <= changeDue && cid[0][1] > 0){
    for(let i = 2; i <= (cid[0][1]/values[0][1]) && 1 <= (changeDue/values[0][1]); i++){
        amount = values[0][1] * i;
        changeDue -= values[0][1];
        } 
        
        values[0][1] = amount; 
        totalChangeDue.push(values[0])

    }

for(let n = 0; n < cid.length; n++){
    undefinedTest = cid[n][1]
}

for(let j = 0; j <= totalChangeDue.length; j++){
    if(totalChangeDue[j][1] === undefined){
        return {status: "INSUFFICIENT_FUNDS", change: []
    }

    }else if(undefinedTest === 0){
        let closed = {status: "CLOSED",}
        const change = 'change';
        closed[change] = [...cid];
        return closed;

    }else{
        let open = {status: "OPEN",}
        const change = 'change';
        open[change] = [...totalChangeDue];
        return open;
    }
}

}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));