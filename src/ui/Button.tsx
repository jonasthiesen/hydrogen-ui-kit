import * as React from 'react';
import { Theme, ThemeContext } from '../core/Theme';

type Props = {
  children: React.ReactNode,
  color: 'primary' | 'secondary',
  variant: 'pill' | 'inverse',
}

export const Button = (props: Props) => {
  const theme: Theme = React.useContext(ThemeContext);

  const {
    color = 'primary'
  } = props;

  return <button style={{ backgroundColor: theme[color] }}>{ props.children }</button>;
}
