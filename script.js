'use strict';

// VARIABLES
const shareBtnOpen = document.getElementById('share-icon-1');
const shareBtnClose = document.getElementById('share-icon-2');

const socialSection = document.querySelector('.social-section');
const profileSection = document.querySelector('.profile-section');
// console.log(shareBtnOpen);
// Event Listener

shareBtnOpen.addEventListener('click', function (){
    profileSection.classList.add('hidden');
    socialSection.classList.remove('hidden');
})

shareBtnClose.addEventListener('click', function(){
    socialSection.classList.add('hidden');
    profileSection.classList.remove('hidden');
})

