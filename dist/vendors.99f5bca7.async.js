(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js + 5 modules ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js because of ./src/layouts/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-transition-group/esm/TransitionGroupContext.js because of ./src/layouts/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("./node_modules/react-transition-group/esm/TransitionGroupContext.js");

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom_default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react_default.a.Children.only(children);
    return (// allows for nested Transitions
      react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, react_default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext["a" /* default */];
Transition_Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = 0;
Transition_Transition.EXITED = 1;
Transition_Transition.ENTERING = 2;
Transition_Transition.ENTERED = 3;
Transition_Transition.EXITING = 4;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var CSSTransition_removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition_CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      CSSTransition_removeClass(node, baseClassName);
    }

    if (activeClassName) {
      CSSTransition_removeClass(node, activeClassName);
    }

    if (doneClassName) {
      CSSTransition_removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["classNames"]);

    return react_default.a.createElement(esm_Transition, Object(esm_extends["a" /* default */])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react_default.a.Component);

CSSTransition_CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition_CSSTransition.propTypes =  false ? undefined : {};
/* harmony default export */ var esm_CSSTransition = __webpack_exports__["a"] = (CSSTransition_CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/extends.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js because of ./src/layouts/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-transition-group/esm/TransitionGroupContext.js because of ./src/layouts/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("./node_modules/react-transition-group/esm/TransitionGroupContext.js");

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react["isValidElement"])(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup_TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(esm_extends["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
      value: contextValue
    }, react_default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react_default.a.Component);

TransitionGroup_TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = __webpack_exports__["a"] = (TransitionGroup_TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/umi/lib/withRouter.js":
/*!********************************************!*\
  !*** ./node_modules/umi/lib/withRouter.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _default = _reactRouterDom.withRouter;
exports.default = _default;

/***/ }),

/***/ "./node_modules/umi/withRouter.js":
/*!****************************************!*\
  !*** ./node_modules/umi/withRouter.js ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/withRouter */ "./node_modules/umi/lib/withRouter.js").default;


/***/ }),

/***/ "./src/assets/Label.png":
/*!******************************!*\
  !*** ./src/assets/Label.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Label.f3636b5f.png";

/***/ }),

/***/ "./src/assets/join.png":
/*!*****************************!*\
  !*** ./src/assets/join.png ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAUdQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Oml7WgAAAG10Uk5TACmTv8zEo0MCnvz/whOcxwU+/Wmy5ADfHusx7DNXTXPuMtEJOm3bA/pTCKvN9ZmMve0aeuV13eIPVOGdrif5lBbofQ7aZS4bEQQQiRegWFLy8Eef4E6zvHLvkrVCJl7ZQLlRqI0cRqzeRMlsCiNTC3MAAAHXSURBVHic7dpnU8IwGAfwiOAK7r3rQBQFFVFxK04QFRcO3Ht9/9cKd3pWkjRP+sDhXf4vc0/yu+aaa5qWkPynyFHstB1XSamAKCuvoDhxV3KRKiTiK9U1HKO2Dg+h9RykAdGgjU1spBkToS1spBUVaWMj7ahIh0Y0opF/g7g6u6DpNkxIjyXS28cuEaYfiHgUDEIGYIhDxfAaMGRwCG74hoHTRWkzdI8y4qdgxHYKZZ1oRCMa0YhGNKIRjSgj/sAoNGNmxHrfNR5klwjjASITCgYhIRgyqYRMwZDpsIIxA5wuOjsXgGZ+EIrYT6GsE41oRCMaKThkIQ/IIufEDBVZYhuoiLGceyTEeS4iIiuRVZ6hiKytb2wGTdniCqpIJCoaEgcJcL6PYSJGDGioINtQw4TU+9g18R0Tsptu20v8tfcPZJBDblH06Pdox+kmd/YVJmUQwTH6SRbizEZOZRAXtyh2JoGce2UQmrq4ZObq2jQaGxEYKncXExEZWIjQQELEBg5iYaAgVgYGYmkgINaGfUTCsI3IGHYRKcMmImeo/FJy84NIGuQWjsS/EVmD3IGN+0y/B4BBSApoJB4z3aJdT/IGCT+DjBfOK4hVXpPXsnl7/1AzcpRP5XxwLIGnoXUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/qinghuida.png":
/*!**********************************!*\
  !*** ./src/assets/qinghuida.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/speak.mp3":
/*!******************************!*\
  !*** ./src/assets/speak.mp3 ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/speak.3b4d7a93.mp3";

/***/ }),

