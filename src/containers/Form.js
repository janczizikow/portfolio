/* eslint-disable */
import React, { Component } from 'react';
import { Row, Col, FormGroup, Input, Label, Button } from '../components/UI';

export default class Form extends Component {
  state = {
    loading: false,
    error: false,
    formData: {
      name: '',
      email: '',
      message: '',
    },
  };

  handleChange = (e, name) => {
    this.setState({
      formData: {
        name: e.currentTarget.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
              <FormGroup>
                <Label htmlFor="name">name</Label>
                <Input
                  onChange={e => this.handleChange(e, 'name')}
                  value={this.state.formData.name}
                />
              </FormGroup>
            </Col>
            <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
              <FormGroup>
                <Label htmlFor="email">email</Label>
                <Input
                  rows="7"
                  type="email"
                  onChange={e => this.handleChange(e, 'email')}
                  value={this.state.formData.email}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="message">message</Label>
                <Input
                  tag="textarea"
                  onChange={e => this.handleChange(e, 'email')}
                  value={this.state.formData.email}
                />
              </FormGroup>
              <Button type="submit">Send</Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
