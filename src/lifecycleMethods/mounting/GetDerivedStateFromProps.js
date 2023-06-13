/* getDerivedStateFromProps
The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
It takes state as an argument, and returns an object with changes to the state.

*/
class header extends React.Component {
    constructor() {}

    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
}
}
