import React, { Component, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { Row } from 'reactstrap'
import { Colxx, Separator } from '../../../components/common/CustomBootstrap'
import Breadcrumb from '../../../containers/navs/Breadcrumb'
import RightPanelData from '../../../containers/dashboards/RightPanelData'
import RightPanelDataFileUpload from '../../../containers/dashboards/RightPanelDataFileUpload'

import { ReactTableAdvancedCard } from '../../../containers/ui/ReactTableCards'
import { ReactTableAdvancedCardForDashboard } from '../../../containers/ui/ReactTableCardsForDashboard'

import { connect } from 'react-redux'
import {
    getAllottedProjects,
    getActiveProjects,
    updateTopRightPanelProject,
    updateBottomRightPanelProject,
} from '../../../redux/actions'

class DefaultDashboard extends Component {
    componentDidMount() {
        this.props.getActiveProjects()
        this.props.getAllottedProjects()
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
                            projects={this.props.allottedProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelData
                            rightPanelProject={this.props.topRightPanelProject}
                            updateTopRightPanelProject={
                                this.props.updateTopRightPanelProject
                            }
                            getActiveProjects={this.props.getActiveProjects}
                            getAllottedProjects={this.props.getAllottedProjects}
                            listData={this.props.rowInfo}
                            leftButtonText="accept"
                            rightButtonText="reject"
                        />
                    </Colxx>
                </Row>
                <Row className="mb-5">
                    <Colxx lg="12" xl="8" className="mb-4">
                        <ReactTableAdvancedCard
                            projects={this.props.activeProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelDataFileUpload
                            rightPanelProject={
                                this.props.bottomRightPanelProject
                            }
                            getActiveProjects={this.props.getActiveProjects}
                            getAllottedProjects={this.props.getAllottedProjects}
                            updateBottomRightPanelProject={
                                this.props.updateBottomRightPanelProject
                            }
                            listData={this.props.rowInfo}
                            leftButtonText="submit"
                            rightButtonText="none"
                        />
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ projects }) => {
    const {
        allottedProjects,
        activeProjects,
        topRightPanelProject,
        bottomRightPanelProject,
    } = projects
    return {
        allottedProjects,
        activeProjects,
        topRightPanelProject,
        bottomRightPanelProject,
    }
}

export default injectIntl(
    connect(
        mapStateToProps,
        {
            getAllottedProjects,
            getActiveProjects,
            updateTopRightPanelProject,
            updateBottomRightPanelProject,
        }
    )(DefaultDashboard)
)
