_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    '4Qf9': function (e, t, a) {
      e.exports = {
        root: 'styles_root__2CH6l',
        center: 'styles_center__11MfE',
        param: 'styles_param__3Pz1n',
        paramBig: 'styles_paramBig__FLwwf',
        paramName: 'styles_paramName__2UdWx',
        subParams: 'styles_subParams__243aH',
        subParam: 'styles_subParam__22FU1',
        subParamName: 'styles_subParamName__1_Fln',
        list: 'styles_list__14uW0',
        listEntry: 'styles_listEntry__B2YmL',
        guideCodeBlock: 'styles_guideCodeBlock__3TqIk',
      };
    },
    '8yvn': function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/emoji',
        function () {
          return a('r6LX');
        },
      ]);
    },
    Ctu1: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return o;
      });
      var n = a('zpdM');
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function o(e) {
        void 0 === e && (e = {});
        var t = e,
          a = {};
        return {
          subscribeToItem: function (e, t) {
            (a[e] = a[e] || []), a[e].push(t);
          },
          unsubscribeFromItem: function (e, t) {
            var n = a[e];
            n &&
              (a[e] = n.filter(function (e) {
                return e !== t;
              }));
          },
          updateItem: function (e, n) {
            var o;
            t = s({}, t, (((o = {})[e] = n), o));
            var i = a[e];
            i &&
              i.forEach(function (a) {
                return a(t[e]);
              });
          },
          getItem: function (e) {
            return t[e];
          },
        };
      }
      var i = {
        decodeOffsetKey: function (e) {
          var t = e.split('-'),
            a = t[0],
            n = t[1],
            s = t[2];
          return {
            blockKey: a,
            decoratorKey: parseInt(n, 10),
            leafKey: parseInt(s, 10),
          };
        },
        createLinkAtSelection: function (e, t) {
          var a = e
              .getCurrentContent()
              .createEntity('LINK', 'MUTABLE', { url: t })
              .getLastCreatedEntityKey(),
            s = n.RichUtils.toggleLink(e, e.getSelection(), a);
          return n.EditorState.forceSelection(s, e.getSelection());
        },
        removeLinkAtSelection: function (e) {
          var t = e.getSelection();
          return n.RichUtils.toggleLink(e, t, null);
        },
        collapseToEnd: function (e) {
          var t = e.getSelection();
          return n.EditorState.forceSelection(
            e,
            t.merge({
              anchorKey: t.getEndKey(),
              focusKey: t.getEndKey(),
              anchorOffset: t.getEndOffset(),
              focusOffset: t.getEndOffset(),
            })
          );
        },
        getCurrentEntityKey: function (e) {
          var t = e.getSelection(),
            a = t.getAnchorKey(),
            n = e.getCurrentContent().getBlockForKey(a),
            s = t.getAnchorOffset(),
            o = t.getIsBackward() ? s - 1 : s;
          return n.getEntityAt(o);
        },
        getCurrentEntity: function (e) {
          var t = e.getCurrentContent(),
            a = this.getCurrentEntityKey(e);
          return a ? t.getEntity(a) : null;
        },
        hasEntity: function (e, t) {
          var a = this.getCurrentEntity(e);
          return Boolean(a && a.getType() === t);
        },
      };
      t.b = i;
    },
    'J+VU': function (e, t, a) {
      e.exports = {
        editor: 'editorStyles_editor__33wWm',
        options: 'editorStyles_options__127xF',
      };
    },
    Tw9o: function (e, t, a) {
      e.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return c;
      });
      var n = a('ERkP'),
        s = a.n(n),
        o = a('7O4Y'),
        i = (a('U/75'), a('Tw9o')),
        r = a.n(i),
        l = s.a.createElement;
      function c(e) {
        var t = e.code,
          a = e.className,
          n = Object(o.a)(r.a.root, a);
        return l(
          'span',
          { className: n },
          l('code', { dangerouslySetInnerHTML: { __html: t } })
        );
      }
    },
    dR1D: function (e, t, a) {
      e.exports = {
        editor: 'editorStyles_editor__1bE6n',
        options: 'editorStyles_options__EvIgq',
      };
    },
    r6LX: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return z;
        });
      var n = a('9fIP'),
        s = a('MMYH'),
        o = a('8K1b'),
        i = a('K/z8'),
        r = a('sRHE'),
        l = a('ERkP'),
        c = a.n(l),
        m = a('4Qf9'),
        u = a.n(m),
        p = a('Diez'),
        d = a('YITQ'),
        f = a('lIm4'),
        h = a('pWxA'),
        g = a('zjfJ'),
        j = a('RRIY'),
        b = a('a2pL'),
        v = a('J+VU'),
        S = a.n(v),
        N = c.a.createElement;
      function y(e) {
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
          var a,
            n = Object(r.a)(e);
          if (t) {
            var s = Object(r.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var E = Object(b.a)(),
        P = E.EmojiSuggestions,
        C = E.EmojiSelect,
        w = [E],
        _ =
          'Cool, we can have all sorts of Emojis here. \ud83d\ude4c\n\ud83c\udf3f\u2603\ufe0f\ud83c\udf89\ud83d\ude48 aaaand maybe a few more here \ud83d\udc32\u2600\ufe0f\ud83d\uddfb Quite fun!',
        O = (function (e) {
          Object(o.a)(a, e);
          var t = y(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var s = arguments.length, o = new Array(s), i = 0; i < s; i++)
              o[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(o))),
              Object(g.a)(Object(h.a)(e), 'state', {
                editorState: Object(j.b)(_),
              }),
              Object(g.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(g.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return N(
                    'div',
                    null,
                    N(
                      'div',
                      { className: S.a.editor, onClick: this.focus },
                      N(j.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: w,
                        ref: function (t) {
                          e.editor = t;
                        },
                      }),
                      N(P, null)
                    ),
                    N('div', { className: S.a.options }, N(C, null))
                  );
                },
              },
            ]),
            a
          );
        })(l.Component),
        x = a('dR1D'),
        I = a.n(x),
        T = c.a.createElement;
      function k(e) {
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
          var a,
            n = Object(r.a)(e);
          if (t) {
            var s = Object(r.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var B = Object(b.a)({ useNativeArt: !0 }),
        R = B.EmojiSuggestions,
        A = B.EmojiSelect,
        D = [B],
        L =
          'Cool, we can have all sorts of Emojis here. \ud83d\ude4c\n\ud83c\udf3f\u2603\ufe0f\ud83c\udf89\ud83d\ude48 aaaand maybe a few more here \ud83d\udc32\u2600\ufe0f\ud83d\uddfb Quite fun!',
        K = (function (e) {
          Object(o.a)(a, e);
          var t = k(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var s = arguments.length, o = new Array(s), i = 0; i < s; i++)
              o[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(o))),
              Object(g.a)(Object(h.a)(e), 'state', {
                editorState: Object(j.b)(L),
              }),
              Object(g.a)(Object(h.a)(e), 'onChange', function (t) {
                e.setState({ editorState: t });
              }),
              Object(g.a)(Object(h.a)(e), 'focus', function () {
                e.editor.focus();
              }),
              e
            );
          }
          return (
            Object(s.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return T(
                    'div',
                    null,
                    T(
                      'div',
                      { className: I.a.editor, onClick: this.focus },
                      T(j.c, {
                        editorState: this.state.editorState,
                        onChange: this.onChange,
                        plugins: D,
                        ref: function (t) {
                          e.editor = t;
                        },
                      }),
                      T(R, null)
                    ),
                    T('div', { className: I.a.options }, T(A, null))
                  );
                },
              },
            ]),
            a
          );
        })(l.Component),
        M = a('9zpB'),
        W = a('98Mn'),
        U = a('bsbD'),
        Y = a('3h/d'),
        F = c.a.createElement;
      function G(e) {
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
          var a,
            n = Object(r.a)(e);
          if (t) {
            var s = Object(r.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(i.a)(this, a);
        };
      }
      var z = (function (e) {
        Object(o.a)(a, e);
        var t = G(a);
        function a() {
          return Object(n.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(s.a)(a, [
            {
              key: 'render',
              value: function () {
                return F(
                  Y.a,
                  null,
                  F(
                    p.a,
                    null,
                    F(d.a, { level: 2 }, 'Emoji'),
                    F(
                      'p',
                      null,
                      'Consistent Emoji display across all platforms, independent of the host system.'
                    ),
                    F(d.a, { level: 3 }, 'Attribution to EmojiOne'),
                    F(
                      'p',
                      null,
                      'The beautiful Emoji art used in this plugin is provided by the',
                      ' ',
                      F(W.a, { href: 'http://emojione.com/' }, 'Emoji One'),
                      ' ',
                      'project. Personal or non-commercial use of the emojis do not require attribution. For the rights to use our emojis still for free in commercial projects proper attribution in form of a link is required. More here:',
                      ' ',
                      F(
                        W.a,
                        { href: 'http://emojione.com/licensing' },
                        'http://emojione.com/licensing'
                      ),
                      '.'
                    ),
                    F(d.a, { level: 3 }, 'Implementation'),
                    F(
                      'p',
                      null,
                      'Emoji unicode characters are wrapped in a span, hidden, and displayed instead through a background image. This creates consistency across all platforms while maintaining natural copy/pasting functionality.'
                    ),
                    F(
                      'p',
                      null,
                      'If useNativeArt parameter is used, emoji unicode characters are displayed. This enables displaying platform specific art for emojis.'
                    ),
                    F(d.a, { level: 3 }, 'Usage'),
                    F(
                      'p',
                      null,
                      'To use simply type ',
                      F('code', null, ':'),
                      ' which will show an autocomplete with matching emojis.'
                    ),
                    F(d.a, { level: 3 }, 'Supported Environment'),
                    F(
                      'ul',
                      { className: u.a.list },
                      F('li', { className: u.a.listEntry }, 'Desktop: Yes'),
                      F('li', { className: u.a.listEntry }, 'Mobile: Yes'),
                      F(
                        'li',
                        { className: u.a.listEntry },
                        'Screen-reader: Yes'
                      )
                    )
                  ),
                  F(
                    M.a,
                    null,
                    F(d.a, { level: 2 }, 'Getting Started'),
                    F(f.a, { code: 'npm install @draft-js-plugins/editor' }),
                    F(f.a, { code: 'npm install @draft-js-plugins/emoji' }),
                    F(f.a, {
                      code:
                        "// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createEmojiPlugin from '@draft-js-plugins/emoji';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst emojiPlugin = createEmojiPlugin();\nconst { EmojiSuggestions, EmojiSelect } = emojiPlugin;\n\n// The Editor accepts an array of plugins. In this case, only the emojiPlugin is\n// passed in, although it is possible to pass in multiple plugins.\n// The EmojiSuggestions component is internally connected to the editor and will\n// be updated & positioned once the user starts the autocompletion with a colon.\n// The EmojiSelect component also is internally connected to the editor. He add\n// a button which allows open emoji select popup.\nconst MyEditor = ({ editorState, onChange }) => (\n  <div>\n    <Editor\n      editorState={editorState}\n      onChange={onChange}\n      plugins={[emojiPlugin]}\n    />\n    <EmojiSuggestions />\n    <EmojiSelect />\n  </div>\n);\n\nexport default MyEditor;\n",
                      name: 'gettingStarted.js',
                    }),
                    F(d.a, { level: 3 }, 'Importing the default styles'),
                    F(
                      'p',
                      null,
                      'The plugin ships with a default styling available at this location in the installed package: \xa0',
                      F(U.a, {
                        code:
                          'node_modules/@draft-js-plugins/emoji/lib/plugin.css',
                      })
                    ),
                    F(d.a, { level: 4 }, 'Webpack Usage'),
                    F(
                      'ul',
                      { className: u.a.list },
                      F(
                        'li',
                        { className: u.a.listEntry },
                        '1. Install Webpack loaders: \xa0',
                        F(U.a, {
                          code: 'npm i style-loader css-loader --save-dev',
                        })
                      ),
                      F(
                        'li',
                        { className: u.a.listEntry },
                        '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                        F(f.a, {
                          code:
                            "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                          className: u.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: u.a.listEntry },
                        '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                        F(f.a, {
                          code:
                            "import '@draft-js-plugins/emoji/lib/plugin.css';",
                          className: u.a.guideCodeBlock,
                        })
                      ),
                      F(
                        'li',
                        { className: u.a.listEntry },
                        '4. Restart Webpack.'
                      )
                    ),
                    F(d.a, { level: 4 }, 'Browserify Usage'),
                    F(
                      'p',
                      null,
                      'Please help, by submiting a Pull Request to the',
                      ' ',
                      F(
                        W.a,
                        {
                          href:
                            'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Emoji/index.js',
                        },
                        'documentation'
                      ),
                      '.'
                    )
                  ),
                  F(
                    p.a,
                    null,
                    F(d.a, { level: 2 }, 'Configuration Parameters'),
                    F(
                      'div',
                      { className: u.a.param },
                      F('span', { className: u.a.paramName }, 'theme'),
                      F(
                        'span',
                        null,
                        'Object of CSS classes with the following keys.'
                      ),
                      F(
                        'div',
                        { className: u.a.subParams },
                        F(
                          'div',
                          { className: u.a.subParam },
                          F('span', { className: u.a.subParamName }, 'emoji:'),
                          'CSS class for the emoji wrapper.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSuggestions:'
                          ),
                          'CSS class for suggestions component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSuggestionsEntry:'
                          ),
                          'CSS class for an entry in the suggestions component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSuggestionsEntryFocused:'
                          ),
                          'CSS class for the focused entry in the suggestions component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSuggestionsEntryText:'
                          ),
                          'CSS class for an entry\u2019s text in the suggestions component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSuggestionsEntryIcon:'
                          ),
                          'CSS class for an entry\u2019s emoji image in the suggestions component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelect:'
                          ),
                          'CSS class for emoji select component.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectButton:'
                          ),
                          'CSS class for button to open emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectButtonPressed:'
                          ),
                          'CSS class for pressed state of button to open emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopover:'
                          ),
                          'CSS class for emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverClosed:'
                          ),
                          'CSS class for closed state of the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverTitle:'
                          ),
                          'CSS class for a title of active group in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverGroups:'
                          ),
                          'CSS class for the emoji groups wrapper in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverGroup:'
                          ),
                          'CSS class for a group of emojis in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverGroupTitle:'
                          ),
                          'CSS class for a title of emoji group in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverGroupList:'
                          ),
                          'CSS class for a group emoji list in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverGroupItem:'
                          ),
                          'CSS class for a group emoji list item in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverToneSelect:'
                          ),
                          'CSS class for tone select in the emoji select popup.',
                          F(
                            'div',
                            null,
                            F(
                              'em',
                              null,
                              'Important. The tone select must overlap the emoji select popup so that disable controls of the popup. By default'
                            ),
                            F(f.a, {
                              code:
                                '.emojiSelectPopoverToneSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 2;\n}',
                            })
                          )
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverToneSelectList:'
                          ),
                          'CSS class for a tone select emoji list in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverToneSelectItem:'
                          ),
                          'CSS class for a tone select emoji list item in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverEntry:'
                          ),
                          'CSS class for an emoji entry in the emoji select popup (including tone select).'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverEntryFocused:'
                          ),
                          'CSS class for the focused emoji entry in the emoji select popup (including tone select).'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverEntryIcon:'
                          ),
                          'CSS class for an emoji entry\u2019s image in the emoji select popup (including tone select).'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverNav:'
                          ),
                          'CSS class for a group navigation in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverNavItem:'
                          ),
                          'CSS class for a group navigation item in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverNavEntry:'
                          ),
                          'CSS class for an entry of the group navigation in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverNavEntryActive:'
                          ),
                          'CSS class for active state of the group navigation entry in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverScrollbarOuter:'
                          ),
                          'CSS class for the outer scrollbar box in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverScrollbar:'
                          ),
                          'CSS class for scrollbar in the emoji select popup.'
                        ),
                        F(
                          'div',
                          { className: u.a.subParam },
                          F(
                            'span',
                            { className: u.a.subParamName },
                            'emojiSelectPopoverScrollbarThumb:'
                          ),
                          'CSS class for scrollbar thumb in the emoji select popup.'
                        )
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F(
                        'span',
                        { className: u.a.paramName },
                        'positionSuggestions'
                      ),
                      F(
                        'span',
                        null,
                        'The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the colon. In addition the object contains prevProps, prevState, state & props. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.'
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F('span', { className: u.a.paramName }, 'priorityList'),
                      F(
                        'div',
                        null,
                        'These entries will be show first in the EmojiSuggestions dropdown after typing `:`. Must be an object which must contain Emoji entries used by EmojiOne e.g.',
                        F(f.a, {
                          code:
                            'priorityList: {\n  \':see_no_evil:\': ["1f648"],\n  \':raised_hands:\': ["1f64c"],\n  \':100:\': ["1f4af"],\n}',
                        })
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F('span', { className: u.a.paramName }, 'selectGroups'),
                      F(
                        'div',
                        null,
                        'Emoji select groups specification. Must be an array of objects, which declare each group: title, icon (can be a string or React element), array of emoji categories from EmojiOne e.g.',
                        F(f.a, {
                          code:
                            "selectGroups: [{\n  title: 'Society',\n  icon: '\ud83d\udc65',\n  categories: ['people', 'food', 'travel'],\n}, {\n  title: 'Objects & symbols',\n  icon: '\u2764\ufe0f',\n  categories: ['objects', 'symbols'],\n}]",
                        })
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F(
                        'span',
                        { className: u.a.paramName },
                        'selectButtonContent'
                      ),
                      F(
                        'span',
                        null,
                        'Content of button which opens emoji select popup. (Default content is \u263a)'
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F(
                        'span',
                        { className: u.a.paramName },
                        'toneSelectOpenDelay'
                      ),
                      F(
                        'span',
                        null,
                        'Time delay before opening tone select. (Default value is 500\xa0ms)'
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F('span', { className: u.a.paramName }, 'useNativeArt'),
                      F(
                        'span',
                        null,
                        'If set to ',
                        F(U.a, { code: 'true' }),
                        ', uses host system art for emojis instead of EmojiOne art. Default value is',
                        ' ',
                        F(U.a, { code: 'false' }),
                        '.'
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F('span', { className: u.a.paramName }, 'emojiImage'),
                      F(
                        'span',
                        null,
                        'If provided the passed component is used to render the preview image for the suggestions. If this parameter is set the',
                        ' ',
                        F(U.a, { code: 'useNativeArt' }),
                        ' is ignored. You can use this component to implement your own emoji library. It receives the following props: emoji and theme'
                      )
                    ),
                    F(
                      'div',
                      { className: u.a.paramBig },
                      F(
                        'span',
                        { className: u.a.paramName },
                        'emojiInlineText'
                      ),
                      F(
                        'span',
                        null,
                        'If provided the passed component is used to render the emojis in the text. If this parameter is set the',
                        ' ',
                        F(U.a, { code: 'useNativeArt' }),
                        ' is ignored. You can use this component to implement your own emoji library. It receives the following props: decoratedText, className, children and theme'
                      )
                    ),
                    F(d.a, { level: 3 }, 'EmojiSuggestions'),
                    F(
                      'div',
                      null,
                      'The EmojiSuggestions component is part of the plugin and should placed somewhere in the JSX after the Editor. It takes the following props:',
                      F(
                        'div',
                        { className: u.a.paramBig },
                        F(
                          'span',
                          { className: u.a.paramName },
                          'onSearchChange'
                        ),
                        F(
                          'span',
                          null,
                          'A callback which is triggered whenever the search term changes. The first argument is an object which constains the search term in the property value.'
                        )
                      ),
                      F(
                        'div',
                        { className: u.a.paramBig },
                        F('span', { className: u.a.paramName }, 'onOpen'),
                        F(
                          'span',
                          null,
                          'A callback which is triggered whenever the suggestions popover opens.'
                        )
                      ),
                      F(
                        'div',
                        { className: u.a.paramBig },
                        F('span', { className: u.a.paramName }, 'onClose'),
                        F(
                          'span',
                          null,
                          'A callback which is triggered whenever the suggestions popover closes.'
                        )
                      )
                    )
                  ),
                  F(
                    p.a,
                    null,
                    F(d.a, { level: 2 }, 'Simple Emoji Example'),
                    F(O, null),
                    F(f.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createEmojiPlugin from '@draft-js-plugins/emoji';\nimport editorStyles from './editorStyles.module.css';\n\nconst emojiPlugin = createEmojiPlugin();\nconst { EmojiSuggestions, EmojiSelect } = emojiPlugin;\nconst plugins = [emojiPlugin];\nconst text = `Cool, we can have all sorts of Emojis here. \ud83d\ude4c\n\ud83c\udf3f\u2603\ufe0f\ud83c\udf89\ud83d\ude48 aaaand maybe a few more here \ud83d\udc32\u2600\ufe0f\ud83d\uddfb Quite fun!`;\n\nexport default class SimpleEmojiEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <EmojiSuggestions />\n        </div>\n        <div className={editorStyles.options}>\n          <EmojiSelect />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleEmojiEditor.js',
                    }),
                    F(f.a, {
                      code:
                        '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n',
                      name: 'editorStyles.js',
                    })
                  ),
                  F(
                    p.a,
                    null,
                    F(
                      d.a,
                      { level: 2 },
                      'Custom Emoji Example with native emojis'
                    ),
                    F(K, null),
                    F(f.a, {
                      code:
                        "import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createEmojiPlugin from '@draft-js-plugins/emoji';\nimport editorStyles from './editorStyles.module.css';\n\nconst emojiPlugin = createEmojiPlugin({\n  useNativeArt: true,\n});\nconst { EmojiSuggestions, EmojiSelect } = emojiPlugin;\nconst plugins = [emojiPlugin];\nconst text = `Cool, we can have all sorts of Emojis here. \ud83d\ude4c\n\ud83c\udf3f\u2603\ufe0f\ud83c\udf89\ud83d\ude48 aaaand maybe a few more here \ud83d\udc32\u2600\ufe0f\ud83d\uddfb Quite fun!`;\n\nexport default class CustomEmojiEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <EmojiSuggestions />\n        </div>\n        <div className={editorStyles.options}>\n          <EmojiSelect />\n        </div>\n      </div>\n    );\n  }\n}\n",
                      name: 'SimpleEmojiEditor.js',
                    })
                  )
                );
              },
            },
          ]),
          a
        );
      })(l.Component);
    },
  },
  [['8yvn', 0, 2, 8, 11, 10, 1, 3, 4, 6]],
]);
