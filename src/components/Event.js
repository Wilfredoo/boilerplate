import React from "react";
import Moment from "react-moment";
import { Modal, Button } from "react-bootstrap";

export class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandEvent: false,
            expandEvent2: false
        };
        this.expandEvent = this.expandEvent.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.expandEvent2 = this.expandEvent2.bind(this);
    }

    closeModal() {
        this.setState(
            {
                expandEvent2: false
            },
            () => {
                console.log("CLOSE it", this.state);
            }
        );
    }

    expandEvent() {
        this.setState(
            {
                expandEvent: !this.state.expandEvent
            },
            () => {
                console.log("expand it", this.state);
            }
        );
    }

    expandEvent2() {
        this.setState(
            {
                expandEvent2: true
            },
            () => {
                console.log("expand it yes pls", this.state);
            }
        );
    }

    render() {
        const { expandEvent } = this.state;
        const { expandEvent2 } = this.state;
        const { data } = this.props;
        // console.log("komodo dragons", this.props);
        // console.log("fairy tales", this.props.day);

        return (
            <div className="event" onClick={e => this.expandEvent()}>
                <div className="">
                    <div
                        className="eventLine"
                        onClick={e => this.expandEvent2()}>
                        <p className="text eventText">
                            <span className="">
                                <Moment
                                    className="text time"
                                    parse="HH:mm:ss"
                                    format="HH:mm">
                                    {data.starthour}
                                </Moment>{" "}
                                -{" "}
                            </span>
                            {data.title}{" "}
                        </p>
                        <div className="smallPlusDiv">
                            <i class="fa fa-plus-square"></i>
                        </div>
                    </div>

                    {expandEvent && (
                        <div className="hideInWeb">
                            <h2 className="eventTitle">{data.title}</h2>
                            <div className="divForBorder1" />
                            <table className=" ">
                                <tr className=" ">
                                    <td className="smallerText where ">
                                        Where:
                                    </td>
                                    <td className="smallerText ">
                                        {data.address}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="smallerText ">When:</td>
                                    <td>
                                        {this.props.day} {this.props.daydate} at{" "}
                                        <Moment
                                            className="smallerText"
                                            parse="HH:mm:ss"
                                            format="HH:mm">
                                            {data.starthour}
                                        </Moment>{" "}
                                        -{" "}
                                        <Moment
                                            className="smallerText"
                                            parse="HH:mm:ss"
                                            format="HH:mm">
                                            {data.endhour}
                                        </Moment>
                                    </td>{" "}
                                </tr>
                                <tr>
                                    <td className="smallerText">About:</td>
                                    <td className="smallerText  descriptionAnswer">
                                        {data.description}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="smallerText fee">
                                        Entry-fee:
                                    </td>
                                    {data.cost === "free" && (
                                        <td className="smallerText ">
                                            Free (Donation based)
                                        </td>
                                    )}
                                    {data.cost === "not-free" && (
                                        <td className="smallerText ">
                                            {data.price}
                                        </td>
                                    )}
                                </tr>
                            </table>
                            <div className="divForBorder2" />
                        </div>
                    )}
                    {expandEvent2 && (
                        <div className="hideInMobile">
                            <div
                                onClick={e => this.closeModal()}
                                className="backgroundBlock"></div>
                            <Modal.Dialog>
                                <div onClick={e => this.closeModal()}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {" "}
                                            <Moment
                                                className="text"
                                                parse="HH:mm:ss"
                                                format="HH:mm">
                                                {data.starthour}
                                            </Moment>
                                            - {data.title}
                                        </Modal.Title>
                                    </Modal.Header>
                                </div>

                                <Modal.Body>
                                    <table className="text">
                                        <tr className="text ">
                                            <td className="text ">Where:</td>
                                            <td className="text ">
                                                {data.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text ">When:</td>
                                            <td className="text ">
                                                {this.props.day}{" "}
                                                {this.props.daydate} at{" "}
                                                <Moment
                                                    className="text"
                                                    parse="HH:mm:ss"
                                                    format="HH:mm">
                                                    {data.starthour}
                                                </Moment>{" "}
                                                -{" "}
                                                <Moment
                                                    className="text"
                                                    parse="HH:mm:ss"
                                                    format="HH:mm">
                                                    {data.endhour}
                                                </Moment>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text ">
                                                Entry-fee:
                                            </td>
                                            {data.cost === "free" && (
                                                <td className="text ">
                                                    Free (Donation based)
                                                </td>
                                            )}
                                            {data.cost === "not-free" && (
                                                <td className="text ">
                                                    {data.price}
                                                </td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td className="text ">About:</td>
                                            <td className="text  descriptionAnswer">
                                                {data.description}
                                            </td>
                                        </tr>
                                    </table>
                                </Modal.Body>
                            </Modal.Dialog>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Event;
