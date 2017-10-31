//backend//
function Money(deposit, withdrawal, initial){
  this.initial = initial;
  this.withdrawal = withdrawal;
  this.deposit = deposit;
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
debugger;
    if (isNaN(withdrawal)) {
      withdrawal = 0;
    }

    if (isNaN(deposit)) {
      deposit = 0;
    }

    var newMoney = new Money(deposit, withdrawal, initial);


    $('#result').text("Your balance is: " + newMoney.credit() + "!");

    event.preventDefault();

  });
});
