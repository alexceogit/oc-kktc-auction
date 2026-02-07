import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">KKTC Auction</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to KKTC Auction
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            The premier auction platform for Northern Cyprus. Bid, sell, and discover amazing items.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get Started
            </Link>
            <Link href="/dashboard" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200">
              Browse Auctions
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Secure Bidding</h3>
              <p className="mt-2 text-sm text-gray-500">
                Safe and transparent bidding process with real-time updates.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Wide Selection</h3>
              <p className="mt-2 text-sm text-gray-500">
                Discover unique items from various categories.
              </p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Easy Selling</h3>
              <p className="mt-2 text-sm text-gray-500">
                List your items in minutes and reach thousands of buyers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
