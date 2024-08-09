import { Good } from '../types/good';
import { GoodCard } from './GoodCard';

type Props = {
  goods: Good[];
  onDelete: (goodId: number) => void;
  onUpdate: (good: Good) => void;
};

export const GoodsList = ({ goods, onDelete, onUpdate }: Props) => (
  <div className="GoodList">
    {goods.map(good => (
      <article key={good.id} className="GoodCard">
        <GoodCard good={good} onDelete={onDelete} onUpdate={onUpdate} />
      </article>
    ))}
  </div>
);