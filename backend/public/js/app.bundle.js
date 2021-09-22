/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/ui/context/ContextualInformationHelper */ "./src/framework/ui/context/ContextualInformationHelper.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/Controller */ "./src/app/Controller.ts");
/* harmony import */ var _app_AppTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _app_view_TransactionsCompositeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/view/TransactionsCompositeView */ "./src/app/view/TransactionsCompositeView.ts");
/* harmony import */ var _app_view_BudgetSummaryView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/view/BudgetSummaryView */ "./src/app/view/BudgetSummaryView.ts");
//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';





 //localStorage.debug = 'api-ts transactions-composite-view transactions-view ';

localStorage.debug = 'abstract-form abstract-form-detail basic-form basic-form-detail form-detail-view-renderer';
(debug__WEBPACK_IMPORTED_MODULE_1___default().log) = console.info.bind(console);
var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('app');

var BudgetBalance = /*#__PURE__*/function () {
  function BudgetBalance() {
    this.totalEl = null;
  }

  var _proto = BudgetBalance.prototype;

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    this.totalEl = document.getElementById(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.ELEMENT.total);
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addChangeListenerForName(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.transactions, this);
  };

  _proto.getListenerName = function getListenerName() {
    return "Balance";
  };

  _proto.stateChanged = function stateChanged(managerName, name, newValue) {
    var balance = 0.0;

    if (this.totalEl && newValue && newValue.length > 0) {
      newValue.forEach(function (value) {
        if (value.type) {
          switch (value.type) {
            case 'deposit':
              {
                balance += parseFloat(value.amount);
                break;
              }

            case 'withdrawal':
              {
                balance -= parseFloat(value.amount);
                break;
              }
          }
        }
      });
      this.totalEl.innerHTML = '$' + balance;
    }
  };

  _proto.stateChangedItemAdded = function stateChangedItemAdded(managerName, name, itemAdded) {
    this.stateChanged(managerName, name, _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().getStateByName(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.transactions));
  };

  _proto.stateChangedItemRemoved = function stateChangedItemRemoved(managerName, name, itemRemoved) {
    this.stateChanged(managerName, name, _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().getStateByName(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.transactions));
  };

  _proto.stateChangedItemUpdated = function stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    this.stateChanged(managerName, name, _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().getStateByName(_app_AppTypes__WEBPACK_IMPORTED_MODULE_3__.STATE_NAMES.transactions));
  };

  return BudgetBalance;
}();

var App = /*#__PURE__*/function () {
  // @ts-ignore
  function App() {
    // event handlers
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().connectToApplication(this, window.localStorage);
  }

  App.getInstance = function getInstance() {
    if (!App._instance) {
      App._instance = new App();
    }

    return App._instance;
  };

  var _proto2 = App.prototype;

  _proto2.onDocumentLoad = function onDocumentLoad() {
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
    new _app_view_TransactionsCompositeView__WEBPACK_IMPORTED_MODULE_4__.TransactionsCompositeView().onDocumentLoaded();
    new _app_view_BudgetSummaryView__WEBPACK_IMPORTED_MODULE_5__.BudgetSummaryView().onDocumentLoaded();
    new BudgetBalance().onDocumentLoaded();
    _framework_ui_context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_0__.ContextualInformationHelper.getInstance().onDocumentLoaded();
    _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().onDocumentLoaded();
  };

  return App;
}();


$(function () {
  App.getInstance().onDocumentLoad();
});

/***/ }),

/***/ "./src/app/AppTypes.ts":
/*!*****************************!*\
  !*** ./src/app/AppTypes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATE_NAMES": () => (/* binding */ STATE_NAMES),
/* harmony export */   "API_Config": () => (/* binding */ API_Config),
/* harmony export */   "VIEW_NAME": () => (/* binding */ VIEW_NAME),
/* harmony export */   "VIEW_CONTAINER": () => (/* binding */ VIEW_CONTAINER),
/* harmony export */   "BUTTON": () => (/* binding */ BUTTON),
/* harmony export */   "ELEMENT": () => (/* binding */ ELEMENT)
/* harmony export */ });
var STATE_NAMES = {
  transactions: 'transaction'
};
var API_Config = {
  transaction: '/api/transaction'
};
var VIEW_NAME = {
  transactions: 'transactions',
  budgetSummary: 'budgetChart'
};
var VIEW_CONTAINER = {
  transactionDetail: "transactionDetail"
};
var BUTTON = {
  createNew: 'addNew'
};
var ELEMENT = {
  total: 'total'
};

/***/ }),

/***/ "./src/app/Controller.ts":
/*!*******************************!*\
  !*** ./src/app/Controller.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/state/MemoryBufferStateManager */ "./src/framework/state/MemoryBufferStateManager.ts");
/* harmony import */ var _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/state/AsyncStateManagerWrapper */ "./src/framework/state/AsyncStateManagerWrapper.ts");
/* harmony import */ var _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/state/AggregateStateManager */ "./src/framework/state/AggregateStateManager.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/state/RESTApiStateManager */ "./src/framework/state/RESTApiStateManager.ts");
/* harmony import */ var _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework/model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../framework/model/ObjectDefinitionRegistry */ "./src/framework/model/ObjectDefinitionRegistry.ts");
/* harmony import */ var _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/model/BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../framework/ui/helper/SimpleValueDataSource */ "./src/framework/ui/helper/SimpleValueDataSource.ts");
/* harmony import */ var _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../framework/util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../framework/network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var _framework_model_DefaultValueGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../framework/model/DefaultValueGenerator */ "./src/framework/model/DefaultValueGenerator.ts");













var cLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts');
var cLoggerDetail = debug__WEBPACK_IMPORTED_MODULE_0___default()('controller-ts-detail');

var Controller = /*#__PURE__*/function () {
  // @ts-ignore
  function Controller() {}

  Controller.getInstance = function getInstance() {
    if (!Controller._instance) {
      Controller._instance = new Controller();
    }

    return Controller._instance;
  };

  var _proto = Controller.prototype;

  _proto.connectToApplication = function connectToApplication(applicationView, clientSideStorage) {
    this.applicationView = applicationView;
    this.clientSideStorage = clientSideStorage; // setup the API calls

    var restSM = _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_5__.RESTApiStateManager.getInstance();
    restSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_4__.API_Config.transaction,
      isActive: true
    }]);
    var aggregateSM = _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_3__.AggregateStateManager.getInstance();
    var memorySM = _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
    var asyncSM = new _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_2__["default"](aggregateSM, restSM);
    aggregateSM.addStateManager(memorySM, [], false);
    aggregateSM.addStateManager(asyncSM, [], false);
    this.stateManager = aggregateSM; // data objects

    this.setupDataObjectDefinitions();
    return this;
  }
  /*
      Get the base data for the application (users, entries)
  */
  ;

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    cLogger('Initialising data state'); // load the transactions

    this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions); // apply any queued changes from being offline

    _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_11__["default"].getInstance().processOfflineItems();
  };

  _proto.getStateManager = function getStateManager() {
    return this.stateManager;
  };

  _proto.getListenerName = function getListenerName() {
    return 'Controller';
  };

  _proto.create = function create(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions:
        {
          cLogger("Handling create new transaction");
          cLoggerDetail(dataObj);
          this.stateManager.addNewItemToState(typeName, dataObj, false);
          break;
        }
    }
  };

  _proto.delete = function _delete(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions:
        {
          cLogger("Handling delete transaction - already managed by stateful collection view");
          cLoggerDetail(dataObj);
          break;
        }
    }
  };

  _proto.update = function update(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions:
        {
          cLogger("Handling update transaction");
          cLoggerDetail(dataObj);
          this.stateManager.updateItemInState(typeName, dataObj, _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_10__.isSameMongo, false);
          break;
        }
    }
  };

  _proto.setupDataObjectDefinitions = function setupDataObjectDefinitions() {
    // create the object definitions for the exercise type and workout
    var exerciseTypeDefinition = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_7__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.transactions, 'Transaction', true, true, false, '_id');
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_6__.FieldType.text, true, "Name");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_6__.FieldType.limitedChoice, true, "Choose deposit or withdrawal", new _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_9__.SimpleValueDataSource([{
      name: 'Deposit',
      value: 'deposit'
    }, {
      name: 'Withdrawal',
      value: 'withdrawal'
    }]));
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "amount", "Amount", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_6__.FieldType.money, true, "Amount");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__.BasicObjectDefinitionFactory.getInstance().addCreatedDateToDefinition(exerciseTypeDefinition);
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_8__.BasicObjectDefinitionFactory.getInstance().setDefaultValueForField(exerciseTypeDefinition, "type", new _framework_model_DefaultValueGenerator__WEBPACK_IMPORTED_MODULE_12__.DefaultValueGenerator('withdrawal'));
    cLogger(exerciseTypeDefinition);
  };

  return Controller;
}();



/***/ }),

/***/ "./src/app/renderer/BudgetSummaryRenderer.ts":
/*!***************************************************!*\
  !*** ./src/app/renderer/BudgetSummaryRenderer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetSummaryRenderer": () => (/* binding */ BudgetSummaryRenderer)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

var avLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('budget-summary-renderer');
var BudgetSummaryRenderer = /*#__PURE__*/function () {
  function BudgetSummaryRenderer(view, eventHandler) {
    this.currentChart = null;
    this.view = view;
    this.eventHandler = eventHandler;
  }

  var _proto = BudgetSummaryRenderer.prototype;

  _proto.createDisplayElementForCollectionItem = function createDisplayElementForCollectionItem(collectionName, item) {
    return document.createElement('a');
  };

  _proto.setDisplayElementsForCollectionInContainer = function setDisplayElementsForCollectionInContainer(containerEl, collectionName, newState) {
    avLogger("view " + this.view.getName() + ": creating budget summary");
    avLogger(newState);
    if (this.currentChart) this.currentChart.destroy(); // okay we need to go through the last 7 workouts
    // let sevenWorkouts = newState;
    // if (newState.length > 7) {
    //     sevenWorkouts = newState.slice(newState.length - 7);
    // }
    //
    //
    // // go through the workouts and find all the unique exercise names as data series names
    // let exerciseNames: string[] = [];
    // let exerciseBG: string[] = [];
    // let exerciseBR: string[] = [];
    // let exerciseTypes: string[] = [];
    // let labels: string[] = [];
    // sevenWorkouts.forEach((workout: any) => {
    //     const label = moment(workout.createdOn, 'YYYYMMDDHHmmss').format('ddd DD/MM/YYYY HH:mm');
    //     labels.push(label);
    //     avLogger(`Added label ${label}`);
    //
    //     if (workout.exercises) {
    //         workout.exercises.forEach((exercise: any) => {
    //             const exerciseName = exercise.name;
    //             // do we have this exercise already?
    //             let foundIndex = exerciseNames.findIndex((name) => name == exerciseName);
    //             if (foundIndex < 0) {
    //                 avLogger(`Adding exercise ${exerciseName} of type ${exercise.type} to datasets`);
    //                 exerciseNames.push(exerciseName);
    //                 exerciseTypes.push(exercise.type);
    //                 const colours = this.generateRandomExerciseColourAndBorder((exercise.type === 'strength'));
    //                 exerciseBG.push(colours[0]);
    //                 exerciseBR.push(colours[1]);
    //             }
    //         })
    //     }
    // });
    //
    // // construct the data series, for each series (exercise), go through the workouts and create a data entry for that item
    //
    // let datasets: any[] = [];
    //
    // exerciseNames.forEach((name, index) => {
    //     const exerciseType = exerciseTypes[index];
    //     const itemBG = exerciseBG[index];
    //     const itemBR = exerciseBR[index];
    //
    //     avLogger(`Constructing dataset ${name} of type ${exerciseType} to datasets`);
    //
    //     let data: number[] = [];
    //     let bg: string[] = [];
    //     let br: string[] = [];
    //
    //
    //     sevenWorkouts.forEach((workout: any) => {
    //         bg.push(itemBG);
    //         br.push(itemBR);
    //
    //         // find the exercise name
    //         if (workout.exercises) {
    //
    //             const didntFindExercise = workout.exercises.every((exercise: any) => {
    //                 if (exercise.name == name) {
    //                     if (exerciseType === 'strength') {
    //                         avLogger(`Found exercise ${name} with value ${exercise.weight}`);
    //                         data.push(exercise.weight);
    //                     } else {
    //                         avLogger(`Found exercise ${name} with value ${exercise.distance}`);
    //                         data.push(exercise.distance);
    //                     }
    //                     return false;
    //                 }
    //                 return true;
    //             });
    //             // not found - zero value
    //             if (didntFindExercise) {
    //                 data.push(0);
    //             }
    //
    //         } else {
    //             data.push(0);
    //         }
    //     });
    //     let dataset = {label: name, data: data, backgroundColor: bg, borderColor: br, borderWidth: 1, order: 1};
    //     let lineDataSet = {label: name, data: data, backgroundColor: bg, borderColor: br, order: 0, type: 'line'};
    //     avLogger(dataset);
    //     datasets.push(dataset);
    //     //datasets.push(lineDataSet);
    // });
    //
    //
    // let chartData = {
    //     labels: labels,
    //     datasets: datasets,
    // };
    //
    // let config = {
    //     type: 'bar',
    //     data: chartData,
    //     options: {
    //         responsive: true,
    //         animation: true,
    //         maintainAspectRatio: true,
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     },
    //
    // }
    // avLogger(chartData);
    //
    // // @ts-ignore
    // this.currentChart = new Chart(<HTMLCanvasElement>containerEl, config);
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {};

  return BudgetSummaryRenderer;
}();

/***/ }),

/***/ "./src/app/view/BudgetSummaryView.ts":
/*!*******************************************!*\
  !*** ./src/app/view/BudgetSummaryView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetSummaryView": () => (/* binding */ BudgetSummaryView)
/* harmony export */ });
/* harmony import */ var _framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/ui/view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../framework/ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _renderer_BudgetSummaryRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderer/BudgetSummaryRenderer */ "./src/app/renderer/BudgetSummaryRenderer.ts");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}







var BudgetSummaryView = /*#__PURE__*/function (_AbstractStatefulColl) {
  _inheritsLoose(BudgetSummaryView, _AbstractStatefulColl);

  function BudgetSummaryView() {
    var _this;

    _this = _AbstractStatefulColl.call(this, BudgetSummaryView.DOMConfig, _Controller__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance().getStateManager(), _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.transactions) || this;
    _this.renderer = new _renderer_BudgetSummaryRenderer__WEBPACK_IMPORTED_MODULE_5__.BudgetSummaryRenderer(_assertThisInitialized(_this), _assertThisInitialized(_this));
    return _this;
  }

  var _proto = BudgetSummaryView.prototype;

  _proto.canDeleteItem = function canDeleteItem(view, selectedItem) {
    return false;
  };

  _proto.compareItemsForEquality = function compareItemsForEquality(item1, item2) {
    return (0,_framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_4__.isSameMongo)(item1, item2);
  };

  _proto.getIdForItemInNamedCollection = function getIdForItemInNamedCollection(name, item) {
    return item._id;
  };

  _proto.renderDisplayForItemInNamedCollection = function renderDisplayForItemInNamedCollection(containerEl, name, item) {};

  _proto.hasPermissionToDeleteItemInNamedCollection = function hasPermissionToDeleteItemInNamedCollection(name, item) {
    return false;
  };

  _proto.hasPermissionToActionItemInNamedCollection = function hasPermissionToActionItemInNamedCollection(actionName, name, item) {
    return false;
  };

  _proto.renderBackgroundForItemInNamedCollection = function renderBackgroundForItemInNamedCollection(containerEl, name, item) {};

  return BudgetSummaryView;
}(_framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_0__["default"]);
BudgetSummaryView.DOMConfig = {
  viewConfig: {
    resultsContainerId: 'budgetContainer',
    dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_NAME.budgetSummary
  },
  resultsElementType: 'canvas',
  resultsClasses: '',
  keyId: '_id',
  keyType: _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.string,
  detail: {
    containerClasses: '',
    textElementType: '',
    textElementClasses: '',
    select: false
  }
};

/***/ }),

/***/ "./src/app/view/TransactionsCompositeView.ts":
/*!***************************************************!*\
  !*** ./src/app/view/TransactionsCompositeView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsCompositeView": () => (/* binding */ TransactionsCompositeView)
/* harmony export */ });
/* harmony import */ var _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/model/ObjectDefinitionRegistry */ "./src/framework/model/ObjectDefinitionRegistry.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _framework_ui_view_renderer_FormDetailViewRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/ui/view/renderer/FormDetailViewRenderer */ "./src/framework/ui/view/renderer/FormDetailViewRenderer.ts");
/* harmony import */ var _framework_ui_view_implementation_DetailViewImplementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/ui/view/implementation/DetailViewImplementation */ "./src/framework/ui/view/implementation/DetailViewImplementation.ts");
/* harmony import */ var _framework_ui_helper_LinkedCollectionDetailController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/ui/helper/LinkedCollectionDetailController */ "./src/framework/ui/helper/LinkedCollectionDetailController.ts");
/* harmony import */ var _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/model/BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Controller */ "./src/app/Controller.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TransactionsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TransactionsView */ "./src/app/view/TransactionsView.ts");
/* harmony import */ var _framework_ui_view_implementation_DefaultPermissionChecker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../framework/ui/view/implementation/DefaultPermissionChecker */ "./src/framework/ui/view/implementation/DefaultPermissionChecker.ts");










var logger = debug__WEBPACK_IMPORTED_MODULE_7___default()('transactions-composite-view');
var TransactionsCompositeView = /*#__PURE__*/function () {
  function TransactionsCompositeView() {}

  var _proto = TransactionsCompositeView.prototype;

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    var transactionsView = new _TransactionsView__WEBPACK_IMPORTED_MODULE_8__.TransactionsView(_Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().getStateManager());
    var transactionDef = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_0__.ObjectDefinitionRegistry.getInstance().findDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.transactions);

    if (transactionDef) {
      var transactionDetailViewRenderer = new _framework_ui_view_renderer_FormDetailViewRenderer__WEBPACK_IMPORTED_MODULE_2__.FormDetailViewRenderer(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.transactionDetail, transactionDef, new _framework_ui_view_implementation_DefaultPermissionChecker__WEBPACK_IMPORTED_MODULE_9__.DefaultPermissionChecker(false, false));
      var transactionDetailView = new _framework_ui_view_implementation_DetailViewImplementation__WEBPACK_IMPORTED_MODULE_3__.DetailViewImplementation({
        resultsContainerId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTAINER.transactionDetail,
        dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_1__.VIEW_NAME.transactions
      }, transactionDetailViewRenderer);
      var viewLinker = new _framework_ui_helper_LinkedCollectionDetailController__WEBPACK_IMPORTED_MODULE_4__.LinkedCollectionDetailController(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.STATE_NAMES.transactions, transactionsView);
      viewLinker.addLinkedDetailView(transactionDetailView);
      transactionsView.onDocumentLoaded();
      transactionDetailView.onDocumentLoaded();
      var startingDisplayOrder = _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__.BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(transactionDef);
      transactionDetailView.initialise(startingDisplayOrder, false, true);
      var detailForm = transactionDetailViewRenderer.getForm();
      console.log(detailForm); // setup the event handling for the create new exercise type button

      var addTransactionButton = document.getElementById(_AppTypes__WEBPACK_IMPORTED_MODULE_1__.BUTTON.createNew);
      logger("Setting up button for creating transactions");

      if (addTransactionButton) {
        addTransactionButton.addEventListener('click', function (event) {
          logger("Asking view linker to start a new object");
          viewLinker.startNewObject();
        });
      }

      viewLinker.addListener(_Controller__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance());
    }
  };

  return TransactionsCompositeView;
}();

/***/ }),

/***/ "./src/app/view/TransactionsView.ts":
/*!******************************************!*\
  !*** ./src/app/view/TransactionsView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsView": () => (/* binding */ TransactionsView)
/* harmony export */ });
/* harmony import */ var _framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/ui/view/implementation/AbstractStatefulCollectionView */ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts");
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../framework/ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _framework_ui_view_renderer_ListViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/ui/view/renderer/ListViewRendererUsingContext */ "./src/framework/ui/view/renderer/ListViewRendererUsingContext.ts");
/* harmony import */ var _framework_ui_view_delegate_CollectionViewEventHandlerDelegateUsingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext */ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}









var logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('transactions-view');
var TransactionsView = /*#__PURE__*/function (_AbstractStatefulColl) {
  _inheritsLoose(TransactionsView, _AbstractStatefulColl);

  function TransactionsView(stateManager) {
    var _this;

    _this = _AbstractStatefulColl.call(this, TransactionsView.DOMConfig, stateManager, _AppTypes__WEBPACK_IMPORTED_MODULE_2__.STATE_NAMES.transactions) || this;
    _this.renderer = new _framework_ui_view_renderer_ListViewRendererUsingContext__WEBPACK_IMPORTED_MODULE_5__.ListViewRendererUsingContext(_assertThisInitialized(_this), _assertThisInitialized(_this));
    _this.eventHandlerDelegate = new _framework_ui_view_delegate_CollectionViewEventHandlerDelegateUsingContext__WEBPACK_IMPORTED_MODULE_6__.CollectionViewEventHandlerDelegateUsingContext(_assertThisInitialized(_this), _this.eventForwarder);
    _this.getIdForItemInNamedCollection = _this.getIdForItemInNamedCollection.bind(_assertThisInitialized(_this));
    _this.getItemId = _this.getItemId.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = TransactionsView.prototype;

  _proto.getItemDescription = function getItemDescription(from, item) {
    logger(item);
    var buffer = '';
    var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_7___default()(item.createdOn, 'YYYYMMDDHHmmss').format('DD/MM/YY HH:mm');
    buffer += "<strong>" + dateDisplay + "</strong>: ";

    if (item.type === 'deposit') {
      buffer += '+';
    } else {
      buffer += '-';
    }

    var formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'AUD' // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

    });
    buffer += formatter.format(parseFloat(item.amount));
    return buffer;
  };

  _proto.getModifierForItemInNamedCollection = function getModifierForItemInNamedCollection(name, item) {
    if (item.type === 'deposit') {
      return _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active;
    } else {
      return _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive;
    }

    return _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
  };

  _proto.canDeleteItem = function canDeleteItem(view, selectedItem) {
    return false;
  };

  _proto.compareItemsForEquality = function compareItemsForEquality(item1, item2) {
    return (0,_framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo)(item1, item2);
  };

  _proto.getIdForItemInNamedCollection = function getIdForItemInNamedCollection(name, item) {
    return item._id;
  };

  _proto.renderDisplayForItemInNamedCollection = function renderDisplayForItemInNamedCollection(containerEl, name, item) {
    var buffer = '';
    var dateDisplay = moment__WEBPACK_IMPORTED_MODULE_7___default()(item.createdOn, 'YYYYMMDDHHmmss').format('DD/MM/YY HH:mm');
    buffer += "<div class=\"row w-100\"><div><strong class=\"col-4\">" + dateDisplay + "</strong>: </div><div class=\"col-6 text-right\">";

    if (item.type === 'deposit') {
      buffer += '+';
    } else {
      buffer += '-';
    }

    var formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'AUD' // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

    });
    buffer += formatter.format(parseFloat(item.amount)) + '</div></div>';
    containerEl.innerHTML = buffer;
  };

  _proto.hasPermissionToDeleteItemInNamedCollection = function hasPermissionToDeleteItemInNamedCollection(name, item) {
    return false;
  };

  _proto.hasPermissionToUpdateItemInNamedCollection = function hasPermissionToUpdateItemInNamedCollection(name, item) {
    return false;
  };

  _proto.itemAction = function itemAction(view, actionName, selectedItem) {};

  return TransactionsView;
}(_framework_ui_view_implementation_AbstractStatefulCollectionView__WEBPACK_IMPORTED_MODULE_0__["default"]);
TransactionsView.DOMConfig = {
  viewConfig: {
    resultsContainerId: 'transactions',
    dataSourceId: _AppTypes__WEBPACK_IMPORTED_MODULE_2__.VIEW_NAME.transactions
  },
  resultsElementType: 'a',
  resultsElementAttributes: [{
    name: 'href',
    value: '#'
  }],
  resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
  keyId: '_id',
  keyType: _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.string,
  modifiers: {
    normal: '',
    inactive: 'list-group-item-warning',
    active: 'list-group-item-primary',
    warning: 'list-group-item-warning'
  },
  icons: {
    normal: '',
    inactive: 'fas fa-arrow-alt-circle-down',
    active: 'fas fa-arrow-alt-circle-up',
    warning: 'fas fa-arrow-alt-circle-down'
  },
  detail: {
    containerClasses: 'd-flex w-100 justify-content-between',
    textElementType: 'span',
    textElementClasses: 'mb-1',
    select: false
  }
};

/***/ }),

/***/ "./src/framework/model/BasicFieldOperations.ts":
/*!*****************************************************!*\
  !*** ./src/framework/model/BasicFieldOperations.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFieldOperations": () => (/* binding */ BasicFieldOperations)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _security_SecurityManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/SecurityManager */ "./src/framework/security/SecurityManager.ts");






var flogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-formatter');
var vlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-validator');
var glogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-generator');
var rlogger = debug__WEBPACK_IMPORTED_MODULE_2___default()('basic-field-operations-renderer');
var BasicFieldOperations = /*#__PURE__*/function () {
  function BasicFieldOperations() {
    this.previousFieldValues = [];
  }

  var _proto = BasicFieldOperations.prototype;

  _proto.setSubElements = function setSubElements(elements) {} // called when saving, change to final values
  ;

  _proto.formatValue = function formatValue(field, currentValue) {
    flogger("Handling format value for field " + field.displayName + " with value " + currentValue);
    var result = currentValue;

    switch (field.type) {
      // only need to change dates
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY').format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY HH:mm:ss').format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
        {
          result = currentValue.toLowerCase() === 'true';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
        {
          if (field.idType === _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_3__.KeyType.number) {
            result = parseInt(currentValue);
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
        {
          var parsed = parseFloat(currentValue);

          if (!isNaN(parsed)) {
            result = parsed;
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.money:
        {
          var _parsed = parseFloat(currentValue);

          if (!isNaN(_parsed)) {
            result = _parsed;
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        {
          var _parsed2 = parseFloat(currentValue);

          if (!isNaN(_parsed2)) {
            result = _parsed2;
          }

          break;
        }
    }

    flogger("Handling format value for field " + field.displayName + " with value " + currentValue + " - result is " + result);
    return result;
  };

  _proto.isValidValue = function isValidValue(field, currentValue) {
    vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue);
    var response = {
      isValid: true,
      resetOnFailure: false
    }; // basics first, is the field mandatory?

    if (field.mandatory) {
      // do we have any content?
      if (!currentValue || currentValue.trim().length === 0) {
        response.isValid = false;
        response.message = field.displayName + " is required. Please enter a valid value.";
        vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue + " - is valid is " + response.isValid + " with message " + response.message);
        return response;
      } // boolean is a special case, and must be true


      if (field.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean) {
        if (currentValue.trim().toLowerCase() !== 'true') {
          response.isValid = false;
          response.message = field.displayName + " is required and must be selected.";
          vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue + " - is valid is " + response.isValid + " with message " + response.message);
          return response;
        }
      }
    } // ok, so we have some content, we need to check if the value is a valid format with regular expressions


    if (currentValue) {
      switch (field.type) {
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            response.isValid = BasicFieldOperations.dateTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be DD/MM/YYYY hh:mm";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
          {
            response.isValid = BasicFieldOperations.dateRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be DD/MM/YYYY";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            response.isValid = BasicFieldOperations.floatRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 00.00";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.money:
          {
            response.isValid = BasicFieldOperations.moneyRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 0.00";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an integer";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
          {
            response.isValid = BasicFieldOperations.emailRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an email address";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an integer";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
          {
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
          {
            response.isValid = BasicFieldOperations.basicPasswordRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 8 to 15 letters and digits only";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
          {
            response.isValid = BasicFieldOperations.timeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 24 hour time format HH:MM:SS";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
          {
            response.isValid = BasicFieldOperations.shortTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 24 hour time format HH:MM";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
          {
            response.isValid = BasicFieldOperations.durationRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be in the format MM:SS or 999:MM:SS";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            response.isValid = BasicFieldOperations.booleanRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be true or false";
            }

            break;
          }
      }
    }

    vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue + " - is valid is " + response.isValid + " with message " + response.message);
    return response;
  };

  _proto.renderValue = function renderValue(field, currentValue) {
    rlogger("Rendering value for field " + field.displayName + " with new value " + currentValue); // ensure we don't end up in an endless loop
    // if the value hasn't changed return null
    // let index = this.previousFieldValues.findIndex((fieldValue) => fieldValue.id === field.id);
    // if (index >= 0) {
    //     //we have a previous value
    //     let fieldValue: FieldNameValue = this.previousFieldValues[index];
    //     rlogger(`Rendering value for field ${field.displayName} with new value ${currentValue} - previous value ${fieldValue.value}`);
    //     if (fieldValue.value === currentValue) return null;
    // }
    // either not yet seen or value has changed from previous

    if (currentValue) {
      // only attempt to render non-empty dates
      var newValue = currentValue;

      switch (field.type) {
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
          {
            newValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'YYYYMMDD').format('DD/MM/YYYY');
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            newValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'YYYYMMDDHHmmss').format('DD/MM/YYYY HH:mm:ss');
            break;
          }
      } // store the previous value


      this.setPreviousValue(field, newValue);
      rlogger("Rendering value for field " + field.displayName + " with new value " + currentValue + " - rendered to " + newValue);
      return newValue;
    } else {
      // empty value, no rendering required
      rlogger("Rendering value for field " + field.displayName + " with new value is empty - no rendering required");
      return null;
    }
  };

  _proto.generate = function generate(field, isCreate) {
    var result = ''; // are we generating the field?

    if (field.generator) {
      // are we only generating on create
      if (field.generator.onCreation && isCreate) {
        result = this.generateValue(field);
        glogger("Generating value for field " + field.displayName + " with on creation " + result);
      } // or if we are modifying and should also be modifying the value


      if (field.generator.onModify && !isCreate) {
        result = this.generateValue(field);
        glogger("Generating value for field " + field.displayName + " with on modify " + result);
      }
    }

    return result;
  };

  _proto.setPreviousValue = function setPreviousValue(field, newValue) {
    rlogger("Storing previous value for field " + field.displayName + " with  new value " + newValue);
    var fieldValue;
    var index = this.previousFieldValues.findIndex(function (fieldValue) {
      return fieldValue.id === field.id;
    });

    if (index >= 0) {
      //we have a previous value
      fieldValue = this.previousFieldValues[index];
      rlogger("Storing previous value for field " + field.displayName + " with new value " + newValue + " - old value was " + fieldValue);
      fieldValue.value = newValue;
    } else {
      // create a new record of the value
      fieldValue = {
        id: field.id,
        value: newValue
      };
      rlogger("Storing previous value for field " + field.displayName + " with new value " + newValue + " - NO previous");
      this.previousFieldValues.push(fieldValue);
    }
  };

  _proto.generateValue = function generateValue(field) {
    var result = '';

    switch (field.type) {
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
        {
          result = '0.0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.money:
        {
          result = '0.00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
        {
          result = '-1';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
        {
          result = 'me@me.com';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        {
          result = '0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
        {
          result = '00:00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
        {
          result = 'false';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid:
        {
          result = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.userId:
        {
          result = "" + _security_SecurityManager__WEBPACK_IMPORTED_MODULE_4__.SecurityManager.getInstance().getLoggedInUsername();
          break;
        }
    }

    return result;
  };

  return BasicFieldOperations;
}();
BasicFieldOperations.dateRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))$/;
BasicFieldOperations.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
BasicFieldOperations.shortTimeRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
BasicFieldOperations.timeRegex = /^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
BasicFieldOperations.dateTimeRegex = /^((0?[1-9]|[12]\d|31)\/(0?[13578]|1[02])\/(\d{2}|\d{4})|(0?[1-9]|[12]\d|30)\/(0?[469]|11])\/(\d{2}|\d{4})|(0?[1-9]|1\d|2[0-8])\/02\/(\d{2}|\d{4})|(29\/02\/(\d{2})?(0[48]|[2468][048]|[13579][26]))|(29\/02\/([02468][048]|[13579][26])00))\s([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/;
BasicFieldOperations.basicPasswordRegex = /^[a-zA-Z0-9]{8,15}$/;
BasicFieldOperations.integerRegex = /^[+-]?\d+$/;
BasicFieldOperations.floatRegexp = /^[+-]?\d+(\.\d+)?$/;
BasicFieldOperations.moneyRegexp = /^[+-]?\d+\.\d{2}$/;
BasicFieldOperations.booleanRegexp = /^true|false$/;
BasicFieldOperations.durationRegexp = /^(\d+:)?[0-5]?\d:[0-5]\d$/;

/***/ }),

/***/ "./src/framework/model/BasicObjectDefinitionFactory.ts":
/*!*************************************************************!*\
  !*** ./src/framework/model/BasicObjectDefinitionFactory.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIELD_ID": () => (/* binding */ FIELD_ID),
/* harmony export */   "FIELD_CreatedBy": () => (/* binding */ FIELD_CreatedBy),
/* harmony export */   "FIELD_ModifiedBy": () => (/* binding */ FIELD_ModifiedBy),
/* harmony export */   "FIELD_CreatedOn": () => (/* binding */ FIELD_CreatedOn),
/* harmony export */   "FIELD_ModifiedOn": () => (/* binding */ FIELD_ModifiedOn),
/* harmony export */   "FIELD_CreatedBy_Desc": () => (/* binding */ FIELD_CreatedBy_Desc),
/* harmony export */   "FIELD_ModifiedBy_Desc": () => (/* binding */ FIELD_ModifiedBy_Desc),
/* harmony export */   "FIELD_CreatedOn_Desc": () => (/* binding */ FIELD_CreatedOn_Desc),
/* harmony export */   "FIELD_ModifiedOn_Desc": () => (/* binding */ FIELD_ModifiedOn_Desc),
/* harmony export */   "BasicObjectDefinitionFactory": () => (/* binding */ BasicObjectDefinitionFactory)
/* harmony export */ });
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicFieldOperations */ "./src/framework/model/BasicFieldOperations.ts");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");



var FIELD_ID = 'id';
var FIELD_CreatedBy = 'createdBy';
var FIELD_ModifiedBy = 'modifiedBy';
var FIELD_CreatedOn = 'createdOn';
var FIELD_ModifiedOn = 'modifiedOn';
var FIELD_CreatedBy_Desc = 'Created By';
var FIELD_ModifiedBy_Desc = 'Last Modified By';
var FIELD_CreatedOn_Desc = 'Created On';
var FIELD_ModifiedOn_Desc = 'Last Modified On';
var BasicObjectDefinitionFactory = /*#__PURE__*/function () {
  function BasicObjectDefinitionFactory() {}

  BasicObjectDefinitionFactory.getInstance = function getInstance() {
    if (!BasicObjectDefinitionFactory._instance) {
      BasicObjectDefinitionFactory._instance = new BasicObjectDefinitionFactory();
    }

    return BasicObjectDefinitionFactory._instance;
  };

  var _proto = BasicObjectDefinitionFactory.prototype;

  _proto.generateStartingDisplayOrder = function generateStartingDisplayOrder(dataObjDef) {
    var result = [];
    dataObjDef.fields.forEach(function (fieldDef, index) {
      var order = {
        fieldId: fieldDef.id,
        displayOrder: index
      }; // is this the created or modified date

      if (fieldDef.id === FIELD_CreatedOn) {
        order.displayOrder += 100;
      }

      if (fieldDef.id === FIELD_ModifiedOn) {
        order.displayOrder += 101;
      }

      if (fieldDef.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId) {
        order.displayOrder += 100;
      }

      result.push(order);
    });
    return result;
  };

  _proto.createBasicObjectDefinition = function createBasicObjectDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields, idFieldName) {
    if (createModifierFields === void 0) {
      createModifierFields = true;
    }

    if (idFieldName === void 0) {
      idFieldName = FIELD_ID;
    }

    var objDef = {
      id: id,
      displayName: displayName,
      fields: []
    };
    var ops = new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(); // do we need an id field?

    if (hasDataId) {
      var fieldType = _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.id;

      if (dataIdIsUUID) {
        fieldType = _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.uuid;
      }

      var fieldDef = {
        id: idFieldName,
        isKey: true,
        idType: _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.number,
        type: fieldType,
        displayName: 'Id',
        mandatory: true,
        generator: {
          generator: ops,
          onModify: false,
          onCreation: true
        }
      };
      objDef.fields.push(fieldDef);
    } // add fields for created and modified


    if (createModifierFields) {
      this.addCreatedDateToArray(objDef.fields);
      this.addCreatedByToArray(objDef.fields);
      this.addModifiedByToArray(objDef.fields);
      this.addModifiedDateToArray(objDef.fields);
    }

    return objDef;
  };

  _proto.addStringFieldToObjDefinition = function addStringFieldToObjDefinition(objDef, id, displayName, type, isMandatory, description, datasource) {
    if (isMandatory === void 0) {
      isMandatory = false;
    }

    if (description === void 0) {
      description = null;
    }

    if (datasource === void 0) {
      datasource = null;
    }

    return this.addStringFieldToArray(objDef.fields, id, displayName, type, isMandatory, description, datasource);
  };

  _proto.addNumericFieldToObjDefinition = function addNumericFieldToObjDefinition(objDef, id, displayName, type, isMandatory, description, datasource) {
    if (isMandatory === void 0) {
      isMandatory = false;
    }

    if (description === void 0) {
      description = null;
    }

    if (datasource === void 0) {
      datasource = null;
    }

    return this.addNumericFieldToArray(objDef.fields, id, displayName, type, isMandatory, description, datasource);
  };

  _proto.addCreatedDateToArray = function addCreatedDateToArray(fields) {
    var fieldDef = this.addStringFieldToArray(fields, FIELD_CreatedOn, FIELD_CreatedOn_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime, true, FIELD_CreatedOn_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: false
    };
    fieldDef.displayOnly = true;
  };

  _proto.addCreatedDateToDefinition = function addCreatedDateToDefinition(def) {
    this.addCreatedDateToArray(def.fields);
  };

  _proto.addModifiedDateToArray = function addModifiedDateToArray(fields) {
    var fieldDef = this.addStringFieldToArray(fields, FIELD_ModifiedOn, FIELD_ModifiedOn_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime, true, FIELD_ModifiedOn_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: true
    };
    fieldDef.displayOnly = true;
  };

  _proto.addModifiedDateToDefinition = function addModifiedDateToDefinition(def) {
    this.addModifiedDateToDefinition(def);
  };

  _proto.addCreatedByToArray = function addCreatedByToArray(fields) {
    var fieldDef = this.addNumericFieldToArray(fields, FIELD_CreatedBy, FIELD_CreatedBy_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId, true, FIELD_CreatedBy_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: false
    };
    fieldDef.displayOnly = true;
  };

  _proto.addModifiedByToArray = function addModifiedByToArray(fields) {
    var fieldDef = this.addStringFieldToArray(fields, FIELD_ModifiedBy, FIELD_ModifiedBy_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId, true, FIELD_ModifiedBy_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: true
    };
    fieldDef.displayOnly = true;
  };

  _proto.addFieldToArray = function addFieldToArray(fields, keyType, id, displayName, type, isMandatory, description, datasource) {
    if (isMandatory === void 0) {
      isMandatory = false;
    }

    if (description === void 0) {
      description = null;
    }

    if (datasource === void 0) {
      datasource = null;
    }

    var fieldDef = {
      id: id,
      isKey: false,
      idType: keyType,
      type: type,
      displayName: displayName,
      mandatory: isMandatory,
      displayOnly: false
    };

    if (isMandatory) {
      // add generator
      fieldDef.generator = {
        generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
        onCreation: true,
        onModify: false
      };
    }

    if (description) fieldDef.description = description;
    if (datasource) fieldDef.dataSource = datasource;
    fields.push(fieldDef);
    return fieldDef;
  };

  _proto.addStringFieldToArray = function addStringFieldToArray(fields, id, displayName, type, isMandatory, description, datasource) {
    if (isMandatory === void 0) {
      isMandatory = false;
    }

    if (description === void 0) {
      description = null;
    }

    if (datasource === void 0) {
      datasource = null;
    }

    return this.addFieldToArray(fields, _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.string, id, displayName, type, isMandatory, description, datasource);
  };

  _proto.addNumericFieldToArray = function addNumericFieldToArray(fields, id, displayName, type, isMandatory, description, datasource) {
    if (isMandatory === void 0) {
      isMandatory = false;
    }

    if (description === void 0) {
      description = null;
    }

    if (datasource === void 0) {
      datasource = null;
    }

    return this.addFieldToArray(fields, _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.KeyType.string, id, displayName, type, isMandatory, description, datasource);
  };

  _proto.setDefaultValueForField = function setDefaultValueForField(def, id, generator) {
    var foundIndex = def.fields.findIndex(function (field) {
      return field.id === id;
    });

    if (foundIndex >= 0) {
      var field = def.fields[foundIndex];

      if (field) {
        var generatorDef = {
          generator: generator,
          onCreation: true,
          onModify: false
        };
        field.generator = generatorDef;
      }
    }
  };

  return BasicObjectDefinitionFactory;
}();

/***/ }),

/***/ "./src/framework/model/DataObjectController.ts":
/*!*****************************************************!*\
  !*** ./src/framework/model/DataObjectController.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataObjectController": () => (/* binding */ DataObjectController)
/* harmony export */ });
var DataObjectController = /*#__PURE__*/function () {
  function DataObjectController(typeName) {
    this.isCreatingNew = false;
    this.typeName = typeName;
    this.listeners = [];
  }

  var _proto = DataObjectController.prototype;

  _proto.addListener = function addListener(listener) {
    this.listeners.push(listener);
  };

  _proto.startNewObject = function startNewObject() {
    var result = false;

    if (!this.isCreatingNew) {
      result = this._startNewObject();
      this.isCreatingNew = result;
    }

    return result;
  };

  _proto.isCreatingNewObject = function isCreatingNewObject() {
    return this.isCreatingNew;
  };

  _proto.informListenersOfCreate = function informListenersOfCreate(dataObj) {
    var _this = this;

    this.isCreatingNew = false;
    this.listeners.forEach(function (listener) {
      return listener.create(_this, _this.typeName, dataObj);
    });
  };

  _proto.informListenersOfUpdate = function informListenersOfUpdate(dataObj) {
    var _this2 = this;

    this.isCreatingNew = false;
    this.listeners.forEach(function (listener) {
      return listener.update(_this2, _this2.typeName, dataObj);
    });
  };

  _proto.informListenersOfDelete = function informListenersOfDelete(dataObj) {
    var _this3 = this;

    this.isCreatingNew = false;
    this.listeners.forEach(function (listener) {
      return listener.delete(_this3, _this3.typeName, dataObj);
    });
  };

  return DataObjectController;
}();

/***/ }),

