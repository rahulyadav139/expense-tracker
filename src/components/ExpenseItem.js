import styles from './ExpenseItem.module.css';

const ExpenseItem = props => {
  return (
    <div className={styles.expenses}>
      <div className={styles.expense}>
        <div className={styles.date}>
          <div className={styles.year}>{props.data.date.getFullYear()}</div>
          <div className={styles.month}>
            {props.data.date.toLocaleString('en-US', { month: 'long' })}
          </div>
          <div className={styles.day}>{props.data.date.getDate()}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>{props.data.title}</div>
          <div className={styles.amount}>₹{props.data.amount}</div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
