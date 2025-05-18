"use client";

import { useEffect } from "react";

export default function TawkScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68158d2ffc50e9190eb83df0/1iqa2v07a";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
