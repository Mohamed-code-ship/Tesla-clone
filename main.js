// Get references to the Menu button and Close button
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.querySelector('aside button.close');

// Function to open the menu
const openMenu = () => {
  document.querySelector('.backdrop').classList.add('active');
  document.querySelector('aside').classList.add('active');
};

// Function to close the menu
const closeMenu = () => {
  document.querySelector('.backdrop').classList.remove('active');
  document.querySelector('aside').classList.remove('active');
  
  
};

// Add event listener to the Menu button
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});
document.querySelector('.backdrop').onclick = e =>{
    closeMenu();
}

// Add event listener to the Close button
closeBtn.addEventListener('click', closeMenu);





