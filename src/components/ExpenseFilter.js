import styles from './ExpenseFilter.module.css';

const ExpenseFilter = props => {
  const filterHandler = e => {
    props.onYear(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <h3>Sort by Year</h3>
      <select value={props.selectedYear} onChange={filterHandler}>
        <option value="year">--Year--</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
