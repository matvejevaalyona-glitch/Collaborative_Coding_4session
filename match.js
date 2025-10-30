// . ANY one letter
// * zero or more of whats before it
//input is string s(lowercase English letters). 1 <= s.length <= 20
//input is pattern p(lowercase English letters, '.', and '*') 1 <= p.length <= 20
//It is guaranteed for each appearance of the character '*', there will be a previous valid character to match

function isMatch(s, p){
    //1 constraint: if p is empty, it matches only if string is empty
    if(p.length === 0) return s.length === 0;

    // firstMatch = does first letter match (or pattern has '.')
    const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
//if next char in pattern is '*''
if(p.length >= 2 && p[1] === '*') {
    // two options:
    // 1.skip the "x*" part → isMatch(s, p.slice(2))
    // 2. if first matches → consume one char and keep same pattern → isMatch(s.slice(1), p)
return (
      isMatch(s, p.slice(2)) || 
      (firstMatch && isMatch(s.slice(1), p))
    );
}
else {
    // otherwise, move to next char in both string and pattern
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }

}
console.log(isMatch("aab", "baa"));