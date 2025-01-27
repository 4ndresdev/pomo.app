import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserData } from "@/services/db/user.db";

export const PublicRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const storedSsOnboardingCompleted = await getUserData(
        "isOnboardingCompleted"
      );
      if (storedSsOnboardingCompleted) {
        navigate("/", { replace: true });
      } else {
        setLoading(false);
      }
    }
    fetchData();
  }, [navigate]);

  if (loading) return null;

  return children;
};

PublicRoutes.propTypes = {
  children: Proptypes.node.isRequired,
};
