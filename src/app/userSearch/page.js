"use client"
import { useState } from "react";
import axios from "axios";
import UserSearchResults from "@/components/UserSearchResults";


export default function Page() {

    const [usernameSearch, setUsernameSearch] = useState("");
    const [emailSearch, setEmailSearch] = useState("");
    const [users, setUsers] = useState([]);


    const usernameSubmitHandler = async (e) => { 
        e.preventDefault()
        try {
            console.log(usernameSearch)
            const response = await axios.get(`/api/search/username/${usernameSearch}`)
            const data = response.data
            setUsers(data.users)
        } catch (err) {
            alert('Error could not find users')
        }


    }

    const emailSubmitHandler = async (e) => { 
        e.preventDefault()
        try {
            const response = await axios.get(`/api/search/email/${emailSearch}`)
            const data = response.data
            console.log(data)
            setUsers(data.users)
        } catch (err) {
            alert('Error could not find users')
        }


    }

    return (
        <div className="page">
        <h1>Let's do some get Requests for Users</h1>
        <form onSubmit={usernameSubmitHandler}>
            <label>
                Search for User by username
            <input
            onChange={(e) => setUsernameSearch(e.target.value)}
            value={usernameSearch}
            ></input>
            <button>Search</button>

            </label>
        </form>
        <form onSubmit={emailSubmitHandler}>
            <label>
                Search for a User by email
            </label>
            <input
            onChange={(e) => setEmailSearch(e.target.value)}
            value={emailSearch}
            ></input>
            <button>Search</button>

        </form>
        <UserSearchResults users={users} />
        </div>
    );
}