/***/ "./src/framework/model/DataObjectTypeDefs.ts":
/*!***************************************************!*\
  !*** ./src/framework/model/DataObjectTypeDefs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldType": () => (/* binding */ FieldType)
/* harmony export */ });
var FieldType;

(function (FieldType) {
  FieldType["id"] = "Id";
  FieldType["uuid"] = "UUID";
  FieldType["text"] = "Text";
  FieldType["integer"] = "Integer";
  FieldType["float"] = "Number";
  FieldType["money"] = "Money";
  FieldType["date"] = "Date";
  FieldType["time"] = "Time";
  FieldType["shortTime"] = "Short Time";
  FieldType["datetime"] = "Datetime";
  FieldType["email"] = "Email";
  FieldType["password"] = "Password";
  FieldType["boolean"] = "True/False";
  FieldType["userId"] = "User";
  FieldType["choice"] = "Choice";
  FieldType["limitedChoice"] = "Limited Choice";
  FieldType["largeText"] = "TextArea";
  FieldType["collection"] = "Collection";
  FieldType["duration"] = "Duration";
})(FieldType || (FieldType = {}));

/***/ }),

/***/ "./src/framework/model/DefaultValueGenerator.ts":
/*!******************************************************!*\
  !*** ./src/framework/model/DefaultValueGenerator.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultValueGenerator": () => (/* binding */ DefaultValueGenerator)
/* harmony export */ });
var DefaultValueGenerator = /*#__PURE__*/function () {
  function DefaultValueGenerator(defaultValue) {
    this.defaultValue = defaultValue;
  }

  var _proto = DefaultValueGenerator.prototype;

  _proto.generate = function generate(field, isCreate) {
    var result = '';

    if (isCreate) {
      result = this.defaultValue;
    }

    return result;
  };

  return DefaultValueGenerator;
}();

/***/ }),

/***/ "./src/framework/model/ObjectDefinitionRegistry.ts":
/*!*********************************************************!*\
  !*** ./src/framework/model/ObjectDefinitionRegistry.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectDefinitionRegistry": () => (/* binding */ ObjectDefinitionRegistry)
/* harmony export */ });
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicFieldOperations */ "./src/framework/model/BasicFieldOperations.ts");




var logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('object-definition-registry');
var ObjectDefinitionRegistry = /*#__PURE__*/function () {
  function ObjectDefinitionRegistry() {
    this.definitions = [];
  }

  ObjectDefinitionRegistry.getInstance = function getInstance() {
    if (!ObjectDefinitionRegistry._instance) {
      ObjectDefinitionRegistry._instance = new ObjectDefinitionRegistry();
    }

    return ObjectDefinitionRegistry._instance;
  };

  var _proto = ObjectDefinitionRegistry.prototype;

  _proto.findDefinition = function findDefinition(id) {
    var result = null;
    var index = this.definitions.findIndex(function (definition) {
      return definition.id === id;
    });

    if (index >= 0) {
      result = this.definitions[index];
    }

    return result;
  };

  _proto.addDefinition = function addDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields, idFieldName) {
    if (createModifierFields === void 0) {
      createModifierFields = true;
    }

    if (idFieldName === void 0) {
      idFieldName = _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__.FIELD_ID;
    }

    logger("Adding definition for " + id + " with name " + displayName);
    var result = this.findDefinition(id);

    if (result) {
      return result;
    } else {
      var definition = _BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_1__.BasicObjectDefinitionFactory.getInstance().createBasicObjectDefinition(id, displayName, hasDataId, dataIdIsUUID, createModifierFields, idFieldName);
      this.definitions.push(definition);
      return definition;
    }
  };

  _proto.createInstanceFromDef = function createInstanceFromDef(definition) {
    logger("Creating instance for definition " + definition.displayName);
    var result = {};
    var fieldOps = new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_3__.BasicFieldOperations();
    definition.fields.forEach(function (fieldDef) {
      if (fieldDef.generator && fieldDef.generator.onCreation) {
        var fieldValue = fieldDef.generator.generator.generate(fieldDef, true);

        switch (fieldDef.type) {
          case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.date:
          case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.datetime:
            {
              break;
            }

          default:
            {
              fieldValue = fieldOps.formatValue(fieldDef, fieldValue);
              break;
            }
        }

        logger("Setting default values for " + fieldDef.displayName + " to " + fieldValue);
        result[fieldDef.id] = fieldValue;
      }

      if (fieldDef.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.collection) {
        result[fieldDef.id] = [];
      }
    });
    return result;
  };

  _proto.createInstance = function createInstance(id) {
    logger("Creating instance for definition " + id);
    var result = {};
    var definition = this.findDefinition(id);

    if (definition) {
      result = this.createInstanceFromDef(definition);
    }

    return result;
  };

  return ObjectDefinitionRegistry;
}();

/***/ }),

/***/ "./src/framework/network/ApiUtil.ts":
/*!******************************************!*\
  !*** ./src/framework/network/ApiUtil.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}


var apiLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('api-ts');

var ApiUtil = /*#__PURE__*/function () {
  function ApiUtil() {}

  var _proto = ApiUtil.prototype;

  _proto.postFetchJSON = /*#__PURE__*/function () {
    var _postFetchJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, query) {
      var postParameters, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              postParameters = {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query
                })
              };
              _context.next = 3;
              return fetch(url, postParameters);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function postFetchJSON(_x, _x2) {
      return _postFetchJSON.apply(this, arguments);
    }

    return postFetchJSON;
  }()
  /*
      Utility function for calling JSON POST requests
      Parameters:
      1.  URL to send the POST request too;
      2.  parameters object whose attribute (name/values) are the request parameters; and
      3.  A function to receive the results when the fetch has completed
          The callback function should have the following form
          callback (jsonDataReturned, httpStatusCode)
          a)  A successful fetch will return the JSON data in the first parameter and a status code of the server
          b)  Parameters that cannot be converted to JSON format will give a null data and code 404
          c)  A server error will give that code and no data
    */
  ;

  _proto.apiFetchJSONWithPost = function apiFetchJSONWithPost(request) {
    apiLogger("Executing fetch with URL " + request.originalRequest.url + " with body " + request.originalRequest.params);

    try {
      JSON.stringify(request.originalRequest.params);
    } catch (error) {
      apiLogger('Unable to convert parameters to JSON');
      apiLogger(request.originalRequest.params, 100);
      request.callback(null, 404, request.queueType, request.requestId);
    }

    var postParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_extends({}, request.originalRequest.params))
    };
    this.fetchJSON(request.originalRequest.url, postParameters, request.callback, request.queueType, request.requestId);
  };

  _proto.apiFetchJSONWithGet = function apiFetchJSONWithGet(request) {
    apiLogger("Executing GET fetch with URL " + request.originalRequest.url + " with id " + request.originalRequest.params.id);
    var getParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += "/" + request.originalRequest.params.id;
    this.fetchJSON(request.originalRequest.url, getParameters, request.callback, request.queueType, request.requestId);
  };

  _proto.apiFetchJSONWithDelete = function apiFetchJSONWithDelete(request) {
    apiLogger("Executing DELETE fetch with URL " + request.originalRequest.url + " with id " + request.originalRequest.params.id);
    var delParameters = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += "/" + request.originalRequest.params.id;
    this.fetchJSON(request.originalRequest.url, delParameters, request.callback, request.queueType, request.requestId);
  };

  _proto.apiFetchJSONWithPut = function apiFetchJSONWithPut(request) {
    apiLogger("Executing PUT fetch with URL " + request.originalRequest.url + " with id " + request.originalRequest.params.id);
    var putParameters = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_extends({}, request.originalRequest.params))
    };
    if (request.originalRequest.params.id && !request.wasOffline) request.originalRequest.url += "/" + request.originalRequest.params.id;
    this.fetchJSON(request.originalRequest.url, putParameters, request.callback, request.queueType, request.requestId);
  };

  _proto.fetchJSON = function fetchJSON(url, parameters, callback, queueType, requestId) {
    fetch(url, parameters).then(function (response) {
      apiLogger("Response code was " + response.status);

      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }

      if (response.status === 400) {
        apiLogger(response.json());
      }
    }).then(function (data) {
      apiLogger(data);
      callback(data, 200, queueType, requestId);
    }).catch(function (error) {
      apiLogger(error);
      callback(null, 500, queueType, requestId);
    });
  };

  return ApiUtil;
}();

var apiUtil = new ApiUtil();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiUtil);

/***/ }),

/***/ "./src/framework/network/CallbackRegistry.ts":
/*!***************************************************!*\
  !*** ./src/framework/network/CallbackRegistry.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackRegistry": () => (/* binding */ CallbackRegistry)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

var logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('callback-registry');
var CallbackRegistry = /*#__PURE__*/function () {
  function CallbackRegistry() {
    this.callbacks = [];
  }

  CallbackRegistry.getInstance = function getInstance() {
    if (!CallbackRegistry._instance) {
      CallbackRegistry._instance = new CallbackRegistry();
    }

    return CallbackRegistry._instance;
  };

  var _proto = CallbackRegistry.prototype;

  _proto.addRegisterCallback = function addRegisterCallback(id, fn) {
    logger("Adding callback function with id " + id);
    this.callbacks.push({
      id: id,
      fn: fn
    });
  };

  _proto.getCallbackById = function getCallbackById(id) {
    var defaultFn = function defaultFn(data, status, associatedStateName) {
      console.error("Callback received with status " + status + ", state name " + associatedStateName + " where the callback was never registered");
    };

    var foundIndex = this.callbacks.findIndex(function (callback) {
      return callback.id === id;
    });

    if (foundIndex >= 0) {
      return this.callbacks[foundIndex].fn;
    }

    return defaultFn;
  };

  return CallbackRegistry;
}();

/***/ }),

/***/ "./src/framework/network/DownloadManager.ts":
/*!**************************************************!*\
  !*** ./src/framework/network/DownloadManager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiUtil */ "./src/framework/network/ApiUtil.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "./src/framework/network/Types.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CallbackRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallbackRegistry */ "./src/framework/network/CallbackRegistry.ts");
/* harmony import */ var _OfflineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OfflineManager */ "./src/framework/network/OfflineManager.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}







var logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('api-ts');

var DownloadManager = /*#__PURE__*/function () {
  function DownloadManager() {
    this.backgroundQueue = [];
    this.priorityQueue = [];
    this.inProgress = [];
    this.backgroundChangeListener = null;
    this.priorityChangeListener = null;
    this.callbackForQueueRequest = this.callbackForQueueRequest.bind(this);
  }

  DownloadManager.getInstance = function getInstance() {
    if (!DownloadManager._instance) {
      DownloadManager._instance = new DownloadManager();
    }

    return DownloadManager._instance;
  };

  var _proto = DownloadManager.prototype;

  _proto.processOfflineItems = function processOfflineItems() {
    logger("Checking for offline items");
    _OfflineManager__WEBPACK_IMPORTED_MODULE_4__.OfflineManager.getInstance().processQueuedResults();
  };

  _proto.setBackgroundChangeListener = function setBackgroundChangeListener(uiChangeListener) {
    this.backgroundChangeListener = uiChangeListener;
  };

  _proto.setPriorityChangeListener = function setPriorityChangeListener(uiChangeListener) {
    this.priorityChangeListener = uiChangeListener;
  };

  _proto.getPriorityQueueCount = function getPriorityQueueCount() {
    return this.priorityQueue.length;
  };

  _proto.getBackgroundQueueCount = function getBackgroundQueueCount() {
    return this.backgroundQueue.length;
  };

  _proto.addQLApiRequest = function addQLApiRequest(url, query, variables, callbackId, state, isPriority) {
    if (isPriority === void 0) {
      isPriority = false;
    }

    var request = {
      url: url,
      type: _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST,
      params: {
        query: query,
        variables: variables
      },
      callbackId: callbackId,
      associatedStateName: state
    };
    this.addApiRequest(request, isPriority);
  };

  _proto.addQLMutationRequest = function addQLMutationRequest(url, mutation, variables, callbackId, state, isPriority) {
    if (isPriority === void 0) {
      isPriority = false;
    }

    var request = {
      url: url,
      type: _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST,
      params: {
        mutation: mutation,
        variables: variables
      },
      callbackId: callbackId,
      associatedStateName: state
    };
    this.addApiRequest(request, isPriority);
  };

  _proto.addApiRequest = /*#__PURE__*/function () {
    var _addApiRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsonRequest, isPriority, wasOffline) {
      var requestId, _managerRequest, _managerRequest2;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isPriority === void 0) {
                isPriority = false;
              }

              if (wasOffline === void 0) {
                wasOffline = false;
              } // add a new requestId to the request for future tracking


              requestId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
              logger("Adding Queue Request " + requestId);
              logger(jsonRequest); // are we currently offline?

              if (!_OfflineManager__WEBPACK_IMPORTED_MODULE_4__.OfflineManager.getInstance().areWeOffline()) {
                _context.next = 10;
                break;
              }

              logger("We are offline, queueing request for when server back online.");
              _OfflineManager__WEBPACK_IMPORTED_MODULE_4__.OfflineManager.getInstance().addOfflineRequest(jsonRequest); // let the callback function know, with a custom code to let the receiver know there was a problem

              _CallbackRegistry__WEBPACK_IMPORTED_MODULE_3__.CallbackRegistry.getInstance().getCallbackById(jsonRequest.callbackId)(jsonRequest.params, 500, jsonRequest.associatedStateName, false);
              return _context.abrupt("return");

            case 10:
              // we are online (hopefully), continue for now, we will catch offline errors later
              if (isPriority) {
                _managerRequest = {
                  originalRequest: jsonRequest,
                  requestId: requestId,
                  queueType: _Types__WEBPACK_IMPORTED_MODULE_1__.queueType.PRIORITY,
                  callback: this.callbackForQueueRequest,
                  wasOffline: wasOffline
                };
                this.priorityQueue.push(_managerRequest);
                if (this.priorityChangeListener) this.priorityChangeListener.handleEventAddToQueue();
              } else {
                _managerRequest2 = {
                  originalRequest: jsonRequest,
                  requestId: requestId,
                  queueType: _Types__WEBPACK_IMPORTED_MODULE_1__.queueType.BACKGROUND,
                  callback: this.callbackForQueueRequest,
                  wasOffline: wasOffline
                };
                this.backgroundQueue.push(_managerRequest2);
                if (this.backgroundChangeListener) this.backgroundChangeListener.handleEventAddToQueue();
              }

              this.processQueues();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function addApiRequest(_x, _x2, _x3) {
      return _addApiRequest.apply(this, arguments);
    }

    return addApiRequest;
  }();

  _proto.processPriorityQueue = /*#__PURE__*/function () {
    var _processPriorityQueue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var queueItem;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queueItem = this.priorityQueue.shift();
              if (queueItem !== undefined) this.inProgress.push(queueItem);
              if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function processPriorityQueue() {
      return _processPriorityQueue.apply(this, arguments);
    }

    return processPriorityQueue;
  }();

  _proto.processBackgroundQueue = /*#__PURE__*/function () {
    var _processBackgroundQueue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var queueItem;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queueItem = this.backgroundQueue.shift();
              if (queueItem !== undefined) this.inProgress.push(queueItem);
              if (queueItem !== undefined) this.initiateFetchForQueueItem(queueItem);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function processBackgroundQueue() {
      return _processBackgroundQueue.apply(this, arguments);
    }

    return processBackgroundQueue;
  }();

  _proto.processQueues = /*#__PURE__*/function () {
    var _processQueues = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var totalQueuedItems;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;

            case 1:
              if (!(totalQueuedItems > 0)) {
                _context4.next = 14;
                break;
              }

              logger("processing queue, items remaining " + totalQueuedItems); // priority queue takes priority

              if (!(this.priorityQueue.length > 0)) {
                _context4.next = 8;
                break;
              }

              _context4.next = 6;
              return this.processPriorityQueue();

            case 6:
              _context4.next = 11;
              break;

            case 8:
              if (!(this.backgroundQueue.length > 0)) {
                _context4.next = 11;
                break;
              }

              _context4.next = 11;
              return this.processBackgroundQueue();

            case 11:
              totalQueuedItems = this.priorityQueue.length + this.backgroundQueue.length;
              _context4.next = 1;
              break;

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function processQueues() {
      return _processQueues.apply(this, arguments);
    }

    return processQueues;
  }();

  _proto.callbackForQueueRequest = function callbackForQueueRequest(jsonData, httpStatus, queueId, requestId) {
    // let the listeners know about the completion
    if (queueId === _Types__WEBPACK_IMPORTED_MODULE_1__.queueType.PRIORITY) {
      // priority
      if (this.priorityChangeListener) this.priorityChangeListener.handleEventRemoveFromQueue();
    } else if (this.backgroundChangeListener) this.backgroundChangeListener.handleEventRemoveFromQueue();

    logger("received callback for queue " + queueId + " request " + requestId + " with status " + httpStatus); // find the item in the in progress

    var foundIndex = this.inProgress.findIndex(function (element) {
      return element.requestId === requestId;
    });

    if (foundIndex >= 0) {
      // remove from in progress
      var queueItem = this.inProgress[foundIndex];
      this.inProgress.splice(foundIndex, 1);
      logger(queueItem); // are we offline http status of 500

      if (httpStatus === 500) {
        logger("queue item " + queueItem.requestId + " - server offline, queueing for later");
        _OfflineManager__WEBPACK_IMPORTED_MODULE_4__.OfflineManager.getInstance().addOfflineRequest(queueItem.originalRequest); // let the callback function know, with a custom code to let the receiver know there was a problem

        _CallbackRegistry__WEBPACK_IMPORTED_MODULE_3__.CallbackRegistry.getInstance().getCallbackById(queueItem.originalRequest.callbackId)(queueItem.originalRequest.params, httpStatus, queueItem.originalRequest.associatedStateName, queueItem.wasOffline);
      } else {
        logger("finished for queue item " + queueItem.requestId + " with possible offline id of " + queueItem.originalRequest._id); // let the callback function know

        _CallbackRegistry__WEBPACK_IMPORTED_MODULE_3__.CallbackRegistry.getInstance().getCallbackById(queueItem.originalRequest.callbackId)(jsonData, httpStatus, queueItem.originalRequest.associatedStateName, queueItem.wasOffline);
      }
    }
  };

  _proto.initiateFetchForQueueItem = function initiateFetchForQueueItem(item) {
    logger("Download Manager: initiating fetch for queue item " + item.requestId);
    logger(item);

    switch (item.originalRequest.type) {
      case _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_0__["default"].apiFetchJSONWithPost(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.GET:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_0__["default"].apiFetchJSONWithGet(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.DELETE:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_0__["default"].apiFetchJSONWithDelete(item);
          break;
        }

      case _Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.PUT:
        {
          _ApiUtil__WEBPACK_IMPORTED_MODULE_0__["default"].apiFetchJSONWithPut(item);
          break;
        }
    }
  };

  return DownloadManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadManager);

/***/ }),

/***/ "./src/framework/network/OfflineManager.ts":
/*!*************************************************!*\
  !*** ./src/framework/network/OfflineManager.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineManager": () => (/* binding */ OfflineManager)
/* harmony export */ });
/* harmony import */ var _Poller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Poller */ "./src/framework/network/Poller.ts");
/* harmony import */ var _state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/IndexedDBStateManager */ "./src/framework/state/IndexedDBStateManager.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_5__);







var logger = debug__WEBPACK_IMPORTED_MODULE_5___default()('offline-manager');
var OfflineManager = /*#__PURE__*/function () {
  function OfflineManager() {
    this.serverBackOnline = this.serverBackOnline.bind(this);
    var indexedDB = new _state_IndexedDBStateManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    indexedDB.initialise(OfflineManager.DB_NAME, [{
      name: OfflineManager.OBJECT_STORE,
      keyField: '_id'
    }]);
    this.persistence = indexedDB;
    this.persistence.addChangeListenerForName(OfflineManager.OBJECT_STORE, this);
  }

  OfflineManager.getInstance = function getInstance() {
    if (!OfflineManager._instance) {
      OfflineManager._instance = new OfflineManager();
    }

    return OfflineManager._instance;
  };

  var _proto = OfflineManager.prototype;

  _proto.processQueuedResults = function processQueuedResults() {
    // find any requests in the persistence
    this.persistence.getStateByName(OfflineManager.OBJECT_STORE);
  };

  _proto.serverBackOnline = function serverBackOnline() {
    _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().show('Server', 'Server is back online.');
    this.processQueuedResults();
  };

  _proto.areWeOffline = function areWeOffline() {
    return _Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().isPolling();
  };

  _proto.addOfflineRequest = function addOfflineRequest(jsonRequest) {
    if (!_Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().isPolling()) {
      _Poller__WEBPACK_IMPORTED_MODULE_0__.Poller.getInstance().startPolling(this.serverBackOnline);
      _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().show('Server', 'Server is offline, queueing local changes for when server is available', _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__.NotificationType.warning);
    } // save the request with an id


    jsonRequest._id = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
    logger('Adding offline request');
    logger(jsonRequest);
    this.persistence.addNewItemToState(OfflineManager.OBJECT_STORE, jsonRequest, false);
  };

  _proto.getListenerName = function getListenerName() {
    return "Offline manager";
  };

  _proto.stateChanged = function stateChanged(managerName, name, offlineResults) {
    var _this = this;

    if (offlineResults && offlineResults.length > 0) {
      _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().show('Queued Changes', "There are " + offlineResults.length + " queued changes, sending to server.", _notification_NotificationManager__WEBPACK_IMPORTED_MODULE_4__.NotificationType.warning);
      offlineResults.forEach(function (request) {
        _this.persistence.removeItemFromState(OfflineManager.OBJECT_STORE, request, _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo, false);

        logger("Processing offline request with priority and from offline");
        logger(request);
        _DownloadManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addApiRequest(request, true, true);
      });
    }

    this.persistence.forceResetForGet(OfflineManager.OBJECT_STORE);
  };

  _proto.stateChangedItemAdded = function stateChangedItemAdded(managerName, name, itemAdded) {};

  _proto.stateChangedItemRemoved = function stateChangedItemRemoved(managerName, name, itemRemoved) {};

  _proto.stateChangedItemUpdated = function stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {};

  return OfflineManager;
}();
OfflineManager.DB_NAME = 'offline.manager.db';
OfflineManager.OBJECT_STORE = 'offline.manager.db.requests';

/***/ }),

/***/ "./src/framework/network/Poller.ts":
/*!*****************************************!*\
  !*** ./src/framework/network/Poller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Poller": () => (/* binding */ Poller)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

var logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('poller');
var Poller = /*#__PURE__*/function () {
  // 30 seconds
  function Poller() {
    this.interval = null;
    this.isPollingBool = false;
  }

  Poller.getInstance = function getInstance() {
    if (!Poller._instance) {
      Poller._instance = new Poller();
    }

    return Poller._instance;
  };

  var _proto = Poller.prototype;

  _proto.startPolling = function startPolling(callback, delay) {
    var _this = this;

    if (delay === void 0) {
      delay = Poller.INTERVAL_DEFAULT;
    }

    this.isPollingBool = true;
    this.interval = setInterval(function () {
      logger("Checking for server availability");
      fetch(Poller.URL_CALL, {
        method: 'GET'
      }).then(function (response) {
        logger("Response code was " + response.status + " - server is now available");

        _this.stopPolling();

        callback();
      }).catch(function (error) {
        logger(error);
      });
    }, delay);
  };

  _proto.isPolling = function isPolling() {
    return this.isPollingBool;
  };

  _proto.stopPolling = function stopPolling() {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
    this.isPollingBool = false;
  };

  return Poller;
}();
Poller.INTERVAL_DEFAULT = 10000;
Poller.URL_CALL = '/ping';

/***/ }),

/***/ "./src/framework/network/Types.ts":
/*!****************************************!*\
  !*** ./src/framework/network/Types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestType": () => (/* binding */ RequestType),
/* harmony export */   "queueType": () => (/* binding */ queueType)
/* harmony export */ });
var RequestType;

(function (RequestType) {
  RequestType[RequestType["POST"] = 0] = "POST";
  RequestType[RequestType["GET"] = 1] = "GET";
  RequestType[RequestType["PUT"] = 2] = "PUT";
  RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));

var queueType;

(function (queueType) {
  queueType[queueType["PRIORITY"] = 0] = "PRIORITY";
  queueType[queueType["BACKGROUND"] = 1] = "BACKGROUND";
})(queueType || (queueType = {}));

/***/ }),

/***/ "./src/framework/notification/BootstrapNotification.ts":
/*!*************************************************************!*\
  !*** ./src/framework/notification/BootstrapNotification.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BootstrapNotification)
/* harmony export */ });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./src/framework/notification/Notification.ts");
/* harmony import */ var _NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationManager */ "./src/framework/notification/NotificationManager.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}




var BootstrapNotification = /*#__PURE__*/function (_Notification) {
  _inheritsLoose(BootstrapNotification, _Notification);

  function BootstrapNotification(notificationManager) {
    return _Notification.call(this, notificationManager) || this;
  } // Make the notification visible on the screen


  var _proto = BootstrapNotification.prototype;

  _proto.show = function show(title, message, topOffset, context, duration) {
    var _this = this;

    if (topOffset === void 0) {
      topOffset = 0;
    }

    if (duration === void 0) {
      duration = 3000;
    }

    var containerId = this.notificationManager.getContainerId(); // convert the context to a background colour

    var bgColorClass = '';

    switch (context) {
      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.info:
        {
          bgColorClass = 'bg-info';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.warning:
        {
          bgColorClass = 'bg-warning';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.message:
        {
          bgColorClass = 'bg-primary';
          break;
        }

      case _NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.priority:
        {
          bgColorClass = 'bg-danger';
          break;
        }

      default:
        {
          bgColorClass = "bg-info";
        }
    } // Creating the notification container div


    var containerNode = document.createElement('div');
    containerNode.className = 'notification toast';
    containerNode.style.top = topOffset + "px";
    containerNode.setAttribute("role", "alert");
    containerNode.setAttribute("data-autohide", "false"); // Adding the notification title node

    var titleNode = document.createElement('div');
    titleNode.className = "toast-header text-white " + bgColorClass;
    var titleTextNode = document.createElement('strong');
    titleTextNode.className = "mr-auto";
    titleTextNode.textContent = title; // Adding a little button on the notification

    var closeButtonNode = document.createElement('button');
    closeButtonNode.className = 'ml-2 mb-1 close';
    closeButtonNode.textContent = 'x';
    closeButtonNode.addEventListener('click', function () {
      _this.notificationManager.remove(containerNode);
    }); // Adding the notification message content node

    var messageNode = document.createElement('div');
    messageNode.className = 'toast-body';
    messageNode.textContent = message; // Appending the container with all the elements newly created

    titleNode.appendChild(titleTextNode);
    titleNode.appendChild(closeButtonNode);
    containerNode.appendChild(titleNode);
    containerNode.appendChild(messageNode);
    containerNode.classList.add("is-" + context); // Inserting the notification to the page body

    var containerEl = document.getElementById(containerId);
    if (containerEl) containerEl.appendChild(containerNode); // activate it
    // @ts-ignore

    $(".notification").toast('show'); // Default duration delay

    if (duration <= 0) {
      duration = 2000;
    }

    setTimeout(function () {
      _this.notificationManager.remove(containerNode);
    }, duration);
    return containerNode;
  };

  return BootstrapNotification;
}(_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/framework/notification/Notification.ts":
/*!****************************************************!*\
  !*** ./src/framework/notification/Notification.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notification)
/* harmony export */ });
var Notification = function Notification(notificationManager) {
  this.show = this.show.bind(this);
  this.notificationManager = notificationManager; // Create DOM notification structure when instantiated

  this.containerId = this.notificationManager.getContainerId();
} // Make the notification visible on the screen
;



/***/ }),

/***/ "./src/framework/notification/NotificationFactory.ts":
/*!***********************************************************!*\
  !*** ./src/framework/notification/NotificationFactory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootstrapNotification */ "./src/framework/notification/BootstrapNotification.ts");


var NotificationFactory = /*#__PURE__*/function () {
  function NotificationFactory() {}

  var _proto = NotificationFactory.prototype;

  _proto.createNotification = function createNotification(manager) {
    return new _BootstrapNotification__WEBPACK_IMPORTED_MODULE_0__["default"](manager);
  };

  return NotificationFactory;
}();

var notificationFactory = new NotificationFactory();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notificationFactory);

/***/ }),

/***/ "./src/framework/notification/NotificationManager.ts":
/*!***********************************************************!*\
  !*** ./src/framework/notification/NotificationManager.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType),
/* harmony export */   "NotificationManager": () => (/* binding */ NotificationManager),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotificationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationFactory */ "./src/framework/notification/NotificationFactory.ts");

var NotificationType;

