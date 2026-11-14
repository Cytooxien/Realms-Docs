import React, {JSX} from 'react';
import OriginalCopyright from '@theme-original/Footer/Copyright';
import type {Props} from '@theme/Footer/Copyright';

export default function CopyrightWrapper(props: Props): JSX.Element {
  const currentYear = new Date().getFullYear();

  const copyright = props.copyright.replace(
      "{currentYear}",
      String(currentYear)
  );

  return <OriginalCopyright {...props} copyright={copyright} />;
}