import { useAuthStore } from "../store"
import {  Button, Card, Col, List, Row, Skeleton, Statistic, Tag, Typography } from "antd"
import { BarChartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Title, Text } = Typography;

function Home() {
  
  const {user} = useAuthStore()
  const list = [
    {
        OrderSummary: 'Peperoni, Margarita ...',
        address: 'Bandra, Mumbai',
        amount: 1200,
        status: 'preparing',
        loading: false,
    },
    {
        OrderSummary: 'Paneer, Chicken BBQ ...',
        address: 'Balurghat, West bengal',
        amount: 2000,
        status: 'on the way',
        loading: false,
    },
    {
        OrderSummary: 'Paneer, Chicken BBQ ...',
        address: 'Balurghat, West bengal',
        amount: 2000,
        status: 'on the way',
        loading: false,
    },
    {
        OrderSummary: 'Paneer, Chicken BBQ ...',
        address: 'Balurghat, West bengal',
        amount: 2000,
        status: 'on the way',
        loading: false,
    },
    {
        OrderSummary: 'Paneer, Chicken BBQ ...',
        address: 'Balurghat, West bengal',
        amount: 2000,
        status: 'on the way',
        loading: false,
    },
    {
        OrderSummary: 'Paneer, Chicken BBQ ...',
        address: 'Balurghat, West bengal',
        amount: 2000,
        status: 'on the way',
        loading: false,
    },
]
  return (
    <>
    <Title level={4} > Welcome {user?.firstName} 😊 </Title>
    <Row className="mt-4" gutter={16}>
        <Col span={12} >
         <Row gutter={[16,16]}>
            <Col span={12}>
                <Card >
                   <Statistic title="Total orders" value={52} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                   <Statistic
                                    title="Total sale"
                                    value={70000}
                                    precision={2}
                                    prefix="₹"
                                />
                </Card>
            </Col>
            <Col span={24}>
              <Card 
                title={
                  <span>
                    <BarChartOutlined style={{ marginRight: 8 }} />
                    Sales
                  </span>
                } 
                variant="borderless"
              >
                Card content
              </Card>
            </Col>
         </Row>
        </Col>
        <Col span={12} >

        <Card 
            title={
                  <span>
                      <ShoppingCartOutlined style={{ marginRight: 8 }} />
                    Recent Orders
                  </span>
                } 
        >
             <List
                            className="demo-loadmore-list"
                            loading={false}
                            itemLayout="horizontal"
                            loadMore={true}
                            dataSource={list}
                            renderItem={(item) => (
                                <List.Item>
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            title={
                                                <a href="https://ant.design">{item.OrderSummary}</a>
                                            }
                                            description={item.address}
                                        />
                                        <Row style={{ flex: 1 }} justify="space-between">
                                            <Col>
                                                <Text strong>₹{item.amount}</Text>
                                            </Col>
                                            <Col>
                                                <Tag color="volcano">{item.status}</Tag>
                                            </Col>
                                        </Row>
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                        <div style={{ marginTop: 20 }}>
                            <Button type="link">
                                <Link to="/orders">See all orders</Link>
                            </Button>
                        </div>
    </Card>
        </Col>
    </Row>
    </>
  )
}

export default Home