import React from 'react'
import { Menu, Row, Col} from 'antd'
import PLogo from "../Assets/pLogo.png"
import Logo from "../Assets/LogoScreen.png"

const { SubMenu } = Menu;




const SideMenu = () => {
  return (
    <div className='SideMenu'>
      <div className="Logo">
        <img src={Logo} alt="" />
        <h1>Cake<span>Dashboard</span></h1>

        <span className='unique'><i class="fa-solid fa-angle-left"></i></span>

      </div>

      <div className="searchbar">
        <input type="text" placeholder='Search' />
      </div>
      <h2 style={{ color: "#8f8f8f", marginLeft: "20px" }}>Menu</h2>
      <Menu
        className='menustyle'
        style={{ fontSize: "14px", backgroundColor: "#1B1C1E" }}

        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          className='SubmenuStyle'
          title={
            <span>
              <h4>Overview</h4>
            </span>
          }
        >
          <Menu.Item key="1" style={{ margin: "20px 0px" }}>Transactions</Menu.Item>
          <Menu.Item key="2" style={{ margin: "20px 0px" }}>Scheduled Alerts</Menu.Item>
          <Menu.Item key="2" style={{ margin: "20px 0px" }}>Chashstack</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          className='SubmenuStyle'
          title={
            <span>
              <h4>Finances</h4>
            </span>
          }
        >
          <Menu.Item key="3">Option 5</Menu.Item>
          <Menu.Item key="4">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu
          className='SubmenuStyle'
          key="sub3"
          title={
            <span>
              <span>Contracts</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          className='SubmenuStyle'
          title={
            <span>
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="7">Option 5</Menu.Item>
          <Menu.Item key="8">Option 6</Menu.Item>
        </SubMenu>

      </Menu>

      <div className="profile">
        <h2>Profile</h2>
        <Row className="profiledetail">
          <Col span={8}><img src={PLogo} alt="" /></Col>
          <Col span={12}>          <div className="Pnames">
            <h3>AmirBaqian</h3>
            <span>Product Designer</span>
          </div></Col>
        </Row>
        <button><h4>Log Out</h4></button>
      </div>

    </div>
  )
}

export default SideMenu


// theme="dark"
// className='menustyle'
// style={{ fontSize: "15px", backgroundColor: "#1B1C1E" }}