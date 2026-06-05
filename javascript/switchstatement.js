///switchh statement
// The switch statement is a control flow statement that allows you to execute different code blocks based on different conditions. It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check. The syntax is as follows:
/*
switch (expression) {
    case value1:    
        // code to be executed if expression === value1
        break; 
    case value2:    
        // code to be executed if expression === value2
        break;  
    // more cases...
    default:    
        // code to be executed if expression doesn't match any case
}
*/
let day = "holiday";
  day = "thursday";
switch (day.toLowerCase()) {
    case "monday":  
        console.log("Today is Monday");
        break;  
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
            break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;  
    case "saturday":
        console.log("Today is Saturday");
        break;
    case "sunday":
        console.log("Today is Sunday");
        break;  
    default:
        console.log("Invalid day of the week");
}

// Output: Today is Thursday