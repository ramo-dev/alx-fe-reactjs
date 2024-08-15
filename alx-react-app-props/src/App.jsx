import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
//import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import { userContext } from "./Context/UserContext";
import ProfilePage from "./components/ProfilePage";


function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <Header />
      <MainContent />
      <userContext.Provider value={userData}>
        <ProfilePage />
      </userContext.Provider>
      <Counter />
      <Footer />
    </>
  )
}

export default App
