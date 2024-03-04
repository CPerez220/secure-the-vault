
//First, I put a string in a variable.
const string = "You have received this message because you have been chosen to open this important vault. Here is the secret combination: "
//My first variable use a add ecuation to get 10.
const variable1 = 5 + 5;
//My second variable use a substraction to get 20.
const variable2 = 60 - 20;
//My third variable use a very easy multiply ecuation to get 39.
const variable3 = 39 * 1;
//All the results of this variable from the code to open the vault.

//Next, I use "alert" to show the message in form of a notification to the user.
//I put the message in () and put the variables in ${}.
//alert(`${string}${variable1} ${variable2} ${variable3}`)
//I put this in the index.html page so when you click the buttom you will recieve the message.

//I made this function to get the info that you put and check it if it is correct o not.
//I use a little of my c++ experince to make this problem and a little of Google.
function checkCode() {
  const enteredCode = document.getElementById('code-input').value;
  const secretCode = '10 40 39';

  if (enteredCode === secretCode) {
      document.getElementById('message').textContent = alert("Correct Code!! The Vault is Open!!");
      window.location.href = "index2.html";
  } else {
      document.getElementById('message').textContent = alert("Incorrect Code. Try Again.");
  }
}