import { CodingQuestion, LevelData } from '@/types';

const qid = (lang: string, cat: string, level: number, num: number) => 
  `${lang}-${cat}-${level}-coding-${num}`;

// Python Coding Challenges
const pythonBasicChallenges: CodingQuestion[][] = [
  // Level 1
  [
    {
      id: qid('py', 'basic', 1, 1),
      type: 'coding',
      question: 'Write a function that returns "Hello, World!"',
      starterCode: 'def hello_world():\n    # Your code here\n    pass',
      testCases: [
        { input: '', expectedOutput: 'Hello, World!', description: 'Should return Hello, World!' }
      ]
    },
    {
      id: qid('py', 'basic', 1, 2),
      type: 'coding',
      question: 'Write a function that adds two numbers and returns the result',
      starterCode: 'def add(a, b):\n    # Your code here\n    pass',
      testCases: [
        { input: '2, 3', expectedOutput: '5', description: 'add(2, 3) should return 5' },
        { input: '-1, 1', expectedOutput: '0', description: 'add(-1, 1) should return 0' }
      ]
    },
    {
      id: qid('py', 'basic', 1, 3),
      type: 'coding',
      question: 'Write a function that returns the length of a string',
      starterCode: 'def string_length(s):\n    # Your code here\n    pass',
      testCases: [
        { input: '"hello"', expectedOutput: '5', description: 'string_length("hello") should return 5' },
        { input: '""', expectedOutput: '0', description: 'string_length("") should return 0' }
      ]
    }
  ],
  // Level 2
  [
    {
      id: qid('py', 'basic', 2, 1),
      type: 'coding',
      question: 'Write a function that checks if a number is even',
      starterCode: 'def is_even(n):\n    # Your code here\n    pass',
      testCases: [
        { input: '4', expectedOutput: 'True', description: 'is_even(4) should return True' },
        { input: '7', expectedOutput: 'False', description: 'is_even(7) should return False' }
      ]
    },
    {
      id: qid('py', 'basic', 2, 2),
      type: 'coding',
      question: 'Write a function that converts Celsius to Fahrenheit',
      starterCode: 'def celsius_to_fahrenheit(c):\n    # Formula: F = C * 9/5 + 32\n    pass',
      testCases: [
        { input: '0', expectedOutput: '32.0', description: '0°C should be 32°F' },
        { input: '100', expectedOutput: '212.0', description: '100°C should be 212°F' }
      ]
    },
    {
      id: qid('py', 'basic', 2, 3),
      type: 'coding',
      question: 'Write a function that returns the absolute value of a number',
      starterCode: 'def absolute(n):\n    # Your code here\n    pass',
      testCases: [
        { input: '-5', expectedOutput: '5', description: 'absolute(-5) should return 5' },
        { input: '3', expectedOutput: '3', description: 'absolute(3) should return 3' }
      ]
    }
  ],
  // Level 3
  [
    {
      id: qid('py', 'basic', 3, 1),
      type: 'coding',
      question: 'Write a function that returns the sum of all elements in a list',
      starterCode: 'def sum_list(arr):\n    # Your code here\n    pass',
      testCases: [
        { input: '[1, 2, 3, 4, 5]', expectedOutput: '15', description: 'sum_list([1,2,3,4,5]) should return 15' },
        { input: '[]', expectedOutput: '0', description: 'sum_list([]) should return 0' }
      ]
    },
    {
      id: qid('py', 'basic', 3, 2),
      type: 'coding',
      question: 'Write a function that finds the maximum value in a list',
      starterCode: 'def find_max(arr):\n    # Your code here\n    pass',
      testCases: [
        { input: '[3, 1, 4, 1, 5, 9]', expectedOutput: '9', description: 'Should return 9' },
        { input: '[-1, -5, -2]', expectedOutput: '-1', description: 'Should return -1' }
      ]
    },
    {
      id: qid('py', 'basic', 3, 3),
      type: 'coding',
      question: 'Write a function that reverses a list',
      starterCode: 'def reverse_list(arr):\n    # Your code here\n    pass',
      testCases: [
        { input: '[1, 2, 3]', expectedOutput: '[3, 2, 1]', description: 'Should reverse the list' },
        { input: '["a", "b"]', expectedOutput: '["b", "a"]', description: 'Should work with strings' }
      ]
    }
  ],
  // Level 4
  [
    {
      id: qid('py', 'basic', 4, 1),
      type: 'coding',
      question: 'Write a function that returns "positive", "negative", or "zero"',
      starterCode: 'def check_sign(n):\n    # Your code here\n    pass',
      testCases: [
        { input: '5', expectedOutput: 'positive', description: 'check_sign(5) should return "positive"' },
        { input: '-3', expectedOutput: 'negative', description: 'check_sign(-3) should return "negative"' },
        { input: '0', expectedOutput: 'zero', description: 'check_sign(0) should return "zero"' }
      ]
    },
    {
      id: qid('py', 'basic', 4, 2),
      type: 'coding',
      question: 'Write a function that returns the grade (A, B, C, D, F) based on score',
      starterCode: 'def get_grade(score):\n    # A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60\n    pass',
      testCases: [
        { input: '95', expectedOutput: 'A', description: '95 should be A' },
        { input: '72', expectedOutput: 'C', description: '72 should be C' },
        { input: '55', expectedOutput: 'F', description: '55 should be F' }
      ]
    },
    {
      id: qid('py', 'basic', 4, 3),
      type: 'coding',
      question: 'Write a function that checks if a year is a leap year',
      starterCode: 'def is_leap_year(year):\n    # Leap year rules: divisible by 4, but not 100 unless also 400\n    pass',
      testCases: [
        { input: '2000', expectedOutput: 'True', description: '2000 is a leap year' },
        { input: '1900', expectedOutput: 'False', description: '1900 is not a leap year' },
        { input: '2024', expectedOutput: 'True', description: '2024 is a leap year' }
      ]
    }
  ],
  // Level 5
  [
    {
      id: qid('py', 'basic', 5, 1),
      type: 'coding',
      question: 'Write a function that calculates factorial using a loop',
      starterCode: 'def factorial(n):\n    # Your code here\n    pass',
      testCases: [
        { input: '5', expectedOutput: '120', description: '5! = 120' },
        { input: '0', expectedOutput: '1', description: '0! = 1' }
      ]
    },
    {
      id: qid('py', 'basic', 5, 2),
      type: 'coding',
      question: 'Write a function that returns the n-th Fibonacci number',
      starterCode: 'def fibonacci(n):\n    # F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)\n    pass',
      testCases: [
        { input: '6', expectedOutput: '8', description: 'F(6) = 8' },
        { input: '10', expectedOutput: '55', description: 'F(10) = 55' }
      ]
    },
    {
      id: qid('py', 'basic', 5, 3),
      type: 'coding',
      question: 'Write a function that counts occurrences of a character in a string',
      starterCode: 'def count_char(s, char):\n    # Your code here\n    pass',
      testCases: [
        { input: '"hello", "l"', expectedOutput: '2', description: '"hello" has 2 "l"s' },
        { input: '"aaa", "a"', expectedOutput: '3', description: '"aaa" has 3 "a"s' }
      ]
    }
  ],
  // Level 6
  [
    {
      id: qid('py', 'basic', 6, 1),
      type: 'coding',
      question: 'Write a function that counts word frequency in a sentence',
      starterCode: 'def word_count(sentence):\n    # Return a dictionary of word: count\n    pass',
      testCases: [
        { input: '"hello hello world"', expectedOutput: "{'hello': 2, 'world': 1}", description: 'Should count words' }
      ]
    },
    {
      id: qid('py', 'basic', 6, 2),
      type: 'coding',
      question: 'Write a function that merges two dictionaries',
      starterCode: 'def merge_dicts(d1, d2):\n    # Your code here\n    pass',
      testCases: [
        { input: '{"a": 1}, {"b": 2}', expectedOutput: "{'a': 1, 'b': 2}", description: 'Should merge dicts' }
      ]
    },
    {
      id: qid('py', 'basic', 6, 3),
      type: 'coding',
      question: 'Write a function that inverts a dictionary (swap keys and values)',
      starterCode: 'def invert_dict(d):\n    # Your code here\n    pass',
      testCases: [
        { input: '{"a": 1, "b": 2}', expectedOutput: "{1: 'a', 2: 'b'}", description: 'Should invert' }
      ]
    }
  ],
  // Level 7
  [
    {
      id: qid('py', 'basic', 7, 1),
      type: 'coding',
      question: 'Write a function that filters even numbers from a list',
      starterCode: 'def filter_evens(arr):\n    # Your code here\n    pass',
      testCases: [
        { input: '[1, 2, 3, 4, 5, 6]', expectedOutput: '[2, 4, 6]', description: 'Should return evens' }
      ]
    },
    {
      id: qid('py', 'basic', 7, 2),
      type: 'coding',
      question: 'Write a function that finds the second largest number',
      starterCode: 'def second_largest(arr):\n    # Your code here\n    pass',
      testCases: [
        { input: '[1, 5, 3, 9, 2]', expectedOutput: '5', description: 'Second largest is 5' }
      ]
    },
    {
      id: qid('py', 'basic', 7, 3),
      type: 'coding',
      question: 'Write a recursive function to calculate power (base^exp)',
      starterCode: 'def power(base, exp):\n    # Your code here\n    pass',
      testCases: [
        { input: '2, 10', expectedOutput: '1024', description: '2^10 = 1024' },
        { input: '5, 3', expectedOutput: '125', description: '5^3 = 125' }
      ]
    }
  ]
];

