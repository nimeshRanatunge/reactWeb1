import React from "react";
import moment from 'moment'

function NameListItem(props){
    return(
        <li>
            <p><img src={props.avatar}/>{props.name}</p>
            <p>{props.city}</p>
            <p>{props.email}</p>
            {/* <p>Birthdayc:   {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
            <p>Birthdayc:   {moment(props.birthday).format('DD-MM-YYYY')}</p>
        </li>
    )
}
export default NameListItem