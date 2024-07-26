import React, { Component } from "react";

class FetchAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data,
                });
            });
    }

    render() {
        const { data } = this.state;
        const listItems = data.map((item) => (
            <li key={item.id}>
                {item.name}, {item.email}
            </li>
        ));
        return <ul>{listItems}</ul>;
    }
}

export default FetchAPI;
