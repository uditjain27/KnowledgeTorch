import { Fragment } from 'react';
import NavBar from '../../NavBar/NavBar';
import classes from './DashBoard.module.css';



import Page from './../../components/components/Page';
import { IconWidget, NumberWidget } from './../../components/components/Widget';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardDeck,
    CardGroup,
    CardHeader,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
} from 'reactstrap';
import { getColor } from './../../components/utils/colors';


/* import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
    avatarsData,
    chartjs,
    productsData,
    supportTicketsData,
    todosData,
    userProgressTableData,
} from 'demos/dashboardPage';
import { Bar, Line } from 'react-chartjs-2';
import {
    MdBubbleChart,
    MdInsertChart,
    MdPersonPin,
    MdPieChart,
    MdRateReview,
    MdShare,
    MdShowChart,
    MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar'; */

const today = new Date();
const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
);




function DashBoard(props) {
    return (
        <Fragment>
            <Page
                className="DashboardPage"
                title="Dashboard"
                breadcrumbs={[{ name: 'Dashboard', active: true }]}>
                <Row>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                            title="Total Profit"
                            subtitle="This month"
                            number="9.8k"
                            color="secondary"
                            progress={{
                                value: 75,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                            title="Monthly Visitors"
                            subtitle="This month"
                            number="5,400"
                            color="secondary"
                            progress={{
                                value: 45,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                            title="New Users"
                            subtitle="This month"
                            number="3,400"
                            color="secondary"
                            progress={{
                                value: 90,
                                label: 'Last month',
                            }}
                        />
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <NumberWidget
                            title="Bounce Rate"
                            subtitle="This month"
                            number="38%"
                            color="secondary"
                            progress={{
                                value: 60,
                                label: 'Last month',
                            }}
                        />
                    </Col>
                </Row>
            </Page>


        </Fragment>
    );
}

export default DashBoard;