(function (NotificationType) {
  NotificationType[NotificationType["info"] = 0] = "info";
  NotificationType[NotificationType["warning"] = 1] = "warning";
  NotificationType[NotificationType["message"] = 2] = "message";
  NotificationType[NotificationType["priority"] = 3] = "priority";
})(NotificationType || (NotificationType = {}));

var NotificationManager = /*#__PURE__*/function () {
  function NotificationManager() {
    this.notifications = [];
    this.currentCount = 0;
    this.offsetPerNotification = 120;
    this.containerId = 'notifications';
    this.show = this.show.bind(this);
  }

  NotificationManager.getInstance = function getInstance() {
    if (!NotificationManager._instance) {
      NotificationManager._instance = new NotificationManager();
    }

    return NotificationManager._instance;
  };

  var _proto = NotificationManager.prototype;

  _proto.getContainerId = function getContainerId() {
    return this.containerId;
  };

  _proto.show = function show(title, message, context, duration) {
    if (context === void 0) {
      context = NotificationType.info;
    }

    if (duration === void 0) {
      duration = 5000;
    }

    var notification = _NotificationFactory__WEBPACK_IMPORTED_MODULE_0__["default"].createNotification(this);
    var notificationNode = notification.show(title, message, this.currentCount * this.offsetPerNotification, context, duration);
    this.currentCount++;
    this.notifications.push(notificationNode);
  };

  _proto.remove = function remove(notificationNode) {
    var _this = this;

    var foundIndex = this.notifications.findIndex(function (element) {
      return element === notificationNode;
    });

    if (foundIndex >= 0) {
      this.notifications.splice(foundIndex, 1); // re-arrange the remaining notifications

      this.notifications.map(function (notificationNode, index) {
        // @ts-ignore
        notificationNode.style.top = _this.offsetPerNotification * index + "px";
      });
    }

    var parentEl = notificationNode.parentElement;
    if (parentEl !== null) parentEl.removeChild(notificationNode);
    this.currentCount--;
    if (this.currentCount < 0) this.currentCount = 0;
  };

  return NotificationManager;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationManager);

/***/ }),

/***/ "./src/framework/security/SecurityManager.ts":
/*!***************************************************!*\
  !*** ./src/framework/security/SecurityManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityManager": () => (/* binding */ SecurityManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);

var logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('security-manager');
var SecurityManager = /*#__PURE__*/function () {
  function SecurityManager() {
    this.hash = null;
    this.logoutEl = null;
  }

  SecurityManager.getInstance = function getInstance() {
    if (!SecurityManager._instance) {
      SecurityManager._instance = new SecurityManager();
    }

    return SecurityManager._instance;
  };

  var _proto = SecurityManager.prototype;

  _proto.onDocumentLoaded = function onDocumentLoaded(logoutElementId) {
    this.logoutEl = document.getElementById(logoutElementId); // find the secret hash for the current user (if any)

    var username = this.getLoggedInUsername();

    if (username && username.trim().length > 0) {
      logger("found user " + username);
      this.hash = localStorage.getItem(username);

      if (this.hash) {
        sessionStorage.setItem(username, this.hash);
      } else {
        this.hash = sessionStorage.getItem(username);
      }

      localStorage.removeItem(username);
      logger("found user " + username + " hash " + this.hash + " - removed from local storage");
    }

    if (this.logoutEl) {
      this.logoutEl.addEventListener('click', function (event) {
        localStorage.removeItem(username);
        sessionStorage.removeItem(username);
      });
    }
  };

  _proto.isLoggedIn = function isLoggedIn() {
    var isLoggedIn = false;

    try {
      // @ts-ignore
      if (loggedInUser) {
        isLoggedIn = true;
      }
    } catch (error) {}

    return isLoggedIn;
  };

  _proto.getLoggedInUserId = function getLoggedInUserId() {
    var result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser._id;
      }
    } catch (error) {}

    logger("Logged in user id is " + result);
    return result;
  };

  _proto.getLoggedInUsername = function getLoggedInUsername() {
    var result = '';

    try {
      // @ts-ignore
      if (loggedInUser) {
        // @ts-ignore
        result = loggedInUser.username;
      }
    } catch (error) {}

    logger("Logged in user is " + result);
    return result;
  };

  _proto.getCurrentUser = function getCurrentUser() {
    return this.getLoggedInUserId();
  };

  _proto.encryptString = function encryptString(value) {
    var result = value;

    if (this.hash) {
      // @ts-ignore
      result = CryptoJS.AES.encrypt(value, this.hash).toString();
    }

    return result;
  };

  _proto.decryptString = function decryptString(value) {
    var result = value;

    if (this.hash) {
      // @ts-ignore
      result = CryptoJS.AES.decrypt(value, this.hash).toString(CryptoJS.enc.Utf8);
    }

    return result;
  };

  _proto.encryptObject = function encryptObject(dataObj) {
    return this.encryptString(JSON.stringify(dataObj));
  };

  _proto.decryptObject = function decryptObject(value) {
    return JSON.parse(this.decryptString(value));
  };

  return SecurityManager;
}();

/***/ }),

/***/ "./src/framework/state/AbstractStateManager.ts":
/*!*****************************************************!*\
  !*** ./src/framework/state/AbstractStateManager.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractStateManager": () => (/* binding */ AbstractStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");



var smLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-ts');
var AbstractStateManager = /*#__PURE__*/function () {
  function AbstractStateManager(managerName) {
    this.forceSaves = true;
    this.managerName = '';
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_2__["default"](managerName);
    this.managerName = managerName;
    this.emitEvents();
    this.forceSaves = true;
  }

  var _proto = AbstractStateManager.prototype;

  _proto.suppressEvents = function suppressEvents() {
    this.delegate.suppressEvents();
  };

  _proto.emitEvents = function emitEvents() {
    this.delegate.emitEvents();
  };

  _proto.dontForceSavesOnAddRemoveUpdate = function dontForceSavesOnAddRemoveUpdate() {
    this.forceSaves = false;
  };

  _proto.forceSavesOnAddRemoveUpdate = function forceSavesOnAddRemoveUpdate() {
    this.forceSaves = true;
  };

  _proto.informChangeListenersForStateWithName = function informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    if (eventType === void 0) {
      eventType = _StateManager__WEBPACK_IMPORTED_MODULE_1__.stateEventType.StateChanged;
    }

    if (previousObjValue === void 0) {
      previousObjValue = null;
    }

    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  };

  _proto.addChangeListenerForName = function addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  };

  _proto.addStateByName = function addStateByName(name, stateObjForName) {
    this._ensureStatePresent(name);
    /* create a new state attribute for the application state */


    var state = {
      name: name,
      value: stateObjForName
    };
    /* get the current state value and replace it */

    this._replaceNamedStateInStorage(state);

    this.informChangeListenersForStateWithName(name, stateObjForName, _StateManager__WEBPACK_IMPORTED_MODULE_1__.stateEventType.StateChanged);
    return stateObjForName;
  };

  _proto.getStateByName = function getStateByName(name) {
    this._ensureStatePresent(name);

    smLogger("State Manager: Getting state for " + name);
    var stateValueObj = {}; // get the current state

    var state = this._getState(name);

    stateValueObj = state.value;
    smLogger("State Manager: Found previous state for " + name);
    smLogger(stateValueObj);
    return stateValueObj;
  };

  _proto.setStateByName = function setStateByName(name, stateObjectForName, informListeners) {
    if (informListeners === void 0) {
      informListeners = true;
    }

    this._ensureStatePresent(name);

    smLogger("State Manager: Setting state for " + name);
    smLogger(stateObjectForName); // set the current state

    var state = this._getState(name);

    state.value = stateObjectForName;
    if (this.forceSaves) this._saveState(name, stateObjectForName);
    if (informListeners) this.informChangeListenersForStateWithName(name, stateObjectForName);
    return stateObjectForName;
  };

  _proto.addNewItemToState = function addNewItemToState(name, item, isPersisted) {
    if (isPersisted === void 0) {
      isPersisted = false;
    } // assumes state is an array


    this._ensureStatePresent(name);

    smLogger("State Manager: Adding item to state " + name); // const state = this.getStateByName(name);
    // state.push(item);
    // smLogger(state);

    this._addItemToState(name, item, isPersisted);

    this.informChangeListenersForStateWithName(name, item, _StateManager__WEBPACK_IMPORTED_MODULE_1__.stateEventType.ItemAdded);
  };

  _proto.findItemInState = function findItemInState(name, item, testForEqualityFunction) {
    // assumes state is an array
    this._ensureStatePresent(name);

    var result = {};
    var state = this.getStateByName(name);
    var foundIndex = state.findIndex(function (element) {
      return testForEqualityFunction(element, item);
    });
    smLogger("Finding item in state " + name + " - found index " + foundIndex);
    smLogger(item);

    if (foundIndex >= 0) {
      result = state[foundIndex];
    }

    return result;
  };

  _proto.isItemInState = function isItemInState(name, item, testForEqualityFunction) {
    // assumes state is an array
    this._ensureStatePresent(name);

    var result = false;
    var state = this.getStateByName(name);
    var foundIndex = state.findIndex(function (element) {
      return testForEqualityFunction(element, item);
    });

    if (foundIndex >= 0) {
      result = true;
    }

    return result;
  };

  _proto.removeItemFromState = function removeItemFromState(name, item, testForEqualityFunction, isPersisted) {
    this._ensureStatePresent(name);

    var result = true;
    var oldItem = this.findItemInState(name, item, testForEqualityFunction); // remove the item from the state

    smLogger("State Manager: Found item - removing, is persisted " + isPersisted);

    this._removeItemFromState(name, item, testForEqualityFunction, isPersisted); //this.setStateByName(name, state, false);


    this.informChangeListenersForStateWithName(name, oldItem, _StateManager__WEBPACK_IMPORTED_MODULE_1__.stateEventType.ItemDeleted);
    return result;
  };

  _proto.updateItemInState = function updateItemInState(name, item, testForEqualityFunction, isPersisted) {
    this._ensureStatePresent(name);

    var result = true;
    var oldItem = this.findItemInState(name, item, testForEqualityFunction);
    smLogger('State Manager: Found item - replacing ');

    this._updateItemInState(name, item, testForEqualityFunction, isPersisted); //this.setStateByName(name, this.getStateByName(name), false);


    this.informChangeListenersForStateWithName(name, item, _StateManager__WEBPACK_IMPORTED_MODULE_1__.stateEventType.ItemUpdated, oldItem);
    return result;
  };

  return AbstractStateManager;
}();

/***/ }),

/***/ "./src/framework/state/AggregateStateManager.ts":
/*!******************************************************!*\
  !*** ./src/framework/state/AggregateStateManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateStateManager": () => (/* binding */ AggregateStateManager)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var aggLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-aggregate');
var AggregateStateManager = /*#__PURE__*/function (_AbstractStateManager) {
  _inheritsLoose(AggregateStateManager, _AbstractStateManager);

  function AggregateStateManager() {
    var _this;

    _this = _AbstractStateManager.call(this, 'aggregate') || this;
    _this.stateManagers = [];

    _this.emitEvents();

    return _this;
  }

  AggregateStateManager.getInstance = function getInstance() {
    if (!AggregateStateManager._instance) {
      AggregateStateManager._instance = new AggregateStateManager();
    }

    return AggregateStateManager._instance;
  };

  var _proto = AggregateStateManager.prototype;

  _proto.addStateManager = function addStateManager(stateManager, filters, emitEvents) {
    if (filters === void 0) {
      filters = [];
    }

    var mWF = {
      manager: stateManager,
      filters: filters
    };
    this.stateManagers.push(mWF);
    if (!emitEvents) stateManager.suppressEvents();
    aggLogger('adding state manager with/without filters');
  };

  _proto._addNewNamedStateToStorage = function _addNewNamedStateToStorage(state) {
    var _this2 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this2.stateNameInFilters(state.name, managerWithFilters.filters)) {
        managerWithFilters.manager._addNewNamedStateToStorage(state);
      }
    });
  };

  _proto._getState = function _getState(name) {
    var _this3 = this;

    var state = {
      name: name,
      value: []
    };
    this.stateManagers.forEach(function (sm) {
      if (!_this3.stateNameInFilters(state.name, sm.filters)) {
        aggLogger("get state from state manager for state " + name);
        aggLogger(sm.manager);

        sm.manager._getState(name);
      }
    }); // assuming the state manager is holding all the values

    if (this.stateManagers.length > 0) {
      state = this.stateManagers[0].manager._getState(name);
    }

    return state;
  };

  _proto._ensureStatePresent = function _ensureStatePresent(name) {
    var _this4 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this4.stateNameInFilters(name, managerWithFilters.filters)) {
        managerWithFilters.manager._ensureStatePresent(name);
      }
    });
  };

  _proto._replaceNamedStateInStorage = function _replaceNamedStateInStorage(state) {
    var _this5 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this5.stateNameInFilters(state.name, managerWithFilters.filters)) {
        managerWithFilters.manager._replaceNamedStateInStorage(state);
      }
    });
  };

  _proto._saveState = function _saveState(name, stateObj) {
    var _this6 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this6.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger("saving state in state manager for state " + name);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._saveState(name, stateObj);
      }
    });
  };

  _proto._addItemToState = function _addItemToState(name, stateObj, isPersisted) {
    var _this7 = this;

    if (isPersisted === void 0) {
      isPersisted = false;
    }

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this7.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger("adding item to state in  state manager for state " + name + ", is persisted = " + isPersisted);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._addItemToState(name, stateObj, isPersisted);
      }
    });
  };

  _proto._removeItemFromState = function _removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted) {
    var _this8 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this8.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger("removing item from state in state manager for state " + name + ", is persisted = " + isPersisted);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted);
      }
    });
  };

  _proto._updateItemInState = function _updateItemInState(name, stateObj, testForEqualityFunction, isPersisted) {
    var _this9 = this;

    this.stateManagers.forEach(function (managerWithFilters) {
      if (!_this9.stateNameInFilters(name, managerWithFilters.filters)) {
        aggLogger("updating item in state in  state manager for state " + name);
        aggLogger(managerWithFilters.manager);
        aggLogger(stateObj);

        managerWithFilters.manager._updateItemInState(name, stateObj, testForEqualityFunction, isPersisted);
      }
    });
  };

  _proto.stateNameInFilters = function stateNameInFilters(name, filters) {
    var foundIndex = filters.findIndex(function (filter) {
      return filter === name;
    });
    return foundIndex >= 0;
  };

  return AggregateStateManager;
}(_AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager);

/***/ }),

/***/ "./src/framework/state/AsyncStateManagerWrapper.ts":
/*!*********************************************************!*\
  !*** ./src/framework/state/AsyncStateManagerWrapper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncStateManagerWrapper)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var asyncLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-async');

var AsyncStateManagerWrapper = /*#__PURE__*/function (_AbstractStateManager) {
  _inheritsLoose(AsyncStateManagerWrapper, _AbstractStateManager);

  function AsyncStateManagerWrapper(topLevelSM, wrappedSM) {
    var _this;

    _this = _AbstractStateManager.call(this, 'async') || this;
    _this.topLevelSM = topLevelSM;
    _this.wrappedSM = wrappedSM;
    _this.forceSaves = false;

    _this.wrappedSM.emitEvents();

    var stateNamesToMonitor = _this.wrappedSM.getConfiguredStateNames();

    _this.stateChanged = _this.stateChanged.bind(_assertThisInitialized(_this));
    _this.stateChangedItemAdded = _this.stateChangedItemAdded.bind(_assertThisInitialized(_this));
    _this.stateChangedItemRemoved = _this.stateChangedItemRemoved.bind(_assertThisInitialized(_this));
    _this.stateChangedItemUpdated = _this.stateChangedItemUpdated.bind(_assertThisInitialized(_this));
    stateNamesToMonitor.forEach(function (stateName) {
      _this.wrappedSM.addChangeListenerForName(stateName, _assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = AsyncStateManagerWrapper.prototype;

  _proto._addItemToState = function _addItemToState(name, stateObj, isPersisted) {
    if (isPersisted === void 0) {
      isPersisted = false;
    }

    asyncLogger("adding item to state " + name + " - is persisted " + isPersisted);
    this.wrappedSM.addNewItemToState(name, stateObj, isPersisted);
  };

  _proto._getState = function _getState(name) {
    // assume wrapped SM is asynchronous
    // make the call to get state but supply the caller with an empty state for now
    asyncLogger("getting state " + name);
    this.wrappedSM.getStateByName(name);
    return {
      name: name,
      value: []
    };
  };

  _proto._removeItemFromState = function _removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted) {
    asyncLogger("removing item from state " + name + " is persisted " + isPersisted);
    this.wrappedSM.removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted);
  };

  _proto._updateItemInState = function _updateItemInState(name, stateObj, testForEqualityFunction, isPersisted) {
    asyncLogger("updating item in state " + name);
    this.wrappedSM.updateItemInState(name, stateObj, testForEqualityFunction, isPersisted);
  };

  _proto._ensureStatePresent = function _ensureStatePresent(name) {} // assume already present
  ;

  _proto._addNewNamedStateToStorage = function _addNewNamedStateToStorage(state) {} // assume already present
  ;

  _proto._replaceNamedStateInStorage = function _replaceNamedStateInStorage(state) {} // not implemented, not replacing state wholesale
  ;

  _proto._saveState = function _saveState(name, stateObj) {} // not implemented, not replacing state wholesale
  ;

  _proto.stateChangedItemRemoved = function stateChangedItemRemoved(managerName, name, itemRemoved) {} // not implemented, assumes called to wrapped SM worked
  ;

  _proto.stateChangedItemUpdated = function stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {} // not implemented, assumes called to wrapped SM worked
  ;

  _proto.stateChanged = function stateChanged(managerName, name, newValue) {
    // received new state from the wrapped SM
    // pass the received state to the top level SM
    asyncLogger("Wrapped SM has supplied new state " + name + " passing to top level SM");
    asyncLogger(newValue);
    this.topLevelSM.setStateByName(name, newValue);
  };

  _proto.stateChangedItemAdded = function stateChangedItemAdded(managerName, name, itemAdded) {
    asyncLogger("Wrapped SM has supplied new completed item for state " + name + " passing to top level SM");
    this.topLevelSM.addNewItemToState(name, itemAdded, true);
  };

  _proto.getListenerName = function getListenerName() {
    return "Async Manager";
  };

  return AsyncStateManagerWrapper;
}(_AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager);



/***/ }),

/***/ "./src/framework/state/IndexedDBStateManager.ts":
/*!******************************************************!*\
  !*** ./src/framework/state/IndexedDBStateManager.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}





var logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('indexeddb-ts');

var IndexedDBStateManager = /*#__PURE__*/function () {
  function IndexedDBStateManager() {
    this.dbName = 'default';
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_3__["default"]('indexeddb');
    this.emitEvents();
    this.bHasCompletedRun = [];
    this.collections = [];
    this.callbackForAddItem = this.callbackForAddItem.bind(this);
    this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
    this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
    this.callbackForGetItems = this.callbackForGetItems.bind(this);
  }

  IndexedDBStateManager.getInstance = function getInstance() {
    if (!IndexedDBStateManager.instance) {
      IndexedDBStateManager.instance = new IndexedDBStateManager();
    }

    return IndexedDBStateManager.instance;
  };

  var _proto = IndexedDBStateManager.prototype;

  _proto.hasCompletedRun = function hasCompletedRun(stateName) {
    var result = false;
    var foundIndex = this.collections.findIndex(function (collection) {
      return collection.name === stateName;
    });

    if (foundIndex >= 0) {
      result = this.bHasCompletedRun[foundIndex];
    }

    return result;
  };

  _proto.setCompletedRun = function setCompletedRun(stateName) {
    var foundIndex = this.collections.findIndex(function (collection) {
      return collection.name === stateName;
    });

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = true;
    }
  };

  _proto.forceResetForGet = function forceResetForGet(stateName) {
    var foundIndex = this.collections.findIndex(function (collection) {
      return collection.name === stateName;
    });

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = false;
    }
  };

  _proto.initialise = /*#__PURE__*/function () {
    var _initialise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dbName, collections) {
      var runsComplete;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              logger("opening database for " + dbName + " with collections");
              logger(collections);
              this.dbName = dbName;
              this.collections = collections;
              runsComplete = [];
              this.collections.forEach(function (collection) {
                runsComplete.push(false);
              });
              this.bHasCompletedRun = runsComplete;
              _context.next = 9;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(dbName, 1, {
                upgrade: function upgrade(db, oldVersion, newVersion, transaction) {
                  collections.forEach(function (collection) {
                    logger("creating collection for " + collection.name + " with key " + collection.keyField);
                    db.createObjectStore(collection.name, {
                      keyPath: collection.keyField,
                      autoIncrement: false
                    });
                  });
                },
                blocked: function blocked() {// …
                },
                blocking: function blocking() {// …
                },
                terminated: function terminated() {// …
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function initialise(_x, _x2) {
      return _initialise.apply(this, arguments);
    }

    return initialise;
  }();

  _proto._addNewNamedStateToStorage = function _addNewNamedStateToStorage(state) {};

  _proto._getState = function _getState(name) {
    if (this.hasCompletedRun(name)) {
      logger("Getting All " + name + " - not done - previously retrieved");
    } else {
      logger("getting state " + name);
      this.getWithCollectionKey(name, this.getKeyFieldForKey(name));
    }

    var state = {
      name: name,
      value: []
    };
    return state;
  };

  _proto._ensureStatePresent = function _ensureStatePresent(name) {} // should be present with initialise
  ;

  _proto._replaceNamedStateInStorage = function _replaceNamedStateInStorage(state) {
    var _this = this;

    var fn = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger("replacing item in storage " + state.name);
                logger(state.value);
                _context2.next = 4;
                return _this.removeAllItemsFromCollectionKey(state.name, _this.getKeyFieldForKey(state.name));

              case 4:
                _context2.next = 6;
                return _this.saveWithCollectionKey(state.name, state.value, _this.getKeyFieldForKey(state.name));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fn() {
        return _ref.apply(this, arguments);
      };
    }();

    fn();
  };

  _proto._addItemToState = function _addItemToState(name, stateObj, isPersisted) {
    if (isPersisted === void 0) {
      isPersisted = false;
    }

    if (isPersisted) return;
    this.addNewItemToCollection(name, stateObj, this.getKeyFieldForKey(name));
  };

  _proto._removeItemFromState = function _removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted) {
    if (isPersisted) return;
    this.removeItemFromCollection(name, stateObj, this.getKeyFieldForKey(name));
  };

  _proto._updateItemInState = function _updateItemInState(name, stateObj, testForEqualityFunction, isPersisted) {
    if (isPersisted) return;
    this.updateItemInCollection(name, stateObj, this.getKeyFieldForKey(name));
  };

  _proto._saveState = function _saveState(name, stateObj) {
    var _this2 = this;

    var fn = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                logger("saving state " + name);
                _context3.next = 3;
                return _this2.removeAllItemsFromCollectionKey(name, _this2.getKeyFieldForKey(name));

              case 3:
                _context3.next = 5;
                return _this2.saveWithCollectionKey(name, stateObj, _this2.getKeyFieldForKey(name));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function fn() {
        return _ref2.apply(this, arguments);
      };
    }();

    fn();
  };

  _proto.saveWithCollectionKey = /*#__PURE__*/function () {
    var _saveWithCollectionKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, saveData, keyField) {
      var db, transaction, objectStore;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              logger("Saving array with key " + key);
              logger(saveData);
              _context4.next = 5;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 5:
              db = _context4.sent; // @ts-ignore

              transaction = db.transaction([key], "readwrite");

              transaction.oncomplete = function (ev) {
                logger('Success');
                logger(ev);
              };

              transaction.onerror = function (ev) {
                logger('Error');
                logger(ev);
              }; // @ts-ignore


              objectStore = transaction.store; // @ts-ignore

              _context4.next = 12;
              return this.saveItemsToCollection(objectStore, saveData, keyField);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function saveWithCollectionKey(_x3, _x4, _x5) {
      return _saveWithCollectionKey.apply(this, arguments);
    }

    return saveWithCollectionKey;
  }()
  /* add a new item to the local storage if not already there */
  ;

  _proto.addNewItemToCollection = /*#__PURE__*/function () {
    var _addNewItemToCollection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(key, item, keyField) {
      var db, transaction;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              if (!(item !== null)) {
                _context5.next = 11;
                break;
              }

              logger("Adding with key " + key);
              logger(item);
              _context5.next = 6;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 6:
              db = _context5.sent; // @ts-ignore

              transaction = db.transaction([key], "readwrite").objectStore(key).add(item);

              transaction.oncomplete = function (ev) {
                logger('Success');
                logger(ev);
              };

              transaction.onerror = function (ev) {
                logger('Error');
                logger(ev);
              };

              this.callbackForAddItem(item, key);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function addNewItemToCollection(_x6, _x7, _x8) {
      return _addNewItemToCollection.apply(this, arguments);
    }

    return addNewItemToCollection;
  }();

  _proto.removeItemFromCollection = /*#__PURE__*/function () {
    var _removeItemFromCollection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(key, item, keyField) {
      var db, transaction;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              if (!(item !== null)) {
                _context6.next = 13;
                break;
              }

              logger("Removing with key " + key + " item " + item[keyField]);
              logger(item);
              _context6.next = 6;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 6:
              db = _context6.sent; // @ts-ignore

              transaction = db.transaction([key], "readwrite").objectStore(key).delete(item[keyField]);

              transaction.oncomplete = function (ev) {
                logger('Success');
                logger(ev);
              };

              transaction.onerror = function (ev) {
                logger('Error');
                logger(ev);
              };

              _context6.next = 12;
              return transaction.done;

            case 12:
              this.callbackForRemoveItem(item, key);

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function removeItemFromCollection(_x9, _x10, _x11) {
      return _removeItemFromCollection.apply(this, arguments);
    }

    return removeItemFromCollection;
  }();

  _proto.updateItemInCollection = /*#__PURE__*/function () {
    var _updateItemInCollection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(key, item, keyField) {
      var db, transaction;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              if (!item) {
                _context7.next = 13;
                break;
              }

              logger("Updating item in storage " + key);
              logger(item);
              _context7.next = 6;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 6:
              db = _context7.sent; // @ts-ignore

              transaction = db.transaction([key], "readwrite").objectStore(key).put(item);

              transaction.oncomplete = function (ev) {
                logger('Success');
                logger(ev);
              };

              transaction.onerror = function (ev) {
                logger('Error');
                logger(ev);
              }; // @ts-ignore


              _context7.next = 12;
              return transaction.done;

            case 12:
              this.callbackForUpdateItem(item, key);

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function updateItemInCollection(_x12, _x13, _x14) {
      return _updateItemInCollection.apply(this, arguments);
    }

    return updateItemInCollection;
  }();

  _proto.addChangeListenerForName = function addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  };

  _proto.addNewItemToState = function addNewItemToState(name, item, isPersisted) {
    this._addItemToState(name, item, isPersisted);
  };

  _proto.emitEvents = function emitEvents() {
    this.delegate.emitEvents();
  };

  _proto.findItemInState = function findItemInState(name, item, testForEqualityFunction) {
    throw Error("not implemented");
  };

  _proto.getStateByName = function getStateByName(name) {
    this._getState(name);
  };

  _proto.informChangeListenersForStateWithName = function informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  };

  _proto.isItemInState = function isItemInState(name, item, testForEqualityFunction) {
    return true;
  };

  _proto.removeItemFromState = function removeItemFromState(name, item, testForEqualityFunction, isPersisted) {
    logger("Removing item from state " + name + " is persisted " + isPersisted);
    logger(item);

    this._removeItemFromState(name, item, testForEqualityFunction, isPersisted);

    return true;
  };

  _proto.setStateByName = function setStateByName(name, stateObjectForName, informListeners) {
    this._replaceNamedStateInStorage({
      name: name,
      value: stateObjectForName
    });

    if (informListeners) this.delegate.informChangeListenersForStateWithName(name, stateObjectForName, _StateManager__WEBPACK_IMPORTED_MODULE_2__.stateEventType.StateChanged, null);
  };

  _proto.suppressEvents = function suppressEvents() {
    this.delegate.suppressEvents();
  };

  _proto.updateItemInState = function updateItemInState(name, item, testForEqualityFunction, isPersisted) {
    this._updateItemInState(name, item, testForEqualityFunction, isPersisted);

    return true;
  };

  _proto.getWithCollectionKey = /*#__PURE__*/function () {
    var _getWithCollectionKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(key, keyField) {
      var savedResults, db, transaction, objectStore, cursor;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              savedResults = [];
              logger("Loading with key " + key);
              _context8.next = 5;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 5:
              db = _context8.sent;
              _context8.next = 8;
              return this.checkForObjectStore(db, key, keyField);

            case 8:
              // @ts-ignore
              transaction = db.transaction([key]); // @ts-ignore

              objectStore = transaction.store; // @ts-ignore

              _context8.next = 12;
              return objectStore.openCursor();

            case 12:
              cursor = _context8.sent;

            case 13:
              if (!cursor) {
                _context8.next = 20;
                break;
              } // @ts-ignore


              savedResults.push(cursor.value); // @ts-ignore

              _context8.next = 17;
              return cursor.continue();

            case 17:
              cursor = _context8.sent;
              _context8.next = 13;
              break;

            case 20:
              logger(savedResults);
              this.callbackForGetItems(savedResults, key);

            case 22:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function getWithCollectionKey(_x15, _x16) {
      return _getWithCollectionKey.apply(this, arguments);
    }

    return getWithCollectionKey;
  }();

  _proto.getConfiguredStateNames = function getConfiguredStateNames() {
    var result = [];
    this.collections.forEach(function (collection) {
      result.push(collection.name);
    });
    return result;
  };

  _proto.getKeyFieldForKey = function getKeyFieldForKey(key) {
    var result = '_id';
    var foundIndex = this.collections.findIndex(function (collection) {
      return collection.name === key;
    });

    if (foundIndex >= 0) {
      result = this.collections[foundIndex].keyField;
    }

    return result;
  };

  _proto.checkForObjectStore = /*#__PURE__*/function () {
    var _checkForObjectStore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(db, key, keyField) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              logger("Checking for collection " + key);

              if (db.objectStoreNames.contains(key)) {
                _context9.next = 5;
                break;
              } // @ts-ignore


              logger("Checking for collection " + key + " - NOT found, creating");
              _context9.next = 5;
              return db.createObjectStore(key, {
                keyPath: keyField,
                autoIncrement: false
              });

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function checkForObjectStore(_x17, _x18, _x19) {
      return _checkForObjectStore.apply(this, arguments);
    }

    return checkForObjectStore;
  }();

  _proto.saveItemsToCollection = /*#__PURE__*/function () {
    var _saveItemsToCollection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(objectStore, saveData, keyField) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              logger("Saving items to collection");
              saveData.forEach(function (data) {
                // @ts-ignore
                objectStore.add(data);
              });

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function saveItemsToCollection(_x20, _x21, _x22) {
      return _saveItemsToCollection.apply(this, arguments);
    }

    return saveItemsToCollection;
  }();

  _proto.removeAllItemsFromCollectionKey = /*#__PURE__*/function () {
    var _removeAllItemsFromCollectionKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(key, keyField) {
      var db, transaction, objectStore;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (keyField === void 0) {
                keyField = 'id';
              }

              logger("Clearing collection " + key);
              _context11.next = 4;
              return (0,idb__WEBPACK_IMPORTED_MODULE_1__.openDB)(this.dbName, 1);

            case 4:
              db = _context11.sent;
              _context11.next = 7;
              return this.checkForObjectStore(db, key, keyField);

            case 7:
              // @ts-ignore
              transaction = db.transaction([key], "readwrite"); // @ts-ignore

              objectStore = transaction.store; // @ts-ignore

              _context11.next = 11;
              return objectStore.clear();

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function removeAllItemsFromCollectionKey(_x23, _x24) {
      return _removeAllItemsFromCollectionKey.apply(this, arguments);
    }

    return removeAllItemsFromCollectionKey;
  }();

  _proto.callbackForRemoveItem = /*#__PURE__*/function () {
    var _callbackForRemoveItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data, associatedStateName) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              logger("callback for remove item for state " + associatedStateName + "  - not forwarded");
              logger(data);

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    function callbackForRemoveItem(_x25, _x26) {
      return _callbackForRemoveItem.apply(this, arguments);
    }

    return callbackForRemoveItem;
  }();

  _proto.callbackForUpdateItem = /*#__PURE__*/function () {
    var _callbackForUpdateItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data, associatedStateName) {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              logger("callback for update item for state " + associatedStateName + "  - not forwarded");
              logger(data);

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    function callbackForUpdateItem(_x27, _x28) {
      return _callbackForUpdateItem.apply(this, arguments);
    }

    return callbackForUpdateItem;
  }();

  _proto.callbackForGetItems = function callbackForGetItems(data, associatedStateName) {
    logger("callback for get items for state " + associatedStateName + " - FORWARDING");
    logger(data);
    this.setCompletedRun(associatedStateName);
    this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.stateEventType.StateChanged, null);
  };

  _proto.callbackForAddItem = /*#__PURE__*/function () {
    var _callbackForAddItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data, associatedStateName) {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              logger("callback for add item for state " + associatedStateName + "  - FORWARDING");
              logger(data);
              this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_2__.stateEventType.ItemAdded, null);

            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function callbackForAddItem(_x29, _x30) {
      return _callbackForAddItem.apply(this, arguments);
    }

    return callbackForAddItem;
  }();

  return IndexedDBStateManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexedDBStateManager);

/***/ }),

/***/ "./src/framework/state/MemoryBufferStateManager.ts":
/*!*********************************************************!*\
  !*** ./src/framework/state/MemoryBufferStateManager.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStateManager */ "./src/framework/state/AbstractStateManager.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var msManager = debug__WEBPACK_IMPORTED_MODULE_0___default()('state-manager-ms');
/** To Do - make state unchangeable outside of this class (i.e. deep copies) */

var MemoryBufferStateManager = /*#__PURE__*/function (_AbstractStateManager) {
  _inheritsLoose(MemoryBufferStateManager, _AbstractStateManager);

  function MemoryBufferStateManager() {
    var _this;

    _this = _AbstractStateManager.call(this, 'memory') || this;
    _this.applicationState = [];
    _this.forceSaves = true;
    return _this;
  }

  MemoryBufferStateManager.getInstance = function getInstance() {
    if (!MemoryBufferStateManager._instance) {
      MemoryBufferStateManager._instance = new MemoryBufferStateManager();
    }

    return MemoryBufferStateManager._instance;
  };

  var _proto = MemoryBufferStateManager.prototype;

  _proto._ensureStatePresent = function _ensureStatePresent(name) {
    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex < 0) {
      var state = {
        name: name,
        value: []
      };
      this.applicationState.push(state);
    }
  };

  _proto._addNewNamedStateToStorage = function _addNewNamedStateToStorage(state) {
    msManager("Adding new complete state " + name);
    msManager(state.value);
    this.applicationState.push(state);
  };

  _proto._replaceNamedStateInStorage = function _replaceNamedStateInStorage(state) {
    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === state.name;
    });

    if (foundIndex >= 0) {
      msManager("replacing complete state " + name);
      msManager(state.value);
      this.applicationState.splice(foundIndex, 1, state);
    }
  };

  _proto._getState = function _getState(name) {
    // @ts-ignore
    var state = this.applicationState.find(function (element) {
      return element.name === name;
    });
    msManager("getting complete state " + name);
    msManager(state.value);
    return state;
  };

  _proto._saveState = function _saveState(name, stateObject) {
    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      var state = this.applicationState[foundIndex];
      msManager("SAVING complete state " + name);
      msManager(state.value);
      state.value = stateObject;
    }
  };

  _proto._addItemToState = function _addItemToState(name, stateObj, isPersisted) {
    if (isPersisted === void 0) {
      isPersisted = false;
    }

    if (!isPersisted) return; // dont add incomplete objects to the state

    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      var state = this.applicationState[foundIndex];
      msManager("adding item to state " + name);
      msManager(stateObj);
      state.value.push(stateObj);
    }
  };

  _proto._removeItemFromState = function _removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted) {
    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      var state = this.applicationState[foundIndex];
      var valueIndex = state.value.findIndex(function (element) {
        return testForEqualityFunction(element, stateObj);
      });

      if (valueIndex >= 0) {
        msManager("removing item from state " + name);
        msManager(stateObj);
        state.value.splice(valueIndex, 1);
      }
    }
  };

  _proto._updateItemInState = function _updateItemInState(name, stateObj, testForEqualityFunction, isPersisted) {
    var foundIndex = this.applicationState.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      var state = this.applicationState[foundIndex];
      var valueIndex = state.value.findIndex(function (element) {
        return testForEqualityFunction(element, stateObj);
      });

      if (valueIndex >= 0) {
        state.value.splice(valueIndex, 1, stateObj);
        msManager("updating item in state " + name);
        msManager(stateObj);
      }
    } else {
      this._addItemToState(name, stateObj, true);
    }
  };

  return MemoryBufferStateManager;
}(_AbstractStateManager__WEBPACK_IMPORTED_MODULE_1__.AbstractStateManager);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemoryBufferStateManager);

