let myDate = new Date() 
// console.log(myDate); // 2024-01-04T07:35:09.154Z
// console.log(myDate.toString()); // Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)

// console.log('dateString '+ myDate.toDateString()); // Mon May 06 2024
// console.log('isoString '+ myDate.toISOString()); //2024-05-06T10:34:38.862Z

// console.log('JSON '+ myDate.toJSON()); // JSON 2024-05-06T10:36:40.005Z
// console.log('LocaleDateString '+ myDate.toLocaleDateString()); // LocaleDateString 5/6/2024
// console.log('LocaleString '+ myDate.toLocaleString()); //LocaleString 5/6/2024, 10:36:40 AM
// console.log('LocaleTimeString '+ myDate.toLocaleTimeString()); //LocaleTimeString 10:36:40 AM


// creating a custom date (months start from 0)
let myCreatedDate1 = new Date(2023, 0, 23) // Mon Jan 23 2023
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
let myCreatedDate3 = new Date("2023-01-14") // YYYY-MM-DD month start from 1
let myCreatedDate4 = new Date("01-14-2023");
// MM-DD-YYYY console.log(myCreatedDate.toLocaleString());


// const date = new Date();
// const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
// const formattedDate = formatter.format(date);
// console.log(formattedDate); //5/6/24

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
const formattedTime = formatter.format(date);
console.log(formattedTime); // 10:51:54 AM