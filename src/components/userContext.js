import React from "react"

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const contextStore = {
  text: "This is how I am learning React-Context",
}

export {UserProvider, UserConsumer, contextStore}