import React from "react";

export class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("maoris dancing", this.props);

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
                                this.props.indexe = index;
                                if (this.state.showMore === "true") {
                                    return index < 30;
                                } else {
                                    return index < 3;
                                }
                            })
                            .map(data => {
                                return (
                                    <Event
                                        data={this.props.data}
                                        day={this.props.dayB}
                                        daydate={this.props.datees}
                                    />
                                );
                            })}

                    {this.props.indexe === undefined && (
                        <div>
                            <p className="noSwing">no swing today :(</p>
                        </div>
                    )}
                    {this.props.showMore === "false" && this.props.indexe >= 3 && (
                        <div onClick={this.props.showMore}>
                            <p className="showMore">...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Day;
