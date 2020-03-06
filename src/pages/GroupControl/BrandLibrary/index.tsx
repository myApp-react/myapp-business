import { PageHeaderWrapper, BasicLayoutProps } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Button, Radio, Tooltip, Tag } from 'antd';
import Icon, { ZoomInOutlined, ZoomOutOutlined, ArrowUpOutlined, FullscreenOutlined } from '@ant-design/icons'

import {fitToViewer, INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE, TOOL_AUTO, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT} from 'react-svg-pan-zoom';
import { ReactSvgPanZoomLoader, SvgLoaderSelectElement } from 'react-svg-pan-zoom-loader'
import { AutoSizer } from 'react-virtualized';

import  PageHeader from '@/components/PageHeader/index'
import SetDrawer from './components/setDrawer'
import styles from './index.less';
import { RadioChangeEvent } from 'antd/es/radio';
import { PageHeaderProps } from 'antd/es/page-header';


const handSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill='#555'>
    <path d="M842.931 211.63l-3.118 0.046-0.051 0.046a103.44 103.44 0 0 0-37.202 8.136v-48.502c0-57.17-46.51-103.68-103.68-103.68-17.47 0-34.473 4.368-49.69 12.703-16.742-36.664-53.545-60.703-94.31-60.703-40.806 0-77.609 24.033-94.316 60.693a103.055 103.055 0 0 0-49.684-12.693c-57.17 0-103.68 46.51-103.68 103.68v325.228l-50.196-87.004c-13.522-24.612-35.63-42.174-62.265-49.46a98.202 98.202 0 0 0-76.144 10.522c-46.92 28.14-64.81 91.674-39.9 141.588l0.465 0.948c8.587 17.525 43.136 87.777 127.243 255.902 45.619 91.203 95.846 156.493 149.278 194.074 43.054 30.295 73.575 31.831 79.253 31.831h240c42.537 0 82.089-13.809 117.575-41.052 32.953-25.34 61.46-61.824 84.752-108.442 45.368-90.752 69.355-215.997 69.355-362.189V315.31c-0.005-57.17-46.515-103.68-103.685-103.68zM482.93 515.041a31.713 31.713 0 0 0 31.677-31.682V123.36c0-22.23 18.089-40.32 40.325-40.32s40.32 18.09 40.32 40.32v360.003c0 17.47 14.208 31.682 31.683 31.682s31.682-14.213 31.682-31.682V171.36c0-22.23 18.084-40.32 40.32-40.32s40.32 18.09 40.32 40.32v360.003c0 17.47 14.208 31.682 31.683 31.682s31.682-14.208 31.682-31.682V315.36c0-22.23 18.084-40.32 40.32-40.32s40.32 18.09 40.32 40.32l-0.05 168.003c0 136.422-21.658 251.848-62.644 333.814-26.122 52.234-72.602 114.503-145.674 114.503h-239.16c-2.197-0.256-20.65-2.96-48.333-23.67-29.758-22.282-75.49-69.375-124.36-167.203-88.284-176.579-121.467-244.168-127.222-255.929l-0.64-1.566-0.24-0.236c-9.554-20.552-2.269-46.863 16.281-57.979a34.734 34.734 0 0 1 26.9-3.732c9.939 2.713 18.269 9.436 23.46 18.928l75.213 130.325c14.53 26.552 31.345 40.008 49.977 40.008 3.256 0 6.579-0.425 9.866-1.26 22.538-5.719 33.966-26.91 33.966-62.981V171.36c0-22.23 18.089-40.32 40.32-40.32s40.32 18.09 40.32 40.32v312.003a31.724 31.724 0 0 0 31.688 31.677z" p-id="7338"></path></svg>
)

const HandIcon = props => <Icon component={handSvg} {...props} />;

interface positionState {
  layerX: number,
  layerY: number
}