const pythonIntermediateChallenges: CodingQuestion[][] = [
  // Level 1
  [
    {
      id: qid('py', 'inter', 1, 1),
      type: 'coding',
      question: 'Use list comprehension to square all numbers in a list',
      starterCode: 'def square_all(arr):\n    # Use list comprehension\n    pass',
      testCases: [
        { input: '[1, 2, 3, 4]', expectedOutput: '[1, 4, 9, 16]', description: 'Should square all' }
      ]
    },
    {
      id: qid('py', 'inter', 1, 2),
      type: 'coding',
      question: 'Create a generator that yields even numbers up to n',
      starterCode: 'def even_generator(n):\n    # Your code here\n    pass',
      testCases: [
        { input: '10', expectedOutput: '[0, 2, 4, 6, 8, 10]', description: 'Should yield evens up to 10' }
      ]
    },
    {
      id: qid('py', 'inter', 1, 3),
      type: 'coding',
      question: 'Use dict comprehension to create squares dict {n: n^2}',
      starterCode: 'def squares_dict(n):\n    # Return {1:1, 2:4, 3:9, ...}\n    pass',
      testCases: [
        { input: '3', expectedOutput: '{1: 1, 2: 4, 3: 9}', description: 'Should create squares dict' }
      ]
    }
  ],
  // Level 2
  [
    {
      id: qid('py', 'inter', 2, 1),
      type: 'coding',
      question: 'Write a function that safely divides with exception handling',
      starterCode: 'def safe_divide(a, b):\n    # Return "Error" on division by zero\n    pass',
      testCases: [
        { input: '10, 2', expectedOutput: '5.0', description: '10/2 = 5.0' },
        { input: '10, 0', expectedOutput: 'Error', description: 'Should handle division by zero' }
      ]
    },
    {
      id: qid('py', 'inter', 2, 2),
      type: 'coding',
      question: 'Write a function that validates email (basic check for @ and .)',
      starterCode: 'def validate_email(email):\n    # Return True if valid\n    pass',
      testCases: [
        { input: '"test@example.com"', expectedOutput: 'True', description: 'Valid email' },
        { input: '"invalid-email"', expectedOutput: 'False', description: 'Invalid email' }
      ]
    },
    {
      id: qid('py', 'inter', 2, 3),
      type: 'coding',
      question: 'Create a custom exception and function that raises it',
      starterCode: 'def check_age(age):\n    # Raise ValueError if age < 0\n    pass',
      testCases: [
        { input: '25', expectedOutput: 'Valid', description: 'Valid age returns Valid' },
        { input: '-5', expectedOutput: 'Invalid', description: 'Negative age returns Invalid' }
      ]
    }
  ],
  // Levels 3-7 with similar patterns
  [
    {
      id: qid('py', 'inter', 3, 1),
      type: 'coding',
      question: 'Create a class Rectangle with area() and perimeter() methods',
      starterCode: 'class Rectangle:\n    def __init__(self, width, height):\n        pass\n    \n    def area(self):\n        pass\n    \n    def perimeter(self):\n        pass',
      testCases: [
        { input: 'Rectangle(4, 5).area()', expectedOutput: '20', description: 'Area should be 20' },
        { input: 'Rectangle(4, 5).perimeter()', expectedOutput: '18', description: 'Perimeter should be 18' }
      ]
    },
    {
      id: qid('py', 'inter', 3, 2),
      type: 'coding',
      question: 'Create a Counter class with increment and get_count methods',
      starterCode: 'class Counter:\n    def __init__(self):\n        pass\n    \n    def increment(self):\n        pass\n    \n    def get_count(self):\n        pass',
      testCases: [
        { input: 'c = Counter(); c.increment(); c.increment(); c.get_count()', expectedOutput: '2', description: 'Should count 2' }
      ]
    },
    {
      id: qid('py', 'inter', 3, 3),
      type: 'coding',
      question: 'Create inheritance: Animal -> Dog with speak() method',
      starterCode: 'class Animal:\n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    # Override speak to return "Woof!"\n    pass',
      testCases: [
        { input: 'Dog().speak()', expectedOutput: 'Woof!', description: 'Dog should say Woof!' }
      ]
    }
  ],
  // Level 4
  [
    {
      id: qid('py', 'inter', 4, 1),
      type: 'coding',
      question: 'Write a function that reads and returns file content (simulated)',
      starterCode: 'def read_content(text):\n    # Simulate reading by returning text uppercase\n    pass',
      testCases: [
        { input: '"hello world"', expectedOutput: 'HELLO WORLD', description: 'Should uppercase' }
      ]
    },
    {
      id: qid('py', 'inter', 4, 2),
      type: 'coding',
      question: 'Count lines, words, and characters in text',
      starterCode: 'def count_text(text):\n    # Return (lines, words, chars) tuple\n    pass',
      testCases: [
        { input: '"hello world\\nhow are you"', expectedOutput: '(2, 5, 23)', description: 'Should count correctly' }
      ]
    },
    {
      id: qid('py', 'inter', 4, 3),
      type: 'coding',
      question: 'Parse CSV-like string into list of lists',
      starterCode: 'def parse_csv(text):\n    # "a,b\\nc,d" -> [["a","b"],["c","d"]]\n    pass',
      testCases: [
        { input: '"a,b\\nc,d"', expectedOutput: "[['a', 'b'], ['c', 'd']]", description: 'Should parse CSV' }
      ]
    }
  ],
  // Level 5
  [
    {
      id: qid('py', 'inter', 5, 1),
      type: 'coding',
      question: 'Simulate importing by creating and using a helper function',
      starterCode: 'def greet(name):\n    return f"Hello, {name}!"\n\ndef use_greet(name):\n    # Use greet function\n    pass',
      testCases: [
        { input: '"Alice"', expectedOutput: 'Hello, Alice!', description: 'Should greet Alice' }
      ]
    },
    {
      id: qid('py', 'inter', 5, 2),
      type: 'coding',
      question: 'Create a module-like namespace using a class',
      starterCode: 'class MathUtils:\n    @staticmethod\n    def add(a, b):\n        pass\n    \n    @staticmethod\n    def multiply(a, b):\n        pass',
      testCases: [
        { input: 'MathUtils.add(2, 3)', expectedOutput: '5', description: 'Should add' },
        { input: 'MathUtils.multiply(2, 3)', expectedOutput: '6', description: 'Should multiply' }
      ]
    },
    {
      id: qid('py', 'inter', 5, 3),
      type: 'coding',
      question: 'Implement a simple package structure simulation',
      starterCode: 'def calculate(operation, a, b):\n    # operations: "add", "sub", "mul", "div"\n    pass',
      testCases: [
        { input: '"add", 5, 3', expectedOutput: '8', description: 'add should return 8' },
        { input: '"mul", 4, 3', expectedOutput: '12', description: 'mul should return 12' }
      ]
    }
  ],
  // Level 6
  [
    {
      id: qid('py', 'inter', 6, 1),
      type: 'coding',
      question: 'Use map and lambda to double all numbers',
      starterCode: 'def double_all(arr):\n    # Use map and lambda\n    pass',
      testCases: [
        { input: '[1, 2, 3]', expectedOutput: '[2, 4, 6]', description: 'Should double all' }
      ]
    },
    {
      id: qid('py', 'inter', 6, 2),
      type: 'coding',
      question: 'Use filter and lambda to get numbers greater than 5',
      starterCode: 'def filter_greater(arr):\n    # Use filter and lambda\n    pass',
      testCases: [
        { input: '[1, 6, 3, 8, 2, 9]', expectedOutput: '[6, 8, 9]', description: 'Should filter > 5' }
      ]
    },
    {
      id: qid('py', 'inter', 6, 3),
      type: 'coding',
      question: 'Use reduce to find product of all numbers',
      starterCode: 'from functools import reduce\n\ndef product_all(arr):\n    # Use reduce\n    pass',
      testCases: [
        { input: '[1, 2, 3, 4]', expectedOutput: '24', description: 'Product should be 24' }
      ]
    }
  ],
  // Level 7
  [
    {
      id: qid('py', 'inter', 7, 1),
      type: 'coding',
      question: 'Create a timing decorator (simulated with wrapper)',
      starterCode: 'def timing_decorator(func):\n    def wrapper(*args):\n        # Call func and return "Executed: " + result\n        pass\n    return wrapper',
      testCases: [
        { input: '@timing_decorator\\ndef greet(): return "Hi"\\ngreet()', expectedOutput: 'Executed: Hi', description: 'Should wrap result' }
      ]
    },
    {
      id: qid('py', 'inter', 7, 2),
      type: 'coding',
      question: 'Create a memoization decorator',
      starterCode: 'def memoize(func):\n    cache = {}\n    def wrapper(n):\n        # Implement caching\n        pass\n    return wrapper',
      testCases: [
        { input: '@memoize\\ndef fib(n): return n if n<2 else fib(n-1)+fib(n-2)\\nfib(10)', expectedOutput: '55', description: 'Should compute fib(10)' }
      ]
    },
    {
      id: qid('py', 'inter', 7, 3),
      type: 'coding',
      question: 'Create a counter closure',
      starterCode: 'def make_counter():\n    count = 0\n    def counter():\n        # Increment and return count\n        pass\n    return counter',
      testCases: [
        { input: 'c = make_counter(); c(); c(); c()', expectedOutput: '3', description: 'Third call returns 3' }
      ]
    }
  ]
];

