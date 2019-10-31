import React from "react";
import Event from "./components/Event.js";
import Day from "./components/Day.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import { months } from "moment";
import { DateCondition } from "./components/DateCondition.js";
import firebase from "./firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: "this",
            showMore: "false",
            showMore1: "false",
            showMore2: "false",
            showMore3: "false",
            showMore4: "false",
            showMore5: "false",
            showMore6: "false",
            showMore7: "false",
            showMore8: "false",
            showMore9: "false",
            showMore10: "false",
            showMore11: "false",
            showMore12: "false",
            showMore13: "false",
            showMore14: "false",


        };
        this.changeWeek = this.changeWeek.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.showMore = this.showMore.bind(this);
        this.showMore1 = this.showMore1.bind(this);
        this.showMore2 = this.showMore2.bind(this);
        this.showMore3 = this.showMore3.bind(this);
        this.showMore4 = this.showMore4.bind(this);
        this.showMore5 = this.showMore5.bind(this);
        this.showMore6 = this.showMore6.bind(this);
        this.showMore7 = this.showMore7.bind(this);
        this.showMore8 = this.showMore8.bind(this);
        this.showMore9 = this.showMore9.bind(this);
        this.showMore10= this.showMore10.bind(this);
        this.showMore11 = this.showMore11.bind(this);
        this.showMore12 = this.showMore12.bind(this);
        this.showMore13 = this.showMore13.bind(this);
        this.showMore14 = this.showMore14.bind(this);
    }

    async componentDidMount() {
        let date = new Date();
        let from = date;
        from.setHours(0);
        from.setMinutes(0);
        from = from.toISOString();
        let to = new Date(
            date.getTime() + 15 * 24 * 60 * 60 * 1000
        ).toISOString();

        this.getEventsBetter(from, to);
        await firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user });
        });
    }

    getEventsBetter(from, to) {
        axios.get(`/getEventsBetter?from=${from}&to=${to}`).then(result => {
            this.setState({ events: result.data.data }, () => {
               console.log("is the last event here? friday 8th", this.state.events)
            });
        });
    }

    addEvent() {
        if (this.state.isSignedIn === true) {
            this.props.history.push("/eventForm");
        } else {
            this.props.history.push("/signInScreen");
        }
    }


    showMore() {
        this.setState({
            showMore: "true",

        });
    }

    showMore1() {
        this.setState({
            showMore1: "true",

        });
    }



    showMore2() {
        this.setState({
            showMore2: "true"
        });
    }

    showMore3() {
        this.setState({
            showMore3: "true"
        });
    }
    showMore4() {
        this.setState({
            showMore4: "true"
        });
    }
    showMore5() {
        this.setState({
            showMore5: "true"
        });
    }
    showMore6() {
        this.setState({
            showMore6: "true"
        });
    }
    showMore7() {
        this.setState({
            showMore7: "true"
        });
    }
    showMore8() {
        this.setState({
            showMore8: "true"
        });
    }
    showMore9() {
        this.setState({
            showMore9: "true"
        });
    }
    showMore10() {
        this.setState({
            showMore10: "true"
        });
    }
    showMore11() {
        this.setState({
            showMore11: "true"
        });
    }
    showMore12() {
        this.setState({
            showMore12: "true"
        });
    }
    showMore13() {
        this.setState({
            showMore13: "true"
        });
    }
    showMore14() {
        this.setState({
            showMore14: "true"
        });
    }

    changeWeek(event) {
        this.setState({
            [event.target.name]: event.target.value,
            week: event.target.value
        });
    }

    getEventDetails(id) {
        axios.get("/getEventDetails/" + id).then(result => {
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
            "a",
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

        let day = "Today";
        let dayB = days[date.getDay()];
        let day1 = "Tomorrow";
        let day1B = days[date.getDay() + 1];
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



        function toSystemDate(date) {
                return new Date(
                `${date.getFullYear()}-${date.getMonth() +
                    1}-${date.getDate()}`
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
        

        const user = firebase.auth().currentUser;



        return (
            <div className="main">
                <div className="titleAndLogin">
                    <h1 className="title">
                        <span className="justTitle">Juanita Calendar</span>
                        <br />
                    </h1>
                    <div className="belowTitle">
                        <h2 className="berlin">
                            {" "}
                            A better swing calendar for Berlin
                        </h2>
                        <div className="contactDiv">
                            <p className="contact">
                                To add or cancel an event, please reach out to
                                me@wilfredocasas.com
                            </p>
                        </div>
                    </div>
                    <div className="buttonAndLogin">
                        <p onClick={this.addEvent} className="addEvent text">
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

                <select className="dropdown" onChange={this.changeWeek}>
                    <option value="this"> &nbsp;&nbsp;This week</option>
                    <option value="next"> &nbsp;&nbsp;Next week</option>
                </select>
                <div className="weeks">
                    {this.state.week === "this" && (
                        <div className="week1">
                        <div className="dayDiv">
                            <Day  showMoreFunction={this.showMore} showMore={this.state.showMore} day={day} dayDay={dayB} events={this.state.events} convertedDate={todayConvertedDate} daydate={datees[date.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore1} showMore={this.state.showMore1} day={day1} dayDay={day1B} events={this.state.events} convertedDate={date1Converted} daydate={datees[date1.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore2} showMore={this.state.showMore2} day={day2} dayDay={day2} events={this.state.events} convertedDate={date2Converted} daydate={datees[date2.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore3} showMore={this.state.showMore3} day={day3} dayDay={day3} events={this.state.events} convertedDate={date3Converted} daydate={datees[date3.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore4} showMore={this.state.showMore4} day={day4} dayDay={day4} events={this.state.events} convertedDate={date4Converted} daydate={datees[date4.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore5} showMore={this.state.showMore5} day={day5} dayDay={day5} events={this.state.events} convertedDate={date5Converted} daydate={datees[date5.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore6} showMore={this.state.showMore6} day={day6} dayDay={day6} events={this.state.events} convertedDate={date6Converted} daydate={datees[date6.getDate()]}/>
                        </div>
                        </div>
                    )}
                    {this.state.week === "next" && (
                        <div className="week2">
                            <div className="dayDiv">
                            <Day showMoreFunction={this.showMore7} showMore={this.state.showMore7} day={day7} dayDay={day7} events={this.state.events} convertedDate={date7Converted} daydate={datees[date7.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore8} showMore={this.state.showMore8} day={day8} dayDay={day8} events={this.state.events} convertedDate={date8Converted} daydate={datees[date8.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore9} showMore={this.state.showMore9} day={day9} dayDay={day9} events={this.state.events} convertedDate={date9Converted} daydate={datees[date9.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore10} showMore={this.state.showMore10} day={day10} dayDay={day10} events={this.state.events} convertedDate={date10Converted} daydate={datees[date10.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore11} showMore={this.state.showMore11} day={day11} dayDay={day11} events={this.state.events} convertedDate={date11Converted} daydate={datees[date11.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore12} showMore={this.state.showMore12} day={day12} dayDay={day12} events={this.state.events} convertedDate={date12Converted} daydate={datees[date12.getDate()]}/>
                        </div>
                        <div className="dayDiv">
                            <Day showMoreFunction={this.showMore13} showMore={this.state.showMore13} day={day13} dayDay={day13} events={this.state.events} convertedDate={date13Converted} daydate={datees[date13.getDate()]}/>
                        </div>
                        </div>
                    )}
                  
                </div>
            </div>
        );
    }
}
