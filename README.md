# @snailcode-net/basic-stat
An npm package for performing basic statistical analysis.


### Descriptive Statistics ###
---
1. Import the Summary class.


   `import { Descriptive } from "@snailcode.net/basic-stat";`
2. Create a new Summary.


    `const grades = [1, 2, 4, 6, 9];`
    
    `const stat = new Descriptive("grades", grades, "sample");`
3. To access all the descriptive statistics of the dataset, you can access the 'summary' property of the summary. 
   
   
    `stat.summary`

    The value property contains the mean, median, mode, max, min, variance, and standard deviation of the dataset.

4. You can access the different descriptive statistics individually using the following:


    * mean: `stat.summary.mean`
    * median: `stat.summary.median`
    * mode: `stat.summary.mode`
    * max: `stat.summary.max`
    * min: `stat.summary.min`
    * variance: `stat.summary.variance`
    * standard deviation: `stat.summary.standardDeviation`

### Inferential Statistics ###
---
in-progress

