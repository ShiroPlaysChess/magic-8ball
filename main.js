document.getElementById("ask question").addEventListener("click", askQuestion)


let ofCourse = "Of course!"
let pleaseAsk = "Please ask a question..."
let withoutADoubt = "Without a Doubt."
let asISeeItYes = "As I see it, yes."
let askAgain = "Concentrate and ask again."
let dontCountOnIt = "Don't count on it."
let outLookNotSoGood = "Outlook not so good."


function askQuestion() {
    let question1 = document.getElementById("question").value;
    
    if (question1 === "Is JavaScript awesome?") {
        document.getElementById("output").innerHTML = ofCourse;
    } else if (question1 === "") {
        document.getElementById("output").innerHTML = pleaseAsk;
    }
    let randnum = Math.random();
    if (randnum < 0.2) {
       output.innerHTML = withoutADoubt
    } else if (randnum > 0.2 && randnum < 0.4) {
        output.innerHTML = asISeeItYes
    } else if (randnum > 0.4 && randnum < 0.6) {
        output.innerHTML = askAgain
    } else if (randnum > 0.6 && randnum < 0.8) {
      output.innerHTML = dontCountOnIt
    } else if (randnum > 0.8 && randnum < 1) {
        //output.innerHTML = outLookNotSoGood
    }
}