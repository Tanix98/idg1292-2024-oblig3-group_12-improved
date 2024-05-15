// Scroll buttons for keyboard users

// Get the id for the current section on screen
const sections = document.querySelectorAll('.section');
function setCurrentSection() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio === 1) {
                /* Get the currently visible section's id, 
                cut everything except the last character, 
                store in localStorage */
                localStorage.setItem(
                    'currentSectionId',
                    entry.target.id.substring(8, 9)
                );
                console.log(entry.target.id);
            }
        });
    });
    sections.forEach((section) => {
        observer.observe(section);
    });
}

// Scroll up or down depending on which button is clicked
const scrollUpBtn = document.querySelector('#scroll-up-btn');
const scrollDownBtn = document.querySelector('#scroll-down-btn');
scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setCurrentSection();
    let currentSectionId = localStorage.getItem('currentSectionId');
    // converts the type from string to number, subtracts by one
    const previousSectionId = Number(currentSectionId) - 1;
    // Merge into new section id
    const previousSection = '#section-' + previousSectionId;
    console.log('previousSection ' + previousSection);
    document.querySelector(previousSection).scrollIntoView({
        behavior: 'smooth',
    });
    // Disable when at top of the page
    if (currentSectionId === 'section-2') {
        scrollUpBtn.disabled = true;
    } else {
        scrollUpBtn.disabled = false;
    }
    // Clear currentSectionId
    currentSectionId = '';
    localStorage.removeItem('currentSectionId');
});
scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setCurrentSection();
    let currentSectionId = localStorage.getItem('currentSectionId');
    // converts the type from string to number, increments by one
    const nextSectionId = Number(currentSectionId) + 1;
    const nextSection = '#section-' + nextSectionId;
    // Merge into new section id
    console.log('nextSection ' + nextSection);
    document.querySelector(nextSection).scrollIntoView({
        behavior: 'smooth',
    });
    // Disable when at bottom of the page
    if (currentSectionId === 'section-7') {
        scrollDownBtn.disabled = true;
    } else {
        scrollDownBtn.disabled = false;
    }
    // Clear currentSectionId
    currentSectionId = '';
    localStorage.removeItem('currentSectionId');
});
