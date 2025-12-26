export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Claim Initiated Successfully 🎉
        </h2>
        <p className="text-gray-600">
          Your claim has been registered. A confirmation email has been sent to
          your registered email address.
        </p>
      </div>
    </div>
  );
}
