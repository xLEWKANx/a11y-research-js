import * as React from "react";
import "react-native-accessibility-engine";

import ExplorePage from "../app/(tabs)/explore";

global.__CUSTOM_VIOLATION_HANDLER__ = (violations) => {
  return violations.filter((violation) => {
    const { pathToComponent } = violation;
    const pathLength = pathToComponent.length;
    return pathToComponent[length - 1] === "Text" && pathToComponent[length - 2] === "Icon";
  });
};

it(`renders correctly`, () => {
  expect(<ExplorePage />).toBeAccessible();
});
