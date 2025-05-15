document.getElementById("registrationForm").addEventListener("Submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    let errors = [];
  
    if (name === "") {errors.push("Name is required.");}
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {errors.push("Enter a valid email.");}
  
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {errors.push("Enter a valid 10-digit mobile number.");}
  
    if (!dob || new Date(dob) > new Date()) {errors.push("Enter a valid date of birth.");}
  
    if (password.length < 8) { errors.push("Password must be at least 8 characters.");
    }
    
  
    if (password !== confirmPassword) {errors.push("Passwords do not match.");}
  
    const errorMessages = document.getElementById("errorMessages");
    if (errors.length > 0) {
      errorMessages.innerHTML = errors.join("<br>");
      errorMessages.style.color = "red";
    } else {
      errorMessages.innerHTML = "Form submitted successfully!";
      errorMessages.style.color = "green";
    }
  });