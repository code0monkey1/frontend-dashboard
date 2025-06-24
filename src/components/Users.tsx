import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd"
import { Link } from "react-router-dom";

function Users() {
  return (
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
);
}


export default Users