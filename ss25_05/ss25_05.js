/**
 * Đếm số lượng số nguyên dương trong mảng 
 * @param {Array} arr  Mảng chứa các phần tử bất kỳ
 * @returns {number|string}  Số lượng số nguyên dương 
 * Auth: Linhxinh (11/03/2025)
 */
function countPositiveIntegers(arr) {
    //Kiểm tra xem đầu vào có phải là mảng không
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }

    let count = 0; //Biến đếm số nguyên dương

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++; 
        }
    }

    //Kiểm tra kết quả
    if (count === 0) {
        return "Không có số nguyên dương trong mảng";
    }
    return count;
}

// Kiểm tra 
console.log(countPositiveIntegers([4, 5.4, 6, -2])); 
console.log(countPositiveIntegers([1, 2, 5, 7, -8, 6])); 
console.log(countPositiveIntegers([1.2, -3, -6])); 
console.log(countPositiveIntegers("abc"));
console.log(countPositiveIntegers([])); 