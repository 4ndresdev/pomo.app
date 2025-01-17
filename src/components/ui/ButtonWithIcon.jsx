import PropTypes from "prop-types";
import { Button } from "@heroui/button";

const ButtonWithIcon = ({
  children,
  variant,
  color,
  ariaLabel,
  size = "lg",
  isDisabled = false,
  isLoading = false,
  onPress = () => {},
}) => {
  return (
    <Button
      isIconOnly
      aria-label={ariaLabel}
      size={size}
      isDisabled={isDisabled}
      variant={variant}
      color={color}
      onPress={onPress}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

ButtonWithIcon.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
};

export default ButtonWithIcon;
