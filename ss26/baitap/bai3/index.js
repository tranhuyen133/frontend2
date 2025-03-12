function filterValidEmails(emailList) {
    if (!Array.isArray(emailList) || emailList.some(email => typeof email !== "string")) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let validEmails = emailList.filter(email => email.includes("@") && !email.includes(" "));

    console.log("Email hợp lệ:", validEmails);
}

// Test cases
filterValidEmails(["example@gmail.com", "invalid email@domain.com", "user@yahoo.com", "test@outlook.com", "wrong@ email.com"]);
