import React from 'react';
import { shallow, mount } from 'enzyme';

import Todo from './';

describe('<Todo />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<Todo />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChangeFilterStatus when call handleHashChange', () => {
    const onChangeFilterStatus = jest.fn();

    const wrapper = shallow(
      <Todo
        onChangeFilterStatus={onChangeFilterStatus}
      />,
    );
    wrapper.instance().handleHashChange();

    expect(onChangeFilterStatus).toHaveBeenCalledTimes(1);
    expect(onChangeFilterStatus).toHaveBeenCalledWith('all');
  });

  it('should test window event about hashchange', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    window.removeEventListener = jest.fn((event) => {
      delete map[event];
    });

    const wrapper = mount(<Todo />);

    expect(map.hashchange).toEqual(expect.any(Function));

    wrapper.unmount();
    expect(map.hashchange).toEqual();
  });
});
