import { ReactElement, FunctionComponent } from "react";
interface CardComponentPropsType {
    name: string;
    required?: boolean;
    hideKey?: boolean;
    definitionData?: {
        [key: string]: any;
    };
    definitionUi?: {
        [key: string]: any;
    };
    neighborNames?: string[];
    dependents?: {
        children: string[];
        value?: any;
    }[];
    dependent?: boolean;
    parent?: string;
    "ui:options"?: {
        [key: string]: any;
    };
    category?: string;
    schema?: {
        [key: string]: any;
    };
    type?: string;
    "ui:column"?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    "ui:autofocus"?: boolean;
    "ui:placeholder"?: string;
    minItems?: number;
    maxItems?: number;
    title?: string;
    $ref?: string;
    format?: string;
    "ui:autocomplete"?: string;
    default?: string | number | boolean;
    items?: {
        [key: string]: any;
    };
    "ui:*items"?: {
        [key: string]: any;
    };
    multipleOf?: number | null;
    minimum?: number | null;
    exclusiveMinimum?: number | null;
    maximum?: number | null;
    exclusiveMaximum?: number | null;
    enum?: (number | string)[];
    enumNames?: string[] | null;
    description?: string;
}
interface SectionModPropsType {
    name: string;
    schema: {
        [key: string]: any;
    };
    uischema: {
        [key: string]: any;
    };
    reference?: string;
    dependent?: boolean;
    parent?: string;
    parentCardType?: string;
}
type DataType = "string" | "number" | "boolean" | "integer" | "array" | "object" | "null";
interface MatchType {
    types: Array<DataType>;
    widget?: string;
    field?: string;
    format?: string;
    $ref?: boolean;
    enum?: boolean;
}
type CardComponentType = FunctionComponent<{
    parameters: CardComponentPropsType;
    onChange: (newParams: CardComponentPropsType) => void;
    mods?: Mods;
}>;
// an abstract input type
interface FormInputType {
    displayName: string;
    // given a data and ui schema, determine if the object is of this input type
    matchIf: Array<MatchType>;
    // allowed keys for ui:options
    possibleOptions?: Array<string>;
    defaultDataSchema: {
        [key: string]: any;
    };
    defaultUiSchema: {
        [key: string]: any;
    };
    // the data schema type
    type: DataType;
    // inputs on the preview card
    cardBody: CardComponentType;
    // inputs for the modal
    modalBody?: CardComponentType;
}
interface DataOptions {
    title: string;
    type?: string;
    description?: string;
    $ref?: string;
    default?: string | number;
}
interface ModLabels {
    formNameLabel?: string;
    formDescriptionLabel?: string;
    objectNameLabel?: string;
    displayNameLabel?: string;
    descriptionLabel?: string;
    inputTypeLabel?: string;
    addElementLabel?: string;
    addSectionLabel?: string;
}
// optional properties that can add custom features to the form builder
interface Mods {
    customFormInputs?: {
        [key: string]: FormInputType;
    };
    components?: {
        add?: (properties?: {
            [key: string]: any;
        }) => ReactElement | ReactElement[] | [
        ];
        delete?: (properties?: {
            elementType: "card" | "section";
            componentProps?: CardComponentPropsType;
            sectionProps?: SectionModPropsType;
            onDelete?: () => void;
        }) => ReactElement | ReactElement[] | [
        ];
        collapseToggle?: (properties: {
            componentProps?: CardComponentPropsType;
            sectionProps?: SectionModPropsType;
            elementType: "card" | "section";
            isOpen: boolean;
            isDisabled?: boolean;
        }) => ReactElement | ReactElement[] | [
        ];
        title?: (properties?: {
            elementType: "card" | "section";
            defaultTitle: string;
            componentProps?: CardComponentPropsType;
            sectionProps?: SectionModPropsType;
            isOpen: boolean;
        }) => ReactElement | ReactElement[] | [
        ];
    };
    tooltipDescriptions?: {
        add?: string;
        cardObjectName?: string;
        cardDisplayName?: string;
        cardDescription?: string;
        cardInputType?: string;
        cardSectionObjectName?: string;
        cardSectionDisplayName?: string;
        cardSectionDescription?: string;
    };
    labels?: ModLabels;
    showFormHead?: boolean;
    deactivatedFormInputs?: Array<string>;
    newElementDefaultDataOptions?: DataOptions;
    newElementDefaultUiSchema?: {
        [key: string]: any;
    };
    disableInputs?: (parameters: {
        componentProps: CardComponentPropsType;
    }) => boolean;
}
interface InitParameters {
    categoryHash?: {
        [key: string]: string;
    };
}
interface AddFormObjectParametersType {
    schema: {
        [key: string]: any;
    };
    uischema: {
        [key: string]: any;
    };
    mods?: Mods;
    onChange: (schema: {
        [key: string]: any;
    }, uischema: {
        [key: string]: any;
    }) => any;
    definitionData: {
        [key: string]: any;
    };
    definitionUi: {
        [key: string]: any;
    };
    index?: number;
    categoryHash: {
        [key: string]: string;
    };
}
declare function FormBuilder({ schema, uischema, onMount, onChange, mods, className }: {
    schema: string;
    uischema: string;
    onMount?: (parameters: InitParameters) => any;
    onChange: (schema: string, uischema: string) => any;
    mods?: Mods;
    className?: string;
}): ReactElement;
declare function PredefinedGallery({ schema, uischema, onChange, mods }: {
    schema: string;
    uischema: string;
    onChange: (schema: string, uischema: string) => any;
    mods?: Mods;
}): ReactElement;
// given an initial schema, update with a new card appended
declare function addCardObj(parameters: AddFormObjectParametersType): void;
// given an initial schema, update with a new section appended
declare function addSectionObj(parameters: AddFormObjectParametersType): void;
export { FormBuilder, PredefinedGallery, addCardObj, addSectionObj };
