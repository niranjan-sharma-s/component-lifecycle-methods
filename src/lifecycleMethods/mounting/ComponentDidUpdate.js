/* The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM. */

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favicolor : "red"}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favicolor : "yellow"})
        },2000)
    }

    render() {
        return (<h1>
            My favorite color is {this.state.favicolor}
        </h1>)
    }
}