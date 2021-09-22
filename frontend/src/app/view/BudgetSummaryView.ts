import AbstractStatefulCollectionView from "../../framework/ui/view/implementation/AbstractStatefulCollectionView";
import {CollectionViewDOMConfig, KeyType} from "../../framework/ui/ConfigurationTypes";
import {STATE_NAMES, VIEW_NAME} from "../AppTypes";
import Controller from "../Controller";
import {isSameMongo} from "../../framework/util/EqualityFunctions";
import {CollectionViewListener} from "../../framework/ui/view/interface/CollectionViewListener";
import {View} from "../../framework/ui/view/interface/View";

import {BudgetSummaryRenderer} from "../renderer/BudgetSummaryRenderer";


export class BudgetSummaryView extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: VIEW_NAME.budgetSummary,
            dataSourceId: VIEW_NAME.budgetSummary,
        },
        resultsElementType: 'canvas',
        resultsClasses: '',
        keyId: '_id',
        keyType: KeyType.string,
        detail: {
            containerClasses: '',
            textElementType: '',
            textElementClasses: '',
            select: false,
        },
    }


    constructor() {
        super(BudgetSummaryView.DOMConfig, Controller.getInstance().getStateManager(), STATE_NAMES.transactions);
        this.renderer = new BudgetSummaryRenderer(this, this);
    }

    canDeleteItem(view: View, selectedItem: any): boolean {
        return false;
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }


    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        return false;
    }

    hasPermissionToActionItemInNamedCollection(actionName: string, name: string, item: any): boolean {
        return false;
    }

    renderBackgroundForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any) {
    }

}

