"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ora = _interopRequireDefault(require("ora"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

var create =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var loading, answer, project, templateName;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loading = (0, _ora.default)('模板拉取中...');
            _context.next = 3;
            return _inquirer.default.prompt([{
              type: 'input',
              name: 'projectName',
              message: '项目名称',
              default: 'd2-admin-demo'
            }, {
              type: 'list',
              name: 'projectType',
              message: '项目模板',
              choices: ['完整版（包含所有插件和示例代码）', '简化版（不包含非必须插件和组件，保留所有系统功能）'],
              default: '完整版'
            }]);

          case 3:
            answer = _context.sent;
            project = answer.projectName;
            templateName = answer.projectType === '完整版' ? 'd2-projects/d2-admin' : 'd2-projects/d2-admin-start-kit';
            loading.start();
            (0, _downloadGitRepo.default)(templateName, process.cwd() + '/' + project, function (err) {
              if (err) {
                console.log(err);
                return;
              }

              console.log(process.cwd() + '/' + project);
              loading.succeed();
              console.log('');
              console.log('模板拉取成功！');
              console.log('');
              console.log('请使用以下命令启动项目：');
              console.group('');
              console.log("cd ".concat(project));
              console.log('npm install');
              console.log('npm run serve');
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function create() {
    return _ref.apply(this, arguments);
  };
}();

var _default = create;
exports.default = _default;