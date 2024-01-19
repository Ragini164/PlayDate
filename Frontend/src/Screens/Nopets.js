// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../Styles/NoPets.css'

// // function Screen2() {
// //   return (
// //     <div>
// //       <div className="no-pet-app-bar">
// //         <div className="no-pet-left-content">
// //           <div className="no-pet-text-wrapper-5">PlayDate</div>
// //         </div>
// //         <div className="no-pet-right-content">
// //           <div className="no-pet-group">
// //             <div className="no-pet-text-wrapper-2">
// //               <Link to="/about">About</Link>
// //             </div>
            
// //             <div className="no-pet-text-wrapper-3">Contact Us</div>
// //             <div className="no-pet-text-wrapper-4">Profile</div>
// //             <img
// //               className="ri-arrow-drop-down-2"
// //               src="https://c.animaapp.com/Wrx0uJr5/img/ri-arrow-drop-down-fill-1.svg"
// //               alt="Arrow"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div className="no-pet-container">
// //         <div className="no-pet-nothing-to-see-here">
// //           <p>Nothing to see here - <span className="no-pet-span">YET</span></p>
// //           <p>When approached, their requests will appear here.</p>
// //         </div>

// //         <div className="no-pet-rectangle">
// //           <div className="no-pet-div">Find a play date</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Screen2;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/NoPets.css';
// import Screen4 from './PetScreen';

// function Screen2() {
//   return (
//     <div>
//       <div className="no-pet-app-bar">
//         <div className="no-pet-left-content">
//           <div className="no-pet-text-wrapper-5">PlayDate</div>
//         </div>
//         <div className="no-pet-right-content">
//           <div className="no-pet-group">
//             <div className="no-pet-text-wrapper-2">About</div>
//             <div className="no-pet-text-wrapper-3">Contact Us</div>
//             <div className="no-pet-text-wrapper-4">Profile</div>
//             <img
//               className="ri-arrow-drop-down-2"
//               src="https://c.animaapp.com/Wrx0uJr5/img/ri-arrow-drop-down-fill-1.svg"
//               alt="Arrow"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="no-pet-container">
//         <div className="no-pet-nothing-to-see-here">
//           <p>Nothing to see here - <span className="no-pet-span">YET</span></p>
//           <p>When approached, their requests will appear here.</p>
//         </div>

//         <Link to="/Screen-4" className="no-pet-rectangle">
//         <div className="no-pet-div">Find a play date</div>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default Screen2;



import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NoPets.css';
import Screen4 from './PetScreen';

function Screen2() {
  return (
    <div>
      <div className="no-pet-app-bar">
        <div className="no-pet-left-content">
          <div className="no-pet-text-wrapper-5">PlayDate</div>
        </div>
        <div className="no-pet-right-content">
          <div className="no-pet-group">
            <div className="no-pet-text-wrapper-2">About</div>
            <div className="no-pet-text-wrapper-3">Contact Us</div>
            <div className="no-pet-text-wrapper-4">Profile</div>
            <img
              className="ri-arrow-drop-down-2"
              src="https://c.animaapp.com/Wrx0uJr5/img/ri-arrow-drop-down-fill-1.svg"
              alt="Arrow"
            />
          </div>
        </div>
      </div>
      <div className="no-pet-container">
        <div className="no-pet-nothing-to-see-here">
          <p>Nothing to see here - <span className="no-pet-span">YET</span></p>
          <p>When approached, their requests will appear here.</p>
        </div>

        <Link to="/Screen-4" className="no-pet-rectangle">
          <div className="no-pet-div">Find a play date</div>
        </Link>

      </div>
    </div>
  );
}

export default Screen2;
