function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {}; // Mapping from s to t
    const mapTS = {}; // Mapping from t to s

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if there's an existing mapping
        if ((mapST[charS] !== undefined && mapST[charS] !== charT) ||
            (mapTS[charT] !== undefined && mapTS[charT] !== charS)) {
            return false;
        }

        // Create the mapping
        if (mapST[charS] === undefined) mapST[charS] = charT;
        if (mapTS[charT] === undefined) mapTS[charT] = charS;
    }

    return true;
}

// Example usage:
console.log(isIsomorphic("badc", "kikp")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
