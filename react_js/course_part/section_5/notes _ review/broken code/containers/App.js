import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => {
  return {
    info : state
  };
}

const App = connect(AppComponent);

export default App;
