Java operators are special symbols that perform operations on variables and values. They are used to manipulate data and variables in expressions. In this lab you will be studying about the various types of operators.

They are of the following types:

## Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations.

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulo (%)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a=10;
        int b=5;
        System.out.println("Addition: " + (a + b));      
        System.out.println("Subtraction: " + (a - b));  
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b)); 
        System.out.println("Modulus: " + (a % b));
    }
}
```

**Output:**

```
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
Modulus: 0
```

## Relational Operators

Relational operators are used to compare two values.

- Equal to (==)
- Not equal to (!=)
- Greater than (>)
- Less than (<)
- Greater than or equal to (>=)
- Less than or equal to (<=)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a=20;
        int b=10;
        System.out.println(a == b); 
        System.out.println(a != b);
        System.out.println(a > b); 
        System.out.println(a < b);
        System.out.println(a >= b);
        System.out.println(a <= b);
    }
}
```

**Output:**

```
false
true
true
false
true
false
```

## Logical Operators

Logical operators are used to combine multiple boolean expressions.

- Logical AND (&&)
- Logical OR (||)
- Logical NOT (!)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        boolean a = true;
        boolean b = false;
        System.out.println(a && b);
        System.out.println(a || b); 
        System.out.println(!a);     
    }
}
```

**Output:**

```
false
true
false
```

## Assignment Operators

Assignment operators are used to assign values to variables.

- Simple assignment(=)
- Add and assign (+=)
- Subtract and assign(-=)
- Multiply and assign (*=)
- Divide and assign (/=)
- Modulo and assign (%=)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a = 10;
        a += 5;  
        System.out.println(a);
        a -= 5;  
        System.out.println(a);
        a *= 5;  
        System.out.println(a);
        a /= 5;  
        System.out.println(a);
        a %= 5;  
        System.out.println(a);
    }
}
```

**Output:**

```
15
10
50
50
0
```

## Unary Operators

Unary operators operate on a single operand.

- Unary Plus (+)
- Unary Minus (-)
- Increment (++)
  - Pre-increment (++operand): Change then use.
  - Post-increment (operand++): Use then change.
- Decrement (--)
  - Pre-decrement (--operand): Change then use.
  - Post-decrement (operand--): Use then change.

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
       int a = 10;
       int result = +a;
        System.out.println("The value of result after unary plus is: " + result);
       
       result = -a;
       System.out.println("The value of result after unary minus is: " + result);
       
       int b = 20;
       result = b++;
       System.out.println("The value of result after post-increment is: " + result);

       result = ++b;
       System.out.println("The value of result after pre-increment is: " + result);
       
       int c = 30;
       result = c--;
       System.out.println("The value of result after post-decrement is: " + result);

       result = --c;
       System.out.println("The value of result after pre-decrement is: " + result);
    }
}
```

**Output:**

```
The value of result after unary plus is: 10
The value of result after unary minus is: -10
The value of result after post-increment is: 20
The value of result after pre-increment is: 22
The value of result after post-decrement is: 30
The value of result after pre-decrement is: 28
```

## Bitwise Operators

Bitwise operators perform operations on bits.

- Bitwise And (&)
- Bitwise OR (|)
- Bitwise XOR (^)
- Bitwise NOT (~)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a = 5;
        int b = 7;
        System.out.println("a&b = " + (a & b));
        System.out.println("a|b = " + (a | b));
        System.out.println("a^b = " + (a ^ b));
        System.out.println("~a = " + ~a);

    }
}
```

**Output:**

```
a&b = 5
a|b = 7
a^b = 2
~a = -6
```

## Bitwise-Shift Operators

Shift operators are used to shift the bits of a number left or right, thereby multiplying or dividing the number by two, respectively. They can be used when we have to multiply or divide a number by two.

- Left shift (<<)
- Right shift (>>)
- Unsigned right shift (>>>)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a = 4;
        System.out.println("Bitwise Left Shift: " + (a << 2));
        System.out.println("Bitwise Right Shift: " + (a >> 2));
        System.out.println("Bitwise Unsigned Right Shift: " + (a >>> 2));
    }
}
```

**Output:**

```
Bitwise Left Shift: 16
Bitwise Right Shift: 1
Bitwise Unsigned Right Shift: 1
```

## Ternary Operator

The ternary operator is a shorthand form of the if-else statement.

- Ternary (? :)

**Program:**

```java
class Test
{
    public static void main(String args[])
    {
        int a = 10;
        int b = 5;
        int max = (a > b) ? a : b;
        System.out.println("The maximum between two numbers is: " +max);
    }
}
```

**Output:**

```
The maximum between two numbers is: 10
```

---