const pythonAdvancedChallenges: CodingQuestion[][] = Array(7).fill([
  {
    id: 'py-adv-placeholder-1',
    type: 'coding' as const,
    question: 'Implement an async data fetcher (simulated)',
    starterCode: 'async def fetch_data(url):\n    # Simulate async with return\n    pass',
    testCases: [
      { input: '"https://api.example.com"', expectedOutput: 'data', description: 'Should return data' }
    ]
  },
  {
    id: 'py-adv-placeholder-2',
    type: 'coding' as const,
    question: 'Create a thread-safe counter class',
    starterCode: 'import threading\n\nclass ThreadSafeCounter:\n    def __init__(self):\n        pass\n    \n    def increment(self):\n        pass',
    testCases: [
      { input: 'counter.increment() * 100', expectedOutput: '100', description: 'Should be thread-safe' }
    ]
  },
  {
    id: 'py-adv-placeholder-3',
    type: 'coding' as const,
    question: 'Implement a simple metaclass logger',
    starterCode: 'def log_class(cls):\n    # Return modified class that logs creation\n    pass',
    testCases: [
      { input: '@log_class\\nclass MyClass: pass', expectedOutput: 'logged', description: 'Should log class creation' }
    ]
  }
]);

// JavaScript Coding Challenges
const jsBasicChallenges: CodingQuestion[][] = [
  // Level 1
  [
    {
      id: qid('js', 'basic', 1, 1),
      type: 'coding',
      question: 'Write a function that returns "Hello, World!"',
      starterCode: 'function helloWorld() {\n  // Your code here\n}',
      testCases: [
        { input: '', expectedOutput: 'Hello, World!', description: 'Should return Hello, World!' }
      ]
    },
    {
      id: qid('js', 'basic', 1, 2),
      type: 'coding',
      question: 'Write a function that adds two numbers',
      starterCode: 'function add(a, b) {\n  // Your code here\n}',
      testCases: [
        { input: '2, 3', expectedOutput: '5', description: 'add(2, 3) should return 5' },
        { input: '-1, 1', expectedOutput: '0', description: 'add(-1, 1) should return 0' }
      ]
    },
    {
      id: qid('js', 'basic', 1, 3),
      type: 'coding',
      question: 'Write a function that returns string length',
      starterCode: 'function stringLength(s) {\n  // Your code here\n}',
      testCases: [
        { input: '"hello"', expectedOutput: '5', description: 'Should return 5' }
      ]
    }
  ],
  // Level 2
  [
    {
      id: qid('js', 'basic', 2, 1),
      type: 'coding',
      question: 'Write a function that checks if a number is even',
      starterCode: 'function isEven(n) {\n  // Your code here\n}',
      testCases: [
        { input: '4', expectedOutput: 'true', description: 'isEven(4) should return true' },
        { input: '7', expectedOutput: 'false', description: 'isEven(7) should return false' }
      ]
    },
    {
      id: qid('js', 'basic', 2, 2),
      type: 'coding',
      question: 'Write a function that converts Celsius to Fahrenheit',
      starterCode: 'function celsiusToFahrenheit(c) {\n  // Formula: F = C * 9/5 + 32\n}',
      testCases: [
        { input: '0', expectedOutput: '32', description: '0°C should be 32°F' }
      ]
    },
    {
      id: qid('js', 'basic', 2, 3),
      type: 'coding',
      question: 'Write a function using template literals to greet',
      starterCode: 'function greet(name) {\n  // Return "Hello, {name}!"\n}',
      testCases: [
        { input: '"World"', expectedOutput: 'Hello, World!', description: 'Should greet World' }
      ]
    }
  ],
  // Levels 3-7 follow similar pattern
  [
    {
      id: qid('js', 'basic', 3, 1),
      type: 'coding',
      question: 'Write a function that sums an array',
      starterCode: 'function sumArray(arr) {\n  // Your code here\n}',
      testCases: [
        { input: '[1, 2, 3, 4, 5]', expectedOutput: '15', description: 'Should sum to 15' }
      ]
    },
    {
      id: qid('js', 'basic', 3, 2),
      type: 'coding',
      question: 'Find the maximum value in an array',
      starterCode: 'function findMax(arr) {\n  // Your code here\n}',
      testCases: [
        { input: '[3, 1, 4, 1, 5, 9]', expectedOutput: '9', description: 'Max should be 9' }
      ]
    },
    {
      id: qid('js', 'basic', 3, 3),
      type: 'coding',
      question: 'Reverse an array without using reverse()',
      starterCode: 'function reverseArray(arr) {\n  // Your code here\n}',
      testCases: [
        { input: '[1, 2, 3]', expectedOutput: '[3, 2, 1]', description: 'Should reverse' }
      ]
    }
  ],
  // Level 4
  [
    {
      id: qid('js', 'basic', 4, 1),
      type: 'coding',
      question: 'Return "positive", "negative", or "zero" based on number',
      starterCode: 'function checkSign(n) {\n  // Your code here\n}',
      testCases: [
        { input: '5', expectedOutput: 'positive', description: 'Should return positive' },
        { input: '-3', expectedOutput: 'negative', description: 'Should return negative' }
      ]
    },
    {
      id: qid('js', 'basic', 4, 2),
      type: 'coding',
      question: 'Return grade based on score using switch',
      starterCode: 'function getGrade(score) {\n  // A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60\n}',
      testCases: [
        { input: '95', expectedOutput: 'A', description: '95 is A' },
        { input: '72', expectedOutput: 'C', description: '72 is C' }
      ]
    },
    {
      id: qid('js', 'basic', 4, 3),
      type: 'coding',
      question: 'Use ternary operator to return "adult" or "minor"',
      starterCode: 'function checkAge(age) {\n  // Use ternary: age >= 18 ? "adult" : "minor"\n}',
      testCases: [
        { input: '21', expectedOutput: 'adult', description: '21 is adult' },
        { input: '15', expectedOutput: 'minor', description: '15 is minor' }
      ]
    }
  ],
  // Level 5
  [
    {
      id: qid('js', 'basic', 5, 1),
      type: 'coding',
      question: 'Calculate factorial using a loop',
      starterCode: 'function factorial(n) {\n  // Your code here\n}',
      testCases: [
        { input: '5', expectedOutput: '120', description: '5! = 120' }
      ]
    },
    {
      id: qid('js', 'basic', 5, 2),
      type: 'coding',
      question: 'Return n-th Fibonacci number',
      starterCode: 'function fibonacci(n) {\n  // Your code here\n}',
      testCases: [
        { input: '10', expectedOutput: '55', description: 'F(10) = 55' }
      ]
    },
    {
      id: qid('js', 'basic', 5, 3),
      type: 'coding',
      question: 'Use for...of to sum array elements',
      starterCode: 'function sumWithForOf(arr) {\n  // Use for...of loop\n}',
      testCases: [
        { input: '[1, 2, 3, 4]', expectedOutput: '10', description: 'Sum is 10' }
      ]
    }
  ],
  // Level 6
  [
    {
      id: qid('js', 'basic', 6, 1),
      type: 'coding',
      question: 'Count occurrences of each word in a string',
      starterCode: 'function wordCount(str) {\n  // Return object {word: count}\n}',
      testCases: [
        { input: '"hello hello world"', expectedOutput: '{"hello":2,"world":1}', description: 'Should count words' }
      ]
    },
    {
      id: qid('js', 'basic', 6, 2),
      type: 'coding',
      question: 'Merge two objects using spread operator',
      starterCode: 'function mergeObjects(obj1, obj2) {\n  // Use spread operator\n}',
      testCases: [
        { input: '{a:1}, {b:2}', expectedOutput: '{"a":1,"b":2}', description: 'Should merge' }
      ]
    },
    {
      id: qid('js', 'basic', 6, 3),
      type: 'coding',
      question: 'Check if object has a specific property',
      starterCode: 'function hasProperty(obj, prop) {\n  // Return true/false\n}',
      testCases: [
        { input: '{name: "John"}, "name"', expectedOutput: 'true', description: 'Should have name' }
      ]
    }
  ],
  // Level 7
  [
    {
      id: qid('js', 'basic', 7, 1),
      type: 'coding',
      question: 'Write an arrow function that multiplies two numbers',
      starterCode: 'const multiply = // Your arrow function here',
      testCases: [
        { input: '3, 4', expectedOutput: '12', description: '3 * 4 = 12' }
      ]
    },
    {
      id: qid('js', 'basic', 7, 2),
      type: 'coding',
      question: 'Use rest parameters to sum any number of arguments',
      starterCode: 'function sumAll(...args) {\n  // Your code here\n}',
      testCases: [
        { input: '1, 2, 3, 4, 5', expectedOutput: '15', description: 'Sum all args' }
      ]
    },
    {
      id: qid('js', 'basic', 7, 3),
      type: 'coding',
      question: 'Create a function with default parameters',
      starterCode: 'function greetWithDefault(name = "Guest") {\n  // Return "Hello, {name}!"\n}',
      testCases: [
        { input: '', expectedOutput: 'Hello, Guest!', description: 'Default should be Guest' },
        { input: '"Alice"', expectedOutput: 'Hello, Alice!', description: 'Should greet Alice' }
      ]
    }
  ]
];

