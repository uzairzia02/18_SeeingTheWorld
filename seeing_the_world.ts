let places: string[] = ['UK', 'US', 'France', 'India', 'Turkey'];

console.log('Places names in its original form: ' + places);

//print array in alphabatical order

console.log('copy of places names: ' + [...places].sort()); //3 dots say places ki copy ban gae hai
console.log('Places names in its original form: ' + places);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log('reverse alphabetical order: '+ [...places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('Places names in its original form: ' + places);

//Reverse the order of your list. Print the array to show that its order has changed.

console.log('Original but order changes: '+places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log('Orifinal form: '+places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log('Sorted in Alphabetical order: '+places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

console.log('Sorted in reverse alphabatical order: '+places.sort().reverse());


