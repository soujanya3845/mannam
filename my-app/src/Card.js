import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render(){
    return(
      <div className="card">
            <div className="card-image">
                <img src={this.props.cardImage}/>
            </div>
            <h4 className="card-name">{this.props.cardName}</h4>
            <h5 className="card-price">Price:${this.props.cardPrice}</h5>
            {
              this.props.isAddedToCart ?
            
            <div className="card-action">
               <button onClick={()=>{this.props.handleDeleteToCartInCard(this.props.cardId)}} className="delete" type="button">Remove</button>
               </div>:
               <div className="card-action">
            
                <button onClick={()=>{this.props.handleAddToCartInCard(this.props.cardId)}} className="added" type="button">Add to Cart</button>
               
               
      </div>
            }
            </div>
    )
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardPrice: PropTypes.string,
  cardImage:PropTypes.string,
  cardId:PropTypes.nummber,
}

Card.defaultProps = {
  cardPrice: 0,
  cardImage:"https://thumbs.dreamstime.com/z/missing-puzzle-piece-821534.jpg"
}

export default Card