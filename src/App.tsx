import { WelcomePage } from "./pages";
import { DarkModeProvider } from "./context";

function App() {
  return (
    <DarkModeProvider>
      <WelcomePage />
    </DarkModeProvider>
  );
}

export default App;
