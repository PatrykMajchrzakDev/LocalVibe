import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserLocation } from "../util/api/httpRequests";
import UserLocation from "../types/UserLocation";
const Root = () => {
  const [userLocationInfo, setUserLocationInfo] = useState<UserLocation | null>(
    null
  );
  const { data } = useQuery({
    queryKey: ["userLocation"],
    queryFn: fetchUserLocation,
    staleTime: 300000,
  });
  useEffect(() => {
    setUserLocationInfo(data);
  }, [data]);
  return (
    <>
      <MainNavigation userLocationInfo={userLocationInfo} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
