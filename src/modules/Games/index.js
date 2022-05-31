/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

const Games = () => (
    <div>Games module</div>
)

export default {
    routeProps: {
        path: '/games',
        component: Games
    },
    name: 'Games'
}