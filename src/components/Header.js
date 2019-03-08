import React from 'react';
import posed from 'react-pose';

const config = {
  open: {y: 0, opacity: 1},
  closed: {y: -50, opacity: 0}
};

const MainHeader = posed.div(config);

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isActive: true}), 400);
  }

  render() {
    const { city, handleBack } = this.props;
    const { isActive } = this.state;

    return (
      <MainHeader className="header" pose={isActive ? 'open' : 'closed'}>
        <div onClick={() => handleBack()} className="back-button" />
        <div className="header__title">
          {city}
        </div>
      </MainHeader>
    );
  }
}

export default Header;
