import React from "react";

export class DateCondition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("hi");
    }

    render() {
        console.log("props in DC", this.props);
        let date = new Date();

        function toSystemDate(date) {
            return new Date(
                `${date.getFullYear()}-${date.getMonth() +
                    1}-${date.getDate()} 22:00`
            );
        }

        let todayConvertedDate = toSystemDate(date).toString();

        return (
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date0)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date1)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date2)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date3)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date4)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date5)).toString() ||
            todayConvertedDate ===
                toSystemDate(new Date(this.props.date6)).toString()
        );
    }
}

export default Event;
