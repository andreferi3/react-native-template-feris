import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params: object | undefined) {
    navigationRef.current?.navigate(name, params);
}

function replace(routeName: string, params: object | undefined) {
    navigationRef.current?.dispatch({
        ...StackActions.replace(routeName, params)
    })
}

function pop(n: number) {
    navigationRef.current?.dispatch({
        ...StackActions.pop(n)
    })
}

function popToTop() {
    navigationRef.current?.dispatch({
        ...StackActions.popToTop()
    })
}

export default {
    navigate,
    replace,
    pop,
    popToTop
}