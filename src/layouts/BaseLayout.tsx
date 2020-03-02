import React from 'react'
import { connect } from 'dva';

import { queryLayout } from '@/utils'
import config from '@/utils/config'

import PrimaryLayout from './PrimaryLayout'
import PublicLayout from './PublicLayout'
import { globalModalState } from '@/models/data';

const LayoutMap = {
  primary: PrimaryLayout,
  public: PublicLayout
};

const BaseLayout: React.FC = props => {
  //这里进行渲染判断
  const { children } = props;
  return (
    <PrimaryLayout>{children}</PrimaryLayout>
  )
};

export default BaseLayout;
