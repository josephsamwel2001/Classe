// script.js
document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const nationalId = document.getElementById("nationalId").value;
    const nationality = document.getElementById("nationality").value;
    const address = document.getElementById("address").value;
    const policyType = document.getElementById("policyType").value;
    
    // Form validation
    if (!fullName || !dob || !gender || !email || !phone || !nationalId || !nationality || !address || !policyType) {
        alert("Please fill in all fields");
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
    
    // Phone validation (simple)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert("Please enter a valid phone number (at least 10 digits)");
        return;
    }
    
    // If all validations pass
    alert("Registration Successful!\n\nCustomer: " + fullName + "\nPolicy Type: " + policyType);
    
    // Here you would typically send data to server
    console.log({
        fullName, dob, gender, email, phone, nationalId, nationality, address, policyType
    });
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel? All entered data will be lost.")) {
        document.getElementById("customerForm").reset();
    }
});
