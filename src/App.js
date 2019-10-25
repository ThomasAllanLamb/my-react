import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      search: 'ball'
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange (e) {
    console.log("searchChange");
    this.setState({
      search: e.target.value
    })
  }

  render () {
    return (
      <div>
        Enter a filter term to filter the list of goods and the catalog will update live.
        <Search search={this.state.search} onSearchChange={this.onSearchChange} />
        <Catalog search={this.state.search} products={this.props.products}/>
      </div>
    );
  }
}

class Search extends React.Component {
  render () {
    return (
      <div>
        Filter: <input name="search" type="text" value={this.props.search} onChange={this.props.onSearchChange}></input>
      </div>
    );
  }
}

class Catalog extends React.Component {
  render () {
    var rows = [];
    var previousCategory;
    var searchRegEx = new RegExp(this.props.search);
    for (var i = 0; i <= this.props.products.length-1; i++)
    {
      let currentProduct = this.props.products[i];
      
      //ignore this product if it does not fit search parameters
      if (searchRegEx.test(currentProduct.name) === false) continue;

      //only display a header if the previous category was different from this one
      if (previousCategory !== currentProduct.category)
      {
        //???: is there a better solution to this? we're creating virtual products, so they don't have IDs. However, there will be a maximum of one virtual product per real product, so we can use the negative versions of real product IDs. Zero doesn't work, though, so increment them by one to ensure that there is no product with ID 0.
        rows.push(<CategoryRow key={-1*(currentProduct.category+1)} category={currentProduct.category} />);
        previousCategory = currentProduct.category;
      }

      //add the product row
      rows.push(<ProductRow key={currentProduct.id} product={currentProduct} />);
    }
    return (
      <div>
        Name
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
}

class CategoryRow extends React.Component {
  //as this is a coding excercise, I am going to omit proper styling practices in favor of brevity
  render () {
    return (
      <li><strong>{this.props.category}</strong></li>
    );
  }
}

class ProductRow extends React.Component {
  render () {
    return (
      <li>{this.props.product.name}</li>
    );
  }
}

export default App;
