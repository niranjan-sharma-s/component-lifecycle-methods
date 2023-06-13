/*In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true. */
import React from "react";
import ReactDOM from "react-dom/client";

export class Updating extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoriteColor : "red"}
    }

    shouldComponentUpdate() {
        return false
    }

    changeColor () {
        this.setState({favoriteColor:"blue"})
    }

    render () {
        return (
            <> 
            <h1>My favorite oolor is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor()}>change color</button>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Updating/>)