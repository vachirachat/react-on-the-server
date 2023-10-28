import { Navigation } from "@/components/Navigation";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import createEmotionCache from "@/createEmotionCache";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <CssVarsProvider>
        <CssBaseline />
        <Navigation />
        <Component {...pageProps} />
      </CssVarsProvider>
    </CacheProvider>
  );
}
