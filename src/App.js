import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// 创建一个UserContext的上下文，用于在组件之间共享用户信息
export const UserContext = createContext();

// 创建一个简单的用户列表（实际中应从后台服务获取）
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

// 用户页面组件，负责显示单个用户的详细信息
const UserPage = ({ userId }) => {
    const [user, setUser] = useState(null);

    // 在组件挂载时，从用户列表中查找对应的用户信息并设置到本地状态
    useEffect(() => {
        const user = users.find((u) => u.id === userId);
        setUser(user);
    }, [userId]);

    // 判断是否已成功获取用户信息
    if (!user) {
        return <div>Loading...</div>;
    }

    // 显示用户信息
    return (
        <div>
            <h1>{user.name}</h1>
            <p>ID: {user.id}</p>
        </div>
    );
};

// 用户列表页面组件，负责显示所有用户的概要信息
const UsersPage = () => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// 应用程序启动组件
const App = () => {
    const [user, setUser] = useState(null);

    // 用户登录函数，将用户信息存储到上下文中
    const login = ({ id, name }) => {
        setUser({ id, name });
    };

    // 用户登出函数，将用户信息从上下文中清除
    const logout = () => {
        setUser(null);
    };

    // 渲染应用程序，包括页面导航、用户信息和路由处理
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <UserContext.Provider value={{ user, login, logout }}>
                <div>
                    {user ? (
                        <p>
                            Logged in as <b>{user.name}</b>.{" "}
                            <button onClick={logout}>Logout</button>
                        </p>
                    ) : (
                        <p>
                            <Link to="/login">Login</Link>
                        </p>
                    )}
                    <Routes>
                        <Route path="/" element={<h1>Welcome to My App</h1>} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/users/:userId" element={<UserPage />} />
                    </Routes>
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
};

// 登录表单组件，负责接收用户输入并处理登录逻辑
const LoginForm = () => {
    const { login } = useContext(UserContext);
    const [formData, setFormData] = useState({ name: "" });

    const handleChange = (e) => {
        // ...展开语法，用于展开对象，数组，不确定参数等
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ id: 123, name: formData.name });
        setFormData({ name: "" });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;

// import React from "react";
// import AxiosAPI from "./FetchAPI";

// const App = () => {
//     return (
//         <div>
//             <AxiosAPI />
//         </div>
//     );
// };

// export default App;

/*输入框*/
// import React from 'react';
// import Greeting from './Greeting';

// function App() {
//   return (
//     <div className="container">
//       <Greeting />
//     </div>
//   );
// }

// export default App;

//按钮输入
// import React from "react";
// import ParentComponent from "./ParentComponent";

// import MyButton from "./MyButton";

// function App() {
//     return (
//         <div className="App">
//             <MyButton />
//         </div>
//     );
// }
// export default App;

//文本输入

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ParentComponent />
//           </div>

//         );
//     }
// }

// export default App;
