import React, { useState } from "react";

export const AuthContext = React.createContext({
    isModalVisible: false,
    loginFormVisible: true,
    toggleModalView: (gg) => { },
    setFormView: () => { },
    toggleFormView: () => { }
});

export default props => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [LoginFormVisible, setLoginFormVisible] = useState(true);

    const toggleModalView = (gg = !isModalVisible) => {
        setIsModalVisible(gg);
    }


    const setFormView = function () {
        setLoginFormVisible(true);
    }

    const toggleForm = function () {
        setLoginFormVisible(!LoginFormVisible);
    }


    return (
        <AuthContext.Provider value={{
            isModalVisible: isModalVisible,
            loginFormVisible: LoginFormVisible,
            toggleModalView: toggleModalView,
            setFormView : setFormView,
            toggleFormView: toggleForm
        }}>
            {props.children}
        </AuthContext.Provider>);
}

