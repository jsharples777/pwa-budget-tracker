import debug from 'debug';
import moment from "moment";
import Chart from "chart.js/auto";
import {CollectionViewRenderer} from "../../framework/ui/view/interface/CollectionViewRenderer";
import {CollectionViewEventHandler} from "../../framework/ui/view/interface/CollectionViewEventHandler";
import {CollectionView} from "../../framework/ui/view/interface/CollectionView";

const avLogger = debug('budget-summary-renderer');

export class BudgetSummaryRenderer implements CollectionViewRenderer {
    protected view: CollectionView;
    protected eventHandler: CollectionViewEventHandler;
    private currentChart: Chart | null = null;

    constructor(view: CollectionView, eventHandler: CollectionViewEventHandler) {
        this.view = view;
        this.eventHandler = eventHandler;
    }

    public createDisplayElementForCollectionItem(collectionName: string, item: any): HTMLElement {
        return document.createElement('a');
    }

    public setDisplayElementsForCollectionInContainer(containerEl: HTMLElement, collectionName: string, transactions: any): void {
        avLogger(`view ${this.view.getName()}: creating budget summary`);
        avLogger(transactions);

        if (this.currentChart) this.currentChart.destroy();

        // copy array and reverse it
        let sum = 0;

        // create date labels for chart
        let labels = transactions.map(t => {
            return moment(t.createdOn,'YYYYMMDDHHmmss').format('DD/MM/YYYY');
        });

        // create incremental values for chart
        let data = transactions.map(t => {
            if (t.type === 'deposit') {
                sum += parseFloat(t.amount);
            }
            else {
                sum -= parseFloat(t.amount);
            }
            return sum;
        });


        this.currentChart = new Chart(<HTMLCanvasElement>containerEl, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: "Total Over Time",
                    fill: true,
                    backgroundColor: "#6666ff",
                    data
                }]
            }
        });
    }

    onDocumentLoaded(): void {
    }


}