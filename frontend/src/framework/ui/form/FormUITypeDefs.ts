import {Attribute, BasicButtonElement, BasicElement} from "../ConfigurationTypes";
import {FieldDefinition} from "../../model/DataObjectTypeDefs";
import {FieldValueOptions} from "../../model/CommonTypes";

export type ValidationResponse = {
    isValid: boolean,
    message?: string,
    resetOnFailure: boolean
}

export interface FieldValidator {  // is the current value valid (includes manndatory checks)
    isValidValue(field: FieldDefinition, currentValue: string | null): ValidationResponse;

    setSubElements(elements: HTMLInputElement[]): void;
}

export interface FieldFormatter { // final value for the field on "saving" the form
    formatValue(field: FieldDefinition, currentValue: string): any;

    setSubElements(elements: HTMLInputElement[]): void;
}

export interface FieldRenderer { // renders during user changes
    renderValue(field: FieldDefinition, currentValue: string): string | null;

    setSubElements(elements: HTMLInputElement[]): void;
}

export interface FieldEditor { // allows for an "editor" component
    editValue(field: FieldDefinition, currentValue: string): string;
}

export interface ConditionalField { // a field may not be visible based on other field values
    shouldBeVisible(field: FieldDefinition, formValues: string[]): boolean;
}

export enum UIFieldType {
    checkbox,
    email,
    hidden,
    number,
    password,
    text,
    textarea,
    select,
    radioGroup
}

export type FieldLabel = {
    label: string,
    attributes?: Attribute[],
    classes?: string
}

export type DescriptionText = {
    message: string,
    elementType: string,
    elementClasses: string,
}

export type DisplayOrder = {
    fieldId: string,
    displayOrder: number
}

export type FieldUIConfig = {
    field: FieldDefinition,
    displayOrder: number,
    elementType: UIFieldType,
    elementAttributes?: Attribute[],
    elementClasses?: string,
    subElement?: {
        container?: BasicElement,
        label?: FieldLabel,
        element: BasicElement,
    },// for radio and selection options
    label?: FieldLabel,
    describedBy?: DescriptionText,
    containedBy?: BasicElement,
    textarea?: {
        rows: number,
        cols: number
    },
    validator?: {
        validator: FieldValidator, // on blur
        messageDisplay: BasicElement,
        validClasses?: string,
        invalidClasses?: string,
    }
    renderer?: FieldRenderer, // on change
    editor?: FieldEditor, // on focus
    formatter?: FieldFormatter // used by form when saving
    conditionalDisplay?: ConditionalField // used to determine if the is visible
    datasource?: FieldValueOptions
}

export type FieldGroup = {
    containedBy?: BasicElement,
    fields: FieldUIConfig[]
}

export type FormUIDefinition = {
    id: string,
    displayName: string,
    classes?: string,
    unsavedChanges: BasicElement,
    fieldGroups: FieldGroup[],
    buttonsContainedBy?: BasicElement
    deleteButton?: BasicButtonElement,// should be clickable
    cancelButton: BasicButtonElement,// should be clickable
    submitButton: BasicButtonElement  // should be clickable
    activeSave?: string
}

export enum FormMode {
    unset = -1,
    create,
    update
}

export type AttributeFieldMapItem = {
    fieldId: string,
    attributeId: string
}

export const DATA_ID_ATTRIBUTE: string = 'data-id';













