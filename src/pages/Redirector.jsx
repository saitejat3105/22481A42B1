import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Redirector() {
  const { shortcode } = useParams();

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    const match = logs.find(log => log.data.short === shortcode);
    if (match) {
      window.location.href = match.data.original;
    } else {
      alert("Shortcode not found.");
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
}
