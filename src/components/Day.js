import React from "react";
import Event from "./Event.js";

export class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    showMore() {
        this.setState({
            showMore: "true"
        });
        this.showMore = this.showMore.bind(this);
    }

    render() {
        function toSystemDate(date) {
            return new Date(
                `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            );
        }
        // console.log("the last of us", this.props);
        let indexe;
        return (
            <div>
                <p className=" day">{this.props.day}</p>
                <div className="eventsDiv">
                    {this.props.events &&
                        this.props.events
                            .filter(data => {
                                return (
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date0)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date1)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date2)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date3)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date4)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date5)
                                        ).toString() ||
                                    this.props.convertedDate ===
                                        toSystemDate(
                                            new Date(data.date6)
                                        ).toString()
                                );
                            })
                            .filter((data, index) => {
                                indexe = index;
                                if (this.props.showMore === "true") {
                                    return index < 30;
                                } else {
                                    return index < 3;
                                }
                            })
                            .map(data => {
                                return (
                                    <Event
                                        data={data}
                                        day={this.props.dayDay}
                                        daydate={this.props.daydate}
                                    />
                                );
                            })}
                    {/* {console.log("harry pora", indexe)}
                    {console.log("hermione", this.props.showMore)} */}

                    {indexe === undefined && (
                        <div>
                            <p className="noSwing">no swing today :(</p>
                        </div>
                    )}
                    {this.props.showMore === "false" && indexe >= 3 && (
                        <div onClick={this.props.showMoreFunction}>
                            <p className="showMore">...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Day;