/***/ "./src/assets/start.png":
/*!******************************!*\
  !*** ./src/assets/start.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABvCAMAAAAt+5WlAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAkxQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jdOBtwAAAMR0Uk5TAAwlNj49NCYLASJuts/g6Ofe0LN+IQINTbf8//jMXw4IYdrpZxry9sCu/fmwXYCgLw/ziSxO3fvVXhSY2JsqHfeCKGn60liv/ssWAMdKK3sKMtzFQTfh5ppDO991EiNvEFcT8UK+TwfskTyXSwWLHu9xH0bXZWscw0ADtfSjjWMX258uh9RczlsYU/DkSMI6uy3TKepJUOsRcjVRCfUExFRscDjlP3eiFSd4hp5ZpO26TAYz1qEgynOdOaZ6kJLRGYiTMUPsk2QAAAOYSURBVHicvdqLP5NRGAdwhJCEseGozW1jc13aqFzKaBhGLolyaUW6h3KLFJMWIcq6uJQKFd11v/5jHZ9PH7ft3d7Led7fP/D9nLN3533e5zwODmvi6LTJ2cV1s5u7A1g8tnhu9drm7eMr8PMXggiigMAgtJLg7TvE5A1JSChal7DwCNKGyE+KNkQW6UJ2z8RR8o0GjiI6xpGcIYm1ZuBI4+JJGQnhSuvG8mp2JpJBdqkoDYTUScm7SSB7KDbrf/ampHI30tQ2DZz0ffu5Ihn2DIQ0mVkSTobkgH0EIW12Vk4ueyRNRwfBJ41nHnskP4keglOgZ4sUFtFG5AeL9ez2rKSUNoJQ2aFyeAQ/AXGHWZybDBGkrag8Ao7glMYcZbgaFgj+aUqYlQFsECRXVVWDIziqmlp4BB0TGGjvGWsE5/iJOngE1Z/0h0cw00DnoOGIIOmp02fAEVwHnj0HjyB0/sJFeASl6xol4AgunZqaE8AR/JxdugyPIFlLaxs4gkun9hAROIJQx5VCeAQ/AZ3xlmcAaQQFNXVdBUcQ6r52HR7BnzU9+fAIUvca9eAILp36bvTnQiN4zwIN8AjetJvu8AiqrxLCI8gUkAuPoFsDdfAIGrzNA4KGhDwgimEeEJTBBxIo5gEZucMDMtrKA6Ic4wHR3OUB6cjjAblXzAPSm8oDMjTOA2Lm4R+vvs8D0tIGj2Qb4N8now8egiOPjELwd7ypYAK+WskQQtdd8skp8ApSNb16MwaDyFWPq6Grem3Kk3W9MABkJuop9JeW1uuZE/g34/MGy34uWUQhaLQQCCNynXnWaiOPHKLxnZJYE0gistg5CoIYop2Z76dueRJB1CNGm/1uEojiRb4tggQifTlsm+COKKKMbvYMrkjwK6qWIDGkY8Fqo44okknRciSHyFpiaF5ssEcWp6nbwIQQ7x5GwyBsEJNgYIKJwQYxmePtX5lwQ0Y77dxjEEBev3nL2GCGmKKTWd2Vv7M1ULIhoVPj7KayEt/TNj7ksBJwPi7RE+S6ZvazZXoBLaOiyoPLkJSZxip8Po1zEHCctPYM7ecvnKfwvtpWyqKLuQo4WTO2VlH6bY7D6M1Kas3p1MiCM6GhONF3CkHTPkBGWM5spNWdWqrkMqRkqfxQWKziZ42EoLAc8XzYeoPA4JhlZrv61hDqospfJHdqNSW/J7sXlcp6n8E/rrTrEMZxj/hbPjZmcO2nUxQyyT+1PotIeToifwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/wenzi.png":
/*!******************************!*\
  !*** ./src/assets/wenzi.png ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/wenzi2.png":
/*!*******************************!*\
  !*** ./src/assets/wenzi2.png ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/yuanjing.jpeg":
/*!**********************************!*\
  !*** ./src/assets/yuanjing.jpeg ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/yuanjing.31952189.jpeg";

/***/ }),

