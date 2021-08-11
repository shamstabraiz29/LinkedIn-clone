  import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Notification from "./Notification";
import Jobs from "./jobs/Jobs";
import MyNetwork from "./MyNetwork/MyNetwork"
import Messaging from "./Messaging/Messaging"
import Profile from "./Profile"

 
export default function Routing() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Mynetwork" exact component={MyNetwork} />
        <Route path="/Jobs" component={Jobs} />
        <Route path="/Messaging" component={Messaging} />
        <Route path="/Notification" component={Notification} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </div>
  );
}
