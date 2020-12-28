import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

type Function<K> = () => K
type Value<T> = T | string & {}
type Variable<T> = Value<T> | Function<Value<T>>
type Extended<T> = { [K in keyof T]: Variable<T[K]> }

type AnyStyle = ImageStyle & TextStyle & ViewStyle
type AnyStyleSet = { [key: string]: AnyStyle }

type EStyleSet<T = any> = { [K in keyof T]:
    T[K] extends Variable<number> ? T[K] :
    T[K] extends MediaQuery ? T[K] :
    Extended<AnyStyle>
}

type StyleSet<T = any> = { [K in keyof T]:
    T[K] extends number ? T[K] :
    T[K] extends string ? T[K] :
    T[K] extends Function<number> ? number :
    T[K] extends Function<string> ? string :
    T[K] extends MediaQuery ? AnyStyleSet :
    AnyStyle
}

export type MediaQuery = { [key: string]: Extended<AnyStyle> }

export const createStyles = <T = EStyleSet>(styles: EStyleSet<T>) => EStyleSheet.create(styles) as StyleSet<T>
export const styleValue = (key: string, prop?: string) => EStyleSheet.value(key, prop)