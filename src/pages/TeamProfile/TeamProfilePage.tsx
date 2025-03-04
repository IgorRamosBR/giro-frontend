import { Button, Divider, Flex, Tabs, Typography } from "antd"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import MatchesList from "./components/MatchesList/MatchesList"
import { useNavigate } from "react-router-dom"

const TabItems = [
    {
        label: `INFORMAÇÕES`,
        key: '1',
        children: <MatchesList />,
    },
    {
        label: `ESTATÍSTICAS`,
        key: '2',
        children: `Content of Tab Pane ${1}`,
    }
]
const TeamProfilePage = () => {
    const navigate = useNavigate()

    return (
        <PageLayout>
            <Tabs
                    defaultActiveKey="1"
                    centered
                    items={TabItems}
                    style={{width: '100%', marginBottom: '30px'}}
                />
            {/* <Flex style={{ padding: '0 15px' }} justify={"center"} align={"center"} vertical>
                <img
                    src={'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b8/AFC_Ajax_Amsterdam.svg/1200px-AFC_Ajax_Amsterdam.svg.png'}
                    style={{ width: 150, height: 150, marginBottom: 0 }}
                />
                <Typography.Title level={2} style={{ marginTop: 0 }}>Ajax</Typography.Title>
                <Divider style={{marginBottom: 0}} />
                
                
                <Button type="primary" block onClick={() => navigate('/when')}>Marcar jogo</Button>
            </Flex> */}
        </PageLayout>
    )
}
export default TeamProfilePage;