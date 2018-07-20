import React from "react";
import { Card, Icon, Tooltip, Menu, Dropdown } from "antd";

import "./index.less";

const settingMenu = (
  <Menu>
    <Menu.Item key="1">导出</Menu.Item>
    <Menu.Item key="2">隐藏平均值</Menu.Item>
    <Menu.Item key="3">显示极值</Menu.Item>
    <Menu.Item key="4">不切割纵轴范围</Menu.Item>
    <Menu.Item key="5">隐藏全局事件</Menu.Item>
    <Menu.Item key="6">隐藏相关事件</Menu.Item>
  </Menu>
);

const chartMenu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="line-chart" />折线图
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="table" />表格
    </Menu.Item>
  </Menu>
);

export default props => {
  return (
    <Card
      className="ReportCard"
      title="测试报表1"
      style={{ height: "100%" }}
      extra={
        <div>
          <Tooltip title="">
            <Dropdown overlay={chartMenu}>
              <Icon type="line-chart" className="ReportCard__ToolIcon" />
            </Dropdown>
          </Tooltip>
          <Tooltip title="编辑">
            <Icon type="edit" className="ReportCard__ToolIcon" />
          </Tooltip>
          <Tooltip title="删除">
            <Icon type="delete" className="ReportCard__ToolIcon" />
          </Tooltip>
          <Dropdown overlay={settingMenu}>
            <Icon type="setting" className="ReportCard__ToolIcon" />
          </Dropdown>
          <Tooltip title="最大化">
            <Icon type="arrows-alt" className="ReportCard__ToolIcon" />
          </Tooltip>
        </div>
      }
    >
      <div className="react-resizable-handle" />
    </Card>
  );
};
