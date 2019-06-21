import MenuList from './components/MenuList.js';
import DishDetails from './components/DishDetails.js';



class MenuRoot extends React.Component {
    state = {
        dish: {
            "name": "Pasta with tomato purée",
            "alt": "pasta",
            "icon": "./img/pasta-with-tomato.png",
            "src": "./img/spagetti.png",
            "cost": "12",
            "allergens": "2, 6",
            "id": 5
        }
        
    }
    
    updateDish = (dish) => {
        this.setState({dish: dish});
    }
    render() {
        return (
            <div className="menu-root">

                <MenuList updateDish={this.updateDish} />
                <DishDetails dish={this.state.dish}/>
            </div>
        );
        
    }
}

ReactDOM.render(<MenuRoot />, document.querySelector('#menu'));
