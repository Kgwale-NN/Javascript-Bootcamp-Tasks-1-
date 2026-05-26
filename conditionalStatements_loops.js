
var temperature = 20;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else if (temperature > 25) {
  console.log("It's warm.");
}


var number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}


for (var i = 1; i <= 10; i++) {
  console.log(i);
}

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

var numbers2 = [3, 7, 2, 5, 10, 6];
var largest = numbers2[0];
for (var i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log(largest);


var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

var i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

var i = 1;
var sum = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

var i = 5;
while (i < 50) {
  console.log(i);
  i += 5;
}


var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

var i = 1;
var sum = 0;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log(sum);