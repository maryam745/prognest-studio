import { MCQQuestion, ShortQuestion, LevelData } from '@/types';

// Helper to generate question IDs
const qid = (lang: string, cat: string, level: number, type: string, num: number) => 
  `${lang}-${cat}-${level}-${type}-${num}`;

// Python Questions
const pythonBasicQuestions: LevelData[] = [
  // Level 1
  {
    level: 1,
    questions: [
      { id: qid('py', 'basic', 1, 'mcq', 1), type: 'mcq', question: 'What is Python?', options: ['A snake', 'A programming language', 'A game', 'A database'], correctAnswer: 1 },
      { id: qid('py', 'basic', 1, 'mcq', 2), type: 'mcq', question: 'Who created Python?', options: ['Guido van Rossum', 'Dennis Ritchie', 'James Gosling', 'Bjarne Stroustrup'], correctAnswer: 0 },
      { id: qid('py', 'basic', 1, 'mcq', 3), type: 'mcq', question: 'Which symbol is used for comments in Python?', options: ['//', '/*', '#', '--'], correctAnswer: 2 },
      { id: qid('py', 'basic', 1, 'mcq', 4), type: 'mcq', question: 'What is the correct file extension for Python files?', options: ['.python', '.py', '.pt', '.pyt'], correctAnswer: 1 },
      { id: qid('py', 'basic', 1, 'short', 1), type: 'short', question: 'What function is used to output text in Python?', correctAnswer: 'print', acceptableAnswers: ['print()', 'print function'] },
      { id: qid('py', 'basic', 1, 'short', 2), type: 'short', question: 'What keyword is used to define a function in Python?', correctAnswer: 'def', acceptableAnswers: ['def keyword'] },
      { id: qid('py', 'basic', 1, 'short', 3), type: 'short', question: 'How do you start a single-line comment in Python?', correctAnswer: '#', acceptableAnswers: ['hash', 'hashtag'] },
    ]
  },
  // Level 2
  {
    level: 2,
    questions: [
      { id: qid('py', 'basic', 2, 'mcq', 1), type: 'mcq', question: 'Which data type is used to store text in Python?', options: ['int', 'float', 'str', 'bool'], correctAnswer: 2 },
      { id: qid('py', 'basic', 2, 'mcq', 2), type: 'mcq', question: 'What is the result of 5 // 2 in Python?', options: ['2.5', '2', '3', '2.0'], correctAnswer: 1 },
      { id: qid('py', 'basic', 2, 'mcq', 3), type: 'mcq', question: 'Which operator is used for exponentiation?', options: ['^', '**', '^^', 'exp'], correctAnswer: 1 },
      { id: qid('py', 'basic', 2, 'mcq', 4), type: 'mcq', question: 'What does len() function return?', options: ['Type of object', 'Length of object', 'Last element', 'First element'], correctAnswer: 1 },
      { id: qid('py', 'basic', 2, 'short', 1), type: 'short', question: 'What function converts a string to an integer?', correctAnswer: 'int', acceptableAnswers: ['int()', 'int function'] },
      { id: qid('py', 'basic', 2, 'short', 2), type: 'short', question: 'What is the boolean value for truth in Python?', correctAnswer: 'True', acceptableAnswers: ['true'] },
      { id: qid('py', 'basic', 2, 'short', 3), type: 'short', question: 'What operator checks for equality?', correctAnswer: '==', acceptableAnswers: ['double equals', 'equals equals'] },
    ]
  },
  // Level 3
  {
    level: 3,
    questions: [
      { id: qid('py', 'basic', 3, 'mcq', 1), type: 'mcq', question: 'How do you create a list in Python?', options: ['{}', '[]', '()', '<>'], correctAnswer: 1 },
      { id: qid('py', 'basic', 3, 'mcq', 2), type: 'mcq', question: 'What method adds an element to the end of a list?', options: ['add()', 'insert()', 'append()', 'push()'], correctAnswer: 2 },
      { id: qid('py', 'basic', 3, 'mcq', 3), type: 'mcq', question: 'What is the index of the first element in a list?', options: ['1', '0', '-1', 'first'], correctAnswer: 1 },
      { id: qid('py', 'basic', 3, 'mcq', 4), type: 'mcq', question: 'How do you access the last element of list L?', options: ['L[last]', 'L[-1]', 'L[end]', 'L[0]'], correctAnswer: 1 },
      { id: qid('py', 'basic', 3, 'short', 1), type: 'short', question: 'What method removes an element from a list by value?', correctAnswer: 'remove', acceptableAnswers: ['remove()', 'remove method'] },
      { id: qid('py', 'basic', 3, 'short', 2), type: 'short', question: 'What keyword is used to check membership in a list?', correctAnswer: 'in', acceptableAnswers: ['in keyword'] },
      { id: qid('py', 'basic', 3, 'short', 3), type: 'short', question: 'What method sorts a list in place?', correctAnswer: 'sort', acceptableAnswers: ['sort()', 'sort method'] },
    ]
  },
  // Level 4
  {
    level: 4,
    questions: [
      { id: qid('py', 'basic', 4, 'mcq', 1), type: 'mcq', question: 'Which keyword starts a conditional statement?', options: ['when', 'if', 'check', 'condition'], correctAnswer: 1 },
      { id: qid('py', 'basic', 4, 'mcq', 2), type: 'mcq', question: 'What keyword is used for else-if in Python?', options: ['else if', 'elseif', 'elif', 'elsif'], correctAnswer: 2 },
      { id: qid('py', 'basic', 4, 'mcq', 3), type: 'mcq', question: 'Which operator means "and" in Python?', options: ['&&', 'AND', 'and', '&'], correctAnswer: 2 },
      { id: qid('py', 'basic', 4, 'mcq', 4), type: 'mcq', question: 'What is the result of: not True', options: ['True', 'False', 'None', 'Error'], correctAnswer: 1 },
      { id: qid('py', 'basic', 4, 'short', 1), type: 'short', question: 'What keyword represents logical OR in Python?', correctAnswer: 'or', acceptableAnswers: ['or keyword'] },
      { id: qid('py', 'basic', 4, 'short', 2), type: 'short', question: 'What value represents "nothing" in Python?', correctAnswer: 'None', acceptableAnswers: ['none', 'null'] },
      { id: qid('py', 'basic', 4, 'short', 3), type: 'short', question: 'What keyword negates a boolean?', correctAnswer: 'not', acceptableAnswers: ['not keyword'] },
    ]
  },
  // Level 5
  {
    level: 5,
    questions: [
      { id: qid('py', 'basic', 5, 'mcq', 1), type: 'mcq', question: 'Which loop iterates over a sequence?', options: ['while', 'for', 'do-while', 'loop'], correctAnswer: 1 },
      { id: qid('py', 'basic', 5, 'mcq', 2), type: 'mcq', question: 'What does range(5) generate?', options: ['1 to 5', '0 to 5', '0 to 4', '1 to 4'], correctAnswer: 2 },
      { id: qid('py', 'basic', 5, 'mcq', 3), type: 'mcq', question: 'Which keyword exits a loop immediately?', options: ['stop', 'exit', 'break', 'end'], correctAnswer: 2 },
      { id: qid('py', 'basic', 5, 'mcq', 4), type: 'mcq', question: 'Which keyword skips to the next iteration?', options: ['skip', 'next', 'continue', 'pass'], correctAnswer: 2 },
      { id: qid('py', 'basic', 5, 'short', 1), type: 'short', question: 'What keyword creates a loop that runs while a condition is true?', correctAnswer: 'while', acceptableAnswers: ['while loop'] },
      { id: qid('py', 'basic', 5, 'short', 2), type: 'short', question: 'What does range(1, 10, 2) step by?', correctAnswer: '2', acceptableAnswers: ['two'] },
      { id: qid('py', 'basic', 5, 'short', 3), type: 'short', question: 'What keyword does nothing and acts as a placeholder?', correctAnswer: 'pass', acceptableAnswers: ['pass keyword'] },
    ]
  },
  // Level 6
  {
    level: 6,
    questions: [
      { id: qid('py', 'basic', 6, 'mcq', 1), type: 'mcq', question: 'What creates a dictionary in Python?', options: ['[]', '{}', '()', '<>'], correctAnswer: 1 },
      { id: qid('py', 'basic', 6, 'mcq', 2), type: 'mcq', question: 'How do you access value for key "name" in dict d?', options: ['d.name', 'd["name"]', 'd(name)', 'd->name'], correctAnswer: 1 },
      { id: qid('py', 'basic', 6, 'mcq', 3), type: 'mcq', question: 'What method returns all keys of a dictionary?', options: ['keys()', 'getkeys()', 'allkeys()', 'key()'], correctAnswer: 0 },
      { id: qid('py', 'basic', 6, 'mcq', 4), type: 'mcq', question: 'What creates a tuple?', options: ['[]', '{}', '()', '<>'], correctAnswer: 2 },
      { id: qid('py', 'basic', 6, 'short', 1), type: 'short', question: 'What method returns all values of a dictionary?', correctAnswer: 'values', acceptableAnswers: ['values()', 'values method'] },
      { id: qid('py', 'basic', 6, 'short', 2), type: 'short', question: 'Are tuples mutable or immutable?', correctAnswer: 'immutable', acceptableAnswers: ['immutable'] },
      { id: qid('py', 'basic', 6, 'short', 3), type: 'short', question: 'What method returns key-value pairs?', correctAnswer: 'items', acceptableAnswers: ['items()', 'items method'] },
    ]
  },
  // Level 7
  {
    level: 7,
    questions: [
      { id: qid('py', 'basic', 7, 'mcq', 1), type: 'mcq', question: 'How do you define a function?', options: ['function name():', 'def name():', 'func name():', 'define name():'], correctAnswer: 1 },
      { id: qid('py', 'basic', 7, 'mcq', 2), type: 'mcq', question: 'What keyword returns a value from a function?', options: ['give', 'output', 'return', 'send'], correctAnswer: 2 },
      { id: qid('py', 'basic', 7, 'mcq', 3), type: 'mcq', question: 'What is a parameter?', options: ['Return value', 'Input to function', 'Function name', 'Loop variable'], correctAnswer: 1 },
      { id: qid('py', 'basic', 7, 'mcq', 4), type: 'mcq', question: 'What happens if a function has no return statement?', options: ['Error', 'Returns 0', 'Returns None', 'Returns empty string'], correctAnswer: 2 },
      { id: qid('py', 'basic', 7, 'short', 1), type: 'short', question: 'What symbol is used for default parameter values?', correctAnswer: '=', acceptableAnswers: ['equals', 'equal sign'] },
      { id: qid('py', 'basic', 7, 'short', 2), type: 'short', question: 'What is *args used for?', correctAnswer: 'variable arguments', acceptableAnswers: ['multiple arguments', 'arbitrary arguments', 'var args'] },
      { id: qid('py', 'basic', 7, 'short', 3), type: 'short', question: 'What is **kwargs used for?', correctAnswer: 'keyword arguments', acceptableAnswers: ['named arguments', 'key value arguments'] },
    ]
  }
];

