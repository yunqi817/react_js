import React from "react";
import ParentComponent from "./ParentComponent";

import MyButton from "./MyButton";

function App() {
    return (
        <div className="App">
            <MyButton />
        </div>
    );
}
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ParentComponent />
//           </div>
          
//         );
//     }
// }

export default App;
