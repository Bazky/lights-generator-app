import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";

export const Counter = (props) => {
  return (
    <div>
      <Text>
        {props.count} {props.text}
      </Text>
      <IconMinus />
      <IconAdd />
    </div>
  );
};
