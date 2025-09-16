//Your JavaScript goes in here
let steps = [];
let currentStep = 0;
let resultValue= null;

window.onload = function () {
  document.querySelector(".next").disabled = true;
  document.querySelector(".reset").disabled = true;
};

function start() {
  const op = document.getElementById("operation").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const stepsDiv = document.getElementById("steps");
  const resultDiv = document.getElementById("result");

  stepsDiv.innerHTML = "";
  resultDiv.innerHTML = "<strong>Output : </strong>";
  steps = [];
  currentStep = 0;

  if (!op || isNaN(num1) || isNaN(num2)) {
    alert("Please select an operation and enter both numbers.");
    return;
  }

  document.querySelector(".start").disabled = true;
  document.querySelector(".next").disabled = false;
  document.querySelector(".reset").disabled = false;

  let mess = "";
  switch (op) {
    case "add":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= a+b;`);
      steps.push(`      System.out.println("Addition: "+c);
    }
}`);
      resultValue=num1+num2;
      break;
    
    case "subtract":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= a-b;`);
      steps.push(`      System.out.println("Subtraction: "+c);
    }
}`);
      resultValue=num1-num2;
      break;
    
    case "multiply":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= a*b;`);
      steps.push(`      System.out.println("Multiplication: "+c);
    }
}`);
      resultValue = num1*num2;
      break;
      
    case "divide":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= a/b;`);
      steps.push(`      System.out.println("Division: "+c);
    }
}`);
      resultValue = num1 / num2;
      break;
      
    case "modulo":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= a%b;`);
      steps.push(`      System.out.println("Modulus: "+c);
    }
}`);
      resultValue = num1 % num2;
      break;
      
    case "et":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a==b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 == num2;
      break;
      
    case "ne":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a!=b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 != num2;
      break;
      
    case "gt":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a>b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 > num2;
      break;
      
    case "lt":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a < b)`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 < num2;
      break;
      
    case "gtoe":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a >= b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 >= num2;
      break;
      
    case "ltoe":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      boolean c= (a <= b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      resultValue = num1 <= num2;
      break;
      
    case "sa":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      System.out.println("a: "+a);
      System.out.println("b: "+b);
    }
}`);
      break;
      
    case "addassign":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      a += 5;
      b += 10;`);
      steps.push(`      System.out.println(a);
      System.out.println(b);
    }
}`);
      break;
      
      case "subassign":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      a -= 5;
      b -= 10;`);
      steps.push(`      System.out.println(a);
      System.out.println(b);
    }
}`);
      break;
      
    case "multassign":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      a *= 2;
      b *= 3 ;`);
      steps.push(`      System.out.println(a);
      System.out.println(b);
    }
}`);
      break;
      
    case "divassign":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      a /= 2;
      b /= 3;`);
      steps.push(`      System.out.println(a);
      System.out.println(b);
    }
}`);
      break;
      
    case "moduloassign":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      a %= 2;
      b %= 3;`);
      steps.push(`      System.out.println(a);
      System.out.println(b);
    }
}`);
      break;
      
    case "bitand":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= (a & b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      break;
      
    case "bitor":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= (a | b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      break;
      
    case "bitxor":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= (a ^ b);`);
      steps.push(`      System.out.println(c);
    }
}`);
      break;
      
    case "bitnot":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int c= ~a;
      int d= ~b;`);
      steps.push(`      System.out.println(c);
      System.out.println(d);
    }
}`);
      break;
      
     case "t_op":
      steps.push(`class Test
{
    public static void main(String args[])
    {
      Scanner sc=new Scanner(System.in);`);
      steps.push(`      int a=sc.nextInt();`);
      steps.push(`      int b=sc.nextInt();`);
      steps.push(`      int max= (a > b) ? a : b;`);
      steps.push(`      System.out.println("Maximum: " +max);
    }
}`);
      break;
      
  }

  // Display all steps
  stepsDiv.innerHTML = steps
    .map((step, i) => `<pre id="step-${i}">${step}</pre>`)
    .join("");
}

