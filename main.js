// // // let sum = 0
// // // for(let x = 0; x <= 100; x ++){
// // //   if (x%3==1){
// // //     console.log(x)
// // //   }
// // // }
// // let fruit =  [["Grapes",15],["Apples", 10]];
// // // let grape = fruit[0]
// // // let apple = fruit[1]
// // // let i = 0
// // // while (i < fruit.length){
// // //     console.log ("I have" + " " + fruit [i][1] + " " + fruit[i][0] )
// // //     i++
// // // }
// // let student = {
// //     // key : value
// //     fname : "Lê Quang Thiện Anh",
// //     age : 14,
// //     sex : "male"
// // };
// // // thêm phần tử
// // student.grade = "10",
// // // sửa phần tử
// // student.sex = 'female'
// // // xóa phần tử
// // // delete student.fname
// // // console.log(student);
// // // console.log (student.sex)
// // // console.log(student['age']);
// // // console.log(student.grade);
// // // for (fname in student) {
// // //     console.log (student[fname])
// // // }

// // // let str = "MindX"
// // // for (value of str) {
// // //     console.log(value);
// // // }
// // for (value of fruit) {
// //     console.log ("I have" + " " + value[1] + " " + value[0])
// // }
// // let myDog = {
// //     fname : "Ngáo",
// //     legs : "4",
// //     friends : ["everything"]
// // };
// // for (value in myDog){
// //     console.log(myDog[value]);
// // }
// // let myAnswer = []
// // let q1 = prompt('Do you love me?')
// // if (q1 !== '') {
// //     myAnswer.push(q1)
// //     q2 = prompt('Do you eat shit')
// //     if (q2 !== '') {
// //         myAnswer.push(q2)
// //     }
// // }
// // function factorial() {
// //     let num = prompt("Tính giai thừa của số đó");
// //     let result = 1;
// //     for (let i = 1; i <= num; i++) {
// //       result *= i;
// //     }
// //     document.getElementById("result-2").innerHTML = result;
// //   }
// //   factorial()
// let fruit = ['grape', 'banana', 'apple', 'kiwi'];
// fruit.push('cherry');
// console.log(fruit); // thêm phần tử cuối mảng
// fruit.pop('cherry');
// console.log(fruit); // xóa phần tử cuối cùng
// fruit.unshift('orange')
// console.log(fruit); // thêm vào đầu mảng
// fruit.shift('orange')
// console.log(fruit); // xóa ptu đầu mảng
// let i = fruit.indexOf('banana') // lưu vị trí ptu muốn sửa
// fruit[i]= "jackfruit"
// console.log(fruit);
// fruit.splice(1,2)
// console.log(fruit.join (", "));
let menu = ['rau xào', 'thịt luộc', 'gà rán'];
function create(){
    let i = document.getElementById("text1").value
    menu.push(i)
    console.log(menu);
}
function read(){
    alert(menu.join(", "))
}
function update(){
    let updateFood = prompt("Mời người dùng nhập vào tên món muốn update")
    let newItem = menu.indexOf(updateFood)
    if (newItem != -1){
        let newFood = prompt("Mời người dùng nhập vào tên món ăn mới")
        menu.splice(newItem,1, newFood)
        alert(menu.join(", ")
        )
    }
    else{
        alert("Món ăn o tồn tại")
    }
}
function delet(){
    let deletedFood = prompt("Mời người dùng nhập vào tên món muốn update")
    let deletedItem = menu.indexOf(deletedFood)
    if(deletedItem != -1 ){
        menu.splice(deletedItem,1)
        alert(menu.join(", "))
    }
    else{
        alert("Món ăn o tồn tại")
    }
}