_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [25],
  {
    '3SHm': function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__2AWmD',
        options: 'editorStyles_options__3CCGe',
      };
    },
    '4uA2': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return fe;
        });
      var a = n('9fIP'),
        o = n('MMYH'),
        r = n('8K1b'),
        i = n('K/z8'),
        s = n('sRHE'),
        l = n('ERkP'),
        c = n.n(l),
        d = n('Diez'),
        u = n('9zpB'),
        p = n('YITQ'),
        m = n('Qigo'),
        g = n.n(m),
        f = n('lIm4'),
        h = n('pWxA'),
        y = n('zjfJ'),
        v = n('zpdM'),
        b = n('RRIY'),
        S = n('Pq6H'),
        E = n('gIa7'),
        P = n.n(E),
        j = c.a.createElement;
      function C(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var O = [Object(S.a)()],
        R = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'See advanced examples further down \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        k = (function (e) {
          Object(r.a)(n, e);
          var t = C(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(y.a)(Object(h.a)(e), 'state', {
                editorState: v.EditorState.createWithContent(
                  Object(v.convertFromRaw)(R)
                ),
              }),
              Object(y.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(y.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return j(
                    'div',
                    null,
                    j(
                      'div',
                      { className: P.a.editor, onClick: this.focus },
                      j(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: O,
                        ref: function (t) {
                          e.editor = t;
                        },
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        x = n('M/3P'),
        _ = n('7mKz'),
        I = n('FpXR'),
        w = n('7lAA');
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function A(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ('string' === typeof e) return N(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? N(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var a = 0;
            return function () {
              return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function D(e) {
        return new Promise(function (t) {
          var n = new FileReader();
          (n.onload = function (n) {
            t({
              lastModifiedDate: e.lastModifiedDate,
              lastModified: e.lastModified,
              name: e.name,
              size: e.size,
              type: e.type,
              src: n.target.result,
            });
          }),
            0 === e.type.indexOf('text/') || 'application/json' === e.type
              ? n.readAsText(e)
              : 0 === e.type.indexOf('image/')
              ? n.readAsDataURL(e)
              : n.readAsBinaryString(e);
        });
      }
      function B(e) {
        return function (t, n, a) {
          var o = a.getEditorState,
            r = a.setEditorState;
          if (e.handleUpload) {
            for (
              var i, s = { files: [], formData: new FormData() }, l = A(n);
              !(i = l()).done;

            ) {
              var c = i.value;
              c &&
                c instanceof File &&
                (s.formData.append('files', c), s.files.push(c));
            }
            return (
              r(v.EditorState.acceptSelection(o(), t)),
              (function (e) {
                return Promise.all(e.map(D));
              })(s.files).then(function (t) {
                var n = o();
                t.forEach(function (t) {
                  e.addImage && (n = e.addImage(n, t.src));
                }),
                  r(n);
              }),
              'handled'
            );
          }
          return 'not-handled';
        };
      }
      var M = function (e) {
          return void 0 === e && (e = {}), { handleDroppedFiles: B(e) };
        },
        z = n('aLJq'),
        T = n.n(z);
      var L = c.a.createElement;
      function F(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var U = Object(_.a)(),
        K = Object(I.a)(),
        W = Object(w.a)(),
        Y = Object(x.a)(),
        G = Y.AlignmentTool,
        H = Object(b.a)(K.decorator, Y.decorator, U.decorator, W.decorator),
        X = Object(S.a)({ decorator: H }),
        q = [
          M({
            handleUpload: function (e, t, n, a) {
              !(function n(o) {
                a(o || 1),
                  100 === o
                    ? Promise.all(e.files.map(D)).then(function (e) {
                        return t(e, { retainSrc: !0 });
                      })
                    : setTimeout(n, 250, (o || 0) + 10);
              })();
            },
            addImage: X.addImage,
          }),
          W,
          U,
          Y,
          K,
          X,
        ],
        J = {
          entityMap: {
            0: {
              type: 'IMAGE',
              mutability: 'IMMUTABLE',
              data: { src: '/images/canada-landscape-small.jpg' },
            },
          },
          blocks: [
            {
              key: '9gm3s',
              text:
                'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: 'ov7r',
              text: ' ',
              type: 'atomic',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [{ offset: 0, length: 1, key: 0 }],
              data: {},
            },
            {
              key: 'e23a8',
              text: 'See advanced examples further down \u2026',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
        },
        Q = (function (e) {
          Object(r.a)(n, e);
          var t = F(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(y.a)(Object(h.a)(e), 'state', {
                editorState: v.EditorState.createWithContent(
                  Object(v.convertFromRaw)(J)
                ),
              }),
              Object(y.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(y.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return L(
                    'div',
                    null,
                    L(
                      'div',
                      { className: T.a.editor, onClick: this.focus },
                      L(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: q,
                        ref: function (t) {
                          e.editor = t;
                        },
                      }),
                      L(G, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        V = n('n8tw'),
        Z = n.n(V),
        $ = c.a.createElement;
      function ee(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var te = (function (e) {
          Object(r.a)(n, e);
          var t = ee(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(y.a)(Object(h.a)(e), 'state', { url: '', open: !1 }),
              Object(y.a)(Object(h.a)(e), 'onPopoverClick', function () {
                e.preventNextClose = !0;
              }),
              Object(y.a)(Object(h.a)(e), 'openPopover', function () {
                e.state.open ||
                  ((e.preventNextClose = !0), e.setState({ open: !0 }));
              }),
              Object(y.a)(Object(h.a)(e), 'closePopover', function () {
                !e.preventNextClose && e.state.open && e.setState({ open: !1 }),
                  (e.preventNextClose = !1);
              }),
              Object(y.a)(Object(h.a)(e), 'addImage', function () {
                var t = e.props,
                  n = t.editorState;
                (0, t.onChange)(e.props.modifier(n, e.state.url));
              }),
              Object(y.a)(Object(h.a)(e), 'changeUrl', function (t) {
                e.setState({ url: t.target.value });
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener('click', this.closePopover);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener('click', this.closePopover);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.open
                      ? Z.a.addImagePopover
                      : Z.a.addImageClosedPopover,
                    t = this.state.open
                      ? Z.a.addImagePressedButton
                      : Z.a.addImageButton;
                  return $(
                    'div',
                    { className: Z.a.addImage },
                    $(
                      'button',
                      {
                        className: t,
                        onMouseUp: this.openPopover,
                        type: 'button',
                      },
                      '+'
                    ),
                    $(
                      'div',
                      { className: e, onClick: this.onPopoverClick },
                      $('input', {
                        type: 'text',
                        placeholder: 'Paste the image url \u2026',
                        className: Z.a.addImageInput,
                        onChange: this.changeUrl,
                        value: this.state.url,
                      }),
                      $(
                        'button',
                        {
                          className: Z.a.addImageConfirmButton,
                          type: 'button',
                          onClick: this.addImage,
                        },
                        'Add'
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        ne = n('3SHm'),
        ae = n.n(ne),
        oe = c.a.createElement;
      function re(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var ie = Object(S.a)(),
        se = [ie],
        le =
          'Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.',
        ce = (function (e) {
          Object(r.a)(n, e);
          var t = re(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(y.a)(Object(h.a)(e), 'state', {
                editorState: Object(b.b)(le),
              }),
              Object(y.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(y.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return oe(
                    'div',
                    null,
                    oe(
                      'div',
                      { className: ae.a.editor, onClick: this.focus },
                      oe(b.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: se,
                        ref: function (t) {
                          e.editor = t;
                        },
                      })
                    ),
                    oe(te, {
                      editorState: this.state.editorState,
                      onChange: this.onChange,
                      modifier: ie.addImage,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(l.Component),
        de = n('98Mn'),
        ue = n('bsbD'),
        pe = n('3h/d'),
        me = c.a.createElement;
      function ge(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = Object(s.a)(e);
          if (t) {
            var o = Object(s.a)(this).constructor;
            n = Reflect.construct(a, arguments, o);
          } else n = a.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var fe = (function (e) {
        Object(r.a)(n, e);
        var t = ge(n);
        function n() {
          return Object(a.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: 'render',
              value: function () {
                return me(
                  pe.a,
                  null,
                  me(
                    d.a,
                    null,
                    me(p.a, { level: 2 }, 'Image'),
                    me(p.a, { level: 3 }, 'Supported Environment'),
                    me(
                      'ul',
                      { className: g.a.list },
                      me('li', { className: g.a.listEntry }, 'Desktop: Yes'),
                      me('li', { className: g.a.listEntry }, 'Mobile: Yes'),
                      me(
                        'li',
                        { className: g.a.listEntry },
                        'Screen-reader: No'
                      )
                    )
                  ),
                  me(
                    u.a,
                    null,
                    me(p.a, { level: 2 }, 'Getting Started'),
                    me(f.a, { code: 'npm install @draft-js-plugins/editor' }),
                    me(f.a, { code: 'npm install @draft-js-plugins/image' }),
                    me(f.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport React from 'react';\n\nconst imagePlugin = createImagePlugin();\n\n// The Editor accepts an array of plugins. In this case, only the imagePlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[imagePlugin]}\n  />\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    me(p.a, { level: 3 }, 'Importing the default styles'),
                    me(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      me(ue.a, {
                        code:
                          'node_modules/@draft-js-plugins/image/lib/plugin.css',
                      })
                    ),
                    me(p.a, { level: 4 }, 'Webpack Usage'),
                    me(
                      'ul',
                      { className: g.a.list },
                      me(
                        'li',
                        { className: g.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        me(ue.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      me(
                        'li',
                        { className: g.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        me(f.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: g.a.guideCodeBlock,
                        })
                      ),
                      me(
                        'li',
                        { className: g.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        me(f.a, {
                          code:
                            "import '@draft-js-plugins/image/lib/plugin.css';",
                          className: g.a.guideCodeBlock,
                        })
                      ),
                      me(
                        'li',
                        { className: g.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    me(p.a, { level: 4 }, 'Browserify Usage'),
                    me(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      me(
                        de.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  me(
                    d.a,
                    null,
                    me(p.a, { level: 2 }, 'Configuration Parameters'),
                    me(
                      'div',
                      { className: g.a.param },
                      me('span', { className: g.a.paramName }, 'theme'),
                      me(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      me(
                        'div',
                        { className: g.a.subParams },
                        me(
                          'div',
                          { className: g.a.subParam },
                          me('span', { className: g.a.subParamName }, 'image:'),
                          ' CSS class for the image.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImage:'
                          ),
                          ' CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImagePopover:'
                          ),
                          ' ',
                          'CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImageClosedPopover:'
                          ),
                          ' ',
                          'CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImageBottomGradient:'
                          ),
                          ' ',
                          'CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImageButton:'
                          ),
                          ' CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImagePressedButton:'
                          ),
                          ' ',
                          'CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImageInput:'
                          ),
                          ' CSS class.'
                        ),
                        me(
                          'div',
                          { className: g.a.subParam },
                          me(
                            'span',
                            { className: g.a.subParamName },
                            'addImageConfirmButton:'
                          ),
                          ' ',
                          'CSS class.'
                        )
                      )
                    ),
                    me(
                      'div',
                      { className: g.a.paramBig },
                      me(
                        'span',
                        { className: g.a.paramName },
                        'imageComponent'
                      ),
                      me(
                        'span',
                        null,
                        'Pass in a custom image component to be rendered.'
                      )
                    ),
                    me(
                      'div',
                      { className: g.a.paramBig },
                      me(
                        'span',
                        { className: g.a.paramName },
                        'addImageButtonContent'
                      ),
                      me(
                        'span',
                        null,
                        'Content of button which opens add image popup. (Default content is \ud83d\udcf7)'
                      )
                    )
                  ),
                  me(
                    d.a,
                    null,
                    me(p.a, { level: 2 }, 'Simple Example'),
                    me(k, null),
                    me(f.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class SimpleImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleImageEditor.js',
                    }),
                    me(f.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  me(
                    d.a,
                    null,
                    me(
                      p.a,
                      { level: 2 },
                      "Alignment + Resize + Focus + Drag'n'Drop + Drag'n'Drop Upload Example"
                    ),
                    me(Q, null),
                    me(f.a, {
                      code:
                        "import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\n\nimport createAlignmentPlugin from '@draft-js-plugins/alignment';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createResizeablePlugin from '@draft-js-plugins/resizeable';\n\nimport createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';\n\nimport createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';\nimport editorStyles from './editorStyles.module.css';\nimport mockUpload from './mockUpload';\n\nconst focusPlugin = createFocusPlugin();\nconst resizeablePlugin = createResizeablePlugin();\nconst blockDndPlugin = createBlockDndPlugin();\nconst alignmentPlugin = createAlignmentPlugin();\nconst { AlignmentTool } = alignmentPlugin;\n\nconst decorator = composeDecorators(\n  resizeablePlugin.decorator,\n  alignmentPlugin.decorator,\n  focusPlugin.decorator,\n  blockDndPlugin.decorator\n);\nconst imagePlugin = createImagePlugin({ decorator });\n\nconst dragNDropFileUploadPlugin = createDragNDropUploadPlugin({\n  handleUpload: mockUpload,\n  addImage: imagePlugin.addImage,\n});\n\nconst plugins = [\n  dragNDropFileUploadPlugin,\n  blockDndPlugin,\n  focusPlugin,\n  alignmentPlugin,\n  resizeablePlugin,\n  imagePlugin,\n];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text: 'See advanced examples further down \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <AlignmentTool />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'AddImageEditor.js',
                    }),
                    me(f.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  ),
                  me(
                    d.a,
                    null,
                    me(p.a, { level: 2 }, 'Add Image Button Example'),
                    me(ce, null),
                    me(f.a, {
                      code:
                        "import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport ImageAdd from './ImageAdd';\n\nimport editorStyles from './editorStyles.module.css';\n\nconst imagePlugin = createImagePlugin();\nconst plugins = [imagePlugin];\n\nconst text =\n  'Click on the + button below and insert \"/images/canada-landscape-small.jpg\" to add the landscape image. Alternativly you can use any image url on the web.';\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <ImageAdd\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          modifier={imagePlugin.addImage}\n        />\n      </div>\n    );\n  }\n}\n",
                      name: 'AddImageEditor.js',
                    }),
                    me(f.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.css',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(l.Component);
    },
    '7lAA': function (e, t, n) {
      'use strict';
      var a = n('zpdM'),
        o = n('Svze'),
        r = n('ERkP'),
        i = n.n(r);
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var l = 'DRAFTJS_BLOCK_KEY',
        c = function (e, t, n, r) {
          var i = r.getEditorState,
            c = r.setEditorState,
            d = i(),
            u = t.data.getData('text'),
            p = u ? u.split(':') : [];
          if (2 !== p.length) return 'not-handled';
          if (p[0] === l) {
            var m = p[1],
              g = d.getCurrentContent(),
              f = g.getBlockForKey(m),
              h = g.getEntity(f.getEntityAt(0)),
              y = (function (e, t) {
                var n,
                  o = e.getKeyAfter(t),
                  r = e.getBlockForKey(o);
                n =
                  r &&
                  'unstyled' === r.getType() &&
                  0 === r.getLength() &&
                  r === e.getBlockMap().last()
                    ? new a.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: o,
                        focusOffset: 0,
                      })
                    : new a.SelectionState({
                        anchorKey: t,
                        anchorOffset: 0,
                        focusKey: t,
                        focusOffset: 1,
                      });
                var i = a.Modifier.setBlockType(e, n, 'unstyled');
                return a.Modifier.removeRange(i, n, 'backward');
              })(
                (function (e, t, n, r, i, l) {
                  void 0 === l && (l = ' ');
                  var c,
                    d,
                    u = e.getCurrentContent(),
                    p = t,
                    m = a.Modifier.removeRange(u, p, 'backward'),
                    g = m.getSelectionAfter(),
                    f = g.get('focusKey'),
                    h = u.getBlockForKey(f),
                    y = 0 === h.getLength() && null === h.getEntityAt(0),
                    v = 0 === p.getStartOffset();
                  y || v
                    ? ((c = g), (d = m))
                    : (c = (d = a.Modifier.splitBlock(
                        m,
                        g
                      )).getSelectionAfter());
                  var b = a.Modifier.setBlockType(d, c, n),
                    S = b
                      .createEntity(i || n, 'IMMUTABLE', s({}, r))
                      .getLastCreatedEntityKey(),
                    E = a.CharacterMetadata.create({ entity: S }),
                    P = [
                      new a.ContentBlock({
                        key: Object(a.genKey)(),
                        type: n,
                        text: l,
                        characterList: Object(o.List)(
                          Object(o.Repeat)(E, l.length || 1)
                        ),
                      }),
                      new a.ContentBlock({
                        key: Object(a.genKey)(),
                        type: 'unstyled',
                        text: '',
                        characterList: Object(o.List)(),
                      }),
                    ],
                    j = a.BlockMapBuilder.createFromArray(P);
                  return a.Modifier.replaceWithFragment(b, c, j);
                })(d, e, f.getType(), h.getData(), h.getType()),
                m
              ),
              v = new a.SelectionState({
                anchorKey: m,
                anchorOffset: 0,
                focusKey: m,
                focusOffset: 0,
              }),
              b = a.EditorState.push(d, y, 'insert-fragment');
            c(a.EditorState.forceSelection(b, v));
          }
          return 'handled';
        },
        d = function (e) {
          var t = e.store;
          return function (e) {
            var n = function (n) {
              var a = !t.getReadOnly || t.getReadOnly();
              return i.a.createElement(
                e,
                s({}, n, {
                  onDragStart: a
                    ? void 0
                    : function (e) {
                        (e.dataTransfer.dropEffect = 'move'),
                          e.dataTransfer.setData(
                            'text',
                            'DRAFTJS_BLOCK_KEY:' + n.block.getKey()
                          );
                      },
                })
              );
            };
            return (
              (n.displayName =
                'BlockDraggable(' +
                (function (e) {
                  var t = e.WrappedComponent || e;
                  return t.displayName || t.name || 'Component';
                })(e) +
                ')'),
              (n.WrappedComponent = e.WrappedComponent || e),
              n
            );
          };
        };
      t.a = function () {
        var e = { getReadOnly: void 0 };
        return {
          initialize: function (t) {
            var n = t.getReadOnly;
            e.getReadOnly = n;
          },
          decorator: d({ store: e }),
          handleDrop: c,
        };
      };
    },
    FpXR: function (e, t, n) {
      'use strict';
      var a = n('zpdM'),
        o = n('ERkP'),
        r = n.n(o),
        i = n('7nmT'),
        s = n.n(i);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var d = function (e, t) {
          return Math.ceil(e / t) * t;
        },
        u = function (e) {
          var t = e.config,
            n = e.store;
          return function (e) {
            var a, i;
            return (
              (i = a = (function (t) {
                var a, o;
                function i() {
                  for (
                    var e, a = arguments.length, o = new Array(a), r = 0;
                    r < a;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    ((e = t.call.apply(t, [this].concat(o)) || this).state = {
                      hoverPosition: {},
                      clicked: !1,
                    }),
                    (e.wrapper = void 0),
                    (e.setEntityData = function (t) {
                      e.props.blockProps.setResizeData(t);
                    }),
                    (e.mouseLeave = function () {
                      e.state.clicked || e.setState({ hoverPosition: {} });
                    }),
                    (e.mouseMove = function (t) {
                      var n = e.props,
                        a = n.vertical,
                        o = n.horizontal,
                        r = n.isResizable,
                        i = e.state.hoverPosition,
                        l = s.a.findDOMNode(c(e)).getBoundingClientRect(),
                        d = t.clientX - l.left,
                        u = t.clientY - l.top,
                        p = !(!a || 'auto' === a) && u < 6,
                        m = !!o && d < 6,
                        g = !!o && d >= l.width - 6,
                        f =
                          !(!a || 'auto' === a) &&
                          u >= l.height - 6 &&
                          u < l.height,
                        h = {
                          isTop: p,
                          isLeft: m,
                          isRight: g,
                          isBottom: f,
                          canResize: (p || m || g || f) && r,
                        };
                      Object.keys(h).filter(function (e) {
                        return i[e] !== h[e];
                      }).length && e.setState({ hoverPosition: h });
                    }),
                    (e.mouseDown = function (t) {
                      if (e.state.hoverPosition.canResize) {
                        t.preventDefault();
                        var a = e.props,
                          o = a.resizeSteps,
                          r = a.vertical,
                          i = a.horizontal,
                          l = e.state.hoverPosition,
                          u = l.isTop,
                          p = l.isLeft,
                          m = l.isRight,
                          g = l.isBottom,
                          f = s.a.findDOMNode(c(e)),
                          h = t.clientX,
                          y = t.clientY,
                          v = parseInt(
                            document.defaultView.getComputedStyle(f).width,
                            10
                          ),
                          b = parseInt(
                            document.defaultView.getComputedStyle(f).height,
                            10
                          ),
                          S = function (t) {
                            var a = v + (p ? h - t.clientX : t.clientX - h),
                              s = b + t.clientY - y,
                              l = n.getEditorRef(),
                              c =
                                l.refs && l.refs.editor
                                  ? l.refs.editor
                                  : l.editor;
                            (a = Math.min(c.clientWidth, a)),
                              (s = Math.min(c.clientHeight, s));
                            var f = (100 / c.clientWidth) * a,
                              S = (100 / c.clientHeight) * s,
                              E = {};
                            (p || m) && 'relative' === i
                              ? (E.width = o ? d(f, o) : f)
                              : (p || m) &&
                                'absolute' === i &&
                                (E.width = o ? d(a, o) : a),
                              (u || g) && 'relative' === r
                                ? (E.height = o ? d(S, o) : S)
                                : (u || g) &&
                                  'absolute' === r &&
                                  (E.height = o ? d(s, o) : s),
                              t.preventDefault(),
                              e.setState(E);
                          };
                        document.addEventListener('mousemove', S, !1),
                          document.addEventListener(
                            'mouseup',
                            function t() {
                              document.removeEventListener('mousemove', S, !1),
                                document.removeEventListener('mouseup', t, !1);
                              var n = e.state,
                                a = n.width,
                                o = n.height;
                              e.setState({ clicked: !1 }),
                                e.setEntityData({ width: a, height: o });
                            },
                            !1
                          ),
                          e.setState({ clicked: !0 });
                      }
                    }),
                    e
                  );
                }
                return (
                  (o = t),
                  ((a = i).prototype = Object.create(o.prototype)),
                  (a.prototype.constructor = a),
                  (a.__proto__ = o),
                  (i.prototype.render = function () {
                    var t = this,
                      a = this.props,
                      o = a.blockProps,
                      i = a.vertical,
                      s = a.horizontal,
                      c = a.initialWidth,
                      d = a.initialHeight,
                      u = a.style,
                      p = a.isResizable,
                      m =
                        (a.resizeSteps,
                        (function (e, t) {
                          if (null == e) return {};
                          var n,
                            a,
                            o = {},
                            r = Object.keys(e);
                          for (a = 0; a < r.length; a++)
                            (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(a, [
                          'blockProps',
                          'vertical',
                          'horizontal',
                          'initialWidth',
                          'initialHeight',
                          'style',
                          'isResizable',
                          'resizeSteps',
                        ])),
                      g = this.state,
                      f = g.width,
                      h = g.height,
                      y = g.hoverPosition,
                      v = y.isTop,
                      b = y.isLeft,
                      S = y.isRight,
                      E = y.isBottom,
                      P = l({ position: 'relative' }, u);
                    if ('auto' === s) P.width = 'auto';
                    else if ('relative' === s) {
                      var j = f || o.resizeData.width;
                      P.width = !j && c ? c : (j || 40) + '%';
                    } else if ('absolute' === s) {
                      var C = f || o.resizeData.width;
                      P.width = !C && c ? c : (C || 40) + 'px';
                    }
                    if ('auto' === i) P.height = 'auto';
                    else if ('relative' === i) {
                      var O = h || o.resizeData.height;
                      P.height = !O && d ? d : (O || 40) + '%';
                    } else if ('absolute' === i) {
                      var R = h || o.resizeData.height;
                      P.height = !R && d ? d : (R || 40) + '%';
                    }
                    P.cursor = p
                      ? (S && E) || (b && v)
                        ? 'nwse-resize'
                        : (S && v) || (E && b)
                        ? 'nesw-resize'
                        : S || b
                        ? 'ew-resize'
                        : E || v
                        ? 'ns-resize'
                        : 'default'
                      : 'default';
                    var k =
                      !n.getReadOnly || n.getReadOnly()
                        ? {}
                        : {
                            onMouseDown: this.mouseDown,
                            onMouseMove: this.mouseMove,
                            onMouseLeave: this.mouseLeave,
                          };
                    return r.a.createElement(
                      e,
                      l({}, m, k, {
                        blockProps: o,
                        ref: function (e) {
                          t.wrapper = e;
                        },
                        style: P,
                      })
                    );
                  }),
                  i
                );
              })(o.Component)),
              (a.displayName =
                'Resizable(' +
                (function (e) {
                  var t = e.WrappedComponent || e;
                  return t.displayName || t.name || 'Component';
                })(e) +
                ')'),
              (a.WrappedComponent = e.WrappedComponent || e),
              (a.defaultProps = l(
                {
                  horizontal: 'relative',
                  vertical: !1,
                  resizeSteps: 1,
                  isResizable: !0,
                },
                t
              )),
              i
            );
          };
        },
        p = function (e, t) {
          var n = t.getEditorState,
            o = t.setEditorState;
          return function (t) {
            var r = e.getEntityAt(0);
            if (r) {
              var i = n();
              i.getCurrentContent().mergeEntityData(r, l({}, t)),
                o(a.EditorState.forceSelection(i, i.getSelection()));
            }
          };
        };
      t.a = function (e) {
        var t = {
          getEditorRef: void 0,
          getReadOnly: void 0,
          getEditorState: void 0,
          setEditorState: void 0,
        };
        return {
          initialize: function (e) {
            var n = e.getEditorRef,
              a = e.getReadOnly,
              o = e.getEditorState,
              r = e.setEditorState;
            (t.getReadOnly = a),
              (t.getEditorRef = n),
              (t.getEditorState = o),
              (t.setEditorState = r);
          },
          decorator: u({ config: e, store: t }),
          blockRendererFn: function (e, t) {
            var n = t.getEditorState,
              a = t.setEditorState,
              o = e.getEntityAt(0),
              r = n().getCurrentContent();
            return {
              props: {
                resizeData: o ? r.getEntity(o).getData() : {},
                setResizeData: p(e, { getEditorState: n, setEditorState: a }),
              },
            };
          },
        };
      };
    },
    Pq6H: function (e, t, n) {
      'use strict';
      var a = n('ERkP'),
        o = n.n(a),
        r = n('zpdM'),
        i = n('7O4Y');
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = {},
          r = Object.keys(e);
        for (a = 0; a < r.length; a++)
          (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var c = function (e, t, n) {
        var a = e
            .getCurrentContent()
            .createEntity('IMAGE', 'IMMUTABLE', s({}, n, { src: t }))
            .getLastCreatedEntityKey(),
          o = r.AtomicBlockUtils.insertAtomicBlock(e, a, ' ');
        return r.EditorState.forceSelection(
          o,
          o.getCurrentContent().getSelectionAfter()
        );
      };
      function d(e) {
        var t = e.block,
          n = e.className,
          a = e.theme,
          r = void 0 === a ? {} : a,
          c = l(e, ['block', 'className', 'theme']),
          d =
            (c.blockProps,
            c.customStyleMap,
            c.customStyleFn,
            c.decorator,
            c.forceSelection,
            c.offsetKey,
            c.selection,
            c.tree,
            c.blockStyleFn,
            c.preventScroll,
            c.contentState),
          u = l(c, [
            'blockProps',
            'customStyleMap',
            'customStyleFn',
            'decorator',
            'forceSelection',
            'offsetKey',
            'selection',
            'tree',
            'blockStyleFn',
            'preventScroll',
            'contentState',
          ]),
          p = Object(i.a)(r.image, n),
          m = d.getEntity(t.getEntityAt(0)).getData().src;
        return o.a.createElement(
          'img',
          s({}, u, { src: m, role: 'presentation', className: p })
        );
      }
      var u = {};
      t.a = function (e) {
        void 0 === e && (e = {});
        var t = e.theme ? e.theme : u,
          n = e.imageComponent || d;
        e.decorator && (n = e.decorator(n));
        var a = function (e) {
          return o.a.createElement(n, s({}, e, { theme: t }));
        };
        return {
          blockRendererFn: function (e, t) {
            var n = t.getEditorState;
            if ('atomic' === e.getType()) {
              var o = n().getCurrentContent(),
                r = e.getEntityAt(0);
              if (!r) return null;
              var i = o.getEntity(r).getType();
              return 'IMAGE' === i || 'image' === i
                ? { component: a, editable: !1 }
                : null;
            }
            return null;
          },
          addImage: c,
        };
      };
    },
    Qigo: function (e, t, n) {
      e.exports = {
        root: 'styles_root__2Zw7c',
        param: 'styles_param__24TIr',
        paramBig: 'styles_paramBig__18mcN',
        paramName: 'styles_paramName__3RlGv',
        subParams: 'styles_subParams__3fEXX',
        subParam: 'styles_subParam__cOQn5',
        subParamName: 'styles_subParamName__O3FFC',
        list: 'styles_list__1gBQ7',
        listEntry: 'styles_listEntry__1eLIS',
        guideCodeBlock: 'styles_guideCodeBlock__OTTDR',
      };
    },
    Tw9o: function (e, t, n) {
      e.exports = { root: 'InlineCode_root__1EGp7' };
    },
    aLJq: function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__1Tpwm',
        options: 'editorStyles_options__1kqgG',
      };
    },
    bsbD: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var a = n('ERkP'),
        o = n.n(a),
        r = n('7O4Y'),
        i = (n('U/75'), n('Tw9o')),
        s = n.n(i),
        l = o.a.createElement;
      function c(e) {
        var t = e.code,
          n = e.className,
          a = Object(r.a)(s.a.root, n);
        return l(
          'span',
          { className: a },
          l('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
    gIa7: function (e, t, n) {
      e.exports = {
        editor: 'editorStyles_editor__1burQ',
        options: 'editorStyles_options__3xQKk',
      };
    },
    n8tw: function (e, t, n) {
      e.exports = {
        addImage: 'styles_addImage__1xY_q',
        addImagePopover: 'styles_addImagePopover__3i69b',
        addImageClosedPopover: 'styles_addImageClosedPopover__1Jq7k',
        addImageButton: 'styles_addImageButton__3L2ZC',
        addImagePressedButton:
          'styles_addImagePressedButton__1RvA8 styles_addImageButton__3L2ZC',
        addImageBottomGradient: 'styles_addImageBottomGradient__3ircD',
        addImageInput: 'styles_addImageInput__1VLTX',
        addImageConfirmButton: 'styles_addImageConfirmButton__1ke48',
      };
    },
    p4to: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/image',
        function () {
          return n('4uA2');
        },
      ]);
    },
  },
  [['p4to', 0, 2, 1, 3, 4, 5]],
]);
