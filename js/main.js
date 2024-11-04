'use strict'

const items = document.querySelectorAll('.items')
const item = document.querySelectorAll('.item')
console.log(items);
console.log(item);

const propLists = document.querySelectorAll('.props__list')
console.log(propLists);

const propsItemsOne = document.querySelectorAll('.props__item_one');

const propsItemsTwo = document.querySelectorAll('.props__item_two');
// console.log(propsItemsTwo);
const propsItemsThree = document.querySelectorAll('.props__item_three');

const propsItemsFour = document.querySelectorAll('.props__item_four');
// console.log(propsItemsFour);
const propsItemsFive = document.querySelectorAll('.props__item_five');

const itemTitle = document.querySelectorAll('.item__title');
console.log(itemTitle);

item[3].after(item[0]);
propsItemsFour[2].after(propsItemsFour[5]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[8].after(propsItemsTwo[9]);


const clonePropLists3 = propLists[3].cloneNode(true);
itemTitle[3].after(clonePropLists3);
// propLists[4].replaceWith(propLists[3]);
propLists[3].replaceWith(propLists[4]);
// propLists[1].append(propsItems[2]);


const adsBlock = document.getElementsByClassName('ads');
adsBlock[0].remove();