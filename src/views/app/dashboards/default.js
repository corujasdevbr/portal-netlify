import React, { Component, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { Row } from 'reactstrap'
import { Colxx, Separator } from '../../../components/common/CustomBootstrap'
import Breadcrumb from '../../../containers/navs/Breadcrumb'
import RightPanelData from '../../../containers/dashboards/RightPanelData'

import { ReactTableAdvancedCard } from '../../../containers/ui/ReactTableCards'
import { ReactTableAdvancedCardForDashboard } from '../../../containers/ui/ReactTableCardsForDashboard'

import { connect } from 'react-redux'
import { getAllotedProjects, getActiveProjects } from '../../../redux/actions'

class DefaultDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topRightPanel: '',
            bottomRightPanel: '',
        }
    }

    componentDidMount() {
        this.props.getActiveProjects()
        this.props.getAllotedProjects()
    }
    render() {
        const { messages } = this.props.intl
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <Breadcrumb
                            heading="menu.dashboards"
                            match={this.props.match}
                        />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row className="mb-5">
                    <Colxx lg="12" xl="8" className="mb-4">
                        <ReactTableAdvancedCardForDashboard
                            allotedProjects={this.props.allotedProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelData
                            rightPanelProject={this.props.topRightPanelProject}
                            listData={this.props.rowInfo}
                        />
                    </Colxx>
                </Row>
                <Row className="mb-5">
                    <Colxx lg="12" xl="8" className="mb-4">
                        <ReactTableAdvancedCard
                            activeProjects={this.props.activeProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelData
                            rightPanelProject={
                                this.props.bottomRightPanelProject
                            }
                            listData={this.props.rowInfo}
                        />
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ projects }) => {
    const {
        allotedProjects,
        activeProjects,
        topRightPanelProject,
        bottomRightPanelProject,
    } = projects
    return {
        allotedProjects,
        activeProjects,
        topRightPanelProject,
        bottomRightPanelProject,
    }
}

export default injectIntl(
    connect(
        mapStateToProps,
        {
            getAllotedProjects,
            getActiveProjects,
        }
    )(DefaultDashboard)
)
