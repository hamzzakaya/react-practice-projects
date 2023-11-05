import Image from "next/image";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const getImages = axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID X2ZihS4lE9FwXDq9SsQeddDmc5egBUS-w57l2vbTC28",
      },
      params: {
        query: "cat",
      },
    });

    getImages.then((res) => {
      const urls = res.data.results.map((cat) => cat.urls.small);
      setImgUrls(urls);
    });
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl">Cat World!</h1>
      <div className="mt-10 grid grid-cols-2 gap-4">
        {imgUrls.map((url) => (
          <Image src={url} width={400} height={400} />
        ))}
      </div>
    </Layout>
  );
}
