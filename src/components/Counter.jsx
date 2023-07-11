import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";
import { useState } from "react";

import styles from "./Counter.module.css";

export const Counter = (props) => {
  return (
    <div className={styles.wrapper}>
      <Text>
        {props.count} {props.text}
      </Text>
      <nav>
        <IconMinus onClick={props.onMinus} />
        <IconAdd onClick={props.onAdd} />
      </nav>
    </div>
  );
};
