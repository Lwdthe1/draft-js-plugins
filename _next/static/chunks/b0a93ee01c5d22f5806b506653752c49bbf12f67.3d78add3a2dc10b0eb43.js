(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    '+40x': function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return s;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('AZjN'),
        a = r.n(o),
        u = i.a.createElement;
      function s() {
        var t = Object(n.useState)(a.a.root),
          e = t[0],
          r = t[1],
          i = Object(n.useState)(a.a.separatorBase),
          o = i[0],
          s = i[1],
          c = Object(n.useState)(a.a.separatorBase),
          f = c[0],
          l = c[1],
          p = Object(n.useState)(a.a.separatorBase),
          h = p[0],
          d = p[1],
          g = Object(n.useState)(a.a.separatorBase),
          y = g[0],
          v = g[1],
          _ = Object(n.useState)(a.a.separatorBase),
          m = _[0],
          b = _[1],
          w = Object(n.useState)(a.a.separatorBase),
          S = w[0],
          k = w[1];
        return (
          Object(n.useEffect)(function () {
            var t = setTimeout(function () {
              r(a.a.rootFinal),
                s(a.a.separatorPart1),
                l(a.a.separatorPart2),
                d(a.a.separatorPart3),
                v(a.a.separatorPart4),
                b(a.a.separatorPart5),
                k(a.a.separatorPart6);
            }, 1800);
            return function () {
              clearTimeout(t);
            };
          }, []),
          u(
            'div',
            { className: e },
            u('div', { className: o }),
            u('div', { className: f }),
            u('div', { className: h }),
            u('div', { className: y }),
            u('div', { className: m }),
            u('div', { className: S })
          )
        );
      }
    },
    '+521': function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return Object.keys(t).map(function (e) {
          return t[e];
        });
      };
    },
    '+vfz': function (t, e, r) {
      'use strict';
      var n = r('7nmT').unstable_flushControlled;
      t.exports = n;
    },
    '/2Cm': function (t, e, r) {
      'use strict';
      var n = r('tBqf');
      t.exports = n;
    },
    '/Cwe': function (t, e, r) {
      'use strict';
      var n = r('euSu'),
        i = r('kuaq');
      function o(t) {
        return null == t ? t : String(t);
      }
      t.exports = function (t, e) {
        var r;
        if (window.getComputedStyle && (r = window.getComputedStyle(t, null)))
          return o(r.getPropertyValue(i(e)));
        if (document.defaultView && document.defaultView.getComputedStyle) {
          if ((r = document.defaultView.getComputedStyle(t, null)))
            return o(r.getPropertyValue(i(e)));
          if ('display' === e) return 'none';
        }
        return t.currentStyle
          ? o(
              'float' === e
                ? t.currentStyle.cssFloat || t.currentStyle.styleFloat
                : t.currentStyle[n(e)]
            )
          : o(t.style && t.style[n(e)]);
      };
    },
    '/L11': function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('tI3i');
      function a(t, e, r) {
        var a = e.getCharacterList(),
          u = r > 0 ? a.get(r - 1) : void 0,
          s = r < a.count() ? a.get(r) : void 0,
          c = u ? u.getEntity() : void 0,
          f = s ? s.getEntity() : void 0;
        if (f && f === c && 'MUTABLE' !== t.__get(f).getMutability()) {
          for (
            var l,
              p = (function (t, e, r) {
                var n;
                return (
                  i(
                    t,
                    function (t, e) {
                      return t.getEntity() === e.getEntity();
                    },
                    function (t) {
                      return t.getEntity() === e;
                    },
                    function (t, e) {
                      t <= r && e >= r && (n = { start: t, end: e });
                    }
                  ),
                  'object' !== typeof n && o(!1),
                  n
                );
              })(a, f, r),
              h = p.start,
              d = p.end;
            h < d;

          )
            (l = a.get(h)), (a = a.set(h, n.applyEntity(l, null))), h++;
          return e.set('characterList', a);
        }
        return e;
      }
      t.exports = function (t, e) {
        var r = t.getBlockMap(),
          n = t.getEntityMap(),
          i = {},
          o = e.getStartKey(),
          u = e.getStartOffset(),
          s = r.get(o),
          c = a(n, s, u);
        c !== s && (i[o] = c);
        var f = e.getEndKey(),
          l = e.getEndOffset(),
          p = r.get(f);
        o === f && (p = c);
        var h = a(n, p, l);
        return (
          h !== p && (i[f] = h),
          Object.keys(i).length
            ? t.merge({ blockMap: r.merge(i), selectionAfter: e })
            : t.set('selectionAfter', e)
        );
      };
    },
    '/LAw': function (t, e, r) {
      'use strict';
      function n(t, e) {
        var r = i.get(t, e);
        return 'auto' === r || 'scroll' === r;
      }
      var i = {
        get: r('/Cwe'),
        getScrollParent: function (t) {
          if (!t) return null;
          for (var e = t.ownerDocument; t && t !== e.body; ) {
            if (n(t, 'overflow') || n(t, 'overflowY') || n(t, 'overflowX'))
              return t;
            t = t.parentNode;
          }
          return e.defaultView || e.parentWindow;
        },
      };
      t.exports = i;
    },
    '/jhs': function (t, e, r) {
      'use strict';
      var n = {
        isImage: function (t) {
          return 'image' === i(t)[0];
        },
        isJpeg: function (t) {
          var e = i(t);
          return n.isImage(t) && ('jpeg' === e[1] || 'pjpeg' === e[1]);
        },
      };
      function i(t) {
        return t.split('/');
      }
      t.exports = n;
    },
    '0Gcc': function (t, e, r) {
      'use strict';
      var n = r('iogJ'),
        i = r('1xkk'),
        o = r('1AUG'),
        a = r('4aXP');
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset();
            if (0 === r) return o(t, 1);
            var i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r),
              u = n.getBackward(a);
            return o(t, u.length || 1);
          },
          'backward'
        );
        return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
      };
    },
    '0Uhd': function (t, e, r) {
      'use strict';
      (function (e) {
        var n = r('Km8e');
        function i() {
          return (i =
            n ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
        }
        function o(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            'function' === typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
              )),
              n.forEach(function (e) {
                u(t, e, r[e]);
              });
          }
          return t;
        }
        function a(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function u(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function s(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        var c = r('VUbk'),
          f = r('naKV'),
          l = r('fpFo'),
          p = r('QAfK'),
          h = r('UfDk'),
          d = r('QVkg'),
          g = r('+vfz'),
          y = r('tRbA'),
          v = r('Ea6c'),
          _ = r('1xkk'),
          m = r('ERkP'),
          b = r('O+2R'),
          w = r('/LAw'),
          S = r('rim0'),
          k = r('2Wwg'),
          x = r('YSZ8'),
          E = r('gZn9'),
          O = r('7MNd'),
          C = r('ZUd0'),
          D = r('tI3i'),
          M = r('gUTI'),
          I = r('hF1F'),
          K = S.isBrowser('IE'),
          A = !K,
          T = { edit: d, composite: l, drag: h, cut: null, render: null },
          B = !1,
          R = (function (t) {
            function e() {
              return t.apply(this, arguments) || this;
            }
            s(e, t);
            var r = e.prototype;
            return (
              (r.render = function () {
                return null;
              }),
              (r.componentDidMount = function () {
                this._update();
              }),
              (r.componentDidUpdate = function () {
                this._update();
              }),
              (r._update = function () {
                var t = this.props.editor;
                (t._latestEditorState = this.props.editorState),
                  (t._blockSelectEvents = !0);
              }),
              e
            );
          })(m.Component),
          z = (function (t) {
            function r(e) {
              var r;
              return (
                u(
                  a((r = t.call(this, e) || this)),
                  '_blockSelectEvents',
                  void 0
                ),
                u(a(r), '_clipboard', void 0),
                u(a(r), '_handler', void 0),
                u(a(r), '_dragCount', void 0),
                u(a(r), '_internalDrag', void 0),
                u(a(r), '_editorKey', void 0),
                u(a(r), '_placeholderAccessibilityID', void 0),
                u(a(r), '_latestEditorState', void 0),
                u(a(r), '_latestCommittedEditorState', void 0),
                u(a(r), '_pendingStateFromBeforeInput', void 0),
                u(a(r), '_onBeforeInput', void 0),
                u(a(r), '_onBlur', void 0),
                u(a(r), '_onCharacterData', void 0),
                u(a(r), '_onCompositionEnd', void 0),
                u(a(r), '_onCompositionStart', void 0),
                u(a(r), '_onCopy', void 0),
                u(a(r), '_onCut', void 0),
                u(a(r), '_onDragEnd', void 0),
                u(a(r), '_onDragOver', void 0),
                u(a(r), '_onDragStart', void 0),
                u(a(r), '_onDrop', void 0),
                u(a(r), '_onInput', void 0),
                u(a(r), '_onFocus', void 0),
                u(a(r), '_onKeyDown', void 0),
                u(a(r), '_onKeyPress', void 0),
                u(a(r), '_onKeyUp', void 0),
                u(a(r), '_onMouseDown', void 0),
                u(a(r), '_onMouseUp', void 0),
                u(a(r), '_onPaste', void 0),
                u(a(r), '_onSelect', void 0),
                u(a(r), 'editor', void 0),
                u(a(r), 'editorContainer', void 0),
                u(a(r), 'focus', void 0),
                u(a(r), 'blur', void 0),
                u(a(r), 'setMode', void 0),
                u(a(r), 'exitCurrentMode', void 0),
                u(a(r), 'restoreEditorDOM', void 0),
                u(a(r), 'setClipboard', void 0),
                u(a(r), 'getClipboard', void 0),
                u(a(r), 'getEditorKey', void 0),
                u(a(r), 'update', void 0),
                u(a(r), 'onDragEnter', void 0),
                u(a(r), 'onDragLeave', void 0),
                u(a(r), '_handleEditorContainerRef', function (t) {
                  (r.editorContainer = t),
                    (r.editor = null !== t ? t.firstChild : null);
                }),
                u(a(r), 'focus', function (t) {
                  var e = r.props.editorState,
                    n = e.getSelection().getHasFocus(),
                    i = r.editor;
                  if (i) {
                    var o = w.getScrollParent(i),
                      a = t || O(o),
                      u = a.x,
                      s = a.y;
                    M(i) || D(!1),
                      i.focus(),
                      o === window ? window.scrollTo(u, s) : b.setTop(o, s),
                      n || r.update(_.forceSelection(e, e.getSelection()));
                  }
                }),
                u(a(r), 'blur', function () {
                  var t = r.editor;
                  t && (M(t) || D(!1), t.blur());
                }),
                u(a(r), 'setMode', function (t) {
                  var e = r.props,
                    n = e.onPaste,
                    i = e.onCut,
                    a = e.onCopy,
                    u = o({}, T.edit);
                  n && (u.onPaste = n), i && (u.onCut = i), a && (u.onCopy = a);
                  var s = o({}, T, { edit: u });
                  r._handler = s[t];
                }),
                u(a(r), 'exitCurrentMode', function () {
                  r.setMode('edit');
                }),
                u(a(r), 'restoreEditorDOM', function (t) {
                  r.setState(
                    { contentsKey: r.state.contentsKey + 1 },
                    function () {
                      r.focus(t);
                    }
                  );
                }),
                u(a(r), 'setClipboard', function (t) {
                  r._clipboard = t;
                }),
                u(a(r), 'getClipboard', function () {
                  return r._clipboard;
                }),
                u(a(r), 'update', function (t) {
                  (r._latestEditorState = t), r.props.onChange(t);
                }),
                u(a(r), 'onDragEnter', function () {
                  r._dragCount++;
                }),
                u(a(r), 'onDragLeave', function () {
                  r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
                }),
                (r._blockSelectEvents = !1),
                (r._clipboard = null),
                (r._handler = null),
                (r._dragCount = 0),
                (r._editorKey = e.editorKey || x()),
                (r._placeholderAccessibilityID = 'placeholder-' + r._editorKey),
                (r._latestEditorState = e.editorState),
                (r._latestCommittedEditorState = e.editorState),
                (r._onBeforeInput = r._buildHandler('onBeforeInput')),
                (r._onBlur = r._buildHandler('onBlur')),
                (r._onCharacterData = r._buildHandler('onCharacterData')),
                (r._onCompositionEnd = r._buildHandler('onCompositionEnd')),
                (r._onCompositionStart = r._buildHandler('onCompositionStart')),
                (r._onCopy = r._buildHandler('onCopy')),
                (r._onCut = r._buildHandler('onCut')),
                (r._onDragEnd = r._buildHandler('onDragEnd')),
                (r._onDragOver = r._buildHandler('onDragOver')),
                (r._onDragStart = r._buildHandler('onDragStart')),
                (r._onDrop = r._buildHandler('onDrop')),
                (r._onInput = r._buildHandler('onInput')),
                (r._onFocus = r._buildHandler('onFocus')),
                (r._onKeyDown = r._buildHandler('onKeyDown')),
                (r._onKeyPress = r._buildHandler('onKeyPress')),
                (r._onKeyUp = r._buildHandler('onKeyUp')),
                (r._onMouseDown = r._buildHandler('onMouseDown')),
                (r._onMouseUp = r._buildHandler('onMouseUp')),
                (r._onPaste = r._buildHandler('onPaste')),
                (r._onSelect = r._buildHandler('onSelect')),
                (r.getEditorKey = function () {
                  return r._editorKey;
                }),
                (r.state = { contentsKey: 0 }),
                r
              );
            }
            s(r, t);
            var n = r.prototype;
            return (
              (n._buildHandler = function (t) {
                var e = this;
                return function (r) {
                  if (!e.props.readOnly) {
                    var n = e._handler && e._handler[t];
                    n &&
                      (g
                        ? g(function () {
                            return n(e, r);
                          })
                        : n(e, r));
                  }
                };
              }),
              (n._showPlaceholder = function () {
                return (
                  !!this.props.placeholder &&
                  !this.props.editorState.isInCompositionMode() &&
                  !this.props.editorState.getCurrentContent().hasText()
                );
              }),
              (n._renderPlaceholder = function () {
                if (this._showPlaceholder()) {
                  var t = {
                    text: I(this.props.placeholder),
                    editorState: this.props.editorState,
                    textAlignment: this.props.textAlignment,
                    accessibilityID: this._placeholderAccessibilityID,
                  };
                  return m.createElement(y, t);
                }
                return null;
              }),
              (n._renderARIADescribedBy = function () {
                var t = this.props.ariaDescribedBy || '',
                  e = this._showPlaceholder()
                    ? this._placeholderAccessibilityID
                    : '';
                return t.replace('{{editor_id_placeholder}}', e) || void 0;
              }),
              (n.render = function () {
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  a = t.customStyleFn,
                  u = t.customStyleMap,
                  s = t.editorState,
                  c = t.preventScroll,
                  l = t.readOnly,
                  h = t.textAlignment,
                  d = t.textDirectionality,
                  g = k({
                    'DraftEditor/root': !0,
                    'DraftEditor/alignLeft': 'left' === h,
                    'DraftEditor/alignRight': 'right' === h,
                    'DraftEditor/alignCenter': 'center' === h,
                  }),
                  y = this.props.role || 'textbox',
                  v = 'combobox' === y ? !!this.props.ariaExpanded : null,
                  _ = {
                    blockRenderMap: e,
                    blockRendererFn: r,
                    blockStyleFn: n,
                    customStyleMap: o({}, f, u),
                    customStyleFn: a,
                    editorKey: this._editorKey,
                    editorState: s,
                    preventScroll: c,
                    textDirectionality: d,
                  };
                return m.createElement(
                  'div',
                  { className: g },
                  this._renderPlaceholder(),
                  m.createElement(
                    'div',
                    {
                      className: k('DraftEditor/editorContainer'),
                      ref: this._handleEditorContainerRef,
                    },
                    m.createElement(
                      'div',
                      {
                        'aria-activedescendant': l
                          ? null
                          : this.props.ariaActiveDescendantID,
                        'aria-autocomplete': l
                          ? null
                          : this.props.ariaAutoComplete,
                        'aria-controls': l ? null : this.props.ariaControls,
                        'aria-describedby': this._renderARIADescribedBy(),
                        'aria-expanded': l ? null : v,
                        'aria-label': this.props.ariaLabel,
                        'aria-labelledby': this.props.ariaLabelledBy,
                        'aria-multiline': this.props.ariaMultiline,
                        'aria-owns': l ? null : this.props.ariaOwneeID,
                        autoCapitalize: this.props.autoCapitalize,
                        autoComplete: this.props.autoComplete,
                        autoCorrect: this.props.autoCorrect,
                        className: k({
                          notranslate: !l,
                          'public/DraftEditor/content': !0,
                        }),
                        contentEditable: !l,
                        'data-testid': this.props.webDriverTestID,
                        onBeforeInput: this._onBeforeInput,
                        onBlur: this._onBlur,
                        onCompositionEnd: this._onCompositionEnd,
                        onCompositionStart: this._onCompositionStart,
                        onCopy: this._onCopy,
                        onCut: this._onCut,
                        onDragEnd: this._onDragEnd,
                        onDragEnter: this.onDragEnter,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this._onDragOver,
                        onDragStart: this._onDragStart,
                        onDrop: this._onDrop,
                        onFocus: this._onFocus,
                        onInput: this._onInput,
                        onKeyDown: this._onKeyDown,
                        onKeyPress: this._onKeyPress,
                        onKeyUp: this._onKeyUp,
                        onMouseUp: this._onMouseUp,
                        onPaste: this._onPaste,
                        onSelect: this._onSelect,
                        ref: this.props.editorRef,
                        role: l ? null : y,
                        spellCheck: A && this.props.spellCheck,
                        style: {
                          outline: 'none',
                          userSelect: 'text',
                          WebkitUserSelect: 'text',
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word',
                        },
                        suppressContentEditableWarning: !0,
                        tabIndex: this.props.tabIndex,
                      },
                      m.createElement(R, { editor: this, editorState: s }),
                      m.createElement(
                        p,
                        i({}, _, { key: 'contents' + this.state.contentsKey })
                      )
                    )
                  )
                );
              }),
              (n.componentDidMount = function () {
                (this._blockSelectEvents = !1),
                  !B && C('draft_ods_enabled') && ((B = !0), v.initODS()),
                  this.setMode('edit'),
                  K &&
                    (this.editor
                      ? this.editor.ownerDocument.execCommand(
                          'AutoUrlDetect',
                          !1,
                          !1
                        )
                      : e.execCommand('AutoUrlDetect', !1, !1));
              }),
              (n.componentDidUpdate = function () {
                (this._blockSelectEvents = !1),
                  (this._latestEditorState = this.props.editorState),
                  (this._latestCommittedEditorState = this.props.editorState);
              }),
              r
            );
          })(m.Component);
        u(z, 'defaultProps', {
          ariaDescribedBy: '{{editor_id_placeholder}}',
          blockRenderMap: c,
          blockRendererFn: function () {
            return null;
          },
          blockStyleFn: function () {
            return '';
          },
          keyBindingFn: E,
          readOnly: !1,
          spellCheck: !1,
          stripPastedStyles: !1,
        }),
          (t.exports = z);
      }.call(this, r('lpmq')));
    },
    '1+m/': function (t, e, r) {
      'use strict';
      var n = r('Ea6c'),
        i = r('Cfxn'),
        o = r('rim0'),
        a = r('iN4q'),
        u = r('2KzS'),
        s = r('vYw2'),
        c = r('tI3i'),
        f = r('13UR'),
        l = o.isBrowser('IE');
      function p(t, e) {
        if (!t) return '[empty]';
        var r = h(t, e);
        return r.nodeType === Node.TEXT_NODE
          ? r.textContent
          : (f(r) || c(!1), r.outerHTML);
      }
      function h(t, e) {
        var r = void 0 !== e ? e(t) : [];
        if (t.nodeType === Node.TEXT_NODE) {
          var n = t.textContent.length;
          return s(t).createTextNode(
            '[text ' + n + (r.length ? ' | ' + r.join(', ') : '') + ']'
          );
        }
        var i = t.cloneNode();
        1 === i.nodeType &&
          r.length &&
          i.setAttribute('data-labels', r.join(', '));
        for (var o = t.childNodes, a = 0; a < o.length; a++)
          i.appendChild(h(o[a], e));
        return i;
      }
      function d(t, e) {
        for (var r = t, n = r; r; ) {
          if (f(r) && n.hasAttribute('contenteditable')) return p(r, e);
          n = r = r.parentNode;
        }
        return 'Could not find contentEditable parent of node';
      }
      function g(t) {
        return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
      }
      function y(t, e, r, n) {
        var o = u();
        if (t.extend && null != e && a(o, e)) {
          r > g(e) &&
            i.logSelectionStateFailure({
              anonymizedDom: d(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(n.toJS()),
            });
          var s = e === t.focusNode;
          try {
            t.rangeCount > 0 && t.extend && t.extend(e, r);
          } catch (f) {
            throw (
              (i.logSelectionStateFailure({
                anonymizedDom: d(e, function (e) {
                  var r = [];
                  return (
                    e === o && r.push('active element'),
                    e === t.anchorNode && r.push('selection anchor node'),
                    e === t.focusNode && r.push('selection focus node'),
                    r
                  );
                }),
                extraParams: JSON.stringify(
                  {
                    activeElementName: o ? o.nodeName : null,
                    nodeIsFocus: e === t.focusNode,
                    nodeWasFocus: s,
                    selectionRangeCount: t.rangeCount,
                    selectionAnchorNodeName: t.anchorNode
                      ? t.anchorNode.nodeName
                      : null,
                    selectionAnchorOffset: t.anchorOffset,
                    selectionFocusNodeName: t.focusNode
                      ? t.focusNode.nodeName
                      : null,
                    selectionFocusOffset: t.focusOffset,
                    message: f ? '' + f : null,
                    offset: r,
                  },
                  null,
                  2
                ),
                selectionState: JSON.stringify(n.toJS(), null, 2),
              }),
              f)
            );
          }
        } else if (e && t.rangeCount > 0) {
          var c = t.getRangeAt(0);
          c.setEnd(e, r), t.addRange(c.cloneRange());
        }
      }
      function v(t, e, r, o) {
        var a = s(e).createRange();
        if (
          (r > g(e) &&
            (i.logSelectionStateFailure({
              anonymizedDom: d(e),
              extraParams: JSON.stringify({ offset: r }),
              selectionState: JSON.stringify(o.toJS()),
            }),
            n.handleExtensionCausedError()),
          a.setStart(e, r),
          l)
        )
          try {
            t.addRange(a);
          } catch (u) {
            0;
          }
        else t.addRange(a);
      }
      t.exports = {
        setDraftEditorSelection: function (t, e, r, n, i) {
          var o = s(e);
          if (a(o.documentElement, e)) {
            var u = o.defaultView.getSelection(),
              c = t.getAnchorKey(),
              f = t.getAnchorOffset(),
              l = t.getFocusKey(),
              p = t.getFocusOffset(),
              h = t.getIsBackward();
            if (!u.extend && h) {
              var d = c,
                g = f;
              (c = l), (f = p), (l = d), (p = g), (h = !1);
            }
            var _ = c === r && n <= f && i >= f,
              m = l === r && n <= p && i >= p;
            if (_ && m)
              return (
                u.removeAllRanges(), v(u, e, f - n, t), void y(u, e, p - n, t)
              );
            if (h) {
              if ((m && (u.removeAllRanges(), v(u, e, p - n, t)), _)) {
                var b = u.focusNode,
                  w = u.focusOffset;
                u.removeAllRanges(), v(u, e, f - n, t), y(u, b, w, t);
              }
            } else
              _ && (u.removeAllRanges(), v(u, e, f - n, t)),
                m && y(u, e, p - n, t);
          }
        },
        addFocusToSelection: y,
      };
    },
    '13UR': function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && t.nodeType === Node.ELEMENT_NODE;
      };
    },
    '1AUG': function (t, e, r) {
      'use strict';
      r('/2Cm');
      t.exports = function (t, e) {
        var r = t.getSelection(),
          n = t.getCurrentContent(),
          i = r.getStartKey(),
          o = r.getStartOffset(),
          a = i,
          u = 0;
        if (e > o) {
          var s = n.getKeyBefore(i);
          if (null == s) a = i;
          else (a = s), (u = n.getBlockForKey(s).getText().length);
        } else u = o - e;
        return r.merge({ focusKey: a, focusOffset: u, isBackward: !0 });
      };
    },
    '1MwI': function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return h;
      });
      var n = r('9fIP'),
        i = r('MMYH'),
        o = r('pWxA'),
        a = r('8K1b'),
        u = r('K/z8'),
        s = r('sRHE'),
        c = r('zjfJ'),
        f = r('ERkP'),
        l = r.n(f).a.createElement;
      function p(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(s.a)(t);
          if (e) {
            var i = Object(s.a)(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return Object(u.a)(this, r);
        };
      }
      var h = (function (t) {
        Object(a.a)(r, t);
        var e = p(r);
        function r() {
          var t;
          Object(n.a)(this, r);
          for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
            a[u] = arguments[u];
          return (
            (t = e.call.apply(e, [this].concat(a))),
            Object(c.a)(Object(o.a)(t), 'githubButton', void 0),
            Object(c.a)(Object(o.a)(t), 'shouldComponentUpdate', function () {
              return !1;
            }),
            t
          );
        }
        return (
          Object(i.a)(r, [
            {
              key: 'componentDidMount',
              value: function () {
                var t = document.createElement('script');
                (t.src = '//buttons.github.io/buttons.js'),
                  (t.id = 'github-bjs'),
                  this.githubButton.parentNode.appendChild(t);
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var t = document.getElementById('github-bjs');
                t && t.parentNode.removeChild(t);
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props.text ? this.props.text : 'Github',
                  r = this.props,
                  n = r.user,
                  i = r.repo,
                  o = r.size;
                return l(
                  'a',
                  {
                    ref: function (e) {
                      t.githubButton = e;
                    },
                    className: 'github-button',
                    href: 'https://github.com/'.concat(n, '/').concat(i),
                    'data-size': o,
                    'data-show-count': 'true',
                    'aria-label':
                      'Star draft-js-plugins/draft-js-plugins on GitHub',
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(f.Component);
    },
    '1xkk': function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('VUYy'),
        a = r('VeLA'),
        u = r('Yed0'),
        s = r('IDEf'),
        c = r('3Hp6'),
        f = c.OrderedSet,
        l = c.Record,
        p = c.Stack,
        h = c.OrderedMap,
        d = c.List,
        g = l({
          allowUndo: !0,
          currentContent: null,
          decorator: null,
          directionMap: null,
          forceSelection: !1,
          inCompositionMode: !1,
          inlineStyleOverride: null,
          lastChangeType: null,
          nativelyRenderedContent: null,
          redoStack: p(),
          selection: null,
          treeMap: null,
          undoStack: p(),
        }),
        y = (function () {
          (e.createEmpty = function (t) {
            return this.createWithText('', t);
          }),
            (e.createWithText = function (t, r) {
              return e.createWithContent(a.createFromText(t), r);
            }),
            (e.createWithContent = function (t, r) {
              if (0 === t.getBlockMap().count()) return e.createEmpty(r);
              var n = t.getBlockMap().first().getKey();
              return e.create({
                currentContent: t,
                undoStack: p(),
                redoStack: p(),
                decorator: r || null,
                selection: s.createEmpty(n),
              });
            }),
            (e.create = function (t) {
              var r = t.currentContent,
                i = n({}, t, {
                  treeMap: _(r, t.decorator),
                  directionMap: u.getDirectionMap(r),
                });
              return new e(new g(i));
            }),
            (e.fromJS = function (t) {
              return new e(
                new g(
                  n({}, t, {
                    directionMap:
                      null != t.directionMap
                        ? h(t.directionMap)
                        : t.directionMap,
                    inlineStyleOverride:
                      null != t.inlineStyleOverride
                        ? f(t.inlineStyleOverride)
                        : t.inlineStyleOverride,
                    nativelyRenderedContent:
                      null != t.nativelyRenderedContent
                        ? a.fromJS(t.nativelyRenderedContent)
                        : t.nativelyRenderedContent,
                    redoStack:
                      null != t.redoStack
                        ? p(
                            t.redoStack.map(function (t) {
                              return a.fromJS(t);
                            })
                          )
                        : t.redoStack,
                    selection:
                      null != t.selection ? new s(t.selection) : t.selection,
                    treeMap:
                      null != t.treeMap
                        ? h(t.treeMap).map(function (t) {
                            return d(t).map(function (t) {
                              return o.fromJS(t);
                            });
                          })
                        : t.treeMap,
                    undoStack:
                      null != t.undoStack
                        ? p(
                            t.undoStack.map(function (t) {
                              return a.fromJS(t);
                            })
                          )
                        : t.undoStack,
                    currentContent: a.fromJS(t.currentContent),
                  })
                )
              );
            }),
            (e.set = function (t, r) {
              return new e(
                t.getImmutable().withMutations(function (e) {
                  var n = e.get('decorator'),
                    i = n;
                  null === r.decorator
                    ? (i = null)
                    : r.decorator && (i = r.decorator);
                  var a = r.currentContent || t.getCurrentContent();
                  if (i !== n) {
                    var u,
                      s = e.get('treeMap');
                    return (
                      (u =
                        i && n
                          ? (function (t, e, r, n, i) {
                              return r.merge(
                                e
                                  .toSeq()
                                  .filter(function (e) {
                                    return (
                                      n.getDecorations(e, t) !==
                                      i.getDecorations(e, t)
                                    );
                                  })
                                  .map(function (e) {
                                    return o.generate(t, e, n);
                                  })
                              );
                            })(a, a.getBlockMap(), s, i, n)
                          : _(a, i)),
                      void e.merge({
                        decorator: i,
                        treeMap: u,
                        nativelyRenderedContent: null,
                      })
                    );
                  }
                  a !== t.getCurrentContent() &&
                    e.set(
                      'treeMap',
                      (function (t, e, r, n) {
                        var i = t.getCurrentContent().set('entityMap', r),
                          a = i.getBlockMap();
                        return t
                          .getImmutable()
                          .get('treeMap')
                          .merge(
                            e
                              .toSeq()
                              .filter(function (t, e) {
                                return t !== a.get(e);
                              })
                              .map(function (t) {
                                return o.generate(i, t, n);
                              })
                          );
                      })(t, a.getBlockMap(), a.getEntityMap(), i)
                    ),
                    e.merge(r);
                })
              );
            });
          var t = e.prototype;
          function e(t) {
            i(this, '_immutable', void 0), (this._immutable = t);
          }
          return (
            (t.toJS = function () {
              return this.getImmutable().toJS();
            }),
            (t.getAllowUndo = function () {
              return this.getImmutable().get('allowUndo');
            }),
            (t.getCurrentContent = function () {
              return this.getImmutable().get('currentContent');
            }),
            (t.getUndoStack = function () {
              return this.getImmutable().get('undoStack');
            }),
            (t.getRedoStack = function () {
              return this.getImmutable().get('redoStack');
            }),
            (t.getSelection = function () {
              return this.getImmutable().get('selection');
            }),
            (t.getDecorator = function () {
              return this.getImmutable().get('decorator');
            }),
            (t.isInCompositionMode = function () {
              return this.getImmutable().get('inCompositionMode');
            }),
            (t.mustForceSelection = function () {
              return this.getImmutable().get('forceSelection');
            }),
            (t.getNativelyRenderedContent = function () {
              return this.getImmutable().get('nativelyRenderedContent');
            }),
            (t.getLastChangeType = function () {
              return this.getImmutable().get('lastChangeType');
            }),
            (t.getInlineStyleOverride = function () {
              return this.getImmutable().get('inlineStyleOverride');
            }),
            (e.setInlineStyleOverride = function (t, r) {
              return e.set(t, { inlineStyleOverride: r });
            }),
            (t.getCurrentInlineStyle = function () {
              var t = this.getInlineStyleOverride();
              if (null != t) return t;
              var e = this.getCurrentContent(),
                r = this.getSelection();
              return r.isCollapsed()
                ? (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r);
                    if (n > 0) return i.getInlineStyleAt(n - 1);
                    if (i.getLength()) return i.getInlineStyleAt(0);
                    return b(t, r);
                  })(e, r)
                : (function (t, e) {
                    var r = e.getStartKey(),
                      n = e.getStartOffset(),
                      i = t.getBlockForKey(r);
                    if (n < i.getLength()) return i.getInlineStyleAt(n);
                    if (n > 0) return i.getInlineStyleAt(n - 1);
                    return b(t, r);
                  })(e, r);
            }),
            (t.getBlockTree = function (t) {
              return this.getImmutable().getIn(['treeMap', t]);
            }),
            (t.isSelectionAtStartOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().first().getKey();
              return this.getSelection().hasEdgeWithin(t, 0, 0);
            }),
            (t.isSelectionAtEndOfContent = function () {
              var t = this.getCurrentContent().getBlockMap().last(),
                e = t.getLength();
              return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
            }),
            (t.getDirectionMap = function () {
              return this.getImmutable().get('directionMap');
            }),
            (e.acceptSelection = function (t, e) {
              return v(t, e, !1);
            }),
            (e.forceSelection = function (t, e) {
              return (
                e.getHasFocus() || (e = e.set('hasFocus', !0)), v(t, e, !0)
              );
            }),
            (e.moveSelectionToEnd = function (t) {
              var r = t.getCurrentContent().getLastBlock(),
                n = r.getKey(),
                i = r.getLength();
              return e.acceptSelection(
                t,
                new s({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: n,
                  focusOffset: i,
                  isBackward: !1,
                })
              );
            }),
            (e.moveFocusToEnd = function (t) {
              var r = e.moveSelectionToEnd(t);
              return e.forceSelection(r, r.getSelection());
            }),
            (e.push = function (t, r, n) {
              var i =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3];
              if (t.getCurrentContent() === r) return t;
              var o = u.getDirectionMap(r, t.getDirectionMap());
              if (!t.getAllowUndo())
                return e.set(t, {
                  currentContent: r,
                  directionMap: o,
                  lastChangeType: n,
                  selection: r.getSelectionAfter(),
                  forceSelection: i,
                  inlineStyleOverride: null,
                });
              var a = t.getSelection(),
                s = t.getCurrentContent(),
                c = t.getUndoStack(),
                f = r;
              a !== s.getSelectionAfter() || m(t, n)
                ? ((c = c.push(s)), (f = f.set('selectionBefore', a)))
                : ('insert-characters' !== n &&
                    'backspace-character' !== n &&
                    'delete-character' !== n) ||
                  (f = f.set('selectionBefore', s.getSelectionBefore()));
              var l = t.getInlineStyleOverride(),
                h = ['adjust-depth', 'change-block-type', 'split-block'];
              -1 === h.indexOf(n) && (l = null);
              var d = {
                currentContent: f,
                directionMap: o,
                undoStack: c,
                redoStack: p(),
                lastChangeType: n,
                selection: r.getSelectionAfter(),
                forceSelection: i,
                inlineStyleOverride: l,
              };
              return e.set(t, d);
            }),
            (e.undo = function (t) {
              if (!t.getAllowUndo()) return t;
              var r = t.getUndoStack(),
                n = r.peek();
              if (!n) return t;
              var i = t.getCurrentContent(),
                o = u.getDirectionMap(n, t.getDirectionMap());
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: r.shift(),
                redoStack: t.getRedoStack().push(i),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'undo',
                nativelyRenderedContent: null,
                selection: i.getSelectionBefore(),
              });
            }),
            (e.redo = function (t) {
              if (!t.getAllowUndo()) return t;
              var r = t.getRedoStack(),
                n = r.peek();
              if (!n) return t;
              var i = t.getCurrentContent(),
                o = u.getDirectionMap(n, t.getDirectionMap());
              return e.set(t, {
                currentContent: n,
                directionMap: o,
                undoStack: t.getUndoStack().push(i),
                redoStack: r.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'redo',
                nativelyRenderedContent: null,
                selection: n.getSelectionAfter(),
              });
            }),
            (t.getImmutable = function () {
              return this._immutable;
            }),
            e
          );
        })();
      function v(t, e, r) {
        return y.set(t, {
          selection: e,
          forceSelection: r,
          nativelyRenderedContent: null,
          inlineStyleOverride: null,
        });
      }
      function _(t, e) {
        return t
          .getBlockMap()
          .map(function (r) {
            return o.generate(t, r, e);
          })
          .toOrderedMap();
      }
      function m(t, e) {
        return (
          e !== t.getLastChangeType() ||
          ('insert-characters' !== e &&
            'backspace-character' !== e &&
            'delete-character' !== e)
        );
      }
      function b(t, e) {
        var r = t
          .getBlockMap()
          .reverse()
          .skipUntil(function (t, r) {
            return r === e;
          })
          .skip(1)
          .skipUntil(function (t, e) {
            return t.getLength();
          })
          .first();
        return r ? r.getInlineStyleAt(r.getLength() - 1) : f();
      }
      t.exports = y;
    },
    '2KzS': function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        if (
          'undefined' ===
          typeof (t =
            t || ('undefined' !== typeof document ? document : void 0))
        )
          return null;
        try {
          return t.activeElement || t.body;
        } catch (e) {
          return t.body;
        }
      };
    },
    '2Wwg': function (t, e, r) {
      'use strict';
      function n(t) {
        return t.replace(/\//g, '-');
      }
      t.exports = function (t) {
        return 'object' == typeof t
          ? Object.keys(t)
              .filter(function (e) {
                return t[e];
              })
              .map(n)
              .join(' ')
          : Array.prototype.map.call(arguments, n).join(' ');
      };
    },
    '3Hp6': function (t, e, r) {
      t.exports = (function () {
        'use strict';
        var t = Array.prototype.slice;
        function e(t, e) {
          e && (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t);
        }
        function r(t) {
          return a(t) ? t : J(t);
        }
        function n(t) {
          return u(t) ? t : Y(t);
        }
        function i(t) {
          return s(t) ? t : G(t);
        }
        function o(t) {
          return a(t) && !c(t) ? t : X(t);
        }
        function a(t) {
          return !(!t || !t[l]);
        }
        function u(t) {
          return !(!t || !t[p]);
        }
        function s(t) {
          return !(!t || !t[h]);
        }
        function c(t) {
          return u(t) || s(t);
        }
        function f(t) {
          return !(!t || !t[d]);
        }
        e(n, r),
          e(i, r),
          e(o, r),
          (r.isIterable = a),
          (r.isKeyed = u),
          (r.isIndexed = s),
          (r.isAssociative = c),
          (r.isOrdered = f),
          (r.Keyed = n),
          (r.Indexed = i),
          (r.Set = o);
        var l = '@@__IMMUTABLE_ITERABLE__@@',
          p = '@@__IMMUTABLE_KEYED__@@',
          h = '@@__IMMUTABLE_INDEXED__@@',
          d = '@@__IMMUTABLE_ORDERED__@@',
          g = 'delete',
          y = 5,
          v = 1 << y,
          _ = v - 1,
          m = {},
          b = { value: !1 },
          w = { value: !1 };
        function S(t) {
          return (t.value = !1), t;
        }
        function k(t) {
          t && (t.value = !0);
        }
        function x() {}
        function E(t, e) {
          e = e || 0;
          for (
            var r = Math.max(0, t.length - e), n = new Array(r), i = 0;
            i < r;
            i++
          )
            n[i] = t[i + e];
          return n;
        }
        function O(t) {
          return void 0 === t.size && (t.size = t.__iterate(D)), t.size;
        }
        function C(t, e) {
          if ('number' !== typeof e) {
            var r = e >>> 0;
            if ('' + r !== e || 4294967295 === r) return NaN;
            e = r;
          }
          return e < 0 ? O(t) + e : e;
        }
        function D() {
          return !0;
        }
        function M(t, e, r) {
          return (
            (0 === t || (void 0 !== r && t <= -r)) &&
            (void 0 === e || (void 0 !== r && e >= r))
          );
        }
        function I(t, e) {
          return A(t, e, 0);
        }
        function K(t, e) {
          return A(t, e, e);
        }
        function A(t, e, r) {
          return void 0 === t
            ? r
            : t < 0
            ? Math.max(0, e + t)
            : void 0 === e
            ? t
            : Math.min(e, t);
        }
        var T = 0,
          B = 1,
          R = 2,
          z = 'function' === typeof Symbol && Symbol.iterator,
          L = '@@iterator',
          P = z || L;
        function F(t) {
          this.next = t;
        }
        function N(t, e, r, n) {
          var i = 0 === t ? e : 1 === t ? r : [e, r];
          return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        function U(t) {
          return !!W(t);
        }
        function q(t) {
          return t && 'function' === typeof t.next;
        }
        function H(t) {
          var e = W(t);
          return e && e.call(t);
        }
        function W(t) {
          var e = t && ((z && t[z]) || t[L]);
          if ('function' === typeof e) return e;
        }
        function V(t) {
          return t && 'number' === typeof t.length;
        }
        function J(t) {
          return null === t || void 0 === t ? at() : a(t) ? t.toSeq() : ct(t);
        }
        function Y(t) {
          return null === t || void 0 === t
            ? at().toKeyedSeq()
            : a(t)
            ? u(t)
              ? t.toSeq()
              : t.fromEntrySeq()
            : ut(t);
        }
        function G(t) {
          return null === t || void 0 === t
            ? at()
            : a(t)
            ? u(t)
              ? t.entrySeq()
              : t.toIndexedSeq()
            : st(t);
        }
        function X(t) {
          return (null === t || void 0 === t
            ? at()
            : a(t)
            ? u(t)
              ? t.entrySeq()
              : t
            : st(t)
          ).toSetSeq();
        }
        (F.prototype.toString = function () {
          return '[Iterator]';
        }),
          (F.KEYS = T),
          (F.VALUES = B),
          (F.ENTRIES = R),
          (F.prototype.inspect = F.prototype.toSource = function () {
            return this.toString();
          }),
          (F.prototype[P] = function () {
            return this;
          }),
          e(J, r),
          (J.of = function () {
            return J(arguments);
          }),
          (J.prototype.toSeq = function () {
            return this;
          }),
          (J.prototype.toString = function () {
            return this.__toString('Seq {', '}');
          }),
          (J.prototype.cacheResult = function () {
            return (
              !this._cache &&
                this.__iterateUncached &&
                ((this._cache = this.entrySeq().toArray()),
                (this.size = this._cache.length)),
              this
            );
          }),
          (J.prototype.__iterate = function (t, e) {
            return lt(this, t, e, !0);
          }),
          (J.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !0);
          }),
          e(Y, J),
          (Y.prototype.toKeyedSeq = function () {
            return this;
          }),
          e(G, J),
          (G.of = function () {
            return G(arguments);
          }),
          (G.prototype.toIndexedSeq = function () {
            return this;
          }),
          (G.prototype.toString = function () {
            return this.__toString('Seq [', ']');
          }),
          (G.prototype.__iterate = function (t, e) {
            return lt(this, t, e, !1);
          }),
          (G.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !1);
          }),
          e(X, J),
          (X.of = function () {
            return X(arguments);
          }),
          (X.prototype.toSetSeq = function () {
            return this;
          }),
          (J.isSeq = ot),
          (J.Keyed = Y),
          (J.Set = X),
          (J.Indexed = G);
        var Z,
          Q,
          $,
          tt = '@@__IMMUTABLE_SEQ__@@';
        function et(t) {
          (this._array = t), (this.size = t.length);
        }
        function rt(t) {
          var e = Object.keys(t);
          (this._object = t), (this._keys = e), (this.size = e.length);
        }
        function nt(t) {
          (this._iterable = t), (this.size = t.length || t.size);
        }
        function it(t) {
          (this._iterator = t), (this._iteratorCache = []);
        }
        function ot(t) {
          return !(!t || !t[tt]);
        }
        function at() {
          return Z || (Z = new et([]));
        }
        function ut(t) {
          var e = Array.isArray(t)
            ? new et(t).fromEntrySeq()
            : q(t)
            ? new it(t).fromEntrySeq()
            : U(t)
            ? new nt(t).fromEntrySeq()
            : 'object' === typeof t
            ? new rt(t)
            : void 0;
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of [k, v] entries, or keyed object: ' +
                t
            );
          return e;
        }
        function st(t) {
          var e = ft(t);
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of values: ' + t
            );
          return e;
        }
        function ct(t) {
          var e = ft(t) || ('object' === typeof t && new rt(t));
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of values, or keyed object: ' +
                t
            );
          return e;
        }
        function ft(t) {
          return V(t)
            ? new et(t)
            : q(t)
            ? new it(t)
            : U(t)
            ? new nt(t)
            : void 0;
        }
        function lt(t, e, r, n) {
          var i = t._cache;
          if (i) {
            for (var o = i.length - 1, a = 0; a <= o; a++) {
              var u = i[r ? o - a : a];
              if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1;
            }
            return a;
          }
          return t.__iterateUncached(e, r);
        }
        function pt(t, e, r, n) {
          var i = t._cache;
          if (i) {
            var o = i.length - 1,
              a = 0;
            return new F(function () {
              var t = i[r ? o - a : a];
              return a++ > o ? j() : N(e, n ? t[0] : a - 1, t[1]);
            });
          }
          return t.__iteratorUncached(e, r);
        }
        function ht(t, e) {
          return e ? dt(e, t, '', { '': t }) : gt(t);
        }
        function dt(t, e, r, n) {
          return Array.isArray(e)
            ? t.call(
                n,
                r,
                G(e).map(function (r, n) {
                  return dt(t, r, n, e);
                })
              )
            : yt(e)
            ? t.call(
                n,
                r,
                Y(e).map(function (r, n) {
                  return dt(t, r, n, e);
                })
              )
            : e;
        }
        function gt(t) {
          return Array.isArray(t)
            ? G(t).map(gt).toList()
            : yt(t)
            ? Y(t).map(gt).toMap()
            : t;
        }
        function yt(t) {
          return t && (t.constructor === Object || void 0 === t.constructor);
        }
        function vt(t, e) {
          if (t === e || (t !== t && e !== e)) return !0;
          if (!t || !e) return !1;
          if (
            'function' === typeof t.valueOf &&
            'function' === typeof e.valueOf
          ) {
            if ((t = t.valueOf()) === (e = e.valueOf()) || (t !== t && e !== e))
              return !0;
            if (!t || !e) return !1;
          }
          return !(
            'function' !== typeof t.equals ||
            'function' !== typeof e.equals ||
            !t.equals(e)
          );
        }
        function _t(t, e) {
          if (t === e) return !0;
          if (
            !a(e) ||
            (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
            (void 0 !== t.__hash &&
              void 0 !== e.__hash &&
              t.__hash !== e.__hash) ||
            u(t) !== u(e) ||
            s(t) !== s(e) ||
            f(t) !== f(e)
          )
            return !1;
          if (0 === t.size && 0 === e.size) return !0;
          var r = !c(t);
          if (f(t)) {
            var n = t.entries();
            return (
              e.every(function (t, e) {
                var i = n.next().value;
                return i && vt(i[1], t) && (r || vt(i[0], e));
              }) && n.next().done
            );
          }
          var i = !1;
          if (void 0 === t.size)
            if (void 0 === e.size)
              'function' === typeof t.cacheResult && t.cacheResult();
            else {
              i = !0;
              var o = t;
              (t = e), (e = o);
            }
          var l = !0,
            p = e.__iterate(function (e, n) {
              if (r ? !t.has(e) : i ? !vt(e, t.get(n, m)) : !vt(t.get(n, m), e))
                return (l = !1), !1;
            });
          return l && t.size === p;
        }
        function mt(t, e) {
          if (!(this instanceof mt)) return new mt(t, e);
          if (
            ((this._value = t),
            (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
            0 === this.size)
          ) {
            if (Q) return Q;
            Q = this;
          }
        }
        function bt(t, e) {
          if (!t) throw new Error(e);
        }
        function wt(t, e, r) {
          if (!(this instanceof wt)) return new wt(t, e, r);
          if (
            (bt(0 !== r, 'Cannot step a Range by 0'),
            (t = t || 0),
            void 0 === e && (e = 1 / 0),
            (r = void 0 === r ? 1 : Math.abs(r)),
            e < t && (r = -r),
            (this._start = t),
            (this._end = e),
            (this._step = r),
            (this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1)),
            0 === this.size)
          ) {
            if ($) return $;
            $ = this;
          }
        }
        function St() {
          throw TypeError('Abstract');
        }
        function kt() {}
        function xt() {}
        function Et() {}
        (J.prototype[tt] = !0),
          e(et, G),
          (et.prototype.get = function (t, e) {
            return this.has(t) ? this._array[C(this, t)] : e;
          }),
          (et.prototype.__iterate = function (t, e) {
            for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
              if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
            return i;
          }),
          (et.prototype.__iterator = function (t, e) {
            var r = this._array,
              n = r.length - 1,
              i = 0;
            return new F(function () {
              return i > n ? j() : N(t, i, r[e ? n - i++ : i++]);
            });
          }),
          e(rt, Y),
          (rt.prototype.get = function (t, e) {
            return void 0 === e || this.has(t) ? this._object[t] : e;
          }),
          (rt.prototype.has = function (t) {
            return this._object.hasOwnProperty(t);
          }),
          (rt.prototype.__iterate = function (t, e) {
            for (
              var r = this._object, n = this._keys, i = n.length - 1, o = 0;
              o <= i;
              o++
            ) {
              var a = n[e ? i - o : o];
              if (!1 === t(r[a], a, this)) return o + 1;
            }
            return o;
          }),
          (rt.prototype.__iterator = function (t, e) {
            var r = this._object,
              n = this._keys,
              i = n.length - 1,
              o = 0;
            return new F(function () {
              var a = n[e ? i - o : o];
              return o++ > i ? j() : N(t, a, r[a]);
            });
          }),
          (rt.prototype[d] = !0),
          e(nt, G),
          (nt.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            var r = H(this._iterable),
              n = 0;
            if (q(r))
              for (
                var i;
                !(i = r.next()).done && !1 !== t(i.value, n++, this);

              );
            return n;
          }),
          (nt.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = H(this._iterable);
            if (!q(r)) return new F(j);
            var n = 0;
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, n++, e.value);
            });
          }),
          e(it, G),
          (it.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            for (
              var r, n = this._iterator, i = this._iteratorCache, o = 0;
              o < i.length;

            )
              if (!1 === t(i[o], o++, this)) return o;
            for (; !(r = n.next()).done; ) {
              var a = r.value;
              if (((i[o] = a), !1 === t(a, o++, this))) break;
            }
            return o;
          }),
          (it.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = this._iterator,
              n = this._iteratorCache,
              i = 0;
            return new F(function () {
              if (i >= n.length) {
                var e = r.next();
                if (e.done) return e;
                n[i] = e.value;
              }
              return N(t, i, n[i++]);
            });
          }),
          e(mt, G),
          (mt.prototype.toString = function () {
            return 0 === this.size
              ? 'Repeat []'
              : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
          }),
          (mt.prototype.get = function (t, e) {
            return this.has(t) ? this._value : e;
          }),
          (mt.prototype.includes = function (t) {
            return vt(this._value, t);
          }),
          (mt.prototype.slice = function (t, e) {
            var r = this.size;
            return M(t, e, r) ? this : new mt(this._value, K(e, r) - I(t, r));
          }),
          (mt.prototype.reverse = function () {
            return this;
          }),
          (mt.prototype.indexOf = function (t) {
            return vt(this._value, t) ? 0 : -1;
          }),
          (mt.prototype.lastIndexOf = function (t) {
            return vt(this._value, t) ? this.size : -1;
          }),
          (mt.prototype.__iterate = function (t, e) {
            for (var r = 0; r < this.size; r++)
              if (!1 === t(this._value, r, this)) return r + 1;
            return r;
          }),
          (mt.prototype.__iterator = function (t, e) {
            var r = this,
              n = 0;
            return new F(function () {
              return n < r.size ? N(t, n++, r._value) : j();
            });
          }),
          (mt.prototype.equals = function (t) {
            return t instanceof mt ? vt(this._value, t._value) : _t(t);
          }),
          e(wt, G),
          (wt.prototype.toString = function () {
            return 0 === this.size
              ? 'Range []'
              : 'Range [ ' +
                  this._start +
                  '...' +
                  this._end +
                  (this._step > 1 ? ' by ' + this._step : '') +
                  ' ]';
          }),
          (wt.prototype.get = function (t, e) {
            return this.has(t) ? this._start + C(this, t) * this._step : e;
          }),
          (wt.prototype.includes = function (t) {
            var e = (t - this._start) / this._step;
            return e >= 0 && e < this.size && e === Math.floor(e);
          }),
          (wt.prototype.slice = function (t, e) {
            return M(t, e, this.size)
              ? this
              : ((t = I(t, this.size)),
                (e = K(e, this.size)) <= t
                  ? new wt(0, 0)
                  : new wt(
                      this.get(t, this._end),
                      this.get(e, this._end),
                      this._step
                    ));
          }),
          (wt.prototype.indexOf = function (t) {
            var e = t - this._start;
            if (e % this._step === 0) {
              var r = e / this._step;
              if (r >= 0 && r < this.size) return r;
            }
            return -1;
          }),
          (wt.prototype.lastIndexOf = function (t) {
            return this.indexOf(t);
          }),
          (wt.prototype.__iterate = function (t, e) {
            for (
              var r = this.size - 1,
                n = this._step,
                i = e ? this._start + r * n : this._start,
                o = 0;
              o <= r;
              o++
            ) {
              if (!1 === t(i, o, this)) return o + 1;
              i += e ? -n : n;
            }
            return o;
          }),
          (wt.prototype.__iterator = function (t, e) {
            var r = this.size - 1,
              n = this._step,
              i = e ? this._start + r * n : this._start,
              o = 0;
            return new F(function () {
              var a = i;
              return (i += e ? -n : n), o > r ? j() : N(t, o++, a);
            });
          }),
          (wt.prototype.equals = function (t) {
            return t instanceof wt
              ? this._start === t._start &&
                  this._end === t._end &&
                  this._step === t._step
              : _t(this, t);
          }),
          e(St, r),
          e(kt, St),
          e(xt, St),
          e(Et, St),
          (St.Keyed = kt),
          (St.Indexed = xt),
          (St.Set = Et);
        var Ot =
          'function' === typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, e) {
                var r = 65535 & (t |= 0),
                  n = 65535 & (e |= 0);
                return (
                  (r * n + ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) |
                  0
                );
              };
        function Ct(t) {
          return ((t >>> 1) & 1073741824) | (3221225471 & t);
        }
        function Dt(t) {
          if (!1 === t || null === t || void 0 === t) return 0;
          if (
            'function' === typeof t.valueOf &&
            (!1 === (t = t.valueOf()) || null === t || void 0 === t)
          )
            return 0;
          if (!0 === t) return 1;
          var e = typeof t;
          if ('number' === e) {
            var r = 0 | t;
            for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
              r ^= t /= 4294967295;
            return Ct(r);
          }
          if ('string' === e) return t.length > Ft ? Mt(t) : It(t);
          if ('function' === typeof t.hashCode) return t.hashCode();
          if ('object' === e) return Kt(t);
          if ('function' === typeof t.toString) return It(t.toString());
          throw new Error('Value type ' + e + ' cannot be hashed.');
        }
        function Mt(t) {
          var e = Ut[t];
          return (
            void 0 === e &&
              ((e = It(t)),
              jt === Nt && ((jt = 0), (Ut = {})),
              jt++,
              (Ut[t] = e)),
            e
          );
        }
        function It(t) {
          for (var e = 0, r = 0; r < t.length; r++)
            e = (31 * e + t.charCodeAt(r)) | 0;
          return Ct(e);
        }
        function Kt(t) {
          var e;
          if (zt && void 0 !== (e = Rt.get(t))) return e;
          if (void 0 !== (e = t[Pt])) return e;
          if (!Tt) {
            if (
              void 0 !==
              (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Pt])
            )
              return e;
            if (void 0 !== (e = Bt(t))) return e;
          }
          if (((e = ++Lt), 1073741824 & Lt && (Lt = 0), zt)) Rt.set(t, e);
          else {
            if (void 0 !== At && !1 === At(t))
              throw new Error(
                'Non-extensible objects are not allowed as keys.'
              );
            if (Tt)
              Object.defineProperty(t, Pt, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: e,
              });
            else if (
              void 0 !== t.propertyIsEnumerable &&
              t.propertyIsEnumerable ===
                t.constructor.prototype.propertyIsEnumerable
            )
              (t.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(
                  this,
                  arguments
                );
              }),
                (t.propertyIsEnumerable[Pt] = e);
            else {
              if (void 0 === t.nodeType)
                throw new Error(
                  'Unable to set a non-enumerable property on object.'
                );
              t[Pt] = e;
            }
          }
          return e;
        }
        var At = Object.isExtensible,
          Tt = (function () {
            try {
              return Object.defineProperty({}, '@', {}), !0;
            } catch (t) {
              return !1;
            }
          })();
        function Bt(t) {
          if (t && t.nodeType > 0)
            switch (t.nodeType) {
              case 1:
                return t.uniqueID;
              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
        }
        var Rt,
          zt = 'function' === typeof WeakMap;
        zt && (Rt = new WeakMap());
        var Lt = 0,
          Pt = '__immutablehash__';
        'function' === typeof Symbol && (Pt = Symbol(Pt));
        var Ft = 16,
          Nt = 255,
          jt = 0,
          Ut = {};
        function qt(t) {
          bt(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
        }
        function Ht(t) {
          return null === t || void 0 === t
            ? ie()
            : Wt(t) && !f(t)
            ? t
            : ie().withMutations(function (e) {
                var r = n(t);
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t);
                  });
              });
        }
        function Wt(t) {
          return !(!t || !t[Jt]);
        }
        e(Ht, kt),
          (Ht.prototype.toString = function () {
            return this.__toString('Map {', '}');
          }),
          (Ht.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e;
          }),
          (Ht.prototype.set = function (t, e) {
            return oe(this, t, e);
          }),
          (Ht.prototype.setIn = function (t, e) {
            return this.updateIn(t, m, function () {
              return e;
            });
          }),
          (Ht.prototype.remove = function (t) {
            return oe(this, t, m);
          }),
          (Ht.prototype.deleteIn = function (t) {
            return this.updateIn(t, function () {
              return m;
            });
          }),
          (Ht.prototype.update = function (t, e, r) {
            return 1 === arguments.length ? t(this) : this.updateIn([t], e, r);
          }),
          (Ht.prototype.updateIn = function (t, e, r) {
            r || ((r = e), (e = void 0));
            var n = ye(this, wr(t), e, r);
            return n === m ? void 0 : n;
          }),
          (Ht.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._root = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ie();
          }),
          (Ht.prototype.merge = function () {
            return pe(this, void 0, arguments);
          }),
          (Ht.prototype.mergeWith = function (e) {
            return pe(this, e, t.call(arguments, 1));
          }),
          (Ht.prototype.mergeIn = function (e) {
            var r = t.call(arguments, 1);
            return this.updateIn(e, ie(), function (t) {
              return 'function' === typeof t.merge
                ? t.merge.apply(t, r)
                : r[r.length - 1];
            });
          }),
          (Ht.prototype.mergeDeep = function () {
            return pe(this, he, arguments);
          }),
          (Ht.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1);
            return pe(this, de(e), r);
          }),
          (Ht.prototype.mergeDeepIn = function (e) {
            var r = t.call(arguments, 1);
            return this.updateIn(e, ie(), function (t) {
              return 'function' === typeof t.mergeDeep
                ? t.mergeDeep.apply(t, r)
                : r[r.length - 1];
            });
          }),
          (Ht.prototype.sort = function (t) {
            return Ue(fr(this, t));
          }),
          (Ht.prototype.sortBy = function (t, e) {
            return Ue(fr(this, e, t));
          }),
          (Ht.prototype.withMutations = function (t) {
            var e = this.asMutable();
            return (
              t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
            );
          }),
          (Ht.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new x());
          }),
          (Ht.prototype.asImmutable = function () {
            return this.__ensureOwner();
          }),
          (Ht.prototype.wasAltered = function () {
            return this.__altered;
          }),
          (Ht.prototype.__iterator = function (t, e) {
            return new te(this, t, e);
          }),
          (Ht.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0;
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return n++, t(e[1], e[0], r);
                }, e),
              n
            );
          }),
          (Ht.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? ne(this.size, this._root, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          (Ht.isMap = Wt);
        var Vt,
          Jt = '@@__IMMUTABLE_MAP__@@',
          Yt = Ht.prototype;
        function Gt(t, e) {
          (this.ownerID = t), (this.entries = e);
        }
        function Xt(t, e, r) {
          (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
        }
        function Zt(t, e, r) {
          (this.ownerID = t), (this.count = e), (this.nodes = r);
        }
        function Qt(t, e, r) {
          (this.ownerID = t), (this.keyHash = e), (this.entries = r);
        }
        function $t(t, e, r) {
          (this.ownerID = t), (this.keyHash = e), (this.entry = r);
        }
        function te(t, e, r) {
          (this._type = e),
            (this._reverse = r),
            (this._stack = t._root && re(t._root));
        }
        function ee(t, e) {
          return N(t, e[0], e[1]);
        }
        function re(t, e) {
          return { node: t, index: 0, __prev: e };
        }
        function ne(t, e, r, n) {
          var i = Object.create(Yt);
          return (
            (i.size = t),
            (i._root = e),
            (i.__ownerID = r),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function ie() {
          return Vt || (Vt = ne(0));
        }
        function oe(t, e, r) {
          var n, i;
          if (t._root) {
            var o = S(b),
              a = S(w);
            if (
              ((n = ae(t._root, t.__ownerID, 0, void 0, e, r, o, a)), !a.value)
            )
              return t;
            i = t.size + (o.value ? (r === m ? -1 : 1) : 0);
          } else {
            if (r === m) return t;
            (i = 1), (n = new Gt(t.__ownerID, [[e, r]]));
          }
          return t.__ownerID
            ? ((t.size = i),
              (t._root = n),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : n
            ? ne(i, n)
            : ie();
        }
        function ae(t, e, r, n, i, o, a, u) {
          return t
            ? t.update(e, r, n, i, o, a, u)
            : o === m
            ? t
            : (k(u), k(a), new $t(e, n, [i, o]));
        }
        function ue(t) {
          return t.constructor === $t || t.constructor === Qt;
        }
        function se(t, e, r, n, i) {
          if (t.keyHash === n) return new Qt(e, n, [t.entry, i]);
          var o,
            a = (0 === r ? t.keyHash : t.keyHash >>> r) & _,
            u = (0 === r ? n : n >>> r) & _;
          return new Xt(
            e,
            (1 << a) | (1 << u),
            a === u
              ? [se(t, e, r + y, n, i)]
              : ((o = new $t(e, n, i)), a < u ? [t, o] : [o, t])
          );
        }
        function ce(t, e, r, n) {
          t || (t = new x());
          for (var i = new $t(t, Dt(r), [r, n]), o = 0; o < e.length; o++) {
            var a = e[o];
            i = i.update(t, 0, void 0, a[0], a[1]);
          }
          return i;
        }
        function fe(t, e, r, n) {
          for (
            var i = 0, o = 0, a = new Array(r), u = 0, s = 1, c = e.length;
            u < c;
            u++, s <<= 1
          ) {
            var f = e[u];
            void 0 !== f && u !== n && ((i |= s), (a[o++] = f));
          }
          return new Xt(t, i, a);
        }
        function le(t, e, r, n, i) {
          for (var o = 0, a = new Array(v), u = 0; 0 !== r; u++, r >>>= 1)
            a[u] = 1 & r ? e[o++] : void 0;
          return (a[n] = i), new Zt(t, o + 1, a);
        }
        function pe(t, e, r) {
          for (var i = [], o = 0; o < r.length; o++) {
            var u = r[o],
              s = n(u);
            a(u) ||
              (s = s.map(function (t) {
                return ht(t);
              })),
              i.push(s);
          }
          return ge(t, e, i);
        }
        function he(t, e, r) {
          return t && t.mergeDeep && a(e) ? t.mergeDeep(e) : vt(t, e) ? t : e;
        }
        function de(t) {
          return function (e, r, n) {
            if (e && e.mergeDeepWith && a(r)) return e.mergeDeepWith(t, r);
            var i = t(e, r, n);
            return vt(e, i) ? e : i;
          };
        }
        function ge(t, e, r) {
          return 0 ===
            (r = r.filter(function (t) {
              return 0 !== t.size;
            })).length
            ? t
            : 0 !== t.size || t.__ownerID || 1 !== r.length
            ? t.withMutations(function (t) {
                for (
                  var n = e
                      ? function (r, n) {
                          t.update(n, m, function (t) {
                            return t === m ? r : e(t, r, n);
                          });
                        }
                      : function (e, r) {
                          t.set(r, e);
                        },
                    i = 0;
                  i < r.length;
                  i++
                )
                  r[i].forEach(n);
              })
            : t.constructor(r[0]);
        }
        function ye(t, e, r, n) {
          var i = t === m,
            o = e.next();
          if (o.done) {
            var a = i ? r : t,
              u = n(a);
            return u === a ? t : u;
          }
          bt(i || (t && t.set), 'invalid keyPath');
          var s = o.value,
            c = i ? m : t.get(s, m),
            f = ye(c, e, r, n);
          return f === c ? t : f === m ? t.remove(s) : (i ? ie() : t).set(s, f);
        }
        function ve(t) {
          return (
            (t =
              ((t =
                (858993459 & (t -= (t >> 1) & 1431655765)) +
                ((t >> 2) & 858993459)) +
                (t >> 4)) &
              252645135),
            (t += t >> 8),
            127 & (t += t >> 16)
          );
        }
        function _e(t, e, r, n) {
          var i = n ? t : E(t);
          return (i[e] = r), i;
        }
        function me(t, e, r, n) {
          var i = t.length + 1;
          if (n && e + 1 === i) return (t[e] = r), t;
          for (var o = new Array(i), a = 0, u = 0; u < i; u++)
            u === e ? ((o[u] = r), (a = -1)) : (o[u] = t[u + a]);
          return o;
        }
        function be(t, e, r) {
          var n = t.length - 1;
          if (r && e === n) return t.pop(), t;
          for (var i = new Array(n), o = 0, a = 0; a < n; a++)
            a === e && (o = 1), (i[a] = t[a + o]);
          return i;
        }
        (Yt[Jt] = !0),
          (Yt[g] = Yt.remove),
          (Yt.removeIn = Yt.deleteIn),
          (Gt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
              if (vt(r, i[o][0])) return i[o][1];
            return n;
          }),
          (Gt.prototype.update = function (t, e, r, n, i, o, a) {
            for (
              var u = i === m, s = this.entries, c = 0, f = s.length;
              c < f && !vt(n, s[c][0]);
              c++
            );
            var l = c < f;
            if (l ? s[c][1] === i : u) return this;
            if ((k(a), (u || !l) && k(o), !u || 1 !== s.length)) {
              if (!l && !u && s.length >= we) return ce(t, s, n, i);
              var p = t && t === this.ownerID,
                h = p ? s : E(s);
              return (
                l
                  ? u
                    ? c === f - 1
                      ? h.pop()
                      : (h[c] = h.pop())
                    : (h[c] = [n, i])
                  : h.push([n, i]),
                p ? ((this.entries = h), this) : new Gt(t, h)
              );
            }
          }),
          (Xt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r));
            var i = 1 << ((0 === t ? e : e >>> t) & _),
              o = this.bitmap;
            return 0 === (o & i)
              ? n
              : this.nodes[ve(o & (i - 1))].get(t + y, e, r, n);
          }),
          (Xt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = (0 === e ? r : r >>> e) & _,
              s = 1 << u,
              c = this.bitmap,
              f = 0 !== (c & s);
            if (!f && i === m) return this;
            var l = ve(c & (s - 1)),
              p = this.nodes,
              h = f ? p[l] : void 0,
              d = ae(h, t, e + y, r, n, i, o, a);
            if (d === h) return this;
            if (!f && d && p.length >= Se) return le(t, p, c, u, d);
            if (f && !d && 2 === p.length && ue(p[1 ^ l])) return p[1 ^ l];
            if (f && d && 1 === p.length && ue(d)) return d;
            var g = t && t === this.ownerID,
              v = f ? (d ? c : c ^ s) : c | s,
              b = f ? (d ? _e(p, l, d, g) : be(p, l, g)) : me(p, l, d, g);
            return g
              ? ((this.bitmap = v), (this.nodes = b), this)
              : new Xt(t, v, b);
          }),
          (Zt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r));
            var i = (0 === t ? e : e >>> t) & _,
              o = this.nodes[i];
            return o ? o.get(t + y, e, r, n) : n;
          }),
          (Zt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = (0 === e ? r : r >>> e) & _,
              s = i === m,
              c = this.nodes,
              f = c[u];
            if (s && !f) return this;
            var l = ae(f, t, e + y, r, n, i, o, a);
            if (l === f) return this;
            var p = this.count;
            if (f) {
              if (!l && --p < ke) return fe(t, c, p, u);
            } else p++;
            var h = t && t === this.ownerID,
              d = _e(c, u, l, h);
            return h
              ? ((this.count = p), (this.nodes = d), this)
              : new Zt(t, p, d);
          }),
          (Qt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
              if (vt(r, i[o][0])) return i[o][1];
            return n;
          }),
          (Qt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = i === m;
            if (r !== this.keyHash)
              return u ? this : (k(a), k(o), se(this, t, e, r, [n, i]));
            for (
              var s = this.entries, c = 0, f = s.length;
              c < f && !vt(n, s[c][0]);
              c++
            );
            var l = c < f;
            if (l ? s[c][1] === i : u) return this;
            if ((k(a), (u || !l) && k(o), u && 2 === f))
              return new $t(t, this.keyHash, s[1 ^ c]);
            var p = t && t === this.ownerID,
              h = p ? s : E(s);
            return (
              l
                ? u
                  ? c === f - 1
                    ? h.pop()
                    : (h[c] = h.pop())
                  : (h[c] = [n, i])
                : h.push([n, i]),
              p ? ((this.entries = h), this) : new Qt(t, this.keyHash, h)
            );
          }),
          ($t.prototype.get = function (t, e, r, n) {
            return vt(r, this.entry[0]) ? this.entry[1] : n;
          }),
          ($t.prototype.update = function (t, e, r, n, i, o, a) {
            var u = i === m,
              s = vt(n, this.entry[0]);
            return (s ? i === this.entry[1] : u)
              ? this
              : (k(a),
                u
                  ? void k(o)
                  : s
                  ? t && t === this.ownerID
                    ? ((this.entry[1] = i), this)
                    : new $t(t, this.keyHash, [n, i])
                  : (k(o), se(this, t, e, Dt(n), [n, i])));
          }),
          (Gt.prototype.iterate = Qt.prototype.iterate = function (t, e) {
            for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
              if (!1 === t(r[e ? i - n : n])) return !1;
          }),
          (Xt.prototype.iterate = Zt.prototype.iterate = function (t, e) {
            for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
              var o = r[e ? i - n : n];
              if (o && !1 === o.iterate(t, e)) return !1;
            }
          }),
          ($t.prototype.iterate = function (t, e) {
            return t(this.entry);
          }),
          e(te, F),
          (te.prototype.next = function () {
            for (var t = this._type, e = this._stack; e; ) {
              var r,
                n = e.node,
                i = e.index++;
              if (n.entry) {
                if (0 === i) return ee(t, n.entry);
              } else if (n.entries) {
                if (i <= (r = n.entries.length - 1))
                  return ee(t, n.entries[this._reverse ? r - i : i]);
              } else if (i <= (r = n.nodes.length - 1)) {
                var o = n.nodes[this._reverse ? r - i : i];
                if (o) {
                  if (o.entry) return ee(t, o.entry);
                  e = this._stack = re(o, e);
                }
                continue;
              }
              e = this._stack = this._stack.__prev;
            }
            return j();
          });
        var we = v / 4,
          Se = v / 2,
          ke = v / 4;
        function xe(t) {
          var e = Be();
          if (null === t || void 0 === t) return e;
          if (Ee(t)) return t;
          var r = i(t),
            n = r.size;
          return 0 === n
            ? e
            : (qt(n),
              n > 0 && n < v
                ? Te(0, n, y, null, new De(r.toArray()))
                : e.withMutations(function (t) {
                    t.setSize(n),
                      r.forEach(function (e, r) {
                        return t.set(r, e);
                      });
                  }));
        }
        function Ee(t) {
          return !(!t || !t[Oe]);
        }
        e(xe, xt),
          (xe.of = function () {
            return this(arguments);
          }),
          (xe.prototype.toString = function () {
            return this.__toString('List [', ']');
          }),
          (xe.prototype.get = function (t, e) {
            if ((t = C(this, t)) >= 0 && t < this.size) {
              var r = Pe(this, (t += this._origin));
              return r && r.array[t & _];
            }
            return e;
          }),
          (xe.prototype.set = function (t, e) {
            return Re(this, t, e);
          }),
          (xe.prototype.remove = function (t) {
            return this.has(t)
              ? 0 === t
                ? this.shift()
                : t === this.size - 1
                ? this.pop()
                : this.splice(t, 1)
              : this;
          }),
          (xe.prototype.insert = function (t, e) {
            return this.splice(t, 0, e);
          }),
          (xe.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = y),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Be();
          }),
          (xe.prototype.push = function () {
            var t = arguments,
              e = this.size;
            return this.withMutations(function (r) {
              Fe(r, 0, e + t.length);
              for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
            });
          }),
          (xe.prototype.pop = function () {
            return Fe(this, 0, -1);
          }),
          (xe.prototype.unshift = function () {
            var t = arguments;
            return this.withMutations(function (e) {
              Fe(e, -t.length);
              for (var r = 0; r < t.length; r++) e.set(r, t[r]);
            });
          }),
          (xe.prototype.shift = function () {
            return Fe(this, 1);
          }),
          (xe.prototype.merge = function () {
            return Ne(this, void 0, arguments);
          }),
          (xe.prototype.mergeWith = function (e) {
            return Ne(this, e, t.call(arguments, 1));
          }),
          (xe.prototype.mergeDeep = function () {
            return Ne(this, he, arguments);
          }),
          (xe.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1);
            return Ne(this, de(e), r);
          }),
          (xe.prototype.setSize = function (t) {
            return Fe(this, 0, t);
          }),
          (xe.prototype.slice = function (t, e) {
            var r = this.size;
            return M(t, e, r) ? this : Fe(this, I(t, r), K(e, r));
          }),
          (xe.prototype.__iterator = function (t, e) {
            var r = 0,
              n = Ae(this, e);
            return new F(function () {
              var e = n();
              return e === Ke ? j() : N(t, r++, e);
            });
          }),
          (xe.prototype.__iterate = function (t, e) {
            for (
              var r, n = 0, i = Ae(this, e);
              (r = i()) !== Ke && !1 !== t(r, n++, this);

            );
            return n;
          }),
          (xe.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Te(
                  this._origin,
                  this._capacity,
                  this._level,
                  this._root,
                  this._tail,
                  t,
                  this.__hash
                )
              : ((this.__ownerID = t), this);
          }),
          (xe.isList = Ee);
        var Oe = '@@__IMMUTABLE_LIST__@@',
          Ce = xe.prototype;
        function De(t, e) {
          (this.array = t), (this.ownerID = e);
        }
        (Ce[Oe] = !0),
          (Ce[g] = Ce.remove),
          (Ce.setIn = Yt.setIn),
          (Ce.deleteIn = Ce.removeIn = Yt.removeIn),
          (Ce.update = Yt.update),
          (Ce.updateIn = Yt.updateIn),
          (Ce.mergeIn = Yt.mergeIn),
          (Ce.mergeDeepIn = Yt.mergeDeepIn),
          (Ce.withMutations = Yt.withMutations),
          (Ce.asMutable = Yt.asMutable),
          (Ce.asImmutable = Yt.asImmutable),
          (Ce.wasAltered = Yt.wasAltered),
          (De.prototype.removeBefore = function (t, e, r) {
            if (r === e ? 1 << e : 0 === this.array.length) return this;
            var n = (r >>> e) & _;
            if (n >= this.array.length) return new De([], t);
            var i,
              o = 0 === n;
            if (e > 0) {
              var a = this.array[n];
              if ((i = a && a.removeBefore(t, e - y, r)) === a && o)
                return this;
            }
            if (o && !i) return this;
            var u = Le(this, t);
            if (!o) for (var s = 0; s < n; s++) u.array[s] = void 0;
            return i && (u.array[n] = i), u;
          }),
          (De.prototype.removeAfter = function (t, e, r) {
            if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var n,
              i = ((r - 1) >>> e) & _;
            if (i >= this.array.length) return this;
            if (e > 0) {
              var o = this.array[i];
              if (
                (n = o && o.removeAfter(t, e - y, r)) === o &&
                i === this.array.length - 1
              )
                return this;
            }
            var a = Le(this, t);
            return a.array.splice(i + 1), n && (a.array[i] = n), a;
          });
        var Me,
          Ie,
          Ke = {};
        function Ae(t, e) {
          var r = t._origin,
            n = t._capacity,
            i = je(n),
            o = t._tail;
          return a(t._root, t._level, 0);
          function a(t, e, r) {
            return 0 === e ? u(t, r) : s(t, e, r);
          }
          function u(t, a) {
            var u = a === i ? o && o.array : t && t.array,
              s = a > r ? 0 : r - a,
              c = n - a;
            return (
              c > v && (c = v),
              function () {
                if (s === c) return Ke;
                var t = e ? --c : s++;
                return u && u[t];
              }
            );
          }
          function s(t, i, o) {
            var u,
              s = t && t.array,
              c = o > r ? 0 : (r - o) >> i,
              f = 1 + ((n - o) >> i);
            return (
              f > v && (f = v),
              function () {
                for (;;) {
                  if (u) {
                    var t = u();
                    if (t !== Ke) return t;
                    u = null;
                  }
                  if (c === f) return Ke;
                  var r = e ? --f : c++;
                  u = a(s && s[r], i - y, o + (r << i));
                }
              }
            );
          }
        }
        function Te(t, e, r, n, i, o, a) {
          var u = Object.create(Ce);
          return (
            (u.size = e - t),
            (u._origin = t),
            (u._capacity = e),
            (u._level = r),
            (u._root = n),
            (u._tail = i),
            (u.__ownerID = o),
            (u.__hash = a),
            (u.__altered = !1),
            u
          );
        }
        function Be() {
          return Me || (Me = Te(0, 0, y));
        }
        function Re(t, e, r) {
          if ((e = C(t, e)) !== e) return t;
          if (e >= t.size || e < 0)
            return t.withMutations(function (t) {
              e < 0 ? Fe(t, e).set(0, r) : Fe(t, 0, e + 1).set(e, r);
            });
          e += t._origin;
          var n = t._tail,
            i = t._root,
            o = S(w);
          return (
            e >= je(t._capacity)
              ? (n = ze(n, t.__ownerID, 0, e, r, o))
              : (i = ze(i, t.__ownerID, t._level, e, r, o)),
            o.value
              ? t.__ownerID
                ? ((t._root = i),
                  (t._tail = n),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t)
                : Te(t._origin, t._capacity, t._level, i, n)
              : t
          );
        }
        function ze(t, e, r, n, i, o) {
          var a,
            u = (n >>> r) & _,
            s = t && u < t.array.length;
          if (!s && void 0 === i) return t;
          if (r > 0) {
            var c = t && t.array[u],
              f = ze(c, e, r - y, n, i, o);
            return f === c ? t : (((a = Le(t, e)).array[u] = f), a);
          }
          return s && t.array[u] === i
            ? t
            : (k(o),
              (a = Le(t, e)),
              void 0 === i && u === a.array.length - 1
                ? a.array.pop()
                : (a.array[u] = i),
              a);
        }
        function Le(t, e) {
          return e && t && e === t.ownerID
            ? t
            : new De(t ? t.array.slice() : [], e);
        }
        function Pe(t, e) {
          if (e >= je(t._capacity)) return t._tail;
          if (e < 1 << (t._level + y)) {
            for (var r = t._root, n = t._level; r && n > 0; )
              (r = r.array[(e >>> n) & _]), (n -= y);
            return r;
          }
        }
        function Fe(t, e, r) {
          void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
          var n = t.__ownerID || new x(),
            i = t._origin,
            o = t._capacity,
            a = i + e,
            u = void 0 === r ? o : r < 0 ? o + r : i + r;
          if (a === i && u === o) return t;
          if (a >= u) return t.clear();
          for (var s = t._level, c = t._root, f = 0; a + f < 0; )
            (c = new De(c && c.array.length ? [void 0, c] : [], n)),
              (f += 1 << (s += y));
          f && ((a += f), (i += f), (u += f), (o += f));
          for (var l = je(o), p = je(u); p >= 1 << (s + y); )
            (c = new De(c && c.array.length ? [c] : [], n)), (s += y);
          var h = t._tail,
            d = p < l ? Pe(t, u - 1) : p > l ? new De([], n) : h;
          if (h && p > l && a < o && h.array.length) {
            for (var g = (c = Le(c, n)), v = s; v > y; v -= y) {
              var m = (l >>> v) & _;
              g = g.array[m] = Le(g.array[m], n);
            }
            g.array[(l >>> y) & _] = h;
          }
          if ((u < o && (d = d && d.removeAfter(n, 0, u)), a >= p))
            (a -= p),
              (u -= p),
              (s = y),
              (c = null),
              (d = d && d.removeBefore(n, 0, a));
          else if (a > i || p < l) {
            for (f = 0; c; ) {
              var b = (a >>> s) & _;
              if ((b !== p >>> s) & _) break;
              b && (f += (1 << s) * b), (s -= y), (c = c.array[b]);
            }
            c && a > i && (c = c.removeBefore(n, s, a - f)),
              c && p < l && (c = c.removeAfter(n, s, p - f)),
              f && ((a -= f), (u -= f));
          }
          return t.__ownerID
            ? ((t.size = u - a),
              (t._origin = a),
              (t._capacity = u),
              (t._level = s),
              (t._root = c),
              (t._tail = d),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : Te(a, u, s, c, d);
        }
        function Ne(t, e, r) {
          for (var n = [], o = 0, u = 0; u < r.length; u++) {
            var s = r[u],
              c = i(s);
            c.size > o && (o = c.size),
              a(s) ||
                (c = c.map(function (t) {
                  return ht(t);
                })),
              n.push(c);
          }
          return o > t.size && (t = t.setSize(o)), ge(t, e, n);
        }
        function je(t) {
          return t < v ? 0 : ((t - 1) >>> y) << y;
        }
        function Ue(t) {
          return null === t || void 0 === t
            ? We()
            : qe(t)
            ? t
            : We().withMutations(function (e) {
                var r = n(t);
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t);
                  });
              });
        }
        function qe(t) {
          return Wt(t) && f(t);
        }
        function He(t, e, r, n) {
          var i = Object.create(Ue.prototype);
          return (
            (i.size = t ? t.size : 0),
            (i._map = t),
            (i._list = e),
            (i.__ownerID = r),
            (i.__hash = n),
            i
          );
        }
        function We() {
          return Ie || (Ie = He(ie(), Be()));
        }
        function Ve(t, e, r) {
          var n,
            i,
            o = t._map,
            a = t._list,
            u = o.get(e),
            s = void 0 !== u;
          if (r === m) {
            if (!s) return t;
            a.size >= v && a.size >= 2 * o.size
              ? ((n = (i = a.filter(function (t, e) {
                  return void 0 !== t && u !== e;
                }))
                  .toKeyedSeq()
                  .map(function (t) {
                    return t[0];
                  })
                  .flip()
                  .toMap()),
                t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
              : ((n = o.remove(e)),
                (i = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
          } else if (s) {
            if (r === a.get(u)[1]) return t;
            (n = o), (i = a.set(u, [e, r]));
          } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]));
          return t.__ownerID
            ? ((t.size = n.size),
              (t._map = n),
              (t._list = i),
              (t.__hash = void 0),
              t)
            : He(n, i);
        }
        function Je(t, e) {
          (this._iter = t), (this._useKeys = e), (this.size = t.size);
        }
        function Ye(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Ge(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Xe(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Ze(t) {
          var e = _r(t);
          return (
            (e._iter = t),
            (e.size = t.size),
            (e.flip = function () {
              return t;
            }),
            (e.reverse = function () {
              var e = t.reverse.apply(this);
              return (
                (e.flip = function () {
                  return t.reverse();
                }),
                e
              );
            }),
            (e.has = function (e) {
              return t.includes(e);
            }),
            (e.includes = function (e) {
              return t.has(e);
            }),
            (e.cacheResult = mr),
            (e.__iterateUncached = function (e, r) {
              var n = this;
              return t.__iterate(function (t, r) {
                return !1 !== e(r, t, n);
              }, r);
            }),
            (e.__iteratorUncached = function (e, r) {
              if (e === R) {
                var n = t.__iterator(e, r);
                return new F(function () {
                  var t = n.next();
                  if (!t.done) {
                    var e = t.value[0];
                    (t.value[0] = t.value[1]), (t.value[1] = e);
                  }
                  return t;
                });
              }
              return t.__iterator(e === B ? T : B, r);
            }),
            e
          );
        }
        function Qe(t, e, r) {
          var n = _r(t);
          return (
            (n.size = t.size),
            (n.has = function (e) {
              return t.has(e);
            }),
            (n.get = function (n, i) {
              var o = t.get(n, m);
              return o === m ? i : e.call(r, o, n, t);
            }),
            (n.__iterateUncached = function (n, i) {
              var o = this;
              return t.__iterate(function (t, i, a) {
                return !1 !== n(e.call(r, t, i, a), i, o);
              }, i);
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(R, i);
              return new F(function () {
                var i = o.next();
                if (i.done) return i;
                var a = i.value,
                  u = a[0];
                return N(n, u, e.call(r, a[1], u, t), i);
              });
            }),
            n
          );
        }
        function $e(t, e) {
          var r = _r(t);
          return (
            (r._iter = t),
            (r.size = t.size),
            (r.reverse = function () {
              return t;
            }),
            t.flip &&
              (r.flip = function () {
                var e = Ze(t);
                return (
                  (e.reverse = function () {
                    return t.flip();
                  }),
                  e
                );
              }),
            (r.get = function (r, n) {
              return t.get(e ? r : -1 - r, n);
            }),
            (r.has = function (r) {
              return t.has(e ? r : -1 - r);
            }),
            (r.includes = function (e) {
              return t.includes(e);
            }),
            (r.cacheResult = mr),
            (r.__iterate = function (e, r) {
              var n = this;
              return t.__iterate(function (t, r) {
                return e(t, r, n);
              }, !r);
            }),
            (r.__iterator = function (e, r) {
              return t.__iterator(e, !r);
            }),
            r
          );
        }
        function tr(t, e, r, n) {
          var i = _r(t);
          return (
            n &&
              ((i.has = function (n) {
                var i = t.get(n, m);
                return i !== m && !!e.call(r, i, n, t);
              }),
              (i.get = function (n, i) {
                var o = t.get(n, m);
                return o !== m && e.call(r, o, n, t) ? o : i;
              })),
            (i.__iterateUncached = function (i, o) {
              var a = this,
                u = 0;
              return (
                t.__iterate(function (t, o, s) {
                  if (e.call(r, t, o, s)) return u++, i(t, n ? o : u - 1, a);
                }, o),
                u
              );
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = t.__iterator(R, o),
                u = 0;
              return new F(function () {
                for (;;) {
                  var o = a.next();
                  if (o.done) return o;
                  var s = o.value,
                    c = s[0],
                    f = s[1];
                  if (e.call(r, f, c, t)) return N(i, n ? c : u++, f, o);
                }
              });
            }),
            i
          );
        }
        function er(t, e, r) {
          var n = Ht().asMutable();
          return (
            t.__iterate(function (i, o) {
              n.update(e.call(r, i, o, t), 0, function (t) {
                return t + 1;
              });
            }),
            n.asImmutable()
          );
        }
        function rr(t, e, r) {
          var n = u(t),
            i = (f(t) ? Ue() : Ht()).asMutable();
          t.__iterate(function (o, a) {
            i.update(e.call(r, o, a, t), function (t) {
              return (t = t || []).push(n ? [a, o] : o), t;
            });
          });
          var o = vr(t);
          return i.map(function (e) {
            return dr(t, o(e));
          });
        }
        function nr(t, e, r, n) {
          var i = t.size;
          if ((void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), M(e, r, i)))
            return t;
          var o = I(e, i),
            a = K(r, i);
          if (o !== o || a !== a) return nr(t.toSeq().cacheResult(), e, r, n);
          var u,
            s = a - o;
          s === s && (u = s < 0 ? 0 : s);
          var c = _r(t);
          return (
            (c.size = 0 === u ? u : (t.size && u) || void 0),
            !n &&
              ot(t) &&
              u >= 0 &&
              (c.get = function (e, r) {
                return (e = C(this, e)) >= 0 && e < u ? t.get(e + o, r) : r;
              }),
            (c.__iterateUncached = function (e, r) {
              var i = this;
              if (0 === u) return 0;
              if (r) return this.cacheResult().__iterate(e, r);
              var a = 0,
                s = !0,
                c = 0;
              return (
                t.__iterate(function (t, r) {
                  if (!s || !(s = a++ < o))
                    return c++, !1 !== e(t, n ? r : c - 1, i) && c !== u;
                }),
                c
              );
            }),
            (c.__iteratorUncached = function (e, r) {
              if (0 !== u && r) return this.cacheResult().__iterator(e, r);
              var i = 0 !== u && t.__iterator(e, r),
                a = 0,
                s = 0;
              return new F(function () {
                for (; a++ < o; ) i.next();
                if (++s > u) return j();
                var t = i.next();
                return n || e === B
                  ? t
                  : N(e, s - 1, e === T ? void 0 : t.value[1], t);
              });
            }),
            c
          );
        }
        function ir(t, e, r) {
          var n = _r(t);
          return (
            (n.__iterateUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterate(n, i);
              var a = 0;
              return (
                t.__iterate(function (t, i, u) {
                  return e.call(r, t, i, u) && ++a && n(t, i, o);
                }),
                a
              );
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterator(n, i);
              var a = t.__iterator(R, i),
                u = !0;
              return new F(function () {
                if (!u) return j();
                var t = a.next();
                if (t.done) return t;
                var i = t.value,
                  s = i[0],
                  c = i[1];
                return e.call(r, c, s, o)
                  ? n === R
                    ? t
                    : N(n, s, c, t)
                  : ((u = !1), j());
              });
            }),
            n
          );
        }
        function or(t, e, r, n) {
          var i = _r(t);
          return (
            (i.__iterateUncached = function (i, o) {
              var a = this;
              if (o) return this.cacheResult().__iterate(i, o);
              var u = !0,
                s = 0;
              return (
                t.__iterate(function (t, o, c) {
                  if (!u || !(u = e.call(r, t, o, c)))
                    return s++, i(t, n ? o : s - 1, a);
                }),
                s
              );
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = this;
              if (o) return this.cacheResult().__iterator(i, o);
              var u = t.__iterator(R, o),
                s = !0,
                c = 0;
              return new F(function () {
                var t, o, f;
                do {
                  if ((t = u.next()).done)
                    return n || i === B
                      ? t
                      : N(i, c++, i === T ? void 0 : t.value[1], t);
                  var l = t.value;
                  (o = l[0]), (f = l[1]), s && (s = e.call(r, f, o, a));
                } while (s);
                return i === R ? t : N(i, o, f, t);
              });
            }),
            i
          );
        }
        function ar(t, e) {
          var r = u(t),
            i = [t]
              .concat(e)
              .map(function (t) {
                return (
                  a(t)
                    ? r && (t = n(t))
                    : (t = r ? ut(t) : st(Array.isArray(t) ? t : [t])),
                  t
                );
              })
              .filter(function (t) {
                return 0 !== t.size;
              });
          if (0 === i.length) return t;
          if (1 === i.length) {
            var o = i[0];
            if (o === t || (r && u(o)) || (s(t) && s(o))) return o;
          }
          var c = new et(i);
          return (
            r ? (c = c.toKeyedSeq()) : s(t) || (c = c.toSetSeq()),
            ((c = c.flatten(!0)).size = i.reduce(function (t, e) {
              if (void 0 !== t) {
                var r = e.size;
                if (void 0 !== r) return t + r;
              }
            }, 0)),
            c
          );
        }
        function ur(t, e, r) {
          var n = _r(t);
          return (
            (n.__iterateUncached = function (n, i) {
              var o = 0,
                u = !1;
              function s(t, c) {
                var f = this;
                t.__iterate(function (t, i) {
                  return (
                    (!e || c < e) && a(t)
                      ? s(t, c + 1)
                      : !1 === n(t, r ? i : o++, f) && (u = !0),
                    !u
                  );
                }, i);
              }
              return s(t, 0), o;
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(n, i),
                u = [],
                s = 0;
              return new F(function () {
                for (; o; ) {
                  var t = o.next();
                  if (!1 === t.done) {
                    var c = t.value;
                    if (
                      (n === R && (c = c[1]), (e && !(u.length < e)) || !a(c))
                    )
                      return r ? t : N(n, s++, c, t);
                    u.push(o), (o = c.__iterator(n, i));
                  } else o = u.pop();
                }
                return j();
              });
            }),
            n
          );
        }
        function sr(t, e, r) {
          var n = vr(t);
          return t
            .toSeq()
            .map(function (i, o) {
              return n(e.call(r, i, o, t));
            })
            .flatten(!0);
        }
        function cr(t, e) {
          var r = _r(t);
          return (
            (r.size = t.size && 2 * t.size - 1),
            (r.__iterateUncached = function (r, n) {
              var i = this,
                o = 0;
              return (
                t.__iterate(function (t, n) {
                  return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
                }, n),
                o
              );
            }),
            (r.__iteratorUncached = function (r, n) {
              var i,
                o = t.__iterator(B, n),
                a = 0;
              return new F(function () {
                return (!i || a % 2) && (i = o.next()).done
                  ? i
                  : a % 2
                  ? N(r, a++, e)
                  : N(r, a++, i.value, i);
              });
            }),
            r
          );
        }
        function fr(t, e, r) {
          e || (e = br);
          var n = u(t),
            i = 0,
            o = t
              .toSeq()
              .map(function (e, n) {
                return [n, e, i++, r ? r(e, n, t) : e];
              })
              .toArray();
          return (
            o
              .sort(function (t, r) {
                return e(t[3], r[3]) || t[2] - r[2];
              })
              .forEach(
                n
                  ? function (t, e) {
                      o[e].length = 2;
                    }
                  : function (t, e) {
                      o[e] = t[1];
                    }
              ),
            n ? Y(o) : s(t) ? G(o) : X(o)
          );
        }
        function lr(t, e, r) {
          if ((e || (e = br), r)) {
            var n = t
              .toSeq()
              .map(function (e, n) {
                return [e, r(e, n, t)];
              })
              .reduce(function (t, r) {
                return pr(e, t[1], r[1]) ? r : t;
              });
            return n && n[0];
          }
          return t.reduce(function (t, r) {
            return pr(e, t, r) ? r : t;
          });
        }
        function pr(t, e, r) {
          var n = t(r, e);
          return (
            (0 === n && r !== e && (void 0 === r || null === r || r !== r)) ||
            n > 0
          );
        }
        function hr(t, e, n) {
          var i = _r(t);
          return (
            (i.size = new et(n)
              .map(function (t) {
                return t.size;
              })
              .min()),
            (i.__iterate = function (t, e) {
              for (
                var r, n = this.__iterator(B, e), i = 0;
                !(r = n.next()).done && !1 !== t(r.value, i++, this);

              );
              return i;
            }),
            (i.__iteratorUncached = function (t, i) {
              var o = n.map(function (t) {
                  return (t = r(t)), H(i ? t.reverse() : t);
                }),
                a = 0,
                u = !1;
              return new F(function () {
                var r;
                return (
                  u ||
                    ((r = o.map(function (t) {
                      return t.next();
                    })),
                    (u = r.some(function (t) {
                      return t.done;
                    }))),
                  u
                    ? j()
                    : N(
                        t,
                        a++,
                        e.apply(
                          null,
                          r.map(function (t) {
                            return t.value;
                          })
                        )
                      )
                );
              });
            }),
            i
          );
        }
        function dr(t, e) {
          return ot(t) ? e : t.constructor(e);
        }
        function gr(t) {
          if (t !== Object(t))
            throw new TypeError('Expected [K, V] tuple: ' + t);
        }
        function yr(t) {
          return qt(t.size), O(t);
        }
        function vr(t) {
          return u(t) ? n : s(t) ? i : o;
        }
        function _r(t) {
          return Object.create((u(t) ? Y : s(t) ? G : X).prototype);
        }
        function mr() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : J.prototype.cacheResult.call(this);
        }
        function br(t, e) {
          return t > e ? 1 : t < e ? -1 : 0;
        }
        function wr(t) {
          var e = H(t);
          if (!e) {
            if (!V(t))
              throw new TypeError('Expected iterable or array-like: ' + t);
            e = H(r(t));
          }
          return e;
        }
        function Sr(t, e) {
          var r,
            n = function (o) {
              if (o instanceof n) return o;
              if (!(this instanceof n)) return new n(o);
              if (!r) {
                r = !0;
                var a = Object.keys(t);
                Or(i, a),
                  (i.size = a.length),
                  (i._name = e),
                  (i._keys = a),
                  (i._defaultValues = t);
              }
              this._map = Ht(o);
            },
            i = (n.prototype = Object.create(kr));
          return (i.constructor = n), n;
        }
        e(Ue, Ht),
          (Ue.of = function () {
            return this(arguments);
          }),
          (Ue.prototype.toString = function () {
            return this.__toString('OrderedMap {', '}');
          }),
          (Ue.prototype.get = function (t, e) {
            var r = this._map.get(t);
            return void 0 !== r ? this._list.get(r)[1] : e;
          }),
          (Ue.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
              : We();
          }),
          (Ue.prototype.set = function (t, e) {
            return Ve(this, t, e);
          }),
          (Ue.prototype.remove = function (t) {
            return Ve(this, t, m);
          }),
          (Ue.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered();
          }),
          (Ue.prototype.__iterate = function (t, e) {
            var r = this;
            return this._list.__iterate(function (e) {
              return e && t(e[1], e[0], r);
            }, e);
          }),
          (Ue.prototype.__iterator = function (t, e) {
            return this._list.fromEntrySeq().__iterator(t, e);
          }),
          (Ue.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t),
              r = this._list.__ensureOwner(t);
            return t
              ? He(e, r, t, this.__hash)
              : ((this.__ownerID = t), (this._map = e), (this._list = r), this);
          }),
          (Ue.isOrderedMap = qe),
          (Ue.prototype[d] = !0),
          (Ue.prototype[g] = Ue.prototype.remove),
          e(Je, Y),
          (Je.prototype.get = function (t, e) {
            return this._iter.get(t, e);
          }),
          (Je.prototype.has = function (t) {
            return this._iter.has(t);
          }),
          (Je.prototype.valueSeq = function () {
            return this._iter.valueSeq();
          }),
          (Je.prototype.reverse = function () {
            var t = this,
              e = $e(this, !0);
            return (
              this._useKeys ||
                (e.valueSeq = function () {
                  return t._iter.toSeq().reverse();
                }),
              e
            );
          }),
          (Je.prototype.map = function (t, e) {
            var r = this,
              n = Qe(this, t, e);
            return (
              this._useKeys ||
                (n.valueSeq = function () {
                  return r._iter.toSeq().map(t, e);
                }),
              n
            );
          }),
          (Je.prototype.__iterate = function (t, e) {
            var r,
              n = this;
            return this._iter.__iterate(
              this._useKeys
                ? function (e, r) {
                    return t(e, r, n);
                  }
                : ((r = e ? yr(this) : 0),
                  function (i) {
                    return t(i, e ? --r : r++, n);
                  }),
              e
            );
          }),
          (Je.prototype.__iterator = function (t, e) {
            if (this._useKeys) return this._iter.__iterator(t, e);
            var r = this._iter.__iterator(B, e),
              n = e ? yr(this) : 0;
            return new F(function () {
              var i = r.next();
              return i.done ? i : N(t, e ? --n : n++, i.value, i);
            });
          }),
          (Je.prototype[d] = !0),
          e(Ye, G),
          (Ye.prototype.includes = function (t) {
            return this._iter.includes(t);
          }),
          (Ye.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0;
            return this._iter.__iterate(function (e) {
              return t(e, n++, r);
            }, e);
          }),
          (Ye.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e),
              n = 0;
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, n++, e.value, e);
            });
          }),
          e(Ge, X),
          (Ge.prototype.has = function (t) {
            return this._iter.includes(t);
          }),
          (Ge.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
              return t(e, e, r);
            }, e);
          }),
          (Ge.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e);
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, e.value, e.value, e);
            });
          }),
          e(Xe, Y),
          (Xe.prototype.entrySeq = function () {
            return this._iter.toSeq();
          }),
          (Xe.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
              if (e) {
                gr(e);
                var n = a(e);
                return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
              }
            }, e);
          }),
          (Xe.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e);
            return new F(function () {
              for (;;) {
                var e = r.next();
                if (e.done) return e;
                var n = e.value;
                if (n) {
                  gr(n);
                  var i = a(n);
                  return N(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                }
              }
            });
          }),
          (Ye.prototype.cacheResult = Je.prototype.cacheResult = Ge.prototype.cacheResult = Xe.prototype.cacheResult = mr),
          e(Sr, kt),
          (Sr.prototype.toString = function () {
            return this.__toString(Er(this) + ' {', '}');
          }),
          (Sr.prototype.has = function (t) {
            return this._defaultValues.hasOwnProperty(t);
          }),
          (Sr.prototype.get = function (t, e) {
            if (!this.has(t)) return e;
            var r = this._defaultValues[t];
            return this._map ? this._map.get(t, r) : r;
          }),
          (Sr.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var t = this.constructor;
            return t._empty || (t._empty = xr(this, ie()));
          }),
          (Sr.prototype.set = function (t, e) {
            if (!this.has(t))
              throw new Error(
                'Cannot set unknown key "' + t + '" on ' + Er(this)
              );
            var r = this._map && this._map.set(t, e);
            return this.__ownerID || r === this._map ? this : xr(this, r);
          }),
          (Sr.prototype.remove = function (t) {
            if (!this.has(t)) return this;
            var e = this._map && this._map.remove(t);
            return this.__ownerID || e === this._map ? this : xr(this, e);
          }),
          (Sr.prototype.wasAltered = function () {
            return this._map.wasAltered();
          }),
          (Sr.prototype.__iterator = function (t, e) {
            var r = this;
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e);
              })
              .__iterator(t, e);
          }),
          (Sr.prototype.__iterate = function (t, e) {
            var r = this;
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e);
              })
              .__iterate(t, e);
          }),
          (Sr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map && this._map.__ensureOwner(t);
            return t
              ? xr(this, e, t)
              : ((this.__ownerID = t), (this._map = e), this);
          });
        var kr = Sr.prototype;
        function xr(t, e, r) {
          var n = Object.create(Object.getPrototypeOf(t));
          return (n._map = e), (n.__ownerID = r), n;
        }
        function Er(t) {
          return t._name || t.constructor.name || 'Record';
        }
        function Or(t, e) {
          try {
            e.forEach(Cr.bind(void 0, t));
          } catch (r) {}
        }
        function Cr(t, e) {
          Object.defineProperty(t, e, {
            get: function () {
              return this.get(e);
            },
            set: function (t) {
              bt(this.__ownerID, 'Cannot set on an immutable record.'),
                this.set(e, t);
            },
          });
        }
        function Dr(t) {
          return null === t || void 0 === t
            ? Rr()
            : Mr(t) && !f(t)
            ? t
            : Rr().withMutations(function (e) {
                var r = o(t);
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t);
                  });
              });
        }
        function Mr(t) {
          return !(!t || !t[Kr]);
        }
        (kr[g] = kr.remove),
          (kr.deleteIn = kr.removeIn = Yt.removeIn),
          (kr.merge = Yt.merge),
          (kr.mergeWith = Yt.mergeWith),
          (kr.mergeIn = Yt.mergeIn),
          (kr.mergeDeep = Yt.mergeDeep),
          (kr.mergeDeepWith = Yt.mergeDeepWith),
          (kr.mergeDeepIn = Yt.mergeDeepIn),
          (kr.setIn = Yt.setIn),
          (kr.update = Yt.update),
          (kr.updateIn = Yt.updateIn),
          (kr.withMutations = Yt.withMutations),
          (kr.asMutable = Yt.asMutable),
          (kr.asImmutable = Yt.asImmutable),
          e(Dr, Et),
          (Dr.of = function () {
            return this(arguments);
          }),
          (Dr.fromKeys = function (t) {
            return this(n(t).keySeq());
          }),
          (Dr.prototype.toString = function () {
            return this.__toString('Set {', '}');
          }),
          (Dr.prototype.has = function (t) {
            return this._map.has(t);
          }),
          (Dr.prototype.add = function (t) {
            return Tr(this, this._map.set(t, !0));
          }),
          (Dr.prototype.remove = function (t) {
            return Tr(this, this._map.remove(t));
          }),
          (Dr.prototype.clear = function () {
            return Tr(this, this._map.clear());
          }),
          (Dr.prototype.union = function () {
            var e = t.call(arguments, 0);
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size;
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
              ? this.withMutations(function (t) {
                  for (var r = 0; r < e.length; r++)
                    o(e[r]).forEach(function (e) {
                      return t.add(e);
                    });
                })
              : this.constructor(e[0]);
          }),
          (Dr.prototype.intersect = function () {
            var e = t.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (t) {
              return o(t);
            });
            var r = this;
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.every(function (t) {
                  return t.includes(r);
                }) || t.remove(r);
              });
            });
          }),
          (Dr.prototype.subtract = function () {
            var e = t.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (t) {
              return o(t);
            });
            var r = this;
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.some(function (t) {
                  return t.includes(r);
                }) && t.remove(r);
              });
            });
          }),
          (Dr.prototype.merge = function () {
            return this.union.apply(this, arguments);
          }),
          (Dr.prototype.mergeWith = function (e) {
            var r = t.call(arguments, 1);
            return this.union.apply(this, r);
          }),
          (Dr.prototype.sort = function (t) {
            return zr(fr(this, t));
          }),
          (Dr.prototype.sortBy = function (t, e) {
            return zr(fr(this, e, t));
          }),
          (Dr.prototype.wasAltered = function () {
            return this._map.wasAltered();
          }),
          (Dr.prototype.__iterate = function (t, e) {
            var r = this;
            return this._map.__iterate(function (e, n) {
              return t(n, n, r);
            }, e);
          }),
          (Dr.prototype.__iterator = function (t, e) {
            return this._map
              .map(function (t, e) {
                return e;
              })
              .__iterator(t, e);
          }),
          (Dr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t);
            return t
              ? this.__make(e, t)
              : ((this.__ownerID = t), (this._map = e), this);
          }),
          (Dr.isSet = Mr);
        var Ir,
          Kr = '@@__IMMUTABLE_SET__@@',
          Ar = Dr.prototype;
        function Tr(t, e) {
          return t.__ownerID
            ? ((t.size = e.size), (t._map = e), t)
            : e === t._map
            ? t
            : 0 === e.size
            ? t.__empty()
            : t.__make(e);
        }
        function Br(t, e) {
          var r = Object.create(Ar);
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
        }
        function Rr() {
          return Ir || (Ir = Br(ie()));
        }
        function zr(t) {
          return null === t || void 0 === t
            ? jr()
            : Lr(t)
            ? t
            : jr().withMutations(function (e) {
                var r = o(t);
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t);
                  });
              });
        }
        function Lr(t) {
          return Mr(t) && f(t);
        }
        (Ar[Kr] = !0),
          (Ar[g] = Ar.remove),
          (Ar.mergeDeep = Ar.merge),
          (Ar.mergeDeepWith = Ar.mergeWith),
          (Ar.withMutations = Yt.withMutations),
          (Ar.asMutable = Yt.asMutable),
          (Ar.asImmutable = Yt.asImmutable),
          (Ar.__empty = Rr),
          (Ar.__make = Br),
          e(zr, Dr),
          (zr.of = function () {
            return this(arguments);
          }),
          (zr.fromKeys = function (t) {
            return this(n(t).keySeq());
          }),
          (zr.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}');
          }),
          (zr.isOrderedSet = Lr);
        var Pr,
          Fr = zr.prototype;
        function Nr(t, e) {
          var r = Object.create(Fr);
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
        }
        function jr() {
          return Pr || (Pr = Nr(We()));
        }
        function Ur(t) {
          return null === t || void 0 === t
            ? Yr()
            : qr(t)
            ? t
            : Yr().unshiftAll(t);
        }
        function qr(t) {
          return !(!t || !t[Wr]);
        }
        (Fr[d] = !0),
          (Fr.__empty = jr),
          (Fr.__make = Nr),
          e(Ur, xt),
          (Ur.of = function () {
            return this(arguments);
          }),
          (Ur.prototype.toString = function () {
            return this.__toString('Stack [', ']');
          }),
          (Ur.prototype.get = function (t, e) {
            var r = this._head;
            for (t = C(this, t); r && t--; ) r = r.next;
            return r ? r.value : e;
          }),
          (Ur.prototype.peek = function () {
            return this._head && this._head.value;
          }),
          (Ur.prototype.push = function () {
            if (0 === arguments.length) return this;
            for (
              var t = this.size + arguments.length,
                e = this._head,
                r = arguments.length - 1;
              r >= 0;
              r--
            )
              e = { value: arguments[r], next: e };
            return this.__ownerID
              ? ((this.size = t),
                (this._head = e),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Jr(t, e);
          }),
          (Ur.prototype.pushAll = function (t) {
            if (0 === (t = i(t)).size) return this;
            qt(t.size);
            var e = this.size,
              r = this._head;
            return (
              t.reverse().forEach(function (t) {
                e++, (r = { value: t, next: r });
              }),
              this.__ownerID
                ? ((this.size = e),
                  (this._head = r),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Jr(e, r)
            );
          }),
          (Ur.prototype.pop = function () {
            return this.slice(1);
          }),
          (Ur.prototype.unshift = function () {
            return this.push.apply(this, arguments);
          }),
          (Ur.prototype.unshiftAll = function (t) {
            return this.pushAll(t);
          }),
          (Ur.prototype.shift = function () {
            return this.pop.apply(this, arguments);
          }),
          (Ur.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._head = void 0),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Yr();
          }),
          (Ur.prototype.slice = function (t, e) {
            if (M(t, e, this.size)) return this;
            var r = I(t, this.size);
            if (K(e, this.size) !== this.size)
              return xt.prototype.slice.call(this, t, e);
            for (var n = this.size - r, i = this._head; r--; ) i = i.next;
            return this.__ownerID
              ? ((this.size = n),
                (this._head = i),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Jr(n, i);
          }),
          (Ur.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Jr(this.size, this._head, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          (Ur.prototype.__iterate = function (t, e) {
            if (e) return this.reverse().__iterate(t);
            for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this); )
              n = n.next;
            return r;
          }),
          (Ur.prototype.__iterator = function (t, e) {
            if (e) return this.reverse().__iterator(t);
            var r = 0,
              n = this._head;
            return new F(function () {
              if (n) {
                var e = n.value;
                return (n = n.next), N(t, r++, e);
              }
              return j();
            });
          }),
          (Ur.isStack = qr);
        var Hr,
          Wr = '@@__IMMUTABLE_STACK__@@',
          Vr = Ur.prototype;
        function Jr(t, e, r, n) {
          var i = Object.create(Vr);
          return (
            (i.size = t),
            (i._head = e),
            (i.__ownerID = r),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function Yr() {
          return Hr || (Hr = Jr(0));
        }
        function Gr(t, e) {
          var r = function (r) {
            t.prototype[r] = e[r];
          };
          return (
            Object.keys(e).forEach(r),
            Object.getOwnPropertySymbols &&
              Object.getOwnPropertySymbols(e).forEach(r),
            t
          );
        }
        (Vr[Wr] = !0),
          (Vr.withMutations = Yt.withMutations),
          (Vr.asMutable = Yt.asMutable),
          (Vr.asImmutable = Yt.asImmutable),
          (Vr.wasAltered = Yt.wasAltered),
          (r.Iterator = F),
          Gr(r, {
            toArray: function () {
              qt(this.size);
              var t = new Array(this.size || 0);
              return (
                this.valueSeq().__iterate(function (e, r) {
                  t[r] = e;
                }),
                t
              );
            },
            toIndexedSeq: function () {
              return new Ye(this);
            },
            toJS: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' === typeof t.toJS ? t.toJS() : t;
                })
                .__toJS();
            },
            toJSON: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' === typeof t.toJSON ? t.toJSON() : t;
                })
                .__toJS();
            },
            toKeyedSeq: function () {
              return new Je(this, !0);
            },
            toMap: function () {
              return Ht(this.toKeyedSeq());
            },
            toObject: function () {
              qt(this.size);
              var t = {};
              return (
                this.__iterate(function (e, r) {
                  t[r] = e;
                }),
                t
              );
            },
            toOrderedMap: function () {
              return Ue(this.toKeyedSeq());
            },
            toOrderedSet: function () {
              return zr(u(this) ? this.valueSeq() : this);
            },
            toSet: function () {
              return Dr(u(this) ? this.valueSeq() : this);
            },
            toSetSeq: function () {
              return new Ge(this);
            },
            toSeq: function () {
              return s(this)
                ? this.toIndexedSeq()
                : u(this)
                ? this.toKeyedSeq()
                : this.toSetSeq();
            },
            toStack: function () {
              return Ur(u(this) ? this.valueSeq() : this);
            },
            toList: function () {
              return xe(u(this) ? this.valueSeq() : this);
            },
            toString: function () {
              return '[Iterable]';
            },
            __toString: function (t, e) {
              return 0 === this.size
                ? t + e
                : t +
                    ' ' +
                    this.toSeq().map(this.__toStringMapper).join(', ') +
                    ' ' +
                    e;
            },
            concat: function () {
              return dr(this, ar(this, t.call(arguments, 0)));
            },
            includes: function (t) {
              return this.some(function (e) {
                return vt(e, t);
              });
            },
            entries: function () {
              return this.__iterator(R);
            },
            every: function (t, e) {
              qt(this.size);
              var r = !0;
              return (
                this.__iterate(function (n, i, o) {
                  if (!t.call(e, n, i, o)) return (r = !1), !1;
                }),
                r
              );
            },
            filter: function (t, e) {
              return dr(this, tr(this, t, e, !0));
            },
            find: function (t, e, r) {
              var n = this.findEntry(t, e);
              return n ? n[1] : r;
            },
            findEntry: function (t, e) {
              var r;
              return (
                this.__iterate(function (n, i, o) {
                  if (t.call(e, n, i, o)) return (r = [i, n]), !1;
                }),
                r
              );
            },
            findLastEntry: function (t, e) {
              return this.toSeq().reverse().findEntry(t, e);
            },
            forEach: function (t, e) {
              return qt(this.size), this.__iterate(e ? t.bind(e) : t);
            },
            join: function (t) {
              qt(this.size), (t = void 0 !== t ? '' + t : ',');
              var e = '',
                r = !0;
              return (
                this.__iterate(function (n) {
                  r ? (r = !1) : (e += t),
                    (e += null !== n && void 0 !== n ? n.toString() : '');
                }),
                e
              );
            },
            keys: function () {
              return this.__iterator(T);
            },
            map: function (t, e) {
              return dr(this, Qe(this, t, e));
            },
            reduce: function (t, e, r) {
              var n, i;
              return (
                qt(this.size),
                arguments.length < 2 ? (i = !0) : (n = e),
                this.__iterate(function (e, o, a) {
                  i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a));
                }),
                n
              );
            },
            reduceRight: function (t, e, r) {
              var n = this.toKeyedSeq().reverse();
              return n.reduce.apply(n, arguments);
            },
            reverse: function () {
              return dr(this, $e(this, !0));
            },
            slice: function (t, e) {
              return dr(this, nr(this, t, e, !0));
            },
            some: function (t, e) {
              return !this.every(tn(t), e);
            },
            sort: function (t) {
              return dr(this, fr(this, t));
            },
            values: function () {
              return this.__iterator(B);
            },
            butLast: function () {
              return this.slice(0, -1);
            },
            isEmpty: function () {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function () {
                    return !0;
                  });
            },
            count: function (t, e) {
              return O(t ? this.toSeq().filter(t, e) : this);
            },
            countBy: function (t, e) {
              return er(this, t, e);
            },
            equals: function (t) {
              return _t(this, t);
            },
            entrySeq: function () {
              var t = this;
              if (t._cache) return new et(t._cache);
              var e = t.toSeq().map($r).toIndexedSeq();
              return (
                (e.fromEntrySeq = function () {
                  return t.toSeq();
                }),
                e
              );
            },
            filterNot: function (t, e) {
              return this.filter(tn(t), e);
            },
            findLast: function (t, e, r) {
              return this.toKeyedSeq().reverse().find(t, e, r);
            },
            first: function () {
              return this.find(D);
            },
            flatMap: function (t, e) {
              return dr(this, sr(this, t, e));
            },
            flatten: function (t) {
              return dr(this, ur(this, t, !0));
            },
            fromEntrySeq: function () {
              return new Xe(this);
            },
            get: function (t, e) {
              return this.find(
                function (e, r) {
                  return vt(r, t);
                },
                void 0,
                e
              );
            },
            getIn: function (t, e) {
              for (var r, n = this, i = wr(t); !(r = i.next()).done; ) {
                var o = r.value;
                if ((n = n && n.get ? n.get(o, m) : m) === m) return e;
              }
              return n;
            },
            groupBy: function (t, e) {
              return rr(this, t, e);
            },
            has: function (t) {
              return this.get(t, m) !== m;
            },
            hasIn: function (t) {
              return this.getIn(t, m) !== m;
            },
            isSubset: function (t) {
              return (
                (t = 'function' === typeof t.includes ? t : r(t)),
                this.every(function (e) {
                  return t.includes(e);
                })
              );
            },
            isSuperset: function (t) {
              return (t = 'function' === typeof t.isSubset ? t : r(t)).isSubset(
                this
              );
            },
            keySeq: function () {
              return this.toSeq().map(Qr).toIndexedSeq();
            },
            last: function () {
              return this.toSeq().reverse().first();
            },
            max: function (t) {
              return lr(this, t);
            },
            maxBy: function (t, e) {
              return lr(this, e, t);
            },
            min: function (t) {
              return lr(this, t ? en(t) : on);
            },
            minBy: function (t, e) {
              return lr(this, e ? en(e) : on, t);
            },
            rest: function () {
              return this.slice(1);
            },
            skip: function (t) {
              return this.slice(Math.max(0, t));
            },
            skipLast: function (t) {
              return dr(this, this.toSeq().reverse().skip(t).reverse());
            },
            skipWhile: function (t, e) {
              return dr(this, or(this, t, e, !0));
            },
            skipUntil: function (t, e) {
              return this.skipWhile(tn(t), e);
            },
            sortBy: function (t, e) {
              return dr(this, fr(this, e, t));
            },
            take: function (t) {
              return this.slice(0, Math.max(0, t));
            },
            takeLast: function (t) {
              return dr(this, this.toSeq().reverse().take(t).reverse());
            },
            takeWhile: function (t, e) {
              return dr(this, ir(this, t, e));
            },
            takeUntil: function (t, e) {
              return this.takeWhile(tn(t), e);
            },
            valueSeq: function () {
              return this.toIndexedSeq();
            },
            hashCode: function () {
              return this.__hash || (this.__hash = an(this));
            },
          });
        var Xr = r.prototype;
        (Xr[l] = !0),
          (Xr[P] = Xr.values),
          (Xr.__toJS = Xr.toArray),
          (Xr.__toStringMapper = rn),
          (Xr.inspect = Xr.toSource = function () {
            return this.toString();
          }),
          (Xr.chain = Xr.flatMap),
          (Xr.contains = Xr.includes),
          (function () {
            try {
              Object.defineProperty(Xr, 'length', {
                get: function () {
                  if (!r.noLengthWarning) {
                    var t;
                    try {
                      throw new Error();
                    } catch (e) {
                      t = e.stack;
                    }
                    if (-1 === t.indexOf('_wrapObject'))
                      return (
                        console &&
                          console.warn &&
                          console.warn(
                            'iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. ' +
                              t
                          ),
                        this.size
                      );
                  }
                },
              });
            } catch (t) {}
          })(),
          Gr(n, {
            flip: function () {
              return dr(this, Ze(this));
            },
            findKey: function (t, e) {
              var r = this.findEntry(t, e);
              return r && r[0];
            },
            findLastKey: function (t, e) {
              return this.toSeq().reverse().findKey(t, e);
            },
            keyOf: function (t) {
              return this.findKey(function (e) {
                return vt(e, t);
              });
            },
            lastKeyOf: function (t) {
              return this.findLastKey(function (e) {
                return vt(e, t);
              });
            },
            mapEntries: function (t, e) {
              var r = this,
                n = 0;
              return dr(
                this,
                this.toSeq()
                  .map(function (i, o) {
                    return t.call(e, [o, i], n++, r);
                  })
                  .fromEntrySeq()
              );
            },
            mapKeys: function (t, e) {
              var r = this;
              return dr(
                this,
                this.toSeq()
                  .flip()
                  .map(function (n, i) {
                    return t.call(e, n, i, r);
                  })
                  .flip()
              );
            },
          });
        var Zr = n.prototype;
        function Qr(t, e) {
          return e;
        }
        function $r(t, e) {
          return [e, t];
        }
        function tn(t) {
          return function () {
            return !t.apply(this, arguments);
          };
        }
        function en(t) {
          return function () {
            return -t.apply(this, arguments);
          };
        }
        function rn(t) {
          return 'string' === typeof t ? JSON.stringify(t) : t;
        }
        function nn() {
          return E(arguments);
        }
        function on(t, e) {
          return t < e ? 1 : t > e ? -1 : 0;
        }
        function an(t) {
          if (t.size === 1 / 0) return 0;
          var e = f(t),
            r = u(t),
            n = e ? 1 : 0;
          return un(
            t.__iterate(
              r
                ? e
                  ? function (t, e) {
                      n = (31 * n + sn(Dt(t), Dt(e))) | 0;
                    }
                  : function (t, e) {
                      n = (n + sn(Dt(t), Dt(e))) | 0;
                    }
                : e
                ? function (t) {
                    n = (31 * n + Dt(t)) | 0;
                  }
                : function (t) {
                    n = (n + Dt(t)) | 0;
                  }
            ),
            n
          );
        }
        function un(t, e) {
          return (
            (e = Ot(e, 3432918353)),
            (e = Ot((e << 15) | (e >>> -15), 461845907)),
            (e = Ot((e << 13) | (e >>> -13), 5)),
            (e = Ot((e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16), 2246822507)),
            (e = Ct((e = Ot(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
          );
        }
        function sn(t, e) {
          return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
        }
        return (
          (Zr[p] = !0),
          (Zr[P] = Xr.entries),
          (Zr.__toJS = Xr.toObject),
          (Zr.__toStringMapper = function (t, e) {
            return JSON.stringify(e) + ': ' + rn(t);
          }),
          Gr(i, {
            toKeyedSeq: function () {
              return new Je(this, !1);
            },
            filter: function (t, e) {
              return dr(this, tr(this, t, e, !1));
            },
            findIndex: function (t, e) {
              var r = this.findEntry(t, e);
              return r ? r[0] : -1;
            },
            indexOf: function (t) {
              var e = this.toKeyedSeq().keyOf(t);
              return void 0 === e ? -1 : e;
            },
            lastIndexOf: function (t) {
              var e = this.toKeyedSeq().reverse().keyOf(t);
              return void 0 === e ? -1 : e;
            },
            reverse: function () {
              return dr(this, $e(this, !1));
            },
            slice: function (t, e) {
              return dr(this, nr(this, t, e, !1));
            },
            splice: function (t, e) {
              var r = arguments.length;
              if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e)))
                return this;
              t = I(t, t < 0 ? this.count() : this.size);
              var n = this.slice(0, t);
              return dr(
                this,
                1 === r ? n : n.concat(E(arguments, 2), this.slice(t + e))
              );
            },
            findLastIndex: function (t, e) {
              var r = this.toKeyedSeq().findLastKey(t, e);
              return void 0 === r ? -1 : r;
            },
            first: function () {
              return this.get(0);
            },
            flatten: function (t) {
              return dr(this, ur(this, t, !1));
            },
            get: function (t, e) {
              return (t = C(this, t)) < 0 ||
                this.size === 1 / 0 ||
                (void 0 !== this.size && t > this.size)
                ? e
                : this.find(
                    function (e, r) {
                      return r === t;
                    },
                    void 0,
                    e
                  );
            },
            has: function (t) {
              return (
                (t = C(this, t)) >= 0 &&
                (void 0 !== this.size
                  ? this.size === 1 / 0 || t < this.size
                  : -1 !== this.indexOf(t))
              );
            },
            interpose: function (t) {
              return dr(this, cr(this, t));
            },
            interleave: function () {
              var t = [this].concat(E(arguments)),
                e = hr(this.toSeq(), G.of, t),
                r = e.flatten(!0);
              return e.size && (r.size = e.size * t.length), dr(this, r);
            },
            last: function () {
              return this.get(-1);
            },
            skipWhile: function (t, e) {
              return dr(this, or(this, t, e, !1));
            },
            zip: function () {
              return dr(this, hr(this, nn, [this].concat(E(arguments))));
            },
            zipWith: function (t) {
              var e = E(arguments);
              return (e[0] = this), dr(this, hr(this, t, e));
            },
          }),
          (i.prototype[h] = !0),
          (i.prototype[d] = !0),
          Gr(o, {
            get: function (t, e) {
              return this.has(t) ? t : e;
            },
            includes: function (t) {
              return this.has(t);
            },
            keySeq: function () {
              return this.valueSeq();
            },
          }),
          (o.prototype.has = Xr.includes),
          Gr(Y, n.prototype),
          Gr(G, i.prototype),
          Gr(X, o.prototype),
          Gr(kt, n.prototype),
          Gr(xt, i.prototype),
          Gr(Et, o.prototype),
          {
            Iterable: r,
            Seq: J,
            Collection: St,
            Map: Ht,
            OrderedMap: Ue,
            List: xe,
            Stack: Ur,
            Set: Dr,
            OrderedSet: zr,
            Record: Sr,
            Range: wt,
            Repeat: mt,
            is: vt,
            fromJS: ht,
          }
        );
      })();
    },
    '3as9': function (t, e, r) {
      var n;
      !(function (i, o) {
        'use strict';
        var a = 'function',
          u = 'undefined',
          s = 'object',
          c = 'model',
          f = 'name',
          l = 'type',
          p = 'vendor',
          h = 'version',
          d = 'architecture',
          g = 'console',
          y = 'mobile',
          v = 'tablet',
          _ = 'smarttv',
          m = 'wearable',
          b = {
            extend: function (t, e) {
              var r = {};
              for (var n in t)
                e[n] && e[n].length % 2 === 0
                  ? (r[n] = e[n].concat(t[n]))
                  : (r[n] = t[n]);
              return r;
            },
            has: function (t, e) {
              return (
                'string' === typeof t &&
                -1 !== e.toLowerCase().indexOf(t.toLowerCase())
              );
            },
            lowerize: function (t) {
              return t.toLowerCase();
            },
            major: function (t) {
              return 'string' === typeof t
                ? t.replace(/[^\d\.]/g, '').split('.')[0]
                : o;
            },
            trim: function (t) {
              return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            },
          },
          w = {
            rgx: function (t, e) {
              for (var r, n, i, u, c, f, l = 0; l < e.length && !c; ) {
                var p = e[l],
                  h = e[l + 1];
                for (r = n = 0; r < p.length && !c; )
                  if ((c = p[r++].exec(t)))
                    for (i = 0; i < h.length; i++)
                      (f = c[++n]),
                        typeof (u = h[i]) === s && u.length > 0
                          ? 2 == u.length
                            ? typeof u[1] == a
                              ? (this[u[0]] = u[1].call(this, f))
                              : (this[u[0]] = u[1])
                            : 3 == u.length
                            ? typeof u[1] !== a || (u[1].exec && u[1].test)
                              ? (this[u[0]] = f ? f.replace(u[1], u[2]) : o)
                              : (this[u[0]] = f ? u[1].call(this, f, u[2]) : o)
                            : 4 == u.length &&
                              (this[u[0]] = f
                                ? u[3].call(this, f.replace(u[1], u[2]))
                                : o)
                          : (this[u] = f || o);
                l += 2;
              }
            },
            str: function (t, e) {
              for (var r in e)
                if (typeof e[r] === s && e[r].length > 0) {
                  for (var n = 0; n < e[r].length; n++)
                    if (b.has(e[r][n], t)) return '?' === r ? o : r;
                } else if (b.has(e[r], t)) return '?' === r ? o : r;
              return t;
            },
          },
          S = {
            browser: {
              oldsafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              },
            },
            device: {
              amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
              sprint: {
                model: { 'Evo Shift 4G': '7373KT' },
                vendor: { HTC: 'APA', Sprint: 'Sprint' },
              },
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2e3: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM',
                },
              },
            },
          },
          k = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [f, h],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[f, 'Opera Mini'], h],
              [/\s(opr)\/([\w\.]+)/i],
              [[f, 'Opera'], h],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [f, h],
              [/(konqueror)\/([\w\.]+)/i],
              [[f, 'Konqueror'], h],
              [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
              [[f, 'IE'], h],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[f, 'Edge'], h],
              [/(yabrowser)\/([\w\.]+)/i],
              [[f, 'Yandex'], h],
              [/(Avast)\/([\w\.]+)/i],
              [[f, 'Avast Secure Browser'], h],
              [/(AVG)\/([\w\.]+)/i],
              [[f, 'AVG Secure Browser'], h],
              [/(puffin)\/([\w\.]+)/i],
              [[f, 'Puffin'], h],
              [/(focus)\/([\w\.]+)/i],
              [[f, 'Firefox Focus'], h],
              [/(opt)\/([\w\.]+)/i],
              [[f, 'Opera Touch'], h],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[f, 'UCBrowser'], h],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[f, /_/g, ' '], h],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[f, 'WeChat(Win) Desktop'], h],
              [/(micromessenger)\/([\w\.]+)/i],
              [[f, 'WeChat'], h],
              [/(brave)\/([\w\.]+)/i],
              [[f, 'Brave'], h],
              [/(whale)\/([\w\.]+)/i],
              [[f, 'Whale'], h],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [f, h],
              [/(QQ)\/([\d\.]+)/i],
              [f, h],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [f, h],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [f, h],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [f, h],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [f],
              [/(LBBROWSER)/i],
              [f],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [h, [f, 'MIUI Browser']],
              [/;fbav\/([\w\.]+);/i],
              [h, [f, 'Facebook']],
              [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
              [[f, 'Facebook']],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [f, h],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [h, [f, 'Chrome Headless']],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[f, /(.+)/, '$1 WebView'], h],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[f, /(.+(?:g|us))(.+)/, '$1 $2'], h],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [h, [f, 'Android Browser']],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[f, 'Sailfish Browser'], h],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [f, h],
              [/(dolfin)\/([\w\.]+)/i],
              [[f, 'Dolphin'], h],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[f, '360 Browser']],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[f, 'Chrome'], h],
              [/(coast)\/([\w\.]+)/i],
              [[f, 'Opera Coast'], h],
              [/fxios\/([\w\.-]+)/i],
              [h, [f, 'Firefox']],
              [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
              [h, [f, 'Mobile Safari']],
              [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
              [h, f],
              [
                /webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[f, 'GSA'], h],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [f, [h, w.str, S.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, h],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[f, 'Netscape'], h],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [f, h],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[d, 'amd64']],
              [/(ia32(?=;))/i],
              [[d, b.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[d, 'ia32']],
              [/windows\s(ce|mobile);\sppc;/i],
              [[d, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[d, /ower/, '', b.lowerize]],
              [/(sun4\w)[;\)]/i],
              [[d, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [[d, b.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [c, p, [l, v]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [c, [p, 'Apple'], [l, v]],
              [/(apple\s{0,1}tv)/i],
              [
                [c, 'Apple TV'],
                [p, 'Apple'],
                [l, _],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [p, c, [l, v]],
              [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
              [c, [p, 'Amazon'], [l, v]],
              [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
              [
                [c, w.str, S.device.amazon.model],
                [p, 'Amazon'],
                [l, y],
              ],
              [/android.+aft([bms])\sbuild/i],
              [c, [p, 'Amazon'], [l, _]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [c, p, [l, y]],
              [/\((ip[honed|\s\w*]+);/i],
              [c, [p, 'Apple'], [l, y]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [p, c, [l, y]],
              [/\(bb10;\s(\w+)/i],
              [c, [p, 'BlackBerry'], [l, y]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [c, [p, 'Asus'], [l, v]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [p, 'Sony'],
                [c, 'Xperia Tablet'],
                [l, v],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [c, [p, 'Sony'], [l, y]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [p, c, [l, g]],
              [/android.+;\s(shield)\sbuild/i],
              [c, [p, 'Nvidia'], [l, g]],
              [/(playstation\s[34portablevi]+)/i],
              [c, [p, 'Sony'], [l, g]],
              [/(sprint\s(\w+))/i],
              [
                [p, w.str, S.device.sprint.vendor],
                [c, w.str, S.device.sprint.model],
                [l, y],
              ],
              [
                /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [p, [c, /_/g, ' '], [l, y]],
              [/(nexus\s9)/i],
              [c, [p, 'HTC'], [l, v]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i,
              ],
              [c, [p, 'Huawei'], [l, y]],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [c, [p, 'Huawei'], [l, v]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [p, c, [l, y]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [c, [p, 'Microsoft'], [l, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, ' '],
                [p, 'Microsoft'],
                [l, y],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [c, [p, 'Motorola'], [l, y]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [c, [p, 'Motorola'], [l, v]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [p, b.trim],
                [c, b.trim],
                [l, _],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, 'SmartTV'],
                [p, 'Samsung'],
                [l, _],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [c, [p, 'Sharp'], [l, _]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[p, 'Samsung'], c, [l, v]],
              [/smart-tv.+(samsung)/i],
              [p, [l, _], c],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[p, 'Samsung'], c, [l, y]],
              [/sie-(\w*)/i],
              [c, [p, 'Siemens'], [l, y]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[p, 'Nokia'], c, [l, y]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [c, [p, 'Acer'], [l, v]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [c, [p, 'LG'], [l, v]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[p, 'LG'], c, [l, v]],
              [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
              [[p, 'LG'], c, [l, _]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [c, [p, 'LG'], [l, y]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [p, c, [l, v]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [c, [p, 'Lenovo'], [l, v]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [p, c, [l, y]],
              [/linux;.+((jolla));/i],
              [p, c, [l, y]],
              [/((pebble))app\/[\d\.]+\s/i],
              [p, c, [l, m]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [p, c, [l, y]],
              [/crkey/i],
              [
                [c, 'Chromecast'],
                [p, 'Google'],
                [l, _],
              ],
              [/android.+;\s(glass)\s\d/i],
              [c, [p, 'Google'], [l, m]],
              [/android.+;\s(pixel c)[\s)]/i],
              [c, [p, 'Google'], [l, v]],
              [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
              [c, [p, 'Google'], [l, y]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
                /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
              ],
              [
                [c, /_/g, ' '],
                [p, 'Xiaomi'],
                [l, y],
              ],
              [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
              [
                [c, /_/g, ' '],
                [p, 'Xiaomi'],
                [l, v],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [c, [p, 'Meizu'], [l, y]],
              [/(mz)-([\w-]{2,})/i],
              [[p, 'Meizu'], c, [l, y]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
              [c, [p, 'OnePlus'], [l, y]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [c, [p, 'RCA'], [l, v]],
              [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
              [c, [p, 'Dell'], [l, v]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [c, [p, 'Verizon'], [l, v]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[p, 'Barnes & Noble'], c, [l, v]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [c, [p, 'NuVision'], [l, v]],
              [/android.+;\s(k88)\sbuild/i],
              [c, [p, 'ZTE'], [l, v]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [c, [p, 'Swiss'], [l, y]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [c, [p, 'Swiss'], [l, v]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [c, [p, 'Zeki'], [l, v]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[p, 'Dragon Touch'], c, [l, v]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [c, [p, 'Insignia'], [l, v]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [c, [p, 'NextBook'], [l, v]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[p, 'Voice'], c, [l, y]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[p, 'LvTel'], c, [l, y]],
              [/android.+;\s(PH-1)\s/i],
              [c, [p, 'Essential'], [l, y]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [c, [p, 'Envizen'], [l, v]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [p, c, [l, v]],
              [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
              [c, [p, 'MachSpeed'], [l, v]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [p, c, [l, v]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [c, [p, 'Rotor'], [l, v]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [p, c, [l, v]],
              [
                /android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i,
              ],
              [c, [l, y]],
              [
                /android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
              ],
              [c, [l, v]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[l, b.lowerize], p, c],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[l, _]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [c, [p, 'Generic']],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [h, [f, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [f, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [f, h],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [h, f],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [f, h],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [f, [h, w.str, S.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [f, 'Windows'],
                [h, w.str, S.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[f, 'BlackBerry'], h],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [f, h],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[f, 'Symbian'], h],
              [/\((series40);/i],
              [f],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[f, 'Firefox OS'], h],
              [/crkey\/([\d\.]+)/i],
              [h, [f, 'Chromecast']],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [f, h],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[f, 'Chromium OS'], h],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[f, 'Solaris'], h],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [f, h],
              [/(haiku)\s(\w+)/i],
              [f, h],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [h, /_/g, '.'],
                [f, 'iOS'],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [f, 'Mac OS'],
                [h, /_/g, '.'],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [f, h],
            ],
          },
          x = function (t, e) {
            if (
              ('object' === typeof t && ((e = t), (t = o)),
              !(this instanceof x))
            )
              return new x(t, e).getResult();
            var r =
                t ||
                (i && i.navigator && i.navigator.userAgent
                  ? i.navigator.userAgent
                  : ''),
              n = e ? b.extend(k, e) : k;
            return (
              (this.getBrowser = function () {
                var t = { name: o, version: o };
                return (
                  w.rgx.call(t, r, n.browser), (t.major = b.major(t.version)), t
                );
              }),
              (this.getCPU = function () {
                var t = { architecture: o };
                return w.rgx.call(t, r, n.cpu), t;
              }),
              (this.getDevice = function () {
                var t = { vendor: o, model: o, type: o };
                return w.rgx.call(t, r, n.device), t;
              }),
              (this.getEngine = function () {
                var t = { name: o, version: o };
                return w.rgx.call(t, r, n.engine), t;
              }),
              (this.getOS = function () {
                var t = { name: o, version: o };
                return w.rgx.call(t, r, n.os), t;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (t) {
                return (r = t), this;
              }),
              this
            );
          };
        (x.VERSION = '0.7.23'),
          (x.BROWSER = { NAME: f, MAJOR: 'major', VERSION: h }),
          (x.CPU = { ARCHITECTURE: d }),
          (x.DEVICE = {
            MODEL: c,
            VENDOR: p,
            TYPE: l,
            CONSOLE: g,
            MOBILE: y,
            SMARTTV: _,
            TABLET: v,
            WEARABLE: m,
            EMBEDDED: 'embedded',
          }),
          (x.ENGINE = { NAME: f, VERSION: h }),
          (x.OS = { NAME: f, VERSION: h }),
          typeof e !== u
            ? (typeof t !== u && t.exports && (e = t.exports = x),
              (e.UAParser = x))
            : (n = function () {
                return x;
              }.call(e, r, e, t)) === o || (t.exports = n);
        var E = i && (i.jQuery || i.Zepto);
        if (E && !E.ua) {
          var O = new x();
          (E.ua = O.getResult()),
            (E.ua.get = function () {
              return O.getUA();
            }),
            (E.ua.set = function (t) {
              O.setUA(t);
              var e = O.getResult();
              for (var r in e) E.ua[r] = e[r];
            });
        }
      })('object' === typeof window ? window : this);
    },
    '4aXP': function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('ZUd0')('draft_tree_data_support');
      t.exports = function (t, e, r) {
        var o = t.getSelection(),
          a = t.getCurrentContent(),
          u = o,
          s = o.getAnchorKey(),
          c = o.getFocusKey(),
          f = a.getBlockForKey(s);
        if (i && 'forward' === r && s !== c) return a;
        if (o.isCollapsed()) {
          if ('forward' === r) {
            if (t.isSelectionAtEndOfContent()) return a;
            if (i)
              if (o.getAnchorOffset() === a.getBlockForKey(s).getLength()) {
                var l = a.getBlockForKey(f.nextSibling);
                if (!l || 0 === l.getLength()) return a;
              }
          } else if (t.isSelectionAtStartOfContent()) return a;
          if ((u = e(t)) === o) return a;
        }
        return n.removeRange(a, u, r);
      };
    },
    '5/F0': function (t, e, r) {
      'use strict';
      var n = r('iN4q');
      t.exports = function (t) {
        var e = t.ownerDocument.documentElement;
        if (!('getBoundingClientRect' in t) || !n(e, t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var r = t.getBoundingClientRect();
        return {
          left: Math.round(r.left) - e.clientLeft,
          right: Math.round(r.right) - e.clientLeft,
          top: Math.round(r.top) - e.clientTop,
          bottom: Math.round(r.bottom) - e.clientTop,
        };
      };
    },
    '58Uu': function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        (t._internalDrag = !0), t.setMode('drag');
      };
    },
    '5mUX': function (t, e, r) {
      'use strict';
      var n = r('tI3i');
      t.exports = function (t, e) {
        var r = [];
        return (
          t.findEntityRanges(
            function (t) {
              return t.getEntity() === e;
            },
            function (t, e) {
              r.push({ start: t, end: e });
            }
          ),
          r.length || n(!1),
          r
        );
      };
    },
    '6HWB': function (t, e, r) {
      t.exports = {
        footer: 'Footer_footer__31YtZ',
        heart: 'Footer_heart__1eSzA',
        emojiAttribution: 'Footer_emojiAttribution__2ks-n',
      };
    },
    '6YQl': function (t, e, r) {
      t.exports = {
        pluginsWrapper: 'Menu_pluginsWrapper__1UU00',
        plugins: 'Menu_plugins__2GJdW',
        plugin: 'Menu_plugin__1MLXN',
        wideContainer: 'Menu_wideContainer__i1AXX',
        link: 'Menu_link__2z4-v',
      };
    },
    7002: function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('HKFH'),
        o = r('8dwq'),
        a = r('USh0'),
        u = r('hDHP'),
        s = r('3Hp6'),
        c = r('yzfH'),
        f = r('pW+J'),
        l = r('tI3i'),
        p = r('WmAF'),
        h = r('/L11'),
        d = r('QCHf'),
        g = r('KDIr'),
        y = s.OrderedSet,
        v = {
          replaceText: function (t, e, r, i, o) {
            var a = h(t, e),
              u = d(a, e),
              s = n.create({ style: i || y(), entity: o || null });
            return f(u, u.getSelectionAfter(), r, s);
          },
          insertText: function (t, e, r, n, i) {
            return e.isCollapsed() || l(!1), v.replaceText(t, e, r, n, i);
          },
          moveText: function (t, e, r) {
            var n = u(t, e),
              i = v.removeRange(t, e, 'backward');
            return v.replaceWithFragment(i, r, n);
          },
          replaceWithFragment: function (t, e, r) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 'REPLACE_WITH_NEW_DATA',
              i = h(t, e),
              o = d(i, e);
            return c(o, o.getSelectionAfter(), r, n);
          },
          removeRange: function (t, e, r) {
            var n, i, o, u;
            e.getIsBackward() &&
              (e = e.merge({
                anchorKey: e.getFocusKey(),
                anchorOffset: e.getFocusOffset(),
                focusKey: e.getAnchorKey(),
                focusOffset: e.getAnchorOffset(),
                isBackward: !1,
              })),
              (n = e.getAnchorKey()),
              (i = e.getFocusKey()),
              (o = t.getBlockForKey(n)),
              (u = t.getBlockForKey(i));
            var s = e.getStartOffset(),
              c = e.getEndOffset(),
              f = o.getEntityAt(s),
              l = u.getEntityAt(c - 1);
            if (n === i && f && f === l) {
              var p = a(t.getEntityMap(), o, u, e, r);
              return d(t, p);
            }
            var g = h(t, e);
            return d(g, e);
          },
          splitBlock: function (t, e) {
            var r = h(t, e),
              n = d(r, e);
            return g(n, n.getSelectionAfter());
          },
          applyInlineStyle: function (t, e, r) {
            return i.add(t, e, r);
          },
          removeInlineStyle: function (t, e, r) {
            return i.remove(t, e, r);
          },
          setBlockType: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ type: r, depth: 0 });
            });
          },
          setBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: r });
            });
          },
          mergeBlockData: function (t, e, r) {
            return p(t, e, function (t) {
              return t.merge({ data: t.getData().merge(r) });
            });
          },
          applyEntity: function (t, e, r) {
            var n = h(t, e);
            return o(n, e, r);
          },
        };
      t.exports = v;
    },
    '7MNd': function (t, e, r) {
      'use strict';
      var n = r('JtWY'),
        i = r('LxfW');
      t.exports = function (t) {
        var e = n(t.ownerDocument || t.document);
        t.Window && t instanceof t.Window && (t = e);
        var r = i(t),
          o = t === e ? t.ownerDocument.documentElement : t,
          a = t.scrollWidth - o.clientWidth,
          u = t.scrollHeight - o.clientHeight;
        return (
          (r.x = Math.max(0, Math.min(r.x, a))),
          (r.y = Math.max(0, Math.min(r.y, u))),
          r
        );
      };
    },
    '7O4Y': function (t, e, r) {
      'use strict';
      function n(t) {
        var e,
          r,
          i = '';
        if ('string' === typeof t || 'number' === typeof t) i += t;
        else if ('object' === typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (r = n(t[e])) && (i && (i += ' '), (i += r));
          else for (e in t) t[e] && (i && (i += ' '), (i += e));
        return i;
      }
      e.a = function () {
        for (var t, e, r = 0, i = ''; r < arguments.length; )
          (t = arguments[r++]) && (e = n(t)) && (i && (i += ' '), (i += e));
        return i;
      };
    },
    '7XzN': function (t, e, r) {
      'use strict';
      var n = r('b//S'),
        i = r('hF1F');
      t.exports = function (t, e, r, o, a) {
        var u = i(t.getSelection());
        if (!e || !o) return u;
        var s = n.decode(e),
          c = s.blockKey,
          f = t.getBlockTree(c),
          l = f && f.getIn([s.decoratorKey, 'leaves', s.leafKey]),
          p = n.decode(o),
          h = p.blockKey,
          d = t.getBlockTree(h),
          g = d && d.getIn([p.decoratorKey, 'leaves', p.leafKey]);
        if (!l || !g) return u;
        var y = l.get('start'),
          v = g.get('start'),
          _ = l ? y + r : null,
          m = g ? v + a : null;
        if (
          u.getAnchorKey() === c &&
          u.getAnchorOffset() === _ &&
          u.getFocusKey() === h &&
          u.getFocusOffset() === m
        )
          return u;
        var b = !1;
        if (c === h) {
          var w = l.get('end'),
            S = g.get('end');
          b = v === y && S === w ? a < r : v < y;
        } else {
          b =
            t
              .getCurrentContent()
              .getBlockMap()
              .keySeq()
              .skipUntil(function (t) {
                return t === c || t === h;
              })
              .first() === h;
        }
        return u.merge({
          anchorKey: c,
          anchorOffset: _,
          focusKey: h,
          focusOffset: m,
          isBackward: b,
        });
      };
    },
    '7mA2': function (t, e, r) {
      'use strict';
      var n = r('ObfX');
      t.exports = function (t) {
        return (
          t.which === n.RETURN &&
          (t.getModifierState('Shift') ||
            t.getModifierState('Alt') ||
            t.getModifierState('Control'))
        );
      };
    },
    '8K1b': function (t, e, r) {
      'use strict';
      function n(t, e) {
        return (n =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function i(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && n(t, e);
      }
      r.d(e, 'a', function () {
        return i;
      });
    },
    '8SYF': function (t, e, r) {
      'use strict';
      var n = r('1xkk');
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getEndKey(),
          i = t.getCurrentContent().getBlockForKey(r).getLength();
        return n.set(t, {
          selection: e.merge({
            anchorKey: r,
            anchorOffset: i,
            focusKey: r,
            focusOffset: i,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      };
    },
    '8dwq': function (t, e, r) {
      'use strict';
      var n = r('ZxmY'),
        i = r('3Hp6');
      t.exports = function (t, e, r) {
        var o = t.getBlockMap(),
          a = e.getStartKey(),
          u = e.getStartOffset(),
          s = e.getEndKey(),
          c = e.getEndOffset(),
          f = o
            .skipUntil(function (t, e) {
              return e === a;
            })
            .takeUntil(function (t, e) {
              return e === s;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[s, o.get(s)]]))
            .map(function (t, e) {
              var i = e === a ? u : 0,
                o = e === s ? c : t.getLength();
              return n(t, i, o, r);
            });
        return t.merge({
          blockMap: o.merge(f),
          selectionBefore: e,
          selectionAfter: e,
        });
      };
    },
    9e3: function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk');
      t.exports = function (t) {
        var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
        return i.push(t, e, 'split-block');
      };
    },
    '98Mn': function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return h;
      });
      var n = r('cxan'),
        i = r('HbGN'),
        o = r('ERkP'),
        a = r.n(o),
        u = r('jvFD'),
        s = r.n(u),
        c = r('7O4Y'),
        f = r('xx4h'),
        l = r.n(f),
        p = a.a.createElement;
      function h(t) {
        var e = t.className,
          r = t.children,
          o = t.href,
          a = Object(i.a)(t, ['className', 'children', 'href']),
          u = Object(c.a)(l.a.root, e);
        return p(
          s.a,
          { href: o },
          p('a', Object(n.a)({}, a, { className: u }), r)
        );
      }
    },
    '9Kr7': function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('udiT'),
        a = r('hF1F'),
        u = {
          currentBlockContainsLink: function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = r.getEntityMap();
            return r
              .getBlockForKey(e.getAnchorKey())
              .getCharacterList()
              .slice(e.getStartOffset(), e.getEndOffset())
              .some(function (t) {
                var e = t.getEntity();
                return !!e && 'LINK' === n.__get(e).getType();
              });
          },
          getCurrentBlockType: function (t) {
            var e = t.getSelection();
            return t
              .getCurrentContent()
              .getBlockForKey(e.getStartKey())
              .getType();
          },
          getDataObjectForLinkURL: function (t) {
            return { url: t.toString() };
          },
          handleKeyCommand: function (t, e, r) {
            switch (e) {
              case 'bold':
                return u.toggleInlineStyle(t, 'BOLD');
              case 'italic':
                return u.toggleInlineStyle(t, 'ITALIC');
              case 'underline':
                return u.toggleInlineStyle(t, 'UNDERLINE');
              case 'code':
                return u.toggleCode(t);
              case 'backspace':
              case 'backspace-word':
              case 'backspace-to-start-of-line':
                return u.onBackspace(t);
              case 'delete':
              case 'delete-word':
              case 'delete-to-end-of-block':
                return u.onDelete(t);
              default:
                return null;
            }
          },
          insertSoftNewline: function (t) {
            var e = n.insertText(
                t.getCurrentContent(),
                t.getSelection(),
                '\n',
                t.getCurrentInlineStyle(),
                null
              ),
              r = i.push(t, e, 'insert-characters');
            return i.forceSelection(r, e.getSelectionAfter());
          },
          onBackspace: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset())
              return null;
            var r = t.getCurrentContent(),
              n = e.getStartKey(),
              o = r.getBlockBefore(n);
            if (o && 'atomic' === o.getType()) {
              var a = r.getBlockMap().delete(o.getKey()),
                s = r.merge({ blockMap: a, selectionAfter: e });
              if (s !== r) return i.push(t, s, 'remove-range');
            }
            var c = u.tryToRemoveBlockStyle(t);
            return c ? i.push(t, c, 'change-block-type') : null;
          },
          onDelete: function (t) {
            var e = t.getSelection();
            if (!e.isCollapsed()) return null;
            var r = t.getCurrentContent(),
              o = e.getStartKey(),
              a = r.getBlockForKey(o).getLength();
            if (e.getStartOffset() < a) return null;
            var u = r.getBlockAfter(o);
            if (!u || 'atomic' !== u.getType()) return null;
            var s = e.merge({
                focusKey: u.getKey(),
                focusOffset: u.getLength(),
              }),
              c = n.removeRange(r, s, 'forward');
            return c !== r ? i.push(t, c, 'remove-range') : null;
          },
          onTab: function (t, e, r) {
            var n = e.getSelection(),
              a = n.getAnchorKey();
            if (a !== n.getFocusKey()) return e;
            var u = e.getCurrentContent(),
              s = u.getBlockForKey(a),
              c = s.getType();
            if ('unordered-list-item' !== c && 'ordered-list-item' !== c)
              return e;
            t.preventDefault();
            var f = s.getDepth();
            if (!t.shiftKey && f === r) return e;
            var l = o(u, n, t.shiftKey ? -1 : 1, r);
            return i.push(e, l, 'adjust-depth');
          },
          toggleBlockType: function (t, e) {
            var r = t.getSelection(),
              o = r.getStartKey(),
              u = r.getEndKey(),
              s = t.getCurrentContent(),
              c = r;
            if (o !== u && 0 === r.getEndOffset()) {
              var f = a(s.getBlockBefore(u));
              (u = f.getKey()),
                (c = c.merge({
                  anchorKey: o,
                  anchorOffset: r.getStartOffset(),
                  focusKey: u,
                  focusOffset: f.getLength(),
                  isBackward: !1,
                }));
            }
            if (
              s
                .getBlockMap()
                .skipWhile(function (t, e) {
                  return e !== o;
                })
                .reverse()
                .skipWhile(function (t, e) {
                  return e !== u;
                })
                .some(function (t) {
                  return 'atomic' === t.getType();
                })
            )
              return t;
            var l = s.getBlockForKey(o).getType() === e ? 'unstyled' : e;
            return i.push(t, n.setBlockType(s, c, l), 'change-block-type');
          },
          toggleCode: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorKey(),
              n = e.getFocusKey();
            return e.isCollapsed() || r !== n
              ? u.toggleBlockType(t, 'code-block')
              : u.toggleInlineStyle(t, 'CODE');
          },
          toggleInlineStyle: function (t, e) {
            var r = t.getSelection(),
              o = t.getCurrentInlineStyle();
            if (r.isCollapsed())
              return i.setInlineStyleOverride(
                t,
                o.has(e) ? o.remove(e) : o.add(e)
              );
            var a,
              u = t.getCurrentContent();
            return (
              (a = o.has(e)
                ? n.removeInlineStyle(u, r, e)
                : n.applyInlineStyle(u, r, e)),
              i.push(t, a, 'change-inline-style')
            );
          },
          toggleLink: function (t, e, r) {
            var o = n.applyEntity(t.getCurrentContent(), e, r);
            return i.push(t, o, 'apply-entity');
          },
          tryToRemoveBlockStyle: function (t) {
            var e = t.getSelection(),
              r = e.getAnchorOffset();
            if (e.isCollapsed() && 0 === r) {
              var i = e.getAnchorKey(),
                o = t.getCurrentContent(),
                a = o.getBlockForKey(i).getType(),
                u = o.getBlockBefore(i);
              if (
                'code-block' === a &&
                u &&
                'code-block' === u.getType() &&
                0 !== u.getLength()
              )
                return null;
              if ('unstyled' !== a) return n.setBlockType(o, e, 'unstyled');
            }
            return null;
          },
        };
      t.exports = u;
    },
    '9XMQ': function (t, e, r) {
      'use strict';
      var n = r('1xkk'),
        i = r('W6iK'),
        o = r('MzOC'),
        a = r('4aXP');
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              u = r.getBlockForKey(n).getText()[a];
            return o(t, u ? i.getUTF16Length(u, 0) : 1);
          },
          'forward'
        );
        if (e === t.getCurrentContent()) return t;
        var r = t.getSelection();
        return n.push(
          t,
          e.set('selectionBefore', r),
          r.isCollapsed() ? 'delete-character' : 'remove-range'
        );
      };
    },
    '9fIP': function (t, e, r) {
      'use strict';
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    '9zpB': function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return f;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('7O4Y'),
        a = r('UzdN'),
        u = r.n(a),
        s = r('GFFh'),
        c = i.a.createElement;
      function f(t) {
        var e = t.className,
          r = t.children,
          n = Object(o.a)(u.a.root, e);
        return c('div', { className: n }, c(s.a, null, r));
      }
    },
    ADYu: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getAnchorKey(),
          n = t.getBlockTree(r),
          i = e.getStartOffset(),
          o = !1;
        return (
          n.some(function (t) {
            return i === t.get('start')
              ? ((o = !0), !0)
              : i < t.get('end') &&
                  t.get('leaves').some(function (t) {
                    var e = t.get('start');
                    return i === e && ((o = !0), !0);
                  });
          }),
          o
        );
      };
    },
    'AL/+': function (t, e, r) {
      'use strict';
      t.exports = function (t, e, r, n) {
        if (t.size) {
          var i = 0;
          t.reduce(function (t, o, a) {
            return e(t, o) || (r(t) && n(i, a), (i = a)), o;
          }),
            r(t.last()) && n(i, t.count());
        }
      };
    },
    AZjN: function (t, e, r) {
      t.exports = {
        root: 'Seperator_root__1M5qa',
        rootFinal: 'Seperator_rootFinal__2UkjO Seperator_root__1M5qa',
        separatorBase: 'Seperator_separatorBase__1ydNR',
        separatorPart1:
          'Seperator_separatorPart1__DuYtZ Seperator_separatorBase__1ydNR',
        separatorPart2:
          'Seperator_separatorPart2__2hXmq Seperator_separatorBase__1ydNR',
        separatorPart3:
          'Seperator_separatorPart3__3QJzt Seperator_separatorBase__1ydNR',
        separatorPart4:
          'Seperator_separatorPart4__37XhS Seperator_separatorBase__1ydNR',
        separatorPart5:
          'Seperator_separatorPart5__1Z8s7 Seperator_separatorBase__1ydNR',
        separatorPart6:
          'Seperator_separatorPart6__3vdKT Seperator_separatorBase__1ydNR',
      };
    },
    ApIa: function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('ooRk'),
        a = r('b+nQ'),
        u = r('IbSy'),
        s = r('YM28'),
        c = r('7002'),
        f = r('1xkk'),
        l = r('YSZ8'),
        p = r('ZUd0'),
        h = r('3Hp6'),
        d = r('uJSo'),
        g = p('draft_tree_data_support'),
        y = g ? s : u,
        v = h.List,
        _ = h.Repeat,
        m = {
          insertAtomicBlock: function (t, e, r) {
            var i = t.getCurrentContent(),
              u = t.getSelection(),
              s = c.removeRange(i, u, 'backward'),
              p = s.getSelectionAfter(),
              h = c.splitBlock(s, p),
              d = h.getSelectionAfter(),
              m = c.setBlockType(h, d, 'atomic'),
              b = a.create({ entity: e }),
              w = {
                key: l(),
                type: 'atomic',
                text: r,
                characterList: v(_(b, r.length)),
              },
              S = { key: l(), type: 'unstyled' };
            g &&
              ((w = n({}, w, { nextSibling: S.key })),
              (S = n({}, S, { prevSibling: w.key })));
            var k = [new y(w), new y(S)],
              x = o.createFromArray(k),
              E = c.replaceWithFragment(m, d, x),
              O = E.merge({
                selectionBefore: u,
                selectionAfter: E.getSelectionAfter().set('hasFocus', !0),
              });
            return f.push(t, O, 'insert-fragment');
          },
          moveAtomicBlock: function (t, e, r, n) {
            var i,
              o = t.getCurrentContent(),
              a = t.getSelection();
            if ('before' === n || 'after' === n) {
              var u = o.getBlockForKey(
                'before' === n ? r.getStartKey() : r.getEndKey()
              );
              i = d(o, e, u, n);
            } else {
              var s = c.removeRange(o, r, 'backward'),
                l = s.getSelectionAfter(),
                p = s.getBlockForKey(l.getFocusKey());
              if (0 === l.getStartOffset()) i = d(s, e, p, 'before');
              else if (l.getEndOffset() === p.getLength())
                i = d(s, e, p, 'after');
              else {
                var h = c.splitBlock(s, l),
                  g = h.getSelectionAfter(),
                  y = h.getBlockForKey(g.getFocusKey());
                i = d(h, e, y, 'before');
              }
            }
            var v = i.merge({
              selectionBefore: a,
              selectionAfter: i.getSelectionAfter().set('hasFocus', !0),
            });
            return f.push(t, v, 'move-block');
          },
        };
      t.exports = m;
    },
    B3y8: function (t, e, r) {
      'use strict';
      r('/2Cm');
      var n = {
        isValidBlock: function (t, e) {
          var r = t.getKey(),
            n = t.getParentKey();
          if (null != n && !e.get(n).getChildKeys().includes(r)) return !1;
          if (
            !t
              .getChildKeys()
              .map(function (t) {
                return e.get(t);
              })
              .every(function (t) {
                return t.getParentKey() === r;
              })
          )
            return !1;
          var i = t.getPrevSiblingKey();
          if (null != i && e.get(i).getNextSiblingKey() !== r) return !1;
          var o = t.getNextSiblingKey();
          if (null != o && e.get(o).getPrevSiblingKey() !== r) return !1;
          return (
            (null === o || null === i || i !== o) &&
            !('' != t.text && t.getChildKeys().size > 0)
          );
        },
        isConnectedTree: function (t) {
          var e = t.toArray().filter(function (t) {
            return null == t.getParentKey() && null == t.getPrevSiblingKey();
          });
          if (1 !== e.length) return !1;
          for (var r = 0, n = e.shift().getKey(), i = []; null != n; ) {
            var o = t.get(n),
              a = o.getChildKeys(),
              u = o.getNextSiblingKey();
            if (a.size > 0) {
              null != u && i.unshift(u);
              var s = a
                .map(function (e) {
                  return t.get(e);
                })
                .find(function (t) {
                  return null == t.getPrevSiblingKey();
                });
              if (null == s) return !1;
              n = s.getKey();
            } else
              n =
                null != o.getNextSiblingKey()
                  ? o.getNextSiblingKey()
                  : i.shift();
            r++;
          }
          return r === t.size;
        },
        isValidTree: function (t) {
          var e = this;
          return (
            !!t.toArray().every(function (r) {
              return e.isValidBlock(r, t);
            }) && this.isConnectedTree(t)
          );
        },
      };
      t.exports = n;
    },
    BRyZ: function (t, e, r) {
      t.exports = {
        level2: 'Heading_level2__1KA-z',
        level3: 'Heading_level3__3hI3L',
        level4: 'Heading_level4__1uOtZ',
      };
    },
    BTrg: function (t, e, r) {
      'use strict';
      function n() {
        var t;
        return (
          document.documentElement &&
            (t = document.documentElement.clientWidth),
          !t && document.body && (t = document.body.clientWidth),
          t || 0
        );
      }
      function i() {
        var t;
        return (
          document.documentElement &&
            (t = document.documentElement.clientHeight),
          !t && document.body && (t = document.body.clientHeight),
          t || 0
        );
      }
      function o() {
        return {
          width: window.innerWidth || n(),
          height: window.innerHeight || i(),
        };
      }
      (o.withoutScrollbars = function () {
        return { width: n(), height: i() };
      }),
        (t.exports = o);
    },
    BsqC: function (t, e, r) {
      'use strict';
      var n = r('1xkk');
      t.exports = function (t, e, r) {
        var i = n.undo(e);
        if ('spellcheck-change' !== e.getLastChangeType())
          t.preventDefault(),
            e.getNativelyRenderedContent()
              ? (r(n.set(e, { nativelyRenderedContent: null })),
                setTimeout(function () {
                  r(i);
                }, 0))
              : r(i);
        else {
          var o = i.getCurrentContent();
          r(n.set(i, { nativelyRenderedContent: o }));
        }
      };
    },
    Cfxn: function (t, e, r) {
      'use strict';
      t.exports = {
        logBlockedSelectionEvent: function () {
          return null;
        },
        logSelectionStateFailure: function () {
          return null;
        },
      };
    },
    Cl3z: function (t, e, r) {
      'use strict';
      var n = r('W6iK'),
        i = r('vYw2'),
        o = r('KXNC'),
        a = r('tI3i');
      function u(t, e) {
        for (
          var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0;
          a < t.length;
          a++
        ) {
          var u = t[a];
          0 !== u.width &&
            1 !== u.width &&
            ((r = Math.min(r, u.top)),
            (n = Math.min(n, u.bottom)),
            (i = Math.max(i, u.top)),
            (o = Math.max(o, u.bottom)));
        }
        return i <= n && i - r < e && o - n < e;
      }
      function s(t) {
        switch (t.nodeType) {
          case Node.DOCUMENT_TYPE_NODE:
            return 0;
          case Node.TEXT_NODE:
          case Node.PROCESSING_INSTRUCTION_NODE:
          case Node.COMMENT_NODE:
            return t.length;
          default:
            return t.childNodes.length;
        }
      }
      t.exports = function (t) {
        t.collapsed || a(!1);
        var e = (t = t.cloneRange()).startContainer;
        1 !== e.nodeType && (e = e.parentNode);
        var r = (function (t) {
            var e = getComputedStyle(t),
              r = i(t),
              n = r.createElement('div');
            (n.style.fontFamily = e.fontFamily),
              (n.style.fontSize = e.fontSize),
              (n.style.fontStyle = e.fontStyle),
              (n.style.fontWeight = e.fontWeight),
              (n.style.lineHeight = e.lineHeight),
              (n.style.position = 'absolute'),
              (n.textContent = 'M');
            var o = r.body;
            o || a(!1), o.appendChild(n);
            var u = n.getBoundingClientRect();
            return o.removeChild(n), u.height;
          })(e),
          c = t.endContainer,
          f = t.endOffset;
        for (
          t.setStart(t.startContainer, 0);
          u(o(t), r) &&
          ((c = t.startContainer),
          (f = t.startOffset),
          c.parentNode || a(!1),
          t.setStartBefore(c),
          1 !== c.nodeType || 'inline' === getComputedStyle(c).display);

        );
        for (var l = c, p = f - 1; ; ) {
          for (var h = l.nodeValue, d = p; d >= 0; d--)
            if (!(null != h && d > 0 && n.isSurrogatePair(h, d - 1))) {
              if ((t.setStart(l, d), !u(o(t), r))) break;
              (c = l), (f = d);
            }
          if (-1 === d || 0 === l.childNodes.length) break;
          p = s((l = l.childNodes[d]));
        }
        return t.setStart(c, f), t;
      };
    },
    CqlG: function (t, e, r) {
      'use strict';
      var n = r('tI3i');
      t.exports = function (t) {
        return (function (t) {
          return (
            !!t &&
            ('object' == typeof t || 'function' == typeof t) &&
            'length' in t &&
            !('setInterval' in t) &&
            'number' != typeof t.nodeType &&
            (Array.isArray(t) || 'callee' in t || 'item' in t)
          );
        })(t)
          ? Array.isArray(t)
            ? t.slice()
            : (function (t) {
                var e = t.length;
                if (
                  ((Array.isArray(t) ||
                    ('object' !== typeof t && 'function' !== typeof t)) &&
                    n(!1),
                  'number' !== typeof e && n(!1),
                  0 === e || e - 1 in t || n(!1),
                  'function' === typeof t.callee && n(!1),
                  t.hasOwnProperty)
                )
                  try {
                    return Array.prototype.slice.call(t);
                  } catch (o) {}
                for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];
                return r;
              })(t)
          : [t];
      };
    },
    CtAg: function (t, e, r) {
      'use strict';
      var n = r('5/F0');
      t.exports = function (t) {
        var e = n(t);
        return {
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        };
      };
    },
    DZH9: function (t, e, r) {
      'use strict';
      var n = r('W6iK'),
        i = r('3Hp6').OrderedSet,
        o = n.substr,
        a = i();
      t.exports = function (t, e) {
        var r = Array(t.length).fill(a);
        return (
          e &&
            e.forEach(function (e) {
              for (
                var n = o(t, 0, e.offset).length,
                  i = n + o(t, e.offset, e.length).length;
                n < i;

              )
                (r[n] = r[n].add(e.style)), n++;
            }),
          r
        );
      };
    },
    Diez: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return f;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('7O4Y'),
        a = r('zM55'),
        u = r.n(a),
        s = r('GFFh'),
        c = i.a.createElement;
      function f(t) {
        var e = t.className,
          r = t.children,
          n = Object(o.a)(u.a.root, e);
        return c('div', { className: n }, c(s.a, null, r));
      }
    },
    DtGU: function (t, e, r) {
      'use strict';
      var n = r('13UR');
      t.exports = function t(e) {
        if (n(e)) {
          var r = e,
            i = r.getAttribute('data-offset-key');
          if (i) return i;
          for (var o = 0; o < r.childNodes.length; o++) {
            var a = t(r.childNodes[o]);
            if (a) return a;
          }
        }
        return null;
      };
    },
    DuSR: function (t, e, r) {
      'use strict';
      var n = r('Cfxn'),
        i = r('1xkk'),
        o = r('KqX8'),
        a = r('WbhC');
      t.exports = function (t) {
        if (
          t._blockSelectEvents ||
          t._latestEditorState !== t.props.editorState
        ) {
          if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection();
            n.logBlockedSelectionEvent({
              anonymizedDom: 'N/A',
              extraParams: JSON.stringify({ stacktrace: new Error().stack }),
              selectionState: JSON.stringify(e.toJS()),
            });
          }
        } else {
          var r = t.props.editorState,
            u = a(r, o(t)),
            s = u.selectionState;
          s !== r.getSelection() &&
            ((r = u.needsRecovery
              ? i.forceSelection(r, s)
              : i.acceptSelection(r, s)),
            t.update(r));
        }
      };
    },
    EYg6: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('IbSy'),
        o = r('YM28'),
        a = r('tO3r'),
        u = r('YSZ8'),
        s = r('GSkh'),
        c = r('ZUd0'),
        f = r('3Hp6'),
        l = r('fNVm'),
        p = f.List,
        h = f.Repeat,
        d = c('draft_tree_data_support'),
        g = d ? o : i,
        y = {
          processHTML: function (t, e) {
            return a(t, s, e);
          },
          processText: function (t, e, r) {
            return t.reduce(function (t, i, o) {
              i = l(i);
              var a = u(),
                s = {
                  key: a,
                  type: r,
                  text: i,
                  characterList: p(h(e, i.length)),
                };
              if (d && 0 !== o) {
                var c = o - 1;
                s = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                      i = Object.keys(r);
                    'function' === typeof Object.getOwnPropertySymbols &&
                      (i = i.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            t
                          ).enumerable;
                        })
                      )),
                      i.forEach(function (e) {
                        n(t, e, r[e]);
                      });
                  }
                  return t;
                })({}, s, {
                  prevSibling: (t[c] = t[c].merge({ nextSibling: a })).getKey(),
                });
              }
              return t.push(new g(s)), t;
            }, []);
          },
        };
      t.exports = y;
    },
    Ea6c: function (t, e, r) {
      'use strict';
      t.exports = {
        initODS: function () {},
        handleExtensionCausedError: function () {},
      };
    },
    F63i: function (t, e) {
      var r,
        n,
        i = (t.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function u(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          r = 'function' === typeof setTimeout ? setTimeout : o;
        } catch (t) {
          r = o;
        }
        try {
          n = 'function' === typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      })();
      var s,
        c = [],
        f = !1,
        l = -1;
      function p() {
        f &&
          s &&
          ((f = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && h());
      }
      function h() {
        if (!f) {
          var t = u(p);
          f = !0;
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++l < e; ) s && s[l].run();
            (l = -1), (e = c.length);
          }
          (s = null),
            (f = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new d(t, e)), 1 !== c.length || f || u(h);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = 'browser'),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ''),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error('process.binding is not supported');
        }),
        (i.cwd = function () {
          return '/';
        }),
        (i.chdir = function (t) {
          throw new Error('process.chdir is not supported');
        }),
        (i.umask = function () {
          return 0;
        });
    },
    Fd87: function (t, e, r) {
      'use strict';
      var n = r('n09L'),
        i = r('tI3i'),
        o =
          '\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05cf\u05d0-\u05ea\u05eb-\u05ef\u05f0-\u05f2\u05f3-\u05f4\u05f5-\u05ff\u07c0-\u07c9\u07ca-\u07ea\u07f4-\u07f5\u07fa\u07fb-\u07ff\u0800-\u0815\u081a\u0824\u0828\u082e-\u082f\u0830-\u083e\u083f\u0840-\u0858\u085c-\u085d\u085e\u085f-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb37\ufb38-\ufb3c\ufb3d\ufb3e\ufb3f\ufb40-\ufb41\ufb42\ufb43-\ufb44\ufb45\ufb46-\ufb4f',
        a =
          '\u0608\u060b\u060d\u061b\u061c\u061d\u061e-\u061f\u0620-\u063f\u0640\u0641-\u064a\u066d\u066e-\u066f\u0671-\u06d3\u06d4\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06fd-\u06fe\u06ff\u0700-\u070d\u070e\u070f\u0710\u0712-\u072f\u074b-\u074c\u074d-\u07a5\u07b1\u07b2-\u07bf\u08a0-\u08b2\u08b3-\u08e3\ufb50-\ufbb1\ufbb2-\ufbc1\ufbc2-\ufbd2\ufbd3-\ufd3d\ufd40-\ufd4f\ufd50-\ufd8f\ufd90-\ufd91\ufd92-\ufdc7\ufdc8-\ufdcf\ufdf0-\ufdfb\ufdfc\ufdfe-\ufdff\ufe70-\ufe74\ufe75\ufe76-\ufefc\ufefd-\ufefe',
        u = new RegExp(
          '[' +
            'A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u01ba\u01bb\u01bc-\u01bf\u01c0-\u01c3\u01c4-\u0293\u0294\u0295-\u02af\u02b0-\u02b8\u02bb-\u02c1\u02d0-\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a\u037b-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0482\u048a-\u052f\u0531-\u0556\u0559\u055a-\u055f\u0561-\u0587\u0589\u0903\u0904-\u0939\u093b\u093d\u093e-\u0940\u0949-\u094c\u094e-\u094f\u0950\u0958-\u0961\u0964-\u0965\u0966-\u096f\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09be-\u09c0\u09c7-\u09c8\u09cb-\u09cc\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09ef\u09f0-\u09f1\u09f4-\u09f9\u09fa\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0abe-\u0ac0\u0ac9\u0acb-\u0acc\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0af0\u0b02-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47-\u0b48\u0b4b-\u0b4c\u0b57\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b70\u0b71\u0b72-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bbf\u0bc1-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bef\u0bf0-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c7f\u0c82-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cbe\u0cbf\u0cc0-\u0cc4\u0cc6\u0cc7-\u0cc8\u0cca-\u0ccb\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0cf1-\u0cf2\u0d02-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d60-\u0d61\u0d66-\u0d6f\u0d70-\u0d75\u0d79\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0df4\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e45\u0e46\u0e4f\u0e50-\u0e59\u0e5a-\u0e5b\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f01-\u0f03\u0f04-\u0f12\u0f13\u0f14\u0f15-\u0f17\u0f1a-\u0f1f\u0f20-\u0f29\u0f2a-\u0f33\u0f34\u0f36\u0f38\u0f3e-\u0f3f\u0f40-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fcf\u0fd0-\u0fd4\u0fd5-\u0fd8\u0fd9-\u0fda\u1000-\u102a\u102b-\u102c\u1031\u1038\u103b-\u103c\u103f\u1040-\u1049\u104a-\u104f\u1050-\u1055\u1056-\u1057\u105a-\u105d\u1061\u1062-\u1064\u1065-\u1066\u1067-\u106d\u106e-\u1070\u1075-\u1081\u1083-\u1084\u1087-\u108c\u108e\u108f\u1090-\u1099\u109a-\u109c\u109e-\u109f\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fb\u10fc\u10fd-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u1368\u1369-\u137c\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166d-\u166e\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16eb-\u16ed\u16ee-\u16f0\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735-\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7-\u17c8\u17d4-\u17d6\u17d7\u17d8-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930-\u1931\u1933-\u1938\u1946-\u194f\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c0\u19c1-\u19c7\u19c8-\u19c9\u19d0-\u19d9\u19da\u1a00-\u1a16\u1a19-\u1a1a\u1a1e-\u1a1f\u1a20-\u1a54\u1a55\u1a57\u1a61\u1a63-\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aa6\u1aa7\u1aa8-\u1aad\u1b04\u1b05-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b44\u1b45-\u1b4b\u1b50-\u1b59\u1b5a-\u1b60\u1b61-\u1b6a\u1b74-\u1b7c\u1b82\u1b83-\u1ba0\u1ba1\u1ba6-\u1ba7\u1baa\u1bae-\u1baf\u1bb0-\u1bb9\u1bba-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2-\u1bf3\u1bfc-\u1bff\u1c00-\u1c23\u1c24-\u1c2b\u1c34-\u1c35\u1c3b-\u1c3f\u1c40-\u1c49\u1c4d-\u1c4f\u1c50-\u1c59\u1c5a-\u1c77\u1c78-\u1c7d\u1c7e-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf1\u1cf2-\u1cf3\u1cf5-\u1cf6\u1d00-\u1d2b\u1d2c-\u1d6a\u1d6b-\u1d77\u1d78\u1d79-\u1d9a\u1d9b-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2134\u2135-\u2138\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2182\u2183-\u2184\u2185-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c7b\u2c7c-\u2c7d\u2c7e-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005\u3006\u3007\u3021-\u3029\u302e-\u302f\u3031-\u3035\u3038-\u303a\u303b\u303c\u3041-\u3096\u309d-\u309e\u309f\u30a1-\u30fa\u30fc-\u30fe\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u3191\u3192-\u3195\u3196-\u319f\u31a0-\u31ba\u31f0-\u31ff\u3200-\u321c\u3220-\u3229\u322a-\u3247\u3248-\u324f\u3260-\u327b\u327f\u3280-\u3289\u328a-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua014\ua015\ua016-\ua48c\ua4d0-\ua4f7\ua4f8-\ua4fd\ua4fe-\ua4ff\ua500-\ua60b\ua60c\ua610-\ua61f\ua620-\ua629\ua62a-\ua62b\ua640-\ua66d\ua66e\ua680-\ua69b\ua69c-\ua69d\ua6a0-\ua6e5\ua6e6-\ua6ef\ua6f2-\ua6f7\ua722-\ua76f\ua770\ua771-\ua787\ua789-\ua78a\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7\ua7f8-\ua7f9\ua7fa\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua823-\ua824\ua827\ua830-\ua835\ua836-\ua837\ua840-\ua873\ua880-\ua881\ua882-\ua8b3\ua8b4-\ua8c3\ua8ce-\ua8cf\ua8d0-\ua8d9\ua8f2-\ua8f7\ua8f8-\ua8fa\ua8fb\ua900-\ua909\ua90a-\ua925\ua92e-\ua92f\ua930-\ua946\ua952-\ua953\ua95f\ua960-\ua97c\ua983\ua984-\ua9b2\ua9b4-\ua9b5\ua9ba-\ua9bb\ua9bd-\ua9c0\ua9c1-\ua9cd\ua9cf\ua9d0-\ua9d9\ua9de-\ua9df\ua9e0-\ua9e4\ua9e6\ua9e7-\ua9ef\ua9f0-\ua9f9\ua9fa-\ua9fe\uaa00-\uaa28\uaa2f-\uaa30\uaa33-\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa5f\uaa60-\uaa6f\uaa70\uaa71-\uaa76\uaa77-\uaa79\uaa7a\uaa7b\uaa7d\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadc\uaadd\uaade-\uaadf\uaae0-\uaaea\uaaeb\uaaee-\uaaef\uaaf0-\uaaf1\uaaf2\uaaf3-\uaaf4\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5b\uab5c-\uab5f\uab64-\uab65\uabc0-\uabe2\uabe3-\uabe4\uabe6-\uabe7\uabe9-\uabea\uabeb\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\uf8ff\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uff6f\uff70\uff71-\uff9d\uff9e-\uff9f\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc' +
            o +
            a +
            ']'
        ),
        s = new RegExp('[' + o + a + ']');
      function c(t) {
        var e = u.exec(t);
        return null == e ? null : e[0];
      }
      function f(t) {
        var e = c(t);
        return null == e ? n.NEUTRAL : s.exec(e) ? n.RTL : n.LTR;
      }
      function l(t, e) {
        if (((e = e || n.NEUTRAL), !t.length)) return e;
        var r = f(t);
        return r === n.NEUTRAL ? e : r;
      }
      function p(t, e) {
        return e || (e = n.getGlobalDir()), n.isStrong(e) || i(!1), l(t, e);
      }
      var h = {
        firstStrongChar: c,
        firstStrongCharDir: f,
        resolveBlockDir: l,
        getDirection: p,
        isDirectionLTR: function (t, e) {
          return p(t, e) === n.LTR;
        },
        isDirectionRTL: function (t, e) {
          return p(t, e) === n.RTL;
        },
      };
      t.exports = h;
    },
    GFFh: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return s;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('GMU/'),
        a = r.n(o),
        u = i.a.createElement;
      function s(t) {
        var e = t.children;
        return u('div', { className: a.a.root }, e);
      }
    },
    'GMU/': function (t, e, r) {
      t.exports = { root: 'ContainerBox_root__2zKb2' };
    },
    GSkh: function (t, e, r) {
      'use strict';
      var n = r('rim0'),
        i = r('tI3i'),
        o = n.isBrowser('IE <= 9');
      t.exports = function (t) {
        var e,
          r = null;
        return (
          !o &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((e = document.implementation.createHTMLDocument('foo'))
              .documentElement || i(!1),
            (e.documentElement.innerHTML = t),
            (r = e.getElementsByTagName('body')[0])),
          r
        );
      };
    },
    GyyK: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('IbSy'),
        o = r('YM28'),
        a = r('IvBP'),
        u = r('mTn+'),
        s = r('zYrz'),
        c = r('tI3i'),
        f = function (t, e) {
          return {
            key: t.getKey(),
            text: t.getText(),
            type: t.getType(),
            depth: t.getDepth(),
            inlineStyleRanges: s(t),
            entityRanges: u(t, e),
            data: t.getData().toObject(),
          };
        },
        l = function (t, e, r, a) {
          if (t instanceof i) r.push(f(t, e));
          else {
            t instanceof o || c(!1);
            var u = t.getParentKey(),
              s = (a[t.getKey()] = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(r);
                  'function' === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                      })
                    )),
                    i.forEach(function (e) {
                      n(t, e, r[e]);
                    });
                }
                return t;
              })({}, f(t, e), { children: [] }));
            u ? a[u].children.push(s) : r.push(s);
          }
        };
      t.exports = function (t) {
        var e = { entityMap: {}, blocks: [] };
        return (
          (e = (function (t, e) {
            var r = e.entityMap,
              n = [],
              i = {},
              o = {},
              u = 0;
            return (
              t.getBlockMap().forEach(function (t) {
                t.findEntityRanges(
                  function (t) {
                    return null !== t.getEntity();
                  },
                  function (e) {
                    var n = t.getEntityAt(e),
                      i = a.stringify(n);
                    o[i] || ((o[i] = n), (r[i] = ''.concat(u)), u++);
                  }
                ),
                  l(t, r, n, i);
              }),
              { blocks: n, entityMap: r }
            );
          })(t, e)),
          (e = (function (t, e) {
            var r = e.blocks,
              n = e.entityMap,
              i = {};
            return (
              Object.keys(n).forEach(function (e, r) {
                var n = t.getEntity(a.unstringify(e));
                i[r] = {
                  type: n.getType(),
                  mutability: n.getMutability(),
                  data: n.getData(),
                };
              }),
              { blocks: r, entityMap: i }
            );
          })(t, e))
        );
      };
    },
    HKFH: function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('3Hp6').Map,
        o = {
          add: function (t, e, r) {
            return a(t, e, r, !0);
          },
          remove: function (t, e, r) {
            return a(t, e, r, !1);
          },
        };
      function a(t, e, r, o) {
        var a = t.getBlockMap(),
          u = e.getStartKey(),
          s = e.getStartOffset(),
          c = e.getEndKey(),
          f = e.getEndOffset(),
          l = a
            .skipUntil(function (t, e) {
              return e === u;
            })
            .takeUntil(function (t, e) {
              return e === c;
            })
            .concat(i([[c, a.get(c)]]))
            .map(function (t, e) {
              var i, a;
              u === c
                ? ((i = s), (a = f))
                : ((i = e === u ? s : 0), (a = e === c ? f : t.getLength()));
              for (var l, p = t.getCharacterList(); i < a; )
                (l = p.get(i)),
                  (p = p.set(i, o ? n.applyStyle(l, r) : n.removeStyle(l, r))),
                  i++;
              return t.set('characterList', p);
            });
        return t.merge({
          blockMap: a.merge(l),
          selectionBefore: e,
          selectionAfter: e,
        });
      }
      t.exports = o;
    },
    'HNU+': function (t, e, r) {
      t.exports = {
        root: 'SocialBar_root__3PB5S',
        githubButtonWrapper: 'SocialBar_githubButtonWrapper__2CGM3',
        twitterButtonWrapper: 'SocialBar_twitterButtonWrapper__mqoqZ',
        facebookButtonWrapper: 'SocialBar_facebookButtonWrapper__3CEmr',
      };
    },
    HOTy: function (t, e, r) {
      'use strict';
      var n = r('ddV6'),
        i = r('IGGJ');
      (e.__esModule = !0),
        (e.useIntersection = function (t) {
          var e = t.rootMargin,
            r = t.disabled || !u,
            i = (0, o.useRef)(),
            c = (0, o.useState)(!1),
            f = n(c, 2),
            l = f[0],
            p = f[1],
            h = (0, o.useCallback)(
              function (t) {
                i.current && (i.current(), (i.current = void 0)),
                  r ||
                    l ||
                    (t &&
                      t.tagName &&
                      (i.current = (function (t, e, r) {
                        var n = (function (t) {
                            var e = t.rootMargin || '',
                              r = s.get(e);
                            if (r) return r;
                            var n = new Map(),
                              i = new IntersectionObserver(function (t) {
                                t.forEach(function (t) {
                                  var e = n.get(t.target),
                                    r =
                                      t.isIntersecting ||
                                      t.intersectionRatio > 0;
                                  e && r && e(r);
                                });
                              }, t);
                            return (
                              s.set(
                                e,
                                (r = { id: e, observer: i, elements: n })
                              ),
                              r
                            );
                          })(r),
                          i = n.id,
                          o = n.observer,
                          a = n.elements;
                        return (
                          a.set(t, e),
                          o.observe(t),
                          function () {
                            a.delete(t),
                              o.unobserve(t),
                              0 === a.size && (o.disconnect(), s.delete(i));
                          }
                        );
                      })(
                        t,
                        function (t) {
                          return t && p(t);
                        },
                        { rootMargin: e }
                      )));
              },
              [r, e, l]
            );
          return (
            (0, o.useEffect)(
              function () {
                u ||
                  l ||
                  (0, a.default)(function () {
                    return p(!0);
                  });
              },
              [l]
            ),
            [h, l]
          );
        });
      var o = r('ERkP'),
        a = i(r('ZeW2')),
        u = 'undefined' !== typeof IntersectionObserver;
      var s = new Map();
    },
    HbGN: function (t, e, r) {
      'use strict';
      function n(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    HdU4: function (t, e, r) {
      'use strict';
      var n = r('YM28');
      t.exports = function (t, e) {
        if (!(t instanceof n)) return null;
        var r = t.getNextSiblingKey();
        if (r) return r;
        var i = t.getParentKey();
        if (!i) return null;
        for (var o = e.get(i); o && !o.getNextSiblingKey(); ) {
          var a = o.getParentKey();
          o = a ? e.get(a) : null;
        }
        return o ? o.getNextSiblingKey() : null;
      };
    },
    IDEf: function (t, e, r) {
      'use strict';
      var n = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var i = n.prototype;
        return (
          (i.serialize = function () {
            return (
              'Anchor: ' +
              this.getAnchorKey() +
              ':' +
              this.getAnchorOffset() +
              ', Focus: ' +
              this.getFocusKey() +
              ':' +
              this.getFocusOffset() +
              ', Is Backward: ' +
              String(this.getIsBackward()) +
              ', Has Focus: ' +
              String(this.getHasFocus())
            );
          }),
          (i.getAnchorKey = function () {
            return this.get('anchorKey');
          }),
          (i.getAnchorOffset = function () {
            return this.get('anchorOffset');
          }),
          (i.getFocusKey = function () {
            return this.get('focusKey');
          }),
          (i.getFocusOffset = function () {
            return this.get('focusOffset');
          }),
          (i.getIsBackward = function () {
            return this.get('isBackward');
          }),
          (i.getHasFocus = function () {
            return this.get('hasFocus');
          }),
          (i.hasEdgeWithin = function (t, e, r) {
            var n = this.getAnchorKey(),
              i = this.getFocusKey();
            if (n === i && n === t) {
              var o = this.getStartOffset(),
                a = this.getEndOffset();
              return (e <= o && o <= r) || (e <= a && a <= r);
            }
            if (t !== n && t !== i) return !1;
            var u = t === n ? this.getAnchorOffset() : this.getFocusOffset();
            return e <= u && r >= u;
          }),
          (i.isCollapsed = function () {
            return (
              this.getAnchorKey() === this.getFocusKey() &&
              this.getAnchorOffset() === this.getFocusOffset()
            );
          }),
          (i.getStartKey = function () {
            return this.getIsBackward()
              ? this.getFocusKey()
              : this.getAnchorKey();
          }),
          (i.getStartOffset = function () {
            return this.getIsBackward()
              ? this.getFocusOffset()
              : this.getAnchorOffset();
          }),
          (i.getEndKey = function () {
            return this.getIsBackward()
              ? this.getAnchorKey()
              : this.getFocusKey();
          }),
          (i.getEndOffset = function () {
            return this.getIsBackward()
              ? this.getAnchorOffset()
              : this.getFocusOffset();
          }),
          (n.createEmpty = function (t) {
            return new n({
              anchorKey: t,
              anchorOffset: 0,
              focusKey: t,
              focusOffset: 0,
              isBackward: !1,
              hasFocus: !1,
            });
          }),
          n
        );
      })(
        (0, r('3Hp6').Record)({
          anchorKey: '',
          anchorOffset: 0,
          focusKey: '',
          focusOffset: 0,
          isBackward: !1,
          hasFocus: !1,
        })
      );
      t.exports = n;
    },
    IbSy: function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('3Hp6'),
        a = o.List,
        u = o.Map,
        s = o.OrderedSet,
        c = o.Record,
        f = o.Repeat,
        l = s(),
        p = c({
          key: '',
          type: 'unstyled',
          text: '',
          characterList: a(),
          depth: 0,
          data: u(),
        }),
        h = (function (t) {
          var e, r;
          function o(e) {
            return (
              t.call(
                this,
                (function (t) {
                  if (!t) return t;
                  var e = t.characterList,
                    r = t.text;
                  return (
                    r && !e && (t.characterList = a(f(n.EMPTY, r.length))), t
                  );
                })(e)
              ) || this
            );
          }
          (r = t),
            ((e = o).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var u = o.prototype;
          return (
            (u.getKey = function () {
              return this.get('key');
            }),
            (u.getType = function () {
              return this.get('type');
            }),
            (u.getText = function () {
              return this.get('text');
            }),
            (u.getCharacterList = function () {
              return this.get('characterList');
            }),
            (u.getLength = function () {
              return this.getText().length;
            }),
            (u.getDepth = function () {
              return this.get('depth');
            }),
            (u.getData = function () {
              return this.get('data');
            }),
            (u.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getStyle() : l;
            }),
            (u.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getEntity() : null;
            }),
            (u.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), d, t, e);
            }),
            (u.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), g, t, e);
            }),
            o
          );
        })(p);
      function d(t, e) {
        return t.getStyle() === e.getStyle();
      }
      function g(t, e) {
        return t.getEntity() === e.getEntity();
      }
      t.exports = h;
    },
    IchF: function (t, e, r) {
      'use strict';
      var n = r('M7w5'),
        i = r('DtGU'),
        o = r('7XzN'),
        a = r('tI3i'),
        u = r('13UR'),
        s = r('hF1F');
      function c(t, e, r) {
        var o = e,
          c = n(o);
        (null != c || (t && (t === o || t.firstChild === o)) || a(!1),
        t === o) &&
          ((o = o.firstChild),
          u(o) || a(!1),
          'true' !== (o = o).getAttribute('data-contents') && a(!1),
          r > 0 && (r = o.childNodes.length));
        if (0 === r) {
          var l = null;
          if (null != c) l = c;
          else {
            var p = (function (t) {
              for (
                ;
                t.firstChild &&
                ((u(t.firstChild) &&
                  'true' === t.firstChild.getAttribute('data-blocks')) ||
                  i(t.firstChild));

              )
                t = t.firstChild;
              return t;
            })(o);
            l = s(i(p));
          }
          return { key: l, offset: 0 };
        }
        var h = o.childNodes[r - 1],
          d = null,
          g = null;
        if (i(h)) {
          var y = (function (t) {
            for (
              ;
              t.lastChild &&
              ((u(t.lastChild) &&
                'true' === t.lastChild.getAttribute('data-blocks')) ||
                i(t.lastChild));

            )
              t = t.lastChild;
            return t;
          })(h);
          (d = s(i(y))), (g = f(y));
        } else (d = s(c)), (g = f(h));
        return { key: d, offset: g };
      }
      function f(t) {
        var e = t.textContent;
        return '\n' === e ? 0 : e.length;
      }
      t.exports = function (t, e, r, i, a, u) {
        var f = r.nodeType === Node.TEXT_NODE,
          l = a.nodeType === Node.TEXT_NODE;
        if (f && l)
          return {
            selectionState: o(t, s(n(r)), i, s(n(a)), u),
            needsRecovery: !1,
          };
        var p = null,
          h = null,
          d = !0;
        return (
          f
            ? ((p = { key: s(n(r)), offset: i }), (h = c(e, a, u)))
            : l
            ? ((h = { key: s(n(a)), offset: u }), (p = c(e, r, i)))
            : ((p = c(e, r, i)),
              (h = c(e, a, u)),
              r === a &&
                i === u &&
                (d = !!r.firstChild && 'BR' !== r.firstChild.nodeName)),
          {
            selectionState: o(t, p.key, p.offset, h.key, h.offset),
            needsRecovery: d,
          }
        );
      };
    },
    IvBP: function (t, e, r) {
      'use strict';
      var n = {
        stringify: function (t) {
          return '_' + String(t);
        },
        unstringify: function (t) {
          return t.slice(1);
        },
      };
      t.exports = n;
    },
    JAVJ: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              a(t, e, r[e]);
            });
        }
        return t;
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var u = r('MOn9'),
        s = r('b//S'),
        c = r('ERkP'),
        f = r('2Wwg'),
        l = r('Y5pQ'),
        p = r('hF1F'),
        h = function (t, e, r, n) {
          return f({
            'public/DraftStyleDefault/unorderedListItem':
              'unordered-list-item' === t,
            'public/DraftStyleDefault/orderedListItem':
              'ordered-list-item' === t,
            'public/DraftStyleDefault/reset': r,
            'public/DraftStyleDefault/depth0': 0 === e,
            'public/DraftStyleDefault/depth1': 1 === e,
            'public/DraftStyleDefault/depth2': 2 === e,
            'public/DraftStyleDefault/depth3': 3 === e,
            'public/DraftStyleDefault/depth4': e >= 4,
            'public/DraftStyleDefault/listLTR': 'LTR' === n,
            'public/DraftStyleDefault/listRTL': 'RTL' === n,
          });
        },
        d = (function (t) {
          var e, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var a = n.prototype;
          return (
            (a.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState;
              if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
              if (
                e.getSelection().getHasFocus() !==
                r.getSelection().getHasFocus()
              )
                return !0;
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
              if (
                e === r ||
                (null !== n && r.getCurrentContent() === n) ||
                (i && o)
              )
                return !1;
              var a = e.getCurrentContent(),
                u = r.getCurrentContent(),
                s = e.getDecorator(),
                c = r.getDecorator();
              return i !== o || a !== u || s !== c || r.mustForceSelection();
            }),
            (a.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  a = t.customStyleMap,
                  f = t.customStyleFn,
                  d = t.editorState,
                  g = t.editorKey,
                  y = t.preventScroll,
                  v = t.textDirectionality,
                  _ = d.getCurrentContent(),
                  m = d.getSelection(),
                  b = d.mustForceSelection(),
                  w = d.getDecorator(),
                  S = p(d.getDirectionMap()),
                  k = _.getBlocksAsArray(),
                  x = [],
                  E = null,
                  O = null,
                  C = 0;
                C < k.length;
                C++
              ) {
                var D = k[C],
                  M = D.getKey(),
                  I = D.getType(),
                  K = r(D),
                  A = void 0,
                  T = void 0,
                  B = void 0;
                K && ((A = K.component), (T = K.props), (B = K.editable));
                var R = v || S.get(M),
                  z = s.encode(M, 0, 0),
                  L = {
                    contentState: _,
                    block: D,
                    blockProps: T,
                    blockStyleFn: n,
                    customStyleMap: a,
                    customStyleFn: f,
                    decorator: w,
                    direction: R,
                    forceSelection: b,
                    offsetKey: z,
                    preventScroll: y,
                    selection: m,
                    tree: d.getBlockTree(M),
                  },
                  P = e.get(I) || e.get('unstyled'),
                  F = P.wrapper,
                  N = P.element || e.get('unstyled').element,
                  j = D.getDepth(),
                  U = '';
                if ((n && (U = n(D)), 'li' === N))
                  U = l(U, h(I, j, O !== F || null === E || j > E, R));
                var q = A || u,
                  H = {
                    className: U,
                    'data-block': !0,
                    'data-editor': g,
                    'data-offset-key': z,
                    key: M,
                  };
                void 0 !== B &&
                  (H = o({}, H, {
                    contentEditable: B,
                    suppressContentEditableWarning: !0,
                  }));
                var W = c.createElement(
                  N,
                  H,
                  c.createElement(q, i({}, L, { key: M }))
                );
                x.push({ block: W, wrapperTemplate: F, key: M, offsetKey: z }),
                  (E = F ? D.getDepth() : null),
                  (O = F);
              }
              for (var V = [], J = 0; J < x.length; ) {
                var Y = x[J];
                if (Y.wrapperTemplate) {
                  var G = [];
                  do {
                    G.push(x[J].block), J++;
                  } while (
                    J < x.length &&
                    x[J].wrapperTemplate === Y.wrapperTemplate
                  );
                  var X = c.cloneElement(
                    Y.wrapperTemplate,
                    { key: Y.key + '-wrap', 'data-offset-key': Y.offsetKey },
                    G
                  );
                  V.push(X);
                } else V.push(Y.block), J++;
              }
              return c.createElement('div', { 'data-contents': 'true' }, V);
            }),
            n
          );
        })(c.Component);
      t.exports = d;
    },
    JtWY: function (t, e, r) {
      'use strict';
      var n =
        'undefined' !== typeof navigator &&
        navigator.userAgent.indexOf('AppleWebKit') > -1;
      t.exports = function (t) {
        return (t = t || document).scrollingElement
          ? t.scrollingElement
          : n || 'CSS1Compat' !== t.compatMode
          ? t.body
          : t.documentElement;
      };
    },
    'K/z8': function (t, e, r) {
      'use strict';
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      r.d(e, 'a', function () {
        return o;
      });
      var i = r('pWxA');
      function o(t, e) {
        return !e || ('object' !== n(e) && 'function' !== typeof e)
          ? Object(i.a)(t)
          : e;
      }
    },
    KDIr: function (t, e, r) {
      'use strict';
      var n = r('YM28'),
        i = r('YSZ8'),
        o = r('3Hp6'),
        a = r('tI3i'),
        u = r('WmAF'),
        s = o.List,
        c = o.Map,
        f = function (t, e, r) {
          if (t) {
            var n = e.get(t);
            n && e.set(t, r(n));
          }
        };
      t.exports = function (t, e) {
        e.isCollapsed() || a(!1);
        var r = e.getAnchorKey(),
          o = t.getBlockMap(),
          l = o.get(r),
          p = l.getText();
        if (!p) {
          var h = l.getType();
          if ('unordered-list-item' === h || 'ordered-list-item' === h)
            return u(t, e, function (t) {
              return t.merge({ type: 'unstyled', depth: 0 });
            });
        }
        var d = e.getAnchorOffset(),
          g = l.getCharacterList(),
          y = i(),
          v = l instanceof n,
          _ = l.merge({ text: p.slice(0, d), characterList: g.slice(0, d) }),
          m = _.merge({
            key: y,
            text: p.slice(d),
            characterList: g.slice(d),
            data: c(),
          }),
          b = o.toSeq().takeUntil(function (t) {
            return t === l;
          }),
          w = o
            .toSeq()
            .skipUntil(function (t) {
              return t === l;
            })
            .rest(),
          S = b
            .concat(
              [
                [r, _],
                [y, m],
              ],
              w
            )
            .toOrderedMap();
        return (
          v &&
            (l.getChildKeys().isEmpty() || a(!1),
            (S = (function (t, e, r) {
              return t.withMutations(function (t) {
                var n = e.getKey(),
                  i = r.getKey();
                f(e.getParentKey(), t, function (t) {
                  var e = t.getChildKeys(),
                    r = e.indexOf(n) + 1,
                    o = e.toArray();
                  return o.splice(r, 0, i), t.merge({ children: s(o) });
                }),
                  f(e.getNextSiblingKey(), t, function (t) {
                    return t.merge({ prevSibling: i });
                  }),
                  f(n, t, function (t) {
                    return t.merge({ nextSibling: i });
                  }),
                  f(i, t, function (t) {
                    return t.merge({ prevSibling: n });
                  });
              });
            })(S, _, m))),
          t.merge({
            blockMap: S,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: y,
              anchorOffset: 0,
              focusKey: y,
              focusOffset: 0,
              isBackward: !1,
            }),
          })
        );
      };
    },
    KOTo: function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('IbSy'),
        a = r('YM28'),
        u = r('VeLA'),
        s = r('krsZ'),
        c = r('bdcm'),
        f = (r('B3y8'), r('IDEf')),
        l = r('hgxY'),
        p = r('NgPv'),
        h = r('DZH9'),
        d = r('YSZ8'),
        g = r('ZUd0'),
        y = r('3Hp6'),
        v = r('tI3i'),
        _ = g('draft_tree_data_support'),
        m = y.List,
        b = y.Map,
        w = y.OrderedMap,
        S = function (t, e) {
          var r = t.key,
            n = t.type,
            i = t.data;
          return {
            text: t.text,
            depth: t.depth || 0,
            type: n || 'unstyled',
            key: r || d(),
            data: b(i),
            characterList: k(t, e),
          };
        },
        k = function (t, e) {
          var r = t.text,
            i = t.entityRanges,
            o = t.inlineStyleRanges,
            a = i || [];
          return l(
            h(r, o || []),
            p(
              r,
              a
                .filter(function (t) {
                  return e.hasOwnProperty(t.key);
                })
                .map(function (t) {
                  return n({}, t, { key: e[t.key] });
                })
            )
          );
        },
        x = function (t) {
          return n({}, t, { key: t.key || d() });
        },
        E = function (t, e, r) {
          var i = e.map(function (t) {
            return n({}, t, { parentRef: r });
          });
          return t.concat(i.reverse());
        },
        O = function (t, e) {
          var r = t.blocks.find(function (t) {
              return Array.isArray(t.children) && t.children.length > 0;
            }),
            i = _ && !r ? c.fromRawStateToRawTreeState(t).blocks : t.blocks;
          return _
            ? (function (t, e) {
                return t.map(x).reduce(function (r, i, o) {
                  Array.isArray(i.children) || v(!1);
                  var u = i.children.map(x),
                    s = new a(
                      n({}, S(i, e), {
                        prevSibling: 0 === o ? null : t[o - 1].key,
                        nextSibling: o === t.length - 1 ? null : t[o + 1].key,
                        children: m(
                          u.map(function (t) {
                            return t.key;
                          })
                        ),
                      })
                    );
                  r = r.set(s.getKey(), s);
                  for (var c = E([], u, s); c.length > 0; ) {
                    var f = c.pop(),
                      l = f.parentRef,
                      p = l.getChildKeys(),
                      h = p.indexOf(f.key),
                      d = Array.isArray(f.children);
                    if (!d) {
                      d || v(!1);
                      break;
                    }
                    var g = f.children.map(x),
                      y = new a(
                        n({}, S(f, e), {
                          parent: l.getKey(),
                          children: m(
                            g.map(function (t) {
                              return t.key;
                            })
                          ),
                          prevSibling: 0 === h ? null : p.get(h - 1),
                          nextSibling: h === p.size - 1 ? null : p.get(h + 1),
                        })
                      );
                    (r = r.set(y.getKey(), y)), (c = E(c, g, y));
                  }
                  return r;
                }, w());
              })(i, e)
            : (function (t, e) {
                return w(
                  t.map(function (t) {
                    var r = new o(S(t, e));
                    return [r.getKey(), r];
                  })
                );
              })(r ? c.fromRawTreeStateToRawState(t).blocks : i, e);
        };
      t.exports = function (t) {
        Array.isArray(t.blocks) || v(!1);
        var e = (function (t) {
            var e = t.entityMap,
              r = {};
            return (
              Object.keys(e).forEach(function (t) {
                var n = e[t],
                  i = n.type,
                  o = n.mutability,
                  a = n.data;
                r[t] = s.__create(i, o, a || {});
              }),
              r
            );
          })(t),
          r = O(t, e),
          n = r.isEmpty() ? new f() : f.createEmpty(r.first().getKey());
        return new u({
          blockMap: r,
          entityMap: e,
          selectionBefore: n,
          selectionAfter: n,
        });
      };
    },
    KXNC: function (t, e, r) {
      'use strict';
      var n = r('rim0'),
        i = r('tI3i');
      var o = n.isBrowser('Chrome')
        ? function (t) {
            for (
              var e = t.cloneRange(), r = [], n = t.endContainer;
              null != n;
              n = n.parentNode
            ) {
              var o = n === t.commonAncestorContainer;
              o
                ? e.setStart(t.startContainer, t.startOffset)
                : e.setStart(e.endContainer, 0);
              var a,
                u = Array.from(e.getClientRects());
              if ((r.push(u), o))
                return r.reverse(), (a = []).concat.apply(a, r);
              e.setEndBefore(n);
            }
            i(!1);
          }
        : function (t) {
            return Array.from(t.getClientRects());
          };
      t.exports = o;
    },
    KeDb: function (t, e, r) {
      'use strict';
      var n = r('ddV6'),
        i = r('yWCo');
      (e.__esModule = !0), (e.default = void 0);
      var o = i(r('ERkP')),
        a = r('L9lV'),
        u = r('7xIC'),
        s = r('HOTy'),
        c = {};
      function f(t, e, r, n) {
        if (t && (0, a.isLocalURL)(e)) {
          t.prefetch(e, r, n).catch(function (t) {
            0;
          });
          var i =
            n && 'undefined' !== typeof n.locale ? n.locale : t && t.locale;
          c[e + '%' + r + (i ? '%' + i : '')] = !0;
        }
      }
      var l = function (t) {
        var e = !1 !== t.prefetch,
          r = (0, u.useRouter)(),
          i = (r && r.pathname) || '/',
          l = o.default.useMemo(
            function () {
              var e = (0, a.resolveHref)(i, t.href, !0),
                r = n(e, 2),
                o = r[0],
                u = r[1];
              return {
                href: o,
                as: t.as ? (0, a.resolveHref)(i, t.as) : u || o,
              };
            },
            [i, t.href, t.as]
          ),
          p = l.href,
          h = l.as,
          d = t.children,
          g = t.replace,
          y = t.shallow,
          v = t.scroll,
          _ = t.locale;
        'string' === typeof d && (d = o.default.createElement('a', null, d));
        var m = o.Children.only(d),
          b = m && 'object' === typeof m && m.ref,
          w = (0, s.useIntersection)({ rootMargin: '200px' }),
          S = n(w, 2),
          k = S[0],
          x = S[1],
          E = o.default.useCallback(
            function (t) {
              k(t),
                b &&
                  ('function' === typeof b
                    ? b(t)
                    : 'object' === typeof b && (b.current = t));
            },
            [b, k]
          );
        (0, o.useEffect)(
          function () {
            var t = x && e && (0, a.isLocalURL)(p),
              n = 'undefined' !== typeof _ ? _ : r && r.locale,
              i = c[p + '%' + h + (n ? '%' + n : '')];
            t && !i && f(r, p, h, { locale: n });
          },
          [h, p, x, _, e, r]
        );
        var O = {
          ref: E,
          onClick: function (t) {
            m.props &&
              'function' === typeof m.props.onClick &&
              m.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, r, n, i, o, u, s) {
                  ('A' !== t.currentTarget.nodeName ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && '_self' !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      (0, a.isLocalURL)(r))) &&
                    (t.preventDefault(),
                    null == u && (u = n.indexOf('#') < 0),
                    e[i ? 'replace' : 'push'](r, n, {
                      shallow: o,
                      locale: s,
                      scroll: u,
                    }).then(function (t) {
                      t && u && document.body.focus();
                    }));
                })(t, r, p, h, g, y, v, _);
          },
          onMouseEnter: function (t) {
            (0, a.isLocalURL)(p) &&
              (m.props &&
                'function' === typeof m.props.onMouseEnter &&
                m.props.onMouseEnter(t),
              f(r, p, h, { priority: !0 }));
          },
        };
        if (t.passHref || ('a' === m.type && !('href' in m.props))) {
          var C = 'undefined' !== typeof _ ? _ : r && r.locale,
            D = (0, a.getDomainLocale)(
              h,
              C,
              r && r.locales,
              r && r.domainLocales
            );
          O.href =
            D ||
            (0, a.addBasePath)((0, a.addLocale)(h, C, r && r.defaultLocale));
        }
        return o.default.cloneElement(m, O);
      };
      e.default = l;
    },
    KqX8: function (t, e, r) {
      'use strict';
      var n = r('tI3i'),
        i = r('gUTI');
      t.exports = function (t) {
        var e = t.editorContainer;
        return e || n(!1), i(e.firstChild) || n(!1), e.firstChild;
      };
    },
    L9Z3: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return B;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = (function () {
          var t = function (e, r) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(e, r);
          };
          return function (e, r) {
            function n() {
              this.constructor = e;
            }
            t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        a = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (r.name = 'AssertionError'), r;
          }
          return o(e, t), e;
        })(Error);
      function u(t, e) {
        if (!t) throw new a(e);
      }
      function s(t) {
        var e = Object.entries(t)
          .filter(function (t) {
            var e = t[1];
            return void 0 !== e && null !== e;
          })
          .map(function (t) {
            var e = t[0],
              r = t[1];
            return encodeURIComponent(e) + '=' + encodeURIComponent(String(r));
          });
        return e.length > 0 ? '?' + e.join('&') : '';
      }
      var c = r('O94r'),
        f = r.n(c),
        l = (function () {
          var t = function (e, r) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(e, r);
          };
          return function (e, r) {
            function n() {
              this.constructor = e;
            }
            t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        p = function () {
          return (p =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        h = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(t) {
              try {
                s(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                s(n.throw(t));
              } catch (e) {
                o(e);
              }
            }
            function s(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(a, u);
            }
            s((n = n.apply(t, e || [])).next());
          });
        },
        d = function (t, e) {
          var r,
            n,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: u(0), throw: u(1), return: u(2) }),
            'function' === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function u(o) {
            return function (u) {
              return (function (o) {
                if (r) throw new TypeError('Generator is already executing.');
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = o);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(o);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (u) {
                    (o = [6, u]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, u]);
            };
          }
        },
        g = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                (r[n[i]] = t[n[i]]);
          }
          return r;
        },
        y = function (t) {
          return (
            !!t &&
            ('object' === typeof t || 'function' === typeof t) &&
            'function' === typeof t.then
          );
        },
        v = function (t, e) {
          return {
            left:
              window.outerWidth / 2 +
              (window.screenX || window.screenLeft || 0) -
              t / 2,
            top:
              window.outerHeight / 2 +
              (window.screenY || window.screenTop || 0) -
              e / 2,
          };
        },
        _ = function (t, e) {
          return {
            top: (window.screen.height - e) / 2,
            left: (window.screen.width - t) / 2,
          };
        };
      function m(t, e, r) {
        var n = e.height,
          i = e.width,
          o = g(e, ['height', 'width']),
          a = p(
            {
              height: n,
              width: i,
              location: 'no',
              toolbar: 'no',
              status: 'no',
              directories: 'no',
              menubar: 'no',
              scrollbars: 'yes',
              resizable: 'no',
              centerscreen: 'yes',
              chrome: 'yes',
            },
            o
          ),
          u = window.open(
            t,
            '',
            Object.keys(a)
              .map(function (t) {
                return t + '=' + a[t];
              })
              .join(', ')
          );
        if (r)
          var s = window.setInterval(function () {
            try {
              (null === u || u.closed) && (window.clearInterval(s), r(u));
            } catch (t) {
              console.error(t);
            }
          }, 1e3);
        return u;
      }
      var b = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.openShareDialog = function (t) {
                var r = e.props,
                  n = r.onShareWindowClose,
                  i = r.windowHeight,
                  o = void 0 === i ? 400 : i,
                  a = r.windowPosition,
                  u = void 0 === a ? 'windowCenter' : a,
                  s = r.windowWidth,
                  c = void 0 === s ? 550 : s;
                m(
                  t,
                  p(
                    { height: o, width: c },
                    'windowCenter' === u ? v(c, o) : _(c, o)
                  ),
                  n
                );
              }),
              (e.handleClick = function (t) {
                return h(e, void 0, void 0, function () {
                  var e, r, n, i, o, a, u, s, c, f;
                  return d(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (e = this.props),
                          (r = e.beforeOnClick),
                          (n = e.disabled),
                          (i = e.networkLink),
                          (o = e.onClick),
                          (a = e.url),
                          (u = e.openShareDialogOnClick),
                          (s = e.opts),
                          (c = i(a, s)),
                          n
                            ? [2]
                            : (t.preventDefault(),
                              r ? ((f = r()), y(f) ? [4, f] : [3, 2]) : [3, 2])
                        );
                      case 1:
                        l.sent(), (l.label = 2);
                      case 2:
                        return u && this.openShareDialog(c), o && o(t, c), [2];
                    }
                  });
                });
              }),
              e
            );
          }
          return (
            l(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.beforeOnClick, t.children),
                r = t.className,
                n = t.disabled,
                o = t.disabledStyle,
                a = t.forwardedRef,
                u = (t.networkLink, t.networkName),
                s =
                  (t.onShareWindowClose,
                  t.openShareDialogOnClick,
                  t.opts,
                  t.resetButtonStyle),
                c = t.style,
                l =
                  (t.url,
                  t.windowHeight,
                  t.windowPosition,
                  t.windowWidth,
                  g(t, [
                    'beforeOnClick',
                    'children',
                    'className',
                    'disabled',
                    'disabledStyle',
                    'forwardedRef',
                    'networkLink',
                    'networkName',
                    'onShareWindowClose',
                    'openShareDialogOnClick',
                    'opts',
                    'resetButtonStyle',
                    'style',
                    'url',
                    'windowHeight',
                    'windowPosition',
                    'windowWidth',
                  ])),
                h = f()(
                  'react-share__ShareButton',
                  { 'react-share__ShareButton--disabled': !!n, disabled: !!n },
                  r
                ),
                d = p(
                  p(
                    s
                      ? {
                          backgroundColor: 'transparent',
                          border: 'none',
                          padding: 0,
                          font: 'inherit',
                          color: 'inherit',
                          cursor: 'pointer',
                        }
                      : {},
                    c
                  ),
                  n && o
                );
              return i.a.createElement(
                'button',
                p({}, l, {
                  'aria-label': l['aria-label'] || u,
                  className: h,
                  onClick: this.handleClick,
                  ref: a,
                  style: d,
                }),
                e
              );
            }),
            (e.defaultProps = {
              disabledStyle: { opacity: 0.6 },
              openShareDialogOnClick: !0,
              resetButtonStyle: !0,
            }),
            e
          );
        })(n.Component),
        w = function () {
          return (w =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        };
      var S = function (t, e, r, o) {
        function a(n, a) {
          var u = r(n),
            s = w({}, n);
          return (
            Object.keys(u).forEach(function (t) {
              delete s[t];
            }),
            i.a.createElement(
              b,
              w({}, o, s, {
                forwardedRef: a,
                networkName: t,
                networkLink: e,
                opts: r(n),
              })
            )
          );
        }
        return (a.displayName = 'ShareButton-' + t), Object(n.forwardRef)(a);
      };
      var k = S(
          'twitter',
          function (t, e) {
            var r = e.title,
              n = e.via,
              i = e.hashtags,
              o = void 0 === i ? [] : i,
              a = e.related,
              c = void 0 === a ? [] : a;
            return (
              u(t, 'twitter.url'),
              u(Array.isArray(o), 'twitter.hashtags is not an array'),
              u(Array.isArray(c), 'twitter.related is not an array'),
              'https://twitter.com/share' +
                s({
                  url: t,
                  text: r,
                  via: n,
                  hashtags: o.length > 0 ? o.join(',') : void 0,
                  related: c.length > 0 ? c.join(',') : void 0,
                })
            );
          },
          function (t) {
            return {
              hashtags: t.hashtags,
              title: t.title,
              via: t.via,
              related: t.related,
            };
          },
          { windowWidth: 550, windowHeight: 400 }
        ),
        x = function () {
          return (x =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        E = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              e.indexOf(n) < 0 &&
              (r[n] = t[n]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
              e.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                (r[n[i]] = t[n[i]]);
          }
          return r;
        };
      function O(t) {
        var e = function (e) {
          var r = e.bgStyle,
            n = e.borderRadius,
            o = e.iconFillColor,
            a = e.round,
            u = e.size,
            s = E(e, [
              'bgStyle',
              'borderRadius',
              'iconFillColor',
              'round',
              'size',
            ]);
          return i.a.createElement(
            'svg',
            x({ viewBox: '0 0 64 64', width: u, height: u }, s),
            a
              ? i.a.createElement('circle', {
                  cx: '32',
                  cy: '32',
                  r: '31',
                  fill: t.color,
                  style: r,
                })
              : i.a.createElement('rect', {
                  width: '64',
                  height: '64',
                  rx: n,
                  ry: n,
                  fill: t.color,
                  style: r,
                }),
            i.a.createElement('path', { d: t.path, fill: o })
          );
        };
        return (
          (e.defaultProps = {
            bgStyle: {},
            borderRadius: 0,
            iconFillColor: 'white',
            size: 64,
          }),
          e
        );
      }
      var C = O({
        color: '#00aced',
        networkName: 'twitter',
        path:
          'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
      });
      var D = S(
          'facebook',
          function (t, e) {
            var r = e.quote,
              n = e.hashtag;
            return (
              u(t, 'facebook.url'),
              'https://www.facebook.com/sharer/sharer.php' +
                s({ u: t, quote: r, hashtag: n })
            );
          },
          function (t) {
            return { quote: t.quote, hashtag: t.hashtag };
          },
          { windowWidth: 550, windowHeight: 400 }
        ),
        M = O({
          color: '#3b5998',
          networkName: 'facebook',
          path:
            'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
        }),
        I = r('1MwI'),
        K = r('HNU+'),
        A = r.n(K),
        T = i.a.createElement;
      function B() {
        return T(
          'div',
          { className: A.a.root },
          T(
            'div',
            { className: A.a.githubButtonWrapper },
            T(I.a, {
              user: 'draft-js-plugins',
              repo: 'draft-js-plugins',
              size: 'large',
            })
          ),
          T(
            'div',
            { className: A.a.twitterButtonWrapper },
            T(
              k,
              {
                url: 'https://www.draft-js-plugins.com/',
                title: 'DraftJS Plugins - High quality plugins with great UX',
              },
              T(C, { size: '32' })
            )
          ),
          T(
            'div',
            { className: A.a.facebookButtonWrapper },
            T(
              D,
              { url: 'https://www.draft-js-plugins.com/' },
              T(M, { size: '32' })
            )
          )
        );
      }
    },
    LYv7: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        var e = (t ? t.ownerDocument || t : document).defaultView || window;
        return !(
          !t ||
          !('function' === typeof e.Node
            ? t instanceof e.Node
            : 'object' === typeof t &&
              'number' === typeof t.nodeType &&
              'string' === typeof t.nodeName)
        );
      };
    },
    LtnY: function (t, e, r) {
      'use strict';
      var n = r('ooRk'),
        i = r('b+nQ'),
        o = r('djSO'),
        a = r('7002'),
        u = r('EYg6'),
        s = r('1xkk'),
        c = r('9Kr7'),
        f = r('e59y'),
        l = r('VVXv'),
        p = r('X+Re'),
        h = r('cQcL');
      function d(t, e, r) {
        var n = a.replaceWithFragment(
          t.getCurrentContent(),
          t.getSelection(),
          e
        );
        return s.push(t, n.set('entityMap', r), 'insert-fragment');
      }
      t.exports = function (t, e) {
        e.preventDefault();
        var r = new o(e.clipboardData);
        if (!r.isRichText()) {
          var g = r.getFiles(),
            y = r.getText();
          if (g.length > 0) {
            if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g)))
              return;
            return void l(g, function (e) {
              if ((e = e || y)) {
                var r = t._latestEditorState,
                  o = h(e),
                  l = i.create({
                    style: r.getCurrentInlineStyle(),
                    entity: f(r.getCurrentContent(), r.getSelection()),
                  }),
                  p = c.getCurrentBlockType(r),
                  d = u.processText(o, l, p),
                  g = n.createFromArray(d),
                  v = a.replaceWithFragment(
                    r.getCurrentContent(),
                    r.getSelection(),
                    g
                  );
                t.update(s.push(r, v, 'insert-fragment'));
              }
            });
          }
        }
        var v = [],
          _ = r.getText(),
          m = r.getHTML(),
          b = t._latestEditorState;
        if (t.props.formatPastedText) {
          var w = t.props.formatPastedText(_, m);
          (_ = w.text), (m = w.html);
        }
        if (
          !t.props.handlePastedText ||
          !p(t.props.handlePastedText(_, m, b))
        ) {
          if ((_ && (v = h(_)), !t.props.stripPastedStyles)) {
            var S,
              k = t.getClipboard();
            if (!t.props.formatPastedText && r.isRichText() && k) {
              if (
                -1 !==
                  (null === (S = m) || void 0 === S
                    ? void 0
                    : S.indexOf(t.getEditorKey())) ||
                (1 === v.length && 1 === k.size && k.first().getText() === _)
              )
                return void t.update(d(t._latestEditorState, k));
            } else if (
              k &&
              r.types.includes('com.apple.webarchive') &&
              !r.types.includes('text/html') &&
              (function (t, e) {
                return (
                  t.length === e.size &&
                  e.valueSeq().every(function (e, r) {
                    return e.getText() === t[r];
                  })
                );
              })(v, k)
            )
              return void t.update(d(t._latestEditorState, k));
            if (m) {
              var x = u.processHTML(m, t.props.blockRenderMap);
              if (x) {
                var E = x.contentBlocks,
                  O = x.entityMap;
                if (E) {
                  var C = n.createFromArray(E);
                  return void t.update(d(t._latestEditorState, C, O));
                }
              }
            }
            t.setClipboard(null);
          }
          if (v.length) {
            var D = i.create({
                style: b.getCurrentInlineStyle(),
                entity: f(b.getCurrentContent(), b.getSelection()),
              }),
              M = c.getCurrentBlockType(b),
              I = u.processText(v, D, M),
              K = n.createFromArray(I);
            t.update(d(t._latestEditorState, K));
          }
        }
      };
    },
    LxfW: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return t.Window && t instanceof t.Window
          ? {
              x: t.pageXOffset || t.document.documentElement.scrollLeft,
              y: t.pageYOffset || t.document.documentElement.scrollTop,
            }
          : { x: t.scrollLeft, y: t.scrollTop };
      };
    },
    M6Be: function (t, e, r) {
      'use strict';
      var n = r('1xkk'),
        i = r('Cl3z'),
        o = r('IchF'),
        a = r('1AUG'),
        u = r('4aXP');
      t.exports = function (t, e) {
        var r = u(
          t,
          function (t) {
            var r = t.getSelection();
            if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
            var n = e.currentTarget.ownerDocument.defaultView
              .getSelection()
              .getRangeAt(0);
            return (
              (n = i(n)),
              o(
                t,
                null,
                n.endContainer,
                n.endOffset,
                n.startContainer,
                n.startOffset
              ).selectionState
            );
          },
          'backward'
        );
        return r === t.getCurrentContent() ? t : n.push(t, r, 'remove-range');
      };
    },
    M7w5: function (t, e, r) {
      'use strict';
      var n = r('vYw2'),
        i = r('DtGU');
      t.exports = function (t) {
        for (var e = t; e && e !== n(t).documentElement; ) {
          var r = i(e);
          if (null != r) return r;
          e = e.parentNode;
        }
        return null;
      };
    },
    MIqs: function (t, e, r) {
      'use strict';
      var n = r('LYv7');
      t.exports = function (t) {
        return n(t) && 3 == t.nodeType;
      };
    },
    MKsC: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView
          : window;
      };
    },
    MMYH: function (t, e, r) {
      'use strict';
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function i(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      }
      r.d(e, 'a', function () {
        return i;
      });
    },
    MOn9: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var u = r('XPEN'),
        s = r('b//S'),
        c = r('ERkP'),
        f = r('O+2R'),
        l = r('/LAw'),
        p = r('Fd87'),
        h = r('n09L'),
        d = r('2Wwg'),
        g = r('CtAg'),
        y = r('7MNd'),
        v = r('BTrg'),
        _ = r('tI3i'),
        m = r('gUTI'),
        b = r('hF1F'),
        w = function (t, e) {
          return t.getAnchorKey() === e || t.getFocusKey() === e;
        },
        S = (function (t) {
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = arguments[i];
            return (
              a(
                o((e = t.call.apply(t, [this].concat(n)) || this)),
                '_node',
                void 0
              ),
              e
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var S = n.prototype;
          return (
            (S.shouldComponentUpdate = function (t) {
              return (
                this.props.block !== t.block ||
                this.props.tree !== t.tree ||
                this.props.direction !== t.direction ||
                (w(t.selection, t.block.getKey()) && t.forceSelection)
              );
            }),
            (S.componentDidMount = function () {
              if (!this.props.preventScroll) {
                var t = this.props.selection,
                  e = t.getEndKey();
                if (t.getHasFocus() && e === this.props.block.getKey()) {
                  var r = this._node;
                  if (null != r) {
                    var n,
                      i = l.getScrollParent(r),
                      o = y(i);
                    if (i === window) {
                      var a = g(r);
                      (n = a.y + a.height - v().height) > 0 &&
                        window.scrollTo(o.x, o.y + n + 10);
                    } else {
                      m(r) || _(!1),
                        (n =
                          r.offsetHeight +
                          r.offsetTop -
                          (i.offsetTop + i.offsetHeight + o.y)) > 0 &&
                          f.setTop(i, f.getTop(i) + n + 10);
                    }
                  }
                }
              }
            }),
            (S._renderChildren = function () {
              var t = this,
                e = this.props.block,
                r = e.getKey(),
                n = e.getText(),
                o = this.props.tree.size - 1,
                a = w(this.props.selection, r);
              return this.props.tree
                .map(function (f, l) {
                  var d = f.get('leaves');
                  if (0 === d.size) return null;
                  var g = d.size - 1,
                    y = d
                      .map(function (i, f) {
                        var p = s.encode(r, l, f),
                          h = i.get('start'),
                          d = i.get('end');
                        return c.createElement(u, {
                          key: p,
                          offsetKey: p,
                          block: e,
                          start: h,
                          selection: a ? t.props.selection : null,
                          forceSelection: t.props.forceSelection,
                          text: n.slice(h, d),
                          styleSet: e.getInlineStyleAt(h),
                          customStyleMap: t.props.customStyleMap,
                          customStyleFn: t.props.customStyleFn,
                          isLast: l === o && f === g,
                        });
                      })
                      .toArray(),
                    v = f.get('decoratorKey');
                  if (null == v) return y;
                  if (!t.props.decorator) return y;
                  var _ = b(t.props.decorator),
                    m = _.getComponentForKey(v);
                  if (!m) return y;
                  var w = _.getPropsForKey(v),
                    S = s.encode(r, l, 0),
                    k = d.first().get('start'),
                    x = d.last().get('end'),
                    E = n.slice(k, x),
                    O = e.getEntityAt(f.get('start')),
                    C = h.getHTMLDirIfDifferent(
                      p.getDirection(E),
                      t.props.direction
                    ),
                    D = {
                      contentState: t.props.contentState,
                      decoratedText: E,
                      dir: C,
                      start: k,
                      end: x,
                      blockKey: r,
                      entityKey: O,
                      offsetKey: S,
                    };
                  return c.createElement(m, i({}, w, D, { key: S }), y);
                })
                .toArray();
            }),
            (S.render = function () {
              var t = this,
                e = this.props,
                r = e.direction,
                n = e.offsetKey,
                i = d({
                  'public/DraftStyleDefault/block': !0,
                  'public/DraftStyleDefault/ltr': 'LTR' === r,
                  'public/DraftStyleDefault/rtl': 'RTL' === r,
                });
              return c.createElement(
                'div',
                {
                  'data-offset-key': n,
                  className: i,
                  ref: function (e) {
                    return (t._node = e);
                  },
                },
                this._renderChildren()
              );
            }),
            n
          );
        })(c.Component);
      t.exports = S;
    },
    MzOC: function (t, e, r) {
      'use strict';
      r('/2Cm');
      t.exports = function (t, e) {
        var r,
          n = t.getSelection(),
          i = n.getStartKey(),
          o = n.getStartOffset(),
          a = t.getCurrentContent(),
          u = i;
        return (
          e > a.getBlockForKey(i).getText().length - o
            ? ((u = a.getKeyAfter(i)), (r = 0))
            : (r = o + e),
          n.merge({ focusKey: u, focusOffset: r })
        );
      };
    },
    NGtv: function (t, e, r) {
      'use strict';
      var n = r('3as9'),
        i = 'Unknown',
        o = { 'Mac OS': 'Mac OS X' };
      var a,
        u = new n().getResult(),
        s = (function (t) {
          if (!t) return { major: '', minor: '' };
          var e = t.split('.');
          return { major: e[0], minor: e[1] };
        })(u.browser.version),
        c = {
          browserArchitecture: u.cpu.architecture || i,
          browserFullVersion: u.browser.version || i,
          browserMinorVersion: s.minor || i,
          browserName: u.browser.name || i,
          browserVersion: u.browser.major || i,
          deviceName: u.device.model || i,
          engineName: u.engine.name || i,
          engineVersion: u.engine.version || i,
          platformArchitecture: u.cpu.architecture || i,
          platformName: ((a = u.os.name), o[a] || a || i),
          platformVersion: u.os.version || i,
          platformFullVersion: u.os.version || i,
        };
      t.exports = c;
    },
    NgPv: function (t, e, r) {
      'use strict';
      var n = r('W6iK').substr;
      t.exports = function (t, e) {
        var r = Array(t.length).fill(null);
        return (
          e &&
            e.forEach(function (e) {
              for (
                var i = n(t, 0, e.offset).length,
                  o = i + n(t, e.offset, e.length).length,
                  a = i;
                a < o;
                a++
              )
                r[a] = e.key;
            }),
          r
        );
      };
    },
    'O+2R': function (t, e, r) {
      'use strict';
      function n(t, e) {
        return !!e && (t === e.documentElement || t === e.body);
      }
      var i = {
        getTop: function (t) {
          var e = t.ownerDocument;
          return n(t, e)
            ? e.body.scrollTop || e.documentElement.scrollTop
            : t.scrollTop;
        },
        setTop: function (t, e) {
          var r = t.ownerDocument;
          n(t, r)
            ? (r.body.scrollTop = r.documentElement.scrollTop = e)
            : (t.scrollTop = e);
        },
        getLeft: function (t) {
          var e = t.ownerDocument;
          return n(t, e)
            ? e.body.scrollLeft || e.documentElement.scrollLeft
            : t.scrollLeft;
        },
        setLeft: function (t, e) {
          var r = t.ownerDocument;
          n(t, r)
            ? (r.body.scrollLeft = r.documentElement.scrollLeft = e)
            : (t.scrollLeft = e);
        },
      };
      t.exports = i;
    },
    O94r: function (t, e, r) {
      var n;
      !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function i() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            if (n) {
              var o = typeof n;
              if ('string' === o || 'number' === o) t.push(n);
              else if (Array.isArray(n) && n.length) {
                var a = i.apply(null, n);
                a && t.push(a);
              } else if ('object' === o)
                for (var u in n) r.call(n, u) && n[u] && t.push(u);
            }
          }
          return t.join(' ');
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(e, [])) || (t.exports = n);
      })();
    },
    OJbI: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r('b//S'),
        a = r('ERkP'),
        u = r('Fd87'),
        s = r('n09L'),
        c = (function (t) {
          var e, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          return (
            (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r),
            (n.prototype.render = function () {
              var t = this.props,
                e = t.block,
                r = t.children,
                n = t.contentState,
                c = t.decorator,
                f = t.decoratorKey,
                l = t.direction,
                p = t.leafSet,
                h = t.text,
                d = e.getKey(),
                g = p.get('leaves'),
                y = c.getComponentForKey(f),
                v = c.getPropsForKey(f),
                _ = o.encode(d, parseInt(f, 10), 0),
                m = h.slice(g.first().get('start'), g.last().get('end')),
                b = s.getHTMLDirIfDifferent(u.getDirection(m), l);
              return a.createElement(
                y,
                i({}, v, {
                  contentState: n,
                  decoratedText: m,
                  dir: b,
                  key: _,
                  entityKey: e.getEntityAt(p.get('start')),
                  offsetKey: _,
                }),
                r
              );
            }),
            n
          );
        })(a.Component);
      t.exports = c;
    },
    OTOR: function (t, e, r) {
      'use strict';
      t.exports = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ('x' == t ? e : (3 & e) | 8).toString(16);
          }
        );
      };
    },
    ObfX: function (t, e, r) {
      'use strict';
      t.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        COMMA: 188,
        PERIOD: 190,
        A: 65,
        Z: 90,
        ZERO: 48,
        NUMPAD_0: 96,
        NUMPAD_9: 105,
      };
    },
    'P/Gd': function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('b//S'),
        o = r('1xkk'),
        a = r('rim0'),
        u = r('RXrk').notEmptyKey,
        s = r('M7w5'),
        c = r('ZFda'),
        f = r('hF1F'),
        l = a.isEngine('Gecko');
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput),
          (t._pendingStateFromBeforeInput = void 0));
        var r = t.editor.ownerDocument.defaultView.getSelection(),
          a = r.anchorNode,
          p = r.isCollapsed,
          h =
            (null === a || void 0 === a ? void 0 : a.nodeType) !==
              Node.TEXT_NODE &&
            (null === a || void 0 === a ? void 0 : a.nodeType) !==
              Node.ELEMENT_NODE;
        if (null != a && !h) {
          if (
            a.nodeType === Node.TEXT_NODE &&
            (null !== a.previousSibling || null !== a.nextSibling)
          ) {
            var d = a.parentNode;
            if (null == d) return;
            a.nodeValue = d.textContent;
            for (var g = d.firstChild; null != g; g = g.nextSibling)
              g !== a && d.removeChild(g);
          }
          var y = a.textContent,
            v = t._latestEditorState,
            _ = f(s(a)),
            m = i.decode(_),
            b = m.blockKey,
            w = m.decoratorKey,
            S = m.leafKey,
            k = v.getBlockTree(b).getIn([w, 'leaves', S]),
            x = k.start,
            E = k.end,
            O = v.getCurrentContent(),
            C = O.getBlockForKey(b),
            D = C.getText().slice(x, E);
          if ((y.endsWith('\n\n') && (y = y.slice(0, -1)), y !== D)) {
            var M,
              I,
              K,
              A,
              T = v.getSelection(),
              B = T.merge({ anchorOffset: x, focusOffset: E, isBackward: !1 }),
              R = C.getEntityAt(x),
              z = u(R) ? O.getEntity(R) : null,
              L = 'MUTABLE' === (null != z ? z.getMutability() : null),
              P = L ? 'spellcheck-change' : 'apply-entity',
              F = n.replaceText(
                O,
                B,
                y,
                C.getInlineStyleAt(x),
                L ? C.getEntityAt(x) : null
              );
            if (l)
              (M = r.anchorOffset),
                (I = r.focusOffset),
                (A = (K = x + Math.min(M, I)) + Math.abs(M - I)),
                (M = K),
                (I = A);
            else {
              var N = y.length - D.length;
              (K = T.getStartOffset()),
                (A = T.getEndOffset()),
                (M = p ? A + N : K),
                (I = A + N);
            }
            var j = F.merge({
              selectionBefore: O.getSelectionAfter(),
              selectionAfter: T.merge({ anchorOffset: M, focusOffset: I }),
            });
            t.update(o.push(v, j, P));
          } else {
            var U = e.nativeEvent.inputType;
            if (U) {
              var q = (function (t, e) {
                switch (t) {
                  case 'deleteContentBackward':
                    return c(e);
                }
                return e;
              })(U, v);
              if (q !== v) return t.restoreEditorDOM(), void t.update(q);
            }
          }
        }
      };
    },
    PrWI: function (t, e, r) {
      'use strict';
      var n = r('hDHP');
      t.exports = function (t) {
        var e = t.getSelection();
        return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
      };
    },
    QAfK: function (t, e, r) {
      'use strict';
      var n = r('ZUd0')('draft_tree_data_support');
      t.exports = r(n ? 'vHsC' : 'JAVJ');
    },
    QCHf: function (t, e, r) {
      'use strict';
      var n = r('YM28'),
        i = r('HdU4'),
        o = r('3Hp6'),
        a = (o.List, o.Map),
        u = function (t, e, r) {
          if (t) {
            var n = e.get(t);
            n && e.set(t, r(n));
          }
        },
        s = function (t, e) {
          var r = [];
          if (!t) return r;
          for (var n = e.get(t); n && n.getParentKey(); ) {
            var i = n.getParentKey();
            i && r.push(i), (n = i ? e.get(i) : null);
          }
          return r;
        },
        c = function (t, e, r) {
          if (!t) return null;
          for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n); )
            n = r.get(n).getNextSiblingKey() || null;
          return n;
        },
        f = function (t, e, r) {
          if (!t) return null;
          for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n); )
            n = r.get(n).getPrevSiblingKey() || null;
          return n;
        },
        l = function (t, e, r, n) {
          return t.withMutations(function (o) {
            if (
              (u(e.getKey(), o, function (t) {
                return t.merge({
                  nextSibling: c(t, o, n),
                  prevSibling: f(t, o, n),
                });
              }),
              u(r.getKey(), o, function (t) {
                return t.merge({
                  nextSibling: c(t, o, n),
                  prevSibling: f(t, o, n),
                });
              }),
              s(e.getKey(), n).forEach(function (t) {
                return u(t, o, function (t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function (t) {
                      return o.get(t);
                    }),
                    nextSibling: c(t, o, n),
                    prevSibling: f(t, o, n),
                  });
                });
              }),
              u(e.getNextSiblingKey(), o, function (t) {
                return t.merge({ prevSibling: e.getPrevSiblingKey() });
              }),
              u(e.getPrevSiblingKey(), o, function (t) {
                return t.merge({ nextSibling: c(t, o, n) });
              }),
              u(r.getNextSiblingKey(), o, function (t) {
                return t.merge({ prevSibling: f(t, o, n) });
              }),
              u(r.getPrevSiblingKey(), o, function (t) {
                return t.merge({ nextSibling: r.getNextSiblingKey() });
              }),
              s(r.getKey(), n).forEach(function (t) {
                u(t, o, function (t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function (t) {
                      return o.get(t);
                    }),
                    nextSibling: c(t, o, n),
                    prevSibling: f(t, o, n),
                  });
                });
              }),
              (function (t, e) {
                var r = [];
                if (!t) return r;
                for (var n = i(t, e); n && e.get(n); ) {
                  var o = e.get(n);
                  r.push(n), (n = o.getParentKey() ? i(o, e) : null);
                }
                return r;
              })(r, n).forEach(function (t) {
                return u(t, o, function (t) {
                  return t.merge({
                    nextSibling: c(t, o, n),
                    prevSibling: f(t, o, n),
                  });
                });
              }),
              null == t.get(e.getKey()) &&
                null != t.get(r.getKey()) &&
                r.getParentKey() === e.getKey() &&
                null == r.getPrevSiblingKey())
            ) {
              var a = e.getPrevSiblingKey();
              u(r.getKey(), o, function (t) {
                return t.merge({ prevSibling: a });
              }),
                u(a, o, function (t) {
                  return t.merge({ nextSibling: r.getKey() });
                });
              var l = a ? t.get(a) : null,
                p = l ? l.getParentKey() : null;
              if (
                (e.getChildKeys().forEach(function (t) {
                  u(t, o, function (t) {
                    return t.merge({ parent: p });
                  });
                }),
                null != p)
              ) {
                var h = t.get(p);
                u(p, o, function (t) {
                  return t.merge({
                    children: h.getChildKeys().concat(e.getChildKeys()),
                  });
                });
              }
              u(
                e.getChildKeys().find(function (e) {
                  return null === t.get(e).getNextSiblingKey();
                }),
                o,
                function (t) {
                  return t.merge({ nextSibling: e.getNextSiblingKey() });
                }
              );
            }
          });
        },
        p = function (t, e, r) {
          if (0 === e) for (; e < r; ) (t = t.shift()), e++;
          else if (r === t.count()) for (; r > e; ) (t = t.pop()), r--;
          else {
            var n = t.slice(0, e),
              i = t.slice(r);
            t = n.concat(i).toList();
          }
          return t;
        };
      t.exports = function (t, e) {
        if (e.isCollapsed()) return t;
        var r,
          o = t.getBlockMap(),
          u = e.getStartKey(),
          c = e.getStartOffset(),
          f = e.getEndKey(),
          h = e.getEndOffset(),
          d = o.get(u),
          g = o.get(f),
          y = d instanceof n,
          v = [];
        if (y) {
          var _ = g.getChildKeys(),
            m = s(f, o);
          g.getNextSiblingKey() && (v = v.concat(m)),
            _.isEmpty() || (v = v.concat(m.concat([f]))),
            (v = v.concat(s(i(g, o), o)));
        }
        r =
          d === g
            ? p(d.getCharacterList(), c, h)
            : d
                .getCharacterList()
                .slice(0, c)
                .concat(g.getCharacterList().slice(h));
        var b = d.merge({
            text: d.getText().slice(0, c) + g.getText().slice(h),
            characterList: r,
          }),
          w =
            y &&
            0 === c &&
            0 === h &&
            g.getParentKey() === u &&
            null == g.getPrevSiblingKey()
              ? a([[u, null]])
              : o
                  .toSeq()
                  .skipUntil(function (t, e) {
                    return e === u;
                  })
                  .takeUntil(function (t, e) {
                    return e === f;
                  })
                  .filter(function (t, e) {
                    return -1 === v.indexOf(e);
                  })
                  .concat(a([[f, null]]))
                  .map(function (t, e) {
                    return e === u ? b : null;
                  }),
          S = o.merge(w).filter(function (t) {
            return !!t;
          });
        return (
          y && d !== g && (S = l(S, d, g, o)),
          t.merge({
            blockMap: S,
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: u,
              anchorOffset: c,
              focusKey: u,
              focusOffset: c,
              isBackward: !1,
            }),
          })
        );
      };
    },
    QVkg: function (t, e, r) {
      'use strict';
      var n = r('rim0'),
        i = r('r5/r'),
        o = r('Vwge'),
        a = r('oNIj'),
        u = r('fNrL'),
        s = r('k5bp'),
        c = r('gLP3'),
        f = r('58Uu'),
        l = r('glMO'),
        p = r('P/Gd'),
        h = r('njFt'),
        d = r('LtnY'),
        g = r('DuSR'),
        y = n.isBrowser('Chrome'),
        v = n.isBrowser('Firefox'),
        _ = y || v ? g : function (t) {},
        m = {
          onBeforeInput: i,
          onBlur: o,
          onCompositionStart: a,
          onCopy: u,
          onCut: s,
          onDragOver: c,
          onDragStart: f,
          onFocus: l,
          onInput: p,
          onKeyDown: h,
          onPaste: d,
          onSelect: g,
          onMouseUp: _,
          onKeyUp: _,
        };
      t.exports = m;
    },
    R0VQ: function (t, e, r) {
      'use strict';
      var n = r('KXNC');
      t.exports = function (t) {
        var e = n(t),
          r = 0,
          i = 0,
          o = 0,
          a = 0;
        if (e.length) {
          if (e.length > 1 && 0 === e[0].width) {
            var u = e[1];
            (r = u.top), (i = u.right), (o = u.bottom), (a = u.left);
          } else {
            var s = e[0];
            (r = s.top), (i = s.right), (o = s.bottom), (a = s.left);
          }
          for (var c = 1; c < e.length; c++) {
            var f = e[c];
            0 !== f.height &&
              0 !== f.width &&
              ((r = Math.min(r, f.top)),
              (i = Math.max(i, f.right)),
              (o = Math.max(o, f.bottom)),
              (a = Math.min(a, f.left)));
          }
        }
        return {
          top: r,
          right: i,
          bottom: o,
          left: a,
          width: i - a,
          height: o - r,
        };
      };
    },
    RRIY: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return k;
      }),
        r.d(e, 'b', function () {
          return S;
        });
      var n = r('zpdM'),
        i = r('ERkP'),
        o = r.n(i),
        a = r('aWzz'),
        u = r.n(a),
        s = r('Svze'),
        c = r.n(s);
      function f() {
        return (f =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function l(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i;
      }
      function p(t) {
        var e = t.getCurrentContent().getBlockMap(),
          r = e.last().getKey(),
          i = e.last().getLength(),
          o = new n.SelectionState({
            anchorKey: r,
            anchorOffset: i,
            focusKey: r,
            focusOffset: i,
          });
        return n.EditorState.acceptSelection(t, o);
      }
      var h = '-',
        d = (function () {
          function t(t) {
            (this.decorators = void 0), (this.decorators = c.a.List(t));
          }
          var e = t.prototype;
          return (
            (e.getDecorations = function (t, e) {
              var r = new Array(t.getText().length).fill(null);
              return (
                this.decorators.forEach(function (n, i) {
                  n.getDecorations(t, e).forEach(function (t, e) {
                    t && (r[e] = i + h + t);
                  });
                }),
                c.a.List(r)
              );
            }),
            (e.getComponentForKey = function (e) {
              return this.getDecoratorForKey(e).getComponentForKey(
                t.getInnerKey(e)
              );
            }),
            (e.getPropsForKey = function (e) {
              return this.getDecoratorForKey(e).getPropsForKey(
                t.getInnerKey(e)
              );
            }),
            (e.getDecoratorForKey = function (t) {
              var e = t.split(h),
                r = Number(e[0]);
              return this.decorators.get(r);
            }),
            (t.getInnerKey = function (t) {
              return t.split(h).slice(1).join(h);
            }),
            t
          );
        })(),
        g = function (t) {
          return (
            'function' === typeof t.getDecorations &&
            'function' === typeof t.getComponentForKey &&
            'function' === typeof t.getPropsForKey
          );
        };
      function y(t, e, r) {
        var i = (function (t) {
            var e = t.decorators,
              r = t.plugins,
              n = void 0 === r ? [] : r;
            return Object(s.List)([{ decorators: e }].concat(n))
              .filter(function (t) {
                return void 0 !== (null == t ? void 0 : t.decorators);
              })
              .flatMap(function (t) {
                return null == t ? void 0 : t.decorators;
              });
          })(t),
          a = (function (t, e, r) {
            var i = Object(s.List)(t)
              .map(function (t) {
                var n = t.component;
                return f({}, t, {
                  component: function (t) {
                    return o.a.createElement(
                      n,
                      f({}, t, { getEditorState: e, setEditorState: r })
                    );
                  },
                });
              })
              .toJS();
            return new n.CompositeDecorator(i);
          })(
            i.filter(function (t) {
              return !g(t);
            }),
            e,
            r
          ),
          u = i.filter(function (t) {
            return g(t);
          });
        return new d(u.push(a));
      }
      function v(t) {
        return Object(n.getDefaultKeyBinding)(t);
      }
      function _(t, e, r, i) {
        var o,
          a = i.setEditorState;
        switch (t) {
          case 'backspace':
          case 'backspace-word':
          case 'backspace-to-start-of-line':
            o = n.RichUtils.onBackspace(e);
            break;
          case 'delete':
          case 'delete-word':
          case 'delete-to-end-of-block':
            o = n.RichUtils.onDelete(e);
            break;
          default:
            return 'not-handled';
        }
        return null != o ? (a(o), 'handled') : 'not-handled';
      }
      function m(t, e) {
        var r = {},
          n = new Set(['onChange']);
        return (
          t.forEach(function (i) {
            Object.keys(i).forEach(function (i) {
              n.has(i) ||
                (n.add(i),
                i.startsWith('on')
                  ? (r[i] = (function (t, e, r) {
                      return function () {
                        for (
                          var n = arguments.length, i = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          i[o] = arguments[o];
                        return e.some(function (e) {
                          var n = e[t];
                          return (
                            'function' === typeof n &&
                            !0 === n.apply(void 0, i.concat([r]))
                          );
                        });
                      };
                    })(i, t, e))
                  : !(function (t) {
                      return t.startsWith('handle');
                    })(i)
                  ? (function (t) {
                      return t.endsWith('Fn');
                    })(i) &&
                    ('blockRendererFn' === i
                      ? (r.blockRendererFn = (function (t, e) {
                          return function (r) {
                            var n = { props: {} };
                            return (
                              t.forEach(function (t) {
                                if ('function' === typeof t.blockRendererFn) {
                                  var i = t.blockRendererFn(r, e);
                                  if (void 0 !== i && null !== i) {
                                    var o = i.props,
                                      a = l(i, ['props']),
                                      u = n,
                                      s = u.props,
                                      c = l(u, ['props']);
                                    n = f({}, c, a, { props: f({}, s, o) });
                                  }
                                }
                              }),
                              !!n.component && n
                            );
                          };
                        })(t, e))
                      : 'blockStyleFn' === i
                      ? (r.blockStyleFn = (function (t, e) {
                          return function (r) {
                            var n = [];
                            return (
                              t.forEach(function (t) {
                                if ('function' === typeof t.blockStyleFn) {
                                  var i = t.blockStyleFn(r, e);
                                  void 0 !== i && null !== i && n.push(i);
                                }
                              }),
                              n.join(' ')
                            );
                          };
                        })(t, e))
                      : 'customStyleFn' === i
                      ? (r.customStyleFn = (function (t, e) {
                          return function (r, n) {
                            var i;
                            return t.some(function (t) {
                              return (
                                'function' === typeof t.customStyleFn &&
                                void 0 !== (i = t.customStyleFn(r, n, e))
                              );
                            }) && i
                              ? i
                              : {};
                          };
                        })(t, e))
                      : 'keyBindingFn' === i &&
                        (r.keyBindingFn = (function (t, e) {
                          return function (r) {
                            var n = null;
                            return t.some(function (t) {
                              return (
                                'function' === typeof t.keyBindingFn &&
                                void 0 !== (n = t.keyBindingFn(r, e))
                              );
                            })
                              ? n
                              : null;
                          };
                        })(t, e)))
                  : (r[i] = (function (t, e, r) {
                      return function () {
                        for (
                          var n = arguments.length, i = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          i[o] = arguments[o];
                        return e.some(function (e) {
                          var n = e[t];
                          return (
                            'function' === typeof n &&
                            'handled' === n.apply(void 0, i.concat([r]))
                          );
                        })
                          ? 'handled'
                          : 'not-handled';
                      };
                    })(i, t, e)));
            });
          }),
          r
        );
      }
      var b = function (t) {
          var e, r;
          return null != (null == t ? void 0 : t.decorators)
            ? null == (e = t.decorators)
              ? void 0
              : e.size
            : null != (null == t ? void 0 : t._decorators)
            ? null == (r = t._decorators)
              ? void 0
              : r.length
            : void 0;
        },
        w = (function (t) {
          var e, r;
          function i(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).editor = null),
              (r.state = { readOnly: !1 }),
              (r.onChange = function (t) {
                var e = t;
                r.resolvePlugins().forEach(function (t) {
                  t.onChange && (e = t.onChange(e, r.getPluginMethods()));
                }),
                  r.props.onChange && r.props.onChange(e);
              }),
              (r.getPlugins = function () {
                return [].concat(r.props.plugins);
              }),
              (r.getProps = function () {
                return f({}, r.props);
              }),
              (r.getReadOnly = function () {
                return r.props.readOnly || r.state.readOnly;
              }),
              (r.setReadOnly = function (t) {
                t !== r.state.readOnly && r.setState({ readOnly: t });
              }),
              (r.getEditorRef = function () {
                return r.editor;
              }),
              (r.getEditorState = function () {
                return r.props.editorState;
              }),
              (r.getPluginMethods = function () {
                return {
                  getPlugins: r.getPlugins,
                  getProps: r.getProps,
                  setEditorState: r.onChange,
                  getEditorState: r.getEditorState,
                  getReadOnly: r.getReadOnly,
                  setReadOnly: r.setReadOnly,
                  getEditorRef: r.getEditorRef,
                };
              }),
              (r.createPluginHooks = function () {
                return m(
                  [r.props].concat(r.resolvePlugins()),
                  r.getPluginMethods()
                );
              }),
              (r.resolvePlugins = function () {
                var t = r.getPlugins();
                return (
                  !0 === r.props.defaultKeyBindings &&
                    t.push({ keyBindingFn: v }),
                  !0 === r.props.defaultKeyCommands &&
                    t.push({ handleKeyCommand: _ }),
                  t
                );
              }),
              (r.resolveCustomStyleMap = function () {
                return r.props.plugins
                  .filter(function (t) {
                    return void 0 !== t.customStyleMap;
                  })
                  .map(function (t) {
                    return t.customStyleMap;
                  })
                  .concat([r.props.customStyleMap])
                  .reduce(function (t, e) {
                    return f({}, t, e);
                  }, {});
              }),
              (r.resolveblockRenderMap = function () {
                var t = r.props.plugins
                  .filter(function (t) {
                    return void 0 !== t.blockRenderMap;
                  })
                  .reduce(function (t, e) {
                    return t.merge(e.blockRenderMap);
                  }, Object(s.Map)({}));
                return (
                  r.props.defaultBlockRenderMap &&
                    (t = n.DefaultDraftBlockRenderMap.merge(t)),
                  r.props.blockRenderMap &&
                    (t = t.merge(r.props.blockRenderMap)),
                  t
                );
              }),
              (r.resolveAccessibilityProps = function () {
                var t = {};
                return (
                  r.resolvePlugins().forEach(function (e) {
                    if ('function' === typeof e.getAccessibilityProps) {
                      var r = e.getAccessibilityProps(),
                        n = {};
                      void 0 === t.ariaHasPopup
                        ? (n.ariaHasPopup = r.ariaHasPopup)
                        : 'true' === r.ariaHasPopup &&
                          (n.ariaHasPopup = 'true'),
                        void 0 === t.ariaExpanded
                          ? (n.ariaExpanded = r.ariaExpanded)
                          : !0 === r.ariaExpanded && (n.ariaExpanded = !0),
                        (t = f({}, t, r, n));
                    }
                  }),
                  t
                );
              }),
              [r.props].concat(r.resolvePlugins()).forEach(function (t) {
                t &&
                  'function' === typeof t.initialize &&
                  t.initialize(r.getPluginMethods());
              }),
              r
            );
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var a = i.prototype;
          return (
            (a.focus = function () {
              this.editor && this.editor.focus();
            }),
            (a.blur = function () {
              this.editor && this.editor.blur();
            }),
            (a.componentDidMount = function () {
              var t = y(this.props, this.getEditorState, this.onChange),
                e = n.EditorState.set(this.props.editorState, { decorator: t });
              this.onChange(p(e));
            }),
            (a.componentDidUpdate = function (t) {
              var e = this.props,
                r = t.editorState.getDecorator(),
                i = e.editorState.getDecorator();
              if (r && r !== i && (!r || !i || b(r) !== b(i))) {
                var o = n.EditorState.set(e.editorState, { decorator: r });
                this.onChange(p(o));
              }
            }),
            (a.componentWillUnmount = function () {
              var t = this;
              this.resolvePlugins().forEach(function (e) {
                e.willUnmount &&
                  e.willUnmount({
                    getEditorState: t.getEditorState,
                    setEditorState: t.onChange,
                  });
              });
            }),
            (a.render = function () {
              var t = this,
                e = this.createPluginHooks(),
                r = this.resolveCustomStyleMap(),
                i = this.resolveAccessibilityProps(),
                a = this.resolveblockRenderMap(),
                u = this.props,
                s = (u.keyBindingFn, l(u, ['keyBindingFn']));
              return o.a.createElement(
                n.Editor,
                f({}, s, i, e, {
                  readOnly: this.props.readOnly || this.state.readOnly,
                  customStyleMap: r,
                  blockRenderMap: a,
                  onChange: this.onChange,
                  editorState: this.props.editorState,
                  ref: function (e) {
                    t.editor = e;
                  },
                })
              );
            }),
            i
          );
        })(i.Component);
      (w.propTypes = {
        editorState: u.a.object.isRequired,
        onChange: u.a.func.isRequired,
        plugins: u.a.array,
        defaultKeyBindings: u.a.bool,
        defaultKeyCommands: u.a.bool,
        defaultBlockRenderMap: u.a.bool,
        customStyleMap: u.a.object,
        decorators: u.a.array,
      }),
        (w.defaultProps = {
          defaultBlockRenderMap: !0,
          defaultKeyBindings: !0,
          defaultKeyCommands: !0,
          customStyleMap: {},
          plugins: [],
          decorators: [],
        });
      var S = function (t) {
          return n.EditorState.createWithText
            ? n.EditorState.createWithText(t)
            : n.EditorState.createWithContent(n.ContentState.createFromText(t));
        },
        k = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (0 === e.length)
            return function (t) {
              return t;
            };
          if (1 === e.length) return e[0];
          var n = e[e.length - 1];
          return function () {
            for (
              var t = n.apply(void 0, arguments), r = e.length - 2;
              r >= 0;
              r -= 1
            ) {
              var i = e[r];
              t = i(t);
            }
            return t;
          };
        };
      e.c = w;
    },
    RXrk: function (t, e, r) {
      'use strict';
      t.exports = {
        notEmptyKey: function (t) {
          return null != t && '' != t;
        },
      };
    },
    Svze: function (t, e, r) {
      t.exports = (function () {
        'use strict';
        var t = Array.prototype.slice;
        function e(t, e) {
          e && (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t);
        }
        function r(t) {
          return a(t) ? t : J(t);
        }
        function n(t) {
          return u(t) ? t : Y(t);
        }
        function i(t) {
          return s(t) ? t : G(t);
        }
        function o(t) {
          return a(t) && !c(t) ? t : X(t);
        }
        function a(t) {
          return !(!t || !t[l]);
        }
        function u(t) {
          return !(!t || !t[p]);
        }
        function s(t) {
          return !(!t || !t[h]);
        }
        function c(t) {
          return u(t) || s(t);
        }
        function f(t) {
          return !(!t || !t[d]);
        }
        e(n, r),
          e(i, r),
          e(o, r),
          (r.isIterable = a),
          (r.isKeyed = u),
          (r.isIndexed = s),
          (r.isAssociative = c),
          (r.isOrdered = f),
          (r.Keyed = n),
          (r.Indexed = i),
          (r.Set = o);
        var l = '@@__IMMUTABLE_ITERABLE__@@',
          p = '@@__IMMUTABLE_KEYED__@@',
          h = '@@__IMMUTABLE_INDEXED__@@',
          d = '@@__IMMUTABLE_ORDERED__@@',
          g = 'delete',
          y = 5,
          v = 1 << y,
          _ = v - 1,
          m = {},
          b = { value: !1 },
          w = { value: !1 };
        function S(t) {
          return (t.value = !1), t;
        }
        function k(t) {
          t && (t.value = !0);
        }
        function x() {}
        function E(t, e) {
          e = e || 0;
          for (
            var r = Math.max(0, t.length - e), n = new Array(r), i = 0;
            i < r;
            i++
          )
            n[i] = t[i + e];
          return n;
        }
        function O(t) {
          return void 0 === t.size && (t.size = t.__iterate(D)), t.size;
        }
        function C(t, e) {
          if ('number' !== typeof e) {
            var r = e >>> 0;
            if ('' + r !== e || 4294967295 === r) return NaN;
            e = r;
          }
          return e < 0 ? O(t) + e : e;
        }
        function D() {
          return !0;
        }
        function M(t, e, r) {
          return (
            (0 === t || (void 0 !== r && t <= -r)) &&
            (void 0 === e || (void 0 !== r && e >= r))
          );
        }
        function I(t, e) {
          return A(t, e, 0);
        }
        function K(t, e) {
          return A(t, e, e);
        }
        function A(t, e, r) {
          return void 0 === t
            ? r
            : t < 0
            ? Math.max(0, e + t)
            : void 0 === e
            ? t
            : Math.min(e, t);
        }
        var T = 0,
          B = 1,
          R = 2,
          z = 'function' === typeof Symbol && Symbol.iterator,
          L = '@@iterator',
          P = z || L;
        function F(t) {
          this.next = t;
        }
        function N(t, e, r, n) {
          var i = 0 === t ? e : 1 === t ? r : [e, r];
          return n ? (n.value = i) : (n = { value: i, done: !1 }), n;
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        function U(t) {
          return !!W(t);
        }
        function q(t) {
          return t && 'function' === typeof t.next;
        }
        function H(t) {
          var e = W(t);
          return e && e.call(t);
        }
        function W(t) {
          var e = t && ((z && t[z]) || t[L]);
          if ('function' === typeof e) return e;
        }
        function V(t) {
          return t && 'number' === typeof t.length;
        }
        function J(t) {
          return null === t || void 0 === t ? at() : a(t) ? t.toSeq() : ct(t);
        }
        function Y(t) {
          return null === t || void 0 === t
            ? at().toKeyedSeq()
            : a(t)
            ? u(t)
              ? t.toSeq()
              : t.fromEntrySeq()
            : ut(t);
        }
        function G(t) {
          return null === t || void 0 === t
            ? at()
            : a(t)
            ? u(t)
              ? t.entrySeq()
              : t.toIndexedSeq()
            : st(t);
        }
        function X(t) {
          return (null === t || void 0 === t
            ? at()
            : a(t)
            ? u(t)
              ? t.entrySeq()
              : t
            : st(t)
          ).toSetSeq();
        }
        (F.prototype.toString = function () {
          return '[Iterator]';
        }),
          (F.KEYS = T),
          (F.VALUES = B),
          (F.ENTRIES = R),
          (F.prototype.inspect = F.prototype.toSource = function () {
            return this.toString();
          }),
          (F.prototype[P] = function () {
            return this;
          }),
          e(J, r),
          (J.of = function () {
            return J(arguments);
          }),
          (J.prototype.toSeq = function () {
            return this;
          }),
          (J.prototype.toString = function () {
            return this.__toString('Seq {', '}');
          }),
          (J.prototype.cacheResult = function () {
            return (
              !this._cache &&
                this.__iterateUncached &&
                ((this._cache = this.entrySeq().toArray()),
                (this.size = this._cache.length)),
              this
            );
          }),
          (J.prototype.__iterate = function (t, e) {
            return lt(this, t, e, !0);
          }),
          (J.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !0);
          }),
          e(Y, J),
          (Y.prototype.toKeyedSeq = function () {
            return this;
          }),
          e(G, J),
          (G.of = function () {
            return G(arguments);
          }),
          (G.prototype.toIndexedSeq = function () {
            return this;
          }),
          (G.prototype.toString = function () {
            return this.__toString('Seq [', ']');
          }),
          (G.prototype.__iterate = function (t, e) {
            return lt(this, t, e, !1);
          }),
          (G.prototype.__iterator = function (t, e) {
            return pt(this, t, e, !1);
          }),
          e(X, J),
          (X.of = function () {
            return X(arguments);
          }),
          (X.prototype.toSetSeq = function () {
            return this;
          }),
          (J.isSeq = ot),
          (J.Keyed = Y),
          (J.Set = X),
          (J.Indexed = G);
        var Z,
          Q,
          $,
          tt = '@@__IMMUTABLE_SEQ__@@';
        function et(t) {
          (this._array = t), (this.size = t.length);
        }
        function rt(t) {
          var e = Object.keys(t);
          (this._object = t), (this._keys = e), (this.size = e.length);
        }
        function nt(t) {
          (this._iterable = t), (this.size = t.length || t.size);
        }
        function it(t) {
          (this._iterator = t), (this._iteratorCache = []);
        }
        function ot(t) {
          return !(!t || !t[tt]);
        }
        function at() {
          return Z || (Z = new et([]));
        }
        function ut(t) {
          var e = Array.isArray(t)
            ? new et(t).fromEntrySeq()
            : q(t)
            ? new it(t).fromEntrySeq()
            : U(t)
            ? new nt(t).fromEntrySeq()
            : 'object' === typeof t
            ? new rt(t)
            : void 0;
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of [k, v] entries, or keyed object: ' +
                t
            );
          return e;
        }
        function st(t) {
          var e = ft(t);
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of values: ' + t
            );
          return e;
        }
        function ct(t) {
          var e = ft(t) || ('object' === typeof t && new rt(t));
          if (!e)
            throw new TypeError(
              'Expected Array or iterable object of values, or keyed object: ' +
                t
            );
          return e;
        }
        function ft(t) {
          return V(t)
            ? new et(t)
            : q(t)
            ? new it(t)
            : U(t)
            ? new nt(t)
            : void 0;
        }
        function lt(t, e, r, n) {
          var i = t._cache;
          if (i) {
            for (var o = i.length - 1, a = 0; a <= o; a++) {
              var u = i[r ? o - a : a];
              if (!1 === e(u[1], n ? u[0] : a, t)) return a + 1;
            }
            return a;
          }
          return t.__iterateUncached(e, r);
        }
        function pt(t, e, r, n) {
          var i = t._cache;
          if (i) {
            var o = i.length - 1,
              a = 0;
            return new F(function () {
              var t = i[r ? o - a : a];
              return a++ > o ? j() : N(e, n ? t[0] : a - 1, t[1]);
            });
          }
          return t.__iteratorUncached(e, r);
        }
        function ht(t, e) {
          return e ? dt(e, t, '', { '': t }) : gt(t);
        }
        function dt(t, e, r, n) {
          return Array.isArray(e)
            ? t.call(
                n,
                r,
                G(e).map(function (r, n) {
                  return dt(t, r, n, e);
                })
              )
            : yt(e)
            ? t.call(
                n,
                r,
                Y(e).map(function (r, n) {
                  return dt(t, r, n, e);
                })
              )
            : e;
        }
        function gt(t) {
          return Array.isArray(t)
            ? G(t).map(gt).toList()
            : yt(t)
            ? Y(t).map(gt).toMap()
            : t;
        }
        function yt(t) {
          return t && (t.constructor === Object || void 0 === t.constructor);
        }
        function vt(t, e) {
          if (t === e || (t !== t && e !== e)) return !0;
          if (!t || !e) return !1;
          if (
            'function' === typeof t.valueOf &&
            'function' === typeof e.valueOf
          ) {
            if ((t = t.valueOf()) === (e = e.valueOf()) || (t !== t && e !== e))
              return !0;
            if (!t || !e) return !1;
          }
          return !(
            'function' !== typeof t.equals ||
            'function' !== typeof e.equals ||
            !t.equals(e)
          );
        }
        function _t(t, e) {
          if (t === e) return !0;
          if (
            !a(e) ||
            (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
            (void 0 !== t.__hash &&
              void 0 !== e.__hash &&
              t.__hash !== e.__hash) ||
            u(t) !== u(e) ||
            s(t) !== s(e) ||
            f(t) !== f(e)
          )
            return !1;
          if (0 === t.size && 0 === e.size) return !0;
          var r = !c(t);
          if (f(t)) {
            var n = t.entries();
            return (
              e.every(function (t, e) {
                var i = n.next().value;
                return i && vt(i[1], t) && (r || vt(i[0], e));
              }) && n.next().done
            );
          }
          var i = !1;
          if (void 0 === t.size)
            if (void 0 === e.size)
              'function' === typeof t.cacheResult && t.cacheResult();
            else {
              i = !0;
              var o = t;
              (t = e), (e = o);
            }
          var l = !0,
            p = e.__iterate(function (e, n) {
              if (r ? !t.has(e) : i ? !vt(e, t.get(n, m)) : !vt(t.get(n, m), e))
                return (l = !1), !1;
            });
          return l && t.size === p;
        }
        function mt(t, e) {
          if (!(this instanceof mt)) return new mt(t, e);
          if (
            ((this._value = t),
            (this.size = void 0 === e ? 1 / 0 : Math.max(0, e)),
            0 === this.size)
          ) {
            if (Q) return Q;
            Q = this;
          }
        }
        function bt(t, e) {
          if (!t) throw new Error(e);
        }
        function wt(t, e, r) {
          if (!(this instanceof wt)) return new wt(t, e, r);
          if (
            (bt(0 !== r, 'Cannot step a Range by 0'),
            (t = t || 0),
            void 0 === e && (e = 1 / 0),
            (r = void 0 === r ? 1 : Math.abs(r)),
            e < t && (r = -r),
            (this._start = t),
            (this._end = e),
            (this._step = r),
            (this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1)),
            0 === this.size)
          ) {
            if ($) return $;
            $ = this;
          }
        }
        function St() {
          throw TypeError('Abstract');
        }
        function kt() {}
        function xt() {}
        function Et() {}
        (J.prototype[tt] = !0),
          e(et, G),
          (et.prototype.get = function (t, e) {
            return this.has(t) ? this._array[C(this, t)] : e;
          }),
          (et.prototype.__iterate = function (t, e) {
            for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
              if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;
            return i;
          }),
          (et.prototype.__iterator = function (t, e) {
            var r = this._array,
              n = r.length - 1,
              i = 0;
            return new F(function () {
              return i > n ? j() : N(t, i, r[e ? n - i++ : i++]);
            });
          }),
          e(rt, Y),
          (rt.prototype.get = function (t, e) {
            return void 0 === e || this.has(t) ? this._object[t] : e;
          }),
          (rt.prototype.has = function (t) {
            return this._object.hasOwnProperty(t);
          }),
          (rt.prototype.__iterate = function (t, e) {
            for (
              var r = this._object, n = this._keys, i = n.length - 1, o = 0;
              o <= i;
              o++
            ) {
              var a = n[e ? i - o : o];
              if (!1 === t(r[a], a, this)) return o + 1;
            }
            return o;
          }),
          (rt.prototype.__iterator = function (t, e) {
            var r = this._object,
              n = this._keys,
              i = n.length - 1,
              o = 0;
            return new F(function () {
              var a = n[e ? i - o : o];
              return o++ > i ? j() : N(t, a, r[a]);
            });
          }),
          (rt.prototype[d] = !0),
          e(nt, G),
          (nt.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            var r = H(this._iterable),
              n = 0;
            if (q(r))
              for (
                var i;
                !(i = r.next()).done && !1 !== t(i.value, n++, this);

              );
            return n;
          }),
          (nt.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = H(this._iterable);
            if (!q(r)) return new F(j);
            var n = 0;
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, n++, e.value);
            });
          }),
          e(it, G),
          (it.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e);
            for (
              var r, n = this._iterator, i = this._iteratorCache, o = 0;
              o < i.length;

            )
              if (!1 === t(i[o], o++, this)) return o;
            for (; !(r = n.next()).done; ) {
              var a = r.value;
              if (((i[o] = a), !1 === t(a, o++, this))) break;
            }
            return o;
          }),
          (it.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e);
            var r = this._iterator,
              n = this._iteratorCache,
              i = 0;
            return new F(function () {
              if (i >= n.length) {
                var e = r.next();
                if (e.done) return e;
                n[i] = e.value;
              }
              return N(t, i, n[i++]);
            });
          }),
          e(mt, G),
          (mt.prototype.toString = function () {
            return 0 === this.size
              ? 'Repeat []'
              : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
          }),
          (mt.prototype.get = function (t, e) {
            return this.has(t) ? this._value : e;
          }),
          (mt.prototype.includes = function (t) {
            return vt(this._value, t);
          }),
          (mt.prototype.slice = function (t, e) {
            var r = this.size;
            return M(t, e, r) ? this : new mt(this._value, K(e, r) - I(t, r));
          }),
          (mt.prototype.reverse = function () {
            return this;
          }),
          (mt.prototype.indexOf = function (t) {
            return vt(this._value, t) ? 0 : -1;
          }),
          (mt.prototype.lastIndexOf = function (t) {
            return vt(this._value, t) ? this.size : -1;
          }),
          (mt.prototype.__iterate = function (t, e) {
            for (var r = 0; r < this.size; r++)
              if (!1 === t(this._value, r, this)) return r + 1;
            return r;
          }),
          (mt.prototype.__iterator = function (t, e) {
            var r = this,
              n = 0;
            return new F(function () {
              return n < r.size ? N(t, n++, r._value) : j();
            });
          }),
          (mt.prototype.equals = function (t) {
            return t instanceof mt ? vt(this._value, t._value) : _t(t);
          }),
          e(wt, G),
          (wt.prototype.toString = function () {
            return 0 === this.size
              ? 'Range []'
              : 'Range [ ' +
                  this._start +
                  '...' +
                  this._end +
                  (1 !== this._step ? ' by ' + this._step : '') +
                  ' ]';
          }),
          (wt.prototype.get = function (t, e) {
            return this.has(t) ? this._start + C(this, t) * this._step : e;
          }),
          (wt.prototype.includes = function (t) {
            var e = (t - this._start) / this._step;
            return e >= 0 && e < this.size && e === Math.floor(e);
          }),
          (wt.prototype.slice = function (t, e) {
            return M(t, e, this.size)
              ? this
              : ((t = I(t, this.size)),
                (e = K(e, this.size)) <= t
                  ? new wt(0, 0)
                  : new wt(
                      this.get(t, this._end),
                      this.get(e, this._end),
                      this._step
                    ));
          }),
          (wt.prototype.indexOf = function (t) {
            var e = t - this._start;
            if (e % this._step === 0) {
              var r = e / this._step;
              if (r >= 0 && r < this.size) return r;
            }
            return -1;
          }),
          (wt.prototype.lastIndexOf = function (t) {
            return this.indexOf(t);
          }),
          (wt.prototype.__iterate = function (t, e) {
            for (
              var r = this.size - 1,
                n = this._step,
                i = e ? this._start + r * n : this._start,
                o = 0;
              o <= r;
              o++
            ) {
              if (!1 === t(i, o, this)) return o + 1;
              i += e ? -n : n;
            }
            return o;
          }),
          (wt.prototype.__iterator = function (t, e) {
            var r = this.size - 1,
              n = this._step,
              i = e ? this._start + r * n : this._start,
              o = 0;
            return new F(function () {
              var a = i;
              return (i += e ? -n : n), o > r ? j() : N(t, o++, a);
            });
          }),
          (wt.prototype.equals = function (t) {
            return t instanceof wt
              ? this._start === t._start &&
                  this._end === t._end &&
                  this._step === t._step
              : _t(this, t);
          }),
          e(St, r),
          e(kt, St),
          e(xt, St),
          e(Et, St),
          (St.Keyed = kt),
          (St.Indexed = xt),
          (St.Set = Et);
        var Ot =
          'function' === typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function (t, e) {
                var r = 65535 & (t |= 0),
                  n = 65535 & (e |= 0);
                return (
                  (r * n + ((((t >>> 16) * n + r * (e >>> 16)) << 16) >>> 0)) |
                  0
                );
              };
        function Ct(t) {
          return ((t >>> 1) & 1073741824) | (3221225471 & t);
        }
        function Dt(t) {
          if (!1 === t || null === t || void 0 === t) return 0;
          if (
            'function' === typeof t.valueOf &&
            (!1 === (t = t.valueOf()) || null === t || void 0 === t)
          )
            return 0;
          if (!0 === t) return 1;
          var e = typeof t;
          if ('number' === e) {
            if (t !== t || t === 1 / 0) return 0;
            var r = 0 | t;
            for (r !== t && (r ^= 4294967295 * t); t > 4294967295; )
              r ^= t /= 4294967295;
            return Ct(r);
          }
          if ('string' === e) return t.length > Ft ? Mt(t) : It(t);
          if ('function' === typeof t.hashCode) return t.hashCode();
          if ('object' === e) return Kt(t);
          if ('function' === typeof t.toString) return It(t.toString());
          throw new Error('Value type ' + e + ' cannot be hashed.');
        }
        function Mt(t) {
          var e = Ut[t];
          return (
            void 0 === e &&
              ((e = It(t)),
              jt === Nt && ((jt = 0), (Ut = {})),
              jt++,
              (Ut[t] = e)),
            e
          );
        }
        function It(t) {
          for (var e = 0, r = 0; r < t.length; r++)
            e = (31 * e + t.charCodeAt(r)) | 0;
          return Ct(e);
        }
        function Kt(t) {
          var e;
          if (zt && void 0 !== (e = Rt.get(t))) return e;
          if (void 0 !== (e = t[Pt])) return e;
          if (!Tt) {
            if (
              void 0 !==
              (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Pt])
            )
              return e;
            if (void 0 !== (e = Bt(t))) return e;
          }
          if (((e = ++Lt), 1073741824 & Lt && (Lt = 0), zt)) Rt.set(t, e);
          else {
            if (void 0 !== At && !1 === At(t))
              throw new Error(
                'Non-extensible objects are not allowed as keys.'
              );
            if (Tt)
              Object.defineProperty(t, Pt, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: e,
              });
            else if (
              void 0 !== t.propertyIsEnumerable &&
              t.propertyIsEnumerable ===
                t.constructor.prototype.propertyIsEnumerable
            )
              (t.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(
                  this,
                  arguments
                );
              }),
                (t.propertyIsEnumerable[Pt] = e);
            else {
              if (void 0 === t.nodeType)
                throw new Error(
                  'Unable to set a non-enumerable property on object.'
                );
              t[Pt] = e;
            }
          }
          return e;
        }
        var At = Object.isExtensible,
          Tt = (function () {
            try {
              return Object.defineProperty({}, '@', {}), !0;
            } catch (t) {
              return !1;
            }
          })();
        function Bt(t) {
          if (t && t.nodeType > 0)
            switch (t.nodeType) {
              case 1:
                return t.uniqueID;
              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
        }
        var Rt,
          zt = 'function' === typeof WeakMap;
        zt && (Rt = new WeakMap());
        var Lt = 0,
          Pt = '__immutablehash__';
        'function' === typeof Symbol && (Pt = Symbol(Pt));
        var Ft = 16,
          Nt = 255,
          jt = 0,
          Ut = {};
        function qt(t) {
          bt(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
        }
        function Ht(t) {
          return null === t || void 0 === t
            ? ie()
            : Wt(t) && !f(t)
            ? t
            : ie().withMutations(function (e) {
                var r = n(t);
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t);
                  });
              });
        }
        function Wt(t) {
          return !(!t || !t[Jt]);
        }
        e(Ht, kt),
          (Ht.of = function () {
            var e = t.call(arguments, 0);
            return ie().withMutations(function (t) {
              for (var r = 0; r < e.length; r += 2) {
                if (r + 1 >= e.length)
                  throw new Error('Missing value for key: ' + e[r]);
                t.set(e[r], e[r + 1]);
              }
            });
          }),
          (Ht.prototype.toString = function () {
            return this.__toString('Map {', '}');
          }),
          (Ht.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e;
          }),
          (Ht.prototype.set = function (t, e) {
            return oe(this, t, e);
          }),
          (Ht.prototype.setIn = function (t, e) {
            return this.updateIn(t, m, function () {
              return e;
            });
          }),
          (Ht.prototype.remove = function (t) {
            return oe(this, t, m);
          }),
          (Ht.prototype.deleteIn = function (t) {
            return this.updateIn(t, function () {
              return m;
            });
          }),
          (Ht.prototype.update = function (t, e, r) {
            return 1 === arguments.length ? t(this) : this.updateIn([t], e, r);
          }),
          (Ht.prototype.updateIn = function (t, e, r) {
            r || ((r = e), (e = void 0));
            var n = ye(this, wr(t), e, r);
            return n === m ? void 0 : n;
          }),
          (Ht.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._root = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ie();
          }),
          (Ht.prototype.merge = function () {
            return pe(this, void 0, arguments);
          }),
          (Ht.prototype.mergeWith = function (e) {
            return pe(this, e, t.call(arguments, 1));
          }),
          (Ht.prototype.mergeIn = function (e) {
            var r = t.call(arguments, 1);
            return this.updateIn(e, ie(), function (t) {
              return 'function' === typeof t.merge
                ? t.merge.apply(t, r)
                : r[r.length - 1];
            });
          }),
          (Ht.prototype.mergeDeep = function () {
            return pe(this, he, arguments);
          }),
          (Ht.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1);
            return pe(this, de(e), r);
          }),
          (Ht.prototype.mergeDeepIn = function (e) {
            var r = t.call(arguments, 1);
            return this.updateIn(e, ie(), function (t) {
              return 'function' === typeof t.mergeDeep
                ? t.mergeDeep.apply(t, r)
                : r[r.length - 1];
            });
          }),
          (Ht.prototype.sort = function (t) {
            return Ue(fr(this, t));
          }),
          (Ht.prototype.sortBy = function (t, e) {
            return Ue(fr(this, e, t));
          }),
          (Ht.prototype.withMutations = function (t) {
            var e = this.asMutable();
            return (
              t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
            );
          }),
          (Ht.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new x());
          }),
          (Ht.prototype.asImmutable = function () {
            return this.__ensureOwner();
          }),
          (Ht.prototype.wasAltered = function () {
            return this.__altered;
          }),
          (Ht.prototype.__iterator = function (t, e) {
            return new te(this, t, e);
          }),
          (Ht.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0;
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return n++, t(e[1], e[0], r);
                }, e),
              n
            );
          }),
          (Ht.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? ne(this.size, this._root, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          (Ht.isMap = Wt);
        var Vt,
          Jt = '@@__IMMUTABLE_MAP__@@',
          Yt = Ht.prototype;
        function Gt(t, e) {
          (this.ownerID = t), (this.entries = e);
        }
        function Xt(t, e, r) {
          (this.ownerID = t), (this.bitmap = e), (this.nodes = r);
        }
        function Zt(t, e, r) {
          (this.ownerID = t), (this.count = e), (this.nodes = r);
        }
        function Qt(t, e, r) {
          (this.ownerID = t), (this.keyHash = e), (this.entries = r);
        }
        function $t(t, e, r) {
          (this.ownerID = t), (this.keyHash = e), (this.entry = r);
        }
        function te(t, e, r) {
          (this._type = e),
            (this._reverse = r),
            (this._stack = t._root && re(t._root));
        }
        function ee(t, e) {
          return N(t, e[0], e[1]);
        }
        function re(t, e) {
          return { node: t, index: 0, __prev: e };
        }
        function ne(t, e, r, n) {
          var i = Object.create(Yt);
          return (
            (i.size = t),
            (i._root = e),
            (i.__ownerID = r),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function ie() {
          return Vt || (Vt = ne(0));
        }
        function oe(t, e, r) {
          var n, i;
          if (t._root) {
            var o = S(b),
              a = S(w);
            if (
              ((n = ae(t._root, t.__ownerID, 0, void 0, e, r, o, a)), !a.value)
            )
              return t;
            i = t.size + (o.value ? (r === m ? -1 : 1) : 0);
          } else {
            if (r === m) return t;
            (i = 1), (n = new Gt(t.__ownerID, [[e, r]]));
          }
          return t.__ownerID
            ? ((t.size = i),
              (t._root = n),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : n
            ? ne(i, n)
            : ie();
        }
        function ae(t, e, r, n, i, o, a, u) {
          return t
            ? t.update(e, r, n, i, o, a, u)
            : o === m
            ? t
            : (k(u), k(a), new $t(e, n, [i, o]));
        }
        function ue(t) {
          return t.constructor === $t || t.constructor === Qt;
        }
        function se(t, e, r, n, i) {
          if (t.keyHash === n) return new Qt(e, n, [t.entry, i]);
          var o,
            a = (0 === r ? t.keyHash : t.keyHash >>> r) & _,
            u = (0 === r ? n : n >>> r) & _;
          return new Xt(
            e,
            (1 << a) | (1 << u),
            a === u
              ? [se(t, e, r + y, n, i)]
              : ((o = new $t(e, n, i)), a < u ? [t, o] : [o, t])
          );
        }
        function ce(t, e, r, n) {
          t || (t = new x());
          for (var i = new $t(t, Dt(r), [r, n]), o = 0; o < e.length; o++) {
            var a = e[o];
            i = i.update(t, 0, void 0, a[0], a[1]);
          }
          return i;
        }
        function fe(t, e, r, n) {
          for (
            var i = 0, o = 0, a = new Array(r), u = 0, s = 1, c = e.length;
            u < c;
            u++, s <<= 1
          ) {
            var f = e[u];
            void 0 !== f && u !== n && ((i |= s), (a[o++] = f));
          }
          return new Xt(t, i, a);
        }
        function le(t, e, r, n, i) {
          for (var o = 0, a = new Array(v), u = 0; 0 !== r; u++, r >>>= 1)
            a[u] = 1 & r ? e[o++] : void 0;
          return (a[n] = i), new Zt(t, o + 1, a);
        }
        function pe(t, e, r) {
          for (var i = [], o = 0; o < r.length; o++) {
            var u = r[o],
              s = n(u);
            a(u) ||
              (s = s.map(function (t) {
                return ht(t);
              })),
              i.push(s);
          }
          return ge(t, e, i);
        }
        function he(t, e, r) {
          return t && t.mergeDeep && a(e) ? t.mergeDeep(e) : vt(t, e) ? t : e;
        }
        function de(t) {
          return function (e, r, n) {
            if (e && e.mergeDeepWith && a(r)) return e.mergeDeepWith(t, r);
            var i = t(e, r, n);
            return vt(e, i) ? e : i;
          };
        }
        function ge(t, e, r) {
          return 0 ===
            (r = r.filter(function (t) {
              return 0 !== t.size;
            })).length
            ? t
            : 0 !== t.size || t.__ownerID || 1 !== r.length
            ? t.withMutations(function (t) {
                for (
                  var n = e
                      ? function (r, n) {
                          t.update(n, m, function (t) {
                            return t === m ? r : e(t, r, n);
                          });
                        }
                      : function (e, r) {
                          t.set(r, e);
                        },
                    i = 0;
                  i < r.length;
                  i++
                )
                  r[i].forEach(n);
              })
            : t.constructor(r[0]);
        }
        function ye(t, e, r, n) {
          var i = t === m,
            o = e.next();
          if (o.done) {
            var a = i ? r : t,
              u = n(a);
            return u === a ? t : u;
          }
          bt(i || (t && t.set), 'invalid keyPath');
          var s = o.value,
            c = i ? m : t.get(s, m),
            f = ye(c, e, r, n);
          return f === c ? t : f === m ? t.remove(s) : (i ? ie() : t).set(s, f);
        }
        function ve(t) {
          return (
            (t =
              ((t =
                (858993459 & (t -= (t >> 1) & 1431655765)) +
                ((t >> 2) & 858993459)) +
                (t >> 4)) &
              252645135),
            (t += t >> 8),
            127 & (t += t >> 16)
          );
        }
        function _e(t, e, r, n) {
          var i = n ? t : E(t);
          return (i[e] = r), i;
        }
        function me(t, e, r, n) {
          var i = t.length + 1;
          if (n && e + 1 === i) return (t[e] = r), t;
          for (var o = new Array(i), a = 0, u = 0; u < i; u++)
            u === e ? ((o[u] = r), (a = -1)) : (o[u] = t[u + a]);
          return o;
        }
        function be(t, e, r) {
          var n = t.length - 1;
          if (r && e === n) return t.pop(), t;
          for (var i = new Array(n), o = 0, a = 0; a < n; a++)
            a === e && (o = 1), (i[a] = t[a + o]);
          return i;
        }
        (Yt[Jt] = !0),
          (Yt[g] = Yt.remove),
          (Yt.removeIn = Yt.deleteIn),
          (Gt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
              if (vt(r, i[o][0])) return i[o][1];
            return n;
          }),
          (Gt.prototype.update = function (t, e, r, n, i, o, a) {
            for (
              var u = i === m, s = this.entries, c = 0, f = s.length;
              c < f && !vt(n, s[c][0]);
              c++
            );
            var l = c < f;
            if (l ? s[c][1] === i : u) return this;
            if ((k(a), (u || !l) && k(o), !u || 1 !== s.length)) {
              if (!l && !u && s.length >= we) return ce(t, s, n, i);
              var p = t && t === this.ownerID,
                h = p ? s : E(s);
              return (
                l
                  ? u
                    ? c === f - 1
                      ? h.pop()
                      : (h[c] = h.pop())
                    : (h[c] = [n, i])
                  : h.push([n, i]),
                p ? ((this.entries = h), this) : new Gt(t, h)
              );
            }
          }),
          (Xt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r));
            var i = 1 << ((0 === t ? e : e >>> t) & _),
              o = this.bitmap;
            return 0 === (o & i)
              ? n
              : this.nodes[ve(o & (i - 1))].get(t + y, e, r, n);
          }),
          (Xt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = (0 === e ? r : r >>> e) & _,
              s = 1 << u,
              c = this.bitmap,
              f = 0 !== (c & s);
            if (!f && i === m) return this;
            var l = ve(c & (s - 1)),
              p = this.nodes,
              h = f ? p[l] : void 0,
              d = ae(h, t, e + y, r, n, i, o, a);
            if (d === h) return this;
            if (!f && d && p.length >= Se) return le(t, p, c, u, d);
            if (f && !d && 2 === p.length && ue(p[1 ^ l])) return p[1 ^ l];
            if (f && d && 1 === p.length && ue(d)) return d;
            var g = t && t === this.ownerID,
              v = f ? (d ? c : c ^ s) : c | s,
              b = f ? (d ? _e(p, l, d, g) : be(p, l, g)) : me(p, l, d, g);
            return g
              ? ((this.bitmap = v), (this.nodes = b), this)
              : new Xt(t, v, b);
          }),
          (Zt.prototype.get = function (t, e, r, n) {
            void 0 === e && (e = Dt(r));
            var i = (0 === t ? e : e >>> t) & _,
              o = this.nodes[i];
            return o ? o.get(t + y, e, r, n) : n;
          }),
          (Zt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = (0 === e ? r : r >>> e) & _,
              s = i === m,
              c = this.nodes,
              f = c[u];
            if (s && !f) return this;
            var l = ae(f, t, e + y, r, n, i, o, a);
            if (l === f) return this;
            var p = this.count;
            if (f) {
              if (!l && --p < ke) return fe(t, c, p, u);
            } else p++;
            var h = t && t === this.ownerID,
              d = _e(c, u, l, h);
            return h
              ? ((this.count = p), (this.nodes = d), this)
              : new Zt(t, p, d);
          }),
          (Qt.prototype.get = function (t, e, r, n) {
            for (var i = this.entries, o = 0, a = i.length; o < a; o++)
              if (vt(r, i[o][0])) return i[o][1];
            return n;
          }),
          (Qt.prototype.update = function (t, e, r, n, i, o, a) {
            void 0 === r && (r = Dt(n));
            var u = i === m;
            if (r !== this.keyHash)
              return u ? this : (k(a), k(o), se(this, t, e, r, [n, i]));
            for (
              var s = this.entries, c = 0, f = s.length;
              c < f && !vt(n, s[c][0]);
              c++
            );
            var l = c < f;
            if (l ? s[c][1] === i : u) return this;
            if ((k(a), (u || !l) && k(o), u && 2 === f))
              return new $t(t, this.keyHash, s[1 ^ c]);
            var p = t && t === this.ownerID,
              h = p ? s : E(s);
            return (
              l
                ? u
                  ? c === f - 1
                    ? h.pop()
                    : (h[c] = h.pop())
                  : (h[c] = [n, i])
                : h.push([n, i]),
              p ? ((this.entries = h), this) : new Qt(t, this.keyHash, h)
            );
          }),
          ($t.prototype.get = function (t, e, r, n) {
            return vt(r, this.entry[0]) ? this.entry[1] : n;
          }),
          ($t.prototype.update = function (t, e, r, n, i, o, a) {
            var u = i === m,
              s = vt(n, this.entry[0]);
            return (s ? i === this.entry[1] : u)
              ? this
              : (k(a),
                u
                  ? void k(o)
                  : s
                  ? t && t === this.ownerID
                    ? ((this.entry[1] = i), this)
                    : new $t(t, this.keyHash, [n, i])
                  : (k(o), se(this, t, e, Dt(n), [n, i])));
          }),
          (Gt.prototype.iterate = Qt.prototype.iterate = function (t, e) {
            for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
              if (!1 === t(r[e ? i - n : n])) return !1;
          }),
          (Xt.prototype.iterate = Zt.prototype.iterate = function (t, e) {
            for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
              var o = r[e ? i - n : n];
              if (o && !1 === o.iterate(t, e)) return !1;
            }
          }),
          ($t.prototype.iterate = function (t, e) {
            return t(this.entry);
          }),
          e(te, F),
          (te.prototype.next = function () {
            for (var t = this._type, e = this._stack; e; ) {
              var r,
                n = e.node,
                i = e.index++;
              if (n.entry) {
                if (0 === i) return ee(t, n.entry);
              } else if (n.entries) {
                if (i <= (r = n.entries.length - 1))
                  return ee(t, n.entries[this._reverse ? r - i : i]);
              } else if (i <= (r = n.nodes.length - 1)) {
                var o = n.nodes[this._reverse ? r - i : i];
                if (o) {
                  if (o.entry) return ee(t, o.entry);
                  e = this._stack = re(o, e);
                }
                continue;
              }
              e = this._stack = this._stack.__prev;
            }
            return j();
          });
        var we = v / 4,
          Se = v / 2,
          ke = v / 4;
        function xe(t) {
          var e = Be();
          if (null === t || void 0 === t) return e;
          if (Ee(t)) return t;
          var r = i(t),
            n = r.size;
          return 0 === n
            ? e
            : (qt(n),
              n > 0 && n < v
                ? Te(0, n, y, null, new De(r.toArray()))
                : e.withMutations(function (t) {
                    t.setSize(n),
                      r.forEach(function (e, r) {
                        return t.set(r, e);
                      });
                  }));
        }
        function Ee(t) {
          return !(!t || !t[Oe]);
        }
        e(xe, xt),
          (xe.of = function () {
            return this(arguments);
          }),
          (xe.prototype.toString = function () {
            return this.__toString('List [', ']');
          }),
          (xe.prototype.get = function (t, e) {
            if ((t = C(this, t)) >= 0 && t < this.size) {
              var r = Pe(this, (t += this._origin));
              return r && r.array[t & _];
            }
            return e;
          }),
          (xe.prototype.set = function (t, e) {
            return Re(this, t, e);
          }),
          (xe.prototype.remove = function (t) {
            return this.has(t)
              ? 0 === t
                ? this.shift()
                : t === this.size - 1
                ? this.pop()
                : this.splice(t, 1)
              : this;
          }),
          (xe.prototype.insert = function (t, e) {
            return this.splice(t, 0, e);
          }),
          (xe.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = y),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Be();
          }),
          (xe.prototype.push = function () {
            var t = arguments,
              e = this.size;
            return this.withMutations(function (r) {
              Fe(r, 0, e + t.length);
              for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
            });
          }),
          (xe.prototype.pop = function () {
            return Fe(this, 0, -1);
          }),
          (xe.prototype.unshift = function () {
            var t = arguments;
            return this.withMutations(function (e) {
              Fe(e, -t.length);
              for (var r = 0; r < t.length; r++) e.set(r, t[r]);
            });
          }),
          (xe.prototype.shift = function () {
            return Fe(this, 1);
          }),
          (xe.prototype.merge = function () {
            return Ne(this, void 0, arguments);
          }),
          (xe.prototype.mergeWith = function (e) {
            return Ne(this, e, t.call(arguments, 1));
          }),
          (xe.prototype.mergeDeep = function () {
            return Ne(this, he, arguments);
          }),
          (xe.prototype.mergeDeepWith = function (e) {
            var r = t.call(arguments, 1);
            return Ne(this, de(e), r);
          }),
          (xe.prototype.setSize = function (t) {
            return Fe(this, 0, t);
          }),
          (xe.prototype.slice = function (t, e) {
            var r = this.size;
            return M(t, e, r) ? this : Fe(this, I(t, r), K(e, r));
          }),
          (xe.prototype.__iterator = function (t, e) {
            var r = 0,
              n = Ae(this, e);
            return new F(function () {
              var e = n();
              return e === Ke ? j() : N(t, r++, e);
            });
          }),
          (xe.prototype.__iterate = function (t, e) {
            for (
              var r, n = 0, i = Ae(this, e);
              (r = i()) !== Ke && !1 !== t(r, n++, this);

            );
            return n;
          }),
          (xe.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Te(
                  this._origin,
                  this._capacity,
                  this._level,
                  this._root,
                  this._tail,
                  t,
                  this.__hash
                )
              : ((this.__ownerID = t), this);
          }),
          (xe.isList = Ee);
        var Oe = '@@__IMMUTABLE_LIST__@@',
          Ce = xe.prototype;
        function De(t, e) {
          (this.array = t), (this.ownerID = e);
        }
        (Ce[Oe] = !0),
          (Ce[g] = Ce.remove),
          (Ce.setIn = Yt.setIn),
          (Ce.deleteIn = Ce.removeIn = Yt.removeIn),
          (Ce.update = Yt.update),
          (Ce.updateIn = Yt.updateIn),
          (Ce.mergeIn = Yt.mergeIn),
          (Ce.mergeDeepIn = Yt.mergeDeepIn),
          (Ce.withMutations = Yt.withMutations),
          (Ce.asMutable = Yt.asMutable),
          (Ce.asImmutable = Yt.asImmutable),
          (Ce.wasAltered = Yt.wasAltered),
          (De.prototype.removeBefore = function (t, e, r) {
            if (r === e ? 1 << e : 0 === this.array.length) return this;
            var n = (r >>> e) & _;
            if (n >= this.array.length) return new De([], t);
            var i,
              o = 0 === n;
            if (e > 0) {
              var a = this.array[n];
              if ((i = a && a.removeBefore(t, e - y, r)) === a && o)
                return this;
            }
            if (o && !i) return this;
            var u = Le(this, t);
            if (!o) for (var s = 0; s < n; s++) u.array[s] = void 0;
            return i && (u.array[n] = i), u;
          }),
          (De.prototype.removeAfter = function (t, e, r) {
            if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
            var n,
              i = ((r - 1) >>> e) & _;
            if (i >= this.array.length) return this;
            if (e > 0) {
              var o = this.array[i];
              if (
                (n = o && o.removeAfter(t, e - y, r)) === o &&
                i === this.array.length - 1
              )
                return this;
            }
            var a = Le(this, t);
            return a.array.splice(i + 1), n && (a.array[i] = n), a;
          });
        var Me,
          Ie,
          Ke = {};
        function Ae(t, e) {
          var r = t._origin,
            n = t._capacity,
            i = je(n),
            o = t._tail;
          return a(t._root, t._level, 0);
          function a(t, e, r) {
            return 0 === e ? u(t, r) : s(t, e, r);
          }
          function u(t, a) {
            var u = a === i ? o && o.array : t && t.array,
              s = a > r ? 0 : r - a,
              c = n - a;
            return (
              c > v && (c = v),
              function () {
                if (s === c) return Ke;
                var t = e ? --c : s++;
                return u && u[t];
              }
            );
          }
          function s(t, i, o) {
            var u,
              s = t && t.array,
              c = o > r ? 0 : (r - o) >> i,
              f = 1 + ((n - o) >> i);
            return (
              f > v && (f = v),
              function () {
                for (;;) {
                  if (u) {
                    var t = u();
                    if (t !== Ke) return t;
                    u = null;
                  }
                  if (c === f) return Ke;
                  var r = e ? --f : c++;
                  u = a(s && s[r], i - y, o + (r << i));
                }
              }
            );
          }
        }
        function Te(t, e, r, n, i, o, a) {
          var u = Object.create(Ce);
          return (
            (u.size = e - t),
            (u._origin = t),
            (u._capacity = e),
            (u._level = r),
            (u._root = n),
            (u._tail = i),
            (u.__ownerID = o),
            (u.__hash = a),
            (u.__altered = !1),
            u
          );
        }
        function Be() {
          return Me || (Me = Te(0, 0, y));
        }
        function Re(t, e, r) {
          if ((e = C(t, e)) !== e) return t;
          if (e >= t.size || e < 0)
            return t.withMutations(function (t) {
              e < 0 ? Fe(t, e).set(0, r) : Fe(t, 0, e + 1).set(e, r);
            });
          e += t._origin;
          var n = t._tail,
            i = t._root,
            o = S(w);
          return (
            e >= je(t._capacity)
              ? (n = ze(n, t.__ownerID, 0, e, r, o))
              : (i = ze(i, t.__ownerID, t._level, e, r, o)),
            o.value
              ? t.__ownerID
                ? ((t._root = i),
                  (t._tail = n),
                  (t.__hash = void 0),
                  (t.__altered = !0),
                  t)
                : Te(t._origin, t._capacity, t._level, i, n)
              : t
          );
        }
        function ze(t, e, r, n, i, o) {
          var a,
            u = (n >>> r) & _,
            s = t && u < t.array.length;
          if (!s && void 0 === i) return t;
          if (r > 0) {
            var c = t && t.array[u],
              f = ze(c, e, r - y, n, i, o);
            return f === c ? t : (((a = Le(t, e)).array[u] = f), a);
          }
          return s && t.array[u] === i
            ? t
            : (k(o),
              (a = Le(t, e)),
              void 0 === i && u === a.array.length - 1
                ? a.array.pop()
                : (a.array[u] = i),
              a);
        }
        function Le(t, e) {
          return e && t && e === t.ownerID
            ? t
            : new De(t ? t.array.slice() : [], e);
        }
        function Pe(t, e) {
          if (e >= je(t._capacity)) return t._tail;
          if (e < 1 << (t._level + y)) {
            for (var r = t._root, n = t._level; r && n > 0; )
              (r = r.array[(e >>> n) & _]), (n -= y);
            return r;
          }
        }
        function Fe(t, e, r) {
          void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
          var n = t.__ownerID || new x(),
            i = t._origin,
            o = t._capacity,
            a = i + e,
            u = void 0 === r ? o : r < 0 ? o + r : i + r;
          if (a === i && u === o) return t;
          if (a >= u) return t.clear();
          for (var s = t._level, c = t._root, f = 0; a + f < 0; )
            (c = new De(c && c.array.length ? [void 0, c] : [], n)),
              (f += 1 << (s += y));
          f && ((a += f), (i += f), (u += f), (o += f));
          for (var l = je(o), p = je(u); p >= 1 << (s + y); )
            (c = new De(c && c.array.length ? [c] : [], n)), (s += y);
          var h = t._tail,
            d = p < l ? Pe(t, u - 1) : p > l ? new De([], n) : h;
          if (h && p > l && a < o && h.array.length) {
            for (var g = (c = Le(c, n)), v = s; v > y; v -= y) {
              var m = (l >>> v) & _;
              g = g.array[m] = Le(g.array[m], n);
            }
            g.array[(l >>> y) & _] = h;
          }
          if ((u < o && (d = d && d.removeAfter(n, 0, u)), a >= p))
            (a -= p),
              (u -= p),
              (s = y),
              (c = null),
              (d = d && d.removeBefore(n, 0, a));
          else if (a > i || p < l) {
            for (f = 0; c; ) {
              var b = (a >>> s) & _;
              if ((b !== p >>> s) & _) break;
              b && (f += (1 << s) * b), (s -= y), (c = c.array[b]);
            }
            c && a > i && (c = c.removeBefore(n, s, a - f)),
              c && p < l && (c = c.removeAfter(n, s, p - f)),
              f && ((a -= f), (u -= f));
          }
          return t.__ownerID
            ? ((t.size = u - a),
              (t._origin = a),
              (t._capacity = u),
              (t._level = s),
              (t._root = c),
              (t._tail = d),
              (t.__hash = void 0),
              (t.__altered = !0),
              t)
            : Te(a, u, s, c, d);
        }
        function Ne(t, e, r) {
          for (var n = [], o = 0, u = 0; u < r.length; u++) {
            var s = r[u],
              c = i(s);
            c.size > o && (o = c.size),
              a(s) ||
                (c = c.map(function (t) {
                  return ht(t);
                })),
              n.push(c);
          }
          return o > t.size && (t = t.setSize(o)), ge(t, e, n);
        }
        function je(t) {
          return t < v ? 0 : ((t - 1) >>> y) << y;
        }
        function Ue(t) {
          return null === t || void 0 === t
            ? We()
            : qe(t)
            ? t
            : We().withMutations(function (e) {
                var r = n(t);
                qt(r.size),
                  r.forEach(function (t, r) {
                    return e.set(r, t);
                  });
              });
        }
        function qe(t) {
          return Wt(t) && f(t);
        }
        function He(t, e, r, n) {
          var i = Object.create(Ue.prototype);
          return (
            (i.size = t ? t.size : 0),
            (i._map = t),
            (i._list = e),
            (i.__ownerID = r),
            (i.__hash = n),
            i
          );
        }
        function We() {
          return Ie || (Ie = He(ie(), Be()));
        }
        function Ve(t, e, r) {
          var n,
            i,
            o = t._map,
            a = t._list,
            u = o.get(e),
            s = void 0 !== u;
          if (r === m) {
            if (!s) return t;
            a.size >= v && a.size >= 2 * o.size
              ? ((n = (i = a.filter(function (t, e) {
                  return void 0 !== t && u !== e;
                }))
                  .toKeyedSeq()
                  .map(function (t) {
                    return t[0];
                  })
                  .flip()
                  .toMap()),
                t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID))
              : ((n = o.remove(e)),
                (i = u === a.size - 1 ? a.pop() : a.set(u, void 0)));
          } else if (s) {
            if (r === a.get(u)[1]) return t;
            (n = o), (i = a.set(u, [e, r]));
          } else (n = o.set(e, a.size)), (i = a.set(a.size, [e, r]));
          return t.__ownerID
            ? ((t.size = n.size),
              (t._map = n),
              (t._list = i),
              (t.__hash = void 0),
              t)
            : He(n, i);
        }
        function Je(t, e) {
          (this._iter = t), (this._useKeys = e), (this.size = t.size);
        }
        function Ye(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Ge(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Xe(t) {
          (this._iter = t), (this.size = t.size);
        }
        function Ze(t) {
          var e = _r(t);
          return (
            (e._iter = t),
            (e.size = t.size),
            (e.flip = function () {
              return t;
            }),
            (e.reverse = function () {
              var e = t.reverse.apply(this);
              return (
                (e.flip = function () {
                  return t.reverse();
                }),
                e
              );
            }),
            (e.has = function (e) {
              return t.includes(e);
            }),
            (e.includes = function (e) {
              return t.has(e);
            }),
            (e.cacheResult = mr),
            (e.__iterateUncached = function (e, r) {
              var n = this;
              return t.__iterate(function (t, r) {
                return !1 !== e(r, t, n);
              }, r);
            }),
            (e.__iteratorUncached = function (e, r) {
              if (e === R) {
                var n = t.__iterator(e, r);
                return new F(function () {
                  var t = n.next();
                  if (!t.done) {
                    var e = t.value[0];
                    (t.value[0] = t.value[1]), (t.value[1] = e);
                  }
                  return t;
                });
              }
              return t.__iterator(e === B ? T : B, r);
            }),
            e
          );
        }
        function Qe(t, e, r) {
          var n = _r(t);
          return (
            (n.size = t.size),
            (n.has = function (e) {
              return t.has(e);
            }),
            (n.get = function (n, i) {
              var o = t.get(n, m);
              return o === m ? i : e.call(r, o, n, t);
            }),
            (n.__iterateUncached = function (n, i) {
              var o = this;
              return t.__iterate(function (t, i, a) {
                return !1 !== n(e.call(r, t, i, a), i, o);
              }, i);
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(R, i);
              return new F(function () {
                var i = o.next();
                if (i.done) return i;
                var a = i.value,
                  u = a[0];
                return N(n, u, e.call(r, a[1], u, t), i);
              });
            }),
            n
          );
        }
        function $e(t, e) {
          var r = _r(t);
          return (
            (r._iter = t),
            (r.size = t.size),
            (r.reverse = function () {
              return t;
            }),
            t.flip &&
              (r.flip = function () {
                var e = Ze(t);
                return (
                  (e.reverse = function () {
                    return t.flip();
                  }),
                  e
                );
              }),
            (r.get = function (r, n) {
              return t.get(e ? r : -1 - r, n);
            }),
            (r.has = function (r) {
              return t.has(e ? r : -1 - r);
            }),
            (r.includes = function (e) {
              return t.includes(e);
            }),
            (r.cacheResult = mr),
            (r.__iterate = function (e, r) {
              var n = this;
              return t.__iterate(function (t, r) {
                return e(t, r, n);
              }, !r);
            }),
            (r.__iterator = function (e, r) {
              return t.__iterator(e, !r);
            }),
            r
          );
        }
        function tr(t, e, r, n) {
          var i = _r(t);
          return (
            n &&
              ((i.has = function (n) {
                var i = t.get(n, m);
                return i !== m && !!e.call(r, i, n, t);
              }),
              (i.get = function (n, i) {
                var o = t.get(n, m);
                return o !== m && e.call(r, o, n, t) ? o : i;
              })),
            (i.__iterateUncached = function (i, o) {
              var a = this,
                u = 0;
              return (
                t.__iterate(function (t, o, s) {
                  if (e.call(r, t, o, s)) return u++, i(t, n ? o : u - 1, a);
                }, o),
                u
              );
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = t.__iterator(R, o),
                u = 0;
              return new F(function () {
                for (;;) {
                  var o = a.next();
                  if (o.done) return o;
                  var s = o.value,
                    c = s[0],
                    f = s[1];
                  if (e.call(r, f, c, t)) return N(i, n ? c : u++, f, o);
                }
              });
            }),
            i
          );
        }
        function er(t, e, r) {
          var n = Ht().asMutable();
          return (
            t.__iterate(function (i, o) {
              n.update(e.call(r, i, o, t), 0, function (t) {
                return t + 1;
              });
            }),
            n.asImmutable()
          );
        }
        function rr(t, e, r) {
          var n = u(t),
            i = (f(t) ? Ue() : Ht()).asMutable();
          t.__iterate(function (o, a) {
            i.update(e.call(r, o, a, t), function (t) {
              return (t = t || []).push(n ? [a, o] : o), t;
            });
          });
          var o = vr(t);
          return i.map(function (e) {
            return dr(t, o(e));
          });
        }
        function nr(t, e, r, n) {
          var i = t.size;
          if (
            (void 0 !== e && (e |= 0),
            void 0 !== r && (r === 1 / 0 ? (r = i) : (r |= 0)),
            M(e, r, i))
          )
            return t;
          var o = I(e, i),
            a = K(r, i);
          if (o !== o || a !== a) return nr(t.toSeq().cacheResult(), e, r, n);
          var u,
            s = a - o;
          s === s && (u = s < 0 ? 0 : s);
          var c = _r(t);
          return (
            (c.size = 0 === u ? u : (t.size && u) || void 0),
            !n &&
              ot(t) &&
              u >= 0 &&
              (c.get = function (e, r) {
                return (e = C(this, e)) >= 0 && e < u ? t.get(e + o, r) : r;
              }),
            (c.__iterateUncached = function (e, r) {
              var i = this;
              if (0 === u) return 0;
              if (r) return this.cacheResult().__iterate(e, r);
              var a = 0,
                s = !0,
                c = 0;
              return (
                t.__iterate(function (t, r) {
                  if (!s || !(s = a++ < o))
                    return c++, !1 !== e(t, n ? r : c - 1, i) && c !== u;
                }),
                c
              );
            }),
            (c.__iteratorUncached = function (e, r) {
              if (0 !== u && r) return this.cacheResult().__iterator(e, r);
              var i = 0 !== u && t.__iterator(e, r),
                a = 0,
                s = 0;
              return new F(function () {
                for (; a++ < o; ) i.next();
                if (++s > u) return j();
                var t = i.next();
                return n || e === B
                  ? t
                  : N(e, s - 1, e === T ? void 0 : t.value[1], t);
              });
            }),
            c
          );
        }
        function ir(t, e, r) {
          var n = _r(t);
          return (
            (n.__iterateUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterate(n, i);
              var a = 0;
              return (
                t.__iterate(function (t, i, u) {
                  return e.call(r, t, i, u) && ++a && n(t, i, o);
                }),
                a
              );
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = this;
              if (i) return this.cacheResult().__iterator(n, i);
              var a = t.__iterator(R, i),
                u = !0;
              return new F(function () {
                if (!u) return j();
                var t = a.next();
                if (t.done) return t;
                var i = t.value,
                  s = i[0],
                  c = i[1];
                return e.call(r, c, s, o)
                  ? n === R
                    ? t
                    : N(n, s, c, t)
                  : ((u = !1), j());
              });
            }),
            n
          );
        }
        function or(t, e, r, n) {
          var i = _r(t);
          return (
            (i.__iterateUncached = function (i, o) {
              var a = this;
              if (o) return this.cacheResult().__iterate(i, o);
              var u = !0,
                s = 0;
              return (
                t.__iterate(function (t, o, c) {
                  if (!u || !(u = e.call(r, t, o, c)))
                    return s++, i(t, n ? o : s - 1, a);
                }),
                s
              );
            }),
            (i.__iteratorUncached = function (i, o) {
              var a = this;
              if (o) return this.cacheResult().__iterator(i, o);
              var u = t.__iterator(R, o),
                s = !0,
                c = 0;
              return new F(function () {
                var t, o, f;
                do {
                  if ((t = u.next()).done)
                    return n || i === B
                      ? t
                      : N(i, c++, i === T ? void 0 : t.value[1], t);
                  var l = t.value;
                  (o = l[0]), (f = l[1]), s && (s = e.call(r, f, o, a));
                } while (s);
                return i === R ? t : N(i, o, f, t);
              });
            }),
            i
          );
        }
        function ar(t, e) {
          var r = u(t),
            i = [t]
              .concat(e)
              .map(function (t) {
                return (
                  a(t)
                    ? r && (t = n(t))
                    : (t = r ? ut(t) : st(Array.isArray(t) ? t : [t])),
                  t
                );
              })
              .filter(function (t) {
                return 0 !== t.size;
              });
          if (0 === i.length) return t;
          if (1 === i.length) {
            var o = i[0];
            if (o === t || (r && u(o)) || (s(t) && s(o))) return o;
          }
          var c = new et(i);
          return (
            r ? (c = c.toKeyedSeq()) : s(t) || (c = c.toSetSeq()),
            ((c = c.flatten(!0)).size = i.reduce(function (t, e) {
              if (void 0 !== t) {
                var r = e.size;
                if (void 0 !== r) return t + r;
              }
            }, 0)),
            c
          );
        }
        function ur(t, e, r) {
          var n = _r(t);
          return (
            (n.__iterateUncached = function (n, i) {
              var o = 0,
                u = !1;
              function s(t, c) {
                var f = this;
                t.__iterate(function (t, i) {
                  return (
                    (!e || c < e) && a(t)
                      ? s(t, c + 1)
                      : !1 === n(t, r ? i : o++, f) && (u = !0),
                    !u
                  );
                }, i);
              }
              return s(t, 0), o;
            }),
            (n.__iteratorUncached = function (n, i) {
              var o = t.__iterator(n, i),
                u = [],
                s = 0;
              return new F(function () {
                for (; o; ) {
                  var t = o.next();
                  if (!1 === t.done) {
                    var c = t.value;
                    if (
                      (n === R && (c = c[1]), (e && !(u.length < e)) || !a(c))
                    )
                      return r ? t : N(n, s++, c, t);
                    u.push(o), (o = c.__iterator(n, i));
                  } else o = u.pop();
                }
                return j();
              });
            }),
            n
          );
        }
        function sr(t, e, r) {
          var n = vr(t);
          return t
            .toSeq()
            .map(function (i, o) {
              return n(e.call(r, i, o, t));
            })
            .flatten(!0);
        }
        function cr(t, e) {
          var r = _r(t);
          return (
            (r.size = t.size && 2 * t.size - 1),
            (r.__iterateUncached = function (r, n) {
              var i = this,
                o = 0;
              return (
                t.__iterate(function (t, n) {
                  return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
                }, n),
                o
              );
            }),
            (r.__iteratorUncached = function (r, n) {
              var i,
                o = t.__iterator(B, n),
                a = 0;
              return new F(function () {
                return (!i || a % 2) && (i = o.next()).done
                  ? i
                  : a % 2
                  ? N(r, a++, e)
                  : N(r, a++, i.value, i);
              });
            }),
            r
          );
        }
        function fr(t, e, r) {
          e || (e = br);
          var n = u(t),
            i = 0,
            o = t
              .toSeq()
              .map(function (e, n) {
                return [n, e, i++, r ? r(e, n, t) : e];
              })
              .toArray();
          return (
            o
              .sort(function (t, r) {
                return e(t[3], r[3]) || t[2] - r[2];
              })
              .forEach(
                n
                  ? function (t, e) {
                      o[e].length = 2;
                    }
                  : function (t, e) {
                      o[e] = t[1];
                    }
              ),
            n ? Y(o) : s(t) ? G(o) : X(o)
          );
        }
        function lr(t, e, r) {
          if ((e || (e = br), r)) {
            var n = t
              .toSeq()
              .map(function (e, n) {
                return [e, r(e, n, t)];
              })
              .reduce(function (t, r) {
                return pr(e, t[1], r[1]) ? r : t;
              });
            return n && n[0];
          }
          return t.reduce(function (t, r) {
            return pr(e, t, r) ? r : t;
          });
        }
        function pr(t, e, r) {
          var n = t(r, e);
          return (
            (0 === n && r !== e && (void 0 === r || null === r || r !== r)) ||
            n > 0
          );
        }
        function hr(t, e, n) {
          var i = _r(t);
          return (
            (i.size = new et(n)
              .map(function (t) {
                return t.size;
              })
              .min()),
            (i.__iterate = function (t, e) {
              for (
                var r, n = this.__iterator(B, e), i = 0;
                !(r = n.next()).done && !1 !== t(r.value, i++, this);

              );
              return i;
            }),
            (i.__iteratorUncached = function (t, i) {
              var o = n.map(function (t) {
                  return (t = r(t)), H(i ? t.reverse() : t);
                }),
                a = 0,
                u = !1;
              return new F(function () {
                var r;
                return (
                  u ||
                    ((r = o.map(function (t) {
                      return t.next();
                    })),
                    (u = r.some(function (t) {
                      return t.done;
                    }))),
                  u
                    ? j()
                    : N(
                        t,
                        a++,
                        e.apply(
                          null,
                          r.map(function (t) {
                            return t.value;
                          })
                        )
                      )
                );
              });
            }),
            i
          );
        }
        function dr(t, e) {
          return ot(t) ? e : t.constructor(e);
        }
        function gr(t) {
          if (t !== Object(t))
            throw new TypeError('Expected [K, V] tuple: ' + t);
        }
        function yr(t) {
          return qt(t.size), O(t);
        }
        function vr(t) {
          return u(t) ? n : s(t) ? i : o;
        }
        function _r(t) {
          return Object.create((u(t) ? Y : s(t) ? G : X).prototype);
        }
        function mr() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : J.prototype.cacheResult.call(this);
        }
        function br(t, e) {
          return t > e ? 1 : t < e ? -1 : 0;
        }
        function wr(t) {
          var e = H(t);
          if (!e) {
            if (!V(t))
              throw new TypeError('Expected iterable or array-like: ' + t);
            e = H(r(t));
          }
          return e;
        }
        function Sr(t, e) {
          var r,
            n = function (o) {
              if (o instanceof n) return o;
              if (!(this instanceof n)) return new n(o);
              if (!r) {
                r = !0;
                var a = Object.keys(t);
                Or(i, a),
                  (i.size = a.length),
                  (i._name = e),
                  (i._keys = a),
                  (i._defaultValues = t);
              }
              this._map = Ht(o);
            },
            i = (n.prototype = Object.create(kr));
          return (i.constructor = n), n;
        }
        e(Ue, Ht),
          (Ue.of = function () {
            return this(arguments);
          }),
          (Ue.prototype.toString = function () {
            return this.__toString('OrderedMap {', '}');
          }),
          (Ue.prototype.get = function (t, e) {
            var r = this._map.get(t);
            return void 0 !== r ? this._list.get(r)[1] : e;
          }),
          (Ue.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
              : We();
          }),
          (Ue.prototype.set = function (t, e) {
            return Ve(this, t, e);
          }),
          (Ue.prototype.remove = function (t) {
            return Ve(this, t, m);
          }),
          (Ue.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered();
          }),
          (Ue.prototype.__iterate = function (t, e) {
            var r = this;
            return this._list.__iterate(function (e) {
              return e && t(e[1], e[0], r);
            }, e);
          }),
          (Ue.prototype.__iterator = function (t, e) {
            return this._list.fromEntrySeq().__iterator(t, e);
          }),
          (Ue.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t),
              r = this._list.__ensureOwner(t);
            return t
              ? He(e, r, t, this.__hash)
              : ((this.__ownerID = t), (this._map = e), (this._list = r), this);
          }),
          (Ue.isOrderedMap = qe),
          (Ue.prototype[d] = !0),
          (Ue.prototype[g] = Ue.prototype.remove),
          e(Je, Y),
          (Je.prototype.get = function (t, e) {
            return this._iter.get(t, e);
          }),
          (Je.prototype.has = function (t) {
            return this._iter.has(t);
          }),
          (Je.prototype.valueSeq = function () {
            return this._iter.valueSeq();
          }),
          (Je.prototype.reverse = function () {
            var t = this,
              e = $e(this, !0);
            return (
              this._useKeys ||
                (e.valueSeq = function () {
                  return t._iter.toSeq().reverse();
                }),
              e
            );
          }),
          (Je.prototype.map = function (t, e) {
            var r = this,
              n = Qe(this, t, e);
            return (
              this._useKeys ||
                (n.valueSeq = function () {
                  return r._iter.toSeq().map(t, e);
                }),
              n
            );
          }),
          (Je.prototype.__iterate = function (t, e) {
            var r,
              n = this;
            return this._iter.__iterate(
              this._useKeys
                ? function (e, r) {
                    return t(e, r, n);
                  }
                : ((r = e ? yr(this) : 0),
                  function (i) {
                    return t(i, e ? --r : r++, n);
                  }),
              e
            );
          }),
          (Je.prototype.__iterator = function (t, e) {
            if (this._useKeys) return this._iter.__iterator(t, e);
            var r = this._iter.__iterator(B, e),
              n = e ? yr(this) : 0;
            return new F(function () {
              var i = r.next();
              return i.done ? i : N(t, e ? --n : n++, i.value, i);
            });
          }),
          (Je.prototype[d] = !0),
          e(Ye, G),
          (Ye.prototype.includes = function (t) {
            return this._iter.includes(t);
          }),
          (Ye.prototype.__iterate = function (t, e) {
            var r = this,
              n = 0;
            return this._iter.__iterate(function (e) {
              return t(e, n++, r);
            }, e);
          }),
          (Ye.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e),
              n = 0;
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, n++, e.value, e);
            });
          }),
          e(Ge, X),
          (Ge.prototype.has = function (t) {
            return this._iter.includes(t);
          }),
          (Ge.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
              return t(e, e, r);
            }, e);
          }),
          (Ge.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e);
            return new F(function () {
              var e = r.next();
              return e.done ? e : N(t, e.value, e.value, e);
            });
          }),
          e(Xe, Y),
          (Xe.prototype.entrySeq = function () {
            return this._iter.toSeq();
          }),
          (Xe.prototype.__iterate = function (t, e) {
            var r = this;
            return this._iter.__iterate(function (e) {
              if (e) {
                gr(e);
                var n = a(e);
                return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
              }
            }, e);
          }),
          (Xe.prototype.__iterator = function (t, e) {
            var r = this._iter.__iterator(B, e);
            return new F(function () {
              for (;;) {
                var e = r.next();
                if (e.done) return e;
                var n = e.value;
                if (n) {
                  gr(n);
                  var i = a(n);
                  return N(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
                }
              }
            });
          }),
          (Ye.prototype.cacheResult = Je.prototype.cacheResult = Ge.prototype.cacheResult = Xe.prototype.cacheResult = mr),
          e(Sr, kt),
          (Sr.prototype.toString = function () {
            return this.__toString(Er(this) + ' {', '}');
          }),
          (Sr.prototype.has = function (t) {
            return this._defaultValues.hasOwnProperty(t);
          }),
          (Sr.prototype.get = function (t, e) {
            if (!this.has(t)) return e;
            var r = this._defaultValues[t];
            return this._map ? this._map.get(t, r) : r;
          }),
          (Sr.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var t = this.constructor;
            return t._empty || (t._empty = xr(this, ie()));
          }),
          (Sr.prototype.set = function (t, e) {
            if (!this.has(t))
              throw new Error(
                'Cannot set unknown key "' + t + '" on ' + Er(this)
              );
            if (this._map && !this._map.has(t) && e === this._defaultValues[t])
              return this;
            var r = this._map && this._map.set(t, e);
            return this.__ownerID || r === this._map ? this : xr(this, r);
          }),
          (Sr.prototype.remove = function (t) {
            if (!this.has(t)) return this;
            var e = this._map && this._map.remove(t);
            return this.__ownerID || e === this._map ? this : xr(this, e);
          }),
          (Sr.prototype.wasAltered = function () {
            return this._map.wasAltered();
          }),
          (Sr.prototype.__iterator = function (t, e) {
            var r = this;
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e);
              })
              .__iterator(t, e);
          }),
          (Sr.prototype.__iterate = function (t, e) {
            var r = this;
            return n(this._defaultValues)
              .map(function (t, e) {
                return r.get(e);
              })
              .__iterate(t, e);
          }),
          (Sr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map && this._map.__ensureOwner(t);
            return t
              ? xr(this, e, t)
              : ((this.__ownerID = t), (this._map = e), this);
          });
        var kr = Sr.prototype;
        function xr(t, e, r) {
          var n = Object.create(Object.getPrototypeOf(t));
          return (n._map = e), (n.__ownerID = r), n;
        }
        function Er(t) {
          return t._name || t.constructor.name || 'Record';
        }
        function Or(t, e) {
          try {
            e.forEach(Cr.bind(void 0, t));
          } catch (r) {}
        }
        function Cr(t, e) {
          Object.defineProperty(t, e, {
            get: function () {
              return this.get(e);
            },
            set: function (t) {
              bt(this.__ownerID, 'Cannot set on an immutable record.'),
                this.set(e, t);
            },
          });
        }
        function Dr(t) {
          return null === t || void 0 === t
            ? Rr()
            : Mr(t) && !f(t)
            ? t
            : Rr().withMutations(function (e) {
                var r = o(t);
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t);
                  });
              });
        }
        function Mr(t) {
          return !(!t || !t[Kr]);
        }
        (kr[g] = kr.remove),
          (kr.deleteIn = kr.removeIn = Yt.removeIn),
          (kr.merge = Yt.merge),
          (kr.mergeWith = Yt.mergeWith),
          (kr.mergeIn = Yt.mergeIn),
          (kr.mergeDeep = Yt.mergeDeep),
          (kr.mergeDeepWith = Yt.mergeDeepWith),
          (kr.mergeDeepIn = Yt.mergeDeepIn),
          (kr.setIn = Yt.setIn),
          (kr.update = Yt.update),
          (kr.updateIn = Yt.updateIn),
          (kr.withMutations = Yt.withMutations),
          (kr.asMutable = Yt.asMutable),
          (kr.asImmutable = Yt.asImmutable),
          e(Dr, Et),
          (Dr.of = function () {
            return this(arguments);
          }),
          (Dr.fromKeys = function (t) {
            return this(n(t).keySeq());
          }),
          (Dr.prototype.toString = function () {
            return this.__toString('Set {', '}');
          }),
          (Dr.prototype.has = function (t) {
            return this._map.has(t);
          }),
          (Dr.prototype.add = function (t) {
            return Tr(this, this._map.set(t, !0));
          }),
          (Dr.prototype.remove = function (t) {
            return Tr(this, this._map.remove(t));
          }),
          (Dr.prototype.clear = function () {
            return Tr(this, this._map.clear());
          }),
          (Dr.prototype.union = function () {
            var e = t.call(arguments, 0);
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size;
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
              ? this.withMutations(function (t) {
                  for (var r = 0; r < e.length; r++)
                    o(e[r]).forEach(function (e) {
                      return t.add(e);
                    });
                })
              : this.constructor(e[0]);
          }),
          (Dr.prototype.intersect = function () {
            var e = t.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (t) {
              return o(t);
            });
            var r = this;
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.every(function (t) {
                  return t.includes(r);
                }) || t.remove(r);
              });
            });
          }),
          (Dr.prototype.subtract = function () {
            var e = t.call(arguments, 0);
            if (0 === e.length) return this;
            e = e.map(function (t) {
              return o(t);
            });
            var r = this;
            return this.withMutations(function (t) {
              r.forEach(function (r) {
                e.some(function (t) {
                  return t.includes(r);
                }) && t.remove(r);
              });
            });
          }),
          (Dr.prototype.merge = function () {
            return this.union.apply(this, arguments);
          }),
          (Dr.prototype.mergeWith = function (e) {
            var r = t.call(arguments, 1);
            return this.union.apply(this, r);
          }),
          (Dr.prototype.sort = function (t) {
            return zr(fr(this, t));
          }),
          (Dr.prototype.sortBy = function (t, e) {
            return zr(fr(this, e, t));
          }),
          (Dr.prototype.wasAltered = function () {
            return this._map.wasAltered();
          }),
          (Dr.prototype.__iterate = function (t, e) {
            var r = this;
            return this._map.__iterate(function (e, n) {
              return t(n, n, r);
            }, e);
          }),
          (Dr.prototype.__iterator = function (t, e) {
            return this._map
              .map(function (t, e) {
                return e;
              })
              .__iterator(t, e);
          }),
          (Dr.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this;
            var e = this._map.__ensureOwner(t);
            return t
              ? this.__make(e, t)
              : ((this.__ownerID = t), (this._map = e), this);
          }),
          (Dr.isSet = Mr);
        var Ir,
          Kr = '@@__IMMUTABLE_SET__@@',
          Ar = Dr.prototype;
        function Tr(t, e) {
          return t.__ownerID
            ? ((t.size = e.size), (t._map = e), t)
            : e === t._map
            ? t
            : 0 === e.size
            ? t.__empty()
            : t.__make(e);
        }
        function Br(t, e) {
          var r = Object.create(Ar);
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
        }
        function Rr() {
          return Ir || (Ir = Br(ie()));
        }
        function zr(t) {
          return null === t || void 0 === t
            ? jr()
            : Lr(t)
            ? t
            : jr().withMutations(function (e) {
                var r = o(t);
                qt(r.size),
                  r.forEach(function (t) {
                    return e.add(t);
                  });
              });
        }
        function Lr(t) {
          return Mr(t) && f(t);
        }
        (Ar[Kr] = !0),
          (Ar[g] = Ar.remove),
          (Ar.mergeDeep = Ar.merge),
          (Ar.mergeDeepWith = Ar.mergeWith),
          (Ar.withMutations = Yt.withMutations),
          (Ar.asMutable = Yt.asMutable),
          (Ar.asImmutable = Yt.asImmutable),
          (Ar.__empty = Rr),
          (Ar.__make = Br),
          e(zr, Dr),
          (zr.of = function () {
            return this(arguments);
          }),
          (zr.fromKeys = function (t) {
            return this(n(t).keySeq());
          }),
          (zr.prototype.toString = function () {
            return this.__toString('OrderedSet {', '}');
          }),
          (zr.isOrderedSet = Lr);
        var Pr,
          Fr = zr.prototype;
        function Nr(t, e) {
          var r = Object.create(Fr);
          return (r.size = t ? t.size : 0), (r._map = t), (r.__ownerID = e), r;
        }
        function jr() {
          return Pr || (Pr = Nr(We()));
        }
        function Ur(t) {
          return null === t || void 0 === t
            ? Yr()
            : qr(t)
            ? t
            : Yr().unshiftAll(t);
        }
        function qr(t) {
          return !(!t || !t[Wr]);
        }
        (Fr[d] = !0),
          (Fr.__empty = jr),
          (Fr.__make = Nr),
          e(Ur, xt),
          (Ur.of = function () {
            return this(arguments);
          }),
          (Ur.prototype.toString = function () {
            return this.__toString('Stack [', ']');
          }),
          (Ur.prototype.get = function (t, e) {
            var r = this._head;
            for (t = C(this, t); r && t--; ) r = r.next;
            return r ? r.value : e;
          }),
          (Ur.prototype.peek = function () {
            return this._head && this._head.value;
          }),
          (Ur.prototype.push = function () {
            if (0 === arguments.length) return this;
            for (
              var t = this.size + arguments.length,
                e = this._head,
                r = arguments.length - 1;
              r >= 0;
              r--
            )
              e = { value: arguments[r], next: e };
            return this.__ownerID
              ? ((this.size = t),
                (this._head = e),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Jr(t, e);
          }),
          (Ur.prototype.pushAll = function (t) {
            if (0 === (t = i(t)).size) return this;
            qt(t.size);
            var e = this.size,
              r = this._head;
            return (
              t.reverse().forEach(function (t) {
                e++, (r = { value: t, next: r });
              }),
              this.__ownerID
                ? ((this.size = e),
                  (this._head = r),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Jr(e, r)
            );
          }),
          (Ur.prototype.pop = function () {
            return this.slice(1);
          }),
          (Ur.prototype.unshift = function () {
            return this.push.apply(this, arguments);
          }),
          (Ur.prototype.unshiftAll = function (t) {
            return this.pushAll(t);
          }),
          (Ur.prototype.shift = function () {
            return this.pop.apply(this, arguments);
          }),
          (Ur.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._head = void 0),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Yr();
          }),
          (Ur.prototype.slice = function (t, e) {
            if (M(t, e, this.size)) return this;
            var r = I(t, this.size);
            if (K(e, this.size) !== this.size)
              return xt.prototype.slice.call(this, t, e);
            for (var n = this.size - r, i = this._head; r--; ) i = i.next;
            return this.__ownerID
              ? ((this.size = n),
                (this._head = i),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Jr(n, i);
          }),
          (Ur.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
              ? Jr(this.size, this._head, t, this.__hash)
              : ((this.__ownerID = t), (this.__altered = !1), this);
          }),
          (Ur.prototype.__iterate = function (t, e) {
            if (e) return this.reverse().__iterate(t);
            for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this); )
              n = n.next;
            return r;
          }),
          (Ur.prototype.__iterator = function (t, e) {
            if (e) return this.reverse().__iterator(t);
            var r = 0,
              n = this._head;
            return new F(function () {
              if (n) {
                var e = n.value;
                return (n = n.next), N(t, r++, e);
              }
              return j();
            });
          }),
          (Ur.isStack = qr);
        var Hr,
          Wr = '@@__IMMUTABLE_STACK__@@',
          Vr = Ur.prototype;
        function Jr(t, e, r, n) {
          var i = Object.create(Vr);
          return (
            (i.size = t),
            (i._head = e),
            (i.__ownerID = r),
            (i.__hash = n),
            (i.__altered = !1),
            i
          );
        }
        function Yr() {
          return Hr || (Hr = Jr(0));
        }
        function Gr(t, e) {
          var r = function (r) {
            t.prototype[r] = e[r];
          };
          return (
            Object.keys(e).forEach(r),
            Object.getOwnPropertySymbols &&
              Object.getOwnPropertySymbols(e).forEach(r),
            t
          );
        }
        (Vr[Wr] = !0),
          (Vr.withMutations = Yt.withMutations),
          (Vr.asMutable = Yt.asMutable),
          (Vr.asImmutable = Yt.asImmutable),
          (Vr.wasAltered = Yt.wasAltered),
          (r.Iterator = F),
          Gr(r, {
            toArray: function () {
              qt(this.size);
              var t = new Array(this.size || 0);
              return (
                this.valueSeq().__iterate(function (e, r) {
                  t[r] = e;
                }),
                t
              );
            },
            toIndexedSeq: function () {
              return new Ye(this);
            },
            toJS: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' === typeof t.toJS ? t.toJS() : t;
                })
                .__toJS();
            },
            toJSON: function () {
              return this.toSeq()
                .map(function (t) {
                  return t && 'function' === typeof t.toJSON ? t.toJSON() : t;
                })
                .__toJS();
            },
            toKeyedSeq: function () {
              return new Je(this, !0);
            },
            toMap: function () {
              return Ht(this.toKeyedSeq());
            },
            toObject: function () {
              qt(this.size);
              var t = {};
              return (
                this.__iterate(function (e, r) {
                  t[r] = e;
                }),
                t
              );
            },
            toOrderedMap: function () {
              return Ue(this.toKeyedSeq());
            },
            toOrderedSet: function () {
              return zr(u(this) ? this.valueSeq() : this);
            },
            toSet: function () {
              return Dr(u(this) ? this.valueSeq() : this);
            },
            toSetSeq: function () {
              return new Ge(this);
            },
            toSeq: function () {
              return s(this)
                ? this.toIndexedSeq()
                : u(this)
                ? this.toKeyedSeq()
                : this.toSetSeq();
            },
            toStack: function () {
              return Ur(u(this) ? this.valueSeq() : this);
            },
            toList: function () {
              return xe(u(this) ? this.valueSeq() : this);
            },
            toString: function () {
              return '[Iterable]';
            },
            __toString: function (t, e) {
              return 0 === this.size
                ? t + e
                : t +
                    ' ' +
                    this.toSeq().map(this.__toStringMapper).join(', ') +
                    ' ' +
                    e;
            },
            concat: function () {
              return dr(this, ar(this, t.call(arguments, 0)));
            },
            includes: function (t) {
              return this.some(function (e) {
                return vt(e, t);
              });
            },
            entries: function () {
              return this.__iterator(R);
            },
            every: function (t, e) {
              qt(this.size);
              var r = !0;
              return (
                this.__iterate(function (n, i, o) {
                  if (!t.call(e, n, i, o)) return (r = !1), !1;
                }),
                r
              );
            },
            filter: function (t, e) {
              return dr(this, tr(this, t, e, !0));
            },
            find: function (t, e, r) {
              var n = this.findEntry(t, e);
              return n ? n[1] : r;
            },
            forEach: function (t, e) {
              return qt(this.size), this.__iterate(e ? t.bind(e) : t);
            },
            join: function (t) {
              qt(this.size), (t = void 0 !== t ? '' + t : ',');
              var e = '',
                r = !0;
              return (
                this.__iterate(function (n) {
                  r ? (r = !1) : (e += t),
                    (e += null !== n && void 0 !== n ? n.toString() : '');
                }),
                e
              );
            },
            keys: function () {
              return this.__iterator(T);
            },
            map: function (t, e) {
              return dr(this, Qe(this, t, e));
            },
            reduce: function (t, e, r) {
              var n, i;
              return (
                qt(this.size),
                arguments.length < 2 ? (i = !0) : (n = e),
                this.__iterate(function (e, o, a) {
                  i ? ((i = !1), (n = e)) : (n = t.call(r, n, e, o, a));
                }),
                n
              );
            },
            reduceRight: function (t, e, r) {
              var n = this.toKeyedSeq().reverse();
              return n.reduce.apply(n, arguments);
            },
            reverse: function () {
              return dr(this, $e(this, !0));
            },
            slice: function (t, e) {
              return dr(this, nr(this, t, e, !0));
            },
            some: function (t, e) {
              return !this.every(tn(t), e);
            },
            sort: function (t) {
              return dr(this, fr(this, t));
            },
            values: function () {
              return this.__iterator(B);
            },
            butLast: function () {
              return this.slice(0, -1);
            },
            isEmpty: function () {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function () {
                    return !0;
                  });
            },
            count: function (t, e) {
              return O(t ? this.toSeq().filter(t, e) : this);
            },
            countBy: function (t, e) {
              return er(this, t, e);
            },
            equals: function (t) {
              return _t(this, t);
            },
            entrySeq: function () {
              var t = this;
              if (t._cache) return new et(t._cache);
              var e = t.toSeq().map($r).toIndexedSeq();
              return (
                (e.fromEntrySeq = function () {
                  return t.toSeq();
                }),
                e
              );
            },
            filterNot: function (t, e) {
              return this.filter(tn(t), e);
            },
            findEntry: function (t, e, r) {
              var n = r;
              return (
                this.__iterate(function (r, i, o) {
                  if (t.call(e, r, i, o)) return (n = [i, r]), !1;
                }),
                n
              );
            },
            findKey: function (t, e) {
              var r = this.findEntry(t, e);
              return r && r[0];
            },
            findLast: function (t, e, r) {
              return this.toKeyedSeq().reverse().find(t, e, r);
            },
            findLastEntry: function (t, e, r) {
              return this.toKeyedSeq().reverse().findEntry(t, e, r);
            },
            findLastKey: function (t, e) {
              return this.toKeyedSeq().reverse().findKey(t, e);
            },
            first: function () {
              return this.find(D);
            },
            flatMap: function (t, e) {
              return dr(this, sr(this, t, e));
            },
            flatten: function (t) {
              return dr(this, ur(this, t, !0));
            },
            fromEntrySeq: function () {
              return new Xe(this);
            },
            get: function (t, e) {
              return this.find(
                function (e, r) {
                  return vt(r, t);
                },
                void 0,
                e
              );
            },
            getIn: function (t, e) {
              for (var r, n = this, i = wr(t); !(r = i.next()).done; ) {
                var o = r.value;
                if ((n = n && n.get ? n.get(o, m) : m) === m) return e;
              }
              return n;
            },
            groupBy: function (t, e) {
              return rr(this, t, e);
            },
            has: function (t) {
              return this.get(t, m) !== m;
            },
            hasIn: function (t) {
              return this.getIn(t, m) !== m;
            },
            isSubset: function (t) {
              return (
                (t = 'function' === typeof t.includes ? t : r(t)),
                this.every(function (e) {
                  return t.includes(e);
                })
              );
            },
            isSuperset: function (t) {
              return (t = 'function' === typeof t.isSubset ? t : r(t)).isSubset(
                this
              );
            },
            keyOf: function (t) {
              return this.findKey(function (e) {
                return vt(e, t);
              });
            },
            keySeq: function () {
              return this.toSeq().map(Qr).toIndexedSeq();
            },
            last: function () {
              return this.toSeq().reverse().first();
            },
            lastKeyOf: function (t) {
              return this.toKeyedSeq().reverse().keyOf(t);
            },
            max: function (t) {
              return lr(this, t);
            },
            maxBy: function (t, e) {
              return lr(this, e, t);
            },
            min: function (t) {
              return lr(this, t ? en(t) : on);
            },
            minBy: function (t, e) {
              return lr(this, e ? en(e) : on, t);
            },
            rest: function () {
              return this.slice(1);
            },
            skip: function (t) {
              return this.slice(Math.max(0, t));
            },
            skipLast: function (t) {
              return dr(this, this.toSeq().reverse().skip(t).reverse());
            },
            skipWhile: function (t, e) {
              return dr(this, or(this, t, e, !0));
            },
            skipUntil: function (t, e) {
              return this.skipWhile(tn(t), e);
            },
            sortBy: function (t, e) {
              return dr(this, fr(this, e, t));
            },
            take: function (t) {
              return this.slice(0, Math.max(0, t));
            },
            takeLast: function (t) {
              return dr(this, this.toSeq().reverse().take(t).reverse());
            },
            takeWhile: function (t, e) {
              return dr(this, ir(this, t, e));
            },
            takeUntil: function (t, e) {
              return this.takeWhile(tn(t), e);
            },
            valueSeq: function () {
              return this.toIndexedSeq();
            },
            hashCode: function () {
              return this.__hash || (this.__hash = an(this));
            },
          });
        var Xr = r.prototype;
        (Xr[l] = !0),
          (Xr[P] = Xr.values),
          (Xr.__toJS = Xr.toArray),
          (Xr.__toStringMapper = rn),
          (Xr.inspect = Xr.toSource = function () {
            return this.toString();
          }),
          (Xr.chain = Xr.flatMap),
          (Xr.contains = Xr.includes),
          Gr(n, {
            flip: function () {
              return dr(this, Ze(this));
            },
            mapEntries: function (t, e) {
              var r = this,
                n = 0;
              return dr(
                this,
                this.toSeq()
                  .map(function (i, o) {
                    return t.call(e, [o, i], n++, r);
                  })
                  .fromEntrySeq()
              );
            },
            mapKeys: function (t, e) {
              var r = this;
              return dr(
                this,
                this.toSeq()
                  .flip()
                  .map(function (n, i) {
                    return t.call(e, n, i, r);
                  })
                  .flip()
              );
            },
          });
        var Zr = n.prototype;
        function Qr(t, e) {
          return e;
        }
        function $r(t, e) {
          return [e, t];
        }
        function tn(t) {
          return function () {
            return !t.apply(this, arguments);
          };
        }
        function en(t) {
          return function () {
            return -t.apply(this, arguments);
          };
        }
        function rn(t) {
          return 'string' === typeof t ? JSON.stringify(t) : String(t);
        }
        function nn() {
          return E(arguments);
        }
        function on(t, e) {
          return t < e ? 1 : t > e ? -1 : 0;
        }
        function an(t) {
          if (t.size === 1 / 0) return 0;
          var e = f(t),
            r = u(t),
            n = e ? 1 : 0;
          return un(
            t.__iterate(
              r
                ? e
                  ? function (t, e) {
                      n = (31 * n + sn(Dt(t), Dt(e))) | 0;
                    }
                  : function (t, e) {
                      n = (n + sn(Dt(t), Dt(e))) | 0;
                    }
                : e
                ? function (t) {
                    n = (31 * n + Dt(t)) | 0;
                  }
                : function (t) {
                    n = (n + Dt(t)) | 0;
                  }
            ),
            n
          );
        }
        function un(t, e) {
          return (
            (e = Ot(e, 3432918353)),
            (e = Ot((e << 15) | (e >>> -15), 461845907)),
            (e = Ot((e << 13) | (e >>> -13), 5)),
            (e = Ot((e = ((e + 3864292196) | 0) ^ t) ^ (e >>> 16), 2246822507)),
            (e = Ct((e = Ot(e ^ (e >>> 13), 3266489909)) ^ (e >>> 16)))
          );
        }
        function sn(t, e) {
          return (t ^ (e + 2654435769 + (t << 6) + (t >> 2))) | 0;
        }
        return (
          (Zr[p] = !0),
          (Zr[P] = Xr.entries),
          (Zr.__toJS = Xr.toObject),
          (Zr.__toStringMapper = function (t, e) {
            return JSON.stringify(e) + ': ' + rn(t);
          }),
          Gr(i, {
            toKeyedSeq: function () {
              return new Je(this, !1);
            },
            filter: function (t, e) {
              return dr(this, tr(this, t, e, !1));
            },
            findIndex: function (t, e) {
              var r = this.findEntry(t, e);
              return r ? r[0] : -1;
            },
            indexOf: function (t) {
              var e = this.keyOf(t);
              return void 0 === e ? -1 : e;
            },
            lastIndexOf: function (t) {
              var e = this.lastKeyOf(t);
              return void 0 === e ? -1 : e;
            },
            reverse: function () {
              return dr(this, $e(this, !1));
            },
            slice: function (t, e) {
              return dr(this, nr(this, t, e, !1));
            },
            splice: function (t, e) {
              var r = arguments.length;
              if (((e = Math.max(0 | e, 0)), 0 === r || (2 === r && !e)))
                return this;
              t = I(t, t < 0 ? this.count() : this.size);
              var n = this.slice(0, t);
              return dr(
                this,
                1 === r ? n : n.concat(E(arguments, 2), this.slice(t + e))
              );
            },
            findLastIndex: function (t, e) {
              var r = this.findLastEntry(t, e);
              return r ? r[0] : -1;
            },
            first: function () {
              return this.get(0);
            },
            flatten: function (t) {
              return dr(this, ur(this, t, !1));
            },
            get: function (t, e) {
              return (t = C(this, t)) < 0 ||
                this.size === 1 / 0 ||
                (void 0 !== this.size && t > this.size)
                ? e
                : this.find(
                    function (e, r) {
                      return r === t;
                    },
                    void 0,
                    e
                  );
            },
            has: function (t) {
              return (
                (t = C(this, t)) >= 0 &&
                (void 0 !== this.size
                  ? this.size === 1 / 0 || t < this.size
                  : -1 !== this.indexOf(t))
              );
            },
            interpose: function (t) {
              return dr(this, cr(this, t));
            },
            interleave: function () {
              var t = [this].concat(E(arguments)),
                e = hr(this.toSeq(), G.of, t),
                r = e.flatten(!0);
              return e.size && (r.size = e.size * t.length), dr(this, r);
            },
            keySeq: function () {
              return wt(0, this.size);
            },
            last: function () {
              return this.get(-1);
            },
            skipWhile: function (t, e) {
              return dr(this, or(this, t, e, !1));
            },
            zip: function () {
              return dr(this, hr(this, nn, [this].concat(E(arguments))));
            },
            zipWith: function (t) {
              var e = E(arguments);
              return (e[0] = this), dr(this, hr(this, t, e));
            },
          }),
          (i.prototype[h] = !0),
          (i.prototype[d] = !0),
          Gr(o, {
            get: function (t, e) {
              return this.has(t) ? t : e;
            },
            includes: function (t) {
              return this.has(t);
            },
            keySeq: function () {
              return this.valueSeq();
            },
          }),
          (o.prototype.has = Xr.includes),
          (o.prototype.contains = o.prototype.includes),
          Gr(Y, n.prototype),
          Gr(G, i.prototype),
          Gr(X, o.prototype),
          Gr(kt, n.prototype),
          Gr(xt, i.prototype),
          Gr(Et, o.prototype),
          {
            Iterable: r,
            Seq: J,
            Collection: St,
            Map: Ht,
            OrderedMap: Ue,
            List: xe,
            Stack: Ur,
            Set: Dr,
            OrderedSet: zr,
            Record: Sr,
            Range: wt,
            Repeat: mt,
            is: vt,
            fromJS: ht,
          }
        );
      })();
    },
    TNQl: function (t, e, r) {
      'use strict';
      function n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('ERkP'),
        a = r('rim0'),
        u = r('tI3i'),
        s = r('13UR'),
        c = a.isBrowser('IE <= 11');
      var f = (function (t) {
        var e, r;
        function a(e) {
          var r;
          return (
            i(n((r = t.call(this, e) || this)), '_forceFlag', void 0),
            i(n(r), '_node', void 0),
            (r._forceFlag = !1),
            r
          );
        }
        (r = t),
          ((e = a).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var f = a.prototype;
        return (
          (f.shouldComponentUpdate = function (t) {
            var e = this._node,
              r = '' === t.children;
            s(e) || u(!1);
            var n = e;
            return r
              ? !(function (t) {
                  return c ? '\n' === t.textContent : 'BR' === t.tagName;
                })(n)
              : n.textContent !== t.children;
          }),
          (f.componentDidMount = function () {
            this._forceFlag = !this._forceFlag;
          }),
          (f.componentDidUpdate = function () {
            this._forceFlag = !this._forceFlag;
          }),
          (f.render = function () {
            var t,
              e = this;
            return '' === this.props.children
              ? this._forceFlag
                ? ((t = function (t) {
                    return (e._node = t);
                  }),
                  c
                    ? o.createElement(
                        'span',
                        { key: 'A', 'data-text': 'true', ref: t },
                        '\n'
                      )
                    : o.createElement('br', {
                        key: 'A',
                        'data-text': 'true',
                        ref: t,
                      }))
                : (function (t) {
                    return c
                      ? o.createElement(
                          'span',
                          { key: 'B', 'data-text': 'true', ref: t },
                          '\n'
                        )
                      : o.createElement('br', {
                          key: 'B',
                          'data-text': 'true',
                          ref: t,
                        });
                  })(function (t) {
                    return (e._node = t);
                  })
              : o.createElement(
                  'span',
                  {
                    key: this._forceFlag ? 'A' : 'B',
                    'data-text': 'true',
                    ref: function (t) {
                      return (e._node = t);
                    },
                  },
                  this.props.children
                );
          }),
          a
        );
      })(o.Component);
      t.exports = f;
    },
    USh0: function (t, e, r) {
      'use strict';
      var n = r('sWKX'),
        i = r('5mUX'),
        o = r('tI3i');
      function a(t, e, r, a, u, s, c) {
        var f = r.getStartOffset(),
          l = r.getEndOffset(),
          p = t.__get(u).getMutability(),
          h = c ? f : l;
        if ('MUTABLE' === p) return r;
        var d = i(e, u).filter(function (t) {
          return h <= t.end && h >= t.start;
        });
        1 != d.length && o(!1);
        var g = d[0];
        if ('IMMUTABLE' === p)
          return r.merge({
            anchorOffset: g.start,
            focusOffset: g.end,
            isBackward: !1,
          });
        s || (c ? (l = g.end) : (f = g.start));
        var y = n.getRemovalRange(
          f,
          l,
          e.getText().slice(g.start, g.end),
          g.start,
          a
        );
        return r.merge({
          anchorOffset: y.start,
          focusOffset: y.end,
          isBackward: !1,
        });
      }
      t.exports = function (t, e, r, n, i) {
        var o = n.getStartOffset(),
          u = n.getEndOffset(),
          s = e.getEntityAt(o),
          c = r.getEntityAt(u - 1);
        if (!s && !c) return n;
        var f = n;
        if (s && s === c) f = a(t, e, f, i, s, !0, !0);
        else if (s && c) {
          var l = a(t, e, f, i, s, !1, !0),
            p = a(t, r, f, i, c, !1, !1);
          f = f.merge({
            anchorOffset: l.getAnchorOffset(),
            focusOffset: p.getFocusOffset(),
            isBackward: !1,
          });
        } else if (s) {
          var h = a(t, e, f, i, s, !1, !0);
          f = f.merge({ anchorOffset: h.getStartOffset(), isBackward: !1 });
        } else if (c) {
          var d = a(t, r, f, i, c, !1, !1);
          f = f.merge({ focusOffset: d.getEndOffset(), isBackward: !1 });
        }
        return f;
      };
    },
    UfDk: function (t, e, r) {
      'use strict';
      var n = r('djSO'),
        i = r('7002'),
        o = r('1xkk'),
        a = r('M7w5'),
        u = r('vYw2'),
        s = r('VVXv'),
        c = r('7XzN'),
        f = r('MKsC'),
        l = r('X+Re'),
        p = r('hF1F');
      var h = {
        onDragEnd: function (t) {
          t.exitCurrentMode(), d(t);
        },
        onDrop: function (t, e) {
          var r = new n(e.nativeEvent.dataTransfer),
            f = t._latestEditorState,
            h = (function (t, e) {
              var r = null,
                n = null,
                i = u(t.currentTarget);
              if ('function' === typeof i.caretRangeFromPoint) {
                var o = i.caretRangeFromPoint(t.x, t.y);
                (r = o.startContainer), (n = o.startOffset);
              } else {
                if (!t.rangeParent) return null;
                (r = t.rangeParent), (n = t.rangeOffset);
              }
              (r = p(r)), (n = p(n));
              var s = p(a(r));
              return c(e, s, n, s, n);
            })(e.nativeEvent, f);
          if (
            (e.preventDefault(),
            (t._dragCount = 0),
            t.exitCurrentMode(),
            null != h)
          ) {
            var y = r.getFiles();
            if (y.length > 0) {
              if (
                t.props.handleDroppedFiles &&
                l(t.props.handleDroppedFiles(h, y))
              )
                return;
              s(y, function (e) {
                e && t.update(g(f, h, e));
              });
            } else {
              var v = t._internalDrag ? 'internal' : 'external';
              (t.props.handleDrop && l(t.props.handleDrop(h, r, v))) ||
                (t._internalDrag
                  ? t.update(
                      (function (t, e) {
                        var r = i.moveText(
                          t.getCurrentContent(),
                          t.getSelection(),
                          e
                        );
                        return o.push(t, r, 'insert-fragment');
                      })(f, h)
                    )
                  : t.update(g(f, h, r.getText()))),
                d(t);
            }
          }
        },
      };
      function d(t) {
        t._internalDrag = !1;
        var e = t.editorContainer;
        if (e) {
          var r = new MouseEvent('mouseup', {
            view: f(e),
            bubbles: !0,
            cancelable: !0,
          });
          e.dispatchEvent(r);
        }
      }
      function g(t, e, r) {
        var n = i.insertText(
          t.getCurrentContent(),
          e,
          r,
          t.getCurrentInlineStyle()
        );
        return o.push(t, n, 'insert-fragment');
      }
      t.exports = h;
    },
    UzdN: function (t, e, r) {
      t.exports = { root: 'AlternateContainer_root__1SaT6' };
    },
    VUYy: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('AL/+'),
        o = r('+521'),
        a = r('3Hp6'),
        u = a.List,
        s = a.Repeat,
        c = a.Record,
        f = function () {
          return !0;
        },
        l = c({ start: null, end: null }),
        p = c({ start: null, end: null, decoratorKey: null, leaves: null }),
        h = {
          generate: function (t, e, r) {
            var n = e.getLength();
            if (!n)
              return u.of(
                new p({
                  start: 0,
                  end: 0,
                  decoratorKey: null,
                  leaves: u.of(new l({ start: 0, end: 0 })),
                })
              );
            var o = [],
              a = r ? r.getDecorations(e, t) : u(s(null, n)),
              c = e.getCharacterList();
            return (
              i(a, g, f, function (t, e) {
                o.push(
                  new p({
                    start: t,
                    end: e,
                    decoratorKey: a.get(t),
                    leaves: d(c.slice(t, e).toList(), t),
                  })
                );
              }),
              u(o)
            );
          },
          fromJS: function (t) {
            var e = t.leaves,
              r = (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(t);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                return i;
              })(t, ['leaves']);
            return new p(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(r);
                  'function' === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                      })
                    )),
                    i.forEach(function (e) {
                      n(t, e, r[e]);
                    });
                }
                return t;
              })({}, r, {
                leaves:
                  null != e
                    ? u(Array.isArray(e) ? e : o(e)).map(function (t) {
                        return l(t);
                      })
                    : null,
              })
            );
          },
        };
      function d(t, e) {
        var r = [],
          n = t
            .map(function (t) {
              return t.getStyle();
            })
            .toList();
        return (
          i(n, g, f, function (t, n) {
            r.push(new l({ start: t + e, end: n + e }));
          }),
          u(r)
        );
      }
      function g(t, e) {
        return t === e;
      }
      t.exports = h;
    },
    VUbk: function (t, e, r) {
      'use strict';
      var n = r('ERkP'),
        i = r('2Wwg'),
        o = (0, r('3Hp6').Map)({
          'header-one': { element: 'h1' },
          'header-two': { element: 'h2' },
          'header-three': { element: 'h3' },
          'header-four': { element: 'h4' },
          'header-five': { element: 'h5' },
          'header-six': { element: 'h6' },
          section: { element: 'section' },
          article: { element: 'article' },
          'unordered-list-item': {
            element: 'li',
            wrapper: n.createElement('ul', {
              className: i('public/DraftStyleDefault/ul'),
            }),
          },
          'ordered-list-item': {
            element: 'li',
            wrapper: n.createElement('ol', {
              className: i('public/DraftStyleDefault/ol'),
            }),
          },
          blockquote: { element: 'blockquote' },
          atomic: { element: 'figure' },
          'code-block': {
            element: 'pre',
            wrapper: n.createElement('pre', {
              className: i('public/DraftStyleDefault/pre'),
            }),
          },
          unstyled: { element: 'div', aliasedElements: ['p'] },
        });
      t.exports = o;
    },
    VVXv: function (t, e, r) {
      'use strict';
      (function (e) {
        var n = r('tI3i'),
          i = /\.textClipping$/,
          o = { 'text/plain': !0, 'text/html': !0, 'text/rtf': !0 };
        t.exports = function (t, r) {
          var a = 0,
            u = [];
          t.forEach(function (s) {
            !(function (t, r) {
              if (!e.FileReader || (t.type && !(t.type in o)))
                return void r('');
              if ('' === t.type) {
                var a = '';
                return i.test(t.name) && (a = t.name.replace(i, '')), void r(a);
              }
              var u = new FileReader();
              (u.onload = function () {
                var t = u.result;
                'string' !== typeof t && n(!1), r(t);
              }),
                (u.onerror = function () {
                  r('');
                }),
                u.readAsText(t);
            })(s, function (e) {
              a++,
                e && u.push(e.slice(0, 5e3)),
                a == t.length && r(u.join('\r'));
            });
          });
        };
      }.call(this, r('lpmq')));
    },
    VeLA: function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('ooRk'),
        a = r('b+nQ'),
        u = r('IbSy'),
        s = r('YM28'),
        c = r('krsZ'),
        f = r('IDEf'),
        l = r('YSZ8'),
        p = r('+521'),
        h = r('ZUd0'),
        d = r('3Hp6'),
        g = r('fNVm'),
        y = d.List,
        v = d.Record,
        _ = d.Repeat,
        m = d.Map,
        b = d.OrderedMap,
        w = v({
          entityMap: null,
          blockMap: null,
          selectionBefore: null,
          selectionAfter: null,
        }),
        S = h('draft_tree_data_support') ? s : u,
        k = (function (t) {
          var e, r;
          function i() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var u = i.prototype;
          return (
            (u.getEntityMap = function () {
              return c;
            }),
            (u.getBlockMap = function () {
              return this.get('blockMap');
            }),
            (u.getSelectionBefore = function () {
              return this.get('selectionBefore');
            }),
            (u.getSelectionAfter = function () {
              return this.get('selectionAfter');
            }),
            (u.getBlockForKey = function (t) {
              return this.getBlockMap().get(t);
            }),
            (u.getKeyBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t;
                })
                .skip(1)
                .first();
            }),
            (u.getKeyAfter = function (t) {
              return this.getBlockMap()
                .keySeq()
                .skipUntil(function (e) {
                  return e === t;
                })
                .skip(1)
                .first();
            }),
            (u.getBlockAfter = function (t) {
              return this.getBlockMap()
                .skipUntil(function (e, r) {
                  return r === t;
                })
                .skip(1)
                .first();
            }),
            (u.getBlockBefore = function (t) {
              return this.getBlockMap()
                .reverse()
                .skipUntil(function (e, r) {
                  return r === t;
                })
                .skip(1)
                .first();
            }),
            (u.getBlocksAsArray = function () {
              return this.getBlockMap().toArray();
            }),
            (u.getFirstBlock = function () {
              return this.getBlockMap().first();
            }),
            (u.getLastBlock = function () {
              return this.getBlockMap().last();
            }),
            (u.getPlainText = function (t) {
              return this.getBlockMap()
                .map(function (t) {
                  return t ? t.getText() : '';
                })
                .join(t || '\n');
            }),
            (u.getLastCreatedEntityKey = function () {
              return c.__getLastCreatedEntityKey();
            }),
            (u.hasText = function () {
              var t = this.getBlockMap();
              return (
                t.size > 1 ||
                escape(t.first().getText()).replace(/%u200B/g, '').length > 0
              );
            }),
            (u.createEntity = function (t, e, r) {
              return c.__create(t, e, r), this;
            }),
            (u.mergeEntityData = function (t, e) {
              return c.__mergeData(t, e), this;
            }),
            (u.replaceEntityData = function (t, e) {
              return c.__replaceData(t, e), this;
            }),
            (u.addEntity = function (t) {
              return c.__add(t), this;
            }),
            (u.getEntity = function (t) {
              return c.__get(t);
            }),
            (u.getAllEntities = function () {
              return c.__getAll();
            }),
            (u.loadWithEntities = function (t) {
              return c.__loadWithEntities(t);
            }),
            (i.createFromBlockArray = function (t, e) {
              var r = Array.isArray(t) ? t : t.contentBlocks,
                n = o.createFromArray(r),
                a = n.isEmpty() ? new f() : f.createEmpty(n.first().getKey());
              return new i({
                blockMap: n,
                entityMap: e || c,
                selectionBefore: a,
                selectionAfter: a,
              });
            }),
            (i.createFromText = function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : /\r\n?|\n/g,
                r = t.split(e),
                n = r.map(function (t) {
                  return (
                    (t = g(t)),
                    new S({
                      key: l(),
                      text: t,
                      type: 'unstyled',
                      characterList: y(_(a.EMPTY, t.length)),
                    })
                  );
                });
              return i.createFromBlockArray(n);
            }),
            (i.fromJS = function (t) {
              return new i(
                n({}, t, {
                  blockMap: b(t.blockMap).map(i.createContentBlockFromJS),
                  selectionBefore: new f(t.selectionBefore),
                  selectionAfter: new f(t.selectionAfter),
                })
              );
            }),
            (i.createContentBlockFromJS = function (t) {
              var e = t.characterList;
              return new S(
                n({}, t, {
                  data: m(t.data),
                  characterList:
                    null != e
                      ? y(
                          (Array.isArray(e) ? e : p(e)).map(function (t) {
                            return a.fromJS(t);
                          })
                        )
                      : void 0,
                })
              );
            }),
            i
          );
        })(w);
      t.exports = k;
    },
    Vwge: function (t, e, r) {
      'use strict';
      var n = r('1xkk'),
        i = r('iN4q'),
        o = r('2KzS');
      t.exports = function (t, e) {
        var r = e.currentTarget.ownerDocument;
        if (!Boolean(t.props.preserveSelectionOnBlur) && o(r) === r.body) {
          var a = r.defaultView.getSelection(),
            u = t.editor;
          1 === a.rangeCount &&
            i(u, a.anchorNode) &&
            i(u, a.focusNode) &&
            a.removeAllRanges();
        }
        var s = t._latestEditorState,
          c = s.getSelection();
        if (c.getHasFocus()) {
          var f = c.set('hasFocus', !1);
          t.props.onBlur && t.props.onBlur(e),
            t.update(n.acceptSelection(s, f));
        }
      };
    },
    W6iK: function (t, e, r) {
      'use strict';
      var n = r('tI3i'),
        i = /[\uD800-\uDFFF]/;
      function o(t) {
        return 55296 <= t && t <= 57343;
      }
      function a(t) {
        return i.test(t);
      }
      function u(t, e) {
        return 1 + o(t.charCodeAt(e));
      }
      function s(t, e, r) {
        if (((e = e || 0), (r = void 0 === r ? 1 / 0 : r || 0), !a(t)))
          return t.substr(e, r);
        var n = t.length;
        if (n <= 0 || e > n || r <= 0) return '';
        var i = 0;
        if (e > 0) {
          for (; e > 0 && i < n; e--) i += u(t, i);
          if (i >= n) return '';
        } else if (e < 0) {
          for (i = n; e < 0 && 0 < i; e++) i -= u(t, i - 1);
          i < 0 && (i = 0);
        }
        var o = n;
        if (r < n) for (o = i; r > 0 && o < n; r--) o += u(t, o);
        return t.substring(i, o);
      }
      var c = {
        getCodePoints: function (t) {
          for (var e = [], r = 0; r < t.length; r += u(t, r))
            e.push(t.codePointAt(r));
          return e;
        },
        getUTF16Length: u,
        hasSurrogateUnit: a,
        isCodeUnitInSurrogateRange: o,
        isSurrogatePair: function (t, e) {
          if (((0 <= e && e < t.length) || n(!1), e + 1 === t.length))
            return !1;
          var r = t.charCodeAt(e),
            i = t.charCodeAt(e + 1);
          return 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343;
        },
        strlen: function (t) {
          if (!a(t)) return t.length;
          for (var e = 0, r = 0; r < t.length; r += u(t, r)) e++;
          return e;
        },
        substring: function (t, e, r) {
          (e = e || 0) < 0 && (e = 0),
            (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
          var n = Math.abs(r - e);
          return s(t, (e = e < r ? e : r), n);
        },
        substr: s,
      };
      t.exports = c;
    },
    WbhC: function (t, e, r) {
      'use strict';
      var n = r('IchF');
      t.exports = function (t, e) {
        var r = e.ownerDocument.defaultView.getSelection(),
          i = r.anchorNode,
          o = r.anchorOffset,
          a = r.focusNode,
          u = r.focusOffset;
        return 0 === r.rangeCount || null == i || null == a
          ? {
              selectionState: t.getSelection().set('hasFocus', !1),
              needsRecovery: !1,
            }
          : n(t, e, i, o, a, u);
      };
    },
    WmAF: function (t, e, r) {
      'use strict';
      var n = r('3Hp6').Map;
      t.exports = function (t, e, r) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          u = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === o;
            })
            .concat(n([[o, a.get(o)]]))
            .map(r);
        return t.merge({
          blockMap: a.merge(u),
          selectionBefore: e,
          selectionAfter: e,
        });
      };
    },
    'X+Re': function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return 'handled' === t || !0 === t;
      };
    },
    XPEN: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r('TNQl'),
        u = r('ERkP'),
        s = r('tI3i'),
        c = r('hGHS'),
        f = r('1+m/').setDraftEditorSelection,
        l = (function (t) {
          var e, r;
          function l() {
            for (
              var e, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              o(
                i((e = t.call.apply(t, [this].concat(n)) || this)),
                'leaf',
                void 0
              ),
              e
            );
          }
          (r = t),
            ((e = l).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var p = l.prototype;
          return (
            (p._setSelection = function () {
              var t = this.props.selection;
              if (null != t && t.getHasFocus()) {
                var e = this.props,
                  r = e.block,
                  n = e.start,
                  i = e.text,
                  o = r.getKey(),
                  a = n + i.length;
                if (t.hasEdgeWithin(o, n, a)) {
                  var u = this.leaf;
                  u || s(!1);
                  var l,
                    p = u.firstChild;
                  p || s(!1),
                    p.nodeType === Node.TEXT_NODE
                      ? (l = p)
                      : c(p)
                      ? (l = u)
                      : (l = p.firstChild) || s(!1),
                    f(t, l, o, n, a);
                }
              }
            }),
            (p.shouldComponentUpdate = function (t) {
              var e = this.leaf;
              return (
                e || s(!1),
                e.textContent !== t.text ||
                  t.styleSet !== this.props.styleSet ||
                  t.forceSelection
              );
            }),
            (p.componentDidUpdate = function () {
              this._setSelection();
            }),
            (p.componentDidMount = function () {
              this._setSelection();
            }),
            (p.render = function () {
              var t = this,
                e = this.props.block,
                r = this.props.text;
              r.endsWith('\n') && this.props.isLast && (r += '\n');
              var i = this.props,
                o = i.customStyleMap,
                s = i.customStyleFn,
                c = i.offsetKey,
                f = i.styleSet,
                l = f.reduce(function (t, e) {
                  var r = {},
                    i = o[e];
                  return (
                    void 0 !== i &&
                      t.textDecoration !== i.textDecoration &&
                      (r.textDecoration = [t.textDecoration, i.textDecoration]
                        .join(' ')
                        .trim()),
                    n(t, i, r)
                  );
                }, {});
              if (s) {
                var p = s(f, e);
                l = n(l, p);
              }
              return u.createElement(
                'span',
                {
                  'data-offset-key': c,
                  ref: function (e) {
                    return (t.leaf = e);
                  },
                  style: l,
                },
                u.createElement(a, null, r)
              );
            }),
            l
          );
        })(u.Component);
      t.exports = l;
    },
    XjoI: function (t, e, r) {
      'use strict';
      var n = r('OJbI'),
        i = r('XPEN'),
        o = r('b//S'),
        a = r('3Hp6'),
        u = r('ERkP'),
        s = r('2Wwg'),
        c =
          (a.List,
          (function (t) {
            var e, r;
            function a() {
              return t.apply(this, arguments) || this;
            }
            return (
              (r = t),
              ((e = a).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = r),
              (a.prototype.render = function () {
                var t = this.props,
                  e = t.block,
                  r = t.contentState,
                  a = t.customStyleFn,
                  c = t.customStyleMap,
                  f = t.decorator,
                  l = t.direction,
                  p = t.forceSelection,
                  h = t.hasSelection,
                  d = t.selection,
                  g = t.tree,
                  y = e.getKey(),
                  v = e.getText(),
                  _ = g.size - 1,
                  m =
                    this.props.children ||
                    g
                      .map(function (t, s) {
                        var g = t.get('decoratorKey'),
                          m = t.get('leaves'),
                          b = m.size - 1,
                          w = m
                            .map(function (t, r) {
                              var n = o.encode(y, s, r),
                                f = t.get('start'),
                                l = t.get('end');
                              return u.createElement(i, {
                                key: n,
                                offsetKey: n,
                                block: e,
                                start: f,
                                selection: h ? d : null,
                                forceSelection: p,
                                text: v.slice(f, l),
                                styleSet: e.getInlineStyleAt(f),
                                customStyleMap: c,
                                customStyleFn: a,
                                isLast: g === _ && r === b,
                              });
                            })
                            .toArray();
                        return g && f
                          ? u.createElement(n, {
                              block: e,
                              children: w,
                              contentState: r,
                              decorator: f,
                              decoratorKey: g,
                              direction: l,
                              leafSet: t,
                              text: v,
                              key: s,
                            })
                          : w;
                      })
                      .toArray();
                return u.createElement(
                  'div',
                  {
                    'data-offset-key': o.encode(y, 0, 0),
                    className: s({
                      'public/DraftStyleDefault/block': !0,
                      'public/DraftStyleDefault/ltr': 'LTR' === l,
                      'public/DraftStyleDefault/rtl': 'RTL' === l,
                    }),
                  },
                  m
                );
              }),
              a
            );
          })(u.Component));
      t.exports = c;
    },
    Y5pQ: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        var e = t || '',
          r = arguments.length;
        if (r > 1)
          for (var n = 1; n < r; n++) {
            var i = arguments[n];
            i && (e = (e ? e + ' ' : '') + i);
          }
        return e;
      };
    },
    YITQ: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return s;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('BRyZ'),
        a = r.n(o),
        u = i.a.createElement;
      function s(t) {
        var e,
          r = t.children;
        switch (t.level) {
          case 2:
            e = a.a.level2;
            break;
          case 3:
            e = a.a.level3;
            break;
          case 4:
            e = a.a.level4;
            break;
          default:
            e = a.a.level2;
        }
        return u('h2', { className: e }, r);
      }
    },
    YM28: function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('AL/+'),
        o = r('3Hp6'),
        a = o.List,
        u = o.Map,
        s = o.OrderedSet,
        c = o.Record,
        f = o.Repeat,
        l = s(),
        p = {
          parent: null,
          characterList: a(),
          data: u(),
          depth: 0,
          key: '',
          text: '',
          type: 'unstyled',
          children: a(),
          prevSibling: null,
          nextSibling: null,
        },
        h = function (t, e) {
          return t.getStyle() === e.getStyle();
        },
        d = function (t, e) {
          return t.getEntity() === e.getEntity();
        },
        g = function (t) {
          if (!t) return t;
          var e = t.characterList,
            r = t.text;
          return r && !e && (t.characterList = a(f(n.EMPTY, r.length))), t;
        },
        y = (function (t) {
          var e, r;
          function n() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p;
            return t.call(this, g(e)) || this;
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var o = n.prototype;
          return (
            (o.getKey = function () {
              return this.get('key');
            }),
            (o.getType = function () {
              return this.get('type');
            }),
            (o.getText = function () {
              return this.get('text');
            }),
            (o.getCharacterList = function () {
              return this.get('characterList');
            }),
            (o.getLength = function () {
              return this.getText().length;
            }),
            (o.getDepth = function () {
              return this.get('depth');
            }),
            (o.getData = function () {
              return this.get('data');
            }),
            (o.getInlineStyleAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getStyle() : l;
            }),
            (o.getEntityAt = function (t) {
              var e = this.getCharacterList().get(t);
              return e ? e.getEntity() : null;
            }),
            (o.getChildKeys = function () {
              return this.get('children');
            }),
            (o.getParentKey = function () {
              return this.get('parent');
            }),
            (o.getPrevSiblingKey = function () {
              return this.get('prevSibling');
            }),
            (o.getNextSiblingKey = function () {
              return this.get('nextSibling');
            }),
            (o.findStyleRanges = function (t, e) {
              i(this.getCharacterList(), h, t, e);
            }),
            (o.findEntityRanges = function (t, e) {
              i(this.getCharacterList(), d, t, e);
            }),
            n
          );
        })(c(p));
      t.exports = y;
    },
    YSZ8: function (t, e, r) {
      'use strict';
      var n = {},
        i = Math.pow(2, 24);
      t.exports = function () {
        for (var t; void 0 === t || n.hasOwnProperty(t) || !isNaN(+t); )
          t = Math.floor(Math.random() * i).toString(32);
        return (n[t] = !0), t;
      };
    },
    Yed0: function (t, e, r) {
      'use strict';
      var n,
        i = r('tDjQ'),
        o = r('3Hp6'),
        a = r('hF1F'),
        u = o.OrderedMap,
        s = {
          getDirectionMap: function (t, e) {
            n ? n.reset() : (n = new i());
            var r = t.getBlockMap(),
              s = r.valueSeq().map(function (t) {
                return a(n).getDirection(t.getText());
              }),
              c = u(r.keySeq().zip(s));
            return null != e && o.is(e, c) ? e : c;
          },
        };
      t.exports = s;
    },
    ZFda: function (t, e, r) {
      'use strict';
      var n = r('1xkk'),
        i = r('W6iK'),
        o = r('1AUG'),
        a = r('4aXP');
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = t.getCurrentContent(),
              n = e.getAnchorKey(),
              a = e.getAnchorOffset(),
              u = r.getBlockForKey(n).getText()[a - 1];
            return o(t, u ? i.getUTF16Length(u, 0) : 1);
          },
          'backward'
        );
        if (e === t.getCurrentContent()) return t;
        var r = t.getSelection();
        return n.push(
          t,
          e.set('selectionBefore', r),
          r.isCollapsed() ? 'backspace-character' : 'remove-range'
        );
      };
    },
    ZUd0: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return (
          !('undefined' === typeof window || !window.__DRAFT_GKX) &&
          !!window.__DRAFT_GKX[t]
        );
      };
    },
    ZlNV: function (t, e, r) {
      'use strict';
      var n = (function () {
        function t(t) {
          var e, r, n;
          (n = void 0),
            (r = '_uri') in (e = this)
              ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[r] = n),
            (this._uri = t);
        }
        return (
          (t.prototype.toString = function () {
            return this._uri;
          }),
          t
        );
      })();
      t.exports = n;
    },
    ZxmY: function (t, e, r) {
      'use strict';
      var n = r('b+nQ');
      t.exports = function (t, e, r, i) {
        for (var o = e, a = t.getCharacterList(); o < r; )
          (a = a.set(o, n.applyEntity(a.get(o), i))), o++;
        return t.set('characterList', a);
      };
    },
    'b+nQ': function (t, e, r) {
      'use strict';
      var n = r('3Hp6'),
        i = n.Map,
        o = n.OrderedSet,
        a = n.Record,
        u = o(),
        s = { style: u, entity: null },
        c = (function (t) {
          var e, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var a = n.prototype;
          return (
            (a.getStyle = function () {
              return this.get('style');
            }),
            (a.getEntity = function () {
              return this.get('entity');
            }),
            (a.hasStyle = function (t) {
              return this.getStyle().includes(t);
            }),
            (n.applyStyle = function (t, e) {
              var r = t.set('style', t.getStyle().add(e));
              return n.create(r);
            }),
            (n.removeStyle = function (t, e) {
              var r = t.set('style', t.getStyle().remove(e));
              return n.create(r);
            }),
            (n.applyEntity = function (t, e) {
              var r = t.getEntity() === e ? t : t.set('entity', e);
              return n.create(r);
            }),
            (n.create = function (t) {
              if (!t) return f;
              var e = i({ style: u, entity: null }).merge(t),
                r = l.get(e);
              if (r) return r;
              var o = new n(e);
              return (l = l.set(e, o)), o;
            }),
            (n.fromJS = function (t) {
              var e = t.style,
                r = t.entity;
              return new n({
                style: Array.isArray(e) ? o(e) : e,
                entity: Array.isArray(r) ? o(r) : r,
              });
            }),
            n
          );
        })(a(s)),
        f = new c(),
        l = i([[i(s), f]]);
      (c.EMPTY = f), (t.exports = c);
    },
    'b//S': function (t, e, r) {
      'use strict';
      var n = '-',
        i = {
          encode: function (t, e, r) {
            return t + n + e + n + r;
          },
          decode: function (t) {
            var e = t.split(n).reverse(),
              r = e[0],
              i = e[1];
            return {
              blockKey: e.slice(2).reverse().join(n),
              decoratorKey: parseInt(i, 10),
              leafKey: parseInt(r, 10),
            };
          },
        };
      t.exports = i;
    },
    bdcm: function (t, e, r) {
      'use strict';
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              i(t, e, r[e]);
            });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var o = r('YSZ8'),
        a = r('tI3i'),
        u = function (t) {
          if (!t || !t.type) return !1;
          var e = t.type;
          return 'unordered-list-item' === e || 'ordered-list-item' === e;
        },
        s = {
          fromRawTreeStateToRawState: function (t) {
            var e = t.blocks,
              r = [];
            return (
              Array.isArray(e) || a(!1),
              Array.isArray(e) && e.length
                ? ((function (t, e) {
                    for (var r = [].concat(t).reverse(); r.length; ) {
                      var n = r.pop();
                      e(n);
                      var i = n.children;
                      Array.isArray(i) || a(!1),
                        (r = r.concat([].concat(i.reverse())));
                    }
                  })(e, function (t) {
                    var e = n({}, t);
                    (u(t) &&
                      ((e.depth = e.depth || 0),
                      (function (t) {
                        Array.isArray(t.children) &&
                          (t.children = t.children.map(function (e) {
                            return e.type === t.type
                              ? n({}, e, { depth: (t.depth || 0) + 1 })
                              : e;
                          }));
                      })(t),
                      null != t.children && t.children.length > 0)) ||
                      (delete e.children, r.push(e));
                  }),
                  (t.blocks = r),
                  n({}, t, { blocks: r }))
                : t
            );
          },
          fromRawStateToRawTreeState: function (t) {
            var e = [],
              r = [];
            return (
              t.blocks.forEach(function (t) {
                var i = u(t),
                  a = t.depth || 0,
                  s = n({}, t, { children: [] });
                if (i) {
                  var c = r[0];
                  if (null == c && 0 === a) e.push(s);
                  else if (null == c || c.depth < a - 1) {
                    var f = {
                      key: o(),
                      text: '',
                      depth: a - 1,
                      type: t.type,
                      children: [],
                      entityRanges: [],
                      inlineStyleRanges: [],
                    };
                    r.unshift(f),
                      1 === a ? e.push(f) : null != c && c.children.push(f),
                      f.children.push(s);
                  } else if (c.depth === a - 1) c.children.push(s);
                  else {
                    for (; null != c && c.depth >= a; ) r.shift(), (c = r[0]);
                    a > 0 ? c.children.push(s) : e.push(s);
                  }
                } else e.push(s);
              }),
              n({}, t, { blocks: e })
            );
          },
        };
      t.exports = s;
    },
    cQcL: function (t, e, r) {
      'use strict';
      var n = /\r\n?|\n/g;
      t.exports = function (t) {
        return t.split(n);
      };
    },
    cxan: function (t, e, r) {
      'use strict';
      function n() {
        return (n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    dVQN: function (t, e, r) {
      'use strict';
      var n = r('R0VQ');
      t.exports = function (t) {
        var e = t.getSelection();
        if (!e.rangeCount) return null;
        var r = e.getRangeAt(0),
          i = n(r),
          o = i.top,
          a = i.right,
          u = i.bottom,
          s = i.left;
        return 0 === o && 0 === a && 0 === u && 0 === s ? null : i;
      };
    },
    djSO: function (t, e, r) {
      'use strict';
      var n = r('/jhs'),
        i = r('CqlG'),
        o = r('tBqf'),
        a = new RegExp('\r\n', 'g'),
        u = { 'text/rtf': 1, 'text/html': 1 };
      function s(t) {
        if ('file' == t.kind) return t.getAsFile();
      }
      var c = (function () {
        function t(t) {
          (this.data = t), (this.types = t.types ? i(t.types) : []);
        }
        var e = t.prototype;
        return (
          (e.isRichText = function () {
            return (
              !(!this.getHTML() || !this.getText()) ||
              (!this.isImage() &&
                this.types.some(function (t) {
                  return u[t];
                }))
            );
          }),
          (e.getText = function () {
            var t;
            return (
              this.data.getData &&
                (this.types.length
                  ? -1 != this.types.indexOf('text/plain') &&
                    (t = this.data.getData('text/plain'))
                  : (t = this.data.getData('Text'))),
              t ? t.replace(a, '\n') : null
            );
          }),
          (e.getHTML = function () {
            if (this.data.getData) {
              if (!this.types.length) return this.data.getData('Text');
              if (-1 != this.types.indexOf('text/html'))
                return this.data.getData('text/html');
            }
          }),
          (e.isLink = function () {
            return this.types.some(function (t) {
              return (
                -1 != t.indexOf('Url') ||
                -1 != t.indexOf('text/uri-list') ||
                t.indexOf('text/x-moz-url')
              );
            });
          }),
          (e.getLink = function () {
            return this.data.getData
              ? -1 != this.types.indexOf('text/x-moz-url')
                ? this.data.getData('text/x-moz-url').split('\n')[0]
                : -1 != this.types.indexOf('text/uri-list')
                ? this.data.getData('text/uri-list')
                : this.data.getData('url')
              : null;
          }),
          (e.isImage = function () {
            var t = this.types.some(function (t) {
              return -1 != t.indexOf('application/x-moz-file');
            });
            if (t) return !0;
            for (var e = this.getFiles(), r = 0; r < e.length; r++) {
              var i = e[r].type;
              if (!n.isImage(i)) return !1;
            }
            return !0;
          }),
          (e.getCount = function () {
            return this.data.hasOwnProperty('items')
              ? this.data.items.length
              : this.data.hasOwnProperty('mozItemCount')
              ? this.data.mozItemCount
              : this.data.files
              ? this.data.files.length
              : null;
          }),
          (e.getFiles = function () {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .map(s)
                  .filter(o.thatReturnsArgument)
              : this.data.files
              ? Array.prototype.slice.call(this.data.files)
              : [];
          }),
          (e.hasFiles = function () {
            return this.getFiles().length > 0;
          }),
          t
        );
      })();
      t.exports = c;
    },
    e59y: function (t, e, r) {
      'use strict';
      var n = r('RXrk').notEmptyKey;
      function i(t, e) {
        return n(e) && 'MUTABLE' === t.__get(e).getMutability() ? e : null;
      }
      t.exports = function (t, e) {
        var r;
        if (e.isCollapsed()) {
          var n = e.getAnchorKey(),
            o = e.getAnchorOffset();
          return o > 0
            ? (r = t.getBlockForKey(n).getEntityAt(o - 1)) !==
              t.getBlockForKey(n).getEntityAt(o)
              ? null
              : i(t.getEntityMap(), r)
            : null;
        }
        var a = e.getStartKey(),
          u = e.getStartOffset(),
          s = t.getBlockForKey(a);
        return (
          (r = u === s.getLength() ? null : s.getEntityAt(u)),
          i(t.getEntityMap(), r)
        );
      };
    },
    euSu: function (t, e, r) {
      'use strict';
      var n = /-(.)/g;
      t.exports = function (t) {
        return t.replace(n, function (t, e) {
          return e.toUpperCase();
        });
      };
    },
    fNVm: function (t, e, r) {
      'use strict';
      var n = new RegExp('\r', 'g');
      t.exports = function (t) {
        return t.replace(n, '');
      };
    },
    fNrL: function (t, e, r) {
      'use strict';
      var n = r('PrWI');
      t.exports = function (t, e) {
        t._latestEditorState.getSelection().isCollapsed()
          ? e.preventDefault()
          : t.setClipboard(n(t._latestEditorState));
      };
    },
    fpFo: function (t, e, r) {
      'use strict';
      var n = r('z0XV'),
        i = r('7002'),
        o = r('b//S'),
        a = r('1xkk'),
        u = r('ObfX'),
        s = r('rim0'),
        c = r('DuSR'),
        f = r('KqX8'),
        l = r('WbhC'),
        p = r('e59y'),
        h = r('hF1F'),
        d = s.isBrowser('IE'),
        g = !1,
        y = !1,
        v = null;
      var _ = {
        onCompositionStart: function (t) {
          (y = !0),
            (function (t) {
              v || (v = new n(f(t))).start();
            })(t);
        },
        onCompositionEnd: function (t) {
          (g = !1),
            (y = !1),
            setTimeout(function () {
              g || _.resolveComposition(t);
            }, 20);
        },
        onSelect: c,
        onKeyDown: function (t, e) {
          if (!y) return _.resolveComposition(t), void t._onKeyDown(e);
          (e.which !== u.RIGHT && e.which !== u.LEFT) || e.preventDefault();
        },
        onKeyPress: function (t, e) {
          e.which === u.RETURN && e.preventDefault();
        },
        resolveComposition: function (t) {
          if (!y) {
            var e = h(v).stopAndFlushMutations();
            (v = null), (g = !0);
            var r = a.set(t._latestEditorState, { inCompositionMode: !1 });
            if ((t.exitCurrentMode(), e.size)) {
              var n = r.getCurrentContent();
              e.forEach(function (t, e) {
                var u = o.decode(e),
                  s = u.blockKey,
                  c = u.decoratorKey,
                  f = u.leafKey,
                  l = r.getBlockTree(s).getIn([c, 'leaves', f]),
                  h = l.start,
                  d = l.end,
                  g = r
                    .getSelection()
                    .merge({
                      anchorKey: s,
                      focusKey: s,
                      anchorOffset: h,
                      focusOffset: d,
                      isBackward: !1,
                    }),
                  y = p(n, g),
                  v = n.getBlockForKey(s).getInlineStyleAt(h);
                (n = i.replaceText(n, g, t, v, y)),
                  (r = a.set(r, { currentContent: n }));
              });
              var u = l(r, f(t)).selectionState;
              t.restoreEditorDOM();
              var s = d ? a.forceSelection(r, u) : a.acceptSelection(r, u);
              t.update(a.push(s, n, 'insert-characters'));
            } else t.update(r);
          }
        },
      };
      t.exports = _;
    },
    gIIS: function (t, e, r) {
      (function (t, e) {
        !(function (t, r) {
          'use strict';
          if (!t.setImmediate) {
            var n,
              i = 1,
              o = {},
              a = !1,
              u = t.document,
              s = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (s = s && s.setTimeout ? s : t),
              '[object process]' === {}.toString.call(t.process)
                ? (n = function (t) {
                    e.nextTick(function () {
                      f(t);
                    });
                  })
                : (function () {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        r = t.onmessage;
                      return (
                        (t.onmessage = function () {
                          e = !1;
                        }),
                        t.postMessage('', '*'),
                        (t.onmessage = r),
                        e
                      );
                    }
                  })()
                ? (function () {
                    var e = 'setImmediate$' + Math.random() + '$',
                      r = function (r) {
                        r.source === t &&
                          'string' === typeof r.data &&
                          0 === r.data.indexOf(e) &&
                          f(+r.data.slice(e.length));
                      };
                    t.addEventListener
                      ? t.addEventListener('message', r, !1)
                      : t.attachEvent('onmessage', r),
                      (n = function (r) {
                        t.postMessage(e + r, '*');
                      });
                  })()
                : t.MessageChannel
                ? (function () {
                    var t = new MessageChannel();
                    (t.port1.onmessage = function (t) {
                      f(t.data);
                    }),
                      (n = function (e) {
                        t.port2.postMessage(e);
                      });
                  })()
                : u && 'onreadystatechange' in u.createElement('script')
                ? (function () {
                    var t = u.documentElement;
                    n = function (e) {
                      var r = u.createElement('script');
                      (r.onreadystatechange = function () {
                        f(e),
                          (r.onreadystatechange = null),
                          t.removeChild(r),
                          (r = null);
                      }),
                        t.appendChild(r);
                    };
                  })()
                : (n = function (t) {
                    setTimeout(f, 0, t);
                  }),
              (s.setImmediate = function (t) {
                'function' !== typeof t && (t = new Function('' + t));
                for (
                  var e = new Array(arguments.length - 1), r = 0;
                  r < e.length;
                  r++
                )
                  e[r] = arguments[r + 1];
                var a = { callback: t, args: e };
                return (o[i] = a), n(i), i++;
              }),
              (s.clearImmediate = c);
          }
          function c(t) {
            delete o[t];
          }
          function f(t) {
            if (a) setTimeout(f, 0, t);
            else {
              var e = o[t];
              if (e) {
                a = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      r = t.args;
                    switch (r.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(r[0]);
                        break;
                      case 2:
                        e(r[0], r[1]);
                        break;
                      case 3:
                        e(r[0], r[1], r[2]);
                        break;
                      default:
                        e.apply(void 0, r);
                    }
                  })(e);
                } finally {
                  c(t), (a = !1);
                }
              }
            }
          }
        })(
          'undefined' === typeof self
            ? 'undefined' === typeof t
              ? this
              : t
            : self
        );
      }.call(this, r('lpmq'), r('F63i')));
    },
    gLP3: function (t, e, r) {
      'use strict';
      t.exports = function (t, e) {
        t.setMode('drag'), e.preventDefault();
      };
    },
    gUTI: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return (
          !(!t || !t.ownerDocument) &&
          (t.ownerDocument.defaultView
            ? t instanceof t.ownerDocument.defaultView.HTMLElement
            : t instanceof HTMLElement)
        );
      };
    },
    gZn9: function (t, e, r) {
      'use strict';
      var n = r('laB8'),
        i = r('ObfX'),
        o = r('rim0'),
        a = o.isPlatform('Mac OS X'),
        u = a && o.isBrowser('Firefox < 29'),
        s = n.hasCommandModifier,
        c = n.isCtrlKeyCommand;
      function f(t) {
        return (a && t.altKey) || c(t);
      }
      t.exports = function (t) {
        switch (t.keyCode) {
          case 66:
            return s(t) ? 'bold' : null;
          case 68:
            return c(t) ? 'delete' : null;
          case 72:
            return c(t) ? 'backspace' : null;
          case 73:
            return s(t) ? 'italic' : null;
          case 74:
            return s(t) ? 'code' : null;
          case 75:
            return a && c(t) ? 'secondary-cut' : null;
          case 77:
          case 79:
            return c(t) ? 'split-block' : null;
          case 84:
            return a && c(t) ? 'transpose-characters' : null;
          case 85:
            return s(t) ? 'underline' : null;
          case 87:
            return a && c(t) ? 'backspace-word' : null;
          case 89:
            return c(t) ? (a ? 'secondary-paste' : 'redo') : null;
          case 90:
            return (
              (function (t) {
                return s(t) ? (t.shiftKey ? 'redo' : 'undo') : null;
              })(t) || null
            );
          case i.RETURN:
            return 'split-block';
          case i.DELETE:
            return (function (t) {
              return !a && t.shiftKey ? null : f(t) ? 'delete-word' : 'delete';
            })(t);
          case i.BACKSPACE:
            return (function (t) {
              return s(t) && a
                ? 'backspace-to-start-of-line'
                : f(t)
                ? 'backspace-word'
                : 'backspace';
            })(t);
          case i.LEFT:
            return u && s(t) ? 'move-selection-to-start-of-block' : null;
          case i.RIGHT:
            return u && s(t) ? 'move-selection-to-end-of-block' : null;
          default:
            return null;
        }
      };
    },
    glMO: function (t, e, r) {
      'use strict';
      var n = r('1xkk'),
        i = r('rim0');
      t.exports = function (t, e) {
        var r = t._latestEditorState,
          o = r.getSelection();
        if (!o.getHasFocus()) {
          var a = o.set('hasFocus', !0);
          t.props.onFocus && t.props.onFocus(e),
            i.isBrowser('Chrome < 60.0.3081.0')
              ? t.update(n.forceSelection(r, a))
              : t.update(n.acceptSelection(r, a));
        }
      };
    },
    gpZN: function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('hDHP'),
        a = r('hF1F'),
        u = null,
        s = {
          cut: function (t) {
            var e = t.getCurrentContent(),
              r = t.getSelection(),
              s = null;
            if (r.isCollapsed()) {
              var c = r.getAnchorKey(),
                f = e.getBlockForKey(c).getLength();
              if (f === r.getAnchorOffset()) {
                var l = e.getKeyAfter(c);
                if (null == l) return t;
                s = r.set('focusKey', l).set('focusOffset', 0);
              } else s = r.set('focusOffset', f);
            } else s = r;
            (s = a(s)), (u = o(e, s));
            var p = n.removeRange(e, s, 'forward');
            return p === e ? t : i.push(t, p, 'remove-range');
          },
          paste: function (t) {
            if (!u) return t;
            var e = n.replaceWithFragment(
              t.getCurrentContent(),
              t.getSelection(),
              u
            );
            return i.push(t, e, 'insert-fragment');
          },
        };
      t.exports = s;
    },
    hDHP: function (t, e, r) {
      'use strict';
      var n = r('n1lM'),
        i = r('/L11');
      t.exports = function (t, e) {
        var r = e.getStartKey(),
          o = e.getStartOffset(),
          a = e.getEndKey(),
          u = e.getEndOffset(),
          s = i(t, e).getBlockMap(),
          c = s.keySeq(),
          f = c.indexOf(r),
          l = c.indexOf(a) + 1;
        return n(
          s.slice(f, l).map(function (t, e) {
            var n = t.getText(),
              i = t.getCharacterList();
            return r === a
              ? t.merge({ text: n.slice(o, u), characterList: i.slice(o, u) })
              : e === r
              ? t.merge({ text: n.slice(o), characterList: i.slice(o) })
              : e === a
              ? t.merge({ text: n.slice(0, u), characterList: i.slice(0, u) })
              : t;
          })
        );
      };
    },
    hF1F: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        if (null != t) return t;
        throw new Error('Got unexpected null or undefined');
      };
    },
    hGHS: function (t, e, r) {
      'use strict';
      var n = r('13UR');
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'BR' === t.nodeName;
      };
    },
    hgxY: function (t, e, r) {
      'use strict';
      var n = r('b+nQ'),
        i = r('3Hp6').List;
      t.exports = function (t, e) {
        var r = t.map(function (t, r) {
          var i = e[r];
          return n.create({ style: t, entity: i });
        });
        return i(r);
      };
    },
    iN4q: function (t, e, r) {
      'use strict';
      var n = r('MIqs');
      t.exports = function t(e, r) {
        return (
          !(!e || !r) &&
          (e === r ||
            (!n(e) &&
              (n(r)
                ? t(e, r.parentNode)
                : 'contains' in e
                ? e.contains(r)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(r)))))
        );
      };
    },
    iogJ: function (t, e, r) {
      'use strict';
      var n = '\\s|(?![_])' + r('lTVW').getPunctuation(),
        i = new RegExp(
          '^(?:' +
            n +
            ')*(?:' +
            "['\u2018\u2019]|(?!" +
            n +
            ').)*(?:(?!' +
            n +
            ').)'
        ),
        o = new RegExp(
          '(?:(?!' +
            n +
            ').)(?:' +
            "['\u2018\u2019]|(?!" +
            n +
            ').)*(?:' +
            n +
            ')*$'
        );
      function a(t, e) {
        var r = e ? o.exec(t) : i.exec(t);
        return r ? r[0] : t;
      }
      var u = {
        getBackward: function (t) {
          return a(t, !0);
        },
        getForward: function (t) {
          return a(t, !1);
        },
      };
      t.exports = u;
    },
    jvFD: function (t, e, r) {
      t.exports = r('KeDb');
    },
    k5bp: function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('/LAw'),
        a = r('PrWI'),
        u = r('7MNd'),
        s = r('kZJE');
      t.exports = function (t, e) {
        var r,
          c = t._latestEditorState,
          f = c.getSelection(),
          l = e.target;
        if (f.isCollapsed()) e.preventDefault();
        else {
          if (s(l)) {
            var p = l;
            r = u(o.getScrollParent(p));
          }
          var h = a(c);
          t.setClipboard(h),
            t.setMode('cut'),
            setTimeout(function () {
              t.restoreEditorDOM(r),
                t.exitCurrentMode(),
                t.update(
                  (function (t) {
                    var e = n.removeRange(
                      t.getCurrentContent(),
                      t.getSelection(),
                      'forward'
                    );
                    return i.push(t, e, 'remove-range');
                  })(c)
                );
            }, 0);
        }
      };
    },
    kZJE: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        if (!t || !('ownerDocument' in t)) return !1;
        if ('ownerDocument' in t) {
          var e = t;
          if (!e.ownerDocument.defaultView) return e instanceof Node;
          if (e instanceof e.ownerDocument.defaultView.Node) return !0;
        }
        return !1;
      };
    },
    krsZ: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('or4R'),
        o = r('3Hp6'),
        a = r('tI3i'),
        u = r('OTOR'),
        s = (0, o.Map)(),
        c = u();
      function f(t, e) {
        console.warn(
          'WARNING: ' +
            t +
            ' will be deprecated soon!\nPlease use "' +
            e +
            '" instead.'
        );
      }
      var l = {
        getLastCreatedEntityKey: function () {
          return (
            f(
              'DraftEntity.getLastCreatedEntityKey',
              'contentState.getLastCreatedEntityKey'
            ),
            l.__getLastCreatedEntityKey()
          );
        },
        create: function (t, e, r) {
          return (
            f('DraftEntity.create', 'contentState.createEntity'),
            l.__create(t, e, r)
          );
        },
        add: function (t) {
          return f('DraftEntity.add', 'contentState.addEntity'), l.__add(t);
        },
        get: function (t) {
          return f('DraftEntity.get', 'contentState.getEntity'), l.__get(t);
        },
        __getAll: function () {
          return s;
        },
        __loadWithEntities: function (t) {
          (s = t), (c = u());
        },
        mergeData: function (t, e) {
          return (
            f('DraftEntity.mergeData', 'contentState.mergeEntityData'),
            l.__mergeData(t, e)
          );
        },
        replaceData: function (t, e) {
          return (
            f('DraftEntity.replaceData', 'contentState.replaceEntityData'),
            l.__replaceData(t, e)
          );
        },
        __getLastCreatedEntityKey: function () {
          return c;
        },
        __create: function (t, e, r) {
          return l.__add(new i({ type: t, mutability: e, data: r || {} }));
        },
        __add: function (t) {
          return (c = u()), (s = s.set(c, t)), c;
        },
        __get: function (t) {
          var e = s.get(t);
          return e || a(!1), e;
        },
        __mergeData: function (t, e) {
          var r = l.__get(t),
            i = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(r);
                'function' === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    })
                  )),
                  i.forEach(function (e) {
                    n(t, e, r[e]);
                  });
              }
              return t;
            })({}, r.getData(), e),
            o = r.set('data', i);
          return (s = s.set(t, o)), o;
        },
        __replaceData: function (t, e) {
          var r = l.__get(t).set('data', e);
          return (s = s.set(t, r)), r;
        },
      };
      t.exports = l;
    },
    kuaq: function (t, e, r) {
      'use strict';
      var n = /([A-Z])/g;
      t.exports = function (t) {
        return t.replace(n, '-$1').toLowerCase();
      };
    },
    l2Ky: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              u(t, e, r[e]);
            });
        }
        return t;
      }
      function u(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var s = r('XjoI'),
        c = r('b//S'),
        f = r('ERkP'),
        l = r('O+2R'),
        p = r('/LAw'),
        h = r('CtAg'),
        d = r('7MNd'),
        g = r('BTrg'),
        y = r('3Hp6'),
        v = r('tI3i'),
        _ = r('gUTI'),
        m =
          (y.List,
          function (t, e) {
            return t.getAnchorKey() === e || t.getFocusKey() === e;
          }),
        b = function (t, e) {
          var r = e.get(t.getType()) || e.get('unstyled'),
            n = r.wrapper;
          return {
            Element: r.element || e.get('unstyled').element,
            wrapperTemplate: n,
          };
        },
        w = function (t, e) {
          var r = e(t);
          return r
            ? {
                CustomComponent: r.component,
                customProps: r.props,
                customEditable: r.editable,
              }
            : {};
        },
        S = function (t, e, r, n, i, o) {
          var u = {
              'data-block': !0,
              'data-editor': e,
              'data-offset-key': r,
              key: t.getKey(),
              ref: o,
            },
            s = n(t);
          return (
            s && (u.className = s),
            void 0 !== i.customEditable &&
              (u = a({}, u, {
                contentEditable: i.customEditable,
                suppressContentEditableWarning: !0,
              })),
            u
          );
        },
        k = (function (t) {
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), i = 0;
              i < r;
              i++
            )
              n[i] = arguments[i];
            return (
              u(
                o((e = t.call.apply(t, [this].concat(n)) || this)),
                'wrapperRef',
                f.createRef()
              ),
              e
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var y = n.prototype;
          return (
            (y.shouldComponentUpdate = function (t) {
              var e = this.props,
                r = e.block,
                n = e.direction,
                i = e.tree,
                o = !r.getChildKeys().isEmpty(),
                a =
                  r !== t.block ||
                  i !== t.tree ||
                  n !== t.direction ||
                  (m(t.selection, t.block.getKey()) && t.forceSelection);
              return o || a;
            }),
            (y.componentDidMount = function () {
              var t = this.props.selection,
                e = t.getEndKey();
              if (t.getHasFocus() && e === this.props.block.getKey()) {
                var r = this.wrapperRef.current;
                if (r) {
                  var n,
                    i = p.getScrollParent(r),
                    o = d(i);
                  if (i === window) {
                    var a = h(r);
                    (n = a.y + a.height - g().height) > 0 &&
                      window.scrollTo(o.x, o.y + n + 10);
                  } else {
                    _(r) || v(!1);
                    var u = r;
                    (n =
                      u.offsetHeight + u.offsetTop - (i.offsetHeight + o.y)) >
                      0 && l.setTop(i, l.getTop(i) + n + 10);
                  }
                }
              }
            }),
            (y.render = function () {
              var t = this,
                e = this.props,
                r = e.block,
                o = e.blockRenderMap,
                u = e.blockRendererFn,
                l = e.blockStyleFn,
                p = e.contentState,
                h = e.decorator,
                d = e.editorKey,
                g = e.editorState,
                y = e.customStyleFn,
                v = e.customStyleMap,
                _ = e.direction,
                k = e.forceSelection,
                x = e.selection,
                E = e.tree,
                O = null;
              r.children.size &&
                (O = r.children.reduce(function (e, r) {
                  var i = c.encode(r, 0, 0),
                    s = p.getBlockForKey(r),
                    h = w(s, u),
                    y = h.CustomComponent || n,
                    v = b(s, o),
                    _ = v.Element,
                    m = v.wrapperTemplate,
                    k = S(s, d, i, l, h, null),
                    x = a({}, t.props, {
                      tree: g.getBlockTree(r),
                      blockProps: h.customProps,
                      offsetKey: i,
                      block: s,
                    });
                  return (
                    e.push(f.createElement(_, k, f.createElement(y, x))),
                    !m ||
                      (function (t, e) {
                        var r = t.getNextSiblingKey();
                        return (
                          !!r && e.getBlockForKey(r).getType() === t.getType()
                        );
                      })(s, p) ||
                      (function (t, e, r) {
                        var n = [],
                          i = !0,
                          o = !1,
                          a = void 0;
                        try {
                          for (
                            var u, s = r.reverse()[Symbol.iterator]();
                            !(i = (u = s.next()).done);
                            i = !0
                          ) {
                            var l = u.value;
                            if (l.type !== e) break;
                            n.push(l);
                          }
                        } catch (d) {
                          (o = !0), (a = d);
                        } finally {
                          try {
                            i || null == s.return || s.return();
                          } finally {
                            if (o) throw a;
                          }
                        }
                        r.splice(r.indexOf(n[0]), n.length + 1);
                        var p = n.reverse(),
                          h = p[0].key;
                        r.push(
                          f.cloneElement(
                            t,
                            {
                              key: ''.concat(h, '-wrap'),
                              'data-offset-key': c.encode(h, 0, 0),
                            },
                            p
                          )
                        );
                      })(m, _, e),
                    e
                  );
                }, []));
              var C = r.getKey(),
                D = c.encode(C, 0, 0),
                M = w(r, u),
                I = M.CustomComponent,
                K =
                  null != I
                    ? f.createElement(
                        I,
                        i({}, this.props, {
                          tree: g.getBlockTree(C),
                          blockProps: M.customProps,
                          offsetKey: D,
                          block: r,
                        })
                      )
                    : f.createElement(s, {
                        block: r,
                        children: O,
                        contentState: p,
                        customStyleFn: y,
                        customStyleMap: v,
                        decorator: h,
                        direction: _,
                        forceSelection: k,
                        hasSelection: m(x, C),
                        selection: x,
                        tree: E,
                      });
              if (r.getParentKey()) return K;
              var A = b(r, o).Element,
                T = S(r, d, D, l, M, this.wrapperRef);
              return f.createElement(A, T, K);
            }),
            n
          );
        })(f.Component);
      t.exports = k;
    },
    lTVW: function (t, e, r) {
      'use strict';
      t.exports = {
        getPunctuation: function () {
          return '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf]';
        },
      };
    },
    laB8: function (t, e, r) {
      'use strict';
      var n = r('rim0'),
        i = r('7mA2'),
        o = n.isPlatform('Mac OS X'),
        a = {
          isCtrlKeyCommand: function (t) {
            return !!t.ctrlKey && !t.altKey;
          },
          isOptionKeyCommand: function (t) {
            return o && t.altKey;
          },
          usesMacOSHeuristics: function () {
            return o;
          },
          hasCommandModifier: function (t) {
            return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t);
          },
          isSoftNewlineEvent: i,
        };
      t.exports = a;
    },
    lpmq: function (t, e) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function('return this')();
      } catch (n) {
        'object' === typeof window && (r = window);
      }
      t.exports = r;
    },
    'mTn+': function (t, e, r) {
      'use strict';
      var n = r('IvBP'),
        i = r('W6iK').strlen;
      t.exports = function (t, e) {
        var r = [];
        return (
          t.findEntityRanges(
            function (t) {
              return !!t.getEntity();
            },
            function (o, a) {
              var u = t.getText(),
                s = t.getEntityAt(o);
              r.push({
                offset: i(u.slice(0, o)),
                length: i(u.slice(o, a)),
                key: Number(e[n.stringify(s)]),
              });
            }
          ),
          r
        );
      };
    },
    mVQ8: function (t, e, r) {
      'use strict';
      var n = r('13UR');
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'IMG' === t.nodeName;
      };
    },
    n09L: function (t, e, r) {
      'use strict';
      var n = r('tI3i'),
        i = 'LTR',
        o = null;
      function a(t) {
        return t === i || 'RTL' === t;
      }
      function u(t) {
        return a(t) || n(!1), t === i ? 'ltr' : 'rtl';
      }
      function s(t) {
        o = t;
      }
      var c = {
        NEUTRAL: 'NEUTRAL',
        LTR: i,
        RTL: 'RTL',
        isStrong: a,
        getHTMLDir: u,
        getHTMLDirIfDifferent: function (t, e) {
          return a(t) || n(!1), a(e) || n(!1), t === e ? null : u(t);
        },
        setGlobalDir: s,
        initGlobalDir: function () {
          s(i);
        },
        getGlobalDir: function () {
          return o || this.initGlobalDir(), o || n(!1), o;
        },
      };
      t.exports = c;
    },
    n1lM: function (t, e, r) {
      'use strict';
      var n = r('YM28'),
        i = r('YSZ8'),
        o = r('3Hp6').OrderedMap;
      t.exports = function (t) {
        return t.first() instanceof n
          ? (function (t) {
              var e,
                r = {};
              return o(
                t
                  .withMutations(function (t) {
                    t.forEach(function (n, o) {
                      var a = n.getKey(),
                        u = n.getNextSiblingKey(),
                        s = n.getPrevSiblingKey(),
                        c = n.getChildKeys(),
                        f = n.getParentKey(),
                        l = i();
                      if (
                        ((r[a] = l),
                        u &&
                          (t.get(u)
                            ? t.setIn([u, 'prevSibling'], l)
                            : t.setIn([a, 'nextSibling'], null)),
                        s &&
                          (t.get(s)
                            ? t.setIn([s, 'nextSibling'], l)
                            : t.setIn([a, 'prevSibling'], null)),
                        f && t.get(f))
                      ) {
                        var p = t.get(f).getChildKeys();
                        t.setIn(
                          [f, 'children'],
                          p.set(p.indexOf(n.getKey()), l)
                        );
                      } else t.setIn([a, 'parent'], null), e && (t.setIn([e.getKey(), 'nextSibling'], l), t.setIn([a, 'prevSibling'], r[e.getKey()])), (e = t.get(a));
                      c.forEach(function (e) {
                        t.get(e)
                          ? t.setIn([e, 'parent'], l)
                          : t.setIn(
                              [a, 'children'],
                              n.getChildKeys().filter(function (t) {
                                return t !== e;
                              })
                            );
                      });
                    });
                  })
                  .toArray()
                  .map(function (t) {
                    return [r[t.getKey()], t.set('key', r[t.getKey()])];
                  })
              );
            })(t)
          : (function (t) {
              return o(
                t.toArray().map(function (t) {
                  var e = i();
                  return [e, t.set('key', e)];
                })
              );
            })(t);
      };
    },
    naKV: function (t, e, r) {
      'use strict';
      t.exports = {
        BOLD: { fontWeight: 'bold' },
        CODE: { fontFamily: 'monospace', wordWrap: 'break-word' },
        ITALIC: { fontStyle: 'italic' },
        STRIKETHROUGH: { textDecoration: 'line-through' },
        UNDERLINE: { textDecoration: 'underline' },
      };
    },
    njFt: function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('laB8'),
        a = r('ObfX'),
        u = r('gpZN'),
        s = r('rim0'),
        c = r('X+Re'),
        f = r('M6Be'),
        l = r('0Gcc'),
        p = r('t4Yh'),
        h = r('9000'),
        d = r('8SYF'),
        g = r('ybp+'),
        y = r('ZFda'),
        v = r('9XMQ'),
        _ = r('njy0'),
        m = r('BsqC'),
        b = o.isOptionKeyCommand,
        w = s.isBrowser('Chrome');
      t.exports = function (t, e) {
        var r = e.which,
          o = t._latestEditorState;
        function s(r) {
          var n = t.props[r];
          return !!n && (n(e), !0);
        }
        switch (r) {
          case a.RETURN:
            if (
              (e.preventDefault(),
              t.props.handleReturn && c(t.props.handleReturn(e, o)))
            )
              return;
            break;
          case a.ESC:
            if ((e.preventDefault(), s('onEscape'))) return;
            break;
          case a.TAB:
            if (s('onTab')) return;
            break;
          case a.UP:
            if (s('onUpArrow')) return;
            break;
          case a.RIGHT:
            if (s('onRightArrow')) return;
            break;
          case a.DOWN:
            if (s('onDownArrow')) return;
            break;
          case a.LEFT:
            if (s('onLeftArrow')) return;
            break;
          case a.SPACE:
            w && b(e) && e.preventDefault();
        }
        var S = t.props.keyBindingFn(e);
        if (null != S && '' !== S)
          if ('undo' !== S) {
            if (
              (e.preventDefault(),
              !t.props.handleKeyCommand ||
                !c(t.props.handleKeyCommand(S, o, e.timeStamp)))
            ) {
              var k = (function (t, e, r) {
                switch (t) {
                  case 'redo':
                    return i.redo(e);
                  case 'delete':
                    return v(e);
                  case 'delete-word':
                    return p(e);
                  case 'backspace':
                    return y(e);
                  case 'backspace-word':
                    return l(e);
                  case 'backspace-to-start-of-line':
                    return f(e, r);
                  case 'split-block':
                    return h(e);
                  case 'transpose-characters':
                    return _(e);
                  case 'move-selection-to-start-of-block':
                    return g(e);
                  case 'move-selection-to-end-of-block':
                    return d(e);
                  case 'secondary-cut':
                    return u.cut(e);
                  case 'secondary-paste':
                    return u.paste(e);
                  default:
                    return e;
                }
              })(S, o, e);
              k !== o && t.update(k);
            }
          } else m(e, o, t.update);
        else if (r === a.SPACE && w && b(e)) {
          var x = n.replaceText(
            o.getCurrentContent(),
            o.getSelection(),
            '\xa0'
          );
          t.update(i.push(o, x, 'insert-characters'));
        }
      };
    },
    njy0: function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('hDHP');
      t.exports = function (t) {
        var e = t.getSelection();
        if (!e.isCollapsed()) return t;
        var r = e.getAnchorOffset();
        if (0 === r) return t;
        var a,
          u,
          s = e.getAnchorKey(),
          c = t.getCurrentContent(),
          f = c.getBlockForKey(s).getLength();
        if (f <= 1) return t;
        r === f
          ? ((a = e.set('anchorOffset', r - 1)), (u = e))
          : (u = (a = e.set('focusOffset', r + 1)).set('anchorOffset', r + 1));
        var l = o(c, a),
          p = n.removeRange(c, a, 'backward'),
          h = p.getSelectionAfter(),
          d = h.getAnchorOffset() - 1,
          g = h.merge({ anchorOffset: d, focusOffset: d }),
          y = n.replaceWithFragment(p, g, l),
          v = i.push(t, y, 'insert-fragment');
        return i.acceptSelection(v, u);
      };
    },
    oNIj: function (t, e, r) {
      'use strict';
      var n = r('1xkk');
      t.exports = function (t, e) {
        t.setMode('composite'),
          t.update(n.set(t._latestEditorState, { inCompositionMode: !0 })),
          t._onCompositionStart(e);
      };
    },
    ooRk: function (t, e, r) {
      'use strict';
      var n = r('3Hp6').OrderedMap,
        i = {
          createFromArray: function (t) {
            return n(
              t.map(function (t) {
                return [t.getKey(), t];
              })
            );
          },
        };
      t.exports = i;
    },
    or4R: function (t, e, r) {
      'use strict';
      var n = (function (t) {
        var e, r;
        function n() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var i = n.prototype;
        return (
          (i.getType = function () {
            return this.get('type');
          }),
          (i.getMutability = function () {
            return this.get('mutability');
          }),
          (i.getData = function () {
            return this.get('data');
          }),
          n
        );
      })(
        (0, r('3Hp6').Record)({
          type: 'TOKEN',
          mutability: 'IMMUTABLE',
          data: Object,
        })
      );
      t.exports = n;
    },
    'pW+J': function (t, e, r) {
      'use strict';
      var n = r('3Hp6'),
        i = r('wu3P'),
        o = r('tI3i'),
        a = n.Repeat;
      t.exports = function (t, e, r, n) {
        e.isCollapsed() || o(!1);
        var u = null;
        if ((null != r && (u = r.length), null == u || 0 === u)) return t;
        var s = t.getBlockMap(),
          c = e.getStartKey(),
          f = e.getStartOffset(),
          l = s.get(c),
          p = l.getText(),
          h = l.merge({
            text: p.slice(0, f) + r + p.slice(f, l.getLength()),
            characterList: i(l.getCharacterList(), a(n, u).toList(), f),
          }),
          d = f + u;
        return t.merge({
          blockMap: s.set(c, h),
          selectionAfter: e.merge({ anchorOffset: d, focusOffset: d }),
        });
      };
    },
    pWxA: function (t, e, r) {
      'use strict';
      function n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    qUKZ: function (t, e, r) {
      'use strict';
      var n = r('tI3i'),
        i = /\./,
        o = /\|\|/,
        a = /\s+\-\s+/,
        u = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        s = /^(\d*)(.*)/;
      function c(t, e) {
        var r = t.split(o);
        return r.length > 1
          ? r.some(function (t) {
              return b.contains(t, e);
            })
          : (function (t, e) {
              var r = t.split(a);
              if (((r.length > 0 && r.length <= 2) || n(!1), 1 === r.length))
                return f(r[0], e);
              var i = r[0],
                o = r[1];
              return (g(i) && g(o)) || n(!1), f('>=' + i, e) && f('<=' + o, e);
            })((t = r[0].trim()), e);
      }
      function f(t, e) {
        if ('' === (t = t.trim())) return !0;
        var r = e.split(i),
          n = h(t),
          o = n.modifier,
          a = n.rangeComponents;
        switch (o) {
          case '<':
            return l(r, a);
          case '<=':
            return (function (t, e) {
              var r = m(t, e);
              return -1 === r || 0 === r;
            })(r, a);
          case '>=':
            return p(r, a);
          case '>':
            return 1 === m(r, a);
          case '~':
          case '~>':
            return (function (t, e) {
              var r = e.slice(),
                n = e.slice();
              n.length > 1 && n.pop();
              var i = n.length - 1,
                o = parseInt(n[i], 10);
              d(o) && (n[i] = o + 1 + '');
              return p(t, r) && l(t, n);
            })(r, a);
          default:
            return (function (t, e) {
              return 0 === m(t, e);
            })(r, a);
        }
      }
      function l(t, e) {
        return -1 === m(t, e);
      }
      function p(t, e) {
        var r = m(t, e);
        return 1 === r || 0 === r;
      }
      function h(t) {
        var e = t.split(i),
          r = e[0].match(u);
        return (
          r || n(!1),
          { modifier: r[1], rangeComponents: [r[2]].concat(e.slice(1)) }
        );
      }
      function d(t) {
        return !isNaN(t) && isFinite(t);
      }
      function g(t) {
        return !h(t).modifier;
      }
      function y(t, e) {
        for (var r = t.length; r < e; r++) t[r] = '0';
      }
      function v(t, e) {
        var r = t.match(s)[1],
          n = e.match(s)[1],
          i = parseInt(r, 10),
          o = parseInt(n, 10);
        return d(i) && d(o) && i !== o ? _(i, o) : _(t, e);
      }
      function _(t, e) {
        return typeof t !== typeof e && n(!1), t > e ? 1 : t < e ? -1 : 0;
      }
      function m(t, e) {
        for (
          var r = (function (t, e) {
              y((t = t.slice()), (e = e.slice()).length);
              for (var r = 0; r < e.length; r++) {
                var n = e[r].match(/^[x*]$/i);
                if (
                  n &&
                  ((e[r] = t[r] = '0'), '*' === n[0] && r === e.length - 1)
                )
                  for (var i = r; i < t.length; i++) t[i] = '0';
              }
              return y(e, t.length), [t, e];
            })(t, e),
            n = r[0],
            i = r[1],
            o = 0;
          o < i.length;
          o++
        ) {
          var a = v(n[o], i[o]);
          if (a) return a;
        }
        return 0;
      }
      var b = {
        contains: function (t, e) {
          return c(t.trim(), e.trim());
        },
      };
      t.exports = b;
    },
    'r5/r': function (t, e, r) {
      'use strict';
      var n = r('7002'),
        i = r('1xkk'),
        o = r('rim0'),
        a = r('e59y'),
        u = r('X+Re'),
        s = r('ADYu'),
        c = r('hF1F'),
        f = r('z0MJ'),
        l = o.isBrowser('Firefox');
      function p(t, e, r, o, a) {
        var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
        return i.push(t, u, 'insert-characters', a);
      }
      t.exports = function (t, e) {
        void 0 !== t._pendingStateFromBeforeInput &&
          (t.update(t._pendingStateFromBeforeInput),
          (t._pendingStateFromBeforeInput = void 0));
        var r = t._latestEditorState,
          n = e.data;
        if (n)
          if (
            t.props.handleBeforeInput &&
            u(t.props.handleBeforeInput(n, r, e.timeStamp))
          )
            e.preventDefault();
          else {
            var o = r.getSelection(),
              h = o.getStartOffset(),
              d = o.getAnchorKey();
            if (!o.isCollapsed())
              return (
                e.preventDefault(),
                void t.update(
                  p(
                    r,
                    n,
                    r.getCurrentInlineStyle(),
                    a(r.getCurrentContent(), r.getSelection()),
                    !0
                  )
                )
              );
            var g,
              y = p(
                r,
                n,
                r.getCurrentInlineStyle(),
                a(r.getCurrentContent(), r.getSelection()),
                !1
              ),
              v = !1;
            if ((v || (v = s(t._latestCommittedEditorState)), !v)) {
              var _ = r.getBlockTree(d),
                m = y.getBlockTree(d);
              v =
                _.size !== m.size ||
                _.zip(m).some(function (t) {
                  var e = t[0],
                    r = t[1],
                    i = e.get('start'),
                    o = i + (i >= h ? n.length : 0),
                    a = e.get('end'),
                    u = a + (a >= h ? n.length : 0),
                    s = r.get('start'),
                    c = r.get('end'),
                    f = r.get('decoratorKey');
                  return (
                    e.get('decoratorKey') !== f ||
                    e.get('leaves').size !== r.get('leaves').size ||
                    o !== s ||
                    u !== c ||
                    (null != f && c - s !== a - i)
                  );
                });
            }
            if (
              (v || ((g = n), (v = l && ("'" == g || '/' == g))),
              v ||
                (v =
                  c(y.getDirectionMap()).get(d) !==
                  c(r.getDirectionMap()).get(d)),
              v)
            )
              return (
                e.preventDefault(),
                (y = i.set(y, { forceSelection: !0 })),
                void t.update(y)
              );
            (y = i.set(y, { nativelyRenderedContent: y.getCurrentContent() })),
              (t._pendingStateFromBeforeInput = y),
              f(function () {
                void 0 !== t._pendingStateFromBeforeInput &&
                  (t.update(t._pendingStateFromBeforeInput),
                  (t._pendingStateFromBeforeInput = void 0));
              });
          }
      };
    },
    rim0: function (t, e, r) {
      'use strict';
      var n = r('NGtv'),
        i = r('qUKZ'),
        o = r('zgZY'),
        a = r('vqxm');
      function u(t, e, r, n) {
        if (t === r) return !0;
        if (!r.startsWith(t)) return !1;
        var o = r.slice(t.length);
        return !!e && ((o = n ? n(o) : o), i.contains(o, e));
      }
      function s(t) {
        return 'Windows' === n.platformName ? t.replace(/^\s*NT/, '') : t;
      }
      var c = {
        isBrowser: function (t) {
          return u(n.browserName, n.browserFullVersion, t);
        },
        isBrowserArchitecture: function (t) {
          return u(n.browserArchitecture, null, t);
        },
        isDevice: function (t) {
          return u(n.deviceName, null, t);
        },
        isEngine: function (t) {
          return u(n.engineName, n.engineVersion, t);
        },
        isPlatform: function (t) {
          return u(n.platformName, n.platformFullVersion, t, s);
        },
        isPlatformArchitecture: function (t) {
          return u(n.platformArchitecture, null, t);
        },
      };
      t.exports = o(c, a);
    },
    sRHE: function (t, e, r) {
      'use strict';
      function n(t) {
        return (n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    sWKX: function (t, e, r) {
      'use strict';
      t.exports = {
        getRemovalRange: function (t, e, r, n, i) {
          var o = r.split(' ');
          o = o.map(function (t, e) {
            if ('forward' === i) {
              if (e > 0) return ' ' + t;
            } else if (e < o.length - 1) return t + ' ';
            return t;
          });
          for (var a, u = n, s = null, c = null, f = 0; f < o.length; f++) {
            if (t < (a = u + o[f].length) && u < e)
              null !== s || (s = u), (c = a);
            else if (null !== s) break;
            u = a;
          }
          var l = n + r.length,
            p = s === n,
            h = c === l;
          return (
            ((!p && h) || (p && !h)) &&
              ('forward' === i ? c !== l && c++ : s !== n && s--),
            { start: s, end: c }
          );
        },
      };
    },
    stkZ: function (t, e, r) {
      'use strict';
      var n = r('13UR');
      t.exports = function (t) {
        return !(!t || !t.ownerDocument) && n(t) && 'A' === t.nodeName;
      };
    },
    t4Yh: function (t, e, r) {
      'use strict';
      var n = r('iogJ'),
        i = r('1xkk'),
        o = r('MzOC'),
        a = r('4aXP');
      t.exports = function (t) {
        var e = a(
          t,
          function (t) {
            var e = t.getSelection(),
              r = e.getStartOffset(),
              i = e.getStartKey(),
              a = t.getCurrentContent().getBlockForKey(i).getText().slice(r),
              u = n.getForward(a);
            return o(t, u.length || 1);
          },
          'forward'
        );
        return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
      };
    },
    tBqf: function (t, e, r) {
      'use strict';
      function n(t) {
        return function () {
          return t;
        };
      }
      var i = function () {};
      (i.thatReturns = n),
        (i.thatReturnsFalse = n(!1)),
        (i.thatReturnsTrue = n(!0)),
        (i.thatReturnsNull = n(null)),
        (i.thatReturnsThis = function () {
          return this;
        }),
        (i.thatReturnsArgument = function (t) {
          return t;
        }),
        (t.exports = i);
    },
    tDjQ: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('Fd87'),
        o = r('n09L'),
        a = r('tI3i'),
        u = (function () {
          function t(t) {
            n(this, '_defaultDir', void 0),
              n(this, '_lastDir', void 0),
              t ? o.isStrong(t) || a(!1) : (t = o.getGlobalDir()),
              (this._defaultDir = t),
              this.reset();
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              this._lastDir = this._defaultDir;
            }),
            (e.getDirection = function (t) {
              return (
                (this._lastDir = i.getDirection(t, this._lastDir)),
                this._lastDir
              );
            }),
            t
          );
        })();
      t.exports = u;
    },
    tI3i: function (t, e, r) {
      'use strict';
      var n = function (t) {};
      t.exports = function (t, e) {
        for (
          var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          i[o - 2] = arguments[o];
        if ((n(e), !t)) {
          var a;
          if (void 0 === e)
            a = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var u = 0;
            (a = new Error(
              e.replace(/%s/g, function () {
                return String(i[u++]);
              })
            )).name = 'Invariant Violation';
          }
          throw ((a.framesToPop = 1), a);
        }
      };
    },
    tO3r: function (t, e, r) {
      'use strict';
      var n;
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            n.forEach(function (e) {
              o(t, e, r[e]);
            });
        }
        return t;
      }
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r('b+nQ'),
        u = r('IbSy'),
        s = r('YM28'),
        c = r('VUbk'),
        f = r('krsZ'),
        l = r('ZlNV'),
        p = r('2Wwg'),
        h = r('YSZ8'),
        d = r('GSkh'),
        g = r('ZUd0'),
        y = r('3Hp6'),
        v = y.List,
        _ = y.Map,
        m = y.OrderedSet,
        b = r('stkZ'),
        w = r('hGHS'),
        S = r('gUTI'),
        k = r('mVQ8'),
        x = g('draft_tree_data_support'),
        E = new RegExp('\r', 'g'),
        O = new RegExp('\n', 'g'),
        C = new RegExp('^\n', 'g'),
        D = new RegExp('&nbsp;', 'g'),
        M = new RegExp('&#13;?', 'g'),
        I = new RegExp('&#8203;?', 'g'),
        K = ['bold', 'bolder', '500', '600', '700', '800', '900'],
        A = ['light', 'lighter', 'normal', '100', '200', '300', '400'],
        T = ['className', 'href', 'rel', 'target', 'title'],
        B = ['alt', 'className', 'height', 'src', 'width'],
        R =
          (o((n = {}), p('public/DraftStyleDefault/depth0'), 0),
          o(n, p('public/DraftStyleDefault/depth1'), 1),
          o(n, p('public/DraftStyleDefault/depth2'), 2),
          o(n, p('public/DraftStyleDefault/depth3'), 3),
          o(n, p('public/DraftStyleDefault/depth4'), 4),
          n),
        z = _({
          b: 'BOLD',
          code: 'CODE',
          del: 'STRIKETHROUGH',
          em: 'ITALIC',
          i: 'ITALIC',
          s: 'STRIKETHROUGH',
          strike: 'STRIKETHROUGH',
          strong: 'BOLD',
          u: 'UNDERLINE',
          mark: 'HIGHLIGHT',
        }),
        L = function (t) {
          var e = {};
          return (
            t.mapKeys(function (t, r) {
              var n = [r.element];
              void 0 !== r.aliasedElements &&
                n.push.apply(n, r.aliasedElements),
                n.forEach(function (r) {
                  void 0 === e[r]
                    ? (e[r] = t)
                    : 'string' === typeof e[r]
                    ? (e[r] = [e[r], t])
                    : e[r].push(t);
                });
            }),
            _(e)
          );
        },
        P = function (t) {
          if (S(t) && t.style.fontFamily.includes('monospace')) return 'CODE';
          return null;
        },
        F = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (
            Object.keys(R).some(function (r) {
              t.classList.contains(r) && (e = R[r]);
            }),
            e
          );
        },
        N = function (t) {
          if (!b(t)) return !1;
          var e = t;
          if (
            !e.href ||
            ('http:' !== e.protocol &&
              'https:' !== e.protocol &&
              'mailto:' !== e.protocol &&
              'tel:' !== e.protocol)
          )
            return !1;
          try {
            new l(e.href);
            return !0;
          } catch (r) {
            return !1;
          }
        },
        j = function (t) {
          if (!k(t)) return !1;
          var e = t;
          return !(
            !e.attributes.getNamedItem('src') ||
            !e.attributes.getNamedItem('src').value
          );
        },
        U = function (t, e) {
          if (!S(t)) return e;
          var r = t,
            n = r.style.fontWeight,
            i = r.style.fontStyle,
            o = r.style.textDecoration;
          return e.withMutations(function (t) {
            K.indexOf(n) >= 0
              ? t.add('BOLD')
              : A.indexOf(n) >= 0 && t.remove('BOLD'),
              'italic' === i
                ? t.add('ITALIC')
                : 'normal' === i && t.remove('ITALIC'),
              'underline' === o && t.add('UNDERLINE'),
              'line-through' === o && t.add('STRIKETHROUGH'),
              'none' === o &&
                (t.remove('UNDERLINE'), t.remove('STRIKETHROUGH'));
          });
        },
        q = function (t) {
          return 'ul' === t || 'ol' === t;
        },
        H = (function () {
          function t(t, e) {
            o(this, 'characterList', v()),
              o(this, 'currentBlockType', 'unstyled'),
              o(this, 'currentDepth', 0),
              o(this, 'currentEntity', null),
              o(this, 'currentText', ''),
              o(this, 'wrapper', null),
              o(this, 'blockConfigs', []),
              o(this, 'contentBlocks', []),
              o(this, 'entityMap', f),
              o(this, 'blockTypeMap', void 0),
              o(this, 'disambiguate', void 0),
              this.clear(),
              (this.blockTypeMap = t),
              (this.disambiguate = e);
          }
          var e = t.prototype;
          return (
            (e.clear = function () {
              (this.characterList = v()),
                (this.blockConfigs = []),
                (this.currentBlockType = 'unstyled'),
                (this.currentDepth = 0),
                (this.currentEntity = null),
                (this.currentText = ''),
                (this.entityMap = f),
                (this.wrapper = null),
                (this.contentBlocks = []);
            }),
            (e.addDOMNode = function (t) {
              var e;
              return (
                (this.contentBlocks = []),
                (this.currentDepth = 0),
                (e = this.blockConfigs).push.apply(
                  e,
                  this._toBlockConfigs([t], m())
                ),
                this._trimCurrentText(),
                '' !== this.currentText &&
                  this.blockConfigs.push(this._makeBlockConfig()),
                this
              );
            }),
            (e.getContentBlocks = function () {
              return (
                0 === this.contentBlocks.length &&
                  (x
                    ? this._toContentBlocks(this.blockConfigs)
                    : this._toFlatContentBlocks(this.blockConfigs)),
                { contentBlocks: this.contentBlocks, entityMap: this.entityMap }
              );
            }),
            (e._makeBlockConfig = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = t.key || h(),
                r = i(
                  {
                    key: e,
                    type: this.currentBlockType,
                    text: this.currentText,
                    characterList: this.characterList,
                    depth: this.currentDepth,
                    parent: null,
                    children: v(),
                    prevSibling: null,
                    nextSibling: null,
                    childConfigs: [],
                  },
                  t
                );
              return (
                (this.characterList = v()),
                (this.currentBlockType = 'unstyled'),
                (this.currentText = ''),
                r
              );
            }),
            (e._toBlockConfigs = function (t, e) {
              for (var r = [], n = 0; n < t.length; n++) {
                var i = t[n],
                  o = i.nodeName.toLowerCase();
                if ('body' === o || q(o)) {
                  this._trimCurrentText(),
                    '' !== this.currentText && r.push(this._makeBlockConfig());
                  var a = this.currentDepth,
                    u = this.wrapper;
                  q(o) && ((this.wrapper = o), q(u) && this.currentDepth++),
                    r.push.apply(
                      r,
                      this._toBlockConfigs(Array.from(i.childNodes), e)
                    ),
                    (this.currentDepth = a),
                    (this.wrapper = u);
                } else {
                  var s = this.blockTypeMap.get(o);
                  if (void 0 === s)
                    if ('#text' !== o)
                      if ('br' !== o)
                        if (j(i)) this._addImgNode(i, e);
                        else if (N(i)) this._addAnchorNode(i, r, e);
                        else {
                          var c = e;
                          z.has(o) && (c = c.add(z.get(o))), (c = U(i, c));
                          var f = P(i);
                          null != f && (c = c.add(f)),
                            r.push.apply(
                              r,
                              this._toBlockConfigs(Array.from(i.childNodes), c)
                            );
                        }
                      else this._addBreakNode(i, e);
                    else this._addTextNode(i, e);
                  else {
                    this._trimCurrentText(),
                      '' !== this.currentText &&
                        r.push(this._makeBlockConfig());
                    var l = this.currentDepth,
                      p = this.wrapper;
                    if (
                      ((this.wrapper = 'pre' === o ? 'pre' : this.wrapper),
                      'string' !== typeof s &&
                        (s =
                          this.disambiguate(o, this.wrapper) ||
                          s[0] ||
                          'unstyled'),
                      !x &&
                        S(i) &&
                        ('unordered-list-item' === s ||
                          'ordered-list-item' === s))
                    ) {
                      var d = i;
                      this.currentDepth = F(d, this.currentDepth);
                    }
                    var g = h(),
                      y = this._toBlockConfigs(Array.from(i.childNodes), e);
                    this._trimCurrentText(),
                      r.push(
                        this._makeBlockConfig({
                          key: g,
                          childConfigs: y,
                          type: s,
                        })
                      ),
                      (this.currentDepth = l),
                      (this.wrapper = p);
                  }
                }
              }
              return r;
            }),
            (e._appendText = function (t, e) {
              var r;
              this.currentText += t;
              var n = a.create({ style: e, entity: this.currentEntity });
              this.characterList = (r = this.characterList).push.apply(
                r,
                Array(t.length).fill(n)
              );
            }),
            (e._trimCurrentText = function () {
              var t = this.currentText.length,
                e = t - this.currentText.trimLeft().length,
                r = this.currentText.trimRight().length,
                n = this.characterList.findEntry(function (t) {
                  return null !== t.getEntity();
                });
              (e = void 0 !== n ? Math.min(e, n[0]) : e) >
              (r =
                void 0 !==
                (n = this.characterList.reverse().findEntry(function (t) {
                  return null !== t.getEntity();
                }))
                  ? Math.max(r, t - n[0])
                  : r)
                ? ((this.currentText = ''), (this.characterList = v()))
                : ((this.currentText = this.currentText.slice(e, r)),
                  (this.characterList = this.characterList.slice(e, r)));
            }),
            (e._addTextNode = function (t, e) {
              var r = t.textContent;
              '' === r.trim() && 'pre' !== this.wrapper && (r = ' '),
                'pre' !== this.wrapper &&
                  (r = (r = r.replace(C, '')).replace(O, ' ')),
                this._appendText(r, e);
            }),
            (e._addBreakNode = function (t, e) {
              w(t) && this._appendText('\n', e);
            }),
            (e._addImgNode = function (t, e) {
              if (k(t)) {
                var r = t,
                  n = {};
                B.forEach(function (t) {
                  var e = r.getAttribute(t);
                  e && (n[t] = e);
                }),
                  (this.currentEntity = this.entityMap.__create(
                    'IMAGE',
                    'IMMUTABLE',
                    n
                  )),
                  g('draftjs_fix_paste_for_img')
                    ? 'presentation' !== r.getAttribute('role') &&
                      this._appendText('\ud83d\udcf7', e)
                    : this._appendText('\ud83d\udcf7', e),
                  (this.currentEntity = null);
              }
            }),
            (e._addAnchorNode = function (t, e, r) {
              if (b(t)) {
                var n = t,
                  i = {};
                T.forEach(function (t) {
                  var e = n.getAttribute(t);
                  e && (i[t] = e);
                }),
                  (i.url = new l(n.href).toString()),
                  (this.currentEntity = this.entityMap.__create(
                    'LINK',
                    'MUTABLE',
                    i || {}
                  )),
                  e.push.apply(
                    e,
                    this._toBlockConfigs(Array.from(t.childNodes), r)
                  ),
                  (this.currentEntity = null);
              }
            }),
            (e._toContentBlocks = function (t) {
              for (
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  r = t.length - 1,
                  n = 0;
                n <= r;
                n++
              ) {
                var o = t[n];
                (o.parent = e),
                  (o.prevSibling = n > 0 ? t[n - 1].key : null),
                  (o.nextSibling = n < r ? t[n + 1].key : null),
                  (o.children = v(
                    o.childConfigs.map(function (t) {
                      return t.key;
                    })
                  )),
                  this.contentBlocks.push(new s(i({}, o))),
                  this._toContentBlocks(o.childConfigs, o.key);
              }
            }),
            (e._hoistContainersInBlockConfigs = function (t) {
              var e = this;
              return v(t).flatMap(function (t) {
                return 'unstyled' !== t.type || '' !== t.text
                  ? [t]
                  : e._hoistContainersInBlockConfigs(t.childConfigs);
              });
            }),
            (e._toFlatContentBlocks = function (t) {
              var e = this;
              this._hoistContainersInBlockConfigs(t).forEach(function (t) {
                var r = e._extractTextFromBlockConfigs(t.childConfigs),
                  n = r.text,
                  o = r.characterList;
                e.contentBlocks.push(
                  new u(
                    i({}, t, {
                      text: t.text + n,
                      characterList: t.characterList.concat(o),
                    })
                  )
                );
              });
            }),
            (e._extractTextFromBlockConfigs = function (t) {
              for (var e = t.length - 1, r = '', n = v(), i = 0; i <= e; i++) {
                var o = t[i];
                (r += o.text),
                  (n = n.concat(o.characterList)),
                  '' !== r &&
                    'unstyled' !== o.type &&
                    ((r += '\n'), (n = n.push(n.last())));
                var a = this._extractTextFromBlockConfigs(o.childConfigs);
                (r += a.text), (n = n.concat(a.characterList));
              }
              return { text: r, characterList: n };
            }),
            t
          );
        })();
      t.exports = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
          n = e(
            (t = t
              .trim()
              .replace(E, '')
              .replace(D, ' ')
              .replace(M, '')
              .replace(I, ''))
          );
        if (!n) return null;
        var i = L(r),
          o = function (t, e) {
            return 'li' === t
              ? 'ol' === e
                ? 'ordered-list-item'
                : 'unordered-list-item'
              : null;
          };
        return new H(i, o).addDOMNode(n).getContentBlocks();
      };
    },
    tRbA: function (t, e, r) {
      'use strict';
      var n = r('ERkP'),
        i = r('2Wwg'),
        o = (function (t) {
          var e, r;
          function o() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = o).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var a = o.prototype;
          return (
            (a.shouldComponentUpdate = function (t) {
              return (
                this.props.text !== t.text ||
                this.props.editorState.getSelection().getHasFocus() !==
                  t.editorState.getSelection().getHasFocus()
              );
            }),
            (a.render = function () {
              var t = this.props.editorState.getSelection().getHasFocus(),
                e = i({
                  'public/DraftEditorPlaceholder/root': !0,
                  'public/DraftEditorPlaceholder/hasFocus': t,
                });
              return n.createElement(
                'div',
                { className: e },
                n.createElement(
                  'div',
                  {
                    className: i('public/DraftEditorPlaceholder/inner'),
                    id: this.props.accessibilityID,
                    style: { whiteSpace: 'pre-wrap' },
                  },
                  this.props.text
                )
              );
            }),
            o
          );
        })(n.Component);
      t.exports = o;
    },
    u4Vz: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return c;
      });
      var n = r('ERkP'),
        i = r.n(n),
        o = r('6HWB'),
        a = r.n(o),
        u = r('98Mn'),
        s = i.a.createElement;
      function c() {
        return s(
          'footer',
          { className: a.a.footer },
          'Built with\xa0',
          s('span', { className: a.a.heart }, '\u2764'),
          '\xa0on Planet Earth',
          s(
            'div',
            { className: a.a.emojiAttribution },
            'Emoji art provided free by\xa0',
            s(u.a, { href: 'http://emojione.com/' }, 'Emoji One')
          )
        );
      }
    },
    uJSo: function (t, e, r) {
      'use strict';
      var n = r('YM28'),
        i = r('HdU4'),
        o = r('3Hp6'),
        a = r('tI3i'),
        u = o.OrderedMap,
        s = o.List,
        c = function (t, e, r) {
          if (t) {
            var n = e.get(t);
            n && e.set(t, r(n));
          }
        },
        f = function (t, e, r, n, i) {
          if (!i) return t;
          var o = 'after' === n,
            a = e.getKey(),
            u = r.getKey(),
            f = e.getParentKey(),
            l = e.getNextSiblingKey(),
            p = e.getPrevSiblingKey(),
            h = r.getParentKey(),
            d = o ? r.getNextSiblingKey() : u,
            g = o ? u : r.getPrevSiblingKey();
          return t.withMutations(function (t) {
            c(f, t, function (t) {
              var e = t.getChildKeys();
              return t.merge({ children: e.delete(e.indexOf(a)) });
            }),
              c(p, t, function (t) {
                return t.merge({ nextSibling: l });
              }),
              c(l, t, function (t) {
                return t.merge({ prevSibling: p });
              }),
              c(d, t, function (t) {
                return t.merge({ prevSibling: a });
              }),
              c(g, t, function (t) {
                return t.merge({ nextSibling: a });
              }),
              c(h, t, function (t) {
                var e = t.getChildKeys(),
                  r = e.indexOf(u),
                  n = o ? r + 1 : 0 !== r ? r - 1 : 0,
                  i = e.toArray();
                return i.splice(n, 0, a), t.merge({ children: s(i) });
              }),
              c(a, t, function (t) {
                return t.merge({ nextSibling: d, prevSibling: g, parent: h });
              });
          });
        };
      t.exports = function (t, e, r, o) {
        'replace' === o && a(!1);
        var s = r.getKey(),
          c = e.getKey();
        c === s && a(!1);
        var l = t.getBlockMap(),
          p = e instanceof n,
          h = [e],
          d = l.delete(c);
        p &&
          ((h = []),
          (d = l.withMutations(function (t) {
            var r = e.getNextSiblingKey(),
              n = i(e, t);
            t.toSeq()
              .skipUntil(function (t) {
                return t.getKey() === c;
              })
              .takeWhile(function (t) {
                var e = t.getKey(),
                  i = e === c,
                  o = r && e !== r,
                  a = !r && t.getParentKey() && (!n || e !== n);
                return !!(i || o || a);
              })
              .forEach(function (e) {
                h.push(e), t.delete(e.getKey());
              });
          })));
        var g = d.toSeq().takeUntil(function (t) {
            return t === r;
          }),
          y = d
            .toSeq()
            .skipUntil(function (t) {
              return t === r;
            })
            .skip(1),
          v = h.map(function (t) {
            return [t.getKey(), t];
          }),
          _ = u();
        if ('before' === o) {
          var m = t.getBlockBefore(s);
          m && m.getKey() === e.getKey() && a(!1),
            (_ = g.concat([].concat(v, [[s, r]]), y).toOrderedMap());
        } else if ('after' === o) {
          var b = t.getBlockAfter(s);
          b && b.getKey() === c && a(!1),
            (_ = g.concat([[s, r]].concat(v), y).toOrderedMap());
        }
        return t.merge({
          blockMap: f(_, e, r, o, p),
          selectionBefore: t.getSelectionAfter(),
          selectionAfter: t
            .getSelectionAfter()
            .merge({ anchorKey: c, focusKey: c }),
        });
      };
    },
    udiT: function (t, e, r) {
      'use strict';
      t.exports = function (t, e, r, n) {
        var i = e.getStartKey(),
          o = e.getEndKey(),
          a = t.getBlockMap(),
          u = a
            .toSeq()
            .skipUntil(function (t, e) {
              return e === i;
            })
            .takeUntil(function (t, e) {
              return e === o;
            })
            .concat([[o, a.get(o)]])
            .map(function (t) {
              var e = t.getDepth() + r;
              return (e = Math.max(0, Math.min(e, n))), t.set('depth', e);
            });
        return (
          (a = a.merge(u)),
          t.merge({ blockMap: a, selectionBefore: e, selectionAfter: e })
        );
      };
    },
    vHsC: function (t, e, r) {
      'use strict';
      var n = r('Km8e');
      function i() {
        return (i =
          n ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      var o = r('l2Ky'),
        a = r('b//S'),
        u = r('ERkP'),
        s = r('hF1F'),
        c = (function (t) {
          var e, r;
          function n() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var c = n.prototype;
          return (
            (c.shouldComponentUpdate = function (t) {
              var e = this.props.editorState,
                r = t.editorState;
              if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
              if (
                e.getSelection().getHasFocus() !==
                r.getSelection().getHasFocus()
              )
                return !0;
              var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
              if (
                e === r ||
                (null !== n && r.getCurrentContent() === n) ||
                (i && o)
              )
                return !1;
              var a = e.getCurrentContent(),
                u = r.getCurrentContent(),
                s = e.getDecorator(),
                c = r.getDecorator();
              return i !== o || a !== u || s !== c || r.mustForceSelection();
            }),
            (c.render = function () {
              for (
                var t = this.props,
                  e = t.blockRenderMap,
                  r = t.blockRendererFn,
                  n = t.blockStyleFn,
                  c = t.customStyleMap,
                  f = t.customStyleFn,
                  l = t.editorState,
                  p = t.editorKey,
                  h = t.textDirectionality,
                  d = l.getCurrentContent(),
                  g = l.getSelection(),
                  y = l.mustForceSelection(),
                  v = l.getDecorator(),
                  _ = s(l.getDirectionMap()),
                  m = [],
                  b = d.getBlocksAsArray()[0];
                b;

              ) {
                var w = b.getKey(),
                  S = {
                    blockRenderMap: e,
                    blockRendererFn: r,
                    blockStyleFn: n,
                    contentState: d,
                    customStyleFn: f,
                    customStyleMap: c,
                    decorator: v,
                    editorKey: p,
                    editorState: l,
                    forceSelection: y,
                    selection: g,
                    block: b,
                    direction: h || _.get(w),
                    tree: l.getBlockTree(w),
                  },
                  k = (e.get(b.getType()) || e.get('unstyled')).wrapper;
                m.push({
                  block: u.createElement(o, i({ key: w }, S)),
                  wrapperTemplate: k,
                  key: w,
                  offsetKey: a.encode(w, 0, 0),
                });
                var x = b.getNextSiblingKey();
                b = x ? d.getBlockForKey(x) : null;
              }
              for (var E = [], O = 0; O < m.length; ) {
                var C = m[O];
                if (C.wrapperTemplate) {
                  var D = [];
                  do {
                    D.push(m[O].block), O++;
                  } while (
                    O < m.length &&
                    m[O].wrapperTemplate === C.wrapperTemplate
                  );
                  var M = u.cloneElement(
                    C.wrapperTemplate,
                    { key: C.key + '-wrap', 'data-offset-key': C.offsetKey },
                    D
                  );
                  E.push(M);
                } else E.push(C.block), O++;
              }
              return u.createElement('div', { 'data-contents': 'true' }, E);
            }),
            n
          );
        })(u.Component);
      t.exports = c;
    },
    vYw2: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        return t && t.ownerDocument ? t.ownerDocument : document;
      };
    },
    vqxm: function (t, e, r) {
      'use strict';
      t.exports = function (t) {
        var e = {};
        return function (r) {
          return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r];
        };
      };
    },
    wH9P: function (t, e, r) {
      'use strict';
      var n = r('3Hp6').List,
        i = (function () {
          function t(t) {
            var e, r, n;
            (n = void 0),
              (r = '_decorators') in (e = this)
                ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[r] = n),
              (this._decorators = t.slice());
          }
          var e = t.prototype;
          return (
            (e.getDecorations = function (t, e) {
              var r = Array(t.getText().length).fill(null);
              return (
                this._decorators.forEach(function (n, i) {
                  var o = 0;
                  (0, n.strategy)(
                    t,
                    function (t, e) {
                      (function (t, e, r) {
                        for (var n = e; n < r; n++) if (null != t[n]) return !1;
                        return !0;
                      })(r, t, e) &&
                        (!(function (t, e, r, n) {
                          for (var i = e; i < r; i++) t[i] = n;
                        })(r, t, e, i + '.' + o),
                        o++);
                    },
                    e
                  );
                }),
                n(r)
              );
            }),
            (e.getComponentForKey = function (t) {
              var e = parseInt(t.split('.')[0], 10);
              return this._decorators[e].component;
            }),
            (e.getPropsForKey = function (t) {
              var e = parseInt(t.split('.')[0], 10);
              return this._decorators[e].props;
            }),
            t
          );
        })();
      t.exports = i;
    },
    wu3P: function (t, e, r) {
      'use strict';
      t.exports = function (t, e, r) {
        var n = t;
        if (r === n.count())
          e.forEach(function (t) {
            n = n.push(t);
          });
        else if (0 === r)
          e.reverse().forEach(function (t) {
            n = n.unshift(t);
          });
        else {
          var i = n.slice(0, r),
            o = n.slice(r);
          n = i.concat(e, o).toList();
        }
        return n;
      };
    },
    xJKF: function (t, e, r) {
      'use strict';
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function i(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, u = t[Symbol.iterator]();
                  !(n = (a = u.next()).done) &&
                  (r.push(a.value), !e || r.length !== e);
                  n = !0
                );
              } catch (s) {
                (i = !0), (o = s);
              } finally {
                try {
                  n || null == u.return || u.return();
                } finally {
                  if (i) throw o;
                }
              }
              return r;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ('string' === typeof t) return n(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(t, e)
                  : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      r.d(e, 'a', function () {
        return h;
      });
      var o = r('ERkP'),
        a = r.n(o),
        u = r('jvFD'),
        s = r.n(u),
        c = r('6YQl'),
        f = r.n(c),
        l = a.a.createElement,
        p = [
          [
            ['/plugin/mention', 'Mention'],
            ['/plugin/emoji', 'Emoji'],
            ['/plugin/image', 'Image'],
            ['/plugin/video', 'Video'],
          ],
          [
            ['/plugin/sticker', 'Sticker'],
            ['/plugin/hashtag', 'Hashtag'],
            ['/plugin/inline-toolbar', 'Inline Toolbar'],
            ['/plugin/side-toolbar', 'Side Toolbar'],
          ],
          [
            ['/plugin/static-toolbar', 'Static Toolbar'],
            ['/plugin/undo', 'Undo'],
            ['/plugin/counter', 'Counter'],
            ['/plugin/anchor', 'Anchor'],
            ['/plugin/linkify', 'Linkify'],
          ],
          [
            ['/plugin/focus', 'Focus'],
            ['/plugin/alignment', 'Alignment'],
            ['/plugin/resizeable', 'Resizeable'],
            ['/plugin/drag-n-drop', "Drag'n'Drop"],
            ['/plugin/divider', 'Divider'],
          ],
        ];
      function h() {
        return l(
          'div',
          { className: f.a.pluginsWrapper },
          l(
            'div',
            { className: f.a.wideContainer },
            p.map(function (t, e) {
              return l(
                'ul',
                { className: f.a.plugins, key: e },
                t.map(function (t) {
                  var e = i(t, 2),
                    r = e[0],
                    n = e[1];
                  return l(
                    'li',
                    { className: f.a.plugin, key: r },
                    l(s.a, { href: r }, l('a', { className: f.a.link }, n))
                  );
                })
              );
            })
          ),
          l(
            'div',
            {
              style: {
                textAlign: 'center',
                marginTop: '3rem',
                fontSize: 13,
                color: '#aaa',
              },
            },
            'The documentation currently represents the 4.0.0 release.',
            l('br', null),
            'For troubleshooting please checkout the',
            l(
              'a',
              {
                href:
                  'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/FAQ.md',
                className: f.a.link,
              },
              'FAQ'
            )
          )
        );
      }
    },
    xx4h: function (t, e, r) {
      t.exports = { root: 'Link_root__3rmHn' };
    },
    'ybp+': function (t, e, r) {
      'use strict';
      var n = r('1xkk');
      t.exports = function (t) {
        var e = t.getSelection(),
          r = e.getStartKey();
        return n.set(t, {
          selection: e.merge({
            anchorKey: r,
            anchorOffset: 0,
            focusKey: r,
            focusOffset: 0,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      };
    },
    yzfH: function (t, e, r) {
      'use strict';
      var n = r('ooRk'),
        i = r('YM28'),
        o = r('3Hp6'),
        a = r('wu3P'),
        u = r('tI3i'),
        s = r('n1lM'),
        c = o.List,
        f = function (t, e, r, n, i, o) {
          var u =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : 'REPLACE_WITH_NEW_DATA',
            s = r.get(i),
            c = s.getText(),
            f = s.getCharacterList(),
            l = i,
            p = o + n.getText().length,
            h = null;
          switch (u) {
            case 'MERGE_OLD_DATA_TO_NEW_DATA':
              h = n.getData().merge(s.getData());
              break;
            case 'REPLACE_WITH_NEW_DATA':
              h = n.getData();
          }
          var d = s.getType();
          c && 'unstyled' === d && (d = n.getType());
          var g = s.merge({
            text: c.slice(0, o) + n.getText() + c.slice(o),
            characterList: a(f, n.getCharacterList(), o),
            type: d,
            data: h,
          });
          return t.merge({
            blockMap: r.set(i, g),
            selectionBefore: e,
            selectionAfter: e.merge({
              anchorKey: l,
              anchorOffset: p,
              focusKey: l,
              focusOffset: p,
              isBackward: !1,
            }),
          });
        },
        l = function (t, e, r, o, a, u) {
          var s = r.first() instanceof i,
            f = [],
            l = o.size,
            p = r.get(a),
            h = o.first(),
            d = o.last(),
            g = d.getLength(),
            y = d.getKey(),
            v =
              s && (!p.getChildKeys().isEmpty() || !h.getChildKeys().isEmpty());
          r.forEach(function (t, e) {
            e === a
              ? (v
                  ? f.push(t)
                  : f.push(
                      (function (t, e, r) {
                        var n = t.getText(),
                          i = t.getCharacterList(),
                          o = n.slice(0, e),
                          a = i.slice(0, e),
                          u = r.first();
                        return t.merge({
                          text: o + u.getText(),
                          characterList: a.concat(u.getCharacterList()),
                          type: o ? t.getType() : u.getType(),
                          data: u.getData(),
                        });
                      })(t, u, o)
                    ),
                o.slice(v ? 0 : 1, l - 1).forEach(function (t) {
                  return f.push(t);
                }),
                f.push(
                  (function (t, e, r) {
                    var n = t.getText(),
                      i = t.getCharacterList(),
                      o = n.length,
                      a = n.slice(e, o),
                      u = i.slice(e, o),
                      s = r.last();
                    return s.merge({
                      text: s.getText() + a,
                      characterList: s.getCharacterList().concat(u),
                      data: s.getData(),
                    });
                  })(t, u, o)
                ))
              : f.push(t);
          });
          var _ = n.createFromArray(f);
          return (
            s &&
              (_ = (function (t, e, r, n) {
                return t.withMutations(function (e) {
                  var i = r.getKey(),
                    o = n.getKey(),
                    a = r.getNextSiblingKey(),
                    u = r.getParentKey(),
                    s = (function (t, e) {
                      var r = t.getKey(),
                        n = t,
                        i = [];
                      for (
                        e.get(r) && i.push(r);
                        n && n.getNextSiblingKey();

                      ) {
                        var o = n.getNextSiblingKey();
                        if (!o) break;
                        i.push(o), (n = e.get(o));
                      }
                      return i;
                    })(n, t),
                    f = s[s.length - 1];
                  if (
                    (e.get(o)
                      ? (e.setIn([i, 'nextSibling'], o),
                        e.setIn([o, 'prevSibling'], i))
                      : (e.setIn([i, 'nextSibling'], n.getNextSiblingKey()),
                        e.setIn([n.getNextSiblingKey(), 'prevSibling'], i)),
                    e.setIn([f, 'nextSibling'], a),
                    a && e.setIn([a, 'prevSibling'], f),
                    s.forEach(function (t) {
                      return e.setIn([t, 'parent'], u);
                    }),
                    u)
                  ) {
                    var l = t.get(u).getChildKeys(),
                      p = l.indexOf(i) + 1,
                      h = l.toArray();
                    h.splice.apply(h, [p, 0].concat(s)),
                      e.setIn([u, 'children'], c(h));
                  }
                });
              })(_, 0, p, h)),
            t.merge({
              blockMap: _,
              selectionBefore: e,
              selectionAfter: e.merge({
                anchorKey: y,
                anchorOffset: g,
                focusKey: y,
                focusOffset: g,
                isBackward: !1,
              }),
            })
          );
        };
      t.exports = function (t, e, r) {
        var n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 'REPLACE_WITH_NEW_DATA';
        e.isCollapsed() || u(!1);
        var o = t.getBlockMap(),
          a = s(r),
          c = e.getStartKey(),
          p = e.getStartOffset(),
          h = o.get(c);
        return (
          h instanceof i && (h.getChildKeys().isEmpty() || u(!1)),
          1 === a.size ? f(t, e, o, a.first(), c, p, n) : l(t, e, o, a, c, p)
        );
      };
    },
    z0MJ: function (t, e, r) {
      'use strict';
      (function (e) {
        r('gIIS'), (t.exports = e.setImmediate);
      }.call(this, r('lpmq')));
    },
    z0XV: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var i = r('rim0'),
        o = r('M7w5'),
        a = r('MKsC'),
        u = r('3Hp6'),
        s = r('tI3i'),
        c = r('hF1F'),
        f = u.Map,
        l = {
          subtree: !0,
          characterData: !0,
          childList: !0,
          characterDataOldValue: !1,
          attributes: !1,
        },
        p = i.isBrowser('IE <= 11'),
        h = (function () {
          function t(t) {
            var e = this;
            n(this, 'observer', void 0),
              n(this, 'container', void 0),
              n(this, 'mutations', void 0),
              n(this, 'onCharData', void 0),
              (this.container = t),
              (this.mutations = f());
            var r = a(t);
            r.MutationObserver && !p
              ? (this.observer = new r.MutationObserver(function (t) {
                  return e.registerMutations(t);
                }))
              : (this.onCharData = function (t) {
                  t.target instanceof Node || s(!1),
                    e.registerMutation({
                      type: 'characterData',
                      target: t.target,
                    });
                });
          }
          var e = t.prototype;
          return (
            (e.start = function () {
              this.observer
                ? this.observer.observe(this.container, l)
                : this.container.addEventListener(
                    'DOMCharacterDataModified',
                    this.onCharData
                  );
            }),
            (e.stopAndFlushMutations = function () {
              var t = this.observer;
              t
                ? (this.registerMutations(t.takeRecords()), t.disconnect())
                : this.container.removeEventListener(
                    'DOMCharacterDataModified',
                    this.onCharData
                  );
              var e = this.mutations;
              return (this.mutations = f()), e;
            }),
            (e.registerMutations = function (t) {
              for (var e = 0; e < t.length; e++) this.registerMutation(t[e]);
            }),
            (e.getMutationTextContent = function (t) {
              var e = t.type,
                r = t.target,
                n = t.removedNodes;
              if ('characterData' === e) {
                if ('' !== r.textContent)
                  return p ? r.textContent.replace('\n', '') : r.textContent;
              } else if ('childList' === e) {
                if (n && n.length) return '';
                if ('' !== r.textContent) return r.textContent;
              }
              return null;
            }),
            (e.registerMutation = function (t) {
              var e = this.getMutationTextContent(t);
              if (null != e) {
                var r = c(o(t.target));
                this.mutations = this.mutations.set(r, e);
              }
            }),
            t
          );
        })();
      t.exports = h;
    },
    zM55: function (t, e, r) {
      t.exports = { root: 'Container_root__2pLOG' };
    },
    zRF8: function (t, e, r) {},
    zYrz: function (t, e, r) {
      'use strict';
      var n = r('W6iK'),
        i = r('AL/+'),
        o = function (t, e) {
          return t === e;
        },
        a = function (t) {
          return !!t;
        },
        u = [];
      t.exports = function (t) {
        var e = t
            .getCharacterList()
            .map(function (t) {
              return t.getStyle();
            })
            .toList(),
          r = e
            .flatten()
            .toSet()
            .map(function (r) {
              return (function (t, e, r) {
                var u = [],
                  s = e
                    .map(function (t) {
                      return t.has(r);
                    })
                    .toList();
                return (
                  i(s, o, a, function (e, i) {
                    var o = t.getText();
                    u.push({
                      offset: n.strlen(o.slice(0, e)),
                      length: n.strlen(o.slice(e, i)),
                      style: r,
                    });
                  }),
                  u
                );
              })(t, e, r);
            });
        return Array.prototype.concat.apply(u, r.toJS());
      };
    },
    zgZY: function (t, e, r) {
      'use strict';
      var n = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r) {
        if (!t) return null;
        var i = {};
        for (var o in t) n.call(t, o) && (i[o] = e.call(r, t[o], o, t));
        return i;
      };
    },
    zjfJ: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      r.d(e, 'a', function () {
        return n;
      });
    },
    zpdM: function (t, e, r) {
      'use strict';
      var n = r('ApIa'),
        i = r('ooRk'),
        o = r('b+nQ'),
        a = r('wH9P'),
        u = r('IbSy'),
        s = r('VeLA'),
        c = r('VUbk'),
        f = r('naKV'),
        l = r('0Uhd'),
        p = r('MOn9'),
        h = r('krsZ'),
        d = r('7002'),
        g = r('or4R'),
        y = r('1xkk'),
        v = r('laB8'),
        _ = r('zRF8'),
        m = r('9Kr7'),
        b = r('IDEf'),
        w = r('GyyK'),
        S = r('KOTo'),
        k = r('YSZ8'),
        x = r('gZn9'),
        E = r('dVQN'),
        O = {
          Editor: l,
          EditorBlock: p,
          EditorState: y,
          CompositeDecorator: a,
          Entity: h,
          EntityInstance: g,
          BlockMapBuilder: i,
          CharacterMetadata: o,
          ContentBlock: u,
          ContentState: s,
          RawDraftContentState: _,
          SelectionState: b,
          AtomicBlockUtils: n,
          KeyBindingUtil: v,
          Modifier: d,
          RichUtils: m,
          DefaultDraftBlockRenderMap: c,
          DefaultDraftInlineStyle: f,
          convertFromHTML: r('tO3r'),
          convertFromRaw: S,
          convertToRaw: w,
          genKey: k,
          getDefaultKeyBinding: x,
          getVisibleSelectionRect: E,
        };
      t.exports = O;
    },
  },
]);
