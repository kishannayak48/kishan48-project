// import '@/styles/globals.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import LayoutPage from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}
