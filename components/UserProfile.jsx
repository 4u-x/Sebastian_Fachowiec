import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import styles from '../styles/UserProfile.module.css';
import Link from 'next/link';

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
  <div className={styles.container}>
   
    
    <div className='buttons'>
    <header>
            <nav>
                <ul className="d-flex list-unstyled">
                    <li>
                        <Link href="/">
                        <button className="btn btn-info rounded-pill px-3" type="button">🛕Home</button>

                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/SignUp">
                            <><button className="btn btn-info rounded-pill px-3" type="button">🔒Login</button></>
                        </Link>
                    </li>
                <li>
                        <Link href="/posts/search">
                            <><button className="btn btn-info rounded-pill px-3" type="button">🔎Search</button></>
                        </Link>
                    </li>
                

                   
                </ul>
            </nav>
           
        </header>
      
    </div>
    
    <div className={styles.contener}>
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name={['user', 'imie']}
        label="Imie"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'nazwisko']}
        label="Nazwisko"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'usluga']}
        label="Usługa"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'miejscowosc']}
        label="Miejscowość"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'telefon']}
        label="Numer Telefonu"
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[0-9]+$/),
            message: 'Proszę wprowadzić poprawny numer telefonu',
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
  </div>
);

export default UserProfile;
