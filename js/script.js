// Tab functionality for the website
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content panes
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Function to show a specific tab
    function showTab(targetTab) {
        // Remove active class from all buttons and panes
        tabButtons.forEach(button => button.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to the clicked button
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Show the corresponding content pane
        const activePane = document.getElementById(targetTab);
        if (activePane) {
            activePane.classList.add('active');
        }
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            showTab(targetTab);
        });
    });
    
    // Optional: Keyboard navigation for accessibility
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let newIndex;
            
            switch(e.key) {
                case 'ArrowLeft':
                    newIndex = index > 0 ? index - 1 : tabButtons.length - 1;
                    tabButtons[newIndex].focus();
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    newIndex = index < tabButtons.length - 1 ? index + 1 : 0;
                    tabButtons[newIndex].focus();
                    e.preventDefault();
                    break;
                case 'Enter':
                case ' ':
                    this.click();
                    e.preventDefault();
                    break;
            }
        });
    });
    
    // Make tab buttons focusable for keyboard navigation
    tabButtons.forEach(button => {
        button.setAttribute('tabindex', '0');
    });
});

// Optional: Add smooth scrolling when switching tabs
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Add keyboard shortcut to cycle through tabs
document.addEventListener('keydown', function(e) {
    // Only trigger if no input elements are focused
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.ctrlKey || e.metaKey) {
            const activeButton = document.querySelector('.tab-button.active');
            const tabButtons = document.querySelectorAll('.tab-button');
            const currentIndex = Array.from(tabButtons).indexOf(activeButton);
            
            switch(e.key) {
                case 'ArrowLeft':
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabButtons.length - 1;
                    tabButtons[prevIndex].click();
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    const nextIndex = currentIndex < tabButtons.length - 1 ? currentIndex + 1 : 0;
                    tabButtons[nextIndex].click();
                    e.preventDefault();
                    break;
            }
        }
    }
}); 