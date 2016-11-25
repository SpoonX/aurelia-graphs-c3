var _dec, _dec2, _class;



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { scales, chart, quan } from 'aurelia-charts';
import { OneDimensional } from './one-dimensional';

export var PieChart = (_dec = scales([quan]), _dec2 = chart('C3', 'pie'), _dec(_class = _dec2(_class = function (_OneDimensional) {
  _inherits(PieChart, _OneDimensional);

  function PieChart() {
    var _temp, _this, _ret;

    

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _OneDimensional.call.apply(_OneDimensional, [this].concat(args))), _this), _this.settings = {
      data: {
        type: 'pie',
        columns: []
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PieChart;
}(OneDimensional)) || _class) || _class);