import React, {useCallback, useEffect} from 'react';
import s from './Cards.module.css';
import {Button, Layout, notification, Rate, Table} from "antd";
import {Input} from 'antd';
import {Content} from "antd/es/layout/layout";
import {useDispatch} from "react-redux";
import {
    fetchCardError,
    fetchCardsPayload,
    removeCardPayload,
    setCardPayload,
    updateCardPayload,
} from "../../store/cards/cardsActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import ActionsCardColumn from "./ActionsCardColumn/ActionsCardColumn";


// удаляется карта с зависанием

const Cards = React.memo(() => {
        const dispatch = useDispatch()
        const cards = useTypedSelector(state => state.cards.cards)
        const question = useTypedSelector(state => state.cards.question)
        const answer = useTypedSelector(state => state.cards.answer)
        const grade = useTypedSelector(state => state.cards.grade)
        const {id} = useParams()
        // const {_id} = useParams()
        // const _id = useTypedSelector(state => state.cards._id)
        const shots = useTypedSelector(state => state.cards.shots)
        const page = useTypedSelector(state => state.cards.page)
        const pageCount = useTypedSelector(state => state.cards.pageCount)
        const cardsTotalCount = useTypedSelector(state => state.cards.cardsTotalCount)
        const error = useTypedSelector(state => state.cards.error)


        const columns = [
            {title: 'Question', dataIndex: 'question', width: '28%'},
            {title: 'Answer', dataIndex: 'answer', width: '28%'},
            {title: 'Last updated', dataIndex: 'updated', width: '13%'},
            {
                title: 'Grade', dataIndex: 'grade', sorter: true, width: '13%',
                render: () => (<Rate allowHalf defaultValue={2.5}/>)
            },
            {
                title: 'Actions', width: '18%',
                render: (_: any) => {
                    return <ActionsCardColumn _id={_._id}
                                              toDeleteCard={toDeleteCard}
                                              toUpdateCard={toUpdateCard}
                    />
                }
            },
        ]

        const onErrorNotification = () => {
            notification.error({
                message: 'Error',
                description: error,
                placement: 'topLeft',
                top: 55,
            });
        }

        useEffect(() => {
            dispatch(fetchCardsPayload(id!, page, pageCount))
        }, [])

        useEffect(() => {
            if (error) {
                onErrorNotification()
                dispatch(fetchCardError(error))
            }
        }, [error])

        const pagination = {
            current: page,
            pageSize: pageCount,
            total: cardsTotalCount,
        }
        const handleTableChange = useCallback((pagination: any) => {
            dispatch(fetchCardsPayload(pagination.current, pagination.pageSize, pagination.total)) // ?
        }, [])
        const toCreateCard = useCallback(() => {
            dispatch(setCardPayload(id!, question, answer, grade, shots))
        }, [])
        const toDeleteCard = useCallback((_id: string) => {
            dispatch(removeCardPayload(_id, id!))
        }, [])
        const toUpdateCard = useCallback((_id: string) => {
            dispatch(updateCardPayload(_id, question, answer, id!))
        }, [])

        return (
            <Layout style={{height: '100vh'}}>
                <Content>
                    <div className={s.cardsContainer}>
                        <h2>Cards page</h2>
                        <div className={s.cardsContainerHeader}>
                            <Input placeholder={'Search...'}
                                   style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}/>
                            <Button type={'primary'} shape={'round'} onClick={toCreateCard}>Add new card</Button>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={cards}
                            pagination={pagination}
                            loading={false}
                            onChange={handleTableChange}
                            scroll={{y: 650}}
                        />
                    </div>
                </Content>
            </Layout>
        );
    }
)
export default Cards;



