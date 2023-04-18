
import './App.scss';
import { Row, Col } from 'antd';
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <div className='MenuPage'>
        <Row>
          <Col span={18} push={4}>
            <PageContent />
          </Col>
          <Col span={4} pull={18}>
            <SideMenu />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
