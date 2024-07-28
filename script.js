function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();


  // Get references
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to menu toggle
menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  this.classList.toggle('active');
});


// // Get references
// const overlay = document.querySelector('.overlay');
// const yesBtn = document.querySelector('.yes-btn');

// // Function to hide the overlay
// function hideOverlay() {
//   overlay.style.display = 'none';
// }

// // Show the overlay on every page load
// overlay.style.display = 'flex';
// // const myTimeout = setInterval(displayOverlay,4000)
// // function displayOverlay(){
    
// // }





// let visitorName; //Name of the visitors
// // Add click event listener to the "OK" button
// yesBtn.addEventListener('click', ()=>{
//     hideOverlay();
//     visitorName = window.prompt("Register Yourself as a Visitor of AETHERIA");
//     while (!visitorName) {
//         alert(" Register Yourself first");
//         visitorName = window.prompt("Register Yourself as a Visitor");
//     }
    
//     // window.alert(`Hello ${visitorName}`)
//     // window.location.href = "iss.html"
    

// });


