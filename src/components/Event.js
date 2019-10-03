import React from "react";
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

        return (
            <div className="event" onClick={e => this.expandEvent()}>
                <div className="">
                    <div className="eventLine">
                        <p className="text">
                            <span className="time">
                                {data.time}
                                {data.meridian}{" "}
                            </span>
                            {data.title}{" "}
                        </p>
                    </div>

                    {expandEvent && (
                        <div>
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title> {data.title}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <table className="text ">
                                        <tr className="text ">
                                            <td className="text eventDescription">
                                                Where:
                                            </td>
                                            <td className="text eventDescription">
                                                {data.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text eventDescription">
                                                When:
                                            </td>
                                            <td className="text eventDescription">
                                                {data.hour}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text eventDescription">
                                                About:
                                            </td>
                                            <td className="text eventDescription descriptionAnswer">
                                                {data.description}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text eventDescription">
                                                Entry-fee:
                                            </td>
                                            {data.cost === "free" && (
                                                <td className="text eventDescription">
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
