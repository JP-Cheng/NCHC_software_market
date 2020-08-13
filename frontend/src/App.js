import React from 'react';
import {
  Button, Container, CardDeck, Jumbotron,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GoodsCard from './component/GoodsCard';
import goodsDescription from './component/goodsDesctiption.json';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hello: true };
  }

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
              onClick={() => (this.setState((prevState) => ({
                hello: !prevState.hello
              })
              ))}>
              {this.state.hello ? "購物車" : "不要亂點辣"}
            </Button>
          </Jumbotron>

          <CardDeck sm='3'>
            {goodsDescription.map(aGoods => (
              <GoodsCard goods={aGoods} />
            ))}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default App;
