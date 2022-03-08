import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { useRouter } from "next/router";
import { useEffect } from "react";


const progress = new ProgressBar({
  size: 2,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    console.log(router);

    router.events.on("routeChangeStart", progress.start);
    router.events.on("routeChangeComplete", progress.finish);
    router.events.on("routeChangeError", progress.finish);
    return () => {
      router.events.off("routeChangeStart", progress.start);
      router.events.off("routeChangeComplete", progress.finish);
      router.events.off("routeChangeError", progress.finish);
    };
  }, [router]);

  return <Component {...pageProps} />
}

export default MyApp
