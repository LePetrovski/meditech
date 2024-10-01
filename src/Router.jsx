// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Login from './Login';
// import ProtectedPage from './ProtectedPage';

// function App() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const handleLogin = () => {
//         setIsAuthenticated(true);
//     };

//     return (
//         <Router>
//             <Switch>
//                 <Route path="/login">
//                     {isAuthenticated ? (
//                         <Redirect to="/protected" />
//                     ) : (
//                         <Login onLogin={handleLogin} />
//                     )}
//                 </Route>
//                 <Route path="/protected">
//                     {isAuthenticated ? (
//                         <ProtectedPage />
//                     ) : (
//                         <Redirect to="/login" />
//                     )}
//                 </Route>
//                 <Redirect from="/" to="/login" />
//             </Switch>
//         </Router>
//     );
// }

// export default App;