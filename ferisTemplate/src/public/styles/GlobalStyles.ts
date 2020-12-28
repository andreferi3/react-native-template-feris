import { createStyles } from '../../styles';
import { getStatusBarHeight } from '../helper/GetStatusBarHeight';

export const GlobalStyles = createStyles({
    // * Typhography Font Gilroy
    // gilroyRegular: {
    //     fontFamily: fonts.gilroyRegular
    // },
    // gilroyLight8: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '7.5rem'
    // },
    // gilroyLight9: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '8.5rem'
    // },
    // gilroyLight10: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '9.5rem'
    // },
    // gilroyLight11: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '10.5rem'
    // },
    // gilroyLight12: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '11.5rem'
    // },
    // gilroyLight13: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '12.5rem'
    // },
    // gilroyLight14: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '13.5rem'
    // },
    // gilroyLight15: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '14.5rem'
    // },
    // gilroyLight16: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '15.5rem'
    // },
    // gilroyLight18: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '17.5rem'
    // },
    // gilroyLight20: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '19.5rem'
    // },
    // gilroyLight22: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '21.5rem'
    // },
    // gilroyLight24: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '23.5rem'
    // },
    // gilroyLight26: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '25.5rem'
    // },
    // gilroyLight28: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '27.5rem'
    // },
    // gilroyLight30: {
    //     fontFamily: fonts.gilroyLight,
    //     fontSize: '29.5rem'
    // },
    // gilroyRegular10: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '9.5rem'
    // },
    // gilroyRegular11: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '10.5rem'
    // },
    // gilroyRegular12: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '11.5rem'
    // },
    // gilroyRegular13: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '13rem'
    // },
    // gilroyRegular14: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '13.5rem'
    // },
    // gilroyRegular15: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '14.5rem'
    // },
    // gilroyRegular16: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '15.5rem'
    // },
    // gilroyRegular18: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '17.5rem'
    // },
    // gilroyRegular19: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '19rem'
    // },
    // gilroyRegular20: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '19.5rem'
    // },
    // gilroyRegular22: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '21.5rem'
    // },
    // gilroyRegular24: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '23.5rem'
    // },
    // gilroyRegular26: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '25.5rem'
    // },
    // gilroyRegular28: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '27.5rem'
    // },
    // gilroyRegular30: {
    //     fontFamily: fonts.gilroyRegular,
    //     fontSize: '29.5rem'
    // },
    // gilroyBold: {
    //     fontFamily: fonts.gilroyBold
    // },
    // gilroyBold10: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '9.5rem'
    // },
    // gilroyBold11: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '10.5rem'
    // },
    // gilroyBold12: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '11.5rem'
    // },
    // gilroyBold13: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '13rem'
    // },
    // gilroyBold14: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '13.5rem'
    // },
    // gilroyBold15: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '14.5rem'
    // },
    // gilroyBold16: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '15.5rem'
    // },
    // gilroyBold17: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '17rem'
    // },
    // gilroyBold18: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '17.5rem'
    // },
    // gilroyBold20: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '19.5rem'
    // },
    // gilroyBold22: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '21.5rem'
    // },
    // gilroyBold24: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '23.5rem'
    // },
    // gilroyBold26: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '25.5rem'
    // },
    // gilroyBold28: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '27.5rem'
    // },
    // gilroyBold30: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '29.5rem'
    // },
    // gilroyBold36: {
    //     fontFamily: fonts.gilroyBold,
    //     fontSize: '35rem'
    // },

    // // * Typhography Font PlayFair
    // playfairBold: {
    //     fontFamily: fonts.playfairDisplayBold
    // },
    // playfairRegular8: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '7.5rem'
    // },
    // playfairRegular9: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '8.5rem'
    // },
    // playfairRegular10: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '9.5rem'
    // },
    // playfairRegular11: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '10.5rem'
    // },
    // playfairRegular12: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '11.5rem'
    // },
    // playfairRegular13: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '12.5rem'
    // },
    // playfairRegular14: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '13.5rem'
    // },
    // playfairRegular15: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '14.5rem'
    // },
    // playfairRegular16: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '15.5rem'
    // },
    // playfairRegular18: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '17.5rem'
    // },
    // playfairRegular20: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '19.5rem'
    // },
    // playfairRegular22: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '21.5rem'
    // },
    // playfairRegular24: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '23.5rem'
    // },
    // playfairRegular26: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '25.5rem'
    // },
    // playfairRegular28: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '27.5rem'
    // },
    // playfairRegular30: {
    //     fontFamily: fonts.playfairDisplayRegular,
    //     fontSize: '29.5rem'
    // },
    // playfairBold10: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '9.5rem'
    // },
    // playfairBold11: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '10.5rem'
    // },
    // playfairBold12: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '11.5rem'
    // },
    // playfairBold13: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '13rem'
    // },
    // playfairBold14: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '13.5rem'
    // },
    // playfairBold15: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '14.5rem'
    // },
    // playfairBold16: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '15.5rem'
    // },
    // playfairBold18: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '17.5rem'
    // },
    // playfairBold19: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '19rem'
    // },
    // playfairBold20: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '19.5rem'
    // },
    // playfairBold22: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '21.5rem'
    // },
    // playfairBold24: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '23.5rem'
    // },
    // playfairBold26: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '25.5rem'
    // },
    // playfairBold28: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '27.5rem'
    // },
    // playfairBold30: {
    //     fontFamily: fonts.playfairDisplayBold,
    //     fontSize: '29.5rem'
    // },

    // * Font Sizing
    size3: {
        fontSize: '3rem'
    },
    size4: {
        fontSize: '4rem'
    },
    size5: {
        fontSize: '5rem'
    },
    size6: {
        fontSize: '6rem'
    },
    size7: {
        fontSize: '7rem'
    },
    size8: {
        fontSize: '8rem'
    },
    size9: {
        fontSize: '9rem'
    },
    size10: {
        fontSize: '10rem'
    },
    size11: {
        fontSize: '11rem'
    },
    size12: {
        fontSize: '12rem'
    },
    size13: {
        fontSize: '13rem'
    },
    size14: {
        fontSize: '14rem'
    },
    size15: {
        fontSize: '15rem'
    },
    size16: {
        fontSize: '16rem'
    },
    size17: {
        fontSize: '17rem'
    },
    size18: {
        fontSize: '18rem'
    },
    size19: {
        fontSize: '19rem'
    },
    size20: {
        fontSize: '19.5rem'
    },
    size21: {
        fontSize: '21rem'
    },
    size22: {
        fontSize: '22rem'
    },
    size224: {
        fontSize: '23rem'
    },
    size24: {
        fontSize: '24rem'
    },
    size25: {
        fontSize: '25rem'
    },
    size26: {
        fontSize: '26rem'
    },
    size27: {
        fontSize: '27rem'
    },
    size28: {
        fontSize: '28rem'
    },
    size29: {
        fontSize: '29rem'
    },
    size30: {
        fontSize: '30rem'
    },
    size31: {
        fontSize: '31rem'
    },
    size32: {
        fontSize: '32rem'
    },
    size33: {
        fontSize: '33rem'
    },
    size34: {
        fontSize: '34rem'
    },

    // * Spacing
    btnChangeSm: {
        paddingVertical: '4rem'
    },
    btnChangeMd: {
        paddingVertical: '6rem'
    },
    container: {
        padding: '19.5rem'
    },
    spaceWrapper: {
        margin: '19.5rem'
    },
    spacing: {
        marginBottom: '4rem'
    },
    mbMd: {
        marginBottom: '10rem'
    },
    mt1: {
        marginTop: '7rem'
    },
    mt2: {
        marginTop: '14rem'
    },
    mt3: {
        marginTop: '20.5rem'
    },
    mt4: {
        marginTop: '28rem'
    },
    mt5: {
        marginTop: '35rem'
    },
    mv1: {
        marginVertical: '7rem'
    },
    mv2: {
        marginVertical: '14rem'
    },
    mv3: {
        marginVertical: '20.5rem'
    },
    mv4: {
        marginVertical: '28rem'
    },
    mv5: {
        marginVertical: '35rem'
    },
    mr1: {
        marginRight: '4rem'
    },
    mr2: {
        marginRight: '7.5rem'
    },
    mr3: {
        marginRight: '11.5rem'
    },
    mr4: {
        marginRight: '16rem'
    },
    mr5: {
        marginRight: '19.5rem'
    },
    mh1: {
        marginHorizontal: '4rem'
    },
    mh2: {
        marginHorizontal: '7.5rem'
    },
    mh3: {
        marginHorizontal: '11.5rem'
    },
    mh4: {
        marginHorizontal: '16rem'
    },
    mh5: {
        marginHorizontal: '19.5rem'
    },
    mb1: {
        marginBottom: '7rem'
    },
    mb2: {
        marginBottom: '14rem'
    },
    mb3: {
        marginBottom: '20.5rem'
    },
    mb4: {
        marginBottom: '28rem'
    },
    mb5: {
        marginBottom: '35rem'
    },
    ml1: {
        marginLeft: '4rem'
    },
    ml2: {
        marginLeft: '7.5rem'
    },
    ml3: {
        marginLeft: '11.5rem'
    },
    ml4: {
        marginLeft: '16rem'
    },
    ml5: {
        marginLeft: '19.5rem'
    },
    ml6: {
        marginLeft: '24rem'
    },
    ml7: {
        marginLeft: '27.5rem'
    },
    ml8: {
        marginLeft: '31.5rem'
    },
    ml9: {
        marginLeft: '35.5rem'
    },
    ml10: {
        marginLeft: '39rem'
    },
    pt1: {
        paddingTop: '7rem'
    },
    pt2: {
        paddingTop: '14rem'
    },
    pt3: {
        paddingTop: '20.5rem'
    },
    pt4: {
        paddingTop: '28rem'
    },
    pt5: {
        paddingTop: '35rem'
    },
    pr1: {
        paddingRight: '4rem'
    },
    pr2: {
        paddingRight: '7.5rem'
    },
    pr3: {
        paddingRight: '11.5rem'
    },
    pr4: {
        paddingRight: '16rem'
    },
    pr5: {
        paddingRight: '19.5rem'
    },
    pb1: {
        paddingBottom: '7rem'
    },
    pb2: {
        paddingBottom: '14rem'
    },
    pb3: {
        paddingBottom: '20.5rem'
    },
    pb4: {
        paddingBottom: '28rem'
    },
    pb5: {
        paddingBottom: '35rem'
    },
    pl1: {
        paddingLeft: '4rem'
    },
    pl2: {
        paddingLeft: '7.5rem'
    },
    pl3: {
        paddingLeft: '11.5rem'
    },
    pl4: {
        paddingLeft: '16rem'
    },
    pl5: {
        paddingLeft: '19.5rem'
    },
    pv1: {
        paddingVertical: '7rem'
    },
    pv2: {
        paddingVertical: '14rem'
    },
    pv3: {
        paddingVertical: '20.5rem'
    },
    pv4: {
        paddingVertical: '28rem'
    },
    pv5: {
        paddingVertical: '35rem'
    },
    ph1: {
        paddingHorizontal: '4rem'
    },
    ph2: {
        paddingHorizontal: '7.5rem'
    },
    ph3: {
        paddingHorizontal: '11.5rem'
    },
    ph4: {
        paddingHorizontal: '16rem'
    },
    ph5: {
        paddingHorizontal: '19.5rem'
    },
    resetMargin: {
        marginBottom: '-12rem'
    },
    lnHeightSm: {
        lineHeight: '18rem'
    },
    lnHeightMd: {
        lineHeight: '21rem'
    },
    statusBarHeight: {
        paddingTop: getStatusBarHeight(true)
    },
    textInputDivider: {
        marginBottom: '12rem'
    },

    // * Utilities & Layout
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexRowStart: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    flexFill: {
        flex: 1
    },
    flex1: {
        flex: .1
    },
    flex2: {
        flex: .2
    },
    flex3: {
        flex: .3
    },
    flex4: {
        flex: .4
    },
    flex5: {
        flex: .5
    },
    flex6: {
        flex: .6
    },
    flex7: {
        flex: .7
    },
    flex8: {
        flex: .8
    },
    flex9: {
        flex: .9
    },
    flexHeader: {
        flex: .13
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    textCenter: {
        textAlign: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    justifySpaceBetween: {
        justifyContent: 'space-between'
    },
    justifyFlexEnd: {
        justifyContent: 'flex-end'
    },
    justifyFlexStart: {
        justifyContent: 'flex-start'
    },
    contentContainerCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    hr: {
        borderTopWidth: 0.5,
        borderTopColor: '#c5c5c5'
    },
    bgWhite: {
        backgroundColor: 'white'
    }
})