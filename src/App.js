import { Routes,Route } from "react-router-dom";
import Layout from "./app/layout";
import Dash from "./components/Dash";
import History from "./components/History";
import Notificaiton from "./components/notificaiton";
import Form from "./components/form";
import Login from "./components/login";
import Test from "./b/test"
import S from "./b/S"
import Userpermit from "./components/Userpermit";
import Employer_Userlist from "./components/employee/Employer_Userlist";
import { Roles } from "./app/Roles";
import Singlayout from "./app/singlayout";
import Bookings_list from "./components/Bookings_list";
import User_section from "./components/User_section";
import Edit_user from "./components/Edit_user";
import Room_status from "./components/setting/room/room_status";
import Overview from "./components/overview";
import Settings from "./components/settings";
import Room from "./components/setting/room/room";
import Edit from "./components/setting/profile/edit";
import Socket from "./b/socket";
// import Edit from "./components/setting/profile/edit";
import Profile from "./components/setting/profile/profile";
import Room_management from "./components/setting/room/room_management";
import Add_room from "./components/setting/room/Add_room";
import Notification_setting from "./components/setting/notification_setting";
import EmployeeDash from "./components/employee/employeeDash";
import User_room_selection from "./components/User_role/User_room_selection";
function App() {
  
  return (
    <Routes>
      <Route path="form" element={<Form/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="/test" element={<S/>}/>
      <Route path="/socket" element={<Socket/>}/>

      <Route path="/" element={<Layout/>}>

      <Route element={ <Singlayout allowedroles={[Roles.Admin,Roles.employee,Roles.Users]}/>} >
     
      <Route index element={<Dash/>}/>
      <Route path="Settings" element={<Settings/>}/>

     
      </ Route>

      <Route element={<Singlayout allowedroles={[Roles.employee]}/>}>      
      <Route path="employee_userlist" element=
      {<Employer_Userlist/>}/>
      
      </Route>

      <Route element={<Singlayout allowedroles={[Roles.Admin]}/>}>      
      <Route path="/overview" element={<Overview/>}/>
      
      </Route>

        < Route element={<Singlayout allowedroles={[Roles.Admin,Roles.employee]}/>}>
        
        <Route path="/Userpermit" element={<Userpermit/>}/>
      <Route path="/Userpermit/User/:id" element={<User_section/>}/>
      <Route path="/Userpermit/User/:id/Editpage/:id" element={<Edit_user/>}/>
    
      <Route path="/notification" element={<Notificaiton/>}/>
      <Route path="/Roomstatus" element={<Room_status/>}/>
      {/* <Route path="/overview" element={<Overview/>}/> */}
      <Route path="/bookings_list" element={<Bookings_list/>}/>
      <Route path="/Roomstatus/room/:id" element={<Room/>}/>
      {/* <Route path="/Settings/Profile/edit" element={<Edit/>}/> */}
      <Route path="/Settings/Profile" element={<Profile/>}/>
      <Route path="/Settings/room_management" element={<Room_management/>}/>
      <Route path="/Settings/User_settings" element={<Userpermit/>}/>
      <Route path="/Settings/notification_setting" element={<Notification_setting/>}/>
      <Route path="/Settings/room_management/Add_room" element={<Add_room/>}/>
      <Route path="/Settings/room_management/Roomstatus" element={<Room_status/>}/>
      <Route path="/Settings/room_management/edit_room" element={<Room_status/>}/>
      <Route path="/Settings/room_management/edit_room/room/:id" element={<Room/>}/>
      
      </Route>
      
      <Route element={<Singlayout allowedroles={[Roles.Users]}/>}>
      <Route path="/history" element={<History/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/:id" element={<User_room_selection/>}/>
      
      </Route>
      </Route>

      {/* <Route element={<Singlayout allowedroles={[Roles.Admin,Roles.employee]}/>}> */}

      {/* </Route> */}

      
      {/* </Route> */}
    </Routes>
  );
}

export default App;
