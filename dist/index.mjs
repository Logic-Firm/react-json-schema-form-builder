import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Collapse as Collapse$1, UncontrolledTooltip, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, FormFeedback, Popover, PopoverHeader, PopoverBody, Alert } from 'reactstrap';
import { createUseStyles } from 'react-jss';
import { faCaretDown, faCaretRight, faAsterisk, faQuestionCircle, faTimes, faPlus, faPlusSquare, faArrowUp, faArrowDown, faClose, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { FontAwesomeIcon as FontAwesomeIcon$1 } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

const useStyles$c = createUseStyles({
    checkbox: {
        '& *': {
            display: 'inline-block',
        },
        '& input': {
            marginRight: '5px',
        },
    },
});
const FBCheckbox = ({ onChangeValue, value = '', isChecked = false, label = '', use = 'action', disabled = false, id = '', dataTest = '', labelClassName = '', }) => {
    const classjss = useStyles$c();
    const classes = classnames('fb-checkbox', {
        'edit-checkbox': !disabled && use === 'edit',
        'action-checkbox': !disabled && use === 'action',
        'disabled-checked-checkbox': disabled && isChecked,
        'disabled-unchecked-checkbox': disabled && !isChecked,
    });
    const potentialCheckboxId = id !== '' ? id : label;
    const checkboxId = potentialCheckboxId !== '' ? potentialCheckboxId : undefined;
    return (React.createElement("div", { "data-test": 'checkbox', className: `${classes} ${classjss.checkbox}` },
        React.createElement("input", { type: 'checkbox', id: checkboxId, "data-test": dataTest || undefined, onChange: (event) => {
                if (!disabled) {
                    onChangeValue(event);
                }
            }, value: value, disabled: disabled, checked: isChecked }),
        React.createElement("div", { className: 'checkbox-overlay' }, label && (React.createElement("label", { htmlFor: checkboxId, className: labelClassName || undefined }, label)))));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const FontAwesomeIcon = (_a) => {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    const props = Object.assign({ className: classnames([className, 'fa']) }, otherProps);
    return React.createElement(FontAwesomeIcon$1, Object.assign({}, props));
};

const useStyles$b = createUseStyles({
    collapseWrapper: {
        display: 'flex',
        alignItems: 'stretch',
        '& .toggle-collapse': {
            fontSize: '2.3rem',
            cursor: 'pointer',
            marginLeft: '8px',
            display: 'flex',
            alignItems: 'center',
            '& .fa-caret-right': {
                marginRight: '9px',
            },
        },
        '&.disabled .toggle-collapse': {
            cursor: 'default',
        },
    },
    collapseElement: {
        flex: 1,
        '& h4': { marginTop: '7px', padding: '13px 10px 10px 10px' },
        '& .header-actions': {
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '10px',
        },
    },
});
const Collapse = (props) => {
    const styles = useStyles$b();
    const collapseClasses = classnames(`collapse-element ${props.className || ''} ${styles.collapseElement}`);
    const wrapperClasses = classnames(`collapse-wrapper ${styles.collapseWrapper}`, {
        disabled: props.disableToggle,
    });
    return (React.createElement("div", { className: collapseClasses },
        React.createElement("div", { className: wrapperClasses },
            React.createElement("div", { className: 'd-flex' },
                React.createElement("h4", null, props.title),
                React.createElement("span", { className: 'header-actions' }, props.headerActions)),
            React.createElement("span", { className: 'toggle-collapse', onClick: (event) => {
                    if (!props.disableToggle && !event.defaultPrevented) {
                        props.toggleCollapse(event);
                    }
                } }, props.toggleElement || (React.createElement(FontAwesomeIcon, { icon: props.isOpen ? faCaretDown : faCaretRight })))),
        React.createElement(Collapse$1, { isOpen: props.isOpen },
            React.createElement("div", null, props.children)),
        props.alwaysVisibleChildren ? React.createElement("div", null, props.alwaysVisibleChildren) : ''));
};

function FBRadioButton(props) {
    const { label, value, checked, name, onChange, required, disabled, autoFocus, } = props;
    const [id] = useState(`radio-${Math.floor(Math.random() * 1000000)}`);
    const classes = classnames('fb-radio-button', { disabled });
    return (React.createElement("div", { className: classes, key: value },
        React.createElement("input", { id: id, type: 'radio', name: name, value: value, checked: checked, required: required, disabled: disabled, autoFocus: autoFocus, onChange: () => onChange(value) }),
        React.createElement("label", { htmlFor: id }, label)));
}

const useStyles$a = createUseStyles({
    radio: {
        '& .fb-radio-button': {
            display: 'block',
            '& input[type="radio"]': {
                marginRight: '5px',
                marginBottom: 0,
                height: '1em',
                verticalAlign: 'middle',
            },
            '& input[type="radio"] + label': {
                marginTop: 0,
                marginBottom: 0,
                verticalAlign: 'middle',
            },
        },
    },
});
function FBRadioGroup(props) {
    const { options, defaultValue, onChange, horizontal, id, autoFocus, disabled, } = props;
    const name = Math.random().toString();
    const classjss = useStyles$a();
    const classes = classnames('fb-radio-group', {
        horizontal,
    });
    // Conditionallly add 'id' prop in case id was not passed in from parent.
    let elementId = {};
    if (id) {
        elementId = { id };
    }
    return (React.createElement("div", Object.assign({}, elementId, { className: `${classes} ${classjss.radio}` }), options.map((option, index) => (React.createElement(FBRadioButton, Object.assign({ value: option.value, label: option.label }, elementId, { name: name, key: option.value, checked: option.value === defaultValue, autoFocus: autoFocus && index === 1, onChange: onChange, disabled: disabled }))))));
}

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
const typeMap = {
    alert: faAsterisk,
    help: faQuestionCircle,
};
const useStyles$9 = createUseStyles({
    toolTip: {
        color: 'white',
        'background-color': 'black',
    },
});
function Example({ text, type, id, }) {
    const classes = useStyles$9();
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { style: { textDecoration: 'underline', color: 'blue' }, id: id },
            React.createElement(FontAwesomeIcon, { icon: typeMap[type] })),
        React.createElement(UncontrolledTooltip, { autohide: false, className: classes.toolTip, placement: 'top', target: id }, text)));
}

