//backend//
function Money(deposit, withdrawal, initial, account){
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit = deposit;
  this.account = account;
}

Money.prototype.credit = function(){

  if(this.deposit !== 0) {
    return this.initial + this.deposit;
  }else if(this.withdrawal !== 0) {
     return this.initial - this.withdrawal;
  }else{
    alert('error');
  }
}




// Money.prototype.addMoney = function(){
//   var balance = this.initial + this.deposit;
//   return balance;
// }

//front-end//
$(document).ready(function() {
  $("#form").submit(function(event) {
    var deposit = parseInt($('#deposit').val());
    var withdrawal = parseInt($('#withdrawal').val());
    var initial = parseInt($('#initial').val());
    var account = $('input[name="account"]:checked').val();

    if (isNaN(withdrawal)) {
      withdrawal = 0;
    }

    if (isNaN(deposit)) {
      deposit = 0;
    }
    debugger;
    var newMoney = new Money(deposit, withdrawal, initial, account);
    var newChecking = new Money(deposit, withdrawal, initial, account);

    $('#result-container').slideDown("slow");

    if (account === 'savings'){
      $('#result').text("Your balance is: " + newMoney.credit() + ".");
    }else if (account === 'checking'){
      $('#result-checking').text("Your balance is: " + newChecking.credit() + ".");
    }


    if (((newMoney.credit()) < 0) || (newChecking.credit()) < 0){
      $('.alert-danger').slideDown("slow");
    } else {
      $('.alert-danger').slideUp("slow");
    }

    event.preventDefault();

  });
});
