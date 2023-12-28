import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/custom.css";
import "@/styles/theme.min.css";
import LayoutPage from "@/components/layout";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <LayoutPage>
  //     <Component {...pageProps} />
  //   </LayoutPage>
  // );
  return getLayout(<Component {...pageProps} />);
}
