/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Users = () => (
    <div>Users module</div>
)

export default {
    routeProps: {
        path: '/users',
        component: Users
    },
    name: 'Users'
}