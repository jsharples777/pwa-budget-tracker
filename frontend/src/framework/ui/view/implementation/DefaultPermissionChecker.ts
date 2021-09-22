import {ObjectPermissionChecker} from "../interface/ObjectPermissionChecker";

export class DefaultPermissionChecker implements ObjectPermissionChecker {
    private canDelete: boolean;
    private canUpdate: boolean;

    constructor(canUpdate:boolean, canDelete:boolean) {
        this.canUpdate = canUpdate;
        this.canDelete = canDelete;
    }

    hasPermissionToUpdateItem(item: any): boolean {
        return this.canUpdate;
    }

    hasPermissionToDeleteItem(item: any): boolean {
        return this.canDelete;
    }
}