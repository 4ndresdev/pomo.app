import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserData } from "@/services/localStorageService";

export const PublicRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSsOnboardingCompleted = getUserData("isOnboardingCompleted");
    if (storedSsOnboardingCompleted) {
      navigate("/", { replace: true });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return null;

  return children;
};

PublicRoutes.propTypes = {
  children: Proptypes.node.isRequired,
};
