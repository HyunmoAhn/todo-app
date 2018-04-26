import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isAllCompleted: PropTypes.bool,
  onAddListItem: PropTypes.func,
  onToggleAllListItem: PropTypes.func,
};
const defaultProps = {
  isAllCompleted: false,
  onAddListItem() {},
  onToggleAllListItem() {},
};

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleAddList();
      this.setState({ value: '' });
    }
  }

  handleAddList() {
    if (this.state.value.trim()) {
      this.props.onAddListItem(this.state.value);
    } else {
      this.setState({ value: '' });
    }
  }

  render() {
    const { value } = this.state;
    const { isAllCompleted } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleInputKeyPress}
        />
        <input
          className="toggle-all"
          id="toggle-all"
          type="checkbox"
          checked={isAllCompleted}
          readOnly
          onClick={this.props.onToggleAllListItem}
        />
        <label style={{ top: '15px' }} htmlFor="toggle-all">Mark all async complete</label>
      </header>
    );
  }
}

TodoHeader.propTypes = propTypes;
TodoHeader.defaultProps = defaultProps;

export default TodoHeader;
