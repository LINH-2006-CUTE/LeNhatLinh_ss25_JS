/**
 * Tìm các số nguyên tố trong mảng
 * @param {Array} arr Mảng các số nguyên
 * @returns {Array|string} Mảng số nguyên tố 
 * Auth: Linhxinh (11/03/2025)
 */
function findPrimeNumber(arr) {
    // Kiểm tra xem đầu vào có phải là mảng không
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }
    const primeNumbers = []; //Mảng để lưu trữ các số nguyên tố

    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        let isPrime = true; //Biến kiểm tra số nguyên tố

        //Kiểm tra số nguyên tố 
        if (n < 2) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(n); j++) {
                if (n % j === 0) {
                    isPrime = false;
                    break; 
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(n); //Thêm số nguyên tố vào  cuối mảng
        }
    }

    //Kiểm tra xem có số nguyên tố nào không
    if (count === 0) {
        return "Không có số nguyên tố trong mảng";
    }
    return count;
}

// Gọi hàm và kiểm tra
console.log(findPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(findPrimeNumber([])); 
console.log(findPrimeNumber("abc")); 

