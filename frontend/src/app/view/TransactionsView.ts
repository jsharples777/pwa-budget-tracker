import AbstractStatefulCollectionView from "../../framework/ui/view/implementation/AbstractStatefulCollectionView";
import {CollectionViewDOMConfig, KeyType, Modifier} from "../../framework/ui/ConfigurationTypes";
import {STATE_NAMES, VIEW_NAME} from "../AppTypes";
import {isSameMongo} from "../../framework/util/EqualityFunctions";
import {CollectionViewListener} from "../../framework/ui/view/interface/CollectionViewListener";
import {View} from "../../framework/ui/view/interface/View";

import debug from 'debug';
import {StateManager} from "../../framework/state/StateManager";
import {ListViewRendererUsingContext} from "../../framework/ui/view/renderer/ListViewRendererUsingContext";
import {CollectionViewEventHandlerDelegateUsingContext} from "../../framework/ui/view/delegate/CollectionViewEventHandlerDelegateUsingContext";
import {CollectionViewListenerForwarder} from "../../framework/ui/view/delegate/CollectionViewListenerForwarder";
import moment from "moment";

const logger = debug('transactions-view');

export class TransactionsView extends AbstractStatefulCollectionView implements CollectionViewListener {

    private static DOMConfig: CollectionViewDOMConfig = {
        viewConfig: {
            resultsContainerId: 'transactions',
            dataSourceId: VIEW_NAME.transactions,
        },
        resultsElementType: 'a',
        resultsElementAttributes: [{name: 'href', value: '#'}],
        resultsClasses: 'list-group-item my-list-item truncate-notification list-group-item-action',
        keyId: '_id',
        keyType: KeyType.string,
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
            select: false,
        },
    };


    constructor(stateManager: StateManager) {
        super(TransactionsView.DOMConfig, stateManager, STATE_NAMES.transactions);
        this.renderer = new ListViewRendererUsingContext(this, this);
        this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);
        this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
        this.getItemId = this.getItemId.bind(this);
    }


    getItemDescription(from: string, item: any): string {
        logger(item);
        let buffer = '';
        const dateDisplay = moment(item.createdOn,'YYYYMMDDHHmmss').format('DD/MM/YY HH:mm');
        buffer += `<strong>${dateDisplay}</strong>: `;
        if (item.type === 'deposit') {
            buffer += '+';
        } else {
            buffer += '-';
        }
        buffer += `${item.amount}`;
        return buffer;
    }

    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        if (item.type === 'deposit') {
           return Modifier.active;
        } else {
           return Modifier.inactive;
        }
        return Modifier.normal;
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
        containerEl.innerHTML = this.getItemDescription(name,item);
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        return false;
    }

    hasPermissionToUpdateItemInNamedCollection(name: string, item: any): boolean {
        return false;
    }

    itemAction(view: View, actionName: string, selectedItem: any) {}


}

