import { createContext, useState, useContext } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (newLog) => {
    setInteractions([newLog, ...interactions]);
  };

  const removeInteraction = (id) => {
    setInteractions(interactions.filter(item => item.id !== id));
  };

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction, removeInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);