import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "../.storybook/Provider";
import configureStore from "../.storybook/configuedStore";

const store = configureStore();

const withProvider = story => <Provider store={store}>{story()}</Provider>;

import Button from "../src/components/Button";

storiesOf("Button", module)
  .addDecorator(withProvider)
  .add("default", () => <Button>Submit</Button>);
