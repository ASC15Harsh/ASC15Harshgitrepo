let numbers = [5, 10, 15, 20, 25];

        // 1. push()
        numbers.push(30);
        console.log("After push(30):", numbers);

        // 2. pop()
        let lastElement = numbers.pop();
        console.log("After pop():", numbers, "| Last Element:", lastElement);

        // 3. shift()
        let firstElement = numbers.shift();
        console.log("After shift():", numbers, "| First Element:", firstElement);

        // 4. unshift()
        numbers.unshift(5);
        console.log("After unshift(5):", numbers);

        // 5. slice()
        let slicedArray = numbers.slice(1, 4);
        console.log("After slice(1, 4):", slicedArray);

        // 6. splice()
        numbers.splice(2, 1, 12, 18);
        console.log("After splice(2, 1, 12, 18):", numbers);

        // 7. concat()
        let additionalNumbers = [30, 35];
        let concatenatedArray = numbers.concat(additionalNumbers);
        console.log("After concat([30, 35]):", concatenatedArray);

        // 8. join()
        let joinedString = numbers.join(', ');
        console.log("Join with concatenated" , concatenatedArray.join(" , "));
        console.log("After join(', '):", joinedString);

        // 9. indexOf()
        let indexOfTwelve = numbers.indexOf(12);
        console.log("Index of 12:", indexOfTwelve);

        // 10. lastIndexOf()
        numbers.push(10); 
        console.log(numbers);
        let lastIndexOfTen = numbers.lastIndexOf(10);
        console.log("Last Index of 10:", lastIndexOfTen);

        // 11. includes()
        let hasTwenty = numbers.includes(20);
        console.log("Includes 20:", hasTwenty);

        // 12. reverse()
        numbers.reverse();
        console.log("After reverse():", numbers);

        // 13. sort()
        numbers.sort((a, b) => b-a); // for descending
        console.log("After sort():", numbers);
        numbers.sort((a,b ) => a-b); // for ascending
        console.log("After sort():", numbers);

        // 14. filter()
        let evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log("Even Numbers:", evenNumbers);

        // 15. map()
        let doubledNumbers = numbers.map(num => num * 2);
        console.log("Doubled Numbers:", doubledNumbers);

        // 16. reduce()
        let sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log("Sum of Numbers:", sum);

        // 17. forEach()
        console.log("ForEach Output:");
        numbers.forEach(num => console.log(num));

        // 18. find()
        let firstEven = numbers.find(num => num % 2 === 0);
        console.log("First Even Number:", firstEven);

        // 19. findIndex()
        let firstIndexOfTen = numbers.findIndex(num => num === 10);
        console.log("First Index of 10:", firstIndexOfTen);

        // 20. some()
        let hasGreaterThanTwenty = numbers.some(num => num > 20);
        console.log("Has Greater Than 20:", hasGreaterThanTwenty);

        // 21. every()
        let allGreaterThanZero = numbers.every(num => num > 0);
        console.log("All Greater Than Zero:", allGreaterThanZero);

        // 22. fill()
        numbers.fill(0, 2, 4);
        console.log("After fill(0, 2, 4):", numbers);