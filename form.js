"use strict";

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    document.querySelectorAll(".error-mess").forEach(span => span.computedStyleMap.display = "none");
    document.querySelectorAll("input").forEach(input => input.classList.remove("errorInput"));

    let fName = document.getElementById("first-name");
    if (fName.value.trim() === "") {
        fName.previousElementSibling.style.display = "block";
        fName.classList.add("errorInput");
        isValid = false;
    }

    let lName = document.getElementById("last-name");
    if (lName.value.trim() === "") {
        lName.previousElementSibling.style.display = "block";
        lName.classList.add("errorInput");
        isValid = false;
    }

    let contactPref = document.querySelector("input[name='contact-pref']:checked").id;

    let email = document.getElementById("my-email");
    if (contactPref === "email-pref" && email.value.trim() === "") {
        email.previousElementSibling.style.display = "block";
        email.classList.add("errorInput");
        isValid = false;
    }

    let phone = document.getElementById("my-phone");
    if (contactPref === "phone-pref" && phone.value.trim() === "") {
        phone.previousElementSibling.style.display = "block";
        phone.classList.add("errorInput");
        isValid = false;
    }

    let contact;
    if (contactPref === "email-pref" && email.value.trim() !== "") {
        contact = email.value.trim();
    } else {
        contact = phone.value.trim();
    }

    if (isValid) {
        const thankYou = document.getElementById("thank-you");
        thankYou.style.visibility = "visible";
        thankYou.style.opacity = "1";

        thankYou.innerHTML = `<p>Thank you, ${fName.value.trim()}! Your information has been submitted successfully and we will contact you at ${contact} soon!`;

        thankYou.classList.remove("hidden");
    }
});
