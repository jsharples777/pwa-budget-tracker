import {stateEventType, stateValue} from "./StateManager";
import {equalityFunction} from "../util/EqualityFunctions";
import {jsonRequest, RequestType} from "../network/Types";
import DownloadManager from "../network/DownloadManager";
import debug from 'debug';
import AsynchronousStateManager from "./AsynchronousStateManager";
import StateChangedDelegate from "./StateChangedDelegate";
import {StateChangeInformer} from "./StateChangeInformer";
import StateChangeListener from "./StateChangeListener";
import {CallbackRegistry} from "../network/CallbackRegistry";


const logger = debug('state-manager-api');

type ApiConfig = {
    stateName: string,
    serverURL: string,
    api: string
    isActive: boolean,
    idField?: string

}

export class RESTApiStateManager implements AsynchronousStateManager {
    private static _instance: RESTApiStateManager;
    private static FUNCTION_ID_ADD_ITEM = 'rest.api.state.manager.add.item';
    private static FUNCTION_ID_REMOVE_ITEM = 'rest.api.state.manager.remove.item';
    private static FUNCTION_ID_UPDATE_ITEM = 'rest.api.state.manager.update.item';
    private static FUNCTION_ID_GET_ITEMS = 'rest.api.state.manager.get.items';
    protected configuration: ApiConfig[] = [];
    protected bHasCompletedRun: boolean[];
    protected delegate: StateChangeInformer;

