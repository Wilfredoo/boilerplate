import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Dates from "./components/Dates.js";
import Moment from "react-moment";
import "moment/locale/es";

export class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRepeat: false,
            showPrice: false,
            repeats: "1",
            starthour: "18:00:00",
            endhour: "01:00:00"
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }

    componentDidMount() {
        console.log("component in event form");
    }

    submitEvent(event) {
        event.preventDefault();
        axios.post("/submitEvent", this.state).then(resp => {
            console.log("hope this thing submitted");
            this.props.history.push("/");
        });
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            },
            () => {
                console.log(this.state);
            }
        );
    }

    render() {
        let day0;
        let day1;

        return (
            <div className="eventForm">
                <h1 className="title">Please fill out the form</h1>
                <div className="inputDiv">
                    <p className="text">Name of your event?</p>
                    <input
                        className="inputs"
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                        required="required"
                    />
                </div>
                <div className="inputDiv">
                    <p className="text">Where is it?</p>
                    <input
                        className="inputs"
                        type="text"
                        name="address"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="inputDiv">
                    <p className="text">Description:</p>
                    <textarea
                        className="inputs description"
                        type="textArea"
                        rows="4"
                        cols="50"
                        id="GFG"
                        maxlength="250"
                        name="description"
                        placeholder="Keep it short and sweet. If there is an event on Facebook you can add the link here"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="inputDiv">
                    <p className="text">What day is it?</p>
                    <Dates
                        handleChange={this.handleChange.bind(this)}
                        date={"date0"}
                        month={"month0"}
                    />
                    <br />
                    {/*<label for="time">Choose a time for your meeting:</label>*/}
                    <p className="text">Event starts at</p>
                    <input
                        type="time"
                        id="time"
                        name="starthour"
                        min="10:00"
                        defaultValue="18:00"
                        max="23:00"
                        className="time"
                        onChange={this.handleChange}
                        required></input>

                    <p className="text">And ends at</p>
                    <input
                        type="time"
                        id="time"
                        name="endhour"
                        min="10:00"
                        defaultValue="01:00"
                        max="23:00"
                        className="time"
                        onChange={this.handleChange}
                        required></input>
                </div>

                <div className="inputDiv">
                    <p className="text">Is this a continuous event?</p>
                    <label>
                        <input
                            type="radio"
                            name="timing"
                            value="continuous"
                            className="radioButton"
                            onChange={this.handleChange}
                        />
                        Yes, it repeats
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="timing"
                            value="unique"
                            onChange={this.handleChange}
                            className="radioButton"
                        />
                        No, it's a unique event
                    </label>
                </div>

                {this.state.timing === "continuous" && (
                    <div className="repeatsDiv">
                        <p className="text">Please select up to 6 more dates</p>
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date1"}
                        />
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date2"}
                        />
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date3"}
                        />
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date4"}
                        />
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date5"}
                        />
                        <Dates
                            handleChange={this.handleChange.bind(this)}
                            date={"date6"}
                        />
                    </div>
                )}

                <div className="inputDiv">
                    <p className="text">Is it a free event?</p>

                    <label>
                        <input
                            type="radio"
                            name="cost"
                            value="free"
                            className="radioButton"
                            onChange={this.handleChange}
                        />
                        For free (donation based)
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="cost"
                            value="not-free"
                            className="radioButton"
                            onChange={this.handleChange}
                        />
                        Not for free
                    </label>
                </div>

                {this.state.cost === "not-free" && (
                    <div className="inputDiv">
                        <p className="text">Price?</p>
                        <div className="flex">
                            <div className="euro">
                                <span>€</span>
                            </div>
                            <input
                                className="inputs priceInput"
                                type="text"
                                name="price"
                                placeholder=""
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                )}
                <br />

                <input
                    className="button"
                    onClick={this.submitEvent}
                    type="submit"
                    value="submit"
                />
            </div>
        );
    }
}
