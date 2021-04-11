# Word Frequency

This is a small javascript (node) application that reads a text file, and output the 20 most frequently used words in the file in order, along with their frequency.
The output needs to be the same as that of the following bash programme, where the first argument is the text file to count:

```
cat mobydick.txt | tr -cs 'a-zA-Z' '[\n*]' | grep -v "^$" | tr '[:upper:]' '[:lower:]'| sort | uniq -c | sort -nr | head -20
```

### Examining the bash code
1. cat mobydick.txt - This will read the file.
2. tr -cs 'a-zA-Z' '[\n*]'
    * tr translates / delete characters
    * -c: acting as opposite (not)
    * -d: deletes characters in the first set. e.g. tr -d ta will remove all t and a.

    replace everything apart from alphabets with new line.
    > tr -cs 'a-zA-Z' squash and removes spaces that are not alphabets.
    Then, '[\n*]' replaces spaces with new lines.

3. grep -v "^$"
    > grep -v "^$" outputs all, excluding any empty lines "^$".

4. tr '[:upper:]' '[:lower:]'
    > Replace all upper case letters to lower case letters.

5. sort
   > Sort by alphabetical ascending order
    * -r reverse sort, -n sort numerically, -f case insensitive sorting

6. uniq -c
    * uniq command require sorted inputs for correct result.
    > It will return only unique lines.
    * -c will give count for each line
    * -d will return only the repeated lines. -u will return lines that are not repeated.

7. sort -nr
   > sort in reverse order (-r) by number (-n)

8. head -20
    > Output first 20 lines
    * tail -20 will output last 20 lines.

### Output:
The above bash programme outputs the below:
```
   4284 the
   2192 and
   2185 of
   1861 a
   1685 to
   1366 in
   1056 i
   1024 that
    889 his
    821 it
    783 he
    616 but
    603 was
    595 with
    577 s
    564 is
    551 for
    542 all
    541 as
    458 at
```

### Environment and setup for the node application
- This application was run and tested with node version `v12.22.1` on Linux (ubuntu 20.04.2 LTS).
- No external library was used.

### How to run the application
1. Clone or download this repository in your local computer.
2. In the root folder, just run ```node index.js```

This will run the code which will read the text file at once, and display the result.
```
readFile('files/mobydick.txt', (results) => console.log(results));
```
If you run the below code instead, it will read test file line by line, then when all the lines are read, it will run the code to display the result.
```
readFileByLines('files/mobydick.txt', (results) => console.log(results));
```

### How to run tests
In the root folder, run ```node textToWordCounts/tests.js```

Each test should display "true" if it passes.

No testing library is used.

### Application code
Application codes are in the `textToWordCounts` folder.

Some comments are left to explain what the codes do.


