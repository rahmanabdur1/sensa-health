
import { Link } from 'react-router-dom';
import style from './SensaCategory.module.css';
import { useSencaCategory } from '../../../hooks/useSencaCategory';
import { useTranslation } from 'react-i18next';

interface SencaCategoryItem {
  _id: string;
  name: string;
  category_id: number;
  image?: string;
}

export function SencaCategory() {
  const [sencaCategory, loading] = useSencaCategory();
  const { t } = useTranslation(); // Import useTranslation

  if (loading) {
    return <div>{t('sencaCategory.loading')}</div>; // Use translation for loading text
  }

  return (
    <div className={style.container}>
      {sencaCategory.map((item: SencaCategoryItem) => (
        <Link
          className={style.category}
          key={item._id}
          to={`/procrastination/${item.category_id}`}
        >
          {item.image && <img src={item.image} alt={item.name} />}
          <h3>{t(`sencaCategory.${item.name.toLowerCase()}`)}</h3>
        </Link>
      ))}
    </div>
  );
}
