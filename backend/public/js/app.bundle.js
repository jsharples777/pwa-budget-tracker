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
//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';



localStorage.debug = 'context-helper';
(debug__WEBPACK_IMPORTED_MODULE_1___default().log) = console.info.bind(console);
var logger = debug__WEBPACK_IMPORTED_MODULE_1___default()('app');

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

  var _proto = App.prototype;

  _proto.getCurrentUser = function getCurrentUser() {
    return _app_Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUserId();
  };

  _proto.onDocumentLoad = function onDocumentLoad() {
    logger('document loaded'); // @ts-ignore

    this.thisEl = document.getElementById('root');
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
/* harmony export */   "Decorator": () => (/* binding */ Decorator),
/* harmony export */   "STATE_NAMES": () => (/* binding */ STATE_NAMES),
/* harmony export */   "API_Config": () => (/* binding */ API_Config),
/* harmony export */   "NAVIGATION": () => (/* binding */ NAVIGATION),
/* harmony export */   "DRAGGABLE": () => (/* binding */ DRAGGABLE),
/* harmony export */   "VIEW_NAME": () => (/* binding */ VIEW_NAME),
/* harmony export */   "VIEW_CONTAINER": () => (/* binding */ VIEW_CONTAINER),
/* harmony export */   "BUTTON": () => (/* binding */ BUTTON),
/* harmony export */   "INPUT": () => (/* binding */ INPUT)
/* harmony export */ });
var Decorator;

(function (Decorator) {
  Decorator[Decorator["Incomplete"] = 0] = "Incomplete";
  Decorator[Decorator["Complete"] = 1] = "Complete";
  Decorator[Decorator["Persisted"] = 2] = "Persisted";
  Decorator[Decorator["PersistedLocally"] = 3] = "PersistedLocally";
})(Decorator || (Decorator = {}));

