import styles from '../styles/tabs.module.css';

export default function Tabs(props) {
  return (
    <div className={styles.tabsSection}>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Schemes")}>Schemes</button>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Job Openings")}>Job Openings</button>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Scholarships")}>Scholarships</button>
    </div>
  )
}
