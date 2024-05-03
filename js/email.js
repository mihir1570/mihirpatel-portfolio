// function sendEmail() {
//     // Getting form data
//     const fullName = document.getElementById('full-name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phoneNumber = document.getElementById('phone-number').value.trim();
//     const subject = document.getElementById('subject').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Phone number validation regex for Indian numbers
//     const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

//     // Form validation
//     if (!fullName || !subject || !emailRegex.test(email) || (phoneNumber && !phoneRegex.test(phoneNumber))) {
//         alert('Please fill in all required fields correctly.');
//         return;
//     }

//     // Email sending
//     Email.send({
//         SecureToken: "78b96a57-3059-4bfd-a083-4a3355123550",
//         To: 'mihirpatel6pg6@gmail.com',
//         From: 'mihirpatel6pg6@gmail.com',
//         Subject: `Inquiry Received from ${fullName} via Your Portfolio`,
//         Body: `
//         <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; border: 2px solid #3498db; /* Blue border */ box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
//             <h1 style="color: #333; text-align: center; margin-bottom: 20px;">New Inquiry Received from Your Portfolio</h1>
//             <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 20px;">
//                 <div style="font-size: 18px; color: #333; margin-bottom: 10px;">Contact Details</div>
//                 <div style="margin: 10px 0; color: #555;"><strong>Name:</strong> ${fullName}</div>
//                 <div style="margin: 10px 0; color: #555;"><strong>Email:</strong> ${email}</div>
//                 <div style="margin: 10px 0; color: #555;"><strong>Phone:</strong> ${phoneNumber}</div>
//                 <div style="margin: 10px 0; color: #555;"><strong>Subject:</strong> ${subject}</div>
//             </div>
//             <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 20px;">
//                 <div style="font-size: 18px; color: #333; margin-bottom: 10px;">Message</div>
//                 <div style="margin: 10px 0; color: #333;">${message}</div>
//             </div>
//             <div style="margin-top: 20px; text-align: center; color: #777;">
//                 <p>© 2024 Mihir Patel. All Rights Reserved</p>
//             </div>
//         </div>
//     `
//     }).then(
//         () => {
//             // Display success message
//             alert('Your message was sent successfully.');
//             // Reset form
//             document.getElementById('full-name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('phone-number').value = '';
//             document.getElementById('subject').selectedIndex = 0;
//             document.getElementById('message').value = '';
//         },
//         error => {
//             // Display error message
//             alert('There was an error sending your message. Please try again later.');
//             console.error('Error:', error);
//         }
//     );
// }















function sendEmail() {
    // Getting form data
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone number validation regex for Indian numbers
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

    // Form validation
    if (!fullName && !email && !phoneNumber && !subject && !message) {
        showToast('success', 'Your message was sent successfully.');
        return;
    }
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
        alert('Message should be maximum 1000 characters.');
        return;
    }

    // Email sending
    Email.send({
        SecureToken: "78b96a57-3059-4bfd-a083-4a3355123550",
        To: 'mihirpatel6pg6@gmail.com',
        From: 'mihirpatel6pg6@gmail.com',
        Subject: `Inquiry Received from ${fullName} via Your Portfolio`,
        Body: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; border: 2px solid #3498db; /* Blue border */ box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #333; text-align: center; margin-bottom: 20px;">New Inquiry Received from Your Portfolio</h1>
            <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 20px;">
                <div style="font-size: 18px; color: #333; margin-bottom: 10px;">Contact Details</div>
                <div style="margin: 10px 0; color: #555;"><strong>Name:</strong> ${fullName}</div>
                <div style="margin: 10px 0; color: #555;"><strong>Email:</strong> ${email}</div>
                ${phoneNumber ? `<div style="margin: 10px 0; color: #555;"><strong>Phone:</strong> ${phoneNumber}</div>` : ''}
                <div style="margin: 10px 0; color: #555;"><strong>Subject:</strong> ${subject}</div>
            </div>
            <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 20px;">
                <div style="font-size: 18px; color: #333; margin-bottom: 10px;">Message</div>
                <div style="margin: 10px 0; color: #333;">${message}</div>
            </div>
            <div style="margin-top: 20px; text-align: center; color: #777;">
                <p>© 2024 Mihir Patel. All Rights Reserved</p>
            </div>
        </div>
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

