'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@/store";

interface Props {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const token = useSelector((state: RootState) => state.auth.token);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoginPage = pathname === '/login';

    if (!token && !isLoginPage) {
      router.replace('/login');
    } else if (token && isLoginPage) {
      router.replace('/dashboard');
    }
  }, [token, pathname, router]);

  return <>{children}</>;
}