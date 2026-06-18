export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            MiniModel Hub – Your Central Hub for Scale Model Enthusiasts
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find rare parts, showcase your builds, and connect with fellow builders all in one place.
          </p>
          <div className="flex space-x-4">
            <a href="/marketplace" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700">
              Browse Marketplace
            </a>
            <a href="/gallery" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white text-indigo-600 hover:bg-indigo-50">
              See Gallery
            </a>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why MiniModel Hub?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketplace</h3>
              <p className="text-gray-600">
                Buy, sell, and trade hard‑to‑find parts, tools, and accessories. Verified sellers and secure checkout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Build Gallery</h3>
              <p className="text-gray-600">
                Showcase your finished kits, get feedback, and find inspiration from other modelers worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Boards</h3>
              <p className="text-gray-600">
                Ask questions, share tips, and discuss techniques in forums dedicated to scale modeling, miniatures, and kit bashing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to start building?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of hobbyists who have already found their next part or inspiration.
          </p>
          <a href="/marketplace" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700">
            Explore the Marketplace
          </a>
        </div>
      </section>
    </div>
  );
}