import React, {Component} from 'react';
import Circle from './shapes/Circle';
import Rectangle from './shapes/Rectangle';
import RoundedRectangle from './shapes/RoundedRectangle';
import Field from './snippets/Field';
import ListRow from './snippets/ListRow';
import Image from './snippets/Image';
import Card from './widgets/Card';

export default class extends Component {
  render() {
    return <div>
      <h2>Shapes</h2>
      <Circle /><br />
      <Rectangle /><br />
      <RoundedRectangle />
      <h2>Snippets</h2>
      <Field labelPosition="top" />
      <Field labelPosition="left" rounded />
      <ListRow hasActionBar hasCheckboxes />
      <Image width="100px" height="100px" />
      <h2>Widgets</h2>
      <Card />
    </div>
  }
}
