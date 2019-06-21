var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    _createClass(MenuItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "menu-item" },
                React.createElement("img", { src: "./img/raw-meat-with-bbq.png", alt: "dish", className: "menu-item-preview" }),
                React.createElement(
                    "div",
                    { className: "menu-item-properties" },
                    React.createElement(
                        "div",
                        { className: "menu-item-label" },
                        React.createElement(
                            "h2",
                            { className: "name" },
                            "Raw meat with BBQ"
                        ),
                        React.createElement("span", { className: "bottom-dots" }),
                        React.createElement(
                            "div",
                            { className: "cost" },
                            "10$"
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
                            "4, 8, 12"
                        )
                    )
                )
            );
        }
    }]);

    return MenuItem;
}(React.Component);

export default MenuItem;