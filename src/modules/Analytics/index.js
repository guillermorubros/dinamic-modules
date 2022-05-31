/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Analytics = () => (
    <div>Analytics module</div>
)

export default {
    routeProps: {
        path: '/analytics',
        component: Analytics
    },
    name: 'Analytics'
}