/***/ }),

/***/ "./src/framework/state/RESTApiStateManager.ts":
/*!****************************************************!*\
  !*** ./src/framework/state/RESTApiStateManager.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTApiStateManager": () => (/* binding */ RESTApiStateManager)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var _network_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/Types */ "./src/framework/network/Types.ts");
/* harmony import */ var _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateChangedDelegate */ "./src/framework/state/StateChangedDelegate.ts");
/* harmony import */ var _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network/CallbackRegistry */ "./src/framework/network/CallbackRegistry.ts");






var logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('state-manager-api');
var RESTApiStateManager = /*#__PURE__*/function () {
  function RESTApiStateManager() {
    this.configuration = [];
    this.delegate = new _StateChangedDelegate__WEBPACK_IMPORTED_MODULE_4__["default"]('restapi');
    this.emitEvents();
    this.bHasCompletedRun = [];
    this.callbackForAddItem = this.callbackForAddItem.bind(this);
    this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
    this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
    this.callbackForGetItems = this.callbackForGetItems.bind(this);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_ADD_ITEM, this.callbackForAddItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM, this.callbackForRemoveItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM, this.callbackForUpdateItem);
    _network_CallbackRegistry__WEBPACK_IMPORTED_MODULE_5__.CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_GET_ITEMS, this.callbackForGetItems);
  }

  RESTApiStateManager.getInstance = function getInstance() {
    if (!RESTApiStateManager._instance) {
      RESTApiStateManager._instance = new RESTApiStateManager();
    }

    return RESTApiStateManager._instance;
  };

  var _proto = RESTApiStateManager.prototype;

  _proto.getConfiguredStateNames = function getConfiguredStateNames() {
    var results = [];
    this.configuration.forEach(function (config) {
      results.push(config.stateName);
    });
    return results;
  };

  _proto.hasCompletedRun = function hasCompletedRun(stateName) {
    var result = false;
    var foundIndex = this.configuration.findIndex(function (config) {
      return config.stateName === stateName;
    });

    if (foundIndex >= 0) {
      result = this.bHasCompletedRun[foundIndex];
    }

    return result;
  };

  _proto.setCompletedRun = function setCompletedRun(stateName) {
    var foundIndex = this.configuration.findIndex(function (config) {
      return config.stateName === stateName;
    });

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = true;
    }
  };

  _proto.forceResetForGet = function forceResetForGet(stateName) {
    var foundIndex = this.configuration.findIndex(function (config) {
      return config.stateName === stateName;
    });

    if (foundIndex >= 0) {
      this.bHasCompletedRun[foundIndex] = false;
    }
  };

  _proto.initialise = function initialise(config) {
    this.configuration = config;
    var runsComplete = [];
    this.configuration.forEach(function (configItem) {
      runsComplete.push(false);
    });
    this.bHasCompletedRun = runsComplete;
  };

  _proto._addNewNamedStateToStorage = function _addNewNamedStateToStorage(state) {
    /* assume model on the other end exists */
  };

  _proto._getState = function _getState(name) {
    logger("Getting All " + name);

    if (this.hasCompletedRun(name)) {
      logger("Getting All " + name + " - not done - previously retrieved");
    } else {
      var config = this.getConfigurationForStateName(name);

      if (config.isActive) {
        var jsonRequest = {
          url: config.serverURL + config.api,
          type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.GET,
          params: {},
          callbackId: RESTApiStateManager.FUNCTION_ID_GET_ITEMS,
          associatedStateName: name
        };
        _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addApiRequest(jsonRequest, true);
      } else {
        logger("No configuration for state " + name);
      }
    }

    var state = {
      name: name,
      value: []
    };
    return state;
  };

  _proto._ensureStatePresent = function _ensureStatePresent(name) {
    /* assume state exists */
  };

  _proto._replaceNamedStateInStorage = function _replaceNamedStateInStorage(state) {
    /* not going to replace all state */
  };

  _proto._saveState = function _saveState(name, stateObj) {
    /* not going to replace all state */
  };

  _proto._addItemToState = function _addItemToState(name, stateObj, isPersisted) {
    if (isPersisted === void 0) {
      isPersisted = false;
    }

    if (isPersisted) return; // dont add complete objects to the state - they are already processed

    logger("Adding item to " + name);
    logger(stateObj);
    var config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      var jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.POST,
        params: stateObj,
        callbackId: RESTApiStateManager.FUNCTION_ID_ADD_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger("No configuration for state " + name);
    }
  };

  _proto._removeItemFromState = function _removeItemFromState(name, stateObj, testForEqualityFunction, isPersisted) {
    if (isPersisted) return; // dont remove complete objects to the state - they are already processed

    logger("Removing item from " + name);
    logger(stateObj);
    var config = this.getConfigurationForStateName(name);
    var identifier = stateObj.id;

    if (config.idField) {
      identifier = stateObj[config.idField];
    }

    if (config.isActive) {
      var jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.DELETE,
        params: {
          id: identifier
        },
        callbackId: RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger("No configuration for state " + name);
    }
  };

  _proto._updateItemInState = function _updateItemInState(name, stateObj, testForEqualityFunction, isPersisted) {
    if (isPersisted) return; // dont update complete objects to the state - they are already processed

    logger("Updating item in " + name);
    logger(stateObj);
    var config = this.getConfigurationForStateName(name);

    if (config.isActive) {
      var jsonRequest = {
        url: config.serverURL + config.api,
        type: _network_Types__WEBPACK_IMPORTED_MODULE_1__.RequestType.PUT,
        params: stateObj,
        callbackId: RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM,
        associatedStateName: name
      };
      _network_DownloadManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().addApiRequest(jsonRequest, true);
    } else {
      logger("No configuration for state " + name);
    }
  };

  _proto.addChangeListenerForName = function addChangeListenerForName(name, listener) {
    this.delegate.addChangeListenerForName(name, listener);
  };

  _proto.addNewItemToState = function addNewItemToState(name, item, isPersisted) {
    this._addItemToState(name, item, isPersisted);
  };

  _proto.emitEvents = function emitEvents() {
    this.delegate.emitEvents();
  };

  _proto.findItemInState = function findItemInState(name, item, testForEqualityFunction) {
    throw Error("not implemented");
  };

  _proto.getStateByName = function getStateByName(name) {
    this._getState(name);
  };

  _proto.informChangeListenersForStateWithName = function informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
  };

  _proto.isItemInState = function isItemInState(name, item, testForEqualityFunction) {
    return true;
  };

  _proto.removeItemFromState = function removeItemFromState(name, item, testForEqualityFunction, isPersisted) {
    logger("Removing item from state " + name + " is persisted " + isPersisted);
    logger(item);

    this._removeItemFromState(name, item, testForEqualityFunction, isPersisted);

    return true;
  };

  _proto.setStateByName = function setStateByName(name, stateObjectForName, informListeners) {};

  _proto.suppressEvents = function suppressEvents() {
    this.delegate.suppressEvents();
  };

  _proto.updateItemInState = function updateItemInState(name, item, testForEqualityFunction, isPersisted) {
    this._updateItemInState(name, item, testForEqualityFunction, isPersisted);

    return true;
  };

  _proto.getConfigurationForStateName = function getConfigurationForStateName(name) {
    var config = {
      stateName: name,
      serverURL: '',
      api: '',
      isActive: false
    };
    var foundIndex = this.configuration.findIndex(function (config) {
      return config.stateName === name;
    });

    if (foundIndex >= 0) {
      config = this.configuration[foundIndex];
    }

    return config;
  };

  _proto.callbackForRemoveItem = function callbackForRemoveItem(data, status, associatedStateName) {
    logger("callback for remove item for state " + associatedStateName + " with status " + status + " - not forwarded");

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);
    }
  };

  _proto.callbackForUpdateItem = function callbackForUpdateItem(data, status, associatedStateName) {
    logger("callback for update item for state " + associatedStateName + " with status " + status + " - not forwarded");

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);
    }
  };

  _proto.callbackForGetItems = function callbackForGetItems(data, status, associatedStateName) {
    logger("callback for get items for state " + associatedStateName + " with status " + status + " - FORWARDING");

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);
      this.setCompletedRun(associatedStateName);
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.StateChanged, null);
    }
  };

  _proto.callbackForAddItem = function callbackForAddItem(data, status, associatedStateName, wasOffline) {
    logger("callback for add item for state " + associatedStateName + " with status " + status + " - FORWARDING");

    if (status >= 200 && status <= 299) {
      // do we have any data?
      logger(data);

      if (!wasOffline) {
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemAdded, null);
      } else {
        logger('Item was added offline, update the current data');
        this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemUpdated, null);
      }
    } // did the call fail? (server loss)


    if (status === 500) {
      logger("Item adding - offline, but will be queued later");
      this.delegate.informChangeListenersForStateWithName(associatedStateName, data, _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemAdded, null);
    }
  };

  return RESTApiStateManager;
}();
RESTApiStateManager.FUNCTION_ID_ADD_ITEM = 'rest.api.state.manager.add.item';
RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM = 'rest.api.state.manager.remove.item';
RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM = 'rest.api.state.manager.update.item';
RESTApiStateManager.FUNCTION_ID_GET_ITEMS = 'rest.api.state.manager.get.items';

/***/ }),

/***/ "./src/framework/state/StateChangedDelegate.ts":
/*!*****************************************************!*\
  !*** ./src/framework/state/StateChangedDelegate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/framework/state/StateManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


var smLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('state-manager-delegate');

var StateChangedDelegate = /*#__PURE__*/function () {
  function StateChangedDelegate(managerName) {
    this.suppressEventEmits = false;
    this.managerName = managerName;
    this.stateChangeListeners = [];
  }

  var _proto = StateChangedDelegate.prototype;

  _proto.suppressEvents = function suppressEvents() {
    this.suppressEventEmits = true;
  };

  _proto.emitEvents = function emitEvents() {
    this.suppressEventEmits = false;
  };

  _proto.informChangeListenersForStateWithName = function informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue) {
    var _this = this;

    if (eventType === void 0) {
      eventType = _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.StateChanged;
    }

    if (previousObjValue === void 0) {
      previousObjValue = null;
    }

    smLogger("State Manager: Informing state listeners of " + name);

    if (this.suppressEventEmits) {
      smLogger("State Manager: Events suppressed");
      return;
    }

    var foundIndex = this.stateChangeListeners.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      smLogger("State Manager: Found state listeners of " + name + " with event type " + eventType);
      /* let each state change listener know */

      var changeListenersForName = this.stateChangeListeners[foundIndex];
      changeListenersForName.listeners.forEach(function (listener) {
        smLogger("State Manager: Found state listener of " + name + " with name " + listener.getListenerName() + " - informing");

        try {
          switch (eventType) {
            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.StateChanged:
              {
                listener.stateChanged(_this.managerName, name, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemAdded:
              {
                listener.stateChangedItemAdded(_this.managerName, name, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemUpdated:
              {
                listener.stateChangedItemUpdated(_this.managerName, name, previousObjValue, stateObjValue);
                break;
              }

            case _StateManager__WEBPACK_IMPORTED_MODULE_0__.stateEventType.ItemDeleted:
              {
                listener.stateChangedItemRemoved(_this.managerName, name, stateObjValue);
                break;
              }
          }
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
  /*
        Add a state listener for a given state name
        the listener should be a function with two parameters
        name - string - the name of the state variable that they want to be informed about
        stateObjValue - object - the new state value
       */
  ;

  _proto.addChangeListenerForName = function addChangeListenerForName(name, listener) {
    this.ensureListenerSetupForName(name);
    smLogger("State Manager: Adding state listener for " + name + " with name " + listener.getListenerName());
    var foundIndex = this.stateChangeListeners.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex >= 0) {
      smLogger("State Manager: Adding state listener for " + name + " with name " + listener.getListenerName() + " with index " + foundIndex);
      var changeListenersForName = this.stateChangeListeners[foundIndex];
      changeListenersForName.listeners.push(listener);
    }
  };

  _proto.ensureListenerSetupForName = function ensureListenerSetupForName(name) {
    var foundIndex = this.stateChangeListeners.findIndex(function (element) {
      return element.name === name;
    });

    if (foundIndex < 0) {
      var listenersNameArrayPair = {
        name: name,
        listeners: []
      };
      this.stateChangeListeners.push(listenersNameArrayPair);
    }
  };

  return StateChangedDelegate;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateChangedDelegate);

/***/ }),

/***/ "./src/framework/state/StateManager.ts":
/*!*********************************************!*\
  !*** ./src/framework/state/StateManager.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateEventType": () => (/* binding */ stateEventType)
/* harmony export */ });
var stateEventType;

(function (stateEventType) {
  stateEventType[stateEventType["ItemAdded"] = 0] = "ItemAdded";
  stateEventType[stateEventType["ItemUpdated"] = 1] = "ItemUpdated";
  stateEventType[stateEventType["ItemDeleted"] = 2] = "ItemDeleted";
  stateEventType[stateEventType["StateChanged"] = 3] = "StateChanged";
})(stateEventType || (stateEventType = {}));

/***/ }),

/***/ "./src/framework/ui/ConfigurationTypes.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/ConfigurationTypes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAGGABLE_KEY_ID": () => (/* binding */ DRAGGABLE_KEY_ID),
/* harmony export */   "DRAGGABLE_TYPE": () => (/* binding */ DRAGGABLE_TYPE),
/* harmony export */   "DRAGGABLE_FROM": () => (/* binding */ DRAGGABLE_FROM),
/* harmony export */   "EXTRA_ACTION_ATTRIBUTE_NAME": () => (/* binding */ EXTRA_ACTION_ATTRIBUTE_NAME),
/* harmony export */   "Modifier": () => (/* binding */ Modifier),
/* harmony export */   "KeyType": () => (/* binding */ KeyType),
/* harmony export */   "SidebarLocation": () => (/* binding */ SidebarLocation),
/* harmony export */   "RowPosition": () => (/* binding */ RowPosition),
/* harmony export */   "SCREEN_WIDTH_LARGE": () => (/* binding */ SCREEN_WIDTH_LARGE),
/* harmony export */   "SCREEN_WIDTH_MEDIUM": () => (/* binding */ SCREEN_WIDTH_MEDIUM),
/* harmony export */   "SCREEN_WIDTH_SMALL": () => (/* binding */ SCREEN_WIDTH_SMALL)
/* harmony export */ });
var DRAGGABLE_KEY_ID = 'text/plain';
var DRAGGABLE_TYPE = 'draggedType';
var DRAGGABLE_FROM = 'draggedFrom';
var EXTRA_ACTION_ATTRIBUTE_NAME = 'view-extra-action';
var Modifier;

(function (Modifier) {
  Modifier[Modifier["normal"] = 0] = "normal";
  Modifier[Modifier["active"] = 1] = "active";
  Modifier[Modifier["inactive"] = 2] = "inactive";
  Modifier[Modifier["warning"] = 3] = "warning";
})(Modifier || (Modifier = {}));

var KeyType;

(function (KeyType) {
  KeyType[KeyType["number"] = 0] = "number";
  KeyType[KeyType["string"] = 1] = "string";
  KeyType[KeyType["boolean"] = 2] = "boolean";
  KeyType[KeyType["collection"] = 3] = "collection";
})(KeyType || (KeyType = {}));

var SidebarLocation;

(function (SidebarLocation) {
  SidebarLocation[SidebarLocation["top"] = 0] = "top";
  SidebarLocation[SidebarLocation["right"] = 1] = "right";
  SidebarLocation[SidebarLocation["left"] = 2] = "left";
  SidebarLocation[SidebarLocation["bottom"] = 3] = "bottom";
})(SidebarLocation || (SidebarLocation = {}));

var RowPosition;

(function (RowPosition) {
  RowPosition[RowPosition["first"] = 0] = "first";
  RowPosition[RowPosition["last"] = 1] = "last";
})(RowPosition || (RowPosition = {}));

var SCREEN_WIDTH_LARGE = 992;
var SCREEN_WIDTH_MEDIUM = 769;
var SCREEN_WIDTH_SMALL = 415;

/***/ }),

/***/ "./src/framework/ui/alert/AlertListener.ts":
/*!*************************************************!*\
  !*** ./src/framework/ui/alert/AlertListener.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
var AlertType;

(function (AlertType) {
  AlertType[AlertType["cancelled"] = 0] = "cancelled";
  AlertType[AlertType["confirmed"] = 1] = "confirmed";
})(AlertType || (AlertType = {}));

/***/ }),

/***/ "./src/framework/ui/alert/AlertManager.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/alert/AlertManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManager": () => (/* binding */ AlertManager)
/* harmony export */ });
/* harmony import */ var _AlertListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertListener */ "./src/framework/ui/alert/AlertListener.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);


var ALERT_MODAL_ID = 'alert';
var ALERT_TITLE = 'alert-title';
var ALERT_CONTENT = 'alert-content';
var ALERT_CANCEL = 'alert-cancel';
var ALERT_CONFRIM = 'alert-confirm';
var ALERT_hideClass = "d-none";
var ALERT_showClass = "d-block";
var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('alert');
var AlertManager = /*#__PURE__*/function () {
  function AlertManager() {
    this.alertDiv = document.getElementById(ALERT_MODAL_ID);
    this.alertTitle = document.getElementById(ALERT_TITLE);
    this.alertContent = document.getElementById(ALERT_CONTENT);
    this.cancelButton = document.getElementById(ALERT_CANCEL);
    this.confirmButton = document.getElementById(ALERT_CONFRIM);
  }

  AlertManager.getInstance = function getInstance() {
    if (!AlertManager._instance) {
      AlertManager._instance = new AlertManager();
    }

    return AlertManager._instance;
  };

  var _proto = AlertManager.prototype;

  _proto.startAlert = function startAlert(listener, title, content, context) {
    var _this = this;

    this.alertTitle.innerHTML = title;
    this.alertContent.innerHTML = content; // @ts-ignore

    this.alertDiv.classList.remove(ALERT_hideClass); // @ts-ignore

    this.alertDiv.classList.add(ALERT_showClass);

    var confirmHandler = function confirmHandler(event) {
      logger("Handling confirm event from alert");
      listener.completed({
        outcome: _AlertListener__WEBPACK_IMPORTED_MODULE_0__.AlertType.confirmed,
        context: context
      }); // @ts-ignore

      _this.alertDiv.classList.add(ALERT_hideClass); // @ts-ignore


      _this.alertDiv.classList.remove(ALERT_showClass); // @ts-ignore


      event.target.removeEventListener('click', confirmHandler);
    };

    var cancelHandler = function cancelHandler(event) {
      logger("Handling cancel event from alert");
      listener.completed({
        outcome: _AlertListener__WEBPACK_IMPORTED_MODULE_0__.AlertType.cancelled,
        context: context
      }); // @ts-ignore

      _this.alertDiv.classList.add(ALERT_hideClass); // @ts-ignore


      _this.alertDiv.classList.remove(ALERT_showClass); // @ts-ignore


      event.target.removeEventListener('click', cancelHandler);
    };

    this.confirmButton.addEventListener('click', confirmHandler);
    this.cancelButton.addEventListener('click', cancelHandler);
  };

  return AlertManager;
}();

/***/ }),

/***/ "./src/framework/ui/context/ContextualInformationHelper.ts":
/*!*****************************************************************!*\
  !*** ./src/framework/ui/context/ContextualInformationHelper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TogglePlacement": () => (/* binding */ TogglePlacement),
/* harmony export */   "ContextualInformationHelper": () => (/* binding */ ContextualInformationHelper)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/implementation/AbstractCollectionView */ "./src/framework/ui/view/implementation/AbstractCollectionView.ts");




var logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('context-helper');
var TogglePlacement;

(function (TogglePlacement) {
  TogglePlacement[TogglePlacement["top"] = 0] = "top";
  TogglePlacement[TogglePlacement["bottom"] = 1] = "bottom";
  TogglePlacement[TogglePlacement["right"] = 2] = "right";
  TogglePlacement[TogglePlacement["left"] = 3] = "left";
})(TogglePlacement || (TogglePlacement = {}));

var defaultIdentifier = function defaultIdentifier(name, item) {
  return '';
};

var ContextualInformationHelper = /*#__PURE__*/function () {
  function ContextualInformationHelper() {
    this.registry = [];
    this.menuDivEl = null;
    this.menuContentEl = null;
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.hideContextMenu = this.hideContextMenu.bind(this);
  }

  ContextualInformationHelper.getInstance = function getInstance() {
    if (!ContextualInformationHelper._instance) {
      ContextualInformationHelper._instance = new ContextualInformationHelper();
    }

    return ContextualInformationHelper._instance;
  };

  var _proto = ContextualInformationHelper.prototype;

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    // @ts-ignore
    document.addEventListener('click', this.hideContextMenu);
    this.menuDivEl = document.getElementById('contextmenu');
    this.menuContentEl = document.getElementById('contextMenuItems');
  };

  _proto.addContextFromView = function addContextFromView(view, internalType, displayName) {
    var context = this.ensureInRegistry(view.getName());
    context.view = view;
    context.defaultType.internalType = internalType;
    context.defaultType.displayName = displayName;
    context.defaultType.identifier = view.getItemId;
    context.defaultType.description = view.getItemDescription;
    return context;
  };

  _proto.addContextToElement = function addContextToElement(source, type, item, element, addTooltip, placement) {
    if (addTooltip === void 0) {
      addTooltip = false;
    }

    if (placement === void 0) {
      placement = TogglePlacement.bottom;
    }

    var context = this.ensureInRegistry(source);
    element.setAttribute(ContextualInformationHelper.SOURCE, context.source);
    element.setAttribute(ContextualInformationHelper.TYPE, context.defaultType.internalType);
    element.setAttribute(ContextualInformationHelper.DISPLAYNAME, context.defaultType.displayName);
    element.setAttribute(ContextualInformationHelper.IDENTIFIER, context.defaultType.identifier(type, item));
    element.setAttribute(ContextualInformationHelper.DESCRIPTION, context.defaultType.description(type, item));

    if (addTooltip) {
      element.setAttribute(ContextualInformationHelper.BOOTSTRAP_TOGGLE, ContextualInformationHelper.BOOTSTRAP_TOOLTIP_VALUE);
      element.setAttribute(ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML, ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML_VALUE);

      switch (placement) {
        case TogglePlacement.bottom:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_BOTTOM);
            break;
          }

        case TogglePlacement.top:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_TOP);
            break;
          }

        case TogglePlacement.left:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_LEFT);
            break;
          }

        case TogglePlacement.right:
          {
            element.setAttribute(ContextualInformationHelper.BOOTSTRAP_PLACEMENT, ContextualInformationHelper.BOOTSTRAP_PLACEMENT_RIGHT);
            break;
          }
      } // @ts-ignore


      $('[data-toggle="tooltip"]').tooltip({
        html: true
      });
    }
  };

  _proto.findContextFromEvent = function findContextFromEvent(event) {
    var result = null;

    if (event.target) {
      var target = event.target; // @ts-ignore

      result = this.findContextFromElement(event.target);
    }

    return result;
  };

  _proto.addActionToContext = function addActionToContext(context, actionName, displayName, handler, icon, permissionCheck) {
    var action = {
      actionName: actionName,
      displayName: displayName,
      handler: handler,
      hasPermission: permissionCheck,
      elementDefinition: {
        elementType: 'a',
        elementAttributes: [{
          name: 'href',
          value: '#'
        }],
        elementClasses: 'list-group-item list-group-item-action bg-dark text-white'
      },
      iconClasses: icon
    };
    this.addContextActionToContext(context, action);
  };

  _proto.handleContextMenu = function handleContextMenu(event) {
    logger('Right click');
    logger(event.target); // are we over a context sensitive item?
    // find a context if possible
    // @ts-ignore

    var context = this.findContextFromElement(event.target);
    logger(context);

    if (context && this.buildContextMenu(context)) {
      event.preventDefault();
      event.stopPropagation();
      this.showContextMenu(event);
      return false;
    } // otherwise let the default behaviour happen


    return true;
  };

  _proto.ensureInRegistry = function ensureInRegistry(source) {
    var result;
    var foundIndex = this.registry.findIndex(function (context) {
      return context.source === source;
    });

    if (foundIndex < 0) {
      result = {
        source: source,
        defaultType: {
          internalType: '',
          displayName: '',
          identifier: defaultIdentifier,
          description: defaultIdentifier,
          actions: []
        }
      };
      this.registry.push(result);
    } else {
      result = this.registry[foundIndex];
    }

    return result;
  };

  _proto.findContextFromElement = function findContextFromElement(element) {
    // do we have context information in this element?
    var result = null;
    var source = element.getAttribute(ContextualInformationHelper.SOURCE);

    if (source) {
      var _type = element.getAttribute(ContextualInformationHelper.TYPE);

      var name = element.getAttribute(ContextualInformationHelper.DISPLAYNAME);
      var id = element.getAttribute(ContextualInformationHelper.IDENTIFIER);
      var desc = element.getAttribute(ContextualInformationHelper.DESCRIPTION); // @ts-ignore

      result = {
        source: source,
        internalType: _type,
        displayName: name,
        identifier: id,
        description: desc
      };
    } else {
      var parent = element.parentElement;

      if (parent) {
        result = this.findContextFromElement(parent);
      }
    }

    return result;
  };

  _proto.findAllContextsFromElement = function findAllContextsFromElement(element, contexts) {
    // do we have context information in this element?
    var source = element.getAttribute(ContextualInformationHelper.SOURCE);

    if (source) {
      var _type2 = element.getAttribute(ContextualInformationHelper.TYPE);

      var name = element.getAttribute(ContextualInformationHelper.DISPLAYNAME);
      var id = element.getAttribute(ContextualInformationHelper.IDENTIFIER);
      var desc = element.getAttribute(ContextualInformationHelper.DESCRIPTION); // @ts-ignore

      if (_type2 && name && id && desc) {
        var result = {
          source: source,
          internalType: _type2,
          displayName: name,
          identifier: id,
          description: desc
        };
        contexts.push(result);
      }
    }

    var parent = element.parentElement;

    if (parent) {
      this.findAllContextsFromElement(parent, contexts);
    }
  };

  _proto.addContextActionToContext = function addContextActionToContext(context, action) {
    logger("Adding action to context " + context.source);
    logger(action);
    context.defaultType.actions.push(action);
  };

  _proto.buildContextMenu = function buildContextMenu(context) {
    var _this = this;

    logger("building context menu");
    var result = false; // find the context for these details

    var contextDef = this.ensureInRegistry(context.source);
    var selectedItem = null;

    if (contextDef && contextDef.view && contextDef.view instanceof _view_implementation_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_3__.AbstractCollectionView) {
      logger("collection view context - finding item with identifier " + context.identifier);
      var collectionView = contextDef.view;
      var compareWith = {}; // @ts-ignore

      compareWith[collectionView.getCollectionUIConfig().keyId] = context.identifier;
      selectedItem = collectionView.getItemInNamedCollection(context.internalType, compareWith);
    }

    logger("found item for context menu");
    logger(selectedItem);

    if (contextDef.defaultType.actions.length > 0) {
      if (this.menuContentEl && this.menuContentEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(this.menuContentEl);
        contextDef.defaultType.actions.forEach(function (action) {
          logger('Adding action');
          logger(action);

          if (selectedItem && action.hasPermission && action.hasPermission(action.actionName, contextDef.defaultType.internalType, selectedItem) || !action.hasPermission) {
            var itemEl = document.createElement(action.elementDefinition.elementType);

            if (itemEl && _this.menuContentEl) {
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addAttributes(itemEl, action.elementDefinition.elementAttributes);
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(itemEl, action.elementDefinition.elementClasses);
              itemEl.setAttribute(ContextualInformationHelper.SOURCE, context.source);
              itemEl.setAttribute(ContextualInformationHelper.TYPE, context.internalType);
              itemEl.setAttribute(ContextualInformationHelper.DISPLAYNAME, context.displayName);
              itemEl.setAttribute(ContextualInformationHelper.IDENTIFIER, context.identifier);
              itemEl.setAttribute(ContextualInformationHelper.DESCRIPTION, context.description);
              itemEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.EXTRA_ACTION_ATTRIBUTE_NAME, action.actionName);
              itemEl.addEventListener('click', function (event) {
                _this.hideContextMenu(event);

                action.handler(event);
              });
              itemEl.innerHTML = "" + action.displayName;

              if (action.iconClasses) {
                itemEl.innerHTML += "&nbsp;&nbsp;<i class=\"" + action.iconClasses + "\"></i>";
              }

              _this.menuContentEl.appendChild(itemEl);

              logger('new menu element is ');
              logger(_this.menuContentEl);
              result = true;
            }
          }
        });
      }
    } else {
      logger("building context menu - no actions for " + context.source);
    }

    return result;
  };

  _proto.hideContextMenu = function hideContextMenu(event) {
    if (this.menuDivEl) {
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(this.menuDivEl, 'd-none');
    }
  };

  _proto.showContextMenu = function showContextMenu(event) {
    if (this.menuDivEl) {
      logger("Showing context menu at " + event.pageX + "," + event.pageY);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_1__["default"].addRemoveClasses(this.menuDivEl, 'd-none', false);
      this.menuDivEl.style.left = event.pageX + 'px';
      this.menuDivEl.style.top = event.pageY + 'px';
    }
  };

  return ContextualInformationHelper;
}();
ContextualInformationHelper.SOURCE = 'context-source';
ContextualInformationHelper.TYPE = 'context-type';
ContextualInformationHelper.DISPLAYNAME = 'context-display-name';
ContextualInformationHelper.IDENTIFIER = 'context-id';
ContextualInformationHelper.DESCRIPTION = 'title';
ContextualInformationHelper.BOOTSTRAP_TOGGLE = 'data-toggle';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT = 'data-placement';
ContextualInformationHelper.BOOTSTRAP_TOOLTIP_VALUE = 'tooltip';
ContextualInformationHelper.BOOTSTRAP_POPOVER_VALUE = 'popover';
ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML = 'data-html';
ContextualInformationHelper.BOOTSTRAP_TOGGLE_HTML_VALUE = 'true';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_TOP = 'top';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_BOTTOM = 'bottom';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_RIGHT = 'right';
ContextualInformationHelper.BOOTSTRAP_PLACEMENT_LEFT = 'left';

/***/ }),

/***/ "./src/framework/ui/form/AbstractForm.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/form/AbstractForm.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractForm": () => (/* binding */ AbstractForm)
/* harmony export */ });
/* harmony import */ var _FormListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormListener */ "./src/framework/ui/form/FormListener.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/ValidationManager */ "./src/framework/ui/form/validation/ValidationManager.ts");
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/AlertListener */ "./src/framework/ui/alert/AlertListener.ts");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/AlertManager */ "./src/framework/ui/alert/AlertManager.ts");
/* harmony import */ var _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation/ValidationTypeDefs */ "./src/framework/ui/form/validation/ValidationTypeDefs.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}








