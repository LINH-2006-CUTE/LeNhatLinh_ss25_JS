/**
 * Biến ký tự đầu tiên của mỗi từ thành chữ in hoa.
 * @param {string} str Chuỗi cần chuyển đổi.
 * @returns {string}Chuỗi với ký tự đầu tiên của mỗi từ được chuyển thành chữ in hoa
 * Auth: Linhxinh (11/03/2025)
 */
//Nhập chuỗi từ người dùng
const inputString = "hello WORLD .rIKKei acaDEMy";

//Chia chuỗi thành mảng các từ
const words = inputString.split(' ');

//Biến ký tự đầu tiên của mỗi từ thành chữ in hoa
for (let i = 0; i < words.length; i++) {
    if (words[i]) { //Kiểm tra từ vtri i
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); //Dùng slice  để cắt một phần của chuỗi hoặc mảng mà không làm thay đổi giá trị gốc
        // words[i][0] lấy kí tự đầu tiên của chuỗi
        //Cộng chuỗi  và cho viết chữ  đầuin hoa 
    }
}

//Ghép lại thành chuỗi
const result = words.join(' ');

//In kết quả
console.log(result);