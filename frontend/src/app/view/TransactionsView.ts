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
import {ContextualInformationHelper} from "../../framework/ui/context/ContextualInformationHelper";

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
            inactive: '',
            active: 'list-group-item-primary',
            warning: 'list-group-item-warning'
        },
        icons: {
            normal: '',
            inactive: '',
            active: '',
            warning: '',
        },
        detail: {
            containerClasses: 'd-flex w-100 justify-content-between',
            textElementType: 'div',
            textElementClasses: 'container-fluid transaction-text',
            select: false,
            delete: {
                buttonClasses:'btn bg-danger text-white btn-circle btn-sm',
                buttonText:'',
                iconClasses: 'fas fa-trash-alt'
            }
        },
    };


    constructor(stateManager: StateManager) {
        super(TransactionsView.DOMConfig, stateManager, STATE_NAMES.transactions);
        this.renderer = new ListViewRendererUsingContext(this, this);
        this.eventHandlerDelegate = new CollectionViewEventHandlerDelegateUsingContext(this, <CollectionViewListenerForwarder>this.eventForwarder);
        this.getIdForItemInNamedCollection = this.getIdForItemInNamedCollection.bind(this);
        this.getItemId = this.getItemId.bind(this);
        ContextualInformationHelper.getInstance().addContextFromView(this,STATE_NAMES.transactions,'Exercise Types');
    }


    getItemDescription(from: string, item: any): string {
        logger(item);
        let buffer = '';
        const dateDisplay = moment(item.createdOn,'YYYYMMDDHHmmss').format('DD/MM/YY HH:mm');
        buffer += `<strong>${dateDisplay}</strong> - ${item.name}:`;
        if (item.type === 'deposit') {
            buffer += '+';
        } else {
            buffer += '-';
        }
        let formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'AUD',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        buffer += formatter.format(parseFloat(item.amount));
        return buffer;
    }

    getModifierForItemInNamedCollection(name: string, item: any): Modifier {
        if (item.type === 'deposit') {
           return Modifier.active;
        } else {
           return Modifier.warning;
        }
        return Modifier.normal;
    }


    canDeleteItem(view: View, selectedItem: any): boolean {
        return true;
    }

    compareItemsForEquality(item1: any, item2: any): boolean {
        return isSameMongo(item1, item2);
    }

    getIdForItemInNamedCollection(name: string, item: any) {
        return item._id;
    }

    renderDisplayForItemInNamedCollection(containerEl: HTMLElement, name: string, item: any): void {
        let buffer = '';
        const dateDisplay = moment(item.createdOn,'YYYYMMDDHHmmss').format('DD/MM/YY HH:mm');
        buffer += `<div class="row"><div class="col-md-12 col-lg-6"><strong>${dateDisplay}</strong> - ${item.name}</div><div class="col-md-12 col-lg text-right">`;
        if (item.type === 'deposit') {
            buffer += '+';
        } else {
            buffer += '-';
        }
        let formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'AUD',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        buffer += formatter.format(parseFloat(item.amount)) + '</div></div>';
        containerEl.innerHTML = buffer;
    }

    hasPermissionToDeleteItemInNamedCollection(name: string, item: any): boolean {
        return true;
    }

    hasPermissionToUpdateItemInNamedCollection(name: string, item: any): boolean {
        return false;
    }

    itemAction(view: View, actionName: string, selectedItem: any) {}


}

