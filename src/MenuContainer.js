import React, { Component } from "react";

class MenuContainer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    };
    
    render() {
        return (
            <div>
                <div>
                    <p>Can you find the item that is superfluous here</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebees</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer;