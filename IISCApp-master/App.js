import React from "react";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { mapping, dark as darkTheme } from "@eva-design/eva";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

import MasterLogin from "./screens/MasterLogin";
import Options from "./screens/Options";

export default function App () {
return (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <MasterLogin />
    <Options />
  </ApplicationProvider>
)};

// export default App;

