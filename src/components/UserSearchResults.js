const UserSearchResults = ({users} ) => { 


    return (
        <ul>
            {users.map((user, idx) => <li key={idx}>{user.username}</li>)}
        </ul>
    )


}


export default UserSearchResults