import { NumberInput, NumberInputProps } from '@mantine/core';
import { UseControllerProps, Controller } from 'react-hook-form';

type ControlledNumberInputProps = NumberInputProps &
  Pick<UseControllerProps, 'name' | 'control' | 'rules'>;

export const ControlledNumberInput = ({ name, control, ...props }: ControlledNumberInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <NumberInput {...props} {...field} />}
    />
  );
};
