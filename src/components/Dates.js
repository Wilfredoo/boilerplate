import React from "react";

export class Dates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="event">
                <input
                    type="date"
                    className="date"
                    id="date"
                    name={this.props.date}
                    onChange={this.props.handleChange}
                    min="2019-01-01"
                    max="2019-12-31"
                    defaultValue="01/01/2019"
                />
            </div>
        );
    }
}

export default Dates;
