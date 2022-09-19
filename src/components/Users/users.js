import {useEffect, useState} from "react";
import User from "../User/user.js";
import {getUsers} from "../services/api";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    const lift = (obj)=>{
        setUser(<div><b>Name:</b> {obj.name} <br/> <b>Email:</b> {obj.email}</div>)
    }

    useEffect(()=> {
            getUsers().then(value => setUsers(value.data))
        },[]
    );

    return (
        <div>
            <hr/>
            {user}
            <hr/>
            {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
        </div>
    )


};