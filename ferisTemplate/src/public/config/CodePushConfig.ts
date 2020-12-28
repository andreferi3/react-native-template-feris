import CodePush, { CodePushOptions } from "react-native-code-push";

export const codePushOptions: CodePushOptions = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
    installMode: CodePush.InstallMode.IMMEDIATE,
    rollbackRetryOptions: {
        delayInHours: 1,
        maxRetryAttempts: 3,
    },
};