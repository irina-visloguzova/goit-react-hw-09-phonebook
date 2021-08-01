import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilterValue } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {

  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const onChange = useCallback(
    event => dispatch(changeFilter(event.target.value)),
    [dispatch],
  );  

  return (
    <label className={s.formNameTitle}>
      Find contacts by name
      <div >
        <input type="text" value={value} onChange={onChange} className={s.formNameInput}></input>
      </div>
    
    </label>
  );

}
