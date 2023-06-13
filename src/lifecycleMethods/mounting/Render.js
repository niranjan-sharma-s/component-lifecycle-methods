/* The render() method is required, and is the method that actually outputs the HTML to the DOM. */

class header extends React.Component {
    constructor()
    render(){
        return (
            <h1>This is render method</h1>

        )
    }
}

ReactDOM.render(<render/>, document.getElementById('root'))