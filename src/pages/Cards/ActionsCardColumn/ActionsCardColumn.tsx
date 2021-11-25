import React from 'react';
import s from './ActionsCardColumn.module.css'
import {Button} from "antd";


type PropsType = {
    toDeleteCard: (_id: string) => void
    _id: string
}
const ActionsCardColumn = React.memo((props: PropsType) => {
    const onDelete = () => props.toDeleteCard(props._id)

    return (
        <div className={s.buttons}>
            <Button>Edit</Button>
            <Button danger type={'primary'} onClick={onDelete}>Delete</Button>
        </div>
    );
})

export default ActionsCardColumn;