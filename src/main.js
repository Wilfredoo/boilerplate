import React from "react";
import Event from "./components/Event.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import { months } from "moment";
import { DateCondition } from "./components/DateCondition.js";
import firebase from "./firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: "this"
        };
        this.changeWeek = this.changeWeek.bind(this);
        this.addEvent = this.addEvent.bind(this);
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(user => {
            console.log("hey user");
            this.setState({ isSignedIn: !!user });
        });
        await this.getEvents();
        console.log("component did mount once");
    }

    getEvents() {
        axios.get("/getEvents").then(result => {
            this.setState({ events: result.data.data }, () => {
                console.log(
                    "i sure hope events appear here",
                    this.state.events
                );
            });
        });
    }

    addEvent() {
        console.log("hi", this.state);
        if (this.state.isSignedIn === true) {
            this.props.history.push("/eventForm");
        } else {
            this.props.history.push("/signInScreen");
        }
    }

    changeWeek(event) {
        this.setState({
            [event.target.name]: event.target.value,
            week: event.target.value
        });
    }

    getEventDetails(id) {
        console.log("ill get those event details dont worry", id);
        axios.get("/getEventDetails/" + id).then(result => {
            console.log("here are ur godam details", result.data.data.id);
            this.setState({
                eventData: result.data
            });
        });
    }

    render() {
        let date = new Date();
        let date1 = new Date();
        date1.setDate(date1.getDate() + 1);

        let date2 = new Date();
        date2.setDate(date2.getDate() + 2);

        let date3 = new Date();
        date3.setDate(date3.getDate() + 3);

        let date4 = new Date();
        date4.setDate(date4.getDate() + 4);

        let date5 = new Date();
        date5.setDate(date5.getDate() + 5);

        let date6 = new Date();
        date6.setDate(date6.getDate() + 6);

        let date7 = new Date();
        date7.setDate(date7.getDate() + 7);

        let date8 = new Date();
        date8.setDate(date8.getDate() + 8);
        console.log("heho", date8.getMonth());

        let date9 = new Date();
        date9.setDate(date9.getDate() + 9);

        let date10 = new Date();
        date10.setDate(date10.getDate() + 10);

        let date11 = new Date();
        date11.setDate(date11.getDate() + 11);

        let date12 = new Date();
        date12.setDate(date12.getDate() + 12);

        let date13 = new Date();
        date13.setDate(date13.getDate() + 13);

        console.log("tubi", date);
        console.log("tubi2", date1);

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        let datees = [
            "1rst",
            "2nd",
            "3rd",
            "4th",
            "5th",
            "6th",
            "7th",
            "8th",
            "9th",
            "10th",
            "11th",
            "12th",
            "13th",
            "14th",
            "15th",
            "16th",
            "17th",
            "18th",
            "19th",
            "20th",
            "21th",
            "22th",
            "23th",
            "24th",
            "25th",
            "26th",
            "27th",
            "28th",
            "29th",
            "30th",
            "31rst"
        ];

        let day = days[date.getDay()];
        let day1 = days[date.getDay() + 1];
        let day2 = days[date.getDay() + 2];
        let day3 = days[date.getDay() + 3];
        let day4 = days[date.getDay() + 4];
        let day5 = days[date.getDay() + 5];
        let day6 = days[date.getDay() + 6];
        let day7 = days[date.getDay() + 7];
        let day8 = days[date.getDay() + 8];
        let day9 = days[date.getDay() + 9];
        let day10 = days[date.getDay() + 10];
        let day11 = days[date.getDay() + 11];
        let day12 = days[date.getDay() + 12];
        let day13 = days[date.getDay() + 13];

        if (date.getDay() === date.getDay()) {
            day = "Today";
        }

        if (date.getDay() + 1 === date.getDay() + 1) {
            day1 = "Tomorrow";
        }

        function toSystemDate(date) {
            return new Date(
                `${date.getFullYear()}-${date.getMonth() +
                    1}-${date.getDate()} 22:00`
            );
        }

        let todayConvertedDate = toSystemDate(date).toString();
        let date1Converted = toSystemDate(date1).toString();
        let date2Converted = toSystemDate(date2).toString();
        let date3Converted = toSystemDate(date3).toString();
        let date4Converted = toSystemDate(date4).toString();
        let date5Converted = toSystemDate(date5).toString();
        let date6Converted = toSystemDate(date6).toString();
        let date7Converted = toSystemDate(date7).toString();
        let date8Converted = toSystemDate(date8).toString();
        let date9Converted = toSystemDate(date9).toString();
        let date10Converted = toSystemDate(date10).toString();
        let date11Converted = toSystemDate(date11).toString();
        let date12Converted = toSystemDate(date12).toString();
        let date13Converted = toSystemDate(date13).toString();

        // console.log("aff", toSystemDate(MyDate).toString());
        // console.log(
        //     "aff2",
        //     toSystemDate(new Date("2019-09-16T22:00:00.000Z")).toString()
        // );

        // console.log(
        //     "aff3",
        //     toSystemDate(
        //         new Date(this.state.events && this.state.events[1].date0)
        //     ).toString()
        // );

        console.log("converted today", todayConvertedDate);
        console.log("converted tomorrow", date1Converted);

        // MyDate.setDate(MyDate.getDate());

        // MyDateString =
        //     MyDate.getFullYear() +
        //     "-" +
        //     ("0" + (MyDate.getMonth() + 1)).slice(-2) +
        //     "-" +
        //     ("0" + MyDate.getDate()).slice(-2);

        // console.log("datedate", MyDateString);
        // console.log(
        //     "iso date to convert",
        //     this.state.events && this.state.events[1].date0
        // );

        const user = firebase.auth().currentUser;
        console.log("USER", user);
        return (
            <div className="main">
                <div className="titleAndLogin">
                    <h1 className="title">
                        Baila Berlin
                        <br />
                        <span className="berlin"> Swing Calendar</span>
                    </h1>
                    <div className="buttonAndLogin">
                        <p
                            onClick={this.addEvent}
                            className="addEvent text">
                            Add new event
                        </p>

                        {user && (
                            <div>
                                <p
                                    className="signout text"
                                    onClick={() => firebase.auth().signOut()}>
                                    Sign out
                                </p>

                                <div className="welcome text">
                                    Welcome {user && user.displayName}{" "}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <br />
                <br />
                <select className="dropdown" onChange={this.changeWeek}>
                    <option value="this"> &nbsp;&nbsp;This week</option>
                    <option value="next"> &nbsp;&nbsp;Next week</option>
                </select>
                <div className="weeks">
                    {this.state.week === "this" && (
                        <div className="week1">
                            <div className="dayDiv">
                                <p className="text day">{day}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                todayConvertedDate ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>

                            <div className="dayDiv">
                                <p className="text day">{day1}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            console.log("dataaa", data);
                                            if (
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date1Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>

                            <div className="dayDiv">
                                <p className="text day">{day2}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date2Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">{day3}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date3Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">{day4}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date4Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">{day5}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date5Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">{day6}</p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date6Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                        </div>
                    )}
                    {this.state.week === "next" && (
                        <div className="week2">
                            <div className="dayDiv">
                                <p className="text day">
                                    {day7} {datees[date7.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date7Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>

                            <div className="dayDiv">
                                <p className="text day">
                                    {day8} {datees[date8.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date8Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>

                            <div className="dayDiv">
                                <p className="text day">
                                    {day9} {datees[date9.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date9Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">
                                    {day10} {datees[date10.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date10Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">
                                    {day11} {datees[date11.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date11Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">
                                    {day12} {datees[date12.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date12Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                            <div className="dayDiv">
                                <p className="text day">
                                    {day13} {datees[date13.getDate()]}
                                </p>
                                <div className="eventsDiv">
                                    {this.state.events &&
                                        this.state.events.map(data => {
                                            if (
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date0)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date1)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date2)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date3)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date4)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date5)
                                                    ).toString() ||
                                                date13Converted ===
                                                    toSystemDate(
                                                        new Date(data.date6)
                                                    ).toString()
                                            ) {
                                                return <Event data={data} />;
                                            }
                                        })}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="week2Web week2">
                        <div className="dayDiv">
                            <p className="text day">
                                {day7} {datees[date7.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date7Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>

                        <div className="dayDiv">
                            <p className="text day">
                                {day8} {datees[date8.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date8Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>

                        <div className="dayDiv">
                            <p className="text day">
                                {day9} {datees[date9.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date9Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="dayDiv">
                            <p className="text day">
                                {day10} {datees[date10.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date10Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="dayDiv">
                            <p className="text day">
                                {day11} {datees[date11.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date11Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="dayDiv">
                            <p className="text day">
                                {day12} {datees[date12.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date12Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>
                        <div className="dayDiv">
                            <p className="text day">
                                {day13} {datees[date13.getDate()]}
                            </p>
                            <div className="eventsDiv">
                                {this.state.events &&
                                    this.state.events.map(data => {
                                        if (
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date0)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date1)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date2)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date3)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date4)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date5)
                                                ).toString() ||
                                            date13Converted ===
                                                toSystemDate(
                                                    new Date(data.date6)
                                                ).toString()
                                        ) {
                                            return <Event data={data} />;
                                        }
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
