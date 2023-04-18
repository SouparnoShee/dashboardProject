import React from 'react'
import { Row, Col } from 'antd'
import { Table } from 'antd';
import InvoiceData from "../data/data";








const PageContent = () => {
  return (

    <div className='pageContent'>
      <Row className='HeaderIntro'>
        <Col span={12} >
          <h1>Welcome,Josiah 🎉</h1> 
          <span>Here's whats's happening in your Cake account Today</span>
        </Col>
        <Col span={12}><div className='RightHead'> 
        <button>Search a transaction <span>Enter</span></button></div>
        </Col>
      </Row>
      <section className='AllPageContent'>
      <Row className='charts'>
        <Col span={16}><h1>BarChart</h1></Col>
        <Col span={8}><h1>PieChart</h1></Col>
      </Row>
      <Row className='Table'>
        <Col span={24}>
          <h1>Revenue</h1>
          <Table
            className='TableContents'
            columns={[
              {
                title: "Date",
                dataIndex: "date",

              },
              {
                title: "ID",
                dataIndex: "ID",
              },
              {
                title: "Value",
                dataIndex: "value",
              },
              {
                title: "Status",
                dataIndex: "status",
              },
              {
                title: "Description",
                dataIndex: "description",
              },
            ]}
            dataSource={InvoiceData}
          >

          </Table>
        </Col>
      </Row>
      </section>
    </div>
  )
}

export default PageContent
