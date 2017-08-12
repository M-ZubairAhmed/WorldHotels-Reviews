import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

export default class IndividualRow extends Component {
  constructor(props) {
    super(props);
  }

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
