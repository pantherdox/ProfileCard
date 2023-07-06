const inputName = document.getElementById('name-text');
const inputUser = document.getElementById('user-text');
const inputBio = document.getElementById('bio-text');
const myName = document.getElementById('myName');
const myUser = document.getElementById('myUser');
const myBio = document.getElementById('myBio');

function addName(){
    if(inputName.value === ''){
        return;
    }

    else{
        myName.innerHTML = inputName.value;
    }
}

function addUser(){
    if(inputUser.value === ''){
        return;
    }

    else{
        myUser.innerHTML = inputUser.value;
    }
}

function addBio(){
    if(inputBio.value === ''){
        return;
    }

    else{
        myBio.innerHTML = inputBio.value;
    }
}

let profilePic = document.getElementById('profilePic');
let inputProfilePic = document.getElementById('img-input');

inputProfilePic.onchange = function(){
    profilePic.src = URL.createObjectURL(inputProfilePic.files[0]);
}