import React from "react";

export default class GarbageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Garbage</h2>
        <input type="text" placeholder="Garbage type*" value={this.state.value} onChange={this.handleChange} />
        <input type="text" placeholder="Qty*" value={this.state.value} onChange={this.handleChange} />
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="0">Unit*</option>
          <option value="1">Count</option>
          <option value="2">Oz</option>
          <option value="3">lb</option>
          <option value="4">Kg</option>
        </select>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export class TrackLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Where are you?</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button></button>{/* HOME ADDRESS - HOUSE ICON */}
        <button>Track Location</button>
      </form>
    );
  }
}

export class TipSidebar extends React.Component{
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Where are you?</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button></button>{/* HOME ADDRESS - HOUSE ICON */}
        <button>Track Location</button>
      </form>
    );
  }
}