# JavaScript String Exercises

## Tasks

### humanized

Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

    console.log(humanize_format(301));
    console.log(humanize_format(402));
    "301st"
    "402nd"

### truncate

Write a JavaScript function to *truncates a string if it is longer than the specified number of characters*. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

    console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
    "We are doing !!"

### chop

Write a JavaScript function *to chop a string into chunks of a given length*.

    console.log(string_chop('w3resource',2));
    ["w3", "re", "so", "ur", "ce"]

### count

Write a JavaScript function to *count the occurrence of a substring* in a string.

    console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
    Output :
    2

### HTML_scape

Write a JavaScript function to *escape a HTML* string.

```
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
```

### repeat II

Write a JavaScript function to *repeat a string a specified times*.

    console.log(repeat_string('a', 4));
    "aaaa"


### strip

Write a JavaScript function to *strip leading and trailing spaces* from a string.

    console.log(strip(' w3resource '));
    "w3resource"

### truncate II

Write a JavaScript function to truncate a string to a certain number of words.

    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
    "The quick brown fox"

### alphabetize

Write a JavaScript function to alphabetize a given string.

*Hint:Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.*

    console.log(alphabetize_string('United States'));
    "SUadeeinsttt"

### remove_first

Write a JavaScript function to r*emove the last occurrence* of a given 'search string' from a string.

    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
    "The quick brown fox jumps over lazy dog"

### ASCIItoHEX

Write a JavaScript function to *convert ASCII to Hexadecimal* format.

    console.log(ascii_to_hexa('12'));
    "3132"

### HEXtoASCII

Write a JavaScript function to *convert Hexadecimal to ASCII format*.

    console.log(hex_to_ascii('3132'));
    console.log(hex_to_ascii('313030'));
    "12"
    "100"

### search

Write a JavaScript function to find a word within a string.

    console.log(search_word('The quick brown fox', 'fox'));
    "'fox' was found 1 times."

### check_ifEnds

Write a JavaScript function *check if a string ends with specified suffix*.

    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
    true

### scape_HTML II

Write a JavaScript function to *escapes special characters* **(&, <, >, ', ")** for use in HTML.

    console.log(escape_html('PHP & MySQL'));
    "PHP &amp; MySQL"

### remove II

Write a JavaScript function to *remove non-printable ASCII* chars.

    console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
    "PHP-MySQL"

### remove III

Write a JavaScript function to *remove non-word characters*.

    console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))
    "PHP ### MySQL"


### sentence

Write a JavaScript function to *convert a string to title case*.

    console.log(sentenceCase('PHP exercises. python exercises.'));
    "Php Exercises. Python Exercises."

### remove_HTMLorXML

Write a JavaScript function to *remove HTML/XML tags* from string.

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"

### zeroFill

Write a JavaScript function to create a *Zerofilled value with optional +, ### sign*.


    console.log(zeroFill(120, 5, '-'));
    "-00120"