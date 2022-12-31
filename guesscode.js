var password = "2752";

function passcheck() {

if(document.getElementById('pass1').value != password) {
alert('Wrong password, try again!');
return false;
}

if(document.getElementById('pass1').value == password) {
alert('Correct password! Click OK to enter!');
}
}

function resetInput() {
    document.getElementById('password-input').value = '';
  }