// let sum = 0
// for(let x = 0; x <= 100; x ++){
//   if (x%3==1){
//     console.log(x)
//   }
// }
let fruit =  [["Grapes",15],["Apples", 10]];
// let grape = fruit[0]
// let apple = fruit[1]
// let i = 0
// while (i < fruit.length){
//     console.log ("I have" + " " + fruit [i][1] + " " + fruit[i][0] )
//     i++
// }
let student = {
    // key : value
    fname : "Lê Quang Thiện Anh",
    age : 14,
    sex : "male"
};
// thêm phần tử
student.grade = "10",
// sửa phần tử
student.sex = 'female'
// xóa phần tử
// delete student.fname
// console.log(student);
// console.log (student.sex)
// console.log(student['age']);
// console.log(student.grade);
// for (fname in student) {
//     console.log (student[fname])
// }

// let str = "MindX"
// for (value of str) {
//     console.log(value);
// }
for (value of fruit) {
    console.log ("I have" + " " + value[1] + " " + value[0])
}
let myDog = {
    fname : "Ngáo",
    legs : "4",
    friends : ["everything"]
};
for (value in myDog){
    console.log(myDog[value]);
}
