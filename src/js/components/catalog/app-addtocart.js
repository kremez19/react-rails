"use strict";
/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var AddToCart =
    React.createClass({
        handleClick: function () {
            AppActions.addItem(this.props.item);
        },
        render: function () {
            return <button className="btn btn-success" onClick={this.handleClick}>Add To cart</button>
        }
    });
module.exports = AddToCart;
