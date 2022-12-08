let str = "Capitalize";

let result = "";

for( let i = 0; i <= str.length - 1; i++){
    if( i === 0){
       result = result + str[i].toLowerCase();
    }else if(i == str.length - 1){
        result = result + str[i].toUpperCase();
    }else{
        result = result + str[i]
    }
}

console.log(result)