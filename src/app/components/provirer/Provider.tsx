'use client';

import { Provider } from "react-redux";
import store from "@/app/store/store";
import ReactLenis from '@studio-freight/react-lenis';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
  <Provider store={store}>
    <ReactLenis root>
      {children}
    </ReactLenis>
  </Provider>
  );
}

export default StoreProvider;