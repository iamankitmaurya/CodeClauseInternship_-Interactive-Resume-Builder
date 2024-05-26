function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const profilePicture = document.getElementById('profilePicture').value;

    // Validate required fields
    if (!fullName || !email || !phone || !summary || !experience || !education) {
        alert('Please fill in all required fields.');
        return;
    }

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <div class="resume-header">
            <div class="profile-picture">
                <img src="${profilePicture || 'placeholder.jpg'}" alt="Profile Picture">
            </div>
            <div class="header-details">
                <h2>${fullName}</h2>
                <p>${email} | ${phone}</p>
                <p>${address}</p>
            </div>
        </div>
        <div class="resume-section">
            <h3>Summary</h3>
            <p>${summary}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
    `;
}
