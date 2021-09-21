//localStorage.debug = 'linked-controller api-ts exercise-types-view app controller-ts controller-ts-detail api-ts socket-ts user-search user-search-detail list-view-renderer';
//localStorage.debug = 'collection-view-ts collection-view-ts-detail form-detail-view-renderer linked-controller linked-controller-detail exercise-types-view app validation-manager-rule-failure validation-manager';
//localStorage.debug = 'validation-manager validation-manager-rule-failure abstract-form-detail-validation';
import {ContextualInformationHelper} from "./framework/ui/context/ContextualInformationHelper";
import debug from 'debug';
import Controller from './app/Controller';
import {API_Config, NAVIGATION, STATE_NAMES} from "./app/AppTypes";
import {ExerciseTypesCompositeView} from "./app/view/ExerciseTypesCompositeView";
import WorkoutSummarySidebar from "./app/sidebar/WorkoutSummarySidebar";
import {WorkoutSummaryView} from "./app/view/WorkoutSummaryView";
import CurrentWorkoutSidebar from "./app/sidebar/CurrentWorkoutSidebar";
import {CurrentWorkoutCompositeView} from "./app/view/CurrentWorkoutCompositeView";
import {WorkoutsViewUsingContext} from "./app/view/WorkoutsViewUsingContext";


localStorage.debug = 'context-helper';

debug.log = console.info.bind(console);


const logger = debug('app');

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

    getCurrentUser() {
        return Controller.getInstance().getLoggedInUserId();
    }

    onDocumentLoad() {
        logger('document loaded');
        // @ts-ignore
        this.thisEl = document.getElementById('root');


        ContextualInformationHelper.getInstance().onDocumentLoaded();
        Controller.getInstance().onDocumentLoaded();

    }



}


$(function () {
    App.getInstance().onDocumentLoad();
});