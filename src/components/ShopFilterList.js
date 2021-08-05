const ShopFilterList = () => {
  return (
    <div className='filter-list'>
      <div className='filter-list__category'>
        <div className='filter-list__group'>
          <p className='filter-list__title'>Products</p>
        </div>
      </div>
      <div className='filter-list__options'>
        <div className='filter-list__group'>
          <input
            id='js-boto'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-boto' className='filter-list__option-label'>
            Boto
          </label>
        </div>
        <div className='filter-list__group'>
          <input
            id='js-kaptain'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-kaptain' className='filter-list__option-label'>
            Kaptain
          </label>
        </div>
        <div className='filter-list__group'>
          <input
            id='js-kube'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-kube' className='filter-list__option-label'>
            Kube
          </label>
        </div>
        <div className='filter-list__group'>
          <input
            id='js-nordik'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-nordik' className='filter-list__option-label'>
            Nordik
          </label>
        </div>
        <div className='filter-list__group'>
          <input
            id='js-pop'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-pop' className='filter-list__option-label'>
            Pop
          </label>
        </div>
        <div className='filter-list__group'>
          <input
            id='js-rollo'
            type='checkbox'
            className='filter-list__option-input'
          />
          <label htmlFor='js-rollo' className='filter-list__option-label'>
            Rollo
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterList;