var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form');
var dlogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form-detail');
var vlogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-form-detail-validation');
var AbstractForm = /*#__PURE__*/function () {
  function AbstractForm(containerId, dataObjDef) {
    this.formListeners = [];
    this.fieldListeners = [];
    this.uiDef = null;
    this.isVisible = false;
    this.fields = [];
    this.isInitialised = false;
    this.hasChangedBoolean = false;
    this.isDisplayOnly = false;
    this.containerEl = document.getElementById(containerId);
    if (!this.containerEl) throw new Error("container " + containerId + " for form " + dataObjDef.id + " does not exist");
    this.map = [];
    this.dataObjDef = dataObjDef;
    this.currentDataObj = {};
    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])(); // sub-classes need to create the form and it's fields
    // listen to ourselves

    this.addFormListener(this);
  }

  var _proto = AbstractForm.prototype;

  _proto.hasChanged = function hasChanged() {
    return this.hasChangedBoolean;
  };

  _proto.getName = function getName() {
    return this.dataObjDef.displayName;
  };

  _proto.valueChanged = function valueChanged(formId, field, newValue) {
    this.hasChangedBoolean = true;
    this.setUnsavedMessage();
    logger("Form has changed");
  };

  _proto.failedValidation = function failedValidation(formId, field, currentValue, message) {
    this.hasChangedBoolean = true;
    logger("Form has changed");
  };

  _proto.initialise = function initialise(displayOrder, hasDeleteButton, hideModifierFields) {
    if (hideModifierFields === void 0) {
      hideModifierFields = false;
    }

    if (this.isInitialised) return;
    this.isInitialised = true;

    this._initialise(displayOrder, hasDeleteButton, hideModifierFields);
  };

  _proto.addFieldListener = function addFieldListener(listener) {
    this.fieldListeners.push(listener);
  };

  _proto.addFormListener = function addFormListener(listener) {
    this.formListeners.push(listener);
  };

  _proto.reset = function reset() {
    logger("Resetting form");
    this.clearUnsavedMessage();
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false; // inform the listeners

    if (this.uiDef) {
      var formEvent = {
        formId: this.id,
        target: this,
        eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.RESETTING
      };
      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.currentDataObj = {};

    this._reset(); // reset all the fields


    this.fields.forEach(function (field) {
      field.reset();
    });
    this.hasChangedBoolean = false;
  };

  _proto.setIsVisible = function setIsVisible(isVisible) {
    logger("Changing visibility to " + isVisible);
    this.isVisible = isVisible;

    if (this.uiDef) {
      var eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.HIDDEN;

      if (this.isVisible) {
        this._visible();

        eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SHOWN;
      } else {
        this._hidden();
      } // inform the listeners


      var formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };
      this.informFormListeners(formEvent, this.currentDataObj);
    }

    if (isVisible && !this.isDisplayOnly) this.checkFormValidationOnDisplay();
    if (isVisible && this.isDisplayOnly) this.checkForVisualValidationForDisplayOnly();
  };

  _proto.startCreateNew = function startCreateNew() {
    this.clearUnsavedMessage();
    logger("Starting create new");
    this.reset();
    this.currentDataObj = {};
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false;

    if (this.uiDef) {
      var eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CREATING; // inform the listeners

      var formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };

      this._startCreate();

      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.clearReadOnly();
    return this.currentDataObj;
  };

  _proto.startUpdate = function startUpdate(objectToEdit) {
    this.clearUnsavedMessage();
    logger("Starting modify existing on ");
    this.isDisplayOnly = false;
    this.hasChangedBoolean = false;
    logger(objectToEdit);
    this.currentDataObj = _extends({}, objectToEdit); // take a copy

    if (this.uiDef) {
      var eventType = _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.MODIFYING; // inform the listeners

      var formEvent = {
        formId: this.id,
        target: this,
        eventType: eventType
      };

      this._startUpdate();

      this.informFormListeners(formEvent, this.currentDataObj);
    }

    this.clearReadOnly();
  };

  _proto.displayOnly = function displayOnly(objectToView) {
    this.clearUnsavedMessage();
    logger("Starting display only ");
    logger(objectToView);
    this.isDisplayOnly = true;
    this.hasChangedBoolean = false;
    this.currentDataObj = _extends({}, objectToView); // take a copy

    if (this.uiDef) {
      this._displayOnly();
    }

    this.setReadOnly();
  };

  _proto.formChanged = function formChanged(event, formValues) {
    var _this = this; // catch form events for user leaving the form


    var shouldCancelChange = false;

    switch (event.eventType) {
      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING:
        {
          logger("Form is cancelling");

          if (this.hasChangedBoolean && !this.isDisplayOnly) {
            if (this.uiDef) {
              _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__.AlertManager.getInstance().startAlert(this, this.uiDef.displayName, "Lose any unsaved changes?", _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING);
            }
          } else {
            if (this.uiDef) {
              var formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            }
          }

          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING_ABORTED:
        {
          logger("Form is cancelling - aborted");
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED:
        {
          logger("Form is cancelled - resetting"); // user cancelled the form, will become invisible

          this.isDisplayOnly = true;
          this.reset(); // reset the form state

          this.setReadOnly();
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING:
        {
          logger("Form is deleting");

          if (this.uiDef) {
            _alert_AlertManager__WEBPACK_IMPORTED_MODULE_4__.AlertManager.getInstance().startAlert(this, this.uiDef.displayName, "Are you sure you want to delete this information?", _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING);
          }

          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETE_ABORTED:
        {
          logger("Form is deleting - aborted");
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETED:
        {
          logger("Form is deleted - resetting"); // user is deleting the object, will become invisible

          this.reset();
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVE_ABORTED:
        {
          this._saveFinishedOrAborted();

          logger("Form save cancelled");
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVED:
        {
          this._saveFinishedOrAborted();

          logger("Form is saved with data");
          logger(formValues);
          this.isDisplayOnly = false;
          this.hasChangedBoolean = false;
          break;
        }

      case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVING:
        {
          logger("Form is saving, checking validation and storing values");

          this._saveIsActive();

          if (this.uiDef) {
            var allFieldsValid = true; // user attempting to save the form, lets check the field validation

            this.fields.forEach(function (field) {
              var currentValue = field.getValue();

              if (!field.isValid()) {
                vlogger("Field " + field.getId() + " is invalid");
                field.setInvalid(field.getName() + " has an invalid format or is required.");
                allFieldsValid = false;
              } else {
                // does the field fulfil any rules from the Validation manager
                // @ts-ignore
                var response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(_this.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.invalid);

                if (response.ruleFailed) {
                  // @ts-ignore
                  field.setInvalid(response.message);
                  vlogger("Field " + field.getId() + " is invalid from validation manager with message " + response.message);
                  allFieldsValid = false;
                } else {
                  _this.setFieldValueToDataObject(_this.currentDataObj, field, currentValue);
                }
              }
            }); // is every field valid?

            if (!allFieldsValid) {
              logger("Form is saving, checking validation - FAILED");
              var _formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVE_ABORTED
              };
              this.informFormListeners(_formEvent, this.currentDataObj);
              shouldCancelChange = true;
            } else {
              logger("formatted data object is");
              var formattedDataObject = this.getFormattedDataObject();
              var _formEvent2 = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.SAVED
              };
              this.informFormListeners(_formEvent2, formattedDataObject);
            }

            break;
          }
        }
    }

    return shouldCancelChange;
  };

  _proto.getId = function getId() {
    return this.id;
  };

  _proto.getFieldFromDataFieldId = function getFieldFromDataFieldId(dataFieldId) {
    var result = undefined;
    dlogger("Finding field for attribute " + dataFieldId + " ");
    var mapItem = this.map.find(function (mapItem) {
      return mapItem.attributeId === dataFieldId;
    });

    if (mapItem) {
      dlogger("Mapped attribute " + mapItem.attributeId + " to field " + mapItem.fieldId); // find the field with that id

      result = this.fields.find(function (field) {
        return field.getId() === mapItem.attributeId;
      });
    }

    return result;
  };

  _proto.completed = function completed(event) {
    logger("Handling alert completed");
    logger(event);

    if (event.context && this.uiDef) {
      switch (event.context) {
        case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING:
          {
            if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__.AlertType.confirmed) {
              var formEvent = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLED
              };
              this.informFormListeners(formEvent, this.currentDataObj);
            } else {
              var _formEvent3 = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.CANCELLING_ABORTED
              };
              this.informFormListeners(_formEvent3, this.currentDataObj);
            }

            break;
          }

        case _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETING:
          {
            if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_3__.AlertType.confirmed) {
              var _formEvent4 = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETED
              };
              this.informFormListeners(_formEvent4, this.currentDataObj);
            } else {
              var _formEvent5 = {
                formId: this.id,
                target: this,
                eventType: _FormListener__WEBPACK_IMPORTED_MODULE_0__.FormEventType.DELETE_ABORTED
              };
              this.informFormListeners(_formEvent5, this.currentDataObj);
            }

            break;
          }
      }
    }
  };

  _proto.clearReadOnly = function clearReadOnly() {
    this.fields.forEach(function (field) {
      field.clearReadOnly();
    });
  };

  _proto.setReadOnly = function setReadOnly() {
    this.fields.forEach(function (field) {
      field.setReadOnly();
    });
  };

  _proto.isDisplayingItem = function isDisplayingItem(dataObj) {
    if (this.currentDataObj) {
      return this._isSameObjectAsDisplayed(dataObj);
    }

    return false;
  };

  _proto.isReadOnly = function isReadOnly() {
    return this.isDisplayOnly;
  }
  /* methods to be implemented in the subclass */
  ;

  _proto.informFormListeners = function informFormListeners(formEvent, dataObj) {
    this.formListeners.forEach(function (listener) {
      return listener.formChanged(formEvent, dataObj);
    });
  };

  _proto.findFieldUiConfig = function findFieldUiConfig(fieldDef) {
    dlogger("Finding field UI Config for field " + fieldDef.displayName);
    var result = null;

    if (this.uiDef) {
      var index = 0;

      while (index < this.uiDef.fieldGroups.length) {
        var fieldGroup = this.uiDef.fieldGroups[index];
        result = fieldGroup.fields.find(function (uiConfig) {
          return uiConfig.field.id === fieldDef.id;
        });

        if (result) {
          dlogger("Finding field UI Config for field " + fieldDef.displayName + " - Found");
          break;
        }

        index++;
      }
    }

    return result;
  };

  _proto.checkForVisualValidationForDisplayOnly = function checkForVisualValidationForDisplayOnly() {
    var _this2 = this;

    logger("Checking display validation for display only");
    this.fields.forEach(function (field) {
      field.show(); // @ts-ignore

      var response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(_this2.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.hide);

      if (response.ruleFailed) {
        // @ts-ignore
        field.hide();
        vlogger("Field " + field.getId() + " is hidden from validation manager with message " + response.message);
      }
    });
  };

  _proto.checkFormValidationOnDisplay = function checkFormValidationOnDisplay() {
    var _this3 = this;

    logger("Checking display validation");
    this.fields.forEach(function (field) {
      field.show();
      var currentValue = field.getValue();

      if (!field.isValid()) {
        logger("Field " + field.getId() + " is invalid");
        field.setInvalid(field.getName() + " has an invalid format or is required.");
      } else {
        // does the field fulfil any rules from the Validation manager
        // @ts-ignore
        var response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(_this3.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.invalid);

        if (response.ruleFailed) {
          // @ts-ignore
          field.setInvalid(response.message);
          vlogger("Field " + field.getId() + " is invalid from validation manager with message " + response.message);
        } // @ts-ignore


        response = _validation_ValidationManager__WEBPACK_IMPORTED_MODULE_2__.ValidationManager.getInstance().applyRulesToTargetField(_this3.id, field.getFieldDefinition(), _validation_ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_5__.ConditionResponse.hide);

        if (response.ruleFailed) {
          // @ts-ignore
          field.hide();
          vlogger("Field " + field.getId() + " is hidden from validation manager with message " + response.message);
        }
      }
    });
  };

  return AbstractForm;
}();

/***/ }),

/***/ "./src/framework/ui/form/BasicFormImplementation.ts":
/*!**********************************************************!*\
  !*** ./src/framework/ui/form/BasicFormImplementation.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFormImplementation": () => (/* binding */ BasicFormImplementation)
/* harmony export */ });
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var _AbstractForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractForm */ "./src/framework/ui/form/AbstractForm.ts");
/* harmony import */ var _helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/BootstrapFormConfigHelper */ "./src/framework/ui/helper/BootstrapFormConfigHelper.ts");
/* harmony import */ var _factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/FormElementFactory */ "./src/framework/ui/form/factory/FormElementFactory.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var _field_TextAreaField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field/TextAreaField */ "./src/framework/ui/form/field/TextAreaField.ts");
/* harmony import */ var _field_RadioButtonGroupField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field/RadioButtonGroupField */ "./src/framework/ui/form/field/RadioButtonGroupField.ts");
/* harmony import */ var _field_SelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field/SelectField */ "./src/framework/ui/form/field/SelectField.ts");
/* harmony import */ var _field_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field/InputField */ "./src/framework/ui/form/field/InputField.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}











var logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('basic-form');
var dlogger = debug__WEBPACK_IMPORTED_MODULE_4___default()('basic-form-detail');
var BasicFormImplementation = /*#__PURE__*/function (_AbstractForm) {
  _inheritsLoose(BasicFormImplementation, _AbstractForm);

  function BasicFormImplementation(containerId, dataObjDef) {
    var _this;

    _this = _AbstractForm.call(this, containerId, dataObjDef) || this;
    _this.factoryElements = null;
    return _this;
  }

  var _proto = BasicFormImplementation.prototype;

  _proto.getFormattedDataObject = function getFormattedDataObject() {
    var _this2 = this;

    logger("Getting current formatted data");
    var formattedResult = {};
    this.dataObjDef.fields.forEach(function (fieldDef) {
      var fieldValue = _this2.currentDataObj[fieldDef.id];
      formattedResult[fieldDef.id] = _this2.getFormattedFieldValue(fieldDef);
    });
    logger(formattedResult);
    return formattedResult;
  };

  _proto.clearReadOnly = function clearReadOnly() {
    _AbstractForm.prototype.clearReadOnly.call(this);

    this.enableButtons();
  };

  _proto.setReadOnly = function setReadOnly() {
    _AbstractForm.prototype.setReadOnly.call(this);

    this.disableButtons();
  };

  _proto._hidden = function _hidden() {
    var _this$containerEl;

    if (this.factoryElements) (_this$containerEl = this.containerEl) == null ? void 0 : _this$containerEl.removeChild(this.factoryElements.form);
  };

  _proto.setupFieldObject = function setupFieldObject(fieldEl, subElements) {
    if (subElements === void 0) {
      subElements = [];
    } // get the data-id field from the field element


    var dataId = fieldEl.getAttribute(_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.DATA_ID_ATTRIBUTE);
    var fieldId = fieldEl.getAttribute('id');
    dlogger("Converting field input element " + fieldId + " with data-id of " + dataId);

    if (dataId && fieldId) {
      // find the corresponding field definition
      var index = this.dataObjDef.fields.findIndex(function (value) {
        return value.id === dataId;
      });
      var fieldDef = this.dataObjDef.fields.find(function (value) {
        return value.id === dataId;
      });

      if (fieldDef) {
        dlogger("Converting field input element " + fieldId + " with data-id of " + dataId + " field definition is");
        logger(fieldDef); // find the corresponding ui definition

        var fieldUIConfig = this.findFieldUiConfig(fieldDef);
        dlogger("Converting field input element " + fieldId + " with data-id of " + dataId + " field ui config is");
        logger(fieldUIConfig);

        if (fieldUIConfig) {
          if (this.uiDef) {
            var field;

            switch (fieldUIConfig.elementType) {
              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.textarea:
                {
                  field = new _field_TextAreaField__WEBPACK_IMPORTED_MODULE_6__.TextAreaField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }

              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
                {
                  field = new _field_RadioButtonGroupField__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroupField(this.id, fieldUIConfig, fieldDef, fieldEl, subElements);
                  break;
                }

              case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.select:
                {
                  field = new _field_SelectField__WEBPACK_IMPORTED_MODULE_8__.SelectField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }

              default:
                {
                  field = new _field_InputField__WEBPACK_IMPORTED_MODULE_9__.InputField(this.id, fieldUIConfig, fieldDef, fieldEl);
                  break;
                }
            }

            this.fields.push(field);
            field.addFieldListener(this);
            this.map.push({
              attributeId: dataId,
              fieldId: fieldId
            });
          }
        }
      } else {
        dlogger("Converting field input element " + fieldId + " with data-id of " + dataId + " field definition is NOT FOUND");
      }
    }
  };

  _proto.clearUnsavedMessage = function clearUnsavedMessage() {
    if (this.factoryElements) this.factoryElements.unsavedMessage.innerHTML = '';
  };

  _proto.setUnsavedMessage = function setUnsavedMessage() {
    if (this.factoryElements && this.uiDef && this.uiDef.unsavedChanges.innerHTML) {
      this.factoryElements.unsavedMessage.innerHTML = this.uiDef.unsavedChanges.innerHTML;
    } else if (this.factoryElements) {
      this.factoryElements.unsavedMessage.innerHTML = 'Pending changes to save';
    }
  };

  _proto._initialise = function _initialise(displayOrder, hasDeleteButton, hideModifierFields) {
    var _this3 = this;

    if (hideModifierFields === void 0) {
      hideModifierFields = false;
    }

    logger("Initialising"); // ok, so given a Data Object definition we are going to create the form ui config

    this.uiDef = _helper_BootstrapFormConfigHelper__WEBPACK_IMPORTED_MODULE_2__.BootstrapFormConfigHelper.getInstance().generateFormConfig(this.dataObjDef, displayOrder, hasDeleteButton, hideModifierFields);
    logger(this.uiDef); // now we need to create all the form elements from the ui definition

    this.factoryElements = _factory_FormElementFactory__WEBPACK_IMPORTED_MODULE_3__.FormElementFactory.getInstance().createFormElements(this, this.formListeners, this.uiDef, this.fieldListeners);
    logger(this.factoryElements); // create field elements for each field element, and the basic map

    logger("Converting field input elements to Field objects");
    this.factoryElements.fields.forEach(function (fieldEl) {
      fieldEl.addEventListener('keyup', function (event) {
        dlogger("key up in form " + _this3.getName());
        _this3.hasChangedBoolean = true;

        _this3.setUnsavedMessage();
      });

      _this3.setupFieldObject(fieldEl);
    });
    logger("Converting field text area elements to Field objects");
    this.factoryElements.textFields.forEach(function (fieldEl) {
      fieldEl.addEventListener('keyup', function (event) {
        dlogger("key up in form " + _this3.getName());
        _this3.hasChangedBoolean = true;

        _this3.setUnsavedMessage();
      });

      _this3.setupFieldObject(fieldEl);
    });
    logger("Converting field select elements to Field objects");
    this.factoryElements.selectFields.forEach(function (fieldEl) {
      dlogger("key up in form " + _this3.getName());
    });
    logger("Converting field rbg elements to Field objects");
    this.factoryElements.radioButtonGroups.forEach(function (rbg) {
      _this3.setupFieldObject(rbg.container, rbg.radioButtons);
    });
    logger("field/data map is ");
    logger(this.map);
    logger('fields are');
    logger(this.fields);
  };

  _proto._reset = function _reset() {
    this.clearUnsavedMessage();
  };

  _proto.validateField = function validateField(fieldDef) {
    var field = this.getFieldFromDataFieldId(fieldDef.id);
    if (field) field.validate();
  };

  _proto.renderField = function renderField(fieldDef, currentValue) {
    var result = currentValue;
    var field = this.getFieldFromDataFieldId(fieldDef.id);

    if (field) {
      result = field.render(result);
    }

    return result;
  };

  _proto._startCreate = function _startCreate() {
    var _this4 = this;

    this.clearUnsavedMessage(); // we have a new object, there might be some values to generate

    this.dataObjDef.fields.forEach(function (fieldDef) {
      if (fieldDef.generator && fieldDef.generator.onCreation) {
        var _fieldValue = fieldDef.generator.generator.generate(fieldDef, true);

        dlogger("Setting default values for " + fieldDef.displayName + " to " + _fieldValue);
        _this4.currentDataObj[fieldDef.id] = _fieldValue;
      }

      var fieldValue = _this4.currentDataObj[fieldDef.id];

      if (fieldValue) {
        fieldValue = _this4.renderField(fieldDef, fieldValue);

        _this4.setFieldValueFromDataObject(fieldDef, fieldValue);
      } // run the validation to let the user know what is required


      _this4.validateField(fieldDef);
    }); // delete button can go

    if (this.factoryElements && this.factoryElements.deleteButton) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].addAttributes(this.factoryElements.deleteButton, [{
      name: 'style',
      value: 'display:none'
    }]);
  };

  _proto._startUpdate = function _startUpdate() {
    var _this5 = this;

    this.clearUnsavedMessage(); // we have an existing object, there might be some values to generate

    logger(this.currentDataObj);
    this.dataObjDef.fields.forEach(function (fieldDef) {
      if (fieldDef.generator && fieldDef.generator.onModify) {
        var _fieldValue2 = fieldDef.generator.generator.generate(fieldDef, false);

        dlogger("Setting default modified values for " + fieldDef.displayName + " to " + _fieldValue2);
        _this5.currentDataObj[fieldDef.id] = _fieldValue2;
      }

      var fieldValue = _this5.currentDataObj[fieldDef.id];
      if (fieldValue) fieldValue = _this5.renderField(fieldDef, fieldValue);

      _this5.setFieldValueFromDataObject(fieldDef, fieldValue);

      _this5.validateField(fieldDef);
    }); // delete button make visible again

    if (this.factoryElements && this.factoryElements.deleteButton) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].removeAttributes(this.factoryElements.deleteButton, ['style']);
  };

  _proto._displayOnly = function _displayOnly() {
    var _this6 = this;

    this.clearUnsavedMessage(); // we have an existing object, there might be some values to generate

    logger(this.currentDataObj);
    this.dataObjDef.fields.forEach(function (fieldDef) {
      var fieldValue = _this6.currentDataObj[fieldDef.id];
      if (fieldValue) fieldValue = _this6.renderField(fieldDef, fieldValue);

      _this6.setFieldValueFromDataObject(fieldDef, fieldValue);
    }); // delete button can go

    if (this.factoryElements && this.factoryElements.deleteButton) if (this.factoryElements) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_5__["default"].addAttributes(this.factoryElements.deleteButton, [{
      name: 'style',
      value: 'display:none'
    }]);
  };

  _proto._visible = function _visible() {
    var _this$containerEl2;

    if (this.factoryElements) (_this$containerEl2 = this.containerEl) == null ? void 0 : _this$containerEl2.appendChild(this.factoryElements.form);
  };

  _proto.setFieldValueToDataObject = function setFieldValueToDataObject(dataObj, field, currentValue) {
    // find the attribute id from the map
    var mapItem = this.map.find(function (mapItem) {
      return mapItem.attributeId === field.getId();
    });

    if (mapItem) {
      dlogger("Mapped field " + mapItem.fieldId + " to attribute " + mapItem.attributeId + " with value " + currentValue);
      this.currentDataObj[mapItem.attributeId] = currentValue;
    } else {
      logger("Mapped field " + field.getId() + " to attribute NOT FOUND");
    }
  };

  _proto.setFieldValueFromDataObject = function setFieldValueFromDataObject(fieldDef, currentValue) {
    var field = this.getFieldFromDataFieldId(fieldDef.id); // find the field id from the map

    if (field) {
      if (currentValue) {
        field.setValue(currentValue);
      } else {
        field.clearValue();
      }
    }
  };

  _proto.getFormattedFieldValue = function getFormattedFieldValue(fieldDef) {
    var result = null;
    var mapItem = this.map.find(function (mapItem) {
      return mapItem.attributeId === fieldDef.id;
    });

    if (mapItem) {
      dlogger("Mapped attribute " + mapItem.attributeId + " to field " + mapItem.fieldId + " with for getting formatted value"); // find the field with that id

      var field = this.fields.find(function (field) {
        return field.getId() === mapItem.attributeId;
      });

      if (field) {
        result = field.getFormattedValue();
      }
    }

    return result;
  };

  _proto._isSameObjectAsDisplayed = function _isSameObjectAsDisplayed(dataObj) {
    var _this7 = this; // we can only be sure for objects with keys


    var isSameObject = false;
    dlogger("is same object as current");
    dlogger(dataObj);
    dlogger(this.currentDataObj);
    this.dataObjDef.fields.every(function (field) {
      if (field.isKey) {
        var _this7$getFieldFromDa;

        var currentObjId = (_this7$getFieldFromDa = _this7.getFieldFromDataFieldId(field.id)) == null ? void 0 : _this7$getFieldFromDa.getValue();
        var suppliedObjId = dataObj[field.id];
        dlogger("is same object id " + suppliedObjId + " as current " + currentObjId);

        if (currentObjId && !suppliedObjId || currentObjId && !suppliedObjId) {
          isSameObject = false;
        }

        if (currentObjId && suppliedObjId && currentObjId == suppliedObjId) {
          isSameObject = true;
        }

        return false;
      }

      return true;
    });
    return isSameObject;
  };

  _proto.enableButtons = function enableButtons() {
    if (this.factoryElements && this.uiDef) {
      if (this.factoryElements.deleteButton) {
        this.factoryElements.deleteButton.removeAttribute('disabled');
      }

      this.factoryElements.cancelButton.removeAttribute('disabled');
      this.factoryElements.submitButton.removeAttribute('disabled'); // @ts-ignore

      this.factoryElements.submitButton.innerHTML = this.uiDef.submitButton.buttonText;
    }
  };

  _proto.disableButtons = function disableButtons() {
    if (this.factoryElements) {
      if (this.factoryElements.deleteButton) {
        this.factoryElements.deleteButton.setAttribute('disabled', 'true');
      }

      this.factoryElements.cancelButton.setAttribute('disabled', 'true');
      this.factoryElements.submitButton.setAttribute('disabled', 'true');
    }
  };

  _proto._saveFinishedOrAborted = function _saveFinishedOrAborted() {
    dlogger("save is finished or aborted");
    this.enableButtons();
    this.clearUnsavedMessage();
  };

  _proto._saveIsActive = function _saveIsActive() {
    dlogger("save is active");
    this.disableButtons();

    if (this.factoryElements && this.uiDef) {
      if (this.uiDef.activeSave) {
        dlogger("save is active " + this.uiDef.activeSave); // @ts-ignore

        this.factoryElements.submitButton.innerHTML = this.uiDef.activeSave + this.uiDef.submitButton.buttonText;
      }
    }
  };

  return BasicFormImplementation;
}(_AbstractForm__WEBPACK_IMPORTED_MODULE_1__.AbstractForm);

/***/ }),

/***/ "./src/framework/ui/form/FormListener.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/form/FormListener.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormEventType": () => (/* binding */ FormEventType)
/* harmony export */ });
var FormEventType;

(function (FormEventType) {
  FormEventType["SHOWN"] = "shown";
  FormEventType["HIDDEN"] = "hidden";
  FormEventType["CANCELLING"] = "cancelling";
  FormEventType["CANCELLING_ABORTED"] = "cancelling-aborted";
  FormEventType["CANCELLED"] = "cancelled";
  FormEventType["SAVING"] = "saving";
  FormEventType["SAVE_ABORTED"] = "save-aborted";
  FormEventType["SAVED"] = "saved";
  FormEventType["DELETING"] = "deleting";
  FormEventType["DELETE_ABORTED"] = "delete-aborted";
  FormEventType["DELETED"] = "deleted";
  FormEventType["CREATING"] = "creating";
  FormEventType["MODIFYING"] = "modifying";
  FormEventType["RESETTING"] = "reset";
})(FormEventType || (FormEventType = {}));

/***/ }),

/***/ "./src/framework/ui/form/FormUITypeDefs.ts":
/*!*************************************************!*\
  !*** ./src/framework/ui/form/FormUITypeDefs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIFieldType": () => (/* binding */ UIFieldType),
/* harmony export */   "FormMode": () => (/* binding */ FormMode),
/* harmony export */   "DATA_ID_ATTRIBUTE": () => (/* binding */ DATA_ID_ATTRIBUTE)
/* harmony export */ });
var UIFieldType;

(function (UIFieldType) {
  UIFieldType[UIFieldType["checkbox"] = 0] = "checkbox";
  UIFieldType[UIFieldType["email"] = 1] = "email";
  UIFieldType[UIFieldType["hidden"] = 2] = "hidden";
  UIFieldType[UIFieldType["number"] = 3] = "number";
  UIFieldType[UIFieldType["password"] = 4] = "password";
  UIFieldType[UIFieldType["text"] = 5] = "text";
  UIFieldType[UIFieldType["textarea"] = 6] = "textarea";
  UIFieldType[UIFieldType["select"] = 7] = "select";
  UIFieldType[UIFieldType["radioGroup"] = 8] = "radioGroup";
})(UIFieldType || (UIFieldType = {}));

var FormMode;

(function (FormMode) {
  FormMode[FormMode["unset"] = -1] = "unset";
  FormMode[FormMode["create"] = 0] = "create";
  FormMode[FormMode["update"] = 1] = "update";
})(FormMode || (FormMode = {}));

var DATA_ID_ATTRIBUTE = 'data-id';

/***/ }),

/***/ "./src/framework/ui/form/event-handlers/EditingEventListener.ts":
/*!**********************************************************************!*\
  !*** ./src/framework/ui/form/event-handlers/EditingEventListener.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditingEventListener": () => (/* binding */ EditingEventListener)
/* harmony export */ });
var EditingEventListener = /*#__PURE__*/function () {
  function EditingEventListener(formId, fieldConfig, listeners) {
    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.handleEvent = this.handleEvent.bind(this);
  }

  var _proto = EditingEventListener.prototype;

  _proto.handleEvent = function handleEvent(event) {
    var _this = this;

    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    var fieldElement = event.target;

    if (this.fieldConfig.editor) {
      var field = this.fieldConfig.field;
      var value = fieldElement.value;
      var newValue = this.fieldConfig.editor.editValue(field, value);

      if (newValue) {
        fieldElement.value = newValue;
        this.listeners.forEach(function (listener) {
          return listener.valueChanged(_this.formId, field, newValue);
        });
      }
    }
  };

  return EditingEventListener;
}();

/***/ }),

/***/ "./src/framework/ui/form/event-handlers/RenderingEventListener.ts":
/*!************************************************************************!*\
  !*** ./src/framework/ui/form/event-handlers/RenderingEventListener.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderingEventListener": () => (/* binding */ RenderingEventListener)
/* harmony export */ });
var RenderingEventListener = /*#__PURE__*/function () {
  function RenderingEventListener(formId, fieldConfig, listeners, subElements) {
    if (subElements === void 0) {
      subElements = null;
    }

    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.subElements = subElements;
    this.handleEvent = this.handleEvent.bind(this);
  }

  var _proto = RenderingEventListener.prototype;

  _proto.processRendering = function processRendering(fieldElement) {
    var newValue = '';

    if (this.fieldConfig.renderer) {
      var field = this.fieldConfig.field;
      var value = fieldElement.value;
      if (this.subElements) this.fieldConfig.renderer.setSubElements(this.subElements);
      newValue = this.fieldConfig.renderer.renderValue(field, value);

      if (newValue) {
        fieldElement.value = newValue; // @ts-ignore

        this.listeners.forEach(function (listener) {
          return listener.valueChanged(field, newValue);
        });
      }
    }

    if (newValue) {
      return newValue;
    } else {
      return '';
    }
  };

  _proto.handleEvent = function handleEvent(event) {
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    var fieldElement = event.target;
    this.processRendering(fieldElement);
  };

  return RenderingEventListener;
}();

/***/ }),

/***/ "./src/framework/ui/form/event-handlers/ValidationEventHandler.ts":
/*!************************************************************************!*\
  !*** ./src/framework/ui/form/event-handlers/ValidationEventHandler.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationEventHandler": () => (/* binding */ ValidationEventHandler)
/* harmony export */ });
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");



var ValidationEventHandler = /*#__PURE__*/function () {
  function ValidationEventHandler(formId, fieldConfig, listeners, subElements) {
    if (subElements === void 0) {
      subElements = null;
    }

    this.formId = formId;
    this.fieldConfig = fieldConfig;
    this.listeners = listeners;
    this.subElements = subElements;
    this.handleEvent = this.handleEvent.bind(this);
  }

  var _proto = ValidationEventHandler.prototype;

  _proto.setValidationStatusAndMessage = function setValidationStatusAndMessage(fieldElement, isValid, value, message, resetOnFailure) {
    var _this = this;

    if (message === void 0) {
      message = undefined;
    }

    if (resetOnFailure === void 0) {
      resetOnFailure = false;
    }

    if (this.fieldConfig.validator && fieldElement) {
      var field = this.fieldConfig.field;
      var validationElementTarget = fieldElement; // we are providing user feedback on the field element, unless...

      if (this.subElements) {
        // sub elements change the validation target
        this.fieldConfig.validator.validator.setSubElements(this.subElements);

        if (this.fieldConfig.subElement) {
          // should be targetting the parentelement
          var parentEl = fieldElement.parentElement;

          if (parentEl) {
            validationElementTarget = parentEl;

            if (this.fieldConfig.subElement.container) {
              // another layer up required
              parentEl = parentEl.parentElement;

              if (parentEl) {
                validationElementTarget = parentEl;
              }
            }
          }
        }
      }

      var errorMessageDiv = document.getElementById(this.formId + ".field." + this.fieldConfig.field.id + ".error");
      var errorMessageEl = document.getElementById(this.formId + ".field." + this.fieldConfig.field.id + ".error.message"); // clear any previous message

      errorMessageDiv == null ? void 0 : errorMessageDiv.setAttribute('style', 'display:none');
      if (errorMessageEl) errorMessageEl.innerHTML = '';
      if (this.fieldConfig.validator.invalidClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.invalidClasses, false);
      if (this.fieldConfig.validator.validClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.validClasses);

      if (!isValid) {
        if (this.fieldConfig.validator.invalidClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.invalidClasses);
        if (this.fieldConfig.validator.validClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(validationElementTarget, this.fieldConfig.validator.validClasses, false);

        if (!message) {
          message = field.displayName + " does not have a valid value.";
        } // show the error message


        errorMessageDiv == null ? void 0 : errorMessageDiv.setAttribute('style', 'display:block');
        if (errorMessageEl) errorMessageEl.innerHTML = message;

        if (resetOnFailure) {
          switch (field.type) {
            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.boolean:
              {
                // @ts-ignore
                fieldElement.checked = false;
                break;
              }

            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.integer:
              {
                // @ts-ignore
                fieldElement.value = '0';
                break;
              }

            case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_0__.FieldType.float:
              {
                // @ts-ignore
                fieldElement.value = '0.0';
                break;
              }

            default:
              {
                // @ts-ignore
                fieldElement.value = '';
                break;
              }
          }
        } // @ts-ignore


        this.listeners.forEach(function (listener) {
          return listener.failedValidation(_this.formId, field, value, message);
        });
      }
    }
  };

  _proto.processValidation = function processValidation(fieldElement) {
    if (this.fieldConfig.validator && fieldElement) {
      var field = this.fieldConfig.field; // @ts-ignore

      var value = fieldElement.value; // checkboxes store values differently

      if (this.fieldConfig.elementType === _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.checkbox) {
        // @ts-ignore
        value = '' + fieldElement.checked;
      }

      if (this.subElements) {
        value = '';
        this.subElements.forEach(function (subElement) {
          if (subElement.checked) {
            value = subElement.value;
          }
        });
      }

      var validationResp = this.fieldConfig.validator.validator.isValidValue(field, value);
      this.setValidationStatusAndMessage(fieldElement, validationResp.isValid, value, validationResp.message, validationResp.resetOnFailure);
    }
  };

  _proto.handleEvent = function handleEvent(event) {
    event.preventDefault();
    event.stopPropagation(); // @ts-ignore

    var fieldElement = event.target;
    this.processValidation(fieldElement);
  };

  return ValidationEventHandler;
}();

/***/ }),

/***/ "./src/framework/ui/form/factory/FieldInputElementFactory.ts":
/*!*******************************************************************!*\
  !*** ./src/framework/ui/form/factory/FieldInputElementFactory.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldInputElementFactory": () => (/* binding */ FieldInputElementFactory)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-handlers/ValidationEventHandler */ "./src/framework/ui/form/event-handlers/ValidationEventHandler.ts");
/* harmony import */ var _event_handlers_EditingEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-handlers/EditingEventListener */ "./src/framework/ui/form/event-handlers/EditingEventListener.ts");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");






var DefaultFieldOptionsListener = /*#__PURE__*/function () {
  function DefaultFieldOptionsListener(formId, parentElement, fieldUIConfig) {
    this.formId = formId;
    this.parentElement = parentElement;
    this.fieldUIConfig = fieldUIConfig;
  }

  var _proto = DefaultFieldOptionsListener.prototype;

  _proto.optionsChanged = function optionsChanged(newOptions) {
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildren(this.parentElement);
    var subEls = FieldInputElementFactory.createSubElements(this.formId, this.parentElement, this.fieldUIConfig, newOptions);
  };

  return DefaultFieldOptionsListener;
}();

