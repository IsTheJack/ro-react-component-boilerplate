"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var MyComponent = function MyComponent(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      onClick = _ref.onClick;
  var sizesStyle = {
    regular: "8px 12px",
    large: "12px 16px"
  };
  return React.createElement("button", {
    onClick: onClick,
    style: {
      border: "none",
      background: "hotpink",
      borderRadius: "4px",
      color: "white",
      padding: sizesStyle[size]
    }
  }, "Hello World");
};

var _default = MyComponent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL015Q29tcG9uZW50LnRzeCJdLCJuYW1lcyI6WyJNeUNvbXBvbmVudCIsInNpemUiLCJvbkNsaWNrIiwic2l6ZXNTdHlsZSIsInJlZ3VsYXIiLCJsYXJnZSIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQWFBLElBQU1BLFdBQTRCLEdBQUcsU0FBL0JBLFdBQStCLE9BQW1DO0FBQUEsdUJBQWhDQyxJQUFnQztBQUFBLE1BQWhDQSxJQUFnQywwQkFBekIsU0FBeUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDdEUsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxPQUFPLEVBQUUsVUFEUTtBQUVqQkMsSUFBQUEsS0FBSyxFQUFFO0FBRlUsR0FBbkI7QUFLQSxTQUNFO0FBQ0UsSUFBQSxPQUFPLEVBQUVILE9BRFg7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMSSxNQUFBQSxNQUFNLEVBQUUsTUFESDtBQUVMQyxNQUFBQSxVQUFVLEVBQUUsU0FGUDtBQUdMQyxNQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxNQUFBQSxLQUFLLEVBQUUsT0FKRjtBQUtMQyxNQUFBQSxPQUFPLEVBQUVQLFVBQVUsQ0FBQ0YsSUFBRDtBQUxkO0FBRlQsbUJBREY7QUFjRCxDQXBCRDs7ZUFzQmVELFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIGJ1dHRvblxuICAgKi9cbiAgc2l6ZT86ICdyZWd1bGFyJyB8ICdsYXJnZSdcbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHRoZSBjbGljayBldmVudFxuICAgKi9cbiAgb25DbGljaz86ICgpID0+IHZvaWQgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgTXlDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHNpemUgPSAncmVndWxhcicsIG9uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBzaXplc1N0eWxlID0ge1xuICAgIHJlZ3VsYXI6IFwiOHB4IDEycHhcIixcbiAgICBsYXJnZTogXCIxMnB4IDE2cHhcIlxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiaG90cGlua1wiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHBhZGRpbmc6IHNpemVzU3R5bGVbc2l6ZV0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIEhlbGxvIFdvcmxkXG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDtcbiJdfQ==