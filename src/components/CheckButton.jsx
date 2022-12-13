/* eslint-disable */
import React from 'react';
import styles from './CheckButton.module.css';

function CheckButton(props) {
    const isChecked = () => {
        console.log('checked');
    }

    return (
        <div className={styles.CheckButton}>
            <input type="checkbox" id="chk" />
            <label for="chk"></label>
        </div>
    );
}

export default CheckButton;