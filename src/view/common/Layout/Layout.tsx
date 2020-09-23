import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Typography} from 'antd';
import './Layout.css';

const {Header, Content, Footer} = Layout,
  {Text} = Typography;

// MAIN LAYOUT COMPONENT
const LayoutDefault: FC = (props) => {
  return (
    <Layout className='layout'>
      <Header className='header'>
        <Link to='/' className='brand'>
          HRS
        </Link>
        <section>
          <Link to='/create-venue?step=0'>Add Venue</Link>
        </section>
        <section>
          <Link to='/login'>Log In</Link> |<Link to='/register'>Sign Up</Link>
        </section>
      </Header>
      <Content>{props.children}</Content>
      <Footer className='footer'>
        <Text className='info'>Security and Privacy | Terms of Use</Text>
      </Footer>
    </Layout>
  );
};

export default LayoutDefault;
