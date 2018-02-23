
import React, { Component } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

    
const { RNFileSelector } = NativeModules;

class FileSelector extends Component {
  static Show(ref, props) {
    RNFileSelector.Show()
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
    }
  }

  render() {
    return null;
  }
}

FileSelector.propTypes = {
  ...ViewPropTypes,

};

FileSelector.defaultProps = {
  visible: false
};

export default FileSelector;