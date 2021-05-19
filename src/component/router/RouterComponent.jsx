import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import Login from '../user/Login';

const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserListComponent} />
            <Route path="/users" component={UserListComponent} />
            <Route path="/edit-user" component={EditUserComponent} />
            <Route path="/add-user" component={AddUserComponent} />
            <Route path="/login" component={Login} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;