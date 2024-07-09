function sendEmail() {
    // Getting form data
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

    // Check if all fields are empty
    if (!fullName && !email && !phoneNumber && !subject && !message) {
        alert('Please fill out the form.');
        return;
    }

    // Form validation
    if (!fullName) {
        alert('Please enter your full name.');
        return;
    }
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
    }
    if (!subject) {
        alert('Please select a subject.');
        return;
    }
    if (message.length > 1000) {
        alert('Message should be a maximum of 1000 characters.');
        return;
    }

    // Get current year dynamically
    const currentYear = new Date().getFullYear();

    // Email sending
    Email.send({
        SecureToken: "78b96a57-3059-4bfd-a083-4a3355123550",
        // SecureToken: "af707083-1fb5-4947-bb77-623e483d7da8",
        To: 'mihirpatel6pg6@gmail.com',
        From: 'mihirpatel6pg6@gmail.com',
        Subject: `New Inquiry from ${fullName}`,
        Body: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Inquiry</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f7;
                    margin: 0;
                    padding: 0;
                    color: #333;
                }
                .email-wrapper {
                    width: 100%;
                    box-sizing: border-box;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e5e5e5;
                }
                .email-header {
                    background-color: #0073e6; /* Primary color */
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                }
                .email-header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .email-body {
                    padding: 20px;
                    line-height: 1.6;
                }
                .email-section {
                    margin-bottom: 20px;
                }
                .email-section h2 {
                    color: #0073e6;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .email-detail {
                    margin-bottom: 10px;
                }
                .email-detail strong {
                    color: #555555;
                }
                .email-message {
                    background-color: #f9f9f9;
                    padding: 15px;
                    border-radius: 5px;
                    border-left: 4px solid #0073e6;
                    font-size: 16px;
                    color: #333333;
                }
                .email-footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #f4f4f7;
                    border-top: 1px solid #e5e5e5;
                    font-size: 14px;
                    color: #777777;
                }
                .email-footer p {
                    margin: 0;
                }
                .email-footer a {
                    color: #0073e6;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <div class="email-container">
                    <div class="email-header">
                        <h1>New Inquiry from Portfolio</h1>
                    </div>
                    <div class="email-body">
                        <div class="email-section">
                            <h2>Contact Information</h2>
                            <div class="email-detail"><strong>Name:</strong> ${fullName}</div>
                            <div class="email-detail"><strong>Email:</strong> ${email}</div>
                            ${phoneNumber ? `<div class="email-detail"><strong>Phone:</strong> ${phoneNumber}</div>` : ''}
                        </div>
                        <div class="email-section">
                            <h2>Inquiry Details</h2>
                            <div class="email-detail"><strong>Subject:</strong> ${subject}</div>
                            <div class="email-message">${message}</div>
                        </div>
                    </div>
                    <div class="email-footer">
                        <p>© ${currentYear} Mihir Patel. All Rights Reserved</p>
                        <p><a href="https://mihirpatel.vercel.app/" target="_blank">My portfolio</a></p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `
    }).then(
        () => {
            // Display success message
            alert('Your message was sent successfully.');
            // Reset form
            document.getElementById('full-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone-number').value = '';
            document.getElementById('subject').selectedIndex = 0;
            document.getElementById('message').value = '';
        },
        error => {
            // Display error message
            alert('There was an error sending your message. Please try again later.');
            console.error('Error:', error);
        }
    );
}
