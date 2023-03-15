import styles from './TextInput.module.scss';

const TextInput = props => {
    return <input value={props.value} onChange={props.onChange} className={styles.input} placeholder={props.placeholder} type="text" />
};

export default TextInput;