function nextStep() {
  if (currentStep < steps.length) {
    // Un-highlight previous step
    const prevStep = document.getElementById(`step-${currentStep - 1}`);
    if (prevStep) prevStep.style.color = "";

    // Highlight current step
    const step = document.getElementById(`step-${currentStep}`);
    step.style.color = "red";
    
  
  const lastStep = step.textContent.trim();
  let resultPanel = document.getElementById("result");
if (currentStep === 0) {
resultPanel.innerHTML = "//class Test and main function started along with Scanner class(used for taking input from user) which you will learn later....." + "<br><br><strong>Output: </strong><br>";
    } else if (currentStep === 1) {
      let num1 = document.getElementById("num1").value;
      let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
      resultPanel.innerHTML = updated + "a= " + num1 + "<br><br><strong>Output: </strong><br>";
    } else if (currentStep === 2) {
      let num2 = document.getElementById("num2").value;
      let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
      resultPanel.innerHTML = updated + "b= " + num2 + "<br><br><strong>Output: </strong><br>";
    } else if (currentStep === 3) {
  const op = document.getElementById("operation").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let expression = "";

  switch (op) {
    case "add":
      expression = num1 + num2;
      break;
    case "subtract":
      expression = num1 - num2;
      break;
    case "multiply":
      expression = num1 * num2;
      break;
    case "divide":
      expression = num2 === 0 ? "undefined" : num1 / num2;
      break;
    case "modulo":
      expression = num2 === 0 ? "undefined" : num1 % num2;
      break;
    case "et":
      expression = num1 == num2;
      break;
    case "ne":
      expression = num1 != num2;
      break;
    case "gt":
      expression = num1 > num2;
      break;
    case "lt":
      expression = num1 < num2;
      break;
    case "gtoe":
      expression = num1 >= num2;
      break;
    case "ltoe":
      expression = num1 <= num2;
      break;
    case "sa":
      expression = num1;
      break;
    case "bitand":
      expression = num1 & num2;
      break;
  }
   if(op==="sa"){
    let resultMessage = "";
    resultMessage = "a: "+num1+"<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: "+num2;
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
   else if(op==="addassign"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a= " + (num1+5) +"<br><br>b= " + (num2+10) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="subassign"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a= " + (num1-5) +"<br><br>b= " + (num2-10) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="multassign"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a= " + (num1*2) +"<br><br>b= " + (num2*3) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="divassign"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a= " + (parseInt(num1/2)) +"<br><br>b= " + (parseInt(num2/3)) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="moduloassign"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a= " + (num1%2) +"<br><br>b= " + (num2%3) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="bitand"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a in binary : " + (((num1) >>> 0).toString(2)) + "<br><br>b in binary : " + (((num2) >>> 0).toString(2)) + "<br><br>c= " + (((num1) >>> 0).toString(2)) + " & " +(((num2) >>> 0).toString(2)) + ": " + (((num1&num2) >>> 0).toString(2)) + "<br><br>c in decimal: " + (num1&num2) + "<br><br>c= " + (num1&num2) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="bitor"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a in binary : " + (((num1) >>> 0).toString(2)) + "<br><br>b in binary : " + (((num2) >>> 0).toString(2)) + "<br><br>c= " + (((num1) >>> 0).toString(2)) + " & " +(((num2) >>> 0).toString(2)) + ": " + (((num1 | num2) >>> 0).toString(2)) + "<br><br>c in decimal: " + (num1 | num2) + "<br><br>c= " + (num1 | num2) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="bitxor"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a in binary : " + (((num1) >>> 0).toString(2)) + "<br><br>b in binary : " + (((num2) >>> 0).toString(2)) + "<br><br>c= " + (((num1) >>> 0).toString(2)) + " & " +(((num2) >>> 0).toString(2)) + ": " + (((num1 ^ num2) >>> 0).toString(2)) + "<br><br>c in decimal: " + (num1 ^ num2) + "<br><br>c= " + (num1 ^ num2) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="bitnot"){
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "a in binary : " + (((num1) >>> 0).toString(2)) + "<br><br>b in binary : " + (((num2) >>> 0).toString(2)) + "<br><br>c= " + (((~num1) >>> 0).toString(2)) + "<br><br>d= " + (((~num2) >>> 0).toString(2)) + "<br><br>c in decimal: " + (~num1) + "<br><br>d in decimal: " + (~num2) + "<br><br><strong>Output: </strong><br>";
   }
   else if(op==="t_op"){
     if (num1 > num2) {
  let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "(" + num1 + " > " + num2 + ") ----> true" + "<br><br>max= " + num1 + "<br><br><strong>Output: </strong><br>";
  }
  else {
  let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "(" + num1 + " > " + num2 + ") ----> false" + "<br><br>max= " + num2 + "<br><br><strong>Output: </strong><br>";
  }
   }
   else{
     let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
      resultPanel.innerHTML = updated + "c= " + expression + "<br><br><strong>Output: </strong><br>";
   }
}
      else if (currentStep === 4) {
  const op = document.getElementById("operation").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultMessage = "";

  switch (op) {
    case "add":
      resultMessage = "Addition: " + (num1 + num2);
      break;
    case "subtract":
      resultMessage = "Subtraction: " + (num1 - num2);
      break;
    case "multiply":
      resultMessage = "Multiplication: " + (num1 * num2);
      break;
    case "divide":
      if (num2 == 0) {
        alert("Cannot divide by zero.");
      }
        else {
        resultMessage = "Division: " + (num1 / num2);
      }
      break;
    case "modulo":
      if (num2 == 0) {
        alert("Cannot divide by zero.");
      }
        else {
        resultMessage = "Modulus: " + (num1 % num2);
      }
      break;
    case "et":
      resultMessage = (num1 == num2);
      break;
    case "ne":
      resultMessage = (num1 != num2);
      break;
    case "gt":
      resultMessage = (num1 > num2);
      break;
    case "lt":
      resultMessage = (num1 < num2);
      break;
    case "gtoe":
      resultMessage = (num1 >= num2);
      break;
    case "ltoe":
      resultMessage = (num1 <= num2);
      break;
    case "bitand":
      resultMessage = (num1 & num2);
      break;
    case "bitor":
      resultMessage = (num1 | num2);
      break;
    case "bitxor":
      resultMessage = (num1 ^ num2);
      break;
    case "t_op":
      if(num1 > num2){
        resultMessage = "Maximum: " + num1;
      }
      else{
        resultMessage = "Maximum: " + num2;
      }
      break;
  }
  
  if(op==="addassign"){
    resultMessage = "a: " + (num1+5) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: " + (num2+10);
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
  else if(op==="subassign"){
    resultMessage = "a: " + (num1-5) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: " + (num2-10);
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
  else if(op==="multassign"){
    resultMessage = "a: " + (num1*2) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: " + (num2*3);
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
  else if(op==="divassign"){
    resultMessage = "a: " + (parseInt(num1/2)) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: " + (parseInt(num2/3));
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
  else if(op==="moduloassign"){
    resultMessage = "a: " + (num1%2) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  b: " + (num2%3);
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
   else if(op==="bitnot"){
    resultMessage = "c: " + (~num1) + "<br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  d: " + (~num2);
    let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
   else{
  let updated = resultPanel.innerHTML.replace("<strong>Output: </strong><br>", "");
  resultPanel.innerHTML = updated + "//end main function and class Test closed....." + "<br><br><strong>Output: </strong>";

  document.getElementById("result").innerHTML += resultMessage;
   }
}

    currentStep++;
  }
  else{
    alert("Program Completed.");
  }
}

function reset() {
  document.getElementById("operation").selectedIndex=0;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("steps").innerHTML = "";
  document.getElementById("result").textContent = "Output :";
  document.querySelector(".start").disabled = false;
  steps = [];
  currentStep = 0;
  resultValue= null;
        }