var STATE_NAMES = {
  users: 'user',
  chatLogs: 'chatLog',
  exerciseTypes: 'exerciseType',
  workouts: 'workout',
  recentUserSearches: 'recentUserSearch'
};
var API_Config = {
  login: '/login',
  users: '/api/users',
  exerciseTypes: '/api/exercise-types',
  workouts: '/api/workouts'
};
var NAVIGATION = {
  showMyWorkouts: 'navigationItemMyWorkouts',
  userSearchId: 'navigationItemUserSearch',
  exerciseTypesId: 'navigationItemExerciseTypes',
  chatId: 'navigationItemChat',
  workoutSummary: 'navigationItemWorkoutSummary',
  currentWorkout: 'navigationItemCurrentWorkout',
  logout: 'navigationItemLogout'
};
var DRAGGABLE = {
  typeUser: 'user',
  typeExerciseType: 'exerciseType',
  fromUserSearch: 'userSearch',
  fromFavourites: 'favourites',
  fromExerciseTypes: 'exerciseTypes'
};
var VIEW_NAME = {
  blockedUsers: 'blockedUsers',
  chatLog: 'chatLog',
  chatLogs: 'chatLogs',
  favouriteUsers: 'favouriteUsers',
  exerciseTypes: 'exerciseTypes',
  userSearch: 'userSearch',
  workouts: 'workouts',
  workoutSummary: 'workoutSummary',
  exercises: 'exercises'
};
var VIEW_CONTAINER = {
  exerciseTypeDetail: "exerciseTypeDetail",
  currentWorkoutDetail: 'workoutDetail',
  exerciseDropZone: 'exerciseDropZone'
};
var BUTTON = {
  createNewExerciseType: 'addNewExerciseType',
  completeWorkout: 'completeWorkout'
};
var INPUT = {
  workoutName: 'workoutName'
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/SocketManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/state/AsyncStateManagerWrapper */ "./src/framework/state/AsyncStateManagerWrapper.ts");
/* harmony import */ var _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/state/AggregateStateManager */ "./src/framework/state/AggregateStateManager.ts");
/* harmony import */ var _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocketListenerDelegate */ "./src/app/SocketListenerDelegate.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/ChatManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/NotificationController'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");
/* harmony import */ var _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../framework/state/RESTApiStateManager */ "./src/framework/state/RESTApiStateManager.ts");
/* harmony import */ var _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/model/DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../framework/model/ObjectDefinitionRegistry */ "./src/framework/model/ObjectDefinitionRegistry.ts");
/* harmony import */ var _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../framework/model/BasicObjectDefinitionFactory */ "./src/framework/model/BasicObjectDefinitionFactory.ts");
/* harmony import */ var _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../framework/ui/helper/SimpleValueDataSource */ "./src/framework/ui/helper/SimpleValueDataSource.ts");
/* harmony import */ var _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../framework/ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");
/* harmony import */ var _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../framework/util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../framework/network/DownloadManager */ "./src/framework/network/DownloadManager.ts");
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

    var restSM = _framework_state_RESTApiStateManager__WEBPACK_IMPORTED_MODULE_7__.RESTApiStateManager.getInstance();
    restSM.initialise([{
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.API_Config.users,
      isActive: true
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.API_Config.exerciseTypes,
      isActive: true,
      idField: '_id'
    }, {
      stateName: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.workouts,
      serverURL: '',
      api: _AppTypes__WEBPACK_IMPORTED_MODULE_6__.API_Config.workouts,
      isActive: true,
      idField: '_id'
    }]); // let indexSM = new EncryptedIndexedDBStateManager();
    // indexSM.initialise('fitness-tracker',[
    //     {
    //         name: STATE_NAMES.exerciseTypes,
    //         keyField: "_id"
    //     },
    //     {
    //         name: STATE_NAMES.workouts,
    //         keyField: "_id"
    //     },
    // ]);

    var aggregateSM = _framework_state_AggregateStateManager__WEBPACK_IMPORTED_MODULE_4__.AggregateStateManager.getInstance();
    var memorySM = _framework_state_MemoryBufferStateManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
    var asyncSM = new _framework_state_AsyncStateManagerWrapper__WEBPACK_IMPORTED_MODULE_3__["default"](aggregateSM, restSM); // let asyncIndexSM = new AsyncStateManagerWrapper(aggregateSM, indexSM);
    //
    //

    aggregateSM.addStateManager(memorySM, [], false); // aggregateSM.addStateManager(asyncIndexSM, [STATE_NAMES.users], false);
    // aggregateSM.addStateManager(asyncSM, [STATE_NAMES.exerciseTypes,STATE_NAMES.workouts], false);

    aggregateSM.addStateManager(asyncSM, [], false);
    this.stateManager = aggregateSM; //this.stateManager = EncryptedBrowserStorageStateManager.getInstance(true);
    // state listener

    this.stateChanged = this.stateChanged.bind(this);
    this.stateChangedItemAdded = this.stateChangedItemAdded.bind(this);
    this.stateChangedItemRemoved = this.stateChangedItemRemoved.bind(this);
    this.stateChangedItemUpdated = this.stateChangedItemUpdated.bind(this); // data objects

    this.setupDataObjectDefinitions();
    return this;
  }
  /*
      Get the base data for the application (users, entries)
  */
  ;

  _proto.onDocumentLoaded = function onDocumentLoaded() {
    cLogger('Initialising data state'); // listen for socket events

    var socketListerDelegate = new _SocketListenerDelegate__WEBPACK_IMPORTED_MODULE_5__["default"]();
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/SocketManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().setListener(socketListerDelegate); // now that we have all the user we can setup the chat system but only if we are logged in

    cLogger("Setting up chat system for user " + this.getLoggedInUserId() + ": " + this.getLoggedInUsername());

    if (this.getLoggedInUserId().trim().length > 0) {
      // setup the chat system
      var chatManager = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/ChatManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(); // this connects the manager to the socket system
      // setup the chat notification system

      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../framework/socket/NotificationController'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
      chatManager.setCurrentUser(this.getLoggedInUsername()); // let the application view know about message counts

      chatManager.setUnreadCountListener(this.applicationView);
      chatManager.login(); // load the users

      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.users);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes);
      this.getStateManager().getStateByName(_AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.workouts); // apply any queued changes from being offline

      _framework_network_DownloadManager__WEBPACK_IMPORTED_MODULE_14__["default"].getInstance().processOfflineItems();
    }
  };

  _proto.getStateManager = function getStateManager() {
    return this.stateManager;
  };

  _proto.getListenerName = function getListenerName() {
    return 'Controller';
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

    cLoggerDetail("Logged in user id is " + result);
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

    cLoggerDetail("Logged in user is " + result);
    return result;
  };

  _proto.handleMessage = function handleMessage(message) {
    cLogger(message);
  };

  _proto.getCurrentUser = function getCurrentUser() {
    return this.getLoggedInUserId();
  };

  _proto.stateChangedItemAdded = function stateChangedItemAdded(managerName, name, itemAdded) {};

  _proto.stateChangedItemRemoved = function stateChangedItemRemoved(managerName, name, itemRemoved) {};

  _proto.stateChangedItemUpdated = function stateChangedItemUpdated(managerName, name, itemUpdated, itemNewValue) {};

  _proto.stateChanged = function stateChanged(managerName, name, values) {};

  _proto.handleShowChat = function handleShowChat(roomName) {
    this.applicationView.handleShowChat(roomName);
  };

  _proto.create = function create(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes:
        {
          cLogger("Handling create new exercise type");
          cLoggerDetail(dataObj);
          this.stateManager.addNewItemToState(typeName, dataObj, false);
          break;
        }
    }
  };

  _proto.delete = function _delete(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes:
        {
          cLogger("Handling delete exercise type - already managed by stateful collection view");
          cLoggerDetail(dataObj);
          break;
        }
    }
  };

  _proto.update = function update(controller, typeName, dataObj) {
    switch (typeName) {
      case _AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes:
        {
          cLogger("Handling update exercise type");
          cLoggerDetail(dataObj);
          this.stateManager.updateItemInState(typeName, dataObj, _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_13__.isSameMongo, false);
          break;
        }
    }
  };

  _proto.addExerciseToCurrentWorkout = function addExerciseToCurrentWorkout(exerciseType) {
    var copyOfExercise = _extends({}, exerciseType);

    copyOfExercise._id = (0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])(); // update the id to be unique for the workout

    this.applicationView.addingExerciseToCurrentWorkout(copyOfExercise);
  };

  _proto.addWorkoutExercisesToCurrentWorkout = function addWorkoutExercisesToCurrentWorkout(workout) {
    var _this = this;

    if (workout.exercises) {
      workout.exercises.forEach(function (exercise) {
        _this.addExerciseToCurrentWorkout(exercise);
      });
    }
  };

  _proto.setupDataObjectDefinitions = function setupDataObjectDefinitions() {
    // create the object definitions for the exercise type and workout
    var exerciseTypeDefinition = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_9__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.exerciseTypes, 'Exercise', true, true, true, '_id');
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.text, true, "Exercise name");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.limitedChoice, true, "Choose cardio or strength", new _framework_ui_helper_SimpleValueDataSource__WEBPACK_IMPORTED_MODULE_11__.SimpleValueDataSource([{
      name: 'Cardio',
      value: 'cardio'
    }, {
      name: 'Strength',
      value: 'strength'
    }]));
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "duration", "Duration", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.duration, true, "Exercise time");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "sets", "Sets", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.integer, false, "Number of sets");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "reps", "Repetitions", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.integer, false, "Number of reps");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "weight", "Weight", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.float, false, "Weight used");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "distance", "Distance", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.float, false, "Distance travelled");
    cLogger("Exercise type data object definition");
    cLogger(exerciseTypeDefinition);
    cLoggerDetail(_framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_9__.ObjectDefinitionRegistry.getInstance().findDefinition('exerciseType'));
    var workoutDefinition = _framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_9__.ObjectDefinitionRegistry.getInstance().addDefinition(_AppTypes__WEBPACK_IMPORTED_MODULE_6__.STATE_NAMES.workouts, 'Workout', true, true, true, '_id');
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "name", "Name", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.text, false, "Give the workout a name");
    _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "completed", "Completed", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.boolean, true, "Have completed the workout");
    var exercisesFieldDefinition = _framework_model_BasicObjectDefinitionFactory__WEBPACK_IMPORTED_MODULE_10__.BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(workoutDefinition, "exercises", "Exercises", _framework_model_DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_8__.FieldType.collection, true, "Exercises in this workout");
    exercisesFieldDefinition.idType = _framework_ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_12__.KeyType.collection;
    exercisesFieldDefinition.collectionOfDataObjectId = exerciseTypeDefinition.id;
    cLogger("Workout data object definition");
    cLogger(workoutDefinition);
    cLoggerDetail(_framework_model_ObjectDefinitionRegistry__WEBPACK_IMPORTED_MODULE_9__.ObjectDefinitionRegistry.getInstance().findDefinition('workout'));
  }
  /*
  *
  * Simple Application state (URL, logged in user)
  *
   */
  ;

  _proto.getServerAPIURL = function getServerAPIURL() {
    var result = ""; // @ts-ignore

    if (window.ENV && window.ENV.serverURL) {
      // @ts-ignore
      result = window.ENV.serverURL;
    }

    return result;
  };

  return Controller;
}();



