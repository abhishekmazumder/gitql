import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

const App = () => {
  const [userName, setUserName] = useState<string>("abhishekmazumder");
  return (
    <main className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="text-2xl font-bold mb-8">GitHub User Profile</h1>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
