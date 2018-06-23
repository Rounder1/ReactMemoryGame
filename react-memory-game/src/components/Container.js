import React from "react";

class Container extends React.Component {
    state = {
        images: [
            {
                path: require('../pictures/aml-1.PNG'),
                selected: true,
                inPlay: false
            },
            {
                path: require('../pictures/aml-2.PNG'),
                selected: true,
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
        ],

        currentScore: 5,

        highScore: 0
    }



    randomizer = () => {
        const imagesOrder = this.state.images;
        return imagesOrder.sort(() => Math.random() - 0.5);
    };

    checkHighScore = () => {
        let score = this.state.currentScore;
        let high = this.state.highScore;

        if (score > high) {
            this.setState({ high: score });
        }
    };

    checkSelected = (i) => {
        const imagesSelect = this.state.images;

        if (imagesSelect[i].selected === false) {
            alert("its false");
            this.setState({ currentScore: this.state.currentScore + 1 });
            {
            // this.setState({ imagesSelect[0].selected: true });
            }
        }
        else if (imagesSelect[i].selected === true) {
            this.checkHighScore();
            alert("you lose");
        }
        
        {/*if arr.Index.selected is true then compair their current score to their high score, replace if higher, then start a new game*/}
    };

    shuffled = this.randomizer(this.state.images);

    render() {
        return (
            <div className="container">
                <div className= "col-sm-12">

                <img src={this.state.images[0].path} alt="animal picture" onClick={()=> this.checkSelected(0)} />
                <img src={this.state.images[1].path} alt="animal picture" onClick={()=> this.checkSelected(1)} />
                <img src={this.state.images[2].path} alt="animal picture" onClick={()=> this.checkSelected(2)} />
                <img src={this.state.images[3].path} alt="animal picture" onClick={()=> this.checkSelected(3)} />

                <img src={this.state.images[4].path} alt="animal picture" onClick={()=> this.checkSelected(4)} />
                <img src={this.state.images[5].path} alt="animal picture" onClick={()=> this.checkSelected(5)} />
                <img src={this.state.images[6].path} alt="animal picture" onClick={()=> this.checkSelected(6)} />
                <img src={this.state.images[7].path} alt="animal picture" onClick={()=> this.checkSelected(7)} />

                <img src={this.state.images[8].path} alt="animal picture" onClick={()=> this.checkSelected(8)} />
                <img src={this.state.images[9].path} alt="animal picture" onClick={()=> this.checkSelected(9)} />
                <img src={this.state.images[10].path} alt="animal picture" onClick={()=> this.checkSelected(10)} />
                <img src={this.state.images[11].path} alt="animal picture" onClick={()=> this.checkSelected(11)} />

                {document.write(this.state.images[0].selected)}
                {document.write(this.state.images[1].selected)}
                {document.write(this.state.images[2].selected)}
                {document.write(this.state.images[3].selected)}
                
                {document.write(this.state.images[4].selected)}
                {document.write(this.state.images[5].selected)}
                {document.write(this.state.images[6].selected)}
                {document.write(this.state.images[7].selected)}

                {document.write(this.state.images[8].selected)}
                {document.write(this.state.images[9].selected)}
                {document.write(this.state.images[10].selected)}
                {document.write(this.state.images[11].selected)}

                {document.write(this.state.currentScore)}
                {document.write(this.state.highScore)}

                </div>
            </div>
        );
    }
}

export default Container;
