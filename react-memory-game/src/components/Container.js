import React from "react";

class Container extends React.Component {
    state = {
        images: [
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
        ]
    }



    randomizer = () => {
        const imagesOrder = this.state.images;
        return imagesOrder.sort(() => Math.random() - 0.5);
    };

    checkSelected = (arrIndex, x) => {
        alert ("it worked");
        if (arrIndex.selected === false) {
            this.setState({ });
        }
        
        {/*if arr.Index.selected is true then compair their current score to their high score, replace if higher, then start a new game*/}
    };

    shuffled = this.randomizer(this.state.images);

    render() {
        return (
            <div className="container">
                <div className= "col-sm-12">

                <img src={this.state.images[0].path} alt="animal picture" onClick={()=> this.checkSelected()} />

                {document.write(this.state.images[0].selected)}

                </div>
            </div>
        );
    }
}

export default Container;
