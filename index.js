let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn"); 
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO= true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        // console.log("button is clicked");
        if(turnO === true) {         // we can write like this also: if(turnO) only insted of turnO === true
        box.innerText = "O";
        box.classList.add("O-style");
        turnO= false;
        } else {
            box.innerText ="X";
            box.classList.add("X-style");
            turnO= true;
        }   
        box.disabled = "true";     
        checkWinner ();   
        
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations! the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for (let pattern of winPatterns) {
       /* console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
        boxes[pattern[0]].innerText,
        boxes[pattern[1]].innerText,
        boxes[pattern[2]].innerText);  */

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};  

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);    

