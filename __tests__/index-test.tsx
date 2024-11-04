import * as React from "react";
import "react-native-accessibility-engine";

import IndexPage from "../app/(tabs)/index";

it(`renders correctly`, () => {
  expect(<IndexPage />).toBeAccessible();
});
