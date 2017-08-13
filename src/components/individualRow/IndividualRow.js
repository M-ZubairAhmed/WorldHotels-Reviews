import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import './individualRow.css';

export default class IndividualRow extends Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <Card>
            <Card.Content header={this.props.name} />
            <Card.Content>
              <Icon name="marker" />
              {this.props.location}
            </Card.Content>
            <Card.Content extra>
              <Button
                color="teal"
                className="reviews-button"
                size="large"
                content="Reviews"
                icon="quote right"
                labelPosition="right"
                onClick={() => window.open(this.props.link)}
              />
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