var FieldInputElementFactory = /*#__PURE__*/function () {
  function FieldInputElementFactory() {}

  FieldInputElementFactory.getInstance = function getInstance() {
    if (!FieldInputElementFactory._instance) {
      FieldInputElementFactory._instance = new FieldInputElementFactory();
    }

    return FieldInputElementFactory._instance;
  };

  FieldInputElementFactory.initialiseFieldElementAndEventHandlers = function initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners, subElements) {
    if (subElements === void 0) {
      subElements = null;
    }

    fieldElement.setAttribute('id', formId + ".field." + fieldConfig.field.id);
    fieldElement.setAttribute(_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.DATA_ID_ATTRIBUTE, fieldConfig.field.id);
    fieldElement.setAttribute('name', fieldConfig.field.id);
    if (fieldConfig.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(fieldElement, fieldConfig.elementAttributes);
    if (fieldConfig.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(fieldElement, fieldConfig.elementClasses); // readonly field?

    if (fieldConfig.field.displayOnly) {
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(fieldElement, [{
        name: 'disabled',
        value: 'true'
      }, {
        name: 'readonly',
        value: 'true'
      }]);
    }
    /*
    setup event handlers
    */


    if (fieldConfig.validator) {
      // is the value in the field valid
      var eventHandler = new _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__.ValidationEventHandler(formId, fieldConfig, listeners, subElements);

      if (subElements) {
        // event for the subelements
        subElements.forEach(function (subElement) {
          subElement.addEventListener('blur', eventHandler);
        });
      } else {
        fieldElement.addEventListener('blur', eventHandler);
      }
    }

    if (fieldConfig.editor) {
      // render the value when the field gains focus
      fieldElement.addEventListener('focus', new _event_handlers_EditingEventListener__WEBPACK_IMPORTED_MODULE_3__.EditingEventListener(formId, fieldConfig, listeners));
    } // care for endless loops here, renderer needs to return null if no changes
    // date picker for date fields


    if (fieldConfig.field.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_4__.FieldType.date) {
      $(fieldElement).datepicker();
      $(fieldElement).datepicker("option", "dateFormat", 'dd/mm/yy');
    }
  };

  FieldInputElementFactory.createFieldComponentsAndContainer = function createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners) {
    // if the field has a validator, then we need a div for error messages
    var errorMessageDivEl = null;

    if (fieldConfig.validator) {
      errorMessageDivEl = document.createElement('div');
      errorMessageDivEl.setAttribute('id', formId + ".field." + fieldConfig.field.id + ".error");
      errorMessageDivEl.setAttribute('style', 'display: none'); // default to not visible

      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(errorMessageDivEl, fieldConfig.validator.messageDisplay.elementClasses);
      var messageEl = document.createElement(fieldConfig.validator.messageDisplay.elementType);

      if (messageEl) {
        messageEl.setAttribute('id', formId + ".field." + fieldConfig.field.id + ".error.message");
        if (fieldConfig.validator.messageDisplay.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(messageEl, fieldConfig.validator.messageDisplay.elementAttributes);
        errorMessageDivEl.appendChild(messageEl);
      }
    } // ok, so is the field contained?


    if (fieldConfig.containedBy) {
      // we need to create a container for the field and option label and description text
      var containedByEl = document.createElement(fieldConfig.containedBy.elementType);

      if (containedByEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containedByEl, fieldConfig.containedBy.elementClasses);
        containedByEl.setAttribute('id', formId + ".field." + fieldConfig.field.id + ".container");
        if (fieldConfig.containedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, fieldConfig.containedBy.elementAttributes); // do we have a label also?

        if (fieldConfig.label) {
          var labelEl = document.createElement('label');
          labelEl.setAttribute('for', formId + ".field." + fieldConfig.field.id);
          labelEl.innerHTML = fieldConfig.field.displayName;
          if (fieldConfig.label.attributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(labelEl, fieldConfig.label.attributes);
          if (fieldConfig.label.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(labelEl, fieldConfig.label.classes);
          containedByEl.appendChild(labelEl);
        }

        if (fieldConfig.describedBy) {
          var descEl = document.createElement(fieldConfig.describedBy.elementType);

          if (descEl) {
            // link the field and the description
            descEl.setAttribute('id', formId + ".field." + fieldConfig.field.id + ".desc");
            if (fieldConfig.field.description) descEl.innerHTML = fieldConfig.field.description;
            fieldElement.setAttribute('aria-describedby', formId + ".field." + fieldConfig.field.id + ".desc");
            if (fieldConfig.describedBy.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(descEl, fieldConfig.describedBy.elementClasses);
            containedByEl.appendChild(fieldElement);
            containedByEl.appendChild(descEl);
            if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
          } else {
            // description failure, add the field
            containedByEl.appendChild(fieldElement);
            if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
          }
        } else {
          // no description, add field to container
          containedByEl.appendChild(fieldElement);
          if (errorMessageDivEl) containedByEl.appendChild(errorMessageDivEl);
        }

        containerEl.appendChild(containedByEl);
      } else {
        // errors should keep making something!
        containerEl.appendChild(fieldElement);
        if (errorMessageDivEl) containerEl.appendChild(errorMessageDivEl);
      }
    } else {
      containerEl.appendChild(fieldElement);
      if (errorMessageDivEl) containerEl.appendChild(errorMessageDivEl);
    }
  };

  FieldInputElementFactory.createSubElements = function createSubElements(formId, parentEl, fieldConfig, valueOptions) {
    var results = [];
    valueOptions.forEach(function (valueOption, index) {
      if (fieldConfig.subElement) {
        var containerEl = parentEl; // is there a container?

        if (fieldConfig.subElement.container) {
          containerEl = document.createElement(fieldConfig.subElement.container.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containerEl, fieldConfig.subElement.container.elementClasses);
          if (fieldConfig.subElement.container.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, fieldConfig.subElement.container.elementAttributes);
          parentEl.appendChild(containerEl);
        }

        var valueEl = document.createElement(fieldConfig.subElement.element.elementType);
        valueEl.setAttribute('value', valueOption.value);
        valueEl.setAttribute('id', formId + ".field." + fieldConfig.field.id + "." + index);
        valueEl.setAttribute('name', formId + ".field." + fieldConfig.field.id);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(valueEl, fieldConfig.subElement.element.elementClasses);
        if (fieldConfig.subElement.element.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(valueEl, fieldConfig.subElement.element.elementAttributes);
        containerEl.appendChild(valueEl);

        if (fieldConfig.subElement.label) {
          var labelEl = document.createElement('label');
          if (fieldConfig.subElement.label.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(labelEl, fieldConfig.subElement.label.classes);
          if (fieldConfig.subElement.label.attributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(labelEl, fieldConfig.subElement.label.attributes);
          labelEl.innerHTML = valueOption.name;
          containerEl.appendChild(labelEl);
        } else {
          valueEl.innerHTML = valueOption.name;
        }

        results.push(valueEl);
      }
    });
    return results;
  };

  var _proto2 = FieldInputElementFactory.prototype;

  _proto2.createInputFormFieldComponentElement = function createInputFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    // return the input element
    var fieldElement = document.createElement('input');

    switch (fieldConfig.elementType) {
      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.checkbox:
        {
          fieldElement.setAttribute('type', 'checkbox');
          fieldElement.setAttribute('value', fieldConfig.field.id);
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.email:
        {
          fieldElement.setAttribute('type', 'email');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.hidden:
        {
          fieldElement.setAttribute('type', 'hidden');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.number:
        {
          fieldElement.setAttribute('type', 'number');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.password:
        {
          fieldElement.setAttribute('type', 'password');
          break;
        }

      case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_1__.UIFieldType.text:
        {
          fieldElement.setAttribute('type', 'text');
          break;
        }
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  };

  _proto2.createTAFormFieldComponentElement = function createTAFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    // return the input element
    var fieldElement = document.createElement('textarea');

    if (fieldConfig.textarea) {
      fieldElement.setAttribute('rows', "" + fieldConfig.textarea.rows);
      fieldElement.setAttribute('cols', "" + fieldConfig.textarea.cols);
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  };

  _proto2.createSelectFormFieldComponentElement = function createSelectFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    // return the input element
    var fieldElement = document.createElement('select'); // create the options from the data source

    if (fieldConfig.datasource) {
      FieldInputElementFactory.createSubElements(formId, fieldElement, fieldConfig, fieldConfig.datasource.getOptions()); // listen for data source changes

      fieldConfig.datasource.addListener(new DefaultFieldOptionsListener(formId, fieldElement, fieldConfig));
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(fieldElement, formId, fieldConfig, listeners);
    FieldInputElementFactory.createFieldComponentsAndContainer(fieldElement, formId, containerEl, fieldConfig, listeners);
    return fieldElement;
  };

  _proto2.createRadioGroupFormFieldComponentElement = function createRadioGroupFormFieldComponentElement(formId, containerEl, fieldConfig, listeners) {
    // create a div for each option in the source
    // create the div for the radio group
    var radioGroupElement = document.createElement('div');
    if (fieldConfig.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(radioGroupElement, fieldConfig.elementAttributes);
    if (fieldConfig.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(radioGroupElement, fieldConfig.elementClasses);
    var subElements = []; // create the options from the data source

    if (fieldConfig.datasource) {
      // we should get the radio buttons back
      subElements = FieldInputElementFactory.createSubElements(formId, radioGroupElement, fieldConfig, fieldConfig.datasource.getOptions()); // listen for data source changes

      fieldConfig.datasource.addListener(new DefaultFieldOptionsListener(formId, radioGroupElement, fieldConfig)); // setup the subelements for the validator, formatter, and renderer

      if (fieldConfig.validator) fieldConfig.validator.validator.setSubElements(subElements);
      if (fieldConfig.renderer) fieldConfig.renderer.setSubElements(subElements);
      if (fieldConfig.formatter) fieldConfig.formatter.setSubElements(subElements);
    }

    FieldInputElementFactory.initialiseFieldElementAndEventHandlers(radioGroupElement, formId, fieldConfig, listeners, subElements);
    FieldInputElementFactory.createFieldComponentsAndContainer(radioGroupElement, formId, containerEl, fieldConfig, listeners);
    return {
      container: radioGroupElement,
      radioButtons: subElements
    };
  };

  return FieldInputElementFactory;
}();

/***/ }),

/***/ "./src/framework/ui/form/factory/FormElementFactory.ts":
/*!*************************************************************!*\
  !*** ./src/framework/ui/form/factory/FormElementFactory.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementFactory": () => (/* binding */ FormElementFactory)
/* harmony export */ });
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldInputElementFactory */ "./src/framework/ui/form/factory/FieldInputElementFactory.ts");
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var _FormListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormListener */ "./src/framework/ui/form/FormListener.ts");




var FormElementFactory = /*#__PURE__*/function () {
  function FormElementFactory() {}

  FormElementFactory.getInstance = function getInstance() {
    if (!FormElementFactory._instance) {
      FormElementFactory._instance = new FormElementFactory();
    }

    return FormElementFactory._instance;
  };

  var _proto = FormElementFactory.prototype;

  _proto.createFormElements = function createFormElements(form, formListeners, formConfig, fieldListeners) {
    var formEl = document.createElement('form');
    formEl.setAttribute('id', formConfig.id);
    formEl.setAttribute('name', formConfig.displayName);
    if (formConfig.classes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(formEl, formConfig.classes); // create each of the fields and collect them

    var formInputElements = [];
    var formTAElements = [];
    var formRBGElements = [];
    var formSelectElements = [];
    var unsavedMessage = document.createElement(formConfig.unsavedChanges.elementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(unsavedMessage, formConfig.unsavedChanges.elementClasses);
    if (formConfig.unsavedChanges.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(unsavedMessage, formConfig.unsavedChanges.elementAttributes);
    formEl.appendChild(unsavedMessage);
    formConfig.fieldGroups.forEach(function (group) {
      // if the group has a container make that, otherwise the form is the container
      var containerEl = formEl;

      if (group.containedBy) {
        // @ts-ignore
        containerEl = document.createElement(group.containedBy.elementType);

        if (containerEl) {
          if (group.containedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(containerEl, group.containedBy.elementAttributes);
          if (group.containedBy.elementClasses) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(containerEl, group.containedBy.elementClasses);
          formEl.appendChild(containerEl);
        }
      }

      group.fields.forEach(function (field) {
        switch (field.elementType) {
          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.textarea:
            {
              var fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createTAFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);
              formTAElements.push(fieldEl);
              break;
            }

          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.select:
            {
              var _fieldEl = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createSelectFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);

              formSelectElements.push(_fieldEl);
              break;
            }

          case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.radioGroup:
            {
              var _fieldEl2 = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createRadioGroupFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);

              formRBGElements.push(_fieldEl2);
              break;
            }

          default:
            {
              var _fieldEl3 = _FieldInputElementFactory__WEBPACK_IMPORTED_MODULE_1__.FieldInputElementFactory.getInstance().createInputFormFieldComponentElement(formConfig.id, containerEl, field, fieldListeners);

              formInputElements.push(_fieldEl3);
            }
        }
      });
    });
    /* setup the buttons */

    var buttonContainer = formEl;

    if (formConfig.buttonsContainedBy) {
      buttonContainer = document.createElement(formConfig.buttonsContainedBy.elementType);

      if (buttonContainer) {
        if (formConfig.buttonsContainedBy.elementAttributes) _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes(buttonContainer, formConfig.buttonsContainedBy.elementAttributes);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(buttonContainer, formConfig.buttonsContainedBy.elementClasses);
        formEl.appendChild(buttonContainer);
      } else {
        buttonContainer = formEl; // couldn't create the button container, use the form
      }
    }

    var deleteButtonEl = undefined;

    if (formConfig.deleteButton) {
      deleteButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.deleteButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.DELETING);
      buttonContainer.appendChild(deleteButtonEl);
    }

    var cancelButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.cancelButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.CANCELLING);
    buttonContainer.appendChild(cancelButtonEl);
    var submitButtonEl = this.createFormButton(form, formConfig, formListeners, formConfig.submitButton, _FormListener__WEBPACK_IMPORTED_MODULE_3__.FormEventType.SAVING);
    buttonContainer.appendChild(submitButtonEl);
    var result = {
      form: formEl,
      unsavedMessage: unsavedMessage,
      fields: formInputElements,
      selectFields: formSelectElements,
      radioButtonGroups: formRBGElements,
      textFields: formTAElements,
      deleteButton: deleteButtonEl,
      cancelButton: cancelButtonEl,
      submitButton: submitButtonEl
    };
    return result;
  };

  _proto.createFormButton = function createFormButton(form, formConfig, formListeners, buttonDef, eventType) {
    var buttonEl = document.createElement('button');
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(buttonEl, buttonDef.buttonClasses);
    buttonEl.setAttribute('id', formConfig.id + "." + eventType);

    if (buttonDef.buttonText) {
      buttonEl.innerText = buttonDef.buttonText;
    }

    if (buttonDef.iconClasses) {
      var iconEl = document.createElement('i');

      if (iconEl) {
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_0__["default"].addRemoveClasses(iconEl, buttonDef.iconClasses);
        buttonEl.appendChild(iconEl);
      }
    }
    /* setup the event handler for the button */


    buttonEl.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      var formEvent = {
        target: form,
        formId: formConfig.id,
        eventType: eventType
      };
      formListeners.forEach(function (listener) {
        return listener.formChanged(formEvent);
      });
    });
    return buttonEl;
  };

  return FormElementFactory;
}();

/***/ }),

/***/ "./src/framework/ui/form/field/AbstractField.ts":
/*!******************************************************!*\
  !*** ./src/framework/ui/form/field/AbstractField.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractField": () => (/* binding */ AbstractField)
/* harmony export */ });
/* harmony import */ var _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-handlers/ValidationEventHandler */ "./src/framework/ui/form/event-handlers/ValidationEventHandler.ts");
/* harmony import */ var _event_handlers_RenderingEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-handlers/RenderingEventListener */ "./src/framework/ui/form/event-handlers/RenderingEventListener.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);





var logger = debug__WEBPACK_IMPORTED_MODULE_4___default()('abstract-field');
var AbstractField = /*#__PURE__*/function () {
  function AbstractField(formId, config, fieldDef, element, subElements) {
    var _this = this;

    if (subElements === void 0) {
      subElements = null;
    }

    this.config = null;
    this.subElements = [];
    this.listeners = [];
    this.hidden = false;
    this.formId = formId;
    this.config = config;
    this.definition = fieldDef;
    this.element = element;
    if (subElements) this.subElements = subElements;
    this.validationHandler = new _event_handlers_ValidationEventHandler__WEBPACK_IMPORTED_MODULE_2__.ValidationEventHandler(formId, config, [this], subElements);
    this.renderingHandler = new _event_handlers_RenderingEventListener__WEBPACK_IMPORTED_MODULE_3__.RenderingEventListener(formId, config, [this], subElements); // listen for our own change events

    this.handleChangeEvent = this.handleChangeEvent.bind(this);

    if (this.subElements) {
      this.subElements.forEach(function (subElement) {
        subElement.addEventListener('change', _this.handleChangeEvent);
      });
    } else {
      this.element.addEventListener('change', this.handleChangeEvent);
    }
  }

  var _proto = AbstractField.prototype;

  _proto.isHidden = function isHidden() {
    return this.hidden;
  };

  _proto.addFieldListener = function addFieldListener(listener) {
    logger(this.getName() + " - adding listener " + listener.getName()); // don't duplicate listeners

    var index = this.listeners.findIndex(function (listenerInList) {
      return listenerInList.getName() === listener.getName();
    });

    if (index < 0) {
      this.listeners.push(listener);
    } else {
      logger(this.getName() + " - duplicate listener " + listener.getName() + " ignored");
    }
  };

  _proto.getFieldDefinition = function getFieldDefinition() {
    return this.definition;
  };

  _proto.setInvalid = function setInvalid(message) {
    var _this2 = this;

    this.validationHandler.setValidationStatusAndMessage(this.element, false, '', message, false); // @ts-ignore

    this.listeners.forEach(function (listener) {
      return listener.failedValidation(_this2.formId, _this2.definition, _this2.getValue(), message);
    });
  };

  _proto.initialise = function initialise() {};

  _proto.getValue = function getValue() {
    var _this3 = this;

    var result = null;

    if (this.config && this.element) {
      switch (this.config.elementType) {
        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
          {
            logger(this.definition.id + " - getting value - rbg");

            if (this.subElements) {
              this.subElements.forEach(function (subElement) {
                if (subElement.checked) {
                  logger(_this3.definition.id + " - getting value - rbg - checked " + subElement.value);
                  result = subElement.value;
                  subElement.checked = true;
                }
              });
            }

            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox:
          {
            // @ts-ignore
            result = '' + this.element.checked;
            break;
          }

        default:
          {
            // @ts-ignore
            result = this.element.value;
            break;
          }
      }
    }

    logger(this.definition.id + " - getting value - " + result);
    return result;
  };

  _proto.getFormattedValue = function getFormattedValue() {
    var result = null;

    if (this.config && this.element) {
      // @ts-ignore
      result = this.element.value;

      if (this.config.elementType === _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox) {
        // @ts-ignore
        result = '' + this.element.checked;
      }

      if (this.config.formatter) {
        result = this.config.formatter.formatValue(this.definition, result);
      }
    }

    return result;
  };

  _proto.isValid = function isValid() {
    var result = true;

    if (this.config && this.element) {
      if (this.config.validator) {
        if (this.config.validator.validator) {
          var validator = this.config.validator.validator;
          var response = validator.isValidValue(this.definition, this.getValue());
          result = response.isValid;
        }
      }
    }

    return result;
  };

  _proto.getId = function getId() {
    return this.definition.id;
  };

  _proto.setValue = function setValue(newValue) {
    newValue = '' + newValue;

    if (this.element && this.config) {
      // @ts-ignore
      switch (this.config.elementType) {
        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.radioGroup:
          {
            if (this.subElements) {
              this.subElements.forEach(function (subElement) {
                if (subElement.value === newValue) {
                  subElement.checked = true;
                }
              });
            }

            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.checkbox:
          {
            // @ts-ignore
            this.element.checked = newValue.toLowerCase() === 'true';
            break;
          }

        case _FormUITypeDefs__WEBPACK_IMPORTED_MODULE_0__.UIFieldType.select:
          {
            logger(this.definition.id + " - setting value - " + newValue);
            var selectEl = this.element;
            var selectedIndex = -1;

            for (var index = 0; index < selectEl.options.length; index++) {
              // @ts-ignore
              var option = selectEl.options.item(index);
              logger(this.definition.id + " - option value - " + option.value);

              if (option.value === newValue) {
                logger(this.definition.id + " - option value - " + option.value + " - SELECTED");
                option.selected = true;
                selectedIndex = index;
              }
            }

            logger(this.definition.id + " - selected index " + selectedIndex);
            selectEl.selectedIndex = selectedIndex;
            break;
          }

        default:
          {
            logger(this.definition.id + " - setting value - " + newValue); // @ts-ignore

            this.element.value = newValue;
            break;
          }
      }
    }
  };

  _proto.reset = function reset() {
    if (this.element) {
      switch (this.definition.type) {
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            // @ts-ignore
            this.element.checked = false;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
          {
            // @ts-ignore
            this.element.value = '0';
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            // @ts-ignore
            this.element.value = '0.0';
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice:
          {
            if (this.subElements) {
              this.subElements.forEach(function (subElement) {
                subElement.checked = false;
              });
            }

            break;
          }

        default:
          {
            // @ts-ignore
            this.element.value = '';
            break;
          }
      }
    }

    this.show();
  };

  _proto.clearValue = function clearValue() {
    this.reset();
  };

  _proto.validate = function validate() {
    if (this.element) {
      this.validationHandler.processValidation(this.element);
    }
  };

  _proto.render = function render(currentValue) {
    var _this$config;

    var result = currentValue;

    if ((_this$config = this.config) != null && _this$config.renderer) {
      var value = this.config.renderer.renderValue(this.definition, currentValue);
      if (value) result = value;
    }

    return result;
  };

  _proto.failedValidation = function failedValidation(formId, field, currentValue, message) {};

  _proto.valueChanged = function valueChanged(formId, field, newValue) {};

  _proto.getName = function getName() {
    return this.definition.displayName;
  };

  _proto.hide = function hide() {
    /*
      if we have an enclosing container (per the config) then we can hide
      otherwise we become readonly and disabled
     */
    if (this.config) {
      if (this.config.containedBy) {
        var parentEl = this.element.parentElement;

        if (parentEl) {
          parentEl.setAttribute('style', 'display:none');
        }
      } else {
        this.setReadOnly();
      }
    }

    this.hidden = true;
  };

  _proto.setValid = function setValid() {
    this.validationHandler.setValidationStatusAndMessage(this.element, true, '');
  };

  _proto.show = function show() {
    /*
      if we have an enclosing container (per the config) then we can hide
      otherwise we become readonly and disabled
     */
    if (this.config) {
      if (this.config.containedBy) {
        var parentEl = this.element.parentElement;

        if (parentEl) {
          parentEl.removeAttribute('style');
        }
      } else {
        this.clearReadOnly();
      }
    }

    this.hidden = true;
  };

  _proto.clearReadOnly = function clearReadOnly() {
    if (this.definition.displayOnly) return;
    this.element.removeAttribute('readonly');
    this.element.removeAttribute('disabled'); // do the same for subelements

    if (this.subElements) {
      this.subElements.forEach(function (subElement) {
        subElement.removeAttribute('readonly');
        subElement.removeAttribute('disabled');
      });
    }
  };

  _proto.setReadOnly = function setReadOnly() {
    this.element.setAttribute('readonly', 'true');
    this.element.setAttribute('disabled', 'true'); // do the same for subelements

    if (this.subElements) {
      this.subElements.forEach(function (subElement) {
        subElement.setAttribute('readonly', 'true');
        subElement.setAttribute('disabled', 'true');
      });
    }
  };

  _proto.handleChangeEvent = function handleChangeEvent(event) {
    var _this4 = this;

    logger("Handling change event");

    if (this.config) {
      var value = this.getValue();
      logger("Handling change event - informing listeners");
      this.listeners.forEach(function (listener) {
        return listener.valueChanged(_this4.formId, _this4.definition, value);
      });
    }
  };

  return AbstractField;
}();

/***/ }),

/***/ "./src/framework/ui/form/field/InputField.ts":
/*!***************************************************!*\
  !*** ./src/framework/ui/form/field/InputField.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputField": () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./src/framework/ui/form/field/AbstractField.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var InputField = /*#__PURE__*/function (_AbstractField) {
  _inheritsLoose(InputField, _AbstractField);

  function InputField(formId, config, fieldDef, element) {
    return _AbstractField.call(this, formId, config, fieldDef, element) || this;
  }

  return InputField;
}(_AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField);

/***/ }),

/***/ "./src/framework/ui/form/field/RadioButtonGroupField.ts":
/*!**************************************************************!*\
  !*** ./src/framework/ui/form/field/RadioButtonGroupField.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonGroupField": () => (/* binding */ RadioButtonGroupField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./src/framework/ui/form/field/AbstractField.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var RadioButtonGroupField = /*#__PURE__*/function (_AbstractField) {
  _inheritsLoose(RadioButtonGroupField, _AbstractField);

  function RadioButtonGroupField(formId, config, fieldDef, element, subElements) {
    return _AbstractField.call(this, formId, config, fieldDef, element, subElements) || this;
  }

  return RadioButtonGroupField;
}(_AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField);

/***/ }),

/***/ "./src/framework/ui/form/field/SelectField.ts":
/*!****************************************************!*\
  !*** ./src/framework/ui/form/field/SelectField.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectField": () => (/* binding */ SelectField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./src/framework/ui/form/field/AbstractField.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var SelectField = /*#__PURE__*/function (_AbstractField) {
  _inheritsLoose(SelectField, _AbstractField);

  function SelectField(formId, config, fieldDef, element) {
    return _AbstractField.call(this, formId, config, fieldDef, element) || this;
  }

  return SelectField;
}(_AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField);

/***/ }),

/***/ "./src/framework/ui/form/field/TextAreaField.ts":
/*!******************************************************!*\
  !*** ./src/framework/ui/form/field/TextAreaField.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAreaField": () => (/* binding */ TextAreaField)
/* harmony export */ });
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./src/framework/ui/form/field/AbstractField.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var TextAreaField = /*#__PURE__*/function (_AbstractField) {
  _inheritsLoose(TextAreaField, _AbstractField);

  function TextAreaField(formId, config, fieldDef, element) {
    return _AbstractField.call(this, formId, config, fieldDef, element) || this;
  }

  return TextAreaField;
}(_AbstractField__WEBPACK_IMPORTED_MODULE_0__.AbstractField);

/***/ }),

/***/ "./src/framework/ui/form/validation/ValidationManager.ts":
/*!***************************************************************!*\
  !*** ./src/framework/ui/form/validation/ValidationManager.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationManager": () => (/* binding */ ValidationManager)
/* harmony export */ });
/* harmony import */ var _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidationTypeDefs */ "./src/framework/ui/form/validation/ValidationTypeDefs.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");



