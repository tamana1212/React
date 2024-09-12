import { useEffect, useState } from "react";

const offline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(false);
    };

    const handleOffline = () => {
      setIsOnline(true);
    };
    window.addEventListener("offline", handleOnline);
    window.addEventListener("online", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default offline;
