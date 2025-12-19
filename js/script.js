// Language Toggle
const langButtons = document.querySelectorAll('.lang-btn');
const langContents = document.querySelectorAll('.lang-content');

function updateLanguage(selectedLang) {
    // Update content visibility
    langContents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(selectedLang)) {
            content.classList.add('active');
        }
    });

    // Update modal links visibility
    const modalLinks = document.querySelectorAll('.modal-link');
    modalLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(selectedLang)) {
            link.classList.add('active');
        }
    });

    // Update hobby links visibility
    const hobbyLinks = document.querySelectorAll('.hobby-link');
    hobbyLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(selectedLang)) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
updateLanguage('en');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');

        // Update active button
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update language
        updateLanguage(selectedLang);
    });
});

// Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize - hide all content on page load, but keep all tabs black
tabContents.forEach(content => content.classList.remove('active'));

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (!btn.classList.contains('tab-separator')) {
                btn.classList.add('inactive');
            }
        });
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        button.classList.remove('inactive');
        document.getElementById(tabName).classList.add('active');
    });
});

// Project Modal
const projectLogos = document.querySelectorAll('.project-logo');
const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');

projectLogos.forEach(logo => {
    logo.addEventListener('click', () => {
        const projectNum = logo.getAttribute('data-project');
        const modal = document.getElementById(`projectModal${projectNum}`);
        modal.classList.add('active');
    });
});

modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modal = btn.closest('.modal');
        modal.classList.remove('active');
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// PDF Modal
const certPdfButtons = document.querySelectorAll('.cert-pdf-btn');
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');
const pdfModalClose = document.querySelector('.pdf-modal-close');

certPdfButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const pdfFile = btn.getAttribute('data-pdf');
        pdfViewer.src = `pdfs/${pdfFile}`;
        pdfModal.classList.add('active');
    });
});

pdfModalClose.addEventListener('click', () => {
    pdfModal.classList.remove('active');
    pdfViewer.src = '';
});

pdfModal.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
        pdfModal.classList.remove('active');
        pdfViewer.src = '';
    }
});

// Hobby Image Shuffle
const hobbyImages = document.querySelectorAll('.hobby-image');
const hobbyGrid = document.getElementById('hobbyGrid');
const imageArray = Array.from(hobbyImages);

function shuffleImages() {
    // Fade out all images
    imageArray.forEach(img => {
        img.style.opacity = '0';
    });

    // Wait for fade out, then shuffle
    setTimeout(() => {
        // Create array of image sources
        const sources = imageArray.map(img => img.src);

        // Shuffle sources array
        for (let i = sources.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sources[i], sources[j]] = [sources[j], sources[i]];
        }

        // Apply shuffled sources to images
        imageArray.forEach((img, index) => {
            img.src = sources[index];
        });

        // Fade in all images
        imageArray.forEach(img => {
            img.style.opacity = '1';
        });
    }, 250);
}

// Shuffle every 5 seconds
setInterval(shuffleImages, 5000);

