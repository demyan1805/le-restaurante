var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import MenuService from '../services/menu_service.js';
import DishDetails from './DishDetails.js';

var MenuList = function (_React$Component) {
    _inherits(MenuList, _React$Component);

    function MenuList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            menu: [],
            error: false
        }, _this.onMenuLoaded = function (menu) {
            _this.setState({
                menu: menu,
                error: false
            });
        }, _this.onError = function (e) {
            _this.setState({
                error: true
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // MenuService = new MenuService();


    _createClass(MenuList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.showMenu();
        }
    }, {
        key: "showMenu",
        value: function showMenu() {
            // this.MenuService.getFullMenu()
            // .then(this.onMenuLoaded)
            // .catch(this.onError)
            var tempMenu = [{
                "name": "Raw meat with BBQ",
                "alt": "meat",
                "icon": "./img/raw-meat-with-bbq.png",
                "src": "./img/beef.png",
                "cost": "10",
                "allergens": "4, 8, 12",
                "id": 1
            }, {
                "name": "fresh trout",
                "alt": "trout",
                "icon": "./img/fresh-trout.png",
                "src": "./img/trout.png",
                "cost": "13",
                "allergens": "4, 9",
                "id": 2
            }, {
                "name": "mushroom soup",
                "alt": "soup",
                "icon": "./img/mushroom-soup.png",
                "src": "./img/soup.png",
                "cost": "9",
                "allergens": "1, 3, 11",
                "id": 3
            }, {
                "name": "chicken with potatoes",
                "alt": "chicken",
                "icon": "./img/chicken-with-potatoes.png",
                "src": "./img/chicken.png",
                "cost": "18",
                "allergens": "4, 8, 17",
                "id": 4
            }, {
                "name": "Pasta with tomato purée",
                "alt": "pasta",
                "icon": "./img/pasta-with-tomato.png",
                "src": "./img/spagetti.png",
                "cost": "12",
                "allergens": "2, 6",
                "id": 5
            }, {
                "name": "salad with beetroot",
                "alt": "salad",
                "icon": "./img/salad-with-beetroot.png",
                "src": "./img/salad.png",
                "cost": "6",
                "allergens": "NONE",
                "id": 6
            }];

            this.onMenuLoaded(tempMenu);
        }
    }, {
        key: "renderItems",
        value: function renderItems(arr) {
            var _this2 = this;

            return arr.map(function (item) {
                var name = item.name,
                    alt = item.alt,
                    icon = item.icon,
                    cost = item.cost,
                    src = item.src,
                    allergens = item.allergens,
                    id = item.id;

                return React.createElement(
                    "div",
                    { key: id, className: "menu-item", onClick: function onClick() {
                            _this2.props.updateDish(item);
                        } },
                    React.createElement("img", { src: icon, alt: alt, className: "menu-item-preview" }),
                    React.createElement(
                        "div",
                        { className: "menu-item-properties" },
                        React.createElement(
                            "div",
                            { className: "menu-item-label" },
                            React.createElement(
                                "h2",
                                { className: "name" },
                                name
                            ),
                            React.createElement("span", { className: "bottom-dots" }),
                            React.createElement(
                                "div",
                                { className: "cost" },
                                cost,
                                "$"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "menu-item-allergens" },
                            React.createElement(
                                "h3",
                                null,
                                "alergens"
                            ),
                            React.createElement("span", { className: "bottom-dots" }),
                            React.createElement(
                                "div",
                                { className: "allergens-list" },
                                allergens
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                menu = _state.menu,
                error = _state.error;

            var items = this.renderItems(menu);
            return React.createElement(
                "div",
                { className: "menu-list" },
                items
            );
        }
    }]);

    return MenuList;
}(React.Component);

export default MenuList;