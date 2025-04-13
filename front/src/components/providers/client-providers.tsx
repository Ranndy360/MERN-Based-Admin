'use client';

import { Provider } from "react-redux";
import { store } from "@/store";
import AuthGuard from "@/components/guard/auth.guard";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthGuard>{children}</AuthGuard>
    </Provider>
  );
}