// parse in either YAML or JSON
function parse(text) {
    if (!text)
        return {};
    return JSON.parse(text);
}
// stringify in either YAML or JSON
function stringify(obj) {
    if (!obj)
        return '{}';
    return JSON.stringify(obj);
}
function defaultDataProps(category, allFormInputs) {
    return allFormInputs[category]
        .defaultDataSchema;
}
function defaultUiProps(category, allFormInputs) {
    return allFormInputs[category]
        .defaultUiSchema;
}
function categoryType(category, allFormInputs) {
    return allFormInputs[category].type;
}
function getCardBody(category, allFormInputs) {
    return ((allFormInputs[category] && allFormInputs[category].cardBody) ||
        (() => null));
}
function categoryToNameMap(allFormInputs) {
    const categoryNameMap = {};
    Object.keys(allFormInputs).forEach((inputName) => {
        categoryNameMap[inputName] = allFormInputs[inputName].displayName;
    });
    return categoryNameMap;
}
function updateElementNames(elementArray) {
    const elementNames = elementArray.map((elem) => elem.name);
    return elementArray.map((elem) => {
        const newElem = elem;
        newElem.neighborNames = elementNames;
        return newElem;
    });
}
function generateCategoryHash(allFormInputs) {
    const categoryHash = {};
    Object.keys(allFormInputs).forEach((categoryName) => {
        const formInput = allFormInputs[categoryName];
        formInput.matchIf.forEach((match) => {
            match.types.forEach((type) => {
                const hash = `type:${type === 'null' ? '' : type};widget:${match.widget || ''};field:${match.field || ''};format:${match.format || ''};$ref:${match.$ref ? 'true' : 'false'};enum:${match.enum ? 'true' : 'false'}`;
                if (categoryHash[hash]) {
                    throw new Error(`Duplicate hash: ${hash}`);
                }
                categoryHash[hash] = categoryName;
            });
        });
    });
    return categoryHash;
}
// determines a card's category based on it's properties
// mostly useful for reading a schema for the first time
function getCardCategory(cardProps, categoryHash) {
    const currentHash = `type:${cardProps.dataOptions.type || ''};widget:${cardProps.uiOptions['ui:widget'] || ''};field:${cardProps.uiOptions['ui:field'] || ''};format:${cardProps.dataOptions.format || ''};$ref:${cardProps.$ref !== undefined ? 'true' : 'false'};enum:${cardProps.dataOptions.enum ? 'true' : 'false'}`;
    const category = categoryHash[currentHash];
    if (!category) {
        if (cardProps.$ref)
            return 'ref';
        // eslint-disable-next-line no-console
        console.error(`No match for card': ${currentHash} among set`);
        return 'shortAnswer';
    }
    return category;
}
// check for unsupported feature in schema and uischema
const supportedPropertyParameters = new Set([
    'title',
    'description',
    'enum',
    'minLength',
    'maxLength',
    'multipleOf',
    'minimum',
    'maximum',
    'format',
    'exclusiveMinimum',
    'exclusiveMaximum',
    'type',
    'default',
    'pattern',
    'required',
    'properties',
    'items',
    'definitions',
    '$ref',
    'minItems',
    'maxItems',
    'enumNames',
    'dependencies',
    '$id',
    '$schema',
    'meta',
    'additionalProperties',
]);
const supportedUiParameters = new Set([
    'ui:order',
    'ui:widget',
    'ui:autofocus',
    'ui:autocomplete',
    'ui:options',
    'ui:field',
    'ui:placeholder',
    'ui:column',
    'items',
    'definitions',
]);
// recursively called function to check an object for unsupported features
function checkObjectForUnsupportedFeatures(schema, uischema, supportedWidgets, supportedFields, supportedOptions) {
    // add each unsupported feature to this array
    const unsupportedFeatures = [];
    // check for unsupported whole object features
    if (schema && typeof schema === 'object') {
        Object.keys(schema).forEach((property) => {
            if (!supportedPropertyParameters.has(property) &&
                property !== 'properties') {
                unsupportedFeatures.push(`Unrecognized Object Property: ${property}`);
            }
        });
    }
    if (uischema && typeof uischema === 'object') {
        Object.keys(uischema).forEach((uiProperty) => {
            let propDefined = false;
            // search for the property in the schema properties and dependencies
            if (schema.properties &&
                Object.keys(schema.properties).includes(uiProperty)) {
                propDefined = true;
            }
            if (schema.dependencies) {
                Object.keys(schema.dependencies).forEach((dependencyKey) => {
                    Object.keys(schema.dependencies[dependencyKey]).forEach((parameter) => {
                        if (parameter === 'oneOf') {
                            schema.dependencies[dependencyKey].oneOf.forEach((grouping) => {
                                if (grouping.properties) {
                                    if (Object.keys(grouping.properties).includes(uiProperty)) {
                                        propDefined = true;
                                    }
                                }
                            });
                        }
                        else if (parameter === 'properties') {
                            if (Object.keys(schema.dependencies[dependencyKey].properties).includes(uiProperty)) {
                                propDefined = true;
                            }
                        }
                    });
                });
            }
            if (!propDefined && !supportedUiParameters.has(uiProperty)) {
                unsupportedFeatures.push(`Unrecognized UI schema property: ${uiProperty}`);
            }
        });
    }
    // check for unsupported property parameters
    if (schema.properties) {
        Object.entries(schema.properties).forEach(([parameter, element]) => {
            if (element &&
                typeof element === 'object' &&
                element.type &&
                element.type !== 'object') {
                // make sure that the type is valid
                if (!['array', 'string', 'integer', 'number', 'boolean'].includes(element.type)) {
                    unsupportedFeatures.push(`Unrecognized type: ${element.type} in ${parameter}`);
                }
                // check the properties of each property if it is a basic object
                Object.keys(element).forEach((key) => {
                    if (!supportedPropertyParameters.has(key)) {
                        unsupportedFeatures.push(`Property Parameter: ${key} in ${parameter}`);
                    }
                });
            }
            else {
                // check the properties of each property if it is a basic object
                Object.keys(element).forEach((key) => {
                    if (!supportedPropertyParameters.has(key)) {
                        unsupportedFeatures.push(`Property Parameter: ${key} in ${parameter}`);
                    }
                });
            }
            // check for unsupported UI components
            if (uischema &&
                uischema[parameter] &&
                element &&
                (!element.type || element.type !== 'object')) {
                // check for unsupported ui properties
                Object.keys(uischema[parameter]).forEach((uiProp) => {
                    if (!supportedUiParameters.has(uiProp)) {
                        unsupportedFeatures.push(`UI Property: ${uiProp} for ${parameter}`);
                    }
                    // check for unsupported ui widgets
                    if (uiProp === 'ui:widget' &&
                        !supportedWidgets.has(uischema[parameter][uiProp])) {
                        unsupportedFeatures.push(`UI Widget: ${uischema[parameter][uiProp]} for ${parameter}`);
                    }
                    // check for unsupported ui fields
                    if (uiProp === 'ui:field' &&
                        !supportedFields.has(uischema[parameter][uiProp])) {
                        unsupportedFeatures.push(`UI Field: ${uischema[parameter][uiProp]} for ${parameter}`);
                    }
                    // check unsupported ui option
                    if (uiProp === 'ui:options') {
                        Object.keys(uischema[parameter]['ui:options']).forEach((uiOption) => {
                            if (!supportedOptions.has(uiOption)) {
                                unsupportedFeatures.push(`UI Property: ui:options.${uiOption} for ${parameter}`);
                            }
                        });
                    }
                });
            }
        });
    }
    return unsupportedFeatures;
}
// parent function that checks for unsupported features in an entire document
function checkForUnsupportedFeatures(schema, uischema, allFormInputs) {
    // add each unsupported feature to this array
    const unsupportedFeatures = [];
    const widgets = [];
    const fields = [];
    const options = [];
    Object.keys(allFormInputs).forEach((inputType) => {
        allFormInputs[inputType].matchIf.forEach((match) => {
            if (match.widget && !widgets.includes(match.widget)) {
                widgets.push(match.widget);
            }
            if (match.field && !fields.includes(match.field)) {
                fields.push(match.field);
            }
        });
        if (allFormInputs[inputType].possibleOptions &&
            Array.isArray(allFormInputs[inputType].possibleOptions)) {
            options.push(...allFormInputs[inputType].possibleOptions);
        }
    });
    const supportedWidgets = new Set(widgets);
    const supportedFields = new Set(fields);
    const supportedOptions = new Set(options);
    // check for unsupported whole form features
    if (schema && typeof schema === 'object' && schema.type === 'object') {
        unsupportedFeatures.push(...checkObjectForUnsupportedFeatures(schema, uischema, supportedWidgets, supportedFields, supportedOptions));
    }
    else {
        unsupportedFeatures.push('jsonSchema form is not of type object');
    }
    return unsupportedFeatures;
}
// make an element out of the corresponding properties and UI properties
function generateDependencyElement(name, dataProps, uiProperties, requiredNames, categoryHash, definitionData, definitionUi, useDefinitionDetails = true) {
    let uiProps = Object.assign({}, uiProperties);
    const newElement = {};
    let elementDetails = dataProps && typeof dataProps === 'object' ? dataProps : {};
    // populate newElement with reference if applicable
    if (elementDetails.$ref !== undefined && definitionData) {
        const pathArr = typeof elementDetails.$ref === 'string'
            ? elementDetails.$ref.split('/')
            : [];
        if (pathArr[0] === '#' &&
            pathArr[1] === 'definitions' &&
            definitionData[pathArr[2]] &&
            useDefinitionDetails === true) {
            elementDetails = Object.assign(Object.assign({}, elementDetails), definitionData[pathArr[2]]);
        }
        const definedUiProps = (definitionUi || {})[pathArr[2]];
        uiProps = Object.assign(Object.assign({}, (definedUiProps || {})), uiProps);
    }
    newElement.name = name;
    newElement.required = requiredNames.includes(name);
    newElement.$ref =
        typeof elementDetails.$ref === 'string' ? elementDetails.$ref : undefined;
    if (elementDetails.type && elementDetails.type === 'object') {
        // create a section
        newElement.schema = elementDetails;
        newElement.uischema = uiProps || {};
        newElement.propType = 'section';
    }
    else {
        // create a card
        newElement.dataOptions = elementDetails;
        newElement.uiOptions = uiProps || {};
        // ensure that uiOptions does not have duplicate keys with dataOptions
        const reservedKeys = Object.keys(newElement.dataOptions);
        Object.keys(newElement.uiOptions).forEach((uiKey) => {
            if (reservedKeys.includes(uiKey)) {
                newElement.uiOptions[`ui:*${uiKey}`] = newElement.uiOptions[uiKey];
            }
        });
        newElement.dataOptions.category = getCardCategory(newElement, categoryHash);
        newElement.propType = 'card';
    }
    return newElement;
}
// generate an array of element objects from a schema and uischema
function generateElementPropsFromSchemas(parameters) {
    const { schema, uischema, definitionData, definitionUi, categoryHash } = parameters;
    if (!schema.properties)
        return [];
    const elementDict = {};
    const requiredNames = schema.required ? schema.required : [];
    // read regular elements from properties
    Object.entries(schema.properties).forEach(([parameter, element]) => {
        const newElement = {};
        let elementDetails = element && typeof element === 'object' ? element : {};
        // populate newElement with reference if applicable
        if ((elementDetails === null || elementDetails === void 0 ? void 0 : elementDetails.$ref) !== undefined && definitionData) {
            if (elementDetails.$ref &&
                !elementDetails.$ref.startsWith('#/definitions')) {
                throw new Error(`Invalid definition, not at '#/definitions': ${elementDetails.$ref}`);
            }
            const pathArr = elementDetails.$ref !== undefined ? elementDetails.$ref.split('/') : [];
            if (pathArr[0] === '#' &&
                pathArr[1] === 'definitions' &&
                definitionData[pathArr[2]]) {
                elementDetails = Object.assign(Object.assign({}, definitionData[pathArr[2]]), elementDetails);
            }
            const definedUiProps = (definitionUi || {})[pathArr[2]];
            uischema[parameter] = Object.assign(Object.assign({}, (definedUiProps || {})), uischema[parameter]);
        }
        newElement.name = parameter;
        newElement.required = requiredNames.includes(parameter);
        newElement.$ref = elementDetails.$ref;
        newElement.dataOptions = elementDetails;
        if (elementDetails.type && elementDetails.type === 'object') {
            // create a section
            newElement.schema = elementDetails;
            newElement.uischema = uischema[parameter] || {};
            newElement.propType = 'section';
        }
        else {
            // create a card
            newElement.uiOptions = uischema[parameter] || {};
            // ensure that uiOptions does not have duplicate keys with dataOptions
            const reservedKeys = Object.keys(newElement.dataOptions);
            Object.keys(newElement.uiOptions).forEach((uiKey) => {
                if (reservedKeys.includes(uiKey)) {
                    newElement.uiOptions[`ui:*${uiKey}`] = newElement.uiOptions[uiKey];
                }
            });
            newElement.dataOptions.category = getCardCategory(newElement, categoryHash);
            newElement.propType = 'card';
        }
        elementDict[newElement.name] = newElement;
    });
    // read dependent elements from dependencies
    if (schema.dependencies) {
        const useDefinitionDetails = false;
        Object.keys(schema.dependencies).forEach((parent) => {
            const group = schema.dependencies[parent];
            if (group.oneOf) {
                let possibilityIndex = 0;
                group.oneOf.forEach((possibility) => {
                    if (!(elementDict[parent] || {}).dependents) {
                        elementDict[parent] = elementDict[parent] || {};
                        elementDict[parent].dependents = [];
                    }
                    elementDict[parent].dependents.push({
                        children: [],
                        value: possibility.properties[parent],
                    });
                    const requiredValues = possibility.required || [];
                    Object.entries(possibility.properties).forEach(([parameter, element]) => {
                        // create a new element if not present in main properties
                        if (!elementDict[parameter] ||
                            (parameter !== parent &&
                                Object.keys(elementDict[parameter]).length === 1 &&
                                elementDict[parameter].dependents)) {
                            const newElement = generateDependencyElement(parameter, element, uischema[parameter], requiredNames, categoryHash, definitionData, definitionUi, useDefinitionDetails);
                            if (elementDict[parameter] &&
                                elementDict[parameter].dependents) {
                                newElement.dependents = elementDict[parameter].dependents;
                            }
                            newElement.required = requiredValues.includes(newElement.name);
                            elementDict[newElement.name] = newElement;
                        }
                        if (parameter !== parent) {
                            const newElement = elementDict[parameter];
                            newElement.dependent = true;
                            newElement.parent = parent;
                            elementDict[parent].dependents[possibilityIndex].children.push(parameter);
                        }
                    });
                    possibilityIndex += 1;
                });
            }
            else if (group.properties) {
                const requiredValues = group.required || [];
                Object.entries(group.properties).forEach(([parameter, element]) => {
                    const newElement = generateDependencyElement(parameter, element, uischema[parameter], requiredNames, categoryHash, definitionData, definitionUi, useDefinitionDetails);
                    newElement.required = requiredValues.includes(newElement.name);
                    newElement.dependent = true;
                    newElement.parent = parent;
                    elementDict[newElement.name] = newElement;
                    if (elementDict[parent]) {
                        if (elementDict[parent].dependents) {
                            elementDict[parent].dependents[0].children.push(parameter);
                        }
                        else {
                            elementDict[parent].dependents = [{ children: [parameter] }];
                        }
                    }
                    else {
                        elementDict[parent] = {};
                        elementDict[parent].dependents = [{ children: [parameter] }];
                    }
                });
            }
            else {
                // eslint-disable-next-line no-console
                console.error('unsupported dependency type encountered');
            }
        });
    }
    // now reorder in accordance with ui:order if defined
    const cardPropList = [];
    if (uischema['ui:order']) {
        // in case there are any options not in ui:order
        const remainder = [];
        Object.keys(elementDict).forEach((name) => {
            if (!uischema['ui:order'].includes(name))
                remainder.push(elementDict[name]);
        });
        // map ui order elements into the right order
        uischema['ui:order'].forEach((name) => {
            // if contains the wildcard *, insert remainder cards there
            if (name === '*') {
                remainder.forEach((remCard) => {
                    cardPropList.push(remCard);
                });
            }
            else if (elementDict[name]) {
                cardPropList.push(elementDict[name]);
            }
        });
    }
    else {
        Object.keys(elementDict).forEach((name) => {
            cardPropList.push(elementDict[name]);
        });
    }
    updateElementNames(cardPropList);
    return cardPropList;
}
// determine the number of element objects from schema and uischema
function countElementsFromSchema(schemaData) {
    if (!schemaData.properties)
        return 0;
    const elementDict = {};
    let elementCount = 0;
    // read regular elements from properties
    Object.entries(schemaData.properties).forEach(([parameter]) => {
        elementDict[parameter] = {};
        elementCount += 1;
    });
    // read dependent elements from dependencies
    if (schemaData.dependencies) {
        Object.keys(schemaData.dependencies).forEach((parent) => {
            const group = schemaData.dependencies[parent];
            if (group.oneOf) {
                let possibilityIndex = 0;
                group.oneOf.forEach((possibility) => {
                    if (!(elementDict[parent] || {}).dependents) {
                        elementDict[parent] = elementDict[parent] || {};
                        elementDict[parent].dependents = [];
                    }
                    elementDict[parent].dependents.push({
                        children: [],
                        value: possibility.properties[parent],
                    });
                    Object.entries(possibility.properties).forEach(([parameter]) => {
                        // create a new element if not present in main properties
                        if (!Object.keys(elementDict).includes(parameter)) {
                            elementDict[parameter] = {};
                            elementCount += 1;
                        }
                        if (parameter !== parent) {
                            const newElement = elementDict[parameter];
                            newElement.dependent = true;
                            newElement.parent = parent;
                            elementDict[parent].dependents[possibilityIndex].children.push(parameter);
                        }
                    });
                    possibilityIndex += 1;
                });
            }
            else if (group.properties) {
                Object.entries(group.properties).forEach(([parameter]) => {
                    elementDict[parameter] = elementDict[parameter] || {};
                    elementCount += 1;
                    if (elementDict[parent]) {
                        if (elementDict[parent].dependents) {
                            elementDict[parent].dependents[0].children.push(parameter);
                        }
                        else {
                            elementDict[parent].dependents = [{ children: [parameter] }];
                        }
                    }
                    else {
                        elementDict[parent] = {};
                        elementDict[parent].dependents = [{ children: [parameter] }];
                    }
                });
            }
            else {
                // eslint-disable-next-line no-console
                console.error('unsupported dependency type encountered');
            }
        });
    }
    return elementCount;
}
// convert an element into a schema equivalent
function generateSchemaElementFromElement(element) {
    var _a, _b;
    if (element.$ref !== undefined) {
        const title = element.schema !== undefined && element.schema.title !== undefined
            ? element.schema.title
            : element.dataOptions.title;
        const description = element.schema !== undefined && element.schema.description !== undefined
            ? element.schema.description
            : element.dataOptions.description;
        let returnElement = {
            $ref: element.$ref,
            title: title,
            description: description,
        };
        const length = (_b = (_a = element === null || element === void 0 ? void 0 : element.schema) === null || _a === void 0 ? void 0 : _a.required) === null || _b === void 0 ? void 0 : _b.length;
        if (length !== undefined && length > 0) {
            returnElement = Object.assign(Object.assign({}, returnElement), { required: element.schema.required });
        }
        return returnElement;
    }
    else if (element.propType === 'card') {
        if (element.dataOptions.category === 'section') {
            return {
                type: 'object',
            };
        }
        else {
            const prop = {};
            Object.keys(element.dataOptions).forEach((key) => {
                if (![
                    'category',
                    'hideKey',
                    'path',
                    'definitionData',
                    'definitionUi',
                    'allFormInputs',
                ].includes(key) &&
                    element.dataOptions[key] !== '')
                    prop[key] = element.dataOptions[key];
            });
            return prop;
        }
    }
    else if (element.propType === 'section') {
        return element.schema;
    }
    else {
        throw new Error('Element that is neither card, section, nor ref');
    }
}
// generate a new schema from a complete array of card objects
function generateSchemaFromElementProps(elementArr) {
    if (!elementArr)
        return {};
    const newSchema = {};
    const props = {};
    const dependencies = {};
    const elementDict = {};
    const dependentElements = new Set();
    for (let index = 0; index < elementArr.length; index += 1) {
        const element = elementArr[index];
        elementDict[element.name] = Object.assign({}, element);
        if (element.dependents)
            element.dependents.forEach((possibility) => {
                possibility.children.forEach((dependentElement) => {
                    dependentElements.add(dependentElement);
                });
            });
    }
    Object.keys(elementDict).forEach((elementName) => {
        const element = elementDict[elementName];
        if (element.dependents && element.dependents[0]) {
            if (element.dependents[0].value) {
                // handle value based case
                dependencies[elementName] = {
                    oneOf: element.dependents.map((possibility) => {
                        var _a;
                        const childrenComponents = {};
                        const requiredValues = [];
                        (_a = possibility === null || possibility === void 0 ? void 0 : possibility.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
                            if (elementDict[child]) {
                                childrenComponents[child] = generateSchemaElementFromElement(elementDict[child]);
                                if (elementDict[child].required)
                                    requiredValues.push(child);
                            }
                        });
                        return {
                            properties: Object.assign({ [elementName]: possibility.value }, childrenComponents),
                            required: requiredValues,
                        };
                    }),
                };
            }
            else {
                // handle definition based case
                const childrenComponents = {};
                const requiredValues = [];
                element.dependents[0].children.forEach((child) => {
                    childrenComponents[child] = generateSchemaElementFromElement(elementDict[child]);
                    if (elementDict[child].required)
                        requiredValues.push(child);
                });
                dependencies[elementName] = {
                    properties: childrenComponents,
                    required: requiredValues,
                };
            }
        }
        if (!dependentElements.has(elementName)) {
            props[element.name] = generateSchemaElementFromElement(element);
        }
    });
    newSchema.properties = props;
    newSchema.dependencies = dependencies;
    newSchema.required = elementArr
        .filter(({ required, dependent }) => required && !dependent)
        .map(({ name }) => name);
    return newSchema;
}
function generateUiSchemaFromElementProps(elementArr, definitionUi) {
    if (!elementArr)
        return {};
    const uiSchema = {};
    const uiOrder = [];
    const definitions = definitionUi;
    elementArr.forEach((element) => {
        uiOrder.push(element.name);
        if (element.$ref !== undefined) {
            // look for the reference
            const pathArr = typeof element.$ref === 'string' ? element.$ref.split('/') : [];
            if (definitions && definitions[pathArr[2]]) {
                uiSchema[element.name] = definitions[pathArr[2]];
            }
        }
        if (element.propType === 'card' && element.uiOptions) {
            Object.keys(element.uiOptions).forEach((uiOption) => {
                if (!uiSchema[element.name])
                    uiSchema[element.name] = {};
                if (uiOption.startsWith('ui:*')) {
                    uiSchema[element.name][uiOption.substring(4)] =
                        element.uiOptions[uiOption];
                }
                else {
                    uiSchema[element.name][uiOption] = element.uiOptions[uiOption];
                }
            });
        }
        else if (element.propType === 'section' &&
            Object.keys(element.uischema).length > 0) {
            uiSchema[element.name] = element.uischema;
        }
    });
    uiSchema['ui:order'] = uiOrder;
    return uiSchema;
}
function getCardParameterInputComponentForType(category, allFormInputs) {
    return ((allFormInputs[category] && allFormInputs[category].modalBody) ||
        (() => null));
}
// takes in an array of Card Objects and updates both schemas
function updateSchemas(elementArr, parameters) {
    const { schema, uischema, onChange, definitionUi } = parameters;
    const newSchema = Object.assign(Object.assign({}, schema), generateSchemaFromElementProps(elementArr));
    const newUiSchema = generateUiSchemaFromElementProps(elementArr, definitionUi);
    if (uischema.definitions) {
        newUiSchema.definitions = uischema.definitions;
    }
    // mandate that the type is an object if not already done
    newSchema.type = 'object';
    onChange(newSchema, newUiSchema);
}
const DEFAULT_INPUT_NAME = 'newInput';
// ensure that each added block has a unique name
function getIdFromElementsBlock(elements) {
    const names = elements.map((element) => element.name);
    const defaultNameLength = DEFAULT_INPUT_NAME.length;
    return names.length > 0
        ? Math.max(...names.map((name) => {
            if (name.startsWith(DEFAULT_INPUT_NAME)) {
                const index = name.substring(defaultNameLength, name.length);
                const value = Number.parseInt(index);
                if (!isNaN(value)) {
                    return value;
                }
            }
            return 0;
        })) + 1
        : 1;
}
// given an initial schema, update with a new card appended
function addCardObj(parameters) {
    const { schema, uischema, mods, onChange, definitionData, definitionUi, index, categoryHash, } = parameters;
    const newElementObjArr = generateElementPropsFromSchemas({
        schema,
        uischema,
        definitionData,
        definitionUi,
        categoryHash,
    });
    const i = getIdFromElementsBlock(newElementObjArr);
    const dataOptions = getNewElementDefaultDataOptions(i, mods);
    const newElement = {
        name: `${DEFAULT_INPUT_NAME}${i}`,
        required: false,
        dataOptions: dataOptions,
        uiOptions: (mods && mods.newElementDefaultUiSchema) || {},
        propType: 'card',
        schema: {},
        uischema: {},
        neighborNames: [],
    };
    if (index !== undefined && index !== null) {
        newElementObjArr.splice(index + 1, 0, newElement);
    }
    else {
        newElementObjArr.push(newElement);
    }
    updateSchemas(newElementObjArr, {
        schema,
        uischema,
        definitionData,
        definitionUi,
        onChange,
    });
}
// given an initial schema, update with a new section appended
function addSectionObj(parameters) {
    const { schema, uischema, onChange, definitionData, definitionUi, index, categoryHash, } = parameters;
    const newElementObjArr = generateElementPropsFromSchemas({
        schema,
        uischema,
        definitionData,
        definitionUi,
        categoryHash,
    });
    const i = getIdFromElementsBlock(newElementObjArr);
    const newElement = {
        name: `${DEFAULT_INPUT_NAME}${i}`,
        required: false,
        dataOptions: {
            title: `New Input ${i}`,
            type: 'object',
            default: '',
        },
        uiOptions: {},
        propType: 'section',
        schema: { title: `New Input ${i}`, type: 'object' },
        uischema: {},
        neighborNames: [],
    };
    if (index !== undefined && index !== null) {
        newElementObjArr.splice(index + 1, 0, newElement);
    }
    else {
        newElementObjArr.push(newElement);
    }
    updateSchemas(newElementObjArr, {
        schema,
        uischema,
        definitionData,
        definitionUi,
        onChange,
    });
}
// generate an array of Card and Section components from a schema
function generateElementComponentsFromSchemas(parameters) {
    const { schemaData, uiSchemaData, onChange, definitionData, definitionUi, hideKey, path, cardOpenArray, setCardOpenArray, allFormInputs, mods, categoryHash, parentCardComponentProps, Card, Section, } = parameters;
    const schema = parse(stringify(schemaData));
    const uischema = parse(stringify(uiSchemaData));
    if (!schema.properties)
        return [];
    const elementPropArr = generateElementPropsFromSchemas({
        schema,
        uischema,
        definitionData,
        definitionUi,
        categoryHash,
    });
    const elementList = elementPropArr.map((elementProp, index) => {
        const MIN_CARD_OPEN_ARRAY_LENGTH = index + 1;
        const currentLength = cardOpenArray.length;
        const addProperties = {
            schema,
            uischema,
            mods,
            onChange,
            definitionData: definitionData || {},
            definitionUi: definitionUi || {},
            index,
            categoryHash,
        };
        if (currentLength < MIN_CARD_OPEN_ARRAY_LENGTH) {
            cardOpenArray.push(...new Array(MIN_CARD_OPEN_ARRAY_LENGTH - currentLength).fill(false));
        }
        const expanded = (cardOpenArray && index < cardOpenArray.length && cardOpenArray[index]) ||
            false;
        if (elementProp.propType === 'card') {
            // choose the appropriate type specific parameters
            const TypeSpecificParameters = getCardParameterInputComponentForType(elementProp.dataOptions.category || 'string', allFormInputs);
            // add a fully defined card component to the list of components
            return (React.createElement(Card, { componentProps: Object.assign({
                    name: elementPropArr[index].name,
                    required: elementPropArr[index].required,
                    hideKey,
                    path: `${path}_${elementPropArr[index].name}`,
                    definitionData,
                    definitionUi,
                    neighborNames: elementPropArr[index].neighborNames,
                    dependents: elementPropArr[index].dependents,
                    dependent: elementPropArr[index].dependent,
                    parent: elementPropArr[index].parent,
                }, elementPropArr[index].uiOptions, elementPropArr[index].dataOptions), key: `${path}_${elementPropArr[index].name}`, TypeSpecificParameters: TypeSpecificParameters, onChange: (newCardObj) => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    // extract uiOptions and other properties
                    const newDataProps = {};
                    const newUiProps = {};
                    Object.keys(newCardObj).forEach((propName) => {
                        if (propName.startsWith('ui:')) {
                            if (propName.startsWith('ui:*')) {
                                newUiProps[propName.substring(4)] = newCardObj[propName];
                            }
                            else {
                                newUiProps[propName] = newCardObj[propName];
                            }
                        }
                        else if (![
                            'name',
                            'required',
                            'neighborNames',
                            'dependents',
                            'dependent',
                            'parent',
                        ].includes(propName)) {
                            newDataProps[propName] = newCardObj[propName];
                        }
                    });
                    if (newElementObjArr[index].propType === 'card') {
                        const oldElement = newElementObjArr[index];
                        newElementObjArr[index] = Object.assign(Object.assign({}, oldElement), { dataOptions: newDataProps, uiOptions: newUiProps, required: newCardObj.required, dependents: newCardObj.dependents, dependent: newCardObj.dependent, parent: newCardObj.parent, name: newCardObj.name, $ref: newCardObj.$ref, propType: 'card' });
                    }
                    else {
                        throw new Error('Card editing non card element');
                    }
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onDelete: () => {
                    // splice out this index from the card array
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    newElementObjArr.splice(index, 1);
                    setCardOpenArray([
                        ...cardOpenArray.slice(0, index),
                        ...cardOpenArray.slice(index + 1),
                    ]);
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onMoveUp: () => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    if (index === 0)
                        return;
                    const tempBlock = newElementObjArr[index - 1];
                    newElementObjArr[index - 1] = newElementObjArr[index];
                    newElementObjArr[index] = tempBlock;
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onMoveDown: () => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    if (index === elementPropArr.length - 1)
                        return;
                    const tempBlock = newElementObjArr[index + 1];
                    newElementObjArr[index + 1] = newElementObjArr[index];
                    newElementObjArr[index] = tempBlock;
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, addElem: (choice) => {
                    if (choice === 'card') {
                        addCardObj(addProperties);
                    }
                    else if (choice === 'section') {
                        addSectionObj(addProperties);
                    }
                    setCardOpenArray([...cardOpenArray, false]);
                }, cardOpen: expanded, setCardOpen: (newState) => setCardOpenArray([
                    ...cardOpenArray.slice(0, index),
                    newState,
                    ...cardOpenArray.slice(index + 1),
                ]), allFormInputs: allFormInputs, mods: mods, addProperties: addProperties }));
        }
        else if (elementProp.propType === 'section') {
            // create a section with the appropriate schemas here
            const addProperties = {
                schema,
                uischema,
                mods,
                onChange,
                definitionData: definitionData || {},
                definitionUi: definitionUi || {},
                index,
                categoryHash,
            };
            return (React.createElement(Section, { schema: elementProp.schema, uischema: elementProp.uischema, onChange: (newSchema, newUiSchema, newRef) => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    const oldSection = newElementObjArr[index];
                    newElementObjArr[index] = Object.assign(Object.assign({}, oldSection), { schema: newSchema, uischema: newUiSchema, propType: 'section' });
                    if (newRef)
                        newElementObjArr[index].$ref = newRef;
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onNameChange: (newName) => {
                    const oldSection = elementProp;
                    // check if newName overlaps with an existing name
                    if (elementPropArr.map((elem) => elem.name).includes(newName))
                        return;
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    newElementObjArr[index] = Object.assign(Object.assign({}, oldSection), { name: newName });
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onRequireToggle: () => {
                    const oldSection = elementProp;
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    newElementObjArr[index] = Object.assign(Object.assign({}, oldSection), { required: !oldSection.required });
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onDependentsChange: (newDependents) => {
                    const oldSection = elementProp;
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    newElementObjArr[index] = Object.assign(Object.assign({}, oldSection), { dependents: newDependents });
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        onChange,
                        definitionData,
                        definitionUi,
                    });
                }, onDelete: () => {
                    // splice out this index from the card array
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    newElementObjArr.splice(index, 1);
                    setCardOpenArray([
                        ...cardOpenArray.slice(0, index),
                        ...cardOpenArray.slice(index + 1),
                    ]);
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onMoveUp: () => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    if (index === 0)
                        return;
                    const tempBlock = newElementObjArr[index - 1];
                    newElementObjArr[index - 1] = newElementObjArr[index];
                    newElementObjArr[index] = tempBlock;
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, onMoveDown: () => {
                    const newElementObjArr = generateElementPropsFromSchemas({
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        categoryHash,
                    });
                    if (index === elementPropArr.length - 1)
                        return;
                    const tempBlock = newElementObjArr[index + 1];
                    newElementObjArr[index + 1] = newElementObjArr[index];
                    newElementObjArr[index] = tempBlock;
                    updateSchemas(newElementObjArr, {
                        schema,
                        uischema,
                        definitionData,
                        definitionUi,
                        onChange,
                    });
                }, name: elementProp.name, key: `${path}_${elementPropArr[index].name}`, required: elementProp.required, path: `${path}_${elementProp.name}`, definitionData: definitionData || {}, definitionUi: definitionUi || {}, hideKey: hideKey, reference: elementProp.$ref, neighborNames: elementProp.neighborNames, dependents: elementProp.dependents, dependent: elementProp.dependent, parent: elementProp.parent, parentCardType: parentCardComponentProps === null || parentCardComponentProps === void 0 ? void 0 : parentCardComponentProps.type, parentProperties: addProperties, cardOpen: expanded, setCardOpen: (newState) => setCardOpenArray([
                    ...cardOpenArray.slice(0, index),
                    newState,
                    ...cardOpenArray.slice(index + 1),
                ]), allFormInputs: allFormInputs, categoryHash: categoryHash, mods: mods }));
        }
        else {
            return (React.createElement("div", null,
                React.createElement("h2", null, " Error parsing element ")));
        }
    });
    return elementList;
}
// function called when drag and drop ends
function onDragEnd(result, details) {
    const { schema, uischema, onChange, definitionData, definitionUi, categoryHash, } = details;
    if (!result.destination)
        return;
    const src = result.source.index;
    const dest = result.destination.index;
    if (src === dest)
        return;
    const newElementObjArr = generateElementPropsFromSchemas({
        schema,
        uischema,
        definitionData,
        definitionUi,
        categoryHash,
    });
    const [moved] = newElementObjArr.splice(src, 1);
    newElementObjArr.splice(dest, 0, moved);
    updateSchemas(newElementObjArr, {
        schema,
        uischema,
        definitionData: definitionData || {},
        definitionUi: definitionUi || {},
        onChange,
    });
}
// helper function to recursively update sections
function propagateElementChange(elementArr, definitionData, definitionUi, categoryHash) {
    const updatedElementArr = [];
    elementArr.forEach((element) => {
        // update section and it's children
        if (element.propType === 'section') {
            const childrenElements = generateElementPropsFromSchemas({
                schema: element.schema,
                uischema: element.uischema,
                definitionData,
                definitionUi,
                categoryHash,
            });
            const updatedChildren = propagateElementChange(childrenElements, definitionData, definitionUi, categoryHash);
            const newUiSchema = Object.assign(Object.assign({}, element.uischema), generateSchemaFromElementProps(updatedChildren));
            const newSchema = Object.assign(Object.assign({}, element.schema), generateSchemaFromElementProps(updatedChildren));
            const newElement = Object.assign(Object.assign({}, element), { schema: newSchema, uischema: newUiSchema });
            updatedElementArr.push(newElement);
        }
        else {
            updatedElementArr.push(element);
        }
    });
    return updatedElementArr;
}
// propogate changes in a schema and ui schema with updated definitions but outdated body componenents
function propagateDefinitionChanges(schema, uischema, onChange, categoryHash) {
    const definitionData = schema.definitions;
    const definitionUi = uischema.definitions;
    const bodyElements = generateElementPropsFromSchemas({
        schema,
        uischema,
        definitionData,
        definitionUi,
        categoryHash,
    });
    const updatedBodyElements = propagateElementChange(bodyElements, definitionData, definitionUi, categoryHash);
    updateSchemas(updatedBodyElements, {
        schema,
        uischema,
        definitionData,
        definitionUi,
        onChange,
    });
}
// Member-wise subtraction of array2 from array1
function subtractArray(array1, array2) {
    if (array2 === undefined || array2 === null)
        return array1;
    // Create a map for performant array filtering on large arrays
    const keys = array2.reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr]: true })), {});
    return array1.filter((v) => !keys[v]);
}
function excludeKeys(obj, keys) {
    if (!keys)
        return Object.assign({}, obj);
    // Create a map for performant object filtering
    const keysHash = keys.reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr]: true })), {});
    // Create a map for performant array filtering
    return Object.keys(obj).reduce((acc, curr) => (keysHash[curr] ? acc : Object.assign(Object.assign({}, acc), { [curr]: obj[curr] })), {});
}
function getNewElementDefaultDataOptions(i, mods) {
    if (mods && mods.newElementDefaultDataOptions !== undefined) {
        const title = `${mods.newElementDefaultDataOptions.title} ${i}`;
        return Object.assign(Object.assign({}, mods.newElementDefaultDataOptions), { title: title });
    }
    else {
        return {
            title: `New Input ${i}`,
            type: 'string',
            default: '',
        };
    }
}
function getRandomId() {
    const chars = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    const numberOfChars = chars.length;
    const randomIdLength = 50;
    return Array.from({ length: randomIdLength })
        .map(() => chars[Math.floor(Math.random() * numberOfChars)])
        .join('');
}

