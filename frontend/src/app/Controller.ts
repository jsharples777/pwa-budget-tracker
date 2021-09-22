import debug from 'debug';
import MemoryBufferStateManager from "../framework/state/MemoryBufferStateManager";
import StateChangeListener from "../framework/state/StateChangeListener";
import {StateManager} from "../framework/state/StateManager";
import AsyncStateManagerWrapper from "../framework/state/AsyncStateManagerWrapper";
import {AggregateStateManager} from "../framework/state/AggregateStateManager";
import {API_Config, STATE_NAMES} from "./AppTypes";
import {RESTApiStateManager} from "../framework/state/RESTApiStateManager";
import {DataObjectDefinition, FieldDefinition, FieldType} from "../framework/model/DataObjectTypeDefs";
import {ObjectDefinitionRegistry} from "../framework/model/ObjectDefinitionRegistry";
import {BasicObjectDefinitionFactory} from "../framework/model/BasicObjectDefinitionFactory";
import {SimpleValueDataSource} from "../framework/ui/helper/SimpleValueDataSource";
import {DataObjectListener} from "../framework/model/DataObjectListener";
import {DataObjectController} from "../framework/model/DataObjectController";
import {isSameMongo} from "../framework/util/EqualityFunctions";
import DownloadManager from "../framework/network/DownloadManager";
import {DefaultValueGenerator} from "../framework/model/DefaultValueGenerator";


const cLogger = debug('controller-ts');
const cLoggerDetail = debug('controller-ts-detail');

export default class Controller implements DataObjectListener {
    private static _instance: Controller;
    protected applicationView: any;
    protected clientSideStorage: any;
    protected config: any;
    // @ts-ignore
    protected stateManager: StateManager;

    private constructor() {
    }

    public static getInstance(): Controller {
        if (!(Controller._instance)) {
            Controller._instance = new Controller();
        }
        return Controller._instance;
    }

    connectToApplication(applicationView: any, clientSideStorage: any) {
        this.applicationView = applicationView;
        this.clientSideStorage = clientSideStorage;
        // setup the API calls
        let restSM = RESTApiStateManager.getInstance();
        restSM.initialise([
            {
                stateName: STATE_NAMES.transactions,
                serverURL: '',
                api: API_Config.transaction,
                isActive: true
            },
        ]);



        let aggregateSM = AggregateStateManager.getInstance();
        let memorySM = MemoryBufferStateManager.getInstance();

        let asyncSM = new AsyncStateManagerWrapper(aggregateSM, restSM);


        aggregateSM.addStateManager(memorySM, [], false);
        aggregateSM.addStateManager(asyncSM, [], false);

        this.stateManager = aggregateSM;

        // data objects
        this.setupDataObjectDefinitions();

        return this;
    }

    /*
        Get the base data for the application (users, entries)
    */
    public onDocumentLoaded(): void {
        cLogger('Initialising data state');

        // load the transactions
        this.getStateManager().getStateByName(STATE_NAMES.transactions);

        // apply any queued changes from being offline
        DownloadManager.getInstance().processOfflineItems();

    }

    public getStateManager(): StateManager {
        return this.stateManager;
    }

    public getListenerName(): string {
        return 'Controller';
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.transactions: {
                cLogger(`Handling create new transaction`);
                cLoggerDetail(dataObj);
                this.stateManager.addNewItemToState(typeName, dataObj, false);
                break;
            }
        }
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.transactions: {
                cLogger(`Handling delete transaction - already managed by stateful collection view`);
                cLoggerDetail(dataObj);
                break;
            }
        }
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
        switch (typeName) {
            case STATE_NAMES.transactions: {
                cLogger(`Handling update transaction`);
                cLoggerDetail(dataObj);
                this.stateManager.updateItemInState(typeName, dataObj, isSameMongo, false);
                break;
            }
        }
    }



    private setupDataObjectDefinitions() {
        // create the object definitions for the exercise type and workout
        let exerciseTypeDefinition: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().addDefinition(STATE_NAMES.transactions, 'Transaction', true, true, false, '_id');
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "name", "Name", FieldType.text, true, "Name");
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "type", "Type", FieldType.limitedChoice, true, "Choose deposit or withdrawal",
            new SimpleValueDataSource([
                {name: 'Deposit', value: 'deposit'},
                {name: 'Withdrawal', value: 'withdrawal'}
            ]));
        BasicObjectDefinitionFactory.getInstance().addStringFieldToObjDefinition(exerciseTypeDefinition, "amount", "Amount", FieldType.money, true, "Amount");
        BasicObjectDefinitionFactory.getInstance().addCreatedDateToDefinition(exerciseTypeDefinition);
        BasicObjectDefinitionFactory.getInstance().setDefaultValueForField(exerciseTypeDefinition, "type",new DefaultValueGenerator('withdrawal'));
        cLogger(exerciseTypeDefinition);
    }


}


