import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}

// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.

// Since <SideNav> is static, it's shown immediately. The user can interact with <SideNav> while the dynamic content is loading.

// The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).

// Why place it in the (overview) route group:
// To ensure the loading.tsx file only applys to your dashboard overview page. If the loading.tsx file is placed in the dashboard root directory, it will apply to all underlying page.tsx files. Which includes customers and invoices page.tsx

// Route groups allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name won't be included in the URL path. So /dashboard/(overview)/page.tsx becomes /dashboard.