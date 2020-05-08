/*
Question:
Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

Helper Notes:
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
  let map = new Map();
  
  for(let str of strs){
      let arr = Array(26).fill(0);
      
      for(let i = 0; i < str.length; i++){
          arr[str.charCodeAt(i) - 97] += 1;
      }
      
      let keyHash = arr.join('');
      
      if(map.has(keyHash)){
          map.get(keyHash).push(str);
      }else{
          map.set(keyHash, [str]);
      }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
