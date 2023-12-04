import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const [shortDimension, longDimension] =
    width < height ? [width, height] : [height, width];

const scale = width / 360;

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export function horizontalscale(size) {
    return (shortDimension / guidelineBaseWidth) * size;
}
export function verticalScale(size) {
    return (longDimension / guidelineBaseHeight) * size;
}
export function moderateScale(size, factor = 0.5) {
    return size + (scale(size) - size) * factor;
}
export function moderateVerticalScale(size, factor = 0.5) {
    return size + (verticalScale(size) - size) * factor;
}

export default {
    MRB: 'Manrope-Bold',
    MRSB: 'Manrope-SemiBold',
    MREB: 'Manrope-ExtraBold',
    MREL: 'Manrope-ExtraLight',
    MRL: 'Manrope-Light',
    MRM: 'Manrope-Medium',
    MRR: 'Manrope-Regular',

    hs: horizontalscale,
    vs: verticalScale,
    ms: moderateScale,
    mvs: moderateVerticalScale,
};
