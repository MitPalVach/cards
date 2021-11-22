import React from 'react';
import s from './Cards.module.css';
import {Button, Layout, Slider, Table} from "antd";
import {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {useDispatch} from "react-redux";
import {fetchCardsPayload} from "../../store/cards/cardsActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Cards = () => {
    const dispatch = useDispatch()
    const {page, pageCount, cardsPack_id} = useTypedSelector(state => state.cards)

    const columns = [
        {title: 'Name', dataIndex: 'name', sorter: true, width: '20%'},
        {title: 'Cards count', dataIndex: 'cardsCount', sorter: true, width: '20%'},
        {title: 'Updated', dataIndex: 'updated', sorter: true, width: '20%'},
    ]

    const toFetchCards = () => (dispatch(fetchCardsPayload(cardsPack_id)))

    const minNumberOfCards = 0
    const maxNumberOfCards = 200
    const pagination = {
        current: page,
        pageSize: pageCount,
    }
    return (

        <Layout style={{height: '100vh'}}>
            <Sider theme={'light'} style={{padding: '10px 20px'}} width={350}>
                <h3>Show cards cards</h3>
                <div>
                    <Button>My</Button>
                    <Button>All</Button>
                </div>
                <div>
                    <h3>Number of cards</h3>
                    <Slider range tooltipVisible={true} min={minNumberOfCards} max={maxNumberOfCards}
                            defaultValue={[0, 200]}/>
                </div>
            </Sider>
            <Content>
                <div className={s.cardsContainer}>
                    <Table
                        columns={columns}
                        loading={false}
                        // dataSource={packsData}
                        pagination={pagination}
                        // onChange={}
                    />
                    <button onClick={toFetchCards}>test</button>
                </div>
            </Content>
        </Layout>
    );
};

export default Cards;

