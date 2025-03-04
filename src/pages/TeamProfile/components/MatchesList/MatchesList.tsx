import React from 'react';
import { Avatar, Flex } from 'antd';
import './MatchesList.css';
import { Image, List } from 'antd-mobile';


const data = [
    {
        scoreboard: '3-1',
        result: 'WON',
        team: 'Veteranos',
        field: 'Corcundinha'
    },
    {
        scoreboard: '2-1',
        result: 'LOST',
        team: 'Veteranos',
        field: 'São Basílio'
    },
    {
        scoreboard: '1-1',
        result: 'DRAW',
        team: 'Fortaleza',
        field: 'Serrinha'
    },
];

interface ListItem {
    color: string
    avatar: string
    scoreboard: string
    field: string
}
const getListItems = (): ListItem[] => {
    return data.map(i => ({
        color: i.result === 'WON' ? '#52C41A' : i.result === 'LOST' ? '#FF4D4F' : '#1890FF',
        avatar: i.result === 'WON' ? 'V' : i.result === 'LOST' ? 'D' : 'E',
        scoreboard: `${i.result === 'WON' ? 'Venceu' : i.result === 'LOST' ? 'Perdeu' : 'Empatou'} ${i.scoreboard} x ${i.team}`,
        field: i.field
    }))
}

const MatchesList: React.FC = () => (
    <div style={{ margin: '0 30px' }}>
        <List >
            {getListItems().map((item, i) => (
                <List.Item
                    key={i}
                    prefix={
                        <Avatar style={{ backgroundColor: item.color}}> {item.avatar} </Avatar>
                    }
                    description={item.field}
                >
                    {item.scoreboard}
                </List.Item>
            ))}
        </List>
        {/* <List
        itemLayout="horizontal"
        dataSource={getListItems()}
        renderItem={(item, index) => (
            <List.Item>
            <List.Item.Meta
                className="custom-meta"
                avatar={<Avatar style={{ backgroundColor: item.color, verticalAlign: 'middle' }}> {item.avatar} </Avatar>}
                title={item.scoreboard}
                description={item.field}
            />
            </List.Item>
        )}
        /> */}
    </div>
);

export default MatchesList;