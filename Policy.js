// script.js for policy form
document.getElementById("policyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const customerName = document.getElementById("customerName").value;
    const policyNumber = document.getElementById("policyNumber").value;
    const policyType = document.getElementById("policyType").value;
    const premiumAmount = document.getElementById("premiumAmount").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const coverageAmount = document.getElementById("coverageAmount").value;
    const status = document.getElementById("status").value;
    
    // Validation
    if (!customerName || !policyNumber || !policyType || !premiumAmount || !startDate || !endDate || !coverageAmount || !status) {
        alert("Please fill in all fields");
        return;
    }
    
    // Date validation
    if (new Date(startDate) > new Date(endDate)) {
        alert("End date must be after start date");
        return;
    }
    
    // Premium validation
    if (premiumAmount < 100 || premiumAmount > 10000) {
        alert("Premium amount must be between $100 and $10,000");
        return;
    }
    
    // If all validations pass
    alert("Policy Created Successfully!\n\nPolicy Number: " + policyNumber + "\nCustomer: " + customerName + "\nPremium: $" + premiumAmount);
    
    // Here you would typically send data to server
    console.log({
        customerName, policyNumber, policyType, premiumAmount, startDate, endDate, coverageAmount, status
    });
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel? All entered data will be lost.")) {
        document.getElementById("policyForm").reset();
    }
});
