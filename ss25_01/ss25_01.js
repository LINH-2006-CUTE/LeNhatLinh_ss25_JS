function findMinValue(arr) {
    if (!Array.isArray(arr)) {
        return "giá trị không hợp lệ";
    }
    if (arr.length === 0) {
        return "mảng không chứa phần tử";
    }
    let min = Math.min(...arr);
    return `phần tử nhỏ nhất trong mảng là ${min}`;
}

// Kiểm tra 
console.log(findMinValue([2, 4, 8, 1, 9])); 
console.log(findMinValue([])); 
console.log(findMinValue("abc")); 
console.log(findMinValue([5, 2, 7, 5, 4])); 
