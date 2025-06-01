import { Button, Card, Checkbox, Input, Layout, Space,Form, Typography, Alert } from "antd"
import { LockFilled ,LockOutlined, UserOutlined} from '@ant-design/icons';
import Logo from "../../components/icons/Logo";
import { useMutation } from "@tanstack/react-query";
import type { LoginCreadentials } from "../../types";
import { loginUser } from "../../http/api";
import { useEffect, useState } from "react";


function Login() {

  const [hasError,setHasError] = useState(false)

    // Mutations
  const {mutate,isError,isPending,error} = useMutation({
    mutationKey:["login"],
    mutationFn: loginUser,
    onSuccess: (value:unknown) => {
      // Invalidate and refetch
      console.log("The value obtained from submitting",JSON.stringify(value))
    },
  })

  useEffect(()=>{
      if(isError){
           setHasError(true)
           setTimeout(()=>{
            setHasError(false)
           },5000)
      }
  },[mutate,isError])

  return (
   <>
    <Layout style={{height:"100vh" ,width:"100vw" ,display:"grid",placeItems:"center"}}>

      <Space size='small' direction="vertical">
        <Layout.Content style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Logo/>
        </Layout.Content>
      <Card title={<Space style={{width:"100%",fontSize:16 ,justifyContent:"center"}}>
        <LockFilled/> Sign In</Space>
        }  
       variant="borderless" style={{ width: 300 }}>

        <Form
              name="basic"
              style={{ width: '100%' }}
              initialValues={{ remember: true }}
              onFinish={(formValues:LoginCreadentials) => mutate(formValues)}
              autoComplete="off"
            >
               {hasError && <Alert style={{marginBottom:"0.5rem"}} type="error" message={error?.message}/> }
        <Form.Item
          name="email"
        
          rules={[{ required: true, message: 'Please input your username!' },  
            { type:"email" , message:'The username should be an email'}]}
        >
          <Input placeholder="User Name" prefix={<UserOutlined/>} />
        </Form.Item>

        <Form.Item
        
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' }
          ]}
        >
          <Input.Password prefix={<LockOutlined/>} placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          
          <Checkbox>Remember me</Checkbox>
       
        </Form.Item>

         <Typography.Link href="/"  > Forgot Password </Typography.Link>
      
          <Form.Item style={{marginTop: 24, width: "100%"}}>
    
            <Button loading={isPending} type="primary" htmlType="submit" size="large" style={{width: "100%"}}>
              Submit
            </Button>
          </Form.Item>
    
      </Form>
    
        </Card>
        </Space>
      </Layout>
   </>
 
  )
}

export default Login