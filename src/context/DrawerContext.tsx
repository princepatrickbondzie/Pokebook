import React from "react";

export type DrawerContent = {
  name: string;
  url: string;
};

interface DrawerContextValue {
  isDrawerOpen: boolean;
  drawerContent?: any;
  openDrawer: (content: DrawerContent) => void;
  closeDrawer: () => void;
}

const DrawerContext = React.createContext<DrawerContextValue>({
  isDrawerOpen: false,
  drawerContent: {},
  openDrawer: (content: DrawerContent) => {},
  closeDrawer: () => {},
});

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [drawerContent, setDrawerContent] =
    React.useState<DrawerContent | null>(null);

  const openDrawer = (content: DrawerContent) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerContent(null);
    setIsDrawerOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, drawerContent, openDrawer, closeDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => React.useContext(DrawerContext);
