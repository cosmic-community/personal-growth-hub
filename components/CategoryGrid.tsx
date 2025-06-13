import type { ProductCategory } from '@/types';

interface CategoryGridProps {
  categories: ProductCategory[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Choose Your Path to Growth
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Professional resources tailored to your specific needs and life stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="card text-center hover:shadow-large transition-shadow">
              {category.metadata?.icon?.imgix_url && (
                <div className="mb-6">
                  <img
                    src={`${category.metadata.icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={category.title}
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {category.title}
              </h3>
              <p className="text-secondary-600 mb-4">
                {category.metadata?.subtitle}
              </p>
              <p className="text-sm text-secondary-500">
                {category.metadata?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}