// Palindrome (Chuỗi đối xứng) là một chuỗi đọc xuôi hay ngược đều giống nhau.

// 🔹 Ví dụ chuỗi đối xứng
// ✅ "madam" → Đọc từ trái sang phải hay từ phải sang trái đều là "madam"
// ✅ "racecar" → Đọc xuôi hay ngược đều giống nhau
// ✅ "12321" → Đảo ngược vẫn là "12321"

// 🔸 Ví dụ chuỗi không đối xứng
// ❌ "hello" → Đọc ngược lại thành "olleh", khác với chuỗi ban đầu
// ❌ "world" → Đọc ngược lại không giống "world"

// 💡 Ứng dụng của chuỗi đối xứng (Palindrome)

// Kiểm tra dữ liệu đầu vào trong lập trình
// Kiểm tra số đối xứng (như số 121, 1331, 12321)
// Ứng dụng trong thuật toán và bảo mật





/**
 * Kiểm tra xem chuỗi có phải là chuỗi đối xứng (palindrome) hay không.
 * @param {string} str  Chuỗi cần kiểm tra
 * @returns {boolean} Kiểm tra chuỗi đối xứng không
 * Auth: Linhxinh (11/03/2025)
 */
function isPalindrome(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        //So sánh ký tự từ đầu và ký tự từ cuối (*****)
        if (str[i] !== str[length -1-i]) { //Lấy vị trí đối diện từ cuối ( ktr xem khớp k)
            return false;//Nếu không khớp-> không phải là palindrome
        }
    }
    return true; 
}

//Nhập chuỗi 
const ans = prompt("Nhập vào một chuỗi :");

//Kiểm tra 
if (isPalindrome(ans)) {
    alert("Là chuỗi đối xứng");
} else {
    alert("Không phải là chuỗi đối xứng");
}