const pythonIntermediateQuestions: LevelData[] = [
  // Level 1
  {
    level: 1,
    questions: [
      { id: qid('py', 'inter', 1, 'mcq', 1), type: 'mcq', question: 'What is a list comprehension?', options: ['A way to iterate', 'Concise way to create lists', 'Type of loop', 'Error handling'], correctAnswer: 1 },
      { id: qid('py', 'inter', 1, 'mcq', 2), type: 'mcq', question: 'What does [x*2 for x in range(3)] return?', options: ['[0, 1, 2]', '[2, 4, 6]', '[0, 2, 4]', '[1, 2, 3]'], correctAnswer: 2 },
      { id: qid('py', 'inter', 1, 'mcq', 3), type: 'mcq', question: 'Which is a valid dictionary comprehension?', options: ['{x: x*2}', '{x: x*2 for x in range(3)}', '[x: x*2 for x in range(3)]', '(x: x*2 for x in range(3))'], correctAnswer: 1 },
      { id: qid('py', 'inter', 1, 'mcq', 4), type: 'mcq', question: 'What is a generator expression?', options: ['Creates list', 'Creates dict', 'Creates iterator lazily', 'Creates tuple'], correctAnswer: 2 },
      { id: qid('py', 'inter', 1, 'short', 1), type: 'short', question: 'What keyword is used to create a generator function?', correctAnswer: 'yield', acceptableAnswers: ['yield keyword'] },
      { id: qid('py', 'inter', 1, 'short', 2), type: 'short', question: 'What brackets create a set comprehension?', correctAnswer: '{}', acceptableAnswers: ['curly braces', 'braces'] },
      { id: qid('py', 'inter', 1, 'short', 3), type: 'short', question: 'What function creates an iterator from a list?', correctAnswer: 'iter', acceptableAnswers: ['iter()', 'iter function'] },
    ]
  },
  // Level 2
  {
    level: 2,
    questions: [
      { id: qid('py', 'inter', 2, 'mcq', 1), type: 'mcq', question: 'What keyword handles exceptions?', options: ['catch', 'except', 'handle', 'error'], correctAnswer: 1 },
      { id: qid('py', 'inter', 2, 'mcq', 2), type: 'mcq', question: 'What keyword raises an exception?', options: ['throw', 'raise', 'error', 'exception'], correctAnswer: 1 },
      { id: qid('py', 'inter', 2, 'mcq', 3), type: 'mcq', question: 'What block runs regardless of exception?', options: ['else', 'finally', 'always', 'end'], correctAnswer: 1 },
      { id: qid('py', 'inter', 2, 'mcq', 4), type: 'mcq', question: 'What is the base class for all exceptions?', options: ['Error', 'Exception', 'BaseException', 'Throwable'], correctAnswer: 2 },
      { id: qid('py', 'inter', 2, 'short', 1), type: 'short', question: 'What keyword starts exception handling block?', correctAnswer: 'try', acceptableAnswers: ['try block'] },
      { id: qid('py', 'inter', 2, 'short', 2), type: 'short', question: 'What happens in else block of try-except?', correctAnswer: 'runs if no exception', acceptableAnswers: ['no exception', 'success'] },
      { id: qid('py', 'inter', 2, 'short', 3), type: 'short', question: 'How do you get exception message as variable e?', correctAnswer: 'except Exception as e', acceptableAnswers: ['as e', 'except as'] },
    ]
  },
  // Level 3
  {
    level: 3,
    questions: [
      { id: qid('py', 'inter', 3, 'mcq', 1), type: 'mcq', question: 'What keyword defines a class?', options: ['class', 'define', 'object', 'struct'], correctAnswer: 0 },
      { id: qid('py', 'inter', 3, 'mcq', 2), type: 'mcq', question: 'What is __init__ method?', options: ['Destructor', 'Constructor', 'Static method', 'Class method'], correctAnswer: 1 },
      { id: qid('py', 'inter', 3, 'mcq', 3), type: 'mcq', question: 'What does self refer to?', options: ['Class itself', 'Instance of class', 'Parent class', 'Module'], correctAnswer: 1 },
      { id: qid('py', 'inter', 3, 'mcq', 4), type: 'mcq', question: 'How do you inherit from class Parent?', options: ['class Child extends Parent:', 'class Child(Parent):', 'class Child : Parent:', 'class Child inherits Parent:'], correctAnswer: 1 },
      { id: qid('py', 'inter', 3, 'short', 1), type: 'short', question: 'What function calls parent class method?', correctAnswer: 'super', acceptableAnswers: ['super()', 'super function'] },
      { id: qid('py', 'inter', 3, 'short', 2), type: 'short', question: 'What prefix makes attribute private by convention?', correctAnswer: '_', acceptableAnswers: ['underscore', 'single underscore'] },
      { id: qid('py', 'inter', 3, 'short', 3), type: 'short', question: 'What decorator makes a method static?', correctAnswer: '@staticmethod', acceptableAnswers: ['staticmethod'] },
    ]
  },
  // Level 4
  {
    level: 4,
    questions: [
      { id: qid('py', 'inter', 4, 'mcq', 1), type: 'mcq', question: 'What mode opens file for reading?', options: ['w', 'r', 'a', 'x'], correctAnswer: 1 },
      { id: qid('py', 'inter', 4, 'mcq', 2), type: 'mcq', question: 'What statement ensures file is closed?', options: ['close', 'finally', 'with', 'using'], correctAnswer: 2 },
      { id: qid('py', 'inter', 4, 'mcq', 3), type: 'mcq', question: 'What method reads entire file as string?', options: ['read()', 'readall()', 'content()', 'get()'], correctAnswer: 0 },
      { id: qid('py', 'inter', 4, 'mcq', 4), type: 'mcq', question: 'What method reads file line by line?', options: ['readline()', 'readlines()', 'lines()', 'Both A and B'], correctAnswer: 3 },
      { id: qid('py', 'inter', 4, 'short', 1), type: 'short', question: 'What mode opens file for writing (overwrite)?', correctAnswer: 'w', acceptableAnswers: ['write', 'w mode'] },
      { id: qid('py', 'inter', 4, 'short', 2), type: 'short', question: 'What mode appends to a file?', correctAnswer: 'a', acceptableAnswers: ['append', 'a mode'] },
      { id: qid('py', 'inter', 4, 'short', 3), type: 'short', question: 'What method writes text to a file?', correctAnswer: 'write', acceptableAnswers: ['write()', 'write method'] },
    ]
  },
  // Level 5
  {
    level: 5,
    questions: [
      { id: qid('py', 'inter', 5, 'mcq', 1), type: 'mcq', question: 'What is a module in Python?', options: ['A class', 'A .py file', 'A function', 'A package'], correctAnswer: 1 },
      { id: qid('py', 'inter', 5, 'mcq', 2), type: 'mcq', question: 'What keyword imports a module?', options: ['include', 'require', 'import', 'use'], correctAnswer: 2 },
      { id: qid('py', 'inter', 5, 'mcq', 3), type: 'mcq', question: 'What imports only sqrt from math?', options: ['import sqrt from math', 'from math import sqrt', 'include math.sqrt', 'use math::sqrt'], correctAnswer: 1 },
      { id: qid('py', 'inter', 5, 'mcq', 4), type: 'mcq', question: 'What is __name__ when module is run directly?', options: ['module name', '__main__', '__self__', '__run__'], correctAnswer: 1 },
      { id: qid('py', 'inter', 5, 'short', 1), type: 'short', question: 'What keyword gives a module an alias?', correctAnswer: 'as', acceptableAnswers: ['as keyword'] },
      { id: qid('py', 'inter', 5, 'short', 2), type: 'short', question: 'What file makes a directory a package?', correctAnswer: '__init__.py', acceptableAnswers: ['init.py', '__init__'] },
      { id: qid('py', 'inter', 5, 'short', 3), type: 'short', question: 'What imports everything from a module?', correctAnswer: 'from module import *', acceptableAnswers: ['import *', 'star import'] },
    ]
  },
  // Level 6
  {
    level: 6,
    questions: [
      { id: qid('py', 'inter', 6, 'mcq', 1), type: 'mcq', question: 'What is a lambda function?', options: ['Named function', 'Anonymous function', 'Class method', 'Generator'], correctAnswer: 1 },
      { id: qid('py', 'inter', 6, 'mcq', 2), type: 'mcq', question: 'What does map() function do?', options: ['Creates dictionary', 'Applies function to iterable', 'Filters elements', 'Reduces to single value'], correctAnswer: 1 },
      { id: qid('py', 'inter', 6, 'mcq', 3), type: 'mcq', question: 'What does filter() return?', options: ['List of all elements', 'Elements that pass test', 'Single element', 'Dictionary'], correctAnswer: 1 },
      { id: qid('py', 'inter', 6, 'mcq', 4), type: 'mcq', question: 'What module contains reduce()?', options: ['itertools', 'functools', 'operator', 'collections'], correctAnswer: 1 },
      { id: qid('py', 'inter', 6, 'short', 1), type: 'short', question: 'What is the syntax for lambda that doubles x?', correctAnswer: 'lambda x: x*2', acceptableAnswers: ['lambda x: x * 2', 'lambda x:x*2'] },
      { id: qid('py', 'inter', 6, 'short', 2), type: 'short', question: 'What function applies function cumulatively?', correctAnswer: 'reduce', acceptableAnswers: ['reduce()', 'functools.reduce'] },
      { id: qid('py', 'inter', 6, 'short', 3), type: 'short', question: 'What does zip() function do?', correctAnswer: 'pairs elements', acceptableAnswers: ['combines iterables', 'pairs iterables', 'zips iterables'] },
    ]
  },
  // Level 7
  {
    level: 7,
    questions: [
      { id: qid('py', 'inter', 7, 'mcq', 1), type: 'mcq', question: 'What is a decorator?', options: ['Comment type', 'Function wrapper', 'Class type', 'Variable type'], correctAnswer: 1 },
      { id: qid('py', 'inter', 7, 'mcq', 2), type: 'mcq', question: 'What symbol applies a decorator?', options: ['#', '@', '&', '*'], correctAnswer: 1 },
      { id: qid('py', 'inter', 7, 'mcq', 3), type: 'mcq', question: 'What is a closure?', options: ['Closed function', 'Function with free variables', 'Private function', 'Static function'], correctAnswer: 1 },
      { id: qid('py', 'inter', 7, 'mcq', 4), type: 'mcq', question: 'What preserves function metadata in decorators?', options: ['@preserve', '@wraps', '@metadata', '@keep'], correctAnswer: 1 },
      { id: qid('py', 'inter', 7, 'short', 1), type: 'short', question: 'What module has the wraps decorator?', correctAnswer: 'functools', acceptableAnswers: ['functools module'] },
      { id: qid('py', 'inter', 7, 'short', 2), type: 'short', question: 'Can decorators take arguments?', correctAnswer: 'yes', acceptableAnswers: ['true', 'yes they can'] },
      { id: qid('py', 'inter', 7, 'short', 3), type: 'short', question: 'What is the decorator that caches results?', correctAnswer: '@lru_cache', acceptableAnswers: ['lru_cache', 'functools.lru_cache'] },
    ]
  }
];

