// Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result, temp;
       if (s.length > 0) {
           for (let i = 0; i < s.length; i++) {
               if (i == 0) {
                   temp = s[i];
                   result = temp;
               }
               else if (result.includes(s[i]) != 1) {
                   temp = temp + s[i];
                   result = temp;
               }
               else {
                   temp = s[i];
               }
           }
       }
       if(result != undefined){
       if(result.length !== 0)
       return result.length;}
       else return 0;
   };
   //Array Prototype Last
   Array.prototype.last = function() {
    return last(this);
};

const last = (arr) => {
    if (arr.length == 0)
        return -1;
    else
        return arr[arr.length - 1];
    
    }

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */