import { useEffect, useState } from "react";
import Guide from "../../components/Guides/Guide";
import GuidesNavigation from "../../components/Guides/GuidesNavigation";
import styles from "./Guides.module.css";
import { getGuides } from "../../API/services";
function Guides() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const sampleGuidesData = [
    {
      id: 1,
      guideName: "JavaScript Arrays and Array Methods",
      guides: [
        {
          id: 1,
          guideName: "Map method",
          description:
            "The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. Returned value is a new array with each element being the result of the callback function.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.map()",
            showcaseCodeLines: [
              "const array1 = [1, 4, 9, 16];",
              "// Pass a function to map",
              "const map1 = array1.map((x) => x * 2);",
              "console.log(map1);",
              "// Expected output: Array [2, 8, 18, 32]",
            ],
            result: ["Array [2, 8, 18, 32]"],
          },
          parameters: [
            {
              name: "callbackFn",
              description:
                "A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:",
              extras: [
                {
                  name: "element",
                  description:
                    "The current element being processed in the array.",
                },

                {
                  name: "index",
                  description:
                    "The index of the current element being processed in the array.",
                },
                {
                  name: "array",
                  description: "The array map() was called upon.",
                },
              ],
            },
            {
              name: "thisArg",
              description: "A value to use as this when executing callbackFn.",
            },
          ],
        },
        {
          id: 2,
          guideName: "Sort method",
          description:
            "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. Return value is the reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.sort()",
            showcaseCodeLines: [
              "const months = ['March', 'Jan', 'Feb', 'Dec'];",
              "months.sort();",
              "console.log(months);",
              "// Expected output: Array ['Dec', 'Feb', 'Jan', 'March']",
              "const array1 = [1, 3, 4, 2, 5];",
              "array1.sort();",
              "console.log(array1);",
              "// Expected output: Array [1, 2, 3, 4, 5]",
            ],
            result: [
              'Array ["Dec", "Feb", "Jan", "March"]',
              "Array [1, 2, 3, 4, 5]",
            ],
          },
          parameters: [
            {
              name: "Element a",
              description:
                "The first element for comparison. Will never be undefined.",
            },
            {
              name: "Element b",
              description:
                "The second element for comparison. Will never be undefined.",
            },
          ],
        },
        {
          id: 3,
          guideName: "Filter method",
          description:
            "The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. Return value is a shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.filter()",
            showcaseCodeLines: [
              "const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];",
              "const result = words.filter((word) => word.length > 6);",
              "console.log(result);",
              "// Expected output: Array ['exuberant', 'destruction', 'present']",
            ],
            result: ["Array ['exuberant', 'destruction', 'present']"],
          },
          parameters: [
            {
              name: "callbackFn",
              description:
                "A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:",
              extras: [
                {
                  name: "element",
                  description:
                    "The current element being processed in the array.",
                },

                {
                  name: "index",
                  description:
                    "The index of the current element being processed in the array.",
                },
                {
                  name: "array",
                  description: "The array filter() was called upon.",
                },
              ],
            },
            {
              name: "thisArg",
              description: "A value to use as this when executing callbackFn.",
            },
          ],
        },
        {
          id: 4,
          guideName: "From method",
          description:
            "The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.from()",
            showcaseCodeLines: [
              "console.log(Array.from('foo'));",
              "// Expected output: Array ['f', 'o', 'o']",
              "",
              "console.log(Array.from([1, 2, 3], (x) => x + x));",
              "// Expected output: Array [2, 4, 6]",
            ],
            result: ["Array ['f', 'o', 'o']", "Array [2, 4, 6]"],
          },
          parameters: [
            {
              name: "arrayLike",
              description:
                "An iterable or array-like object to convert to an array.",
            },
            {
              name: "mapFn",
              description:
                "A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:",
              extras: [
                {
                  name: "element",
                  description:
                    "The current element being processed in the array.",
                },

                {
                  name: "index",
                  description:
                    "The index of the current element being processed in the array.",
                },
              ],
            },
            {
              name: "thisArg",
              description: "Value to use as this when executing mapFn.",
            },
          ],
        },
        {
          id: 5,
          guideName: "Find method",
          description:
            "The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.Find()",
            showcaseCodeLines: [
              "const array1 = [5, 12, 8, 130, 44];",
              "const found = array1.find((element) => element > 10);",
              "console.log(found);",
              "// Expected output: 12",
            ],
            result: ["12"],
          },
          parameters: [
            {
              name: "callbackFn",
              description:
                "A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:",
              extras: [
                {
                  name: "element",
                  description:
                    "The current element being processed in the array.",
                },

                {
                  name: "index",
                  description:
                    "The index of the current element being processed in the array.",
                },
                {
                  name: "array",
                  description: "The array find() was called upon.",
                },
              ],
            },

            {
              name: "thisArg",
              description: "A value to use as this when executing callbackFn.",
            },
          ],
        },
        {
          id: 6,
          guideName: "Push method",
          description:
            "The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.Push()",
            showcaseCodeLines: [
              "const animals = ['pigs', 'goats', 'sheep'];",
              "const count = animals.push('cows');",
              "console.log(count);",
              "// Expected output: 4",
              "",
              "console.log(animals);",
              "// Expected output: Array ['pigs', 'goats', 'sheep', 'cows']",
            ],
            result: ["4", "Array ['pigs', 'goats', 'sheep', 'cows']"],
          },
          parameters: [
            {
              name: "element1, element2, ..., elementN",
              description:
                "The element / elements to add to the end of the array.",
            },
          ],
        },
        {
          id: 7,
          guideName: "Slice method",
          description:
            "The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
          showcase: {
            showcaseName: "JavaScript Demo: Array.Slice()",
            showcaseCodeLines: [
              "const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];",
              "console.log(animals.slice(2));",
              "// Expected output: Array ['camel', 'duck', 'elephant']",
              "",
              "console.log(animals.slice(2, 4));",
              "// Expected output: Array ['camel', 'duck']",
              "",
              "console.log(animals.slice());",
              "// Expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant']",
            ],
            result: [
              "Array ['camel', 'duck', 'elephant']",
              "Array ['camel', 'duck']",
              "Array ['ant', 'bison', 'camel', 'duck', 'elephant']",
            ],
          },
          parameters: [
            {
              name: "element1, element2, ..., elementN",
              description:
                "The element / elements to add to the end of the array.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      guideName: "Objects",
      guides: [
        {
          id: 1,
          guideName: "Object keys",
          description:
            "The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.",
          showcase: {
            showcaseName: "JavaScript Demo: Object.keys()",
            showcaseCodeLines: [
              "const object1 = { a: 'somestring', b: 42, c: false, };",
              "console.log(Object.keys(object1));",
              "// Expected output: Array ['a', 'b', 'c']",
            ],
            result: ['Array ["a", "b", "c"]'],
          },
          parameters: [
            {
              name: "object",
              description: "An object to convert",
            },
          ],
        },
        {
          id: 2,
          guideName: "Object values",
          description:
            "The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.",
          showcase: {
            showcaseName: "JavaScript Demo: Object.values()",
            showcaseCodeLines: [
              "const object1 = { a: 'somestring', b: 42, c: false, };",
              "console.log(Object.values(object1));",
              "// Expected output: Array ['somestring', 42, false]",
            ],
            result: ['Array ["somestring", 42, false]'],
          },
          parameters: [
            {
              name: "object",
              description: "An object to convert",
            },
          ],
        },
        {
          id: 3,
          guideName: "Object entries",
          description:
            "The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.",
          showcase: {
            showcaseName: "JavaScript Demo: Object.entries()",
            showcaseCodeLines: [
              "const object1 = { a: 'somestring', b: 42, c: false, };",
              "for (const [key, value] of Object.entries(object1)) {",
              "console.log(`${key}: ${value}`);",
              "}",
              "",
              "// Expected output:",
              "// 'a: somestring'",
              "// 'b: 42'",
            ],
            result: ["a: somestring", "b: 42"],
          },
          parameters: [
            {
              name: "object",
              description: "An object to convert",
            },
          ],
        },
        {
          id: 4,
          guideName: "Object hasOwnProperty",
          description:
            "The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).",
          showcase: {
            showcaseName: "JavaScript Demo: Object.hasOwnProperty()",
            showcaseCodeLines: [
              "const object1 = {};",
              "object1.property1 = 42;",
              "console.log(object1.hasOwnProperty('property1'));",
              "// Expected output: true",
              "",
              "console.log(object1.hasOwnProperty('toString'));",
              "// Expected output: false",
              "",
              "console.log(object1.hasOwnProperty('hasOwnProperty'));",
              "// Expected output: false",
            ],
            result: ["true", "false", "false"],
          },
        },
        {
          id: 5,
          guideName: "Object fromEntries",
          description:
            "The Object.fromEntries() static method transforms a list of key-value pairs into an object.",
          showcase: {
            showcaseName: "JavaScript Demo: Object.fromEntries()",
            showcaseCodeLines: [
              "const entries = new Map([",
              "['foo', 'bar'],",
              "['baz', 42],",
              "]);",
              "const obj = Object.fromEntries(entries);",
              "console.log(obj);",
              "// Expected output: Object { foo: 'bar', baz: 42 }",
            ],
            result: ["Object { foo: 'bar', baz: 42 }"],
          },
          parameters: [
            {
              name: "iterable",
              description:
                "An iterable, such as an Array or Map, containing a list of objects. Each object should have two properties:",
              extras: [
                {
                  name: "0",
                  description:
                    "A string or symbol representing the property key.",
                },
                {
                  name: "1",
                  description: "The property value.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      guideName: "Strings",
      guides: [
        {
          id: 1,
          guideName: "String concat",
          description:
            "The concat() method of String values concatenates the string arguments to this string and returns a new string. Returns a new string containing the combined text of the strings provided.",
          showcase: {
            showcaseName: "JavaScript Demo: String.concat()",
            showcaseCodeLines: [
              "const str1 = 'Hello';",
              "const str2 = 'World';",
              "console.log(str1.concat(' ', str2));",
              "// Expected output: 'Hello World'",
              "",
              "console.log(str1.concat(' ', str1));",
              '// Expected output: "World, Hello"',
            ],
            result: ["Hello World", "World, Hello"],
          },
          parameters: [
            {
              name: "str1, str2, ..., strN",
              description: "One or more strings to concatenate to str.",
            },
          ],
        },
        {
          id: 2,
          guideName: "String Replace",
          description:
            "The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.",
          showcase: {
            showcaseName: "JavaScript Demo: String.replace()",
            showcaseCodeLines: [
              "const paragraph = 'I think Ruth's dog is cuter than your dog!';",
              "console.log(paragraph.replace('Ruth's', 'my'));",
              "// Expected output: 'I think my dog is cuter than your dog!'",
              "",
              "",
              "// Example with Regular Expresison: ",
              "const regex = /Dog/i;",
              "console.log(paragraph.replace(regex, 'ferret'));",
              "// Expected output: 'I think Ruth's ferret is cuter than your dog!'",
            ],
            result: [
              "I think my dog is cuter than your dog!",
              "I think Ruth's ferret is cuter than your dog!",
            ],
          },
          parameters: [
            {
              name: "pattern",
              description:
                "Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. Any value that doesn't have the Symbol.replace method will be coerced to a string.",
            },
            {
              name: "replacement",
              description: "Can be a string or a function.",
            },
          ],
        },
        {
          id: 3,
          guideName: "String Repeat",
          description:
            "The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.",
          showcase: {
            showcaseName: "JavaScript Demo: String.repeat()",
            showcaseCodeLines: [
              "const mood = 'Riddled with wrath! ';",
              "console.log('I feel ${mood.repeat(3)}');",
              "// Expected output: 'I feel Riddled with wrath! Riddled with wrath! Riddled with wrath!'",
            ],
            result: [
              "I feel Riddled with wrath! Riddled with wrath! Riddled with wrath!",
            ],
          },
          parameters: [
            {
              name: "count",
              description:
                "An integer between 0 and +Infinity, indicating the number of times to repeat the string.",
            },
          ],
        },
        {
          id: 4,
          guideName: "String Trim",
          description:
            "The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.",
          showcase: {
            showcaseName: "JavaScript Demo: String.trim()",
            showcaseCodeLines: [
              "const greeting = '   Hello world!   ';",
              "console.log(greeting);",
              "// Expected output: '   Hello world!   ';",
              "console.log(greeting.trim());",
              '// Expected output: "Hello world!";',
            ],
            result: [" Hello world! ", "Hello world!"],
          },
        },
      ],
    },
    {
      id: 4,
      guideName: "Number",
      guides: [
        {
          id: 1,
          guideName: "Number",
          description:
            "When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.",
          showcase: {
            showcaseName: "JavaScript Demo: Number.Number()",
            showcaseCodeLines: ["Number('123');", "// returns the number 123"],
            result: ["123 as type number"],
          },
          parameters: [
            {
              name: "value",
              description: "Value to convert to type number.",
            },
          ],
        },
        {
          id: 2,
          guideName: "Number isNaN",
          description:
            "The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type.",
          showcase: {
            showcaseName: "JavaScript Demo: Number.isNaN()",
            showcaseCodeLines: [
              "console.log(Number.isNaN('100F'));",
              "// Expected output: 'NaN'",
              "console.log(Number.isNaN('100'));",
              "// Expected output: 'false'",
            ],
            result: ["NaN", "false"],
          },
          parameters: [
            {
              name: "value",
              description: "Value to check.",
            },
          ],
        },
        {
          id: 3,
          guideName: "Number toFixed",
          description:
            "The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.",
          showcase: {
            showcaseName: "JavaScript Demo: Number.toFixed()",
            showcaseCodeLines: [
              "console.log((123.456).toFixed(2));",
              "// Expected output: '123.45'",
            ],
            result: ["123.45"],
          },
          parameters: [
            {
              name: "digits",
              description:
                "The number of digits to appear after the decimal point; should be a value between 0 and 100, inclusive. If this argument is omitted, it is treated as 0.",
            },
          ],
        },
      ],
    },
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getLessons() {
      const lessons = await getGuides();
      setData(lessons);
      setLoading(false);
    }
    getLessons();
  }, []);

  return (
    <div className={styles.container}>
      {loading === false && (
        <GuidesNavigation
          guidesData={data}
          selectedGuide={selectedGuide}
          setSelectedGuide={setSelectedGuide}
        />
      )}
      <Guide guidesData={data} selectedGuide={selectedGuide} />
    </div>
  );
}

export default Guides;
