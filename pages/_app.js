import "bootstrap/dist/css/bootstrap.css";
import "@/app/globals.css";

import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout simpleFooter={true}>
      <Component {...pageProps} />
    </Layout>
  );
}
