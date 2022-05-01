import "./datatable.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MessageTable = ({ messages }) => {
    const navigate = useNavigate()
    return (
        <div className="datatable">
            <div className="datatableTitle">
                MESSAGES
            </div>
            <table className="datagrid" >
                <tr>
                    <th >From</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                {

                    messages.map((message) => (
                        <tr>
                            <td>{message.from} </td>
                            <td>{message.message}</td>
                            <td>{message.dateString} </td>
                        </tr>
                    ))
                }
            </table>
        </div >
    );
};

export default MessageTable;
