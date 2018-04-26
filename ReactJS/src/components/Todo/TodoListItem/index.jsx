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
  onEditListItemValue: PropTypes.func,
  onEditToggleListItem: PropTypes.func,
  onToggleListItem: PropTypes.func,
};
const defaultProps = {
  item: {},
  onDeleteListItem() {},
  onEditListItemValue() {},
  onEditToggleListItem() {},
  onToggleListItem() {},
};

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.item.value,
    };
    this.handleDeleteListItem = this.handleDeleteListItem.bind(this);
    this.handleEditListItemValue = this.handleEditListItemValue.bind(this);
    this.handleEditToggleListItem = this.handleEditToggleListItem.bind(this);
    this.handleToggleListItem = this.handleToggleListItem.bind(this);
    this.handleChangeEditValue = this.handleChangeEditValue.bind(this);
    this.handleKeyPressEscape = this.handleKeyPressEscape.bind(this);
    this.handleCompleteItemEdit = this.handleCompleteItemEdit.bind(this);
  }

  handleToggleListItem() {
    const { item, onToggleListItem } = this.props;

    onToggleListItem(item.id);
  }

  handleEditListItemValue() {
    const { item, onEditListItemValue } = this.props;

    onEditListItemValue(item.id, this.state.value);
  }

  handleChangeEditValue(e) {
    this.setState({ value: e.target.value });
  }

  handleEditToggleListItem() {
    const { item, onEditToggleListItem } = this.props;

    onEditToggleListItem(item.id);
  }

  handleKeyPressEscape(e) {
    if (e.key === 'Escape') {
      this.handleEditToggleListItem();
      this.setState({ value: this.props.item.value });
    } else if (e.key === 'Enter') {
      this.handleCompleteItemEdit();
    }
  }

  handleCompleteItemEdit() {
    this.handleEditToggleListItem();
    this.handleEditListItemValue();
  }

  handleDeleteListItem() {
    const { item, onDeleteListItem } = this.props;

    onDeleteListItem(item.id);
  }


  render() {
    const { item } = this.props;
    const itemStatus = cx({
      completed: item.status === STATUS.COMPLETE,
    });

    if (item.isEdit) {
      return (
        <li className="editing">
          <input
            autoFocus // eslint-disable-line jsx-a11y/no-autofocus
            type="text"
            className="edit"
            value={this.state.value}
            onChange={this.handleChangeEditValue}
            onKeyDown={this.handleKeyPressEscape}
            onBlur={this.handleCompleteItemEdit}
          />
        </li>
      );
    }

    return (
      <li className={itemStatus}>
        <div className="view">
          <input
            type="checkbox"
            checked={item.status === STATUS.COMPLETE}
            className="toggle"
            readOnly
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
      </li>
    );
  }
}

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;

export default TodoListItem;
