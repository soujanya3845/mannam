import React from 'react'
import Card from '../../src/Card'
const CardContainer=(props)=>{
  return(
     <div className="cards">
            {
              props.cards.map(function(eachCard){
                  return <Card 
                  handleAddToCartInCard={(card)=>props.handleAddToCartInCardContainer(card)}
                  handleDeleteToCartInCard={(card)=>props.handleDeleteToCartInCardContainer(card)}
                  key={eachCard.id} 
                  cardName={eachCard.cardName} 
                  cardPrice={eachCard.cardPrice} 
                  cardImage={eachCard.cardImage}
                  cardId={eachCard.id}
                  isAddedToCart={props.cart.indexOf(eachCard.id) >= 0}
                  />
                  
              })
            }
      </div>

  )
}



// class CardContainer extends React.Component {
//   render(){
//     return(
//       <div className="cards">
//             {
//               this.props.cards.map(function(eachCard){
//                   return <Card cardName={eachCard.cardName} cardPrice={eachCard.cardPrice} cardImage={eachCard.cardImage}/>
//               })
//             }
//       </div>
//     )
//   }
//    componentWillReceiveProps(nextProps){
//     //  console.log("This are old Props", this.props)
//       console.log("This are new Props",nextProps)
//   }
// }

export default CardContainer