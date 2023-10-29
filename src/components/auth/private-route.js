import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.authentication === null);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// import React from 'react';
// import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector((state) => state.authentication !== null);

//   return (
//     <Route
//       {...rest}
//       component={(props) => (
//         isAuthenticated ? (
//           <div>
//             <Component {...props} />
//           </div>
//         ) : (
//           <h1>Not logged in</h1>
//         )
//       )}
//     />

//   // <Route
//   //   {...rest}
//   //   render={(props) => (
//   //     isAuthenticated ? (
//   //       <Component {...props} />
//   //     ) : (
//   //       <h1>Not logged in</h1>
//   //     )
//   //   )}
//   // />
//   );
// };

export default PrivateRoute;
