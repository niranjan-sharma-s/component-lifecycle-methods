/* Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()

The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.


*/
import React  from "react";
import ReactDOM from "react-dom/client"

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoriteColor : "red"}
        }
        static getDerivedStateFromProps (props, state) {
            return { favoriteColor : props.favcol}
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({favoriteColor:"green"})
            }, 2000);
        }
    render () {
        return (
            <h1> My favorite color is {this.state.favoriteColor}</h1>
        )
    }
    }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header favcol = "yellow"/>)

