import React from 'react';
import { Button, Form, Input, InputNumber, FloatButton, Dropdown} from 'antd';
import styles from "../styles/UserProfile.module.css";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log(values);
};
const UserProfile = () => (
  <div className={styles.contener}>
   <FloatButton onClick={() => console.log('onClick')} />;
   <div className={styles.btnUser}>
   <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      menu={{
        items,
      }}
      placement="topLeft"
      arrow
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="top"
      arrow
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="topRight"
      arrow
    >
      <Button>topRight</Button>
    </Dropdown>
  </>


   </div>

  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
   
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
);

export default UserProfile;