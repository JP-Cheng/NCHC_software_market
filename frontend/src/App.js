import React from 'react';
import {
  Button, Container, CardDeck, Jumbotron, Row, Card
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GoodsCard from './component/GoodsCard';
import goodsDescription from './component/goodsDesctiption.json';
import ConfirmCart from './component/ConfirmCart';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showCart: false,
      CartItems: []
    };
  }

  toggle = () => this.setState((prevState) => ({
    showCart: !prevState.showCart
  }));

  addProductToCart = (product) => {
    let CartItems = this.state.CartItems;
    CartItems.push(product);
    this.setState({ CartItems });
  };

  deleteCartItem = (index) => {
    let CartItems = this.state.CartItems;
    CartItems.splice(index, 1);
    this.setState({ CartItems });
  };


  render() {
    return (
      <div style={{ textAlign: 'center', padding: '5vh' }}>
        <h1>This is a demo page.</h1>
        <Container style={{ padding: '20px' }}>
          <Jumbotron style={{ textAlign: 'left' }}>
            <h1>Hello, please choose a container.</h1>
            <h3>Below are several docker containers we built for specific scientific computing, which provide independent environments.
            </h3>
            <hr className='division line'></hr>
            <Button color='primary'
              style={{ width: '7em' }}
              onClick={this.toggle}>
              {`購物車 (${this.state.CartItems.length}) `}
            </Button>
            <ConfirmCart
              show={this.state.showCart}
              toggle={this.toggle}
              BoughtItems={this.state.CartItems}
              deleteAnItem={this.deleteCartItem} />
          </Jumbotron>

          <CardDeck>
            {goodsDescription.map(aGoods => (
              <GoodsCard
                key={goodsDescription.indexOf(aGoods)}
                goods={aGoods}
                addProductToCart={this.addProductToCart}
                alreadyBought={this.state.CartItems.find(
                  item =>
                    item.title === aGoods.title
                )} />
            ))}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default App;
