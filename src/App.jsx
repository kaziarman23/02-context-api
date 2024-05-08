import { useEffect, useState } from "react";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";
import { ThemeProvider } from "./Context/Theme";

function App() {
    const [themeMood, setThemeMood] = useState("light");
    const lightTheme = () => {
        setThemeMood("light");
    };
    const darkTheme = () => {
        setThemeMood("dark");
    };

    useEffect(() => {
      document.querySelector("html").classList.remove("light","dark")
      document.querySelector("html").classList.add(themeMood)
    },[themeMood])

    return (
        <ThemeProvider value={{ themeMood, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
