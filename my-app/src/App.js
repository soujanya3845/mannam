
import React, { Component } from 'react'
import CardContainer from './containers/CardContainer'
import SearchBar from './SearchBar'

class App extends Component{
  constructor(){
    super()
    this.state={
      dynamicCards:[],
      searchString:"This is from App.js",
      cart:[],
    }
    }
    updateSearchString(searchStringAsAnInput){
      this.setState=({
       searchString:searchStringAsAnInput
      })
    }
    handleAddToCart(newCard){
      console.log("This is the card that is clicked",newCard)
      let newCart = [...this.state.cart,newCard]
      this.setState({
        cart:newCart
      })
    }
    handleDelete(newCard){
      console.log("this is deleted",newCard)
      let newCart=[...this.state.cart,newCard]
      let editCart = newCart.filter(elem=>elem!== newCart[newCart.length-1])
      this.setState({
        cart:editCart
      })
    }
  
  render(){
    return(
      <div className='App'>
          <SearchBar searchString={this.state.searchString}
          cart={this.state.cart}
          thisIsFunctionAsProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)}/>
          <CardContainer
          cart={this.state.cart} 
          cards = {this.state.dynamicCards} 
          handleAddToCartInCardContainer = {(card)=>this.handleAddToCart(card)}
          handleDeleteInCardContainer = {(card)=>this.handleDelete(card)}/>
      </div>
    );
  }
  componentDidMount(){
    let that=this
    fetch("https://api.myjson.com/bins/vi0m6")
    .then(function(response){
        //console.log("This is the Data from the API", response)
        return response.json()
    })
    .then(function(jsonResponse){
      that.setState({
        dynamicCards:jsonResponse
      })
      
        
  
    })
    
    .catch(function(error){
        console.log(error)
    })

  }
}



export default App
