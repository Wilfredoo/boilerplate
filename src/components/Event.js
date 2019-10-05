import React from "react";
import Moment from "react-moment";
import { Modal, Button } from "react-bootstrap";

export class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandEvent: false
        };
        this.expandEvent = this.expandEvent.bind(this);
    }

    expandEvent() {
        console.log("expand it", this.state, this.props);

        this.setState(
            {
                expandEvent: !this.state.expandEvent
            },
            () => {
                console.log("expand it 2", this.state);
            }
        );
    }

    render() {
        const { expandEvent } = this.state;
        const { data } = this.props;
        console.log("where is time", this.props);

        const dateToFormat = "1976-04-19T12:59-0500";
        return (
            <div className="event" onClick={e => this.expandEvent()}>
                <div className="">
                    <div className="eventLine">
                        <p className="text eventText">
                            <span className="time">{data.hour} - </span>
                            {data.title}{" "}
                        </p>
                        <div className="smallPlusDiv">
                            <i class="fa fa-plus-square"></i>
                        </div>
                    </div>

                    {expandEvent && (
                        <div className="hideInWeb">
                            <h2 className="eventTitle">{data.title}</h2>
                            <Moment className="moment">{data.hour}</Moment>

                            <table className="text ">
                                <tr className="text ">
                                    <td className="text ">Wehere:</td>
                                    <td className="text ">{data.address}</td>
                                </tr>
                                <tr>
                                    <td className="text ">When:</td>
                                    <td className="text ">{data.hour}</td>
                                </tr>
                                <tr>
                                    <td className="text">About:</td>
                                    <td className="text  descriptionAnswer">
                                        {data.description}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text ">Entry-fee:</td>
                                    {data.cost === "free" && (
                                        <td className="text ">
                                            Free (Donation based)
                                        </td>
                                    )}
                                    {data.cost === "not-free" && (
                                        <td className="text ">{data.price}</td>
                                    )}
                                </tr>
                            </table>
                        </div>
                    )}
                    {expandEvent && (
                        <div className="hideInMobile">
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title> {data.title}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <table className="text">
                                        <tr className="text ">
                                            <td className="text ">Whwere:</td>
                                            <td className="text ">
                                                {data.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text ">When:</td>
                                            <td className="text ">
                                                {data.hour}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text ">About:</td>
                                            <td className="text  descriptionAnswer">
                                                {data.description}
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
