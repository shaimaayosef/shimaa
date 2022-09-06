import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import {
    mapStateToProps as sourceMapStateToProps,
    mapDispatchToProps as sourceMapDispatchToProps,
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
} from 'SourceComponent/Header/Header.container';

//TODO: implement DEFAULT_HEADER_STATE
export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

export const mapStateToProps = state => ({
    ...sourceMapStateToProps(state),
    // TODO extend mapStateToProps
});

export const mapDispatchToProps = dispatch => ({
    ...sourceMapDispatchToProps(dispatch),
    // TODO extend mapDispatchToProps
});

export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
