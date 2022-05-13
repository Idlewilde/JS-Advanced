function validate() {
    document.getElementById('submit').addEventListener('click', entryValidation);
    let checkbox = document.getElementById('company');
    checkbox.addEventListener('change', showCompany);
    let companyInfo = document.getElementById('companyInfo');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let confirmPass = document.getElementById('confirm-password');
    let companyNumber = document.getElementById('companyNumber');

    function showCompany(event) {
        event.preventDefault();
        if (checkbox.checked) {
            companyInfo.style.display = 'block'
        } else {
            companyInfo.style.display = 'none'
        };
    }

    function entryValidation(event) {
        event.preventDefault();
        let userNameCheck = true;
        let validChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < username.value.length; i++) {
            if (!validChars.includes(username.value.charAt(i))) { userNameCheck = false; break; }
        }

        if (username.value.length < 3 || username.value.length > 20) { userNameCheck = false; }
        if (userNameCheck) { username.style.border = 'none'; } else { username.style.borderColor = "red"; }

        let emailCheck = false;
        let index1 = 0;
        let index2 = 0;
        if (email.value.includes('@') && email.value.includes('.')) {
            for (let i = 0; i < email.value.length; i++) {
                if (email.value.charAt(i) == '@') { index1 = i; break; }
            }
            for (let i = 0; i < email.value.length; i++) {
                if (email.value.charAt(i) == '.') { index2 = i };
            }
            if (index1 < index2) { emailCheck = true; }
        }
        if (emailCheck) { email.style.border = 'none' } else { email.style.borderColor = "red"; }

        let passCheck = true;
        let validCharsPass = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_'];

        for (let i = 0; i < pass.value.length; i++) {
            if (!validCharsPass.includes(pass.value.charAt(i))) { passCheck = false; break; }
        }

        for (let i = 0; i < confirmPass.value.length; i++) {
            if (!validCharsPass.includes(confirmPass.value.charAt(i))) { passCheck = false; break; }
        }

        if (pass.value != confirmPass.value) { passCheck = false; }
        if (pass.value.length < 5 || pass.value.length > 15 || confirmPass.value.length < 5 || confirmPass.value.length > 15) { passCheck = false; }
        if (passCheck) {
            pass.style.border = 'none'; confirmPass.style.border = 'none';
        } else {
            pass.style.borderColor = "red"; confirmPass.style.borderColor = "red";
        }

        let companyInfoCheck = true;
        if (checkbox.checked) {
            if ((Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999)) {
                companyInfoCheck = false; companyNumber.style.borderColor = "red";
            }
            else { companyNumber.style.border = "none"; }

        }

        if (emailCheck && userNameCheck && passCheck && companyInfoCheck) { document.getElementById('valid').style.display = 'block' }
        else { document.getElementById('valid').style.display = 'none' }


    }
}
