
import { FormErrorMessage, FormLabel, Input,Textarea, FormControl } from "@chakra-ui/react";
import { useField } from "formik";
import { InputHTMLAttributes } from "react";

// this is saying we want this component to take in any props that a regular input field would take
type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement|HTMLTextAreaElement>, 'size'> & { name: string; label: string; textarea?: boolean};

// size: _ strips size out of props and renames it to _

// eslint-disable-next-line react/prop-types
export const InputField: React.FunctionComponent<InputFieldProps> = ({label, textarea, ...props}) => {

    const [field, {error}] = useField(props);

    return (
        <FormControl  isInvalid={!!error}>
            <FormLabel size="sm" htmlFor={field.name}>{label}</FormLabel>
            {
                textarea !== true && (
                    <Input size="sm" {...field} {...props} id={field.name}/>
                )
            }
            {
                textarea === true && (
                    <Textarea {...field} {...props} id={field.name} />
                )
            }
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    );
}