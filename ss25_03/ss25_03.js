/**
 * Tìm các số chẵn trong mảng
 * @param {Array} arr -Mảng các số nguyên
 * @returns {Array|string} Mảng các số chẵn hoặc thông báo nếu không có số chẵn
 * Auth: Linhxinh (11/03/2025)
 */
function findEvenNumber(arr) {
    //Kiểm tra xem đầu vào có phải là mảng không
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }
    //Kiểm tra xem mảng có rỗng không
    if (arr.length === 0) {
        return "Mảng rỗng";
    }
    const evenNumbers = []; //Mảng để lưu trữ các số chẵn
    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra số chẵn
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]); //Thêm số chẵn vào mảng
        }
    }

    if (evenNumbers.length === 0) {
        return "Không có số chẵn trong mảng";
    } else {
        return evenNumbers; //Trả về mảng các số chẵn
    }
}

// Gọi hàm và in kết quả
console.log(findEvenNumber([1, 2, 3, 4, 5])); 