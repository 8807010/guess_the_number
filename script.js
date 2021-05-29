// let admin; 
// let name;

// name = "Jon";
// admin = name;
// alert (admin);  //Jon




// let ourPlanetName;
// ourPlanetName = "Earth"; //Создайте переменную для названия нашей планеты. Как бы вы её назвали?




// let currentUserName; //Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?




// // Создайте страницу, которая спрашивает имя у пользователя и выводит его.

// let name = prompt("Ваше имя?", "");
// alert(`Hello, ${name}`);





// Чему будут равны переменные a и x после исполнения кода в примере ниже?
let a = 2;

let x = 1 + (a *= 2);

// Ответ:
// a = 4 (умножено на 2)
// x = 5 (вычислено как 1 + 4)




// Какой результат будет у выражений ниже?

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1 
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1 
// undefined + 1 = NaN
// " \t \n" - 2 = -2 





Замените код Function Expression стрелочной функцией:


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );



  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );