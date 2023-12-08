"use client"
import { useState } from "react";
import axios from "axios";
import UserSearchResults from "@/components/UserSearchResults";


export default function Page() {

    const [idSearch, setIdSearch] = useState("");
    const [emailSearch, setEmailSearch] = useState("");
    const [users, setUsers] = useState([]);


    const idSubmitHandler = async (e) => { 
        e.preventDefault()
        try {
            const response = await axios.get(`/api/search/id/${idSearch}`)
            const data = response.data
            console.log(data)
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
        <form onSubmit={idSubmitHandler}>
            <label>
                Search for User by Id
            <input
            onChange={(e) => setIdSearch(e.target.value)}
            value={idSearch}
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