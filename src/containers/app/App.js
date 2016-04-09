import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { logout } from '../../actions/auth';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Header/>
        <div className="Content">
          {this.props.children}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    user: auth ? auth.user : null,
  };
};

export default connect(
  mapStateToProps
)(App);
