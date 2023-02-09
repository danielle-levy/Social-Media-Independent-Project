import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const IMAGE_URL = 'https://media.licdn.com/dms/image/D4D16AQHJpqThgdDs3Q/profile-displaybackgroundimage-shrink_350_1400/0/1671816287583?e=1678320000&v=beta&t=PLjYRRwGnGy-tcl5CAlu81TUgPVX7YzL0vWfC8tVJM0';

    const USERS = [
        {
            id: 'u1',
            name: 'Danielle',
            image: IMAGE_URL,
            places: 3,
        },
    ]

    return <UsersList items={USERS} />;
};

export default Users;