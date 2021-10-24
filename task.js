function fn(){
      var inputVal = document.getElementById('input1')
      var buttonVal = document.getElementById('button1')
      var typeVal = inputVal.type
      if(typeVal === 'password'){
            inputVal.type = "text"
            buttonVal.innerText = "Hide Password"
      }
      else{
              inputVal.type = "password"
              buttonVal.innerText = "Show Password"
      }
  }