import CONSTANTS from '../../Constants';

const sizeBase = CONSTANTS.size.base;
export const INPUT_HEIGHT_INCREMENTS = (sizeBase * 3) + (sizeBase * 2) + CONSTANTS.size.ligatures;

export default (
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      padding: CONSTANTS.size.containerPadding,
    },
    input: {
      borderColor: 'gray',
      borderWidth: 1,
      fontSize: sizeBase * 3,
      height: INPUT_HEIGHT_INCREMENTS,
      paddingTop: sizeBase,
      paddingBottom: sizeBase,
      margin: 0,
    },
  }
);
