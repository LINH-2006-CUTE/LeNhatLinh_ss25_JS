/**
 * Kiểm tra mật khẩu có  mạnh hay không
 * @param {string} password Mật khẩu cần kiểm tra
 * @returns {boolean} Trả về true nếu mật khẩu mạnh/ trả về false
 * Auth: Linhxinh (11/03/2025)
 */
function isStrongPassword(password) {
    //Kiểm tra độ dài 
    if (password.length < 8) {
        return false;
    }
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    //Duyệt qua từng ký tự trong chuỗi
    for (let char of password) {
        if (/[A-Z]/.test(char)) {
            hasUpperCase = true; //Có chữ hoa
        } else if (/[a-z]/.test(char)) {
            hasLowerCase = true; //Có chữ thường
        } else if (/[0-9]/.test(char)) {
            hasNumber = true; //Có số
        }

    }
    if (hasUpperCase && hasLowerCase && hasNumber) {
        return true;
     }
}

//Kiểm tra 
console.log(isStrongPassword("Abc123!@")); 
console.log(isStrongPassword("weakpass")); 
