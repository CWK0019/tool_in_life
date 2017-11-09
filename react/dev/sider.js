import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

export default class Sider extends React.Component{
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={this.props.keys}
                mode="horizontal"
            >
                <Menu.Item key="1"><Link to="/">外卖计算器</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/workCount">下班倒计时</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/selectHard">选择困难症</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/award">进阶治疗选择困难症</Link></Menu.Item>
            </Menu>
        );
    }
}
