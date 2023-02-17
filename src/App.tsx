import { ThemeProvider } from "./ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "src/pages";

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
