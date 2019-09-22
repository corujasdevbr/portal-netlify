import React, { Component, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { Row } from 'reactstrap'
import { Colxx, Separator } from '../../../components/common/CustomBootstrap'
import Breadcrumb from '../../../containers/navs/Breadcrumb'
import RightPanelData from '../../../containers/dashboards/RightPanelData'

import { ReactTableAdvancedCard } from '../../../containers/ui/ReactTableCards'
import { ReactTableAdvancedCardForDashboard } from '../../../containers/ui/ReactTableCardsForDashboard'

import { connect } from 'react-redux'
import {
    getActiveProjects,
    updateTopRightPanelProject,
} from '../../../redux/actions'
import RightPanelDataFileUploadEditor from '../../../containers/dashboards/RightPanelDataFileUploadEditor'

class EditorDefaultDashboard extends Component {
    componentDidMount() {
        this.props.getActiveProjects()
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
                            projects={this.props.activeProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelDataFileUploadEditor
                            rightPanelProject={this.props.topRightPanelProject}
                            getActiveProjects={this.props.getActiveProjects}
                            updateRightPanelProject={
                                this.props.updateTopRightPanelProject
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
    const { activeProjects, topRightPanelProject } = projects
    return {
        activeProjects,
        topRightPanelProject,
    }
}

export default injectIntl(
    connect(
        mapStateToProps,
        {
            getActiveProjects,
        }
    )(EditorDefaultDashboard)
)