// warning message if not all possibilities specified
function DependencyWarning({ parameters, }) {
    const [elementId] = useState(getRandomId());
    if (parameters.enum &&
        parameters.dependents &&
        parameters.dependents.length &&
        parameters.dependents[0].value) {
        // get the set of defined enum values
        const definedVals = new Set([]);
        (parameters.dependents || []).forEach((possibility) => {
            if (possibility.value && possibility.value.enum)
                possibility.value.enum.forEach((val) => definedVals.add(val));
        });
        const undefinedVals = [];
        if (Array.isArray(parameters.enum))
            parameters.enum.forEach((val) => {
                if (!definedVals.has(val))
                    undefinedVals.push(val);
            });
        if (undefinedVals.length === 0)
            return null;
        return (React.createElement(React.Fragment, null,
            React.createElement("p", null,
                "Warning! The following values do not have associated dependency values:",
                ' ',
                React.createElement(Example, { id: `${elementId}_valuewarning`, type: 'help', text: 'Each possible value for a value-based dependency must be defined to work properly' })),
            React.createElement("ul", null, undefinedVals.map((val, index) => (React.createElement("li", { key: index }, val))))));
    }
    return null;
}

// a field that lets you choose adjacent blocks
function CardSelector({ possibleChoices, chosenChoices, onChange, placeholder, path, }) {
    const [elementId] = useState(getRandomId());
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null, chosenChoices.map((chosenChoice, index) => (React.createElement("li", { key: `${elementId}_neighbor_${index}` },
            chosenChoice,
            ' ',
            React.createElement(FontAwesomeIcon, { icon: faTimes, onClick: () => onChange([
                    ...chosenChoices.slice(0, index),
                    ...chosenChoices.slice(index + 1),
                ]) }))))),
        React.createElement(Select, { value: {
                value: '',
                label: '',
            }, placeholder: placeholder, options: possibleChoices
                .filter((choice) => !chosenChoices.includes(choice))
                .map((choice) => ({
                value: choice,
                label: choice,
            })), onChange: (val) => {
                onChange([...chosenChoices, val.value]);
            }, className: 'card-modal-select' })));
}

const useStyles$8 = createUseStyles({
    cardEnumOption: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '.5em',
        '& input': { width: '80%', marginRight: '1em', marginBottom: 0 },
        '& .delete-button': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
});
// Input field corresponding to an array of values, add and remove
function CardEnumOptions({ initialValues, names, showNames, onChange, type, }) {
    const classes = useStyles$8();
    const possibleValues = [];
    for (let index = 0; index < initialValues.length; index += 1) {
        const value = initialValues[index];
        let name = `${value}`;
        if (names && index < names.length)
            name = names[index];
        possibleValues.push(React.createElement("div", { key: index, className: classes.cardEnumOption },
            React.createElement(Input, { value: value === undefined || value === null ? '' : value, placeholder: 'Possible Value', key: `val-${index}`, type: type === 'string' ? 'text' : 'number', onChange: (ev) => {
                    let newVal;
                    switch (type) {
                        case 'string':
                            newVal = ev.target.value;
                            break;
                        case 'number':
                        case 'integer':
                            newVal = parseFloat(ev.target.value);
                            if (Number.isInteger(newVal))
                                newVal = parseInt(ev.target.value, 10);
                            // TODO: Possible unused condition, since we know it is a number or integer in this case.
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            if (Number.isNaN(newVal))
                                newVal = type === 'string' ? '' : 0;
                            break;
                        default:
                            throw new Error(`Enum called with unknown type ${type}`);
                    }
                    onChange([
                        ...initialValues.slice(0, index),
                        newVal,
                        ...initialValues.slice(index + 1),
                    ], names);
                }, className: 'card-text' }),
            React.createElement(Input, { value: name || '', placeholder: 'Label', key: `name-${index}`, type: 'text', onChange: (ev) => {
                    if (names)
                        onChange(initialValues, [
                            ...names.slice(0, index),
                            ev.target.value,
                            ...names.slice(index + 1),
                        ]);
                }, className: 'card-text', style: { display: showNames ? 'initial' : 'none' } }),
            React.createElement("div", { className: 'delete-button' },
                React.createElement(FontAwesomeIcon, { icon: faTimes, onClick: () => {
                        // remove this value
                        onChange([
                            ...initialValues.slice(0, index),
                            ...initialValues.slice(index + 1),
                        ], names
                            ? [...names.slice(0, index), ...names.slice(index + 1)]
                            : undefined);
                    } }))));
    }
    return (React.createElement(React.Fragment, null,
        possibleValues,
        React.createElement(FontAwesomeIcon, { icon: faPlus, onClick: () => {
                // add a new dropdown option
                onChange([...initialValues, type === 'string' ? '' : 0], names ? [...names, ''] : undefined);
            } })));
}

