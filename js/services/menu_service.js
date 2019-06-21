import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuService = function MenuService() {
    var _this = this;

    _classCallCheck(this, MenuService);

    this.getResource = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
            var res;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return fetch(url);

                        case 2:
                            res = _context.sent;

                            if (res.ok) {
                                _context.next = 5;
                                break;
                            }

                            throw new Error('Could not fetch ' + url + ', received ' + res.status + ' status!');

                        case 5:
                            return _context.abrupt('return', res.json());

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();

    this.getFullMenu = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var res;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _this.getResource('../../menu.json');

                    case 2:
                        res = _context2.sent;

                        console.log(res);
                        return _context2.abrupt('return', res);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));
};

export default MenuService;