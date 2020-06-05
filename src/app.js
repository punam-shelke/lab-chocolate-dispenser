var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color, count){
    if(count<1){
        return `Number cannot be zero/negative`;
    }
    for(let i = 0 ; i<count ; i++)
        chocolates.unshift(color);
    return chocolates;
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    if(number<1){
        return `Number cannot be zero/negative`;
    }
    if(chocolates.length < number){
        return `Insufficient chocolates in the dispenser`;
    }
    let removed = [];
    for(let i=0 ; i<number ;i++ ){
        removed[removed.length] = chocolates.shift();
    }
    return removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    //taking out n number of chocolates from bottom 
    //use pop function
    //declare empty array;
    if(number<1){
        return `Number cannot be zero/negative`;
    }
    if(chocolates.length < number){
        return `Insufficient chocolates in the dispenser`;
    }
    let array = [];
    for(let i=0 ; i < number ; i++){
        //remove chocolates from dispenser and store in array to be returned.
        array[array.length] = chocolates.pop();
    }
    //return the accumulated array
    return array;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    if(number<1){
        return `Number cannot be zero/negative`;
    }
    if(chocolates.length < number){
        return `Insufficient chocolates in the dispenser`;
    }
    //declare empty array
    let array = [];
    //keep count of chocolates removed
    let count = 0 ;
    for(let i = chocolates.length-1 ; i>-1 ; i--){
        if(chocolates[i] == color){
            //dont let count exceed
            if(count == number){
                break;
            }
            //add chocolate to array to be returned
            array[array.length] = chocolates[i];
            //remove from original array
            chocolates.splice(i,1);
            count++ ;
        }
    }
    //returned array of gathered chocolates
    return array;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    //create with array of size 7 with initial chocolate count as zero.

    let chocolateCount = [0,0,0,0,0,0,0];
    for(let i = 0 ; i < chocolates.length ; i++){
        //add count according to the color
        switch(chocolates[i]){
            case `green`:
                chocolateCount[0]++;
                break;
            case `silver`:
                chocolateCount[1]++;
                break;
            case `blue`:
                chocolateCount[2]++;
                break;
            case `crimson`:
                chocolateCount[3]++;
                break;
            case `purple`:
                chocolateCount[4]++;
                break;
            case `red`:
                chocolateCount[5]++;
                break;
            case `pink`:
                chocolateCount[6]++;

        }
    }
    //after getting count of all colors just return the array for colors present in parameters
    let nonZeroCount = [];
    for(let count of chocolateCount){
        if(count == 0){
            continue;
        }
        nonZeroCount[nonZeroCount.length] = count;
    }
    //return the non-zero count
    return nonZeroCount;
}

//function to find maximum in an array
function max(array){
// set maximum to zero.
    let maximum = 1 ;
    let index = -1;//max item index holder 
    for(let i = 0; i < array.length; i++){
        if(array[i] >= maximum){
            maximum = array[i]; //keep track of maximum element.
            index = i; //store index of maximum element.
        }
    }
    return index; //return index of maximum element
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
    let chocolateCount = [0,0,0,0,0,0,0] , index = -1;
    for(let i = 0 ; i < chocolates.length ; i++){
        //add count according to the color
        switch(chocolates[i]){
            case `green`:
                chocolateCount[0]++;
                break;
            case `silver`:
                chocolateCount[1]++;
                break;
            case `blue`:
                chocolateCount[2]++;
                break;
            case `crimson`:
                chocolateCount[3]++;
                break;
            case `purple`:
                chocolateCount[4]++;
                break;
            case `red`:
                chocolateCount[5]++;
                break;
            case `pink`:
                chocolateCount[6]++;

        }
    }
    //after counting is over we try find maximum
    index = max(chocolateCount); //get the index of maximum element.
    
    chocolates = [] ; 
    while(index != -1){
        console.log(`chocolatecount max to min ${chocolateCount[index]}`)
        switch(index){
            case 0 : 
                    for(let i=0 ; i < chocolateCount[index];i++)
                    chocolates[chocolates.length] = 'green';
                        console.log(`color array ${chocolates}`);
                     chocolateCount[index] = 0;
                    break;
            case 1 : 
            for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'silver';
            console.log(`color array ${chocolates}`);
                     chocolateCount[index] = 0;

                    break;
            case 2 :
                for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'blue';
            console.log(`color array ${chocolates}`);
                     chocolateCount[index] = 0;

                    break;
            case 3 : 
            for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'crimson';
            console.log(`color array ${chocolates}`);
                     chocolateCount[index] = 0;

                    break;
            case 4 : 
            for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'purple';
            console.log(`color array ${chocolates}`);
            chocolateCount[index] = 0;

                    break;
            case 5 : 
            for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'red';
            console.log(`color array ${chocolates}`);
            chocolateCount[index] = 0;

                    break;
            case 6 : 
            for(let i=0 ; i < chocolateCount[index];i++)
            chocolates[chocolates.length] = 'pink';
            console.log(`color array ${chocolates}`);
            chocolateCount[index] = 0;

                    break;
            
        }
        index = max(chocolateCount);
    }
   // chocolates = [...array] ; 

   return chocolates;
    
}
//console.log(`<br><br>here are global veriable status,<br> ${chocolates}`)
console.log(sortChocolateBasedOnCount([`red` , `blue` , `green` , `red`]));
//console.log(`<br><br>here are global veriable status,<br> ${chocolates}`)
//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates ,number, color, finalColor){
    if(number<1){
        return `Number cannot be zero/negative`;
    }
    if(color == finalColor){
        return `Can't replace the same chocolates`;
    }
    let count = 0;
    for(let i=0 ;i < chocolates.length ; i++){
        if(count == number){
            break;
        }
        if(chocolates[i] == color){
            
            chocolates.splice(i , 1 ,finalColor);
            count ++ ;

        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates ,color, finalColor){
    if(color == finalColor){
        return `Can't replace the same chocolates`;
    }
    let array =[]; 
    let count = 0;
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i] == finalColor){
            count++;
        }
        if(chocolates[i] == color){
            count++;
            console.log(`changing ${chocolates[i]} to ${finalColor}`);
            chocolates[i] = finalColor;
        }

    }
    array = [count , chocolates];
    return array;

}
//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates , color){
    for(let i=0 ; i < chocolates.length ; i++){
        if(chocolate == color){
            chocolates.splice(i,1);
            break;
        }
    }
    return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
