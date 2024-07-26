// // import React, { useState } from "react";
// // import "./index";

// // function MyButton() {
// //     const [count, setCount] = useState(0);

// //     const handleClick = () => {
// //         setCount(count + 1);
// //     };

// //     return (
// //         <button className="my-button" onClick={handleClick}>
// //             {count}
// //         </button>
// //     );
// // }

// // export default MyButton;
// import React, { useEffect, useState } from "react";

// const MyButton = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     });

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Click me</button>
//         </div>
//     );
// };

// export default MyButton;

