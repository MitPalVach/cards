import React from 'react';
import s from './ActionsCardColumn.module.css'
import {Button} from "antd";


type PropsType = {
    _id: string | undefined
    toDeleteCard: (_id: string) => void
    toUpdateCard: (_id: string) => void
}
const ActionsCardColumn = React.memo((props: PropsType) => {
    return (
        <div className={s.buttons}>
            <Button
                onClick={() => {
                    props._id && props.toUpdateCard(props._id)
                }}>Edit</Button>
            <Button danger type={'primary'}
                    onClick={() => {
                        props._id && props.toDeleteCard(props._id)
                    }}>Delete</Button>
        </div>
    );
})

export default ActionsCardColumn;

