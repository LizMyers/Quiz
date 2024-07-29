

export default [
        {
          title: 'What is the virtual DOM?',
          options: [
            'A direct copy of the actual DOM',
            'A programming concept where a virtual representation of the UI is kept in memory',
            'A database for storing UI components',
            'A server-side representation of the DOM',
          ],
          correctAnswer: 'A programming concept where a virtual representation of the UI is kept in memory',
        },
        {
          title: 'Which method in React is used to change the state of a component?',
          options: ['changeState()', 'updateState()', 'setState()', 'modifyState()'],
          correctAnswer: 'setState()',
        },
        {
          title: 'What does JSX stand for?',
          options: [
            'JavaScript Syntax Extension',
            'JavaScript XML',
            'JavaScript and XAML',
            'JavaScript and XHTML',
          ],
          correctAnswer: 'JavaScript XML',
        },
        {
          title: 'Which hook is used to handle side effects in functional components?',
          options: ['useState', 'useReducer', 'useEffect', 'useContext'],
          correctAnswer: 'useEffect',
        },
        {
          title: 'What is the purpose of the `key` prop in React?',
          options: [
            'To provide a unique identifier for list items',
            'To set the initial state of a component',
            'To bind methods to the component',
            'To pass data to child components',
          ],
          correctAnswer: 'To provide a unique identifier for list items',
        },
        {
          title: 'Which method is used to pass props to a component in React?',
          options: ['sendProps()', 'passProps()', 'setProps()', 'By using JSX attributes'],
          correctAnswer: 'By using JSX attributes',
        },
        {
          title: 'What is the output of the following JavaScript expression: `[..."Hello"]`?',
          options: [
            "['Hello']",
            "['H', 'e', 'l', 'l', 'o']",
            "['H', 'ello']",
            "['H', 'e', 'll', 'o']",
          ],
          correctAnswer: "['H', 'e', 'l', 'l', 'o']",
        },
        {
          title: 'How do you write a function in JavaScript?',
          options: [
            'function = myFunction()',
            'function myFunction()',
            'function:myFunction()',
            'function => myFunction()',
          ],
          correctAnswer: 'function myFunction()',
        },
        {
          title: 'In React Native, which component is used to create a button?',
          options: ['Button', 'TouchableOpacity', 'Pressable', 'All of the above'],
          correctAnswer: 'All of the above',
        },
        {
          title: 'What is the purpose of the `useState` hook in React?',
          options: [
            'To manage side effects',
            'To create a stateful component',
            'To access context',
            'To handle events',
          ],
          correctAnswer: 'To create a stateful component',
        },
        {
          title: 'Which of the following is a feature of React Native?',
          options: [
            'Write once, run anywhere',
            'Write once, debug everywhere',
            'Write once, deploy everywhere',
            'Learn once, write anywhere',
          ],
          correctAnswer: 'Learn once, write anywhere',
        },
        {
          title: 'Which statement correctly imports the `useEffect` hook from React?',
          options: [
            "import { useEffect } from 'react';",
            "import useEffect from 'react';",
            "import { useEffect } from 'react-native';",
            "import { useEffect } from 'react/hooks';",
          ],
          correctAnswer: "import { useEffect } from 'react';",
        },
        {
          title: 'What does the term "hoisting" refer to in JavaScript?',
          options: [
            'Moving function declarations to the top of the scope',
            'Variable declarations and function declarations being moved to the top of their scope',
            'Running functions before their declarations',
            'Moving all code to the top of the file',
          ],
          correctAnswer:
            'Variable declarations and function declarations being moved to the top of their scope',
        },
        {
          title: 'What does the `useReducer` hook in React do?',
          options: [
            'Manages state',
            'Handles side effects',
            'Executes a reducer function to manage state',
            'Provides context to components',
          ],
          correctAnswer: 'Executes a reducer function to manage state',
        },
        {
          title: 'In JavaScript, what does `this` keyword refer to in a function?',
          options: [
            'The function itself',
            'The global object',
            'The object that the function is a method of',
            'The window object',
          ],
          correctAnswer: 'The object that the function is a method of',
        },
        {
          title: 'How do you create a new context in React?',
          options: [
            "React.createContext()",
            "React.createNewContext()",
            "React.makeContext()",
            "React.useContext()",
          ],
          correctAnswer: "React.createContext()",
        },
        {
          title: 'Which of the following is NOT a primitive data type in JavaScript?',
          options: ['String', 'Number', 'Boolean', 'Object'],
          correctAnswer: 'Object',
        },
        {
          title: 'What is the purpose of `propTypes` in React?',
          options: [
            'To enforce type checking on props',
            'To define default values for props',
            'To declare the state of a component',
            'To bind methods to the component',
          ],
          correctAnswer: 'To enforce type checking on props',
        },
        {
          title: 'What is the correct syntax for a ternary operator in JavaScript?',
          options: [
            'condition ? expr1 : expr2',
            'condition ? expr1 then expr2',
            'condition ? expr1 or expr2',
            'condition ? expr1 else expr2',
          ],
          correctAnswer: 'condition ? expr1 : expr2',
        },
        {
          title: 'What is React.memo used for?',
          options: [
            'To memoize the result of a function',
            'To optimize functional components by preventing unnecessary re-renders',
            'To handle side effects',
            'To manage state',
          ],
          correctAnswer: 'To optimize functional components by preventing unnecessary re-renders',
        },
        {
          title: 'Which method is used to convert a JSON string into a JavaScript object?',
          options: ['JSON.stringify()', 'JSON.parse()', 'JSON.objectify()', 'JSON.convert()'],
          correctAnswer: 'JSON.parse()',
        },
        {
          title: 'What is the output of the following JavaScript code: `typeof null`?',
          options: ['"null"', '"undefined"', '"object"', '"number"'],
          correctAnswer: '"object"',
        },
        {
          title: 'In React, what is the purpose of `componentDidMount` lifecycle method?',
          options: [
            'To set the initial state',
            'To handle component updates',
            'To perform actions after the component has been rendered',
            'To handle component unmounting',
          ],
          correctAnswer: 'To perform actions after the component has been rendered',
        },
        {
          title: 'Which of the following is a benefit of using Redux with React?',
          options: [
            'Simplifies state management',
            'Enhances component styling',
            'Improves component rendering speed',
            'Provides server-side rendering',
          ],
          correctAnswer: 'Simplifies state management',
        },
        {
          title: 'What is the purpose of `useMemo` hook in React?',
          options: [
            'To memorize a value',
            'To optimize performance by memoizing expensive calculations',
            'To manage state',
            'To handle side effects',
          ],
          correctAnswer: 'To optimize performance by memoizing expensive calculations',
        },
        {
          title: 'What is the purpose of Babel in a React project?',
          options: [
            'To compile JSX into JavaScript',
            'To bundle JavaScript files',
            'To manage state',
            'To handle routing',
          ],
          correctAnswer: 'To compile JSX into JavaScript',
        },
        {
          title: 'Which of the following is NOT a feature of React?',
          options: [
            'Component-based architecture',
            'One-way data binding',
            'Virtual DOM',
            'Two-way data binding',
          ],
          correctAnswer: 'Two-way data binding',
        },
        {
          title: 'In JavaScript, what does `Array.prototype.map()` method do?',
          options: [
            'Creates a new array with the results of calling a provided function on every element in the calling array',
            'Filters elements from an array',
            'Executes a reducer function on each element of the array',
            'Finds an element in an array',
          ],
          correctAnswer:
            'Creates a new array with the results of calling a provided function on every element in the calling array',
        },
        {
          title: 'What does `ReactDOM.render()` do?',
          options: [
            'Compiles JSX into JavaScript',
            'Renders a React component to the DOM',
            'Creates a new React component',
            'Handles state management',
          ],
          correctAnswer: 'Renders a React component to the DOM',
        },    
        
        {
          "title": "Which method is used to merge two or more arrays in JavaScript?",
          "options": ["concat()", "join()", "push()", "pop()"],
          "correctAnswer": "concat()"
        },
        {
          "title": "What is the purpose of the `useReducer` hook in React?",
          "options": [
            "To manage state using a reducer function",
            "To perform side effects",
            "To create a reference",
            "To fetch data"
          ],
          "correctAnswer": "To manage state using a reducer function"
        },
        {
          "title": "In JavaScript, what does the `map` method do?",
          "options": [
            "Transforms each element of an array according to a function and returns a new array",
            "Filters elements from an array based on a condition",
            "Executes a function for each element of an array",
            "Reduces an array to a single value"
          ],
          "correctAnswer": "Transforms each element of an array according to a function and returns a new array"
        },
        {
          "title": "Which hook would you use to access a context value in React?",
          "options": ["useState", "useEffect", "useContext", "useReducer"],
          "correctAnswer": "useContext"
        },
        {
          "title": "What is the purpose of the `componentDidCatch` lifecycle method in React?",
          "options": [
            "To handle errors in the component tree",
            "To update the state",
            "To fetch data",
            "To create a reference"
          ],
          "correctAnswer": "To handle errors in the component tree"
        },
        {
          "title": "Which method is used to remove the last element from an array in JavaScript?",
          "options": ["push()", "pop()", "shift()", "unshift()"],
          "correctAnswer": "pop()"
        },
        {
          "title": "What is the purpose of the `Array.prototype.find()` method?",
          "options": [
            "To find the first element in the array that satisfies a provided testing function",
            "To filter elements from an array",
            "To transform each element of an array",
            "To reduce an array to a single value"
          ],
          "correctAnswer": "To find the first element in the array that satisfies a provided testing function"
        },
        {
          "title": "What does the `default` keyword do in a JavaScript `switch` statement?",
          "options": [
            "Specifies the code to run if no case matches the switch expression",
            "Declares a default value for a variable",
            "Defines a default export in a module",
            "Specifies the fallback function in a promise"
          ],
          "correctAnswer": "Specifies the code to run if no case matches the switch expression"
        },
        {
          "title": "Which of the following is a benefit of using TypeScript with React?",
          "options": [
            "Provides static type checking",
            "Improves performance",
            "Enhances component styling",
            "Simplifies state management"
          ],
          "correctAnswer": "Provides static type checking"
        },
        {
          "title": "What does the `useDebugValue` hook do in React?",
          "options": [
            "Displays a label for custom hooks in React DevTools",
            "Handles side effects",
            "Manages state",
            "Creates a reference"
          ],
          "correctAnswer": "Displays a label for custom hooks in React DevTools"
        },
        {
          "title": "In JavaScript, what is an \"immediately-invoked function expression\" (IIFE)?",
          "options": [
            "A function that is defined and executed immediately",
            "A function that is executed after a delay",
            "A function that is executed when an event occurs",
            "A function that is executed when the script is loaded"
          ],
          "correctAnswer": "A function that is defined and executed immediately"
        },
        {
          "title": "Which method is used to convert an array-like object to an array in JavaScript?",
          "options": ["Array.from()", "Array.toArray()", "Array.convert()", "Array.create()"],
          "correctAnswer": "Array.from()"
        },
        {
          "title": "What is the purpose of the `useImperativeHandle` hook in React?",
          "options": [
            "To customize the instance value that is exposed when using `ref`",
            "To manage state",
            "To handle side effects",
            "To access context"
          ],
          "correctAnswer": "To customize the instance value that is exposed when using `ref`"
        },
        {
          "title": "In JavaScript, what is the result of `2 + '2'`?",
          "options": ["'22'", "4", "NaN", "undefined"],
          "correctAnswer": "'22'"
        },
        {
          "title": "Which method is used to combine two or more arrays in JavaScript?",
          "options": ["concat()", "join()", "push()", "splice()"],
          "correctAnswer": "concat()"
        },
        {
          "title": "What does the `useTransition` hook do in React?",
          "options": [
            "Allows you to update state without blocking the UI",
            "Handles side effects",
            "Creates a reference",
            "Accesses context"
          ],
          "correctAnswer": "Allows you to update state without blocking the UI"
        },
        {
          "title": "Which of the following is a feature of ES6?",
          "options": [
            "Arrow functions",
            "Automatic semicolon insertion",
            "Hoisting",
            "Callback functions"
          ],
          "correctAnswer": "Arrow functions"
        },
        {
          "title": "In JavaScript, what does the `reduce` method do?",
          "options": [
            "Executes a reducer function on each element of the array, resulting in a single output value",
            "Filters elements from an array based on a condition",
            "Transforms each element of an array according to a function and returns a new array",
            "Finds the first element in the array that satisfies a provided testing function"
          ],
          "correctAnswer": "Executes a reducer function on each element of the array, resulting in a single output value"
        },
        {
          "title": "Which hook is used to create a mutable object that persists across renders in React?",
          "options": ["useState", "useRef", "useEffect", "useMemo"],
          "correctAnswer": "useRef"
        },
        {
          "title": "What is the purpose of the `Map` object in JavaScript?",
          "options": [
            "To store key-value pairs and remember the original insertion order of the keys",
            "To store unique values of any type",
            "To provide a way to iterate over elements",
            "To create immutable data structures"
          ],
          "correctAnswer": "To store key-value pairs and remember the original insertion order of the keys"
        },
        {
          "title": "In React, what does the `useMemo` hook do?",
          "options": [
            "Memoizes a value so that it is only recomputed when one of its dependencies changes",
            "Manages state",
            "Handles side effects",
            "Creates a reference"
          ],
          "correctAnswer": "Memoizes a value so that it is only recomputed when one of its dependencies changes"
        },
        {
          "title": "Which method is used to create a shallow copy of an array in JavaScript?",
          "options": ["slice()", "splice()", "copy()", "duplicate()"],
          "correctAnswer": "slice()"
        },
        {
          "title": "What is the purpose of the `Symbol` type in JavaScript?",
          "options": [
            "To create unique identifiers for object properties",
            "To create a new data type",
            "To perform type checking",
            "To define default values for variables"
          ],
          "correctAnswer": "To create unique identifiers for object properties"
        },
        {
          "title": "What does the `useDeferredValue` hook do in React?",
          "options": [
            "Defers updating a value until the next render to improve performance",
            "Handles side effects",
            "Manages state",
            "Creates a reference"
          ],
          "correctAnswer": "Defers updating a value until the next render to improve performance"
        },
        {
          "title": "Which method is used to find the index of an element in an array in JavaScript?",
          "options": ["indexOf()", "findIndex()", "search()", "locate()"],
          "correctAnswer": "indexOf()"
        },
        {
          "title": "What is the purpose of the `WeakMap` object in JavaScript?",
          "options": [
            "To store key-value pairs where keys are objects and values can be garbage-collected",
            "To store unique values of any type",
            "To create immutable data structures",
            "To iterate over elements"
          ],
          "correctAnswer": "To store key-value pairs where keys are objects and values can be garbage-collected"
        },
        {
          "title": "In JavaScript, what does the `filter` method do?",
          "options": [
            "Creates a new array with all elements that pass the test implemented by the provided function",
            "Transforms each element of an array according to a function and returns a new array",
            "Finds the first element in the array that satisfies a provided testing function",
            "Executes a reducer function on each element of the array, resulting in a single output value"
        
          ],  
          "correctAnswer": "Creates a new array with all elements that pass the test implemented by the provided function"
        },
        {
          "title": "Which JavaScript feature allows you to extract properties from an object or array into variables?",
          "options": ["Destructuring", "Rest parameters", "Spread syntax", "Template literals"],
          "correctAnswer": "Destructuring"
        },
        {
          "title": "What is the purpose of the `Array.prototype.every()` method?",
          "options": [
            "To test whether all elements in the array pass the test implemented by the provided function",
            "To test whether at least one element in the array passes the test implemented by the provided function",
            "To filter elements from an array",
            "To transform each element of an array"
          ],
          "correctAnswer": "To test whether all elements in the array pass the test implemented by the provided function"
        },
        {
          "title": "In React, what does the `useCallback` hook do?",
          "options": [
            "Returns a memoized callback function",
            "Memoizes a value so that it is only recomputed when one of its dependencies changes",
            "Manages state",
            "Handles side effects"
          ],
          "correctAnswer": "Returns a memoized callback function"
        },
        {
          "title": "Which JavaScript method is used to determine if an array includes a certain value?",
          "options": ["includes()", "has()", "contains()", "exists()"],
          "correctAnswer": "includes()"
        }
      
]
    