export default () => {
  const [tool, setTool] = useState<string>('auto');
  const [value, setValue] = useState<string>(INITIAL_VALUE);
  const [visible, setVisible] = useState<boolean>(false);
  const [positionDate, setPosition] = useState<positionState>({layerX: 0, layerY: 0});

  const SVGPanZoomProps = {
    className: styles.svgbgwarp,
    tool,
    detectAutoPan: false,
    background: '#eaeaea',
    SVGBackground: '#eaeaea',
    toolbarProps: {
      position: 'none'
    },
    miniatureProps: {
      position: 'none'
    },
    value,
    onChangeTool: (tool: string) => setTool(tool),
    onChangeValue: (value: any) => setValue(value),
    onClick: () => {

    }
  }

  const toolBarChangeHandle = (e: RadioChangeEvent) => {
    const currVal = e.target.value;
    switch (currVal) {
      case 'a':
        setTool(TOOL_NONE);
        break;
      case 'b':
        setTool(TOOL_PAN);
        break;
      case 'c':
        setTool(TOOL_ZOOM_IN);
        break;
      case 'd':
        setTool(TOOL_ZOOM_OUT);
        break;
    }
  }

  const restHandle = () => setValue(fitToViewer(value));

  const handleUpdateDrawerVisible = (flag?: boolean, e?: any) => {
    setVisible(!!flag);
    console.log(e)
    if(e){
      setPosition({
        layerX: e.layerX,
        layerY: e.layerY
      })
    }
  }

  return (
    <PageHeaderWrapper
      pageHeaderRender={(props) => {
        return <PageHeader title={props.title} breadcrumb={props.breadcrumb}/>
      }}
      className={styles.main}
    >

      <div className={styles.inner} >
        <div style={{width: "100%", height: "100%", overflow: 'hidden'}}>
          <AutoSizer>
            {(({ width, height }: {width: number, height: number}) => width === 0 || height === 0 ? null :
                (
                  <ReactSvgPanZoomLoader
                    src="http://113.125.65.236:8082/2.svg"
                    proxy={
                      <>
                        <SvgLoaderSelectElement
                          selector="#maturetree"
                          fill={"#f50"}
                          text={'我是目标节点'}
                          title={'我是目标节点'}
                          onClick={(e: any) => handleUpdateDrawerVisible(true, e)}
                        />
                      </>
                    }
                    render= {(content: React.ReactDOM) => {
                      console.log(content)
                      return (
                        <ReactSVGPanZoom
                          width={width}
                          height={height}
                          {...SVGPanZoomProps}
                        >
                          <svg width={width} height={height} >
                            {content}
                            <g>
                              <text y={positionDate.layerY} x={positionDate.layerX} style={{fontSize: 14}}>

                                1212（德克士）</text>
                            </g>

                          </svg>
                        </ReactSVGPanZoom>
                      )
                    }}
                  />
                )
            )}
          </AutoSizer>
          <SetDrawer
            title='绑定点位'
            visible={visible}
            handleUpdateDrawerVisible={handleUpdateDrawerVisible}
          />
        </div>
        <div className={styles.svgToolBar}>
          <Radio.Group
            size='large'
            onChange={toolBarChangeHandle}
          >
            <Radio.Button value="a">
              <Tooltip title={'选取'}>
                <ArrowUpOutlined rotate={-45} style={{fontSize: 20, color: '#555'}}/>
              </Tooltip>
            </Radio.Button>
            <Radio.Button value="b" >
              <HandIcon style={{fontSize: 20}}/>
            </Radio.Button>
            <Radio.Button value="c">
              <Tooltip title={'放大'}>
                <ZoomInOutlined style={{fontSize: 20, color: '#555'}}/>
              </Tooltip>
            </Radio.Button>
            <Radio.Button value="d">
              <Tooltip title={'缩小'}>
                <ZoomOutOutlined style={{fontSize: 20, color: '#555'}}/>
              </Tooltip>
            </Radio.Button>
          </Radio.Group>
          <Tooltip title={'恢复'}>
            <Button
              size='large'
              onClick={restHandle}
              style={{marginLeft: -1}}
            >
              <FullscreenOutlined style={{fontSize: 20, color: '#555'}}/>
            </Button>
          </Tooltip>
        </div>

      </div>

    </PageHeaderWrapper>
  );
};
