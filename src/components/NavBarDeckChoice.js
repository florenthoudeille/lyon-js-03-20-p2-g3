import React, { Component } from 'react';
import './NavBarDekChoice.css';
import Button from './Button';
import CardDeckRecap from './CardDeckRecap';

class NavBarDeckChoice extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false
    };
  }

    handleShowModal = () => {
      this.setState({ show: true });
    }

    handleHideModal = () => {
      this.setState({ show: false });
    }

    render () {
      return (
        <div className='super-container-nav'>
          <nav>
            <ul className='container-nav'>
              <li>
                <Button id='button-home' link='/' linkName='&lt; Home' />
              </li>
              <li id='title'>Choose your Heroes</li>
              <li>
                <button type='button' className='button-config' onClick={this.handleShowModal}>Start</button>/>
                <Modal show={this.state.show} heroesChosen={this.props.heroesChosen} handleClose={this.handleHideModal}>
                  {this.props.heroesChosen
                    .map(heroe => {
                      return (
                        <CardDeckRecap heroe={heroe}/>
                      );
                    }
                    )
                  }
                </Modal>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h2>Are you sure of the composition of your deck?</h2>
        <div className='modal-heroesChosen-container'>
          {children}
        </div>
        <div className='button-modal-container'>
          <button type='button' className='button-config' onClick={handleClose}>Close</button>
          <Button id='button-battle' link='/' linkName='Start' />
        </div>
      </section>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);

export default NavBarDeckChoice;