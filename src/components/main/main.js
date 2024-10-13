import Home from "../home/home";

function Main({ isLoading, userFilter, setUserFilter, arrUsers }) {
  return (
    <main className="main">
      <Home
        isLoading={isLoading}
        userFilter={userFilter}
        setUserFilter={setUserFilter}
        arrUsers={arrUsers}
      />
    </main>
  );
}

export default Main;
