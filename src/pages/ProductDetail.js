import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { category, id } = useParams();

  return (
    <div>
      <p>Product Detail</p>
    </div>
  );
};

export default ProductDetail;
