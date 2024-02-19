import { ThemeProvider } from "../context/theme.js";
import "antd/dist/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
