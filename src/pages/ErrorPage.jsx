import { useRouteError, Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error('Route error:', error);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          {/* Error Icon */}
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <svg 
              className="w-10 h-10 text-red-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>

          {/* Error Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Xatolik yuz berdi
          </h1>
          
          {/* Error Message */}
          <p className="text-gray-600 mb-2">
            {error?.statusText || error?.message || "Sahifani yuklashda muammo yuz berdi"}
          </p>

          {/* Error Status */}
          {error?.status && (
            <p className="text-sm text-gray-500 mb-6">
              Status kod: {error.status}
            </p>
          )}

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && error && (
            <details className="mb-6 text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2 hover:text-gray-900">
                Texnik ma'lumotlar
              </summary>
              <div className="bg-gray-50 rounded-lg p-4 text-xs">
                <p className="text-red-600 font-mono break-all mb-2">
                  {error.toString()}
                </p>
                {error.stack && (
                  <pre className="text-gray-600 overflow-auto text-xs whitespace-pre-wrap">
                    {error.stack}
                  </pre>
                )}
                {error.data && (
                  <div className="mt-2">
                    <p className="font-semibold text-gray-700 mb-1">Data:</p>
                    <pre className="text-gray-600 overflow-auto">
                      {JSON.stringify(error.data, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate(0)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Sahifani yangilash
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Orqaga qaytish
            </button>
            
            <Link
              to="/"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;