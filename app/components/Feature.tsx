const Feature = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="text-3xl">{emoji}</div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
export default Feature;
