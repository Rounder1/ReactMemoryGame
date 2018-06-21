import React from "react";

let images = [
    {
        path: require('../pictures/aml-1.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-2.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-3.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-4.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-5.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-6.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-7.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-8.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-9.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-10.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-11.PNG'),
        selected: false,
        inPlay: false
    },
    {
        path: require('../pictures/aml-12.PNG'),
        selected: false,
        inPlay: false
    }
];

function fisherYates (arr) {
    var i = arr.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1)); 
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let shuffled = fisherYates(images);

const Container = () => (

<div class="container">
    <div class= "col-sm-12">

    <img src={shuffled[0].path} alt="animal picture" />
    <img src={shuffled[1].path} alt="animal picture" />
    <img src={shuffled[2].path} alt="animal picture" />
    <img src={shuffled[3].path} alt="animal picture" />

    <img src={shuffled[4].path} alt="animal picture" />
    <img src={shuffled[5].path} alt="animal picture" />
    <img src={shuffled[6].path} alt="animal picture" />
    <img src={shuffled[7].path} alt="animal picture" />

    <img src={shuffled[8].path} alt="animal picture" />
    <img src={shuffled[9].path} alt="animal picture" />
    <img src={shuffled[10].path} alt="animal picture" />
    <img src={shuffled[11].path} alt="animal picture" />


    </div>
</div>

);

export default Container;
