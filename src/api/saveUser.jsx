export const saveUser = (user) => {
    // console.log(user);
    const saveUser = { name: user.displayName, email: user.email }
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(saveUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}