// // for (var i = 100; i >= 1; i = i - 2) {
// //     document.write('<br>' + i);
// // }


// // Задача 1:
// // Вивести числа від 100 до 1

// // Задача 2:
// // Вивести лише парні числа від 100 до 2

// // Arrays

// var cats = ['Barsik', 'Tuzik', 'Murchik'];
// cats[10] = 'Pushok';

// document.write(cats.length);
// document.write('<br>');

// // for (var i = 0; i < cats.length; i++) {
// //     document.write(cats[i]);
// //     document.write('<br>');
// // }

// cats.forEach(function (el) {
//     document.write(el);
//     document.write('<br>');
// });

// var cats = {
//     young: 'Pushok',
//     old: 'Sirko'
// }

// cats['angry'] = 'Murko';

// //document.write(cats['angry']);

// var counter = 0;
// for (var key in cats) {
//     counter++;
// }
// document.write(counter);



var cat = {
    name: 'Pushok',
    color: 'Grey',
    run: function () {
        document.write('Cat ' + this.name + 
          ' has run!<br>');
    }
} 

var catMurchik = {
    name: 'Murchik',
    color: 'Grey',
    run: function () {
        document.write('Cat ' + this.name + 
          ' has run!<br>');
    }
} 

cat.name = 'Ryzhik';
cat.run();
catMurchik.run();


function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.run = function() {
         document.write(this.color + ' Cat ' + this.name + 
          ' has run!<br>');
    }
    return this;
}

var matroskin = new Cat('Matroskin', 'Yellow');
matroskin.run();
var ponchik = new Cat('Ponchik', 'Grey');
ponchik.run();
