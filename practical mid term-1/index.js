function checkPrime() {
    let num = document.getElementById("numberInput").value;
        let result = document.getElementById("result");
       
        if (num == 1) {
      result.innerHTML = "1 is NOT a Prime Number";
      return;
    }
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
        }

    if (isPrime) {
      result.innerHTML = num + " is a Prime Number";
    } else {
      result.innerHTML = num + " is NOT a Prime Number";
    }
}