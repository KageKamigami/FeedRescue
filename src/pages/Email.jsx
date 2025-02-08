import { useLocation } from "react-router-dom";

function EmailConfirm() {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Email Confirmation</h2>
        <p className="mt-4 text-lg">
          Your email: <strong>{email}</strong>
        </p>
      </div>
    </div>
  );
}

export default EmailConfirm;
