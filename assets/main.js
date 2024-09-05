"use strict"

let name;
let admin;
name = 'Джон';
admin = name;
alert(admin);


let citi = prompt('Введите название города');
let yearOfFoundation = prompt('Год образования');
let naselenie = prompt('Население');
let ageCiti = 2024 - yearOfFoundation;
alert(`Городу ${citi} исполнилось ${ageCiti} лет с момента его образования. Население - ${naselenie} человек`);

let r = prompt('введите радиус круга');
let S = Math.PI * (r**2);
alert(`Площадь круга с радиусом ${r} равна ${S}`);

let a = +prompt('введите первое число');
let b = +prompt('введите второе число');
alert(`сумма = ${a + b}, разность = ${a - b}, частное = ${a / b}, произведение = ${a * b}`);
