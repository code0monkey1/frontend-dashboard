import { RightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Space, Table } from "antd"
import { Link, Navigate } from "react-router-dom";
import { getUsers } from "../http/api";
import { ROLES, type User } from "../types";
import { useAuthStore } from "../store";

function Users() {

    // fetch users
           const {user} = useAuthStore()

           const {data:users,isLoading,isError,error} = useQuery({
                queryKey:['users'],
                queryFn:getUsers,
            
              })

           if(user?.role!==ROLES.ADMIN){
              // redirect
              return <Navigate to={"/"} replace={true}/>
           }
        
        
        const columns = [
            {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',   // single column 
            dataIndex: 'name',
            key: 'name',
            render:(_:string,record:User)=>{ // the `record` variable gets the entire user data row
                    return(
                        <div>
                            {record.firstName} {record.lastName}
                        </div>
                    )
            }
        },
            {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
            {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        ];

                   
            return (
                <>
                <Space direction="vertical" size={"large"} style={{width:"100%"}}>
                    <Breadcrumb
                    separator={<RightOutlined/>}
                        items={[
                        
                        {
                            title: <Link to={"/"}>Home</Link>,
                        },
                        {
                            title: <Link to={"/users"}>Users</Link>,
                        },
                        
                        ]}
                    />

                    {isLoading && <div>Loading Users...</div>}
                    {isError && <div>{`Error : ${error.message}`}</div>}
                 
                    <Table dataSource={users} columns={columns} />
                 </Space>
                    
            </>
            );
}


export default Users