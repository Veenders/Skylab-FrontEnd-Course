# JavaScript String Exercises

## Tasks

### compare

Write a JavaScript function to *test case insensitive* (except special Unicode characters) string comparison.

    console.log(compare_strings('abcd', 'AbcD'));
    true

### search II

Write a JavaScript function to *create a case-insensitive search*.

    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'))
    "Not Matched"

### uncapitalize

Write a JavaScript function to *Uncapitalize the first character of a string*.

    console.log(Uncapitalize('Js string exercises'));
    "js string exercises"

### uncapitalize II

Write a JavaScript function to *Uncapitalize the first letter of each word* of a string.

    console.log(unCapitalize_Words('Js String Exercises'));
    "js string exercises"

### capitalize

Write a JavaScript function to *capitalize each* word in the string.

    console.log(capitalizeWords('js string exercises'));
    "JS STRING EXERCISES"

### capitalize II

Write a JavaScript function to *uncapitalize each word* in the string.

    console.log(unCapitalizeWords('JS STRING EXERCISES'));
    "js string exercises"

### isUpper

Write a JavaScript function to *test whether the character at the provided* (character) index is upper case.

    console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
    false

### isLower

Write a JavaScript function to *test whether the character at the provided (character) index is lower case*.

    console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
    true

### humanize II

Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

    console.log(humanize(1));
    console.log(humanize(20));
    "1st"
    "20th"

### startsWith

Write a JavaScript function to test whether a *string starts with a specified string*.

    console.log(startsWith('js string exercises', 'js'));
    true

### endsWith

Write a JavaScript function to *test* whether a string *ends with a specified string*.

    console.log(endsWith('JS string exercises', 'exercises'));
    true

### successor

Write a JavaScript function to get the successor of a string.

*Hint: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.*

    string.successor("abcd") == "abce"
    string.successor("THX1138") == "THX1139"
    string.successor("< >") == "< >"
    string.successor("1999zzz") == "2000aaa"
    string.successor("ZZZ9999") == "AAAA0000"
    console.log(successor('abcd'));
    console.log(successor('3456'));
    "abce"
    "3457"


### guid

Write a JavaScript function to *get unique guid*(an acronym for 'Globally Unique Identifier’) of the specified length, or 32 by default.

    console.log(guid(15));
    "b7pwBqrZwqaDrex"
