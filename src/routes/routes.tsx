import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { NewRoom } from "../pages/newRoom/NewRoom";
import { AuthContexProvider } from "../contexts/AuthContext";
import { Room } from "../pages/room/Room";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthContexProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/room/new" component={NewRoom} />
          <Route path="/room/:id" component={Room} />
        </Switch>
      </AuthContexProvider>
    </BrowserRouter>
  );
}

export default Routes;
