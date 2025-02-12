import { useDisclosure } from "@heroui/modal";
import PropTypes from "prop-types";
import { createContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <TaskContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskContext;
