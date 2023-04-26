import { Input, InputProps } from "@mantine/core";
import { UseState } from "../../../../../../lib/utils/types";

interface TaskWizardInputProps extends InputProps {
    value: UseState<string>;
    onFocus?: () => void;
    onBlur: () => void;
}

const TaskWizardInput: React.FC<TaskWizardInputProps> = (props) => {
    return (
        <Input
            {...props}
            onChange={(event) => {
                // TODO: do the parsing here
                props.value[1](event.currentTarget.value);
            }}
            value={props.value[0]}
            w="100%"
            size="md"
            placeholder="Add task"
            variant="unstyled"
        />
    );
};

export default TaskWizardInput;

