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


function checkSelected (arrIndex) {
    alert ("it worked");
    if (arrIndex.selected === false) arrIndex.selected = true;
    {/*if arr.Index.selected is true then compair their current score to their high score, replace if higher, then start a new game*/}
}


const Container = () => (

<div className="container">
    <div className= "col-sm-12">

    <img src={shuffled[0].path} alt="animal picture" onClick={()=> checkSelected(shuffled[0])} />
    <img src={shuffled[1].path} alt="animal picture" onClick={()=> checkSelected(shuffled[1])}/>
    <img src={shuffled[2].path} alt="animal picture" onClick={()=> checkSelected(shuffled[2])} />
    <img src={shuffled[3].path} alt="animal picture" onClick={()=> checkSelected(shuffled[3])} />

    <img src={shuffled[4].path} alt="animal picture" onClick={()=> checkSelected(shuffled[4])} />
    <img src={shuffled[5].path} alt="animal picture" onClick={()=> checkSelected(shuffled[5])} />
    <img src={shuffled[6].path} alt="animal picture" onClick={()=> checkSelected(shuffled[6])} />
    <img src={shuffled[7].path} alt="animal picture" onClick={()=> checkSelected(shuffled[7])} />

    <img src={shuffled[8].path} alt="animal picture" onClick={()=> checkSelected(shuffled[8])} />
    <img src={shuffled[9].path} alt="animal picture" onClick={()=> checkSelected(shuffled[9])} />
    <img src={shuffled[10].path} alt="animal picture" onClick={()=> checkSelected(shuffled[10])} />
    <img src={shuffled[11].path} alt="animal picture" onClick={()=> checkSelected(shuffled[11])} />

    {document.write(shuffled[0].selected)}
    {document.write(shuffled[1].selected)}
    {document.write(shuffled[2].selected)}
    {document.write(shuffled[3].selected)}
    {document.write(shuffled[4].selected)}
    {document.write(shuffled[5].selected)}
    {document.write(shuffled[6].selected)}
    {document.write(shuffled[7].selected)}
    {document.write(shuffled[8].selected)}
    {document.write(shuffled[9].selected)}
    {document.write(shuffled[10].selected)}
    {document.write(shuffled[11].selected)}

    </div>
</div>

);

export default Container;
