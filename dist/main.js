'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command('create').description('create d2-admin template').alias('c').action(function () {
  (0, _create2.default)();
});

_commander2.default.command('doc').description('d2-admin doc').alias('d').action(function () {
  console.log('Document: https://d2-projects.github.io/d2-admin-doc/');
  console.log('中文文档: https://d2-projects.github.io/d2-admin-doc/zh/');
});

_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);