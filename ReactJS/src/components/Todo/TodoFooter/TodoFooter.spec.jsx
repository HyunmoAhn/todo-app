import React from 'react';
import { shallow } from 'enzyme';

import TodoFooter from './';

describe('<TodoFooter />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<TodoFooter />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClearCompletedItems when call handleClearCOmpletedItems', () => {
    const completedIds = ['mock-completed-id'];
    const onClearCompletedItems = jest.fn();
    const wrapper = shallow(
      <TodoFooter
        completedIds={completedIds}
        onClearCompletedItems={onClearCompletedItems}
      />,
    );

    wrapper.instance().handleClearCompletedItems();

    expect(onClearCompletedItems).toHaveBeenCalledTimes(1);
    expect(onClearCompletedItems).toHaveBeenCalledWith(completedIds);
  });
});