/***/ }),

/***/ "./src/app/SocketListenerDelegate.ts":
/*!*******************************************!*\
  !*** ./src/app/SocketListenerDelegate.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocketListenerDelegate)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/notification/NotificationManager */ "./src/framework/notification/NotificationManager.ts");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ "./src/app/Controller.ts");
/* harmony import */ var _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/util/EqualityFunctions */ "./src/framework/util/EqualityFunctions.ts");
/* harmony import */ var _AppTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppTypes */ "./src/app/AppTypes.ts");





var slLogger = debug__WEBPACK_IMPORTED_MODULE_0___default()('socket-listener');

var SocketListenerDelegate = /*#__PURE__*/function () {
  function SocketListenerDelegate() {}

  var _proto = SocketListenerDelegate.prototype;

  _proto.handleDataChangedByAnotherUser = function handleDataChangedByAnotherUser(message) {
    slLogger("Handling data change " + message.type + " on object type " + message.stateName + " made by user " + message.user);
    var changeUser = _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().findItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.users, {
      _id: message.user
    }, _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo);
    var username = "unknown";

    if (changeUser) {
      username = changeUser.username;
    }

    slLogger("Handling data change " + message.type + " on object type " + message.stateName + " made by user " + username);
    var stateObj = message.data;
    slLogger(stateObj); // ok lets work out where this change belongs

    try {
      switch (message.type) {
        case "create":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.users:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.users, stateObj, true);
                  _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().show(stateObj.username, stateObj.username + " has just registered.", _framework_notification_NotificationManager__WEBPACK_IMPORTED_MODULE_1__.NotificationType.info);
                  break;
                }

              case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().addNewItemToState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes, stateObj, true);
                  break;
                }
            }

            break;
          }

        case "update":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().updateItemInState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes, stateObj, _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo, true);
                  break;
                }
            }

            break;
          }

        case "delete":
          {
            switch (message.stateName) {
              case _AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes:
                {
                  _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getStateManager().removeItemFromState(_AppTypes__WEBPACK_IMPORTED_MODULE_4__.STATE_NAMES.exerciseTypes, stateObj, _framework_util_EqualityFunctions__WEBPACK_IMPORTED_MODULE_3__.isSameMongo, true);
                  break;
                }
            }

            break;
          }
      }
    } catch (err) {
      slLogger(err);
    }
  };

  _proto.handleMessage = function handleMessage(message) {
    slLogger("Received message: " + message);
  };

  _proto.getCurrentUser = function getCurrentUser() {
    return _Controller__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().getLoggedInUserId();
  };

  return SocketListenerDelegate;
}();



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
/* harmony import */ var _app_Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/Controller */ "./src/app/Controller.ts");
/* harmony import */ var _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataObjectTypeDefs */ "./src/framework/model/DataObjectTypeDefs.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ConfigurationTypes */ "./src/framework/ui/ConfigurationTypes.ts");






var flogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('basic-field-operations-formatter');
var vlogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('basic-field-operations-validator');
var glogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('basic-field-operations-generator');
var rlogger = debug__WEBPACK_IMPORTED_MODULE_3___default()('basic-field-operations-renderer');
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
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY').format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
        {
          //convert to underlying number format
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'DD/MM/YYYY HH:mm:ss').format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
        {
          result = currentValue.toLowerCase() === 'true';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.id:
        {
          if (field.idType === _ui_ConfigurationTypes__WEBPACK_IMPORTED_MODULE_4__.KeyType.number) {
            result = parseInt(currentValue);
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float:
        {
          var parsed = parseFloat(currentValue);

          if (!isNaN(parsed)) {
            result = parsed;
          }

          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer:
        {
          var _parsed = parseFloat(currentValue);

          if (!isNaN(_parsed)) {
            result = _parsed;
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


      if (field.type === _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean) {
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
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
          {
            response.isValid = BasicFieldOperations.dateTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be DD/MM/YYYY hh:mm";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
          {
            response.isValid = BasicFieldOperations.dateRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be DD/MM/YYYY";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float:
          {
            response.isValid = BasicFieldOperations.floatRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 00.00";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.id:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an integer";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.email:
          {
            response.isValid = BasicFieldOperations.emailRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an email address";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer:
          {
            response.isValid = BasicFieldOperations.integerRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be an integer";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.text:
          {
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.password:
          {
            response.isValid = BasicFieldOperations.basicPasswordRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 8 to 15 letters and digits only";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
          {
            response.isValid = BasicFieldOperations.timeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 24 hour time format HH:MM:SS";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
          {
            response.isValid = BasicFieldOperations.shortTimeRegex.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be 24 hour time format HH:MM";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.duration:
          {
            response.isValid = BasicFieldOperations.durationRegexp.test(currentValue);

            if (!response.isValid) {
              response.message = field.displayName + " must be in the format MM:SS or 999:MM:SS";
            }

            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
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
        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
          {
            newValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(currentValue, 'YYYYMMDD').format('DD/MM/YYYY');
            break;
          }

        case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
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
      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDDHHmmss');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.date:
        {
          result = moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDD');
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.float:
        {
          result = '0.0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.id:
        {
          result = '-1';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.email:
        {
          result = 'me@me.com';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.integer:
        {
          result = '0';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.text:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.password:
        {
          result = '';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.time:
        {
          result = '00:00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.shortTime:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.duration:
        {
          result = '00:00';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
        {
          result = 'false';
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.uuid:
        {
          result = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
          break;
        }

      case _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.userId:
        {
          result = "" + _app_Controller__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getLoggedInUsername();
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

  _proto.addModifiedDateToArray = function addModifiedDateToArray(fields) {
    var fieldDef = this.addStringFieldToArray(fields, FIELD_ModifiedOn, FIELD_ModifiedOn_Desc, _DataObjectTypeDefs__WEBPACK_IMPORTED_MODULE_2__.FieldType.datetime, true, FIELD_ModifiedOn_Desc); // add generator

    fieldDef.generator = {
      generator: new _BasicFieldOperations__WEBPACK_IMPORTED_MODULE_1__.BasicFieldOperations(),
      onCreation: true,
      onModify: true
    };
    fieldDef.displayOnly = true;
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

  return BasicObjectDefinitionFactory;
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