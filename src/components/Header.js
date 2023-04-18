import React from 'react'
import { Row, Col } from 'antd'

const Header = () => {
    return (
        <div className='Head'>
            <Row>
                <Col span={18} push={4} className='HeadTitle'>
                    <div>
                        <h1>🎉Welcome , Josiah</h1>
                        <span>Here's, whats happening in your cake account today</span>
                    </div>
                    <div>
                    <button>Search a transaction <span>Enter</span></button>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-headphones"></i>
                    </div>
                </Col>

                <Col span={4} pull={18} className='Logo'>
                    <h1>CAKE<span>dashboard</span></h1>
                    <span className='unique'><i class="fa-solid fa-angle-left"></i></span>

                </Col>
            </Row>
        </div>
    )
}

export default Header
