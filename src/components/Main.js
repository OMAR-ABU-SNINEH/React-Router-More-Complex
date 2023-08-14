import { Component } from "react";
import ProductsDB from "./ProductsDB";
import card from "./card";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  randomProducts = this.shuffleArray(ProductsDB).slice(0, 9);
  products = this.randomProducts.map((product) => {
    return card(product);
  });
  // products = ProductsDB.slice(11, 20).map((product) => {
  //   return card(product);
  // });
  render() {
    return (
      <>
        <main>{this.products}</main>
      </>
    );
  }
}

export default Main;