/***/ "./src/components/join.js":
/*!********************************!*\
  !*** ./src/components/join.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./join.less */ "./src/components/join.less");
/* harmony import */ var _join_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_join_less__WEBPACK_IMPORTED_MODULE_1__);



var shareBg = __webpack_require__(/*! ../assets/yuanjing.jpeg */ "./src/assets/yuanjing.jpeg");

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _join_less__WEBPACK_IMPORTED_MODULE_1___default.a.normal,
      onClick: this.props.click
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: shareBg,
      alt: "\u52A0\u5165\u8FDC\u666F"
    }));
  }

}

/***/ }),

/***/ "./src/components/join.less":
/*!**********************************!*\
  !*** ./src/components/join.less ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"normal":"normal___3O4nd"};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: isAndroid, weixinVersion, wxConfig2 */
/*! exports used: isAndroid, weixinVersion, wxConfig2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weixinVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wxConfig2; });
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/index */ "./src/services/index.js");
 // wxConfig({
//   url: window.location.href.split('#')[0],
// }).then(res => {
//   if (res) {
//     /* global wx */
//     wx.config({
//       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//       // debug: process.env.NODE_ENV !== 'production',
//       appId: res.appid, // 必填，公众号的唯一标识
//       timestamp: res.timestamp, // 必填，生成签名的时间戳
//       nonceStr: res.noncestr, // 必填，生成签名的随机串
//       signature: res.signature, // 必填，签名
//       jsApiList: [
//         'updateTimelineShareData',
//         'updateAppMessageShareData',
//         'startRecord', // 开始录音接口
//         'stopRecord', // 停止录音接口
//         'onVoiceRecordEnd', // 监听录音自动停止接口
//         'playVoice', // 播放语音接口
//         'pauseVoice', //  暂停播放接口
//         'stopVoice', // 停止播放接口
//         'onVoicePlayEnd', // 监听语音播放完毕接口
//         'uploadVoice', // 上传语音接口
//       ], // 必填，需要使用的JS接口列表
//     });
//   }
// });

var isAndroid = () => {
  var u = window.navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
};
var weixinVersion = () => {
  var str = window.navigator.userAgent;
  var v0 = [6, 3, 31];
  var regExp = /MicroMessenger\/([\d|\.]+)/;

  if (regExp.exec(str) === null) {
    return;
  }

  var v1 = regExp.exec(str)[1].split('.');

  if (v1.length >= 4) {
    v1 = v1.slice(0, 3);
  }

  v1 = v1.map(function (v) {
    return parseInt(v, 10);
  });

  if (v1[0] > v0[0]) {
    return true;
  }

  if (v1[0] === v0[0] && v1[1] > v0[1]) {
    return true;
  }

  if (v1[0] === v0[0] && v1[1] === v0[1] && v1[2] >= v0[2]) {
    return true;
  }

  return false;
};
var wxConfig2 = () => {
  return new Promise(function (resolve, reject) {
    Object(_services_index__WEBPACK_IMPORTED_MODULE_0__[/* wxConfig */ "b"])({
      url: window.location.href.split('#')[0]
    }).then(res => {
      if (res) {
        resolve(true);
        /* global wx */

        wx.config({
          debug: true,
          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          // debug: process.env.NODE_ENV !== 'production',
          appId: res.appid,
          // 必填，公众号的唯一标识
          timestamp: res.timestamp,
          // 必填，生成签名的时间戳
          nonceStr: res.noncestr,
          // 必填，生成签名的随机串
          signature: res.signature,
          // 必填，签名
          jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData', 'startRecord', // 开始录音接口
          'stopRecord', // 停止录音接口
          'onVoiceRecordEnd', // 监听录音自动停止接口
          'playVoice', // 播放语音接口
          'pauseVoice', //  暂停播放接口
          'stopVoice', // 停止播放接口
          'onVoicePlayEnd', // 监听语音播放完毕接口
          'uploadVoice'] // 必填，需要使用的JS接口列表

        });
      } else {
        reject();
      }
    });
  });
};

/***/ })

}]);