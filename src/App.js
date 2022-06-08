import ParentComponent from "./components/ParentComponent";
import { UserProvider, contextStore } from "./components/userContext";

function App() {
  return (
    <UserProvider value={contextStore}>
     <ParentComponent />
    </UserProvider>
  );
}

export default App;
