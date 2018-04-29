import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './';

describe('<TodoList />', () => {
  it('should match to snapshot when render default', () => {
    const todoList = [
      {
        status: 'mock-status',
        value: 'mock-value',
        id: 'mock-id',
      },
    ];
    const wrapper = shallow(<TodoList todoList={todoList} />);

    expect(wrapper).toMatchSnapshot();
  });
});
