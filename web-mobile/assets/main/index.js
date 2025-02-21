System.register("chunks:///_virtual/AllScoreLabels.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CheckSlotResult.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, CheckSlotResult;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      CheckSlotResult = module.CheckSlotResult;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4d394EnvnBNfJIcGMNyc3Mk", "AllScoreLabels", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AllScoreLabels = exports('AllScoreLabels', (_dec = ccclass('AllScoreLabels'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AllScoreLabels, _Component);
        function AllScoreLabels() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "totalScoreLabel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winScoreLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betLabel", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AllScoreLabels.prototype;
        _proto.start = function start() {
          var _this2 = this;
          CheckSlotResult.RegistUpdateTotalLabel(function (totalScore) {
            _this2.totalScoreLabel.string = totalScore.toString();
          }, this);
          CheckSlotResult.RegistUpdateWinScoreLabel(function (winScore) {
            _this2.winScoreLabel.string = winScore.toString();
          }, this);
          CheckSlotResult.RegistUpdateBetLabel(function (betScore) {
            _this2.betLabel.string = betScore.toString();
          }, this);
          CheckSlotResult.updateTotalScore();
          CheckSlotResult.updateWinScore();
          CheckSlotResult.updateBetScore();
        };
        return AllScoreLabels;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "totalScoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winScoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "betLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BtnToFreeGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FlowControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, FlowControl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      FlowControl = module.FlowControl;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e201eWZ+ndIwKBglBoRqclJ", "BtnToFreeGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BtnToFreeGame = exports('BtnToFreeGame', (_dec = ccclass('BtnToFreeGame'), _dec2 = property(FlowControl), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BtnToFreeGame, _Component);
        function BtnToFreeGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "flowControl", _descriptor, _assertThisInitialized(_this));
          _this.clicked = false;
          return _this;
        }
        var _proto = BtnToFreeGame.prototype;
        _proto.onClick = function onClick() {
          if (this.clicked || !FlowControl.canClick) {
            return;
          }
          this.flowControl.changeToFreeGame();
          this.clicked = true;
        };
        _proto.reset = function reset() {
          // Initialize when enter main game
          this.clicked = false;
        };
        return BtnToFreeGame;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "flowControl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheckSlotResult.ts", ['cc', './FlowControl.ts'], function (exports) {
  var cclegacy, EventTarget, FlowControl;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }, function (module) {
      FlowControl = module.FlowControl;
    }],
    execute: function () {
      cclegacy._RF.push({}, "921deZu4dZCZooNGjK5mPAe", "CheckSlotResult", undefined);
      var CheckSlotResult = exports('CheckSlotResult', /*#__PURE__*/function () {
        function CheckSlotResult() {}
        // For other components to regist events
        CheckSlotResult.RegistPlayWin = function RegistPlayWin(callback, node) {
          this.updateScoreEventTarget.on(this.playWinEvent, callback, node);
        };
        CheckSlotResult.RegistUpdateTotalLabel = function RegistUpdateTotalLabel(callback, node) {
          this.updateScoreEventTarget.on(this.updateTotalLabelEvent, callback, node);
        };
        CheckSlotResult.RegistUpdateWinScoreLabel = function RegistUpdateWinScoreLabel(callback, node) {
          this.updateScoreEventTarget.on(this.updateWinScoreLabelEvent, callback, node);
        };
        CheckSlotResult.RegistUpdateBetLabel = function RegistUpdateBetLabel(callback, node) {
          this.updateScoreEventTarget.on(this.updateBetLabelEvent, callback, node);
        }

        // Get score from server
        ;

        CheckSlotResult.getSpinResult = function getSpinResult() {
          var _this = this;
          // Spin cost
          this.totalScore -= this.betScore;
          this.updateTotalScore();
          FlowControl.isWaitingResult = true;

          // Score range for API
          var data = {
            "MinNumber": 1000,
            "MaxNumber": 600000
          };

          // Get score API
          fetch("https://dev.bana-bana.com/api/HttpRadomNumberEcho", {
            method: "POST",
            // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(function (response) {
            FlowControl.isWaitingResult = false;
            if (response.ok) {
              return response.text();
            } else {
              console.log("Response not ok: " + response.status);
              return null;
            }
          }).then(function (value) {
            if (!value || FlowControl.isUpdatingScore) {
              // FlowControl.isUpdatingScore == true means that all reels had stoped (timeout).
              return;
            }
            console.log("score: " + value);
            _this.emitWinScore(parseInt(value));
          })["catch"](function (error) {
            console.error("Error:", error);
            FlowControl.isWaitingResult = false;
          });
        };
        CheckSlotResult.emitWinScore = function emitWinScore(score) {
          this.winScore = score;
          this.totalScore += this.winScore;
          CheckSlotResult.updateScoreEventTarget.emit(CheckSlotResult.playWinEvent, this.winScore);
        };
        CheckSlotResult.updateWinScore = function updateWinScore() {
          CheckSlotResult.updateScoreEventTarget.emit(CheckSlotResult.updateWinScoreLabelEvent, this.winScore);
        };
        CheckSlotResult.updateTotalScore = function updateTotalScore() {
          CheckSlotResult.updateScoreEventTarget.emit(CheckSlotResult.updateTotalLabelEvent, this.totalScore);
        };
        CheckSlotResult.updateBetScore = function updateBetScore() {
          CheckSlotResult.updateScoreEventTarget.emit(CheckSlotResult.updateBetLabelEvent, this.betScore);
        };
        return CheckSlotResult;
      }());
      CheckSlotResult.freeGameScore = 0;
      CheckSlotResult.winScore = 0;
      CheckSlotResult.totalScore = 10000;
      CheckSlotResult.betScore = 10;
      CheckSlotResult.updateScoreEventTarget = new EventTarget();
      CheckSlotResult.playWinEvent = "PlayWin";
      CheckSlotResult.updateTotalLabelEvent = "UpdateTotalLabel";
      CheckSlotResult.updateWinScoreLabelEvent = "UpdateWinScoreLabel";
      CheckSlotResult.updateBetLabelEvent = "UpdateBetLabel";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickButtonEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, tween, Vec3, EventHandler, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      tween = module.tween;
      Vec3 = module.Vec3;
      EventHandler = module.EventHandler;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c6ef89uopJHTIJuuv18hYgT", "ClickButtonEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ClickButtonEffect = exports('ClickButtonEffect', (_dec = ccclass('ClickButtonEffect'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickButtonEffect, _Component);
        function ClickButtonEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "shrinkDuration", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shrink", _descriptor2, _assertThisInitialized(_this));
          _this.clickTween = void 0;
          return _this;
        }
        var _proto = ClickButtonEffect.prototype;
        _proto.start = function start() {
          this.clickTween = tween(this.node).to(this.shrinkDuration, {
            scale: new Vec3(this.shrink, this.shrink, 1)
          }).to(this.shrinkDuration, {
            scale: Vec3.ONE
          });
          var clickEventHandler = new EventHandler();
          clickEventHandler.target = this.node;
          clickEventHandler.component = "ClickButtonEffect";
          clickEventHandler.handler = "onClick";
          var btn = this.node.getComponent(Button);
          btn.clickEvents.push(clickEventHandler);
        };
        _proto.onClick = function onClick() {
          this.clickTween.start();
        };
        return ClickButtonEffect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shrinkDuration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shrink", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnterFreeGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, tween, Color, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      tween = module.tween;
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "44ef05OV9hOpaXwRy/tF/1F", "EnterFreeGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EnterFreeGame = exports('EnterFreeGame', (_dec = ccclass('EnterFreeGame'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EnterFreeGame, _Component);
        function EnterFreeGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite", _descriptor, _assertThisInitialized(_this));
          _this.originalColor = void 0;
          return _this;
        }
        var _proto = EnterFreeGame.prototype;
        _proto.onLoad = function onLoad() {
          this.originalColor = this.sprite.color;
        };
        _proto.reset = function reset() {
          // Initialize when enter free game
          this.node.active = true;
          this.sprite.color.set(this.originalColor);
          // Fad-in
          tween(this.sprite).to(0.2, {
            color: Color.WHITE
          }).start();
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
        };
        return EnterFreeGame;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FirstScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Button, director, assetManager, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      director = module.director;
      assetManager = module.assetManager;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "520a8fBBSxAHanvTVkCS0VZ", "FirstScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FirstScene = exports('FirstScene', (_dec = ccclass('FirstScene'), _dec2 = property(Button), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FirstScene, _Component);
        function FirstScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "midBundle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highBundle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterButton", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FirstScene.prototype;
        _proto.start = function start() {
          var _this2 = this;
          director.addPersistRootNode(this.node);
          var bundleCount = 2;
          var count = 0;
          this.enterButton.interactable = false;
          assetManager.loadBundle(this.midBundle, function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            FirstScene._midBundle = bundle;
            count++;
            if (count === bundleCount) {
              _this2.enterButton.interactable = true;
            }
          });
          assetManager.loadBundle(this.highBundle, function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            FirstScene._highBundle = bundle;
            count++;
            if (count === bundleCount) {
              _this2.enterButton.interactable = true;
            }
          });
        };
        _proto.onEnterScene = function onEnterScene() {
          FirstScene.TimeEnter = Date.now();
          director.loadScene("FirstScene/first_low1_4compress");
        };
        _proto.onEnterSceneFromBundle = function onEnterSceneFromBundle() {
          FirstScene.TimeEnter = Date.now();
          assetManager.loadBundle("low1_4compress", function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            bundle.loadScene("low1_4compress", function (err, scene) {
              director.runScene(scene);
            });
          });
        };
        _createClass(FirstScene, null, [{
          key: "MidBundle",
          get: function get() {
            return this._midBundle;
          }
        }, {
          key: "HighBundle",
          get: function get() {
            return this._highBundle;
          }
        }]);
        return FirstScene;
      }(Component), _class3._midBundle = null, _class3._highBundle = null, _class3.TimeEnter = 0, _class3.Counted = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "midBundle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "low1_2";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "highBundle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "original";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enterButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FlowControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, AudioSource, AudioClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "074749Fe2RDd4VFreDA21Cn", "FlowControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FlowControl = exports('FlowControl', (_dec = ccclass('FlowControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(AudioSource), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FlowControl, _Component);
        function FlowControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainUI", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeGameUI", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgm", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainBGM", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeGameBGM", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FlowControl.prototype;
        _proto.start = function start() {
          this.bgm.play();
        };
        _proto.changeToMain = function changeToMain() {
          this.freeGameUI.active = false;
          this.bgm.stop();
          this.mainUI.active = true;
          this.bgm.clip = this.mainBGM;
          this.bgm.play();
        };
        _proto.changeToFreeGame = function changeToFreeGame() {
          this.freeGameUI.active = true;
          this.bgm.stop();
          this.mainUI.active = false;
          this.bgm.clip = this.freeGameBGM;
          this.bgm.play();
        };
        _createClass(FlowControl, null, [{
          key: "canClick",
          get: function get() {
            return !FlowControl.isSpinning && !FlowControl.isWaitingResult && !FlowControl.isUpdatingScore;
          }
        }]);
        return FlowControl;
      }(Component), _class3.isWaitingResult = false, _class3.isUpdatingScore = false, _class3.isSpinning = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "freeGameUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mainBGM", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "freeGameBGM", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeGameBar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fd8ccwrbAJJc6JSAQSzSSsc", "FreeGameBar", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FreeGameBar = exports('FreeGameBar', (_dec = ccclass('FreeGameBar'), _dec2 = property(Animation), _dec3 = property([Animation]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FreeGameBar, _Component);
        function FreeGameBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "barAnimation", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor2, _assertThisInitialized(_this));
          _this._curCount = 0;
          _this.turnOnIndex = 0;
          return _this;
        }
        var _proto = FreeGameBar.prototype;
        _proto.turnOnLight = function turnOnLight() {
          var _this2 = this;
          // Bar animation
          this.barAnimation.play();
          this.scheduleOnce(function () {
            var light = _this2.light[_this2.turnOnIndex];
            light.play();
            _this2.turnOnIndex++;
          }, this.barAnimation.defaultClip.duration);
          this._curCount++;
        };
        _proto.reset = function reset() {
          // Initialize when enter free game
          this._curCount = 0;
          this.turnOnIndex = 0;
          this.light.forEach(function (light) {
            var state = light.getState(light.defaultClip.name);
            state.setTime(0);
            state.sample();
          });
        };
        _createClass(FreeGameBar, [{
          key: "maxCount",
          get:
          // Max number of light
          function get() {
            return this.light.length;
          }

          // Number of turn on light
        }, {
          key: "curCount",
          get: function get() {
            return this._curCount;
          }
        }]);
        return FreeGameBar;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "barAnimation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeGameButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FreeGameControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Node, AudioSource, AudioClip, Component, FreeGameControl, FreeGameBtnEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Node = module.Node;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      FreeGameControl = module.FreeGameControl;
      FreeGameBtnEvent = module.FreeGameBtnEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "1d66blo42JJuYkj0kdHgkdT", "FreeGameButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FreeGameBtnType = exports('FreeGameBtnType', /*#__PURE__*/function (FreeGameBtnType) {
        FreeGameBtnType[FreeGameBtnType["SamllPrize"] = 0] = "SamllPrize";
        FreeGameBtnType[FreeGameBtnType["MediumPrize"] = 1] = "MediumPrize";
        FreeGameBtnType[FreeGameBtnType["BigPrize"] = 2] = "BigPrize";
        FreeGameBtnType[FreeGameBtnType["LargePrize"] = 3] = "LargePrize";
        FreeGameBtnType[FreeGameBtnType["Wild"] = 4] = "Wild";
        FreeGameBtnType[FreeGameBtnType["Count"] = 5] = "Count";
        return FreeGameBtnType;
      }({}));
      var FreeGameButton = exports('FreeGameButton', (_dec = ccclass('FreeGameButton'), _dec2 = property(Animation), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(FreeGameControl), _dec9 = property(AudioSource), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FreeGameButton, _Component);
        function FreeGameButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clickAnimation", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "smallPrize", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mediumPrize", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigPrize", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "largePrize", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildPrize", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeGameControl", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAudioSource", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalAudio", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildAudio", _descriptor10, _assertThisInitialized(_this));
          _this.prizeData = void 0;
          _this._btnType = void 0;
          _this.isClicked = false;
          return _this;
        }
        var _proto = FreeGameButton.prototype;
        _proto.onLoad = function onLoad() {
          if (!FreeGameButton.demoBtnType) {
            // For free game demo. Click button type sequence.
            FreeGameButton.demoBtnType = [FreeGameBtnType.LargePrize, FreeGameBtnType.LargePrize, FreeGameBtnType.MediumPrize, FreeGameBtnType.SamllPrize, FreeGameBtnType.LargePrize, FreeGameBtnType.BigPrize, FreeGameBtnType.BigPrize, FreeGameBtnType.BigPrize, FreeGameBtnType.MediumPrize, FreeGameBtnType.LargePrize, FreeGameBtnType.Wild];
          }
          this.prizeData = new Map();
          this.prizeData.set(FreeGameBtnType.SamllPrize, this.smallPrize);
          this.prizeData.set(FreeGameBtnType.MediumPrize, this.mediumPrize);
          this.prizeData.set(FreeGameBtnType.BigPrize, this.bigPrize);
          this.prizeData.set(FreeGameBtnType.LargePrize, this.largePrize);
          this.prizeData.set(FreeGameBtnType.Wild, this.wildPrize);
        };
        _proto.onClick = function onClick() {
          if (this.isClicked || this.freeGameControl.isGetPrize) {
            return;
          }
          this.clickAnimation.play();

          // Get prize type
          var prizeType = FreeGameButton.isDemo ? FreeGameButton.demoBtnType[FreeGameButton.demoClickIndex] : this._btnType;
          if (prizeType != FreeGameBtnType.Wild) {
            this.btnAudioSource.playOneShot(this.normalAudio);
          } else {
            this.btnAudioSource.playOneShot(this.wildAudio);
          }
          FreeGameButton.demoClickIndex++;
          this._btnType = prizeType;
          var showPrize = this.prizeData.get(prizeType);
          var anim = showPrize.getComponent(Animation);
          // If get prize, show "Zeus Win" after the first prize animation clip has played.
          var duration = anim.clips[0].duration;
          // Dispatch event to parent: "FreeGameControl".
          this.node.dispatchEvent(new FreeGameBtnEvent(this, duration));
          // Show prize
          this.scheduleOnce(function () {
            // When active, the animation will be played
            showPrize.active = true;
          }, this.clickAnimation.defaultClip.duration - 0.1);
          this.isClicked = true;
        };
        _proto.setButtonType = function setButtonType(type) {
          this._btnType = type;
        };
        _proto.reset = function reset() {
          // Initialize when enter free game
          FreeGameButton.demoClickIndex = 0;
          this.isClicked = false;
          var state = this.clickAnimation.getState(this.clickAnimation.defaultClip.name);
          state.setTime(0);
          state.sample();
          this.prizeData.forEach(function (icon) {
            if (icon.active) {
              icon.active = false;
            }
          });
        };
        _createClass(FreeGameButton, [{
          key: "btnType",
          get: function get() {
            return this._btnType;
          }
        }]);
        return FreeGameButton;
      }(Component), _class3.demoBtnType = void 0, _class3.demoClickIndex = 0, _class3.isDemo = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickAnimation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smallPrize", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mediumPrize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bigPrize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "largePrize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wildPrize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "freeGameControl", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnAudioSource", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "normalAudio", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wildAudio", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FreeGameControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FreeGameButton.ts', './FlowControl.ts', './FreeGameBar.ts', './SpineControl.ts', './CheckSlotResult.ts', './EnterFreeGame.ts'], function (exports) {
  var _inheritsLoose, _createClass, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, CCFloat, Event, Animation, randomRangeInt, tween, Component, FreeGameBtnType, FreeGameButton, FlowControl, FreeGameBar, SpineControl, CheckSlotResult, EnterFreeGame;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      CCFloat = module.CCFloat;
      Event = module.Event;
      Animation = module.Animation;
      randomRangeInt = module.randomRangeInt;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      FreeGameBtnType = module.FreeGameBtnType;
      FreeGameButton = module.FreeGameButton;
    }, function (module) {
      FlowControl = module.FlowControl;
    }, function (module) {
      FreeGameBar = module.FreeGameBar;
    }, function (module) {
      SpineControl = module.SpineControl;
    }, function (module) {
      CheckSlotResult = module.CheckSlotResult;
    }, function (module) {
      EnterFreeGame = module.EnterFreeGame;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "e1996C1G+tM/bvczZ4PTRBH", "FreeGameControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // When free game button is clicked, this event will be dispatched.
      var FreeGameBtnEvent = exports('FreeGameBtnEvent', /*#__PURE__*/function (_Event) {
        _inheritsLoose(FreeGameBtnEvent, _Event);
        function FreeGameBtnEvent(btn, duration) {
          var _this;
          _this = _Event.call(this, FreeGameBtnEvent.EventName, true) || this;
          _this._button = void 0;
          _this._animDuration = void 0;
          _this._button = btn;
          _this._animDuration = duration;
          return _this;
        }
        _createClass(FreeGameBtnEvent, [{
          key: "button",
          get: function get() {
            return this._button;
          }
        }, {
          key: "animDuration",
          get: function get() {
            return this._animDuration;
          }
        }]);
        return FreeGameBtnEvent;
      }(Event));
      FreeGameBtnEvent.EventName = "FreeGameBtnClick";
      var FreeGameControl = exports('FreeGameControl', (_dec = ccclass('FreeGameControl'), _dec2 = property(FreeGameBar), _dec3 = property(FreeGameBar), _dec4 = property(FreeGameBar), _dec5 = property(FreeGameBar), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(SpineControl), _dec9 = property([CCFloat]), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(EnterFreeGame), _dec14 = property(FlowControl), _dec(_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FreeGameControl, _Component);
        function FreeGameControl() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this2, "smallBar", _descriptor, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "mediumBar", _descriptor2, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "bigBar", _descriptor3, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "largeBar", _descriptor4, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "zeusWin", _descriptor5, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "score", _descriptor6, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "raptor", _descriptor7, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "scoreChangeDelay", _descriptor8, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "clickHint", _descriptor9, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "baseNode", _descriptor10, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "frontNode", _descriptor11, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "enter", _descriptor12, _assertThisInitialized(_this2));
          _initializerDefineProperty(_this2, "flowControl", _descriptor13, _assertThisInitialized(_this2));
          _this2.prizeBars = new Map();
          _this2.prizeScore = new Map();
          _this2.buttons = void 0;
          _this2._isGetPrize = void 0;
          _this2.zeusWinAnim = void 0;
          return _this2;
        }
        var _proto = FreeGameControl.prototype;
        _proto.onLoad = function onLoad() {
          this.prizeBars.set(FreeGameBtnType.SamllPrize, this.smallBar);
          this.prizeBars.set(FreeGameBtnType.MediumPrize, this.mediumBar);
          this.prizeBars.set(FreeGameBtnType.BigPrize, this.bigBar);
          this.prizeBars.set(FreeGameBtnType.LargePrize, this.largeBar);
          this.prizeScore.set(FreeGameBtnType.SamllPrize, 4815);
          this.prizeScore.set(FreeGameBtnType.MediumPrize, 76701);
          this.prizeScore.set(FreeGameBtnType.BigPrize, 80826);
          this.prizeScore.set(FreeGameBtnType.LargePrize, 259974);

          // Regist free game button click event
          this.node.on(FreeGameBtnEvent.EventName, this.onButtonClick, this);
          this.zeusWinAnim = this.zeusWin.getComponent(Animation);
        };
        _proto.onEnable = function onEnable() {
          var _this3 = this;
          // Initialize when enter free game
          this._isGetPrize = false;
          this.raptor.walk();
          this.clickHint.active = true;

          // Random set button prize type
          this.buttons = this.getComponentsInChildren(FreeGameButton);
          this.buttons.forEach(function (btn) {
            var type = randomRangeInt(0, FreeGameBtnType.Count);
            btn.setButtonType(type);
          });

          // Reset icon buttons and set parent to base node
          var btnInFront = this.frontNode.getComponentsInChildren(FreeGameButton);
          btnInFront.forEach(function (btn) {
            btn.reset();
            btn.node.setParent(_this3.baseNode);
          });

          // Reset prize bars
          this.prizeBars.forEach(function (bar, type) {
            bar.reset();
          });

          // Reset enter game button
          this.enter.reset();
        };
        _proto.onButtonClick = function onButtonClick(event) {
          var _this4 = this;
          // Stop the event propagation
          event.propagationStopped = true;

          // Hide click hint
          if (this.clickHint.active) {
            this.clickHint.active = false;
          }

          // Turn on light of prize bar
          var btn = event.button;
          if (btn.btnType == FreeGameBtnType.Wild) {
            // Wild type will turn on light of each type bar
            this.prizeBars.forEach(function (bar, type) {
              bar.turnOnLight();
            });
          } else {
            var bar = this.prizeBars.get(btn.btnType);
            bar.turnOnLight();
          }

          // Move button clicked to the front of all other buttons
          btn.node.setParent(this.frontNode);

          // Check if any prize is gotten
          var prize = [];
          this.prizeBars.forEach(function (bar, type) {
            if (bar.curCount == bar.maxCount) {
              _this4._isGetPrize = true;
              prize.push(type);
            }
          });
          if (this._isGetPrize) {
            //Show "Zeus Win" after the prize animation clip has played.
            this.scheduleOnce(function () {
              _this4.getPrize(prize);
            }, event.animDuration);
          }
        };
        _proto.getPrize = function getPrize(prize) {
          // Play the spine animation
          this.raptor.roar();
          // Show Zeus win animation
          this.zeusWin.active = true;
          this.zeusWinAnim.play();

          // Calculate score and set the schedule of score label
          var getScore = 0;
          for (var i = 0; i < prize.length; i++) {
            getScore += this.prizeScore.get(prize[i]);
            this.showScoreSchedule(getScore, this.scoreChangeDelay[i], false);
          }
          this.showScoreSchedule(getScore, this.scoreChangeDelay[this.scoreChangeDelay.length - 1], true);
        };
        _proto.showScoreSchedule = function showScoreSchedule(getScore, timeCount, isEnd) {
          var _this5 = this;
          this.scheduleOnce(function () {
            if (isEnd) {
              // Return main game
              _this5.score.string = "";
              _this5.zeusWinAnim.stop();
              _this5.zeusWin.active = false;
              CheckSlotResult.freeGameScore = getScore;
              _this5.flowControl.changeToMain();
            } else {
              // Tween score label font size
              _this5.score.string = getScore.toString();
              _this5.score.fontSize = 50;
              tween(_this5.score).to(0.3, {
                fontSize: 40
              }).start();
            }
          }, timeCount);
        };
        _createClass(FreeGameControl, [{
          key: "isGetPrize",
          get: function get() {
            return this._isGetPrize;
          }
        }]);
        return FreeGameControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "smallBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "mediumBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "bigBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "largeBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "zeusWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "score", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "raptor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class3.prototype, "isGetPrize", [property], Object.getOwnPropertyDescriptor(_class3.prototype, "isGetPrize"), _class3.prototype), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "scoreChangeDelay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "clickHint", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "baseNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "frontNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "enter", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, "flowControl", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6a851a/BmROGpyZZ2wBsIft", "HttpTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HttpTest = exports('HttpTest', (_dec = ccclass('HttpTest'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HttpTest, _Component);
        function HttpTest() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = HttpTest.prototype;
        _proto.start = function start() {
          fetch("https://www-td.league-funny.com/api/SlotIdentity?PhoneNumber=%2B886983826961").then(function (response) {
            return response.text();
          }).then(function (value) {
            console.log(value);
          });
        };
        return HttpTest;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IconSettings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, AnimationClip, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      AnimationClip = module.AnimationClip;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _class4, _class5, _descriptor4;
      cclegacy._RF.push({}, "e5ea1mgJKJFuLRBbKP5nEbl", "IconSettings", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var IconSetting = exports('IconSetting', (_dec = ccclass('IconSetting'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(AnimationClip), _dec(_class = (_class2 = function IconSetting() {
        _initializerDefineProperty(this, "defaultSprite", _descriptor, this);
        _initializerDefineProperty(this, "blurSprite", _descriptor2, this);
        _initializerDefineProperty(this, "defaultClip", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blurSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      var IconSettings = exports('IconSettings', (_dec5 = ccclass('IconSettings'), _dec6 = property([IconSetting]), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(IconSettings, _Component);
        function IconSettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icons", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return IconSettings;
      }(Component), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "icons", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./FirstScene.ts', './FlowControl.ts', './EnterFreeGame.ts', './FreeGameBar.ts', './FreeGameButton.ts', './FreeGameControl.ts', './PrizeIcon.ts', './HttpTest.ts', './BtnToFreeGame.ts', './ClickButtonEffect.ts', './MainGameControl.ts', './RunButton.ts', './ProgressiveBundles.ts', './ProgressiveLoad.ts', './ProgressiveTest.ts', './IconSettings.ts', './Reel.ts', './ReelGroup.ts', './ReelItem.ts', './AllScoreLabels.ts', './CheckSlotResult.ts', './RotateIt.ts', './UpdateScore.ts', './WinAnimation.ts', './WinStopState.ts', './ShowFPS.ts', './SpineControl.ts', './StartScene.ts', './debug-view-runtime-control.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainGameControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BtnToFreeGame.ts', './UpdateScore.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, BtnToFreeGame, UpdateScore;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      BtnToFreeGame = module.BtnToFreeGame;
    }, function (module) {
      UpdateScore = module.UpdateScore;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e0686Metm9IMI2mN4gPO0z5", "MainGameControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainGameControl = exports('MainGameControl', (_dec = ccclass('MainGameControl'), _dec2 = property(BtnToFreeGame), _dec3 = property(UpdateScore), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainGameControl, _Component);
        function MainGameControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnToFreeGame", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "updateScore", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MainGameControl.prototype;
        _proto.onEnable = function onEnable() {
          // Initialize when enter main game
          this.btnToFreeGame.reset();
          this.updateScore.reset();
        };
        return MainGameControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnToFreeGame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrizeIcon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, animation, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      animation = module.animation;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b9d31gc52hO/raG3bUxj0CE", "PrizeIcon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PrizeIcon = exports('PrizeIcon', (_dec = ccclass('PrizeIcon'), _dec2 = property(animation.AnimationController), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PrizeIcon, _Component);
        function PrizeIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animController", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PrizeIcon.prototype;
        _proto.onEnable = function onEnable() {
          this.animController.setValue("show", true);
        };
        _proto.onDisable = function onDisable() {
          this.animController.setValue("reset", true);
        };
        return PrizeIcon;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "animController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressiveBundles.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "91009CtxpBGTJfkhS155SVR", "ProgressiveBundles", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProgressiveBundles = exports('ProgressiveBundles', (_dec = ccclass('ProgressiveBundles'), _dec(_class = (_class2 = function ProgressiveBundles() {}, _class2.MidBundleName = "low1_2", _class2.HighBundleName = "original", _class2.MidBundle = null, _class2.HhighBundle = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressiveLoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FirstScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component, FirstScene;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      FirstScene = module.FirstScene;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8480b8rBbBIOYJhFqq84oyj", "ProgressiveLoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProgressiveLoad = exports('ProgressiveLoad', (_dec = ccclass('ProgressiveLoad'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProgressiveLoad, _Component);
        function ProgressiveLoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "midAssetName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highAssetName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite", _descriptor3, _assertThisInitialized(_this));
          _this._highIsLoaded = false;
          return _this;
        }
        var _proto = ProgressiveLoad.prototype;
        _proto.start = function start() {
          var _this2 = this;
          if (!FirstScene.Counted) {
            console.log("Enter Time: " + (Date.now() - FirstScene.TimeEnter) + "ms");
            FirstScene.Counted = true;
          }

          // FirstScene.MidBundle.load(this.midAssetName, (err, asset) => {
          //     if (err) {
          //         console.error(err);
          //         return;
          //     }
          //     if (!this._highIsLoaded) {
          //         this.sprite.spriteFrame = asset as SpriteFrame;
          //     }
          // });

          console.log(this.sprite.spriteFrame.texture["_file"]);
          var assetName = this.highAssetName + "/" + this.sprite.spriteFrame.name;
          console.log("Load Asset: " + assetName);
          FirstScene.HighBundle.load(assetName, function (err, asset) {
            if (err) {
              console.error(err);
              return;
            }
            _this2._highIsLoaded = true;
            _this2.sprite.spriteFrame = asset;
          });
        };
        return ProgressiveLoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "midAssetName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "highAssetName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressiveTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Node, Label, Toggle, assetManager, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Toggle = module.Toggle;
      assetManager = module.assetManager;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "13a5aDUJoRNvJroWKhOiwzJ", "ProgressiveTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProgressiveTest = exports('ProgressiveTest', (_dec = ccclass('ProgressiveTest'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ProgressiveTest, _Component);
        function ProgressiveTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadBundleButton", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "loadSceneButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bundleGroup", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stateLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enterSceneButton", _descriptor5, _assertThisInitialized(_this));
          _this._bundles = new Map();
          _this._bundleLoaded = new Map();
          _this._currentSelected = "low1_4compress";
          _this._toggles = [];
          return _this;
        }
        var _proto = ProgressiveTest.prototype;
        _proto.start = function start() {
          var _this2 = this;
          //director.addPersistRootNode(this.node);

          this._toggles = this.bundleGroup.getComponentsInChildren(Toggle);
          this._toggles.forEach(function (toggle) {
            var name = toggle.node.name;
            _this2._bundleLoaded.set(name, false);
            _this2._bundles.set(name, null);
          });
          this.loadSceneButton.interactable = false;
        };
        _proto.onLoadBundle = function onLoadBundle(event, customEventData) {
          var _this3 = this;
          console.log("Load Bundle: " + this._currentSelected);
          this.stateLabel.string = "Loading Bundle: " + this._currentSelected + "...";
          this._toggles.forEach(function (toggle) {
            toggle.interactable = false;
          });
          assetManager.loadBundle(this._currentSelected, function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            _this3._bundles.set(_this3._currentSelected, bundle);
            _this3._bundleLoaded.set(_this3._currentSelected, true);
            _this3.stateLabel.string = "Bundle Loaded: " + _this3._currentSelected;
            _this3._toggles.forEach(function (toggle) {
              toggle.interactable = true;
            });
            _this3.loadBundleButton.interactable = false;
            _this3.loadSceneButton.interactable = true;
          });
        };
        _proto.onLoadScene = function onLoadScene(event, customEventData) {
          var _this4 = this;
          console.log("Load Scene: " + this._currentSelected);
          this.stateLabel.string = "Loading Scene: " + this._currentSelected + "...";
          this._toggles.forEach(function (toggle) {
            toggle.interactable = false;
          });
          var bundle = this._bundles.get(this._currentSelected);
          bundle.preloadScene(this._currentSelected, function (err) {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Scene Preloaded: " + _this4._currentSelected);
            _this4.stateLabel.string = "Scene Preloaded: " + _this4._currentSelected;
            bundle.loadScene(_this4._currentSelected, function (err, scene) {
              if (err) {
                console.error(err);
                return;
              }
              console.log("Scene Loaded: " + _this4._currentSelected);
              _this4.stateLabel.string = "Scene Loaded: " + _this4._currentSelected;
              director.runScene(scene);
              _this4._toggles.forEach(function (toggle) {
                toggle.interactable = true;
              });
            });
          });
        };
        _proto.onSelect = function onSelect(toggle, customEventData) {
          console.log("Select: " + toggle.node.name);
          this._currentSelected = toggle.node.name;
          if (this._bundleLoaded.get(this._currentSelected)) {
            this.loadBundleButton.interactable = false;
            this.loadSceneButton.interactable = true;
          } else {
            this.loadBundleButton.interactable = true;
            this.loadSceneButton.interactable = false;
          }
        };
        _proto.onEnterScene = function onEnterScene(event, customEventData) {
          var _this5 = this;
          this.enterSceneButton.node.active = false;
          var bundles = ["low1_2compress", "compress", "original"];
          bundles.forEach(function (bundleName) {
            _this5.loadBundleAndEnterScene(bundleName, bundleName);
          });
        };
        _proto.loadBundleAndEnterScene = function loadBundleAndEnterScene(bundleName, sceneName) {
          var loadBundleTime = Date.now();
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
              console.error(err);
              return;
            }
            var loadSceneTime = Date.now();
            console.log("Load Bundle " + bundleName + " Time: " + (loadSceneTime - loadBundleTime) + "ms");
            bundle.loadScene(sceneName, function (err, scene) {
              if (err) {
                console.error(err);
                return;
              }
              var enterSceneTime = Date.now();
              console.log("Load Scene " + sceneName + " Time: " + (enterSceneTime - loadSceneTime) + "ms");
              director.runScene(scene);
            });
          });
        };
        return ProgressiveTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadBundleButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadSceneButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bundleGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stateLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enterSceneButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Reel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ReelItem.ts', './IconSettings.ts', './ReelGroup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCInteger, CCFloat, AudioSource, Vec3, tween, Component, ReelItem, IconSettings, ReelGroup, ReelStopEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      AudioSource = module.AudioSource;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ReelItem = module.ReelItem;
    }, function (module) {
      IconSettings = module.IconSettings;
    }, function (module) {
      ReelGroup = module.ReelGroup;
      ReelStopEvent = module.ReelStopEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "9efa1qVZIdLN7HotaP5DcCK", "Reel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Reel = exports('Reel', (_dec = ccclass('Reel'), _dec2 = property(IconSettings), _dec3 = property([ReelItem]), _dec4 = property([CCInteger]), _dec5 = property(CCFloat), _dec6 = property(CCInteger), _dec7 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Reel, _Component);
        function Reel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "iconSettings", _descriptor, _assertThisInitialized(_this));
          // Slot icon items
          _initializerDefineProperty(_this, "items", _descriptor2, _assertThisInitialized(_this));
          // Slot icon ids
          _initializerDefineProperty(_this, "ids", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepOffest", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "repeat", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tweenStepDuration", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_tweenFadingDuration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_tweenStopDuration", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spinStopAudio", _descriptor9, _assertThisInitialized(_this));
          // Icon ids[currentIndex] will be set to icon items[0]
          _this.currentIndex = 0;
          _this._originPos = void 0;
          _this._tweenOffset = void 0;
          _this.tweenStart = void 0;
          _this.tweenEnd = void 0;
          _this.isRotating = false;
          _this.isAnimate = true;
          _this.isStop = false;
          return _this;
        }
        var _proto = Reel.prototype;
        _proto.start = function start() {
          this._originPos = new Vec3(this.node.position);
          this._tweenOffset = new Vec3(0, -this.stepOffest);
          this.resetTweens();
          this.updateItems();
          ReelGroup.RegistAllReelStop(this.onAllStop, this);
        };
        _proto.spin = function spin() {
          // Down move "this.repeat" icons
          var t = this.getTweenSpin(this.tweenStepDuration).union().repeat(this.repeat);
          this.isStop = false;

          // Down move 1(start) + "this.repeat" + 1(end) icons
          tween(this.node).sequence(this.tweenStart, t, this.tweenEnd).start();
        };
        _proto.getTweenSpin = function getTweenSpin(duration, tweenOption) {
          if (tweenOption === void 0) {
            tweenOption = null;
          }
          function nextIndex() {
            // Add current index and loop it
            if (++this.currentIndex >= this.ids.length) {
              this.currentIndex = 0;
            }

            // Reset position and update icon
            this.node.setPosition(this._originPos);
            this.updateItems();

            // If the tween spin is the tween to stop spin
            if (this.isStop) {
              // Dispatch reel stop event to parent: "ReelGroup"
              this.node.dispatchEvent(new ReelStopEvent());
            }
          }

          // Down move
          var t = tween(this.node).by(duration, {
            position: this._tweenOffset
          }, tweenOption).call(nextIndex.bind(this));
          return t;
        };
        _proto.updateItems = function updateItems() {
          var offset = this.currentIndex;
          for (var i = 0; i < this.items.length; i++) {
            // Index of "this.ids"
            var index = i + offset;
            if (index >= this.ids.length) {
              offset -= this.ids.length;
              index = 0;
            }
            this.items[i].SetIcon(this.iconSettings.icons[this.ids[index]], this.isRotating, this.isAnimate);
          }
        };
        _proto.resetTweens = function resetTweens() {
          var _this2 = this;
          // Start move down tween
          this.tweenStart = this.getTweenSpin(this._tweenFadingDuration, {
            easing: "quartIn",
            onStart: function onStart() {
              _this2.isAnimate = false;
              _this2.updateItems();
            },
            onComplete: function onComplete() {
              _this2.isRotating = true;
            }
          });
          // Last move down tween
          this.tweenEnd = this.getTweenSpin(this._tweenFadingDuration, {
            easing: "elasticOut",
            onStart: function onStart() {
              _this2.isRotating = false;
              _this2.updateItems();
              _this2.scheduleOnce(function () {
                _this2.spinStopAudio.play();
              }, _this2._tweenStopDuration);
            },
            onComplete: function onComplete() {
              _this2.isStop = true;
            }
          });
        };
        _proto.onAllStop = function onAllStop() {
          // When all reels stop, start animate icon
          this.isAnimate = true;
          this.updateItems();
        };
        _createClass(Reel, [{
          key: "tweenFadingDuration",
          get: function get() {
            return this._tweenFadingDuration;
          },
          set: function set(value) {
            this._tweenFadingDuration = value;
            this.resetTweens();
          }
        }, {
          key: "tweenStopDuration",
          get: function get() {
            return this._tweenStopDuration;
          },
          set: function set(value) {
            this._tweenStopDuration = value;
            this.resetTweens();
          }
        }]);
        return Reel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSettings", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ids", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stepOffest", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "repeat", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tweenStepDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_tweenFadingDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tweenFadingDuration", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "tweenFadingDuration"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_tweenStopDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.13;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tweenStopDuration", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "tweenStopDuration"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spinStopAudio", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ReelGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Reel.ts', './CheckSlotResult.ts', './FlowControl.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, EventTarget, Event, Component, Reel, CheckSlotResult, FlowControl;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      EventTarget = module.EventTarget;
      Event = module.Event;
      Component = module.Component;
    }, function (module) {
      Reel = module.Reel;
    }, function (module) {
      CheckSlotResult = module.CheckSlotResult;
    }, function (module) {
      FlowControl = module.FlowControl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _class4;
      cclegacy._RF.push({}, "6c4e4tuo5NC35KciIfHuQUz", "ReelGroup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // When reel stops, this event will be dispatched.
      var ReelStopEvent = exports('ReelStopEvent', /*#__PURE__*/function (_Event) {
        _inheritsLoose(ReelStopEvent, _Event);
        function ReelStopEvent() {
          return _Event.call(this, ReelStopEvent.EventName, true) || this;
        }
        return ReelStopEvent;
      }(Event));
      ReelStopEvent.EventName = "ReelStop";
      var ReelGroup = exports('ReelGroup', (_dec = ccclass('ReelGroup'), _dec2 = property([Reel]), _dec3 = property(AudioSource), _dec(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelGroup, _Component);
        function ReelGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "reels", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reelSpinAudio", _descriptor2, _assertThisInitialized(_this));
          _this.reelStopCount = _this.reels.length;
          return _this;
        }
        // Regist callback function for all reels stop
        ReelGroup.RegistAllReelStop = function RegistAllReelStop(callback, node) {
          this.ReelGroupEventTarget.on(this.AllReelStopEvent, callback, node);
        };
        var _proto = ReelGroup.prototype;
        _proto.start = function start() {
          // Regist reel stop event
          this.node.on(ReelStopEvent.EventName, this.onReelStop, this);
        }

        // RunButton click event (see RunButton Inspector)
        ;

        _proto.spin = function spin() {
          if (!FlowControl.canClick) {
            return;
          }

          // Get score from server
          CheckSlotResult.getSpinResult();

          // Start spin
          FlowControl.isSpinning = true;
          this.reelStopCount = 0;
          for (var i = 0; i < this.reels.length; i++) {
            this.reels[i].spin();
          }
          this.reelSpinAudio.play();
        };
        _proto.onReelStop = function onReelStop(event) {
          // Count stop reels
          this.reelStopCount++;
          // Stop the event propagation
          event.propagationStopped = true;
          if (this.reelStopCount == this.reels.length) {
            // When all reels stop
            FlowControl.isSpinning = false;
            ReelGroup.ReelGroupEventTarget.emit(ReelGroup.AllReelStopEvent);
            this.reelSpinAudio.stop();
          }
        };
        return ReelGroup;
      }(Component), _class4.ReelGroupEventTarget = new EventTarget(), _class4.AllReelStopEvent = "AllReelStop", _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "reels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "reelSpinAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ReelItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "67844XvAEJCMbEROzUlZ4zx", "ReelItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ReelItem = exports('ReelItem', (_dec = ccclass('ReelItem'), _dec2 = property(Animation), _dec3 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelItem, _Component);
        function ReelItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainSprite", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ReelItem.prototype;
        _proto.SetIcon = function SetIcon(icon, isBlur, isAnimated) {
          this.anim.defaultClip = icon.defaultClip;
          this.anim.enabled = isAnimated;
          if (isBlur) {
            // When reel is spinning
            this.mainSprite.spriteFrame = icon.blurSprite;
          } else if (isAnimated) {
            // When reel stoped
            this.play();
          } else {
            // When reel is going to spin or stop
            this.mainSprite.spriteFrame = icon.defaultSprite;
          }
        };
        _proto.play = function play() {
          this.anim.play();
        };
        return ReelItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateIt.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, game, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3887fTu58VNRKMi2CvlUbyU", "RotateIt", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RotateIt = exports('RotateIt', (_dec = ccclass('RotateIt'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RotateIt, _Component);
        function RotateIt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RotateIt.prototype;
        _proto.update = function update(deltaTime) {
          this.node.angle = game.totalTime * this.rotateSpeed;
        };
        return RotateIt;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RunButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ReelGroup.ts', './FlowControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, AudioSource, tween, Component, ReelGroup, FlowControl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      AudioSource = module.AudioSource;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ReelGroup = module.ReelGroup;
    }, function (module) {
      FlowControl = module.FlowControl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "5a18bHXL5ZA9KBR5dGeLfGU", "RunButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RunButton = exports('RunButton', (_dec = ccclass('RunButton'), _dec2 = property(Node), _dec3 = property(AudioSource), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RunButton, _Component);
        function RunButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spinArrow", _descriptor, _assertThisInitialized(_this));
          // Time of rotate arrow one turn in second. Normal speed.
          _initializerDefineProperty(_this, "normalSpin", _descriptor2, _assertThisInitialized(_this));
          // Time of rotate arrow one turn in second. High speed.
          _initializerDefineProperty(_this, "speedSpin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfxAudioSource", _descriptor4, _assertThisInitialized(_this));
          _this.spinTween = void 0;
          _this.speedSpinTween = void 0;
          return _this;
        }
        var _proto = RunButton.prototype;
        _proto.start = function start() {
          // Normal rotate angle per second : degree / second
          var normalSpinAngle = -360 / this.normalSpin;
          // Speed rotate angle per second : degree / second
          var speedSpinAngle = -360 / this.speedSpin;
          ReelGroup.RegistAllReelStop(this.StopSpin, this);

          // Normal rotate tween
          this.spinTween = tween(this.spinArrow).by(1, {
            angle: normalSpinAngle
          }).repeatForever().start();

          // Speed rotate tween
          this.speedSpinTween = tween(this.spinArrow).by(1, {
            angle: speedSpinAngle
          }).repeatForever();
        };
        _proto.click = function click() {
          if (!FlowControl.canClick) {
            return;
          }
          this.sfxAudioSource.play();
          this.spinTween.stop();
          this.speedSpinTween.start();
        };
        _proto.StopSpin = function StopSpin() {
          this.speedSpinTween.stop();
          this.spinTween.start();
        };
        return RunButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinArrow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalSpin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speedSpin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sfxAudioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShowFPS.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Director, macro, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Director = module.Director;
      macro = module.macro;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3db7aRI4wBHtKCOFXaMbTfy", "ShowFPS", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShowFPS = exports('ShowFPS', (_dec = ccclass('ShowFPS'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShowFPS, _Component);
        function ShowFPS() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fpsLabel", _descriptor, _assertThisInitialized(_this));
          _this.root = void 0;
          return _this;
        }
        var _proto = ShowFPS.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.root = Director.instance.root;
          this.schedule(function () {
            _this2.updateUI();
          }, 0.5, macro.REPEAT_FOREVER);
        };
        _proto.updateUI = function updateUI() {
          this.fpsLabel.string = this.root.fps.toString();
        };
        return ShowFPS;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "fpsLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2bdf3P6d0NHXK2fI4FedKar", "SpineControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpineControl = exports('SpineControl', (_dec = ccclass('SpineControl'), _dec2 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineControl, _Component);
        function SpineControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spin", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpineControl.prototype;
        _proto.start = function start() {
          this.walk();
        };
        _proto.jump = function jump() {
          this.spin.setAnimation(0, "jump", true);
        };
        _proto.walk = function walk() {
          this.spin.setAnimation(0, "walk", true);
        };
        _proto.roar = function roar() {
          this.spin.setAnimation(0, "roar", true);
        };
        return SpineControl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, resources, director, math, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      resources = module.resources;
      director = module.director;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c5818RwT5NKE6ZtCWbXIWyz", "StartScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StartScene = exports('StartScene', (_dec = ccclass('StartScene'), _dec2 = property(UITransform), _dec3 = property(UITransform), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartScene, _Component);
        function StartScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Ball", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BarMask", _descriptor2, _assertThisInitialized(_this));
          _this.resourcePercent = 0;
          _this.scenePercent = 0;
          _this.isResourceDone = false;
          _this.isSceneDone = false;
          _this.resourcePart = 0.8;
          _this.scenePart = 0.2;
          _this.mainScene = "myZeus";
          return _this;
        }
        var _proto = StartScene.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.onProgressResource = this.onProgressResource.bind(this);
          this.onProgressScene = this.onProgressScene.bind(this);

          // Load resources
          resources.loadDir("Zeus", this.onProgressResource, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              _this2.isResourceDone = true;
              if (_this2.isSceneDone) {
                director.loadScene(_this2.mainScene);
              }
            }
          });

          // Load main scene
          director.preloadScene(this.mainScene, this.onProgressScene, function (error) {
            if (error) {
              console.log(error);
            } else {
              _this2.isSceneDone = true;
              if (_this2.isResourceDone) {
                director.loadScene(_this2.mainScene);
              }
            }
          });
        };
        _proto.onProgressResource = function onProgressResource(completeCount, totalCount, item) {
          this.updateLoadingBar(completeCount, totalCount, item, true);
        };
        _proto.onProgressScene = function onProgressScene(completeCount, totalCount, item) {
          this.updateLoadingBar(completeCount, totalCount, item, false);
        };
        _proto.updateLoadingBar = function updateLoadingBar(completeCount, totalCount, item, isResource) {
          // Calculate percentage
          var part = isResource ? this.resourcePart : this.scenePart;
          var prevPercent = isResource ? this.resourcePercent : this.scenePercent;
          var percent = completeCount / totalCount * part;
          if (percent < prevPercent) {
            percent = prevPercent;
          }
          if (isResource) {
            this.resourcePercent = percent;
          } else {
            this.scenePercent = percent;
          }
          var totalPercent = this.resourcePercent + this.scenePercent;
          // Modify loading bar
          this.BarMask.anchorX = math.lerp(1.5, 0.5, totalPercent);
          this.Ball.anchorX = math.lerp(2.5, -1.5, totalPercent);
        };
        return StartScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BarMask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpdateScore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ReelGroup.ts', './CheckSlotResult.ts', './SpineControl.ts', './FlowControl.ts', './WinAnimation.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Button, macro, Component, ReelGroup, CheckSlotResult, SpineControl, FlowControl, WinAnimation;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      macro = module.macro;
      Component = module.Component;
    }, function (module) {
      ReelGroup = module.ReelGroup;
    }, function (module) {
      CheckSlotResult = module.CheckSlotResult;
    }, function (module) {
      SpineControl = module.SpineControl;
    }, function (module) {
      FlowControl = module.FlowControl;
    }, function (module) {
      WinAnimation = module.WinAnimation;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "c143cb7Z2tHipUH2ouSiAS2", "UpdateScore", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UpdateScore = exports('UpdateScore', (_dec = ccclass('UpdateScore'), _dec2 = property(WinAnimation), _dec3 = property(WinAnimation), _dec4 = property(WinAnimation), _dec5 = property(Label), _dec6 = property(SpineControl), _dec7 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UpdateScore, _Component);
        function UpdateScore() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bigWin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "superWin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "megaWin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scoreLabel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scorePosY", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delayPlayWin", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delayStopWin", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickDelayStop", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "raptor", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_winDuration", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skipButton", _descriptor11, _assertThisInitialized(_this));
          _this.winScore = 0;
          _this.score = -1;
          _this.curWin = null;
          _this.clicked = false;
          _this.updateScore = 123;
          _this.updateInterval = 150;
          _this.isLastWin = false;
          _this.superWinThreshold = 30001;
          _this.megaWinThreshold = 300001;
          return _this;
        }
        var _proto = UpdateScore.prototype;
        _proto.start = function start() {
          ReelGroup.RegistAllReelStop(this.onAllReelStop, this);
          CheckSlotResult.RegistPlayWin(this.setScore, this);
          this.bigWin.RegistStarWinEnd(this.startUpdateScore, this);
          this.bigWin.RegistStopWinEnd(this.stopUpdateScore, this);
          this.superWin.RegistStopWinEnd(this.stopUpdateScore, this);
          this.megaWin.RegistStopWinEnd(this.stopUpdateScore, this);
          this.updateInterval = this._winDuration * 100;
        };
        _proto.reset = function reset() {
          // Initialize when enter main game
          this.curWin = null;
          if (CheckSlotResult.freeGameScore != 0) {
            // If freeGameScore is set, play win animation for freeGameScore
            CheckSlotResult.emitWinScore(CheckSlotResult.freeGameScore);
            this.startPlayWin();
            CheckSlotResult.freeGameScore = 0;
          }
        }

        // Callback function when get score
        ;

        _proto.setScore = function setScore(winScore) {
          this.winScore = winScore;
          this.score = 0;
          FlowControl.isUpdatingScore = true;
        };
        _proto.onTimeOut = function onTimeOut() {
          if (FlowControl.isUpdatingScore) {
            return;
          }

          // When all reels stoped and win score is not set, set dummy win score (77777)
          console.log("Did not get score from server, set dummy score 77777");
          CheckSlotResult.emitWinScore(77777);
        }

        // Callback function when all reels stop
        ;

        _proto.onAllReelStop = function onAllReelStop() {
          var _this2 = this;
          this.onTimeOut();
          this.scheduleOnce(function () {
            _this2.startPlayWin();
          }, this.delayPlayWin);
          this.raptor.jump();
        };
        _proto.startPlayWin = function startPlayWin() {
          this.switchWin(this.bigWin);
          this.clicked = false;
          this.skipButton.node.active = true;
          this.isLastWin = false;
          // Update score label every 0.01 seconds
          this.changeUpdateScore(this.superWinThreshold);
          this.schedule(this.updateScoreLabel, 0.01, macro.REPEAT_FOREVER);
        };
        _proto.startUpdateScore = function startUpdateScore() {
          // After start animation of big win
          // Show score label
          this.scoreLabel.node.active = true;
        }

        // Update score label every 0.01 seconds.
        ;

        _proto.updateScoreLabel = function updateScoreLabel() {
          var _this3 = this;
          if (!this.scoreLabel.node.active) {
            return;
          }
          this.scoreLabel.string = this.score.toString();
          this.score += this.updateScore;
          if (this.score > this.superWinThreshold && this.curWin == this.bigWin) {
            // Switch to super win and change updateScore
            this.switchWin(this.superWin);
            this.changeUpdateScore(this.megaWinThreshold - this.superWinThreshold);
          }
          if (this.score > this.megaWinThreshold && this.curWin == this.superWin) {
            // Switch to mega win
            this.switchWin(this.megaWin);
            var residual = this.winScore - this.megaWinThreshold;
            if (residual / this.updateScore > this.updateInterval) {
              // If update score time > this.updateInterval, change updateScore
              this.changeUpdateScore(residual);
            }
          }
          if (this.score > this.winScore) {
            // Play stop animation of win after "delayStop" seconds
            var delayStop = this.clicked ? this.clickDelayStop : this.delayStopWin;
            this.scheduleOnce(function () {
              _this3.stopPlayWin();
            }, delayStop);
            // Set string of score label to win score
            this.scoreLabel.string = this.winScore.toString();
            // Stop this schedule
            this.unschedule(this.updateScoreLabel);
          }
        };
        _proto.stopPlayWin = function stopPlayWin() {
          if (this.curWin == null) {
            return;
          }
          CheckSlotResult.updateWinScore();
          CheckSlotResult.updateTotalScore();
          this.curWin.playStop();
          this.curWin = null;
          this.isLastWin = true;
        };
        _proto.stopUpdateScore = function stopUpdateScore() {
          if (!this.isLastWin) {
            return;
          }

          // After play stop animation of current win: 
          // 1. Deactivate score label and skip button
          this.scoreLabel.string = "";
          this.scoreLabel.node.active = false;
          this.skipButton.node.active = false;
          // 2. Raptor play "walk"
          this.raptor.walk();
          // 3. Set "isUpdatingScore" to false
          FlowControl.isUpdatingScore = false;
        };
        _proto.switchWin = function switchWin(win) {
          if (this.curWin != null && this.curWin != win) {
            this.curWin.playStop();
          }
          this.curWin = win;

          // Set score label to "XXWinBase" node
          this.scoreLabel.node.setParent(this.curWin.node);
          var pos = this.scoreLabel.node.getPosition();
          pos.y = this.scorePosY;
          this.scoreLabel.node.setPosition(pos);
          this.curWin.playStart();
        };
        _proto.changeUpdateScore = function changeUpdateScore(scoreRange) {
          // Caculate update score in 0.01 seconds
          this.updateScore = Math.round(scoreRange / this.updateInterval);
          if (this.updateScore % 10 == 0) {
            // Units digit should not be 0, 
            // otherwise, the units digit of score label will be always 0
            this.updateScore++;
          }
        }

        // SkipWinButton click event (see SkipWinButton Inspector)
        ;

        _proto.onClick = function onClick() {
          var _this4 = this;
          if (!this.curWin || this.clicked) {
            return;
          }
          this.scoreLabel.string = this.winScore.toString();
          this.scoreLabel.node.active = true;
          // Check if need to switch to final win
          var notSwitch = this.winScore < this.superWinThreshold || this.winScore < this.megaWinThreshold && this.curWin == this.superWin || this.winScore >= this.megaWinThreshold && this.curWin == this.megaWin;
          this.score = this.winScore + 1;
          if (notSwitch) {
            this.scheduleOnce(function () {
              _this4.stopPlayWin();
            }, this.delayStopWin);
          } else if (this.winScore < this.megaWinThreshold) {
            this.switchWin(this.superWin);
            this.curWin.playStart();
          } else {
            this.switchWin(this.megaWin);
            this.curWin.playStart();
          }
          this.clicked = true;
        };
        _createClass(UpdateScore, [{
          key: "winDuration",
          get: function get() {
            return this._winDuration;
          },
          set: function set(value) {
            this._winDuration = value;
            this.updateInterval = this._winDuration * 100;
          }
        }]);
        return UpdateScore;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bigWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "superWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "megaWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scorePosY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -224;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delayPlayWin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "delayStopWin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "clickDelayStop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "raptor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_winDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "winDuration", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "winDuration"), _class2.prototype), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "skipButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinAnimation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, ParticleSystem2D, AudioSource, animation, EventTarget, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      ParticleSystem2D = module.ParticleSystem2D;
      AudioSource = module.AudioSource;
      animation = module.animation;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "58dd5RDiaBAVJ7B70xvZhF6", "WinAnimation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WinAnimation = exports('WinAnimation', (_dec = ccclass('WinAnimation'), _dec2 = property([Animation]), _dec3 = property([ParticleSystem2D]), _dec4 = property(AudioSource), _dec5 = property(animation.AnimationController), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(WinAnimation, _Component);
        function WinAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "animationsInChildren", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particalSystems", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sfx", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animController", _descriptor4, _assertThisInitialized(_this));
          _this.eventTarget = new EventTarget();
          _this.startWinEndEvent = "StartWinEnd";
          _this.stopWinEndEvent = "StopWinEnd";
          return _this;
        }
        var _proto = WinAnimation.prototype;
        // For other components to regist events
        _proto.RegistStarWinEnd = function RegistStarWinEnd(callback, node) {
          this.eventTarget.on(this.startWinEndEvent, callback, node);
        };
        _proto.RegistStopWinEnd = function RegistStopWinEnd(callback, node) {
          this.eventTarget.on(this.stopWinEndEvent, callback, node);
        };
        _proto.playStart = function playStart() {
          // Enter Start state
          this.animController.setValue("playStart", true);
          this.animationsInChildren.forEach(function (anim) {
            anim.play();
          });
          this.particalSystems.forEach(function (partical) {
            partical.resetSystem();
          });
          this.sfx.play();
        };
        _proto.playStop = function playStop() {
          // Enter Stop state
          this.animController.setValue("playStop", true);
          this.particalSystems.forEach(function (partical) {
            partical.stopSystem();
          });
        }

        // "BigWinAll_Start" animation frame event
        ;

        _proto.startWinEnd = function startWinEnd() {
          this.eventTarget.emit(this.startWinEndEvent);
        };
        _proto.exitStop = function exitStop() {
          this.animationsInChildren.forEach(function (anim) {
            anim.stop();
          });
          this.eventTarget.emit(this.stopWinEndEvent);
        };
        return WinAnimation;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationsInChildren", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particalSystems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sfx", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animController", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WinStopState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './WinAnimation.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, animation, WinAnimation;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      animation = module.animation;
    }, function (module) {
      WinAnimation = module.WinAnimation;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "37893EHgopIQ6fjG6upfFo5", "WinStopState", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WinStopState = exports('WinStopState', (_dec = ccclass("WinStopState"), _dec(_class = /*#__PURE__*/function (_animation$StateMachi) {
        _inheritsLoose(WinStopState, _animation$StateMachi);
        function WinStopState() {
          return _animation$StateMachi.apply(this, arguments) || this;
        }
        var _proto = WinStopState.prototype;
        /**
         * Called right after a motion state is entered.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        // public onMotionStateEnter (controller: animation.AnimationController, motionStateStatus: Readonly<animation.MotionStateStatus>): void {
        //     // Can be overrode
        // }
        /**
         * Called when a motion state is about to exit.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        _proto.onMotionStateExit = function onMotionStateExit(controller, motionStateStatus) {
          var winAnimation = controller.node.getComponent(WinAnimation);
          winAnimation.exitStop();
        }

        /**
         * Called when a motion state updated except for the first and last frame.
         * @param controller The animation controller it within.
         * @param motionStateStatus The status of the motion.
         */
        // public onMotionStateUpdate (controller: animation.AnimationController, motionStateStatus: Readonly<animation.MotionStateStatus>): void {
        //     // Can be overrode
        // }

        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */
        // public onStateMachineEnter (controller: animation.AnimationController) {
        //     // Can be overrode
        // }

        /**
         * Called right after a state machine is entered.
         * @param controller The animation controller it within.
         */
        // public onStateMachineExit (controller: animation.AnimationController) {
        //     // Can be overrode
        // }
        ;

        return WinStopState;
      }(animation.StateMachineComponent)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});