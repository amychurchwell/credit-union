//backend//
function Money(deposit, withdrawal, initial){
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit = deposit;
}

Money.prototype.credit = function(){
  if((withdrawal != 0) && (deposit.length === 0)){
    return this.initial - this.withdrawal;
  }else if((deposit != 0) && (withdrawal.length === 0)){
    return this.initial + this.deposit;
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
    var deposit = $('#deposit').val();
    var withdrawal = $('#withdrawal').val();
    var initial = $('#initial').val();

    var newMoney = new Money(deposit, withdrawal, initial);


    $('#result').append("Your balance is: " + newMoney.subtract());

    event.preventDefault();

  });
});
