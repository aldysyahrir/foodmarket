import React from 'react'
import { Route } from 'react-router-dom'
import { Guess, Member } from '../components';

const useRouter = (routes) => {
    return routes.map((route) => {
        const Wrapper = route.type === "guess" ? Guess : Member
        return <Route
            key={route.path}
            path={route.path}
            element={
                <Wrapper path={route.path}>
                    <route.element />
                </Wrapper>} />
    });
};

export default useRouter;