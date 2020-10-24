let swichButton = document.querySelector(".toggle_btn_green");
swichButton.addEventListener("click", showTurnOffDisplay);

function showTurnOffDisplay(){
let turnOn = document.querySelector(".pop_up_header_right_path-turnOn");
let turnOff = document.querySelector(".pop_up_header_right_path-turnOff");

turnOn.style.display="none";
turnOff.style.display="flex";
};

let chooseCardIcon = document.querySelector(".choose_card--close-icon");
let closeDropdownButton = document.querySelector(".close_dropdown");
chooseCardIcon.addEventListener("click", showDropdown);
closeDropdownButton.addEventListener("click", closeDropdown);

  let chooseCard = document.querySelector(".information_bankCards_choose_card")
let chooseCardDropdown= document.querySelector(".information_bankCards_choose_card--dropdown");

function showDropdown(){
chooseCard.style.visibility="collapse";
chooseCardDropdown.style.display="flex";
};

function closeDropdown(){
chooseCard.style.visibility="visible";
chooseCardDropdown.style.display="none";
}

let cardCloseButton = document.querySelector(".close");
cardCloseButton.addEventListener("click", deleteCard);

function deleteCard(){
  let payCard = document.querySelector(".card_pay");
  let deleteCard = document.querySelector(".delete_card");
payCard.style.display="none";
deleteCard.style.display="flex";
}


//delete card successful

let confirmOnDelete = document.querySelector(".delete_card_confirm");
confirmOnDelete.addEventListener("click", cardDeleteSuccessful);

function cardDeleteSuccessful() {
let payCard = document.querySelector(".card_pay");
  let deleteCard = document.querySelector(".delete_card");
  let deleteSuccess = document.querySelector(".card_delete_successful");
  let deleteUnsuccess= document.querySelector(".card_delete_unsuccessful");
let cardDeleteValue= document.getElementById("card-delete-value");
  if (cardDeleteValue.value == 1) {
    document.querySelector(".delete_card_input").classList.add("input-selector")

cardDeleteValue.style.border="1px solid #E20D00";

  } else if (cardDeleteValue.value == 2){
    payCard.style.display="none";
    deleteCard.style.display="none";
    deleteSuccess.style.display="flex"
  }   
  else {
        payCard.style.display="none";
    deleteCard.style.display="none";
    deleteUnsuccess.style.display="flex"
  }
}
let replenishBUtton = document.querySelector(".information_bankCards_replenish");
replenishBUtton.addEventListener("click", addAttentionSms);

function addAttentionSms(){

  let inncorrect = document.querySelector(".information_bankCards_amount");
  let inputValue= document.querySelector(".attention_sms_input");
   if(inputValue.value!==0){     
    inncorrect.classList.add("attention_sms");
  }
}

let smsSendButton = document.querySelector(".bankCards_btns_input-sms");
let confirmSmsInput= document.querySelector(".confirm_button_input");
smsSendButton.addEventListener("click", smsSend);
let smsSent = document.querySelector(".bankCards_btns_sms_button");
let confirmbutton = document.querySelector(".bankCards_btns__confirm");
confirmbutton.addEventListener("click", incorretCode)

confirmSmsInput.onfocus= function() {
   smsSent.classList.remove("sms_has_sent");
 };

function smsSend (){
  smsSent.setAttribute("data-title", "sms კოდი გამოგზავნილია");
     smsSent.classList.remove("sms_has_sent--red");
     confirmSmsInput.value="";
         confirmbutton.style.backgroundColor="#3e42b5"
   smsSent.classList.add("sms_has_sent");
 }

 function incorretCode() {
   if(confirmSmsInput.value!=0) {

      smsSent.setAttribute("data-title", "sms კოდი არასწორია");
      smsSent.classList.add("sms_has_sent--red");
      confirmbutton.style.backgroundColor="#9A9DA1"
   }
 }


 