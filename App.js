import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";

import Detail from './Detail'
import Home from './Home'

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
    </NativeRouter>
  );
}
