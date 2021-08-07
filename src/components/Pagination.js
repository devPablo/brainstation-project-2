import { Link, useHistory } from 'react-router-dom';

const Pagination = props => {
  const { pages, currentPage } = props;
  const history = useHistory();

  const paginationHandler = page => {
    history.push('?page=' + page);
  };

  return (
    <div className='pagination'>
      {[...Array(pages)].map((e, i) => {
        return (
          <div
            key={i}
            onClick={() => paginationHandler(i + 1)}
            className={`pagination__page ${
              currentPage == i + 1 ? 'pagination__page--active' : ''
            }`}
          >
            <p className='pagination__content'>{i + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
