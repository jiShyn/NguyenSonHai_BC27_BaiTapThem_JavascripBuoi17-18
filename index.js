var nums = [];
var res = document.getElementById("res");

function addNum() {
   var num = +document.getElementById("numInput").value;
   nums.push(num);
   res.innerHTML = `Mảng hiện tại: ${nums.join(", ")}`;
}

// 1. Tổng các số dương
function sumPositive() {
   var sum = 0;
   for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
         sum += nums[i];
      }
   }

   res.innerHTML += `<br>Tổng các số dương: ${sum}`;
}

// 2. Đếm số dương
function totalPositiveNum() {
   var count = countPositive(nums);
   res.innerHTML += `<br>Số lượng số dương: ${count}`;
}

// 3. Số nhỏ nhất
function minNum() {
   var minNum = min(nums);

   res.innerHTML += `<br>Số nhỏ nhất là: ${minNum}`;
}

// 4. Số dương nhỏ nhất
function minPositiveNum() {
   //tạo mảng mới gồm các phần tử là các số dương
   var positiveNums = [];
   for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
         positiveNums.push(nums[i]);
      }
   }

   //gọi hàm tìm số nhỏ nhất và truyền vào tham số mảng số dương
   var minPositiveNum = min(positiveNums);

   if (!minPositiveNum) {
      res.innerHTML += `<br>Mảng không có số dương gòi !!!`;
   } else {
      res.innerHTML += `<br>Số dương nhỏ nhất là: ${minPositiveNum}`;
   }
}

// 5. Số chẵn cuối cùng
function lastEvenNum() {
   for (i = nums.length - 1; i >= 0; i--) {
      if (nums[i] % 2 === 0) {
         res.innerHTML += `<br>Số chẵn cuối cùng là: ${nums[i]}`;
         return;
      }
   }
   res.innerHTML += `<br>Mảng không có số chẵn!!!`;
}

// 6. Đổi chỗ
function swap() {
   //value input người dùng nhập là số thứ tự => chuyển về chỉ mục (index) tương ứng bằng cách -1.
   var index1 = +document.getElementById("index1").value - 1;
   var index2 = +document.getElementById("index2").value - 1;

   if (
      0 <= index1 &&
      index1 < nums.length &&
      0 <= index2 &&
      index2 < nums.length
   ) {
      var x;

      x = nums[index1];
      nums.splice(index1, 1, nums[index2]);
      nums.splice(index2, 1, x);
      // nums[index1] = nums[index2];
      // nums[index2] = x;

      res.innerHTML += `<br>Mảng mới sau khi đổi là: ${nums.join(", ")}`;
   } else {
      alert("Nhập vị trí 2 số cần đổi chỗ thích hợp nhé bạn iu !!!");
   }
}

// 7. Sắp xếp tăng dần
function sortUp() {
   nums.sort(function (a, b) {
      return a - b;
   });

   res.innerHTML += `<br>Mảng sắp xếp tăng dần là: ${nums.join(", ")}`;
}

// 8. Số nguyên tố đầu tiên
function firstPrimeNum() {
   var firstPrime = -1;
   for (var i = 0; i < nums.length; i++) {
      var checkPrime = isPrime(nums[i])
      if (checkPrime) {
         firstPrime = nums[i];
         break;
      } 
   }

   res.innerHTML += `<br>Số nguyên tố đầu tiên là: ${firstPrime}`;
}

// 9. Đếm số nguyên
function countIntegerNum() {
   var count = 0;
   for (var i = 0; i < nums.length; i++) {
      if (Number.isInteger(nums[i])) {
         count++;
      }
   }
   res.innerHTML += `<br>Số lượng các số nguyên là: ${count}`;
}

// 10. So sánh số lượng số âm và số dương
function compare() {
   var totalPositiveNum = countPositive(nums);
   var totalNegativeNum = countNegative(nums);

   if (totalPositiveNum > totalNegativeNum) {
      res.innerHTML += `<br>Số lượng các số dương lớn hơn số lượng các số âm: ${totalPositiveNum} > ${totalNegativeNum}`;
   } else if (totalPositiveNum < totalNegativeNum) {
      res.innerHTML += `<br>Số lượng các số dương nhỏ hơn số lượng các số âm: ${totalPositiveNum} < ${totalNegativeNum}`;
   } else {
      res.innerHTML += `<br>Số lượng các số dương bằng  số lượng các số âm: ${totalPositiveNum} = ${totalNegativeNum}`;
   }
}

// ============================================================================

//hàm tìm số nhỏ nhất
function min(nums) {
   for (var i = 1; i < nums.length; i++) {
      if (nums[i] < nums[0]) {
         var x = nums[0];
         nums[0] = nums[i];
         nums[i] = x;
      }
   }
   return nums[0];
}

//hàm đếm số dương
function countPositive(nums) {
   var count = 0;
   for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
         count++;
      }
   }
   return count;
}

//hàm đếm số âm
function countNegative(nums) {
   var count = 0;
   for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
         count++;
      }
   }
   return count;
}

//hàm kiểm tra số nguyên tố
function isPrime(num) {
   var isPrime = true;
   if (num < 2) {
      isPrime = false;
      return isPrime;
   }

   if (num === 2) {
      return isPrime;
   }

   for (var i = 2; i < num - 1; i++) {
      if (num % i === 0) {
         isPrime = false;
         break;
      }
   }

   return isPrime;
}
