import { Select, SelectProps } from '@mantine/core';
import { UseControllerProps, Controller } from 'react-hook-form';

type ControlledSelectProps = SelectProps & Pick<UseControllerProps, 'name' | 'control' | 'rules'>;

export const ControlledSelect = ({ name, control, ...props }: ControlledSelectProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Select {...props} {...field} />}
    />
  );
};
