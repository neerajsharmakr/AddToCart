/*
    connect redux with react 
    import react-redux ,action and component
    use mapDispatchToProps
    use mapStateToProps
*/

import {connect} from 'react-redux'
import Home from "../components/Home";
import {addToCart,removeToCart} from '../Services/Actions/action'

const mapStateToProps=state=>({
   data:state.cardItem

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})


export default connect (mapStateToProps,mapDispatchToProps)(Home)
//  export default Home;

