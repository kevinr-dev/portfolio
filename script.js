document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.switch-button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the target section
            const targetSection = document.getElementById(target);
            targetSection.classList.remove('hidden');
        });
    });

    const button = document.getElementById('mobile-button');
    const mobileNav = document.getElementById('mobile-nav');
    const img1 = document.getElementById('mobile-button-img-1');
    const img2 = document.getElementById('mobile-button-img-2');

    button.addEventListener('click', function() {
        button.classList.toggle('pulse');
        mobileNav.classList.toggle('active');
        img1.classList.toggle('hidden');
        img2.classList.toggle('hidden');



        setTimeout(() => {
            button.classList.remove('pulse');
        }, 1000);
    });

    const itemList = document.getElementById('mobile-list');
    itemList.addEventListener('click', function(event) {
        if(event.target.tagName === 'A') {
            mobileNav.classList.toggle('active');
            img1.classList.toggle('hidden');
            img2.classList.toggle('hidden');
        }
    });
});

function setActive(element) {
    // Remove active class from all boxes
    const boxes = document.querySelectorAll('.switch-button');
    boxes.forEach(box => {
        box.classList.remove('active');
    });

    // Add active class to the clicked box
    element.classList.add('active');
}

