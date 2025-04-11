import { Navigate } from 'react-router-dom';
import { useSession } from '@supabase/auth-helpers-react';
import React from 'react';

const ALLOWED_EMAILS = ['anne@example.com']; // Replace with your actual Supabase login email

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();

  if (!session) {
    return <Navigate to="/login" />;
  }

  const userEmail = session.user?.email;

  if (!ALLOWED_EMAILS.includes(userEmail)) {
    return (
      <div className="pt-20 text-center text-red-500">
        Access denied. Your account is not authorized to view this page.
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