const jsIntermediateChallenges: CodingQuestion[][] = [
  // Level 1
  [
    {
      id: qid('js', 'inter', 1, 1),
      type: 'coding',
      question: 'Use array destructuring to swap two variables',
      starterCode: 'function swap(a, b) {\n  // Use destructuring to swap\n  return [a, b];\n}',
      testCases: [
        { input: '1, 2', expectedOutput: '[2, 1]', description: 'Should swap' }
      ]
    },
    {
      id: qid('js', 'inter', 1, 2),
      type: 'coding',
      question: 'Use map to square all numbers',
      starterCode: 'function squareAll(arr) {\n  // Use map\n}',
      testCases: [
        { input: '[1, 2, 3, 4]', expectedOutput: '[1, 4, 9, 16]', description: 'Should square' }
      ]
    },
    {
      id: qid('js', 'inter', 1, 3),
      type: 'coding',
      question: 'Use reduce to find the product of all numbers',
      starterCode: 'function productAll(arr) {\n  // Use reduce\n}',
      testCases: [
        { input: '[1, 2, 3, 4]', expectedOutput: '24', description: 'Product is 24' }
      ]
    }
  ],
  // Level 2
  [
    {
      id: qid('js', 'inter', 2, 1),
      type: 'coding',
      question: 'Create a Promise that resolves after delay',
      starterCode: 'function delay(ms) {\n  // Return a promise\n}',
      testCases: [
        { input: '100', expectedOutput: 'resolved', description: 'Should resolve' }
      ]
    },
    {
      id: qid('js', 'inter', 2, 2),
      type: 'coding',
      question: 'Use async/await to fetch simulated data',
      starterCode: 'async function fetchData() {\n  // Simulate with Promise.resolve\n  return "data";\n}',
      testCases: [
        { input: '', expectedOutput: 'data', description: 'Should return data' }
      ]
    },
    {
      id: qid('js', 'inter', 2, 3),
      type: 'coding',
      question: 'Handle Promise rejection with try/catch',
      starterCode: 'async function handleError() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    return "caught";\n  }\n}',
      testCases: [
        { input: '', expectedOutput: 'caught', description: 'Should catch error' }
      ]
    }
  ],
  // Remaining levels
  [
    {
      id: qid('js', 'inter', 3, 1),
      type: 'coding',
      question: 'Create a Rectangle class with area method',
      starterCode: 'class Rectangle {\n  constructor(width, height) {\n    // Your code\n  }\n  area() {\n    // Your code\n  }\n}',
      testCases: [
        { input: 'new Rectangle(4, 5).area()', expectedOutput: '20', description: 'Area should be 20' }
      ]
    },
    {
      id: qid('js', 'inter', 3, 2),
      type: 'coding',
      question: 'Create a class that extends another',
      starterCode: 'class Animal {\n  speak() { return "sound"; }\n}\n\nclass Dog extends Animal {\n  // Override speak to return "Woof!"\n}',
      testCases: [
        { input: 'new Dog().speak()', expectedOutput: 'Woof!', description: 'Dog says Woof!' }
      ]
    },
    {
      id: qid('js', 'inter', 3, 3),
      type: 'coding',
      question: 'Create a static method in a class',
      starterCode: 'class MathUtils {\n  static add(a, b) {\n    // Your code\n  }\n}',
      testCases: [
        { input: 'MathUtils.add(2, 3)', expectedOutput: '5', description: 'Should add' }
      ]
    }
  ],
  // Level 4-7 follow similar patterns
  [
    {
      id: qid('js', 'inter', 4, 1),
      type: 'coding',
      question: 'Select element and change its text',
      starterCode: '// Simulate DOM: return modified text\nfunction changeText(text) {\n  return text.toUpperCase();\n}',
      testCases: [
        { input: '"hello"', expectedOutput: 'HELLO', description: 'Should uppercase' }
      ]
    },
    {
      id: qid('js', 'inter', 4, 2),
      type: 'coding',
      question: 'Simulate event handling with callback',
      starterCode: 'function onClick(callback) {\n  return callback("clicked");\n}',
      testCases: [
        { input: '(msg) => msg.toUpperCase()', expectedOutput: 'CLICKED', description: 'Should handle event' }
      ]
    },
    {
      id: qid('js', 'inter', 4, 3),
      type: 'coding',
      question: 'Create element factory function',
      starterCode: 'function createElement(tag, text) {\n  return `<${tag}>${text}</${tag}>`;\n}',
      testCases: [
        { input: '"p", "Hello"', expectedOutput: '<p>Hello</p>', description: 'Should create element' }
      ]
    }
  ],
  [
    {
      id: qid('js', 'inter', 5, 1),
      type: 'coding',
      question: 'Create a closure that counts calls',
      starterCode: 'function createCounter() {\n  let count = 0;\n  return function() {\n    // Your code\n  };\n}',
      testCases: [
        { input: 'const c = createCounter(); c(); c(); c()', expectedOutput: '3', description: 'Should count 3' }
      ]
    },
    {
      id: qid('js', 'inter', 5, 2),
      type: 'coding',
      question: 'Demonstrate lexical scope',
      starterCode: 'function outer() {\n  const x = 10;\n  return function inner() {\n    return x;\n  };\n}',
      testCases: [
        { input: 'outer()()', expectedOutput: '10', description: 'Inner accesses outer x' }
      ]
    },
    {
      id: qid('js', 'inter', 5, 3),
      type: 'coding',
      question: 'Create an IIFE that returns a value',
      starterCode: 'const result = (function() {\n  // Return 42\n})();',
      testCases: [
        { input: 'result', expectedOutput: '42', description: 'Should be 42' }
      ]
    }
  ],
  [
    {
      id: qid('js', 'inter', 6, 1),
      type: 'coding',
      question: 'Export and use a module (simulated)',
      starterCode: '// Simulate module\nconst myModule = {\n  greet: (name) => `Hello, ${name}!`\n};\nfunction useModule(name) {\n  return myModule.greet(name);\n}',
      testCases: [
        { input: '"World"', expectedOutput: 'Hello, World!', description: 'Should greet' }
      ]
    },
    {
      id: qid('js', 'inter', 6, 2),
      type: 'coding',
      question: 'Create named exports object',
      starterCode: 'const exports = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b\n};',
      testCases: [
        { input: 'exports.add(5, 3)', expectedOutput: '8', description: 'Should add' }
      ]
    },
    {
      id: qid('js', 'inter', 6, 3),
      type: 'coding',
      question: 'Simulate dynamic import',
      starterCode: 'async function loadModule(name) {\n  const modules = { math: { pi: 3.14 } };\n  return modules[name];\n}',
      testCases: [
        { input: '"math"', expectedOutput: '{"pi":3.14}', description: 'Should load math' }
      ]
    }
  ],
  [
    {
      id: qid('js', 'inter', 7, 1),
      type: 'coding',
      question: 'Create custom Error class',
      starterCode: 'class ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "ValidationError";\n  }\n}',
      testCases: [
        { input: 'new ValidationError("invalid").name', expectedOutput: 'ValidationError', description: 'Should have name' }
      ]
    },
    {
      id: qid('js', 'inter', 7, 2),
      type: 'coding',
      question: 'Implement try-catch-finally',
      starterCode: 'function tryCatchDemo() {\n  let result = "";\n  try {\n    result += "try ";\n    throw new Error();\n  } catch (e) {\n    result += "catch ";\n  } finally {\n    result += "finally";\n  }\n  return result;\n}',
      testCases: [
        { input: '', expectedOutput: 'try catch finally', description: 'All should run' }
      ]
    },
    {
      id: qid('js', 'inter', 7, 3),
      type: 'coding',
      question: 'Rethrow an error with additional info',
      starterCode: 'function enhanceError() {\n  try {\n    throw new Error("original");\n  } catch (e) {\n    return "Enhanced: " + e.message;\n  }\n}',
      testCases: [
        { input: '', expectedOutput: 'Enhanced: original', description: 'Should enhance error' }
      ]
    }
  ]
];

