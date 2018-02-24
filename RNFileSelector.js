
import React, { Component } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

import { is } from 'immutable'
    
const { RNFileSelector } = NativeModules;

class FileSelector extends Component {
  static propTypes = {
    ...ViewPropTypes,

    filter: PropTypes.string,
    filterDirectories: PropTypes.bool,
    path: PropTypes.string,
    hiddenFiles: PropTypes.bool,
    closeMenu: PropTypes.bool,
    title: PropTypes.string,
    onDone: PropTypes.func,
    onCancel: PropTypes.func,
    editable: PropTypes.bool
  };

  static defaultProps = {
    visible: false,

    filter: "",
    filterDirectories: false,
    path: '',
    hiddenFiles: false,
    closeMenu: true,
    title: '',
    editable: false
  };

  static Show(props) {
    if (props.filter === undefined) {
        props.filter = FileSelector.defaultProps.filter
    } if (props.filterDirectories === undefined) {
        props.filterDirectories = FileSelector.defaultProps.filterDirectories
    } if (props.path === undefined) {
        props.path = FileSelector.defaultProps.path;
    } if (props.hiddenFiles === undefined) {
        props.hiddenFiles = FileSelector.defaultProps.hiddenFiles
    } if (props.closeMenu === undefined) {
        props.closeMenu = FileSelector.defaultProps.closeMenu
    } if (props.title === undefined) {
        props.title = FileSelector.defaultProps.title
    } if (props.editable === undefined) {
        props.editable = FileSelector.defaultProps.editable
    }

    RNFileSelector.Show(props, path => {
        props.onDone && props.onDone(path)
      }, () => {
        props.onCancel && props.onCancel()
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (is(this.props, nextProps)) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    this._show();
  }

  componentDidUpdate() {
    this._show();
  }

  _show() {
    if (this.props.visible) {
      FileSelector.Show({
        filter: this.props.filter,
        filterDirectories: this.props.filterDirectories,
        path: this.props.path,
        hiddenFiles: this.props.hiddenFiles,
        closeMenu: this.props.closeMenu,
        title: this.props.title,
        editable: this.props.editable,
        onDone: this.props.onDone,
        onCancel: this.props.onCancel
      });
    }
  }

  render() {
    return null;
  }
}


export default FileSelector;