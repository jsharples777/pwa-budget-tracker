import {FieldDefinition, FieldValueGenerator} from "./DataObjectTypeDefs";

export class DefaultValueGenerator implements FieldValueGenerator{
    private defaultValue: string;

    constructor(defaultValue:string) {
        this.defaultValue = defaultValue;
    }

    generate(field: FieldDefinition, isCreate: boolean): string {
        let result = '';
        if (isCreate) {
            result = this.defaultValue;
        }
        return result;
    }

}