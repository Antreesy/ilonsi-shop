import { TextField } from '@mui/material';
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../app/slices/counterSlice';
import { CustomButton } from '../UiKit';

import styles from './counter.module.scss';

const IndexPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>Redux Toolkit example counter</h1>
      <h2>
        The current number is {' '}
        {count}
      </h2>
      <div className={styles.wrapper}>
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <CustomButton
        className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </CustomButton>
      </div>
      <div className={styles.wrapper}>
        <CustomButton className={styles.button} onClick={() => dispatch(decrement())}>-1</CustomButton>
        <CustomButton className={styles.button} onClick={() => dispatch(increment())}>+1</CustomButton>
      </div>
    </>
  );
};

export default IndexPage;