const pythonAdvancedQuestions: LevelData[] = [
  // Level 1
  {
    level: 1,
    questions: [
      { id: qid('py', 'adv', 1, 'mcq', 1), type: 'mcq', question: 'What is async/await used for?', options: ['Multithreading', 'Asynchronous programming', 'Parallel processing', 'Memory management'], correctAnswer: 1 },
      { id: qid('py', 'adv', 1, 'mcq', 2), type: 'mcq', question: 'What library provides async support?', options: ['threading', 'asyncio', 'concurrent', 'parallel'], correctAnswer: 1 },
      { id: qid('py', 'adv', 1, 'mcq', 3), type: 'mcq', question: 'What does await do?', options: ['Blocks thread', 'Pauses coroutine', 'Creates thread', 'Terminates program'], correctAnswer: 1 },
      { id: qid('py', 'adv', 1, 'mcq', 4), type: 'mcq', question: 'What is a coroutine?', options: ['Thread', 'Process', 'Async function', 'Generator'], correctAnswer: 2 },
      { id: qid('py', 'adv', 1, 'short', 1), type: 'short', question: 'What keyword defines an async function?', correctAnswer: 'async', acceptableAnswers: ['async def'] },
      { id: qid('py', 'adv', 1, 'short', 2), type: 'short', question: 'What runs the event loop?', correctAnswer: 'asyncio.run', acceptableAnswers: ['asyncio.run()', 'run'] },
      { id: qid('py', 'adv', 1, 'short', 3), type: 'short', question: 'What creates multiple concurrent tasks?', correctAnswer: 'asyncio.gather', acceptableAnswers: ['gather', 'asyncio.gather()'] },
    ]
  },
  // Level 2
  {
    level: 2,
    questions: [
      { id: qid('py', 'adv', 2, 'mcq', 1), type: 'mcq', question: 'What is GIL in Python?', options: ['Graphics Library', 'Global Interpreter Lock', 'General Interface Layer', 'Generic Input Library'], correctAnswer: 1 },
      { id: qid('py', 'adv', 2, 'mcq', 2), type: 'mcq', question: 'What module provides threading?', options: ['thread', 'threading', 'threads', 'multithread'], correctAnswer: 1 },
      { id: qid('py', 'adv', 2, 'mcq', 3), type: 'mcq', question: 'What bypasses GIL for CPU-bound tasks?', options: ['threading', 'asyncio', 'multiprocessing', 'concurrent'], correctAnswer: 2 },
      { id: qid('py', 'adv', 2, 'mcq', 4), type: 'mcq', question: 'What ensures thread-safe operations?', options: ['GIL', 'Lock', 'Both A and B', 'Neither'], correctAnswer: 2 },
      { id: qid('py', 'adv', 2, 'short', 1), type: 'short', question: 'What class creates a new thread?', correctAnswer: 'Thread', acceptableAnswers: ['threading.Thread'] },
      { id: qid('py', 'adv', 2, 'short', 2), type: 'short', question: 'What method starts a thread?', correctAnswer: 'start', acceptableAnswers: ['start()', 'start method'] },
      { id: qid('py', 'adv', 2, 'short', 3), type: 'short', question: 'What method waits for thread to complete?', correctAnswer: 'join', acceptableAnswers: ['join()', 'join method'] },
    ]
  },
  // Level 3-7 follow similar pattern
  {
    level: 3,
    questions: [
      { id: qid('py', 'adv', 3, 'mcq', 1), type: 'mcq', question: 'What is a metaclass?', options: ['Subclass', 'Class of a class', 'Abstract class', 'Interface'], correctAnswer: 1 },
      { id: qid('py', 'adv', 3, 'mcq', 2), type: 'mcq', question: 'What is the default metaclass?', options: ['object', 'type', 'class', 'meta'], correctAnswer: 1 },
      { id: qid('py', 'adv', 3, 'mcq', 3), type: 'mcq', question: 'What method is called when class is created?', options: ['__init__', '__new__', '__class__', '__create__'], correctAnswer: 1 },
      { id: qid('py', 'adv', 3, 'mcq', 4), type: 'mcq', question: 'What are descriptors used for?', options: ['Documentation', 'Attribute access control', 'Memory management', 'Type hints'], correctAnswer: 1 },
      { id: qid('py', 'adv', 3, 'short', 1), type: 'short', question: 'What method defines attribute get behavior?', correctAnswer: '__get__', acceptableAnswers: ['__get__ method'] },
      { id: qid('py', 'adv', 3, 'short', 2), type: 'short', question: 'What method defines attribute set behavior?', correctAnswer: '__set__', acceptableAnswers: ['__set__ method'] },
      { id: qid('py', 'adv', 3, 'short', 3), type: 'short', question: 'What built-in is an example of descriptor?', correctAnswer: 'property', acceptableAnswers: ['@property', 'property decorator'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('py', 'adv', 4, 'mcq', 1), type: 'mcq', question: 'What is type hinting in Python?', options: ['Dynamic typing', 'Static type annotations', 'Type conversion', 'Type checking'], correctAnswer: 1 },
      { id: qid('py', 'adv', 4, 'mcq', 2), type: 'mcq', question: 'What module provides type hint utilities?', options: ['types', 'typing', 'typehint', 'annotations'], correctAnswer: 1 },
      { id: qid('py', 'adv', 4, 'mcq', 3), type: 'mcq', question: 'What represents optional type?', options: ['Maybe[T]', 'Optional[T]', 'Nullable[T]', 'T?'], correctAnswer: 1 },
      { id: qid('py', 'adv', 4, 'mcq', 4), type: 'mcq', question: 'What tool checks type hints?', options: ['pylint', 'mypy', 'pytype', 'All of the above'], correctAnswer: 3 },
      { id: qid('py', 'adv', 4, 'short', 1), type: 'short', question: 'What type hint represents any type?', correctAnswer: 'Any', acceptableAnswers: ['typing.Any'] },
      { id: qid('py', 'adv', 4, 'short', 2), type: 'short', question: 'What represents a list of integers?', correctAnswer: 'List[int]', acceptableAnswers: ['list[int]'] },
      { id: qid('py', 'adv', 4, 'short', 3), type: 'short', question: 'What represents function return type of nothing?', correctAnswer: 'None', acceptableAnswers: ['-> None'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('py', 'adv', 5, 'mcq', 1), type: 'mcq', question: 'What is memory management in Python?', options: ['Manual', 'Automatic with GC', 'Stack-based', 'None'], correctAnswer: 1 },
      { id: qid('py', 'adv', 5, 'mcq', 2), type: 'mcq', question: 'What counts references to objects?', options: ['Garbage collector', 'Reference counter', 'Memory manager', 'Object tracker'], correctAnswer: 1 },
      { id: qid('py', 'adv', 5, 'mcq', 3), type: 'mcq', question: 'What handles circular references?', options: ['Reference counting', 'Garbage collector', 'Both', 'Neither'], correctAnswer: 1 },
      { id: qid('py', 'adv', 5, 'mcq', 4), type: 'mcq', question: 'What module provides memory profiling?', options: ['memory_profiler', 'tracemalloc', 'Both A and B', 'mem'], correctAnswer: 2 },
      { id: qid('py', 'adv', 5, 'short', 1), type: 'short', question: 'What module controls garbage collection?', correctAnswer: 'gc', acceptableAnswers: ['gc module'] },
      { id: qid('py', 'adv', 5, 'short', 2), type: 'short', question: 'What method forces garbage collection?', correctAnswer: 'gc.collect', acceptableAnswers: ['gc.collect()', 'collect'] },
      { id: qid('py', 'adv', 5, 'short', 3), type: 'short', question: 'What creates a weak reference?', correctAnswer: 'weakref', acceptableAnswers: ['weakref module', 'weakref.ref'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('py', 'adv', 6, 'mcq', 1), type: 'mcq', question: 'What is CPython?', options: ['Python written in C', 'Compiled Python', 'C extension for Python', 'Python compiler'], correctAnswer: 0 },
      { id: qid('py', 'adv', 6, 'mcq', 2), type: 'mcq', question: 'What builds C extensions easily?', options: ['ctypes', 'cffi', 'Cython', 'All of the above'], correctAnswer: 3 },
      { id: qid('py', 'adv', 6, 'mcq', 3), type: 'mcq', question: 'What is PyPy?', options: ['Package manager', 'Alternative interpreter', 'Debugger', 'Profiler'], correctAnswer: 1 },
      { id: qid('py', 'adv', 6, 'mcq', 4), type: 'mcq', question: 'What does JIT compilation do?', options: ['Interprets code', 'Compiles at runtime', 'Compiles ahead of time', 'None'], correctAnswer: 1 },
      { id: qid('py', 'adv', 6, 'short', 1), type: 'short', question: 'What module calls C functions directly?', correctAnswer: 'ctypes', acceptableAnswers: ['ctypes module'] },
      { id: qid('py', 'adv', 6, 'short', 2), type: 'short', question: 'What compiles Python to C?', correctAnswer: 'Cython', acceptableAnswers: ['cython'] },
      { id: qid('py', 'adv', 6, 'short', 3), type: 'short', question: 'What does PyPy use for speed?', correctAnswer: 'JIT', acceptableAnswers: ['JIT compilation', 'just in time'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('py', 'adv', 7, 'mcq', 1), type: 'mcq', question: 'What is monkey patching?', options: ['Bug fixing', 'Runtime modification', 'Testing technique', 'Debugging'], correctAnswer: 1 },
      { id: qid('py', 'adv', 7, 'mcq', 2), type: 'mcq', question: 'What are magic methods?', options: ['Private methods', 'Dunder methods', 'Static methods', 'Class methods'], correctAnswer: 1 },
      { id: qid('py', 'adv', 7, 'mcq', 3), type: 'mcq', question: 'What is __slots__ used for?', options: ['Method slots', 'Memory optimization', 'Thread safety', 'Type checking'], correctAnswer: 1 },
      { id: qid('py', 'adv', 7, 'mcq', 4), type: 'mcq', question: 'What does __call__ enable?', options: ['Object calling', 'Class creation', 'Method binding', 'Attribute access'], correctAnswer: 0 },
      { id: qid('py', 'adv', 7, 'short', 1), type: 'short', question: 'What method enables iteration?', correctAnswer: '__iter__', acceptableAnswers: ['__iter__ method'] },
      { id: qid('py', 'adv', 7, 'short', 2), type: 'short', question: 'What method enables context managers?', correctAnswer: '__enter__', acceptableAnswers: ['__enter__ and __exit__', '__enter__ __exit__'] },
      { id: qid('py', 'adv', 7, 'short', 3), type: 'short', question: 'What enables object hashing?', correctAnswer: '__hash__', acceptableAnswers: ['__hash__ method'] },
    ]
  }
];

// JavaScript Questions
const jsBasicQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('js', 'basic', 1, 'mcq', 1), type: 'mcq', question: 'What is JavaScript?', options: ['Markup language', 'Programming language', 'Database', 'Operating system'], correctAnswer: 1 },
      { id: qid('js', 'basic', 1, 'mcq', 2), type: 'mcq', question: 'Where does JavaScript run?', options: ['Only server', 'Only browser', 'Both browser and server', 'Only desktop'], correctAnswer: 2 },
      { id: qid('js', 'basic', 1, 'mcq', 3), type: 'mcq', question: 'How to declare a variable in modern JS?', options: ['var x', 'let x', 'const x', 'Both B and C'], correctAnswer: 3 },
      { id: qid('js', 'basic', 1, 'mcq', 4), type: 'mcq', question: 'What is console.log used for?', options: ['User input', 'Output to console', 'Create files', 'Network requests'], correctAnswer: 1 },
      { id: qid('js', 'basic', 1, 'short', 1), type: 'short', question: 'What keyword declares a constant?', correctAnswer: 'const', acceptableAnswers: ['const keyword'] },
      { id: qid('js', 'basic', 1, 'short', 2), type: 'short', question: 'What ends most JavaScript statements?', correctAnswer: ';', acceptableAnswers: ['semicolon', 'semi-colon'] },
      { id: qid('js', 'basic', 1, 'short', 3), type: 'short', question: 'What creates a single-line comment?', correctAnswer: '//', acceptableAnswers: ['double slash', 'two slashes'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('js', 'basic', 2, 'mcq', 1), type: 'mcq', question: 'What type is "hello"?', options: ['number', 'string', 'boolean', 'object'], correctAnswer: 1 },
      { id: qid('js', 'basic', 2, 'mcq', 2), type: 'mcq', question: 'What is typeof null?', options: ['null', 'undefined', 'object', 'boolean'], correctAnswer: 2 },
      { id: qid('js', 'basic', 2, 'mcq', 3), type: 'mcq', question: 'What is NaN?', options: ['Null value', 'Not a Number', 'Negative number', 'New array'], correctAnswer: 1 },
      { id: qid('js', 'basic', 2, 'mcq', 4), type: 'mcq', question: 'What does === check?', options: ['Value only', 'Type only', 'Value and type', 'Reference'], correctAnswer: 2 },
      { id: qid('js', 'basic', 2, 'short', 1), type: 'short', question: 'What are the two boolean values?', correctAnswer: 'true false', acceptableAnswers: ['true and false', 'true, false'] },
      { id: qid('js', 'basic', 2, 'short', 2), type: 'short', question: 'What type represents no value intentionally?', correctAnswer: 'null', acceptableAnswers: ['null type'] },
      { id: qid('js', 'basic', 2, 'short', 3), type: 'short', question: 'What operator checks loose equality?', correctAnswer: '==', acceptableAnswers: ['double equals', 'equals equals'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('js', 'basic', 3, 'mcq', 1), type: 'mcq', question: 'How to create an array?', options: ['{}', '[]', '()', '<>'], correctAnswer: 1 },
      { id: qid('js', 'basic', 3, 'mcq', 2), type: 'mcq', question: 'What adds element to end of array?', options: ['add()', 'append()', 'push()', 'insert()'], correctAnswer: 2 },
      { id: qid('js', 'basic', 3, 'mcq', 3), type: 'mcq', question: 'What removes last element?', options: ['remove()', 'pop()', 'delete()', 'shift()'], correctAnswer: 1 },
      { id: qid('js', 'basic', 3, 'mcq', 4), type: 'mcq', question: 'What property gives array length?', options: ['size', 'length', 'count', 'total'], correctAnswer: 1 },
      { id: qid('js', 'basic', 3, 'short', 1), type: 'short', question: 'What method joins array elements into string?', correctAnswer: 'join', acceptableAnswers: ['join()', 'join method'] },
      { id: qid('js', 'basic', 3, 'short', 2), type: 'short', question: 'What removes first element?', correctAnswer: 'shift', acceptableAnswers: ['shift()', 'shift method'] },
      { id: qid('js', 'basic', 3, 'short', 3), type: 'short', question: 'What adds element to beginning?', correctAnswer: 'unshift', acceptableAnswers: ['unshift()', 'unshift method'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('js', 'basic', 4, 'mcq', 1), type: 'mcq', question: 'What starts a conditional?', options: ['when', 'if', 'check', 'condition'], correctAnswer: 1 },
      { id: qid('js', 'basic', 4, 'mcq', 2), type: 'mcq', question: 'What is else if syntax?', options: ['elseif', 'elsif', 'else if', 'elif'], correctAnswer: 2 },
      { id: qid('js', 'basic', 4, 'mcq', 3), type: 'mcq', question: 'What operator means AND?', options: ['and', '&&', 'AND', '&'], correctAnswer: 1 },
      { id: qid('js', 'basic', 4, 'mcq', 4), type: 'mcq', question: 'What is the ternary operator?', options: ['?:', 'if?', ':?', '??'], correctAnswer: 0 },
      { id: qid('js', 'basic', 4, 'short', 1), type: 'short', question: 'What operator means OR?', correctAnswer: '||', acceptableAnswers: ['double pipe', 'or operator'] },
      { id: qid('js', 'basic', 4, 'short', 2), type: 'short', question: 'What operator negates a boolean?', correctAnswer: '!', acceptableAnswers: ['exclamation', 'not operator'] },
      { id: qid('js', 'basic', 4, 'short', 3), type: 'short', question: 'What keyword handles multiple conditions?', correctAnswer: 'switch', acceptableAnswers: ['switch statement'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('js', 'basic', 5, 'mcq', 1), type: 'mcq', question: 'Which loop has counter?', options: ['while', 'for', 'do-while', 'foreach'], correctAnswer: 1 },
      { id: qid('js', 'basic', 5, 'mcq', 2), type: 'mcq', question: 'What iterates over array indices?', options: ['for...of', 'for...in', 'forEach', 'for'], correctAnswer: 1 },
      { id: qid('js', 'basic', 5, 'mcq', 3), type: 'mcq', question: 'What iterates over array values?', options: ['for...of', 'for...in', 'for', 'while'], correctAnswer: 0 },
      { id: qid('js', 'basic', 5, 'mcq', 4), type: 'mcq', question: 'What exits a loop?', options: ['stop', 'exit', 'break', 'end'], correctAnswer: 2 },
      { id: qid('js', 'basic', 5, 'short', 1), type: 'short', question: 'What skips to next iteration?', correctAnswer: 'continue', acceptableAnswers: ['continue statement'] },
      { id: qid('js', 'basic', 5, 'short', 2), type: 'short', question: 'What loop runs at least once?', correctAnswer: 'do-while', acceptableAnswers: ['do while', 'do...while'] },
      { id: qid('js', 'basic', 5, 'short', 3), type: 'short', question: 'What array method iterates with callback?', correctAnswer: 'forEach', acceptableAnswers: ['forEach()', 'foreach'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('js', 'basic', 6, 'mcq', 1), type: 'mcq', question: 'How to create an object?', options: ['[]', '{}', '()', 'new Object'], correctAnswer: 1 },
      { id: qid('js', 'basic', 6, 'mcq', 2), type: 'mcq', question: 'How to access property name?', options: ['obj.name', 'obj["name"]', 'Both A and B', 'obj->name'], correctAnswer: 2 },
      { id: qid('js', 'basic', 6, 'mcq', 3), type: 'mcq', question: 'What returns object keys?', options: ['Object.keys()', 'obj.keys()', 'keys(obj)', 'obj.getKeys()'], correctAnswer: 0 },
      { id: qid('js', 'basic', 6, 'mcq', 4), type: 'mcq', question: 'What checks if property exists?', options: ['has()', 'exists()', 'in operator', 'contains()'], correctAnswer: 2 },
      { id: qid('js', 'basic', 6, 'short', 1), type: 'short', question: 'What returns object values?', correctAnswer: 'Object.values', acceptableAnswers: ['Object.values()', 'values'] },
      { id: qid('js', 'basic', 6, 'short', 2), type: 'short', question: 'How do you delete a property?', correctAnswer: 'delete', acceptableAnswers: ['delete operator', 'delete keyword'] },
      { id: qid('js', 'basic', 6, 'short', 3), type: 'short', question: 'What copies object properties?', correctAnswer: 'Object.assign', acceptableAnswers: ['Object.assign()', 'spread operator'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('js', 'basic', 7, 'mcq', 1), type: 'mcq', question: 'How to declare a function?', options: ['function name()', 'def name()', 'func name()', 'fn name()'], correctAnswer: 0 },
      { id: qid('js', 'basic', 7, 'mcq', 2), type: 'mcq', question: 'What is an arrow function?', options: ['() => {}', '() -> {}', '[] => {}', 'function => {}'], correctAnswer: 0 },
      { id: qid('js', 'basic', 7, 'mcq', 3), type: 'mcq', question: 'What returns a value?', options: ['give', 'output', 'return', 'send'], correctAnswer: 2 },
      { id: qid('js', 'basic', 7, 'mcq', 4), type: 'mcq', question: 'What is function hoisting?', options: ['Moving functions to top', 'Calling functions', 'Defining parameters', 'None'], correctAnswer: 0 },
      { id: qid('js', 'basic', 7, 'short', 1), type: 'short', question: 'What represents all function arguments?', correctAnswer: 'arguments', acceptableAnswers: ['arguments object'] },
      { id: qid('js', 'basic', 7, 'short', 2), type: 'short', question: 'What syntax creates rest parameters?', correctAnswer: '...', acceptableAnswers: ['spread', 'three dots', 'rest operator'] },
      { id: qid('js', 'basic', 7, 'short', 3), type: 'short', question: 'What keyword is used for default parameter?', correctAnswer: '=', acceptableAnswers: ['equals', 'equal sign'] },
    ]
  }
];

const jsIntermediateQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('js', 'inter', 1, 'mcq', 1), type: 'mcq', question: 'What is array destructuring?', options: ['Destroying array', 'Unpacking array values', 'Creating array', 'Sorting array'], correctAnswer: 1 },
      { id: qid('js', 'inter', 1, 'mcq', 2), type: 'mcq', question: 'What is spread operator?', options: ['...', '***', '---', '+++'], correctAnswer: 0 },
      { id: qid('js', 'inter', 1, 'mcq', 3), type: 'mcq', question: 'What does map() return?', options: ['Modified original', 'New array', 'Single value', 'Boolean'], correctAnswer: 1 },
      { id: qid('js', 'inter', 1, 'mcq', 4), type: 'mcq', question: 'What does filter() return?', options: ['All elements', 'Elements passing test', 'First element', 'Nothing'], correctAnswer: 1 },
      { id: qid('js', 'inter', 1, 'short', 1), type: 'short', question: 'What reduces array to single value?', correctAnswer: 'reduce', acceptableAnswers: ['reduce()', 'reduce method'] },
      { id: qid('js', 'inter', 1, 'short', 2), type: 'short', question: 'What finds first matching element?', correctAnswer: 'find', acceptableAnswers: ['find()', 'find method'] },
      { id: qid('js', 'inter', 1, 'short', 3), type: 'short', question: 'What checks if any element passes test?', correctAnswer: 'some', acceptableAnswers: ['some()', 'some method'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('js', 'inter', 2, 'mcq', 1), type: 'mcq', question: 'What is a Promise?', options: ['Immediate value', 'Future value', 'Static value', 'No value'], correctAnswer: 1 },
      { id: qid('js', 'inter', 2, 'mcq', 2), type: 'mcq', question: 'What handles Promise success?', options: ['catch()', 'then()', 'finally()', 'resolve()'], correctAnswer: 1 },
      { id: qid('js', 'inter', 2, 'mcq', 3), type: 'mcq', question: 'What handles Promise failure?', options: ['then()', 'catch()', 'error()', 'fail()'], correctAnswer: 1 },
      { id: qid('js', 'inter', 2, 'mcq', 4), type: 'mcq', question: 'What waits for all promises?', options: ['Promise.all()', 'Promise.wait()', 'Promise.any()', 'Promise.every()'], correctAnswer: 0 },
      { id: qid('js', 'inter', 2, 'short', 1), type: 'short', question: 'What keyword makes function async?', correctAnswer: 'async', acceptableAnswers: ['async keyword'] },
      { id: qid('js', 'inter', 2, 'short', 2), type: 'short', question: 'What keyword waits for promise?', correctAnswer: 'await', acceptableAnswers: ['await keyword'] },
      { id: qid('js', 'inter', 2, 'short', 3), type: 'short', question: 'What runs regardless of promise result?', correctAnswer: 'finally', acceptableAnswers: ['finally()', 'finally method'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('js', 'inter', 3, 'mcq', 1), type: 'mcq', question: 'What keyword defines a class?', options: ['class', 'define', 'object', 'struct'], correctAnswer: 0 },
      { id: qid('js', 'inter', 3, 'mcq', 2), type: 'mcq', question: 'What method initializes class?', options: ['init()', 'constructor()', 'create()', 'new()'], correctAnswer: 1 },
      { id: qid('js', 'inter', 3, 'mcq', 3), type: 'mcq', question: 'What keyword inherits from class?', options: ['inherits', 'extends', 'implements', 'uses'], correctAnswer: 1 },
      { id: qid('js', 'inter', 3, 'mcq', 4), type: 'mcq', question: 'What calls parent constructor?', options: ['parent()', 'base()', 'super()', 'this()'], correctAnswer: 2 },
      { id: qid('js', 'inter', 3, 'short', 1), type: 'short', question: 'What keyword creates instance?', correctAnswer: 'new', acceptableAnswers: ['new keyword'] },
      { id: qid('js', 'inter', 3, 'short', 2), type: 'short', question: 'What keyword makes method static?', correctAnswer: 'static', acceptableAnswers: ['static keyword'] },
      { id: qid('js', 'inter', 3, 'short', 3), type: 'short', question: 'What refers to current instance?', correctAnswer: 'this', acceptableAnswers: ['this keyword'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('js', 'inter', 4, 'mcq', 1), type: 'mcq', question: 'What is DOM?', options: ['Document Object Model', 'Data Object Model', 'Digital Object Model', 'Dynamic Object Model'], correctAnswer: 0 },
      { id: qid('js', 'inter', 4, 'mcq', 2), type: 'mcq', question: 'What selects element by ID?', options: ['getById()', 'getElementById()', 'selectById()', 'findById()'], correctAnswer: 1 },
      { id: qid('js', 'inter', 4, 'mcq', 3), type: 'mcq', question: 'What selects by CSS selector?', options: ['select()', 'find()', 'querySelector()', 'getElement()'], correctAnswer: 2 },
      { id: qid('js', 'inter', 4, 'mcq', 4), type: 'mcq', question: 'What adds event listener?', options: ['on()', 'addEventListener()', 'listen()', 'addEvent()'], correctAnswer: 1 },
      { id: qid('js', 'inter', 4, 'short', 1), type: 'short', question: 'What property sets element text?', correctAnswer: 'textContent', acceptableAnswers: ['innerText', 'innerHTML'] },
      { id: qid('js', 'inter', 4, 'short', 2), type: 'short', question: 'What creates new element?', correctAnswer: 'createElement', acceptableAnswers: ['document.createElement', 'createElement()'] },
      { id: qid('js', 'inter', 4, 'short', 3), type: 'short', question: 'What appends child element?', correctAnswer: 'appendChild', acceptableAnswers: ['appendChild()', 'append'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('js', 'inter', 5, 'mcq', 1), type: 'mcq', question: 'What is a closure?', options: ['Closed function', 'Function with outer scope access', 'Private function', 'Static function'], correctAnswer: 1 },
      { id: qid('js', 'inter', 5, 'mcq', 2), type: 'mcq', question: 'What is lexical scope?', options: ['Dynamic scope', 'Scope at definition time', 'Global scope', 'No scope'], correctAnswer: 1 },
      { id: qid('js', 'inter', 5, 'mcq', 3), type: 'mcq', question: 'What is IIFE?', options: ['Immediately Invoked Function', 'Internal Interface', 'Iterative Function', 'Inherited Function'], correctAnswer: 0 },
      { id: qid('js', 'inter', 5, 'mcq', 4), type: 'mcq', question: 'What is hoisting?', options: ['Moving declarations to top', 'Function calling', 'Variable assignment', 'Code execution'], correctAnswer: 0 },
      { id: qid('js', 'inter', 5, 'short', 1), type: 'short', question: 'What is the temporal dead zone?', correctAnswer: 'let/const before declaration', acceptableAnswers: ['TDZ', 'before let const'] },
      { id: qid('js', 'inter', 5, 'short', 2), type: 'short', question: 'What scope does var have?', correctAnswer: 'function', acceptableAnswers: ['function scope'] },
      { id: qid('js', 'inter', 5, 'short', 3), type: 'short', question: 'What scope does let have?', correctAnswer: 'block', acceptableAnswers: ['block scope'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('js', 'inter', 6, 'mcq', 1), type: 'mcq', question: 'What is ES6 module export?', options: ['module.export', 'export', 'exports', 'define'], correctAnswer: 1 },
      { id: qid('js', 'inter', 6, 'mcq', 2), type: 'mcq', question: 'What imports default export?', options: ['import { x }', 'import x', 'require(x)', 'include x'], correctAnswer: 1 },
      { id: qid('js', 'inter', 6, 'mcq', 3), type: 'mcq', question: 'What imports named export?', options: ['import x', 'import { x }', 'import * as x', 'require(x)'], correctAnswer: 1 },
      { id: qid('js', 'inter', 6, 'mcq', 4), type: 'mcq', question: 'What is CommonJS syntax?', options: ['import/export', 'require/module.exports', 'define/require', 'include/export'], correctAnswer: 1 },
      { id: qid('js', 'inter', 6, 'short', 1), type: 'short', question: 'What imports everything as object?', correctAnswer: 'import * as', acceptableAnswers: ['* as', 'star as'] },
      { id: qid('js', 'inter', 6, 'short', 2), type: 'short', question: 'What keyword exports default?', correctAnswer: 'export default', acceptableAnswers: ['default export'] },
      { id: qid('js', 'inter', 6, 'short', 3), type: 'short', question: 'What renames import?', correctAnswer: 'as', acceptableAnswers: ['as keyword', 'import as'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('js', 'inter', 7, 'mcq', 1), type: 'mcq', question: 'What handles errors in try block?', options: ['finally', 'catch', 'error', 'handle'], correctAnswer: 1 },
      { id: qid('js', 'inter', 7, 'mcq', 2), type: 'mcq', question: 'What throws custom error?', options: ['error()', 'throw', 'raise', 'exception'], correctAnswer: 1 },
      { id: qid('js', 'inter', 7, 'mcq', 3), type: 'mcq', question: 'What creates custom error class?', options: ['extends Error', 'implements Error', 'Error.create', 'new Error'], correctAnswer: 0 },
      { id: qid('js', 'inter', 7, 'mcq', 4), type: 'mcq', question: 'What always runs after try?', options: ['catch', 'finally', 'end', 'always'], correctAnswer: 1 },
      { id: qid('js', 'inter', 7, 'short', 1), type: 'short', question: 'What property has error message?', correctAnswer: 'message', acceptableAnswers: ['error.message'] },
      { id: qid('js', 'inter', 7, 'short', 2), type: 'short', question: 'What property has error stack trace?', correctAnswer: 'stack', acceptableAnswers: ['error.stack'] },
      { id: qid('js', 'inter', 7, 'short', 3), type: 'short', question: 'What creates new Error?', correctAnswer: 'new Error()', acceptableAnswers: ['new Error', 'Error()'] },
    ]
  }
];

const jsAdvancedQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('js', 'adv', 1, 'mcq', 1), type: 'mcq', question: 'What is the event loop?', options: ['Loop statement', 'Async execution model', 'Event handler', 'Timer'], correctAnswer: 1 },
      { id: qid('js', 'adv', 1, 'mcq', 2), type: 'mcq', question: 'What is the call stack?', options: ['Function queue', 'Execution context stack', 'Event queue', 'Memory heap'], correctAnswer: 1 },
      { id: qid('js', 'adv', 1, 'mcq', 3), type: 'mcq', question: 'What is microtask queue for?', options: ['setTimeout', 'Promises', 'Events', 'I/O'], correctAnswer: 1 },
      { id: qid('js', 'adv', 1, 'mcq', 4), type: 'mcq', question: 'What executes first?', options: ['setTimeout(fn, 0)', 'Promise.resolve().then()', 'Same time', 'Depends'], correctAnswer: 1 },
      { id: qid('js', 'adv', 1, 'short', 1), type: 'short', question: 'What queue has setTimeout?', correctAnswer: 'macrotask', acceptableAnswers: ['task queue', 'callback queue'] },
      { id: qid('js', 'adv', 1, 'short', 2), type: 'short', question: 'Is JavaScript single or multi-threaded?', correctAnswer: 'single', acceptableAnswers: ['single-threaded', 'single threaded'] },
      { id: qid('js', 'adv', 1, 'short', 3), type: 'short', question: 'What API provides background threads?', correctAnswer: 'Web Workers', acceptableAnswers: ['workers', 'webworkers'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('js', 'adv', 2, 'mcq', 1), type: 'mcq', question: 'What is a Proxy?', options: ['Wrapper for objects', 'Network request', 'Data type', 'Function type'], correctAnswer: 0 },
      { id: qid('js', 'adv', 2, 'mcq', 2), type: 'mcq', question: 'What is Reflect API for?', options: ['Mirrors', 'Object operations', 'DOM manipulation', 'Async code'], correctAnswer: 1 },
      { id: qid('js', 'adv', 2, 'mcq', 3), type: 'mcq', question: 'What trap intercepts property get?', options: ['set', 'get', 'has', 'read'], correctAnswer: 1 },
      { id: qid('js', 'adv', 2, 'mcq', 4), type: 'mcq', question: 'What is a Symbol?', options: ['Unique identifier', 'Operator', 'String type', 'Number type'], correctAnswer: 0 },
      { id: qid('js', 'adv', 2, 'short', 1), type: 'short', question: 'What creates unique symbol?', correctAnswer: 'Symbol()', acceptableAnswers: ['Symbol', 'new Symbol'] },
      { id: qid('js', 'adv', 2, 'short', 2), type: 'short', question: 'What symbol makes object iterable?', correctAnswer: 'Symbol.iterator', acceptableAnswers: ['iterator symbol'] },
      { id: qid('js', 'adv', 2, 'short', 3), type: 'short', question: 'What creates Proxy?', correctAnswer: 'new Proxy()', acceptableAnswers: ['Proxy constructor', 'new Proxy'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('js', 'adv', 3, 'mcq', 1), type: 'mcq', question: 'What is a generator function?', options: ['Normal function', 'Function that can pause', 'Async function', 'Arrow function'], correctAnswer: 1 },
      { id: qid('js', 'adv', 3, 'mcq', 2), type: 'mcq', question: 'What syntax defines generator?', options: ['function*', 'generator function', 'async function', 'yield function'], correctAnswer: 0 },
      { id: qid('js', 'adv', 3, 'mcq', 3), type: 'mcq', question: 'What keyword pauses generator?', options: ['pause', 'wait', 'yield', 'stop'], correctAnswer: 2 },
      { id: qid('js', 'adv', 3, 'mcq', 4), type: 'mcq', question: 'What method resumes generator?', options: ['resume()', 'continue()', 'next()', 'run()'], correctAnswer: 2 },
      { id: qid('js', 'adv', 3, 'short', 1), type: 'short', question: 'What does next() return?', correctAnswer: '{value, done}', acceptableAnswers: ['object with value and done', 'iterator result'] },
      { id: qid('js', 'adv', 3, 'short', 2), type: 'short', question: 'What iterates async values?', correctAnswer: 'for await...of', acceptableAnswers: ['for await of', 'async iterator'] },
      { id: qid('js', 'adv', 3, 'short', 3), type: 'short', question: 'What defines async generator?', correctAnswer: 'async function*', acceptableAnswers: ['async generator', 'async function *'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('js', 'adv', 4, 'mcq', 1), type: 'mcq', question: 'What is WeakMap?', options: ['Map with weak references', 'Small map', 'Immutable map', 'Fast map'], correctAnswer: 0 },
      { id: qid('js', 'adv', 4, 'mcq', 2), type: 'mcq', question: 'What keys can WeakMap have?', options: ['Any type', 'Only objects', 'Only strings', 'Only numbers'], correctAnswer: 1 },
      { id: qid('js', 'adv', 4, 'mcq', 3), type: 'mcq', question: 'Is WeakMap iterable?', options: ['Yes', 'No', 'Sometimes', 'Depends'], correctAnswer: 1 },
      { id: qid('js', 'adv', 4, 'mcq', 4), type: 'mcq', question: 'What is WeakSet used for?', options: ['Number storage', 'Tracking objects', 'String storage', 'Caching'], correctAnswer: 1 },
      { id: qid('js', 'adv', 4, 'short', 1), type: 'short', question: 'Why use WeakMap for private data?', correctAnswer: 'garbage collection', acceptableAnswers: ['memory management', 'gc', 'weak reference'] },
      { id: qid('js', 'adv', 4, 'short', 2), type: 'short', question: 'What difference between Map and WeakMap?', correctAnswer: 'key references', acceptableAnswers: ['weak vs strong', 'garbage collection'] },
      { id: qid('js', 'adv', 4, 'short', 3), type: 'short', question: 'Does WeakMap have size property?', correctAnswer: 'no', acceptableAnswers: ['false', 'nope'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('js', 'adv', 5, 'mcq', 1), type: 'mcq', question: 'What is prototype chain?', options: ['Linked list', 'Inheritance mechanism', 'Array type', 'Function chain'], correctAnswer: 1 },
      { id: qid('js', 'adv', 5, 'mcq', 2), type: 'mcq', question: 'What is __proto__?', options: ['Constructor', 'Prototype link', 'Method', 'Property'], correctAnswer: 1 },
      { id: qid('js', 'adv', 5, 'mcq', 3), type: 'mcq', question: 'What creates object without prototype?', options: ['new Object()', 'Object.create(null)', '{}', 'Object()'], correctAnswer: 1 },
      { id: qid('js', 'adv', 5, 'mcq', 4), type: 'mcq', question: 'What checks own property?', options: ['has()', 'hasOwnProperty()', 'includes()', 'contains()'], correctAnswer: 1 },
      { id: qid('js', 'adv', 5, 'short', 1), type: 'short', question: 'What is Function.prototype.bind()?', correctAnswer: 'sets this', acceptableAnswers: ['binds context', 'creates bound function'] },
      { id: qid('js', 'adv', 5, 'short', 2), type: 'short', question: 'What is Object.getPrototypeOf()?', correctAnswer: 'gets prototype', acceptableAnswers: ['returns prototype', 'prototype getter'] },
      { id: qid('js', 'adv', 5, 'short', 3), type: 'short', question: 'What sets prototype?', correctAnswer: 'Object.setPrototypeOf', acceptableAnswers: ['setPrototypeOf', 'Object.setPrototypeOf()'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('js', 'adv', 6, 'mcq', 1), type: 'mcq', question: 'What is TypeScript?', options: ['JavaScript library', 'Typed JavaScript superset', 'Framework', 'Database'], correctAnswer: 1 },
      { id: qid('js', 'adv', 6, 'mcq', 2), type: 'mcq', question: 'What is JSDoc?', options: ['Library', 'Documentation format', 'Framework', 'Build tool'], correctAnswer: 1 },
      { id: qid('js', 'adv', 6, 'mcq', 3), type: 'mcq', question: 'What is tree shaking?', options: ['Code splitting', 'Dead code elimination', 'Minification', 'Bundling'], correctAnswer: 1 },
      { id: qid('js', 'adv', 6, 'mcq', 4), type: 'mcq', question: 'What is code splitting?', options: ['Breaking code into chunks', 'Formatting', 'Linting', 'Testing'], correctAnswer: 0 },
      { id: qid('js', 'adv', 6, 'short', 1), type: 'short', question: 'What enables tree shaking?', correctAnswer: 'ES modules', acceptableAnswers: ['ESM', 'ES6 modules', 'static imports'] },
      { id: qid('js', 'adv', 6, 'short', 2), type: 'short', question: 'What is source map?', correctAnswer: 'debug mapping', acceptableAnswers: ['maps minified to source', 'debugging tool'] },
      { id: qid('js', 'adv', 6, 'short', 3), type: 'short', question: 'What is polyfill?', correctAnswer: 'feature implementation', acceptableAnswers: ['adds missing features', 'compatibility code'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('js', 'adv', 7, 'mcq', 1), type: 'mcq', question: 'What is memory leak?', options: ['Fast memory', 'Unreleased memory', 'Cache', 'Buffer'], correctAnswer: 1 },
      { id: qid('js', 'adv', 7, 'mcq', 2), type: 'mcq', question: 'What causes memory leaks?', options: ['Variables', 'Forgotten timers', 'Functions', 'All can'], correctAnswer: 3 },
      { id: qid('js', 'adv', 7, 'mcq', 3), type: 'mcq', question: 'What tool profiles memory?', options: ['Console', 'DevTools Memory', 'Network tab', 'Elements'], correctAnswer: 1 },
      { id: qid('js', 'adv', 7, 'mcq', 4), type: 'mcq', question: 'What is garbage collection?', options: ['Code cleanup', 'Automatic memory release', 'File deletion', 'Cache clearing'], correctAnswer: 1 },
      { id: qid('js', 'adv', 7, 'short', 1), type: 'short', question: 'How prevent listener leaks?', correctAnswer: 'removeEventListener', acceptableAnswers: ['remove listener', 'cleanup'] },
      { id: qid('js', 'adv', 7, 'short', 2), type: 'short', question: 'What clears interval?', correctAnswer: 'clearInterval', acceptableAnswers: ['clearInterval()'] },
      { id: qid('js', 'adv', 7, 'short', 3), type: 'short', question: 'What shows memory heap?', correctAnswer: 'heap snapshot', acceptableAnswers: ['memory snapshot', 'devtools heap'] },
    ]
  }
];

// C++ Questions
const cppBasicQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('cpp', 'basic', 1, 'mcq', 1), type: 'mcq', question: 'What is C++?', options: ['Scripting language', 'Compiled language', 'Markup language', 'Database'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 1, 'mcq', 2), type: 'mcq', question: 'Who created C++?', options: ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 1, 'mcq', 3), type: 'mcq', question: 'What is the C++ file extension?', options: ['.c', '.cpp', '.cc', 'Both B and C'], correctAnswer: 3 },
      { id: qid('cpp', 'basic', 1, 'mcq', 4), type: 'mcq', question: 'What starts every C++ program?', options: ['start()', 'begin()', 'main()', 'run()'], correctAnswer: 2 },
      { id: qid('cpp', 'basic', 1, 'short', 1), type: 'short', question: 'What header is needed for cout?', correctAnswer: 'iostream', acceptableAnswers: ['<iostream>'] },
      { id: qid('cpp', 'basic', 1, 'short', 2), type: 'short', question: 'What namespace has cout?', correctAnswer: 'std', acceptableAnswers: ['std namespace'] },
      { id: qid('cpp', 'basic', 1, 'short', 3), type: 'short', question: 'What outputs text to console?', correctAnswer: 'cout', acceptableAnswers: ['std::cout'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('cpp', 'basic', 2, 'mcq', 1), type: 'mcq', question: 'What is int data type?', options: ['Decimal', 'Integer', 'Character', 'Boolean'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 2, 'mcq', 2), type: 'mcq', question: 'What is double used for?', options: ['Two values', 'Floating point', 'Text', 'Boolean'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 2, 'mcq', 3), type: 'mcq', question: 'What is sizeof operator?', options: ['Array size', 'Memory size', 'String length', 'File size'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 2, 'mcq', 4), type: 'mcq', question: 'What is a const variable?', options: ['Changeable', 'Unchangeable', 'Global', 'Local'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 2, 'short', 1), type: 'short', question: 'What type stores single character?', correctAnswer: 'char', acceptableAnswers: ['char type'] },
      { id: qid('cpp', 'basic', 2, 'short', 2), type: 'short', question: 'What type stores true/false?', correctAnswer: 'bool', acceptableAnswers: ['boolean', 'bool type'] },
      { id: qid('cpp', 'basic', 2, 'short', 3), type: 'short', question: 'What converts int to double?', correctAnswer: 'casting', acceptableAnswers: ['type cast', 'static_cast'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('cpp', 'basic', 3, 'mcq', 1), type: 'mcq', question: 'How to declare array?', options: ['int arr[]', 'array int arr', 'int[] arr', 'arr int[]'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 3, 'mcq', 2), type: 'mcq', question: 'What is array index start?', options: ['1', '0', '-1', 'any'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 3, 'mcq', 3), type: 'mcq', question: 'What is vector?', options: ['Static array', 'Dynamic array', 'Linked list', 'Tree'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 3, 'mcq', 4), type: 'mcq', question: 'What header has vector?', options: ['<array>', '<vector>', '<list>', '<container>'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 3, 'short', 1), type: 'short', question: 'What adds to vector end?', correctAnswer: 'push_back', acceptableAnswers: ['push_back()'] },
      { id: qid('cpp', 'basic', 3, 'short', 2), type: 'short', question: 'What gives vector size?', correctAnswer: 'size', acceptableAnswers: ['size()', 'size method'] },
      { id: qid('cpp', 'basic', 3, 'short', 3), type: 'short', question: 'What removes last element?', correctAnswer: 'pop_back', acceptableAnswers: ['pop_back()'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('cpp', 'basic', 4, 'mcq', 1), type: 'mcq', question: 'What starts if statement?', options: ['if()', 'when()', 'check()', 'condition()'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 4, 'mcq', 2), type: 'mcq', question: 'What is else if syntax?', options: ['elseif', 'elsif', 'else if', 'elif'], correctAnswer: 2 },
      { id: qid('cpp', 'basic', 4, 'mcq', 3), type: 'mcq', question: 'What is && operator?', options: ['OR', 'AND', 'NOT', 'XOR'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 4, 'mcq', 4), type: 'mcq', question: 'What is ternary operator?', options: ['?:', 'if?', ':?', '??'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 4, 'short', 1), type: 'short', question: 'What is || operator?', correctAnswer: 'OR', acceptableAnswers: ['logical or', 'or operator'] },
      { id: qid('cpp', 'basic', 4, 'short', 2), type: 'short', question: 'What negates boolean?', correctAnswer: '!', acceptableAnswers: ['not', 'exclamation'] },
      { id: qid('cpp', 'basic', 4, 'short', 3), type: 'short', question: 'What handles multiple cases?', correctAnswer: 'switch', acceptableAnswers: ['switch statement'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('cpp', 'basic', 5, 'mcq', 1), type: 'mcq', question: 'What is for loop syntax?', options: ['for(init;cond;inc)', 'for each', 'for in', 'for(cond)'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 5, 'mcq', 2), type: 'mcq', question: 'What is range-based for?', options: ['for(auto x : arr)', 'for each x in arr', 'for x in arr', 'foreach(arr)'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 5, 'mcq', 3), type: 'mcq', question: 'What exits loop?', options: ['stop', 'exit', 'break', 'end'], correctAnswer: 2 },
      { id: qid('cpp', 'basic', 5, 'mcq', 4), type: 'mcq', question: 'What skips iteration?', options: ['skip', 'next', 'continue', 'pass'], correctAnswer: 2 },
      { id: qid('cpp', 'basic', 5, 'short', 1), type: 'short', question: 'What loop checks condition first?', correctAnswer: 'while', acceptableAnswers: ['while loop'] },
      { id: qid('cpp', 'basic', 5, 'short', 2), type: 'short', question: 'What loop runs at least once?', correctAnswer: 'do-while', acceptableAnswers: ['do while'] },
      { id: qid('cpp', 'basic', 5, 'short', 3), type: 'short', question: 'What is infinite loop condition?', correctAnswer: 'true', acceptableAnswers: ['1', 'while(1)', 'while(true)'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('cpp', 'basic', 6, 'mcq', 1), type: 'mcq', question: 'What is a pointer?', options: ['Variable value', 'Memory address', 'Function', 'Class'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 6, 'mcq', 2), type: 'mcq', question: 'What declares pointer?', options: ['int* p', 'int &p', 'int p*', 'pointer int p'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 6, 'mcq', 3), type: 'mcq', question: 'What is & operator?', options: ['AND', 'Address-of', 'Reference', 'Both B and C'], correctAnswer: 3 },
      { id: qid('cpp', 'basic', 6, 'mcq', 4), type: 'mcq', question: 'What is * operator on pointer?', options: ['Multiply', 'Dereference', 'Declare', 'Address'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 6, 'short', 1), type: 'short', question: 'What is null pointer?', correctAnswer: 'nullptr', acceptableAnswers: ['NULL', 'null'] },
      { id: qid('cpp', 'basic', 6, 'short', 2), type: 'short', question: 'What is reference variable?', correctAnswer: 'alias', acceptableAnswers: ['alias to variable', 'another name'] },
      { id: qid('cpp', 'basic', 6, 'short', 3), type: 'short', question: 'What allocates dynamic memory?', correctAnswer: 'new', acceptableAnswers: ['new operator'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('cpp', 'basic', 7, 'mcq', 1), type: 'mcq', question: 'How to define function?', options: ['def name()', 'function name()', 'type name()', 'name(): type'], correctAnswer: 2 },
      { id: qid('cpp', 'basic', 7, 'mcq', 2), type: 'mcq', question: 'What is function prototype?', options: ['Definition', 'Declaration', 'Call', 'Body'], correctAnswer: 1 },
      { id: qid('cpp', 'basic', 7, 'mcq', 3), type: 'mcq', question: 'What is pass by reference?', options: ['Copy value', 'Pass address', 'Pass pointer', 'Both B and C'], correctAnswer: 3 },
      { id: qid('cpp', 'basic', 7, 'mcq', 4), type: 'mcq', question: 'What is function overloading?', options: ['Same name different params', 'Multiple returns', 'Nested functions', 'Recursion'], correctAnswer: 0 },
      { id: qid('cpp', 'basic', 7, 'short', 1), type: 'short', question: 'What returns nothing?', correctAnswer: 'void', acceptableAnswers: ['void type'] },
      { id: qid('cpp', 'basic', 7, 'short', 2), type: 'short', question: 'What is default parameter?', correctAnswer: 'predefined value', acceptableAnswers: ['default value', 'optional parameter'] },
      { id: qid('cpp', 'basic', 7, 'short', 3), type: 'short', question: 'What is inline function?', correctAnswer: 'expanded at call', acceptableAnswers: ['inline expansion', 'no function call'] },
    ]
  }
];

const cppIntermediateQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('cpp', 'inter', 1, 'mcq', 1), type: 'mcq', question: 'What keyword defines class?', options: ['class', 'struct', 'object', 'type'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 1, 'mcq', 2), type: 'mcq', question: 'What is default access in class?', options: ['public', 'private', 'protected', 'friend'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 1, 'mcq', 3), type: 'mcq', question: 'What is constructor?', options: ['Destructor', 'Initializer method', 'Static method', 'Virtual method'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 1, 'mcq', 4), type: 'mcq', question: 'What is destructor prefix?', options: ['!', '@', '~', '#'], correctAnswer: 2 },
      { id: qid('cpp', 'inter', 1, 'short', 1), type: 'short', question: 'What pointer is passed to member functions?', correctAnswer: 'this', acceptableAnswers: ['this pointer'] },
      { id: qid('cpp', 'inter', 1, 'short', 2), type: 'short', question: 'What keyword makes member accessible outside?', correctAnswer: 'public', acceptableAnswers: ['public keyword'] },
      { id: qid('cpp', 'inter', 1, 'short', 3), type: 'short', question: 'What is getter method?', correctAnswer: 'accessor', acceptableAnswers: ['accessor method', 'returns private member'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('cpp', 'inter', 2, 'mcq', 1), type: 'mcq', question: 'What keyword inherits class?', options: ['extends', 'inherits', ':', 'implements'], correctAnswer: 2 },
      { id: qid('cpp', 'inter', 2, 'mcq', 2), type: 'mcq', question: 'What is protected access?', options: ['Public in derived', 'Private everywhere', 'Accessible in derived', 'No access'], correctAnswer: 2 },
      { id: qid('cpp', 'inter', 2, 'mcq', 3), type: 'mcq', question: 'What is virtual function?', options: ['Static function', 'Overridable function', 'Inline function', 'Friend function'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 2, 'mcq', 4), type: 'mcq', question: 'What is pure virtual function?', options: ['= 0', '= null', '= abstract', '= virtual'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 2, 'short', 1), type: 'short', question: 'What class has pure virtual function?', correctAnswer: 'abstract', acceptableAnswers: ['abstract class'] },
      { id: qid('cpp', 'inter', 2, 'short', 2), type: 'short', question: 'What enables runtime polymorphism?', correctAnswer: 'virtual', acceptableAnswers: ['virtual functions', 'virtual keyword'] },
      { id: qid('cpp', 'inter', 2, 'short', 3), type: 'short', question: 'What keyword prevents override?', correctAnswer: 'final', acceptableAnswers: ['final keyword'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('cpp', 'inter', 3, 'mcq', 1), type: 'mcq', question: 'What is operator overloading?', options: ['New operators', 'Custom operator behavior', 'Delete operators', 'Rename operators'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 3, 'mcq', 2), type: 'mcq', question: 'What keyword overloads operator?', options: ['overload', 'operator', 'override', 'op'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 3, 'mcq', 3), type: 'mcq', question: 'Which operator cannot be overloaded?', options: ['+', '-', '::', '*'], correctAnswer: 2 },
      { id: qid('cpp', 'inter', 3, 'mcq', 4), type: 'mcq', question: 'What is friend function?', options: ['Member function', 'Non-member with access', 'Static function', 'Virtual function'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 3, 'short', 1), type: 'short', question: 'What overloads [] operator?', correctAnswer: 'operator[]', acceptableAnswers: ['subscript operator'] },
      { id: qid('cpp', 'inter', 3, 'short', 2), type: 'short', question: 'What overloads << for output?', correctAnswer: 'operator<<', acceptableAnswers: ['insertion operator'] },
      { id: qid('cpp', 'inter', 3, 'short', 3), type: 'short', question: 'What makes function friend?', correctAnswer: 'friend keyword', acceptableAnswers: ['friend', 'friend declaration'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('cpp', 'inter', 4, 'mcq', 1), type: 'mcq', question: 'What is template?', options: ['Class type', 'Generic programming', 'Macro', 'Function pointer'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 4, 'mcq', 2), type: 'mcq', question: 'What syntax declares template?', options: ['template<typename T>', 'generic<T>', '<T> template', 'type<T>'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 4, 'mcq', 3), type: 'mcq', question: 'What is template specialization?', options: ['Generic version', 'Specific type version', 'Template removal', 'Template copy'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 4, 'mcq', 4), type: 'mcq', question: 'What is class template?', options: ['Template class', 'Generic class', 'Abstract class', 'Both A and B'], correctAnswer: 3 },
      { id: qid('cpp', 'inter', 4, 'short', 1), type: 'short', question: 'What keyword can replace typename?', correctAnswer: 'class', acceptableAnswers: ['class keyword'] },
      { id: qid('cpp', 'inter', 4, 'short', 2), type: 'short', question: 'What is variadic template?', correctAnswer: 'variable arguments', acceptableAnswers: ['multiple template params', '...'] },
      { id: qid('cpp', 'inter', 4, 'short', 3), type: 'short', question: 'When is template instantiated?', correctAnswer: 'compile time', acceptableAnswers: ['compilation', 'at compile time'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('cpp', 'inter', 5, 'mcq', 1), type: 'mcq', question: 'What is STL?', options: ['Standard Type Library', 'Standard Template Library', 'System Template Library', 'Static Type Library'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 5, 'mcq', 2), type: 'mcq', question: 'What is vector in STL?', options: ['Static array', 'Dynamic array', 'Linked list', 'Tree'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 5, 'mcq', 3), type: 'mcq', question: 'What is map in STL?', options: ['Array', 'Key-value container', 'Queue', 'Stack'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 5, 'mcq', 4), type: 'mcq', question: 'What is iterator?', options: ['Counter', 'Pointer-like object', 'Index', 'Array'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 5, 'short', 1), type: 'short', question: 'What container is LIFO?', correctAnswer: 'stack', acceptableAnswers: ['std::stack'] },
      { id: qid('cpp', 'inter', 5, 'short', 2), type: 'short', question: 'What container is FIFO?', correctAnswer: 'queue', acceptableAnswers: ['std::queue'] },
      { id: qid('cpp', 'inter', 5, 'short', 3), type: 'short', question: 'What stores unique elements?', correctAnswer: 'set', acceptableAnswers: ['std::set'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('cpp', 'inter', 6, 'mcq', 1), type: 'mcq', question: 'What handles exceptions?', options: ['try-catch', 'if-else', 'switch', 'handle'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 6, 'mcq', 2), type: 'mcq', question: 'What throws exception?', options: ['error', 'throw', 'raise', 'exception'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 6, 'mcq', 3), type: 'mcq', question: 'What is catch(...)?', options: ['Catch all', 'Catch none', 'Catch error', 'Invalid'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 6, 'mcq', 4), type: 'mcq', question: 'What is noexcept?', options: ['No exceptions thrown', 'No exception handling', 'Exception required', 'Catch all'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 6, 'short', 1), type: 'short', question: 'What header has standard exceptions?', correctAnswer: 'stdexcept', acceptableAnswers: ['<stdexcept>'] },
      { id: qid('cpp', 'inter', 6, 'short', 2), type: 'short', question: 'What is base exception class?', correctAnswer: 'exception', acceptableAnswers: ['std::exception'] },
      { id: qid('cpp', 'inter', 6, 'short', 3), type: 'short', question: 'What rethrows current exception?', correctAnswer: 'throw', acceptableAnswers: ['throw;', 'throw without argument'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('cpp', 'inter', 7, 'mcq', 1), type: 'mcq', question: 'What is fstream?', options: ['File stream', 'Function stream', 'Float stream', 'Fast stream'], correctAnswer: 0 },
      { id: qid('cpp', 'inter', 7, 'mcq', 2), type: 'mcq', question: 'What opens file for reading?', options: ['ofstream', 'ifstream', 'fstream', 'iostream'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 7, 'mcq', 3), type: 'mcq', question: 'What opens file for writing?', options: ['ifstream', 'ofstream', 'rstream', 'wstream'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 7, 'mcq', 4), type: 'mcq', question: 'What checks if file is open?', options: ['opened()', 'is_open()', 'check()', 'status()'], correctAnswer: 1 },
      { id: qid('cpp', 'inter', 7, 'short', 1), type: 'short', question: 'What closes file?', correctAnswer: 'close', acceptableAnswers: ['close()', 'close method'] },
      { id: qid('cpp', 'inter', 7, 'short', 2), type: 'short', question: 'What reads line from file?', correctAnswer: 'getline', acceptableAnswers: ['getline()', 'std::getline'] },
      { id: qid('cpp', 'inter', 7, 'short', 3), type: 'short', question: 'What mode appends to file?', correctAnswer: 'ios::app', acceptableAnswers: ['app', 'append mode'] },
    ]
  }
];

const cppAdvancedQuestions: LevelData[] = [
  {
    level: 1,
    questions: [
      { id: qid('cpp', 'adv', 1, 'mcq', 1), type: 'mcq', question: 'What is smart pointer?', options: ['Fast pointer', 'Auto-managed pointer', 'Array pointer', 'Function pointer'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 1, 'mcq', 2), type: 'mcq', question: 'What is unique_ptr?', options: ['Shared ownership', 'Exclusive ownership', 'Weak reference', 'Raw pointer'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 1, 'mcq', 3), type: 'mcq', question: 'What is shared_ptr?', options: ['Single owner', 'Multiple owners', 'No owner', 'Weak owner'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 1, 'mcq', 4), type: 'mcq', question: 'What breaks circular references?', options: ['unique_ptr', 'shared_ptr', 'weak_ptr', 'raw pointer'], correctAnswer: 2 },
      { id: qid('cpp', 'adv', 1, 'short', 1), type: 'short', question: 'What header has smart pointers?', correctAnswer: 'memory', acceptableAnswers: ['<memory>'] },
      { id: qid('cpp', 'adv', 1, 'short', 2), type: 'short', question: 'What creates shared_ptr?', correctAnswer: 'make_shared', acceptableAnswers: ['std::make_shared'] },
      { id: qid('cpp', 'adv', 1, 'short', 3), type: 'short', question: 'What creates unique_ptr?', correctAnswer: 'make_unique', acceptableAnswers: ['std::make_unique'] },
    ]
  },
  {
    level: 2,
    questions: [
      { id: qid('cpp', 'adv', 2, 'mcq', 1), type: 'mcq', question: 'What is move semantics?', options: ['Copy data', 'Transfer ownership', 'Delete data', 'Share data'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 2, 'mcq', 2), type: 'mcq', question: 'What is rvalue reference?', options: ['&', '&&', '***', '&&&'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 2, 'mcq', 3), type: 'mcq', question: 'What enables move?', options: ['std::copy', 'std::move', 'std::transfer', 'std::send'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 2, 'mcq', 4), type: 'mcq', question: 'What is perfect forwarding?', options: ['Fast copy', 'Preserve value category', 'Type conversion', 'Error handling'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 2, 'short', 1), type: 'short', question: 'What is move constructor signature?', correctAnswer: 'T(T&&)', acceptableAnswers: ['Class(Class&&)', 'rvalue reference param'] },
      { id: qid('cpp', 'adv', 2, 'short', 2), type: 'short', question: 'What function enables forwarding?', correctAnswer: 'std::forward', acceptableAnswers: ['forward'] },
      { id: qid('cpp', 'adv', 2, 'short', 3), type: 'short', question: 'What is lvalue?', correctAnswer: 'named object', acceptableAnswers: ['has address', 'can be assigned to'] },
    ]
  },
  {
    level: 3,
    questions: [
      { id: qid('cpp', 'adv', 3, 'mcq', 1), type: 'mcq', question: 'What is lambda expression?', options: ['Named function', 'Anonymous function', 'Macro', 'Template'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 3, 'mcq', 2), type: 'mcq', question: 'What captures all by value?', options: ['[&]', '[=]', '[*]', '[this]'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 3, 'mcq', 3), type: 'mcq', question: 'What captures all by reference?', options: ['[=]', '[&]', '[*]', '[ref]'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 3, 'mcq', 4), type: 'mcq', question: 'What is std::function?', options: ['Raw function', 'Function wrapper', 'Lambda only', 'Method pointer'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 3, 'short', 1), type: 'short', question: 'What is lambda capture list?', correctAnswer: '[]', acceptableAnswers: ['square brackets', 'capture clause'] },
      { id: qid('cpp', 'adv', 3, 'short', 2), type: 'short', question: 'What makes lambda mutable?', correctAnswer: 'mutable', acceptableAnswers: ['mutable keyword'] },
      { id: qid('cpp', 'adv', 3, 'short', 3), type: 'short', question: 'What is generic lambda?', correctAnswer: 'auto parameter', acceptableAnswers: ['auto params', 'template lambda'] },
    ]
  },
  {
    level: 4,
    questions: [
      { id: qid('cpp', 'adv', 4, 'mcq', 1), type: 'mcq', question: 'What is std::thread?', options: ['Process', 'Thread class', 'Task', 'Coroutine'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 4, 'mcq', 2), type: 'mcq', question: 'What waits for thread?', options: ['wait()', 'join()', 'sync()', 'stop()'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 4, 'mcq', 3), type: 'mcq', question: 'What is mutex?', options: ['Thread type', 'Lock mechanism', 'Queue', 'Counter'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 4, 'mcq', 4), type: 'mcq', question: 'What is lock_guard?', options: ['Manual lock', 'RAII lock wrapper', 'Condition variable', 'Atomic type'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 4, 'short', 1), type: 'short', question: 'What header has threads?', correctAnswer: 'thread', acceptableAnswers: ['<thread>'] },
      { id: qid('cpp', 'adv', 4, 'short', 2), type: 'short', question: 'What detaches thread?', correctAnswer: 'detach', acceptableAnswers: ['detach()'] },
      { id: qid('cpp', 'adv', 4, 'short', 3), type: 'short', question: 'What is atomic operation?', correctAnswer: 'indivisible operation', acceptableAnswers: ['thread-safe', 'no interrupt'] },
    ]
  },
  {
    level: 5,
    questions: [
      { id: qid('cpp', 'adv', 5, 'mcq', 1), type: 'mcq', question: 'What is RAII?', options: ['Resource Acquisition Is Initialization', 'Runtime Allocation', 'Reference Assignment', 'Random Access'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 5, 'mcq', 2), type: 'mcq', question: 'What is Rule of Three?', options: ['3 constructors', 'destructor, copy constructor, copy assignment', '3 methods', '3 members'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 5, 'mcq', 3), type: 'mcq', question: 'What is Rule of Five?', options: ['Rule of Three + move operations', '5 constructors', '5 methods', '5 operators'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 5, 'mcq', 4), type: 'mcq', question: 'What is copy elision?', options: ['Copy optimization', 'Copy prevention', 'Copy error', 'Copy counter'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 5, 'short', 1), type: 'short', question: 'What is Rule of Zero?', correctAnswer: 'no custom destructor/copy/move', acceptableAnswers: ['use default operations', 'no special members'] },
      { id: qid('cpp', 'adv', 5, 'short', 2), type: 'short', question: 'What keyword uses default implementation?', correctAnswer: '= default', acceptableAnswers: ['default'] },
      { id: qid('cpp', 'adv', 5, 'short', 3), type: 'short', question: 'What keyword deletes function?', correctAnswer: '= delete', acceptableAnswers: ['delete'] },
    ]
  },
  {
    level: 6,
    questions: [
      { id: qid('cpp', 'adv', 6, 'mcq', 1), type: 'mcq', question: 'What is constexpr?', options: ['Constant expression', 'Constructor expression', 'Conditional expression', 'Complex expression'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 6, 'mcq', 2), type: 'mcq', question: 'When is constexpr evaluated?', options: ['Runtime', 'Compile time', 'Link time', 'Load time'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 6, 'mcq', 3), type: 'mcq', question: 'What is static_assert?', options: ['Runtime check', 'Compile-time check', 'Link check', 'Debug check'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 6, 'mcq', 4), type: 'mcq', question: 'What is type_traits?', options: ['Type info at runtime', 'Type info at compile time', 'Type conversion', 'Type creation'], correctAnswer: 1 },
      { id: qid('cpp', 'adv', 6, 'short', 1), type: 'short', question: 'What is if constexpr?', correctAnswer: 'compile-time if', acceptableAnswers: ['constexpr if', 'static if'] },
      { id: qid('cpp', 'adv', 6, 'short', 2), type: 'short', question: 'What checks type at compile time?', correctAnswer: 'type_traits', acceptableAnswers: ['<type_traits>', 'std::is_same'] },
      { id: qid('cpp', 'adv', 6, 'short', 3), type: 'short', question: 'What is decltype?', correctAnswer: 'type deduction', acceptableAnswers: ['declares type', 'type inference'] },
    ]
  },
  {
    level: 7,
    questions: [
      { id: qid('cpp', 'adv', 7, 'mcq', 1), type: 'mcq', question: 'What is CRTP?', options: ['Curiously Recurring Template Pattern', 'Constant Reference Type Pattern', 'Class Reference Template', 'Compile Runtime Type'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 7, 'mcq', 2), type: 'mcq', question: 'What is SFINAE?', options: ['Substitution Failure Is Not An Error', 'Static Function In Abstract', 'Special Function Interface', 'Standard Function Implementation'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 7, 'mcq', 3), type: 'mcq', question: 'What enables SFINAE?', options: ['std::enable_if', 'std::is_same', 'std::conditional', 'All of above'], correctAnswer: 3 },
      { id: qid('cpp', 'adv', 7, 'mcq', 4), type: 'mcq', question: 'What is concepts (C++20)?', options: ['Type constraints', 'Design patterns', 'Memory concepts', 'Thread concepts'], correctAnswer: 0 },
      { id: qid('cpp', 'adv', 7, 'short', 1), type: 'short', question: 'What is tag dispatching?', correctAnswer: 'overload selection', acceptableAnswers: ['type-based dispatch', 'tag types'] },
      { id: qid('cpp', 'adv', 7, 'short', 2), type: 'short', question: 'What C++20 keyword declares concept?', correctAnswer: 'concept', acceptableAnswers: ['concept keyword'] },
      { id: qid('cpp', 'adv', 7, 'short', 3), type: 'short', question: 'What is requires clause?', correctAnswer: 'constraint specification', acceptableAnswers: ['concept constraint', 'requires expression'] },
    ]
  }
];

export const questionsData: Record<string, Record<string, LevelData[]>> = {
  python: {
    basic: pythonBasicQuestions,
    intermediate: pythonIntermediateQuestions,
    advanced: pythonAdvancedQuestions,
  },
  javascript: {
    basic: jsBasicQuestions,
    intermediate: jsIntermediateQuestions,
    advanced: jsAdvancedQuestions,
  },
  cpp: {
    basic: cppBasicQuestions,
    intermediate: cppIntermediateQuestions,
    advanced: cppAdvancedQuestions,
  },
};
