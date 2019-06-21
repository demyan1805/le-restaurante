// import MenuService from '../services/menu_service.js';
import DishDetails from './DishDetails.js'

export default class MenuList extends React.Component {
    
    // MenuService = new MenuService();
    state = {
        menu: [],
        error: false
    }

    componentDidMount() {
        this.showMenu();
    }

    showMenu() {
        // this.MenuService.getFullMenu()
        // .then(this.onMenuLoaded)
        // .catch(this.onError)
        const tempMenu = [
                {
                    "name": "Raw meat with BBQ",
                    "alt": "meat",
                    "icon": "./img/raw-meat-with-bbq.png",
                    "src": "./img/beef.png",
                    "cost": "10",
                    "allergens": "4, 8, 12",
                    "id": 1
                },
                {
                    "name": "fresh trout",
                    "alt": "trout",
                    "icon": "./img/fresh-trout.png",
                    "src": "./img/trout.png",
                    "cost": "13",
                    "allergens": "4, 9",
                    "id": 2
                },
                {
                    "name": "mushroom soup",
                    "alt": "soup",
                    "icon": "./img/mushroom-soup.png",
                    "src": "./img/soup.png",
                    "cost": "9",
                    "allergens": "1, 3, 11",
                    "id": 3
                },
                {
                    "name": "chicken with potatoes",
                    "alt": "chicken",
                    "icon": "./img/chicken-with-potatoes.png",
                    "src": "./img/chicken.png",
                    "cost": "18",
                    "allergens": "4, 8, 17",
                    "id": 4
                },
                {
                    "name": "Pasta with tomato purée",
                    "alt": "pasta",
                    "icon": "./img/pasta-with-tomato.png",
                    "src": "./img/spagetti.png",
                    "cost": "12",
                    "allergens": "2, 6",
                    "id": 5
                },
                {
                    "name": "salad with beetroot",
                    "alt": "salad",
                    "icon": "./img/salad-with-beetroot.png",
                    "src": "./img/salad.png",
                    "cost": "6",
                    "allergens": "NONE",
                    "id": 6
                }
            ]
        

        this.onMenuLoaded(tempMenu);
    }

    onMenuLoaded = (menu) => {
        this.setState({
            menu,
            error: false
        })
    }

    onError = (e) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, alt, icon, cost, src, allergens, id} = item;
            return (
                <div key={id} className="menu-item" onClick={()=>{this.props.updateDish(item)}}>
                    <img src={icon} alt={alt} className="menu-item-preview"/>
                    <div className="menu-item-properties">
                        <div className="menu-item-label">
                            <h2 className="name">{name}</h2>
                            <span className="bottom-dots"></span>
                            <div className="cost">{cost}$</div>
                        </div>
                        <div className="menu-item-allergens">
                            <h3>alergens</h3>
                            <span className="bottom-dots"></span>
                            <div className="allergens-list">{allergens}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        const {menu, error} = this.state;
        const items = this.renderItems(menu);
        return (
            <div className="menu-list">
                {items}
            </div>
        );
    }
}