// handle value options for different card types
function ValueSelector({ possibility, onChange, parentEnums, parentType, parentName, parentSchema, path, }) {
    const [elementId] = useState(getRandomId());
    if (possibility.value) {
        // enum type
        if (parentEnums) {
            const enumType = typeof parentEnums[0] === 'number' ? 'number' : 'string';
            if (enumType === 'string')
                return (React.createElement(CardSelector, { possibleChoices: parentEnums.map((val) => `${val}`), chosenChoices: possibility.value.enum, onChange: (chosenChoices) => onChange(Object.assign(Object.assign({}, possibility), { value: { enum: chosenChoices } })), placeholder: 'Allowed value', path: path }));
            if (enumType === 'number')
                return (React.createElement(CardSelector, { possibleChoices: parentEnums.map((val) => `${val}`), chosenChoices: possibility.value.enum, onChange: (chosenChoices) => onChange(Object.assign(Object.assign({}, possibility), { value: {
                            enum: chosenChoices.map((val) => Number.parseFloat(val)),
                        } })), placeholder: 'Allowed value', path: path }));
        }
        // check box type
        if (parentType === 'boolean') {
            return (React.createElement(FBCheckbox, { onChangeValue: () => {
                    if (possibility.value.enum && possibility.value.enum[0]) {
                        onChange(Object.assign(Object.assign({}, possibility), { value: { enum: [false] } }));
                    }
                    else {
                        onChange(Object.assign(Object.assign({}, possibility), { value: { enum: [true] } }));
                    }
                }, isChecked: possibility.value.enum && possibility.value.enum[0], label: parentName }));
        }
        // object type
        if (parentType === 'object') {
            const enumArr = possibility.value.enum;
            const getInput = (val, index, key) => {
                switch (typeof val) {
                    case 'string':
                        return (React.createElement(Input, { value: val || '', placeholder: 'String value', type: 'text', onChange: (ev) => {
                                const newVal = ev.target.value;
                                const oldCombo = possibility.value.enum[index];
                                onChange(Object.assign(Object.assign({}, possibility), { value: {
                                        enum: [
                                            ...enumArr.slice(0, index),
                                            Object.assign(Object.assign({}, oldCombo), { [key]: newVal }),
                                            ...enumArr.slice(index + 1),
                                        ],
                                    } }));
                            }, className: 'card-modal-text' }));
                    case 'number':
                        return (React.createElement(Input, { value: val || '', placeholder: 'Number value', type: 'number', onChange: (ev) => {
                                const newVal = Number.parseFloat(ev.target.value);
                                const oldCombo = possibility.value.enum[index];
                                onChange(Object.assign(Object.assign({}, possibility), { value: {
                                        enum: [
                                            ...enumArr.slice(0, index),
                                            Object.assign(Object.assign({}, oldCombo), { [key]: newVal }),
                                            ...enumArr.slice(index + 1),
                                        ],
                                    } }));
                            }, className: 'card-modal-number' }));
                    // TODO: arrays are classified as objects - this may be unreachable code.
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    case 'array':
                        return (React.createElement(Input, { value: JSON.stringify(val) || '', placeholder: 'Array in JSON', type: 'textarea', onChange: (ev) => {
                                let newVal = val;
                                try {
                                    newVal = JSON.parse(ev.target.value);
                                }
                                catch (error) {
                                    // eslint-disable-next-line no-console
                                    console.error('invalid JSON array input');
                                }
                                const oldCombo = possibility.value.enum[index];
                                onChange(Object.assign(Object.assign({}, possibility), { value: {
                                        enum: [
                                            ...enumArr.slice(0, index),
                                            Object.assign(Object.assign({}, oldCombo), { [key]: newVal }),
                                            ...enumArr.slice(index + 1),
                                        ],
                                    } }));
                            }, className: 'card-modal-text' }));
                    case 'object':
                        return (React.createElement(Input, { value: JSON.stringify(val) || '', placeholder: 'Object in JSON', type: 'textarea', onChange: (ev) => {
                                let newVal = val;
                                try {
                                    newVal = JSON.parse(ev.target.value);
                                }
                                catch (error) {
                                    // eslint-disable-next-line no-console
                                    console.error('invalid JSON object input');
                                }
                                const oldCombo = possibility.value.enum[index];
                                onChange(Object.assign(Object.assign({}, possibility), { value: {
                                        enum: [
                                            ...enumArr.slice(0, index),
                                            Object.assign(Object.assign({}, oldCombo), { [key]: newVal }),
                                            ...enumArr.slice(index + 1),
                                        ],
                                    } }));
                            }, className: 'card-modal-text' }));
                }
            };
            return (React.createElement("div", null,
                enumArr.map((combination, index) => (React.createElement("li", { key: `${elementId}_possibleValue${index}` },
                    Object.keys(combination).map((key) => {
                        const val = combination[key];
                        return (React.createElement("div", { key: key },
                            React.createElement("h5", null,
                                key,
                                ":"),
                            getInput(val, index, key)));
                    }),
                    React.createElement(FontAwesomeIcon, { icon: faTimes, onClick: () => onChange(Object.assign(Object.assign({}, possibility), { value: {
                                enum: [
                                    ...enumArr.slice(0, index),
                                    ...enumArr.slice(index + 1),
                                ],
                            } })) })))),
                React.createElement(FontAwesomeIcon, { icon: faPlus, onClick: () => {
                        const newCase = {};
                        const propArr = parentSchema
                            ? parentSchema.properties
                            : {};
                        Object.keys(propArr).forEach((key) => {
                            if (propArr[key].type === 'number' ||
                                propArr[key].type === 'integer') {
                                newCase[key] = 0;
                            }
                            else if (propArr[key].type === 'array' || propArr[key].enum) {
                                newCase[key] = [];
                            }
                            else if (propArr[key].type === 'object' ||
                                propArr[key].properties) {
                                newCase[key] = {};
                            }
                            else {
                                newCase[key] = '';
                            }
                        });
                        onChange(Object.assign(Object.assign({}, possibility), { value: { enum: [...enumArr, newCase] } }));
                    } })));
        }
        return (React.createElement(CardEnumOptions, { initialValues: possibility.value.enum, onChange: (newEnum) => onChange(Object.assign(Object.assign({}, possibility), { value: { enum: newEnum } })), type: parentType || 'string', showNames: false }));
    }
    else {
        return React.createElement("h5", null, " Appear if defined ");
    }
}

// a possible dependency
function DependencyPossibility({ possibility, neighborNames, path, onChange, onDelete, parentEnums, parentType, parentName, parentSchema, }) {
    const [elementId] = useState(getRandomId());
    return (React.createElement("div", { className: 'form-dependency-condition' },
        React.createElement("h5", null,
            "Display the following:",
            ' ',
            React.createElement(Example, { id: `${elementId}_bulk`, type: 'help', text: 'Choose the other form elements that depend on this one' })),
        React.createElement(CardSelector, { possibleChoices: neighborNames.filter((name) => name !== parentName) || [], chosenChoices: possibility.children, onChange: (chosenChoices) => onChange(Object.assign(Object.assign({}, possibility), { children: [...chosenChoices] })), placeholder: 'Choose a dependent...', path: path }),
        React.createElement("h5", null,
            "If \"",
            parentName,
            "\" has ",
            possibility.value ? 'the value:' : 'a value.'),
        React.createElement("div", { style: { display: possibility.value ? 'block' : 'none' } },
            React.createElement(ValueSelector, { possibility: possibility, onChange: (newPossibility) => onChange(newPossibility), parentEnums: parentEnums, parentType: parentType, parentName: parentName, parentSchema: parentSchema, path: path })),
        React.createElement(FontAwesomeIcon, { icon: faTimes, onClick: () => onDelete() })));
}

const useStyles$7 = createUseStyles({
    dependencyField: {
        '& .fa': { cursor: 'pointer' },
        '& .plus': { marginLeft: '1em' },
        '& h4': { marginBottom: '.5em' },
        '& h5': { fontSize: '1em' },
        '& .form-dependency-select': { fontSize: '0.75em', marginBottom: '1em' },
        '& .form-dependency-conditions': {
            textAlign: 'left',
            '& .form-dependency-condition': {
                padding: '1em',
                border: '1px solid gray',
                borderRadius: '4px',
                margin: '1em',
                '& *': { textAlign: 'initial' },
            },
        },
        '& p': { fontSize: '0.75em' },
        '& .fb-radio-button': {
            display: 'block',
        },
    },
});
// checks whether an array corresponds to oneOf dependencies
function checkIfValueBasedDependency(dependents) {
    let valueBased = true;
    if (dependents && Array.isArray(dependents) && dependents.length > 0) {
        dependents.forEach((possibility) => {
            if (!possibility.value || !possibility.value.enum) {
                valueBased = false;
            }
        });
    }
    else {
        valueBased = false;
    }
    return valueBased;
}
function DependencyField({ parameters, onChange, }) {
    const [elementId] = useState(getRandomId());
    const classes = useStyles$7();
    const valueBased = checkIfValueBasedDependency(parameters.dependents || []);
    return (React.createElement("div", { className: `form-dependency ${classes.dependencyField}` },
        React.createElement("h4", null,
            "Dependencies",
            ' ',
            React.createElement(Example, { id: `${elementId}_dependent`, type: 'help', text: 'Control whether other form elements show based on this one' })),
        !!parameters.dependents && parameters.dependents.length > 0 && (React.createElement(React.Fragment, null,
            React.createElement(FBRadioGroup, { defaultValue: valueBased ? 'value' : 'definition', horizontal: false, options: [
                    {
                        value: 'definition',
                        label: 'Any value dependency',
                    },
                    {
                        value: 'value',
                        label: (React.createElement(React.Fragment, null,
                            "Specific value dependency",
                            ' ',
                            React.createElement(Example, { id: `${elementId}_valuebased`, type: 'help', text: "Specify whether these elements should show based on this element's value" }))),
                    },
                ], onChange: (selection) => {
                    if (parameters.dependents) {
                        const newDependents = [...parameters.dependents];
                        if (selection === 'definition') {
                            parameters.dependents.forEach((possibility, index) => {
                                newDependents[index] = Object.assign(Object.assign({}, possibility), { value: undefined });
                            });
                        }
                        else {
                            parameters.dependents.forEach((possibility, index) => {
                                newDependents[index] = Object.assign(Object.assign({}, possibility), { value: { enum: [] } });
                            });
                        }
                        onChange(Object.assign(Object.assign({}, parameters), { dependents: newDependents }));
                    }
                } }))),
        React.createElement(DependencyWarning, { parameters: parameters }),
        React.createElement("div", { className: 'form-dependency-conditions' },
            parameters.dependents
                ? parameters.dependents.map((possibility, index) => (React.createElement(DependencyPossibility, { possibility: possibility, neighborNames: parameters.neighborNames || [], parentEnums: parameters.enum, parentType: parameters.type, parentName: parameters.name, parentSchema: parameters.schema, path: parameters.path, key: `${elementId}_possibility${index}`, onChange: (newPossibility) => {
                        const newDependents = parameters.dependents
                            ? [...parameters.dependents]
                            : [];
                        newDependents[index] = newPossibility;
                        onChange(Object.assign(Object.assign({}, parameters), { dependents: newDependents }));
                    }, onDelete: () => {
                        const newDependents = parameters.dependents
                            ? [...parameters.dependents]
                            : [];
                        onChange(Object.assign(Object.assign({}, parameters), { dependents: [
                                ...newDependents.slice(0, index),
                                ...newDependents.slice(index + 1),
                            ] }));
                    } })))
                : '',
            React.createElement("span", { className: 'plus', id: `${elementId}_adddependency` },
                React.createElement(FontAwesomeIcon, { icon: faPlus, onClick: () => {
                        const newDependents = parameters.dependents
                            ? [...parameters.dependents]
                            : [];
                        newDependents.push({
                            children: [],
                            value: valueBased ? { enum: [] } : undefined,
                        });
                        onChange(Object.assign(Object.assign({}, parameters), { dependents: newDependents }));
                    } })),
            React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_adddependency` }, "Add another dependency relation linking this element and other form elements"))));
}

const useStyles$6 = createUseStyles({
    cardModal: {
        '& .card-modal-header': { paddingTop: '.5em', paddingBottom: '.5em' },
        '& .card-modal-entries': { padding: '1em' },
        '& h4, h5, p, label, li': { marginTop: '.5em', marginBottom: '.5em' },
        '& h5, p, label, li': { fontSize: '14px' },
        '& h4': { fontSize: '16px' },
        '& h3': { fontSize: '18px', marginBottom: 0 },
        '& .card-modal-entries > div > input': {
            marginBottom: '1em',
            height: '32px',
        },
        '& .fa-question-circle, & .fa-circle-question': { color: 'gray' },
        '& .card-modal-boolean': {
            '& *': { marginRight: '0.25em', height: 'auto', display: 'inline-block' },
        },
        '& .card-modal-select': {
            '& input': { margin: '0', height: '20px' },
            marginBottom: '1em',
        },
    },
});
const CardModal = ({ componentProps, onChange, isOpen, onClose, TypeSpecificParameters, }) => {
    const classes = useStyles$6();
    // assign state values for parameters that should only change on hitting "Save"
    const [componentPropsState, setComponentProps] = useState(componentProps);
    useEffect(() => {
        setComponentProps(componentProps);
    }, [componentProps]);
    return (React.createElement(Modal, { isOpen: isOpen, "data-test": 'card-modal', className: classes.cardModal },
        React.createElement(ModalHeader, { className: 'card-modal-header' },
            React.createElement("div", { style: { display: componentProps.hideKey ? 'none' : 'initial' } },
                React.createElement("h3", null, "Additional Settings"))),
        React.createElement(ModalBody, { className: 'card-modal-entries' },
            React.createElement(TypeSpecificParameters, { parameters: componentPropsState, onChange: (newState) => {
                    setComponentProps(Object.assign(Object.assign({}, componentPropsState), newState));
                } }),
            React.createElement("div", null,
                React.createElement("h4", null,
                    "Column Size",
                    ' ',
                    React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout', target: '_blank', rel: 'noopener noreferrer' },
                        React.createElement(Example, { id: 'column_size_tooltip', type: 'help', text: 'Set the column size of the input' }))),
                React.createElement(Input, { value: componentPropsState['ui:column']
                        ? componentPropsState['ui:column']
                        : '', placeholder: 'Column size', key: 'ui:column', type: 'number', min: 0, onChange: (ev) => {
                        setComponentProps(Object.assign(Object.assign({}, componentPropsState), { 'ui:column': ev.target.value }));
                    }, className: 'card-modal-text' })),
            React.createElement(DependencyField, { parameters: componentPropsState, onChange: (newState) => {
                    setComponentProps(Object.assign(Object.assign({}, componentPropsState), newState));
                } })),
        React.createElement(ModalFooter, null,
            React.createElement(Button, { onClick: () => {
                    onClose();
                    onChange(componentPropsState);
                }, color: 'primary' }, "Save"),
            React.createElement(Button, { onClick: () => {
                    onClose();
                    setComponentProps(componentProps);
                }, color: 'secondary' }, "Cancel"))));
};

// specify the inputs required for any type of object
const GeneralParameterInputs = ({ category, parameters, onChange, mods, allFormInputs, }) => {
    const CardBody = getCardBody(category, allFormInputs);
    return (React.createElement("div", null,
        React.createElement(CardBody, { parameters: parameters, onChange: onChange, mods: mods || {} })));
};

// specify the inputs required for any type of object
function CardGeneralParameterInputs({ parameters, onChange, allFormInputs, mods, showObjectNameInput = true, }) {
    const [keyState, setKeyState] = React.useState(parameters.name);
    const [keyError, setKeyError] = React.useState(null);
    const [titleState, setTitleState] = React.useState(parameters.title);
    const [descriptionState, setDescriptionState] = React.useState(parameters.description);
    const [elementId] = React.useState(getRandomId());
    const categoryMap = categoryToNameMap(allFormInputs);
    const fetchLabel = (labelName, defaultLabel) => {
        return mods &&
            mods.labels &&
            typeof mods.labels[labelName] === 'string'
            ? mods.labels[labelName]
            : defaultLabel;
    };
    const objectNameLabel = fetchLabel('objectNameLabel', 'Object Name');
    const displayNameLabel = fetchLabel('displayNameLabel', 'Display Name');
    const descriptionLabel = fetchLabel('descriptionLabel', 'Description');
    const inputTypeLabel = fetchLabel('inputTypeLabel', 'Input Type');
    const shouldDisableInputs = (mods === null || mods === void 0 ? void 0 : mods.disableInputs)
        ? mods.disableInputs({ componentProps: parameters })
        : false;
    const availableInputTypes = () => {
        const definitionsInSchema = parameters.definitionData &&
            Object.keys(parameters.definitionData).length !== 0;
        // Hide the "Reference" option if there are no definitions in the schema
        let inputKeys = Object.keys(categoryMap).filter((key) => key !== 'ref' || definitionsInSchema);
        // Exclude hidden inputs based on mods
        if (mods)
            inputKeys = subtractArray(inputKeys, mods.deactivatedFormInputs);
        return inputKeys
            .map((key) => ({ value: key, label: categoryMap[key] }))
            .sort((a, b) => a.label.localeCompare(b.label));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'card-entry-row' },
            showObjectNameInput && (React.createElement("div", { className: 'card-entry' },
                React.createElement("h5", null,
                    `${objectNameLabel} `,
                    React.createElement(Example, { text: mods &&
                            mods.tooltipDescriptions &&
                            typeof mods.tooltipDescriptions.cardObjectName === 'string'
                            ? mods.tooltipDescriptions.cardObjectName
                            : 'The back-end name of the object', id: `${elementId}_nameinfo`, type: 'help' })),
                React.createElement(FormGroup, null,
                    React.createElement(Input, { invalid: keyError !== null, value: keyState || '', placeholder: 'Key', type: 'text', onChange: (ev) => setKeyState(ev.target.value), onBlur: (ev) => {
                            const { value } = ev.target;
                            if (value === parameters.name ||
                                !(parameters.neighborNames &&
                                    parameters.neighborNames.includes(value))) {
                                setKeyError(null);
                                onChange(Object.assign(Object.assign({}, parameters), { name: value }));
                            }
                            else {
                                setKeyState(parameters.name);
                                setKeyError(`"${value}" is already in use.`);
                                onChange(Object.assign({}, parameters));
                            }
                        }, className: 'card-text' }),
                    React.createElement(FormFeedback, null, keyError)))),
            React.createElement("div", { className: `card-entry ${parameters.$ref === undefined ? '' : 'disabled-input'}` },
                React.createElement("h5", null,
                    `${displayNameLabel} `,
                    React.createElement(Example, { text: mods &&
                            mods.tooltipDescriptions &&
                            typeof mods.tooltipDescriptions.cardDisplayName === 'string'
                            ? mods.tooltipDescriptions.cardDisplayName
                            : 'The user-facing name of this object', id: `${elementId}-titleinfo`, type: 'help' })),
                React.createElement(Input, { value: titleState || '', placeholder: 'Title', type: 'text', onChange: (ev) => setTitleState(ev.target.value), onBlur: (ev) => {
                        onChange(Object.assign(Object.assign({}, parameters), { title: ev.target.value }));
                    }, className: 'card-text' }))),
        React.createElement("div", { className: 'card-entry-row' },
            React.createElement("div", { className: `card-entry ${parameters.$ref ? 'disabled-input' : ''}` },
                React.createElement("h5", null,
                    `${descriptionLabel} `,
                    React.createElement(Example, { text: mods &&
                            mods.tooltipDescriptions &&
                            typeof mods.tooltipDescriptions.cardDescription === 'string'
                            ? mods.tooltipDescriptions.cardDescription
                            : 'This will appear as help text on the form', id: `${elementId}-descriptioninfo`, type: 'help' })),
                React.createElement(FormGroup, null,
                    React.createElement(Input, { value: descriptionState || '', placeholder: 'Description', type: 'text', onChange: (ev) => setDescriptionState(ev.target.value), onBlur: (ev) => {
                            onChange(Object.assign(Object.assign({}, parameters), { description: ev.target.value }));
                        }, className: 'card-text' }))),
            React.createElement("div", { className: classnames('card-entry input-type-entry', {
                    'wide-card-entry': !showObjectNameInput,
                }) },
                React.createElement("h5", null,
                    `${inputTypeLabel} `,
                    React.createElement(Example, { text: mods &&
                            mods.tooltipDescriptions &&
                            typeof mods.tooltipDescriptions.cardInputType === 'string'
                            ? mods.tooltipDescriptions.cardInputType
                            : 'The type of form input displayed on the form', id: `${elementId}-inputinfo`, type: 'help' })),
                React.createElement(Select, { value: {
                        value: parameters.category,
                        label: categoryMap[parameters.category],
                    }, placeholder: inputTypeLabel, options: availableInputTypes(), isDisabled: shouldDisableInputs, onChange: (val) => {
                        // figure out the new 'type'
                        const newCategory = val.value;
                        const newProps = Object.assign(Object.assign(Object.assign({}, defaultUiProps(newCategory, allFormInputs)), defaultDataProps(newCategory, allFormInputs)), { name: parameters.name, required: parameters.required });
                        if (newProps.$ref !== undefined && !newProps.$ref) {
                            // assign an initial reference
                            const firstDefinition = Object.keys(parameters.definitionData)[0];
                            newProps.$ref = `#/definitions/${firstDefinition || 'empty'}`;
                        }
                        onChange(Object.assign(Object.assign({}, newProps), { title: newProps.title || parameters.title, default: newProps.default || '', type: newProps.type || categoryType(newCategory, allFormInputs), category: newProps.category || newCategory }));
                    }, className: 'card-select' }))),
        React.createElement("div", { className: 'card-category-options' },
            React.createElement(GeneralParameterInputs, { category: parameters.category, parameters: parameters, onChange: onChange, mods: mods, allFormInputs: allFormInputs }))));
}

