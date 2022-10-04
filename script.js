/*

var randomBodyParts1 = ["чмоня", "пупсич", "чупачупс"];
var randomAdjectives1 = ["старую", "бедную", "фиговую"];
var randomWords = ["ослиху", "версию Элджея", "старушку", "девушку"];


var randomBodyParts = ["попа", "ноздря", "рука"];
var randomAdjectives = ["старая", "твёрдая", "страшная"];
var randomAnimalBodys = ["копыто", "взгляд", "хвост"];
var randomAnimals = ["бегемота", "куропатки", "осла"];


// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts1[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives1[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяемслучайные строки в предложение:
var randomInsult = "Ты " + randomBodyPart + " который похож на " + randomAdjective + " " + randomWord + "!!!";


var randomBodyPart1 = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective1 = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimalBody = randomAnimalBodys[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 3)];

var randomInsult1 = ["У тебя", randomBodyPart1, "ещё более ", randomAdjective1 , ", чем",randomAnimalBody, "у", randomAnimal].join(" ");


console.log(randomInsult);
console.log(randomInsult1);


var mas = [3,2,1].join(" больше, чем ");
console.log(mas);

*/

/*var scores = {Саня: 0, Ваня: 0, Илья: 0};
scores["Саня"] += 3;
scores["Илья"] += 1523456235; 
console.log(scores["Илья"]);


var myCrazyObject = {"name": "Нелепый объект", "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3], "random animal": "Банановая акула"
    };

    console.log(myCrazyObject["some array"][2].number);
    
*/



var animals = ["Кот", "Рыба", "Лемур", "Ворона"];

for(var i=0; i<animals.length;i++){
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals)


var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomStr = "";

while(randomStr.length <= 6){
    var index = Math.floor(Math.random() * alphabet.length);
    randomStr = randomStr + alphabet[index];
}

console.log(randomStr);


var input = "javascript is awesome";
var output = "";

for(var i = 0; i<input.length; i++){
    
    if(input[i] == "a"){
        input[i] = "4";
    }

    if(input[i] == "e"){
        input[i] = "3"
    }

    if(input[i] == "i"){
        input[i] = "1"
    }

    if(input[i] == "o"){
        input[i] = "0"
    }

    output = output + input[i];
};

console.log(output)