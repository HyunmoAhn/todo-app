import React from 'react';
import { shallow } from 'enzyme';

import TodoHeader from './';

describe('<TodoHeader />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<TodoHeader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when call handleChange', () => {
    const event = {
      target: {
        value: 'mock-value',
      },
    };
    const wrapper = shallow(<TodoHeader />);
    wrapper.setState({
      value: 'initial-value',
    });

    wrapper.instance().handleChange(event);

    expect(wrapper.state().value).toBe('mock-value');
  });

  describe('test handleInputKeyPress', () => {
    const handleAddList = jest.spyOn(TodoHeader.prototype, 'handleAddList');

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('when press enter key', () => {
      const event = {
        key: 'Enter',
      };
      const wrapper = shallow(<TodoHeader />);
      wrapper.setState({
        value: 'initial-state',
      });

      wrapper.instance().handleInputKeyPress(event);

      expect(handleAddList).toHaveBeenCalledTimes(1);
      expect(handleAddList).toHaveBeenCalledWith();
      expect(wrapper.state().value).toBe('');
    });

    it('when press except enter key', () => {
      const event = {
        key: 'not-enter',
      };
      const wrapper = shallow(<TodoHeader />);
      wrapper.setState({
        value: 'initial-state',
      });

      wrapper.instance().handleInputKeyPress(event);

      expect(handleAddList).toHaveBeenCalledTimes(0);
      expect(wrapper.state().value).toBe('initial-state');
    });
  });

  describe('test handleAddList', () => {
    it('when state.value is existed', () => {
      const onAddListItem = jest.fn();
      const wrapper = shallow(<TodoHeader onAddListItem={onAddListItem} />);
      wrapper.setState({
        value: 'exist',
      });

      wrapper.instance().handleAddList();

      expect(onAddListItem).toHaveBeenCalledTimes(1);
      expect(onAddListItem).toHaveBeenCalledWith('exist');
    });


    it('when state.value is existed', () => {
      const onAddListItem = jest.fn();
      const wrapper = shallow(<TodoHeader onAddListItem={onAddListItem} />);
      wrapper.setState({
        value: '  ',
      });

      wrapper.instance().handleAddList();

      expect(onAddListItem).toHaveBeenCalledTimes(0);
    });
  });
});