const useStyles$5 = createUseStyles({
    addDetails: {
        '& .popover': {
            width: '300px',
            'z-index': '1051 !important',
            '& .popover-inner': {
                border: '1px solid #1d71ad',
                borderRadius: '4px',
                '& .popover-header': { borderBottom: '1px solid #1d71ad' },
                '& .action-buttons': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '.5em',
                },
            },
        },
    },
});
function Add({ addElem, hidden, tooltipDescription, labels, }) {
    var _a, _b;
    const classes = useStyles$5();
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [createChoice, setCreateChoice] = useState('card');
    const [elementId] = useState(getRandomId());
    return (React.createElement("div", { style: { display: hidden ? 'none' : 'initial' } },
        React.createElement("span", { id: `${elementId}_add` },
            React.createElement(FontAwesomeIcon, { icon: faPlusSquare, onClick: () => setPopoverOpen(true) })),
        React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_add` }, tooltipDescription || 'Create new form element'),
        React.createElement(Popover, { placement: 'bottom', target: `${elementId}_add`, isOpen: popoverOpen, toggle: () => setPopoverOpen(false), className: `add-details ${classes.addDetails}`, id: `${elementId}_add_popover` },
            React.createElement(PopoverHeader, null, "Create New"),
            React.createElement(PopoverBody, null,
                React.createElement(FBRadioGroup, { className: 'choose-create', defaultValue: createChoice, horizontal: false, options: [
                        {
                            value: 'card',
                            label: (_a = labels === null || labels === void 0 ? void 0 : labels.addElementLabel) !== null && _a !== void 0 ? _a : 'Form element',
                        },
                        {
                            value: 'section',
                            label: (_b = labels === null || labels === void 0 ? void 0 : labels.addSectionLabel) !== null && _b !== void 0 ? _b : 'Form section',
                        },
                    ], onChange: (selection) => {
                        setCreateChoice(selection);
                    } }),
                React.createElement("div", { className: 'action-buttons' },
                    React.createElement(Button, { onClick: () => setPopoverOpen(false), color: 'secondary' }, "Cancel"),
                    React.createElement(Button, { onClick: () => {
                            addElem(createChoice);
                            setPopoverOpen(false);
                        }, color: 'primary' }, "Create"))))));
}

const useStyles$4 = createUseStyles({
    headerDelete: {
        display: 'flex',
        '& .fa-trash': {
            border: '1px solid #DE5354',
            color: '#DE5354',
            borderRadius: '4px',
            padding: '.25em',
            height: '28px',
            width: '28px',
        },
    },
    cardEntries: {
        margin: '.5em 1.5em 0 1.5em',
        '& h5': {
            color: 'black',
            'font-size': '14px',
            'font-weight': 'bold',
        },
        '& .card-entry-row': {
            display: 'flex',
        },
        '& .card-entry': {
            margin: 0,
            width: '50%',
            'text-align': 'left',
            padding: '0.5em',
            '&.wide-card-entry': {
                width: '100%',
            },
        },
        '& input': {
            border: '1px solid gray',
            'border-radius': '4px',
        },
        '& .card-category-options': {
            padding: '.5em',
        },
        '& .card-select': {
            border: '1px solid gray',
            'border-radius': '4px',
        },
        '& .card-array': {
            '& .fa-plus-square, & .fa-square-plus': { display: 'none' },
            '& .section-entries': {
                '& .fa-plus-square, & .fa-square-plus': { display: 'initial' },
            },
        },
        '& .card-enum': {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'lightGray',
            textAlign: 'left',
            padding: '1em',
            '& h3': { fontSize: '16px', margin: '0 0 .5em 0' },
            '& label': { color: 'black', fontSize: '14px' },
            '& .card-enum-header': {
                marginTop: '0.5em',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                '& h5': { width: '50%', fontWeight: 'bold', fontSize: '14px' },
            },
            '& .fa': { cursor: 'pointer' },
        },
    },
    cardInteractions: {
        margin: '.5em 1.5em',
        textAlign: 'left',
        '& .fa': {
            marginRight: '1em',
            borderRadius: '4px',
            padding: '.25em',
            height: '25px',
            width: '25px',
        },
        '& .fa-arrow-up, .fa-arrow-down': { marginRight: '.5em' },
        '& .fa-trash': { border: '1px solid #DE5354', color: '#DE5354' },
        '& .fb-checkbox': { display: 'inline-block' },
        '& .interactions-left, & .interactions-right': {
            display: 'inline-block',
            width: '48%',
            margin: '0 auto',
        },
        '& .interactions-left': { textAlign: 'left' },
        '& .interactions-right': { textAlign: 'right' },
    },
});
function Card({ componentProps, onChange, onDelete, onMoveUp, onMoveDown, TypeSpecificParameters, addElem, cardOpen, setCardOpen, allFormInputs, mods, showObjectNameInput = true, }) {
    var _a, _b, _c, _d, _e;
    const classes = useStyles$4();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [elementId] = React.useState(getRandomId());
    const shouldDisableInputs = (mods === null || mods === void 0 ? void 0 : mods.disableInputs)
        ? mods.disableInputs({ componentProps })
        : false;
    const customDeleteButton = ((_a = mods === null || mods === void 0 ? void 0 : mods.components) === null || _a === void 0 ? void 0 : _a.delete)
        ? mods.components.delete({
            elementType: 'card',
            componentProps,
            onDelete,
        })
        : null;
    const defaultCardTitle = componentProps.title || componentProps.name || '';
    const customCardTitle = ((_b = mods === null || mods === void 0 ? void 0 : mods.components) === null || _b === void 0 ? void 0 : _b.title)
        ? mods.components.title({
            elementType: 'card',
            defaultTitle: defaultCardTitle,
            componentProps,
            isOpen: cardOpen,
        })
        : null;
    return (React.createElement(React.Fragment, null,
        React.createElement(Collapse, { isOpen: cardOpen, toggleCollapse: () => setCardOpen(!cardOpen), toggleElement: (_d = (_c = mods === null || mods === void 0 ? void 0 : mods.components) === null || _c === void 0 ? void 0 : _c.collapseToggle) === null || _d === void 0 ? void 0 : _d.call(_c, {
                elementType: 'card',
                isOpen: cardOpen,
                isDisabled: false,
                componentProps,
            }), title: React.createElement(React.Fragment, null,
                React.createElement("span", { onClick: () => setCardOpen(!cardOpen), className: 'label' },
                    customCardTitle || defaultCardTitle,
                    ' ',
                    componentProps.parent ? (React.createElement(Example, { text: `Depends on ${componentProps.parent}`, id: `${elementId}_parentinfo`, type: 'alert' })) : (''),
                    componentProps.$ref !== undefined ? (React.createElement(Example, { text: `Is an instance of pre-configured component ${componentProps.$ref}`, id: `${elementId}_refinfo`, type: 'alert' })) : ('')),
                React.createElement("span", { className: 'arrows' },
                    React.createElement("span", { id: `${elementId}_moveupbiginfo` },
                        React.createElement(FontAwesomeIcon, { icon: faArrowUp, onClick: () => (onMoveUp ? onMoveUp() : {}) })),
                    React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_moveupbiginfo` }, "Move form element up"),
                    React.createElement("span", { id: `${elementId}_movedownbiginfo` },
                        React.createElement(FontAwesomeIcon, { icon: faArrowDown, onClick: () => (onMoveDown ? onMoveDown() : {}) })),
                    React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_movedownbiginfo` }, "Move form element down"))), headerActions: React.createElement(React.Fragment, null, customDeleteButton || (React.createElement(React.Fragment, null,
                React.createElement("span", { className: classes.headerDelete, id: `${elementId}_trashbiginfo` },
                    React.createElement(FontAwesomeIcon, { icon: faClose, onClick: () => onDelete && onDelete() })),
                React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_trashbiginfo` }, "Delete form element")))), className: `card-container ${componentProps.type || ''}-field ${componentProps.dependent ? 'card-dependent' : ''} ${componentProps.$ref === undefined ? '' : 'card-reference'}` },
            React.createElement("fieldset", { disabled: shouldDisableInputs, style: { border: 0, margin: 0, minWidth: 0, padding: 0 } },
                React.createElement("div", { className: classes.cardEntries },
                    React.createElement(CardGeneralParameterInputs, { parameters: componentProps, onChange: onChange, allFormInputs: allFormInputs, mods: mods, showObjectNameInput: showObjectNameInput })),
                React.createElement("div", { className: classes.cardInteractions },
                    React.createElement("span", { id: `${elementId}_editinfo` },
                        React.createElement(FontAwesomeIcon, { icon: faPencilAlt, onClick: () => setModalOpen(true) })),
                    React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_editinfo` }, "Additional configurations for this form element"),
                    React.createElement(FBCheckbox, { onChangeValue: () => onChange(Object.assign(Object.assign({}, componentProps), { required: !componentProps.required })), isChecked: !!componentProps.required, label: 'Required', id: `${elementId}_required` }))),
            React.createElement("fieldset", { disabled: shouldDisableInputs, style: { border: 0, margin: 0, minWidth: 0, padding: 0 } },
                React.createElement(CardModal, { componentProps: componentProps, isOpen: modalOpen, onClose: () => setModalOpen(false), onChange: (newComponentProps) => {
                        onChange(newComponentProps);
                    }, TypeSpecificParameters: TypeSpecificParameters }))),
        !((_e = mods === null || mods === void 0 ? void 0 : mods.components) === null || _e === void 0 ? void 0 : _e.add) && addElem && (React.createElement(Add, { tooltipDescription: ((mods || {}).tooltipDescriptions || {}).add, addElem: (choice) => addElem(choice) }))));
}

const useStyles$3 = createUseStyles({
    hidden: {
        display: 'none',
    },
});
// specify the inputs required for a string type object
const CardDefaultParameterInputs = ({ parameters, onChange, }) => {
    return React.createElement("div", null);
};
const getInputCardBodyComponent = ({ type }) => function InputCardBodyComponent({ parameters, onChange, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, "Default value"),
        React.createElement(Input, { value: (parameters.default || ''), placeholder: 'Default', type: type, onChange: (ev) => onChange(Object.assign(Object.assign({}, parameters), { default: ev.target.value })), className: 'card-text' })));
};
const Checkbox = ({ parameters, onChange }) => {
    return (React.createElement("div", { className: 'card-boolean' },
        React.createElement(FBCheckbox, { onChangeValue: () => {
                onChange(Object.assign(Object.assign({}, parameters), { default: parameters.default ? parameters.default !== true : true }));
            }, isChecked: parameters.default ? parameters.default === true : false, label: 'Default' })));
};
function MultipleChoice({ parameters, onChange, }) {
    const classes = useStyles$3();
    const enumArray = Array.isArray(parameters.enum) ? parameters.enum : [];
    // eslint-disable-next-line no-restricted-globals
    const containsUnparsableString = enumArray.some((val) => {
        return isNaN(val);
    });
    const containsString = containsUnparsableString ||
        enumArray.some((val) => typeof val === 'string');
    const [isNumber, setIsNumber] = React.useState(!!enumArray.length && !containsString);
    const [elementId] = React.useState(getRandomId());
    return (React.createElement("div", { className: 'card-enum' },
        React.createElement("h3", null, "Possible Values"),
        React.createElement(FBCheckbox, { onChangeValue: () => {
                if (Array.isArray(parameters.enumNames)) {
                    // remove the enumNames
                    onChange(Object.assign(Object.assign({}, parameters), { enumNames: null }));
                }
                else {
                    // create enumNames as a copy of enum values
                    onChange(Object.assign(Object.assign({}, parameters), { enumNames: enumArray.map((val) => `${val}`) }));
                }
            }, isChecked: Array.isArray(parameters.enumNames), label: 'Display label is different from value', id: `${elementId}_different` }),
        React.createElement("div", { className: containsUnparsableString || !enumArray.length ? classes.hidden : '' },
            React.createElement(FBCheckbox, { onChangeValue: () => {
                    if (containsString || !isNumber) {
                        // attempt converting enum values into numbers
                        try {
                            const newEnum = enumArray.map((val) => {
                                let newNum = 0;
                                if (val)
                                    newNum = parseFloat(val) || 0;
                                if (Number.isNaN(newNum))
                                    throw new Error(`Could not convert ${val}`);
                                return newNum;
                            });
                            setIsNumber(true);
                            onChange(Object.assign(Object.assign({}, parameters), { enum: newEnum }));
                        }
                        catch (error) {
                            // eslint-disable-next-line no-console
                            console.error(error);
                        }
                    }
                    else {
                        // convert enum values back into strings
                        const newEnum = enumArray.map((val) => `${val || 0}`);
                        setIsNumber(false);
                        onChange(Object.assign(Object.assign({}, parameters), { enum: newEnum }));
                    }
                }, isChecked: isNumber, disabled: containsUnparsableString, label: 'Force number', id: `${elementId}_forceNumber` })),
        React.createElement(CardEnumOptions, { initialValues: enumArray, names: Array.isArray(parameters.enumNames)
                ? parameters.enumNames.map((val) => `${val}`)
                : undefined, showNames: Array.isArray(parameters.enumNames), onChange: (newEnum, newEnumNames) => onChange(Object.assign(Object.assign({}, parameters), { enum: newEnum, enumNames: newEnumNames })), type: isNumber ? 'number' : 'string' })));
}
const defaultInputs = {
    dateTime: {
        displayName: 'Date-Time',
        matchIf: [
            {
                types: ['string'],
                format: 'date-time',
            },
        ],
        defaultDataSchema: {
            format: 'date-time',
        },
        defaultUiSchema: {},
        type: 'string',
        cardBody: getInputCardBodyComponent({ type: 'datetime-local' }),
        modalBody: CardDefaultParameterInputs,
    },
    date: {
        displayName: 'Date',
        matchIf: [
            {
                types: ['string'],
                format: 'date',
            },
        ],
        defaultDataSchema: {
            format: 'date',
        },
        defaultUiSchema: {},
        type: 'string',
        cardBody: getInputCardBodyComponent({ type: 'date' }),
        modalBody: CardDefaultParameterInputs,
    },
    time: {
        displayName: 'Time',
        matchIf: [
            {
                types: ['string'],
                format: 'time',
            },
        ],
        defaultDataSchema: {
            format: 'time',
        },
        defaultUiSchema: {},
        type: 'string',
        cardBody: getInputCardBodyComponent({ type: 'time' }),
        modalBody: CardDefaultParameterInputs,
    },
    checkbox: {
        displayName: 'Checkbox',
        matchIf: [
            {
                types: ['boolean'],
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {},
        type: 'boolean',
        cardBody: Checkbox,
        modalBody: CardDefaultParameterInputs,
    },
    radio: {
        displayName: 'Radio',
        matchIf: [
            {
                types: ['string', 'number', 'integer', 'array', 'boolean', 'null'],
                widget: 'radio',
                enum: true,
            },
        ],
        defaultDataSchema: { enum: [] },
        defaultUiSchema: {
            'ui:widget': 'radio',
        },
        type: 'string',
        cardBody: MultipleChoice,
        modalBody: CardDefaultParameterInputs,
    },
    dropdown: {
        displayName: 'Dropdown',
        matchIf: [
            {
                types: ['string', 'number', 'integer', 'array', 'boolean', 'null'],
                enum: true,
            },
        ],
        defaultDataSchema: { enum: [] },
        defaultUiSchema: {},
        type: 'string',
        cardBody: MultipleChoice,
        modalBody: CardDefaultParameterInputs,
    },
};

const useStyles$2 = createUseStyles({
    headerDelete: {
        display: 'flex',
        '& .fa-cross': {
            border: '1px solid #de5354',
            color: '#de5354',
            borderRadius: '4px',
            padding: '.25em',
            height: '28px',
            width: '28px',
        },
    },
    sectionContainer: {
        '& .section-head': {
            display: 'flex',
            borderBottom: '1px solid gray',
            margin: '0.5em 1.5em 0 1.5em',
            '& h5': {
                color: 'black',
                fontSize: '14px',
                fontWeight: 'bold',
            },
            '& .section-entry': {
                width: '33%',
                textAlign: 'left',
                padding: '0.5em',
            },
            '& .section-reference': { width: '100%' },
        },
        '& .section-footer': {
            marginTop: '1em',
            textAlign: 'center',
            '& .fa': { cursor: 'pointer' },
        },
        '& .section-interactions': {
            margin: '0.5em 1.5em',
            textAlign: 'left',
            borderTop: '1px solid gray',
            paddingTop: '1em',
            '& .fa': {
                marginRight: '1em',
                borderRadius: '4px',
                padding: '0.25em',
                height: '25px',
                width: '25px',
            },
            '& .fa-pencil-alt, &.fa-pencil, & .fa-arrow-up, & .fa-arrow-down': {
                border: '1px solid #1d71ad',
                color: '#1d71ad',
            },
            '& .fa-trash': { border: '1px solid #de5354', color: '#de5354' },
            '& .fa-arrow-up, & .fa-arrow-down': { marginRight: '0.5em' },
            '& .fb-checkbox': {
                display: 'inline-block',
                label: { color: '#9aa4ab' },
            },
            '& .interactions-left, & .interactions-right': {
                display: 'inline-block',
                width: '48%',
                margin: '0 auto',
            },
            '& .interactions-left': { textAlign: 'left' },
            '& .interactions-right': { textAlign: 'right' },
        },
    },
});
function Section({ name, required, schema, uischema, onChange, onNameChange, onRequireToggle, onDependentsChange, onDelete, onMoveUp, onMoveDown, path, definitionData, definitionUi, hideKey, reference, dependents, dependent, parent, parentCardType, parentProperties, neighborNames, cardOpen, setCardOpen, allFormInputs, mods, categoryHash, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const classes = useStyles$2();
    const unsupportedFeatures = checkForUnsupportedFeatures(schema || {}, uischema || {}, allFormInputs);
    const schemaData = schema || {};
    const elementNum = countElementsFromSchema(schemaData);
    const defaultCollapseStates = [...Array(elementNum)].map(() => false);
    const [cardOpenArray, setCardOpenArray] = React.useState(defaultCollapseStates);
    // keep name in state to avoid losing focus
    const [keyName, setKeyName] = React.useState(name);
    const [keyError, setKeyError] = React.useState(null);
    // keep requirements in state to avoid rapid updates
    const [modalOpen, setModalOpen] = React.useState(false);
    const [elementId] = React.useState(getRandomId());
    const sectionModProps = {
        name,
        schema,
        uischema,
        reference,
        dependent,
        parent,
        parentCardType,
    };
    const customDeleteButton = ((_a = mods === null || mods === void 0 ? void 0 : mods.components) === null || _a === void 0 ? void 0 : _a.delete)
        ? mods.components.delete({
            elementType: 'section',
            sectionProps: sectionModProps,
            onDelete,
        })
        : null;
    const defaultSectionTitle = schemaData.title || keyName || '';
    const customSectionTitle = ((_b = mods === null || mods === void 0 ? void 0 : mods.components) === null || _b === void 0 ? void 0 : _b.title)
        ? mods.components.title({
            elementType: 'section',
            defaultTitle: defaultSectionTitle,
            sectionProps: sectionModProps,
            isOpen: cardOpen,
        })
        : null;
    const addProperties = {
        schema,
        uischema,
        mods,
        onChange,
        definitionData,
        definitionUi,
        categoryHash,
    };
    const hideAddButton = schemaData.properties && Object.keys(schemaData.properties).length !== 0;
    return (React.createElement(React.Fragment, null,
        React.createElement(Collapse, { isOpen: cardOpen, toggleCollapse: () => setCardOpen(!cardOpen), toggleElement: (_d = (_c = mods === null || mods === void 0 ? void 0 : mods.components) === null || _c === void 0 ? void 0 : _c.collapseToggle) === null || _d === void 0 ? void 0 : _d.call(_c, {
                elementType: 'section',
                isOpen: cardOpen,
                isDisabled: false,
                sectionProps: sectionModProps,
            }), title: React.createElement(React.Fragment, null,
                React.createElement("span", { onClick: () => setCardOpen(!cardOpen), className: 'label' },
                    customSectionTitle || defaultSectionTitle,
                    ' ',
                    parent ? (React.createElement(Example, { text: `Depends on ${parent}`, id: `${elementId}_parentinfo`, type: 'alert' })) : ('')),
                React.createElement("span", { className: 'arrows' },
                    React.createElement("span", { id: `${elementId}_moveupbiginfo` },
                        React.createElement(FontAwesomeIcon, { icon: faArrowUp, onClick: () => (onMoveUp ? onMoveUp() : {}) })),
                    React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_moveupbiginfo` }, "Move form element up"),
                    React.createElement("span", { id: `${elementId}_movedownbiginfo` },
                        React.createElement(FontAwesomeIcon, { icon: faArrowDown, onClick: () => (onMoveDown ? onMoveDown() : {}) })),
                    React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_movedownbiginfo` }, "Move form element down"))), headerActions: React.createElement(React.Fragment, null, customDeleteButton || (React.createElement(React.Fragment, null,
                React.createElement("span", { className: classes.headerDelete, id: `${elementId}_trashbiginfo` },
                    React.createElement(FontAwesomeIcon, { icon: faClose, onClick: () => (onDelete ? onDelete() : {}) })),
                React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_trashbiginfo` }, "Delete form element")))), className: `section-container ${classes.sectionContainer} ${dependent ? 'section-dependent' : ''} ${reference ? 'section-reference' : ''}` },
            React.createElement("fieldset", { style: { border: 0, margin: 0, minWidth: 0, padding: 0 } },
                React.createElement("div", { className: `section-entries ${reference ? 'section-reference' : ''}` },
                    React.createElement("div", { className: 'section-head' },
                        reference ? (React.createElement("div", { className: 'section-entry section-reference' },
                            React.createElement("h5", null, "Reference Section"),
                            React.createElement(Select, { value: {
                                    value: reference,
                                    label: reference,
                                }, placeholder: 'Reference', options: Object.keys(definitionData).map((key) => ({
                                    value: `#/definitions/${key}`,
                                    label: `#/definitions/${key}`,
                                })), onChange: (val) => {
                                    onChange(schema, uischema, val.value);
                                }, className: 'section-select' }))) : (''),
                        React.createElement("div", { className: 'section-entry', "data-test": 'section-object-name' },
                            React.createElement("h5", null,
                                "Section Object Name",
                                ' ',
                                React.createElement(Example, { text: mods &&
                                        mods.tooltipDescriptions &&
                                        mods.tooltipDescriptions &&
                                        typeof mods.tooltipDescriptions.cardSectionObjectName ===
                                            'string'
                                        ? mods.tooltipDescriptions.cardSectionObjectName
                                        : 'The key to the object that will represent this form section.', id: `${elementId}_nameinfo`, type: 'help' })),
                            React.createElement(FormGroup, null,
                                React.createElement(Input, { invalid: keyError !== null, value: keyName || '', placeholder: 'Key', type: 'text', onChange: (ev) => setKeyName(ev.target.value), onBlur: (ev) => {
                                        const { value } = ev.target;
                                        if (value === name ||
                                            !(neighborNames && neighborNames.includes(value))) {
                                            setKeyError(null);
                                            onNameChange(value);
                                        }
                                        else {
                                            setKeyName(name);
                                            setKeyError(`"${value}" is already in use.`);
                                            onNameChange(name);
                                        }
                                    }, className: 'card-text', readOnly: hideKey }),
                                React.createElement(FormFeedback, null, keyError))),
                        React.createElement("div", { className: 'section-entry', "data-test": 'section-display-name' },
                            React.createElement("h5", null,
                                "Section Display Name",
                                ' ',
                                React.createElement(Example, { text: mods &&
                                        mods.tooltipDescriptions &&
                                        mods.tooltipDescriptions &&
                                        typeof mods.tooltipDescriptions.cardSectionDisplayName ===
                                            'string'
                                        ? mods.tooltipDescriptions.cardSectionDisplayName
                                        : 'The name of the form section that will be shown to users of the form.', id: `${elementId}_titleinfo`, type: 'help' })),
                            React.createElement(Input, { value: schemaData.title || '', placeholder: 'Title', type: 'text', onChange: (ev) => onChange(Object.assign(Object.assign({}, schema), { title: ev.target.value }), uischema), className: 'card-text' })),
                        React.createElement("div", { className: 'section-entry', "data-test": 'section-description' },
                            React.createElement("h5", null,
                                "Section Description",
                                ' ',
                                React.createElement(Example, { text: mods &&
                                        mods.tooltipDescriptions &&
                                        mods.tooltipDescriptions &&
                                        typeof mods.tooltipDescriptions.cardSectionDescription ===
                                            'string'
                                        ? mods.tooltipDescriptions.cardSectionDescription
                                        : 'A description of the section which will be visible on the form.', id: `${elementId}_descriptioninfo`, type: 'help' })),
                            React.createElement(Input, { value: schemaData.description || '', placeholder: 'Description', type: 'text', onChange: (ev) => onChange(Object.assign(Object.assign({}, schema), { description: ev.target.value }), uischema), className: 'card-text' })),
                        React.createElement(Alert, { style: {
                                display: unsupportedFeatures.length === 0 ? 'none' : 'block',
                            }, color: 'warning' },
                            React.createElement("h5", null, "Unsupported Features:"),
                            unsupportedFeatures.map((message) => (React.createElement("li", { key: `${elementId}_${message}` }, message))))),
                    React.createElement("div", { className: 'section-body' },
                        React.createElement(DragDropContext, { onDragEnd: (result) => onDragEnd(result, {
                                schema,
                                uischema,
                                onChange,
                                definitionData,
                                definitionUi,
                                categoryHash,
                            }) },
                            React.createElement(Droppable, { droppableId: 'droppable' }, (providedDroppable) => (React.createElement("div", Object.assign({ ref: providedDroppable.innerRef }, providedDroppable.droppableProps),
                                generateElementComponentsFromSchemas({
                                    schemaData: schema,
                                    uiSchemaData: uischema,
                                    onChange,
                                    path,
                                    definitionData,
                                    definitionUi,
                                    cardOpenArray,
                                    setCardOpenArray,
                                    allFormInputs,
                                    mods,
                                    categoryHash,
                                    Card,
                                    Section,
                                }).map((element, index) => (React.createElement(Draggable, { key: element.key, draggableId: element.key, index: index }, (providedDraggable) => (React.createElement("div", Object.assign({ ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps), element))))),
                                providedDroppable.placeholder))))),
                    React.createElement("div", { className: 'section-footer' },
                        ((_e = mods === null || mods === void 0 ? void 0 : mods.components) === null || _e === void 0 ? void 0 : _e.add) && mods.components.add(addProperties),
                        !((_f = mods === null || mods === void 0 ? void 0 : mods.components) === null || _f === void 0 ? void 0 : _f.add) && (React.createElement(Add, { tooltipDescription: ((mods || {}).tooltipDescriptions || {}).add, addElem: (choice) => {
                                if (choice === 'card') {
                                    addCardObj(addProperties);
                                }
                                else if (choice === 'section') {
                                    addSectionObj(addProperties);
                                }
                            }, hidden: hideAddButton }))),
                    React.createElement("div", { className: 'section-interactions' },
                        React.createElement("span", { id: `${elementId}_editinfo` },
                            React.createElement(FontAwesomeIcon, { icon: faPencilAlt, onClick: () => setModalOpen(true) })),
                        React.createElement(UncontrolledTooltip, { placement: 'top', target: `${elementId}_editinfo` }, "Additional configurations for this form element"),
                        React.createElement(FBCheckbox, { onChangeValue: () => onRequireToggle(), isChecked: required, label: 'Required', id: `${elementId}_required` }))),
                React.createElement(CardModal, { componentProps: {
                        dependents,
                        neighborNames,
                        name: keyName,
                        schema,
                        type: 'object',
                        'ui:column': (_g = uischema['ui:column']) !== null && _g !== void 0 ? _g : '',
                        'ui:options': (_h = uischema['ui:options']) !== null && _h !== void 0 ? _h : '',
                    }, isOpen: modalOpen, onClose: () => setModalOpen(false), onChange: (newComponentProps) => {
                        onDependentsChange(newComponentProps.dependents);
                        onChange(schema, Object.assign(Object.assign({}, uischema), { 'ui:column': newComponentProps['ui:column'] }));
                    }, TypeSpecificParameters: CardDefaultParameterInputs }))),
        !((_j = mods === null || mods === void 0 ? void 0 : mods.components) === null || _j === void 0 ? void 0 : _j.add) && (React.createElement(Add, { tooltipDescription: ((mods || {}).tooltipDescriptions || {}).add, addElem: (choice) => {
                if (choice === 'card') {
                    addCardObj(parentProperties);
                }
                else if (choice === 'section') {
                    addSectionObj(parentProperties);
                }
                setCardOpen(false);
            } }))));
}

