import { Box, Fieldset, TextInput, CloseButton, Button, Group } from '@mantine/core';
import { ControlledSelect } from '../ControlledSelect';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IForm } from '../../pages/MainPage';

import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

export const FormItem = () => {
  const { control, register } = useFormContext<IForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  function createField() {
    append({ value: '', type: 'String' });
  }

  return (
    <>
      <Group justify="space-between" align="center" mt="md">
        <Button
          className={cx('addFielbtn')}
          variant="filled"
          color="violet"
          size="md"
          mb={10}
          onClick={createField}
        >
          Добавить поле
        </Button>
      </Group>

      {fields.length > 0 &&
        fields.map((field, i) => (
          <Box component="div" className={cx('FieldsContainer')} key={i} p={20}>
            <Fieldset
              className={cx('Fieldset')}
              legend={field.id}
              variant="filled"
              miw={500}
              key={field.id}
              mb={20}
            >
              <TextInput
                label="Ключ"
                placeholder="Введите название ключа"
                {...register(`fields.${i}.value`)}
              />

              <ControlledSelect
                name={`fields.${i}.type`}
                control={control}
                label="Выберите тип"
                placeholder="Тип"
                data={['String', 'Number']}
                defaultValue={'String'}
              />
            </Fieldset>
            <CloseButton size="xl" onClick={() => remove(i)} />
          </Box>
        ))}
    </>
  );
};
