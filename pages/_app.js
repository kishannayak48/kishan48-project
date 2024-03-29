import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/custom.css";
import "@/styles/theme.min.css";
import { Provider, useStore } from "react-redux";
import { wrapper } from "@/utils/store";

// export default function App({ Component, pageProps }) {
const WrappedApp = wrapper.withRedux(({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const store = useStore();

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
});
export default WrappedApp;
