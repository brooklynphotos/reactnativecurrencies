import EStyleSheets from 'react-native-extended-stylesheet';

export default EStyleSheets.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    resizeMode: 'contain',
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
