function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function validatePhoneNumber(mobile) {
  const phonePattern = /^\d{10}$/; // This pattern checks for 10 digits (change as needed for your use case)
  return phonePattern.test(mobile);
}


function submitForm() {
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Check if all fields are filled
    if (
        firstName === "" ||
        lastName === "" ||
        dob === "" ||
        country === "" ||
        gender.length === 0 ||
        profession === "" ||
        email === "" ||
        mobile === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
      alert("Please enter valid email.");
      return;
    }
    if (!validatePhoneNumber(mobile)) {
      alert("Please enter valid number.");
      return;
    }


    // Display results in a popup
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${Array.from(gender, g => g.value).join(", ")}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
        <p>ValidateEmail: ${validateEmail(email)}</p>
        <p>ValidatePhoneNumber: ${validatePhoneNumber(mobile)}</p>
    `;
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function resetForm() {
    const form = document.getElementById("survey-form");
    form.reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
