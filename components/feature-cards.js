"use client"

export default function FeatureCards() {
  const features = [
    {
      title: "Membership",
      description: "Monthly membership for your biggest fans and supporters.",
      buttonText: "Enable",
      icon: (
        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      action: () => alert("Membership feature would be enabled here!"),
    },
    {
      title: "Shop",
      description: "Introducing Shop, the creative way to sell.",
      buttonText: "Enable",
      icon: (
        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z"
            clipRule="evenodd"
          />
        </svg>
      ),
      action: () => alert("Shop feature would be enabled here!"),
    },
    {
      title: "Exclusive posts",
      description: "Publish your best content exclusively for your supporters and members.",
      buttonText: "Write a post",
      icon: (
        <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      action: () => alert("Post editor would open here!"),
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More ways to earn</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
            <button onClick={feature.action} className="feature-button">
              <span>{feature.buttonText}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
