// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// A Map can be created using the Map constructor, which takes an iterable (like an array) of key-value pairs as an argument. The Map will automatically remove any duplicate keys from the iterable.
let myMap = new Map([["key1", "value1"], ["key2", "value2"], ["key3", "value3"]]);
console.log(myMap); // Output: Map(3) {"key1" => "value1", "key2" => "value2", "key3" => "value3"}
//like key and value pair  

// Map has several methods to manipulate the map of key-value pairs. Some of the commonly used methods are:
// - set(key, value): Adds a new key-value pair to the map.
// - get(key): Returns the value associated with the specified key. 
// - has(key): Checks if a key is present in the map.
// - delete(key): Removes a key-value pair from the map.
// - clear(): Removes all key-value pairs from the map.
let map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
console.log(map);
console.log(map.get("name")); // Output: John
console.log(map.has("age")); // Output: true
map.delete("city");
console.log(map); // Output: Map(2) {"name" => "John", "age" => 30}
console.log(map.has(30)); // Output: false) cause the key is a string, not a number has checks for the presence of a key in the map, not a value
map.forEach((value, key) => console.log(key, value)); // Output: name John age 30
console.log(map.size); // Output: 2 - the size property returns the number of key-value pairs in the map

for(let key of map.keys()) {
    console.log(map.get(key)); // Output: John 30 - the for...of loop iterates over the key-value pairs in the map, and each key-value pair is returned as an array [key, value].
}

for(let [key, value] of map) {
    console.log(key, value); // Output: name John age 30 - the for...of loop iterates over the key-value pairs in the map, and each key-value pair is returned as an array [key, value]. We can use destructuring assignment to extract the key and value from the array and log them to the console.
}

map.forEach((value, key) => console.log(key+":"+value)); // Output: name John age 30 - the forEach method will call the callback function for each key-value pair in the map, passing the value and key as arguments. In this example, we are logging the key and value to the console.