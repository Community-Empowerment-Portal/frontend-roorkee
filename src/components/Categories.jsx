import { useRouter } from 'next/router';
import styles from '../styles/schemes.module.css';
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
            className={styles.item} 
            onClick={() => handleClick(item)}
            role="button"
            tabIndex="0"
            style={{ cursor: 'pointer' }}
          >
            {item}
          </p>
          <hr className={styles.horizontalRule} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
