// var ShowPassword = document.getElementById('showPassword');
// var passWordInput = document.getElementById('passWord');


// function viewPassword(){

//      if (passWordInput.type == 'password'){
//     passWordInput.type = 'text';
//     ShowPassword.className = 'fa fa-eye-slash';
// }
  
//     else{
//     passWordInput.type = 'password';
//     ShowPassword.className = 'fa fa-eye';
// }
// }

// function validatePassword(){
//     var validationComment = document.getElementById('validation-text');
//     var passWord = document.getElementById('passWord');
//     var contents = password.value;
//     var errors = [];
//     console.log(contents);

//     if (contents.length < 8){
//         errors.push = ("Your password must be at least 8 characters");
//     }
//     if (contents.search(/[a-z]/i) < 0 ){
//         errors.push = ("Your password must contain at least one letter.");
//     }
//     if (contents.search(/[0-9]/i) < 0 ){
//         errors.push = ("Your password must contain at least one digit.")
//     }

    // if (errors.length > 0){
    //     validationComment.innerHTML = errors.join(',');
    //     return false;
    // }
    // validationComment.innerHTML = errors.join(',');
    // return true;

// }

function sponsorID(){
    var IDvalue= math.floor(math.random()*10 +1);
   var ID = document.getElementById('ID');
   var SponsorName=document.getElementById('SponsorName');
  ID.value = IDvalue ;
}
