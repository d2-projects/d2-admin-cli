"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _create = _interopRequireDefault(require("./create"));

_commander.default.command('create').description('create d2-admin template').alias('c').action(function () {
  (0, _create.default)();
});

_commander.default.command('doc').description('d2-admin doc').alias('d').action(function () {
  console.log('Document: https://d2-projects.github.io/d2-admin-doc/');
  console.log('中文文档: https://d2-projects.github.io/d2-admin-doc/zh/');
});

_commander.default.version(_constants.VERSION, '-v --version').parse(process.argv);