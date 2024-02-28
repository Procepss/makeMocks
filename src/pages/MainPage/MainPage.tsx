import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormItem } from '../../components/FormItem';

import { Container, Box, Group, Button } from '@mantine/core';
import JsonFormatter from 'react-json-formatter';
import { ControlledNumberInput } from '../../components/ControlledNumberInput';
import { count, generate } from 'random-words';

//Styles
import cn from 'classnames/bind';
import styles from './index.module.scss';
const cx = cn.bind(styles);

export interface IFormItem {
  value: string;
  type: 'String' | 'Number';
}

export interface IForm {
  fields: Record<string, IFormItem[]>;
  count: number;
}

export const MainPage = () => {
  const methods = useForm<IForm>({ mode: 'onChange' });
  const [savedFields, setSavedFields] = useState<IFormItem[] | []>([]);
  console.log('🚀 ~ MainPage ~ savedFields:', savedFields);
  const [json, setJson] = useState<string>('');

  const { watch, control } = methods;

  const watcher = watch();

  function getRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  const arrayToObject = (array: IFormItem[], length: number) => {
    return Array.from({ length }, () =>
      array.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.value]: curr.type === 'String' ? generate() : getRandomNumber(),
        };
      }, {})
    );
  };

  useEffect(() => {
    if (watcher.fields) setSavedFields([...watcher.fields]);
  }, [watcher.fields]);

  const saveMocks = () => {
    setJson(JSON.stringify(arrayToObject(savedFields, watcher.count | 1)));
  };

  return (
    <FormProvider {...methods}>
      <Container className={cx('Root')} fluid p={40}>
        <Container className={cx('left')} p={40}>
          <Box component="div" className={cx('Card')} p={20} mb={30}>
            <FormItem />
            <Group justify="flex-end" align="center" p={30}>
              <ControlledNumberInput
                label={'Кол-во повторений'}
                name={`count`}
                control={control}
                placeholder="Введите число"
              />
              <Button variant="filled" color="green" size="md" mb={10} onClick={saveMocks}>
                Сохранить
              </Button>
            </Group>
          </Box>
        </Container>
        <Container className={cx('right')} fluid>
          <JsonFormatter
            json={json}
            tabWith={4}
            jsonStyle={{
              propertyStyle: { color: 'blue' },
              stringStyle: { color: 'green' },
              numberStyle: { color: 'darkorange' },
            }}
          />
        </Container>
      </Container>
    </FormProvider>
  );
};
