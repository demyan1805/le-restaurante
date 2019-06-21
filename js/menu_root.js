var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import MenuList from './components/MenuList.js';
import DishDetails from './components/DishDetails.js';

var MenuRoot = function (_React$Component) {
    _inherits(MenuRoot, _React$Component);

    function MenuRoot() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuRoot);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuRoot.__proto__ || Object.getPrototypeOf(MenuRoot)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dish: {
                "name": "Pasta with tomato purée",
                "alt": "pasta",
                "icon": "./img/pasta-with-tomato.png",
                "src": "./img/spagetti.png",
                "cost": "12",
                "allergens": "2, 6",
                "id": 5
            }

        }, _this.updateDish = function (dish) {
            _this.setState({ dish: dish });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuRoot, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'menu-root' },
                React.createElement(MenuList, { updateDish: this.updateDish }),
                React.createElement(DishDetails, { dish: this.state.dish })
            );
        }
    }]);

    return MenuRoot;
}(React.Component);

ReactDOM.render(React.createElement(MenuRoot, null), document.querySelector('#menu'));