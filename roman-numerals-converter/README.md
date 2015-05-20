# Roman Numerals Converter Kata 

### General Instructions

The goal of this kata is to make a converter that can make conversions between roman numerals and arabic numbers. Roman numerals were used by (you guessed it) the romans to represent positive numbers. The roman numerals and corresponding values are as follows:

|Roman Numeral|Arabic|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

Roman numerals can also be combined in a subtractive fashion in order to represent values a bit more concisely, namely:

|Roman Numeral|Arabic|
|IV|4|
|IX|9|
|XL|40|
|XC|90|
|CD|400|
|CM|900|

Roman numerals are written additively with the largest numeral on the left. So the roman numeral MMMCDXXIV would translate to 3424 (3000 + 400 + 20 + 4) in arabic.

### Objective 1: Convert Arabic to Roman Numerals

The first objective of this kata is to convert arabic numbers to roman numerals.

### Objective 2: Convert Roman Numberals to Arabic

Now that we can get from arabic numbers to roman numerals, let's add the ability to do the reverse.

### Errata

Figuring out an appropriate algorithm for this can be tricky at first and might take some time. Once you have the algorithm down, you should be able to complete this kata in a TDD fashion in about 15 minutes.
