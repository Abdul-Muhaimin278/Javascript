Frequency Map of Nested Arrays
Statement: Count how many times each number appears in a nested array of arbitrary depth.
Data:
nested = [1, [2, 3], [1, [2, 1, 4]], 3]

Unique Combinations from Two Arrays
Statement: Generate all possible pairs from two arrays, but ensure no duplicate pairs if values repeat.
Data:
arr1 = [1, 2]
arr2 = [2, 3]

Object with Dynamic Method Names
Statement: Create an object with keys as subjects and methods that return marks dynamically.
Data:
subjects = ["math", "english", "science"]
marks = [85, 90, 78]

Deep Merge of Objects
Statement: Merge two objects deeply where nested keys are also merged instead of overwritten.
Data:
obj1 = { a: 1, b: { x: 10, y: 20 } }
obj2 = { b: { y: 30, z: 40 }, c: 3 }

Callback Chain Execution
Statement: Write a function that executes an array of callbacks sequentially, passing the result from one to the next.
Data:
callbacks = [
x => x + 2,
x => x * 3,
x => x - 5
]
startValue = 10

Filter Objects by Nested Property
Statement: Filter users who have a city starting with “K” inside a nested address object.
Data:
users = [
{ name: "Ali", address: { city: "Karachi" } },
{ name: "Sara", address: { city: "Lahore" } },
{ name: "Omar", address: { city: "Kabul" } }
]

Array of Objects to Map with Array Values
Statement: Convert an array of objects to a Map where keys are names and values are arrays of marks.
Data:
students = [
{ name: "Ali", marks: 80 },
{ name: "Sara", marks: 90 },
{ name: "Ali", marks: 85 }
]

Find Missing Numbers in Range
Statement: Given an array of numbers, find the numbers missing in a consecutive range (min → max).
Data:
numbers = [1, 3, 4, 6, 7]

Flatten and Deduplicate Nested Arrays
Statement: Flatten a deeply nested array and remove duplicates.
Data:
nested = [1, [2, 3, [1, 2]], 3, [4]]

Group by Multiple Properties
Statement: Group objects first by grade, then by section inside grade.
Data:
students = [
{ name: "Ali", grade: "A", section: 1 },
{ name: "Sara", grade: "A", section: 2 },
{ name: "Omar", grade: "B", section: 1 }
]

Rotate Array Elements
Statement: Rotate an array n times to the right, without using built-in reverse methods.
Data:
arr = [1, 2, 3, 4, 5]
n = 2

Intersection of Multiple Arrays
Statement: Find elements that exist in all arrays.
Data:
arrs = [
[1, 2, 3, 4],
[2, 3, 5],
[2, 3, 6]
]

Dynamic Method Addition
Statement: Given an object and an array of method names, add methods dynamically that log their name when called.
Data:
obj = {}
methods = ["start", "stop", "pause"]

Custom Map Filtering
Statement: Given a Map of names → scores, return a Map of only those with score > 80.
Data:
scores = new Map([["Ali", 72], ["Sara", 90], ["Omar", 85]])

Nested Object Property Summation
Statement: Given a nested object of departments → employees → salaries, calculate the total salary.
Data:
company = {
hr: { emp1: 50000, emp2: 60000 },
it: { emp1: 70000, emp2: 80000 },
sales: { emp1: 55000 }
}
