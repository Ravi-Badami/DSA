var reverseWords = function(s) {
    
    let i = s.length - 1; // Start from the last character of the string
    let result = "";      // This will hold our final reversed-words string

    while (i >= 0) { // Keep going as long as there are characters to process

        // Step 1: Skip any trailing/middle spaces
        // Move i left until we land on a real character
        while (i >= 0 && s[i] === " ") {
            i--;
        }

        // Edge case: if i went below 0, there are no more words left
        // (handles leading spaces like "  hello world")
        if (i < 0) return result;

        // Step 2: Mark the END of the current word
        let end = i;

        // Step 3: Walk left until we hit a space or the beginning
        // This finds the START of the current word
        while (i >= 0 && s[i] !== " ") {
            i--;
        }

        // Step 4: Extract the word
        // After the loop, i is either at a space or -1
        // So the word starts at i+1 and ends at end (inclusive)
        let word = s.substring(i + 1, end + 1);

        // Step 5: Add a space BETWEEN words (not before the first word)
        // Only add space if result already has something in it
        if (result.length > 0) {
            result += " ";
        }

        result += word; // Append the extracted word
    }

    return result;
};