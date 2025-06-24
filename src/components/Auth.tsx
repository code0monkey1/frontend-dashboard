import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuthStore } from "../store"
import {  Layout,Menu,theme,Flex, Badge, Avatar, Dropdown, Space } from "antd"
import Icon, { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import Logo from './icons/Logo';
import Pizza from "./icons/PIzza";
import Home from "./icons/Home";
import CategoryIcon from "./icons/CategoryIcon";
import { useLogout } from "../hooks/useLogout";
import { ROLES } from "../types";
import UserIcon from "./icons/UserIcon";

const { Header, Content, Sider } = Layout;

function Auth() {

    // if user is not authorized direct the user to /auth path
    const {user} = useAuthStore()
    const [collapsed, setCollapsed] = useState(false);
    const {logout} = useLogout()
    
    const {token: { colorBgContainer,colorPrimary }} = theme.useToken();

    if(user===null){
        // redirect to auth route
        return <Navigate to={"/auth/login"} replace={true} /> // replace true ensures that it does not go back to the previous route 
    }

    const menuItems =[
      {
        key:'/',
        label:<NavLink to={'/'}>Home</NavLink>,
        icon:<Icon component={Home} />
      },
       {
        key:'/orders',
        label:<NavLink to={'/categories'}>Orders</NavLink>,
        icon:<Icon component={Pizza} />
      },
        {
        key:'/categories',
        label:<NavLink to={'/categories'}>Categories</NavLink>,
        icon:<Icon component={CategoryIcon} />
      },
         {
        key:'/users',
        label:<NavLink to={'/users'}>Users</NavLink>,
        icon:<Icon component={UserIcon} />
      },

    ]

    const items = [

          {
            key: 'logout',
            label: 'Logout',
            onClick:()=>logout()
            
          },
      ];

  return (
    <>
    <Layout style={{width:"100vw",height:"100vh"}}>
       
        <Sider  
        theme="light"
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} width={200} 
        trigger={
                        <div style={{ 
                            color: colorPrimary,
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                            background:colorBgContainer
                        }}>
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                    }
        >
          <div className="demo-logo"  >
            <Logo/>
          </div>
          
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']} 
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems} 
          />
        </Sider>
        <Layout>
          <Header style={{background:colorBgContainer,padding:"0 20px"}} >
             <Flex  justify="space-between" style={{width:"100%",padding:"0 15px"}}>
            
                <Flex>

                <Badge size="small" text={ user.role===ROLES.ADMIN? "Admin":`${user.tenant?.name} , ${user.tenant?.address}`} showZero color="#52c41a" />

                </Flex>
           
           <Space size={20} >
               <Badge  count={5} style={{marginTop:20}}>
                  <BellOutlined style={{fontSize:25,marginTop:25}}/>
                </Badge>
              <Dropdown menu={{ items }} >
               <Avatar style={{marginBottom:10,background:colorPrimary}} size={47} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Dropdown>
           </Space>
          </Flex>
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280
            }}
          >
            
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
     
    </>
  )
}

export default Auth