import * as React from 'react';
import renderer from 'react-test-renderer';
import "react-native-accessibility-engine";
import { ThemedText } from "../ThemedText";

it(`renders correctly`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();
  expect(<ThemedText>Some text</ThemedText>).toBeAccessible();
  expect(tree).toMatchSnapshot();
});
