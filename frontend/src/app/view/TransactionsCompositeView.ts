import {DataObjectDefinition} from "../../framework/model/DataObjectTypeDefs";
import {ObjectDefinitionRegistry} from "../../framework/model/ObjectDefinitionRegistry";
import {BUTTON, STATE_NAMES, VIEW_CONTAINER, VIEW_NAME} from "../AppTypes";
import {FormDetailViewRenderer} from "../../framework/ui/view/renderer/FormDetailViewRenderer";
import {DetailView} from "../../framework/ui/view/interface/DetailView";
import {DetailViewImplementation} from "../../framework/ui/view/implementation/DetailViewImplementation";
import {LinkedCollectionDetailController} from "../../framework/ui/helper/LinkedCollectionDetailController";
import {BasicObjectDefinitionFactory} from "../../framework/model/BasicObjectDefinitionFactory";
import Controller from "../Controller";
import debug from "debug";
import {TransactionsView} from "./TransactionsView";
import {DefaultPermissionChecker} from "../../framework/ui/view/implementation/DefaultPermissionChecker";
import {Form} from "../../framework/ui/form/Form";

const logger = debug('transactions-composite-view');

export class TransactionsCompositeView {

    constructor() {
    }

    onDocumentLoaded() {
        const transactionsView = new TransactionsView(Controller.getInstance().getStateManager());

        const transactionDef: DataObjectDefinition | null = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.transactions);

        if (transactionDef) {
            let transactionDetailViewRenderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.transactionDetail, transactionDef, new DefaultPermissionChecker(false,false));

            let transactionDetailView: DetailView = new DetailViewImplementation(
                {
                    resultsContainerId: VIEW_CONTAINER.transactionDetail,
                    dataSourceId: VIEW_NAME.transactions
                }, transactionDetailViewRenderer);
            let viewLinker: LinkedCollectionDetailController = new LinkedCollectionDetailController(STATE_NAMES.transactions, transactionsView);
            viewLinker.addLinkedDetailView(transactionDetailView);

            transactionsView.onDocumentLoaded();
            transactionDetailView.onDocumentLoaded();


            let startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(transactionDef);
            transactionDetailView.initialise(startingDisplayOrder, false, true);

            const detailForm: Form | null = transactionDetailViewRenderer.getForm();
            console.log(detailForm);


            // setup the event handling for the create new exercise type button
            let addTransactionButton = <HTMLButtonElement>document.getElementById(BUTTON.createNew);
            logger(`Setting up button for creating transactions`);
            if (addTransactionButton) {
                addTransactionButton.addEventListener('click', (event) => {
                    logger(`Asking view linker to start a new object`);
                    viewLinker.startNewObject();
                });

            }

            viewLinker.addListener(Controller.getInstance());
        }
    }






}