    protected constructor() {
        this.delegate = new StateChangedDelegate('restapi');
        this.emitEvents();
        this.bHasCompletedRun = [];


        this.callbackForAddItem = this.callbackForAddItem.bind(this);
        this.callbackForRemoveItem = this.callbackForRemoveItem.bind(this);
        this.callbackForUpdateItem = this.callbackForUpdateItem.bind(this);
        this.callbackForGetItems = this.callbackForGetItems.bind(this);

        CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_ADD_ITEM, this.callbackForAddItem);
        CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM, this.callbackForRemoveItem);
        CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM, this.callbackForUpdateItem);
        CallbackRegistry.getInstance().addRegisterCallback(RESTApiStateManager.FUNCTION_ID_GET_ITEMS, this.callbackForGetItems);

    }

    public static getInstance() {
        if (!(RESTApiStateManager._instance)) {
            RESTApiStateManager._instance = new RESTApiStateManager();
        }
        return RESTApiStateManager._instance;
    }

    getConfiguredStateNames(): string[] {
        let results: string[] = [];
        this.configuration.forEach((config) => {
            results.push(config.stateName);
        });
        return results;
    }

    hasCompletedRun(stateName: string): boolean {
        let result = false;
        let foundIndex = this.configuration.findIndex((config) => config.stateName === stateName);
        if (foundIndex >= 0) {
            result = this.bHasCompletedRun[foundIndex];
        }
        return result;
    }

    setCompletedRun(stateName: string): void {
        let foundIndex = this.configuration.findIndex((config) => config.stateName === stateName);
        if (foundIndex >= 0) {
            this.bHasCompletedRun[foundIndex] = true;
        }
    }

    forceResetForGet(stateName: string): void {
        let foundIndex = this.configuration.findIndex((config) => config.stateName === stateName);
        if (foundIndex >= 0) {
            this.bHasCompletedRun[foundIndex] = false;
        }
    }

    public initialise(config: ApiConfig[]) {
        this.configuration = config;
        let runsComplete: boolean[] = [];
        this.configuration.forEach((configItem) => {
            runsComplete.push(false);
        });
        this.bHasCompletedRun = runsComplete;
    }

    _addNewNamedStateToStorage(state: stateValue): void { /* assume model on the other end exists */
    }

    _getState(name: string): stateValue {
        logger(`Getting All ${name}`);
        if (this.hasCompletedRun(name)) {
            logger(`Getting All ${name} - not done - previously retrieved`);
        } else {
            let config: ApiConfig = this.getConfigurationForStateName(name);
            if (config.isActive) {
                const jsonRequest: jsonRequest = {
                    url: config.serverURL + config.api,
                    type: RequestType.GET,
                    params: {},
                    callbackId: RESTApiStateManager.FUNCTION_ID_GET_ITEMS,
                    associatedStateName: name
                };
                DownloadManager.getInstance().addApiRequest(jsonRequest, true);

            } else {
                logger(`No configuration for state ${name}`);
            }
        }
        let state: stateValue = {name: name, value: []};
        return state;
    }

    _ensureStatePresent(name: string): void { /* assume state exists */
    }

    _replaceNamedStateInStorage(state: stateValue): void { /* not going to replace all state */
    }

    _saveState(name: string, stateObj: any): void { /* not going to replace all state */
    }

    _addItemToState(name: string, stateObj: any, isPersisted: boolean = false): void {
        if (isPersisted) return; // dont add complete objects to the state - they are already processed
        logger(`Adding item to ${name}`);
        logger(stateObj);
        let config: ApiConfig = this.getConfigurationForStateName(name);
        if (config.isActive) {
            const jsonRequest: jsonRequest = {
                url: config.serverURL + config.api,
                type: RequestType.POST,
                params: stateObj,
                callbackId: RESTApiStateManager.FUNCTION_ID_ADD_ITEM,
                associatedStateName: name
            };
            DownloadManager.getInstance().addApiRequest(jsonRequest, true);

        } else {
            logger(`No configuration for state ${name}`);
        }
    }

    _removeItemFromState(name: string, stateObj: any, testForEqualityFunction: equalityFunction, isPersisted: boolean): void {
        if (isPersisted) return; // dont remove complete objects to the state - they are already processed
        logger(`Removing item from ${name}`);
        logger(stateObj);
        let config: ApiConfig = this.getConfigurationForStateName(name);
        let identifier = stateObj.id;
        if (config.idField) {
            identifier = stateObj[config.idField];
        }

        if (config.isActive) {
            const jsonRequest: jsonRequest = {
                url: config.serverURL + config.api,
                type: RequestType.DELETE,
                params: {
                    id: identifier
                },
                callbackId: RESTApiStateManager.FUNCTION_ID_REMOVE_ITEM,
                associatedStateName: name
            };
            DownloadManager.getInstance().addApiRequest(jsonRequest, true);

        } else {
            logger(`No configuration for state ${name}`);
        }
    }

    _updateItemInState(name: string, stateObj: any, testForEqualityFunction: equalityFunction, isPersisted: boolean): void {
        if (isPersisted) return; // dont update complete objects to the state - they are already processed
        logger(`Updating item in ${name}`);
        logger(stateObj);
        let config: ApiConfig = this.getConfigurationForStateName(name);
        if (config.isActive) {
            const jsonRequest: jsonRequest = {
                url: config.serverURL + config.api,
                type: RequestType.PUT,
                params: stateObj,
                callbackId: RESTApiStateManager.FUNCTION_ID_UPDATE_ITEM,
                associatedStateName: name
            };
            DownloadManager.getInstance().addApiRequest(jsonRequest, true);

        } else {
            logger(`No configuration for state ${name}`);
        }
    }

    addChangeListenerForName(name: string, listener: StateChangeListener): void {
        this.delegate.addChangeListenerForName(name, listener);
    }

    addNewItemToState(name: string, item: any, isPersisted: boolean): void {
        this._addItemToState(name, item, isPersisted);
    }

    emitEvents(): void {
        this.delegate.emitEvents();
    }

    findItemInState(name: string, item: any, testForEqualityFunction: equalityFunction): any {
        throw Error("not implemented");
    }

    getStateByName(name: string): any {
        this._getState(name);
    }

    informChangeListenersForStateWithName(name: string, stateObjValue: any, eventType: stateEventType, previousObjValue: any): void {
        this.delegate.informChangeListenersForStateWithName(name, stateObjValue, eventType, previousObjValue);
    }

    isItemInState(name: string, item: any, testForEqualityFunction: equalityFunction): boolean {
        return true;
    }

    removeItemFromState(name: string, item: any, testForEqualityFunction: equalityFunction, isPersisted: boolean): boolean {
        logger(`Removing item from state ${name} is persisted ${isPersisted}`);
        logger(item);
        this._removeItemFromState(name, item, testForEqualityFunction, isPersisted);
        return true;
    }

    setStateByName(name: string, stateObjectForName: any, informListeners: boolean): void {
    }

    suppressEvents(): void {
        this.delegate.suppressEvents();
    }

    updateItemInState(name: string, item: any, testForEqualityFunction: equalityFunction, isPersisted: boolean): boolean {
        this._updateItemInState(name, item, testForEqualityFunction, isPersisted);
        return true;
    }

    protected getConfigurationForStateName(name: string) {
        let config: ApiConfig = {
            stateName: name,
            serverURL: '',
            api: '',
            isActive: false
        }
        let foundIndex = this.configuration.findIndex((config) => config.stateName === name);
        if (foundIndex >= 0) {
            config = this.configuration[foundIndex];
        }
        return config;
    }

    private callbackForRemoveItem(data: any, status: number, associatedStateName: string) {
        logger(`callback for remove item for state ${associatedStateName} with status ${status} - not forwarded`);
        if (status >= 200 && status <= 299) { // do we have any data?
            logger(data);
        }
    }

    private callbackForUpdateItem(data: any, status: number, associatedStateName: string) {
        logger(`callback for update item for state ${associatedStateName} with status ${status} - not forwarded`);
        if (status >= 200 && status <= 299) { // do we have any data?
            logger(data);
        }
    }

    private callbackForGetItems(data: any, status: number, associatedStateName: string) {
        logger(`callback for get items for state ${associatedStateName} with status ${status} - FORWARDING`);
        if (status >= 200 && status <= 299) { // do we have any data?
            logger(data);
            this.setCompletedRun(associatedStateName);
            this.delegate.informChangeListenersForStateWithName(associatedStateName, data, stateEventType.StateChanged, null);
        }
    }

    private callbackForAddItem(data: any, status: number, associatedStateName: string, wasOffline?: boolean) {
        logger(`callback for add item for state ${associatedStateName} with status ${status} - FORWARDING`);
        if (status >= 200 && status <= 299) { // do we have any data?
            logger(data);
            if (!wasOffline) {
                this.delegate.informChangeListenersForStateWithName(associatedStateName, data, stateEventType.ItemAdded, null);
            } else {
                logger('Item was added offline, update the current data');
                this.delegate.informChangeListenersForStateWithName(associatedStateName, data, stateEventType.ItemUpdated, null);
            }

        }
        // did the call fail? (server loss)
        if (status === 500) {
            logger(`Item adding - offline, but will be queued later`);
            this.delegate.informChangeListenersForStateWithName(associatedStateName, data, stateEventType.ItemAdded, null);
        }
    }
}