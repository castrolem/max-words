import CONSTANTS from '../../Constants';

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
      fontSize: CONSTANTS.size.base * 3,
      height: (CONSTANTS.size.base * 3) + (CONSTANTS.size.base * 2) + CONSTANTS.size.ligatures,
      paddingTop: CONSTANTS.size.base,
      paddingBottom: CONSTANTS.size.base,
      margin: 0,
    },
  }
);
