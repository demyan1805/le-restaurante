var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DishDetails = function (_React$Component) {
    _inherits(DishDetails, _React$Component);

    function DishDetails() {
        _classCallCheck(this, DishDetails);

        return _possibleConstructorReturn(this, (DishDetails.__proto__ || Object.getPrototypeOf(DishDetails)).apply(this, arguments));
    }

    _createClass(DishDetails, [{
        key: "render",
        value: function render() {
            var _props$dish = this.props.dish,
                name = _props$dish.name,
                alt = _props$dish.alt,
                icon = _props$dish.icon,
                cost = _props$dish.cost,
                src = _props$dish.src,
                allergens = _props$dish.allergens,
                id = _props$dish.id;


            return React.createElement(
                "div",
                { className: "dish-details" },
                React.createElement("img", { src: "./img/dish-placeholder.png", alt: "dish", className: "details-bg" }),
                React.createElement(
                    "div",
                    { className: "details-content" },
                    React.createElement("img", { src: src, alt: alt, className: "dish-pic" }),
                    React.createElement(
                        "div",
                        { className: "dish-description" },
                        React.createElement(
                            "p",
                            { className: "title" },
                            "online menu"
                        ),
                        React.createElement(
                            "p",
                            { className: "name" },
                            name
                        ),
                        React.createElement(
                            "p",
                            { className: "descr" },
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem earum velit atque repellendus neque ducimus corporis, facere excepturi veritatis quis sint harum laborum quae vero sunt numquam. Laudantium, laboriosam?"
                        ),
                        React.createElement(
                            "button",
                            { className: "order-btn" },
                            cost,
                            "$ - order"
                        )
                    )
                )
            );
        }
    }]);

    return DishDetails;
}(React.Component);

export default DishDetails;