var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('validation-manager');
var flogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('validation-manager-rule-failure');
var ValidationManager = /*#__PURE__*/function () {
  function ValidationManager() {
    this.formRules = [];
  }

  ValidationManager.getInstance = function getInstance() {
    if (!ValidationManager._instance) {
      ValidationManager._instance = new ValidationManager();
    }

    return ValidationManager._instance;
  };

  var _proto = ValidationManager.prototype;

  _proto.getName = function getName() {
    return "Validation Manager";
  };

  _proto.addRuleToForm = function addRuleToForm(form, rule) {
    var _this = this; // returns whether the rule was added


    logger("Adding rule on form " + form.getId() + " for target field " + rule.targetDataFieldId);
    /*
     validate the rule
     1. does the rule have a comparison field or static for each condition?
     2. do the fields exist?
     3. are the comparisons valid types to compare?
    */

    var targetField = form.getFieldFromDataFieldId(rule.targetDataFieldId);

    if (!targetField) {
      flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - NOT FOUND in form");
      return false;
    }

    var convertedRule = {
      targetField: targetField,
      response: rule.response,
      fieldConditions: [],
      valueConditions: []
    };
    rule.conditions.forEach(function (condition) {
      // do we have one of values or source field?
      if (!condition.values && !condition.sourceDataFieldId) {
        flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - a condition is missing both values and source field");
        return false;
      } // is this a target field value comparison?


      if (condition.values && condition.sourceDataFieldId) {
        logger("Rule adding for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - source field " + condition.sourceDataFieldId + " with values " + condition.values);
        var sourceField = form.getFieldFromDataFieldId(condition.sourceDataFieldId);

        if (!sourceField) {
          flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - source field " + condition.sourceDataFieldId + " NOT FOUND");
          return false;
        }

        convertedRule.fieldConditions.push({
          sourceField: sourceField,
          comparison: condition.comparison,
          values: condition.values
        });
        sourceField.addFieldListener(_this);
      } else if (condition.values && !condition.sourceDataFieldId) {
        // is this a value comparison?
        logger("Rule adding for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - values " + condition.values); // add a new value rule to the internal structure

        convertedRule.valueConditions.push({
          values: condition.values,
          comparison: condition.comparison
        }); // @ts-ignore

        targetField.addFieldListener(_this);
      } else if (condition.sourceDataFieldId && !condition.values) {
        // is this a field vs field comparison
        logger("Rule adding for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - source field " + condition.sourceDataFieldId);

        var _sourceField = form.getFieldFromDataFieldId(condition.sourceDataFieldId);

        if (!_sourceField) {
          flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - source field " + condition.sourceDataFieldId + " NOT FOUND");
          return false;
        }
        /*
           are we comparing two fields that can be compared?
           allowed combinations are:
           date|datetime vs date|datetime
           time|short time vs time|short time
           boolean vs boolean
           integer|float vs number|float
           any other vs any other
         */


        var sourceType = _sourceField.getFieldDefinition().type; // @ts-ignore


        var targetType = targetField.getFieldDefinition().type;

        switch (targetType) {
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
                flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - target is date(time), source is NOT");
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
                flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - target is time, source is NOT");
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean) {
                flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - target is boolean, source is NOT");
                return false;
              }

              break;
            }

          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer:
          case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float:
            {
              if (sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer && sourceType !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float) {
                flogger("Rule not added for form " + form.getId() + " for target field " + rule.targetDataFieldId + " - target is number, source is NOT");
                return false;
              }

              break;
            }
        }

        convertedRule.fieldConditions.push({
          sourceField: _sourceField,
          comparison: condition.comparison
        });

        _sourceField.addFieldListener(_this);
      }
    });
    logger("Converted rule to ");
    logger(convertedRule);
    var index = this.formRules.findIndex(function (formRule) {
      return formRule.form.getId() === form.getId();
    });
    var formRuleSet; // store the rules for later execution

    if (index < 0) {
      formRuleSet = {
        form: form,
        rules: []
      };
      formRuleSet.rules.push(convertedRule);
      this.formRules.push(formRuleSet);
    } else {
      formRuleSet = this.formRules[index];
      formRuleSet.rules.push(convertedRule);
    }

    logger("Current set of rules for form " + form.getId());
    logger(formRuleSet);
    return true;
  };

  _proto.failedValidation = function failedValidation(formId, field, currentValue, message) {} // ignored, we might be causing
  ;

  _proto.applyRulesToTargetField = function applyRulesToTargetField(formId, field, onlyRulesOfType) {
    var _this2 = this;

    logger("Checking rules for form " + formId + ", data field " + field.id + " of type " + onlyRulesOfType); // which rules apply?

    var rules = this.getRulesForFieldChange(formId, field.id, false);
    var result = {
      ruleFailed: false
    }; // get the rules for the field, filtered by the condition response type

    if (onlyRulesOfType) {
      var ruleSubset = [];
      rules.forEach(function (rule) {
        if (rule.response === onlyRulesOfType) {
          ruleSubset.push(rule);
        }
      });
      rules = ruleSubset;
    }

    rules.forEach(function (rule) {
      // we only want rules that make a field hidden
      var response = _this2.executeRule(rule);

      if (response.ruleFailed) {
        flogger("Rule failed for form " + formId + " with field " + field.displayName + " with message " + response.message);
        result.ruleFailed = true;
        result.message = response.message;
      }
    });
    return result;
  };

  _proto.valueChanged = function valueChanged(formId, field, newValue) {
    var _this3 = this;

    logger("Handling field change - form " + formId + ", data field " + field.id + ", value " + newValue); // a field we are listening to has changed
    // which rules apply?

    var rules = this.getRulesForFieldChange(formId, field.id, true); // execute each rule and collect the responses

    var failedResponses = [];
    rules.forEach(function (rule) {
      var response = _this3.executeRule(rule);

      if (response.ruleFailed) {
        failedResponses.push(response);
      }
    });
    logger("Have " + failedResponses.length + " failed rules - applying each"); // for each failed response let the target field know based on the response type

    failedResponses.forEach(function (response) {
      switch (response.response) {
        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.hide:
          {
            logger("Apply hide " + response.field.getId());
            response.field.hide();
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.show:
          {
            logger("Apply show " + response.field.getId());
            response.field.show();
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.invalid:
          {
            logger("Apply invalid " + response.field.getId());
            if (response.message) response.field.setInvalid(response.message);
            break;
          }

        case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ConditionResponse.valid:
          {
            logger("Apply valid " + response.field.getId());
            response.field.setValid();
            break;
          }
      }
    });
  };

  _proto.areTwoFieldsEqual = function areTwoFieldsEqual(targetField, sourceField) {
    if (targetField.getValue() !== sourceField.getValue()) {
      return {
        ruleFailed: true,
        message: targetField.getName() + " must be equal to " + sourceField.getName()
      };
    }

    return {
      ruleFailed: false
    };
  };

  _proto.compareTwoValuesWithTypes = function compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, comparison) {
    if (!targetValue || !sourceValue) return false; // no null comparisons

    switch (targetType) {
      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
        {
          targetValue += ' 00:00:00';

          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
            sourceValue += ' 00:00:00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
        {
          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date) {
            sourceValue += ' 00:00:00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
        {
          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
            sourceValue += ':00';
          }

          break;
        }

      case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
        {
          targetValue += ':00';

          if (sourceType === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime) {
            sourceValue += ':00';
          }

          break;
        }
    }

    logger("Comparing " + targetValue + " of type " + targetType + " against " + sourceValue + " of type " + sourceType);

    switch (comparison) {
      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.lessThan:
        {
          return targetValue < sourceValue;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.lessThanEqual:
        {
          return targetValue <= sourceValue;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.greaterThanEqual:
        {
          return targetValue >= sourceValue;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.greaterThan:
        {
          return targetValue > sourceValue;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.equals:
        {
          return targetValue === sourceValue;
        }
    }

    return false;
  };

  _proto.isTargetLessThanSource = function isTargetLessThanSource(targetField, sourceField) {
    var sourceType = sourceField.getFieldDefinition().type;
    var targetType = targetField.getFieldDefinition().type;
    var sourceValue = sourceField.getValue();
    var targetValue = targetField.getValue();

    if (!this.compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.lessThan)) {
      return {
        ruleFailed: true,
        message: targetField.getName() + " must be less than " + sourceField.getName()
      };
    }

    return {
      ruleFailed: false
    };
  };

  _proto.isTargetLessThanEqualSource = function isTargetLessThanEqualSource(targetField, sourceField) {
    var check = this.areTwoFieldsEqual(targetField, sourceField);

    if (check.ruleFailed) {
      check = this.isTargetLessThanSource(targetField, sourceField);

      if (check.ruleFailed) {
        return {
          ruleFailed: true,
          message: targetField.getName() + " must be less than or equal to " + sourceField.getName()
        };
      }
    }

    return {
      ruleFailed: false
    };
  };

  _proto.isTargetGreaterThan = function isTargetGreaterThan(targetField, sourceField) {
    var sourceType = sourceField.getFieldDefinition().type;
    var targetType = targetField.getFieldDefinition().type;
    var sourceValue = sourceField.getValue();
    var targetValue = targetField.getValue();

    if (!this.compareTwoValuesWithTypes(targetType, targetValue, sourceType, sourceValue, _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.greaterThan)) {
      return {
        ruleFailed: true,
        message: targetField.getName() + " must be greater than " + sourceField.getName()
      };
    }

    return {
      ruleFailed: false
    };
  };

  _proto.isSourceNull = function isSourceNull(sourceField) {
    var targetValue = sourceField.getValue(); // @ts-ignore

    if (targetValue && targetValue.trim().length > 0) {
      return {
        ruleFailed: true,
        message: sourceField.getName() + " must be empty"
      };
    }

    return {
      ruleFailed: false
    };
  };

  _proto.isSourceNotNull = function isSourceNotNull(sourceField) {
    var targetValue = sourceField.getValue(); // @ts-ignore

    if (!targetValue || targetValue.trim().length > 0) {
      return {
        ruleFailed: true,
        message: sourceField.getName() + " must not be empty"
      };
    }

    return {
      ruleFailed: false
    };
  };

  _proto.doesFieldHaveValue = function doesFieldHaveValue(field, values) {
    var targetValue = field.getValue();
    logger("does field " + field.getId() + " have value from " + values + " - current value is " + targetValue);

    if (targetValue) {
      // split the values by commas
      var splits = values.split(',');
      var foundInValue = false;
      splits.forEach(function (split) {
        if (targetValue === split) {
          logger("does field " + field.getId() + " have value from " + values + " - current value is " + targetValue + " - found in value(s)");
          foundInValue = true;
        }
      });

      if (foundInValue) {
        return {
          ruleFailed: false
        };
      }
    }

    return {
      ruleFailed: true,
      message: field.getName() + " must be have a value in " + values
    };
  };

  _proto.doesSourceFieldHaveValue = function doesSourceFieldHaveValue(field, values) {
    return this.doesFieldHaveValue(field, values);
  };

  _proto.isTargetGreaterThanEqualSource = function isTargetGreaterThanEqualSource(targetField, sourceField) {
    var check = this.areTwoFieldsEqual(targetField, sourceField);

    if (check.ruleFailed) {
      check = this.isTargetGreaterThan(targetField, sourceField);

      if (check.ruleFailed) {
        return {
          ruleFailed: true,
          message: targetField.getName() + " must be greater than or equal to " + sourceField.getName()
        };
      }
    }

    return {
      ruleFailed: false
    };
  };

  _proto.compareFields = function compareFields(targetField, sourceField, comparison, value) {
    switch (comparison) {
      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.equals:
        {
          return this.areTwoFieldsEqual(targetField, sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.lessThan:
        {
          return this.isTargetLessThanSource(targetField, sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.lessThanEqual:
        {
          return this.isTargetLessThanEqualSource(targetField, sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.greaterThan:
        {
          return this.isTargetGreaterThan(targetField, sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.greaterThanEqual:
        {
          return this.isTargetGreaterThanEqualSource(targetField, sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.isNull:
        {
          return this.isSourceNull(sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.isNotNull:
        {
          return this.isSourceNotNull(sourceField);
          break;
        }

      case _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue:
        {
          return this.doesSourceFieldHaveValue(sourceField, value);
          break;
        }
    }
  };

  _proto.executeRule = function executeRule(rule) {
    var _this4 = this;

    var response = {
      field: rule.targetField,
      ruleFailed: false,
      response: rule.response
    }; // run each field comparison

    logger("Executing rule for target " + rule.targetField.getId());
    logger(rule);
    rule.fieldConditions.every(function (condition) {
      logger('field condition rule');
      logger(condition);
      var values = condition.values ? condition.values : '';

      var ruleCheck = _this4.compareFields(rule.targetField, condition.sourceField, condition.comparison, values);

      if (ruleCheck.ruleFailed) {
        flogger('field condition rule FAILED');
        response.ruleFailed = true; // only need messages for invalid responses

        response.message = ruleCheck.message;
        return false;
      }

      flogger('field condition rule PASSED');
      return true;
    }); // run each value comparison if we haven't already failed

    if (!response.ruleFailed) {
      rule.valueConditions.forEach(function (condition) {
        logger('value condition rule');
        logger(condition);

        var ruleCheck = _this4.compareFields(rule.targetField, rule.targetField, _ValidationTypeDefs__WEBPACK_IMPORTED_MODULE_0__.ComparisonType.hasValue, condition.values);

        if (ruleCheck.ruleFailed) {
          flogger('value condition rule FAILED');
          response.ruleFailed = true;
          response.message = ruleCheck.message;
          return false;
        }

        flogger('value condition rule PASSED');
        return true;
      });
    }

    return response;
  };

  _proto.getRulesForFieldChange = function getRulesForFieldChange(formId, dataFieldId, includeSourceFields) {
    var rules = []; // lets go through the rules for the form

    logger("Finding rules for form " + formId + " and data field " + dataFieldId);
    var index = this.formRules.findIndex(function (formRule) {
      return formRule.form.getId() === formId;
    });

    if (index >= 0) {
      var ruleSet = this.formRules[index]; // the dataFieldId could be the target or one of the sources

      ruleSet.rules.forEach(function (rule) {
        if (rule.targetField.getId() === dataFieldId) {
          logger("Found rule where data field " + dataFieldId + " is target");

          if (rule.targetField.isValid()) {
            rules.push(rule);
          } else {
            flogger("Found rule where data field " + dataFieldId + " is target but value is not currently valid");
          }
        } else {
          if (includeSourceFields) {
            rule.fieldConditions.every(function (value) {
              if (value.sourceField.getId() === dataFieldId) {
                logger("Found rule where data field " + dataFieldId + " is source");

                if (value.sourceField.isValid()) {
                  rules.push(rule);
                } else {
                  flogger("Found rule where data field " + dataFieldId + " is source but value is not currently valid");
                }

                return false;
              }

              return true;
            });
          }
        }
      });
    }

    return rules;
  };

  return ValidationManager;
}();

/***/ }),

/***/ "./src/framework/ui/form/validation/ValidationTypeDefs.ts":
/*!****************************************************************!*\
  !*** ./src/framework/ui/form/validation/ValidationTypeDefs.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonType": () => (/* binding */ ComparisonType),
/* harmony export */   "ConditionResponse": () => (/* binding */ ConditionResponse)
/* harmony export */ });
var ComparisonType;

(function (ComparisonType) {
  ComparisonType[ComparisonType["equals"] = 0] = "equals";
  ComparisonType[ComparisonType["lessThan"] = 1] = "lessThan";
  ComparisonType[ComparisonType["lessThanEqual"] = 2] = "lessThanEqual";
  ComparisonType[ComparisonType["greaterThan"] = 3] = "greaterThan";
  ComparisonType[ComparisonType["greaterThanEqual"] = 4] = "greaterThanEqual";
  ComparisonType[ComparisonType["isNull"] = 5] = "isNull";
  ComparisonType[ComparisonType["isNotNull"] = 6] = "isNotNull";
  ComparisonType[ComparisonType["hasValue"] = 7] = "hasValue";
})(ComparisonType || (ComparisonType = {}));

var ConditionResponse;

(function (ConditionResponse) {
  ConditionResponse[ConditionResponse["show"] = 0] = "show";
  ConditionResponse[ConditionResponse["hide"] = 1] = "hide";
  ConditionResponse[ConditionResponse["invalid"] = 2] = "invalid";
  ConditionResponse[ConditionResponse["valid"] = 3] = "valid";
})(ConditionResponse || (ConditionResponse = {}));

/***/ }),

/***/ "./src/framework/ui/helper/BootstrapFormConfigHelper.ts":
/*!**************************************************************!*\
  !*** ./src/framework/ui/helper/BootstrapFormConfigHelper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapFormConfigHelper": () => (/* binding */ BootstrapFormConfigHelper)
/* harmony export */ });
/* harmony import */ var _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/BasicFieldOperations */ "./src/framework/model/BasicFieldOperations.ts");
/* harmony import */ var _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/FormUITypeDefs */ "./src/framework/ui/form/FormUITypeDefs.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RBGFieldOperations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RBGFieldOperations */ "./src/framework/ui/helper/RBGFieldOperations.ts");
/* harmony import */ var _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");






var logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('bootstrap-form-config-helper');
var BootstrapFormConfigHelper = /*#__PURE__*/function () {
  function BootstrapFormConfigHelper() {}

  BootstrapFormConfigHelper.getInstance = function getInstance() {
    if (!BootstrapFormConfigHelper._instance) {
      BootstrapFormConfigHelper._instance = new BootstrapFormConfigHelper();
    }

    return BootstrapFormConfigHelper._instance;
  };

  var _proto = BootstrapFormConfigHelper.prototype;

  _proto.generateFormConfig = function generateFormConfig(dataObjDef, displayOrders, hasDeleteButton, hideModifierFields) {
    if (hideModifierFields === void 0) {
      hideModifierFields = false;
    }

    var fieldOperations = new _model_BasicFieldOperations__WEBPACK_IMPORTED_MODULE_0__.BasicFieldOperations();
    var rbgFieldOperation = new _RBGFieldOperations__WEBPACK_IMPORTED_MODULE_4__.RBGFieldOperations(); // create the Field UI config for each field

    var fieldUIConfigs = [];
    dataObjDef.fields.forEach(function (fieldDef, index) {
      var fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;

      switch (fieldDef.type) {
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.time:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.text:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.date:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.shortTime:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.duration:
          {
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.datetime:
          {
            // is this the created or modified date
            if (hideModifierFields) {
              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__.FIELD_CreatedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }

              if (fieldDef.id === _model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_5__.FIELD_ModifiedOn) {
                fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
              }
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.userId:
          {
            if (hideModifierFields) {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            } else {
              fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.text;
            }

            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.integer:
        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.float:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.number;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.email:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.email;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.password:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.password;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.checkbox;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.largeText:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.textarea;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.choice:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.select;
            break;
          }

        case _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice:
          {
            fieldType = _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.radioGroup;
            break;
          }
      } // see if the field was supplied with a display order


      var displayOrder = displayOrders.find(function (value) {
        return value.fieldId === fieldDef.id;
      });
      var displayOrderValue = index;

      if (displayOrder) {
        displayOrderValue = displayOrder.displayOrder;
      } // construct the field ui config


      var fieldUIConfig = {
        field: fieldDef,
        displayOrder: displayOrderValue,
        elementType: fieldType,
        elementClasses: 'form-control col-sm-9',
        renderer: fieldOperations,
        formatter: fieldOperations
      };

      if (fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.id && fieldDef.type !== _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.uuid && fieldType !== _form_FormUITypeDefs__WEBPACK_IMPORTED_MODULE_2__.UIFieldType.hidden) {
        // no labels, descriptions, container for id,uuid
        fieldUIConfig.containedBy = {
          elementType: 'div',
          elementClasses: 'form-group row'
        };
        fieldUIConfig.label = {
          label: fieldDef.displayName,
          classes: 'col-md-12 col-lg-3 col-form-label'
        };

        if (fieldDef.description) {
          // descriptions if the field has one
          fieldUIConfig.describedBy = {
            message: fieldDef.description,
            elementType: 'small',
            elementClasses: 'text-muted col-md-12 col-lg-9 offset-lg-3 mt-1'
          };
        }

        if (!fieldDef.displayOnly) {
          // no validator for readonly items
          fieldUIConfig.validator = {
            validator: fieldOperations,
            messageDisplay: {
              elementType: 'div',
              elementClasses: 'invalid-feedback col-md-12 col-lg-9 offset-lg-3'
            },
            validClasses: 'is-valid',
            invalidClasses: 'is-invalid'
          };
        }
      } // text areas


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.largeText) {
        fieldUIConfig.textarea = {
          rows: 5,
          cols: 20
        };
      } // select


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.choice) {
        // subelements are options, with no classes, no labels, and no other container
        fieldUIConfig.subElement = {
          element: {
            elementType: 'option',
            elementClasses: ''
          }
        };
        fieldUIConfig.datasource = fieldDef.dataSource;
      } // radio button group


      if (fieldDef.type === _model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_1__.FieldType.limitedChoice) {
        fieldUIConfig.subElement = {
          element: {
            elementType: 'input',
            elementClasses: 'form-check-input',
            elementAttributes: [{
              name: 'type',
              value: 'radio'
            }]
          },
          container: {
            elementType: 'div',
            elementClasses: 'form-check form-check-inline'
          },
          label: {
            label: 'label',
            classes: 'form-check-label'
          }
        };
        fieldUIConfig.renderer = rbgFieldOperation;
        if (fieldUIConfig.validator) fieldUIConfig.validator.validator = rbgFieldOperation;
        fieldUIConfig.formatter = rbgFieldOperation;
        fieldUIConfig.datasource = fieldDef.dataSource;
      }

      fieldUIConfigs.push(fieldUIConfig);
    }); // create a form with a single group and button container with Bootstrap styles

    var fieldGroup = {
      containedBy: {
        elementType: 'div',
        elementClasses: 'col-sm-12'
      },
      fields: fieldUIConfigs
    };
    var formConfig = {
      id: dataObjDef.id,
      displayName: dataObjDef.displayName,
      fieldGroups: [fieldGroup],
      unsavedChanges: {
        elementType: 'div',
        elementClasses: 'invalid-feedback text-right col-md-12 col-lg-9 offset-lg-3',
        elementAttributes: [{
          name: 'style',
          value: 'display:block'
        }],
        innerHTML: "Pending changes to " + dataObjDef.displayName
      },
      buttonsContainedBy: {
        elementType: 'div',
        elementClasses: 'd-flex w-100 justify-space-between'
      },
      cancelButton: {
        buttonText: 'Cancel  ',
        buttonClasses: 'btn-info rounded p-1 mr-2 mt-2 w-100',
        iconClasses: 'fas fa-ban'
      },
      submitButton: {
        buttonText: 'Save  ',
        buttonClasses: 'btn-primary rounded p-1 mt-2 w-100',
        iconClasses: 'fas fa-save'
      },
      activeSave: '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;'
    }; // sort the fields into display order

    formConfig.fieldGroups.forEach(function (group) {
      group.fields.sort(function (a, b) {
        return a.displayOrder - b.displayOrder;
      });
    });

    if (hasDeleteButton) {
      formConfig.deleteButton = {
        buttonText: 'Delete  ',
        buttonClasses: 'btn-warning rounded p-1 mr-2 mt-2 w-100',
        iconClasses: 'fas fa-trash-alt'
      };
    }

    logger(formConfig);
    return formConfig;
  };

  return BootstrapFormConfigHelper;
}();

/***/ }),

/***/ "./src/framework/ui/helper/LinkedCollectionDetailController.ts":
/*!*********************************************************************!*\
  !*** ./src/framework/ui/helper/LinkedCollectionDetailController.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeDataObjectDelegate": () => (/* binding */ ChangeDataObjectDelegate),
/* harmony export */   "LinkedCollectionDetailController": () => (/* binding */ LinkedCollectionDetailController)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_DataObjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/DataObjectController */ "./src/framework/model/DataObjectController.ts");
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert/AlertListener */ "./src/framework/ui/alert/AlertListener.ts");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/AlertManager */ "./src/framework/ui/alert/AlertManager.ts");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





var logger = debug__WEBPACK_IMPORTED_MODULE_0___default()('linked-controller');
var dlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('linked-controller-detail');

var ChildViewListenerDelegate = /*#__PURE__*/function () {
  function ChildViewListenerDelegate(controller) {
    this.controller = controller;
  }

  var _proto = ChildViewListenerDelegate.prototype;

  _proto.addView = function addView(view) {
    view.addEventListener(this);
  };

  _proto.canDeleteItem = function canDeleteItem(view, selectedItem) {
    return true;
  };

  _proto.documentLoaded = function documentLoaded(view) {};

  _proto.hideRequested = function hideRequested(view) {};

  _proto.itemAction = function itemAction(view, actionName, selectedItem) {};

  _proto.itemDeleted = function itemDeleted(view, selectedItem) {};

  _proto.itemDropped = function itemDropped(view, droppedItem) {};

  _proto.showRequested = function showRequested(view) {};

  _proto.cancelled = function cancelled(view, dataObj) {
    this.controller.cancelled(view, dataObj);
  };

  _proto.deletedItem = function deletedItem(view, dataObj) {
    this.controller.deletedItem(view, dataObj);
  };

  _proto.saveNewItem = function saveNewItem(view, dataObj) {
    this.controller.saveNewItem(view, dataObj);
  };

  _proto.updateItem = function updateItem(view, dataObj) {
    this.controller.updateItem(view, dataObj);
  };

  return ChildViewListenerDelegate;
}();

var ChangeDataObjectDelegate = /*#__PURE__*/function () {
  function ChangeDataObjectDelegate(callback) {
    this.callback = callback;
  }

  var _proto2 = ChangeDataObjectDelegate.prototype;

  _proto2.shouldDiscardChanges = function shouldDiscardChanges() {
    _alert_AlertManager__WEBPACK_IMPORTED_MODULE_3__.AlertManager.getInstance().startAlert(this, 'Discard Changes', 'There are unsaved changes.  Discard?', {});
  };

  _proto2.completed = function completed(event) {
    if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_2__.AlertType.confirmed) {
      this.callback();
    }
  };

  return ChangeDataObjectDelegate;
}();
var LinkedCollectionDetailController = /*#__PURE__*/function (_DataObjectController) {
  _inheritsLoose(LinkedCollectionDetailController, _DataObjectController);

  function LinkedCollectionDetailController(typeName, parentView) {
    var _this;

    _this = _DataObjectController.call(this, typeName) || this;
    _this.children = [];
    logger("Starting with parent view " + parentView.getName());
    _this.parentView = parentView;
    _this.delegate = new ChildViewListenerDelegate(_assertThisInitialized(_this));

    _this.parentView.addEventListener(_assertThisInitialized(_this));

    return _this;
  }

  var _proto3 = LinkedCollectionDetailController.prototype;

  _proto3.addLinkedDetailView = function addLinkedDetailView(childView) {
    logger("Adding child view " + childView.getName());
    this.children.push(childView);
    this.delegate.addView(childView); // this delegate will only pass us the unique detail view events (save, new, etc)
  };

  _proto3.initialise = function initialise() {// call when all views are ready
  };

  _proto3.canDeleteItem = function canDeleteItem(view, selectedItem) {
    logger("Handling delete item from view " + view.getName());
    dlogger(selectedItem);
    return this.parentView.hasPermissionToDeleteItemInNamedCollection('', selectedItem);
  };

  _proto3.documentLoaded = function documentLoaded(view) {
    logger("Handling document loaded view " + view.getName()); // let the children know

    this.children.forEach(function (childView) {
      childView.onDocumentLoaded();
    });
  };

  _proto3.hideRequested = function hideRequested(view) {
    // let the children know
    logger("Handling hide  from view " + view.getName());
    this.children.forEach(function (childView) {
      childView.hidden();
    });
  };

  _proto3.itemAction = function itemAction(view, actionName, selectedItem) {
    logger("Handling item action " + actionName + " from view " + view.getName());
    dlogger(selectedItem);
    this.children.forEach(function (childView) {
      childView.handleActionItem(actionName, selectedItem);
    });
  };

  _proto3.itemDeleted = function itemDeleted(view, selectedItem) {
    logger("Handling item deleted from view " + view.getName());
    dlogger(selectedItem);
    this.children.forEach(function (childView) {
      // clear the child display and set readonly
      childView.clearDisplay();
      childView.setReadOnly();
    });
  };

  _proto3.itemDeselected = function itemDeselected(view, selectedItem) {
    logger("Handling item deselected from view " + view.getName());
    dlogger(selectedItem);
    this.children.forEach(function (childView) {
      // clear the child display and set readonly
      childView.clearDisplay();
      childView.setReadOnly();
    });
  };

  _proto3.itemDragStarted = function itemDragStarted(view, selectedItem) {// nothing to do here
  };

  _proto3.itemDropped = function itemDropped(view, droppedItem) {// nothing to do here
  };

  _proto3.itemSelected = function itemSelected(view, selectedItem) {
    logger("Handling item selected from view " + view.getName());
    dlogger(selectedItem);
    this.children.forEach(function (childView) {
      childView.displayItem(selectedItem);
    });
  };

  _proto3.showRequested = function showRequested(view) {
    logger("Handling show from view " + view.getName()); // let the children know

    this.children.forEach(function (childView) {
      childView.show();
    });
  };

  _proto3.canSelectItem = function canSelectItem(view, selectedItem) {
    logger("Handling can select item from view " + view.getName());
    dlogger(selectedItem); // are we currently in the middle of creating a new object?

    if (this.isCreatingNew) return false; // prevent selection if the children views have modified this item

    var canProceedWithSelection = true;
    this.children.forEach(function (childView) {
      if (childView.hasChanged()) {
        dlogger("child view " + childView.getName() + " has changed - cancelling");
        canProceedWithSelection = false;
      }
    });

    if (!canProceedWithSelection) {
      canProceedWithSelection = confirm(view.getName() + " - unsaved changes.  Discard them?");
    }

    return canProceedWithSelection;
  };

  _proto3.cancelled = function cancelled(view, dataObj) {
    logger("Handling cancelled from child view " + view.getName());
    dlogger(dataObj);
    this.isCreatingNew = false;
  };

  _proto3.deletedItem = function deletedItem(view, dataObj) {
    logger("Handling deleted from child view " + view.getName());
    dlogger(dataObj);
    this.informListenersOfDelete(dataObj);
  };

  _proto3.saveNewItem = function saveNewItem(view, dataObj) {
    logger("Handling save new from child view " + view.getName());
    dlogger(dataObj);
    this.informListenersOfCreate(dataObj);
  };

  _proto3.updateItem = function updateItem(view, dataObj) {
    logger("Handling update from child view " + view.getName());
    dlogger(dataObj);
    this.informListenersOfUpdate(dataObj);
  };

  _proto3._startNewObject = function _startNewObject() {
    logger("Handling start new object"); // assume the first detail view will create the object for us

    var canProceedWithCreateNew = true;
    this.children.forEach(function (childView) {
      if (childView.hasChanged()) {
        dlogger("child view " + childView.getName() + " has changed - cancelling");
        canProceedWithCreateNew = false;
      }
    });

    if (!canProceedWithCreateNew) {
      canProceedWithCreateNew = confirm("There are unsaved changes.  Discard them?");
    }

    if (this.children.length > 0) {
      logger("Handling start new object with child view " + this.children[0].getName());
      var dataObj = this.children[0].createItem();

      if (dataObj) {
        canProceedWithCreateNew = true;
        this.children[0].show();
      }
    }

    return canProceedWithCreateNew;
  };

  return LinkedCollectionDetailController;
}(_model_DataObjectController__WEBPACK_IMPORTED_MODULE_1__.DataObjectController);

/***/ }),

/***/ "./src/framework/ui/helper/RBGFieldOperations.ts":
/*!*******************************************************!*\
  !*** ./src/framework/ui/helper/RBGFieldOperations.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RBGFieldOperations": () => (/* binding */ RBGFieldOperations)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");


var flogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-formatter');
var vlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-validator');
var glogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-generator');
var rlogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('basic-field-operations-renderer');
var RBGFieldOperations = /*#__PURE__*/function () {
  function RBGFieldOperations() {
    this.radioButtons = [];
  } // called when saving, change to final values


  var _proto = RBGFieldOperations.prototype;

  _proto.formatValue = function formatValue(field, currentValue) {
    flogger("Handling format value for RBG " + field.displayName + " with value " + currentValue);
    var result = currentValue; // find the current selected radio button

    this.radioButtons.forEach(function (radioButton) {
      if (radioButton.checked) {
        result = radioButton.value;

        if (field.idType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
          result = parseInt(result);
        }
      }
    });
    flogger("Handling format value for field " + field.displayName + " with value " + currentValue + " - result is " + result);
    return result;
  };

  _proto.isValidValue = function isValidValue(field, currentValue) {
    vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue);
    var response = {
      isValid: false,
      resetOnFailure: false
    }; // basics first, is the field mandatory?

    if (field.mandatory) {
      this.radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
          response.isValid = true;
        }
      });

      if (!response.isValid) {
        response.message = field.displayName + " is required. Please select one of the values.";
        vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue + " - is valid is " + response.isValid + " with message " + response.message);
        return response;
      }
    } else {
      response.isValid = true;
    } // ok, so we have some content, we need to check if the value is a valid format with regular expressions


    vlogger("Handling is valid value for field " + field.displayName + " with value " + currentValue + " - is valid is " + response.isValid + " with message " + response.message);
    return response;
  };

  _proto.renderValue = function renderValue(field, currentValue) {
    rlogger("Rendering value for field " + field.displayName + " with new value " + currentValue);
    this.radioButtons.forEach(function (radioButton) {
      if (radioButton.value === currentValue) radioButton.checked = true;
    });
    return null;
  };

  _proto.generate = function generate(field, isCreate) {
    return '';
  };

  _proto.setSubElements = function setSubElements(elements) {
    this.radioButtons = elements;
  };

  return RBGFieldOperations;
}();

/***/ }),

/***/ "./src/framework/ui/helper/SimpleValueDataSource.ts":
/*!**********************************************************!*\
  !*** ./src/framework/ui/helper/SimpleValueDataSource.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleValueDataSource": () => (/* binding */ SimpleValueDataSource)
/* harmony export */ });
var SimpleValueDataSource = /*#__PURE__*/function () {
  // static value list
  function SimpleValueDataSource(options) {
    this.options = options;
    this.listeners = [];
  }

  var _proto = SimpleValueDataSource.prototype;

  _proto.addValueOption = function addValueOption(name, value) {
    var _this = this;

    this.options.push({
      name: name,
      value: value
    });
    this.listeners.forEach(function (listener) {
      return listener.optionsChanged(_this.options);
    });
  };

  _proto.addListener = function addListener(listener) {
    this.listeners.push(listener);
  };

  _proto.getOptions = function getOptions() {
    return this.options;
  };

  return SimpleValueDataSource;
}();

/***/ }),

/***/ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts":
/*!******************************************************************************!*\
  !*** ./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewEventHandlerDelegate": () => (/* binding */ CollectionViewEventHandlerDelegate)
/* harmony export */ });
/* harmony import */ var _implementation_AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../implementation/AbstractView */ "./src/framework/ui/view/implementation/AbstractView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _alert_AlertManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alert/AlertManager */ "./src/framework/ui/alert/AlertManager.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alert_AlertListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alert/AlertListener */ "./src/framework/ui/alert/AlertListener.ts");





var logger = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-event-handler-delegate');
var CollectionViewEventHandlerDelegate = /*#__PURE__*/function () {
  function CollectionViewEventHandlerDelegate(view, forwarder) {
    this.selectedItem = null;
    this.view = view;
    this.eventForwarder = forwarder; // event handlers

    this.eventStartDrag = this.eventStartDrag.bind(this);
    this.eventActionClicked = this.eventActionClicked.bind(this);
    this.eventClickItem = this.eventClickItem.bind(this);
    this.eventDeleteClickItem = this.eventDeleteClickItem.bind(this);
  }

  var _proto = CollectionViewEventHandlerDelegate.prototype;

  _proto.getDragData = function getDragData(event) {
    var context = this.getItemContext(event);
    var itemId = context.itemId;
    var dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger("view " + this.view.getName() + ": Item with id " + itemId + " getting drag data from " + dataSource);
    var compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    var selectedItem = {};
    selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      var _this$view$getCollect, _this$view$getCollect2; // @ts-ignore


      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_TYPE] = (_this$view$getCollect = this.view.getCollectionUIConfig().detail.drag) == null ? void 0 : _this$view$getCollect.type; // @ts-ignore

      selectedItem[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_FROM] = (_this$view$getCollect2 = this.view.getCollectionUIConfig().detail.drag) == null ? void 0 : _this$view$getCollect2.from;
    }

    return selectedItem;
  };

  _proto.eventStartDrag = function eventStartDrag(event) {
    logger("view " + this.view.getName() + ": drag start");
    logger(event.target);
    var data = JSON.stringify(this.getDragData(event));
    logger(data); // @ts-ignore

    event.dataTransfer.setData(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.DRAGGABLE_KEY_ID, data);
    this.eventForwarder.itemDragStarted(this.view, data);
  };

  _proto.eventClickItem = function eventClickItem(event) {
    event.preventDefault();
    event.stopPropagation();
    var context = this.getItemContext(event);
    var itemId = context.itemId;
    var dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger("view " + this.view.getName() + ": Item with id " + itemId + " clicked from " + dataSource);
    var compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    var selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);
    logger(selectedItem);

    if (selectedItem) {
      var shouldSelect = this.eventForwarder.canSelectItem(this.view, selectedItem);
      logger("view " + this.view.getName() + ": Item with id " + itemId + " attempting selected from " + dataSource + " - " + shouldSelect);

      if (shouldSelect) {
        this.selectedItem = selectedItem;
        logger(selectedItem);
        this.eventForwarder.itemSelected(this.view, selectedItem);
      }
    }
  };

  _proto.eventDeleteClickItem = function eventDeleteClickItem(event) {
    event.preventDefault();
    event.stopPropagation();
    var context = this.getItemContext(event);
    var itemId = context.itemId;
    var dataSource = context.dataSource;

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger("view " + this.view.getName() + ": Item with id " + itemId + " attempting delete from " + dataSource);
    var compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    var selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      var shouldDelete = this.eventForwarder.canDeleteItem(this.view, selectedItem);
      logger("view " + this.view.getName() + ": Item with id " + itemId + " attempting delete from " + dataSource + " - " + shouldDelete);

      if (shouldDelete) {
        // do we need to confirm?
        if (this.view.getCollectionUIConfig().detail.quickDelete) {
          this.selectedItem = null;
          this.eventForwarder.itemDeleted(this.view, selectedItem);
        } else {
          _alert_AlertManager__WEBPACK_IMPORTED_MODULE_2__.AlertManager.getInstance().startAlert(this, this.view.getName(), "Are you sure you want to delete this information?", selectedItem);
        }
      }
    }
  };

  _proto.eventActionClicked = function eventActionClicked(event) {
    event.preventDefault();
    event.stopPropagation();
    var context = this.getItemContext(event);
    var itemId = context.itemId;
    var dataSource = context.dataSource; // @ts-ignore

    var actionName = event.target.getAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME);

    if (this.view.getCollectionUIConfig().keyType === _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.KeyType.number) {
      // @ts-ignore
      itemId = parseInt(itemId);
    }

    logger("view " + this.view.getName() + ": Item with id " + itemId + " attempting delete from " + dataSource);
    var compareWith = {}; // @ts-ignore

    compareWith[this.view.getCollectionUIConfig().keyId] = itemId;
    logger(compareWith);
    var selectedItem = this.view.getItemInNamedCollection(this.view.getCollectionName(), compareWith);

    if (selectedItem) {
      var shouldSelect = this.eventForwarder.canSelectItem(this.view, selectedItem);
      logger("view " + this.view.getName() + ": Item with id " + itemId + " attempting action " + actionName + " from " + dataSource + " - " + shouldSelect);

      if (shouldSelect) {
        this.selectedItem = selectedItem;
        logger(selectedItem);
        this.eventForwarder.itemAction(this.view, actionName, selectedItem);
      }
    }
  };

  _proto.completed = function completed(event) {
    logger(event.context);

    if (event.outcome === _alert_AlertListener__WEBPACK_IMPORTED_MODULE_4__.AlertType.confirmed) {
      this.selectedItem = null;
      this.eventForwarder.itemDeleted(this.view, event.context);
    }
  };

  _proto.getItemContext = function getItemContext(event) {
    // @ts-ignore
    var itemId = event.target.getAttribute(this.view.getCollectionUIConfig().keyId); // @ts-ignore

    var dataSource = event.target.getAttribute(_implementation_AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView.DATA_SOURCE);
    var context = {
      itemId: itemId,
      dataSource: dataSource
    };
    return context;
  };

  return CollectionViewEventHandlerDelegate;
}();

/***/ }),

/***/ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.ts":
/*!******************************************************************************************!*\
  !*** ./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewEventHandlerDelegateUsingContext": () => (/* binding */ CollectionViewEventHandlerDelegateUsingContext)
/* harmony export */ });
/* harmony import */ var _CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionViewEventHandlerDelegate */ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts");
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "./src/framework/ui/context/ContextualInformationHelper.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var CollectionViewEventHandlerDelegateUsingContext = /*#__PURE__*/function (_CollectionViewEventH) {
  _inheritsLoose(CollectionViewEventHandlerDelegateUsingContext, _CollectionViewEventH);

  function CollectionViewEventHandlerDelegateUsingContext(view, forwarder) {
    return _CollectionViewEventH.call(this, view, forwarder) || this;
  }

  var _proto = CollectionViewEventHandlerDelegateUsingContext.prototype;

  _proto.getItemContext = function getItemContext(event) {
    var contextDetail = _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_1__.ContextualInformationHelper.getInstance().findContextFromEvent(event);
    var context;

    if (contextDetail) {
      context = {
        itemId: contextDetail.identifier,
        dataSource: contextDetail.source
      };
    } else {
      context = {
        itemId: '',
        dataSource: this.view.getName()
      };
    }

    return context;
  };

  return CollectionViewEventHandlerDelegateUsingContext;
}(_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_0__.CollectionViewEventHandlerDelegate);

/***/ }),

/***/ "./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts":
/*!***************************************************************************!*\
  !*** ./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionViewListenerForwarder": () => (/* binding */ CollectionViewListenerForwarder)
/* harmony export */ });
/* harmony import */ var _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewListenerForwarder */ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var CollectionViewListenerForwarder = /*#__PURE__*/function (_ViewListenerForwarde) {
  _inheritsLoose(CollectionViewListenerForwarder, _ViewListenerForwarde);

  function CollectionViewListenerForwarder() {
    var _this;

    _this = _ViewListenerForwarde.call(this) || this;
    _this.collectionViewListeners = [];
    return _this;
  }

  var _proto = CollectionViewListenerForwarder.prototype;

  _proto.addListener = function addListener(listener) {
    _ViewListenerForwarde.prototype.addListener.call(this, listener);

    this.collectionViewListeners.push(listener);
  };

  _proto.itemDragStarted = function itemDragStarted(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(function (listener) {
        return listener.itemDragStarted(view, selectedItem);
      });
    }
  };

  _proto.itemSelected = function itemSelected(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(function (listener) {
        return listener.itemSelected(view, selectedItem);
      });
    }
  };

  _proto.itemDeselected = function itemDeselected(view, deselectedItem) {
    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(function (listener) {
        return listener.itemDeselected(view, deselectedItem);
      });
    }
  };

  _proto.canSelectItem = function canSelectItem(view, selectedItem) {
    var result = true; // return false if cancelling delete

    if (!this.suppressEventEmits) {
      this.collectionViewListeners.forEach(function (listener) {
        if (!listener.canSelectItem(view, selectedItem)) {
          result = false;
        }
      });
    }

    return result;
  };

  return CollectionViewListenerForwarder;
}(_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__.ViewListenerForwarder);

/***/ }),

/***/ "./src/framework/ui/view/delegate/DetailViewListenerForwarder.ts":
/*!***********************************************************************!*\
  !*** ./src/framework/ui/view/delegate/DetailViewListenerForwarder.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailViewListenerForwarder": () => (/* binding */ DetailViewListenerForwarder)
/* harmony export */ });
/* harmony import */ var _ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewListenerForwarder */ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}


var DetailViewListenerForwarder = /*#__PURE__*/function (_ViewListenerForwarde) {
  _inheritsLoose(DetailViewListenerForwarder, _ViewListenerForwarde);

  function DetailViewListenerForwarder() {
    var _this;

    _this = _ViewListenerForwarde.call(this) || this;
    _this.detailViewListeners = [];
    return _this;
  }

  var _proto = DetailViewListenerForwarder.prototype;

  _proto.addListener = function addListener(listener) {
    _ViewListenerForwarde.prototype.addListener.call(this, listener);

    this.detailViewListeners.push(listener);
  };

  _proto.saveNewItem = function saveNewItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(function (listener) {
        return listener.saveNewItem(view, dataObj);
      });
    }
  };

  _proto.updateItem = function updateItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(function (listener) {
        return listener.updateItem(view, dataObj);
      });
    }
  };

  _proto.deletedItem = function deletedItem(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(function (listener) {
        return listener.deletedItem(view, dataObj);
      });
    }
  };

  _proto.cancelled = function cancelled(view, dataObj) {
    if (!this.suppressEventEmits) {
      this.detailViewListeners.forEach(function (listener) {
        return listener.cancelled(view, dataObj);
      });
    }
  };

  return DetailViewListenerForwarder;
}(_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_0__.ViewListenerForwarder);

/***/ }),

/***/ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts":
/*!*****************************************************************!*\
  !*** ./src/framework/ui/view/delegate/ViewListenerForwarder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewListenerForwarder": () => (/* binding */ ViewListenerForwarder)
/* harmony export */ });
var ViewListenerForwarder = /*#__PURE__*/function () {
  function ViewListenerForwarder() {
    this.suppressEventEmits = false;
    this.viewListeners = [];
  }

  var _proto = ViewListenerForwarder.prototype;

  _proto.addListener = function addListener(listener) {
    this.viewListeners.push(listener);
  };

  _proto.suppressEvents = function suppressEvents() {
    this.suppressEventEmits = true;
  };

  _proto.emitEvents = function emitEvents() {
    this.suppressEventEmits = false;
  };

  _proto.itemDeleted = function itemDeleted(view, selectedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.itemDeleted(view, selectedItem);
      });
    }
  };

  _proto.documentLoaded = function documentLoaded(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.documentLoaded(view);
      });
    }
  };

  _proto.itemAction = function itemAction(view, actionName, selectedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.itemAction(view, actionName, selectedItem);
      });
    }
  };

  _proto.canDeleteItem = function canDeleteItem(view, selectedItem) {
    var result = true; // return false if cancelling delete

    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        if (!listener.canDeleteItem(view, selectedItem)) {
          result = false;
        }
      });
    }

    return result;
  };

  _proto.hideRequested = function hideRequested(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.hideRequested(view);
      });
    }
  };

  _proto.showRequested = function showRequested(view) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.showRequested(view);
      });
    }
  };

  _proto.itemDropped = function itemDropped(view, droppedItem) {
    if (!this.suppressEventEmits) {
      this.viewListeners.forEach(function (listener) {
        return listener.itemDropped(view, droppedItem);
      });
    }
  };

  return ViewListenerForwarder;
}();

