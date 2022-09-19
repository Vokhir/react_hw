import {useEffect, useState} from "react";
import User from "../User/user.js";
import {getLaunches} from "../services/api";


export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
            getLaunches().then(value => setUsers(value.data.filter(function (el) {
                return el.launch_year<2020
            })))
        },[]
    );

    return (
        <div>
            {users.map((user, index) => (<User item={user} key={index}/>))}
        </div>
    )


};