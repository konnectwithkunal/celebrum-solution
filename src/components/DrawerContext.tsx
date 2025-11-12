import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type DrawerContextValue = {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextValue | null>(null);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const value = useMemo(() => ({ isDrawerOpen, openDrawer, closeDrawer }), [isDrawerOpen, openDrawer, closeDrawer]);

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};

export const useDrawer = (): DrawerContextValue => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
};
