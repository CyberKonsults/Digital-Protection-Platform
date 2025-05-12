// app/unauthorized/page.tsx
export default function UnauthorizedPage() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">🚫 Access Denied</h1>
          <p className="text-lg text-gray-400 mb-6">You do not have permission to view this page.</p>
          <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded">Go Home</a>
        </div>
      </main>
    );
  }
  