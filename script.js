// Function to hide the banner
function hideBanner() {
    const banner = document.getElementById('alert-banner');

  // Wait 5000ms (5 seconds) then add the 'hidden' class
    setTimeout(() => {
    banner.classList.add('hidden');
    
    // Optional: Completely remove from DOM after fade finishes
    setTimeout(() => {
        banner.style.display = 'none';
    }, 3000); 
}, 5000);
}

// Run the function
hideBanner();