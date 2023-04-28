# @snailcode-net/basic-stat
An npm package for performing basic statistical analysis.


### Descriptive Statistics ###
---
1. Import the Summary class.


   `import { Summary } from "@snailcode.net/basic-stat";`
2. Create a new Summary.


    `const grades = [1, 2, 4, 6, 9];`
    
    `const summary = new Summary("grades", grades, "sample");`
3. To access all the descriptive statistics of the dataset, you can access the 'value' property of the summary. 
   
   
   The value property contains the mean, median, mode, max, min, variance, and standard deviation of the dataset.

    `summary.value`
4. You can access the different descriptive statistics individually using the following:


    * mean: `summary.mean()`
    * median: `summary.median()`
    * mode: `summary.mode()`
    * max: `summary.max()`
    * min: `summary.min()`
    * variance: `summary.variance()`
    * standard deviation: `summary.standardDeviation()`

### Inferential Statistics ###
---
in-progress

