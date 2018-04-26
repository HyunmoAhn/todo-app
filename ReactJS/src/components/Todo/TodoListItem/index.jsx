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
  onDeleteListItem: PropTypes.func,
  onEditToggleListItem: PropTypes.func,
  onToggleListItem: PropTypes.func,
};
const defaultProps = {
  item: {},
  onDeleteListItem() {},
  onEditToggleListItem() {},
  onToggleListItem() {},
};

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this);
    this.handleEditToggleListItem = this.handleEditToggleListItem.bind(this);
    this.handleToggleListItem = this.handleToggleListItem.bind(this);
  }

  handleToggleListItem() {
    const { item, onToggleListItem } = this.props;

    onToggleListItem(item.id);
  }

  handleEditToggleListItem() {
    const { item, onEditToggleListItem } = this.props;

    onEditToggleListItem(item.id);
  }

  handleDeleteListItem() {
    const { item, onDeleteListItem } = this.props;

    onDeleteListItem(item.id);
  }

  render() {
    const { item } = this.props;
    const itemStatus = cx({
      completed: item.status === STATUS.COMPLETE,
      editing: item.isEdit,
    });

    return (
      <li className={itemStatus}>
        <div className="view">
          <input
            type="checkbox"
            checked={item.status === STATUS.COMPLETE}
            className="toggle"
            onClick={this.handleToggleListItem}
          />
          <label
            onDoubleClick={this.handleEditToggleListItem}
          >
            {item.value}
          </label>
          <button
            className="destroy"
            onClick={this.handleDeleteListItem}
          />
        </div>
        <input type="text" className="edit" />
      </li>
    );
  }
}

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;

export default TodoListItem;
