import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";
import { useState } from "react";

import styles from "./Counter.module.css";

export const Counter = (props) => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value <= 0) return;
    setValue(value - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Text>
        {value} {props.text}
      </Text>
      <nav>
        <IconMinus onClick={handleMinus} />
        <IconAdd onClick={handleAdd} />
      </nav>
    </div>
  );
};
