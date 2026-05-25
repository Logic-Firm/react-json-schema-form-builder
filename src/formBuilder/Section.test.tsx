import { mount } from 'enzyme';
import React from 'react';
import DEFAULT_FORM_INPUTS from './defaults/defaultFormInputs';
import Section from './Section';

// mocks to record events
const mockEvent = jest.fn((_arg0?: any, _arg1?: any) => {});

const defaultSchema = {};

const defaultUiSchema = {};

const props = {
  name: 'test',
  required: false,
  schema: defaultSchema,
  uischema: defaultUiSchema,
  onChange: (schema, uischema) => mockEvent(schema, uischema),
  onNameChange: (newName) => mockEvent(newName),
  onRequireToggle: () => mockEvent('toggledRequire'),
  onDelete: () => mockEvent('delete'),
  onDependentsChange: () => mockEvent(),
  onMoveUp: () => mockEvent(),
  onMoveDown: () => mockEvent(),
  path: 'section',
  definitionData: {},
  definitionUi: {},
  allFormInputs: DEFAULT_FORM_INPUTS,
  parentProperties: {
    schema: {},
    uischema: {},
    onChange: mockEvent,
    definitionData: {},
    definitionUi: {},
    categoryHash: {},
  },
  cardOpen: false,
  setCardOpen: mockEvent,
  categoryHash: {},
};

describe('Section', () => {
  it('renders without error', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    expect(wrapper.exists('.section-container')).toBeTruthy();
  });

  it('uses mods.tooltipDescriptions', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <Section
        {...props}
        mods={{
          tooltipDescriptions: {
            cardSectionObjectName: 'test object name',
            cardSectionDisplayName: 'test display name',
            cardSectionDescription: 'test description',
          },
        }}
      />,
      { attachTo: div },
    );
    expect(
      wrapper.find('[data-test="section-object-name"] Tooltip').props()
        .children,
    ).toEqual('test object name');
    expect(
      wrapper.find('[data-test="section-display-name"] Tooltip').props()
        .children,
    ).toEqual('test display name');
    expect(
      wrapper.find('[data-test="section-description"] Tooltip').props()
        .children,
    ).toEqual('test description');
  });

  it('calls the delete function on delete', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    const deleteButton = wrapper.find('.fa-xmark').first();
    deleteButton.simulate('click');
    expect(mockEvent).toHaveBeenCalledTimes(1);
    expect(mockEvent).toHaveBeenCalledWith('delete');
    mockEvent.mockClear();
  });

  it('keeps section child body outside the collapsible edit area', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    expect(wrapper.find('.section-body').exists()).toBeTruthy();
    expect(wrapper.find('.collapse').first().find('.section-body').exists()).toBeFalsy();
  });

  it('renders a custom delete button from mods for sections', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <Section
        {...props}
        mods={{
          components: {
            delete: () => (
              <button className='custom-section-delete'>Delete Section</button>
            ),
          },
        }}
      />,
      { attachTo: div },
    );
    expect(wrapper.find('.custom-section-delete').exists()).toBeTruthy();
    expect(wrapper.find('.fa-xmark').exists()).toBeFalsy();
  });

  it('calls onDelete from custom section delete button', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <Section
        {...props}
        mods={{
          components: {
            delete: (deleteProps) => (
              <button
                className='custom-section-delete-trigger'
                data-element-type={deleteProps?.elementType}
                onClick={() => deleteProps?.onDelete && deleteProps.onDelete()}
              >
                Delete Section
              </button>
            ),
          },
        }}
      />,
      { attachTo: div },
    );
    expect(
      wrapper
        .find('.custom-section-delete-trigger')
        .first()
        .prop('data-element-type'),
    ).toEqual('section');
    wrapper.find('.custom-section-delete-trigger').first().simulate('click');
    expect(mockEvent).toHaveBeenCalledTimes(1);
    expect(mockEvent).toHaveBeenCalledWith('delete');
    mockEvent.mockClear();
  });

  it('renders a custom collapse toggle element from mods', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const collapseToggle = jest.fn(({ isOpen }) => (
      <span className='custom-collapse-toggle'>{isOpen ? 'Open' : 'Closed'}</span>
    ));
    const wrapper = mount(
      <Section
        {...props}
        mods={{
          components: {
            collapseToggle,
          },
        }}
      />,
      { attachTo: div },
    );
    expect(collapseToggle).toHaveBeenCalledWith({
      elementType: 'section',
      isOpen: false,
      isDisabled: false,
    });
    expect(wrapper.find('.custom-collapse-toggle').exists()).toBeTruthy();
    expect(wrapper.find('.toggle-collapse .fa-caret-right').exists()).toBeFalsy();
  });

  it('renders a custom section title from mods', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const title = jest.fn(({ defaultTitle }) => (
      <span className='custom-section-title'>Section: {defaultTitle}</span>
    ));
    const wrapper = mount(
      <Section
        {...props}
        mods={{
          components: {
            title,
          },
        }}
      />,
      { attachTo: div },
    );
    expect(title).toHaveBeenCalledWith({
      elementType: 'section',
      defaultTitle: 'test',
      sectionProps: {
        name: 'test',
        schema: {},
        uischema: {},
        reference: undefined,
        dependent: undefined,
        parent: undefined,
      },
      isOpen: false,
    });
    expect(wrapper.find('.custom-section-title').exists()).toBeTruthy();
    expect(wrapper.find('.custom-section-title').first().text()).toContain(
      'Section: test',
    );
  });

  it('changes the key name of the section', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    const keyInput = wrapper.find('.card-text').first();
    keyInput.simulate('focus');
    keyInput.simulate('change', { target: { value: 'wow_key_change' } });
    keyInput.simulate('blur');
    keyInput.simulate('focus');
    keyInput.simulate('change', { target: { value: 'test' } });
    keyInput.simulate('blur');
    expect(mockEvent.mock.calls).toEqual([['wow_key_change'], ['test']]);
    mockEvent.mockClear();
  });

  it('changes the section title', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    const titleInput = wrapper.find('.card-text').at(2);
    titleInput.simulate('change', { target: { value: 'wow title change' } });
    expect(mockEvent.mock.calls).toEqual([[{ title: 'wow title change' }, {}]]);
    mockEvent.mockClear();
  });

  it('changes the section description', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    const descriptionInput = wrapper.find('.card-text').at(3);
    descriptionInput.simulate('change', {
      target: { value: 'wow description change' },
    });
    expect(mockEvent.mock.calls).toEqual([
      [{ title: 'wow description change' }, {}],
    ]);
    mockEvent.mockClear();
  });

  it('adds components to the internal schema', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<Section {...props} />, { attachTo: div });
    const plusButton = wrapper.find('.fa-square-plus').first();
    plusButton.simulate('click');
    const createButton = wrapper.find('button').at(1);
    createButton.simulate('click');
    expect(mockEvent.mock.calls).toEqual([
      [
        {
          properties: { newInput1: { title: 'New Input 1', type: 'string' } },
          dependencies: {},
          required: [],
          type: 'object',
        },
        { 'ui:order': ['newInput1'] },
      ],
    ]);
    mockEvent.mockClear();
  });
});