const arrows = {
    '& .arrows': {
        float: 'right',
        '& .fa-arrow-up, & .fa-arrow-down': {
            'border-radius': '4px',
            padding: '.25em',
            margin: '0 .5em 0 0',
            border: '1px solid #1d71ad',
            color: '#1d71ad',
            height: '28px',
            width: '28px',
        },
    },
};

const PlaceholderInput = ({ parameters, onChange, }) => {
    const [elementId] = useState(getRandomId());
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", null,
            "Placeholder",
            ' ',
            React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder', target: '_blank', rel: 'noopener noreferrer' },
                React.createElement(Example, { id: `${elementId}_placeholder`, type: 'help', text: 'Hint to the user as to what kind of information is expected in the field' }))),
        React.createElement(Input, { value: parameters['ui:placeholder'] ? parameters['ui:placeholder'] : '', placeholder: 'Placeholder', key: 'placeholder', type: 'text', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { 'ui:placeholder': ev.target.value }));
            }, className: 'card-modal-text' })));
};

const formatDictionary = {
    '': 'None',
    email: 'Email',
    hostname: 'Hostname',
    uri: 'URI',
    regex: 'Regular Expression',
};
const formatTypeDictionary = {
    email: 'email',
    url: 'uri',
};
const autoDictionary = {
    '': 'None',
    email: 'Email',
    username: 'User Name',
    password: 'Password',
    'street-address': 'Street Address',
    country: 'Country',
};
// specify the inputs required for a string type object
const CardShortAnswerParameterInputs = ({ parameters, onChange, }) => {
    const [elementId] = useState(getRandomId());
    return (React.createElement("div", null,
        React.createElement("h4", null, "Minimum Length"),
        React.createElement(Input, { value: parameters.minLength ? parameters.minLength : '', placeholder: 'Minimum Length', key: 'minLength', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { minLength: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null, "Maximum Length"),
        React.createElement(Input, { value: parameters.maxLength ? parameters.maxLength : '', placeholder: 'Maximum Length', key: 'maxLength', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { maxLength: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null,
            "Regular Expression Pattern",
            ' ',
            React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions', target: '_blank', rel: 'noopener noreferrer' },
                React.createElement(Example, { id: `${elementId}_regex`, type: 'help', text: 'Regular expression pattern that this must satisfy' }))),
        React.createElement(Input, { value: parameters.pattern ? parameters.pattern : '', placeholder: 'Regular Expression Pattern', key: 'pattern', type: 'text', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { pattern: ev.target.value }));
            }, className: 'card-modal-text' }),
        React.createElement("h4", null,
            "Format",
            ' ',
            React.createElement(Example, { id: `${elementId}_format`, type: 'help', text: 'Require string input to match a certain common format' })),
        React.createElement(Select, { value: {
                value: Object.keys(formatDictionary).includes(parameters.format)
                    ? formatDictionary[parameters.format]
                    : '',
                label: Object.keys(formatDictionary).includes(parameters.format)
                    ? formatDictionary[parameters.format]
                    : 'None',
            }, placeholder: 'Format', key: 'format', options: Object.keys(formatDictionary).map((key) => ({
                value: key,
                label: formatDictionary[key],
            })), onChange: (val) => {
                onChange(Object.assign(Object.assign({}, parameters), { format: val.value }));
            }, className: 'card-modal-select' }),
        React.createElement("h5", null,
            "Auto Complete Category",
            ' ',
            React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete', target: '_blank', rel: 'noopener noreferrer' },
                React.createElement(Example, { id: `${elementId}_autocomplete`, type: 'help', text: "Suggest entries based on the user's browser history" }))),
        React.createElement(Select, { value: {
                value: parameters['ui:autocomplete']
                    ? autoDictionary[typeof parameters['ui:autocomplete'] === 'string'
                        ? parameters['ui:autocomplete']
                        : '']
                    : '',
                label: parameters['ui:autocomplete']
                    ? autoDictionary[typeof parameters['ui:autocomplete'] === 'string'
                        ? parameters['ui:autocomplete']
                        : '']
                    : 'None',
            }, placeholder: 'Auto Complete', key: 'ui:autocomplete', options: Object.keys(autoDictionary).map((key) => ({
                value: key,
                label: autoDictionary[key],
            })), onChange: (val) => {
                onChange(Object.assign(Object.assign({}, parameters), { 'ui:autocomplete': val.value }));
            }, className: 'card-modal-select' }),
        React.createElement(PlaceholderInput, { parameters: parameters, onChange: onChange }),
        React.createElement("h4", null,
            "Column Size",
            ' ',
            React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout', target: '_blank', rel: 'noopener noreferrer' },
                React.createElement(Example, { id: `${elementId}_column_size`, type: 'help', text: 'Set the column size of the input' }))),
        React.createElement(Input, { value: parameters['ui:column'] ? parameters['ui:column'] : '', placeholder: 'Column size', key: 'ui:column', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { 'ui:column': ev.target.value }));
            }, className: 'card-modal-text' }),
        React.createElement("div", { className: 'card-modal-boolean' },
            React.createElement(FBCheckbox, { onChangeValue: () => {
                    onChange(Object.assign(Object.assign({}, parameters), { 'ui:autofocus': parameters['ui:autofocus']
                            ? parameters['ui:autofocus'] !== true
                            : true }));
                }, isChecked: parameters['ui:autofocus']
                    ? parameters['ui:autofocus'] === true
                    : false, label: 'Auto Focus' }))));
};
const ShortAnswerField = ({ parameters, onChange }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, "Default value"),
        React.createElement(Input, { value: parameters.default, placeholder: 'Default', type: formatTypeDictionary[parameters.format] || 'text', onChange: (ev) => onChange(Object.assign(Object.assign({}, parameters), { default: ev.target.value })), className: 'card-text' })));
};
const Password = ({ parameters, onChange }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, "Default password"),
        React.createElement(Input, { value: parameters.default, placeholder: 'Default', type: 'password', onChange: (ev) => onChange(Object.assign(Object.assign({}, parameters), { default: ev.target.value })), className: 'card-text' })));
};
const shortAnswerInput = {
    shortAnswer: {
        displayName: 'Short Answer',
        matchIf: [
            {
                types: ['string'],
            },
            ...['email', 'hostname', 'uri', 'regex'].map((format) => ({
                types: ['string'],
                format,
            })),
        ],
        defaultDataSchema: {},
        defaultUiSchema: {},
        type: 'string',
        cardBody: ShortAnswerField,
        modalBody: CardShortAnswerParameterInputs,
    },
    password: {
        displayName: 'Password',
        matchIf: [
            {
                types: ['string'],
                widget: 'password',
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {
            'ui:widget': 'password',
        },
        type: 'string',
        cardBody: Password,
        modalBody: CardShortAnswerParameterInputs,
    },
};

// specify the inputs required for a string type object
const CardLongAnswerParameterInputs = ({ parameters, onChange, }) => {
    const [elementId] = useState(getRandomId());
    return (React.createElement("div", null,
        React.createElement("h4", null, "Minimum Length"),
        React.createElement(Input, { value: parameters.minLength ? parameters.minLength : '', placeholder: 'Minimum Length', key: 'minLength', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { minLength: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null, "Maximum Length"),
        React.createElement(Input, { value: parameters.maxLength ? parameters.maxLength : '', placeholder: 'Maximum Length', key: 'maxLength', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { maxLength: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null,
            "Regular Expression Pattern",
            ' ',
            React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions' },
                React.createElement(Example, { id: `${elementId}_regex`, type: 'help', text: 'Regular expression pattern that this must satisfy' }))),
        React.createElement(Input, { value: parameters.pattern ? parameters.pattern : '', placeholder: 'Regular Expression Pattern', key: 'pattern', type: 'text', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { pattern: ev.target.value }));
            }, className: 'card-modal-text' }),
        React.createElement(PlaceholderInput, { parameters: parameters, onChange: onChange }),
        React.createElement("div", { className: 'card-modal-boolean' },
            React.createElement(FBCheckbox, { onChangeValue: () => {
                    onChange(Object.assign(Object.assign({}, parameters), { 'ui:autofocus': parameters['ui:autofocus']
                            ? parameters['ui:autofocus'] !== true
                            : true }));
                }, isChecked: parameters['ui:autofocus']
                    ? parameters['ui:autofocus'] === true
                    : false, label: 'Auto Focus' }))));
};
const LongAnswer = ({ parameters, onChange }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, "Default value"),
        React.createElement(Input, { value: parameters.default, placeholder: 'Default', type: 'textarea', onChange: (ev) => onChange(Object.assign(Object.assign({}, parameters), { default: ev.target.value })), className: 'card-textarea' })));
};
const longAnswerInput = {
    longAnswer: {
        displayName: 'Long Answer',
        matchIf: [
            {
                types: ['string'],
                widget: 'textarea',
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {
            'ui:widget': 'textarea',
        },
        type: 'string',
        cardBody: LongAnswer,
        modalBody: CardLongAnswerParameterInputs,
    },
};

// specify the inputs required for a number type object
const CardNumberParameterInputs = ({ parameters, onChange, }) => {
    const [elementId] = useState(getRandomId());
    return (React.createElement("div", null,
        React.createElement("h4", null,
            "Multiple of",
            ' ',
            React.createElement(Example, { id: `${elementId}_multiple`, type: 'help', text: 'Require number to be a multiple of this number' })),
        React.createElement(Input, { value: parameters.multipleOf ? parameters.multipleOf : '', placeholder: 'ex: 2', key: 'multipleOf', type: 'number', onChange: (ev) => {
                let newVal = parseFloat(ev.target.value);
                if (Number.isNaN(newVal))
                    newVal = null;
                onChange(Object.assign(Object.assign({}, parameters), { multipleOf: newVal }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null, "Minimum"),
        React.createElement(Input, { value: parameters.minimum || parameters.exclusiveMinimum || '', placeholder: 'ex: 3', key: 'minimum', type: 'number', onChange: (ev) => {
                let newVal = parseFloat(ev.target.value);
                if (Number.isNaN(newVal))
                    newVal = null;
                // change either min or exclusiveMin depending on which one is active
                if (parameters.exclusiveMinimum) {
                    onChange(Object.assign(Object.assign({}, parameters), { exclusiveMinimum: newVal, minimum: null }));
                }
                else {
                    onChange(Object.assign(Object.assign({}, parameters), { minimum: newVal, exclusiveMinimum: null }));
                }
            }, className: 'card-modal-number' }),
        React.createElement("div", { className: 'card-modal-boolean' },
            React.createElement(FBCheckbox, { key: 'exclusiveMinimum', onChangeValue: () => {
                    const newMin = parameters.minimum || parameters.exclusiveMinimum;
                    if (parameters.exclusiveMinimum) {
                        onChange(Object.assign(Object.assign({}, parameters), { exclusiveMinimum: null, minimum: newMin }));
                    }
                    else {
                        onChange(Object.assign(Object.assign({}, parameters), { exclusiveMinimum: newMin, minimum: null }));
                    }
                }, isChecked: !!parameters.exclusiveMinimum, disabled: !parameters.minimum && !parameters.exclusiveMinimum, label: 'Exclusive Minimum' })),
        React.createElement("h4", null, "Maximum"),
        React.createElement(Input, { value: parameters.maximum || parameters.exclusiveMaximum || '', placeholder: 'ex: 8', key: 'maximum', type: 'number', onChange: (ev) => {
                let newVal = parseFloat(ev.target.value);
                if (Number.isNaN(newVal))
                    newVal = null;
                // change either max or exclusiveMax depending on which one is active
                if (parameters.exclusiveMinimum) {
                    onChange(Object.assign(Object.assign({}, parameters), { exclusiveMaximum: newVal, maximum: null }));
                }
                else {
                    onChange(Object.assign(Object.assign({}, parameters), { maximum: newVal, exclusiveMaximum: null }));
                }
            }, className: 'card-modal-number' }),
        React.createElement("div", { className: 'card-modal-boolean' },
            React.createElement(FBCheckbox, { key: 'exclusiveMaximum', onChangeValue: () => {
                    const newMax = parameters.maximum || parameters.exclusiveMaximum;
                    if (parameters.exclusiveMaximum) {
                        onChange(Object.assign(Object.assign({}, parameters), { exclusiveMaximum: null, maximum: newMax }));
                    }
                    else {
                        onChange(Object.assign(Object.assign({}, parameters), { exclusiveMaximum: newMax, maximum: null }));
                    }
                }, isChecked: !!parameters.exclusiveMaximum, disabled: !parameters.maximum && !parameters.exclusiveMaximum, label: 'Exclusive Maximum' }))));
};
const NumberField = ({ parameters, onChange }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, "Default number"),
        React.createElement(Input, { value: parameters.default, placeholder: 'Default', type: 'number', onChange: (ev) => onChange(Object.assign(Object.assign({}, parameters), { default: parseFloat(ev.target.value) })), className: 'card-number' })));
};
const numberInputs = {
    integer: {
        displayName: 'Integer',
        matchIf: [
            {
                types: ['integer'],
            },
            {
                types: ['integer'],
                widget: 'number',
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {},
        type: 'integer',
        cardBody: NumberField,
        modalBody: CardNumberParameterInputs,
    },
    number: {
        displayName: 'Number',
        matchIf: [
            {
                types: ['number'],
            },
        ],
        defaultDataSchema: {},
        defaultUiSchema: {},
        type: 'number',
        cardBody: NumberField,
        modalBody: CardNumberParameterInputs,
    },
};

// specify the inputs required for a string type object
const CardArrayParameterInputs = ({ parameters, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement("h4", null, "Minimum Items"),
        React.createElement(Input, { value: parameters.minItems || '', placeholder: 'ex: 2', key: 'minimum', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { minItems: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' }),
        React.createElement("h4", null, "Maximum Items"),
        React.createElement(Input, { value: parameters.maxItems || '', placeholder: 'ex: 2', key: 'maximum', type: 'number', onChange: (ev) => {
                onChange(Object.assign(Object.assign({}, parameters), { maxItems: parseInt(ev.target.value, 10) }));
            }, className: 'card-modal-number' })));
};
const InnerCard = ({ parameters, onChange, mods }) => {
    const [elementId] = useState(getRandomId);
    const newDataProps = {};
    const newUiProps = {};
    const allFormInputs = Object.assign({}, defaultFormInputs, (mods && mods.customFormInputs) || {});
    // parse components into data and ui relevant pieces
    Object.keys(parameters).forEach((propName) => {
        if (propName.startsWith('ui:*')) {
            newUiProps[propName.substring(4)] =
                parameters[propName];
        }
        else if (propName.startsWith('ui:')) {
            newUiProps[propName] =
                parameters[propName];
        }
        else if (!['name', 'required'].includes(propName)) {
            newDataProps[propName] =
                parameters[propName];
        }
    });
    const definitionData = parameters.definitionData
        ? parameters.definitionData
        : {};
    const definitionUi = parameters.definitionUi ? parameters.definitionUi : {};
    const [cardOpen, setCardOpen] = React.useState(false);
    if (parameters.type !== 'array') {
        return React.createElement("h4", null, "Not an array ");
    }
    return (React.createElement("div", { className: 'card-array' },
        React.createElement(FBCheckbox, { onChangeValue: () => {
                if (newDataProps.items.type === 'object') {
                    onChange(Object.assign(Object.assign({}, parameters), { items: Object.assign(Object.assign({}, newDataProps.items), { type: 'string' }) }));
                }
                else {
                    onChange(Object.assign(Object.assign({}, parameters), { items: Object.assign(Object.assign({}, newDataProps.items), { type: 'object' }) }));
                }
            }, isChecked: newDataProps.items.type === 'object', label: 'Section', id: `${elementId}_issection` }),
        generateElementComponentsFromSchemas({
            schemaData: { properties: { items: newDataProps.items } },
            uiSchemaData: { items: newUiProps.items },
            onChange: (schema, uischema) => {
                onChange(Object.assign(Object.assign({}, parameters), { items: schema.properties.items, 'ui:*items': uischema.items || {} }));
            },
            path: elementId,
            definitionData,
            definitionUi,
            hideKey: true,
            cardOpenArray: [cardOpen],
            setCardOpenArray: (newArr) => setCardOpen(newArr[0]),
            allFormInputs,
            mods,
            categoryHash: generateCategoryHash(allFormInputs),
            parentCardComponentProps: parameters,
            Card: (props) => React.createElement(Card, Object.assign({}, props, { showObjectNameInput: false })),
            Section,
        })));
};
function getInnerCardComponent({ defaultFormInputs, }) {
    return InnerCard;
}
const defaultFormInputs = Object.assign(Object.assign(Object.assign(Object.assign({}, defaultInputs), shortAnswerInput), longAnswerInput), numberInputs);
defaultFormInputs.array = {
    displayName: 'Array',
    matchIf: [
        {
            types: ['array'],
        },
    ],
    defaultDataSchema: {
        items: { type: 'string' },
    },
    defaultUiSchema: {},
    type: 'array',
    cardBody: getInnerCardComponent({ defaultFormInputs }),
    modalBody: CardArrayParameterInputs,
};
const ArrayInputs = {
    array: {
        displayName: 'Array',
        matchIf: [
            {
                types: ['array'],
            },
        ],
        defaultDataSchema: {
            items: { type: 'string' },
        },
        defaultUiSchema: {},
        type: 'array',
        cardBody: getInnerCardComponent({ defaultFormInputs }),
        modalBody: CardArrayParameterInputs,
    },
};

const CardReferenceParameterInputs = ({ parameters, onChange, }) => {
    return (React.createElement("div", null,
        React.createElement(PlaceholderInput, { parameters: parameters, onChange: onChange })));
};
const RefChoice = ({ parameters, onChange }) => {
    const pathArr = (parameters.$ref || '').split('/');
    const currentValueLabel = pathArr.length === 3 &&
        pathArr[0] === '#' &&
        pathArr[1] === 'definitions' &&
        (parameters.definitionData || {})[pathArr[2]]
        ? parameters.definitionData[pathArr[2]].title || parameters.$ref
        : parameters.$ref;
    return (React.createElement("div", { className: 'card-select' },
        React.createElement(Select, { value: {
                value: parameters.$ref,
                label: currentValueLabel,
            }, placeholder: 'Reference', options: Object.keys(parameters.definitionData || {}).map((key) => ({
                value: `#/definitions/${key}`,
                label: parameters.definitionData[key].title || `#/definitions/${key}`,
            })), onChange: (val) => {
                onChange(Object.assign(Object.assign({}, parameters), { $ref: val.value }));
            }, className: 'card-select' })));
};
const referenceInputs = {
    ref: {
        displayName: 'Reference',
        matchIf: [
            {
                types: ['null'],
                $ref: true,
            },
        ],
        defaultDataSchema: {
            $ref: '',
            title: '',
            description: '',
        },
        defaultUiSchema: {},
        type: 'string',
        cardBody: RefChoice,
        modalBody: CardReferenceParameterInputs,
    },
};

const DEFAULT_FORM_INPUTS = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, defaultInputs), referenceInputs), shortAnswerInput), longAnswerInput), numberInputs), ArrayInputs);

const useStyles$1 = createUseStyles({
    formBuilder: Object.assign(Object.assign({ 'text-align': 'center', '& .fa': {
            cursor: 'pointer',
        }, '& .fa-question-circle, & .fa-circle-question': {
            color: 'gray',
        }, '& .fa-asterisk': {
            'font-size': '.9em',
            color: 'green',
        }, '& .fa-plus-square, & .fa-square-plus': {
            color: 'green',
            'font-size': '1.5em',
            margin: '0 auto',
        } }, arrows), { '& .card-container': {
            '&:hover': {
                border: '1px solid green',
            },
            display: 'block',
            width: '70%',
            'min-width': '400px',
            margin: '2em auto',
            border: '1px solid gray',
            'border-radius': '4px',
            'background-color': 'white',
            '& h4': {
                width: '100%',
                'text-align': 'left',
                display: 'inline-block',
                color: '#138AC2',
                margin: '0.25em .5em 0 .5em',
                'font-size': '18px',
            },
            '& .d-flex': {
                'border-bottom': '1px solid gray',
            },
            '& .label': {
                float: 'left',
            },
        }, '& .card-container:hover': { border: '1px solid green' }, '& .card-dependent': {
            border: '1px dashed gray',
        }, '& .card-requirements': {
            border: '1px dashed black',
        }, '& .section-container': {
            '&:hover': {
                border: '1px solid green',
            },
            display: 'block',
            width: '90%',
            'min-width': '400px',
            margin: '2em auto',
            border: '1px solid gray',
            'border-radius': '4px',
            'background-color': 'white',
            '& h4': {
                width: '100%',
                'text-align': 'left',
                display: 'inline-block',
                color: '#138AC2',
                margin: '0.25em .5em 0 .5em',
                'font-size': '18px',
            },
            '& .d-flex': {
                'border-bottom': '1px solid gray',
            },
            '& .label': {
                float: 'left',
            },
        }, '& .section-container:hover': { border: '1px solid green' }, '& .section-dependent': {
            border: '1px dashed gray',
        }, '& .section-requirements': {
            border: '1px dashed black',
        }, '& .alert': {
            textAlign: 'left',
            width: '70%',
            margin: '1em auto',
            '& h5': {
                color: 'black',
                fontSize: '16px',
                fontWeight: 'bold',
                margin: '0',
            },
            '& .fa': { fontSize: '14px' },
        }, '& .disabled-unchecked-checkbox': {
            color: 'gray',
            '& div::before': { backgroundColor: 'lightGray' },
        }, '& .disabled-input': {
            '& input': { backgroundColor: 'lightGray' },
            '& input:focus': {
                backgroundColor: 'lightGray',
                border: '1px solid gray',
            },
        } }),
    formHead: {
        display: 'block',
        margin: '0 auto',
        'background-color': '#EBEBEB',
        border: '1px solid #858F96',
        'border-radius': '4px',
        width: '70%',
        padding: '10px',
        '& div': {
            width: '30%',
            display: 'inline-block',
            'text-align': 'left',
            padding: '10px',
        },
        '& .form-title': {
            'text-align': 'left',
        },
        '& .form-description': {
            'text-align': 'left',
        },
        '& h5': {
            'font-size': '14px',
            'line-height': '21px',
            'font-weight': 'bold',
        },
    },
    formBody: {
        display: 'flex',
        flexDirection: 'column',
        '& .fa-pencil-alt, & .fa-pencil': {
            border: '1px solid #1d71ad',
            color: '#1d71ad',
        },
        '& .modal-body': {
            maxHeight: '500px',
            overflowY: 'scroll',
        },
        '& .card-add': {
            cursor: 'pointer',
            display: 'block',
            color: '$green',
            fontSize: '1.5em',
        },
    },
    formFooter: {
        marginTop: '1em',
        textAlign: 'center',
        '& .fa': { cursor: 'pointer', color: '$green', fontSize: '1.5em' },
    },
});
function FormBuilder({ schema, uischema, onMount, onChange, mods, className, }) {
    var _a, _b, _c;
    const classes = useStyles$1();
    const schemaData = parse(schema);
    schemaData.type = 'object';
    const uiSchemaData = parse(uischema);
    const allFormInputs = Object.assign({}, DEFAULT_FORM_INPUTS, (mods && mods.customFormInputs) || {});
    const unsupportedFeatures = checkForUnsupportedFeatures(schemaData, uiSchemaData, allFormInputs);
    const elementNum = countElementsFromSchema(schemaData);
    const defaultCollapseStates = [...Array(elementNum)].map(() => false);
    const [cardOpenArray, setCardOpenArray] = React.useState(defaultCollapseStates);
    const categoryHash = generateCategoryHash(allFormInputs);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const addProperties = {
        schema: schemaData,
        uischema: uiSchemaData,
        mods: mods,
        onChange: (newSchema, newUiSchema) => onChange(stringify(newSchema), stringify(newUiSchema)),
        definitionData: schemaData.definitions,
        definitionUi: uiSchemaData.definitions,
        categoryHash,
    };
    const hideAddButton = schemaData.properties && Object.keys(schemaData.properties).length !== 0;
    useEffect(() => {
        if (isFirstRender) {
            onMount &&
                onMount({
                    categoryHash,
                });
            setIsFirstRender(false);
        }
    }, [isFirstRender, onMount, categoryHash]);
    return (React.createElement("div", { className: `${classes.formBuilder} ${className || ''}` },
        React.createElement(Alert, { style: {
                display: unsupportedFeatures.length === 0 ? 'none' : 'block',
            }, color: 'warning' },
            React.createElement("h5", null, "Unsupported Features:"),
            unsupportedFeatures.map((message, index) => (React.createElement("li", { key: index }, message)))),
        (!mods || mods.showFormHead !== false) && (React.createElement("div", { className: classes.formHead, "data-test": 'form-head' },
            React.createElement("div", null,
                React.createElement("h5", { "data-test": 'form-name-label' }, mods &&
                    mods.labels &&
                    typeof mods.labels.formNameLabel === 'string'
                    ? mods.labels.formNameLabel
                    : 'Form Name'),
                React.createElement(Input, { value: schemaData.title || '', placeholder: 'Title', type: 'text', onChange: (ev) => {
                        onChange(stringify(Object.assign(Object.assign({}, schemaData), { title: ev.target.value })), uischema);
                    }, className: 'form-title' })),
            React.createElement("div", null,
                React.createElement("h5", { "data-test": 'form-description-label' }, mods &&
                    mods.labels &&
                    typeof mods.labels.formDescriptionLabel === 'string'
                    ? mods.labels.formDescriptionLabel
                    : 'Form Description'),
                React.createElement(Input, { value: schemaData.description || '', placeholder: 'Description', type: 'text', onChange: (ev) => onChange(stringify(Object.assign(Object.assign({}, schemaData), { description: ev.target.value })), uischema), className: 'form-description' })))),
        React.createElement("div", { className: `form-body ${classes.formBody}` },
            React.createElement(DragDropContext, { onDragEnd: (result) => onDragEnd(result, {
                    schema: schemaData,
                    uischema: uiSchemaData,
                    onChange: (newSchema, newUiSchema) => onChange(stringify(newSchema), stringify(newUiSchema)),
                    definitionData: schemaData.definitions,
                    definitionUi: uiSchemaData.definitions,
                    categoryHash,
                }) },
                React.createElement(Droppable, { droppableId: 'droppable' }, (providedDroppable) => (React.createElement("div", Object.assign({ ref: providedDroppable.innerRef }, providedDroppable.droppableProps),
                    generateElementComponentsFromSchemas({
                        schemaData,
                        uiSchemaData,
                        onChange: (newSchema, newUiSchema) => onChange(stringify(newSchema), stringify(newUiSchema)),
                        definitionData: schemaData.definitions,
                        definitionUi: uiSchemaData.definitions,
                        path: 'root',
                        cardOpenArray,
                        setCardOpenArray,
                        allFormInputs,
                        mods,
                        categoryHash,
                        Card,
                        Section,
                    }).map((element, index) => (React.createElement(Draggable, { key: element.key, draggableId: element.key, index: index }, (providedDraggable) => (React.createElement("div", Object.assign({ ref: providedDraggable.innerRef }, providedDraggable.draggableProps, providedDraggable.dragHandleProps), element))))),
                    providedDroppable.placeholder))))),
        React.createElement("div", { className: `form-footer ${classes.formFooter}` },
            ((_a = mods === null || mods === void 0 ? void 0 : mods.components) === null || _a === void 0 ? void 0 : _a.add) && mods.components.add(addProperties),
            !((_b = mods === null || mods === void 0 ? void 0 : mods.components) === null || _b === void 0 ? void 0 : _b.add) && (React.createElement(Add, { tooltipDescription: ((mods || {}).tooltipDescriptions || {}).add, labels: (_c = mods === null || mods === void 0 ? void 0 : mods.labels) !== null && _c !== void 0 ? _c : {}, addElem: (choice) => {
                    if (choice === 'card') {
                        addCardObj(addProperties);
                    }
                    else if (choice === 'section') {
                        addSectionObj(addProperties);
                    }
                }, hidden: hideAddButton })))));
}

function CardGallery({ definitionSchema, definitionUiSchema, onChange, mods, categoryHash, }) {
    var _a, _b;
    const elementNum = countElementsFromSchema({
        properties: definitionSchema,
    });
    const defaultCollapseStates = [...Array(elementNum)].map(() => false);
    const [cardOpenArray, setCardOpenArray] = React.useState(defaultCollapseStates);
    const allFormInputs = Object.assign({}, DEFAULT_FORM_INPUTS, (mods && mods.customFormInputs) || {});
    const componentArr = generateElementComponentsFromSchemas({
        schemaData: { properties: definitionSchema },
        uiSchemaData: definitionUiSchema,
        onChange: (newDefinitions, newDefinitionUis) => {
            const oldUi = newDefinitionUis;
            const newUi = {};
            Object.keys(oldUi).forEach((definedUi) => {
                if (!['definitions', 'ui:order'].includes(definedUi))
                    newUi[definedUi] = oldUi[definedUi];
            });
            onChange(newDefinitions.properties, newUi);
        },
        path: 'definitions',
        definitionData: definitionSchema,
        definitionUi: definitionUiSchema,
        cardOpenArray,
        setCardOpenArray,
        allFormInputs,
        mods,
        categoryHash,
        Card,
        Section,
    }).map((element) => (React.createElement("div", { key: typeof element.key === 'string' ? element.key : '', className: 'form_gallery_container' }, element)));
    const hideAddButton = !!definitionSchema && Object.keys(definitionSchema).length !== 0;
    const addProperties = {
        schema: { properties: definitionSchema },
        uischema: definitionUiSchema,
        mods: mods,
        onChange: (newDefinitions, newDefinitionUis) => {
            const oldUi = newDefinitionUis;
            const newUi = {};
            Object.keys(oldUi).forEach((definedUiSchemaKey) => {
                if (!['definitions', 'ui:order'].includes(definedUiSchemaKey))
                    newUi[definedUiSchemaKey] = oldUi[definedUiSchemaKey];
            });
            onChange(newDefinitions.properties, newUi);
        },
        definitionData: definitionSchema,
        definitionUi: definitionUiSchema,
        categoryHash,
    };
    return (React.createElement("div", { className: 'form_gallery' },
        componentArr,
        componentArr.length === 0 && React.createElement("h5", null, "No components in \"definitions\""),
        React.createElement("div", { className: 'form_footer' },
            ((_a = mods === null || mods === void 0 ? void 0 : mods.components) === null || _a === void 0 ? void 0 : _a.add) && mods.components.add(addProperties),
            !((_b = mods === null || mods === void 0 ? void 0 : mods.components) === null || _b === void 0 ? void 0 : _b.add) && (React.createElement(Add, { tooltipDescription: ((mods || {}).tooltipDescriptions || {}).add, addElem: (choice) => {
                    if (choice === 'card') {
                        addCardObj(addProperties);
                    }
                    else if (choice === 'section') {
                        addSectionObj(addProperties);
                    }
                }, hidden: hideAddButton })))));
}

const useStyles = createUseStyles({
    preDefinedGallery: Object.assign(Object.assign({ display: 'flex', flexDirection: 'column', 'text-align': 'center', '& .fa': {
            cursor: 'pointer',
        }, '& .fa-question-circle, & .fa-circle-question': {
            color: 'gray',
        }, '& .fa-asterisk': {
            'font-size': '.9em',
            color: 'green',
        } }, arrows), { '& .form_footer': {
            marginTop: '1em',
            textAlign: 'center',
            '& .fa': { cursor: 'pointer', color: '$green', fontSize: '1.5em' },
        }, '& .fa-plus-square & .fa-square-plus': {
            color: 'green',
            'font-size': '1.5em',
            margin: '0 auto',
        }, '& .card-container': {
            '&:hover': {
                border: '1px solid green',
            },
            width: '70%',
            'min-width': '400px',
            margin: '2em auto',
            border: '1px solid gray',
            'border-radius': '4px',
            'background-color': 'white',
            '& h4': {
                width: '100%',
                'text-align': 'left',
                display: 'inline-block',
                color: '#138AC2',
                margin: '0.25em .5em 0 .5em',
                'font-size': '18px',
            },
            '& .d-flex': {
                'border-bottom': '1px solid gray',
            },
            '& .label': {
                float: 'left',
            },
        }, '& .card-requirements': {
            border: '1px dashed black',
        }, '& .section-container': {
            '&:hover': {
                border: '1px solid green',
            },
            display: 'block',
            width: '90%',
            'min-width': '400px',
            margin: '2em auto',
            border: '1px solid gray',
            'border-radius': '4px',
            'background-color': 'white',
            '& h4': {
                width: '100%',
                'text-align': 'left',
                display: 'inline-block',
                color: '#138AC2',
                margin: '0.25em .5em 0 .5em',
                'font-size': '18px',
            },
            '& .d-flex': {
                'border-bottom': '1px solid gray',
            },
            '& .label': {
                float: 'left',
            },
        }, '& .section-dependent': {
            border: '1px dashed gray',
        }, '& .section-requirements': {
            border: '1px dashed black',
        }, '& .fa-pencil-alt, & .fa-pencil': {
            border: '1px solid #1d71ad',
            color: '#1d71ad',
        }, '& .modal-body': {
            maxHeight: '500px',
            overflowY: 'scroll',
        }, '& .card-container:hover': { border: '1px solid green' }, '& .card-dependent': { border: '1px dashed gray' }, '& .card-add': {
            cursor: 'pointer',
            display: 'block',
            color: '$green',
            fontSize: '1.5em',
        }, '& .section-container:hover': { border: '1px solid green' } }),
});
function PredefinedGallery({ schema, uischema, onChange, mods, }) {
    const classes = useStyles();
    const schemaData = React.useMemo(() => parse(schema) || {}, [schema]);
    const uiSchemaData = React.useMemo(() => parse(uischema) || {}, [uischema]);
    const allFormInputs = excludeKeys(Object.assign({}, DEFAULT_FORM_INPUTS, (mods && mods.customFormInputs) || {}), mods && mods.deactivatedFormInputs);
    const categoryHash = generateCategoryHash(allFormInputs);
    React.useEffect(() => {
        if (!uiSchemaData.definitions) {
            // eslint-disable-next-line no-console
            console.log('Parsing UI schema to assign UI for definitions');
            // need to create definitions from scratch
            const references = [];
            // recursively search for all $refs in the schemaData
            const findRefs = (name, schemaObject) => {
                if (!schemaObject)
                    return;
                if (typeof schemaObject === 'object')
                    Object.keys(schemaObject).forEach((key) => {
                        if (typeof key === 'string') {
                            if (key === '$ref')
                                references.push(name);
                            findRefs(key, schemaObject[key]);
                        }
                    });
                if (Array.isArray(schemaObject))
                    schemaObject.forEach((innerObj) => {
                        findRefs(name, innerObj);
                    });
            };
            findRefs('root', schemaData);
            uiSchemaData.definitions = {};
            const referenceSet = new Set(references);
            Object.keys(uiSchemaData).forEach((uiProp) => {
                if (referenceSet.has(uiProp))
                    uiSchemaData.definitions[uiProp] = uiSchemaData[uiProp];
            });
            if (!Object.keys(uiSchemaData.definitions).length) {
                uiSchemaData.definitions = undefined;
            }
            onChange(stringify(schemaData), stringify(uiSchemaData));
        }
    }, [uiSchemaData, schemaData, onChange]);
    return (React.createElement("div", { className: classes.preDefinedGallery },
        React.createElement(CardGallery, { definitionSchema: schemaData.definitions || {}, definitionUiSchema: uiSchemaData.definitions || {}, onChange: (newDefinitions, newDefinitionsUi) => {
                // propagate changes in ui definitions to all relavant parties in main schema
                propagateDefinitionChanges(Object.assign(Object.assign({}, schemaData), { definitions: newDefinitions }), Object.assign(Object.assign({}, uiSchemaData), { definitions: newDefinitionsUi }), (newSchema, newUiSchema) => onChange(stringify(newSchema), stringify(newUiSchema)), categoryHash);
            }, mods: mods, categoryHash: categoryHash })));
}

export { FormBuilder, PredefinedGallery, addCardObj, addSectionObj };
