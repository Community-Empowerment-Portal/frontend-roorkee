import { useRouter } from 'next/router';
import dummyData from '../dummyData.json';

const Categories = () => {
  const router = useRouter();
  const categories = dummyData.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];

  const handleClick = (category) => {
    const categoryData = dummyData.find(item => item.category === category);
    if (categoryData) {
      router.push({
        pathname: '/content/page',
        query: {
          department: categoryData.category,
          title: categoryData.scheme_name,
          beneficiary_category: categoryData.beneficiary_category,
          eligibility_criteria: categoryData.eligibility_criteria,
        },
      });
    }
  };

  return (
    <div>
      {uniqueCategories.map(item => (
        <div key={item}>
          <p 
            className="mt-5 mb-5 text-base cursor-pointer "
            onClick={() => handleClick(item)}
            role="button"
            tabIndex="0"
          >
            {item}
          </p>
          <hr className="h-px bg-gray-300 mb-5" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
