_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [26],
  {
    '+QpO': function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/inline-toolbar',
        function () {
          return n('yqBv');
        },
      ]);
    },
    '16an': function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__3RUD6' };
    },
    BNsw: function (t, e, n) {
      t.exports = {
        root: 'styles_root__3qZZl',
        param: 'styles_param__2Tn5n',
        paramName: 'styles_paramName__3eRJF',
        subParams: 'styles_subParams__L918N',
        subParam: 'styles_subParam__13_-5',
        subParamName: 'styles_subParamName__3yCJd',
        list: 'styles_list__3jaAM',
        listEntry: 'styles_listEntry__2aPRg',
        guideCodeBlock: 'styles_guideCodeBlock__6UoIb',
      };
    },
    Ctu1: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var o = n('zpdM');
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      function i(t) {
        void 0 === t && (t = {});
        var e = t,
          n = {};
        return {
          subscribeToItem: function (t, e) {
            (n[t] = n[t] || []), n[t].push(e);
          },
          unsubscribeFromItem: function (t, e) {
            var o = n[t];
            o &&
              (n[t] = o.filter(function (t) {
                return t !== e;
              }));
          },
          updateItem: function (t, o) {
            var i;
            e = r({}, e, (((i = {})[t] = o), i));
            var a = n[t];
            a &&
              a.forEach(function (n) {
                return n(e[t]);
              });
          },
          getItem: function (t) {
            return e[t];
          },
        };
      }
      var a = {
        decodeOffsetKey: function (t) {
          var e = t.split('-'),
            n = e[0],
            o = e[1],
            r = e[2];
          return {
            blockKey: n,
            decoratorKey: parseInt(o, 10),
            leafKey: parseInt(r, 10),
          };
        },
        createLinkAtSelection: function (t, e) {
          var n = t
              .getCurrentContent()
              .createEntity('LINK', 'MUTABLE', { url: e })
              .getLastCreatedEntityKey(),
            r = o.RichUtils.toggleLink(t, t.getSelection(), n);
          return o.EditorState.forceSelection(r, t.getSelection());
        },
        removeLinkAtSelection: function (t) {
          var e = t.getSelection();
          return o.RichUtils.toggleLink(t, e, null);
        },
        collapseToEnd: function (t) {
          var e = t.getSelection();
          return o.EditorState.forceSelection(
            t,
            e.merge({
              anchorKey: e.getEndKey(),
              focusKey: e.getEndKey(),
              anchorOffset: e.getEndOffset(),
              focusOffset: e.getEndOffset(),
            })
          );
        },
        getCurrentEntityKey: function (t) {
          var e = t.getSelection(),
            n = e.getAnchorKey(),
            o = t.getCurrentContent().getBlockForKey(n),
            r = e.getAnchorOffset(),
            i = e.getIsBackward() ? r - 1 : r;
          return o.getEntityAt(i);
        },
        getCurrentEntity: function (t) {
          var e = t.getCurrentContent(),
            n = this.getCurrentEntityKey(t);
          return n ? e.getEntity(n) : null;
        },
        hasEntity: function (t, e) {
          var n = this.getCurrentEntity(t);
          return Boolean(n && n.getType() === e);
        },
      };
      e.b = a;
    },
    KbhM: function (t, e, n) {
      t.exports = {
        buttonWrapper: 'buttonStyles_buttonWrapper__3Yr1W',
        button: 'buttonStyles_button__3Qfji',
        active: 'buttonStyles_active__1pxfh',
      };
    },
    OtnB: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return S;
      }),
        n.d(e, 'b', function () {
          return w;
        }),
        n.d(e, 'c', function () {
          return x;
        }),
        n.d(e, 'd', function () {
          return C;
        }),
        n.d(e, 'e', function () {
          return v;
        }),
        n.d(e, 'f', function () {
          return u;
        }),
        n.d(e, 'g', function () {
          return y;
        }),
        n.d(e, 'h', function () {
          return d;
        }),
        n.d(e, 'i', function () {
          return h;
        }),
        n.d(e, 'j', function () {
          return m;
        }),
        n.d(e, 'k', function () {
          return f;
        }),
        n.d(e, 'l', function () {
          return c;
        }),
        n.d(e, 'm', function () {
          return g;
        }),
        n.d(e, 'n', function () {
          return p;
        }),
        n.d(e, 'o', function () {
          return b;
        });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('zpdM'),
        a = n('7O4Y');
      function l(t) {
        var e = t.blockType,
          n = t.children;
        return function (t) {
          var o = t.theme,
            l = (function () {
              if (!t.getEditorState) return !1;
              var n = t.getEditorState();
              return (
                n
                  .getCurrentContent()
                  .getBlockForKey(n.getSelection().getStartKey())
                  .getType() === e
              );
            })()
              ? Object(a.a)(o.button, o.active)
              : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: l,
              onClick: function (n) {
                n.preventDefault(),
                  t.setEditorState(
                    i.RichUtils.toggleBlockType(t.getEditorState(), e)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      function s(t) {
        var e = t.style,
          n = t.children;
        return function (t) {
          var o = t.theme,
            l =
              t.getEditorState &&
              t.getEditorState().getCurrentInlineStyle().has(e)
                ? Object(a.a)(o.button, o.active)
                : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: l,
              onClick: function (n) {
                n.preventDefault(),
                  t.setEditorState(
                    i.RichUtils.toggleInlineStyle(t.getEditorState(), e)
                  );
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      var c = s({
          style: 'ITALIC',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            r.a.createElement('path', {
              d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
            })
          ),
        }),
        u = s({
          style: 'BOLD',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        d = s({
          style: 'CODE',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        }),
        p = s({
          style: 'UNDERLINE',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
            })
          ),
        }),
        h = l({ blockType: 'header-one', children: 'H1' }),
        f = l({ blockType: 'header-two', children: 'H2' }),
        m = l({ blockType: 'header-three', children: 'H3' }),
        b = l({
          blockType: 'unordered-list-item',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' })
          ),
        }),
        g = l({
          blockType: 'ordered-list-item',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        v = l({
          blockType: 'blockquote',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        y = l({
          blockType: 'code-block',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
            r.a.createElement('path', {
              d:
                'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
            })
          ),
        });
      function E(t) {
        var e = t.alignment,
          n = t.children;
        return function (t) {
          var o = t.theme,
            i = t.alignment === e ? Object(a.a)(o.button, o.active) : o.button;
          return r.a.createElement(
            'div',
            {
              className: o.buttonWrapper,
              onMouseDown: function (t) {
                t.preventDefault();
              },
            },
            r.a.createElement('button', {
              className: i,
              onClick: function (n) {
                n.preventDefault(), t.setAlignment({ alignment: e });
              },
              type: 'button',
              children: n,
            })
          );
        };
      }
      var w = E({
          alignment: 'default',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        S = E({
          alignment: 'center',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        x = E({
          alignment: 'left',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        }),
        C = E({
          alignment: 'right',
          children: r.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.a.createElement('path', {
              d:
                'M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z',
            }),
            r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          ),
        });
      s({
        style: 'SUBSCRIPT',
        children: r.a.createElement(
          'div',
          null,
          'x',
          r.a.createElement('sub', null, '2')
        ),
      }),
        s({
          style: 'SUPERSCRIPT',
          children: r.a.createElement(
            'div',
            null,
            'x',
            r.a.createElement('sup', null, '2')
          ),
        });
    },
    Smwy: function (t, e, n) {
      t.exports = { toolbar: 'toolbarStyles_toolbar__1POhO' };
    },
    Tw9o: function (t, e, n) {
      t.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bSDh: function (t, e, n) {
      t.exports = { editor: 'editorStyles_editor__1ufHm' };
    },
    bsbD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('7O4Y'),
        a = (n('U/75'), n('Tw9o')),
        l = n.n(a),
        s = r.a.createElement;
      function c(t) {
        var e = t.code,
          n = t.className,
          o = Object(i.a)(l.a.root, n);
        return s(
          'span',
          { className: o },
          s('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    gqD3: function (t, e, n) {
      t.exports = {
        editor: 'editorStyles_editor__3ocb0',
        headlineButtonWrapper: 'editorStyles_headlineButtonWrapper__2O9uZ',
        headlineButton: 'editorStyles_headlineButton__FfZC1',
      };
    },
    nxSh: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('Ctu1'),
        a = n('zpdM'),
        l = n('OtnB');
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
          }).apply(this, arguments);
      }
      var c = (function (t) {
        var e, n;
        function o() {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((e = t.call.apply(t, [this].concat(o)) || this).state = {
              isVisible: !1,
              position: void 0,
              overrideContent: void 0,
            }),
            (e.toolbar = null),
            (e.onOverrideContent = function (t) {
              e.setState({ overrideContent: t });
            }),
            (e.onSelectionChanged = function () {
              setTimeout(function () {
                if (e.toolbar) {
                  var t = e.props.store.getItem('getEditorRef')();
                  if (t) {
                    for (
                      var n =
                        t.refs && t.refs.editor ? t.refs.editor : t.editor;
                      -1 === n.className.indexOf('DraftEditor-root');

                    )
                      n = n.parentNode;
                    var o = n.getBoundingClientRect(),
                      r = n.ownerDocument && n.ownerDocument.defaultView,
                      i = Object(a.getVisibleSelectionRect)(r || window);
                    if (i) {
                      var l = {
                        top:
                          n.offsetTop -
                          e.toolbar.offsetHeight +
                          (i.top - o.top) -
                          5,
                        left: n.offsetLeft + (i.left - o.left) + i.width / 2,
                      };
                      e.setState({ position: l });
                    }
                  }
                }
              });
            }),
            e
          );
        }
        (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var i = o.prototype;
        return (
          (i.UNSAFE_componentWillMount = function () {
            this.props.store.subscribeToItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (i.componentWillUnmount = function () {
            this.props.store.unsubscribeFromItem(
              'selection',
              this.onSelectionChanged
            );
          }),
          (i.getStyle = function () {
            var t = this.props.store,
              e = this.state,
              n = e.overrideContent,
              o = e.position,
              r = t.getItem('getEditorState')().getSelection(),
              i = (!r.isCollapsed() && r.getHasFocus()) || n,
              a = s({}, o);
            return (
              i
                ? ((a.visibility = 'visible'),
                  (a.transform = 'translate(-50%) scale(1)'),
                  (a.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)'))
                : ((a.transform = 'translate(-50%) scale(0)'),
                  (a.visibility = 'hidden')),
              a
            );
          }),
          (i.render = function () {
            var t = this,
              e = this.props,
              n = e.theme,
              o = e.store,
              i = this.state.overrideContent,
              a = {
                theme: n.buttonStyles,
                getEditorState: o.getItem('getEditorState'),
                setEditorState: o.getItem('setEditorState'),
                onOverrideContent: this.onOverrideContent,
              };
            return r.a.createElement(
              'div',
              {
                className: n.toolbarStyles.toolbar,
                style: this.getStyle(),
                ref: function (e) {
                  t.toolbar = e;
                },
              },
              i ? r.a.createElement(i, a) : this.props.children(a)
            );
          }),
          o
        );
      })(r.a.Component);
      c.defaultProps = {
        children: function (t) {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(l.l, t),
            r.a.createElement(l.f, t),
            r.a.createElement(l.n, t),
            r.a.createElement(l.h, t)
          );
        },
      };
      function u(t) {
        var e = t.className,
          n = void 0 === e ? 's1o2cezu' : e;
        return r.a.createElement('div', { className: n });
      }
      var d = {
        buttonStyles: {
          buttonWrapper: 'bpsgbes',
          button: 'b181v2oy',
          active: 'a9immln',
        },
        toolbarStyles: { toolbar: 'tukdd6b' },
      };
      e.b = function (t) {
        void 0 === t && (t = {});
        var e = Object(i.a)({ isVisible: !1 }),
          n = t.theme,
          o = void 0 === n ? d : n;
        return {
          initialize: function (t) {
            var n = t.getEditorState,
              o = t.setEditorState,
              r = t.getEditorRef;
            e.updateItem('getEditorState', n),
              e.updateItem('setEditorState', o),
              e.updateItem('getEditorRef', r);
          },
          onChange: function (t) {
            return e.updateItem('selection', t.getSelection()), t;
          },
          InlineToolbar: function (t) {
            return r.a.createElement(c, s({}, t, { store: e, theme: o }));
          },
        };
      };
    },
    yqBv: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function () {
          return at;
        });
      var o = n('9fIP'),
        r = n('MMYH'),
        i = n('8K1b'),
        a = n('K/z8'),
        l = n('sRHE'),
        s = n('ERkP'),
        c = n.n(s),
        u = n('Diez'),
        d = n('9zpB'),
        p = n('YITQ'),
        h = n('BNsw'),
        f = n.n(h),
        m = n('lIm4'),
        b = n('bsbD'),
        g = n('pWxA'),
        v = n('zjfJ'),
        y = n('RRIY'),
        E = n('nxSh'),
        w = n('bSDh'),
        S = n.n(w),
        x = c.a.createElement;
      function C(t) {
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
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var O = Object(E.b)(),
        L = O.InlineToolbar,
        j = [O],
        k =
          'In this editor a toolbar shows up once you select part of the text \u2026',
        B = (function (t) {
          Object(i.a)(n, t);
          var e = C(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(k),
              }),
              Object(v.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return x(
                    'div',
                    { className: S.a.editor, onClick: this.focus },
                    x(y.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: j,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    x(L, null)
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        T = n('cxan'),
        _ = n('OtnB'),
        I = n('gqD3'),
        M = n.n(I),
        P = c.a.createElement;
      function H(t) {
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
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var N = (function (t) {
          Object(i.a)(n, t);
          var e = H(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(g.a)(t), 'onWindowClick', function () {
                return t.props.onOverrideContent(void 0);
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    window.addEventListener('click', t.onWindowClick);
                  });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('click', this.onWindowClick);
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this,
                    e = [_.i, _.k, _.j];
                  return P(
                    'div',
                    null,
                    e.map(function (e, n) {
                      return P(e, Object(T.a)({ key: n }, t.props));
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        R = (function (t) {
          Object(i.a)(n, t);
          var e = H(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(g.a)(t), 'onMouseDown', function (t) {
                return t.preventDefault();
              }),
              Object(v.a)(Object(g.a)(t), 'onClick', function () {
                return t.props.onOverrideContent(N);
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  return P(
                    'div',
                    {
                      onMouseDown: this.onMouseDown,
                      className: M.a.headlineButtonWrapper,
                    },
                    P(
                      'button',
                      { onClick: this.onClick, className: M.a.headlineButton },
                      'H'
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        z = Object(E.b)(),
        D = z.InlineToolbar,
        W = [z],
        A =
          'In this editor a toolbar shows up once you select part of the text \u2026',
        Z = (function (t) {
          Object(i.a)(n, t);
          var e = H(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(A),
              }),
              Object(v.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return P(
                    'div',
                    { className: M.a.editor, onClick: this.focus },
                    P(y.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: W,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    P(D, null, function (t) {
                      return P(
                        'div',
                        null,
                        P(_.f, t),
                        P(_.l, t),
                        P(_.n, t),
                        P(_.h, t),
                        P(E.a, t),
                        P(R, t),
                        P(_.o, t),
                        P(_.m, t),
                        P(_.e, t),
                        P(_.g, t)
                      );
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        U = n('16an'),
        K = n.n(U),
        V = n('KbhM'),
        q = n.n(V),
        F = n('Smwy'),
        Y = n.n(F),
        J = c.a.createElement;
      function Q(t) {
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
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var G = Object(E.b)({ theme: { buttonStyles: q.a, toolbarStyles: Y.a } }),
        X = G.InlineToolbar,
        $ = [G],
        tt =
          'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026',
        et = (function (t) {
          Object(i.a)(n, t);
          var e = Q(n);
          function n() {
            var t;
            Object(o.a)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              Object(v.a)(Object(g.a)(t), 'state', {
                editorState: Object(y.b)(tt),
              }),
              Object(v.a)(Object(g.a)(t), 'onChange', function (e) {
                t.setState({ editorState: e });
              }),
              Object(v.a)(Object(g.a)(t), 'focus', function () {
                t.editor.focus();
              }),
              t
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return J(
                    'div',
                    { className: K.a.editor, onClick: this.focus },
                    J(y.c, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      plugins: $,
                      ref: function (e) {
                        t.editor = e;
                      },
                    }),
                    J(X, null)
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        nt = n('98Mn'),
        ot = n('3h/d'),
        rt = c.a.createElement;
      function it(t) {
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
          var n,
            o = Object(l.a)(t);
          if (e) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var at = (function (t) {
        Object(i.a)(n, t);
        var e = it(n);
        function n() {
          return Object(o.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return rt(
                  ot.a,
                  null,
                  rt(
                    u.a,
                    null,
                    rt(p.a, { level: 2 }, 'InlineToolbar'),
                    rt(p.a, { level: 3 }, 'Supported Environment'),
                    rt(
                      'ul',
                      { className: f.a.list },
                      rt('li', { className: f.a.listEntry }, 'Desktop: Yes'),
                      rt('li', { className: f.a.listEntry }, 'Mobile: No'),
                      rt(
                        'li',
                        { className: f.a.listEntry },
                        'Screen-reader: No'
                      )
                    )
                  ),
                  rt(
                    d.a,
                    null,
                    rt(p.a, { level: 2 }, 'Getting Started'),
                    rt(m.a, { code: 'npm install @draft-js-plugins/editor' }),
                    rt(m.a, {
                      code: 'npm install @draft-js-plugins/inline-toolbar',
                    }),
                    rt(m.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the inlineToolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[inlineToolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    rt(p.a, { level: 3 }, 'Importing the default styles'),
                    rt(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      rt(b.a, {
                        code:
                          'node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css',
                      })
                    ),
                    rt(p.a, { level: 4 }, 'Webpack Usage'),
                    rt(
                      'ul',
                      { className: f.a.list },
                      rt(
                        'li',
                        { className: f.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        rt(b.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      rt(
                        'li',
                        { className: f.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        rt(m.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      rt(
                        'li',
                        { className: f.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        rt(m.a, {
                          code:
                            "import '@draft-js-plugins/inline-toolbar/lib/plugin.css';",
                          className: f.a.guideCodeBlock,
                        })
                      ),
                      rt(
                        'li',
                        { className: f.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    rt(p.a, { level: 4 }, 'Browserify Usage'),
                    rt(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      rt(
                        nt.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/InlineToolbar/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  rt(
                    u.a,
                    null,
                    rt(p.a, { level: 2 }, 'Simple Inline Toolbar Example'),
                    rt(B, null),
                    rt(m.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class SimpleInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar />\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleInlineToolbarEditor.js',
                    }),
                    rt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  rt(
                    u.a,
                    null,
                    rt(p.a, { level: 2 }, 'Custom Inline Toolbar Example'),
                    rt(Z, null),
                    rt(m.a, {
                      code:
                        "/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/inline-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line react/no-array-index-key\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  // When using a click event inside overridden content, mouse down\n  // events needs to be prevented so the focus stays in the editor\n  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()\n  onMouseDown = (event) => event.preventDefault();\n\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div\n        onMouseDown={this.onMouseDown}\n        className={editorStyles.headlineButtonWrapper}\n      >\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <BoldButton {...externalProps} />\n                <ItalicButton {...externalProps} />\n                <UnderlineButton {...externalProps} />\n                <CodeButton {...externalProps} />\n                <Separator {...externalProps} />\n                <HeadlinesButton {...externalProps} />\n                <UnorderedListButton {...externalProps} />\n                <OrderedListButton {...externalProps} />\n                <BlockquoteButton {...externalProps} />\n                <CodeBlockButton {...externalProps} />\n              </div>\n            )\n          }\n        </InlineToolbar>\n      </div>\n    );\n  }\n}\n",
                      name: 'CustomInlineToolbarEditor.js',
                    }),
                    rt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  rt(
                    u.a,
                    null,
                    rt(p.a, { level: 2 }, 'Themed Inline Toolbar Example'),
                    rt(et, null),
                    rt(m.a, {
                      code:
                        "import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar />\n      </div>\n    );\n  }\n}\n",
                      name: 'ThemedInlineToolbarEditor.js',
                    }),
                    rt(m.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(s.Component);
    },
  },
  [['+QpO', 0, 2, 1, 3, 4]],
]);