const jsAdvancedChallenges: CodingQuestion[][] = Array(7).fill([
  {
    id: 'js-adv-placeholder-1',
    type: 'coding' as const,
    question: 'Implement a simple event loop simulation',
    starterCode: 'function eventLoop() {\n  // Simulate microtask vs macrotask\n}',
    testCases: [
      { input: '', expectedOutput: 'microtask first', description: 'Microtasks run first' }
    ]
  },
  {
    id: 'js-adv-placeholder-2',
    type: 'coding' as const,
    question: 'Create a Proxy with validation',
    starterCode: 'const validator = {\n  set(obj, prop, value) {\n    // Validate value > 0\n  }\n};',
    testCases: [
      { input: 'proxy.age = 25', expectedOutput: '25', description: 'Should set valid value' }
    ]
  },
  {
    id: 'js-adv-placeholder-3',
    type: 'coding' as const,
    question: 'Create a generator that yields Fibonacci',
    starterCode: 'function* fibonacci() {\n  // Yield Fibonacci numbers\n}',
    testCases: [
      { input: 'first 5 values', expectedOutput: '[0, 1, 1, 2, 3]', description: 'Should yield Fibonacci' }
    ]
  }
]);

// C++ Coding Challenges (simplified for browser execution)
const cppBasicChallenges: CodingQuestion[][] = [
  [
    {
      id: qid('cpp', 'basic', 1, 1),
      type: 'coding',
      question: 'Write a function that returns "Hello, World!"',
      starterCode: '#include <string>\n\nstd::string helloWorld() {\n    // Your code here\n}',
      testCases: [
        { input: '', expectedOutput: 'Hello, World!', description: 'Should return Hello, World!' }
      ]
    },
    {
      id: qid('cpp', 'basic', 1, 2),
      type: 'coding',
      question: 'Write a function that adds two integers',
      starterCode: 'int add(int a, int b) {\n    // Your code here\n}',
      testCases: [
        { input: '2, 3', expectedOutput: '5', description: 'add(2, 3) should return 5' }
      ]
    },
    {
      id: qid('cpp', 'basic', 1, 3),
      type: 'coding',
      question: 'Write a function that returns string length',
      starterCode: '#include <string>\n\nint stringLength(const std::string& s) {\n    // Your code here\n}',
      testCases: [
        { input: '"hello"', expectedOutput: '5', description: 'Length of "hello" is 5' }
      ]
    }
  ],
  // Remaining levels with similar C++ challenges
  ...Array(6).fill([
    {
      id: 'cpp-basic-placeholder-1',
      type: 'coding' as const,
      question: 'Implement a basic C++ function',
      starterCode: '// Your C++ code here',
      testCases: [
        { input: '', expectedOutput: 'result', description: 'Should work correctly' }
      ]
    },
    {
      id: 'cpp-basic-placeholder-2',
      type: 'coding' as const,
      question: 'Implement another C++ function',
      starterCode: '// Your C++ code here',
      testCases: [
        { input: '', expectedOutput: 'result', description: 'Should work correctly' }
      ]
    },
    {
      id: 'cpp-basic-placeholder-3',
      type: 'coding' as const,
      question: 'Implement a third C++ function',
      starterCode: '// Your C++ code here',
      testCases: [
        { input: '', expectedOutput: 'result', description: 'Should work correctly' }
      ]
    }
  ])
];

