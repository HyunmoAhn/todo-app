import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as STATUS from 'constants/status';

const propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
  }),
};
const defaultProps = {
  item: {},
};

class TodoListItem extends React.Component {
  render() {
    const { item } = this.props;
    const itemStatus = cx({
      complete: item.status === STATUS.COMPLETE,
      editing: item.status === STATUS.EDIT,
    });

    return (
      <li className={itemStatus}>
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>{item.value}</label>
          <button className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>
    );
  }
}

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;

export default TodoListItem;
