import './App.css';
import Navbare from './components/Navbar';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from './screens/AdvancedScreen';
import BookingScreen from './screens/BookingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfilScreen';
import AdminScreen from './screens/AdminScreen';
import ABookingsScreen from './screens/Admin_Screens/A_BookingsScreen';
import ARoomsScreen from './screens/Admin_Screens/A_RoomsScreen';
import AUsersScreen from './screens/Admin_Screens/A_UsersScreen';
import AdminRoot from './screens/Admin_Screens/AdminRoot';
import CreateRoom from './components/Admin_Components/CreateRoom';


const router=createBrowserRouter(createRoutesFromElements(<>
<Route path='/'element={<HomeScreen/>}/>
<Route path='/book/:roomId/:fromDate/:toDate' element={<BookingScreen/>}/>
<Route path='/register' element={<RegisterScreen/>}/>
<Route path='/login' element={<LoginScreen/>}/>
<Route path='/profile' element={<ProfileScreen/>}/>
<Route path='/admin'  element={<AdminScreen/>}>
<Route path='' index element={<AdminRoot/>}/>
<Route path='bookings' element={<ABookingsScreen/>}/>
<Route path='rooms' element={<ARoomsScreen/>}/>
<Route path='rooms/create' element={<CreateRoom/>}/>
<Route path='users' element={<AUsersScreen/>}/>
</Route>


</>))
const App = () => {
  return (<>
    <Navbare/>
    <RouterProvider router={router} />
  </>
  )
}

export default App