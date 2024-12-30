import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserData } from "@/services/localStorageService";

export const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSsOnboardingCompleted = getUserData("isOnboardingCompleted");
    if (!storedSsOnboardingCompleted) {
      navigate("onboarding", { replace: true });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return null;

  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
