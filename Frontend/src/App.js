
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen2 from './Screens/Nopets';
import Screen1 from './Screens/PlayDateRequests';
import Screen3 from './Screens/About';
import Screen4 from './Screens/PetScreen'; // Import Screen4 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/about" element={<Screen3 />} />
        <Route path="/Screen-4" element={<Screen4 />} />
        <Route path="/Screen2" element={<Screen2 />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import RegistrationPage from './Screens/Registration';
// import LoginPage from './Screens/Login';
// import PetProfile from './Screens/petProfile';
// import UserProfile from './Screens/UserProfile';
// import Screen2 from './Screens/Nopets';
// import Screen1 from './Screens/PlayDateRequests';
// import Screen3 from './Screens/About';
// import Screen4 from './Screens/PetScreen'; // Import Screen4 component


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<RegistrationPage />} />
//         <Route path="/RegistrationPage" element={<RegistrationPage />} />
//         <Route path="/LoginPage" element={<LoginPage />} />
//         <Route path="/Userprofile" element={<UserProfile />} />
//         <Route path="/PetProfile" element={<PetProfile />} />
//         <Route path = "/PlayDateRequests" element= {<Screen1 />} />
//         <Route path="/about" element={<Screen3 />} />
//         {/* <Route path = "/PetScreen" element = {<PetScreen />} /> */}
//         <Route path="/Screen-4" element={<Screen4 />} />
//         <Route path="/Screen2" element={<Screen2 />} />
//         {/* <Route path = "/PlayDate" element = {<PlayDate />} /> */}
//         {/* <Route path = "/AboutScreen" element = {<AboutScreen/ />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;