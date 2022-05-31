/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Dashboard = () => (
    <div>Dashboard module</div>
)

export default {
    routeProps: {
        path: '/dashboard',
        exact: true,
        component: Dashboard
    },
    name: 'Dashboard'
}