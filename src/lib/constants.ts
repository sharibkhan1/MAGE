// lib/constants.js
import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { useSession } from 'next-auth/react';

export const useMenuOptions = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id; // Get the current user ID

  return [
    { name: 'products', Component: Home, href: `/retailers/${userId}` },
    { name: 'Chatbot', Component: Workflows, href: `/chatbots`},
    { name: 'Settings', Component: Settings, href: '/settings' },
    { name: 'Billing', Component: Payment, href: '/billings' },
  ];
};

export const useMenuOptionsAdmin = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id; // Get the current user ID

  return [
    { name: 'products', Component: Home, href: `/admin/${userId}` },
    // { name: 'retailer-item', Component: Workflows, href: '/retailer-item' },
    { name: 'Settings', Component: Settings, href: '/setting' },
    // { name: 'retailers', Component: Category, href: `/retailers/${userId}` },
    { name: 'Billing', Component: Payment, href: '/billing' },
    { name: 'Chatbot', Component: Templates, href: '/chatbot' },
    // { name: 'notification', Component: Logs, href: '/notification' },
  ];
};