/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractCollectionView.ts":
/*!************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractCollectionView.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractCollectionView": () => (/* binding */ AbstractCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView */ "./src/framework/ui/view/implementation/AbstractView.ts");
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delegate/CollectionViewListenerForwarder */ "./src/framework/ui/view/delegate/CollectionViewListenerForwarder.ts");
/* harmony import */ var _delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delegate/CollectionViewEventHandlerDelegate */ "./src/framework/ui/view/delegate/CollectionViewEventHandlerDelegate.ts");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}







var avLogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-ts');
var avLoggerDetails = debug__WEBPACK_IMPORTED_MODULE_3___default()('collection-view-ts-detail');
var AbstractCollectionView = /*#__PURE__*/function (_AbstractView) {
  _inheritsLoose(AbstractCollectionView, _AbstractView);

  function AbstractCollectionView(uiConfig, collectionName) {
    var _this;

    _this = _AbstractView.call(this, uiConfig.viewConfig) || this;
    _this.collectionUIConfig = uiConfig;
    _this.collectionName = collectionName;
    _this.renderer = null;
    var forwarder = new _delegate_CollectionViewListenerForwarder__WEBPACK_IMPORTED_MODULE_4__.CollectionViewListenerForwarder();
    _this.eventForwarder = forwarder;
    _this.eventHandlerDelegate = new _delegate_CollectionViewEventHandlerDelegate__WEBPACK_IMPORTED_MODULE_5__.CollectionViewEventHandlerDelegate(_assertThisInitialized(_this), forwarder);
    _this.updateViewForNamedCollection = _this.updateViewForNamedCollection.bind(_assertThisInitialized(_this)); // event handlers

    _this.eventStartDrag = _this.eventStartDrag.bind(_assertThisInitialized(_this));
    _this.eventActionClicked = _this.eventActionClicked.bind(_assertThisInitialized(_this));
    _this.eventClickItem = _this.eventClickItem.bind(_assertThisInitialized(_this));
    _this.eventDeleteClickItem = _this.eventDeleteClickItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AbstractCollectionView.prototype;

  _proto.eventStartDrag = function eventStartDrag(event) {
    this.eventHandlerDelegate.eventStartDrag(event);
  };

  _proto.eventClickItem = function eventClickItem(event) {
    this.eventHandlerDelegate.eventClickItem(event);
  };

  _proto.eventDeleteClickItem = function eventDeleteClickItem(event) {
    this.eventHandlerDelegate.eventDeleteClickItem(event);
  };

  _proto.eventActionClicked = function eventActionClicked(event) {
    this.eventHandlerDelegate.eventActionClicked(event);
  };

  _proto.getCollectionName = function getCollectionName() {
    return this.collectionName;
  };

  _proto.getItemId = function getItemId(from, item) {
    return this.getIdForItemInNamedCollection(from, item);
  };

  _proto.getCollectionUIConfig = function getCollectionUIConfig() {
    return this.collectionUIConfig;
  };

  _proto.addEventCollectionListener = function addEventCollectionListener(listener) {
    this.eventForwarder.addListener(listener);
  };

  _proto.setContainedBy = function setContainedBy(container) {
    _AbstractView.prototype.setContainedBy.call(this, container);

    if (this.uiConfig.drop) {
      avLoggerDetails("view " + this.getName() + ": Adding dragover events to " + this.uiConfig.dataSourceId);
      avLoggerDetails(container);
      container.addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      container.addEventListener('drop', this.handleDrop);
    }
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    _AbstractView.prototype.onDocumentLoaded.call(this);

    if (this.renderer) this.renderer.onDocumentLoaded();
  };

  _proto.renderBackgroundForItemInNamedCollection = function renderBackgroundForItemInNamedCollection(containerEl, name, item) {};

  _proto.compareItemsForEquality = function compareItemsForEquality(item1, item2) {
    return (0,_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_2__.isSame)(item1, item2);
  };

  _proto.getModifierForItemInNamedCollection = function getModifierForItemInNamedCollection(name, item) {
    return _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
  };

  _proto.getSecondaryModifierForItemInNamedCollection = function getSecondaryModifierForItemInNamedCollection(name, item) {
    return _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal;
  };

  _proto.getBadgeValueForItemInNamedCollection = function getBadgeValueForItemInNamedCollection(name, item) {
    return 0;
  };

  _proto.getBackgroundImageForItemInNamedCollection = function getBackgroundImageForItemInNamedCollection(name, item) {
    return '';
  };

  _proto.updateViewForNamedCollection = function updateViewForNamedCollection(name, newState) {
    if (this.viewEl && this.renderer) {
      this.renderer.setDisplayElementsForCollectionInContainer(this.viewEl, name, newState);
    }
  };

  _proto.hasPermissionToDeleteItemInNamedCollection = function hasPermissionToDeleteItemInNamedCollection(name, item) {
    return true;
  };

  _proto.hasPermissionToUpdateItemInNamedCollection = function hasPermissionToUpdateItemInNamedCollection(name, item) {
    return true;
  };

  _proto.hasPermissionToActionItemInNamedCollection = function hasPermissionToActionItemInNamedCollection(actionName, name, item) {
    return true;
  };

  _proto.setRenderer = function setRenderer(renderer) {
    this.renderer = renderer;
  };

  return AbstractCollectionView;
}(_AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView);

/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts":
/*!********************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractStatefulCollectionView.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractStatefulCollectionView)
/* harmony export */ });
/* harmony import */ var _AbstractCollectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCollectionView */ "./src/framework/ui/view/implementation/AbstractCollectionView.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('ab-stateful-collection-view');

var AbstractStatefulCollectionView = /*#__PURE__*/function (_AbstractCollectionVi) {
  _inheritsLoose(AbstractStatefulCollectionView, _AbstractCollectionVi);

  function AbstractStatefulCollectionView(uiConfig, stateManager, stateName) {
    var _this;

    _this = _AbstractCollectionVi.call(this, uiConfig, stateName) || this;
    _this.stateManager = stateManager; // state change listening

    _this.stateChanged = _this.stateChanged.bind(_assertThisInitialized(_this)); // setup state listener

    _this.stateManager.addChangeListenerForName(_this.collectionName, _assertThisInitialized(_this));

    return _this;
  }

  var _proto = AbstractStatefulCollectionView.prototype;

  _proto.getItemDescription = function getItemDescription(from, item) {
    return "";
  };

  _proto.hasActionPermission = function hasActionPermission(actionName, from, item) {
    return true;
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    _AbstractCollectionVi.prototype.onDocumentLoaded.call(this);

    this.addEventCollectionListener(this);
  };

  _proto.getItemInNamedCollection = function getItemInNamedCollection(name, compareWith) {
    return this.stateManager.findItemInState(name, compareWith, this.compareItemsForEquality);
  };

  _proto.stateChanged = function stateChanged(managerName, name, newValue) {
    logger("handling state " + name + " changed");
    logger(newValue);
    this.updateViewForNamedCollection(name, newValue);
  };

  _proto.stateChangedItemAdded = function stateChangedItemAdded(managerName, name, itemAdded) {
    logger("handling state " + name + " new item added");
    logger(itemAdded);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  };

  _proto.stateChangedItemRemoved = function stateChangedItemRemoved(managerName, name, itemRemoved) {
    logger("handling state " + name + " new item removed");
    logger(itemRemoved);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  };

  _proto.stateChangedItemUpdated = function stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {
    logger("handling state " + name + " new item updated");
    logger(itemNewValue);
    if (this.stateManager && this.collectionName) this.updateViewForNamedCollection(name, this.stateManager.getStateByName(name));
  };

  _proto.render = function render() {
    this.updateViewForNamedCollection(this.collectionName, this.stateManager.getStateByName(this.collectionName));
  };

  _proto.show = function show() {};

  _proto.hidden = function hidden() {};

  _proto.documentLoaded = function documentLoaded(view) {};

  _proto.hideRequested = function hideRequested(view) {};

  _proto.itemDragStarted = function itemDragStarted(view, selectedItem) {};

  _proto.itemDropped = function itemDropped(view, droppedItem) {};

  _proto.showRequested = function showRequested(view) {};

  _proto.itemDeselected = function itemDeselected(view, selectedItem) {};

  _proto.itemSelected = function itemSelected(view, selectedItem) {};

  _proto.itemAction = function itemAction(view, actionName, selectedItem) {};

  _proto.itemDeleted = function itemDeleted(view, selectedItem) {
    this.stateManager.removeItemFromState(this.collectionName, selectedItem, this.compareItemsForEquality, false);
  };

  _proto.canSelectItem = function canSelectItem(view, selectedItem) {
    return true;
  };

  _proto.canDeleteItem = function canDeleteItem(view, selectedItem) {
    return true;
  };

  _proto.getListenerName = function getListenerName() {
    return this.getName();
  };

  return AbstractStatefulCollectionView;
}(_AbstractCollectionView__WEBPACK_IMPORTED_MODULE_0__.AbstractCollectionView);



/***/ }),

/***/ "./src/framework/ui/view/implementation/AbstractView.ts":
/*!**************************************************************!*\
  !*** ./src/framework/ui/view/implementation/AbstractView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractView": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delegate/ViewListenerForwarder */ "./src/framework/ui/view/delegate/ViewListenerForwarder.ts");



var avLogger = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts');
var avLoggerDetails = debug__WEBPACK_IMPORTED_MODULE_1___default()('abstract-view-ts-detail');
var AbstractView = /*#__PURE__*/function () {
  function AbstractView(uiConfig) {
    this.containerEl = null;
    this.uiConfig = uiConfig;
    this.viewEl = null;
    this.eventForwarder = new _delegate_ViewListenerForwarder__WEBPACK_IMPORTED_MODULE_2__.ViewListenerForwarder();
    this.handleDrop = this.handleDrop.bind(this);
  }

  var _proto = AbstractView.prototype;

  _proto.getItemId = function getItemId(from, item) {
    throw new Error("Method not implemented.");
  };

  _proto.getItemDescription = function getItemDescription(from, item) {
    throw new Error("Method not implemented.");
  };

  _proto.hasActionPermission = function hasActionPermission(actionName, from, item) {
    throw new Error("Not implemented");
  };

  _proto.getUIConfig = function getUIConfig() {
    return this.uiConfig;
  };

  _proto.addEventListener = function addEventListener(listener) {
    this.eventForwarder.addListener(listener);
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    this.viewEl = document.getElementById(this.uiConfig.resultsContainerId);
    this.eventForwarder.documentLoaded(this);
  };

  _proto.setContainedBy = function setContainedBy(container) {
    this.containerEl = container;
  };

  _proto.getName = function getName() {
    return this.uiConfig.dataSourceId;
  };

  _proto.hasChanged = function hasChanged() {
    return false;
  };

  _proto.getDataSourceKeyId = function getDataSourceKeyId() {
    return AbstractView.DATA_SOURCE;
  };

  _proto.handleDrop = function handleDrop(event) {
    avLogger("view " + this.getName() + ": drop event");
    avLoggerDetails(event.target); // @ts-ignore

    var draggedObjectJSON = event.dataTransfer.getData(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_KEY_ID);
    var draggedObject = JSON.parse(draggedObjectJSON);
    avLoggerDetails(draggedObject); // check to see if we accept the dropped type and source

    var droppedObjectType = draggedObject[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_TYPE];
    var droppedObjectFrom = draggedObject[_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_0__.DRAGGABLE_FROM];
    avLogger("view " + this.getName() + ": drop event from " + droppedObjectFrom + " with type " + droppedObjectType);

    if (this.uiConfig.drop) {
      var acceptType = this.uiConfig.drop.acceptTypes.findIndex(function (objectType) {
        return objectType === droppedObjectType;
      }) >= 0;
      var acceptFrom = true;

      if (acceptType) {
        if (this.uiConfig.drop.acceptFrom) {
          acceptFrom = this.uiConfig.drop.acceptFrom.findIndex(function (from) {
            return from === droppedObjectFrom;
          }) >= 0;
        }

        avLoggerDetails("view " + this.getName() + ": accepted type? " + acceptType + " and from? " + acceptFrom);

        if (acceptType && acceptFrom) {
          this.eventForwarder.itemDropped(this, draggedObject);
        }
      }
    }
  };

  return AbstractView;
}();
AbstractView.DATA_SOURCE = 'data-source';

/***/ }),

/***/ "./src/framework/ui/view/implementation/DefaultPermissionChecker.ts":
/*!**************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/DefaultPermissionChecker.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPermissionChecker": () => (/* binding */ DefaultPermissionChecker)
/* harmony export */ });
var DefaultPermissionChecker = /*#__PURE__*/function () {
  function DefaultPermissionChecker(canUpdate, canDelete) {
    this.canUpdate = canUpdate;
    this.canDelete = canDelete;
  }

  var _proto = DefaultPermissionChecker.prototype;

  _proto.hasPermissionToUpdateItem = function hasPermissionToUpdateItem(item) {
    return this.canUpdate;
  };

  _proto.hasPermissionToDeleteItem = function hasPermissionToDeleteItem(item) {
    return this.canDelete;
  };

  return DefaultPermissionChecker;
}();

/***/ }),

/***/ "./src/framework/ui/view/implementation/DetailViewImplementation.ts":
/*!**************************************************************************!*\
  !*** ./src/framework/ui/view/implementation/DetailViewImplementation.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailViewImplementation": () => (/* binding */ DetailViewImplementation)
/* harmony export */ });
/* harmony import */ var _AbstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractView */ "./src/framework/ui/view/implementation/AbstractView.ts");
/* harmony import */ var _delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delegate/DetailViewListenerForwarder */ "./src/framework/ui/view/delegate/DetailViewListenerForwarder.ts");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var DetailViewImplementation = /*#__PURE__*/function (_AbstractView) {
  _inheritsLoose(DetailViewImplementation, _AbstractView);

  function DetailViewImplementation(uiConfig, renderer) {
    var _this;

    _this = _AbstractView.call(this, uiConfig) || this;
    _this.currentItem = null;
    _this.renderer = renderer;
    var forwarder = new _delegate_DetailViewListenerForwarder__WEBPACK_IMPORTED_MODULE_1__.DetailViewListenerForwarder();
    _this.eventForwarder = forwarder;

    _this.renderer.setView(_assertThisInitialized(_this));

    _this.renderer.setEventForwarder(forwarder);

    return _this;
  }

  var _proto = DetailViewImplementation.prototype;

  _proto.addEventDetailListener = function addEventDetailListener(listener) {
    this.eventForwarder.addListener(listener);
  };

  _proto.getItemId = function getItemId(name, item) {
    return '';
  };

  _proto.getItemDescription = function getItemDescription(name, item) {
    return '';
  };

  _proto.hasActionPermission = function hasActionPermission(actionName, from, item) {
    return true;
  };

  _proto.getItem = function getItem(from, identifier) {
    return this.currentItem;
  };

  _proto.clearDisplay = function clearDisplay() {
    this.renderer.reset();
  };

  _proto.clearReadOnly = function clearReadOnly() {
    this.renderer.clearReadOnly();
  };

  _proto.setReadOnly = function setReadOnly() {
    this.renderer.setReadOnly();
  };

  _proto.isReadOnly = function isReadOnly() {
    return this.renderer.isReadOnly();
  };

  _proto.createItem = function createItem() {
    return this.renderer.createItem();
  };

  _proto.displayItem = function displayItem(dataObj) {
    this.currentItem = dataObj;

    if (this.renderer.hasPermissionToUpdateItem(dataObj)) {
      this.renderer.displayItem(dataObj);
    } else {
      this.renderer.displayItemReadonly(dataObj);
    }

    this.show();
  };

  _proto.hidden = function hidden() {
    this.renderer.hidden();
  };

  _proto.show = function show() {
    this.renderer.show();
  };

  _proto.render = function render() {
    this.displayItem(this.currentItem);
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    this.renderer.onDocumentLoaded();

    _AbstractView.prototype.onDocumentLoaded.call(this);
  };

  _proto.hasPermissionToDeleteItem = function hasPermissionToDeleteItem(item) {
    return this.renderer.hasPermissionToDeleteItem(item);
  };

  _proto.hasPermissionToUpdateItem = function hasPermissionToUpdateItem(item) {
    return this.renderer.hasPermissionToUpdateItem(item);
  };

  _proto.handleActionItem = function handleActionItem(actionName, selectedItem) {
    this.renderer.handleActionItem(actionName, selectedItem);
  };

  _proto.isDisplayingItem = function isDisplayingItem(dataObj) {
    return this.renderer.isDisplayingItem(dataObj);
  };

  _proto.hasChanged = function hasChanged() {
    return this.renderer.hasChanged();
  };

  _proto.initialise = function initialise(displayOrder, hasDeleteButton, hideModifierFields) {
    if (hideModifierFields === void 0) {
      hideModifierFields = false;
    }

    this.renderer.initialise(displayOrder, hasDeleteButton, hideModifierFields);
  };

  return DetailViewImplementation;
}(_AbstractView__WEBPACK_IMPORTED_MODULE_0__.AbstractView);

/***/ }),

/***/ "./src/framework/ui/view/renderer/FormDetailViewRenderer.ts":
/*!******************************************************************!*\
  !*** ./src/framework/ui/view/renderer/FormDetailViewRenderer.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDetailViewRenderer": () => (/* binding */ FormDetailViewRenderer)
/* harmony export */ });
/* harmony import */ var _form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form/BasicFormImplementation */ "./src/framework/ui/form/BasicFormImplementation.ts");
/* harmony import */ var _form_FormListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form/FormListener */ "./src/framework/ui/form/FormListener.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);



var logger = debug__WEBPACK_IMPORTED_MODULE_2___default()('form-detail-view-renderer');
var FormDetailViewRenderer = /*#__PURE__*/function () {
  function FormDetailViewRenderer(containerId, objDef, permissionChecker) {
    this.form = null;
    this.containerId = containerId;
    this.objDef = objDef;
    this.currentItem = {};
    this.isNewItem = false;
    this.forwarder = null;
    this.view = null;
    this.permissionChecker = permissionChecker;
  }

  var _proto = FormDetailViewRenderer.prototype;

  _proto.hasActionPermission = function hasActionPermission(actionName, from, item) {
    throw new Error("Method not implemented.");
  };

  _proto.setEventForwarder = function setEventForwarder(forwarder) {
    this.forwarder = forwarder;
  };

  _proto.setView = function setView(view) {
    this.view = view;
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    this.form = new _form_BasicFormImplementation__WEBPACK_IMPORTED_MODULE_0__.BasicFormImplementation(this.containerId, this.objDef);
    this.form.addFormListener(this);
  };

  _proto.reset = function reset() {
    if (this.form) this.form.reset();
  };

  _proto.initialise = function initialise(displayOrder, hasDeleteButton, hideModifierFields) {
    if (this.form) this.form.initialise(displayOrder, hasDeleteButton, hideModifierFields);
  };

  _proto.displayItemReadonly = function displayItemReadonly(dataObject) {
    this.isNewItem = false;
    if (this.form) this.form.displayOnly(dataObject);
  };

  _proto.getName = function getName() {
    return this.objDef.displayName;
  };

  _proto.setContainedBy = function setContainedBy(container) {
    throw new Error("Method not implemented.");
  };

  _proto.addEventListener = function addEventListener(listener) {
    throw new Error("Method not implemented.");
  };

  _proto.hasChanged = function hasChanged() {
    var result = false;
    if (this.form) result = this.form.hasChanged();
    return result;
  };

  _proto.getUIConfig = function getUIConfig() {
    throw new Error("Method not implemented.");
  };

  _proto.getDataSourceKeyId = function getDataSourceKeyId() {
    throw new Error("Method not implemented.");
  };

  _proto.clearDisplay = function clearDisplay() {
    this.isNewItem = false;
    if (this.form) this.form.reset();
  };

  _proto.clearReadOnly = function clearReadOnly() {
    if (this.form) this.form.clearReadOnly();
  };

  _proto.setReadOnly = function setReadOnly() {
    if (this.form) this.form.setReadOnly();
  };

  _proto.isReadOnly = function isReadOnly() {
    var result = false;
    if (this.form) result = this.form.isReadOnly();
    return result;
  };

  _proto.createItem = function createItem() {
    var _this$form;

    this.currentItem = {};
    logger("Creating new item with form " + ((_this$form = this.form) == null ? void 0 : _this$form.getId()));

    if (this.form) {
      this.isNewItem = true;
      this.currentItem = this.form.startCreateNew();
    }

    $('[data-toggle="tooltip"]').tooltip();
    return this.currentItem;
  };

  _proto.displayItem = function displayItem(dataObj) {
    this.currentItem = dataObj;
    this.isNewItem = false;

    if (this.hasPermissionToUpdateItem(dataObj)) {
      if (this.form) this.form.startUpdate(dataObj);
    } else {
      if (this.form) this.form.displayOnly(dataObj);
    }

    $('[data-toggle="tooltip"]').tooltip();
  };

  _proto.hidden = function hidden() {
    if (this.form) this.form.setIsVisible(false);
  };

  _proto.show = function show() {
    if (this.form) this.form.setIsVisible(true);
  };

  _proto.render = function render() {
    this.displayItem(this.currentItem);
    this.show();
  };

  _proto.hasPermissionToDeleteItem = function hasPermissionToDeleteItem(item) {
    return this.permissionChecker.hasPermissionToDeleteItem(item);
  };

  _proto.hasPermissionToUpdateItem = function hasPermissionToUpdateItem(item) {
    return this.permissionChecker.hasPermissionToUpdateItem(item);
  };

  _proto.getForm = function getForm() {
    return this.form;
  };

  _proto.handleActionItem = function handleActionItem(actionName, selectedItem) {};

  _proto.isDisplayingItem = function isDisplayingItem(dataObj) {
    var result = false;

    if (this.currentItem) {
      if (this.form) {
        result = this.form.isDisplayingItem(dataObj);
      }
    }

    return result;
  };

  _proto.formChanged = function formChanged(event, formValues) {
    // catch form events for user leaving the form
    switch (event.eventType) {
      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLING:
        {
          logger("Form is cancelling");
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLING_ABORTED:
        {
          logger("Form is cancelling - aborted");
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.CANCELLED:
        {
          logger("Form is cancelled - resetting");
          this.currentItem = formValues;
          if (this.forwarder && this.view) this.forwarder.cancelled(this.view, this.currentItem);
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETING:
        {
          logger("Form is deleting");
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETE_ABORTED:
        {
          logger("Form is deleting - aborted");
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.DELETED:
        {
          logger("Form is deleted - resetting");
          this.currentItem = formValues;
          if (this.forwarder && this.view) this.forwarder.deletedItem(this.view, this.currentItem); // user is deleting the object, will become invisible

          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVE_ABORTED:
        {
          logger("Form save cancelled");
          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVED:
        {
          logger("Form is saved with data");

          if (this.form) {
            var _this$form2;

            var formattedObj = (_this$form2 = this.form) == null ? void 0 : _this$form2.getFormattedDataObject();

            if (this.isNewItem) {
              if (this.forwarder && this.view) this.forwarder.saveNewItem(this.view, formattedObj);
            } else {
              if (this.forwarder && this.view) this.forwarder.updateItem(this.view, formattedObj);
            }

            this.isNewItem = false;
          }

          break;
        }

      case _form_FormListener__WEBPACK_IMPORTED_MODULE_1__.FormEventType.SAVING:
        {
          logger("Form is saving");
          break;
        }
    }

    return false;
  };

  _proto.getItemDescription = function getItemDescription(from, item) {
    return "";
  };

  _proto.getItemId = function getItemId(from, item) {
    return "";
  };

  return FormDetailViewRenderer;
}();

/***/ }),

/***/ "./src/framework/ui/view/renderer/ListViewRendererUsingContext.ts":
/*!************************************************************************!*\
  !*** ./src/framework/ui/view/renderer/ListViewRendererUsingContext.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewRendererUsingContext": () => (/* binding */ ListViewRendererUsingContext)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/BrowserUtil */ "./src/framework/util/BrowserUtil.ts");
/* harmony import */ var _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ContextualInformationHelper */ "./src/framework/ui/context/ContextualInformationHelper.ts");




var avLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('list-view-renderer-with-context');
var ListViewRendererUsingContext = /*#__PURE__*/function () {
  function ListViewRendererUsingContext(view, eventHandler) {
    this.view = view;
    this.eventHandler = eventHandler;
  }

  var _proto = ListViewRendererUsingContext.prototype;

  _proto.createDisplayElementForCollectionItem = function createDisplayElementForCollectionItem(collectionName, item) {
    var _this = this;

    var canDeleteItem = this.view.hasPermissionToDeleteItemInNamedCollection(collectionName, item);
    var uiConfig = this.view.getCollectionUIConfig();
    avLogger("view " + this.view.getName() + ": creating List item");
    avLogger(item);
    var resultDataKeyId = this.view.getIdForItemInNamedCollection(collectionName, item);
    var childEl = document.createElement(uiConfig.resultsElementType);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.resultsClasses);
    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(childEl, uiConfig.resultsElementAttributes); // the content may be structured

    var textEl = childEl;

    if (uiConfig.detail.containerClasses) {
      var contentEl = document.createElement('div');
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(contentEl, uiConfig.detail.containerClasses);
      textEl = document.createElement(uiConfig.detail.textElementType);
      _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(textEl, uiConfig.detail.textElementClasses);
      contentEl.appendChild(textEl);

      if (uiConfig.detail.background) {
        var imgEl = document.createElement(uiConfig.detail.background.elementType);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(imgEl, uiConfig.detail.background.elementClasses);
        imgEl.setAttribute('src', this.view.getBackgroundImageForItemInNamedCollection(collectionName, item));
        childEl.appendChild(imgEl);
      }

      var buttonsEl = document.createElement('div');
      contentEl.appendChild(buttonsEl);

      if (uiConfig.detail.badge) {
        var badgeValue = this.view.getBadgeValueForItemInNamedCollection(collectionName, item);

        if (badgeValue > 0) {
          var badgeEl = document.createElement(uiConfig.detail.badge.elementType);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(badgeEl, uiConfig.detail.badge.elementClasses);
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(badgeEl, uiConfig.detail.badge.elementAttributes);
          buttonsEl.appendChild(badgeEl);
          badgeEl.innerHTML = "&nbsp;&nbsp;&nbsp;" + badgeValue + "&nbsp;&nbsp;&nbsp;";
        }
      }

      if (uiConfig.extraActions) {
        uiConfig.extraActions.forEach(function (extraAction) {
          var hasPermissionForAction = _this.view.hasPermissionToActionItemInNamedCollection(extraAction.name, collectionName, item);

          if (hasPermissionForAction) {
            var action = document.createElement('button');
            action.setAttribute('type', 'button');
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(action, extraAction.buttonClasses);
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(action, extraAction.attributes);

            if (extraAction.buttonText) {
              action.innerHTML = extraAction.buttonText;
            }

            if (extraAction.iconClasses) {
              var iconEl = document.createElement('i');
              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, extraAction.iconClasses);
              iconEl.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
              action.appendChild(iconEl);
            }

            action.setAttribute(_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.EXTRA_ACTION_ATTRIBUTE_NAME, extraAction.name);
            action.addEventListener('click', function (event) {
              event.preventDefault();
              event.stopPropagation();

              _this.eventHandler.eventActionClicked(event);
            });
            buttonsEl.appendChild(action);
          }
        });
      }

      if (uiConfig.detail.delete && canDeleteItem) {
        var deleteButtonEl = document.createElement('button');
        deleteButtonEl.setAttribute('type', 'button');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(deleteButtonEl, uiConfig.detail.delete.buttonClasses);
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addAttributes(deleteButtonEl, uiConfig.detail.delete.attributes);

        if (uiConfig.detail.delete.buttonText) {
          deleteButtonEl.innerHTML = uiConfig.detail.delete.buttonText;
        }

        if (uiConfig.detail.delete.iconClasses) {
          var iconEl = document.createElement('i');
          _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, uiConfig.detail.delete.iconClasses);
          deleteButtonEl.appendChild(iconEl);
        }

        deleteButtonEl.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.eventHandler.eventDeleteClickItem(event);
        });
        buttonsEl.appendChild(deleteButtonEl);
      }

      childEl.appendChild(contentEl);

      if (uiConfig.detail.drag) {
        childEl.setAttribute('draggable', 'true');
        childEl.addEventListener('dragstart', this.eventHandler.eventStartDrag);
      } // add selection actions


      if (uiConfig.detail.select) {
        childEl.addEventListener('click', this.eventHandler.eventClickItem);
      }
    } // add the key ids for selection


    this.view.renderDisplayForItemInNamedCollection(textEl, collectionName, item); // add icons

    if (uiConfig.detail.icons) {
      var icons = uiConfig.detail.icons(collectionName, item);
      icons.forEach(function (icon) {
        var iconEl = document.createElement('i');
        _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(iconEl, icon);
        textEl.appendChild(iconEl);
      });
    } // add modifiers for patient state


    if (uiConfig.modifiers) {
      var modifier = this.view.getModifierForItemInNamedCollection(collectionName, item);
      var secondModifier = this.view.getSecondaryModifierForItemInNamedCollection(collectionName, item);

      switch (modifier) {
        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.normal:
          {
            avLogger("view " + this.view.getName() + ": normal item");
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal);

            if (uiConfig.icons && uiConfig.icons.normal) {
              var _iconEl = document.createElement('i');

              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl, uiConfig.icons.normal);
              textEl.appendChild(_iconEl);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.normal, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    var _iconEl2 = document.createElement('i');

                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl2, uiConfig.icons.warning);
                    textEl.appendChild(_iconEl2);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    var _iconEl3 = document.createElement('i');

                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl3, uiConfig.icons.active);
                    textEl.appendChild(_iconEl3);
                  }
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
          {
            avLogger("view " + this.view.getName() + ": active item");
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active);

            if (uiConfig.icons && uiConfig.icons.active) {
              var _iconEl4 = document.createElement('i');

              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl4, uiConfig.icons.active);
              textEl.appendChild(_iconEl4);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.active, false);
                  _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                  if (uiConfig.icons && uiConfig.icons.warning) {
                    var _iconEl5 = document.createElement('i');

                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl5, uiConfig.icons.warning);
                    textEl.appendChild(_iconEl5);
                  }

                  break;
                }
            }

            break;
          }

        case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.inactive:
          {
            avLogger("view " + this.view.getName() + ": inactive item");
            _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive);

            if (uiConfig.icons && uiConfig.icons.inactive) {
              var _iconEl6 = document.createElement('i');

              _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl6, uiConfig.icons.inactive);
              textEl.appendChild(_iconEl6);
            }

            switch (secondModifier) {
              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.warning:
                {
                  if (uiConfig.icons && uiConfig.icons.warning) {
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.inactive, false);
                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(childEl, uiConfig.modifiers.warning, true);

                    var _iconEl7 = document.createElement('i');

                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl7, uiConfig.icons.warning);
                    textEl.appendChild(_iconEl7);
                  }

                  break;
                }

              case _ConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.Modifier.active:
                {
                  if (uiConfig.icons && uiConfig.icons.active) {
                    var _iconEl8 = document.createElement('i');

                    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].addRemoveClasses(_iconEl8, uiConfig.icons.active);
                    textEl.appendChild(_iconEl8);
                  }

                  break;
                }
            }

            break;
          }
      }
    }

    return childEl;
  };

  _proto.setDisplayElementsForCollectionInContainer = function setDisplayElementsForCollectionInContainer(containerEl, collectionName, newState) {
    var _this2 = this;

    avLogger("view " + this.view.getName() + ": creating Results");
    avLogger(newState); // remove the previous items from list

    _util_BrowserUtil__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(containerEl); // add the new children

    newState.map(function (item, index) {
      var childEl = _this2.createDisplayElementForCollectionItem(collectionName, item); // add draggable actions


      avLogger("view " + _this2.view.getName() + ":  Adding child " + _this2.view.getIdForItemInNamedCollection(collectionName, item));
      containerEl.appendChild(childEl);
      _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().addContextToElement(_this2.view.getName(), collectionName, item, childEl, true);
      childEl.addEventListener('contextmenu', _context_ContextualInformationHelper__WEBPACK_IMPORTED_MODULE_3__.ContextualInformationHelper.getInstance().handleContextMenu);
    });
    $('[data-toggle="tooltip"]').tooltip();
  };

  _proto.onDocumentLoaded = function onDocumentLoaded() {};

  return ListViewRendererUsingContext;
}();

/***/ }),

/***/ "./src/framework/util/BrowserUtil.ts":
/*!*******************************************!*\
  !*** ./src/framework/util/BrowserUtil.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var BrowserUtil = /*#__PURE__*/function () {
  function BrowserUtil() {}

  var _proto = BrowserUtil.prototype;

  _proto.scrollSmoothToId = function scrollSmoothToId(elementId) {
    var element = document.getElementById(elementId);

    if (element !== null) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  _proto.scrollToBottomNow = function scrollToBottomNow(element) {
    if (element) {
      element.scrollTop = element.scrollHeight - element.clientHeight + 100;
    }
  };

  _proto.scrollToBottomSmooth = function scrollToBottomSmooth(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      element.scrollTop = element.scrollHeight - element.clientHeight + 100;
    }
  };

  _proto.scrollSmoothTo = function scrollSmoothTo(element) {
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  _proto.scrollTo = function scrollTo(element) {
    element.scrollIntoView({
      block: 'start'
    });
  };

  _proto.removeAllChildren = function removeAllChildren(element) {
    if (element && element.firstChild) {
      while (element.firstChild) {
        var lastChild = element.lastChild;
        if (lastChild) element.removeChild(lastChild);
      }
    }
  };

  _proto.addRemoveClasses = function addRemoveClasses(element, classesText, isAdding) {
    if (isAdding === void 0) {
      isAdding = true;
    }

    var classes = classesText.split(' ');
    classes.forEach(function (classValue) {
      if (classValue.trim().length > 0) {
        if (isAdding) {
          element.classList.add(classValue);
        } else {
          element.classList.remove(classValue);
        }
      }
    });
  };

  _proto.addAttributes = function addAttributes(element, attributes) {
    if (attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute.name, attribute.value);
      });
    }
  };

  _proto.removeAttributes = function removeAttributes(element, attributes) {
    attributes.forEach(function (attribute) {
      element.removeAttribute(attribute);
    });
  };

  _proto.allElementsFromPoint = function allElementsFromPoint(x, y) {
    var element,
        elements = [];
    var old_visibility = [];

    while (true) {
      element = document.elementFromPoint(x, y);

      if (!element || element === document.documentElement) {
        break;
      }

      elements.push(element); // @ts-ignore

      old_visibility.push(element.style.visibility); // @ts-ignore

      element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
    }

    for (var k = 0; k < elements.length; k++) {
      // @ts-ignore
      elements[k].style.visibility = old_visibility[k];
    }

    elements.reverse();
    return elements;
  };

  return BrowserUtil;
}();

var browserUtil = new BrowserUtil();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (browserUtil);

/***/ }),

/***/ "./src/framework/util/EqualityFunctions.ts":
/*!*************************************************!*\
  !*** ./src/framework/util/EqualityFunctions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSame": () => (/* binding */ isSame),
/* harmony export */   "isSameMongo": () => (/* binding */ isSameMongo),
/* harmony export */   "isSameUsername": () => (/* binding */ isSameUsername),
/* harmony export */   "isSameRoom": () => (/* binding */ isSameRoom)
/* harmony export */ });
function isSame(item1, item2) {
  return item1.id === item2.id;
}
function isSameMongo(item1, item2) {
  return item1._id === item2._id;
}
function isSameUsername(item1, item2) {
  return item1.username === item2.username;
}
function isSameRoom(item1, item2) {
  return item1.roomName === item2.roomName;
}

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_feo_react_babel"] = self["webpackChunktemplate_feo_react_babel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map