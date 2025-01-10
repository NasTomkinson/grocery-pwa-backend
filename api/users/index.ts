async function getUsers (_CONN): Array {

    const allUsers = await _CONN.selectCollection("users")

    return allUsers
}


async function getUser(_CONN: any, email: string): Object {

    console.log(email)

    const user = await _CONN.selectRecord("users", {email: email})

    console.log(user)

    return user[0]
}

export {
    getUsers,
    getUser
}