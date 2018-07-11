import React from 'react'

class SearchBar extends React.Component {
  constructor(){
    super()
    this.state={
      searchString:" "
    }
  }
 handleSearchInput(event){
  //  console.log(event.target.value)
  //  this.setState({
  //    searchCard:event.target.value
  //  })
  this.thisIsFunctionAsProp_updateSearchString(event.target.value)
 }
  render(){
    return(
      <div>
          <input value={this.state.searchString} onChange={(event)=>this.handleSearchInput(event)}/>
          <div className='cart-cont'>
          <span className='cart-font'>{this.props.cart.length}</span>
      </div>
      </div>
    )
  }
}

export default SearchBar