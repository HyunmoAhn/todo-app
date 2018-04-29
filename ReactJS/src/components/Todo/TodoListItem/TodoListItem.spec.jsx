import React from 'react';
import { shallow } from 'enzyme';

import TodoListItem from './';

describe('<TodoListItem />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<TodoListItem />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match to snapshot when item.isEdit === true', () => {
    const item = {
      isEdit: true,
    };
    const wrapper = shallow(<TodoListItem item={item} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onToggleListItem when call handleToggleListItem', () => {
    const item = { id: 'mock-id' };
    const onToggleListItem = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        item={item}
        onToggleListItem={onToggleListItem}
      />,
    );

    wrapper.instance().handleToggleListItem();

    expect(onToggleListItem).toHaveBeenCalledTimes(1);
    expect(onToggleListItem).toHaveBeenCalledWith('mock-id');
  });

  it('should call onEditListItemValue when call handleEditListItmeValue', () => {
    const item = { id: 'mock-id' };
    const onEditListItemValue = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        item={item}
        onEditListItemValue={onEditListItemValue}
      />,
    );
    wrapper.setState({ value: 'mock-value' });

    wrapper.instance().handleEditListItemValue();

    expect(onEditListItemValue).toHaveBeenCalledTimes(1);
    expect(onEditListItemValue).toHaveBeenCalledWith('mock-id', 'mock-value');
  });

  it('should change state when call handleChangeEditValue', () => {
    const event = {
      target: {
        value: 'mock-value',
      },
    };
    const wrapper = shallow(<TodoListItem />);
    wrapper.setState({ value: 'initial-value' });

    wrapper.instance().handleChangeEditValue(event);

    expect(wrapper.state().value).toBe('mock-value');
  });

  it('should call onEditToggleListItem when call handleEditToggleListItem', () => {
    const item = { id: 'mock-id' };
    const onEditToggleListItem = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        item={item}
        onEditToggleListItem={onEditToggleListItem}
      />,
    );

    wrapper.instance().handleEditToggleListItem();

    expect(onEditToggleListItem).toHaveBeenCalledTimes(1);
    expect(onEditToggleListItem).toHaveBeenCalledWith('mock-id');
  });

  describe('test handleKeyPressEscape', () => {
    const item = { value: 'mock-value' };
    const handleEditToggleListItem = jest.spyOn(TodoListItem.prototype, 'handleEditToggleListItem');
    const handleCompleteItemEdit = jest.spyOn(TodoListItem.prototype, 'handleCompleteItemEdit');

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('when press Escape key', () => {
      const event = {
        key: 'Escape',
      };
      const wrapper = shallow(<TodoListItem item={item} />);
      wrapper.setState({ value: 'initial-value' });

      wrapper.instance().handleKeyPressEscape(event);

      expect(handleEditToggleListItem).toHaveBeenCalledTimes(1);
      expect(handleEditToggleListItem).toHaveBeenCalledWith();
      expect(wrapper.state().value).toBe('mock-value');
      expect(handleCompleteItemEdit).toHaveBeenCalledTimes(0);
    });

    it('when press Enter Key', () => {
      const event = {
        key: 'Enter',
      };
      const wrapper = shallow(<TodoListItem item={item} />);
      wrapper.setState({ value: 'initial-value' });

      wrapper.instance().handleKeyPressEscape(event);

      expect(wrapper.state().value).toBe('initial-value');
      expect(handleCompleteItemEdit).toHaveBeenCalledTimes(1);
      expect(handleCompleteItemEdit).toHaveBeenCalledWith();
    });

    it('when press another key', () => {
      const event = {
        key: 'another',
      };
      const wrapper = shallow(<TodoListItem item={item} />);
      wrapper.setState({ value: 'initial-value' });

      wrapper.instance().handleKeyPressEscape(event);

      expect(wrapper.state().value).toBe('initial-value');
      expect(handleCompleteItemEdit).toHaveBeenCalledTimes(0);
      expect(handleEditToggleListItem).toHaveBeenCalledTimes(0);
    });
  });

  it('should call functions when call handleCompleteItemEdit', () => {
    const handleEditToggleListItem = jest.spyOn(TodoListItem.prototype, 'handleEditToggleListItem');
    const handleEditListItemValue = jest.spyOn(TodoListItem.prototype, 'handleEditListItemValue');

    const wrapper = shallow(<TodoListItem />);

    wrapper.instance().handleCompleteItemEdit();

    expect(handleEditToggleListItem).toHaveBeenCalledTimes(1);
    expect(handleEditToggleListItem).toHaveBeenCalledWith();
    expect(handleEditListItemValue).toHaveBeenCalledTimes(1);
    expect(handleEditListItemValue).toHaveBeenCalledWith();
  });

  it('should call onDeleteListItem when call handleDeleteListItem', () => {
    const item = { id: 'mock-id' };
    const onDeleteListItem = jest.fn();

    const wrapper = shallow(
      <TodoListItem
        item={item}
        onDeleteListItem={onDeleteListItem}
      />,
    );

    wrapper.instance().handleDeleteListItem();

    expect(onDeleteListItem).toHaveBeenCalledTimes(1);
    expect(onDeleteListItem).toHaveBeenCalledWith('mock-id');
  });
});
