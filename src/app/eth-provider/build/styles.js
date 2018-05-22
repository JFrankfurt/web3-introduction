import { StyleSheet } from 'aphrodite';
export var styles = StyleSheet.create({
  details: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  fox: {
    alignItems: 'center',
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    ':active': {
      color: 'inherit'
    },
    ':visited': {
      color: 'inherit'
    }
  },
  linkContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  },
  modal: {
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateRows: '25% 35% auto 10%',
    height: '50vh',
    minWidth: 300,
    padding: 12,
    width: '50vh'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%'
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    position: 'fixed',
    width: '100vw',
    zIndex: 9
  }
});