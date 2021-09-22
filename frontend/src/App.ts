//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';
import {ContextualInformationHelper} from "./framework/ui/context/ContextualInformationHelper";
import debug from 'debug';
import Controller from './app/Controller';
import StateChangeListener from "./framework/state/StateChangeListener";
import {ELEMENT, STATE_NAMES} from "./app/AppTypes";
import {TransactionsCompositeView} from "./app/view/TransactionsCompositeView";
import {BudgetSummaryView} from "./app/view/BudgetSummaryView";


//localStorage.debug = 'api-ts state-manager-api';
//localStorage.debug = 'abstract-form abstract-form-detail basic-form basic-form-detail form-detail-view-renderer';

debug.log = console.info.bind(console);


const logger = debug('app');

class BudgetBalance implements StateChangeListener {
    private totalEl:HTMLSpanElement|null = null;

    constructor() {}

    onDocumentLoaded() {
        this.totalEl = document.getElementById(ELEMENT.total);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.transactions,this);
    }

    getListenerName(): string {
        return "Balance";
    }

    stateChanged(managerName: string, name: string, newValue: any): void {
        let balance = 0.0;
        if (this.totalEl && newValue && (newValue.length > 0)) {
            newValue.forEach((value:any) => {
                if (value.type) {
                    switch(value.type) {
                        case 'deposit': {
                            balance += parseFloat(value.amount);
                            break;
                        }
                        case 'withdrawal': {
                            balance -= parseFloat(value.amount);
                            break;
                        }
                    }
                }
            });
            let formatter = new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: 'AUD',

                // These options are needed to round to whole numbers if that's what you want.
                //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
                //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
            });

            this.totalEl.innerHTML = formatter.format(balance);;
        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {
        this.stateChanged(managerName,name,Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.transactions));
    }

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {
        this.stateChanged(managerName,name,Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.transactions));
    }

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {
        this.stateChanged(managerName,name,Controller.getInstance().getStateManager().getStateByName(STATE_NAMES.transactions));
    }

}


export default class App  {

    private static _instance: App;

    // @ts-ignore
    private thisEl: HTMLDivElement | null;


    private constructor() {
        // event handlers
        Controller.getInstance().connectToApplication(this, window.localStorage);
    }

    public static getInstance(): App {
        if (!(App._instance)) {
            App._instance = new App();
        }
        return App._instance;
    }

    onDocumentLoad() {
        logger('document loaded');
        // @ts-ignore
        this.thisEl = document.getElementById('root');

        new TransactionsCompositeView().onDocumentLoaded();
        new BudgetSummaryView().onDocumentLoaded();


        new BudgetBalance().onDocumentLoaded();
        ContextualInformationHelper.getInstance().onDocumentLoaded();
        Controller.getInstance().onDocumentLoaded();



    }




}


$(function () {
    App.getInstance().onDocumentLoad();
});