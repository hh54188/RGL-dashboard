import React from "react";
import moment from "moment";
moment.locale("zh-cn");
import { Button, DatePicker, Icon, Card } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
import PageHeader from "ant-design-pro/lib/PageHeader";
import "ant-design-pro/dist/ant-design-pro.css";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);

import ReportCard from "../ReportCard";

const { Group: ButtonGroup } = Button;
const { RangePicker } = DatePicker;

import "./index.less";

export default class MyFirstGrid extends React.Component {
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 3, h: 2 },
      { i: "b", x: 3, y: 0, w: 6, h: 2 },
      { i: "c", x: 9, y: 0, w: 3, h: 3 }
    ];
    return (
      <div>
        <PageHeader
          title="这是一个标题"
          content={
            <span>
              <Icon type="user" style={{ marginRight: 5 }} />liguangyi
            </span>
          }
          action={
            <ButtonGroup>
              <Button type="primary">编辑卡片</Button>
              <Button>编辑基本信息</Button>
              <Button>添加报表</Button>
            </ButtonGroup>
          }
          extraContent={
            <RangePicker
              locale={locale}
              onOk={() => {
                console.log("onOk");
              }}
            />
          }
        />
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={60}
          width={1200}
          onLayoutChange={currentLayout => {
            console.log("LAYOUT CHANGE--->", currentLayout);
          }}
          onResizeStop={(currentLayout, curTargetLayout) => {
            console.log(curTargetLayout);
          }}
        >
          <div key="a">
            <ReportCard />
          </div>
          <div key="b">
            <ReportCard />
          </div>
          <div key="c">
            <ReportCard />
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}
