// script.js for claim form
document.getElementById("claimForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const policyNumber = document.getElementById("policyNumber").value;
    const policyType = document.getElementById("policyType").value;
    const claimAmount = document.getElementById("claimAmount").value;
    const incidentDate = document.getElementById("incidentDate").value;
    const filingDate = document.getElementById("filingDate").value;
    const description = document.getElementById("description").value;
    
    // Validation
    if (!policyNumber || !policyType || !claimAmount || !incidentDate || !filingDate || !description) {
        alert("Please fill in all fields");
        return;
    }
    
    // Claim amount validation
    if (claimAmount <= 0) {
        alert("Claim amount must be greater than 0");
        return;
    }
    
    // Date validation
    if (new Date(incidentDate) > new Date()) {
        alert("Incident date cannot be in the future");
        return;
    }
    
    if (new Date(filingDate) < new Date(incidentDate)) {
        alert("Filing date cannot be before incident date");
        return;
    }
    
    // Description length validation
    if (description.length < 20) {
        alert("Please provide a more detailed description (at least 20 characters)");
        return;
    }
    
    // If all validations pass
    alert("Claim Submitted Successfully!\n\nPolicy Number: " + policyNumber + "\nClaim Amount: $" + claimAmount + "\nStatus: Under Review");
    
    // Here you would typically send data to server
    console.log({
        policyNumber, policyType, claimAmount, incidentDate, filingDate, description
    });
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel? All entered data will be lost.")) {
        document.getElementById("claimForm").reset();
    }
});