const cppIntermediateChallenges: CodingQuestion[][] = Array(7).fill([
  {
    id: 'cpp-inter-placeholder-1',
    type: 'coding' as const,
    question: 'Create a C++ class with methods',
    starterCode: 'class MyClass {\npublic:\n    // Your code here\n};',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  },
  {
    id: 'cpp-inter-placeholder-2',
    type: 'coding' as const,
    question: 'Implement operator overloading',
    starterCode: 'class Vector {\n    // Your code here\n};',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  },
  {
    id: 'cpp-inter-placeholder-3',
    type: 'coding' as const,
    question: 'Use STL containers',
    starterCode: '#include <vector>\n\n// Your code here',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  }
]);

const cppAdvancedChallenges: CodingQuestion[][] = Array(7).fill([
  {
    id: 'cpp-adv-placeholder-1',
    type: 'coding' as const,
    question: 'Implement smart pointer usage',
    starterCode: '#include <memory>\n\n// Your code here',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  },
  {
    id: 'cpp-adv-placeholder-2',
    type: 'coding' as const,
    question: 'Use move semantics',
    starterCode: 'class Resource {\n    // Your code here\n};',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  },
  {
    id: 'cpp-adv-placeholder-3',
    type: 'coding' as const,
    question: 'Implement template metaprogramming',
    starterCode: 'template<typename T>\n// Your code here',
    testCases: [
      { input: '', expectedOutput: 'result', description: 'Should work correctly' }
    ]
  }
]);

export const challengesData: Record<string, Record<string, CodingQuestion[][]>> = {
  python: {
    basic: pythonBasicChallenges,
    intermediate: pythonIntermediateChallenges,
    advanced: pythonAdvancedChallenges,
  },
  javascript: {
    basic: jsBasicChallenges,
    intermediate: jsIntermediateChallenges,
    advanced: jsAdvancedChallenges,
  },
  cpp: {
    basic: cppBasicChallenges,
    intermediate: cppIntermediateChallenges,
    advanced: cppAdvancedChallenges,
  },
};

// Helper function to get all questions for a specific level
export function getLevelQuestions(language: string, category: string, level: number) {
  const { questionsData } = require('./questions');
  
  const mcqAndShort = questionsData[language]?.[category]?.find(
    (l: LevelData) => l.level === level
  )?.questions || [];
  
  const coding = challengesData[language]?.[category]?.[level - 1] || [];
  
  return [...mcqAndShort, ...coding];
}
