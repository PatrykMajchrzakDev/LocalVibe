import { Outlet, useOutletContext, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserLocation } from "../util/api/httpRequests";
import UserLocation from "../types/UserLocation";

type ContextType = { userLocationInfo: UserLocation | null };

const Root = () => {
  const location = useLocation();
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

  //Determine styles based on location
  const navigationStyles = { textColor: "text-white" };
  if (location.pathname.startsWith("/places/search")) {
    navigationStyles.textColor = "text-black";
  }

  return (
    <>
      <MainNavigation
        userLocationInfo={userLocationInfo}
        navigationStyles={navigationStyles}
      />
      <Outlet context={{ userLocationInfo }} />
      <Footer />
    </>
  );
};

export default Root;

export function useUserLocationInfo() {
  return useOutletContext<ContextType>();
}
