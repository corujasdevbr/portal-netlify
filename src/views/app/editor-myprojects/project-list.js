import React, { Component, Fragment } from 'react'
import { injectIntl } from 'react-intl'
import { Row } from 'reactstrap'
import { Colxx, Separator } from '../../../components/common/CustomBootstrap'
import Breadcrumb from '../../../containers/navs/Breadcrumb'

import RightPanelDataForProjectEditor from '../../../containers/dashboards/RightPanelDataForProjectEditor'

import { ReactTableAdvancedCardForProject } from '../../../containers/ui/ReactTableForProject'

import { connect } from 'react-redux'
import { getActiveProjects } from '../../../redux/actions'

class EditorProjectListPages extends Component {
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
                            heading="menu.myprojects"
                            match={this.props.match}
                        />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row className="mb-5">
                    <Colxx lg="12" xl="8" className="mb-4">
                        <ReactTableAdvancedCardForProject
                            projects={this.props.activeProjects}
                        />
                    </Colxx>
                    <Colxx lg="12" xl="4" className="mb-4">
                        <RightPanelDataForProjectEditor
                            rightPanelProject={
                                this.props.topRightPanelProjectMyProjects
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
    const { activeProjects, topRightPanelProjectMyProjects } = projects
    return {
        activeProjects,
        topRightPanelProjectMyProjects,
    }
}

export default injectIntl(
    connect(
        mapStateToProps,
        {
            getActiveProjects,
        }
    )(EditorProjectListPages)
)
