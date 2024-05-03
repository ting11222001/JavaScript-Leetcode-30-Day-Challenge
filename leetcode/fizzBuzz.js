/**
 * https://www.youtube.com/watch?v=1t1_a1BZ04o&ab_channel=Fireship
 * 
 * print 1 .. 100
 * print "Fizz" if divisible by 3
 * print "Buzz" if divisible by 5
 * print "Bazz" if divisible by 7
 * print "FizzBuzz" if divisible by 3 and 5
 * 
 * Example:
1
2
Fizz
4
Buzz
Fizz
Bazz
...
FizzBuzz
Bazz
92
Fizz
94
Buzz
Fizz
97
Bazz
Fizz
Buzz
 */

// Time complexity: O(1) constant time because it always loops 100 times.
for (let i = 1; i <= 100; i++) {
  let out = "";

  if (i % 3 == 0) {
    out += "Fizz";
  }
  if (i % 5 == 0) {
    out += "Buzz";
  }
  if (i % 7 == 0) {
    out += "Bazz";
  }

  console.log(out || i);
}