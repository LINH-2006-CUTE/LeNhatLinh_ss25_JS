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
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        else if (char >= 'a' && char <= 'z') hasLowerCase = true;
        else if (char >= '0' && char <= '9') hasNumber = true;

        if (hasUpperCase && hasLowerCase && hasNumber){
            return true;
        } 
    }
    
    return false;
}

    
    // if (hasUpperCase && hasLowerCase && hasNumber) {
    //     return true;
    //  }


//Kiểm tra 
console.log(isStrongPassword("Abc123!@")); 
console.log(isStrongPassword("weakpass")); 
