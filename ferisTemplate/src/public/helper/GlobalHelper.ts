import React, { useState } from 'react';
import { Dimensions, Platform } from "react-native";
import CodePush from "react-native-code-push";
import { getVersion } from 'react-native-device-info';

export const { width, height } = Dimensions.get('screen')
export const iOS = Platform.OS === 'ios'
export const getInitialName = (name: string) => {
    const splitName = name.split(" ")
    const splitLength = splitName.length - 1
    const firstCh = splitName[0].slice(0, 1)
    const lastCh = splitName[splitLength].slice(0, 1)

    return `${firstCh}${lastCh}`
}

export const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}

export function parseNumFormat(amount: number) {
    if (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        return 0
    }
}

export function getAppVersion() {
    const [appVersion, setAppVersion] = useState<string>()

    CodePush.getUpdateMetadata().then((metadata) => {
        setAppVersion(`${metadata?.label ?? ''}`)
    });

    return `${getVersion()} ${appVersion}`
};