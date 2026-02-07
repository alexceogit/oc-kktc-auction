import Link from 'next/link'

export default function DashboardPage() {
  const auctions = [
    { id: 1, title: 'Vintage Watch', currentBid: 150, timeLeft: '2h 30m', image: '⌚' },
    { id: 2, title: 'Art Painting', currentBid: 350, timeLeft: '5h 15m', image: '🎨' },
    { id: 3, title: 'Classic Car', currentBid: 15000, timeLeft: '1d 3h', image: '🚗' },
    { id: 4, title: 'Diamond Ring', currentBid: 2500, timeLeft: '4h 45m', image: '💍' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">KKTC Auction</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, User</span>
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Logout</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Live Auctions</h1>
          <p className="mt-1 text-gray-500">Discover and bid on exclusive items</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-40 flex items-center justify-center text-6xl bg-gray-100">
                {auction.image}
              </div>
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-900">{auction.title}</h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Current Bid:</span>
                  <span className="text-lg font-bold text-blue-600">${auction.currentBid}</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Time Left:</span>
                  <span className="text-sm font-medium text-orange-500">{auction.timeLeft}</span>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Activity</h2>
          <div className="text-gray-500 text-center py-8">
            <p>No active bids yet.</p>
            <p className="text-sm mt-2">Start bidding to see your activity here!</p>
          </div>
        </div>
      </main>
    </div>
  )
}
