var users = [{
    username: 'admin',
    password: 'admin',
    phone: '+380937777777',

},
{
    username: 'user',
    password: 'user',
    phone: '+380937777777',
}
]

localStorage.setItem('users', JSON.stringify(users));