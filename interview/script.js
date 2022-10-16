const users = [
    {
        id: 1,
        name: 'jack',
        isActive: true,
    },
    {
        id: 2,
        name: 'john',
        isActive: true,
    },
    {
        id: 3,
        name: 'Mike',
        isActive: false,
    },
];

// DOM

const main = document.getElementById('main');

const getUserName = (user) => {
    user.filter((user) => user.isActive).map(({ name, isActive }) => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');

        userElement.innerHTML = `
                <ul>
                <li> Name : ${name} | Status : ${isActive}</li>
                </ul>
                `;

        main.appendChild(userElement);
    });
};

getUserName(users);
