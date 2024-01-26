function purchase(){
    let firstName = prompt("Your name please🙏");
    let emailAddress = prompt(" and email address?😊");

    alert("Thank very much " + firstName + "😄 we have just sent the magazine via " + emailAddress + " ...happy reading!💃" )
}
let Button = document.querySelector("button");
Button.addEventListener("click", purchase);
