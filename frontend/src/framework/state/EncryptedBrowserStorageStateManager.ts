import debug from 'debug';
import {stateValue} from "./StateManager";
import AsynchronousStateManager from "./AsynchronousStateManager";
import BrowserStorageStateManager from "./BrowserStorageStateManager";
import {SecurityManager} from "../security/SecurityManager";

const lsLogger = debug('browser-storage-encrypted');

export default class EncryptedBrowserStorageStateManager extends BrowserStorageStateManager implements AsynchronousStateManager {
    private static _myInstance: EncryptedBrowserStorageStateManager;

    public constructor(useLocalStorage: boolean = false) {
        super(useLocalStorage, true);
        this._addNewNamedStateToStorage = this._addNewNamedStateToStorage.bind(this);
    }

    public static getInstance(useLocalStorage: boolean = false) {
        if (!(EncryptedBrowserStorageStateManager._myInstance)) {
            EncryptedBrowserStorageStateManager._myInstance = new EncryptedBrowserStorageStateManager(useLocalStorage);
        }
        return EncryptedBrowserStorageStateManager._myInstance;
    }


    public _addNewNamedStateToStorage(state: stateValue): void {
        lsLogger(`Saving with key ${state.name}`);
        lsLogger(state);
        const stringifiedSaveData: string = SecurityManager.getInstance().encryptObject(state.value);
        lsLogger(stringifiedSaveData);
        const userStateName = SecurityManager.getInstance().getLoggedInUsername().trim() + '.' + state.name;
        this.storage.setItem(userStateName, stringifiedSaveData);
    }

    public _getState(name: string): stateValue {
        let savedResults = [];
        lsLogger(`Loading with key ${name}`);
        const userStateName = SecurityManager.getInstance().getLoggedInUsername().trim() + '.' + name;
        const savedResultsJSON = this.storage.getItem(userStateName);
        if (savedResultsJSON !== null) {
            savedResults = SecurityManager.getInstance().decryptObject(savedResultsJSON);
            lsLogger(`Loading with key ${name} decrypted to `);
            lsLogger(`Loading with key ${name} decrypted to `);
            lsLogger(savedResults);
        }
        return {name: name, value: savedResults};
    }


}
